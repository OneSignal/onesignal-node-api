/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class UpdateLiveActivityRequest {
    /**
    * Type of live activity
    */
    'name': UpdateLiveActivityRequestNameEnum;
    'event': UpdateLiveActivityRequestEventEnum;
    'event_updates': object;
    /**
    * Timestamp; only allowed if event is \"end\"
    */
    'dismiss_at'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "UpdateLiveActivityRequestNameEnum",
            "format": ""
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "UpdateLiveActivityRequestEventEnum",
            "format": ""
        },
        {
            "name": "event_updates",
            "baseName": "event_updates",
            "type": "object",
            "format": ""
        },
        {
            "name": "dismiss_at",
            "baseName": "dismiss_at",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateLiveActivityRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UpdateLiveActivityRequestNameEnum = "headings" | "contents" | "ios_sound" | "priority_level" ;
export type UpdateLiveActivityRequestEventEnum = "update" | "end" ;

