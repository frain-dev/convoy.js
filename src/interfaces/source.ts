export interface CreateSource {
    created_at: Date;
    deleted_at: number;
    group_id: string;
    is_disabled: boolean;
    mask_id: string;
    name: string;
    type: string;
    uid: string;
    updated_at: number;
    url: string;
    provider: string;
    provider_config?: { twitter: { crc_verified_at: Date } };
    verifier: {
        api_key: {
            header: string;
            key: string;
        };
        basic_auth: {
            password: string;
            username: string;
        };
        hmac: {
            encoding: string;
            hash: string;
            header: string;
            secret: string;
        };
        type: string;
    };
}

export interface UpdateSource {
    created_at: Date;
    deleted_at: number;
    group_id: string;
    is_disabled: boolean;
    mask_id: string;
    name: string;
    type: string;
    uid: string;
    updated_at: number;
    url: string;
    provider: string;
    provider_config?: { twitter: { crc_verified_at: Date } };
    verifier: {
        api_key: {
            header: string;
            key: string;
        };
        basic_auth: {
            password: string;
            username: string;
        };
        hmac: {
            encoding: string;
            hash: string;
            header: string;
            secret: string;
        };
        type: string;
    };
}
