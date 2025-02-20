export * from './App';
export * from './BasicNotification';
export * from './BasicNotificationAllOf';
export * from './BasicNotificationAllOfAndroidBackgroundLayout';
export * from './BeginLiveActivityRequest';
export * from './Button';
export * from './CancelNotificationSuccessResponse';
export * from './CreateNotificationSuccessResponse';
export * from './CreatePlayerSuccessResponse';
export * from './CreateSegmentConflictResponse';
export * from './CreateSegmentSuccessResponse';
export * from './CreateSubscriptionRequestBody';
export * from './CreateUserConflictResponse';
export * from './CreateUserConflictResponseErrorsInner';
export * from './CreateUserConflictResponseErrorsItemsMeta';
export * from './DeletePlayerNotFoundResponse';
export * from './DeletePlayerSuccessResponse';
export * from './DeleteSegmentNotFoundResponse';
export * from './DeleteSegmentSuccessResponse';
export * from './DeliveryData';
export * from './ExportEventsSuccessResponse';
export * from './ExportPlayersRequestBody';
export * from './ExportPlayersSuccessResponse';
export * from './Filter';
export * from './FilterExpressions';
export * from './GenericError';
export * from './GenericErrorErrorsInner';
export * from './GetNotificationRequestBody';
export * from './InlineResponse200';
export * from './InlineResponse2003';
export * from './InlineResponse201';
export * from './InlineResponse202';
export * from './InvalidIdentifierError';
export * from './Notification';
export * from './Notification200Errors';
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
export * from './Player';
export * from './PlayerNotificationTarget';
export * from './PlayerNotificationTargetIncludeAliases';
export * from './PlayerSlice';
export * from './PropertiesDeltas';
export * from './PropertiesObject';
export * from './Purchase';
export * from './RateLimiterError';
export * from './Segment';
export * from './SegmentNotificationTarget';
export * from './StringMap';
export * from './SubscriptionObject';
export * from './TransferSubscriptionRequestBody';
export * from './UpdateLiveActivityRequest';
export * from './UpdateLiveActivitySuccessResponse';
export * from './UpdatePlayerSuccessResponse';
export * from './UpdatePlayerTagsRequestBody';
export * from './UpdatePlayerTagsSuccessResponse';
export * from './UpdateSubscriptionRequestBody';
export * from './UpdateUserRequest';
export * from './User';
export * from './UserIdentityRequestBody';
export * from './UserIdentityResponse';
export * from './UserSubscriptionOptions';

