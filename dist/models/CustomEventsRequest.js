"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEventsRequest = void 0;
class CustomEventsRequest {
    static getAttributeTypeMap() {
        return CustomEventsRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.CustomEventsRequest = CustomEventsRequest;
CustomEventsRequest.discriminator = undefined;
CustomEventsRequest.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<CustomEvent>",
        "format": ""
    }
];
//# sourceMappingURL=CustomEventsRequest.js.map