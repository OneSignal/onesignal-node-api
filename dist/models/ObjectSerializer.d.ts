export * from './App';
export * from './Button';
export * from './DeliveryData';
export * from './ExportPlayersRequestBody';
export * from './Filter';
export * from './FilterExpressions';
export * from './FilterNotificationTarget';
export * from './GetNotificationRequestBody';
export * from './InlineResponse200';
export * from './InlineResponse2001';
export * from './InlineResponse2002';
export * from './InlineResponse2003';
export * from './InlineResponse2004';
export * from './InlineResponse2005';
export * from './InlineResponse201';
export * from './InlineResponse400';
export * from './InlineResponse4001';
export * from './InlineResponse4002';
export * from './InlineResponse409';
export * from './Notification';
export * from './NotificationAllOf';
export * from './NotificationAllOfAndroidBackgroundLayout';
export * from './NotificationSlice';
export * from './NotificationTarget';
export * from './Operator';
export * from './OutcomeData';
export * from './PlatformDeliveryData';
export * from './Player';
export * from './PlayerNotificationTarget';
export * from './PlayerSlice';
export * from './Purchase';
export * from './Segment';
export * from './SegmentNotificationTarget';
export * from './StringMap';
export * from './UpdatePlayerTagsRequestBody';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}
