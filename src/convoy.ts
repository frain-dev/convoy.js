/** Speakeasy migration: the hand-written HTTP API was removed for the 2.x
 * break; OpenAPI-generated clients replace it. Webhook verify stays
 * hand-written (see MIGRATION.md). */
export { Webhook } from './webhook.js';
