import { a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import './index6-DijlZyMe.js';
import './states.svelte-BI9DWQmF.js';
import './button-McsHA0hU.js';
import './input-group-button-BAHNvNdh.js';
import './translations-BxDrjLWK.js';
import './client3-CP3T_KrU.js';
import { c as currentOrg } from './org-t71AQfHV.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-DpnO-FI3.js';
import './client-7aKHdcPD.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './event-ByDKS2H7.js';
import './landing-page-1a54p-PE.js';
import './app-CdpE9djd.js';
import './index4-CY3O4yvX.js';
import './submission-CIIjGYOS.js';
import './exports-DiyTWREe.js';
import './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './domains-D9J1UytB.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { P as Page_restricted } from './page-restricted-DWSrcJFy.js';
import './utils2-DPSDgWhA.js';
import './index13-ubjsmMp7.js';
import './create-id-D7gdjJzW.js';
import './scroll-lock-CqTUXsNd.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-H2EBI_WO.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './index14-HMlD0kYH.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-7tRy2FJ1.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './base.svelte-Bh2VVy5Z.js';
import 'zod/v4';
import './index15-B_EOCZVP.js';
import './shared-server-DaWdgxVh.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';
import './empty-BlKxfDG3.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './lock-DpzObtQi.js';
import './Icon-BfkBTjtA.js';

const CLIENT_EVENTS = {
  LANDING_VIEW: "landing_view",
  COURSE_PAGE_VIEW: "course_page_view",
  SIGNUP_VIEW: "signup_view",
  SIGNIN_VIEW: "signin_view",
  PRICING_VIEW: "pricing_view",
  CTA_CLICK: "cta_click"
};
const SERVER_EVENTS = {
  ENROLLMENT_STARTED: "enrollment_started",
  ENROLLMENT_COMPLETED: "enrollment_completed",
  COURSE_COMPLETED: "course_completed",
  CERTIFICATE_ISSUED: "certificate_issued"
};
const CLIENT_EVENT_TYPES = Object.values(CLIENT_EVENTS);
const SERVER_EVENT_TYPES = Object.values(SERVER_EVENTS);
[...CLIENT_EVENT_TYPES, ...SERVER_EVENT_TYPES];
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children, data } = $$props;
    if (data.org?.isRestricted || store_get($$store_subs ??= {}, "$currentOrg", currentOrg).isRestricted) {
      $$renderer2.push("<!--[-->");
      Page_restricted($$renderer2);
    } else {
      $$renderer2.push("<!--[!-->");
      children?.($$renderer2);
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-D-VnYNzX.js.map
