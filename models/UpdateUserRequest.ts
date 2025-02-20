/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { PropertiesDeltas } from './PropertiesDeltas';
import { PropertiesObject } from './PropertiesObject';
import { HttpFile } from '../http/http';

export class UpdateUserRequest {
    'properties'?: PropertiesObject;
    'refresh_device_metadata'?: boolean;
    'deltas'?: PropertiesDeltas;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "PropertiesObject",
            "format": ""
        },
        {
            "name": "refresh_device_metadata",
            "baseName": "refresh_device_metadata",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deltas",
            "baseName": "deltas",
            "type": "PropertiesDeltas",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateUserRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

