"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEventsRequest = void 0;
var CustomEventsRequest = (function () {
    function CustomEventsRequest() {
    }
    CustomEventsRequest.getAttributeTypeMap = function () {
        return CustomEventsRequest.attributeTypeMap;
    };
    CustomEventsRequest.discriminator = undefined;
    CustomEventsRequest.attributeTypeMap = [
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<CustomEvent>",
            "format": ""
        }
    ];
    return CustomEventsRequest;
}());
exports.CustomEventsRequest = CustomEventsRequest;
//# sourceMappingURL=CustomEventsRequest.js.map