# PauseEndpointRequest

## Example Usage

```typescript
import { PauseEndpointRequest } from "convoy.js/models/operations";

let value: PauseEndpointRequest = {
  projectID: "<id>",
  endpointID: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectID`        | *string*           | :heavy_check_mark: | Project ID         |
| `endpointID`       | *string*           | :heavy_check_mark: | Endpoint ID        |