import { RequestContext } from "../http/http";
export interface SecurityAuthentication {
    getName(): string;
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}
export interface TokenProvider {
    getToken(): Promise<string> | string;
}
export declare class AppKeyAuthentication implements SecurityAuthentication {
    private tokenProvider;
    constructor(tokenProvider: TokenProvider);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): Promise<void>;
}
export declare class UserKeyAuthentication implements SecurityAuthentication {
    private tokenProvider;
    constructor(tokenProvider: TokenProvider);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): Promise<void>;
}
export declare type AuthMethods = {
    "app_key"?: SecurityAuthentication;
    "user_key"?: SecurityAuthentication;
};
export declare type ApiKeyConfiguration = string;
export declare type HttpBasicConfiguration = {
    "username": string;
    "password": string;
};
export declare type HttpBearerConfiguration = {
    tokenProvider: TokenProvider;
};
export declare type OAuth2Configuration = {
    accessToken: string;
};
export declare type AuthMethodsConfiguration = {
    "app_key"?: HttpBearerConfiguration;
    "user_key"?: HttpBearerConfiguration;
};
export declare function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods;
