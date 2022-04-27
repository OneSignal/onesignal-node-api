import { Notification } from './Notification';
export declare class NotificationSlice {
    'total_count'?: number;
    'offset'?: number;
    'limit'?: number;
    'notifications'?: Array<Notification>;
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
