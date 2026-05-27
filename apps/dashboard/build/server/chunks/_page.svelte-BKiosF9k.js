import { h as head, a as store_get, n as escape_html, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import './index6-DijlZyMe.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import './empty-media-ClSn1CG9.js';
import './item-CUOTGwjL.js';
import './input-group-button-BAHNvNdh.js';
import './button-McsHA0hU.js';
import { r as resolve } from './server3-VLoL706W.js';
import './states.svelte-CIWoDLSQ.js';
import { t } from './translations-BxDrjLWK.js';
import { p as page } from './index5-nlVlCL1t.js';
import './org-BIDTy0Q0.js';
import './badge-DTmoBcZS.js';
import './setup-progress.svelte-CJivOuj6.js';
import './client-CKgEa-sO.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './index4-3F2xRc80.js';
import './submission-CIIjGYOS.js';
import './exports-DiyTWREe.js';
import './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './content-BYLGOVzm.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import './community.svelte--VcN9OTJ.js';
import { A as Ask_community } from './ask-community-go76y8Vy.js';
import './picker-data-NeeeTF6U.js';
import './index8-D5Z_9ShZ.js';
import './button-group-B7_AGlHf.js';
import './resource-list-row-DOW12fib.js';
import { B as Back_button } from './back-button-BI2Xs063.js';
import './utils2-DPSDgWhA.js';
import './index14-HMlD0kYH.js';
import './routing-Cz2vwfLK.js';
import './event-ByDKS2H7.js';
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
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import './client3-CP3T_KrU.js';
import 'lodash/merge.js';
import './base.svelte-Bx8dlk4A.js';
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
import './courses.svelte-DHUYjzzY.js';
import './store3-D6L6kxSt.js';
import './slug-B50H-j5u.js';
import './user-Ahqcoe6u.js';
import './store-D_AYzDdq.js';
import './index10-g3CkXSRA.js';
import './mounted-B958bjT3.js';
import './chevron-down2-mQy71LmC.js';
import './check-92w5ryLF.js';
import './floating-layer-anchor-g9tHJXH3.js';
import './hidden-input-D1JyMc-e.js';
import './sr-only-styles-C-iucSJr.js';
import './input-field-w4kZespe.js';
import './field-description-yPSV800w.js';
import './field-label-BEb0I1_z.js';
import './label-CXfFBnqp.js';
import './input-CkarY5WD.js';
import './text-editor-Qj8VPxid.js';
import './editor-MmeNGOC_.js';
import './copy2-MZgWu04s.js';
import './index12-CJhCFtIc.js';
import './index9-BwUcGQXA.js';
import './search-DbgrMZ24.js';
import './chevron-right2-DJRdFTZC.js';
import './arrow-left2-Dl6-kuJA.js';
import './arrow-right-BFYbcsyD.js';
import './dropdown-menu-group-Cr70_RUZ.js';
import './dropdown-menu-separator-CbPvKo5r.js';
import './plus2-B3hKTcCm.js';
import './trash-22-Dx9O7WWV.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const communityPath = page.url.pathname.replace(/\/ask$/, "");
    head("16el6h2", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Ask the Community - ClassroomIO</title>`);
      });
    });
    $$renderer2.push(`<!---->`);
    Page($$renderer2, {
      class: "mx-auto w-[90%]!",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Page_header($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                Back_button($$renderer5, {
                  href: resolve(communityPath, {}),
                  label: store_get($$store_subs ??= {}, "$t", t)("community.ask.go_back")
                });
                $$renderer5.push(`<!----> <!---->`);
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.ask.ask_the"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        {
          let child = function($$renderer4) {
            Ask_community($$renderer4);
          };
          Page_body($$renderer3, { child, $$slots: { child: true } });
        }
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BKiosF9k.js.map
