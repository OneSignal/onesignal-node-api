"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyEventAttribute = void 0;
class JourneyEventAttribute {
    static getAttributeTypeMap() {
        return JourneyEventAttribute.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyEventAttribute = JourneyEventAttribute;
JourneyEventAttribute.discriminator = undefined;
JourneyEventAttribute.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    },
    {
        "name": "operator",
        "baseName": "operator",
        "type": "JourneyEventAttributeOperatorEnum",
        "format": ""
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=JourneyEventAttribute.js.map