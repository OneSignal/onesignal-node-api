"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferSubscriptionRequestBody = void 0;
var TransferSubscriptionRequestBody = (function () {
    function TransferSubscriptionRequestBody() {
    }
    TransferSubscriptionRequestBody.getAttributeTypeMap = function () {
        return TransferSubscriptionRequestBody.attributeTypeMap;
    };
    TransferSubscriptionRequestBody.discriminator = undefined;
    TransferSubscriptionRequestBody.attributeTypeMap = [
        {
            "name": "identity",
            "baseName": "identity",
            "type": "{ [key: string]: string; }",
            "format": ""
        }
    ];
    return TransferSubscriptionRequestBody;
}());
exports.TransferSubscriptionRequestBody = TransferSubscriptionRequestBody;
//# sourceMappingURL=TransferSubscriptionRequestBody.js.map