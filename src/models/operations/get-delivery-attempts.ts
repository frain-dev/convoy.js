/*
 * Compatibility adapter based on Speakeasy output; preserved by .genignore.
 * @generated-id: f51902d15336
 */

import * as z from "zod/v4-mini";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as types from "../../types/primitives.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import * as models from "../index.js";

export type GetDeliveryAttemptsRequest = {
  /**
   * Project ID
   */
  projectID: string;
  /**
   * event delivery id
   */
  eventDeliveryID: string;
  /**
   * Return a page of ten attempts and next_cursor
   */
  paginated?: boolean | undefined;
  /**
   * Exclusive attempt cursor from next_cursor; requires paginated=true
   */
  before?: string | undefined;
};

/**
 * OK
 */
export type GetDeliveryAttemptsResponse = {
  message?: string | undefined;
  status?: boolean | undefined;
  data?: Array<models.DatastoreDeliveryAttempt> | undefined;
};

/** A cursor page returned only when paginated=true. */
export type GetDeliveryAttemptsPaginatedResponse = {
  message?: string | undefined;
  status?: boolean | undefined;
  data?: {
    content: Array<models.DatastoreDeliveryAttempt>;
    nextCursor: string;
  } | undefined;
};

export type GetDeliveryAttemptsAnyResponse =
  | GetDeliveryAttemptsResponse
  | GetDeliveryAttemptsPaginatedResponse;

/** @internal */
export const GetDeliveryAttemptsPaginatedResponse$inboundSchema: z.ZodMiniType<
  GetDeliveryAttemptsPaginatedResponse,
  unknown
> = z.object({
  message: types.optional(types.string()),
  status: types.optional(types.boolean()),
  data: z.optional(z.pipe(
    z.object({
      content: z.array(models.DatastoreDeliveryAttempt$inboundSchema),
      next_cursor: z.string(),
    }),
    z.transform((page) => ({ content: page.content, nextCursor: page.next_cursor })),
  )),
});

/** @internal */
export type GetDeliveryAttemptsRequest$Outbound = {
  projectID: string;
  eventDeliveryID: string;
  paginated?: boolean | undefined;
  before?: string | undefined;
};

/** @internal */
export const GetDeliveryAttemptsRequest$outboundSchema: z.ZodMiniType<
  GetDeliveryAttemptsRequest$Outbound,
  GetDeliveryAttemptsRequest
> = z.object({
  projectID: z.string(),
  eventDeliveryID: z.string(),
  paginated: z.optional(z.boolean()),
  before: z.optional(z.string()),
});

export function getDeliveryAttemptsRequestToJSON(
  getDeliveryAttemptsRequest: GetDeliveryAttemptsRequest,
): string {
  return JSON.stringify(
    GetDeliveryAttemptsRequest$outboundSchema.parse(getDeliveryAttemptsRequest),
  );
}

/** @internal */
export const GetDeliveryAttemptsResponse$inboundSchema: z.ZodMiniType<
  GetDeliveryAttemptsResponse,
  unknown
> = z.object({
  message: types.optional(types.string()),
  status: types.optional(types.boolean()),
  data: types.optional(z.array(models.DatastoreDeliveryAttempt$inboundSchema)),
});

export function getDeliveryAttemptsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetDeliveryAttemptsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDeliveryAttemptsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDeliveryAttemptsResponse' from JSON`,
  );
}

export function getDeliveryAttemptsPaginatedResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetDeliveryAttemptsPaginatedResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDeliveryAttemptsPaginatedResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDeliveryAttemptsPaginatedResponse' from JSON`,
  );
}
