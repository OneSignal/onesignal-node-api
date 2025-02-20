/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { CreateUserConflictResponseErrorsItemsMeta } from './CreateUserConflictResponseErrorsItemsMeta';
import { HttpFile } from '../http/http';

export class CreateUserConflictResponseErrorsInner {
    'code'?: string;
    'title'?: string;
    'meta'?: CreateUserConflictResponseErrorsItemsMeta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "CreateUserConflictResponseErrorsItemsMeta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateUserConflictResponseErrorsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

