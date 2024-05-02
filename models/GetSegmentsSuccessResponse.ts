/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.0-alpha-01
 * Contact: devrel@onesignal.com
 */

import { SegmentData } from './SegmentData';
import { HttpFile } from '../http/http';

export class GetSegmentsSuccessResponse {
    /**
    * The number of Segments in the response.
    */
    'total_count'?: number;
    /**
    * Set with the offset query parameter. Default 0.
    */
    'offset'?: number;
    /**
    * Maximum number of Segments returned. Default 300.
    */
    'limit'?: number;
    /**
    * An array containing the Segment information.
    */
    'segments'?: Array<SegmentData>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total_count",
            "baseName": "total_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "segments",
            "baseName": "segments",
            "type": "Array<SegmentData>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetSegmentsSuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

