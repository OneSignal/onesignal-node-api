import { FilterExpression } from './FilterExpression';
export declare class EstimateNotificationRecipientsRequest {
    'included_segments'?: Array<string>;
    'excluded_segments'?: Array<string>;
    'app_id': string;
    'filters'?: Array<FilterExpression>;
    'include_aliases'?: {
        [key: string]: Array<string>;
    };
    'target_channel'?: EstimateNotificationRecipientsRequestTargetChannelEnum;
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
export type EstimateNotificationRecipientsRequestTargetChannelEnum = "push" | "email" | "sms";
