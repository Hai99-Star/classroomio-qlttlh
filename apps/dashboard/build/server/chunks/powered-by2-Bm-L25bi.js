import { l as attr_class, d as attr, j as clsx, n as escape_html } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Powered_by($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      courseSlug = null,
      orgSlug = null,
      label = "Powered by",
      brand = "ClassroomIO",
      compact = false,
      align = "center",
      utmSource = "public-course",
      class: className
    } = $$props;
    const href = (() => {
      const url = new URL("https://classroomio.com");
      url.searchParams.set("utm_source", utmSource);
      url.searchParams.set("utm_medium", "powered-by");
      if (orgSlug) url.searchParams.set("utm_campaign", orgSlug);
      if (courseSlug) url.searchParams.set("utm_content", courseSlug);
      return url.toString();
    })();
    const rowAlignClass = align === "start" ? "ui:justify-start" : "ui:justify-center";
    if (compact) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attr_class(clsx(cn("ui:flex ui:items-center ui:gap-1 ui:w-full", rowAlignClass, className)))}><a${attr("href", href)} target="_blank" rel="noopener noreferrer" class="ui:leading-none ui:opacity-70 ui:hover:opacity-100"${attr("aria-label", `${label} ${brand}`)}><img src="/logo-192.png" class="ui:size-6" alt=""/></a></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attr_class(clsx(cn("ui:px-3 ui:flex ui:items-center ui:gap-1 ui:text-xs ui:text-muted-foreground ui:w-full", rowAlignClass, className)))}><img src="/logo-192.png" class="ui:size-6" alt="ClassroomIO"/> ${escape_html(label)} <a${attr("href", href)} target="_blank" rel="noopener noreferrer" class="ui:font-medium ui:text-muted-foreground ui:underline-offset-2 ui:hover:text-foreground ui:underline">${escape_html(brand)}</a></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}

export { Powered_by as P };
//# sourceMappingURL=powered-by2-Bm-L25bi.js.map
