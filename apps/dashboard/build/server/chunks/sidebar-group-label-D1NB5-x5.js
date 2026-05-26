import { g as attributes, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Sidebar_group_label($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      children,
      child,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const mergedProps = {
      class: cn("ui:text-sidebar-foreground/70 ui:ring-sidebar-ring ui:outline-hidden ui:flex ui:h-8 ui:shrink-0 ui:items-center ui:rounded-md ui:px-2 ui:text-xs ui:font-medium ui:transition-[margin,opacity] ui:duration-200 ui:ease-linear ui:focus-visible:ring-2 ui:[&>svg]:size-4 ui:[&>svg]:shrink-0", "ui:group-data-[collapsible=icon]:-mt-8 ui:group-data-[collapsible=icon]:opacity-0 ui:group-data-[collapsible=icon]:pointer-events-none", className),
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      ...restProps
    };
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}

export { Sidebar_group_label as S };
//# sourceMappingURL=sidebar-group-label-D1NB5-x5.js.map
