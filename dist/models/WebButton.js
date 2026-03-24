"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebButton = void 0;
var WebButton = (function () {
    function WebButton() {
    }
    WebButton.getAttributeTypeMap = function () {
        return WebButton.attributeTypeMap;
    };
    WebButton.discriminator = undefined;
    WebButton.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }
    ];
    return WebButton;
}());
exports.WebButton = WebButton;
//# sourceMappingURL=WebButton.js.map