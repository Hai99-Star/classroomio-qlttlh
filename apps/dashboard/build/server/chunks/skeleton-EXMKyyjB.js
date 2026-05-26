import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Skeleton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "skeleton",
      class: clsx(cn("ui:bg-accent ui:animate-pulse ui:rounded-md", className)),
      ...restProps
    })}></div>`);
    bind_props($$props, { ref });
  });
}

export { Skeleton as S };
//# sourceMappingURL=skeleton-EXMKyyjB.js.map
