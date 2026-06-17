// Generated from inputs/api/error-catalog.json. Do not edit by hand.

/**
 * Sentinel error message strings the OneSignal API can return. Each value
 * equals the literal message the server emits, so you can test membership
 * against `ApiException.errorMessages` (e.g. NO_TARGETING_SPECIFIED).
 *
 * Note: 200-status sentinels such as NO_SUBSCRIBERS arrive on a successful
 * response (CreateNotificationSuccessResponse.errors), not via the exception
 * accessor — read the response's `errors` field for those.
 */
export const OneSignalErrors = {
    /** HTTP 403 | retryable: no | emitted by: any API-key-authenticated endpoint (REST or Organization key) | note: Generic auth-failure message the public api.onesignal.com edge returns for any invalid or mismatched key — REST or Organization — so a single sentinel covers both. Supersedes the Rails-monolith INVALID_REST_API_KEY / INVALID_USER_AUTH_KEY strings, which the public host no longer returns verbatim. Note the double space after 'denied.' */
    INVALID_API_KEY: "Access denied.  Please include an 'Authorization: ...' header with a valid API key (https://documentation.onesignal.com/docs/en/keys-and-ids#api-keys).",
    /** HTTP 400, 404 | retryable: no | emitted by: POST /notifications/{id}/history, POST /notifications/{id}/messages, GET /notifications/{id} (export) | note: Verified live 2026-06-16: GET /notifications/{bogus-uuid} returns 404 with this exact message. */
    NOTIFICATION_NOT_FOUND: "Notification not found",
    /** HTTP 200 | retryable: no | emitted by: POST /notifications | note: Returned with HTTP 200 OK (id is empty), not an error status. The flagship case for the errorMessages accessor — lets callers distinguish a sent notification from a no-op without parsing the polymorphic 200 body. */
    NO_SUBSCRIBERS: "All included players are not subscribed",
    /** HTTP 400 | retryable: no | emitted by: POST /notifications | note: Verified live 2026-06-16: a no-targeting POST /notifications returns 400 with this exact message. */
    NO_TARGETING_SPECIFIED: "You must include which players, segments, or tags you wish to send this notification to.",
    /** HTTP 503 | retryable: yes | emitted by: any endpoint (pgbouncer rejection) | note: Transient DB/pgbouncer failure — the canonical retryable sentinel. */
    SERVICE_UNAVAILABLE: "Service temporarily unavailable",
} as const;

export type OneSignalErrorMessage = typeof OneSignalErrors[keyof typeof OneSignalErrors];
