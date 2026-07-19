class BaseError extends Error {
    public statusCode: number;

    constructor(message?: string, status?: number) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message as string;
        this.statusCode = status as number;
    }
}

class WebhookVerificationException extends BaseError {
    constructor(message: string) {
        super(message);
    }
}

export { WebhookVerificationException };
