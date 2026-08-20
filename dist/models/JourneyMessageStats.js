"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyMessageStats = void 0;
class JourneyMessageStats {
    static getAttributeTypeMap() {
        return JourneyMessageStats.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyMessageStats = JourneyMessageStats;
JourneyMessageStats.discriminator = undefined;
JourneyMessageStats.attributeTypeMap = [
    {
        "name": "totals",
        "baseName": "totals",
        "type": "{ [key: string]: number; }",
        "format": ""
    }
];
//# sourceMappingURL=JourneyMessageStats.js.map