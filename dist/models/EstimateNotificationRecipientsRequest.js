"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimateNotificationRecipientsRequest = void 0;
class EstimateNotificationRecipientsRequest {
    static getAttributeTypeMap() {
        return EstimateNotificationRecipientsRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EstimateNotificationRecipientsRequest = EstimateNotificationRecipientsRequest;
EstimateNotificationRecipientsRequest.discriminator = undefined;
EstimateNotificationRecipientsRequest.attributeTypeMap = [
    {
        "name": "included_segments",
        "baseName": "included_segments",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "excluded_segments",
        "baseName": "excluded_segments",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "app_id",
        "baseName": "app_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "filters",
        "baseName": "filters",
        "type": "Array<FilterExpression>",
        "format": ""
    },
    {
        "name": "include_aliases",
        "baseName": "include_aliases",
        "type": "{ [key: string]: Array<string>; }",
        "format": ""
    },
    {
        "name": "target_channel",
        "baseName": "target_channel",
        "type": "EstimateNotificationRecipientsRequestTargetChannelEnum",
        "format": ""
    }
];
//# sourceMappingURL=EstimateNotificationRecipientsRequest.js.map