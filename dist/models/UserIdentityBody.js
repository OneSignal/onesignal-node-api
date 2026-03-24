"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdentityBody = void 0;
var UserIdentityBody = (function () {
    function UserIdentityBody() {
    }
    UserIdentityBody.getAttributeTypeMap = function () {
        return UserIdentityBody.attributeTypeMap;
    };
    UserIdentityBody.discriminator = undefined;
    UserIdentityBody.attributeTypeMap = [
        {
            "name": "identity",
            "baseName": "identity",
            "type": "{ [key: string]: string; }",
            "format": ""
        }
    ];
    return UserIdentityBody;
}());
exports.UserIdentityBody = UserIdentityBody;
//# sourceMappingURL=UserIdentityBody.js.map