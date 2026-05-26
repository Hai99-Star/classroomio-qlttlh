import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Field_legend($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      variant = "legend",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<legend${attributes({
      "data-slot": "field-legend",
      "data-variant": variant,
      class: clsx(cn("ui:mb-3 ui:font-medium", "ui:data-[variant=legend]:text-base", "ui:data-[variant=label]:text-sm", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></legend>`);
    bind_props($$props, { ref });
  });
}
function Field_set($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<fieldset${attributes({
      "data-slot": "field-set",
      class: clsx(cn("ui:flex ui:flex-col ui:gap-6", "ui:has-[>[data-slot=checkbox-group]]:gap-3 ui:has-[>[data-slot=radio-group]]:gap-3", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></fieldset>`);
    bind_props($$props, { ref });
  });
}

export { Field_set as F, Field_legend as a };
//# sourceMappingURL=field-set-CvEL423F.js.map
