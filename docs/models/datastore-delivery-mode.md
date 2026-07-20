# DatastoreDeliveryMode

## Example Usage

```typescript
import { DatastoreDeliveryMode } from "convoy.js/models";

let value: DatastoreDeliveryMode = "at_least_once";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"at_least_once" | "at_most_once" | "" | Unrecognized<string>
```