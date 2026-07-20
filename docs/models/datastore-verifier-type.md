# DatastoreVerifierType

## Example Usage

```typescript
import { DatastoreVerifierType } from "convoy.js/models";

let value: DatastoreVerifierType = "basic_auth";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"noop" | "hmac" | "basic_auth" | "api_key" | "" | Unrecognized<string>
```