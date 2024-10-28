import { Pageable } from '../Api/common';

export interface CreatePortalLink {
    name: string;
    endpoints: string[];
    owner_id: string;
    can_manage_endpoint: boolean;
}

export interface UpdatePortalLink extends CreatePortalLink {}

export interface QueryPortalLinks extends Pageable {
    endpointId?: string[];
}
