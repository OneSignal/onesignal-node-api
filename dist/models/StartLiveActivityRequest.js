"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartLiveActivityRequest = void 0;
var StartLiveActivityRequest = (function () {
    function StartLiveActivityRequest() {
    }
    StartLiveActivityRequest.getAttributeTypeMap = function () {
        return StartLiveActivityRequest.attributeTypeMap;
    };
    StartLiveActivityRequest.discriminator = undefined;
    StartLiveActivityRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "StartLiveActivityRequestEventEnum",
            "format": ""
        },
        {
            "name": "activity_id",
            "baseName": "activity_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "event_attributes",
            "baseName": "event_attributes",
            "type": "object",
            "format": ""
        },
        {
            "name": "event_updates",
            "baseName": "event_updates",
            "type": "object",
            "format": ""
        },
        {
            "name": "contents",
            "baseName": "contents",
            "type": "LanguageStringMap",
            "format": ""
        },
        {
            "name": "headings",
            "baseName": "headings",
            "type": "LanguageStringMap",
            "format": ""
        },
        {
            "name": "stale_date",
            "baseName": "stale_date",
            "type": "number",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": ""
        },
        {
            "name": "ios_relevance_score",
            "baseName": "ios_relevance_score",
            "type": "number",
            "format": ""
        },
        {
            "name": "idempotency_key",
            "baseName": "idempotency_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "include_aliases",
            "baseName": "include_aliases",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "include_subscription_ids",
            "baseName": "include_subscription_ids",
            "type": "Array<string>",
            "format": ""
        },
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
            "name": "filters",
            "baseName": "filters",
            "type": "Array<FilterExpression>",
            "format": ""
        }
    ];
    return StartLiveActivityRequest;
}());
exports.StartLiveActivityRequest = StartLiveActivityRequest;
//# sourceMappingURL=StartLiveActivityRequest.js.map