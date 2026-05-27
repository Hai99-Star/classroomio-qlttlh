import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import './index4-3F2xRc80.js';
import './org-BIDTy0Q0.js';
import { t } from './translations-BxDrjLWK.js';
import './index8-D5Z_9ShZ.js';
import './index6-DijlZyMe.js';
import './badge-DTmoBcZS.js';
import './button-McsHA0hU.js';
import './empty-media-ClSn1CG9.js';
import './field-BxJz8KV9.js';
import './states.svelte-CIWoDLSQ.js';
import './input-group-button-BAHNvNdh.js';
import './client3-CP3T_KrU.js';
import './setup-progress.svelte-CJivOuj6.js';
import './client-CKgEa-sO.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './event-ByDKS2H7.js';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './submission-CIIjGYOS.js';
import './exports-DiyTWREe.js';
import './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './content-BYLGOVzm.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { A as Alert_callout } from './alert-callout-LlRb7Zok.js';
import { F as Field_group } from './field-group-CsZtrba5.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import 'lodash/merge.js';
import '@sveltekit-i18n/parser-icu';
import './index14-HMlD0kYH.js';
import './index13-C4Mtu7Q0.js';
import './create-id-D7gdjJzW.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-DTG9QsOx.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import './index15-B_EOCZVP.js';
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
import './info-DS8iN8bm.js';

function Zapier($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    Field_group($$renderer2, {
      class: "w-full max-w-5xl! space-y-8 px-2",
      children: ($$renderer3) => {
        Alert_callout($$renderer3, {
          variant: "information",
          title: store_get($$store_subs ??= {}, "$t", t)("automation.tabs.zapier"),
          description: store_get($$store_subs ??= {}, "$t", t)("automation.coming_soon"),
          class: "w-full"
        });
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    head("zbp3ek", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(t.get("automation.tabs.zapier"))} - ClassroomIO</title>`);
      });
    });
    Page($$renderer2, {
      class: "mx-auto w-full max-w-4xl",
      children: ($$renderer3) => {
        Page_header($$renderer3, {
          children: ($$renderer4) => {
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("automation.tabs.zapier"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Page_subtitle($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("automation.zapier.page_subtitle"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        {
          let child = function($$renderer4) {
            Zapier($$renderer4);
          };
          Page_body($$renderer3, { child, $$slots: { child: true } });
        }
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-ClT0c6vs.js.map
