"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserConflictResponse = void 0;
var CreateUserConflictResponse = (function () {
    function CreateUserConflictResponse() {
    }
    CreateUserConflictResponse.getAttributeTypeMap = function () {
        return CreateUserConflictResponse.attributeTypeMap;
    };
    CreateUserConflictResponse.discriminator = undefined;
    CreateUserConflictResponse.attributeTypeMap = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<CreateUserConflictResponseErrorsInner>",
            "format": ""
        }
    ];
    return CreateUserConflictResponse;
}());
exports.CreateUserConflictResponse = CreateUserConflictResponse;
//# sourceMappingURL=CreateUserConflictResponse.js.map