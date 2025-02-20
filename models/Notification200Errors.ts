/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { InvalidIdentifierError } from './InvalidIdentifierError';
import { HttpFile } from '../http/http';

export class Notification200Errors {
    /**
    * Returned if using include_external_user_ids
    */
    'invalid_external_user_ids'?: Array<string>;
    /**
    * Returned if using include_player_ids and some were valid and others were not.
    */
    'invalid_player_ids'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "invalid_external_user_ids",
            "baseName": "invalid_external_user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "invalid_player_ids",
            "baseName": "invalid_player_ids",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Notification200Errors.attributeTypeMap;
    }

    public constructor() {
    }
}

