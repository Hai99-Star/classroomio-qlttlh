import { g as attributes, j as clsx, c as bind_props, b as spread_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { I as Input } from './input-CkarY5WD.js';

function Input_group($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...props
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "input-group",
      role: "group",
      class: clsx(cn(
        "ui:group/input-group ui:border-input ui:dark:bg-input/30 ui:shadow-xs ui:relative ui:flex ui:w-full ui:items-center ui:rounded-md ui:border ui:outline-none ui:transition-[color,box-shadow]",
        "ui:h-9 ui:has-[>textarea]:h-auto",
        // Variants based on alignment.
        "ui:has-[>[data-align=inline-start]]:[&>input]:ps-2",
        "ui:has-[>[data-align=inline-end]]:[&>input]:pe-2",
        "ui:has-[>[data-align=block-start]]:h-auto ui:has-[>[data-align=block-start]]:flex-col ui:has-[>[data-align=block-start]]:[&>input]:pb-3",
        "ui:has-[>[data-align=block-end]]:h-auto ui:has-[>[data-align=block-end]]:flex-col ui:has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "ui:has-[[data-slot=input-group-control]:focus-visible]:border-ring ui:has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 ui:has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        // Error state.
        "ui:has-[[data-slot][aria-invalid=true]]:ring-destructive/20 ui:has-[[data-slot][aria-invalid=true]]:border-destructive ui:dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      )),
      ...props
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Input_group_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      value = void 0,
      class: className,
      $$slots,
      $$events,
      ...props
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Input($$renderer3, spread_props([
        {
          "data-slot": "input-group-control",
          class: cn("ui:flex-1 ui:rounded-none ui:border-0 ui:bg-transparent ui:shadow-none ui:focus-visible:ring-0 ui:dark:bg-transparent", className)
        },
        props,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          get value() {
            return value;
          },
          set value($$value) {
            value = $$value;
            $$settled = false;
          }
        }
      ]));
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref, value });
  });
}

export { Input_group as I, Input_group_input as a };
//# sourceMappingURL=input-group-input-BlASI7k-.js.map
