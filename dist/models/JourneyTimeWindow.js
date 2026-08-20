"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyTimeWindow = void 0;
class JourneyTimeWindow {
    static getAttributeTypeMap() {
        return JourneyTimeWindow.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneyTimeWindow = JourneyTimeWindow;
JourneyTimeWindow.discriminator = undefined;
JourneyTimeWindow.attributeTypeMap = [
    {
        "name": "start",
        "baseName": "start",
        "type": "JourneyTimePoint",
        "format": ""
    },
    {
        "name": "end",
        "baseName": "end",
        "type": "JourneyTimePoint",
        "format": ""
    },
    {
        "name": "day_of_week",
        "baseName": "day_of_week",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=JourneyTimeWindow.js.map