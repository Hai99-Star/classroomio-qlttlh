import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import './client3-CP3T_KrU.js';
import './index4-3F2xRc80.js';
import './workspaces-CkuaVfOP.js';
import './client-CKgEa-sO.js';
import { t } from './translations-BxDrjLWK.js';
import './index6-DijlZyMe.js';
import './translation-B9Er9sXd.js';
import './button-McsHA0hU.js';
import './states.svelte-CIWoDLSQ.js';
import './input-group-button-BAHNvNdh.js';
import './org-BIDTy0Q0.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-CJivOuj6.js';
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
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import 'is-valid-domain';
import './search2-Bcr7AZ8r.js';
import './sso-COLElRqe.js';
import 'lodash/debounce.js';
import './token-auth.svelte-ju-03Zv-.js';
import './store4-BumQoz9y.js';
import 'lodash/cloneDeep.js';
import 'lodash/set.js';
import { I as Integrations } from './integrations-C5n_Xbb8.js';
import './index8-D5Z_9ShZ.js';
import { P as Page_header, c as Page_body, a as Page_header_content, b as Page_title } from './page-title-CsoF4Ebl.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import 'zod';
import './org3-BuUSwZTB.js';
import './index15-B_EOCZVP.js';
import '@better-auth/sso/client';
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
import 'lodash/merge.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import './video-recording-settings-DX6acopI.js';
import './store-D_AYzDdq.js';
import './user-Ahqcoe6u.js';
import './input-CkarY5WD.js';
import './circle-check-icon-De2_dpHS.js';
import './field-description-yPSV800w.js';
import './field-group-CsZtrba5.js';
import './field-set-CvEL423F.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    head("pdvd5g", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Integrations - ClassroomIO</title>`);
      });
    });
    Page_header($$renderer2, {
      children: ($$renderer3) => {
        Page_header_content($$renderer3, {
          children: ($$renderer4) => {
            Page_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.integrations.heading"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Page_subtitle($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.integrations.page_subtitle"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    {
      let child = function($$renderer3) {
        Integrations($$renderer3);
      };
      Page_body($$renderer2, { child, $$slots: { child: true } });
    }
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BKjGRzLf.js.map
