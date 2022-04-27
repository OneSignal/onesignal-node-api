"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var Button = (function () {
    function Button() {
    }
    Button.getAttributeTypeMap = function () {
        return Button.attributeTypeMap;
    };
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
    return Button;
}());
exports.Button = Button;
//# sourceMappingURL=Button.js.map