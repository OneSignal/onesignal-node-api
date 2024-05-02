/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.0-alpha-01
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class GenericError {
    'errors'?: any;
    'success'?: boolean;
    'reference'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "any",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GenericError.attributeTypeMap;
    }

    public constructor() {
    }
}

