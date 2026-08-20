"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyStats = void 0;
class JourneyStats {
    static getAttributeTypeMap() {
        return JourneyStats.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyStats = JourneyStats;
JourneyStats.discriminator = undefined;
JourneyStats.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "started",
        "baseName": "started",
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
        "name": "nodes",
        "baseName": "nodes",
        "type": "{ [key: string]: JourneyNodeStats; }",
        "format": ""
    },
    {
        "name": "branches",
        "baseName": "branches",
        "type": "{ [key: string]: JourneyBranchStats; }",
        "format": ""
    }
];
//# sourceMappingURL=JourneyStats.js.map