"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./ApiKeyToken"), exports);
__exportStar(require("./ApiKeyTokensListResponse"), exports);
__exportStar(require("./App"), exports);
__exportStar(require("./BasicNotification"), exports);
__exportStar(require("./BasicNotificationAllOf"), exports);
__exportStar(require("./BasicNotificationAllOfAndroidBackgroundLayout"), exports);
__exportStar(require("./Button"), exports);
__exportStar(require("./CopyTemplateRequest"), exports);
__exportStar(require("./CreateApiKeyRequest"), exports);
__exportStar(require("./CreateApiKeyResponse"), exports);
__exportStar(require("./CreateNotificationSuccessResponse"), exports);
__exportStar(require("./CreateSegmentConflictResponse"), exports);
__exportStar(require("./CreateSegmentSuccessResponse"), exports);
__exportStar(require("./CreateTemplateRequest"), exports);
__exportStar(require("./CreateUserConflictResponse"), exports);
__exportStar(require("./CreateUserConflictResponseErrorsInner"), exports);
__exportStar(require("./CreateUserConflictResponseErrorsItemsMeta"), exports);
__exportStar(require("./CustomEvent"), exports);
__exportStar(require("./CustomEventsRequest"), exports);
__exportStar(require("./DeliveryData"), exports);
__exportStar(require("./ExportEventsSuccessResponse"), exports);
__exportStar(require("./ExportSubscriptionsRequestBody"), exports);
__exportStar(require("./ExportSubscriptionsSuccessResponse"), exports);
__exportStar(require("./Filter"), exports);
__exportStar(require("./FilterExpression"), exports);
__exportStar(require("./GenericError"), exports);
__exportStar(require("./GenericSuccessBoolResponse"), exports);
__exportStar(require("./GetNotificationHistoryRequestBody"), exports);
__exportStar(require("./GetSegmentsSuccessResponse"), exports);
__exportStar(require("./LanguageStringMap"), exports);
__exportStar(require("./Notification"), exports);
__exportStar(require("./NotificationAllOf"), exports);
__exportStar(require("./NotificationHistorySuccessResponse"), exports);
__exportStar(require("./NotificationSlice"), exports);
__exportStar(require("./NotificationTarget"), exports);
__exportStar(require("./NotificationWithMeta"), exports);
__exportStar(require("./NotificationWithMetaAllOf"), exports);
__exportStar(require("./Operator"), exports);
__exportStar(require("./OutcomeData"), exports);
__exportStar(require("./OutcomesData"), exports);
__exportStar(require("./PlatformDeliveryData"), exports);
__exportStar(require("./PlatformDeliveryDataEmailAllOf"), exports);
__exportStar(require("./PlatformDeliveryDataSmsAllOf"), exports);
__exportStar(require("./PropertiesBody"), exports);
__exportStar(require("./PropertiesDeltas"), exports);
__exportStar(require("./PropertiesObject"), exports);
__exportStar(require("./Purchase"), exports);
__exportStar(require("./RateLimitError"), exports);
__exportStar(require("./Segment"), exports);
__exportStar(require("./SegmentData"), exports);
__exportStar(require("./SegmentNotificationTarget"), exports);
__exportStar(require("./StartLiveActivityRequest"), exports);
__exportStar(require("./StartLiveActivitySuccessResponse"), exports);
__exportStar(require("./Subscription"), exports);
__exportStar(require("./SubscriptionBody"), exports);
__exportStar(require("./SubscriptionNotificationTarget"), exports);
__exportStar(require("./TemplateResource"), exports);
__exportStar(require("./TemplatesListResponse"), exports);
__exportStar(require("./TransferSubscriptionRequestBody"), exports);
__exportStar(require("./UpdateApiKeyRequest"), exports);
__exportStar(require("./UpdateLiveActivityRequest"), exports);
__exportStar(require("./UpdateLiveActivitySuccessResponse"), exports);
__exportStar(require("./UpdateTemplateRequest"), exports);
__exportStar(require("./UpdateUserRequest"), exports);
__exportStar(require("./User"), exports);
__exportStar(require("./UserIdentityBody"), exports);
__exportStar(require("./WebButton"), exports);
var ApiKeyToken_1 = require("./ApiKeyToken");
var ApiKeyTokensListResponse_1 = require("./ApiKeyTokensListResponse");
var App_1 = require("./App");
var BasicNotification_1 = require("./BasicNotification");
var BasicNotificationAllOf_1 = require("./BasicNotificationAllOf");
var BasicNotificationAllOfAndroidBackgroundLayout_1 = require("./BasicNotificationAllOfAndroidBackgroundLayout");
var Button_1 = require("./Button");
var CopyTemplateRequest_1 = require("./CopyTemplateRequest");
var CreateApiKeyRequest_1 = require("./CreateApiKeyRequest");
var CreateApiKeyResponse_1 = require("./CreateApiKeyResponse");
var CreateNotificationSuccessResponse_1 = require("./CreateNotificationSuccessResponse");
var CreateSegmentConflictResponse_1 = require("./CreateSegmentConflictResponse");
var CreateSegmentSuccessResponse_1 = require("./CreateSegmentSuccessResponse");
var CreateTemplateRequest_1 = require("./CreateTemplateRequest");
var CreateUserConflictResponse_1 = require("./CreateUserConflictResponse");
var CreateUserConflictResponseErrorsInner_1 = require("./CreateUserConflictResponseErrorsInner");
var CreateUserConflictResponseErrorsItemsMeta_1 = require("./CreateUserConflictResponseErrorsItemsMeta");
var CustomEvent_1 = require("./CustomEvent");
var CustomEventsRequest_1 = require("./CustomEventsRequest");
var DeliveryData_1 = require("./DeliveryData");
var ExportEventsSuccessResponse_1 = require("./ExportEventsSuccessResponse");
var ExportSubscriptionsRequestBody_1 = require("./ExportSubscriptionsRequestBody");
var ExportSubscriptionsSuccessResponse_1 = require("./ExportSubscriptionsSuccessResponse");
var Filter_1 = require("./Filter");
var FilterExpression_1 = require("./FilterExpression");
var GenericError_1 = require("./GenericError");
var GenericSuccessBoolResponse_1 = require("./GenericSuccessBoolResponse");
var GetNotificationHistoryRequestBody_1 = require("./GetNotificationHistoryRequestBody");
var GetSegmentsSuccessResponse_1 = require("./GetSegmentsSuccessResponse");
var LanguageStringMap_1 = require("./LanguageStringMap");
var Notification_1 = require("./Notification");
var NotificationAllOf_1 = require("./NotificationAllOf");
var NotificationHistorySuccessResponse_1 = require("./NotificationHistorySuccessResponse");
var NotificationSlice_1 = require("./NotificationSlice");
var NotificationTarget_1 = require("./NotificationTarget");
var NotificationWithMeta_1 = require("./NotificationWithMeta");
var NotificationWithMetaAllOf_1 = require("./NotificationWithMetaAllOf");
var Operator_1 = require("./Operator");
var OutcomeData_1 = require("./OutcomeData");
var OutcomesData_1 = require("./OutcomesData");
var PlatformDeliveryData_1 = require("./PlatformDeliveryData");
var PlatformDeliveryDataEmailAllOf_1 = require("./PlatformDeliveryDataEmailAllOf");
var PlatformDeliveryDataSmsAllOf_1 = require("./PlatformDeliveryDataSmsAllOf");
var PropertiesBody_1 = require("./PropertiesBody");
var PropertiesDeltas_1 = require("./PropertiesDeltas");
var PropertiesObject_1 = require("./PropertiesObject");
var Purchase_1 = require("./Purchase");
var RateLimitError_1 = require("./RateLimitError");
var Segment_1 = require("./Segment");
var SegmentData_1 = require("./SegmentData");
var SegmentNotificationTarget_1 = require("./SegmentNotificationTarget");
var StartLiveActivityRequest_1 = require("./StartLiveActivityRequest");
var StartLiveActivitySuccessResponse_1 = require("./StartLiveActivitySuccessResponse");
var Subscription_1 = require("./Subscription");
var SubscriptionBody_1 = require("./SubscriptionBody");
var SubscriptionNotificationTarget_1 = require("./SubscriptionNotificationTarget");
var TemplateResource_1 = require("./TemplateResource");
var TemplatesListResponse_1 = require("./TemplatesListResponse");
var TransferSubscriptionRequestBody_1 = require("./TransferSubscriptionRequestBody");
var UpdateApiKeyRequest_1 = require("./UpdateApiKeyRequest");
var UpdateLiveActivityRequest_1 = require("./UpdateLiveActivityRequest");
var UpdateLiveActivitySuccessResponse_1 = require("./UpdateLiveActivitySuccessResponse");
var UpdateTemplateRequest_1 = require("./UpdateTemplateRequest");
var UpdateUserRequest_1 = require("./UpdateUserRequest");
var User_1 = require("./User");
var UserIdentityBody_1 = require("./UserIdentityBody");
var WebButton_1 = require("./WebButton");
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
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
var enumsMap = new Set([
    "ApiKeyTokenIpAllowlistModeEnum",
    "AppApnsEnvEnum",
    "BasicNotificationTargetChannelEnum",
    "BasicNotificationAggregationEnum",
    "BasicNotificationHuaweiCategoryEnum",
    "BasicNotificationAllOfAggregationEnum",
    "BasicNotificationAllOfHuaweiCategoryEnum",
    "CreateApiKeyRequestIpAllowlistModeEnum",
    "FilterRelationEnum",
    "FilterExpressionRelationEnum",
    "FilterExpressionOperatorEnum",
    "GetNotificationHistoryRequestBodyEventsEnum",
    "NotificationTargetChannelEnum",
    "NotificationAggregationEnum",
    "NotificationHuaweiCategoryEnum",
    "NotificationTargetTargetChannelEnum",
    "NotificationWithMetaTargetChannelEnum",
    "NotificationWithMetaAggregationEnum",
    "NotificationWithMetaHuaweiCategoryEnum",
    "OperatorOperatorEnum",
    "OutcomeDataAggregationEnum",
    "StartLiveActivityRequestEventEnum",
    "SubscriptionTypeEnum",
    "SubscriptionNotificationTargetTargetChannelEnum",
    "TemplateResourceChannelEnum",
    "UpdateApiKeyRequestIpAllowlistModeEnum",
    "UpdateLiveActivityRequestEventEnum",
]);
var typeMap = {
    "ApiKeyToken": ApiKeyToken_1.ApiKeyToken,
    "ApiKeyTokensListResponse": ApiKeyTokensListResponse_1.ApiKeyTokensListResponse,
    "App": App_1.App,
    "BasicNotification": BasicNotification_1.BasicNotification,
    "BasicNotificationAllOf": BasicNotificationAllOf_1.BasicNotificationAllOf,
    "BasicNotificationAllOfAndroidBackgroundLayout": BasicNotificationAllOfAndroidBackgroundLayout_1.BasicNotificationAllOfAndroidBackgroundLayout,
    "Button": Button_1.Button,
    "CopyTemplateRequest": CopyTemplateRequest_1.CopyTemplateRequest,
    "CreateApiKeyRequest": CreateApiKeyRequest_1.CreateApiKeyRequest,
    "CreateApiKeyResponse": CreateApiKeyResponse_1.CreateApiKeyResponse,
    "CreateNotificationSuccessResponse": CreateNotificationSuccessResponse_1.CreateNotificationSuccessResponse,
    "CreateSegmentConflictResponse": CreateSegmentConflictResponse_1.CreateSegmentConflictResponse,
    "CreateSegmentSuccessResponse": CreateSegmentSuccessResponse_1.CreateSegmentSuccessResponse,
    "CreateTemplateRequest": CreateTemplateRequest_1.CreateTemplateRequest,
    "CreateUserConflictResponse": CreateUserConflictResponse_1.CreateUserConflictResponse,
    "CreateUserConflictResponseErrorsInner": CreateUserConflictResponseErrorsInner_1.CreateUserConflictResponseErrorsInner,
    "CreateUserConflictResponseErrorsItemsMeta": CreateUserConflictResponseErrorsItemsMeta_1.CreateUserConflictResponseErrorsItemsMeta,
    "CustomEvent": CustomEvent_1.CustomEvent,
    "CustomEventsRequest": CustomEventsRequest_1.CustomEventsRequest,
    "DeliveryData": DeliveryData_1.DeliveryData,
    "ExportEventsSuccessResponse": ExportEventsSuccessResponse_1.ExportEventsSuccessResponse,
    "ExportSubscriptionsRequestBody": ExportSubscriptionsRequestBody_1.ExportSubscriptionsRequestBody,
    "ExportSubscriptionsSuccessResponse": ExportSubscriptionsSuccessResponse_1.ExportSubscriptionsSuccessResponse,
    "Filter": Filter_1.Filter,
    "FilterExpression": FilterExpression_1.FilterExpression,
    "GenericError": GenericError_1.GenericError,
    "GenericSuccessBoolResponse": GenericSuccessBoolResponse_1.GenericSuccessBoolResponse,
    "GetNotificationHistoryRequestBody": GetNotificationHistoryRequestBody_1.GetNotificationHistoryRequestBody,
    "GetSegmentsSuccessResponse": GetSegmentsSuccessResponse_1.GetSegmentsSuccessResponse,
    "LanguageStringMap": LanguageStringMap_1.LanguageStringMap,
    "Notification": Notification_1.Notification,
    "NotificationAllOf": NotificationAllOf_1.NotificationAllOf,
    "NotificationHistorySuccessResponse": NotificationHistorySuccessResponse_1.NotificationHistorySuccessResponse,
    "NotificationSlice": NotificationSlice_1.NotificationSlice,
    "NotificationTarget": NotificationTarget_1.NotificationTarget,
    "NotificationWithMeta": NotificationWithMeta_1.NotificationWithMeta,
    "NotificationWithMetaAllOf": NotificationWithMetaAllOf_1.NotificationWithMetaAllOf,
    "Operator": Operator_1.Operator,
    "OutcomeData": OutcomeData_1.OutcomeData,
    "OutcomesData": OutcomesData_1.OutcomesData,
    "PlatformDeliveryData": PlatformDeliveryData_1.PlatformDeliveryData,
    "PlatformDeliveryDataEmailAllOf": PlatformDeliveryDataEmailAllOf_1.PlatformDeliveryDataEmailAllOf,
    "PlatformDeliveryDataSmsAllOf": PlatformDeliveryDataSmsAllOf_1.PlatformDeliveryDataSmsAllOf,
    "PropertiesBody": PropertiesBody_1.PropertiesBody,
    "PropertiesDeltas": PropertiesDeltas_1.PropertiesDeltas,
    "PropertiesObject": PropertiesObject_1.PropertiesObject,
    "Purchase": Purchase_1.Purchase,
    "RateLimitError": RateLimitError_1.RateLimitError,
    "Segment": Segment_1.Segment,
    "SegmentData": SegmentData_1.SegmentData,
    "SegmentNotificationTarget": SegmentNotificationTarget_1.SegmentNotificationTarget,
    "StartLiveActivityRequest": StartLiveActivityRequest_1.StartLiveActivityRequest,
    "StartLiveActivitySuccessResponse": StartLiveActivitySuccessResponse_1.StartLiveActivitySuccessResponse,
    "Subscription": Subscription_1.Subscription,
    "SubscriptionBody": SubscriptionBody_1.SubscriptionBody,
    "SubscriptionNotificationTarget": SubscriptionNotificationTarget_1.SubscriptionNotificationTarget,
    "TemplateResource": TemplateResource_1.TemplateResource,
    "TemplatesListResponse": TemplatesListResponse_1.TemplatesListResponse,
    "TransferSubscriptionRequestBody": TransferSubscriptionRequestBody_1.TransferSubscriptionRequestBody,
    "UpdateApiKeyRequest": UpdateApiKeyRequest_1.UpdateApiKeyRequest,
    "UpdateLiveActivityRequest": UpdateLiveActivityRequest_1.UpdateLiveActivityRequest,
    "UpdateLiveActivitySuccessResponse": UpdateLiveActivitySuccessResponse_1.UpdateLiveActivitySuccessResponse,
    "UpdateTemplateRequest": UpdateTemplateRequest_1.UpdateTemplateRequest,
    "UpdateUserRequest": UpdateUserRequest_1.UpdateUserRequest,
    "User": User_1.User,
    "UserIdentityBody": UserIdentityBody_1.UserIdentityBody,
    "WebButton": WebButton_1.WebButton,
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
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
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