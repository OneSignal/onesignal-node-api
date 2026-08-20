"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneySchedule = void 0;
class JourneySchedule {
    static getAttributeTypeMap() {
        return JourneySchedule.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneySchedule = JourneySchedule;
JourneySchedule.discriminator = undefined;
JourneySchedule.attributeTypeMap = [
    {
        "name": "start_at",
        "baseName": "start_at",
        "type": "string",
        "format": ""
    },
    {
        "name": "stop_at",
        "baseName": "stop_at",
        "type": "string",
        "format": ""
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=JourneySchedule.js.map