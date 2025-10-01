/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.3.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class UpdateApiKeyRequest {
    'name'?: string;
    'ip_allowlist_mode'?: UpdateApiKeyRequestIpAllowlistModeEnum;
    'ip_allowlist'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "ip_allowlist_mode",
            "baseName": "ip_allowlist_mode",
            "type": "UpdateApiKeyRequestIpAllowlistModeEnum",
            "format": ""
        },
        {
            "name": "ip_allowlist",
            "baseName": "ip_allowlist",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateApiKeyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UpdateApiKeyRequestIpAllowlistModeEnum = "disabled" | "explicit" ;

