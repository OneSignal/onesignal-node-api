import { RequestContext } from "../http/http";
export interface SecurityAuthentication {
    getName(): string;
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}
export interface TokenProvider {
    getToken(): Promise<string> | string;
}
export declare class OrganizationApiKeyAuthentication implements SecurityAuthentication {
    private tokenProvider;
    constructor(tokenProvider: TokenProvider);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): Promise<void>;
}
export declare class RestApiKeyAuthentication implements SecurityAuthentication {
    private tokenProvider;
    constructor(tokenProvider: TokenProvider);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): Promise<void>;
}
export type AuthMethods = {
    "default"?: SecurityAuthentication;
    "organization_api_key"?: SecurityAuthentication;
    "rest_api_key"?: SecurityAuthentication;
};
export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = {
    "username": string;
    "password": string;
};
export type HttpBearerConfiguration = {
    tokenProvider: TokenProvider;
};
export type OAuth2Configuration = {
    accessToken: string;
};
export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication;
    "organization_api_key"?: HttpBearerConfiguration;
    "rest_api_key"?: HttpBearerConfiguration;
};
export declare function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods;
