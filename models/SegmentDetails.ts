/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.10.0
 * Contact: devrel@onesignal.com
 */

import { FilterExpression } from './FilterExpression';
import { HttpFile } from '../http/http';

/**
* Segment details. Only included when the include-segment-detail query parameter is set to true.
*/
export class SegmentDetails {
    /**
    * The unique identifier for the segment (UUID v4).
    */
    'id'?: string;
    /**
    * The segment name.
    */
    'name'?: string;
    /**
    * Human-readable description for the segment. `null` when unset. Maximum 255 characters.
    */
    'description'?: string;
    /**
    * Unix timestamp when the segment was created.
    */
    'created_at'?: number;
    /**
    * The source of the segment.
    */
    'source'?: SegmentDetailsSourceEnum;
    /**
    * Array of filter and operator objects defining the segment criteria. Uses the same format as the Create Segment API, so filters can be directly used to recreate or update the segment.
    */
    'filters'?: Array<FilterExpression>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "SegmentDetailsSourceEnum",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<FilterExpression>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SegmentDetails.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SegmentDetailsSourceEnum = "default" | "custom" | "quickstart" ;

