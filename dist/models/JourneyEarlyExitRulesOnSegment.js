"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyEarlyExitRulesOnSegment = void 0;
class JourneyEarlyExitRulesOnSegment {
    static getAttributeTypeMap() {
        return JourneyEarlyExitRulesOnSegment.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyEarlyExitRulesOnSegment = JourneyEarlyExitRulesOnSegment;
JourneyEarlyExitRulesOnSegment.discriminator = undefined;
JourneyEarlyExitRulesOnSegment.attributeTypeMap = [
    {
        "name": "included_segment_ids",
        "baseName": "included_segment_ids",
        "type": "Array<string>",
        "format": ""
    }
];
//# sourceMappingURL=JourneyEarlyExitRulesOnSegment.js.map