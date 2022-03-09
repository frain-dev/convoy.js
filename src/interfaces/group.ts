interface CreateGroup {
  name: string;
  logo_url?: string;
  config: {
    disable_endpoint?: boolean;
    signature: GroupConfig;
    strategy: StrategyConfig;
  };
}

interface GroupConfig {
  hash: string;
  header: string;
}

interface StrategyConfig {
  type: string;
  default: {
    intervalSeconds: number;
    retryLimit: number;
  };
}

interface UpdateGroup extends GroupConfig {}

export { CreateGroup, UpdateGroup };
