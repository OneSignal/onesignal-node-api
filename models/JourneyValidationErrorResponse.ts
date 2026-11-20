/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { JourneyValidationError } from './JourneyValidationError';
import { HttpFile } from '../http/http';

/**
* Validation error response. The failing field and any positional detail are in `meta`.
*/
export class JourneyValidationErrorResponse {
    'errors'?: Array<JourneyValidationError>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<JourneyValidationError>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyValidationErrorResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

