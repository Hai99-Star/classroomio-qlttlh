import { c as bind_props, g as attributes, j as clsx, n as escape_html, f as ensure_array_like, b as spread_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { L as Label } from './label-CXfFBnqp.js';

function Field_error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      errors,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const hasContent = (() => {
      if (children) return true;
      if (!errors) return false;
      if (errors.length === 1 && !errors[0]?.message) {
        return false;
      }
      return true;
    })();
    const isMultipleErrors = errors && errors.length > 1;
    const singleErrorMessage = errors && errors.length === 1 && errors[0]?.message;
    if (hasContent) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attributes({
        role: "alert",
        "data-slot": "field-error",
        class: clsx(cn("ui:text-destructive ui:text-sm ui:font-normal", className)),
        ...restProps
      })}>`);
      if (children) {
        $$renderer2.push("<!--[-->");
        children($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (singleErrorMessage) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${escape_html(singleErrorMessage)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (isMultipleErrors) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<ul class="ui:ms-4 ui:flex ui:list-disc ui:flex-col ui:gap-1"><!--[-->`);
            const each_array = ensure_array_like(errors ?? []);
            for (let index = 0, $$length = each_array.length; index < $$length; index++) {
              let error = each_array[index];
              if (error?.message) {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<li>${escape_html(error.message)}</li>`);
              } else {
                $$renderer2.push("<!--[!-->");
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]--></ul>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Field_label($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Label($$renderer3, spread_props([
        {
          "data-slot": "field-label",
          class: cn("ui:group/field-label ui:peer/field-label ui:flex ui:w-fit ui:gap-2 ui:leading-snug ui:group-data-[disabled=true]/field:opacity-50", "ui:has-[>[data-slot=field]]:w-full ui:has-[>[data-slot=field]]:flex-col ui:has-[>[data-slot=field]]:rounded-md ui:has-[>[data-slot=field]]:border ui:*:data-[slot=field]:p-4", "ui:has-data-[state=checked]:bg-primary/5 ui:has-data-[state=checked]:border-primary ui:dark:has-data-[state=checked]:bg-primary/10", "ui:has-[>[data-slot=field]]:hover:bg-primary/5 ui:has-[>[data-slot=field]]:cursor-pointer ui:[&[for]]:cursor-pointer ui:transition-colors ui:transition-duration-200", className)
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

export { Field_label as F, Field_error as a };
//# sourceMappingURL=field-label-BEb0I1_z.js.map
