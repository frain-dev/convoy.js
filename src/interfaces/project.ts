export interface UpdateProject {
    name: string;
    logo_url?: string;
    config?: ProjectConfig;
}

interface ProjectConfig {
    ratelimit: {
        count: number;
        duration: number;
    };
    strategy: {
        type: string;
        duration: number;
        retry_count: number;
    };
    signature: {
        header: string;
        hash: string;
    };
    retention_policy: {
        policy: string;
    };
    disable_endpoint: boolean;
    is_retention_policy_enabled: boolean;
}
