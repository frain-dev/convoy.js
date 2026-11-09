import { unwrapAsync } from "../src/types/fp.js";
import { DeliveryAttempts } from "../src/sdk/delivery-attempts.js";
import { ConvoyCore } from "../src/core.js";
import { HTTPClient } from "../src/lib/http.js";
import { RequestOptions } from "../src/lib/sdks.js";
import { deliveryAttemptsGetDeliveryAttempts } from "../src/funcs/delivery-attempts-get-delivery-attempts.js";

// These calls are type-checked by ts-jest as well as exercised at runtime.
// Never use casts to hide an incompatible public method signature.
describe.each(["class", "standalone"] as const)("%s delivery attempts compatibility", (api) => {
  let requests: Request[];
  let sdk: DeliveryAttempts;
  let core: ConvoyCore;
  let responseData: unknown;
  beforeEach(() => {
    requests = [];
    responseData = undefined;
    const httpClient = new HTTPClient({ fetcher: async (input) => {
      requests.push(input as Request);
      const paginated = new URL((input as Request).url).searchParams.get("paginated") === "true";
      const data = responseData ?? (paginated
        ? { content: [{ uid: "attempt-1", http_status: "200" }], next_cursor: "older" }
        : [{ uid: "attempt-1", http_status: "200" }]);
      return new Response(JSON.stringify({ status: true, data }), {
        status: 200, headers: { "Content-Type": "application/json" },
      });
    } });
    const config = { serverURL: "https://default.example", httpClient };
    sdk = new DeliveryAttempts(config);
    core = new ConvoyCore(config);
  });

  const options: RequestOptions = {
    serverURL: "https://override.example",
    headers: { "X-Compatibility": "preserved" },
    timeoutMs: 5000,
  };

  test("legacy calls keep the array response type", async () => {
    const response = api === "class"
      ? await sdk.getDeliveryAttempts("project", "delivery", options)
      : await unwrapAsync(deliveryAttemptsGetDeliveryAttempts(core, "project", "delivery", options));
    const ids: string[] | undefined = response.data?.map((attempt) => attempt.uid ?? "");
    expect(ids).toEqual(["attempt-1"]);
    expect(response.data?.[0]?.httpStatus).toBe("200");
  });

  test("literal true returns a typed cursor page", async () => {
    const response = api === "class"
      ? await sdk.getDeliveryAttempts("project", "delivery", true, undefined, options)
      : await unwrapAsync(deliveryAttemptsGetDeliveryAttempts(core, "project", "delivery", true, undefined, options));
    const next: string | undefined = response.data?.nextCursor;
    expect(next).toBe("older");
    expect(response.data?.content[0]?.httpStatus).toBe("200");
  });

  test("supports the last empty page", async () => {
    responseData = { content: [], next_cursor: "" };
    const response = api === "class"
      ? await sdk.getDeliveryAttempts("project", "delivery", true, "older")
      : await unwrapAsync(deliveryAttemptsGetDeliveryAttempts(core, "project", "delivery", true, "older"));
    expect(response.data).toEqual({ content: [], nextCursor: "" });
  });

  test("literal false keeps the array response type", async () => {
    const response = api === "class"
      ? await sdk.getDeliveryAttempts("project", "delivery", false)
      : await unwrapAsync(deliveryAttemptsGetDeliveryAttempts(core, "project", "delivery", false));
    expect(response.data?.map((attempt) => attempt.uid)).toEqual(["attempt-1"]);
  });

  test("dynamic booleans return a safely narrowable union", async () => {
    const enabled: boolean = JSON.parse("true");
    const response = api === "class"
      ? await sdk.getDeliveryAttempts("project", "delivery", enabled)
      : await unwrapAsync(deliveryAttemptsGetDeliveryAttempts(core, "project", "delivery", enabled));
    if (response.data && !Array.isArray(response.data)) {
      expect(response.data.nextCursor).toBe("older");
    } else throw new Error("Expected cursor page");
  });

  test.each([{ content: [] }, [], { content: [], next_cursor: 42 }])("rejects malformed page responses %#", async (badPage) => {
    responseData = badPage;
    const response = api === "class"
      ? sdk.getDeliveryAttempts("project", "delivery", true)
      : unwrapAsync(deliveryAttemptsGetDeliveryAttempts(core, "project", "delivery", true));
    await expect(response).rejects.toThrow();
  });

  test("accepts the original options argument and forwards it", async () => {
    if (api === "class") await sdk.getDeliveryAttempts("project", "delivery", options);
    else await deliveryAttemptsGetDeliveryAttempts(core, "project", "delivery", options);
    expect(requests).toHaveLength(1);
    const request = requests[0]!;
    expect(new URL(request.url).origin).toBe("https://override.example");
    expect(new URL(request.url).search).toBe("");
    expect(request.headers.get("X-Compatibility")).toBe("preserved");
  });

  test("accepts an empty legacy options object", async () => {
    if (api === "class") await sdk.getDeliveryAttempts("project", "delivery", {});
    else await deliveryAttemptsGetDeliveryAttempts(core, "project", "delivery", {});
    expect(requests).toHaveLength(1);
    expect(new URL(requests[0]!.url).search).toBe("");
  });

  test("accepts omitted options", async () => {
    if (api === "class") await sdk.getDeliveryAttempts("project", "delivery");
    else await deliveryAttemptsGetDeliveryAttempts(core, "project", "delivery");
    expect(requests).toHaveLength(1);
    expect(new URL(requests[0]!.url).search).toBe("");
  });

  test.each([true, false, undefined])("accepts new pagination argument %s plus options", async (paginated) => {
    if (api === "class") await sdk.getDeliveryAttempts("project", "delivery", paginated, "cursor /+", options);
    else await deliveryAttemptsGetDeliveryAttempts(core, "project", "delivery", paginated, "cursor /+", options);
    expect(requests).toHaveLength(1);
    const url = new URL(requests[0]!.url);
    expect(url.origin).toBe("https://override.example");
    expect(url.searchParams.get("paginated")).toBe(paginated === undefined ? null : String(paginated));
    expect(url.searchParams.get("before")).toBe("cursor /+");
    expect(requests[0]!.headers.get("X-Compatibility")).toBe("preserved");
  });
});
