import { c as createAuthClient } from './index15-B_EOCZVP.js';
import { p as public_env } from './shared-server-DaWdgxVh.js';
import { ssoClient } from '@better-auth/sso/client';
import { e as dev } from './index4-DxtvI9Cx.js';

function resolveBaseURL() {
  if (typeof window === "undefined") {
    return public_env.PUBLIC_SERVER_URL || "http://localhost:3002";
  }
  if (public_env.PUBLIC_IS_SELFHOSTED === "true" || dev) {
    return public_env.PUBLIC_SERVER_URL || `${window.location.origin}/api/auth`;
  }
  return `${window.location.origin}/proxy/api/auth`;
}
const baseURL = resolveBaseURL();
const authClient = createAuthClient({
  baseURL,
  fetchOptions: {
    credentials: "include"
    // Include cookies in requests
  },
  plugins: [
    ssoClient({
      domainVerification: {
        enabled: true
      }
    })
  ]
});

export { authClient as a };
//# sourceMappingURL=client-Bi-QreUE.js.map
