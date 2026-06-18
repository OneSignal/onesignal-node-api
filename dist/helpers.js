"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotificationWithRetry = void 0;
const crypto_1 = require("crypto");
const DefaultApi_1 = require("./apis/DefaultApi");
const RETRYABLE_STATUSES = [429, 503];
const MIN_BASE_DELAY_MS = 1000;
const MAX_BASE_DELAY_MS = 60000;
async function createNotificationWithRetry(configuration, notification, options) {
    const maxRetries = options && options.maxRetries !== undefined ? options.maxRetries : 3;
    const requestedBaseDelayMs = options && typeof options.baseDelayMs === 'number' && isFinite(options.baseDelayMs)
        ? options.baseDelayMs
        : MIN_BASE_DELAY_MS;
    const baseDelayMs = Math.min(MAX_BASE_DELAY_MS, Math.max(MIN_BASE_DELAY_MS, requestedBaseDelayMs));
    if (!notification.idempotency_key) {
        notification.idempotency_key = generateUuidV4();
    }
    const requestFactory = new DefaultApi_1.DefaultApiRequestFactory(configuration);
    const responseProcessor = new DefaultApi_1.DefaultApiResponseProcessor();
    let attempt = 0;
    while (true) {
        let response;
        try {
            const requestContext = await requestFactory.createNotification(notification, configuration);
            response = await configuration.httpApi.send(requestContext).toPromise();
        }
        catch (e) {
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
exports.createNotificationWithRetry = createNotificationWithRetry;
function headerValue(headers, name) {
    const target = name.toLowerCase();
    for (const key in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, key) && key.toLowerCase() === target) {
            return headers[key];
        }
    }
    return undefined;
}
function isReplayed(headers) {
    const value = headerValue(headers, 'idempotent-replayed');
    return value !== undefined && value.trim().toLowerCase() === 'true';
}
function retryDelayMs(headers, attempt, baseDelayMs) {
    const retryAfter = headerValue(headers, 'retry-after');
    if (retryAfter !== undefined && /^\d+$/.test(retryAfter.trim())) {
        return parseInt(retryAfter.trim(), 10) * 1000;
    }
    return baseDelayMs * Math.pow(2, attempt);
}
function generateUuidV4() {
    const bytes = (0, crypto_1.randomBytes)(16);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = bytes.toString('hex');
    return (hex.substring(0, 8) + '-' +
        hex.substring(8, 12) + '-' +
        hex.substring(12, 16) + '-' +
        hex.substring(16, 20) + '-' +
        hex.substring(20));
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=helpers.js.map