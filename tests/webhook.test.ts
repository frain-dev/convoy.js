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
            header: 't=1666134587744,v1=3c0256def36cdeffaf1355cae483f280b2d43c416bb1f6ca04feb51ad097eb6e,v1=539c818999856078a89b40398449df2cf0a84339dd9e8e28711e395bfce43bec',
            payload: { email: 'test@gmail.com' },
            secret: 'Convoy',
            hash: 'sha256',
            encoding: 'hex',
        });

        expect(webhook.verify()).toBeTruthy();
    });

    test('verify advanced base64 signature', () => {
        const webhook = new Webhook({
            header: 't=1666171999082,v1=PAJW3vNs3v+vE1XK5IPygLLUPEFrsfbKBP61GtCX624=,v1=U5yBiZmFYHiom0A5hEnfLPCoQzndno4ocR45W/zkO+w=',
            payload: { email: 'test@gmail.com' },
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
