/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.12.0
 * Contact: devrel@onesignal.com
 */

import { JourneyEarlyExitRulesOnEvent } from './JourneyEarlyExitRulesOnEvent';
import { JourneyEarlyExitRulesOnSegment } from './JourneyEarlyExitRulesOnSegment';
import { HttpFile } from '../http/http';

export class JourneyEarlyExitRules {
    'on_segment'?: JourneyEarlyExitRulesOnSegment;
    /**
    * Exit when the user no longer matches the journey audience. Defaults to false.
    */
    'when_not_in_audience'?: boolean;
    /**
    * Exit on a new session start. Defaults to false.
    */
    'on_session'?: boolean;
    'on_event'?: JourneyEarlyExitRulesOnEvent;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "on_segment",
            "baseName": "on_segment",
            "type": "JourneyEarlyExitRulesOnSegment",
            "format": ""
        },
        {
            "name": "when_not_in_audience",
            "baseName": "when_not_in_audience",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "on_session",
            "baseName": "on_session",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "on_event",
            "baseName": "on_event",
            "type": "JourneyEarlyExitRulesOnEvent",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return JourneyEarlyExitRules.attributeTypeMap;
    }

    public constructor() {
    }
}

