import { b as private_env } from './shared-server-DaWdgxVh.js';
import { a as Checkout } from './index3-yFUpp4J7.js';
import '@polar-sh/sdk';
import '@polar-sh/sdk/webhooks';

const GET = ({ ...params }) => {
  const metadata = JSON.parse(params.url.searchParams.get("metadata") ?? "{}");
  const successUrl = `/org/${metadata.orgSlug}?upgrade=true&confirmation=true`;
  const request = Checkout({
    accessToken: private_env.POLAR_ACCESS_TOKEN,
    successUrl,
    server: "production"
  });
  return request(params);
};

export { GET };
//# sourceMappingURL=_server.ts-SRQGmQtL.js.map
