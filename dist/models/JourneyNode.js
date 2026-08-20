"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyNode = void 0;
class JourneyNode {
    static getAttributeTypeMap() {
        return JourneyNode.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyNode = JourneyNode;
JourneyNode.discriminator = undefined;
JourneyNode.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "JourneyNodeKindEnum",
        "format": ""
    },
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
        "type": "JourneyNodeRelativeToEnum",
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
    }
];
//# sourceMappingURL=JourneyNode.js.map