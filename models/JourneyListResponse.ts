/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { JourneyListItem } from './JourneyListItem';
import { HttpFile } from '../http/http';

export class JourneyListResponse {
    /**
    * Journeys ordered by creation time, newest first.
    */
    'journeys'?: Array<JourneyListItem>;
    /**
    * true if more journeys exist beyond this page.
    */
    'has_more'?: boolean;
    /**
    * Cursor for the next page. Present only when has_more is true.
    */
    'next_cursor'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "journeys",
            "baseName": "journeys",
            "type": "Array<JourneyListItem>",
            "format": ""
        },
        {
            "name": "has_more",
            "baseName": "has_more",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "next_cursor",
            "baseName": "next_cursor",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

