/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.4.0
 * Contact: devrel@onesignal.com
 */

import { NotificationWithMeta } from './NotificationWithMeta';
import { HttpFile } from '../http/http';

export class NotificationSlice {
    'total_count'?: number;
    'offset'?: number;
    'limit'?: number;
    'notifications'?: Array<NotificationWithMeta>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total_count",
            "baseName": "total_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "notifications",
            "baseName": "notifications",
            "type": "Array<NotificationWithMeta>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotificationSlice.attributeTypeMap;
    }

    public constructor() {
    }
}

