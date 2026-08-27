/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* Channel: Email One stage of an Auto Warm Up campaign\'s sending schedule.
*/
export class EmailWarmUpStage {
    /**
    * ISO 8601 timestamp for the start of this stage. Sending for this stage will not begin before this time.
    */
    'start': string;
    /**
    * ISO 8601 timestamp for the end of this stage. This stage\'s quota is expected to be sent by this time.
    */
    'end': string;
    /**
    * Number of emails to send during this stage.
    */
    'quota': number;
    /**
    * Whether this stage has been picked up and acknowledged by the warm-up scheduler. Not accepted on create. This is only present when reading back a campaign.
    */
    'acked'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "start",
            "baseName": "start",
            "type": "string",
            "format": "date-time"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "string",
            "format": "date-time"
        },
        {
            "name": "quota",
            "baseName": "quota",
            "type": "number",
            "format": ""
        },
        {
            "name": "acked",
            "baseName": "acked",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailWarmUpStage.attributeTypeMap;
    }

    public constructor() {
    }
}

