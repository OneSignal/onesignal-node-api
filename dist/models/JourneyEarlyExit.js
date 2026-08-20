"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyEarlyExit = void 0;
class JourneyEarlyExit {
    static getAttributeTypeMap() {
        return JourneyEarlyExit.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyEarlyExit = JourneyEarlyExit;
JourneyEarlyExit.discriminator = undefined;
JourneyEarlyExit.attributeTypeMap = [
    {
        "name": "rules",
        "baseName": "rules",
        "type": "JourneyEarlyExitRules",
        "format": ""
    },
    {
        "name": "tag_on_early_exit",
        "baseName": "tag_on_early_exit",
        "type": "{ [key: string]: string; }",
        "format": ""
    }
];
//# sourceMappingURL=JourneyEarlyExit.js.map