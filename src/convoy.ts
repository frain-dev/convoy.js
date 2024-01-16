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
import { SQS } from './Api/sqs';
import { Kafka } from './Api/kafka';
import { PortalLink } from './Api/portal-link';

class Convoy {
    private readonly client;
    public projects;
    public subscriptions;
    public sources;
    public events;
    public eventDeliveries;
    public endpoints;
    public deliveryAttempts;
    public portalLinks;
    public sqs: SQS;
    public kafka: Kafka;

    constructor(options: IConfig) {
        this.client = new Client(options);

        this.projects = new Project(this.client);
        this.subscriptions = new Subscription(this.client);
        this.portalLinks = new PortalLink(this.client);
        this.sources = new Source(this.client);
        this.events = new Event(this.client);
        this.eventDeliveries = new EventDelivery(this.client);
        this.endpoints = new Endpoint(this.client);
        this.deliveryAttempts = new DeliveryAttempt(this.client);
        this.sqs = new SQS(this.client);
        this.kafka = new Kafka(this.client);
    }
}

export { Convoy, Webhook };
