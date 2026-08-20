import { JourneyEventAttribute } from './JourneyEventAttribute';
export declare class JourneyCondition {
    'kind': JourneyConditionKindEnum;
    'included_segment_ids'?: Array<string>;
    'excluded_segment_ids'?: Array<string>;
    'action'?: JourneyConditionActionEnum;
    'sending_node_id'?: string;
    'client_node_id'?: string;
    'name'?: string;
    'attributes'?: Array<Array<JourneyEventAttribute>>;
    'entry_event_match_attributes'?: Array<object>;
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
export type JourneyConditionKindEnum = "segment_membership" | "on_notification_action" | "event_trigger";
export type JourneyConditionActionEnum = "received" | "clicked" | "opened";
