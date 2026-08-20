"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyListItem = void 0;
class JourneyListItem {
    static getAttributeTypeMap() {
        return JourneyListItem.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyListItem = JourneyListItem;
JourneyListItem.discriminator = undefined;
JourneyListItem.attributeTypeMap = [
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
        "name": "state",
        "baseName": "state",
        "type": "JourneyListItemStateEnum",
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
        "name": "schedule",
        "baseName": "schedule",
        "type": "JourneySchedule",
        "format": ""
    },
    {
        "name": "audience",
        "baseName": "audience",
        "type": "JourneyListAudience",
        "format": ""
    },
    {
        "name": "reentry_rules",
        "baseName": "reentry_rules",
        "type": "JourneyReentryRules",
        "format": ""
    }
];
//# sourceMappingURL=JourneyListItem.js.map