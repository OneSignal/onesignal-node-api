/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { DuplicateJourneyOverrides } from './DuplicateJourneyOverrides';
import { HttpFile } from '../http/http';

/**
* Optional body for Duplicate journey. Only overrides is applied. A journey field sent at the top level is ignored.
*/
export class DuplicateJourneyRequest {
    'overrides'?: DuplicateJourneyOverrides;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "overrides",
            "baseName": "overrides",
            "type": "DuplicateJourneyOverrides",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DuplicateJourneyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

