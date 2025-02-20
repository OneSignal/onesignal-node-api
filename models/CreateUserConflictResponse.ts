/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { CreateUserConflictResponseErrorsInner } from './CreateUserConflictResponseErrorsInner';
import { HttpFile } from '../http/http';

export class CreateUserConflictResponse {
    'errors'?: Array<CreateUserConflictResponseErrorsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<CreateUserConflictResponseErrorsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateUserConflictResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

