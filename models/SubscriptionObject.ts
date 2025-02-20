/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class SubscriptionObject {
    'id'?: string;
    'type'?: SubscriptionObjectTypeEnum;
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

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionObjectTypeEnum",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "notification_types",
            "baseName": "notification_types",
            "type": "number",
            "format": ""
        },
        {
            "name": "session_time",
            "baseName": "session_time",
            "type": "number",
            "format": ""
        },
        {
            "name": "session_count",
            "baseName": "session_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "sdk",
            "baseName": "sdk",
            "type": "string",
            "format": ""
        },
        {
            "name": "device_model",
            "baseName": "device_model",
            "type": "string",
            "format": ""
        },
        {
            "name": "device_os",
            "baseName": "device_os",
            "type": "string",
            "format": ""
        },
        {
            "name": "rooted",
            "baseName": "rooted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "test_type",
            "baseName": "test_type",
            "type": "number",
            "format": ""
        },
        {
            "name": "app_version",
            "baseName": "app_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "net_type",
            "baseName": "net_type",
            "type": "number",
            "format": ""
        },
        {
            "name": "carrier",
            "baseName": "carrier",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_auth",
            "baseName": "web_auth",
            "type": "string",
            "format": ""
        },
        {
            "name": "web_p256",
            "baseName": "web_p256",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionObject.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SubscriptionObjectTypeEnum = "iOSPush" | "AndroidPush" | "FireOSPush" | "ChromeExtensionPush" | "ChromePush" | "WindowsPush" | "SafariLegacyPush" | "FirefoxPush" | "macOSPush" | "HuaweiPush" | "SafariPush" | "Email" | "SMS" ;

