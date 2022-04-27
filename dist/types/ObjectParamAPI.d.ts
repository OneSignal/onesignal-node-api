import { Configuration } from '../configuration';
import { App } from '../models/App';
import { DeliveryData } from '../models/DeliveryData';
import { ExportPlayersRequestBody } from '../models/ExportPlayersRequestBody';
import { GetNotificationRequestBody } from '../models/GetNotificationRequestBody';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse201 } from '../models/InlineResponse201';
import { Notification } from '../models/Notification';
import { NotificationSlice } from '../models/NotificationSlice';
import { OutcomesData } from '../models/OutcomesData';
import { Player } from '../models/Player';
import { PlayerSlice } from '../models/PlayerSlice';
import { Segment } from '../models/Segment';
import { UpdatePlayerTagsRequestBody } from '../models/UpdatePlayerTagsRequestBody';
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export interface DefaultApiCancelNotificationRequest {
    appId: string;
    notificationId: string;
}
export interface DefaultApiCreateAppRequest {
    app: App;
}
export interface DefaultApiCreateNotificationRequest {
    notification: Notification;
}
export interface DefaultApiCreatePlayerRequest {
    player: Player;
}
export interface DefaultApiCreateSegmentsRequest {
    appId: string;
    segment?: Segment;
}
export interface DefaultApiDeletePlayerRequest {
    appId: string;
    playerId: string;
}
export interface DefaultApiDeleteSegmentsRequest {
    appId: string;
    segmentId: string;
}
export interface DefaultApiExportPlayersRequest {
    appId: string;
    exportPlayersRequestBody?: ExportPlayersRequestBody;
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
    getNotificationRequestBody: GetNotificationRequestBody;
}
export interface DefaultApiGetNotificationsRequest {
    appId: string;
    limit?: string;
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
export interface DefaultApiGetPlayerRequest {
    appId: string;
    playerId: string;
    emailAuthHash?: string;
}
export interface DefaultApiGetPlayersRequest {
    appId: string;
    limit?: string;
    offset?: number;
}
export interface DefaultApiUpdateAppRequest {
    appId: string;
    app: App;
}
export interface DefaultApiUpdatePlayerRequest {
    playerId: string;
    player: Player;
}
export interface DefaultApiUpdatePlayerTagsRequest {
    appId: string;
    externalUserId: string;
    updatePlayerTagsRequestBody?: UpdatePlayerTagsRequestBody;
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    cancelNotification(param: DefaultApiCancelNotificationRequest, options?: Configuration): Promise<InlineResponse2001>;
    createApp(param: DefaultApiCreateAppRequest, options?: Configuration): Promise<App>;
    createNotification(param: DefaultApiCreateNotificationRequest, options?: Configuration): Promise<InlineResponse200>;
    createPlayer(param: DefaultApiCreatePlayerRequest, options?: Configuration): Promise<InlineResponse2004>;
    createSegments(param: DefaultApiCreateSegmentsRequest, options?: Configuration): Promise<InlineResponse201>;
    deletePlayer(param: DefaultApiDeletePlayerRequest, options?: Configuration): Promise<InlineResponse2001>;
    deleteSegments(param: DefaultApiDeleteSegmentsRequest, options?: Configuration): Promise<InlineResponse2003>;
    exportPlayers(param: DefaultApiExportPlayersRequest, options?: Configuration): Promise<InlineResponse2005>;
    getApp(param: DefaultApiGetAppRequest, options?: Configuration): Promise<App>;
    getApps(param?: DefaultApiGetAppsRequest, options?: Configuration): Promise<string>;
    getNotification(param: DefaultApiGetNotificationRequest, options?: Configuration): Promise<Notification & DeliveryData & OutcomesData & object>;
    getNotificationHistory(param: DefaultApiGetNotificationHistoryRequest, options?: Configuration): Promise<InlineResponse2002>;
    getNotifications(param: DefaultApiGetNotificationsRequest, options?: Configuration): Promise<NotificationSlice>;
    getOutcomes(param: DefaultApiGetOutcomesRequest, options?: Configuration): Promise<OutcomesData>;
    getPlayer(param: DefaultApiGetPlayerRequest, options?: Configuration): Promise<Player>;
    getPlayers(param: DefaultApiGetPlayersRequest, options?: Configuration): Promise<PlayerSlice>;
    updateApp(param: DefaultApiUpdateAppRequest, options?: Configuration): Promise<App>;
    updatePlayer(param: DefaultApiUpdatePlayerRequest, options?: Configuration): Promise<InlineResponse2001>;
    updatePlayerTags(param: DefaultApiUpdatePlayerTagsRequest, options?: Configuration): Promise<InlineResponse2003>;
}
