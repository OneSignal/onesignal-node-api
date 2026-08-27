/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { JourneyEventAttribute } from './JourneyEventAttribute';
import { HttpFile } from '../http/http';

/**
* The journey entry audience. The kind field selects which other fields apply.
*/
export class JourneyAudience {
    /**
    * Audience kind. Selects which other fields apply.
    */
    'kind': JourneyAudienceKindEnum;
    /**
    * segment audiences: Segment UUIDs whose users enter the journey.
    */
    'included_segment_ids'?: Array<string>;
    /**
    * segment audiences: Segment UUIDs whose users are excluded.
    */
    'excluded_segment_ids'?: Array<string>;
    /**
    * segment audiences: when true, only users who newly match the segment after activation enter the journey. Defaults to false.
    */
    'future_additions_only'?: boolean;
    /**
    * event_trigger audiences: event name that triggers entry, up to 255 characters.
    */
    'name'?: string;
    /**
    * Event attribute matchers, as a list of condition groups. Send a single group whose conditions are AND\'d together. More than one group is rejected.
    */
    'attributes'?: Array<Array<JourneyEventAttribute>>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "kind",
            "baseName": "kind",
            "type": "JourneyAudienceKindEnum",
            "format": ""
        },
        {
            "name": "included_segment_ids",
            "baseName": "included_segment_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "excluded_segment_ids",
            "baseName": "excluded_segment_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "future_additions_only",
            "baseName": "future_additions_only",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "Array<Array<JourneyEventAttribute>>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyAudience.attributeTypeMap;
    }

    public constructor() {
    }
}


export type JourneyAudienceKindEnum = "segment" | "event_trigger" ;

