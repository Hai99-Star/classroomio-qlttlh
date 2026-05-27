import { a as store_get, n as escape_html, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import './client3-CP3T_KrU.js';
import './event-ByDKS2H7.js';
import './widget-oNxbU1sS.js';
import './index4-3F2xRc80.js';
import { t } from './translations-BxDrjLWK.js';
import './exports-DiyTWREe.js';
import './client2-CqohmrW2.js';
import { c as currentOrg } from './org-BIDTy0Q0.js';
import { S as Spinner } from './button-McsHA0hU.js';
import './index6-DijlZyMe.js';
import './badge-DTmoBcZS.js';
import './field-BxJz8KV9.js';
import './input-group-button-BAHNvNdh.js';
import './picker-data-NeeeTF6U.js';
import './index8-D5Z_9ShZ.js';
import './button-group-B7_AGlHf.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './states.svelte-CIWoDLSQ.js';
import './empty-media-ClSn1CG9.js';
import './item-CUOTGwjL.js';
import './toggle-group-item-BLEzxLjD.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './resource-list-row-DOW12fib.js';
import './question-type-capabilities-B1VkdJbc.js';
import 'pluralize';
import './setup-progress.svelte-CJivOuj6.js';
import './client-CKgEa-sO.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import 'lodash/get.js';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './submission-CIIjGYOS.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './content-BYLGOVzm.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import './question-container.svelte_svelte_type_style_lang-Cx6VgeOH.js';
import './utils2-DPSDgWhA.js';
import 'zod';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './index14-HMlD0kYH.js';
import './create-id-D7gdjJzW.js';
import './index13-C4Mtu7Q0.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-DTG9QsOx.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import './index15-B_EOCZVP.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import './video-recording-settings-DX6acopI.js';
import './exercise-8V9pDq65.js';
import './lesson-CRrxCXoW.js';
import './Icon-BfkBTjtA.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="bg-background min-h-screen w-full">`);
    if (!store_get($$store_subs ??= {}, "$currentOrg", currentOrg).id) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex min-h-[50vh] flex-col items-center justify-center px-4">`);
      Spinner($$renderer2, { class: "size-8!" });
      $$renderer2.push(`<!----> <p class="text-muted-foreground mt-4 text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("widgets.editor.waiting_org"))}</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      {
        $$renderer2.push("<!--[!-->");
        {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="flex min-h-[50vh] items-center justify-center">`);
          Spinner($$renderer2, { class: "size-8!" });
          $$renderer2.push(`<!----></div>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-eVg0Svgw.js.map
