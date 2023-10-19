export interface CreateEvent {
    idempotency_key?: string;
    custom_headers?: object;
    endpoint_id: string;
    event_type: string;
    data: object;
}

export interface CreateFanOutEvent {
    idempotency_key?: string;
    custom_headers?: object;
    event_type: string;
    owner_id: string;
    data: object;
}

export interface CreateDynamicEvent {
    subscription: string;
    endpoint: string;
    event: string;
}
