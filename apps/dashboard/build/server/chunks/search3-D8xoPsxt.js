import { c as bind_props, b as spread_props } from './index2-Eg0dVEDW.js';
import { I as Input_group, a as Input_group_input } from './input-group-input-BlASI7k-.js';
import { I as Input_group_addon, a as Input_group_button } from './input-group-button-BAHNvNdh.js';
import { c as cn } from './index6-DijlZyMe.js';
import { X } from './x2-B8ExpX8J.js';
import { S as Search$1 } from './search-DbgrMZ24.js';

function Search($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      placeholder = "",
      value = "",
      class: className = "",
      onValueChange,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const mergedProps = {
      class: cn("ui:w-fit ui:max-w-[200px]", className),
      "data-slot": "search",
      ...restProps
    };
    function handleInput(event) {
      onValueChange?.(event.currentTarget.value);
    }
    function clearValue() {
      value = "";
      onValueChange?.("");
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Input_group($$renderer3, spread_props([
        mergedProps,
        {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Input_group_input($$renderer4, {
              placeholder,
              oninput: handleInput,
              get value() {
                return value;
              },
              set value($$value) {
                value = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----> `);
            if (value) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<!---->`);
              Input_group_addon($$renderer4, {
                align: "inline-end",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Input_group_button($$renderer5, {
                    "aria-label": "Clear search",
                    onclick: clearValue,
                    children: ($$renderer6) => {
                      X($$renderer6, {});
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> <!---->`);
            Input_group_addon($$renderer4, {
              children: ($$renderer5) => {
                Search$1($$renderer5, {});
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
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
    bind_props($$props, { value });
  });
}

export { Search as S };
//# sourceMappingURL=search3-D8xoPsxt.js.map
