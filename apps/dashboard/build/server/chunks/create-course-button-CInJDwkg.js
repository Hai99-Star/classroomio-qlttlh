import { a as store_get, n as escape_html, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { B as Button } from './button-McsHA0hU.js';
import { t } from './translations-BxDrjLWK.js';
import { i as isOrgAdmin, b as currentOrgPath } from './org-BIDTy0Q0.js';
import { g as goto } from './client2-CqohmrW2.js';
import { v as isMobileStore } from './states.svelte-CIWoDLSQ.js';
import { P as Plus } from './plus-CrIMYHIn.js';

function Create_course_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { variant, isResponsive = false } = $$props;
    function onClick() {
      goto(`${store_get($$store_subs ??= {}, "$currentOrgPath", currentOrgPath)}/courses?create=true`);
    }
    if (isResponsive && isMobileStore.current) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        variant: "outline",
        size: "icon",
        disabled: !store_get($$store_subs ??= {}, "$isOrgAdmin", isOrgAdmin),
        onclick: onClick,
        children: ($$renderer3) => {
          Plus($$renderer3, { size: 16 });
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      Button($$renderer2, {
        variant,
        onclick: onClick,
        disabled: !store_get($$store_subs ??= {}, "$isOrgAdmin", isOrgAdmin),
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.heading_button"))}`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Create_course_button as C };
//# sourceMappingURL=create-course-button-CInJDwkg.js.map
