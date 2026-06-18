import { Configuration } from './configuration';
import { Notification } from './models/Notification';
import { CreateNotificationSuccessResponse } from './models/CreateNotificationSuccessResponse';
export interface CreateNotificationWithRetryOptions {
    maxRetries?: number;
    baseDelayMs?: number;
}
export interface CreateNotificationWithRetryResult {
    response: CreateNotificationSuccessResponse;
    wasReplayed: boolean;
}
export declare function createNotificationWithRetry(configuration: Configuration, notification: Notification, options?: CreateNotificationWithRetryOptions): Promise<CreateNotificationWithRetryResult>;
