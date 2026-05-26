import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      value = void 0,
      type,
      files = void 0,
      class: className,
      "data-slot": dataSlot = "input",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    if (type === "file") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<input${attributes(
        {
          "data-slot": dataSlot,
          class: clsx(cn("ui:selection:bg-primary ui:dark:bg-input/30 ui:selection:text-primary-foreground ui:border-input ui:ring-offset-background ui:placeholder:text-muted-foreground ui:shadow-xs ui:flex ui:h-9 ui:w-full ui:min-w-0 ui:rounded-md ui:border ui:bg-transparent ui:px-3 ui:pt-1.5 ui:text-sm ui:font-medium ui:outline-none ui:transition-[color,box-shadow] ui:disabled:cursor-not-allowed ui:disabled:opacity-50", "ui:focus-visible:border-ring ui:focus-visible:ring-ring/50 ui:focus-visible:ring-[3px]", "ui:aria-invalid:ring-destructive/20 ui:dark:aria-invalid:ring-destructive/40 ui:aria-invalid:border-destructive", className)),
          type: "file",
          ...restProps
        },
        void 0,
        void 0,
        void 0,
        4
      )}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<input${attributes(
        {
          "data-slot": dataSlot,
          class: clsx(cn("ui:border-input ui:bg-background ui:selection:bg-primary ui:dark:bg-input/30 ui:selection:text-primary-foreground ui:ring-offset-background ui:placeholder:text-muted-foreground ui:shadow-xs ui:flex ui:h-9 ui:w-full ui:min-w-0 ui:rounded-md ui:border ui:px-3 ui:py-1 ui:text-base ui:outline-none ui:transition-[color,box-shadow] ui:disabled:cursor-not-allowed ui:disabled:opacity-50 ui:md:text-sm", "ui:focus-visible:border-ring ui:focus-visible:ring-ring/50 ui:focus-visible:ring-[3px]", "ui:aria-invalid:ring-destructive/20 ui:dark:aria-invalid:ring-destructive/40 ui:aria-invalid:border-destructive", className)),
          type,
          value,
          ...restProps
        },
        void 0,
        void 0,
        void 0,
        4
      )}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref, value, files });
  });
}

export { Input as I };
//# sourceMappingURL=input-CkarY5WD.js.map
