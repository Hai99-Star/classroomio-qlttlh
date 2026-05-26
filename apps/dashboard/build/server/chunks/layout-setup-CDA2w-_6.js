import { a as getFirstOrg } from './org.server-DQLYEzoc.js';
import { b as private_env } from './shared-server-DaWdgxVh.js';
import { g as getApiKeyHeaders } from './server2-CLuZrePM.js';

async function getOrgSiteInfo(url, cookies) {
  const response = {
    orgSiteName: "",
    subdomain: "",
    isOrgSite: false,
    org: null
  };
  {
    const apiKeyHeaders = getApiKeyHeaders();
    const firstOrg = await getFirstOrg(apiKeyHeaders);
    if (firstOrg) {
      response.org = firstOrg;
      response.isOrgSite = true;
      response.orgSiteName = firstOrg.siteName || "";
      response.subdomain = "";
    }
    return response;
  }
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
//# sourceMappingURL=layout-setup-CDA2w-_6.js.map
