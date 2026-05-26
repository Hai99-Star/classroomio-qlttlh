import { b as spread_props, n as escape_html } from './index2-Eg0dVEDW.js';
import { B as Button } from './button-McsHA0hU.js';
import { P as Provider, R as Root, T as Tooltip_trigger, a as Tooltip_content } from './index13-C4Mtu7Q0.js';

function Icon_button($$renderer, $$props) {
  let {
    tooltip,
    tooltipSide = "top",
    tooltipClass = "",
    variant = "secondary",
    size = "icon",
    children,
    $$slots,
    $$events,
    ...buttonProps
  } = $$props;
  if (tooltip) {
    $$renderer.push("<!--[-->");
    Provider($$renderer, {
      children: ($$renderer2) => {
        Root($$renderer2, {
          children: ($$renderer3) => {
            Tooltip_trigger($$renderer3, {
              class: tooltipClass,
              children: ($$renderer4) => {
                Button($$renderer4, spread_props([
                  { variant, size },
                  buttonProps,
                  {
                    children: ($$renderer5) => {
                      children?.($$renderer5);
                      $$renderer5.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  }
                ]));
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> `);
            Tooltip_content($$renderer3, {
              side: tooltipSide,
              children: ($$renderer4) => {
                $$renderer4.push(`<p>${escape_html(tooltip)}</p>`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      }
    });
  } else {
    $$renderer.push("<!--[!-->");
    Button($$renderer, spread_props([
      { variant, size },
      buttonProps,
      {
        children: ($$renderer2) => {
          children?.($$renderer2);
          $$renderer2.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  }
  $$renderer.push(`<!--]-->`);
}

export { Icon_button as I };
//# sourceMappingURL=icon-button-De7MyFOi.js.map
