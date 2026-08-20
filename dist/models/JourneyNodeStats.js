"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyNodeStats = void 0;
class JourneyNodeStats {
    static getAttributeTypeMap() {
        return JourneyNodeStats.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyNodeStats = JourneyNodeStats;
JourneyNodeStats.discriminator = undefined;
JourneyNodeStats.attributeTypeMap = [
    {
        "name": "kind",
        "baseName": "kind",
        "type": "JourneyNodeStatsKindEnum",
        "format": ""
    },
    {
        "name": "waiting",
        "baseName": "waiting",
        "type": "number",
        "format": ""
    },
    {
        "name": "completed",
        "baseName": "completed",
        "type": "number",
        "format": ""
    },
    {
        "name": "exited_early",
        "baseName": "exited_early",
        "type": "number",
        "format": ""
    },
    {
        "name": "message_stats",
        "baseName": "message_stats",
        "type": "JourneyMessageStats",
        "format": ""
    }
];
//# sourceMappingURL=JourneyNodeStats.js.map