/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.2.1
 * Contact: devrel@onesignal.com
 */

import { IdentifyUserConflictResponseErrorsInner } from './IdentifyUserConflictResponseErrorsInner';
import { HttpFile } from '../http/http';

export class IdentifyUserConflictResponse {
    'errors'?: Array<IdentifyUserConflictResponseErrorsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<IdentifyUserConflictResponseErrorsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IdentifyUserConflictResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

