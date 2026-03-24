import { Configuration } from '../configuration';
import { ApiKeyTokensListResponse } from '../models/ApiKeyTokensListResponse';
import { App } from '../models/App';
import { CopyTemplateRequest } from '../models/CopyTemplateRequest';
import { CreateApiKeyRequest } from '../models/CreateApiKeyRequest';
import { CreateApiKeyResponse } from '../models/CreateApiKeyResponse';
import { CreateNotificationSuccessResponse } from '../models/CreateNotificationSuccessResponse';
import { CreateSegmentSuccessResponse } from '../models/CreateSegmentSuccessResponse';
import { CreateTemplateRequest } from '../models/CreateTemplateRequest';
import { CustomEventsRequest } from '../models/CustomEventsRequest';
import { ExportEventsSuccessResponse } from '../models/ExportEventsSuccessResponse';
import { ExportSubscriptionsRequestBody } from '../models/ExportSubscriptionsRequestBody';
import { ExportSubscriptionsSuccessResponse } from '../models/ExportSubscriptionsSuccessResponse';
import { GenericSuccessBoolResponse } from '../models/GenericSuccessBoolResponse';
import { GetNotificationHistoryRequestBody } from '../models/GetNotificationHistoryRequestBody';
import { GetSegmentsSuccessResponse } from '../models/GetSegmentsSuccessResponse';
import { Notification } from '../models/Notification';
import { NotificationHistorySuccessResponse } from '../models/NotificationHistorySuccessResponse';
import { NotificationSlice } from '../models/NotificationSlice';
import { NotificationWithMeta } from '../models/NotificationWithMeta';
import { OutcomesData } from '../models/OutcomesData';
import { PropertiesBody } from '../models/PropertiesBody';
import { Segment } from '../models/Segment';
import { StartLiveActivityRequest } from '../models/StartLiveActivityRequest';
import { StartLiveActivitySuccessResponse } from '../models/StartLiveActivitySuccessResponse';
import { SubscriptionBody } from '../models/SubscriptionBody';
import { TemplateResource } from '../models/TemplateResource';
import { TemplatesListResponse } from '../models/TemplatesListResponse';
import { TransferSubscriptionRequestBody } from '../models/TransferSubscriptionRequestBody';
import { UpdateApiKeyRequest } from '../models/UpdateApiKeyRequest';
import { UpdateLiveActivityRequest } from '../models/UpdateLiveActivityRequest';
import { UpdateLiveActivitySuccessResponse } from '../models/UpdateLiveActivitySuccessResponse';
import { UpdateTemplateRequest } from '../models/UpdateTemplateRequest';
import { UpdateUserRequest } from '../models/UpdateUserRequest';
import { User } from '../models/User';
import { UserIdentityBody } from '../models/UserIdentityBody';
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export interface DefaultApiCancelNotificationRequest {
    appId: string;
    notificationId: string;
}
export interface DefaultApiCopyTemplateToAppRequest {
    templateId: string;
    appId: string;
    copyTemplateRequest: CopyTemplateRequest;
}
export interface DefaultApiCreateAliasRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
    userIdentityBody: UserIdentityBody;
}
export interface DefaultApiCreateAliasBySubscriptionRequest {
    appId: string;
    subscriptionId: string;
    userIdentityBody: UserIdentityBody;
}
export interface DefaultApiCreateApiKeyRequest {
    appId: string;
    createApiKeyRequest: CreateApiKeyRequest;
}
export interface DefaultApiCreateAppRequest {
    app: App;
}
export interface DefaultApiCreateCustomEventsRequest {
    appId: string;
    customEventsRequest: CustomEventsRequest;
}
export interface DefaultApiCreateNotificationRequest {
    notification: Notification;
}
export interface DefaultApiCreateSegmentRequest {
    appId: string;
    segment?: Segment;
}
export interface DefaultApiCreateSubscriptionRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
    subscriptionBody: SubscriptionBody;
}
export interface DefaultApiCreateTemplateRequest {
    createTemplateRequest: CreateTemplateRequest;
}
export interface DefaultApiCreateUserRequest {
    appId: string;
    user: User;
}
export interface DefaultApiDeleteAliasRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
    aliasLabelToDelete: string;
}
export interface DefaultApiDeleteApiKeyRequest {
    appId: string;
    tokenId: string;
}
export interface DefaultApiDeleteSegmentRequest {
    appId: string;
    segmentId: string;
}
export interface DefaultApiDeleteSubscriptionRequest {
    appId: string;
    subscriptionId: string;
}
export interface DefaultApiDeleteTemplateRequest {
    templateId: string;
    appId: string;
}
export interface DefaultApiDeleteUserRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
}
export interface DefaultApiExportEventsRequest {
    notificationId: string;
    appId: string;
}
export interface DefaultApiExportSubscriptionsRequest {
    appId: string;
    exportSubscriptionsRequestBody?: ExportSubscriptionsRequestBody;
}
export interface DefaultApiGetAliasesRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
}
export interface DefaultApiGetAliasesBySubscriptionRequest {
    appId: string;
    subscriptionId: string;
}
export interface DefaultApiGetAppRequest {
    appId: string;
}
export interface DefaultApiGetAppsRequest {
}
export interface DefaultApiGetNotificationRequest {
    appId: string;
    notificationId: string;
}
export interface DefaultApiGetNotificationHistoryRequest {
    notificationId: string;
    getNotificationHistoryRequestBody: GetNotificationHistoryRequestBody;
}
export interface DefaultApiGetNotificationsRequest {
    appId: string;
    limit?: number;
    offset?: number;
    kind?: 0 | 1 | 3;
}
export interface DefaultApiGetOutcomesRequest {
    appId: string;
    outcomeNames: string;
    outcomeNames2?: string;
    outcomeTimeRange?: string;
    outcomePlatforms?: string;
    outcomeAttribution?: string;
}
export interface DefaultApiGetSegmentsRequest {
    appId: string;
    offset?: number;
    limit?: number;
}
export interface DefaultApiGetUserRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
}
export interface DefaultApiRotateApiKeyRequest {
    appId: string;
    tokenId: string;
}
export interface DefaultApiStartLiveActivityRequest {
    appId: string;
    activityType: string;
    startLiveActivityRequest: StartLiveActivityRequest;
}
export interface DefaultApiTransferSubscriptionRequest {
    appId: string;
    subscriptionId: string;
    transferSubscriptionRequestBody: TransferSubscriptionRequestBody;
}
export interface DefaultApiUnsubscribeEmailWithTokenRequest {
    appId: string;
    notificationId: string;
    token: string;
}
export interface DefaultApiUpdateApiKeyRequest {
    appId: string;
    tokenId: string;
    updateApiKeyRequest: UpdateApiKeyRequest;
}
export interface DefaultApiUpdateAppRequest {
    appId: string;
    app: App;
}
export interface DefaultApiUpdateLiveActivityRequest {
    appId: string;
    activityId: string;
    updateLiveActivityRequest: UpdateLiveActivityRequest;
}
export interface DefaultApiUpdateSubscriptionRequest {
    appId: string;
    subscriptionId: string;
    subscriptionBody: SubscriptionBody;
}
export interface DefaultApiUpdateSubscriptionByTokenRequest {
    appId: string;
    tokenType: string;
    token: string;
    subscriptionBody: SubscriptionBody;
}
export interface DefaultApiUpdateTemplateRequest {
    templateId: string;
    appId: string;
    updateTemplateRequest: UpdateTemplateRequest;
}
export interface DefaultApiUpdateUserRequest {
    appId: string;
    aliasLabel: string;
    aliasId: string;
    updateUserRequest: UpdateUserRequest;
}
export interface DefaultApiViewApiKeysRequest {
    appId: string;
}
export interface DefaultApiViewTemplateRequest {
    templateId: string;
    appId: string;
}
export interface DefaultApiViewTemplatesRequest {
    appId: string;
    limit?: number;
    offset?: number;
    channel?: 'push' | 'email' | 'sms';
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    cancelNotification(param: DefaultApiCancelNotificationRequest, options?: Configuration): Promise<GenericSuccessBoolResponse>;
    copyTemplateToApp(param: DefaultApiCopyTemplateToAppRequest, options?: Configuration): Promise<TemplateResource>;
    createAlias(param: DefaultApiCreateAliasRequest, options?: Configuration): Promise<UserIdentityBody>;
    createAliasBySubscription(param: DefaultApiCreateAliasBySubscriptionRequest, options?: Configuration): Promise<UserIdentityBody>;
    createApiKey(param: DefaultApiCreateApiKeyRequest, options?: Configuration): Promise<CreateApiKeyResponse>;
    createApp(param: DefaultApiCreateAppRequest, options?: Configuration): Promise<App>;
    createCustomEvents(param: DefaultApiCreateCustomEventsRequest, options?: Configuration): Promise<object>;
    createNotification(param: DefaultApiCreateNotificationRequest, options?: Configuration): Promise<CreateNotificationSuccessResponse>;
    createSegment(param: DefaultApiCreateSegmentRequest, options?: Configuration): Promise<CreateSegmentSuccessResponse>;
    createSubscription(param: DefaultApiCreateSubscriptionRequest, options?: Configuration): Promise<SubscriptionBody>;
    createTemplate(param: DefaultApiCreateTemplateRequest, options?: Configuration): Promise<TemplateResource>;
    createUser(param: DefaultApiCreateUserRequest, options?: Configuration): Promise<User>;
    deleteAlias(param: DefaultApiDeleteAliasRequest, options?: Configuration): Promise<UserIdentityBody>;
    deleteApiKey(param: DefaultApiDeleteApiKeyRequest, options?: Configuration): Promise<object>;
    deleteSegment(param: DefaultApiDeleteSegmentRequest, options?: Configuration): Promise<GenericSuccessBoolResponse>;
    deleteSubscription(param: DefaultApiDeleteSubscriptionRequest, options?: Configuration): Promise<void>;
    deleteTemplate(param: DefaultApiDeleteTemplateRequest, options?: Configuration): Promise<GenericSuccessBoolResponse>;
    deleteUser(param: DefaultApiDeleteUserRequest, options?: Configuration): Promise<void>;
    exportEvents(param: DefaultApiExportEventsRequest, options?: Configuration): Promise<ExportEventsSuccessResponse>;
    exportSubscriptions(param: DefaultApiExportSubscriptionsRequest, options?: Configuration): Promise<ExportSubscriptionsSuccessResponse>;
    getAliases(param: DefaultApiGetAliasesRequest, options?: Configuration): Promise<UserIdentityBody>;
    getAliasesBySubscription(param: DefaultApiGetAliasesBySubscriptionRequest, options?: Configuration): Promise<UserIdentityBody>;
    getApp(param: DefaultApiGetAppRequest, options?: Configuration): Promise<App>;
    getApps(param?: DefaultApiGetAppsRequest, options?: Configuration): Promise<Array<App>>;
    getNotification(param: DefaultApiGetNotificationRequest, options?: Configuration): Promise<NotificationWithMeta>;
    getNotificationHistory(param: DefaultApiGetNotificationHistoryRequest, options?: Configuration): Promise<NotificationHistorySuccessResponse>;
    getNotifications(param: DefaultApiGetNotificationsRequest, options?: Configuration): Promise<NotificationSlice>;
    getOutcomes(param: DefaultApiGetOutcomesRequest, options?: Configuration): Promise<OutcomesData>;
    getSegments(param: DefaultApiGetSegmentsRequest, options?: Configuration): Promise<GetSegmentsSuccessResponse>;
    getUser(param: DefaultApiGetUserRequest, options?: Configuration): Promise<User>;
    rotateApiKey(param: DefaultApiRotateApiKeyRequest, options?: Configuration): Promise<CreateApiKeyResponse>;
    startLiveActivity(param: DefaultApiStartLiveActivityRequest, options?: Configuration): Promise<StartLiveActivitySuccessResponse>;
    transferSubscription(param: DefaultApiTransferSubscriptionRequest, options?: Configuration): Promise<UserIdentityBody>;
    unsubscribeEmailWithToken(param: DefaultApiUnsubscribeEmailWithTokenRequest, options?: Configuration): Promise<GenericSuccessBoolResponse>;
    updateApiKey(param: DefaultApiUpdateApiKeyRequest, options?: Configuration): Promise<object>;
    updateApp(param: DefaultApiUpdateAppRequest, options?: Configuration): Promise<App>;
    updateLiveActivity(param: DefaultApiUpdateLiveActivityRequest, options?: Configuration): Promise<UpdateLiveActivitySuccessResponse>;
    updateSubscription(param: DefaultApiUpdateSubscriptionRequest, options?: Configuration): Promise<void>;
    updateSubscriptionByToken(param: DefaultApiUpdateSubscriptionByTokenRequest, options?: Configuration): Promise<object>;
    updateTemplate(param: DefaultApiUpdateTemplateRequest, options?: Configuration): Promise<TemplateResource>;
    updateUser(param: DefaultApiUpdateUserRequest, options?: Configuration): Promise<PropertiesBody>;
    viewApiKeys(param: DefaultApiViewApiKeysRequest, options?: Configuration): Promise<ApiKeyTokensListResponse>;
    viewTemplate(param: DefaultApiViewTemplateRequest, options?: Configuration): Promise<TemplateResource>;
    viewTemplates(param: DefaultApiViewTemplatesRequest, options?: Configuration): Promise<TemplatesListResponse>;
}
