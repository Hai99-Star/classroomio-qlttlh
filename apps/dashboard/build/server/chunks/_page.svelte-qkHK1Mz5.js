import { a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { r as resolve } from './server3-VLoL706W.js';
import { o as orgApi } from './org.svelte-DOb0Hq6Y.js';
import { S as Skeleton } from './skeleton-EXMKyyjB.js';
import './badge-DTmoBcZS.js';
import './event-ByDKS2H7.js';
import './picker-data-NeeeTF6U.js';
import './index6-DijlZyMe.js';
import './index8-D5Z_9ShZ.js';
import './button-McsHA0hU.js';
import './button-group-B7_AGlHf.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './states.svelte-CIWoDLSQ.js';
import './empty-media-ClSn1CG9.js';
import './field-BxJz8KV9.js';
import './input-group-button-BAHNvNdh.js';
import './item-CUOTGwjL.js';
import './toggle-group-item-BLEzxLjD.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './resource-list-row-DOW12fib.js';
import './question-type-capabilities-B1VkdJbc.js';
import 'pluralize';
import { t } from './translations-BxDrjLWK.js';
import './client3-CP3T_KrU.js';
import { c as currentOrg } from './org-BIDTy0Q0.js';
import './setup-progress.svelte-CJivOuj6.js';
import './client-CKgEa-sO.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import 'lodash/get.js';
import { b as buildOrgLandingPageProps, n as normalizeLandingPageSettings } from './landing-page-1a54p-PE.js';
import { b as basePath, g as globalStore } from './app-DrlCEKij.js';
import './index4-3F2xRc80.js';
import './submission-CIIjGYOS.js';
import './exports-DiyTWREe.js';
import './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './content-BYLGOVzm.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { C as Card_loader } from './card-loader-CQgEsW2u.js';
import './question-container.svelte_svelte_type_style_lang-Cx6VgeOH.js';
import { u as user } from './user-Ahqcoe6u.js';
import './search2-Bcr7AZ8r.js';
import './sso-COLElRqe.js';
import './utils2-DPSDgWhA.js';
import './routing-Cz2vwfLK.js';
import './index-AIbsv2Pd.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import './store-D_AYzDdq.js';
import './upload-B049_g3q.js';
import './audience-query-utils-DHNyhHub.js';
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
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './index15-B_EOCZVP.js';
import './shared-server-DaWdgxVh.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';
import './exercise-8V9pDq65.js';
import './lesson-CRrxCXoW.js';
import './Icon-BfkBTjtA.js';
import './org3-BuUSwZTB.js';

/* empty css                                                       */
function Page_loader($$renderer) {
  $$renderer.push(`<section class="h-screen w-screen p-5"><div class="flex w-full items-center justify-between overflow-hidden rounded-md">`);
  Skeleton($$renderer, { class: "mr-40 h-4 w-[80%] rounded-[10px]" });
  $$renderer.push(`<!----> <div class="flex w-[20%] items-center justify-between">`);
  Skeleton($$renderer, { class: "mr-1 h-4 w-[2%] rounded-[10px]" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "mr-1 h-4 w-[2%] rounded-[10px]" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-4 w-[2%] rounded-[10px]" });
  $$renderer.push(`<!----></div></div> <div class="my-8 flex w-full flex-row flex-wrap items-start justify-center gap-5 overflow-hidden rounded-md">`);
  Skeleton($$renderer, { class: "h-80 w-full rounded-md" });
  $$renderer.push(`<!----></div> <div class="my-4 flex flex-wrap items-center justify-center gap-5 overflow-hidden rounded-md">`);
  Card_loader($$renderer);
  $$renderer.push(`<!----> `);
  Card_loader($$renderer);
  $$renderer.push(`<!----> `);
  Card_loader($$renderer);
  $$renderer.push(`<!----></div></section>`);
}
function Landing_page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { org } = $$props;
    const authAction = store_get($$store_subs ??= {}, "$user", user).isLoggedIn ? {
      label: t.get(store_get($$store_subs ??= {}, "$basePath", basePath) === "/lms" || store_get($$store_subs ??= {}, "$basePath", basePath) === "#" ? "navigation.goto_lms" : "navigation.goto_dashboard"),
      href: resolve(
        store_get($$store_subs ??= {}, "$basePath", basePath) !== "#" ? store_get($$store_subs ??= {}, "$basePath", basePath) : "/lms",
        {}
      )
    } : { label: t.get("navigation.login"), href: "/login" };
    buildOrgLandingPageProps(org, normalizeLandingPageSettings(org.landingpage), orgApi.publicCourses, orgApi.hasMorePublicCourses, authAction);
    {
      $$renderer2.push("<!--[-->");
      Page_loader($$renderer2);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    Landing_page($$renderer2, {
      orgSiteName: store_get($$store_subs ??= {}, "$globalStore", globalStore).orgSiteName,
      org: store_get($$store_subs ??= {}, "$currentOrg", currentOrg)
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-qkHK1Mz5.js.map
