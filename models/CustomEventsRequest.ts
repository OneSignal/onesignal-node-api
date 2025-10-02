/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.3.0
 * Contact: devrel@onesignal.com
 */

import { CustomEvent } from './CustomEvent';
import { HttpFile } from '../http/http';

export class CustomEventsRequest {
    'events': Array<CustomEvent>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<CustomEvent>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomEventsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

