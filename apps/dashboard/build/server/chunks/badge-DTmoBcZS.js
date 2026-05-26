import { q as element, c as bind_props, g as attributes, j as clsx } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { t as tv } from './index14-HMlD0kYH.js';

const badgeVariants = tv({
  base: "ui:focus-visible:border-ring ui:focus-visible:ring-ring/50 ui:aria-invalid:ring-destructive/20 ui:dark:aria-invalid:ring-destructive/40 ui:aria-invalid:border-destructive ui:inline-flex ui:w-fit ui:shrink-0 ui:items-center ui:justify-center ui:gap-1 ui:overflow-hidden ui:whitespace-nowrap ui:rounded-full ui:border ui:px-2 ui:py-0.5 ui:text-xs ui:font-medium ui:transition-[color,box-shadow] ui:focus-visible:ring-[3px] ui:[&>svg]:pointer-events-none ui:[&>svg]:size-3",
  variants: {
    variant: {
      default: "ui:bg-primary ui:text-primary-foreground ui:[a&]:hover:bg-primary/90 ui:border-transparent",
      secondary: "ui:bg-secondary ui:text-secondary-foreground ui:[a&]:hover:bg-secondary/90 ui:border-transparent",
      destructive: "ui:bg-destructive ui:[a&]:hover:bg-destructive/90 ui:focus-visible:ring-destructive/20 ui:dark:focus-visible:ring-destructive/40 ui:dark:bg-destructive/70 ui:border-transparent ui:text-white",
      warning: "ui:bg-amber-600 ui:text-white ui:[a&]:hover:bg-amber-600/90 ui:border-transparent ui:dark:bg-amber-500 ui:dark:text-amber-950",
      success: "ui:bg-emerald-600 ui:text-white ui:[a&]:hover:bg-emerald-600/90 ui:border-transparent ui:dark:bg-emerald-500 ui:dark:text-emerald-950",
      outline: "ui:text-foreground ui:[a&]:hover:bg-accent ui:[a&]:hover:text-accent-foreground"
    }
  },
  defaultVariants: { variant: "default" }
});
function Badge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      href,
      class: className,
      variant = "default",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    element(
      $$renderer2,
      href ? "a" : "span",
      () => {
        $$renderer2.push(`${attributes({
          "data-slot": "badge",
          href,
          class: clsx(cn(badgeVariants({ variant }), className)),
          ...restProps
        })}`);
      },
      () => {
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
      }
    );
    bind_props($$props, { ref });
  });
}

export { Badge as B };
//# sourceMappingURL=badge-DTmoBcZS.js.map
