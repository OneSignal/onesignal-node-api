/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { FilterNotificationTarget } from './FilterNotificationTarget';
import { PlayerNotificationTarget } from './PlayerNotificationTarget';
import { SegmentNotificationTarget } from './SegmentNotificationTarget';
import { HttpFile } from '../http/http';

export class NotificationTarget {
    /**
    * The segment names you want to target. Users in these segments will receive a notification. This targeting parameter is only compatible with excluded_segments. Example: [\"Active Users\", \"Inactive Users\"] 
    */
    'included_segments'?: Array<string>;
    /**
    * Segment that will be excluded when sending. Users in these segments will not receive a notification, even if they were included in included_segments. This targeting parameter is only compatible with included_segments. Example: [\"Active Users\", \"Inactive Users\"] 
    */
    'excluded_segments'?: Array<string>;
    /**
    * relation = \">\" or \"<\" hours_ago = number of hours before or after the users last session. Example: \"1.1\" 
    */
    'last_session'?: string;
    /**
    * relation = \">\" or \"<\" hours_ago = number of hours before or after the users first session. Example: \"1.1\" 
    */
    'first_session'?: string;
    /**
    * relation = \">\", \"<\", \"=\" or \"!=\" value = number sessions. Example: \"1\" 
    */
    'session_count'?: string;
    /**
    * relation = \">\", \"<\", \"=\" or \"!=\" value = Time in seconds the user has been in your app. Example: \"3600\" 
    */
    'session_time'?: string;
    /**
    * relation = \">\", \"<\", or \"=\" value = Amount in USD a user has spent on IAP (In App Purchases). Example: \"0.99\" 
    */
    'amount_spent'?: string;
    /**
    * relation = \">\", \"<\" or \"=\" key = SKU purchased in your app as an IAP (In App Purchases). Example: \"com.domain.100coinpack\" value = value of SKU to compare to. Example: \"0.99\" 
    */
    'bought_sku'?: string;
    /**
    * relation = \">\", \"<\", \"=\", \"!=\", \"exists\", \"not_exists\", \"time_elapsed_gt\" (paid plan only) or \"time_elapsed_lt\" (paid plan only) See Time Operators key = Tag key to compare. value = Tag value to compare. Not required for \"exists\" or \"not_exists\". Example: See Formatting Filters 
    */
    'tag'?: string;
    /**
    * relation = \"=\" or \"!=\" value = 2 character language code. Example: \"en\". For a list of all language codes see Language & Localization. 
    */
    'language'?: string;
    /**
    * relation = \">\", \"<\", \"=\" or \"!=\" value = app version. Example: \"1.0.0\" 
    */
    'app_version'?: string;
    /**
    * radius = in meters lat = latitude long = longitude 
    */
    'location'?: string;
    /**
    * value = email address Only for sending Push Notifications Use this for targeting push subscribers associated with an email set with all SDK setEmail methods To send emails to specific email addresses use include_email_tokens parameter 
    */
    'email'?: string;
    /**
    * relation = \"=\" value = 2-digit Country code Example: \"field\": \"country\", \"relation\": \"=\", \"value\", \"US\" 
    */
    'country'?: string;
    /**
    * Specific playerids to send your notification to. _Does not require API Auth Key. Do not combine with other targeting parameters. Not compatible with any other targeting parameters. Example: [\"1dd608f2-c6a1-11e3-851d-000c2940e62c\"] Limit of 2,000 entries per REST API call 
    */
    'include_player_ids'?: Array<string>;
    /**
    * Target specific devices by custom user IDs assigned via API. Not compatible with any other targeting parameters Example: [“custom-id-assigned-by-api”] REQUIRED: REST API Key Authentication Limit of 2,000 entries per REST API call. Note: If targeting push, email, or sms subscribers with same ids, use with channel_for_external_user_ids to indicate you are sending a push or email or sms. 
    */
    'include_external_user_ids'?: Array<string>;
    /**
    * Recommended for Sending Emails - Target specific email addresses. If an email does not correspond to an existing user, a new user will be created. Example: nick@catfac.ts Limit of 2,000 entries per REST API call 
    */
    'include_email_tokens'?: Array<string>;
    /**
    * Recommended for Sending SMS - Target specific phone numbers. The phone number should be in the E.164 format. Phone number should be an existing subscriber on OneSignal. Refer our docs to learn how to add phone numbers to OneSignal. Example phone number: +1999999999 Limit of 2,000 entries per REST API call 
    */
    'include_phone_numbers'?: Array<string>;
    /**
    * Not Recommended: Please consider using include_player_ids or include_external_user_ids instead. Target using iOS device tokens. Warning: Only works with Production tokens. All non-alphanumeric characters must be removed from each token. If a token does not correspond to an existing user, a new user will be created. Example: ce777617da7f548fe7a9ab6febb56cf39fba6d38203... Limit of 2,000 entries per REST API call 
    */
    'include_ios_tokens'?: Array<string>;
    /**
    * Not Recommended: Please consider using include_player_ids or include_external_user_ids instead. Target using Windows URIs. If a token does not correspond to an existing user, a new user will be created. Example: http://s.notify.live.net/u/1/bn1/HmQAAACPaLDr-... Limit of 2,000 entries per REST API call 
    */
    'include_wp_wns_uris'?: Array<string>;
    /**
    * Not Recommended: Please consider using include_player_ids or include_external_user_ids instead. Target using Amazon ADM registration IDs. If a token does not correspond to an existing user, a new user will be created. Example: amzn1.adm-registration.v1.XpvSSUk0Rc3hTVVV... Limit of 2,000 entries per REST API call 
    */
    'include_amazon_reg_ids'?: Array<string>;
    /**
    * Not Recommended: Please consider using include_player_ids or include_external_user_ids instead. Target using Chrome App registration IDs. If a token does not correspond to an existing user, a new user will be created. Example: APA91bEeiUeSukAAUdnw3O2RB45FWlSpgJ7Ji_... Limit of 2,000 entries per REST API call 
    */
    'include_chrome_reg_ids'?: Array<string>;
    /**
    * Not Recommended: Please consider using include_player_ids or include_external_user_ids instead. Target using Chrome Web Push registration IDs. If a token does not correspond to an existing user, a new user will be created. Example: APA91bEeiUeSukAAUdnw3O2RB45FWlSpgJ7Ji_... Limit of 2,000 entries per REST API call 
    */
    'include_chrome_web_reg_ids'?: Array<string>;
    /**
    * Not Recommended: Please consider using include_player_ids or include_external_user_ids instead. Target using Android device registration IDs. If a token does not correspond to an existing user, a new user will be created. Example: APA91bEeiUeSukAAUdnw3O2RB45FWlSpgJ7Ji_... Limit of 2,000 entries per REST API call 
    */
    'include_android_reg_ids'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "included_segments",
            "baseName": "included_segments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "excluded_segments",
            "baseName": "excluded_segments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "last_session",
            "baseName": "last_session",
            "type": "string",
            "format": ""
        },
        {
            "name": "first_session",
            "baseName": "first_session",
            "type": "string",
            "format": ""
        },
        {
            "name": "session_count",
            "baseName": "session_count",
            "type": "string",
            "format": ""
        },
        {
            "name": "session_time",
            "baseName": "session_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount_spent",
            "baseName": "amount_spent",
            "type": "string",
            "format": ""
        },
        {
            "name": "bought_sku",
            "baseName": "bought_sku",
            "type": "string",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
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
            "name": "app_version",
            "baseName": "app_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "include_player_ids",
            "baseName": "include_player_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_external_user_ids",
            "baseName": "include_external_user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_email_tokens",
            "baseName": "include_email_tokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_phone_numbers",
            "baseName": "include_phone_numbers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_ios_tokens",
            "baseName": "include_ios_tokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_wp_wns_uris",
            "baseName": "include_wp_wns_uris",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_amazon_reg_ids",
            "baseName": "include_amazon_reg_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_chrome_reg_ids",
            "baseName": "include_chrome_reg_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_chrome_web_reg_ids",
            "baseName": "include_chrome_web_reg_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "include_android_reg_ids",
            "baseName": "include_android_reg_ids",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotificationTarget.attributeTypeMap;
    }
    
    public constructor() {
    }
}

