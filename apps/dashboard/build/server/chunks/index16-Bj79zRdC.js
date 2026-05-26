import { l as licenseApi } from './license.svelte-Cw7yPjRa.js';
import posthog from 'posthog-js';

const hasNoTracking = () => {
  const noTracking = licenseApi.hasAccess("no-tracking");
  console.log("license_no_tracking", noTracking);
  return noTracking;
};
const capturePosthogEvent = (event, properties) => {
  if (hasNoTracking()) return;
  posthog.capture(event, properties);
};
const identifyPosthogUser = (id, properties) => {
  if (hasNoTracking()) return;
  posthog.identify(id, properties);
};
const initPosthog = (user) => {
  if (hasNoTracking()) return;
  posthog.init("phc_JfdHOZ6v0cVlGELBYx1Tmoen2nxNOrAzvgvrPA6Ksov", {
    api_host: "https://eu.posthog.com",
    ...user && {
      bootstrap: { distinctID: user.id, isIdentifiedID: true }
    }
  });
  if (user) {
    posthog.setPersonProperties({
      ...user.email && { email: user.email },
      ...user.name && { name: user.name }
    });
  }
};

export { initPosthog as a, capturePosthogEvent as c, identifyPosthogUser as i };
//# sourceMappingURL=index16-Bj79zRdC.js.map
