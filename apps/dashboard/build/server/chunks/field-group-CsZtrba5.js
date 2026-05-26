import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Field_group($$renderer, $$props) {
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
      "data-slot": "field-group",
      class: clsx(cn("ui:group/field-group ui:@container/field-group ui:flex ui:w-full ui:flex-col ui:gap-7 ui:data-[slot=checkbox-group]:gap-3 ui:*:data-[slot=field-group]:gap-4", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}

export { Field_group as F };
//# sourceMappingURL=field-group-CsZtrba5.js.map
