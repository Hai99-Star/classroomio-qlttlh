import { w as writable } from './index-AIbsv2Pd.js';

const SIGNUP_FIELDS = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};
const LOGIN_FIELDS = {
  email: "",
  password: ""
};
const INITIAL_SSO_AUTH_STATE = {
  checking: false,
  required: false,
  available: false,
  redirectUrl: null,
  providerName: null,
  providerId: null
};
function ssoStateFromDiscovery(result) {
  if (!result) return INITIAL_SSO_AUTH_STATE;
  return {
    checking: false,
    required: result.ssoRequired ?? false,
    available: result.ssoAvailable ?? false,
    redirectUrl: result.redirectUrl ?? null,
    providerName: result.providerName ?? null,
    providerId: result.providerId ?? null
  };
}
function buildSsoRedirectUrl(redirectParam) {
  const base = typeof window !== "undefined" ? window.location.origin : "";
  const path = redirectParam && redirectParam.startsWith("/") ? redirectParam : "";
  return `${base}${path}`;
}
const SSO_EMAIL_DEBOUNCE_MS = 500;
function createSsoEmailChecker(options) {
  let timeoutId;
  return function handleEmailChange() {
    options.onClear();
    if (!options.getOrgSupportsSso()) return;
    clearTimeout(timeoutId);
    const email = options.getEmail();
    if (!email || !email.includes("@")) {
      options.onResult(INITIAL_SSO_AUTH_STATE);
      return;
    }
    options.onChecking();
    timeoutId = setTimeout(async () => {
      const result = await options.discoverSso(email);
      options.onResult(ssoStateFromDiscovery(result));
    }, SSO_EMAIL_DEBOUNCE_MS);
  };
}
const initial = {
  loadedForOrgId: null,
  ssoState: INITIAL_SSO_AUTH_STATE,
  orgSupportsSso: false
};
const authSsoStore = writable(initial);

export { LOGIN_FIELDS as L, SIGNUP_FIELDS as S, authSsoStore as a, buildSsoRedirectUrl as b, createSsoEmailChecker as c };
//# sourceMappingURL=auth-sso-store-BiCDI5Rg.js.map
