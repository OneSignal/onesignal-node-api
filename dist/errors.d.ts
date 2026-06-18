export declare const OneSignalErrors: {
    readonly INVALID_API_KEY: "Access denied.  Please include an 'Authorization: ...' header with a valid API key (https://documentation.onesignal.com/docs/en/keys-and-ids#api-keys).";
    readonly NOTIFICATION_NOT_FOUND: "Notification not found";
    readonly NO_SUBSCRIBERS: "All included players are not subscribed";
    readonly NO_TARGETING_SPECIFIED: "You must include which players, segments, or tags you wish to send this notification to.";
    readonly SERVICE_UNAVAILABLE: "Service temporarily unavailable";
};
export type OneSignalErrorMessage = typeof OneSignalErrors[keyof typeof OneSignalErrors];
