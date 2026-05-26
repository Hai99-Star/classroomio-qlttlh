import { L as LICENSE_FEATURE_IDS } from './constants-C43vhkR3.js';

class LicenseApi {
  features = [];
  isResolved = false;
  setFeatures(features = []) {
    this.features = this.sanitize(features);
    this.isResolved = true;
  }
  hasAccess(feature) {
    return this.features.includes(feature);
  }
  reset() {
    this.features = [];
    this.isResolved = false;
  }
  sanitize(features) {
    const deduped = [];
    for (const feature of features) {
      if (LICENSE_FEATURE_IDS.includes(feature)) {
        const typedFeature = feature;
        if (!deduped.includes(typedFeature)) {
          deduped.push(typedFeature);
        }
      }
    }
    return deduped;
  }
}
const licenseApi = new LicenseApi();

export { licenseApi as l };
//# sourceMappingURL=license.svelte-Cw7yPjRa.js.map
