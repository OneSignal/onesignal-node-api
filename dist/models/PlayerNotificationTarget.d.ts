export declare class PlayerNotificationTarget {
    'include_player_ids'?: Array<string>;
    'include_external_user_ids'?: Array<string>;
    'include_email_tokens'?: Array<string>;
    'include_phone_numbers'?: Array<string>;
    'include_ios_tokens'?: Array<string>;
    'include_wp_wns_uris'?: Array<string>;
    'include_amazon_reg_ids'?: Array<string>;
    'include_chrome_reg_ids'?: Array<string>;
    'include_chrome_web_reg_ids'?: Array<string>;
    'include_android_reg_ids'?: Array<string>;
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
