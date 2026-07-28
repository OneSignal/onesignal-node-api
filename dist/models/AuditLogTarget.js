"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogTarget = void 0;
class AuditLogTarget {
    static getAttributeTypeMap() {
        return AuditLogTarget.attributeTypeMap;
    }
    constructor() {
    }
}
exports.AuditLogTarget = AuditLogTarget;
AuditLogTarget.discriminator = undefined;
AuditLogTarget.attributeTypeMap = [
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
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=AuditLogTarget.js.map