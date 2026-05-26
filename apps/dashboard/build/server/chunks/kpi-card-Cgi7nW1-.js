import { n as escape_html, l as attr_class, j as clsx, d as attr } from './index2-Eg0dVEDW.js';
import { C as Card, a as Card_content, b as Card_title, c as Card_description } from './card-title-BAC38wyM.js';
import { c as cn } from './index6-DijlZyMe.js';
import { C as Card_header } from './card-header-CpBV_NsL.js';
import { S as Spinner } from './button-McsHA0hU.js';

function Analytics_panel_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { title, description, class: className, children } = $$props;
    $$renderer2.push(`<!---->`);
    Card($$renderer2, {
      class: cn(className),
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Card_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(title)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (description) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<!---->`);
              Card_description($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(description)}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            children?.($$renderer4);
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
  });
}
function Kpi_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      title,
      value,
      description,
      icon: Icon,
      accent = "primary",
      sparkline,
      loading = false,
      class: className
    } = $$props;
    const accentClass = {
      primary: "ui:bg-primary/10 ui:text-primary",
      success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      danger: "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    };
    const sparklinePath = (() => {
      if (!sparkline || sparkline.length < 2) return "";
      const max = Math.max(...sparkline, 1);
      const min = Math.min(...sparkline, 0);
      const span = max - min || 1;
      const width = 100;
      const height = 30;
      return sparkline.map((value2, index) => {
        const x = index / (sparkline.length - 1) * width;
        const y = height - (value2 - min) / span * height;
        return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
      }).join(" ");
    })();
    $$renderer2.push(`<!---->`);
    Card($$renderer2, {
      class: cn("ui:bg-card relative overflow-hidden", className),
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Card_header($$renderer3, {
          class: "pb-2",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex items-start justify-between gap-2"><!---->`);
            Card_title($$renderer4, {
              class: "ui:text-muted-foreground text-xs font-medium tracking-wide uppercase",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(title)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (Icon) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div${attr_class(clsx(cn("flex h-9 w-9 items-center justify-center rounded-full", accentClass[accent])))}><!---->`);
              Icon($$renderer4, { class: "h-4 w-4" });
              $$renderer4.push(`<!----></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Card_content($$renderer3, {
          class: "pt-0",
          children: ($$renderer4) => {
            if (loading) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="flex h-9 items-center">`);
              Spinner($$renderer4, { class: "ui:text-muted-foreground size-5" });
              $$renderer4.push(`<!----></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<p class="ui:text-foreground text-3xl font-semibold tabular-nums">${escape_html(value)}</p>`);
            }
            $$renderer4.push(`<!--]--> `);
            if (description) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<p class="ui:text-muted-foreground mt-1 text-xs">${escape_html(description)}</p>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> `);
            if (sparklinePath && !loading) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<svg viewBox="0 0 100 30" class="mt-3 h-8 w-full" preserveAspectRatio="none" aria-hidden="true"><path${attr("d", sparklinePath)} fill="none" stroke="currentColor" stroke-width="1.5" class="ui:text-primary"></path></svg>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
  });
}

export { Analytics_panel_card as A, Kpi_card as K };
//# sourceMappingURL=kpi-card-Cgi7nW1-.js.map
