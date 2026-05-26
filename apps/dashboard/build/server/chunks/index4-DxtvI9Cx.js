import { U as BROWSER } from './utils2-DPSDgWhA.js';
import { p as public_env } from './shared-server-DaWdgxVh.js';
import { g as get } from './index-AIbsv2Pd.js';
import { c as currentOrg } from './org-BIDTy0Q0.js';
import './content-BYLGOVzm.js';
import './translations-BxDrjLWK.js';

const dev = BROWSER;
class ApiError extends Error {
  constructor(message, status, statusText, response) {
    super(message);
    this.status = status;
    this.statusText = statusText;
    this.response = response;
    this.name = "ApiError";
    if (status === 401) {
      this.error_code = "auth";
    } else if (status && status >= 400 && status < 500) {
      this.error_code = "client";
    } else if (status && status >= 500) {
      this.error_code = "server";
    } else if (status === 408) {
      this.error_code = "timeout";
    } else if (status === 0 || !status) {
      this.error_code = "network";
    } else {
      this.error_code = "unknown";
    }
  }
  error_code;
}
const DEFAULT_CONFIG = {
  baseURL: public_env.PUBLIC_SERVER_URL || "",
  timeout: 3e4,
  // 30 seconds
  retries: 1,
  retryDelay: 1e3,
  // 1 second
  customFetch: (input, init) => fetch(input, init),
  onAuthError: async () => {
    console.warn("Authentication error occurred. Consider redirecting to login.");
  },
  onNetworkError: async (error) => {
    console.error("Network error:", error);
  },
  onResponse: async (response) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`API Response: ${response.status} ${response.statusText}`);
    }
  }
};
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getErrMsg = (error, fallback = "Something went wrong") => {
  if (error instanceof ApiError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  if (error instanceof Object && "message" in error) {
    return error.message;
  }
  return fallback;
};
var _serialize = (name, value, opt = {}) => {
  let cookie = `${name}=${value}`;
  if (name.startsWith("__Secure-") && !opt.secure) {
    throw new Error("__Secure- Cookie must have Secure attributes");
  }
  if (name.startsWith("__Host-")) {
    if (!opt.secure) {
      throw new Error("__Host- Cookie must have Secure attributes");
    }
    if (opt.path !== "/") {
      throw new Error('__Host- Cookie must have Path attributes with "/"');
    }
    if (opt.domain) {
      throw new Error("__Host- Cookie must not have Domain attributes");
    }
  }
  if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
    if (opt.maxAge > 3456e4) {
      throw new Error(
        "Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration."
      );
    }
    cookie += `; Max-Age=${opt.maxAge | 0}`;
  }
  if (opt.domain && opt.prefix !== "host") {
    cookie += `; Domain=${opt.domain}`;
  }
  if (opt.path) {
    cookie += `; Path=${opt.path}`;
  }
  if (opt.expires) {
    if (opt.expires.getTime() - Date.now() > 3456e7) {
      throw new Error(
        "Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future."
      );
    }
    cookie += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly) {
    cookie += "; HttpOnly";
  }
  if (opt.secure) {
    cookie += "; Secure";
  }
  if (opt.sameSite) {
    cookie += `; SameSite=${opt.sameSite.charAt(0).toUpperCase() + opt.sameSite.slice(1)}`;
  }
  if (opt.priority) {
    cookie += `; Priority=${opt.priority.charAt(0).toUpperCase() + opt.priority.slice(1)}`;
  }
  if (opt.partitioned) {
    if (!opt.secure) {
      throw new Error("Partitioned Cookie must have Secure attributes");
    }
    cookie += "; Partitioned";
  }
  return cookie;
};
var serialize = (name, value, opt) => {
  value = encodeURIComponent(value);
  return _serialize(name, value, opt);
};
var mergePath = (base, path) => {
  base = base.replace(/\/+$/, "");
  base = base + "/";
  path = path.replace(/^\/+/, "");
  return base + path;
};
var replaceUrlParam = (urlString, params) => {
  for (const [k, v] of Object.entries(params)) {
    const reg = new RegExp("/:" + k + "(?:{[^/]+})?\\??");
    urlString = urlString.replace(reg, v ? `/${v}` : "");
  }
  return urlString;
};
var buildSearchParams = (query) => {
  const searchParams = new URLSearchParams();
  for (const [k, v] of Object.entries(query)) {
    if (v === void 0) {
      continue;
    }
    if (Array.isArray(v)) {
      for (const v2 of v) {
        searchParams.append(k, v2);
      }
    } else {
      searchParams.set(k, v);
    }
  }
  return searchParams;
};
var replaceUrlProtocol = (urlString, protocol) => {
  switch (protocol) {
    case "ws":
      return urlString.replace(/^http/, "ws");
    case "http":
      return urlString.replace(/^ws/, "http");
  }
};
var removeIndexString = (urlString) => {
  if (/^https?:\/\/[^\/]+?\/index(?=\?|$)/.test(urlString)) {
    return urlString.replace(/\/index(?=\?|$)/, "/");
  }
  return urlString.replace(/\/index(?=\?|$)/, "");
};
function isObject(item) {
  return typeof item === "object" && item !== null && !Array.isArray(item);
}
function deepMerge(target, source) {
  if (!isObject(target) && !isObject(source)) {
    return source;
  }
  const merged = { ...target };
  for (const key in source) {
    const value = source[key];
    if (isObject(merged[key]) && isObject(value)) {
      merged[key] = deepMerge(merged[key], value);
    } else {
      merged[key] = value;
    }
  }
  return merged;
}
var createProxy = (callback, path) => {
  const proxy = new Proxy(() => {
  }, {
    get(_obj, key) {
      if (typeof key !== "string" || key === "then") {
        return void 0;
      }
      return createProxy(callback, [...path, key]);
    },
    apply(_1, _2, args) {
      return callback({
        path,
        args
      });
    }
  });
  return proxy;
};
var ClientRequestImpl = class {
  url;
  method;
  buildSearchParams;
  queryParams = void 0;
  pathParams = {};
  rBody;
  cType = void 0;
  constructor(url, method, options) {
    this.url = url;
    this.method = method;
    this.buildSearchParams = options.buildSearchParams;
  }
  fetch = async (args, opt) => {
    if (args) {
      if (args.query) {
        this.queryParams = this.buildSearchParams(args.query);
      }
      if (args.form) {
        const form = new FormData();
        for (const [k, v] of Object.entries(args.form)) {
          if (Array.isArray(v)) {
            for (const v2 of v) {
              form.append(k, v2);
            }
          } else {
            form.append(k, v);
          }
        }
        this.rBody = form;
      }
      if (args.json) {
        this.rBody = JSON.stringify(args.json);
        this.cType = "application/json";
      }
      if (args.param) {
        this.pathParams = args.param;
      }
    }
    let methodUpperCase = this.method.toUpperCase();
    const headerValues = {
      ...args?.header,
      ...typeof opt?.headers === "function" ? await opt.headers() : opt?.headers
    };
    if (args?.cookie) {
      const cookies = [];
      for (const [key, value] of Object.entries(args.cookie)) {
        cookies.push(serialize(key, value, { path: "/" }));
      }
      headerValues["Cookie"] = cookies.join(",");
    }
    if (this.cType) {
      headerValues["Content-Type"] = this.cType;
    }
    const headers = new Headers(headerValues ?? void 0);
    let url = this.url;
    url = removeIndexString(url);
    url = replaceUrlParam(url, this.pathParams);
    if (this.queryParams) {
      url = url + "?" + this.queryParams.toString();
    }
    methodUpperCase = this.method.toUpperCase();
    const setBody = !(methodUpperCase === "GET" || methodUpperCase === "HEAD");
    return (opt?.fetch || fetch)(url, {
      body: setBody ? this.rBody : void 0,
      method: methodUpperCase,
      headers,
      ...opt?.init
    });
  };
};
var hc = (baseUrl, options) => createProxy(function proxyCallback(opts) {
  const buildSearchParamsOption = options?.buildSearchParams ?? buildSearchParams;
  const parts = [...opts.path];
  const lastParts = parts.slice(-3).reverse();
  if (lastParts[0] === "toString") {
    if (lastParts[1] === "name") {
      return lastParts[2] || "";
    }
    return proxyCallback.toString();
  }
  if (lastParts[0] === "valueOf") {
    if (lastParts[1] === "name") {
      return lastParts[2] || "";
    }
    return proxyCallback;
  }
  let method = "";
  if (/^\$/.test(lastParts[0])) {
    const last = parts.pop();
    if (last) {
      method = last.replace(/^\$/, "");
    }
  }
  const path = parts.join("/");
  const url = mergePath(baseUrl, path);
  if (method === "url") {
    let result = url;
    if (opts.args[0]) {
      if (opts.args[0].param) {
        result = replaceUrlParam(url, opts.args[0].param);
      }
      if (opts.args[0].query) {
        result = result + "?" + buildSearchParamsOption(opts.args[0].query).toString();
      }
    }
    result = removeIndexString(result);
    return new URL(result);
  }
  if (method === "ws") {
    const webSocketUrl = replaceUrlProtocol(
      opts.args[0] && opts.args[0].param ? replaceUrlParam(url, opts.args[0].param) : url,
      "ws"
    );
    const targetUrl = new URL(webSocketUrl);
    const queryParams = opts.args[0]?.query;
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => targetUrl.searchParams.append(key, item));
        } else {
          targetUrl.searchParams.set(key, value);
        }
      });
    }
    const establishWebSocket = (...args) => {
      if (options?.webSocket !== void 0 && typeof options.webSocket === "function") {
        return options.webSocket(...args);
      }
      return new WebSocket(...args);
    };
    return establishWebSocket(targetUrl.toString());
  }
  const req = new ClientRequestImpl(url, method, {
    buildSearchParams: buildSearchParamsOption
  });
  if (method) {
    options ??= {};
    const args = deepMerge(options, { ...opts.args[1] });
    return req.fetch(opts.args[0], args);
  }
  return req;
}, []);
const hcWithType = (...args) => hc(...args);
const AGENT_CONTENT_TYPE = "application/x-cio-agent";
function getCioCookieString(cookies) {
  return cookies.getAll().filter((c) => c.name.includes("classroomio")).map((c) => `${c.name}=${c.value}`).join("; ");
}
function getHasCioCookies(cookies) {
  const cioCookies = cookies.getAll().filter((c) => c.name.includes("classroomio"));
  if (cioCookies.length === 0) return false;
  const onlyLocaleCookie = cioCookies.every((c) => c.name === "classroomio_locale");
  return !onlyLocaleCookie;
}
const getRequestBaseUrl = () => {
  if (typeof window === "undefined") {
    return process.env.PRIVATE_SERVER_URL || public_env.PUBLIC_SERVER_URL;
  }
  if (public_env.PUBLIC_IS_SELFHOSTED === "true" || dev) {
    return public_env.PUBLIC_SERVER_URL ?? "";
  }
  return `${window.location.origin}/proxy`;
};
function isAgentRequest(input) {
  try {
    const raw = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
    const pathname = new URL(raw, "http://placeholder").pathname;
    return pathname.includes("/agent/");
  } catch {
    return false;
  }
}
function toBase64Utf8(input) {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(input, "utf-8").toString("base64");
  }
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
function mergeAbortSignals(...signals) {
  const activeSignals = signals.filter((signal) => Boolean(signal));
  if (activeSignals.length === 0) {
    return void 0;
  }
  if (activeSignals.length === 1) {
    return activeSignals[0];
  }
  const controller = new AbortController();
  const abortWithSignal = (signal) => {
    if (controller.signal.aborted) {
      return;
    }
    controller.abort(signal.reason);
  };
  for (const signal of activeSignals) {
    if (signal.aborted) {
      abortWithSignal(signal);
      break;
    }
    signal.addEventListener("abort", () => abortWithSignal(signal), { once: true });
  }
  return controller.signal;
}
class ApiClient {
  config;
  constructor(config = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }
  async makeRequest(input, requestConfig = {}) {
    const { timeout = this.config.timeout, retries = this.config.retries, ...fetchConfig } = requestConfig;
    const fullUrl = typeof input === "string" ? input : input.toString();
    const headers = new Headers(fetchConfig.headers);
    if (!headers.has("Accept")) {
      headers.set("Accept", "application/json");
    }
    const org = get(currentOrg);
    if (org?.id) {
      headers.set("cio-org-id", org.id);
    }
    let requestBody = fetchConfig.body;
    const isFormData = fetchConfig.body instanceof FormData;
    if (fetchConfig.body && typeof fetchConfig.body === "object" && !isFormData) {
      requestBody = JSON.stringify(fetchConfig.body);
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }
    } else if (fetchConfig.body && !headers.has("Content-Type")) {
      if (typeof fetchConfig.body === "string") {
        headers.set("Content-Type", "text/plain");
      }
    }
    if (isFormData) {
      headers.delete("Content-Type");
    }
    if (requestBody && !isFormData && isAgentRequest(input)) {
      const inner = typeof requestBody === "string" ? requestBody : JSON.stringify(requestBody);
      requestBody = JSON.stringify({ b64: toBase64Utf8(inner) });
      headers.set("Content-Type", AGENT_CONTENT_TYPE);
    }
    const timeoutController = new AbortController();
    const timeoutId = setTimeout(() => timeoutController.abort(), timeout);
    const requestInit = {
      ...fetchConfig,
      headers,
      body: requestBody,
      signal: mergeAbortSignals(fetchConfig.signal, timeoutController.signal)
    };
    let lastError = null;
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const response = await this.config.customFetch(fullUrl, requestInit);
        clearTimeout(timeoutId);
        await this.config.onResponse(response);
        if (response.ok) {
          return response;
        }
        if (response.status === 401) {
          await this.config.onAuthError();
          throw new ApiError("Authentication failed", response.status, response.statusText, response);
        }
        if (response.status >= 400 && response.status < 500) {
          const errorText = await response.text().catch(() => "Unknown error");
          throw new ApiError(errorText, response.status, response.statusText, response);
        }
        if (response.status >= 500) {
          const error = new ApiError(response.statusText, response.status, response.statusText, response);
          if (attempt === retries) {
            throw error;
          }
          lastError = error;
          await delay(this.config.retryDelay * Math.pow(2, attempt));
          continue;
        }
        throw new ApiError(`Unexpected status: ${response.statusText}`, response.status, response.statusText, response);
      } catch (error) {
        clearTimeout(timeoutId);
        if (error instanceof Error && error.name === "AbortError") {
          if (!timeoutController.signal.aborted) {
            throw error;
          }
          throw new ApiError("Request timeout", 408, "Request Timeout");
        }
        if (error instanceof TypeError && error.message.includes("fetch")) {
          const networkError = new ApiError("Network error", 0, "Network Error");
          if (attempt === retries) {
            await this.config.onNetworkError(networkError);
            throw networkError;
          }
          lastError = networkError;
          await delay(this.config.retryDelay * Math.pow(2, attempt));
          continue;
        }
        throw error;
      }
    }
    throw lastError || new ApiError("Request failed after all retries");
  }
  // Generic request method - handles all HTTP methods
  async request(input, config = {}) {
    return this.makeRequest(input, config);
  }
  // Update configuration
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
  }
}
const apiClient = new ApiClient();
const classroomio = hcWithType(getRequestBaseUrl(), {
  fetch: async (input, requestInit) => {
    return apiClient.request(input, requestInit);
  },
  init: {
    credentials: "include"
    // Required for sending cookies cross-origin
  }
});
function getApiHeaders(cookies, orgId) {
  const cioCookies = getCioCookieString(cookies);
  const headers = {
    cookie: cioCookies || ""
  };
  console.log("headers", headers);
  console.log("orgId", orgId);
  if (orgId) {
    headers["cio-org-id"] = orgId;
  }
  return { headers };
}

export { ApiError as A, getHasCioCookies as a, getRequestBaseUrl as b, classroomio as c, getApiHeaders as d, dev as e, getErrMsg as f, getCioCookieString as g, apiClient as h };
//# sourceMappingURL=index4-DxtvI9Cx.js.map
