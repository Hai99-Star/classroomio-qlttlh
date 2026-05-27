import { p as proxyApiRequest } from './api-proxy-8veisHrX.js';
import './shared-server-DaWdgxVh.js';

const handler = (event) => proxyApiRequest(event, `api/auth/${event.params.path}`);
const GET = handler;
const POST = handler;
const PUT = handler;
const PATCH = handler;
const DELETE = handler;
const OPTIONS = handler;

export { DELETE, GET, OPTIONS, PATCH, POST, PUT };
//# sourceMappingURL=_server.ts-CtEPNkCo.js.map
