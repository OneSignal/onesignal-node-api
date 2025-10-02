/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.3.0
 * Contact: devrel@onesignal.com
 */

import { TemplateResource } from './TemplateResource';
import { HttpFile } from '../http/http';

export class TemplatesListResponse {
    'templates'?: Array<TemplateResource>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "templates",
            "baseName": "templates",
            "type": "Array<TemplateResource>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplatesListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

