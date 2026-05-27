import { a as getOrgsByCustomDomain, g as getOrgBySiteName } from './org.server-C02FLdOq.js';
import { b as blockedSubdomain } from './app3-BuUSwZTB.js';
import { b as private_env } from './shared-server-DaWdgxVh.js';
import { g as getApiKeyHeaders } from './server2-CNt0sGTj.js';

async function getOrgSiteInfo(url, cookies) {
  const response = {
    orgSiteName: "",
    subdomain: "",
    isOrgSite: false,
    org: null
  };
  const isLocalHost = url.host.includes("localhost");
  const tempSiteName = url.searchParams.get("org");
  if (isLocalHost && tempSiteName) {
    cookies.set("_orgSiteName", tempSiteName, {
      path: "/"
    });
  }
  const _orgSiteName = cookies.get("_orgSiteName");
  const debugMode = _orgSiteName && _orgSiteName !== "false";
  const subdomain = getSubdomain(url) || "";
  if (isURLCustomDomain(url)) {
    console.log("it is custom domain");
    const apiKeyHeaders = getApiKeyHeaders();
    const orgs = await getOrgsByCustomDomain(url.host, true, apiKeyHeaders);
    console.log("orgs", orgs);
    if (!orgs || orgs.length === 0) {
      return response;
    }
    const org = orgs[0];
    response.org = org;
    response.isOrgSite = true;
    response.orgSiteName = response.org?.siteName || "";
    response.subdomain = subdomain;
    return response;
  }
  if (!blockedSubdomain.includes(subdomain)) {
    const APP_SUBDOMAINS = private_env.PRIVATE_APP_SUBDOMAINS?.split(",") || [];
    if (APP_SUBDOMAINS.includes(subdomain)) {
      return response;
    }
    response.isOrgSite = debugMode || !!subdomain;
    response.orgSiteName = debugMode ? _orgSiteName : subdomain;
    if (response.orgSiteName) {
      const apiKeyHeaders = getApiKeyHeaders();
      const org = await getOrgBySiteName(response.orgSiteName, apiKeyHeaders);
      response.org = org ?? null;
    }
    const shouldDeleteCookie = !response.org && _orgSiteName;
    if (shouldDeleteCookie) {
      cookies.delete("_orgSiteName", { path: "/" });
    }
  }
  return response;
}
function isURLCustomDomain(url) {
  if (url.host.includes("localhost")) {
    return false;
  }
  const notCustomDomainHosts = [private_env.PRIVATE_APP_HOST || "", "classroomio.com", "myclassroomio.com"].filter(Boolean);
  return !notCustomDomainHosts.some((host) => url.host.endsWith(host));
}
function getSubdomain(url) {
  const appHost = private_env.PRIVATE_APP_HOST;
  if (!appHost) return null;
  const host = url.hostname.replace("www.", "");
  const parts = host.split(".");
  const appHostParts = appHost.split(".");
  const isAppHost = parts.slice(-appHostParts.length).join(".") === appHost;
  if (isAppHost) {
    return parts.length > appHostParts.length ? parts[0] : null;
  }
  return null;
}

export { getSubdomain as a, getOrgSiteInfo as g };
//# sourceMappingURL=layout-setup-UHcsNKzz.js.map
