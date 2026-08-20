"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJourneyNodeRequest = void 0;
class UpdateJourneyNodeRequest {
    static getAttributeTypeMap() {
        return UpdateJourneyNodeRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.UpdateJourneyNodeRequest = UpdateJourneyNodeRequest;
UpdateJourneyNodeRequest.discriminator = undefined;
UpdateJourneyNodeRequest.attributeTypeMap = [
    {
        "name": "client_node_id",
        "baseName": "client_node_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "annotation",
        "baseName": "annotation",
        "type": "string",
        "format": ""
    },
    {
        "name": "duration_seconds",
        "baseName": "duration_seconds",
        "type": "number",
        "format": ""
    },
    {
        "name": "relative_to",
        "baseName": "relative_to",
        "type": "UpdateJourneyNodeRequestRelativeToEnum",
        "format": ""
    },
    {
        "name": "windows",
        "baseName": "windows",
        "type": "Array<JourneyTimeWindow>",
        "format": ""
    },
    {
        "name": "time_zone",
        "baseName": "time_zone",
        "type": "string",
        "format": ""
    },
    {
        "name": "use_user_time_zone",
        "baseName": "use_user_time_zone",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "template_id",
        "baseName": "template_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "iam_id",
        "baseName": "iam_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "user_ttl_seconds",
        "baseName": "user_ttl_seconds",
        "type": "number",
        "format": ""
    },
    {
        "name": "webhook_id",
        "baseName": "webhook_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "assignments",
        "baseName": "assignments",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "randomize_on_entry",
        "baseName": "randomize_on_entry",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "branches",
        "baseName": "branches",
        "type": "Array<JourneyBranch>",
        "format": ""
    },
    {
        "name": "expiration",
        "baseName": "expiration",
        "type": "JourneyWaitUntilExpiration",
        "format": ""
    },
    {
        "name": "concurrency_key",
        "baseName": "concurrency_key",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=UpdateJourneyNodeRequest.js.map