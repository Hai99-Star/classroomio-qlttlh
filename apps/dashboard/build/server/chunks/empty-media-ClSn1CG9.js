import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { t as tv } from './index14-HMlD0kYH.js';

const emptyMediaVariants = tv({
  base: "ui:mb-2 ui:flex ui:shrink-0 ui:items-center ui:justify-center ui:[&_svg]:pointer-events-none ui:[&_svg]:shrink-0",
  variants: {
    variant: {
      default: "ui:bg-transparent",
      icon: "ui:bg-muted ui:text-foreground ui:flex ui:size-10 ui:shrink-0 ui:items-center ui:justify-center ui:rounded-lg ui:[&_svg:not([class*='ui:size-'])]:size-6"
    }
  },
  defaultVariants: { variant: "default" }
});
function Empty_media($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      variant = "default",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "empty-icon",
      "data-variant": variant,
      class: clsx(cn(emptyMediaVariants({ variant }), className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}

export { Empty_media as E };
//# sourceMappingURL=empty-media-ClSn1CG9.js.map
