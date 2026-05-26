import { g as attributes, j as clsx, n as escape_html, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Textarea($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      value = void 0,
      class: className,
      "data-slot": dataSlot = "textarea",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<textarea${attributes({
      "data-slot": dataSlot,
      class: clsx(cn("ui:border-input ui:placeholder:text-muted-foreground ui:focus-visible:border-ring ui:focus-visible:ring-ring/50 ui:aria-invalid:ring-destructive/20 ui:dark:aria-invalid:ring-destructive/40 ui:aria-invalid:border-destructive ui:dark:bg-input/30 ui:field-sizing-content ui:flex ui:min-h-16 ui:w-full ui:rounded-md ui:border ui:bg-transparent ui:px-3 ui:py-2 ui:text-base ui:outline-none ui:transition-[color,box-shadow] ui:focus-visible:ring-[3px] ui:disabled:cursor-not-allowed ui:disabled:opacity-50 ui:md:text-sm", className)),
      ...restProps
    })}>`);
    const $$body = escape_html(value);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea>`);
    bind_props($$props, { ref, value });
  });
}

export { Textarea as T };
//# sourceMappingURL=textarea-CfVjMEtO.js.map
