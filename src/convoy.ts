import { IConfig } from './interfaces';
import { Client } from './client';
import { Project } from './Api/project';
import { Subscription } from './Api/subscription';
import { Source } from './Api/source';
import { EventDelivery } from './Api/event-delivery';
import { Event } from './Api/event';
import { Endpoint } from './Api/endpoint';
import { DeliveryAttempt } from './Api/delivery-attempt';
import { Webhook } from './webhook';

class Convoy {
    private client;
    public projects;
    public subscriptions;
    public sources;
    public events;
    public eventDeliveries;
    public endpoints;
    public deliveryAttempts;

    constructor(options: IConfig) {
        this.client = new Client(options);

        this.projects = new Project(this.client);
        this.subscriptions = new Subscription(this.client);
        this.sources = new Source(this.client);
        this.events = new Event(this.client);
        this.eventDeliveries = new EventDelivery(this.client);
        this.endpoints = new Endpoint(this.client);
        this.deliveryAttempts = new DeliveryAttempt(this.client);
    }
}

export { Convoy, Webhook };
