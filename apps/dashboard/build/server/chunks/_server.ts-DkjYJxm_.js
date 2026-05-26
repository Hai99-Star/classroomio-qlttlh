import { C as CustomerPortal } from './index3-yFUpp4J7.js';
import { b as private_env } from './shared-server-DaWdgxVh.js';
import '@polar-sh/sdk';
import '@polar-sh/sdk/webhooks';

const GET = CustomerPortal({
  accessToken: private_env.POLAR_ACCESS_TOKEN,
  getCustomerId: async (e) => e.url.searchParams.get("customerId"),
  server: "production"
});

export { GET };
//# sourceMappingURL=_server.ts-DkjYJxm_.js.map
