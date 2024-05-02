/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.0-alpha-01
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class SegmentData {
    /**
    * The segment ID
    */
    'id'?: string;
    /**
    * The segment name
    */
    'name'?: string;
    /**
    * Date segment created
    */
    'created_at'?: string;
    /**
    * Date segment last updated
    */
    'updated_at'?: string;
    /**
    * The app id
    */
    'app_id'?: string;
    /**
    * Is the segment read only?
    */
    'read_only'?: boolean;
    /**
    * Is the segment active?
    */
    'is_active'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "read_only",
            "baseName": "read_only",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "is_active",
            "baseName": "is_active",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SegmentData.attributeTypeMap;
    }

    public constructor() {
    }
}

