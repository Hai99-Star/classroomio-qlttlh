import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { B as Button } from './button-McsHA0hU.js';
import { u as useCodeOverflow } from './code-copy-button-UhlLz_Bi.js';
import { c as cn } from './index6-DijlZyMe.js';
import { a4 as box } from './create-id-D7gdjJzW.js';

function Code_overflow($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      collapsed = true,
      class: className,
      children,
      $$slots,
      $$events,
      ...props
    } = $$props;
    const state = useCodeOverflow({ collapsed: box.with(() => collapsed, (v) => collapsed = v) });
    $$renderer2.push(`<div${attributes({
      ...props,
      "data-code-overflow": true,
      "data-collapsed": collapsed,
      class: clsx(cn("ui:relative ui:overflow-y-hidden ui:data-[collapsed=true]:ui:max-h-[300px]", className))
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----> `);
    if (collapsed) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:from-background ui:absolute ui:bottom-0 ui:left-0 ui:z-10 ui:h-full ui:w-full ui:bg-linear-to-t ui:to-transparent"></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (collapsed) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        variant: "secondary",
        size: "sm",
        class: "ui:absolute ui:bottom-2 ui:left-1/2 ui:z-20 ui:w-fit ui:-translate-x-1/2",
        onclick: state.toggleCollapsed,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Expand`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { collapsed });
  });
}

export { Code_overflow as C };
//# sourceMappingURL=code-overflow-BKAxQLng.js.map
