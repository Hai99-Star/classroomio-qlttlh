import { n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { t } from './translations-BxDrjLWK.js';

function Course_publish_badge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { isPublished = false } = $$props;
    Badge($$renderer2, {
      variant: isPublished ? "default" : "outline",
      children: ($$renderer3) => {
        if (isPublished) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.published"))}`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.unpublished"))}`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Course_publish_badge as C };
//# sourceMappingURL=course-publish-badge-uyQ9WCEZ.js.map
