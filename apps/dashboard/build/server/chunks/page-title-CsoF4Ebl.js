import { g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Page_body($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "page-body",
      class: clsx(cn("ui:flex-1 ui:flex ui:gap-4 ui:flex-col ui:mb-4", className)),
      ...restProps
    })}>`);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { ref });
  });
}
function Page_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      isSticky = false,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "page-header",
      class: clsx(cn("ui:flex ui:my-4 ui:py-2 ui:flex-col", isSticky && "ui:sticky ui:top-11 ui:z-10 ui:bg-background", className)),
      ...restProps
    })}><div class="ui:flex ui:items-start ui:justify-between ui:gap-4 ui:flex-col ui:md:flex-row">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div></div>`);
    bind_props($$props, { ref });
  });
}
function Page_header_content($$renderer, $$props) {
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
      "data-slot": "page-header-content",
      class: clsx(cn("ui:flex ui:flex-col ui:gap-1", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Page_title($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<h1${attributes({
      "data-slot": "page-title",
      class: clsx(cn("ui:text-2xl ui:font-normal ui:tracking-tight", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></h1>`);
    bind_props($$props, { ref });
  });
}

export { Page_header as P, Page_header_content as a, Page_title as b, Page_body as c };
//# sourceMappingURL=page-title-CsoF4Ebl.js.map
