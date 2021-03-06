import { IConfig } from './interfaces';
import { Client } from './client';
import { Group } from './Api/group';
import { Application } from './Api/application';
import { EventDelivery } from './Api/event-delivery';
import { Event } from './Api/event';
import { Endpoint } from './Api/endpoint';
import { DeliveryAttempt } from './Api/delivery-attempt';

export class Convoy {
  private client;
  public groups;
  public applications;
  public events;
  public eventDeliveries;
  public endpoints;
  public deliveryAttempts;

  constructor(options: IConfig) {
    this.client = new Client(options);

    this.groups = new Group(this.client);
    this.applications = new Application(this.client);
    this.events = new Event(this.client);
    this.eventDeliveries = new EventDelivery(this.client);
    this.endpoints = new Endpoint(this.client);
    this.deliveryAttempts = new DeliveryAttempt(this.client);
  }
}
