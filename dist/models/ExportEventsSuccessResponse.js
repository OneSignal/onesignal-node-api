"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportEventsSuccessResponse = void 0;
class ExportEventsSuccessResponse {
    static getAttributeTypeMap() {
        return ExportEventsSuccessResponse.attributeTypeMap;
    }
    constructor() {
    }
}
exports.ExportEventsSuccessResponse = ExportEventsSuccessResponse;
ExportEventsSuccessResponse.discriminator = undefined;
ExportEventsSuccessResponse.attributeTypeMap = [
    {
        "name": "csv_file_url",
        "baseName": "csv_file_url",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ExportEventsSuccessResponse.js.map