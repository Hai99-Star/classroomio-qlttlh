import { e as stringify, n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { t } from './translations-BxDrjLWK.js';
import { G as Globe } from './globe-DoLv90oB.js';

function Course_public_badge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { class: className = "" } = $$props;
    Badge($$renderer2, {
      variant: "secondary",
      class: `ui:inline-flex ui:shrink-0 ui:items-center ui:gap-1 ui:rounded-md! ui:text-xs ui:capitalize ${stringify(className)}`,
      children: ($$renderer3) => {
        Globe($$renderer3, { class: "size-3.5 shrink-0" });
        $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.public_badge"))}`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Course_public_badge as C };
//# sourceMappingURL=course-public-badge-DbQWyF43.js.map
