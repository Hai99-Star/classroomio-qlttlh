import { l as attr_class, j as clsx, n as escape_html } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Activity_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { activity, className = "", classes = {} } = $$props;
    $$renderer2.push(`<div${attr_class(clsx(cn("flex w-full flex-col items-center justify-evenly gap-2 rounded-xl border p-3 md:flex-row md:px-5 md:py-3", className, classes.container)))}><div class="bg-primary-200 w-fit rounded-full p-4 text-black"><!---->`);
    activity.icon($$renderer2, {});
    $$renderer2.push(`<!----></div> <div><p${attr_class(clsx(cn("text-center text-sm font-medium text-gray-600 md:text-left dark:text-gray-200", classes.title)))}>${escape_html(activity.title)}</p> <p${attr_class(clsx(cn("text-center text-2xl md:text-left", classes.percentage)))}>${escape_html(activity.percentage)} `);
    if (!activity.hidePercentage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`%`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></p> `);
    if (activity.description) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p${attr_class(clsx(cn("text-center text-xs text-gray-500 md:text-left md:text-sm dark:text-gray-300", classes.description)))}>${escape_html(activity.description)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}

export { Activity_card as A };
//# sourceMappingURL=activity-card-ir3pQ0rh.js.map
