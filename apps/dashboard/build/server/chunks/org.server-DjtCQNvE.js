import { c as classroomio } from './index4-3F2xRc80.js';
import { s as safeServerApi } from './server2-RKXuQOz9.js';

async function getFirstOrg(apiKeyHeaders) {
  const result = await safeServerApi(
    () => classroomio.organization.first.$get(void 0, apiKeyHeaders)
  );
  if (!result.ok) {
    console.error("Error fetching first organization (server):", result);
    return null;
  }
  return result.body.data.length > 0 ? result.body.data[0] : null;
}
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

export { getFirstOrg as a, getOrgBySiteName as g };
//# sourceMappingURL=org.server-DjtCQNvE.js.map
