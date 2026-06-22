import { randomBytes } from 'crypto';

import { Configuration } from './configuration';
import { ResponseContext } from './http/http';
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from './apis/DefaultApi';
import { Notification } from './models/Notification';
import { CreateNotificationSuccessResponse } from './models/CreateNotificationSuccessResponse';

export interface CreateNotificationWithRetryOptions {
    /** Retries after the initial attempt. Default 3. */
    maxRetries?: number;
    /** Backoff base in milliseconds when Retry-After is absent. Clamped to
     * [1000, 60000]. Default 1000. */
    baseDelayMs?: number;
}

/**
 * Result of createNotificationWithRetry: the create response plus whether the
 * server replayed a previously completed request (Idempotent-Replayed
 * response header).
 */
export interface CreateNotificationWithRetryResult {
    response: CreateNotificationSuccessResponse;
    wasReplayed: boolean;
}

const RETRYABLE_STATUSES = [429, 503];
const MIN_BASE_DELAY_MS = 1000;
const MAX_BASE_DELAY_MS = 60000;

/**
 * Create a notification with safe, idempotent retries.
 *
 * Ensures `notification.idempotency_key` is set (generating a UUIDv4 when
 * absent) so the server can deduplicate, then calls `createNotification`.
 * Transient failures (HTTP 429, HTTP 503, or transport-level errors) are
 * retried with the SAME idempotency key, honoring the `Retry-After` response
 * header when present and falling back to exponential backoff
 * (`baseDelayMs * 2^attempt`) otherwise. Other errors are thrown immediately
 * (non-2xx statuses surface as the usual `ApiException`).
 */
export async function createNotificationWithRetry(
    configuration: Configuration,
    notification: Notification,
    options?: CreateNotificationWithRetryOptions
): Promise<CreateNotificationWithRetryResult> {
    const maxRetries = options && options.maxRetries !== undefined ? options.maxRetries : 3;
    // Clamp the backoff base so a stray value can neither hammer the API
    // (too small) nor stall the caller for an unbounded stretch (too large).
    const requestedBaseDelayMs =
        options && typeof options.baseDelayMs === 'number' && isFinite(options.baseDelayMs)
            ? options.baseDelayMs
            : MIN_BASE_DELAY_MS;
    const baseDelayMs = Math.min(MAX_BASE_DELAY_MS, Math.max(MIN_BASE_DELAY_MS, requestedBaseDelayMs));

    if (!notification.idempotency_key) {
        notification.idempotency_key = generateUuidV4();
    }

    const requestFactory = new DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApiResponseProcessor();

    let attempt = 0;
    while (true) {
        let response: ResponseContext;
        try {
            const requestContext = await requestFactory.createNotification(notification, configuration);
            response = await configuration.httpApi.send(requestContext).toPromise();
        } catch (e) {
            if (attempt >= maxRetries) {
                throw e;
            }
            await sleep(baseDelayMs * Math.pow(2, attempt));
            attempt++;
            continue;
        }

        if (RETRYABLE_STATUSES.indexOf(response.httpStatusCode) !== -1 && attempt < maxRetries) {
            await sleep(retryDelayMs(response.headers, attempt, baseDelayMs));
            attempt++;
            continue;
        }

        const body = await responseProcessor.createNotification(response);
        return { response: body, wasReplayed: isReplayed(response.headers) };
    }
}

function headerValue(headers: { [key: string]: string }, name: string): string | undefined {
    const target = name.toLowerCase();
    for (const key in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, key) && key.toLowerCase() === target) {
            return headers[key];
        }
    }
    return undefined;
}

function isReplayed(headers: { [key: string]: string }): boolean {
    const value = headerValue(headers, 'idempotent-replayed');
    return value !== undefined && value.trim().toLowerCase() === 'true';
}

function retryDelayMs(headers: { [key: string]: string }, attempt: number, baseDelayMs: number): number {
    const retryAfter = headerValue(headers, 'retry-after');
    if (retryAfter !== undefined && /^\d+$/.test(retryAfter.trim())) {
        return parseInt(retryAfter.trim(), 10) * 1000;
    }
    return baseDelayMs * Math.pow(2, attempt);
}

function generateUuidV4(): string {
    const bytes = randomBytes(16);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = bytes.toString('hex');
    return (
        hex.substring(0, 8) + '-' +
        hex.substring(8, 12) + '-' +
        hex.substring(12, 16) + '-' +
        hex.substring(16, 20) + '-' +
        hex.substring(20)
    );
}

function sleep(ms: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

/**
 * POST /notifications returns 200 in two distinct cases that share the
 * `CreateNotificationSuccessResponse` shape. `MessageSent` is the branch where a
 * notification was actually created — `id` is a non-empty UUID. Prefer the
 * `isMessageSent` guard over inspecting `id` directly.
 */
export type MessageSent = CreateNotificationSuccessResponse;

/**
 * The branch of a POST /notifications 200 where NO notification was created:
 * `id` is the empty string and `errors` carries the reason (for example
 * `["All included players are not subscribed"]`). Prefer the `isMessageNotSent`
 * guard over inspecting `id` directly.
 */
export type MessageNotSent = CreateNotificationSuccessResponse;

/**
 * Narrows a POST /notifications 200 response to the `MessageSent` branch — a
 * notification was created (`id` is a non-empty string).
 */
export function isMessageSent(response: CreateNotificationSuccessResponse): response is MessageSent {
    return typeof response.id === 'string' && response.id.length > 0;
}

/**
 * Narrows a POST /notifications 200 response to the `MessageNotSent` branch — no
 * notification was created (`id` is absent or empty); inspect `errors` for why.
 */
export function isMessageNotSent(response: CreateNotificationSuccessResponse): response is MessageNotSent {
    return !isMessageSent(response);
}
