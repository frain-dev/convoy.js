export interface CreateApplication {
  name: string;
  support_email?: string;
}

export interface UpdateApplication extends CreateApplication {}
