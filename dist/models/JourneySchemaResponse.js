"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneySchemaResponse = void 0;
class JourneySchemaResponse {
    static getAttributeTypeMap() {
        return JourneySchemaResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.JourneySchemaResponse = JourneySchemaResponse;
JourneySchemaResponse.discriminator = undefined;
JourneySchemaResponse.attributeTypeMap = [
    {
        "name": "operation",
        "baseName": "operation",
        "type": "JourneySchemaResponseOperationEnum",
        "format": ""
    },
    {
        "name": "document",
        "baseName": "document",
        "type": "JourneySchemaResponseDocumentEnum",
        "format": ""
    },
    {
        "name": "schema",
        "baseName": "schema",
        "type": "{ [key: string]: any; }",
        "format": ""
    }
];
//# sourceMappingURL=JourneySchemaResponse.js.map