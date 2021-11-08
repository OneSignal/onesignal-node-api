/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class OutcomeData {
    'id': string;
    'value': number;
    'aggregation': OutcomeDataAggregationEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "aggregation",
            "baseName": "aggregation",
            "type": "OutcomeDataAggregationEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OutcomeData.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type OutcomeDataAggregationEnum = "sum" | "count" ;

