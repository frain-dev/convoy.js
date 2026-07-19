# DatastorePubSubType

## Example Usage

```typescript
import { DatastorePubSubType } from "convoy.js/models";

let value: DatastorePubSubType = "kafka";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"sqs" | "google" | "kafka" | "amqp" | Unrecognized<string>
```