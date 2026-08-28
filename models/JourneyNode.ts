/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { JourneyBranch } from './JourneyBranch';
import { JourneyTimeWindow } from './JourneyTimeWindow';
import { JourneyWaitUntilExpiration } from './JourneyWaitUntilExpiration';
import { HttpFile } from '../http/http';

/**
* A journey node. The kind field selects which other fields apply. Branching nodes (split_range, yes_no, wait_until) nest their sub-graphs inline via branches[].nodes.
*/
export class JourneyNode {
    /**
    * Server-assigned node UUID. Returned on reads. Required on update to keep an existing node. Rejected on create with a 400 validation error.
    */
    'id'?: string;
    /**
    * Node kind. Selects which other fields apply.
    */
    'kind': JourneyNodeKindEnum;
    /**
    * Optional client-assigned identifier, unique within the journey. Use it to reference this node from elsewhere in the same request. Persisted and returned on reads.
    */
    'client_node_id'?: string;
    /**
    * Optional free-text label, up to 255 characters. Stored and returned as-is with no effect on journey behavior.
    */
    'annotation'?: string;
    /**
    * wait nodes: seconds to hold the user. Minimum 60, maximum 31556952 (1 year).
    */
    'duration_seconds'?: number;
    /**
    * time_window nodes: schedule_in_timezone uses the configured windows; last_active_time holds relative to the user\'s last active time.
    */
    'relative_to'?: JourneyNodeRelativeToEnum;
    /**
    * time_window nodes: one or more time windows. A window with no day_of_week applies to every day. Required when relative_to is schedule_in_timezone; omit when it is last_active_time.
    */
    'windows'?: Array<JourneyTimeWindow>;
    /**
    * time_window nodes: IANA timezone identifier used when the user\'s timezone is unavailable.
    */
    'time_zone'?: string;
    /**
    * time_window nodes: when true, uses the user\'s timezone if available.
    */
    'use_user_time_zone'?: boolean;
    /**
    * send_push, send_email, and send_sms nodes: UUID of the template to send.
    */
    'template_id'?: string;
    /**
    * send_iam nodes: UUID of the in-app message to send.
    */
    'iam_id'?: string;
    /**
    * send_iam nodes: optional time-to-live for the in-app message, in seconds.
    */
    'user_ttl_seconds'?: number;
    /**
    * send_webhook nodes: UUID of the webhook to send.
    */
    'webhook_id'?: string;
    /**
    * tag nodes: tag key-value pairs to assign. An empty string value removes the tag. Keys are limited to 255 characters and values to 1024.
    */
    'assignments'?: { [key: string]: string; };
    /**
    * split_range nodes: when true, assigns each user to a branch at random on entry. Defaults to false.
    */
    'randomize_on_entry'?: boolean;
    /**
    * Branching nodes: nested branches. split_range requires 2-20 weighted branches that sum to 100. yes_no requires exactly 2 branches. wait_until requires 1-10 condition branches.
    */
    'branches'?: Array<JourneyBranch>;
    'expiration'?: JourneyWaitUntilExpiration;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "JourneyNodeKindEnum",
            "format": ""
        },
        {
            "name": "client_node_id",
            "baseName": "client_node_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "annotation",
            "baseName": "annotation",
            "type": "string",
            "format": ""
        },
        {
            "name": "duration_seconds",
            "baseName": "duration_seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "relative_to",
            "baseName": "relative_to",
            "type": "JourneyNodeRelativeToEnum",
            "format": ""
        },
        {
            "name": "windows",
            "baseName": "windows",
            "type": "Array<JourneyTimeWindow>",
            "format": ""
        },
        {
            "name": "time_zone",
            "baseName": "time_zone",
            "type": "string",
            "format": ""
        },
        {
            "name": "use_user_time_zone",
            "baseName": "use_user_time_zone",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "template_id",
            "baseName": "template_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "iam_id",
            "baseName": "iam_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "user_ttl_seconds",
            "baseName": "user_ttl_seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "webhook_id",
            "baseName": "webhook_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "assignments",
            "baseName": "assignments",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "randomize_on_entry",
            "baseName": "randomize_on_entry",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "branches",
            "baseName": "branches",
            "type": "Array<JourneyBranch>",
            "format": ""
        },
        {
            "name": "expiration",
            "baseName": "expiration",
            "type": "JourneyWaitUntilExpiration",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyNode.attributeTypeMap;
    }

    public constructor() {
    }
}


export type JourneyNodeKindEnum = "wait" | "time_window" | "send_push" | "send_email" | "send_sms" | "send_iam" | "send_webhook" | "tag" | "split_range" | "yes_no" | "wait_until" ;
export type JourneyNodeRelativeToEnum = "schedule_in_timezone" | "last_active_time" ;

