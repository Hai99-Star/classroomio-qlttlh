import { g as attributes, j as clsx, c as bind_props, b as spread_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { D as Dialog_title$1 } from './dialog-title-DHgMN8vm.js';

function Dialog_title($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      child,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Dialog_title$1($$renderer3, spread_props([
        {
          "data-slot": "dialog-title",
          class: cn("ui:text-lg ui:font-semibold ui:leading-none", className),
          child
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
function Dialog_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "dialog-header",
      class: clsx(cn("ui:flex ui:flex-col ui:gap-2 ui:text-left", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}

export { Dialog_header as D, Dialog_title as a };
//# sourceMappingURL=dialog-header-D1aNdwc5.js.map
