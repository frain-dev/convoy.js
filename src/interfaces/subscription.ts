export interface CreateSubscription {
    name: string;
    type: 'cli' | 'api';
    app_id?: string;
    source_id?: string;
    endpoint_id: string;
    group_id?: string;
    alert_config?: {
        threshold: string;
        count: number;
    };
    retry_config?: {
        type: string;
        retry_count: number;
        duration: string;
    };
    filter_config?: {
        event_types: any[];
    };
}
