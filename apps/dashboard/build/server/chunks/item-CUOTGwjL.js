import { g as attributes, c as bind_props, j as clsx } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { t as tv } from './index14-HMlD0kYH.js';

const itemMediaVariants = tv({
  base: "ui:flex ui:shrink-0 ui:items-center ui:justify-center ui:gap-2 ui:group-has-[[data-slot=item-description]]/item:translate-y-0.5 ui:group-has-[[data-slot=item-description]]/item:self-start ui:[&_svg]:pointer-events-none",
  variants: {
    variant: {
      default: "ui:bg-transparent",
      icon: "ui:bg-muted ui:size-8 ui:rounded-sm ui:border ui:[&_svg:not([class*='ui:size-'])]:size-4",
      image: "ui:size-10 ui:overflow-hidden ui:rounded-sm ui:[&_img]:size-full ui:[&_img]:object-cover"
    }
  },
  defaultVariants: { variant: "default" }
});
function Item_media($$renderer, $$props) {
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
      "data-slot": "item-media",
      "data-variant": variant,
      class: clsx(cn(itemMediaVariants({ variant }), className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
const itemVariants = tv({
  base: "group/item ui:[a]:hover:bg-accent/50 ui:[a]:transition-colors ui:focus-visible:border-ring ui:focus-visible:ring-ring/50 ui:flex ui:flex-wrap ui:items-center ui:rounded-md ui:border ui:border-transparent ui:text-sm ui:outline-none ui:transition-colors ui:duration-100 ui:focus-visible:ring-[3px] ui:cursor-pointer",
  variants: {
    variant: {
      default: "ui:bg-transparent",
      outline: "ui:border-border",
      muted: "ui:bg-muted/50",
      "muted-border": "ui:border-border ui:bg-muted/50"
    },
    size: { default: "ui:gap-4 ui:p-4", sm: "ui:gap-2.5 ui:px-4 ui:py-3" }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      child,
      variant,
      size,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const mergedProps = {
      class: cn(itemVariants({ variant, size }), className),
      "data-slot": "item",
      "data-variant": variant,
      "data-size": size,
      ...restProps
    };
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      mergedProps.children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}

export { Item as I, Item_media as a };
//# sourceMappingURL=item-CUOTGwjL.js.map
