export interface CreateEndpoint {
    name: string;
    support_email?: string;
    owner_id?: string;
    advanced_signatures?: boolean;
    slack_webhook_url?: string;
    authentication?: EndpointAuthentication;
    url: string;
    description: string;
    secret?: string;
    events?: string[];
}

interface EndpointAuthentication {
    type: string;
    api_key: {
        header_value: string;
        header_name: string;
    };
}

export interface ExpireSecret {
    secret: string;
    expiration: number;
}

export interface UpdateEndpoint extends CreateEndpoint {}
