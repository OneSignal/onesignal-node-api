/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class JourneyValidationError {
    /**
    * Stable, kebab-case error identifier. Always `invalid-payload` for validation failures.
    */
    'code'?: string;
    /**
    * Human-readable message. Wording may change between releases.
    */
    'title'?: string;
    /**
    * Structured context. Always includes `attribute` (the field, or `base` for request-level errors); may also include `path`, `node_id`, or `client_node_id`.
    */
    'meta'?: { [key: string]: any; };

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
            "type": "{ [key: string]: any; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyValidationError.attributeTypeMap;
    }

    public constructor() {
    }
}

