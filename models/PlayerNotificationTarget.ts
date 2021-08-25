/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class PlayerNotificationTarget {
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
        return PlayerNotificationTarget.attributeTypeMap;
    }
    
    public constructor() {
    }
}

