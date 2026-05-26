import { c as bind_props, b as spread_props, g as attributes, j as clsx, n as escape_html } from './index2-Eg0dVEDW.js';
import { I as Input_group, a as Input_group_input } from './input-group-input-BlASI7k-.js';
import { I as Input_group_addon } from './input-group-button-BAHNvNdh.js';
import { c as cn } from './index6-DijlZyMe.js';

function Input_group_text($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<span${attributes({
      class: clsx(cn("ui:text-muted-foreground ui:flex ui:items-center ui:gap-2 ui:text-sm ui:[&_svg:not([class*='size-'])]:size-4 ui:[&_svg]:pointer-events-none", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></span>`);
    bind_props($$props, { ref });
  });
}
function Domain_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      placeholder = "example.com",
      value = "",
      class: className = "",
      disabled = false,
      prefix = "https://",
      suffix = ".com",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Input_group($$renderer3, {
        class: cn("ui:w-full", className),
        "data-slot": "domain-input",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Input_group_addon($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Input_group_text($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(prefix)}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Input_group_input($$renderer4, spread_props([
            restProps,
            {
              placeholder,
              disabled,
              class: "!ps-0.5",
              get value() {
                return value;
              },
              set value($$value) {
                value = $$value;
                $$settled = false;
              }
            }
          ]));
          $$renderer4.push(`<!----> <!---->`);
          Input_group_addon($$renderer4, {
            align: "inline-end",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Input_group_text($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(suffix)}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { value });
  });
}

export { Domain_input as D };
//# sourceMappingURL=domain-input-DQv9nNsd.js.map
