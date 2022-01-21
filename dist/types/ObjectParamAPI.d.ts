import { Configuration } from '../configuration';
import { App } from '../models/App';
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
import { OutcomeData } from '../models/OutcomeData';
import { Player } from '../models/Player';
import { PlayerSlice } from '../models/PlayerSlice';
import { Segment } from '../models/Segment';
import { UpdatePlayerTagsRequestBody } from '../models/UpdatePlayerTagsRequestBody';
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export interface DefaultApiCancelNotificationRequest {
    app_id: string;
    notification_id: string;
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
    app_id: string;
    segment?: Segment;
}
export interface DefaultApiDeletePlayerRequest {
    app_id: string;
    player_id: string;
}
export interface DefaultApiDeleteSegmentsRequest {
    app_id: string;
    segment_id: string;
}
export interface DefaultApiExportPlayersRequest {
    app_id: string;
    export_players_request_body?: ExportPlayersRequestBody;
}
export interface DefaultApiGetAppRequest {
    app_id: string;
}
export interface DefaultApiGetAppsRequest {
}
export interface DefaultApiGetNotificationRequest {
    app_id: string;
    notification_id: string;
}
export interface DefaultApiGetNotificationHistoryRequest {
    notification_id: string;
    get_notification_request_body: GetNotificationRequestBody;
}
export interface DefaultApiGetNotificationsRequest {
    app_id: string;
    limit?: string;
    offset?: number;
    kind?: 0 | 1 | 3;
}
export interface DefaultApiGetOutcomesRequest {
    app_id: string;
    outcome_names: string;
    outcome_names2?: string;
    outcome_time_range?: string;
    outcome_platforms?: string;
    outcome_attribution?: string;
}
export interface DefaultApiGetPlayerRequest {
    app_id: string;
    player_id: string;
    email_auth_hash?: string;
}
export interface DefaultApiGetPlayersRequest {
    app_id: string;
    limit?: string;
    offset?: number;
}
export interface DefaultApiUpdateAppRequest {
    app_id: string;
    app: App;
}
export interface DefaultApiUpdatePlayerRequest {
    player_id: string;
    player: Player;
}
export interface DefaultApiUpdatePlayerTagsRequest {
    app_id: string;
    external_user_id: string;
    update_player_tags_request_body?: UpdatePlayerTagsRequestBody;
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
    getApps(param: DefaultApiGetAppsRequest, options?: Configuration): Promise<string>;
    getNotification(param: DefaultApiGetNotificationRequest, options?: Configuration): Promise<Notification>;
    getNotificationHistory(param: DefaultApiGetNotificationHistoryRequest, options?: Configuration): Promise<InlineResponse2002>;
    getNotifications(param: DefaultApiGetNotificationsRequest, options?: Configuration): Promise<NotificationSlice>;
    getOutcomes(param: DefaultApiGetOutcomesRequest, options?: Configuration): Promise<Array<OutcomeData>>;
    getPlayer(param: DefaultApiGetPlayerRequest, options?: Configuration): Promise<Player>;
    getPlayers(param: DefaultApiGetPlayersRequest, options?: Configuration): Promise<PlayerSlice>;
    updateApp(param: DefaultApiUpdateAppRequest, options?: Configuration): Promise<App>;
    updatePlayer(param: DefaultApiUpdatePlayerRequest, options?: Configuration): Promise<InlineResponse2001>;
    updatePlayerTags(param: DefaultApiUpdatePlayerTagsRequest, options?: Configuration): Promise<InlineResponse2003>;
}
