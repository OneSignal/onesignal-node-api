/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class FilterNotificationTarget {
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

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return FilterNotificationTarget.attributeTypeMap;
    }
    
    public constructor() {
    }
}

