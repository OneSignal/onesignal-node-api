"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyListResponse = void 0;
class JourneyListResponse {
    static getAttributeTypeMap() {
        return JourneyListResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyListResponse = JourneyListResponse;
JourneyListResponse.discriminator = undefined;
JourneyListResponse.attributeTypeMap = [
    {
        "name": "journeys",
        "baseName": "journeys",
        "type": "Array<JourneyListItem>",
        "format": ""
    },
    {
        "name": "has_more",
        "baseName": "has_more",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "next_cursor",
        "baseName": "next_cursor",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=JourneyListResponse.js.map