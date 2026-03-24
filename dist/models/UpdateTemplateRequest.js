"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTemplateRequest = void 0;
var UpdateTemplateRequest = (function () {
    function UpdateTemplateRequest() {
    }
    UpdateTemplateRequest.getAttributeTypeMap = function () {
        return UpdateTemplateRequest.attributeTypeMap;
    };
    UpdateTemplateRequest.discriminator = undefined;
    UpdateTemplateRequest.attributeTypeMap = [
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
    return UpdateTemplateRequest;
}());
exports.UpdateTemplateRequest = UpdateTemplateRequest;
//# sourceMappingURL=UpdateTemplateRequest.js.map