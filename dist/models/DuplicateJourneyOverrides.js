"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateJourneyOverrides = void 0;
class DuplicateJourneyOverrides {
    static getAttributeTypeMap() {
        return DuplicateJourneyOverrides.attributeTypeMap;
    }
    constructor() {
    }
}
exports.DuplicateJourneyOverrides = DuplicateJourneyOverrides;
DuplicateJourneyOverrides.discriminator = undefined;
DuplicateJourneyOverrides.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "audience",
        "baseName": "audience",
        "type": "JourneyAudience",
        "format": ""
    },
    {
        "name": "early_exit",
        "baseName": "early_exit",
        "type": "JourneyEarlyExit",
        "format": ""
    },
    {
        "name": "reentry_rules",
        "baseName": "reentry_rules",
        "type": "JourneyReentryRules",
        "format": ""
    },
    {
        "name": "schedule",
        "baseName": "schedule",
        "type": "JourneySchedule",
        "format": ""
    },
    {
        "name": "nodes",
        "baseName": "nodes",
        "type": "Array<JourneyNode>",
        "format": ""
    }
];
//# sourceMappingURL=DuplicateJourneyOverrides.js.map