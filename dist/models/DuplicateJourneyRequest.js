"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateJourneyRequest = void 0;
class DuplicateJourneyRequest {
    static getAttributeTypeMap() {
        return DuplicateJourneyRequest.attributeTypeMap;
    }
    constructor() {
    }
}
exports.DuplicateJourneyRequest = DuplicateJourneyRequest;
DuplicateJourneyRequest.discriminator = undefined;
DuplicateJourneyRequest.attributeTypeMap = [
    {
        "name": "overrides",
        "baseName": "overrides",
        "type": "DuplicateJourneyOverrides",
        "format": ""
    }
];
//# sourceMappingURL=DuplicateJourneyRequest.js.map