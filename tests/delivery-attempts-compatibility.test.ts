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
  beforeEach(() => {
    requests = [];
    const httpClient = new HTTPClient({ fetcher: async (input) => {
      requests.push(input as Request);
      return new Response(JSON.stringify({ status: true, data: [] }), {
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
