import { WebhookVerificationException } from './utils/errors';
const crypto = require('crypto');

type SignedHeader = {
    timestamp: number;
    signatures: string[];
};

interface ICreateWebhook {
    payload: any;
    header: string;
    secret: string;
    tolerance: number;
    hash: string;
    encoding: string;
}

export class Webhook {
    public defaultOptions = {
        DEFAULT_TOLERANCE: 300,
        DEFAULT_ENCODING: 'hex',
        DEFAULT_HASH: 'sha256',
    };

    private payload;
    private header;
    private secret;
    private tolerance;
    private hash;
    private encoding;

    constructor(options: ICreateWebhook) {
        this.payload = options.payload;
        this.header = options.header;
        this.secret = options.secret;
        this.tolerance = options.tolerance || this.defaultOptions.DEFAULT_TOLERANCE;
        this.hash = options.hash || this.defaultOptions.DEFAULT_HASH;
        this.encoding = options.encoding || this.defaultOptions.DEFAULT_ENCODING;
    }

    verifyHeader() {
        const signedHeader = this.parseSignatureHeader();

        if (!signedHeader.signatures.length) {
            throw new WebhookVerificationException('Webhook has no valid signature');
        }

        const expectedSignature = crypto
            .createHmac(this.hash, this.secret)
            .update(JSON.stringify(this.payload), 'utf8')
            .digest(this.encoding);

        return this.validateComputedSignature(signedHeader.signatures, expectedSignature);
    }

    parseSignatureHeader(): SignedHeader {
        const header = this.header;

        if (typeof header !== 'string') {
            throw new WebhookVerificationException('Webhook has invalid header');
        }

        let signature: SignedHeader = {
            timestamp: -1,
            signatures: [],
        };

        const parts = header.split(',');

        signature =
            parts.length > 1 ? this.decodeAdvanced(signature, parts) : this.decodeSimple(signature, this.header);
        return signature;
    }

    decodeAdvanced(sh: SignedHeader, pairs: string[]): SignedHeader {
        pairs.map((sig: string) => {
            const item = sig.split('=').slice(1).join('=');
            if (isNaN(Number(item))) {
                // We're not dealing with a timestamp at this point
                sh.signatures.push(item);
            } else {
                sh.timestamp = parseInt(item, 10);
            }
        });

        if (!sh.timestamp || sh.timestamp === -1) {
            throw new WebhookVerificationException('Webhook has invalid header');
        }

        const timestampAge = Math.floor(Date.now() / 1000) - sh.timestamp;

        if (timestampAge > this.tolerance) {
            throw new WebhookVerificationException('Timestamp has expired');
        }

        return sh;
    }

    decodeSimple(sh: SignedHeader, header: string): SignedHeader {
        sh.signatures.push(header);
        return sh;
    }

    validateComputedSignature(signatures: string[], expectedSignature: string) {
        const signatureFound = signatures.filter((signature) => {
            this.secureCompare(signature, expectedSignature);
        });

        if (!signatureFound.length) {
            throw new WebhookVerificationException('Webhook has no valid signature');
        }

        return true;
    }

    secureCompare(a: any, b: any): boolean {
        a = Buffer.from(a);
        b = Buffer.from(b);

        if (a.length != b.length) {
            return false;
        }

        return crypto.timingSafeEqual(a, b);
    }
}
