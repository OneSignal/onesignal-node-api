"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyListAudience = void 0;
class JourneyListAudience {
    static getAttributeTypeMap() {
        return JourneyListAudience.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyListAudience = JourneyListAudience;
JourneyListAudience.discriminator = undefined;
JourneyListAudience.attributeTypeMap = [
    {
        "name": "kind",
        "baseName": "kind",
        "type": "JourneyListAudienceKindEnum",
        "format": ""
    }
];
//# sourceMappingURL=JourneyListAudience.js.map