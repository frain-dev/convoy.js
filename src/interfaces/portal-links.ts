export interface CreatePortalLink {
    name: string;
    endpoints: string[];
    owner_id: string;
    can_manage_endpoint: boolean;
}

export interface UpdatePortalLink extends CreatePortalLink {}
