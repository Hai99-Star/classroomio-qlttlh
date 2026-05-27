import { c as bind_props, b as spread_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { D as Dialog_description$1 } from './dialog-description2-7SjLAH6Y.js';

function Dialog_description($$renderer, $$props) {
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
      Dialog_description$1($$renderer3, spread_props([
        {
          "data-slot": "dialog-description",
          class: cn("ui:text-muted-foreground ui:text-sm", className),
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

export { Dialog_description as D };
//# sourceMappingURL=dialog-description-Ue7RvU-C.js.map
