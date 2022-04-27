"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidIdentifierError = void 0;
var InvalidIdentifierError = (function () {
    function InvalidIdentifierError() {
    }
    InvalidIdentifierError.getAttributeTypeMap = function () {
        return InvalidIdentifierError.attributeTypeMap;
    };
    InvalidIdentifierError.discriminator = undefined;
    InvalidIdentifierError.attributeTypeMap = [
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
    return InvalidIdentifierError;
}());
exports.InvalidIdentifierError = InvalidIdentifierError;
//# sourceMappingURL=InvalidIdentifierError.js.map