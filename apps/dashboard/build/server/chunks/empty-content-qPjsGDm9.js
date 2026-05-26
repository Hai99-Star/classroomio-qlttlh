import { g as attributes, j as clsx, l as attr_class, c as bind_props } from './index2-Eg0dVEDW.js';
import { D as Dot_field } from './dot-field-B9cQMeU_.js';
import { c as cn } from './index6-DijlZyMe.js';

function Empty($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      animatedBackground = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const innerClass = "ui:relative ui:z-10 ui:flex ui:min-w-0 ui:flex-1 ui:flex-col ui:items-center ui:justify-center ui:gap-6 ui:text-balance ui:p-6 ui:text-center ui:md:p-12";
    if (animatedBackground) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attributes({
        "data-slot": "empty",
        class: clsx(cn("ui:relative ui:overflow-hidden ui:flex ui:min-w-0 ui:flex-1 ui:flex-col ui:rounded-lg ui:border ui:border-dashed ui:border-border ui:text-balance", className)),
        ...restProps
      })}>`);
      Dot_field($$renderer2, {
        dotRadius: 1.5,
        dotSpacing: 14,
        cursorRadius: 420,
        bulgeOnly: true,
        bulgeStrength: 56,
        glowRadius: 140,
        sparkle: false,
        waveAmplitude: 0,
        class: "ui:pointer-events-none ui:absolute ui:inset-0 ui:z-0 ui:h-full ui:w-full"
      });
      $$renderer2.push(`<!----> <div${attr_class(clsx(innerClass))}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({
        "data-slot": "empty",
        class: clsx(cn("ui:flex ui:min-w-0 ui:flex-1 ui:flex-col ui:items-center ui:justify-center ui:gap-6 ui:text-balance ui:rounded-lg ui:border-dashed ui:p-6 ui:text-center ui:md:p-12", className)),
        ...restProps
      })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Empty_header($$renderer, $$props) {
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
      "data-slot": "empty-header",
      class: clsx(cn("ui:flex ui:max-w-sm ui:flex-col ui:items-center ui:gap-2 ui:text-center", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Empty_title($$renderer, $$props) {
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
      "data-slot": "empty-title",
      class: clsx(cn("ui:text-lg ui:font-medium ui:tracking-tight", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Empty_description($$renderer, $$props) {
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
      "data-slot": "empty-description",
      class: clsx(cn("ui:text-muted-foreground ui:[&>a:hover]:text-primary ui:text-sm/relaxed ui:[&>a]:underline ui:[&>a]:underline-offset-4", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Empty_content($$renderer, $$props) {
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
      "data-slot": "empty-content",
      class: clsx(cn("ui:flex ui:w-full ui:min-w-0 ui:max-w-sm ui:flex-col ui:items-center ui:gap-4 ui:text-balance ui:text-sm", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}

export { Empty as E, Empty_header as a, Empty_content as b, Empty_title as c, Empty_description as d };
//# sourceMappingURL=empty-content-qPjsGDm9.js.map
