"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateResource = void 0;
class TemplateResource {
    static getAttributeTypeMap() {
        return TemplateResource.attributeTypeMap;
    }
    constructor() {
    }
}
exports.TemplateResource = TemplateResource;
TemplateResource.discriminator = undefined;
TemplateResource.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "created_at",
        "baseName": "created_at",
        "type": "string",
        "format": "date-time"
    },
    {
        "name": "updated_at",
        "baseName": "updated_at",
        "type": "string",
        "format": "date-time"
    },
    {
        "name": "channel",
        "baseName": "channel",
        "type": "TemplateResourceChannelEnum",
        "format": ""
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "{ [key: string]: any; }",
        "format": ""
    }
];
//# sourceMappingURL=TemplateResource.js.map