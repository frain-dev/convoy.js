# BulkOnboardRequest

## Example Usage

```typescript
import { BulkOnboardRequest } from "convoy.js/models/operations";

// No examples available for this model
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `projectID`                  | *string*                     | :heavy_check_mark:           | Project ID                   |
| `dryRun`                     | *boolean*                    | :heavy_minus_sign:           | Validate without creating    |
| `body`                       | *ReadableStream<Uint8Array>* | :heavy_minus_sign:           | Onboard Details (JSON)       |