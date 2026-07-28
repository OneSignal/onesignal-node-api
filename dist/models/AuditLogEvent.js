"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogEvent = void 0;
class AuditLogEvent {
    static getAttributeTypeMap() {
        return AuditLogEvent.attributeTypeMap;
    }
    constructor() {
    }
}
exports.AuditLogEvent = AuditLogEvent;
AuditLogEvent.discriminator = undefined;
AuditLogEvent.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=AuditLogEvent.js.map