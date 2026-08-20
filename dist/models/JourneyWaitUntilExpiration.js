"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyWaitUntilExpiration = void 0;
class JourneyWaitUntilExpiration {
    static getAttributeTypeMap() {
        return JourneyWaitUntilExpiration.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyWaitUntilExpiration = JourneyWaitUntilExpiration;
JourneyWaitUntilExpiration.discriminator = undefined;
JourneyWaitUntilExpiration.attributeTypeMap = [
    {
        "name": "duration_seconds",
        "baseName": "duration_seconds",
        "type": "number",
        "format": ""
    },
    {
        "name": "exits",
        "baseName": "exits",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=JourneyWaitUntilExpiration.js.map