export declare class App {
    'id': string;
    'name'?: string;
    'players'?: number;
    'messageable_players'?: number;
    'updated_at'?: Date;
    'created_at'?: Date;
    'android_gcm_sender_id'?: string;
    'gcm_key'?: string;
    'chrome_web_origin'?: string;
    'chrome_key'?: string;
    'chrome_web_default_notification_icon'?: string;
    'chrome_web_sub_domain'?: string;
    'apns_env'?: AppApnsEnvEnum;
    'apns_p12'?: string;
    'apns_p12_password'?: string;
    'apns_certificates'?: string;
    'safari_apns_certificates'?: string;
    'safari_apns_p12'?: string;
    'safari_apns_p12_password'?: string;
    'safari_site_origin'?: string;
    'safari_push_id'?: string;
    'safari_icon_16_16'?: string;
    'safari_icon_32_32'?: string;
    'safari_icon_64_64'?: string;
    'safari_icon_128_128'?: string;
    'safari_icon_256_256'?: string;
    'site_name'?: string;
    'basic_auth_key'?: string;
    'organization_id'?: string;
    'additional_data_is_root_payload'?: boolean;
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
export declare type AppApnsEnvEnum = "sandbox" | "production";
