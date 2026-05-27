import { a as store_get, d as attr, l as attr_class, j as clsx, n as escape_html, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import './states.svelte-CIWoDLSQ.js';
import { P as Powered_by$1 } from './powered-by2-Bm-L25bi.js';
import './button-McsHA0hU.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './toggle-group-item-BLEzxLjD.js';
import './badge-DTmoBcZS.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import { t } from './translations-BxDrjLWK.js';
import { c as currentOrg, d as isFreePlan } from './org-BIDTy0Q0.js';
import { A as Arrow_up_right } from './arrow-up-right-DrMYhHzL.js';

function Powered_by($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      variant = "floating",
      class: className,
      showOnlyLogo = false,
      courseSlug = null,
      orgSlug = null,
      sidebarUtmSource = "lms-sidebar"
    } = $$props;
    const attributionOrgSlug = orgSlug ?? store_get($$store_subs ??= {}, "$currentOrg", currentOrg).siteName ?? null;
    if (variant === "sidebar") {
      $$renderer2.push("<!--[-->");
      Powered_by$1($$renderer2, {
        courseSlug,
        orgSlug: attributionOrgSlug,
        utmSource: sidebarUtmSource,
        label: store_get($$store_subs ??= {}, "$t", t)("public_course.powered_by.label"),
        brand: store_get($$store_subs ??= {}, "$t", t)("public_course.powered_by.brand"),
        compact: showOnlyLogo,
        align: showOnlyLogo ? "center" : "start",
        class: className
      });
    } else {
      $$renderer2.push("<!--[!-->");
      if (store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan)) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", `https://classroomio.com?utm_source=${store_get($$store_subs ??= {}, "$currentOrg", currentOrg).siteName}.classroomio.com`)} target="_blank"${attr_class(clsx(cn("group fixed right-9 bottom-14 z-50 hover:no-underline", className)))}><span${attr_class(clsx(cn("relative flex items-center gap-1 overflow-hidden rounded-md border border-gray-100 bg-white text-sm font-medium text-black shadow-sm transition duration-500 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:border-neutral-700 dark:bg-transparent dark:text-white", showOnlyLogo ? "border-none p-0" : "border px-2 py-1")))}>`);
        Arrow_up_right($$renderer2, {
          size: 16,
          class: "custom absolute left-[5%] -translate-x-full translate-y-full text-white\n            opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        });
        $$renderer2.push(`<!----> <img src="/logo-192.png" alt="logo" class="h-[24px] opacity-100 group-hover:opacity-0"/> `);
        if (!showOnlyLogo) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.powered_by"))} ClassroomIO`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></span></a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Powered_by as P };
//# sourceMappingURL=powered-by-BIcaupFP.js.map
