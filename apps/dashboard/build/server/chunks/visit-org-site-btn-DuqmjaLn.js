import { a as store_get, n as escape_html, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { B as Button } from './button-McsHA0hU.js';
import { T as TENANT_ROOT_DOMAIN } from './domains-D9J1UytB.js';
import { c as currentOrg, e as currentOrgDomain } from './org-t71AQfHV.js';
import { i as isMobile } from './useMobile-CN4Yzs6U.js';
import { t } from './translations-BxDrjLWK.js';
import { u as user } from './user-Ahqcoe6u.js';
import { A as Arrow_up_right } from './arrow-up-right-DrMYhHzL.js';

function Visit_org_site_btn($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      className = "",
      isLMS = false,
      labelKey = "settings.subheadings.view_site",
      variant = "default",
      forceSubdomain = false
    } = $$props;
    let href = (() => {
      const subdomainOrigin = store_get($$store_subs ??= {}, "$currentOrg", currentOrg).siteName ? `https://${store_get($$store_subs ??= {}, "$currentOrg", currentOrg).siteName}.${TENANT_ROOT_DOMAIN}` : "";
      const origin = forceSubdomain ? subdomainOrigin || "" : store_get($$store_subs ??= {}, "$currentOrgDomain", currentOrgDomain) || "";
      if (!origin) {
        return "";
      }
      const pathname = isLMS && store_get($$store_subs ??= {}, "$user", user).isLoggedIn ? "/home" : "/";
      const url = new URL(pathname, origin);
      return url.toString();
    })();
    Button($$renderer2, {
      href,
      target: "_blank",
      variant,
      class: `ml-2 ${className}`.trim(),
      children: ($$renderer3) => {
        if (!store_get($$store_subs ??= {}, "$isMobile", isMobile)) {
          $$renderer3.push("<!--[-->");
          if (isLMS) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("dashboard.visit_site"))}`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)(labelKey))}`);
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        Arrow_up_right($$renderer3, { class: "custom" });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Visit_org_site_btn as V };
//# sourceMappingURL=visit-org-site-btn-DuqmjaLn.js.map
