/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.13.0
 * Contact: devrel@onesignal.com
 */

import { JourneyEventAttribute } from './JourneyEventAttribute';
import { HttpFile } from '../http/http';

/**
* A branch condition. The kind field selects which other fields apply.
*/
export class JourneyCondition {
    /**
    * Condition kind. Selects which other fields apply.
    */
    'kind': JourneyConditionKindEnum;
    /**
    * segment_membership conditions: Segment UUIDs the user must belong to.
    */
    'included_segment_ids'?: Array<string>;
    /**
    * segment_membership conditions: Segment UUIDs the user must not belong to.
    */
    'excluded_segment_ids'?: Array<string>;
    /**
    * on_notification_action conditions: the notification action to branch on. Which actions apply depends on the sending node\'s channel.
    */
    'action'?: JourneyConditionActionEnum;
    /**
    * on_notification_action conditions: id of the sending node this action refers to. Returned on reads; accepted on write.
    */
    'sending_node_id'?: string;
    /**
    * on_notification_action conditions: write-only alternative to sending_node_id. References the sending node by its client_node_id.
    */
    'client_node_id'?: string;
    /**
    * event_trigger conditions: event name, up to 255 characters.
    */
    'name'?: string;
    /**
    * Event attribute matchers, as a list of condition groups. Send a single group whose conditions are AND\'d together. More than one group is rejected.
    */
    'attributes'?: Array<Array<JourneyEventAttribute>>;
    /**
    * event_trigger conditions: match incoming event properties against the journey\'s entry event. Only valid on event-triggered journeys.
    */
    'entry_event_match_attributes'?: Array<object>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kind",
            "baseName": "kind",
            "type": "JourneyConditionKindEnum",
            "format": ""
        },
        {
            "name": "included_segment_ids",
            "baseName": "included_segment_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "excluded_segment_ids",
            "baseName": "excluded_segment_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "JourneyConditionActionEnum",
            "format": ""
        },
        {
            "name": "sending_node_id",
            "baseName": "sending_node_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "client_node_id",
            "baseName": "client_node_id",
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
            "name": "attributes",
            "baseName": "attributes",
            "type": "Array<Array<JourneyEventAttribute>>",
            "format": ""
        },
        {
            "name": "entry_event_match_attributes",
            "baseName": "entry_event_match_attributes",
            "type": "Array<object>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyCondition.attributeTypeMap;
    }

    public constructor() {
    }
}


export type JourneyConditionKindEnum = "segment_membership" | "on_notification_action" | "event_trigger" ;
export type JourneyConditionActionEnum = "received" | "clicked" | "opened" ;

