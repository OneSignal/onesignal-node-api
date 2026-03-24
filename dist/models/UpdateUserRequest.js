"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserRequest = void 0;
var UpdateUserRequest = (function () {
    function UpdateUserRequest() {
    }
    UpdateUserRequest.getAttributeTypeMap = function () {
        return UpdateUserRequest.attributeTypeMap;
    };
    UpdateUserRequest.discriminator = undefined;
    UpdateUserRequest.attributeTypeMap = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "PropertiesObject",
            "format": ""
        },
        {
            "name": "refresh_device_metadata",
            "baseName": "refresh_device_metadata",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deltas",
            "baseName": "deltas",
            "type": "PropertiesDeltas",
            "format": ""
        }
    ];
    return UpdateUserRequest;
}());
exports.UpdateUserRequest = UpdateUserRequest;
//# sourceMappingURL=UpdateUserRequest.js.map