/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { FilterExpression } from './FilterExpression';
import { HttpFile } from '../http/http';

export class EstimateNotificationRecipientsRequestAllOf {
    /**
    * The OneSignal App ID for your app, which can be found in Keys & IDs.
    */
    'app_id'?: string;
    'filters'?: Array<FilterExpression>;
    /**
    * Target specific users by aliases assigned via API. An alias can be an external_id, onesignal_id, or a custom alias. Accepts an object where keys are alias labels and values are arrays of alias IDs to include Example usage: { \"external_id\": [\"exId1\", \"extId2\"], \"internal_label\": [\"id1\", \"id2\"] } Keys must match API spellings exactly (for example the label for External ID is the string `external_id`; arbitrary keys such as camelCase variants are not aliases and may yield no recipients). Not compatible with any other targeting parameters. REQUIRED: REST API Key Authentication Limit of 2,000 entries per REST API call Note: If targeting push, email, or sms subscribers with same ids, use with target_channel to indicate you are sending a push or email or sms.
    */
    'include_aliases'?: { [key: string]: Array<string>; };
    /**
    * Which platforms to count recipients for. Selects the same default platforms Create notification would use for the channel. Individual platform flags (`isIos`, `isAndroid`, etc.) are not supported by this endpoint.
    */
    'target_channel'?: EstimateNotificationRecipientsRequestAllOfTargetChannelEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<FilterExpression>",
            "format": ""
        },
        {
            "name": "include_aliases",
            "baseName": "include_aliases",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "target_channel",
            "baseName": "target_channel",
            "type": "EstimateNotificationRecipientsRequestAllOfTargetChannelEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EstimateNotificationRecipientsRequestAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EstimateNotificationRecipientsRequestAllOfTargetChannelEnum = "push" | "email" | "sms" ;

