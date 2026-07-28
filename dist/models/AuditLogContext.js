"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogContext = void 0;
class AuditLogContext {
    static getAttributeTypeMap() {
        return AuditLogContext.attributeTypeMap;
    }
    constructor() {
    }
}
exports.AuditLogContext = AuditLogContext;
AuditLogContext.discriminator = undefined;
AuditLogContext.attributeTypeMap = [
    {
        "name": "country",
        "baseName": "country",
        "type": "string",
        "format": ""
    },
    {
        "name": "ip",
        "baseName": "ip",
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
        "name": "user_agent",
        "baseName": "user_agent",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=AuditLogContext.js.map