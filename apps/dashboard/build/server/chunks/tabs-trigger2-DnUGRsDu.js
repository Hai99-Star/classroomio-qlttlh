import { c as bind_props, b as spread_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { T as Tabs$1, a as Tabs_list$1, b as Tabs_trigger$1 } from './tabs-trigger-BTKUSTH_.js';

function Tabs($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      value = "",
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Tabs$1($$renderer3, spread_props([
        {
          "data-slot": "tabs",
          class: cn("ui:flex ui:flex-col ui:gap-2", className)
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
          get value() {
            return value;
          },
          set value($$value) {
            value = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
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
function Tabs_list($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Tabs_list$1($$renderer3, spread_props([
        {
          "data-slot": "tabs-list",
          class: cn("ui:bg-muted ui:text-muted-foreground ui:inline-flex ui:h-9 ui:w-fit ui:items-center ui:justify-center ui:rounded-lg ui:p-[3px]", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
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
function Tabs_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Tabs_trigger$1($$renderer3, spread_props([
        {
          "data-slot": "tabs-trigger",
          class: cn("ui:data-[state=active]:bg-background ui:dark:data-[state=active]:text-foreground ui:focus-visible:border-ring ui:focus-visible:ring-ring/50 ui:focus-visible:outline-ring ui:dark:data-[state=active]:border-input ui:dark:data-[state=active]:bg-input/30 ui:text-foreground ui:dark:text-muted-foreground ui:inline-flex ui:h-[calc(100%-1px)] ui:flex-1 ui:items-center ui:justify-center ui:gap-1.5 ui:whitespace-nowrap ui:rounded-md ui:border ui:border-transparent ui:px-2 ui:py-1 ui:text-sm ui:font-medium ui:transition-[color,box-shadow] ui:focus-visible:outline-1 ui:focus-visible:ring-[3px] ui:data-disabled:pointer-events-none ui:data-disabled:opacity-50 ui:data-[state=active]:shadow-sm ui:[&_svg:not([class*='size-'])]:size-4 ui:[&_svg]:pointer-events-none ui:[&_svg]:shrink-0 ui:cursor-pointer", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
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

export { Tabs as T, Tabs_list as a, Tabs_trigger as b };
//# sourceMappingURL=tabs-trigger2-DnUGRsDu.js.map
