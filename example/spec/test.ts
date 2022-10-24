import * as OneSignal from 'node-onesignal';
import 'jasmine';
import {ExportPlayersRequestBody, GetNotificationRequestBody} from "node-onesignal";

const APP_ID = process.env.APP_ID;
const APP_KEY_TOKEN = process.env.APP_KEY_TOKEN;
const USER_KEY_TOKEN = process.env.USER_KEY_TOKEN;

if (!APP_ID || !APP_KEY_TOKEN || !USER_KEY_TOKEN) {
  throw new Error('APP_ID, APP_KEY_TOKEN, USER_KEY_TOKEN must be set in environment variables');
}

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('OneSignal TypeScript Client', () => {
  let api: OneSignal.DefaultApi;

  beforeEach(() => {
    // Setup authorization
    const configuration = OneSignal.createConfiguration({
        userKey: USER_KEY_TOKEN,
        appKey: APP_KEY_TOKEN,
    });

    api = new OneSignal.DefaultApi(configuration);
  });

  describe('Notifications', () => {
    it('should create a notification', async () => {
      // Arrange
      const notification = createNotification();

      // Act
      const notificationResponse = await api.createNotification(notification);

      // Assert
      expect(notificationResponse.id).not.toBeNull();
    });

    it('should cancel a scheduled notification', async () => {
      // Arrange
      const notification = createNotification();
      notification.send_after = new Date(Date.now() + 86400000).toString();

      // Act
      const createResponse = await api.createNotification(notification);
      const cancelResponse = await api.cancelNotification(APP_ID, createResponse.id);

      // Assert
      expect(cancelResponse.success).toBeTruthy();
    });

    it('should get a notification', async () => {
      // Arrange
      const notification = createNotification();
      notification.send_after = new Date(Date.now() + 86400000).toString();

      // Act
      const createResponse = await api.createNotification(notification);
      const getResponse = await api.getNotification(APP_ID, createResponse.id);

      // Assert
      expect(getResponse.id).toBe(createResponse.id);
    });

    it('should get multiple notifications', async () => {
      // Act
      const getResponse = await api.getNotifications(APP_ID, 10, 0);

      // Assert
      expect(getResponse.notifications?.length).toBeGreaterThan(0);
    });

    it('should get notification history', async () => {
      // Arrange
      const createResponse = await api.createNotification(createNotification());
      const getNotificationReqeust: GetNotificationRequestBody = {
        app_id: APP_ID,
        events: 'sent',
      };

      // Act
      await delay(8000);
      const getHistoryResponse = await api.getNotificationHistory(createResponse.id!, getNotificationReqeust);

      // Assert
      expect(getHistoryResponse.success).toBe(true);
    });
  });

  describe('Players', () => {
    it('should create and get a player', async () => {
      // Arrange
      const player = createPlayer();

      // Act
      const createPlayerResponse = await api.createPlayer(player);
      const getPlayerResponse = await api.getPlayer(APP_ID, createPlayerResponse.id!);

      // Assert
      expect(getPlayerResponse.id).toBe(createPlayerResponse.id!);
    });

    it('should update a player', async () => {
      // Arrange
      const player = createPlayer();

      // Act
      const createPlayerResponse = await api.createPlayer(player);
      player.external_user_id = 'typescript_test_user_id';
      const updatePlayerResponse = await api.updatePlayer(createPlayerResponse.id!, player);

      // Assert
      expect(updatePlayerResponse.success).toBeTruthy();
    });

    it('should update player tags', async () => {
      // Arrange
      const player = createPlayer();

      // Act
      player.external_user_id = 'typescript_test_user_id';
      const updatePlayerTagsRequestBody = new OneSignal.UpdatePlayerTagsRequestBody();
      updatePlayerTagsRequestBody.tags = {'typescript_test_tag': 1};
      const updatePlayerResponse = await api.updatePlayerTags(APP_ID, 'test_user', updatePlayerTagsRequestBody);

      // Assert
      expect(updatePlayerResponse.success).toBeTruthy();
    });

    it('should get multiple players', async () => {
      // Act
      const getPlayersResponse = await api.getPlayers(APP_ID);

      // Assert
      expect(getPlayersResponse.players?.length).toBeGreaterThan(0);
    });

    it('should delete a player', async () => {
      // Act
      const createPlayerResponse = await api.createPlayer(createPlayer());
      const deletePlayerResponse = await api.deletePlayer(APP_ID, createPlayerResponse.id!);

      // Assert
      expect(deletePlayerResponse.success).toBe(true);
    });

    it('should export players', async () => {
      // Arrange
      const exportPlayersRequestBody: ExportPlayersRequestBody = {
        extra_fields: [],
        segment_name: '',
      };

      // Act
      const exportPlayersResponse = await api.exportPlayers(APP_ID, exportPlayersRequestBody);

      // Assert
      expect(exportPlayersResponse.csv_file_url).toBeTruthy();
    });
  });

  describe('Segments', () => {
    it('should create and delete a segment', async () => {
      // Arrange
      const segment = createSegment(generateRandomString());

      // Act
      const createSegmentResponse = await api.createSegments(APP_ID, segment);
      const deleteSegmentResponse = await api.deleteSegments(APP_ID, createSegmentResponse.id!);

      // Assert
      expect(deleteSegmentResponse.success).toBeTruthy();
    });
  });

  describe('App', () => {
    it('should get an app', async () => {
      // Act
      const getAppResponse = await api.getApp(APP_ID);

      // Assert
      expect(getAppResponse.id).toBe(APP_ID);
    });

    it('should get multiple app', async () => {
      // Act
      const getAppsResponse = await api.getApps();

      // Assert
      expect(getAppsResponse.length).toBeGreaterThan(0)
    });

    it('should modify an app', async () => {
      // Arrange
      const appName = 'typescript_test_app_name';

      // Act
      const getAppResponse = await api.getApp(APP_ID);

      getAppResponse.name = appName;
      // getAppResponse.
      const updateAppResponse = await api.updateApp(APP_ID, getAppResponse);

      // Assert
      expect(updateAppResponse.name).toBe(appName);
    });
  });

  describe('Outcomes', () => {
    it('should get an outcome', async () => {
      // Arrange
      const outcomeNames = "os__session_duration.count,os__click.count";
      const outcomeTimeRange = "1d";
      const outcomePlatforms = "5";
      const outcomeAttribution = "direct";

      // Act
      const outcomesResponse =
        await api.getOutcomes(APP_ID, outcomeNames, undefined, outcomeTimeRange, outcomePlatforms, outcomeAttribution);

      // Assert
      expect(outcomesResponse.outcomes?.length).toBeGreaterThan(0);
    });
  });
});

function createNotification(): OneSignal.Notification {
  const notification = new OneSignal.Notification();

  notification.app_id = APP_ID as string;
  notification.contents = new OneSignal.StringMap();
  notification.contents.en = 'TypeScript Test notification';
  notification.included_segments = ['Subscribed Users'];

  return notification;
}

function createPlayer(): OneSignal.Player {
  const player = new OneSignal.Player();

  player.app_id = APP_ID;
  player.identifier = 'typescript_test_example_id';
  player.device_type = 1;

  return player;
}

function createSegment(name: string): OneSignal.Segment {
  // Setting up the filter
  const filterExpressions = new OneSignal.FilterExpressions();
  filterExpressions.field = 'session_count';
  filterExpressions.relation = '&gt;';
  filterExpressions.value = '1';

  // Setting up the segment
  const segment = new OneSignal.Segment();
  segment.name = name;
  segment.filters = [filterExpressions];

  return segment;
}

function generateRandomString(length = 20): string {
  return (new Array(length)).fill(0).map(() => (Math.random() * length) | 0).join('');
}

function delay(delay: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
}
