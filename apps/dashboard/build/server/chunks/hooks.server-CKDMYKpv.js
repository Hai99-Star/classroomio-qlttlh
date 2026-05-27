import { c as createAuthClient } from './index15-B_EOCZVP.js';
import { g as getCioCookieString, a as getHasCioCookies, b as getRequestBaseUrl } from './index4-CY3O4yvX.js';
import { r as redirect } from './index-D2olbCwr.js';
import { i as isPublicApiRoute, a as isPublicRoute } from './isPublicRoute-CS1uDm7K.js';
import { R as ROUTE } from './routes-B6DlDqVa.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import './org-t71AQfHV.js';
import 'lodash/merge.js';
import './domains-D9J1UytB.js';
import './translations-BxDrjLWK.js';
import '@sveltekit-i18n/parser-icu';

const baseURL = getRequestBaseUrl();
const authServerClient = createAuthClient({
  baseURL,
  fetchOptions: {
    credentials: "include"
    // Include cookies in requests
  }
});
console.log("baseURL", baseURL);
console.log("authServerClient", authServerClient);
const getSessionData = async (cookies) => {
  try {
    const cioCookies = getCioCookieString(cookies);
    if (!cioCookies) return null;
    const locals = await getThroughAuthClient(cioCookies);
    console.log("has locals", !!locals);
    if (!locals) return null;
    locals.fromSessions = true;
    return locals;
  } catch (error) {
    console.error("Session verification failed:", error);
    return null;
  }
};
async function getThroughAuthClient(allCookies) {
  const baseURL2 = getRequestBaseUrl();
  console.log("baseURL", baseURL2);
  const session = await authServerClient.getSession({
    fetchOptions: {
      headers: {
        cookie: allCookies
      }
    }
  });
  return session.data;
}
function parseCspDomains(value) {
  if (!value) return [];
  return value.split(",").map((d) => d.trim()).filter(Boolean).map((d) => d.startsWith("http://") || d.startsWith("https://") ? d : `https://${d}`);
}
function buildCspExtensions() {
  const allDomains = parseCspDomains(process.env.ALLOWED_EXTERNAL_DOMAINS);
  const or = (envVar) => allDomains.length ? allDomains : parseCspDomains(process.env[envVar]);
  const scriptSrc = or("CSP_SCRIPT_SRC_DOMAINS");
  const styleSrc = or("CSP_STYLE_SRC_DOMAINS");
  const connectSrcBase = or("CSP_CONNECT_SRC_DOMAINS");
  const frameSrc = or("CSP_FRAME_SRC_DOMAINS");
  const fontSrc = or("CSP_FONT_SRC_DOMAINS");
  const mediaSrc = or("CSP_MEDIA_SRC_DOMAINS");
  const frameAncestorsExtra = or("CSP_FRAME_ANCESTORS_DOMAINS");
  const serverUrl = process.env.PUBLIC_SERVER_URL;
  const connectSrc = serverUrl ? [...connectSrcBase, serverUrl] : connectSrcBase;
  const extensions = {};
  if (scriptSrc.length) extensions["script-src"] = scriptSrc;
  if (styleSrc.length) {
    extensions["style-src"] = styleSrc;
    extensions["style-src-elem"] = styleSrc;
  }
  if (connectSrc.length) extensions["connect-src"] = connectSrc;
  if (frameSrc.length) extensions["frame-src"] = frameSrc;
  if (fontSrc.length) extensions["font-src"] = fontSrc;
  if (mediaSrc.length) {
    extensions["img-src"] = mediaSrc;
    extensions["media-src"] = mediaSrc;
  }
  if (frameAncestorsExtra.length) {
    extensions["frame-ancestors"] = frameAncestorsExtra;
  }
  return extensions;
}
let cachedExtensions = null;
function getExtensions() {
  if (!cachedExtensions) cachedExtensions = buildCspExtensions();
  return cachedExtensions;
}
function extendHeader(header, extensions) {
  return header.split(";").map((d) => d.trim()).filter(Boolean).map((directive) => {
    const spaceIdx = directive.indexOf(" ");
    const name = spaceIdx === -1 ? directive : directive.substring(0, spaceIdx);
    const extra = extensions[name];
    return extra?.length ? `${directive} ${extra.join(" ")}` : directive;
  }).join("; ");
}
function applyCspExtensions(response) {
  const extensions = getExtensions();
  if (Object.keys(extensions).length === 0) return response;
  for (const name of ["content-security-policy", "content-security-policy-report-only"]) {
    const header = response.headers.get(name);
    if (header) {
      response.headers.set(name, extendHeader(header, extensions));
    }
  }
  return response;
}
const handleError = ({ error, event, status, message }) => {
  const err = error;
  console.error("[handleError]", {
    status,
    message,
    method: event.request.method,
    url: event.url.toString(),
    name: err?.name,
    msg: err?.message,
    stack: err?.stack
  });
};
const ANALYTICS_SESSION_COOKIE = "cio_aid";
const ANALYTICS_SESSION_MAX_AGE = 60 * 60 * 24 * 90;
function ensureAnalyticsSessionCookie(cookies) {
  if (cookies.get(ANALYTICS_SESSION_COOKIE)) return;
  cookies.set(ANALYTICS_SESSION_COOKIE, crypto.randomUUID(), {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    secure: true,
    maxAge: ANALYTICS_SESSION_MAX_AGE
  });
}
const handle = async (args) => {
  const { event } = args;
  const sessionData = await getSessionData(event.cookies);
  if (sessionData) {
    event.locals = sessionData;
  }
  if (!event.url.pathname.includes("/api")) {
    ensureAnalyticsSessionCookie(event.cookies);
  }
  let response;
  if (event.url.pathname.includes("/api")) {
    response = await handleAPIRoutes(args);
  } else {
    response = await handlePagesRoutes(args);
  }
  return applyCspExtensions(response);
};
const handlePagesRoutes = async ({ event, resolve }) => {
  const { pathname } = event.url;
  const hasCioCookie = getHasCioCookies(event.cookies);
  if (isPublicRoute(pathname)) {
    return resolve(event);
  }
  if (!event?.locals?.user && !hasCioCookie) {
    console.log("no user and no cio cookie, redirecting to login");
    const shouldAddRedirectParam = !pathname.includes(ROUTE.LOGOUT);
    const fullPath = pathname + event.url.search;
    const redirectPath = shouldAddRedirectParam ? `${ROUTE.LOGIN}?redirect=${encodeURIComponent(fullPath)}` : ROUTE.LOGIN;
    return redirect(303, redirectPath);
  }
  return resolve(event);
};
const handleAPIRoutes = async ({ event, resolve }) => {
  const { pathname } = event.url;
  if (isPublicApiRoute(pathname)) {
    return resolve(event);
  }
  if (!event.locals.user) {
    redirect(303, "/login");
  }
  return resolve(event);
};

export { handle, handleError };
//# sourceMappingURL=hooks.server-CKDMYKpv.js.map
