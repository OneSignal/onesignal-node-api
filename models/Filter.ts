/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.2.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class Filter {
    /**
    * Required. Name of the field to use as the first operand in the filter expression.
    */
    'field'?: string;
    /**
    * If `field` is `tag`, this field is *required* to specify `key` inside the tags.
    */
    'key'?: string;
    /**
    * Constant value to use as the second operand in the filter expression. This value is *required* when the relation operator is a binary operator.
    */
    'value'?: string;
    /**
    * If `field` is session-related, this is *required* to specify the number of hours before or after the user\'s session.
    */
    'hours_ago'?: string;
    /**
    * If `field` is `location`, this will specify the radius in meters from a provided location point. Use with `lat` and `long`.
    */
    'radius'?: number;
    /**
    * If `field` is `location`, this is *required* to specify the user\'s latitude.
    */
    'lat'?: number;
    /**
    * If `field` is `location`, this is *required* to specify the user\'s longitude.
    */
    'long'?: number;
    /**
    * Required. Operator of a filter expression.
    */
    'relation'?: FilterRelationEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "hours_ago",
            "baseName": "hours_ago",
            "type": "string",
            "format": ""
        },
        {
            "name": "radius",
            "baseName": "radius",
            "type": "number",
            "format": ""
        },
        {
            "name": "lat",
            "baseName": "lat",
            "type": "number",
            "format": ""
        },
        {
            "name": "long",
            "baseName": "long",
            "type": "number",
            "format": ""
        },
        {
            "name": "relation",
            "baseName": "relation",
            "type": "FilterRelationEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Filter.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FilterRelationEnum = ">" | "<" | "=" | "!=" | "exists" | "not_exists" | "time_elapsed_gt" | "time_elapsed_lt" ;

