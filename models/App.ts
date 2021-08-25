/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class App {
    'id': string;
    /**
    * The name of your app, as displayed on your apps list on the dashboard.  This can be renamed.
    */
    'name'?: string;
    'players'?: number;
    'messageable_players'?: number;
    'updated_at'?: Date;
    'created_at'?: Date;
    /**
    * Android: Your Google Project number.  Also known as Sender ID.
    */
    'android_gcm_sender_id'?: string;
    /**
    * Android: Your Google Push Messaging Auth Key
    */
    'gcm_key'?: string;
    /**
    * Chrome (All Browsers except Safari) (Recommended): The URL to your website.  This field is required if you wish to enable web push and specify other web push parameters.
    */
    'chrome_web_origin'?: string;
    /**
    * Not for web push.  Your Google Push Messaging Auth Key if you use Chrome Apps / Extensions.
    */
    'chrome_key'?: string;
    /**
    * Chrome (All Browsers except Safari): Your default notification icon. Should be 256x256 pixels, min 80x80.
    */
    'chrome_web_default_notification_icon'?: string;
    /**
    * Chrome (All Browsers except Safari): A subdomain of your choice in order to support Web Push on non-HTTPS websites. This field must be set in order for the chrome_web_gcm_sender_id property to be processed.
    */
    'chrome_web_sub_domain'?: string;
    /**
    * iOS: Either sandbox or production
    */
    'apns_env'?: AppApnsEnvEnum;
    /**
    * iOS: Your apple push notification p12 certificate file, converted to a string and Base64 encoded.
    */
    'apns_p12'?: string;
    /**
    * iOS: Required if using p12 certificate.  Password for the apns_p12 file.
    */
    'apns_p12_password'?: string;
    'apns_certificates'?: string;
    'safari_apns_certificates'?: string;
    /**
    * Safari: Your apple push notification p12 certificate file for Safari Push Notifications, converted to a string and Base64 encoded.
    */
    'safari_apns_p12'?: string;
    /**
    * Safari: Password for safari_apns_p12 file
    */
    'safari_apns_p12_password'?: string;
    /**
    * Safari (Recommended): The hostname to your website including http(s)://
    */
    'safari_site_origin'?: string;
    'safari_push_id'?: string;
    'safari_icon_16_16'?: string;
    'safari_icon_32_32'?: string;
    'safari_icon_64_64'?: string;
    'safari_icon_128_128'?: string;
    /**
    * Safari: A url for a 256x256 png notification icon. This is the only Safari icon URL you need to provide.
    */
    'safari_icon_256_256'?: string;
    /**
    * All Browsers (Recommended): The Site Name. Requires both chrome_web_origin and safari_site_origin to be set to add or update it.
    */
    'site_name'?: string;
    'basic_auth_key'?: string;
    /**
    * The Id of the Organization you would like to add this app to.
    */
    'organization_id'?: string;
    /**
    * iOS: Notification data (additional data) values will be added to the root of the apns payload when sent to the device.  Ignore if you're not using any other plugins, or not using OneSignal SDK methods to read the payload.
    */
    'additional_data_is_root_payload'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "players",
            "baseName": "players",
            "type": "number",
            "format": ""
        },
        {
            "name": "messageable_players",
            "baseName": "messageable_players",
            "type": "number",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "android_gcm_sender_id",
            "baseName": "android_gcm_sender_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "gcm_key",
            "baseName": "gcm_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_web_origin",
            "baseName": "chrome_web_origin",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_key",
            "baseName": "chrome_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_web_default_notification_icon",
            "baseName": "chrome_web_default_notification_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "chrome_web_sub_domain",
            "baseName": "chrome_web_sub_domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "apns_env",
            "baseName": "apns_env",
            "type": "AppApnsEnvEnum",
            "format": ""
        },
        {
            "name": "apns_p12",
            "baseName": "apns_p12",
            "type": "string",
            "format": ""
        },
        {
            "name": "apns_p12_password",
            "baseName": "apns_p12_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "apns_certificates",
            "baseName": "apns_certificates",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_apns_certificates",
            "baseName": "safari_apns_certificates",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_apns_p12",
            "baseName": "safari_apns_p12",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_apns_p12_password",
            "baseName": "safari_apns_p12_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_site_origin",
            "baseName": "safari_site_origin",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_push_id",
            "baseName": "safari_push_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_icon_16_16",
            "baseName": "safari_icon_16_16",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_icon_32_32",
            "baseName": "safari_icon_32_32",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_icon_64_64",
            "baseName": "safari_icon_64_64",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_icon_128_128",
            "baseName": "safari_icon_128_128",
            "type": "string",
            "format": ""
        },
        {
            "name": "safari_icon_256_256",
            "baseName": "safari_icon_256_256",
            "type": "string",
            "format": ""
        },
        {
            "name": "site_name",
            "baseName": "site_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "basic_auth_key",
            "baseName": "basic_auth_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "organization_id",
            "baseName": "organization_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "additional_data_is_root_payload",
            "baseName": "additional_data_is_root_payload",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return App.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type AppApnsEnvEnum = "sandbox" | "production" ;

