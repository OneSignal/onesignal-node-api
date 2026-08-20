"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyBranchStats = void 0;
class JourneyBranchStats {
    static getAttributeTypeMap() {
        return JourneyBranchStats.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyBranchStats = JourneyBranchStats;
JourneyBranchStats.discriminator = undefined;
JourneyBranchStats.attributeTypeMap = [
    {
        "name": "completed",
        "baseName": "completed",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=JourneyBranchStats.js.map