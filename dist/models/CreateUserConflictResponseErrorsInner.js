"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserConflictResponseErrorsInner = void 0;
var CreateUserConflictResponseErrorsInner = (function () {
    function CreateUserConflictResponseErrorsInner() {
    }
    CreateUserConflictResponseErrorsInner.getAttributeTypeMap = function () {
        return CreateUserConflictResponseErrorsInner.attributeTypeMap;
    };
    CreateUserConflictResponseErrorsInner.discriminator = undefined;
    CreateUserConflictResponseErrorsInner.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "CreateUserConflictResponseErrorsItemsMeta",
            "format": ""
        }
    ];
    return CreateUserConflictResponseErrorsInner;
}());
exports.CreateUserConflictResponseErrorsInner = CreateUserConflictResponseErrorsInner;
//# sourceMappingURL=CreateUserConflictResponseErrorsInner.js.map