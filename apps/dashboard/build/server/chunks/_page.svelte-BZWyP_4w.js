import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { A as Ask_community_button, C as Community } from './community-baJbZkXz.js';
import './index6-DijlZyMe.js';
import './button-McsHA0hU.js';
import './field-BxJz8KV9.js';
import './states.svelte-CIWoDLSQ.js';
import './input-group-button-BAHNvNdh.js';
import { t } from './translations-BxDrjLWK.js';
import './client3-CP3T_KrU.js';
import './org-BIDTy0Q0.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-lN1sp4vm.js';
import './client-Bi-QreUE.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './event-ByDKS2H7.js';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './index4-DxtvI9Cx.js';
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
import './community.svelte-DslkguQ4.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import './picker-data-NeeeTF6U.js';
import './index8-D5Z_9ShZ.js';
import './button-group-B7_AGlHf.js';
import './resource-list-row-DOW12fib.js';
import './utils2-DPSDgWhA.js';
import './page-body-header-BoRdo4AM.js';
import './index10-g3CkXSRA.js';
import './create-id-D7gdjJzW.js';
import './mounted-B958bjT3.js';
import './chevron-down2-mQy71LmC.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './check-92w5ryLF.js';
import './floating-layer-anchor-g9tHJXH3.js';
import './hidden-input-D1JyMc-e.js';
import './sr-only-styles-C-iucSJr.js';
import './empty-BlKxfDG3.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './index14-HMlD0kYH.js';
import './item-actions-BlOLR7EV.js';
import './item-content--fxXSxOv.js';
import './item-description-BY5f-Oua.js';
import './item-title-BLGVIel8.js';
import './search3-D8xoPsxt.js';
import './input-group-input-BlASI7k-.js';
import './input-CkarY5WD.js';
import './x2-B8ExpX8J.js';
import './search-DbgrMZ24.js';
import './server3-VLoL706W.js';
import './routing-Cz2vwfLK.js';
import './vote-BtGvSzMr.js';
import './chip-BZT61Rcy.js';
import './arrow-up-BAkVUkU1.js';
import './Icon-BfkBTjtA.js';
import './skeleton-EXMKyyjB.js';
import './plus-CrIMYHIn.js';
import './index13-C4Mtu7Q0.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-DTG9QsOx.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './base.svelte-C2lk8LDX.js';
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
import './courses.svelte-y7SgDChY.js';
import './store3-D6L6kxSt.js';
import './slug-B50H-j5u.js';
import './user-Ahqcoe6u.js';
import './store-D_AYzDdq.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    head("fipke8", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Community - ClassroomIO</title>`);
      });
    });
    Page($$renderer2, {
      class: "w-full",
      children: ($$renderer3) => {
        Page_header($$renderer3, {
          children: ($$renderer4) => {
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.title"))}`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Page_action($$renderer4, {
              children: ($$renderer5) => {
                Ask_community_button($$renderer5);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        {
          let child = function($$renderer4) {
            Community($$renderer4, {});
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
//# sourceMappingURL=_page.svelte-BZWyP_4w.js.map
