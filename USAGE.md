<!-- Start SDK Example Usage [usage] -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.projects.getProjects("<id>");

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->