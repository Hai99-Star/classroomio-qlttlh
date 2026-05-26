import { h as head, a as store_get, n as escape_html, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { p as page } from './index5-nlVlCL1t.js';
import './index6-DijlZyMe.js';
import './states.svelte-CIWoDLSQ.js';
import { B as Button } from './button-McsHA0hU.js';
import './input-group-button-BAHNvNdh.js';
import './translations-BxDrjLWK.js';
import { c as currentOrg } from './org-BIDTy0Q0.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-CG2pdu70.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-lN1sp4vm.js';
import { A as Auth_ui } from './auth-ui-DbYP635I.js';
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
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { c as Card_description } from './card-title-BAC38wyM.js';
import './utils2-DPSDgWhA.js';
import './client3-CP3T_KrU.js';
import './index13-C4Mtu7Q0.js';
import './create-id-D7gdjJzW.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './index14-HMlD0kYH.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-DTG9QsOx.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './base.svelte-C2lk8LDX.js';
import 'zod/v4';
import './client-Bi-QreUE.js';
import './index15-B_EOCZVP.js';
import './shared-server-DaWdgxVh.js';
import '@better-auth/sso/client';
import './card-footer-BHtLQwFA.js';
import './card-header-CpBV_NsL.js';
import './separator-C8wJJtqC.js';
import './routes-DaVXfsS2.js';
import './dot-pattern-BsrHOSuA.js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const errorCode = new URLSearchParams(page.url.search).get("error");
    function goHome() {
      window.location.href = "/";
    }
    head("10dhjzf", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Reset Password - ClassroomIO</title>`);
      });
    });
    Auth_ui($$renderer2, {
      isLogin: false,
      showOnlyContent: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex flex-col items-center gap-4"><!---->`);
        Avatar($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Avatar_image($$renderer4, {
              src: store_get($$store_subs ??= {}, "$currentOrg", currentOrg).avatarUrl ? store_get($$store_subs ??= {}, "$currentOrg", currentOrg).avatarUrl : "/logo-192.png",
              alt: store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name ? store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name : "ClassroomIO"
            });
            $$renderer4.push(`<!----> <!---->`);
            Avatar_fallback($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name ? store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name : "ClassroomIO")}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <p class="text-xl font-semibold">Something went wrong</p> `);
        if (errorCode) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!---->`);
          Card_description($$renderer3, {
            class: "border px-2 py-1",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->CODE: ${escape_html(errorCode)}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> <!---->`);
        Card_description($$renderer3, {
          class: "text-center",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->We encountered an unexpected error. Please try again or return to the home page. If you're a developer, you can
      find more information about the error here.`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Button($$renderer3, {
          onclick: goHome,
          class: "",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Go Home`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DgUVh3pt.js.map
