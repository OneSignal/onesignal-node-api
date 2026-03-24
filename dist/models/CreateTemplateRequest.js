"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTemplateRequest = void 0;
var CreateTemplateRequest = (function () {
    function CreateTemplateRequest() {
    }
    CreateTemplateRequest.getAttributeTypeMap = function () {
        return CreateTemplateRequest.attributeTypeMap;
    };
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
    return CreateTemplateRequest;
}());
exports.CreateTemplateRequest = CreateTemplateRequest;
//# sourceMappingURL=CreateTemplateRequest.js.map