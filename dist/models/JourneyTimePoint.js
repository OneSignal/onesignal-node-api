"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyTimePoint = void 0;
class JourneyTimePoint {
    static getAttributeTypeMap() {
        return JourneyTimePoint.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyTimePoint = JourneyTimePoint;
JourneyTimePoint.discriminator = undefined;
JourneyTimePoint.attributeTypeMap = [
    {
        "name": "hour",
        "baseName": "hour",
        "type": "number",
        "format": ""
    },
    {
        "name": "minute",
        "baseName": "minute",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=JourneyTimePoint.js.map