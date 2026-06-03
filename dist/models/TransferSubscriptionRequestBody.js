"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferSubscriptionRequestBody = void 0;
class TransferSubscriptionRequestBody {
    static getAttributeTypeMap() {
        return TransferSubscriptionRequestBody.attributeTypeMap;
    }
    constructor() {
    }
}
exports.TransferSubscriptionRequestBody = TransferSubscriptionRequestBody;
TransferSubscriptionRequestBody.discriminator = undefined;
TransferSubscriptionRequestBody.attributeTypeMap = [
    {
        "name": "identity",
        "baseName": "identity",
        "type": "{ [key: string]: string; }",
        "format": ""
    }
];
//# sourceMappingURL=TransferSubscriptionRequestBody.js.map