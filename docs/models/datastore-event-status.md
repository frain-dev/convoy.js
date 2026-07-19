# DatastoreEventStatus

## Example Usage

```typescript
import { DatastoreEventStatus } from "convoy.js/models";

let value: DatastoreEventStatus = "Failure";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Processing" | "Failure" | "Success" | "Retry" | "Pending" | Unrecognized<string>
```