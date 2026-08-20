"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyEarlyExitRules = void 0;
class JourneyEarlyExitRules {
    static getAttributeTypeMap() {
        return JourneyEarlyExitRules.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyEarlyExitRules = JourneyEarlyExitRules;
JourneyEarlyExitRules.discriminator = undefined;
JourneyEarlyExitRules.attributeTypeMap = [
    {
        "name": "on_segment",
        "baseName": "on_segment",
        "type": "JourneyEarlyExitRulesOnSegment",
        "format": ""
    },
    {
        "name": "when_not_in_audience",
        "baseName": "when_not_in_audience",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "on_session",
        "baseName": "on_session",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "on_event",
        "baseName": "on_event",
        "type": "JourneyEarlyExitRulesOnEvent",
        "format": ""
    }
];
//# sourceMappingURL=JourneyEarlyExitRules.js.map