"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebButton = void 0;
class WebButton {
    static getAttributeTypeMap() {
        return WebButton.attributeTypeMap;
    }
    constructor() {
    }
}
exports.WebButton = WebButton;
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
//# sourceMappingURL=WebButton.js.map