/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { JourneyMessageStats } from './JourneyMessageStats';
import { HttpFile } from '../http/http';

/**
* Stats for a single node. Keyed in the response by the node\'s server-assigned id.
*/
export class JourneyNodeStats {
    /**
    * Node kind, repeated here so stats can be read without joining against the journey definition.
    */
    'kind'?: JourneyNodeStatsKindEnum;
    /**
    * Users currently held at this node.
    */
    'waiting'?: number;
    /**
    * Users who advanced past this node normally.
    */
    'completed'?: number;
    /**
    * Users who left the journey from this node through an early exit rule.
    */
    'exited_early'?: number;
    'message_stats'?: JourneyMessageStats;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kind",
            "baseName": "kind",
            "type": "JourneyNodeStatsKindEnum",
            "format": ""
        },
        {
            "name": "waiting",
            "baseName": "waiting",
            "type": "number",
            "format": ""
        },
        {
            "name": "completed",
            "baseName": "completed",
            "type": "number",
            "format": ""
        },
        {
            "name": "exited_early",
            "baseName": "exited_early",
            "type": "number",
            "format": ""
        },
        {
            "name": "message_stats",
            "baseName": "message_stats",
            "type": "JourneyMessageStats",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyNodeStats.attributeTypeMap;
    }

    public constructor() {
    }
}


export type JourneyNodeStatsKindEnum = "wait" | "time_window" | "send_push" | "send_email" | "send_sms" | "send_iam" | "send_webhook" | "tag" | "split_range" | "yes_no" | "wait_until" ;

