import { c as classroomio } from './index4-CY3O4yvX.js';
import { s as safeServerApi } from './server2-CNt0sGTj.js';

async function getOrgBySiteName(siteName, apiKeyHeaders) {
  const result = await safeServerApi(
    () => classroomio.organization.$get(
      {
        query: { siteName }
      },
      apiKeyHeaders
    )
  );
  if (!result.ok) {
    console.error("Error fetching organization by siteName (server):", result);
    return null;
  }
  return result.body.data.length > 0 ? result.body.data[0] : null;
}
async function getOrgsByCustomDomain(customDomain, isCustomDomainVerified, apiKeyHeaders) {
  const result = await safeServerApi(
    () => classroomio.organization.$get(
      {
        query: {
          customDomain,
          isCustomDomainVerified
        }
      },
      apiKeyHeaders
    )
  );
  if (!result.ok) {
    console.error("Error fetching organizations by custom domain (server):", result);
    return [];
  }
  return result.body.data;
}

export { getOrgsByCustomDomain as a, getOrgBySiteName as g };
//# sourceMappingURL=org.server-C02FLdOq.js.map
