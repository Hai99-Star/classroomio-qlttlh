import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Card_header($$renderer, $$props) {
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
      "data-slot": "card-header",
      class: clsx(cn("ui:has-data-[slot=card-action]:grid-cols-[1fr_auto] ui:[.border-b]:pb-6 ui:grid ui:auto-rows-min ui:grid-rows-[auto_auto] ui:items-start ui:gap-1.5 ui:px-6 @container/card-header", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}

export { Card_header as C };
//# sourceMappingURL=card-header-CpBV_NsL.js.map
