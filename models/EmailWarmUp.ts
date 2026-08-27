/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { EmailWarmUpStage } from './EmailWarmUpStage';
import { HttpFile } from '../http/http';

/**
* Channel: Email Present only when this notification\'s `kind` is \"warmup\". The Auto Warm Up campaign\'s stage schedule, scheduling strategy, and live status.
*/
export class EmailWarmUp {
    /**
    * The campaign\'s sending schedule, stage by stage.
    */
    'stages'?: Array<EmailWarmUpStage>;
    /**
    * How the stage schedule was produced:   * `recommended` - OneSignal generated (and may still adjust) the schedule based on past delivery volumes, scheduled Auto Warm Up emails, and the size of the current audience.   * `custom` - The stages were provided as-is in the create request. 
    */
    'strategy'?: EmailWarmUpStrategyEnum;
    /**
    * Current status of the campaign:   * `initializing` - The stages have been submitted and the schedule is being set up.   * `draft` - The campaign has been created but has not started sending.   * `active` - The campaign is currently working through its stages.   * `finished` - All stages have completed.   * `canceled` - The campaign was canceled before finishing. 
    */
    'status'?: EmailWarmUpStatusEnum;
    /**
    * Whether the campaign is currently live (actively sending).
    */
    'is_live'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "stages",
            "baseName": "stages",
            "type": "Array<EmailWarmUpStage>",
            "format": ""
        },
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "EmailWarmUpStrategyEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "EmailWarmUpStatusEnum",
            "format": ""
        },
        {
            "name": "is_live",
            "baseName": "is_live",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailWarmUp.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EmailWarmUpStrategyEnum = "recommended" | "custom" ;
export type EmailWarmUpStatusEnum = "initializing" | "draft" | "active" | "finished" | "canceled" ;

