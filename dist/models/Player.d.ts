export declare class Player {
    'id': string;
    'invalid_identifier'?: boolean;
    'app_id': string;
    'device_type': number;
    'external_user_id'?: string;
    'external_user_id_auth_hash'?: string;
    'email_auth_hash'?: string;
    'identifier'?: string;
    'language'?: string;
    'timezone'?: number;
    'game_version'?: string;
    'device_model'?: string;
    'device_os'?: string;
    'ad_id'?: string;
    'sdk'?: string;
    'session_count'?: number;
    'tags'?: any;
    'amount_spent'?: string;
    'created_at'?: number;
    'playtime'?: number;
    'badge_count'?: number;
    'last_active'?: number;
    'notification_types'?: number;
    'test_type'?: number;
    '_long'?: number;
    'lat'?: number;
    'country'?: string;
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
