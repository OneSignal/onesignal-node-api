"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentNotificationTarget = void 0;
var SegmentNotificationTarget = (function () {
    function SegmentNotificationTarget() {
    }
    SegmentNotificationTarget.getAttributeTypeMap = function () {
        return SegmentNotificationTarget.attributeTypeMap;
    };
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
    return SegmentNotificationTarget;
}());
exports.SegmentNotificationTarget = SegmentNotificationTarget;
//# sourceMappingURL=SegmentNotificationTarget.js.map