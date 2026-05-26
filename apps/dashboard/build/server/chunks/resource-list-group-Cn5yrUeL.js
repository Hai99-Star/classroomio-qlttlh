import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Resource_list_group($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      role: "list",
      "data-slot": "resource-list-group",
      class: clsx(cn("ui:group/resource-list ui:flex ui:w-full ui:flex-col ui:rounded-md ui:border ui:border-border", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}

export { Resource_list_group as R };
//# sourceMappingURL=resource-list-group-Cn5yrUeL.js.map
