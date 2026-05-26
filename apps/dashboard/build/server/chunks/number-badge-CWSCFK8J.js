import { l as attr_class, j as clsx, n as escape_html } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { L as Lock } from './lock2-DSH1gNe6.js';

function Number_badge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { number, active = false, locked = false, class: className } = $$props;
    const badgeClass = cn(
      "ui:inline-flex ui:items-center ui:justify-center ui:shrink-0",
      "ui:size-7 ui:rounded-md ui:text-xs ui:font-medium ui:tabular-nums ui:tracking-tight",
      "ui:transition-colors",
      active ? "ui:bg-primary ui:text-primary-foreground" : "ui:border ui:bg-muted ui:text-muted-foreground ui:group-hover:bg-muted-foreground/15 ui:group-hover:text-foreground",
      className
    );
    $$renderer2.push(`<span${attr_class(clsx(badgeClass))} aria-hidden="true">`);
    if (locked) {
      $$renderer2.push("<!--[-->");
      Lock($$renderer2, { class: "ui:size-3.5 custom" });
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`${escape_html(number)}`);
    }
    $$renderer2.push(`<!--]--></span>`);
  });
}

export { Number_badge as N };
//# sourceMappingURL=number-badge-CWSCFK8J.js.map
