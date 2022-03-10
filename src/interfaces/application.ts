export interface CreateApplication {
  name: string;
  support_email?: string;
  secret?: string;
}

export interface UpdateApplication extends CreateApplication {}
