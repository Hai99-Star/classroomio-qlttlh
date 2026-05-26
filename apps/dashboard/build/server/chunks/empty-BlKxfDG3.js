import { b as spread_props, n as escape_html } from './index2-Eg0dVEDW.js';
import { E as Empty$1, a as Empty_header, b as Empty_content, c as Empty_title, d as Empty_description } from './empty-content-qPjsGDm9.js';
import { E as Empty_media } from './empty-media-ClSn1CG9.js';
import { t as tv } from './index14-HMlD0kYH.js';
import { c as cn } from './index6-DijlZyMe.js';

function Simple_logo_nav($$renderer) {
  $$renderer.push(`<div class="ui:absolute ui:top-2 ui:border ui:border-dashed ui:px-4 ui:py-1 ui:rounded-md ui:flex ui:items-center ui:flex-col"><a href="https://classroomio.com" target="_blank" rel="noopener noreferrer" class="ui:flex ui:items-center ui:justify-center ui:gap-2"><img src="/logo-512.png" class="ui:w-7 ui:h-7" alt="ClassroomIO Logo"/> <span class="ui:text-foreground ui:text-md">ClassroomIO</span></a> <p class="ui:text-muted-foreground ui:text-sm">Finally, A Course Platform That’s <i>Beautiful</i> &amp; <i>Easy To Use</i></p></div>`);
}
function Empty($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const emptyVariants = tv({
      base: "ui:w-full ui:max-h-90",
      variants: {
        variant: {
          default: "",
          page: "ui:h-full ui:border ui:border-dashed ui:max-w-3xl ui:mx-auto"
        }
      }
    });
    let {
      title,
      description,
      icon: IconComponent,
      iconClass = "",
      class: className = "",
      children,
      variant = "default",
      layout = "block",
      showLogo = false,
      animatedBackground = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const mergedProps = {
      class: cn(emptyVariants({ variant }), className),
      "data-slot": "empty",
      "data-variant": variant,
      animatedBackground,
      ...restProps
    };
    function content($$renderer3) {
      $$renderer3.push(`<!---->`);
      Empty$1($$renderer3, spread_props([
        mergedProps,
        {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Empty_header($$renderer4, {
              class: "",
              children: ($$renderer5) => {
                if (IconComponent) {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<!---->`);
                  Empty_media($$renderer5, {
                    variant: "icon",
                    children: ($$renderer6) => {
                      const Icon = IconComponent;
                      $$renderer6.push(`<!---->`);
                      Icon($$renderer6, { class: iconClass });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (title) {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<!---->`);
                  Empty_title($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(title)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]--> `);
                if (description) {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<!---->`);
                  Empty_description($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(description)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (children) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<!---->`);
              Empty_content($$renderer4, {
                children: ($$renderer5) => {
                  children($$renderer5);
                  $$renderer5.push(`<!---->`);
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
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    if (layout === "full-page") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:relative ui:flex ui:h-screen ui:w-screen ui:flex-col ui:items-center ui:justify-center">`);
      if (showLogo) {
        $$renderer2.push("<!--[-->");
        Simple_logo_nav($$renderer2);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      content($$renderer2);
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      content($$renderer2);
    }
    $$renderer2.push(`<!--]-->`);
  });
}

export { Empty as E, Simple_logo_nav as S };
//# sourceMappingURL=empty-BlKxfDG3.js.map
