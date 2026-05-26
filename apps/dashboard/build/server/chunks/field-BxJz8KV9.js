import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { t as tv } from './index14-HMlD0kYH.js';

const fieldVariants = tv({
  base: "ui:group/field ui:data-[invalid=true]:text-destructive ui:flex ui:w-full ui:gap-3",
  variants: {
    orientation: {
      vertical: "ui:flex-col ui:*:w-full ui:*.sr-only:w-auto",
      horizontal: [
        "ui:flex-row ui:items-center",
        "ui:[&>[data-slot=field-label]]:flex-auto",
        "ui:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px ui:has-[>[data-slot=field-content]]:items-start"
      ],
      responsive: [
        "@md/field-group:ui:flex-row @md/field-group:ui:items-center @md/field-group:ui:[&>*]:w-auto ui:flex-col ui:*:w-full ui:*.sr-only:w-auto",
        "@md/field-group:ui:[&>[data-slot=field-label]]:flex-auto",
        "@md/field-group:ui:has-[>[data-slot=field-content]]:items-start @md/field-group:ui:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
      ]
    }
  },
  defaultVariants: { orientation: "vertical" }
});
function Field($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      orientation = "vertical",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      role: "group",
      "data-slot": "field",
      "data-orientation": orientation,
      class: clsx(cn(fieldVariants({ orientation }), className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}

export { Field as F };
//# sourceMappingURL=field-BxJz8KV9.js.map
