/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { FilterExpression } from './FilterExpression';
import { HttpFile } from '../http/http';

export class UpdateSegmentRequest {
    /**
    * Required. The segment name. Maximum 128 characters.
    */
    'name': string;
    /**
    * Optional human-readable description for the segment. Maximum 255 characters. Pass an empty string to clear; omit to leave unchanged.
    */
    'description'?: string;
    /**
    * Optional. When provided, replaces all existing filters. Filters define the segment based on user properties like tags, activity, or location using flexible AND/OR logic. Limited to 200 total entries, including fields and OR operators.
    */
    'filters'?: Array<FilterExpression>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "filters",
            "baseName": "filters",
            "type": "Array<FilterExpression>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateSegmentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

