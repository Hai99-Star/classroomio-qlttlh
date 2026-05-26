import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { S as Separator } from './separator-C8wJJtqC.js';
import { c as cn } from './index6-DijlZyMe.js';

function Field_separator($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const hasContent = !!children;
    $$renderer2.push(`<div${attributes({
      "data-slot": "field-separator",
      "data-content": hasContent,
      class: clsx(cn("ui:relative ui:my-2 ui:h-5 ui:text-sm ui:group-data-[variant=outline]/field-group:-mb-2", className)),
      ...restProps
    })}>`);
    Separator($$renderer2, { class: "ui:absolute ui:inset-0 ui:top-1/2" });
    $$renderer2.push(`<!----> `);
    if (children) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="ui:bg-background ui:text-muted-foreground ui:relative ui:mx-auto ui:block ui:w-fit ui:px-2" data-slot="field-separator-content">`);
      children($$renderer2);
      $$renderer2.push(`<!----></span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { ref });
  });
}

export { Field_separator as F };
//# sourceMappingURL=field-separator-CCwxfqwE.js.map
