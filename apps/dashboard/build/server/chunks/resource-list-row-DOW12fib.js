import { c as bind_props, b as spread_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { I as Item } from './item-CUOTGwjL.js';
import { t as tv } from './index14-HMlD0kYH.js';

const resourceListRowVariants = tv({
  base: "ui:flex-nowrap! ui:rounded-none ui:border-0 ui:border-b ui:border-border last:ui:border-b-0 ui:hover:bg-muted/50",
  variants: {
    align: { center: "ui:items-center", start: "ui:items-start" },
    density: { default: "", toolbar: "ui:gap-2 ui:py-1.5" }
  },
  defaultVariants: { align: "center", density: "default" }
});
function Resource_list_row($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      child,
      children,
      variant = "outline",
      size = "sm",
      align = "center",
      density = "default",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const layoutClass = cn(resourceListRowVariants({ align, density }), className);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (child) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<!---->`);
        {
          let child2 = function($$renderer4, { props }) {
            child2($$renderer4, {
              props: {
                ...props,
                "data-density": density,
                class: cn(props.class, layoutClass)
              }
            });
          };
          Item($$renderer3, spread_props([
            { variant, size, "data-density": density },
            restProps,
            { child: child2, $$slots: { child: true } }
          ]));
        }
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<!---->`);
        Item($$renderer3, spread_props([
          { variant, size, class: layoutClass, "data-density": density },
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
        $$renderer3.push(`<!---->`);
      }
      $$renderer3.push(`<!--]-->`);
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

export { Resource_list_row as R };
//# sourceMappingURL=resource-list-row-DOW12fib.js.map
