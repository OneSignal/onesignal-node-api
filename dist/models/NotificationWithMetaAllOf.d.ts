import { PlatformDeliveryData } from './PlatformDeliveryData';
export declare class NotificationWithMetaAllOf {
    'remaining'?: number;
    'successful'?: number;
    'failed'?: number;
    'errored'?: number;
    'converted'?: number;
    'queued_at'?: number;
    'send_after'?: number;
    'completed_at'?: number;
    'platform_delivery_stats'?: PlatformDeliveryData;
    'received'?: number;
    'throttle_rate_per_minute'?: number;
    'canceled'?: boolean;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
