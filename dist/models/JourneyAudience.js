"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyAudience = void 0;
class JourneyAudience {
    static getAttributeTypeMap() {
        return JourneyAudience.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyAudience = JourneyAudience;
JourneyAudience.discriminator = undefined;
JourneyAudience.attributeTypeMap = [
    {
        "name": "kind",
        "baseName": "kind",
        "type": "JourneyAudienceKindEnum",
        "format": ""
    },
    {
        "name": "included_segment_ids",
        "baseName": "included_segment_ids",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "excluded_segment_ids",
        "baseName": "excluded_segment_ids",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "future_additions_only",
        "baseName": "future_additions_only",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "Array<Array<JourneyEventAttribute>>",
        "format": ""
    }
];
//# sourceMappingURL=JourneyAudience.js.map