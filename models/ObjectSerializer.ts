export * from './App';
export * from './BasicNotification';
export * from './BasicNotificationAllOf';
export * from './BasicNotificationAllOfAndroidBackgroundLayout';
export * from './Button';
export * from './CreateNotificationSuccessResponse';
export * from './CreateSegmentConflictResponse';
export * from './CreateSegmentSuccessResponse';
export * from './CreateUserConflictResponse';
export * from './CreateUserConflictResponseErrorsInner';
export * from './CreateUserConflictResponseErrorsItemsMeta';
export * from './DeliveryData';
export * from './ExportEventsSuccessResponse';
export * from './ExportSubscriptionsRequestBody';
export * from './ExportSubscriptionsSuccessResponse';
export * from './Filter';
export * from './FilterExpression';
export * from './GenericError';
export * from './GenericSuccessBoolResponse';
export * from './GetNotificationHistoryRequestBody';
export * from './GetSegmentsSuccessResponse';
export * from './InvalidIdentifierError';
export * from './LanguageStringMap';
export * from './Notification';
export * from './NotificationAllOf';
export * from './NotificationHistorySuccessResponse';
export * from './NotificationSlice';
export * from './NotificationTarget';
export * from './NotificationWithMeta';
export * from './NotificationWithMetaAllOf';
export * from './Operator';
export * from './OutcomeData';
export * from './OutcomesData';
export * from './PlatformDeliveryData';
export * from './PlatformDeliveryDataEmailAllOf';
export * from './PlatformDeliveryDataSmsAllOf';
export * from './PropertiesBody';
export * from './PropertiesDeltas';
export * from './PropertiesObject';
export * from './Purchase';
export * from './RateLimitError';
export * from './Segment';
export * from './SegmentData';
export * from './SegmentNotificationTarget';
export * from './Subscription';
export * from './SubscriptionBody';
export * from './SubscriptionNotificationTarget';
export * from './TransferSubscriptionRequestBody';
export * from './BeginLiveActivityRequest';
export * from './BeginLiveActivitySuccessResponse';
export * from './UpdateLiveActivityRequest';
export * from './UpdateLiveActivitySuccessResponse';
export * from './UpdateUserRequest';
export * from './User';
export * from './UserIdentityBody';
export * from './WebButton';

import { App            , AppApnsEnvEnum                        } from './App';
import { BasicNotification            , BasicNotificationTargetChannelEnum     , BasicNotificationAggregationEnum                                                                                            } from './BasicNotification';
import { BasicNotificationAllOf   , BasicNotificationAllOfAggregationEnum                                                                                            } from './BasicNotificationAllOf';
import { BasicNotificationAllOfAndroidBackgroundLayout } from './BasicNotificationAllOfAndroidBackgroundLayout';
import { Button } from './Button';
import { CreateNotificationSuccessResponse } from './CreateNotificationSuccessResponse';
import { CreateSegmentConflictResponse } from './CreateSegmentConflictResponse';
import { CreateSegmentSuccessResponse } from './CreateSegmentSuccessResponse';
import { CreateUserConflictResponse } from './CreateUserConflictResponse';
import { CreateUserConflictResponseErrorsInner } from './CreateUserConflictResponseErrorsInner';
import { CreateUserConflictResponseErrorsItemsMeta } from './CreateUserConflictResponseErrorsItemsMeta';
import { DeliveryData } from './DeliveryData';
import { ExportEventsSuccessResponse } from './ExportEventsSuccessResponse';
import { ExportSubscriptionsRequestBody } from './ExportSubscriptionsRequestBody';
import { ExportSubscriptionsSuccessResponse } from './ExportSubscriptionsSuccessResponse';
import { Filter       , FilterRelationEnum   } from './Filter';
import { FilterExpression       , FilterExpressionRelationEnum  , FilterExpressionOperatorEnum   } from './FilterExpression';
import { GenericError } from './GenericError';
import { GenericSuccessBoolResponse } from './GenericSuccessBoolResponse';
import { GetNotificationHistoryRequestBody, GetNotificationHistoryRequestBodyEventsEnum     } from './GetNotificationHistoryRequestBody';
import { GetSegmentsSuccessResponse } from './GetSegmentsSuccessResponse';
import { InvalidIdentifierError } from './InvalidIdentifierError';
import { LanguageStringMap } from './LanguageStringMap';
import { Notification            , NotificationTargetChannelEnum     , NotificationAggregationEnum                                                                                             } from './Notification';
import { NotificationAllOf } from './NotificationAllOf';
import { NotificationHistorySuccessResponse } from './NotificationHistorySuccessResponse';
import { NotificationSlice } from './NotificationSlice';
import { NotificationTarget            , NotificationTargetTargetChannelEnum   } from './NotificationTarget';
import { NotificationWithMeta            , NotificationWithMetaTargetChannelEnum     , NotificationWithMetaAggregationEnum                                                                                                       } from './NotificationWithMeta';
import { NotificationWithMetaAllOf } from './NotificationWithMetaAllOf';
import { Operator, OperatorOperatorEnum   } from './Operator';
import { OutcomeData  , OutcomeDataAggregationEnum   } from './OutcomeData';
import { OutcomesData } from './OutcomesData';
import { PlatformDeliveryData } from './PlatformDeliveryData';
import { PlatformDeliveryDataEmailAllOf } from './PlatformDeliveryDataEmailAllOf';
import { PlatformDeliveryDataSmsAllOf } from './PlatformDeliveryDataSmsAllOf';
import { PropertiesBody } from './PropertiesBody';
import { PropertiesDeltas } from './PropertiesDeltas';
import { PropertiesObject } from './PropertiesObject';
import { Purchase } from './Purchase';
import { RateLimitError } from './RateLimitError';
import { Segment } from './Segment';
import { SegmentData } from './SegmentData';
import { SegmentNotificationTarget } from './SegmentNotificationTarget';
import { Subscription , SubscriptionTypeEnum                  } from './Subscription';
import { SubscriptionBody } from './SubscriptionBody';
import { SubscriptionNotificationTarget          , SubscriptionNotificationTargetTargetChannelEnum   } from './SubscriptionNotificationTarget';
import { TransferSubscriptionRequestBody } from './TransferSubscriptionRequestBody';
import { BeginLiveActivityRequest } from "./BeginLiveActivityRequest";
import { BeginLiveActivitySuccessResponse } from "./BeginLiveActivitySuccessResponse";
import { UpdateLiveActivityRequest , UpdateLiveActivityRequestEventEnum          } from './UpdateLiveActivityRequest';
import { UpdateLiveActivitySuccessResponse } from './UpdateLiveActivitySuccessResponse';
import { UpdateUserRequest } from './UpdateUserRequest';
import { User } from './User';
import { UserIdentityBody } from './UserIdentityBody';
import { WebButton } from './WebButton';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "AppApnsEnvEnum",
    "BasicNotificationTargetChannelEnum",
    "BasicNotificationAggregationEnum",
    "BasicNotificationAllOfAggregationEnum",
    "FilterRelationEnum",
    "FilterExpressionRelationEnum",
    "FilterExpressionOperatorEnum",
    "GetNotificationHistoryRequestBodyEventsEnum",
    "NotificationTargetChannelEnum",
    "NotificationAggregationEnum",
    "NotificationTargetTargetChannelEnum",
    "NotificationWithMetaTargetChannelEnum",
    "NotificationWithMetaAggregationEnum",
    "OperatorOperatorEnum",
    "OutcomeDataAggregationEnum",
    "SubscriptionTypeEnum",
    "SubscriptionNotificationTargetTargetChannelEnum",
    "UpdateLiveActivityRequestEventEnum",
]);

