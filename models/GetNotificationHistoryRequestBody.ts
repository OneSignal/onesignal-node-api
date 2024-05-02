/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.0-alpha-01
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class GetNotificationHistoryRequestBody {
    /**
    * -> \"sent\" - All the devices by player_id that were sent the specified notification_id.  Notifications targeting under 1000 recipients will not have \"sent\" events recorded, but will show \"clicked\" events. \"clicked\" - All the devices by `player_id` that clicked the specified notification_id.
    */
    'events'?: GetNotificationHistoryRequestBodyEventsEnum;
    /**
    * The email address you would like the report sent.
    */
    'email'?: string;
    'app_id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "events",
            "baseName": "events",
            "type": "GetNotificationHistoryRequestBodyEventsEnum",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetNotificationHistoryRequestBody.attributeTypeMap;
    }

    public constructor() {
    }
}


export type GetNotificationHistoryRequestBodyEventsEnum = "sent" | "clicked" ;

