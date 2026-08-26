/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { AuditLogActor } from './AuditLogActor';
import { AuditLogContext } from './AuditLogContext';
import { AuditLogTarget } from './AuditLogTarget';
import { HttpFile } from '../http/http';

export class AuditLogEvent {
    /**
    * The action that was performed (e.g. notification.sent, segment.created, member.invited).
    */
    'action'?: string;
    'actor'?: AuditLogActor;
    /**
    * UUID of the app the event is associated with. Absent for org-level events.
    */
    'app_id'?: string;
    'context'?: AuditLogContext;
    /**
    * UUID of the audit log event.
    */
    'id'?: string;
    /**
    * Additional event-specific data that does not fit into the standard fields.
    */
    'metadata'?: object;
    /**
    * RFC 3339 timestamp of when the event occurred (e.g. 2026-02-18T12:34:56Z).
    */
    'occurred_at'?: string;
    /**
    * UUID of the organization the event belongs to.
    */
    'organization_id'?: string;
    /**
    * The resources the action was performed on. May be empty for org-level events.
    */
    'targets'?: Array<AuditLogTarget>;
    /**
    * Schema version of the event payload.
    */
    'version'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "actor",
            "baseName": "actor",
            "type": "AuditLogActor",
            "format": ""
        },
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "AuditLogContext",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object",
            "format": ""
        },
        {
            "name": "occurred_at",
            "baseName": "occurred_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "organization_id",
            "baseName": "organization_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "targets",
            "baseName": "targets",
            "type": "Array<AuditLogTarget>",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuditLogEvent.attributeTypeMap;
    }

    public constructor() {
    }
}

