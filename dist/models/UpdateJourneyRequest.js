"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJourneyRequest = void 0;
class UpdateJourneyRequest {
    static getAttributeTypeMap() {
        return UpdateJourneyRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.UpdateJourneyRequest = UpdateJourneyRequest;
UpdateJourneyRequest.discriminator = undefined;
UpdateJourneyRequest.attributeTypeMap = [
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
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "UpdateJourneyRequestStateEnum",
        "format": ""
    },
    {
        "name": "concurrency_key",
        "baseName": "concurrency_key",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=UpdateJourneyRequest.js.map