"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
class Button {
    static getAttributeTypeMap() {
        return Button.attributeTypeMap;
    }
    constructor() {
    }
}
exports.Button = Button;
Button.discriminator = undefined;
Button.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=Button.js.map