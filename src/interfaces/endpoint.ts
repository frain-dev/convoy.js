interface CreateEndpoint {
  url: string;
  description: string;
  secret?: string;
  events?: string[];
}

interface UpdateEndpoint extends CreateEndpoint {}

export { CreateEndpoint, UpdateEndpoint };
