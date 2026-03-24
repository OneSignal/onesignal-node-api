"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLiveActivityRequest = void 0;
var UpdateLiveActivityRequest = (function () {
    function UpdateLiveActivityRequest() {
    }
    UpdateLiveActivityRequest.getAttributeTypeMap = function () {
        return UpdateLiveActivityRequest.attributeTypeMap;
    };
    UpdateLiveActivityRequest.discriminator = undefined;
    UpdateLiveActivityRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "UpdateLiveActivityRequestEventEnum",
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
            "name": "sound",
            "baseName": "sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "stale_date",
            "baseName": "stale_date",
            "type": "number",
            "format": ""
        },
        {
            "name": "dismissal_date",
            "baseName": "dismissal_date",
            "type": "number",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": ""
        }
    ];
    return UpdateLiveActivityRequest;
}());
exports.UpdateLiveActivityRequest = UpdateLiveActivityRequest;
//# sourceMappingURL=UpdateLiveActivityRequest.js.map