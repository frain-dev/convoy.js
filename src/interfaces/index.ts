export interface IConfig {
    /**
     * Username used for basic authentication
     */
    username?: string;
    /**
     * Password used for basic authentication
     */
    password?: string;
    /**
     * API Key used for bearer token authentication
     */
    api_key?: string;
    /**
     * Convoy self hosted uri
     */
    uri?: string;
}
