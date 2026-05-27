import { b as private_env } from './shared-server-DaWdgxVh.js';

const HOP_BY_HOP_HEADERS = /* @__PURE__ */ new Set([
  "connection",
  "content-encoding",
  "content-length",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade"
]);
function getApiOrigin() {
  const origin = private_env.PRIVATE_SERVER_URL || private_env.PUBLIC_SERVER_URL;
  if (!origin) {
    throw new Error("PRIVATE_SERVER_URL or PUBLIC_SERVER_URL must be set for dashboard API proxy");
  }
  return origin.replace(/\/$/, "");
}
function buildHeaders(event) {
  const headers = new Headers(event.request.headers);
  for (const header of HOP_BY_HOP_HEADERS) {
    headers.delete(header);
  }
  headers.set("x-forwarded-host", event.url.host);
  headers.set("x-forwarded-proto", event.url.protocol.replace(":", ""));
  headers.set("x-forwarded-prefix", "");
  return headers;
}
function buildResponseHeaders(upstreamHeaders) {
  const headers = new Headers(upstreamHeaders);
  for (const header of HOP_BY_HOP_HEADERS) {
    headers.delete(header);
  }
  return headers;
}
async function proxyApiRequest(event, path) {
  const target = new URL(`${getApiOrigin()}/${path.replace(/^\/+/, "")}`);
  target.search = event.url.search;
  const body = event.request.method === "GET" || event.request.method === "HEAD" ? void 0 : event.request.body;
  const upstream = await fetch(target, {
    method: event.request.method,
    headers: buildHeaders(event),
    body,
    duplex: body ? "half" : void 0,
    redirect: "manual"
  });
  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: buildResponseHeaders(upstream.headers)
  });
}

export { proxyApiRequest as p };
//# sourceMappingURL=api-proxy-8veisHrX.js.map
