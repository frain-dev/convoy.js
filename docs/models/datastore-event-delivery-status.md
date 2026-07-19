# DatastoreEventDeliveryStatus

## Example Usage

```typescript
import { DatastoreEventDeliveryStatus } from "convoy.js/models";

let value: DatastoreEventDeliveryStatus = "Scheduled";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Scheduled" | "Processing" | "Discarded" | "Failure" | "Success" | "Retry" | Unrecognized<string>
```