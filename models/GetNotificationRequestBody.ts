/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class GetNotificationRequestBody {
    /**
    * -> \"sent\" - All the devices by player_id that were sent the specified notification_id.  Notifications targeting under 1000 recipients will not have \"sent\" events recorded, but will show \"clicked\" events. \"clicked\" - All the devices by `player_id` that clicked the specified notification_id.
    */
    'events'?: GetNotificationRequestBodyEventsEnum;
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
            "type": "GetNotificationRequestBodyEventsEnum",
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
        return GetNotificationRequestBody.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type GetNotificationRequestBodyEventsEnum = "sent" | "clicked" ;

