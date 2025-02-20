/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { OutcomeData } from './OutcomeData';
import { HttpFile } from '../http/http';

export class OutcomesData {
    'outcomes'?: Array<OutcomeData>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "outcomes",
            "baseName": "outcomes",
            "type": "Array<OutcomeData>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OutcomesData.attributeTypeMap;
    }

    public constructor() {
    }
}

