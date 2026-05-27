import { c as createAuthClient } from './index15-B_EOCZVP.js';
import { p as public_env } from './shared-server-DaWdgxVh.js';
import { ssoClient } from '@better-auth/sso/client';
import { e as dev } from './index4-3F2xRc80.js';

function resolveBaseURL() {
  if (typeof window === "undefined") {
    return public_env.PUBLIC_SERVER_URL || "http://localhost:3002";
  }
  const publicServerUrl = public_env.PUBLIC_SERVER_URL;
  const isRenderSplitDomain = publicServerUrl && window.location.hostname.endsWith(".onrender.com") && new URL(publicServerUrl, window.location.origin).hostname !== window.location.hostname;
  if (isRenderSplitDomain) {
    return `${window.location.origin}/proxy/api/auth`;
  }
  if (public_env.PUBLIC_IS_SELFHOSTED === "true" || dev) {
    return publicServerUrl || `${window.location.origin}/api/auth`;
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
//# sourceMappingURL=client-CKgEa-sO.js.map
