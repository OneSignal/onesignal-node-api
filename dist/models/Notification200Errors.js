"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification200Errors = void 0;
var Notification200Errors = (function () {
    function Notification200Errors() {
    }
    Notification200Errors.getAttributeTypeMap = function () {
        return Notification200Errors.attributeTypeMap;
    };
    Notification200Errors.discriminator = undefined;
    Notification200Errors.attributeTypeMap = [
        {
            "name": "invalid_external_user_ids",
            "baseName": "invalid_external_user_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "invalid_player_ids",
            "baseName": "invalid_player_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return Notification200Errors;
}());
exports.Notification200Errors = Notification200Errors;
//# sourceMappingURL=Notification200Errors.js.map