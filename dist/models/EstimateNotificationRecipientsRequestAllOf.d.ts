import { FilterExpression } from './FilterExpression';
export declare class EstimateNotificationRecipientsRequestAllOf {
    'app_id'?: string;
    'filters'?: Array<FilterExpression>;
    'include_aliases'?: {
        [key: string]: Array<string>;
    };
    'target_channel'?: EstimateNotificationRecipientsRequestAllOfTargetChannelEnum;
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
export type EstimateNotificationRecipientsRequestAllOfTargetChannelEnum = "push" | "email" | "sms";
