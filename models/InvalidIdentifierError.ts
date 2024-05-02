/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.0-alpha-01
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class InvalidIdentifierError {
    /**
    * Returned if using include_aliases
    */
    'invalid_aliases'?: Array<string>;
    /**
    * Returned if using include_subscription_ids and some were valid and others were not.
    */
    'invalid_player_ids'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "invalid_aliases",
            "baseName": "invalid_aliases",
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
        return InvalidIdentifierError.attributeTypeMap;
    }

    public constructor() {
    }
}