import { App            , AppApnsEnvEnum                        } from './App';
import { BasicNotification             , BasicNotificationTargetChannelEnum     , BasicNotificationAggregationEnum                                                                                            } from './BasicNotification';
import { BasicNotificationAllOf   , BasicNotificationAllOfAggregationEnum                                                                                            } from './BasicNotificationAllOf';
import { BasicNotificationAllOfAndroidBackgroundLayout } from './BasicNotificationAllOfAndroidBackgroundLayout';
import { BeginLiveActivityRequest } from './BeginLiveActivityRequest';
import { Button } from './Button';
import { CancelNotificationSuccessResponse } from './CancelNotificationSuccessResponse';
import { CreateNotificationSuccessResponse } from './CreateNotificationSuccessResponse';
import { CreatePlayerSuccessResponse } from './CreatePlayerSuccessResponse';
import { CreateSegmentConflictResponse } from './CreateSegmentConflictResponse';
import { CreateSegmentSuccessResponse } from './CreateSegmentSuccessResponse';
import { CreateSubscriptionRequestBody } from './CreateSubscriptionRequestBody';
import { CreateUserConflictResponse } from './CreateUserConflictResponse';
import { CreateUserConflictResponseErrorsInner } from './CreateUserConflictResponseErrorsInner';
import { CreateUserConflictResponseErrorsItemsMeta } from './CreateUserConflictResponseErrorsItemsMeta';
import { DeletePlayerNotFoundResponse } from './DeletePlayerNotFoundResponse';
import { DeletePlayerSuccessResponse } from './DeletePlayerSuccessResponse';
import { DeleteSegmentNotFoundResponse } from './DeleteSegmentNotFoundResponse';
import { DeleteSegmentSuccessResponse } from './DeleteSegmentSuccessResponse';
import { DeliveryData } from './DeliveryData';
import { ExportEventsSuccessResponse } from './ExportEventsSuccessResponse';
import { ExportPlayersRequestBody } from './ExportPlayersRequestBody';
import { ExportPlayersSuccessResponse } from './ExportPlayersSuccessResponse';
import { Filter   , FilterRelationEnum   } from './Filter';
import { FilterExpressions   , FilterExpressionsRelationEnum  , FilterExpressionsOperatorEnum   } from './FilterExpressions';
import { GenericError } from './GenericError';
import { GenericErrorErrorsInner } from './GenericErrorErrorsInner';
import { GetNotificationRequestBody, GetNotificationRequestBodyEventsEnum     } from './GetNotificationRequestBody';
import { InlineResponse200 } from './InlineResponse200';
import { InlineResponse2003 } from './InlineResponse2003';
import { InlineResponse201 } from './InlineResponse201';
import { InlineResponse202 } from './InlineResponse202';
import { InvalidIdentifierError } from './InvalidIdentifierError';
import { Notification             , NotificationTargetChannelEnum     , NotificationAggregationEnum                                                                                             } from './Notification';
import { Notification200Errors } from './Notification200Errors';
import { NotificationAllOf } from './NotificationAllOf';
import { NotificationHistorySuccessResponse } from './NotificationHistorySuccessResponse';
import { NotificationSlice } from './NotificationSlice';
import { NotificationTarget             , NotificationTargetTargetChannelEnum   } from './NotificationTarget';
import { NotificationWithMeta             , NotificationWithMetaTargetChannelEnum     , NotificationWithMetaAggregationEnum                                                                                                       } from './NotificationWithMeta';
import { NotificationWithMetaAllOf } from './NotificationWithMetaAllOf';
import { Operator, OperatorOperatorEnum   } from './Operator';
import { OutcomeData  , OutcomeDataAggregationEnum   } from './OutcomeData';
import { OutcomesData } from './OutcomesData';
import { PlatformDeliveryData } from './PlatformDeliveryData';
import { PlatformDeliveryDataEmailAllOf } from './PlatformDeliveryDataEmailAllOf';
import { PlatformDeliveryDataSmsAllOf } from './PlatformDeliveryDataSmsAllOf';
import { Player } from './Player';
import { PlayerNotificationTarget           , PlayerNotificationTargetTargetChannelEnum   } from './PlayerNotificationTarget';
import { PlayerNotificationTargetIncludeAliases } from './PlayerNotificationTargetIncludeAliases';
import { PlayerSlice } from './PlayerSlice';
import { PropertiesDeltas } from './PropertiesDeltas';
import { PropertiesObject } from './PropertiesObject';
import { Purchase } from './Purchase';
import { RateLimiterError } from './RateLimiterError';
import { Segment } from './Segment';
import { SegmentNotificationTarget } from './SegmentNotificationTarget';
import { StringMap } from './StringMap';
import { SubscriptionObject , SubscriptionObjectTypeEnum                  } from './SubscriptionObject';
import { TransferSubscriptionRequestBody } from './TransferSubscriptionRequestBody';
import { UpdateLiveActivityRequest, UpdateLiveActivityRequestNameEnum  , UpdateLiveActivityRequestEventEnum     } from './UpdateLiveActivityRequest';
import { UpdateLiveActivitySuccessResponse } from './UpdateLiveActivitySuccessResponse';
import { UpdatePlayerSuccessResponse } from './UpdatePlayerSuccessResponse';
import { UpdatePlayerTagsRequestBody } from './UpdatePlayerTagsRequestBody';
import { UpdatePlayerTagsSuccessResponse } from './UpdatePlayerTagsSuccessResponse';
import { UpdateSubscriptionRequestBody } from './UpdateSubscriptionRequestBody';
import { UpdateUserRequest } from './UpdateUserRequest';
import { User } from './User';
import { UserIdentityRequestBody } from './UserIdentityRequestBody';
import { UserIdentityResponse } from './UserIdentityResponse';
import { UserSubscriptionOptions } from './UserSubscriptionOptions';

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
    "FilterExpressionsRelationEnum",
    "FilterExpressionsOperatorEnum",
    "GetNotificationRequestBodyEventsEnum",
    "NotificationTargetChannelEnum",
    "NotificationAggregationEnum",
    "NotificationTargetTargetChannelEnum",
    "NotificationWithMetaTargetChannelEnum",
    "NotificationWithMetaAggregationEnum",
    "OperatorOperatorEnum",
    "OutcomeDataAggregationEnum",
    "PlayerNotificationTargetTargetChannelEnum",
    "SubscriptionObjectTypeEnum",
    "UpdateLiveActivityRequestNameEnum",
    "UpdateLiveActivityRequestEventEnum",
]);

