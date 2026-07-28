"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAuditLogsSuccessResponse = void 0;
class ListAuditLogsSuccessResponse {
    static getAttributeTypeMap() {
        return ListAuditLogsSuccessResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.ListAuditLogsSuccessResponse = ListAuditLogsSuccessResponse;
ListAuditLogsSuccessResponse.discriminator = undefined;
ListAuditLogsSuccessResponse.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=ListAuditLogsSuccessResponse.js.map