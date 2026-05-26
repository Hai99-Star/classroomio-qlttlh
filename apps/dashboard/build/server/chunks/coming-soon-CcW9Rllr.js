import { a as store_get, n as escape_html, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { t } from './translations-BxDrjLWK.js';

function Coming_soon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      label = store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.exercises.new_exercise_modal.coming_soon")
    } = $$props;
    Badge($$renderer2, {
      variant: "default",
      class: "",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(label)}`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Coming_soon as C };
//# sourceMappingURL=coming-soon-CcW9Rllr.js.map