let typeMap: {[index: string]: any} = {
    "App": App,
    "BasicNotification": BasicNotification,
    "BasicNotificationAllOf": BasicNotificationAllOf,
    "BasicNotificationAllOfAndroidBackgroundLayout": BasicNotificationAllOfAndroidBackgroundLayout,
    "Button": Button,
    "CreateNotificationSuccessResponse": CreateNotificationSuccessResponse,
    "CreateSegmentConflictResponse": CreateSegmentConflictResponse,
    "CreateSegmentSuccessResponse": CreateSegmentSuccessResponse,
    "CreateUserConflictResponse": CreateUserConflictResponse,
    "CreateUserConflictResponseErrorsInner": CreateUserConflictResponseErrorsInner,
    "CreateUserConflictResponseErrorsItemsMeta": CreateUserConflictResponseErrorsItemsMeta,
    "DeliveryData": DeliveryData,
    "ExportEventsSuccessResponse": ExportEventsSuccessResponse,
    "ExportSubscriptionsRequestBody": ExportSubscriptionsRequestBody,
    "ExportSubscriptionsSuccessResponse": ExportSubscriptionsSuccessResponse,
    "Filter": Filter,
    "FilterExpression": FilterExpression,
    "GenericError": GenericError,
    "GenericSuccessBoolResponse": GenericSuccessBoolResponse,
    "GetNotificationHistoryRequestBody": GetNotificationHistoryRequestBody,
    "GetSegmentsSuccessResponse": GetSegmentsSuccessResponse,
    "InvalidIdentifierError": InvalidIdentifierError,
    "LanguageStringMap": LanguageStringMap,
    "Notification": Notification,
    "NotificationAllOf": NotificationAllOf,
    "NotificationHistorySuccessResponse": NotificationHistorySuccessResponse,
    "NotificationSlice": NotificationSlice,
    "NotificationTarget": NotificationTarget,
    "NotificationWithMeta": NotificationWithMeta,
    "NotificationWithMetaAllOf": NotificationWithMetaAllOf,
    "Operator": Operator,
    "OutcomeData": OutcomeData,
    "OutcomesData": OutcomesData,
    "PlatformDeliveryData": PlatformDeliveryData,
    "PlatformDeliveryDataEmailAllOf": PlatformDeliveryDataEmailAllOf,
    "PlatformDeliveryDataSmsAllOf": PlatformDeliveryDataSmsAllOf,
    "PropertiesBody": PropertiesBody,
    "PropertiesDeltas": PropertiesDeltas,
    "PropertiesObject": PropertiesObject,
    "Purchase": Purchase,
    "RateLimitError": RateLimitError,
    "Segment": Segment,
    "SegmentData": SegmentData,
    "SegmentNotificationTarget": SegmentNotificationTarget,
    "Subscription": Subscription,
    "SubscriptionBody": SubscriptionBody,
    "SubscriptionNotificationTarget": SubscriptionNotificationTarget,
    "TransferSubscriptionRequestBody": TransferSubscriptionRequestBody,
    "BeginLiveActivityRequest": BeginLiveActivityRequest,
    "BeginLiveActivitySuccessResponse": BeginLiveActivitySuccessResponse,
    "UpdateLiveActivityRequest": UpdateLiveActivityRequest,
    "UpdateLiveActivitySuccessResponse": UpdateLiveActivitySuccessResponse,
    "UpdateUserRequest": UpdateUserRequest,
    "User": User,
    "UserIdentityBody": UserIdentityBody,
    "WebButton": WebButton,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
