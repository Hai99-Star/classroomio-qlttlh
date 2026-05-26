import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Page_body_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      align = "right",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const alignClasses = {
      left: "ui:justify-start",
      right: "ui:justify-end",
      none: "ui:justify-center"
    }[align];
    $$renderer2.push(`<div${attributes({
      "data-slot": "page-body-header",
      class: clsx(cn("ui:flex ui:items-center ui:gap-2 ui:p-2", alignClasses, className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}

export { Page_body_header as P };
//# sourceMappingURL=page-body-header-BoRdo4AM.js.map
