export interface IConfig {
    /**
     * API Key used for bearer token authentication
     */
    api_key: string;

    /**
     * Project ID 
     */
    project_id: string;
    /**
     * Convoy self hosted uri
     */
    uri?: string;
}
