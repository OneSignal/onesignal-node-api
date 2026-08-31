"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimateNotificationRecipientsSuccessResponse = void 0;
class EstimateNotificationRecipientsSuccessResponse {
    static getAttributeTypeMap() {
        return EstimateNotificationRecipientsSuccessResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EstimateNotificationRecipientsSuccessResponse = EstimateNotificationRecipientsSuccessResponse;
EstimateNotificationRecipientsSuccessResponse.discriminator = undefined;
EstimateNotificationRecipientsSuccessResponse.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number",
        "format": ""
    },
    {
        "name": "uncapped_count",
        "baseName": "uncapped_count",
        "type": "number",
        "format": ""
    },
    {
        "name": "cap_applied",
        "baseName": "cap_applied",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "mobile_suppressed",
        "baseName": "mobile_suppressed",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "mobile_excluded_count",
        "baseName": "mobile_excluded_count",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=EstimateNotificationRecipientsSuccessResponse.js.map