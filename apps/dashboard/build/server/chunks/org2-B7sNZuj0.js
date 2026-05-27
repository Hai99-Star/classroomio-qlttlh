import { g as goto } from './client2-CqohmrW2.js';
import { r as resolve } from './server3-VLoL706W.js';

function openUpgradeModal() {
  const url = new URL(window.location.href);
  url.searchParams.set("upgrade", "true");
  const searchParams = url.searchParams.toString();
  goto(resolve(window.location.pathname + `?${searchParams}`, {}));
}

export { openUpgradeModal as o };
//# sourceMappingURL=org2-B7sNZuj0.js.map
