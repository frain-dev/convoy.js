import { Application } from '../src/Api/application';
import { DeliveryAttempt } from '../src/Api/delivery-attempt';
import { Endpoint } from '../src/Api/endpoint';
import { EventDelivery } from '../src/Api/event-delivery';
import { Event } from '../src/Api/event';
import { Group } from '../src/Api/group';
import { Client } from '../src/client';
import { Convoy } from '../src/convoy';

describe('Convoy', function () {
    let convoy: any;

    beforeEach(function() {
        convoy = new Convoy({
            username: 'default',
            password: 'password',
            uri: 'uri'
        })
    })

    test('creates request client', () => {
        expect(convoy.client).toBeInstanceOf(Client);
    })

    test('creates group client', () => {
        expect(convoy.groups).toBeInstanceOf(Group);
    })

    test('creates application client', () => {
        expect(convoy.applications).toBeInstanceOf(Application);
    })

    test('creates event client', () => {
        expect(convoy.events).toBeInstanceOf(Event);
    })

    test('creates event delivery client', () => {
        expect(convoy.eventDeliveries).toBeInstanceOf(EventDelivery);
    })

    test('creates endpoint client', () => {
        expect(convoy.endpoints).toBeInstanceOf(Endpoint);
    })

    test('creates delivery attempt client', () => {
        expect(convoy.deliveryAttempts).toBeInstanceOf(DeliveryAttempt);
    })
})