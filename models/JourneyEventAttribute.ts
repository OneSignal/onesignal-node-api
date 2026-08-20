/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.12.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class JourneyEventAttribute {
    /**
    * Event attribute key.
    */
    'key': string;
    /**
    * Comparison operator.
    */
    'operator': JourneyEventAttributeOperatorEnum;
    /**
    * Value to compare against. Not required for exists and not_exists.
    */
    'value'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "JourneyEventAttributeOperatorEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyEventAttribute.attributeTypeMap;
    }

    public constructor() {
    }
}


export type JourneyEventAttributeOperatorEnum = "equal" | "not_equal" | "less" | "less_or_equal" | "greater_or_equal" | "greater" | "is" | "is_not" | "exists" | "not_exists" | "before" | "after" ;