let typeMap: {[index: string]: any} = {
    "App": App,
    "BasicNotification": BasicNotification,
    "BasicNotificationAllOf": BasicNotificationAllOf,
    "BasicNotificationAllOfAndroidBackgroundLayout": BasicNotificationAllOfAndroidBackgroundLayout,
    "BeginLiveActivityRequest": BeginLiveActivityRequest,
    "Button": Button,
    "CancelNotificationSuccessResponse": CancelNotificationSuccessResponse,
    "CreateNotificationSuccessResponse": CreateNotificationSuccessResponse,
    "CreatePlayerSuccessResponse": CreatePlayerSuccessResponse,
    "CreateSegmentConflictResponse": CreateSegmentConflictResponse,
    "CreateSegmentSuccessResponse": CreateSegmentSuccessResponse,
    "CreateSubscriptionRequestBody": CreateSubscriptionRequestBody,
    "CreateUserConflictResponse": CreateUserConflictResponse,
    "CreateUserConflictResponseErrorsInner": CreateUserConflictResponseErrorsInner,
    "CreateUserConflictResponseErrorsItemsMeta": CreateUserConflictResponseErrorsItemsMeta,
    "DeletePlayerNotFoundResponse": DeletePlayerNotFoundResponse,
    "DeletePlayerSuccessResponse": DeletePlayerSuccessResponse,
    "DeleteSegmentNotFoundResponse": DeleteSegmentNotFoundResponse,
    "DeleteSegmentSuccessResponse": DeleteSegmentSuccessResponse,
    "DeliveryData": DeliveryData,
    "ExportEventsSuccessResponse": ExportEventsSuccessResponse,
    "ExportPlayersRequestBody": ExportPlayersRequestBody,
    "ExportPlayersSuccessResponse": ExportPlayersSuccessResponse,
    "Filter": Filter,
    "FilterExpressions": FilterExpressions,
    "GenericError": GenericError,
    "GenericErrorErrorsInner": GenericErrorErrorsInner,
    "GetNotificationRequestBody": GetNotificationRequestBody,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse201": InlineResponse201,
    "InlineResponse202": InlineResponse202,
    "InvalidIdentifierError": InvalidIdentifierError,
    "Notification": Notification,
    "Notification200Errors": Notification200Errors,
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
    "Player": Player,
    "PlayerNotificationTarget": PlayerNotificationTarget,
    "PlayerNotificationTargetIncludeAliases": PlayerNotificationTargetIncludeAliases,
    "PlayerSlice": PlayerSlice,
    "PropertiesDeltas": PropertiesDeltas,
    "PropertiesObject": PropertiesObject,
    "Purchase": Purchase,
    "RateLimiterError": RateLimiterError,
    "Segment": Segment,
    "SegmentNotificationTarget": SegmentNotificationTarget,
    "StringMap": StringMap,
    "SubscriptionObject": SubscriptionObject,
    "TransferSubscriptionRequestBody": TransferSubscriptionRequestBody,
    "UpdateLiveActivityRequest": UpdateLiveActivityRequest,
    "UpdateLiveActivitySuccessResponse": UpdateLiveActivitySuccessResponse,
    "UpdatePlayerSuccessResponse": UpdatePlayerSuccessResponse,
    "UpdatePlayerTagsRequestBody": UpdatePlayerTagsRequestBody,
    "UpdatePlayerTagsSuccessResponse": UpdatePlayerTagsSuccessResponse,
    "UpdateSubscriptionRequestBody": UpdateSubscriptionRequestBody,
    "UpdateUserRequest": UpdateUserRequest,
    "User": User,
    "UserIdentityRequestBody": UserIdentityRequestBody,
    "UserIdentityResponse": UserIdentityResponse,
    "UserSubscriptionOptions": UserSubscriptionOptions,
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
