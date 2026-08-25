/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.13.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

/**
* Entry audience reduced to its kind. Use View journey for the full audience configuration.
*/
export class JourneyListAudience {
    /**
    * Audience kind.
    */
    'kind'?: JourneyListAudienceKindEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kind",
            "baseName": "kind",
            "type": "JourneyListAudienceKindEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyListAudience.attributeTypeMap;
    }

    public constructor() {
    }
}


export type JourneyListAudienceKindEnum = "segment" | "event_trigger" ;

