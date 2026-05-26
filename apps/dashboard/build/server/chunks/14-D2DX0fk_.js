import { g as getOrgBySiteName } from './org.server-DQLYEzoc.js';
import { c as classroomio } from './index4-DxtvI9Cx.js';
import { s as safeServerApi, g as getApiKeyHeaders } from './server2-CLuZrePM.js';
import { e as error } from './index-BIaV-njC.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import './org-BIDTy0Q0.js';
import 'lodash/merge.js';
import './content-BYLGOVzm.js';
import './translations-BxDrjLWK.js';
import '@sveltekit-i18n/parser-icu';
import './utils-DmZwNubP.js';

const load = async ({ params = { hash: "" } }) => {
  try {
    const token = decodeURIComponent(params.hash);
    const result = await safeServerApi(
      () => classroomio.invite.organization[":token"].preview.$get(
        {
          param: { token }
        },
        getApiKeyHeaders()
      )
    );
    if (!result.ok || !result.body.data) {
      throw new Error("Invalid organization invite payload");
    }
    const apiKeyHeaders = getApiKeyHeaders();
    const currentOrg = result.body.data.organization.siteName ? await getOrgBySiteName(result.body.data.organization.siteName, apiKeyHeaders) : null;
    return {
      token,
      invite: result.body.data,
      currentOrg
    };
  } catch (e) {
    console.error("Error decoding organization invite params.hash", e);
    throw error(404, "Not found");
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-UxsTmhKc.js')).default;
const server_id = "src/routes/invite/[hash]/+layout.server.ts";
const imports = ["_app/immutable/nodes/14.DtYoHsZT.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DMkybXYI.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-D2DX0fk_.js.map
