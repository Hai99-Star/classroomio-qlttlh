import { g as attributes, j as clsx, c as bind_props, b as spread_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { t as tv } from './index14-HMlD0kYH.js';
import { B as Button } from './button-McsHA0hU.js';

const inputGroupAddonVariants = tv({
  base: "ui:text-muted-foreground ui:flex ui:h-auto ui:cursor-text ui:select-none ui:items-center ui:justify-center ui:gap-2 ui:py-1.5 ui:text-sm ui:font-medium ui:group-data-[disabled=true]/input-group:opacity-50 ui:[&>kbd]:rounded-[calc(var(--radius)-5px)] ui:[&>svg:not([class*='ui:size-'])]:size-4",
  variants: {
    align: {
      "inline-start": "ui:order-first ui:ps-3 ui:has-[>button]:ms-[-0.45rem] ui:has-[>kbd]:ms-[-0.35rem]",
      "inline-end": "ui:order-last ui:pe-3 ui:has-[>button]:me-[-0.45rem] ui:has-[>kbd]:me-[-0.35rem]",
      "block-start": "ui:[.border-b]:pb-3 ui:order-first ui:w-full ui:justify-start ui:px-3 ui:pt-3 ui:group-has-[>input]/input-group:pt-2.5",
      "block-end": "ui:[.border-t]:pt-3 ui:order-last ui:w-full ui:justify-start ui:px-3 ui:pb-3 ui:group-has-[>input]/input-group:pb-2.5"
    }
  },
  defaultVariants: { align: "inline-start" }
});
function Input_group_addon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      align = "inline-start",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      class: clsx(cn(inputGroupAddonVariants({ align }), className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
const inputGroupButtonVariants = tv({
  base: "ui:flex ui:items-center ui:gap-2 ui:text-sm ui:shadow-none",
  variants: {
    size: {
      xs: "ui:h-6 ui:gap-1 ui:rounded-[calc(var(--radius)-5px)] ui:px-2 ui:has-[>svg]:px-2 ui:[&>svg:not([class*='ui:size-'])]:size-3.5",
      sm: "ui:h-8 ui:gap-1.5 ui:rounded-md ui:px-2.5 ui:has-[>svg]:px-2.5",
      "icon-xs": "ui:size-6 ui:rounded-[calc(var(--radius)-5px)] ui:p-0 ui:has-[>svg]:p-0",
      "icon-sm": "ui:size-8 ui:p-0 ui:has-[>svg]:p-0"
    }
  },
  defaultVariants: { size: "xs" }
});
function Input_group_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      type = "button",
      variant = "ghost",
      size = "xs",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Button($$renderer3, spread_props([
        {
          type,
          "data-size": size,
          variant,
          class: cn(inputGroupButtonVariants({ size }), className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            children?.($$renderer4);
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}

export { Input_group_addon as I, Input_group_button as a };
//# sourceMappingURL=input-group-button-BAHNvNdh.js.map
