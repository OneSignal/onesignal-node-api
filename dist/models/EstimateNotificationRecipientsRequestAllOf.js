"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimateNotificationRecipientsRequestAllOf = void 0;
class EstimateNotificationRecipientsRequestAllOf {
    static getAttributeTypeMap() {
        return EstimateNotificationRecipientsRequestAllOf.attributeTypeMap;
    }
    constructor() {
    }
}
exports.EstimateNotificationRecipientsRequestAllOf = EstimateNotificationRecipientsRequestAllOf;
EstimateNotificationRecipientsRequestAllOf.discriminator = undefined;
EstimateNotificationRecipientsRequestAllOf.attributeTypeMap = [
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
        "type": "EstimateNotificationRecipientsRequestAllOfTargetChannelEnum",
        "format": ""
    }
];
//# sourceMappingURL=EstimateNotificationRecipientsRequestAllOf.js.map