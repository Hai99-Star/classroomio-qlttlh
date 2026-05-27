import type { RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const HOP_BY_HOP_HEADERS = new Set([
  'connection',
  'content-encoding',
  'content-length',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailer',
  'transfer-encoding',
  'upgrade'
]);

function getApiOrigin() {
  const origin = env.PRIVATE_SERVER_URL || env.PUBLIC_SERVER_URL;

  if (!origin) {
    throw new Error('PRIVATE_SERVER_URL or PUBLIC_SERVER_URL must be set for dashboard API proxy');
  }

  return origin.replace(/\/$/, '');
}

function buildHeaders(event: RequestEvent) {
  const headers = new Headers(event.request.headers);

  for (const header of HOP_BY_HOP_HEADERS) {
    headers.delete(header);
  }

  headers.set('x-forwarded-host', event.url.host);
  headers.set('x-forwarded-proto', event.url.protocol.replace(':', ''));
  headers.set('x-forwarded-prefix', '');

  return headers;
}

function buildResponseHeaders(upstreamHeaders: Headers) {
  const headers = new Headers(upstreamHeaders);

  for (const header of HOP_BY_HOP_HEADERS) {
    headers.delete(header);
  }

  return headers;
}

export async function proxyApiRequest(event: RequestEvent, path: string) {
  const target = new URL(`${getApiOrigin()}/${path.replace(/^\/+/, '')}`);
  target.search = event.url.search;

  const body = event.request.method === 'GET' || event.request.method === 'HEAD' ? undefined : event.request.body;
  const upstream = await fetch(target, {
    method: event.request.method,
    headers: buildHeaders(event),
    body,
    duplex: body ? 'half' : undefined,
    redirect: 'manual'
  } as RequestInit & { duplex?: 'half' });

  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: buildResponseHeaders(upstream.headers)
  });
}
