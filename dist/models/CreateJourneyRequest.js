"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJourneyRequest = void 0;
class CreateJourneyRequest {
    static getAttributeTypeMap() {
        return CreateJourneyRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.CreateJourneyRequest = CreateJourneyRequest;
CreateJourneyRequest.discriminator = undefined;
CreateJourneyRequest.attributeTypeMap = [
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
//# sourceMappingURL=CreateJourneyRequest.js.map