/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.11.2
 * Contact: devrel@onesignal.com
 */

import { AuditLogEvent } from './AuditLogEvent';
import { HttpFile } from '../http/http';

export class ListAuditLogsSuccessResponse {
    /**
    * Array of audit log events, ordered by occurred_at ascending.
    */
    'audit_logs'?: Array<AuditLogEvent>;
    /**
    * True if additional events exist beyond this page. Use next_cursor to fetch the next page.
    */
    'has_more'?: boolean;
    /**
    * Opaque cursor to pass as cursor in the next request. Only present when has_more is true.
    */
    'next_cursor'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "audit_logs",
            "baseName": "audit_logs",
            "type": "Array<AuditLogEvent>",
            "format": ""
        },
        {
            "name": "has_more",
            "baseName": "has_more",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "next_cursor",
            "baseName": "next_cursor",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListAuditLogsSuccessResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

