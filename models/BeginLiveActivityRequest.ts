/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.0.1
 * Contact: devrel@onesignal.com
 */

import {LanguageStringMap} from "./LanguageStringMap";
import {FilterExpression} from "./FilterExpression";

export class BeginLiveActivityRequest {
    /**
     * A self-generated identifier uniquely identifies your Live Activity and associates devices with the event.
     */
    'activity_id': string;
    /**
     * The static data to initialize the Live Activity with.
     */
    'event_attributes'?: object;
    /**
     * The content to update a running Live Activity with. The object must conform to the ContentState interface defined within your app's Live Activity.
     */
    'event_updates'?: object;
    /**
     * An internal identifier used to assist with your campaign's organization and management. This value is not displayed to the end user and serves solely for tracking purposes within your campaign tracking and analytics.
     */
    'name': string;
    /**
     * The notification content that is displayed in the main body of the notification.
     */
    'contents': LanguageStringMap;
    /**
     * The notification's title.
     */
    'headings': LanguageStringMap;
    /**
     * Specify a custom sound file to play when the notification is received instead of the default sound.
     */
    'sound'?: string;
    /**
     * A Unix timestamp (in seconds) indicates when the Live Activity is considered outdated.
     */
    'stale_date'?: number;
    /**
     * The priority level affects how quickly a notification is delivered and processed, particularly in power-saving modes.
     */
    'priority'?: number;
    /**
     * The segments to target for sending the message to.
     */
    'included_segments'?: Array<string>;
    /**
     * The segments to exclude when sending the message.
     */
    'excluded_segments'?: Array<string>;
    /**
     * Filters allow you to dynamically define your notification's recipients based on their attributes or behaviors
     */
    'filters'?: Array<FilterExpression>;
    /**
     * Allows targeting users based on their Subscription ID.
     */
    'include_subscription_ids'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "activity_id",
            "baseName": "activity_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "event_attributes",
            "baseName": "event_attributes",
            "type": "object",
            "format": ""
        },
        {
            "name": "event_updates",
            "baseName": "event_updates",
            "type": "object",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "contents",
            "baseName": "contents",
            "type": "LanguageStringMap",
            "format": ""
        },
        {
            "name": "headings",
            "baseName": "headings",
            "type": "LanguageStringMap",
            "format": ""
        },
        {
            "name": "sound",
            "baseName": "sound",
            "type": "string",
            "format": ""
        },
        {
            "name": "stale_date",
            "baseName": "stale_date",
            "type": "number",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": ""
        },
        {
            "name": "included_segments",
            "baseName": "included_segments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "excluded_segments",
            "baseName": "excluded_segments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<FilterExpression>",
            "format": ""
        },
        {
            "name": "include_subscription_ids",
            "baseName": "include_subscription_ids",
            "type": "Array<string>",
            "format": ""
        }
    ];

    static getAttributeTypeMap() {
        return BeginLiveActivityRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
