import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { P as Profile } from './profile-CDNPB8uT.js';
import 'is-valid-domain';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import { t } from './translations-BxDrjLWK.js';
import './index4-3F2xRc80.js';
import './search2-Bcr7AZ8r.js';
import './sso-COLElRqe.js';
import './org-BIDTy0Q0.js';
import './content-BYLGOVzm.js';
import 'lodash/isNumber.js';
import './badge-DTmoBcZS.js';
import { B as Button } from './button-McsHA0hU.js';
import './index6-DijlZyMe.js';
import './input-group-button-BAHNvNdh.js';
import './states.svelte-CIWoDLSQ.js';
import './client3-CP3T_KrU.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-CJivOuj6.js';
import './client-CKgEa-sO.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './submission-CIIjGYOS.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './field-BxJz8KV9.js';
import 'canvas-confetti';
import 'lodash/debounce.js';
import './token-auth.svelte-ju-03Zv-.js';
import './store4-BumQoz9y.js';
import 'lodash/cloneDeep.js';
import 'lodash/set.js';
import './index8-D5Z_9ShZ.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, c as Page_body, a as Page_header_content, b as Page_title } from './page-title-CsoF4Ebl.js';
import './utils2-DPSDgWhA.js';
import './index5-nlVlCL1t.js';
import './user-Ahqcoe6u.js';
import './index-AIbsv2Pd.js';
import './workspaces-CkuaVfOP.js';
import 'zod';
import './org3-BuUSwZTB.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import './store-D_AYzDdq.js';
import './upload-B049_g3q.js';
import './label-CXfFBnqp.js';
import './create-id-D7gdjJzW.js';
import './index10-g3CkXSRA.js';
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
import './translation-B9Er9sXd.js';
import './input-CkarY5WD.js';
import './field-label-BEb0I1_z.js';
import './field-group-CsZtrba5.js';
import './field-set-CvEL423F.js';
import './field-separator-CCwxfqwE.js';
import './separator-C8wJJtqC.js';
import './unsaved-changes-DP5vyp0g.js';
import './upload-image-DrkVoklD.js';
import './progress-C-m28_ec.js';
import './context2-Dq8HS6q_.js';
import './avatar-fallback-CG2pdu70.js';
import './index7-moivQoE0.js';
import './dialog-BVhwOzzC.js';
import './dialog-content-DTG9QsOx.js';
import './x2-B8ExpX8J.js';
import './trash-22-Dx9O7WWV.js';
import './Icon-BfkBTjtA.js';
import './pencil-DAMrDWiT.js';
import '@sveltekit-i18n/parser-icu';
import './shared-server-DaWdgxVh.js';
import 'lodash/merge.js';
import './index14-HMlD0kYH.js';
import './index13-C4Mtu7Q0.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './hoverable-item-DbC0eVyl.js';
import './index15-B_EOCZVP.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import './video-recording-settings-DX6acopI.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let profileComponent = null;
    let isLoading = false;
    async function handleUpdate() {
      isLoading = true;
      try {
        await profileComponent?.handleUpdate();
      } finally {
        isLoading = false;
      }
    }
    head("1xvyxfo", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Settings - ClassroomIO</title>`);
      });
    });
    $$renderer2.push(`<!---->`);
    Page_header($$renderer2, {
      isSticky: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Page_header_content($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Page_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.heading"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Page_action($$renderer3, {
          children: ($$renderer4) => {
            Button($$renderer4, {
              variant: "secondary",
              loading: isLoading,
              onclick: handleUpdate,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.update_profile"))}`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <!---->`);
    {
      let child = function($$renderer3) {
        Profile($$renderer3, {});
      };
      Page_body($$renderer2, { child, $$slots: { child: true } });
    }
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BCxlGVu3.js.map
