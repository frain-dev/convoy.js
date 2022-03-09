interface CreateApplication {
  name: string;
  support_email?: string;
  secret?: string;
}

interface UpdateApplication extends CreateApplication {}

export { CreateApplication, UpdateApplication };
