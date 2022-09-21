export interface CreateEndpoint {
    url: string;
    description: string;
    secret?: string;
    events?: string[];
}

export interface UpdateEndpoint extends CreateEndpoint {}
