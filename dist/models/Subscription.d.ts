export declare class Subscription {
    'id'?: string;
    'type'?: SubscriptionTypeEnum;
    'token'?: string;
    'enabled'?: boolean;
    'notification_types'?: number;
    'session_time'?: number;
    'session_count'?: number;
    'sdk'?: string;
    'device_model'?: string;
    'device_os'?: string;
    'rooted'?: boolean;
    'test_type'?: number;
    'app_version'?: string;
    'net_type'?: number;
    'carrier'?: string;
    'web_auth'?: string;
    'web_p256'?: string;
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
export type SubscriptionTypeEnum = "iOSPush" | "AndroidPush" | "FireOSPush" | "ChromeExtensionPush" | "ChromePush" | "WindowsPush" | "SafariLegacyPush" | "FirefoxPush" | "macOSPush" | "HuaweiPush" | "SafariPush" | "Email" | "SMS";
