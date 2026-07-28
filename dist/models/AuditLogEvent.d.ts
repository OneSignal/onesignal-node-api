import { AuditLogActor } from './AuditLogActor';
import { AuditLogContext } from './AuditLogContext';
import { AuditLogTarget } from './AuditLogTarget';
export declare class AuditLogEvent {
    'action'?: string;
    'actor'?: AuditLogActor;
    'app_id'?: string;
    'context'?: AuditLogContext;
    'id'?: string;
    'metadata'?: object;
    'occurred_at'?: string;
    'organization_id'?: string;
    'targets'?: Array<AuditLogTarget>;
    'version'?: number;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
