export interface CreateEndpoint {
    name: string;
    support_email?: string;
    slack_webhook_url?: string;
    url: string;
    description: string;
    secret?: string;
    events?: string[];
}

export interface UpdateEndpoint extends CreateEndpoint {}
