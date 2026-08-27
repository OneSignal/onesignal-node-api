/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { JourneyTimePoint } from './JourneyTimePoint';
import { HttpFile } from '../http/http';

/**
* A wall-clock window. Each window must span at least 15 minutes.
*/
export class JourneyTimeWindow {
    /**
    * When the window opens.
    */
    'start'?: JourneyTimePoint;
    /**
    * When the window closes.
    */
    'end'?: JourneyTimePoint;
    /**
    * Day of week, 1 = Monday. Omit to apply the window to every day.
    */
    'day_of_week'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "start",
            "baseName": "start",
            "type": "JourneyTimePoint",
            "format": ""
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "JourneyTimePoint",
            "format": ""
        },
        {
            "name": "day_of_week",
            "baseName": "day_of_week",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyTimeWindow.attributeTypeMap;
    }

    public constructor() {
    }
}

