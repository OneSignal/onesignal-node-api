/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 5.3.0
 * Contact: devrel@onesignal.com
 */

import { LanguageStringMap } from './LanguageStringMap';
import { HttpFile } from '../http/http';

export class UpdateTemplateRequest {
    /**
    * Updated name of the template.
    */
    'name'?: string;
    'contents'?: LanguageStringMap;
    /**
    * Set true for an Email template.
    */
    'is_email'?: boolean;
    /**
    * Subject of the email.
    */
    'email_subject'?: string;
    /**
    * Body of the email (HTML supported).
    */
    'email_body'?: string;
    /**
    * Set true for an SMS template.
    */
    'is_sms'?: boolean;
    /**
    * JSON string for dynamic content personalization.
    */
    'dynamic_content'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "is_email",
            "baseName": "isEmail",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "email_subject",
            "baseName": "email_subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "email_body",
            "baseName": "email_body",
            "type": "string",
            "format": ""
        },
        {
            "name": "is_sms",
            "baseName": "isSMS",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dynamic_content",
            "baseName": "dynamic_content",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateTemplateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

