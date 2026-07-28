"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogActor = void 0;
class AuditLogActor {
    static getAttributeTypeMap() {
        return AuditLogActor.attributeTypeMap;
    }
    constructor() {
    }
}
exports.AuditLogActor = AuditLogActor;
AuditLogActor.discriminator = undefined;
AuditLogActor.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string",
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
//# sourceMappingURL=AuditLogActor.js.map