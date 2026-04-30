/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.4.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class CreateNotificationSuccessResponse {
    /**
    * Notification identifier when the request created a notification. An empty string means no notification was created; read `errors` for details (HTTP may still be 200).
    */
    'id'?: string;
    /**
    * Optional correlation / idempotency-related value from the API response. This is not the end-user External ID used for targeting recipients (that lives under `include_aliases.external_id`).
    */
    'external_id'?: string;
    /**
    * Polymorphic field: may be an array of human-readable strings and/or an object (for example with `invalid_aliases`, `invalid_external_user_ids`, or `invalid_player_ids`) depending on the API response; HTTP may still be 200 with partial success. Typed SDKs model this loosely so both shapes deserialize.
    */
    'errors'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "external_id",
            "baseName": "external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateNotificationSuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

