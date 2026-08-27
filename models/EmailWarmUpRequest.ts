/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * Contact: devrel@onesignal.com
 */

import { EmailWarmUpStage } from './EmailWarmUpStage';
import { HttpFile } from '../http/http';

/**
* Channel: Email Required when `kind` is \"warmup\". The gradual sending schedule for the Auto Warm Up campaign.
*/
export class EmailWarmUpRequest {
    /**
    * Required. The ordered stages that make up the campaign\'s sending schedule.
    */
    'stages': Array<EmailWarmUpStage>;
    /**
    * How the stage schedule should be treated:   * `recommended` - (Default) OneSignal may adjust the provided stages based on past delivery volumes, scheduled Auto Warm Up emails, and the size of the current audience.   * `custom` - The stages provided are sent as-is. 
    */
    'strategy'?: EmailWarmUpRequestStrategyEnum;

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
            "type": "EmailWarmUpRequestStrategyEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailWarmUpRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EmailWarmUpRequestStrategyEnum = "recommended" | "custom" ;

