import { Webhook } from '../src/webhook';

describe('Webhook Verification', function () {
    test('no valid signature', () => {
        const webhook = new Webhook({
            header: '',
            payload: { email: 'test@gmail.com' },
            secret: 'random_secret',
        });

        expect(() => {
            webhook.verify();
        }).toThrow('no valid signature');
    });

    test('verify simple hex signature', () => {
        const webhook = new Webhook({
            header: '666060cbe1348bbc7ec98f4e93dda8eaaf11bbf283d6a2dd56e841b2ef12fcd465c846903f709942473e1442604798186746f04848702c44a773f80672de7b21',
            payload: { email: 'test@gmail.com', first_name: 'test', last_name: 'test' },
            secret: '8IX9njirDG',
            hash: 'sha512',
            encoding: 'hex',
        });

        expect(webhook.verify()).toBeTruthy();
    });

    test('verify simple base64 signature', () => {
        const webhook = new Webhook({
            header: 'ZmBgy+E0i7x+yY9Ok92o6q8Ru/KD1qLdVuhBsu8S/NRlyEaQP3CZQkc+FEJgR5gYZ0bwSEhwLESnc/gGct57IQ==',
            payload: { email: 'test@gmail.com', first_name: 'test', last_name: 'test' },
            secret: '8IX9njirDG',
            hash: 'sha512',
            encoding: 'base64',
        });

        expect(webhook.verify()).toBeTruthy();
    });

    test('invalid signature header', () => {
        const webhook = new Webhook({
            header: 'd33C9sJXVO4CnE1hisHHQzUf0inr5KWJH7T8+zvgATTWEgAq5vErZR/xihDXqtok5ubv77xGP/RE++NphZnWLg==',
            payload: { email: 'test@gmail.com', first_name: 'test', last_name: 'test' },
            secret: '8IX9njirDG',
            hash: 'sha512',
            encoding: 'base64',
        });

        expect(() => {
            webhook.verify();
        }).toThrow('no valid signature');
    });

    test('verify advanced hex signature', () => {
        const webhook = new Webhook({
            header: 't=2048976161,v1=c6c39e1bd410fc1dc4db90e97039f006d088c950a275296767595d330195088f,v1=6594ee0713f1cc1f54c3f713d06a60718cd10949c7684412f159034d49621e07',
            payload: { email: 'test@gmail.com' },
            secret: 'Convoy',
            hash: 'sha256',
            encoding: 'hex',
        });

        expect(webhook.verify()).toBeTruthy();
    });

    test('verify advanced base64 signature', () => {
        const webhook = new Webhook({
            header: 't=2048976161,v1=afdb90313acfa15a3fc425755ae651a204947710315bb2a90bccaa87fce88998,v1=fLBDCBUiX5iIs0L5zfNq45h23EkX1HAMpFF+2lHrnes=',
            payload: { email: 'test@gmail.com' },
            secret: '8IX9njirDG',
            hash: 'sha256',
            encoding: 'base64',
        });

        expect(webhook.verify()).toBeTruthy();
    });

    test('raw payload - verify simple hex signature', () => {
        const webhook = new Webhook({
            header: '666060cbe1348bbc7ec98f4e93dda8eaaf11bbf283d6a2dd56e841b2ef12fcd465c846903f709942473e1442604798186746f04848702c44a773f80672de7b21',
            payload: JSON.stringify({ email: 'test@gmail.com', first_name: 'test', last_name: 'test' }),
            secret: '8IX9njirDG',
            hash: 'sha512',
            encoding: 'hex',
        });

        expect(webhook.verify()).toBeTruthy();
    });

    test('raw payload - verify simple base64 signature', () => {
        const webhook = new Webhook({
            header: 'ZmBgy+E0i7x+yY9Ok92o6q8Ru/KD1qLdVuhBsu8S/NRlyEaQP3CZQkc+FEJgR5gYZ0bwSEhwLESnc/gGct57IQ==',
            payload: JSON.stringify({ email: 'test@gmail.com', first_name: 'test', last_name: 'test' }),
            secret: '8IX9njirDG',
            hash: 'sha512',
            encoding: 'base64',
        });

        expect(webhook.verify()).toBeTruthy();
    });

    test('raw payload - invalid signature header', () => {
        const webhook = new Webhook({
            header: 'd33C9sJXVO4CnE1hisHHQzUf0inr5KWJH7T8+zvgATTWEgAq5vErZR/xihDXqtok5ubv77xGP/RE++NphZnWLg==',
            payload: JSON.stringify({ email: 'test@gmail.com', first_name: 'test', last_name: 'test' }),
            secret: '8IX9njirDG',
            hash: 'sha512',
            encoding: 'base64',
        });

        expect(() => {
            webhook.verify();
        }).toThrow('no valid signature');
    });

    test('raw payload - verify advanced hex signature', () => {
        const webhook = new Webhook({
            header: 't=2048976161,v1=c6c39e1bd410fc1dc4db90e97039f006d088c950a275296767595d330195088f,v1=6594ee0713f1cc1f54c3f713d06a60718cd10949c7684412f159034d49621e07',
            payload: JSON.stringify({ email: 'test@gmail.com' }),
            secret: 'Convoy',
            hash: 'sha256',
            encoding: 'hex',
        });

        expect(webhook.verify()).toBeTruthy();
    });

    test('raw payload - verify advanced base64 signature', () => {
        const webhook = new Webhook({
            header: 't=2048976161,v1=afdb90313acfa15a3fc425755ae651a204947710315bb2a90bccaa87fce88998,v1=fLBDCBUiX5iIs0L5zfNq45h23EkX1HAMpFF+2lHrnes=',
            payload: JSON.stringify({ email: 'test@gmail.com' }),
            secret: '8IX9njirDG',
            hash: 'sha256',
            encoding: 'base64',
        });

        expect(webhook.verify()).toBeTruthy();
    });

    test('invalid timestamp header', () => {
        const webhook = new Webhook({
            header: 't=2202-1-1,v1=U5yBiZmFYHiom0A5hEnfLPCoQzndno4ocR45W/zkO+w=',
            payload: { email: 'test@gmail.com' },
            secret: '8IX9njirDG',
            hash: 'sha256',
            encoding: 'base64',
        });

        expect(() => {
            webhook.verify();
        }).toThrow('invalid header');
    });
});
