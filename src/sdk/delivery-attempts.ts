/*
 * Compatibility adapter based on Speakeasy output; preserved by .genignore.
 * @generated-id: 4fef1ea742e0
 */

import { deliveryAttemptsGetDeliveryAttempt } from "../funcs/delivery-attempts-get-delivery-attempt.js";
import { deliveryAttemptsGetDeliveryAttempts } from "../funcs/delivery-attempts-get-delivery-attempts.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DeliveryAttempts extends ClientSDK {
  /**
   * List delivery attempts
   *
   * @remarks
   * The third argument also accepts legacy RequestOptions. Pagination uses the
   * boolean third argument, optional cursor fourth, and RequestOptions fifth.
   * This endpoint fetches an app message's delivery attempts
   * Default: latest ten attempts as an array. With paginated=true: content and next_cursor. Pass next_cursor as before for older history; empty means last page. Pages are oldest first.
   */
  getDeliveryAttempts(
    projectID: string,
    eventDeliveryID: string,
    options?: RequestOptions,
  ): Promise<operations.GetDeliveryAttemptsResponse>;
  getDeliveryAttempts(
    projectID: string,
    eventDeliveryID: string,
    paginated: true,
    before?: string,
    options?: RequestOptions,
  ): Promise<operations.GetDeliveryAttemptsPaginatedResponse>;
  getDeliveryAttempts(
    projectID: string,
    eventDeliveryID: string,
    paginated: false | undefined,
    before?: string,
    options?: RequestOptions,
  ): Promise<operations.GetDeliveryAttemptsResponse>;
  getDeliveryAttempts(
    projectID: string,
    eventDeliveryID: string,
    paginated: boolean | undefined,
    before?: string,
    options?: RequestOptions,
  ): Promise<operations.GetDeliveryAttemptsAnyResponse>;
  async getDeliveryAttempts(
    projectID: string,
    eventDeliveryID: string,
    paginated?: boolean | RequestOptions | undefined,
    before?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetDeliveryAttemptsAnyResponse> {
    if (typeof paginated === "object") {
      return unwrapAsync(deliveryAttemptsGetDeliveryAttempts(
        this, projectID, eventDeliveryID, paginated,
      ));
    }
    return unwrapAsync(deliveryAttemptsGetDeliveryAttempts(
      this,
      projectID,
      eventDeliveryID,
      paginated,
      before,
      options,
    ));
  }

  /**
   * Retrieve a delivery attempt
   *
   * @remarks
   * This endpoint fetches an app event delivery attempt
   */
  async getDeliveryAttempt(
    projectID: string,
    eventDeliveryID: string,
    deliveryAttemptID: string,
    options?: RequestOptions,
  ): Promise<operations.GetDeliveryAttemptResponse> {
    return unwrapAsync(deliveryAttemptsGetDeliveryAttempt(
      this,
      projectID,
      eventDeliveryID,
      deliveryAttemptID,
      options,
    ));
  }
}
