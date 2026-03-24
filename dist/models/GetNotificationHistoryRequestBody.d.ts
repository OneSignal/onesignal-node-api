export declare class GetNotificationHistoryRequestBody {
    'events'?: GetNotificationHistoryRequestBodyEventsEnum;
    'email'?: string;
    'app_id'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export type GetNotificationHistoryRequestBodyEventsEnum = "sent" | "clicked";
