/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.0-alpha-01
 * Contact: devrel@onesignal.com
 */

import { Filter } from './Filter';
import { Operator } from './Operator';
import { HttpFile } from '../http/http';

export class FilterExpression {
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
    'relation'?: FilterExpressionRelationEnum;
    /**
    * Strictly, this must be either `\"OR\"`, or `\"AND\"`.  It can be used to compose Filters as part of a Filters object.
    */
    'operator'?: FilterExpressionOperatorEnum;

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
            "type": "FilterExpressionRelationEnum",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "FilterExpressionOperatorEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FilterExpression.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FilterExpressionRelationEnum = ">" | "<" | "=" | "!=" | "exists" | "not_exists" | "time_elapsed_gt" | "time_elapsed_lt" ;
export type FilterExpressionOperatorEnum = "OR" | "AND" ;

