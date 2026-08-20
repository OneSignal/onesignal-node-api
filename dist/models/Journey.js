"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Journey = void 0;
class Journey {
    static getAttributeTypeMap() {
        return Journey.attributeTypeMap;
    }
    constructor() {
    }
}
exports.Journey = Journey;
Journey.discriminator = undefined;
Journey.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "app_id",
        "baseName": "app_id",
        "type": "string",
        "format": ""
    },
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
        "name": "state",
        "baseName": "state",
        "type": "JourneyStateEnum",
        "format": ""
    },
    {
        "name": "created_at",
        "baseName": "created_at",
        "type": "string",
        "format": ""
    },
    {
        "name": "updated_at",
        "baseName": "updated_at",
        "type": "string",
        "format": ""
    },
    {
        "name": "started_at",
        "baseName": "started_at",
        "type": "string",
        "format": ""
    },
    {
        "name": "archived_at",
        "baseName": "archived_at",
        "type": "string",
        "format": ""
    },
    {
        "name": "created_source",
        "baseName": "created_source",
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
        "name": "concurrency_key",
        "baseName": "concurrency_key",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=Journey.js.map