/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class CreateUserConflictResponseErrorsItemsMeta {
    'conflicting_aliases'?: object;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conflicting_aliases",
            "baseName": "conflicting_aliases",
            "type": "object",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateUserConflictResponseErrorsItemsMeta.attributeTypeMap;
    }

    public constructor() {
    }
}

