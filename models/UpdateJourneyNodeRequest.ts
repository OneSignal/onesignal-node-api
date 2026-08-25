/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.13.0
 * Contact: devrel@onesignal.com
 */

import { JourneyBranch } from './JourneyBranch';
import { JourneyTimeWindow } from './JourneyTimeWindow';
import { JourneyWaitUntilExpiration } from './JourneyWaitUntilExpiration';
import { HttpFile } from '../http/http';

/**
* Node fields to change, merged onto the current node. Send only the fields you want to change. The node\'s kind and id cannot be changed. Send null to clear a nullable field. Which other fields apply depends on the node\'s kind, matching JourneyNode.
*/
export class UpdateJourneyNodeRequest {
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
    'relative_to'?: UpdateJourneyNodeRequestRelativeToEnum;
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
    /**
    * Optional optimistic-concurrency token. Pass the concurrency_key from a prior fetch to reject the update with 409 if the journey changed. Omit to skip the check. It is not merged onto the node.
    */
    'concurrency_key'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "type": "UpdateJourneyNodeRequestRelativeToEnum",
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
        },
        {
            "name": "concurrency_key",
            "baseName": "concurrency_key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateJourneyNodeRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UpdateJourneyNodeRequestRelativeToEnum = "schedule_in_timezone" | "last_active_time" ;

