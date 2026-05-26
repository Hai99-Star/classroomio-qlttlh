import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { t as tv } from './index14-HMlD0kYH.js';

const buttonGroupVariants = tv({
  base: "ui:flex ui:w-fit ui:items-stretch ui:has-[>[data-slot=button-group]]:gap-2 ui:[&>*]:focus-visible:relative ui:[&>*]:focus-visible:z-10 ui:has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-e-md ui:[&>[data-slot=select-trigger]:not([class*='ui:w-'])]:w-fit ui:[&>input]:flex-1",
  variants: {
    orientation: {
      horizontal: "ui:[&>*:not(:first-child)]:rounded-s-none ui:[&>*:not(:first-child)]:border-s-0 ui:[&>*:not(:last-child)]:rounded-e-none",
      vertical: "ui:flex-col ui:[&>*:not(:first-child)]:rounded-t-none ui:[&>*:not(:first-child)]:border-t-0 ui:[&>*:not(:last-child)]:rounded-b-none"
    }
  },
  defaultVariants: { orientation: "horizontal" }
});
function Button_group($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      orientation = "horizontal",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      role: "group",
      "data-slot": "button-group",
      "data-orientation": orientation,
      class: clsx(cn(buttonGroupVariants({ orientation }), className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}

export { Button_group as B };
//# sourceMappingURL=button-group-B7_AGlHf.js.map
