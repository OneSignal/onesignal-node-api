/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class Operator {
    /**
    * Strictly, this must be either `\"OR\"`, or `\"AND\"`.  It can be used to compose Filters as part of a Filters object.
    */
    'operator'?: OperatorOperatorEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "OperatorOperatorEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Operator.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type OperatorOperatorEnum = "OR" | "AND" ;

