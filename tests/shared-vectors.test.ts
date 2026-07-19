import * as fs from 'fs';
import * as path from 'path';
import { Webhook } from '../src/webhook.js';

// signature-vectors.json is generated from the server signing code
// (convoy/pkg/signature) and vendored here so this SDK verifies against the same
// canonical set as every other Convoy SDK. Regenerate upstream with
// CONVOY_WRITE_VECTORS=1 go test ./pkg/signature -run TestGenerateSignatureVectors
type Vector = {
    name: string;
    description: string;
    advanced: boolean;
    hash: string;
    encoding: string;
    secret: string;
    payload: string;
    header: string;
    tolerance: number;
    valid: boolean;
};

const vectors: Vector[] = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'signature-vectors.json'), 'utf8')
);

describe('shared signature vectors', () => {
    for (const v of vectors) {
        test(v.name, () => {
            const webhook = new Webhook({
                payload: v.payload,
                header: v.header,
                secret: v.secret,
                tolerance: v.tolerance,
                hash: v.hash.toLowerCase(),
                encoding: v.encoding,
            });

            if (v.valid) {
                expect(webhook.verify()).toBe(true);
            } else {
                // Invalid vectors must be rejected (throw), never verify.
                expect(() => webhook.verify()).toThrow();
            }
        });
    }
});
