import { HttpLibrary } from "./http/http";
import { Middleware, PromiseMiddleware, PromiseMiddlewareWrapper } from "./middleware";
import { IsomorphicFetchHttpLibrary as DefaultHttpLibrary } from "./http/isomorphic-fetch";
import { BaseServerConfiguration, server1 } from "./servers";
import { configureAuthMethods, AuthMethods, AuthMethodsConfiguration } from "./auth/auth";

export interface Configuration {
    readonly baseServer: BaseServerConfiguration;
    readonly httpApi: HttpLibrary;
    readonly middleware: Middleware[];
    readonly authMethods: AuthMethods;
}


/**
 * Interface with which a configuration object can be configured.
 */
export interface ConfigurationParameters {
    /**
     * Default server to use
     */
    baseServer?: BaseServerConfiguration;
    /**
     * HTTP library to use e.g. IsomorphicFetch
     */
    httpApi?: HttpLibrary;
    /**
     * The middlewares which will be applied to requests and responses
     */
    middleware?: Middleware[];
    /**
     * Configures all middlewares using the promise api instead of observables (which Middleware uses)
     */
    promiseMiddleware?: PromiseMiddleware[];
    /**
     * Configuration for the available authentication methods
     */
    authMethods?: AuthMethodsConfiguration;
    /**
     * Faster way to configure authentication methods
     */
    organizationApiKey?: string;
    restApiKey?: string;
}

/**
 * Configuration factory function
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: server1
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - middleware: []
 *    - promiseMiddleware: []
 *    - authMethods: {}
 *
 * @param conf partial configuration
 */
export function createConfiguration(conf: ConfigurationParameters): Configuration {

    const authMethods: AuthMethodsConfiguration = {
        'organization_api_key': {
            tokenProvider: {
                getToken: () => conf.organizationApiKey || ''
            }
        },
        'rest_api_key': {
            tokenProvider: {
                getToken: () => conf.restApiKey || ''
            }
        },
    }

    const configuration: Configuration = {
        baseServer: conf.baseServer !== undefined ? conf.baseServer : server1,
        httpApi: conf.httpApi || new DefaultHttpLibrary(),
        middleware: conf.middleware || [],
        authMethods: configureAuthMethods(Object.assign(authMethods, conf.authMethods || {}))
    };
    if (conf.promiseMiddleware) {
        conf.promiseMiddleware.forEach(
            m => configuration.middleware.push(new PromiseMiddlewareWrapper(m))
        );
    }
    return configuration;
}