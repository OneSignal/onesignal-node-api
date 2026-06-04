"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTemplateRequest = void 0;
class CreateTemplateRequest {
    static getAttributeTypeMap() {
        return CreateTemplateRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.CreateTemplateRequest = CreateTemplateRequest;
CreateTemplateRequest.discriminator = undefined;
CreateTemplateRequest.attributeTypeMap = [
    {
        "name": "app_id",
        "baseName": "app_id",
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
        "name": "contents",
        "baseName": "contents",
        "type": "LanguageStringMap",
        "format": ""
    },
    {
        "name": "headings",
        "baseName": "headings",
        "type": "LanguageStringMap",
        "format": ""
    },
    {
        "name": "subtitle",
        "baseName": "subtitle",
        "type": "LanguageStringMap",
        "format": ""
    },
    {
        "name": "is_email",
        "baseName": "isEmail",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "email_subject",
        "baseName": "email_subject",
        "type": "string",
        "format": ""
    },
    {
        "name": "email_body",
        "baseName": "email_body",
        "type": "string",
        "format": ""
    },
    {
        "name": "email_bcc",
        "baseName": "email_bcc",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "is_sms",
        "baseName": "isSMS",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "dynamic_content",
        "baseName": "dynamic_content",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CreateTemplateRequest.js.map