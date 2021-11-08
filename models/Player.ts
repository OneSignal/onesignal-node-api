/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class Player {
    /**
    * The device's OneSignal ID
    */
    'id': string;
    /**
    * If true, this is the equivalent of a user being Unsubscribed
    */
    'invalid_identifier'?: boolean;
    'app_id': string;
    /**
    * Required The device's platform:   0 = iOS   1 = Android   2 = Amazon   3 = WindowsPhone (MPNS)   4 = Chrome Apps / Extensions   5 = Chrome Web Push   6 = Windows (WNS)   7 = Safari   8 = Firefox   9 = MacOS   10 = Alexa   11 = Email   13 = For Huawei App Gallery Builds SDK Setup. Not for Huawei Devices using FCM   14 = SMS 
    */
    'device_type': number;
    /**
    * a custom user ID
    */
    'external_user_id'?: string;
    /**
    * Only required if you have enabled Identity Verification and device_type is NOT 11 email.
    */
    'external_user_id_auth_hash'?: string;
    /**
    * Email - Only required if you have enabled Identity Verification and device_type is email (11).
    */
    'email_auth_hash'?: string;
    /**
    * Recommended: For Push Notifications, this is the Push Token Identifier from Google or Apple. For Apple Push identifiers, you must strip all non alphanumeric characters. Examples: iOS: 7abcd558f29d0b1f048083e2834ad8ea4b3d87d8ad9c088b33c132706ff445f0 Android: APA91bHbYHk7aq-Uam_2pyJ2qbZvqllyyh2wjfPRaw5gLEX2SUlQBRvOc6sck1sa7H7nGeLNlDco8lXj83HWWwzV... For Email Addresses, set the full email address email@email.com and make sure to set device_type to 11. 
    */
    'identifier'?: string;
    /**
    * Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: en 
    */
    'language'?: string;
    /**
    * Number of seconds away from UTC. Example: -28800 
    */
    'timezone'?: number;
    /**
    * Version of your app. Example: 1.1 
    */
    'game_version'?: string;
    /**
    * Device make and model. Example: iPhone5,1 
    */
    'device_model'?: string;
    /**
    * Device operating system version. Example: 7.0.4 
    */
    'device_os'?: string;
    /**
    * The ad id for the device's platform: Android = Advertising Id iOS = identifierForVendor WP8.0 = DeviceUniqueId WP8.1 = AdvertisingId 
    */
    'ad_id'?: string;
    /**
    * Name and version of the sdk/plugin that's calling this API method (if any)
    */
    'sdk'?: string;
    /**
    * Number of times the user has played the game, defaults to 1
    */
    'session_count'?: number;
    /**
    * Custom tags for the player. Only support string and integer key value pairs. Does not support arrays or other nested objects. Setting a tag value to null or an empty string will remove the tag. Example: {\"foo\":\"bar\",\"this\":\"that\"} Limitations: - 100 tags per call - Android SDK users: tags cannot be removed or changed via API if set through SDK sendTag methods. Recommended to only tag devices with 1 kilobyte of data Please consider using your own Database to save more than 1 kilobyte of data. See: Internal Database & CRM 
    */
    'tags'?: any;
    /**
    * Amount the user has spent in USD, up to two decimal places
    */
    'amount_spent'?: string;
    /**
    * Unixtime when the player joined the game
    */
    'created_at'?: number;
    /**
    * Seconds player was running your app.
    */
    'playtime'?: number;
    /**
    * Current iOS badge count displayed on the app icon NOTE: Not supported for apps created after June 2018, since badge count for apps created after this date are handled on the client. 
    */
    'badge_count'?: number;
    /**
    * Unixtime when the player was last active
    */
    'last_active'?: number;
    /**
    * 1 = subscribed -2 = unsubscribed iOS - These values are set each time the user opens the app from the SDK. Use the SDK function set Subscription instead. Android - You may set this but you can no longer use the SDK method setSubscription later in your app as it will create synchronization issues. 
    */
    'notification_types'?: number;
    /**
    * This is used in deciding whether to use your iOS Sandbox or Production push certificate when sending a push when both have been uploaded. Set to the iOS provisioning profile that was used to build your app. 1 = Development 2 = Ad-Hoc Omit this field for App Store builds. 
    */
    'test_type'?: number;
    /**
    * Longitude of the device, used for geotagging to segment on.
    */
    '_long'?: number;
    /**
    * Latitude of the device, used for geotagging to segment on.
    */
    'lat'?: number;
    /**
    * Country code in the ISO 3166-1 Alpha 2 format
    */
    'country'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "invalid_identifier",
            "baseName": "invalid_identifier",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "device_type",
            "baseName": "device_type",
            "type": "number",
            "format": ""
        },
        {
            "name": "external_user_id",
            "baseName": "external_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "external_user_id_auth_hash",
            "baseName": "external_user_id_auth_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "email_auth_hash",
            "baseName": "email_auth_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "number",
            "format": ""
        },
        {
            "name": "game_version",
            "baseName": "game_version",
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
            "name": "ad_id",
            "baseName": "ad_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "sdk",
            "baseName": "sdk",
            "type": "string",
            "format": ""
        },
        {
            "name": "session_count",
            "baseName": "session_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "any",
            "format": ""
        },
        {
            "name": "amount_spent",
            "baseName": "amount_spent",
            "type": "string",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "playtime",
            "baseName": "playtime",
            "type": "number",
            "format": ""
        },
        {
            "name": "badge_count",
            "baseName": "badge_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "last_active",
            "baseName": "last_active",
            "type": "number",
            "format": ""
        },
        {
            "name": "notification_types",
            "baseName": "notification_types",
            "type": "number",
            "format": ""
        },
        {
            "name": "test_type",
            "baseName": "test_type",
            "type": "number",
            "format": ""
        },
        {
            "name": "_long",
            "baseName": "long",
            "type": "number",
            "format": ""
        },
        {
            "name": "lat",
            "baseName": "lat",
            "type": "number",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Player.attributeTypeMap;
    }
    
    public constructor() {
    }
}

