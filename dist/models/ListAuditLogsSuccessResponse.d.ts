import { AuditLogEvent } from './AuditLogEvent';
export declare class ListAuditLogsSuccessResponse {
    'audit_logs'?: Array<AuditLogEvent>;
    'has_more'?: boolean;
    'next_cursor'?: string;
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
