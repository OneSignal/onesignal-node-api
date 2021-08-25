/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { FilterExpressions } from './FilterExpressions';
import { HttpFile } from '../http/http';

export class Segment {
    /**
    * UUID of the segment.  If left empty, it will be assigned automaticaly.
    */
    'id'?: string;
    /**
    * Name of the segment.  You'll see this name on the Web UI.
    */
    'name': string;
    /**
    * Filter or operators the segment will have.  For a list of available filters with details, please see Send to Users Based on Filters.
    */
    'filters': Array<FilterExpressions>;

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
            "name": "filters",
            "baseName": "filters",
            "type": "Array<FilterExpressions>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Segment.attributeTypeMap;
    }
    
    public constructor() {
    }
}

