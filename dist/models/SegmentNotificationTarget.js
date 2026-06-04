"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentNotificationTarget = void 0;
class SegmentNotificationTarget {
    static getAttributeTypeMap() {
        return SegmentNotificationTarget.attributeTypeMap;
    }
    constructor() {
    }
}
exports.SegmentNotificationTarget = SegmentNotificationTarget;
SegmentNotificationTarget.discriminator = undefined;
SegmentNotificationTarget.attributeTypeMap = [
    {
        "name": "included_segments",
        "baseName": "included_segments",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "excluded_segments",
        "baseName": "excluded_segments",
        "type": "Array<string>",
        "format": ""
    }
];
//# sourceMappingURL=SegmentNotificationTarget.js.map