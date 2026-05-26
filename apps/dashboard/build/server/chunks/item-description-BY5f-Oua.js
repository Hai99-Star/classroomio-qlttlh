import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Item_description($$renderer, $$props) {
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
      "data-slot": "item-description",
      class: clsx(cn("ui:text-muted-foreground ui:line-clamp-3 ui:text-balance ui:text-sm ui:font-normal ui:leading-normal", "ui:[&>a:hover]:text-primary ui:[&>a]:underline ui:[&>a]:underline-offset-4", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></p>`);
    bind_props($$props, { ref });
  });
}

export { Item_description as I };
//# sourceMappingURL=item-description-BY5f-Oua.js.map
