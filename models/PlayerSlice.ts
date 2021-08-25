/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { Player } from './Player';
import { HttpFile } from '../http/http';

export class PlayerSlice {
    'total_count'?: number;
    'offset'?: number;
    'limit'?: number;
    'players'?: Array<Player>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total_count",
            "baseName": "total_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "players",
            "baseName": "players",
            "type": "Array<Player>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerSlice.attributeTypeMap;
    }
    
    public constructor() {
    }
}

