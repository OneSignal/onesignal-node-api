/**
 * OneSignal
 * A powerful way to send personalized messages at scale and build effective customer engagement strategies. Learn more at onesignal.com
 *
 * API Version: 1.0.0
 * Contact: devrel@onesignal.com
 */

import { HttpFile } from '../http/http';

export class StringMap {
    /**
    * Text in English.  Will be used as a fallback
    */
    'en': string;
    /**
    * Text in Arabic.
    */
    'ar'?: string;
    /**
    * Text in Bosnian.
    */
    'bs'?: string;
    /**
    * Text in Bulgarian.
    */
    'bg'?: string;
    /**
    * Text in Catalan.
    */
    'ca'?: string;
    /**
    * Text in Chinese (Simplified).
    */
    'zh_hans'?: string;
    /**
    * Text in Chinese (Traditional).
    */
    'zh_hant'?: string;
    /**
    * Alias for zh-Hans.
    */
    'zh'?: string;
    /**
    * Text in Croatian.
    */
    'hr'?: string;
    /**
    * Text in Czech.
    */
    'cs'?: string;
    /**
    * Text in Danish.
    */
    'da'?: string;
    /**
    * Text in Dutch.
    */
    'nl'?: string;
    /**
    * Text in Estonian.
    */
    'et'?: string;
    /**
    * Text in Finnish.
    */
    'fi'?: string;
    /**
    * Text in French.
    */
    'fr'?: string;
    /**
    * Text in Georgian.
    */
    'ka'?: string;
    /**
    * Text in German.
    */
    'de'?: string;
    /**
    * Text in Greek.
    */
    'el'?: string;
    /**
    * Text in Hindi.
    */
    'hi'?: string;
    /**
    * Text in Hebrew.
    */
    'he'?: string;
    /**
    * Text in Hungarian.
    */
    'hu'?: string;
    /**
    * Text in Indonesian.
    */
    'id'?: string;
    /**
    * Text in Italian.
    */
    'it'?: string;
    /**
    * Text in Japanese.
    */
    'ja'?: string;
    /**
    * Text in Korean.
    */
    'ko'?: string;
    /**
    * Text in Latvian.
    */
    'lv'?: string;
    /**
    * Text in Lithuanian.
    */
    'lt'?: string;
    /**
    * Text in Malay.
    */
    'ms'?: string;
    /**
    * Text in Norwegian.
    */
    'nb'?: string;
    /**
    * Text in Polish.
    */
    'pl'?: string;
    /**
    * Text in Persian.
    */
    'fa'?: string;
    /**
    * Text in Portugese.
    */
    'pt'?: string;
    /**
    * Text in Punjabi.
    */
    'pa'?: string;
    /**
    * Text in Romanian.
    */
    'ro'?: string;
    /**
    * Text in Russian.
    */
    'ru'?: string;
    /**
    * Text in Serbian.
    */
    'sr'?: string;
    /**
    * Text in Slovak.
    */
    'sk'?: string;
    /**
    * Text in Spanish.
    */
    'es'?: string;
    /**
    * Text in Swedish.
    */
    'sv'?: string;
    /**
    * Text in Thai.
    */
    'th'?: string;
    /**
    * Text in Turkish.
    */
    'tr'?: string;
    /**
    * Text in Ukrainian.
    */
    'uk'?: string;
    /**
    * Text in Vietnamese.
    */
    'vi'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "en",
            "baseName": "en",
            "type": "string",
            "format": ""
        },
        {
            "name": "ar",
            "baseName": "ar",
            "type": "string",
            "format": ""
        },
        {
            "name": "bs",
            "baseName": "bs",
            "type": "string",
            "format": ""
        },
        {
            "name": "bg",
            "baseName": "bg",
            "type": "string",
            "format": ""
        },
        {
            "name": "ca",
            "baseName": "ca",
            "type": "string",
            "format": ""
        },
        {
            "name": "zh_hans",
            "baseName": "zh-Hans",
            "type": "string",
            "format": ""
        },
        {
            "name": "zh_hant",
            "baseName": "zh-Hant",
            "type": "string",
            "format": ""
        },
        {
            "name": "zh",
            "baseName": "zh",
            "type": "string",
            "format": ""
        },
        {
            "name": "hr",
            "baseName": "hr",
            "type": "string",
            "format": ""
        },
        {
            "name": "cs",
            "baseName": "cs",
            "type": "string",
            "format": ""
        },
        {
            "name": "da",
            "baseName": "da",
            "type": "string",
            "format": ""
        },
        {
            "name": "nl",
            "baseName": "nl",
            "type": "string",
            "format": ""
        },
        {
            "name": "et",
            "baseName": "et",
            "type": "string",
            "format": ""
        },
        {
            "name": "fi",
            "baseName": "fi",
            "type": "string",
            "format": ""
        },
        {
            "name": "fr",
            "baseName": "fr",
            "type": "string",
            "format": ""
        },
        {
            "name": "ka",
            "baseName": "ka",
            "type": "string",
            "format": ""
        },
        {
            "name": "de",
            "baseName": "de",
            "type": "string",
            "format": ""
        },
        {
            "name": "el",
            "baseName": "el",
            "type": "string",
            "format": ""
        },
        {
            "name": "hi",
            "baseName": "hi",
            "type": "string",
            "format": ""
        },
        {
            "name": "he",
            "baseName": "he",
            "type": "string",
            "format": ""
        },
        {
            "name": "hu",
            "baseName": "hu",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "it",
            "baseName": "it",
            "type": "string",
            "format": ""
        },
        {
            "name": "ja",
            "baseName": "ja",
            "type": "string",
            "format": ""
        },
        {
            "name": "ko",
            "baseName": "ko",
            "type": "string",
            "format": ""
        },
        {
            "name": "lv",
            "baseName": "lv",
            "type": "string",
            "format": ""
        },
        {
            "name": "lt",
            "baseName": "lt",
            "type": "string",
            "format": ""
        },
        {
            "name": "ms",
            "baseName": "ms",
            "type": "string",
            "format": ""
        },
        {
            "name": "nb",
            "baseName": "nb",
            "type": "string",
            "format": ""
        },
        {
            "name": "pl",
            "baseName": "pl",
            "type": "string",
            "format": ""
        },
        {
            "name": "fa",
            "baseName": "fa",
            "type": "string",
            "format": ""
        },
        {
            "name": "pt",
            "baseName": "pt",
            "type": "string",
            "format": ""
        },
        {
            "name": "pa",
            "baseName": "pa",
            "type": "string",
            "format": ""
        },
        {
            "name": "ro",
            "baseName": "ro",
            "type": "string",
            "format": ""
        },
        {
            "name": "ru",
            "baseName": "ru",
            "type": "string",
            "format": ""
        },
        {
            "name": "sr",
            "baseName": "sr",
            "type": "string",
            "format": ""
        },
        {
            "name": "sk",
            "baseName": "sk",
            "type": "string",
            "format": ""
        },
        {
            "name": "es",
            "baseName": "es",
            "type": "string",
            "format": ""
        },
        {
            "name": "sv",
            "baseName": "sv",
            "type": "string",
            "format": ""
        },
        {
            "name": "th",
            "baseName": "th",
            "type": "string",
            "format": ""
        },
        {
            "name": "tr",
            "baseName": "tr",
            "type": "string",
            "format": ""
        },
        {
            "name": "uk",
            "baseName": "uk",
            "type": "string",
            "format": ""
        },
        {
            "name": "vi",
            "baseName": "vi",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StringMap.attributeTypeMap;
    }
    
    public constructor() {
    }
}

