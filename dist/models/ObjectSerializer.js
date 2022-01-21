"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./App"), exports);
__exportStar(require("./Button"), exports);
__exportStar(require("./DeliveryData"), exports);
__exportStar(require("./ExportPlayersRequestBody"), exports);
__exportStar(require("./Filter"), exports);
__exportStar(require("./FilterExpressions"), exports);
__exportStar(require("./FilterNotificationTarget"), exports);
__exportStar(require("./GetNotificationRequestBody"), exports);
__exportStar(require("./InlineResponse200"), exports);
__exportStar(require("./InlineResponse2001"), exports);
__exportStar(require("./InlineResponse2002"), exports);
__exportStar(require("./InlineResponse2003"), exports);
__exportStar(require("./InlineResponse2004"), exports);
__exportStar(require("./InlineResponse2005"), exports);
__exportStar(require("./InlineResponse201"), exports);
__exportStar(require("./InlineResponse400"), exports);
__exportStar(require("./InlineResponse4001"), exports);
__exportStar(require("./InlineResponse4002"), exports);
__exportStar(require("./InlineResponse409"), exports);
__exportStar(require("./Notification"), exports);
__exportStar(require("./NotificationAllOf"), exports);
__exportStar(require("./NotificationAllOfAndroidBackgroundLayout"), exports);
__exportStar(require("./NotificationSlice"), exports);
__exportStar(require("./NotificationTarget"), exports);
__exportStar(require("./Operator"), exports);
__exportStar(require("./OutcomeData"), exports);
__exportStar(require("./PlatformDeliveryData"), exports);
__exportStar(require("./Player"), exports);
__exportStar(require("./PlayerNotificationTarget"), exports);
__exportStar(require("./PlayerSlice"), exports);
__exportStar(require("./Purchase"), exports);
__exportStar(require("./Segment"), exports);
__exportStar(require("./SegmentNotificationTarget"), exports);
__exportStar(require("./StringMap"), exports);
__exportStar(require("./UpdatePlayerTagsRequestBody"), exports);
var App_1 = require("./App");
var Button_1 = require("./Button");
var DeliveryData_1 = require("./DeliveryData");
var ExportPlayersRequestBody_1 = require("./ExportPlayersRequestBody");
var Filter_1 = require("./Filter");
var FilterExpressions_1 = require("./FilterExpressions");
var FilterNotificationTarget_1 = require("./FilterNotificationTarget");
var GetNotificationRequestBody_1 = require("./GetNotificationRequestBody");
var InlineResponse200_1 = require("./InlineResponse200");
var InlineResponse2001_1 = require("./InlineResponse2001");
var InlineResponse2002_1 = require("./InlineResponse2002");
var InlineResponse2003_1 = require("./InlineResponse2003");
var InlineResponse2004_1 = require("./InlineResponse2004");
var InlineResponse2005_1 = require("./InlineResponse2005");
var InlineResponse201_1 = require("./InlineResponse201");
var InlineResponse400_1 = require("./InlineResponse400");
var InlineResponse4001_1 = require("./InlineResponse4001");
var InlineResponse4002_1 = require("./InlineResponse4002");
var InlineResponse409_1 = require("./InlineResponse409");
var Notification_1 = require("./Notification");
var NotificationAllOf_1 = require("./NotificationAllOf");
var NotificationAllOfAndroidBackgroundLayout_1 = require("./NotificationAllOfAndroidBackgroundLayout");
var NotificationSlice_1 = require("./NotificationSlice");
var NotificationTarget_1 = require("./NotificationTarget");
var Operator_1 = require("./Operator");
var OutcomeData_1 = require("./OutcomeData");
var PlatformDeliveryData_1 = require("./PlatformDeliveryData");
var Player_1 = require("./Player");
var PlayerNotificationTarget_1 = require("./PlayerNotificationTarget");
var PlayerSlice_1 = require("./PlayerSlice");
var Purchase_1 = require("./Purchase");
var Segment_1 = require("./Segment");
var SegmentNotificationTarget_1 = require("./SegmentNotificationTarget");
var StringMap_1 = require("./StringMap");
var UpdatePlayerTagsRequestBody_1 = require("./UpdatePlayerTagsRequestBody");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0
};
var enumsMap = new Set([
    "AppApnsEnvEnum",
    "FilterRelationEnum",
    "FilterExpressionsRelationEnum",
    "FilterExpressionsOperatorEnum",
    "GetNotificationRequestBodyEventsEnum",
    "NotificationAggregationEnum",
    "NotificationAllOfAggregationEnum",
    "OperatorOperatorEnum",
    "OutcomeDataAggregationEnum",
]);
var typeMap = {
    "App": App_1.App,
    "Button": Button_1.Button,
    "DeliveryData": DeliveryData_1.DeliveryData,
    "ExportPlayersRequestBody": ExportPlayersRequestBody_1.ExportPlayersRequestBody,
    "Filter": Filter_1.Filter,
    "FilterExpressions": FilterExpressions_1.FilterExpressions,
    "FilterNotificationTarget": FilterNotificationTarget_1.FilterNotificationTarget,
    "GetNotificationRequestBody": GetNotificationRequestBody_1.GetNotificationRequestBody,
    "InlineResponse200": InlineResponse200_1.InlineResponse200,
    "InlineResponse2001": InlineResponse2001_1.InlineResponse2001,
    "InlineResponse2002": InlineResponse2002_1.InlineResponse2002,
    "InlineResponse2003": InlineResponse2003_1.InlineResponse2003,
    "InlineResponse2004": InlineResponse2004_1.InlineResponse2004,
    "InlineResponse2005": InlineResponse2005_1.InlineResponse2005,
    "InlineResponse201": InlineResponse201_1.InlineResponse201,
    "InlineResponse400": InlineResponse400_1.InlineResponse400,
    "InlineResponse4001": InlineResponse4001_1.InlineResponse4001,
    "InlineResponse4002": InlineResponse4002_1.InlineResponse4002,
    "InlineResponse409": InlineResponse409_1.InlineResponse409,
    "Notification": Notification_1.Notification,
    "NotificationAllOf": NotificationAllOf_1.NotificationAllOf,
    "NotificationAllOfAndroidBackgroundLayout": NotificationAllOfAndroidBackgroundLayout_1.NotificationAllOfAndroidBackgroundLayout,
    "NotificationSlice": NotificationSlice_1.NotificationSlice,
    "NotificationTarget": NotificationTarget_1.NotificationTarget,
    "Operator": Operator_1.Operator,
    "OutcomeData": OutcomeData_1.OutcomeData,
    "PlatformDeliveryData": PlatformDeliveryData_1.PlatformDeliveryData,
    "Player": Player_1.Player,
    "PlayerNotificationTarget": PlayerNotificationTarget_1.PlayerNotificationTarget,
    "PlayerSlice": PlayerSlice_1.PlayerSlice,
    "Purchase": Purchase_1.Purchase,
    "Segment": Segment_1.Segment,
    "SegmentNotificationTarget": SegmentNotificationTarget_1.SegmentNotificationTarget,
    "StringMap": StringMap_1.StringMap,
    "UpdatePlayerTagsRequestBody": UpdatePlayerTagsRequestBody_1.UpdatePlayerTagsRequestBody,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map