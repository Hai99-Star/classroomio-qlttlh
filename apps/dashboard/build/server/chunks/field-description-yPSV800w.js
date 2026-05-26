import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Field_description($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<p${attributes({
      "data-slot": "field-description",
      class: clsx(cn("ui:text-muted-foreground ui:text-sm ui:font-normal ui:leading-normal ui:group-has-data-[orientation=horizontal]/field:text-balance", "ui:nth-last-2:-mt-1 ui:last:mt-0 ui:[[data-variant=legend]+&]:-mt-1.5", "ui:[&>a:hover]:text-primary ui:[&>a]:underline ui:[&>a]:underline-offset-4", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></p>`);
    bind_props($$props, { ref });
  });
}

export { Field_description as F };
//# sourceMappingURL=field-description-yPSV800w.js.map
