import { g as goto } from './client2-CqohmrW2.js';
import { r as resolve } from './server3-VLoL706W.js';

function generateSitename(orgName) {
  return orgName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");
}
function openUpgradeModal() {
  const url = new URL(window.location.href);
  url.searchParams.set("upgrade", "true");
  const searchParams = url.searchParams.toString();
  goto(resolve(window.location.pathname + `?${searchParams}`, {}));
}

export { generateSitename as g, openUpgradeModal as o };
//# sourceMappingURL=org2-B8QQInlf.js.map
