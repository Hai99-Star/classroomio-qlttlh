import { g as attributes, j as clsx, d as attr, n as escape_html, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { S as Separator } from './separator-C8wJJtqC.js';
import { I as Item_content } from './item-content--fxXSxOv.js';
import { I as Item_description } from './item-description-BY5f-Oua.js';
import { I as Item_header } from './item-header-CnzfEv7R.js';
import { I as Item, a as Item_media } from './item-CUOTGwjL.js';
import { I as Item_title } from './item-title-BLGVIel8.js';

function Item_sub_description($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<span${attributes({
      "data-slot": "item-sub-description",
      class: clsx(cn("ui:text-muted-foreground ui:line-clamp-1 ui:text-balance ui:text-xs ui:font-normal ui:leading-normal", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></span>`);
    bind_props($$props, { ref });
  });
}
const DEFAULT_COURSE_BANNER_IMAGE = "/images/classroomio-course-img-template.jpg";
function Course_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      href,
      title,
      description,
      bannerImage,
      bannerAlt = "Course banner image",
      typeBadge,
      visibilityBadge,
      class: className = "",
      media,
      overlay,
      tags,
      footer
    } = $$props;
    const resolvedBannerImage = bannerImage?.trim() ? bannerImage : DEFAULT_COURSE_BANNER_IMAGE;
    $$renderer2.push(`<!---->`);
    {
      let child = function($$renderer3, { props }) {
        if (href) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<a${attributes({ href, ...props, class: clsx(cn("ui:block", props.class)) })}>`);
          overlay?.($$renderer3);
          $$renderer3.push(`<!----> <!---->`);
          Item_header($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Item_media($$renderer4, {
                variant: "image",
                class: "ui:relative ui:h-50! ui:w-full!",
                children: ($$renderer5) => {
                  if (media) {
                    $$renderer5.push("<!--[-->");
                    media($$renderer5);
                    $$renderer5.push(`<!---->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push(`<img${attr("src", resolvedBannerImage)}${attr("alt", bannerAlt)} class="ui:w-full ui:h-full ui:rounded-sm ui:object-cover"/>`);
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (typeBadge) {
                    $$renderer5.push("<!--[-->");
                    const Icon = typeBadge.icon;
                    Badge($$renderer5, {
                      class: "ui:absolute ui:bottom-2 ui:left-2 ui:z-10 ui:flex ui:items-center ui:rounded-md! ui:capitalize",
                      variant: "secondary",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->`);
                        Icon($$renderer6, { class: typeBadge.iconClass });
                        $$renderer6.push(`<!----> ${escape_html(typeBadge.label)}`);
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (visibilityBadge) {
                    $$renderer5.push("<!--[-->");
                    const VIcon = visibilityBadge.icon;
                    Badge($$renderer5, {
                      class: cn("ui:absolute ui:bottom-2 ui:z-10 ui:flex ui:items-center ui:rounded-md! ui:gap-1 ui:capitalize", typeBadge ? "ui:right-2 ui:left-auto" : "ui:left-2"),
                      variant: "secondary",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->`);
                        VIcon($$renderer6, { class: visibilityBadge.iconClass });
                        $$renderer6.push(`<!----> ${escape_html(visibilityBadge.label)}`);
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <!---->`);
          Item_content($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Item_title($$renderer4, {
                class: "ui:flex ui:w-full ui:min-h-14 ui:items-center ui:text-base!",
                children: ($$renderer5) => {
                  $$renderer5.push(`<span class="ui:line-clamp-2">${escape_html(title)}</span>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <!---->`);
              Item_description($$renderer4, {
                class: "ui:min-h-[63px]",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(description)}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              if (tags) {
                $$renderer4.push("<!--[-->");
                tags($$renderer4);
                $$renderer4.push(`<!---->`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]--> `);
              if (footer) {
                $$renderer4.push("<!--[-->");
                Separator($$renderer4, { class: "ui:my-3" });
                $$renderer4.push(`<!----> `);
                footer($$renderer4);
                $$renderer4.push(`<!---->`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></a>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div${attributes({ ...props, class: clsx(cn("ui:block", props.class)) })}>`);
          overlay?.($$renderer3);
          $$renderer3.push(`<!----> <!---->`);
          Item_header($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Item_media($$renderer4, {
                variant: "image",
                class: "ui:relative ui:h-50! ui:w-full!",
                children: ($$renderer5) => {
                  if (media) {
                    $$renderer5.push("<!--[-->");
                    media($$renderer5);
                    $$renderer5.push(`<!---->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push(`<img${attr("src", resolvedBannerImage)}${attr("alt", bannerAlt)} class="ui:w-full ui:h-full ui:rounded-sm ui:object-cover"/>`);
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (typeBadge) {
                    $$renderer5.push("<!--[-->");
                    const Icon = typeBadge.icon;
                    Badge($$renderer5, {
                      class: "ui:absolute ui:bottom-2 ui:left-2 ui:z-10 ui:flex ui:items-center ui:rounded-md! ui:capitalize",
                      variant: "secondary",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->`);
                        Icon($$renderer6, { class: typeBadge.iconClass });
                        $$renderer6.push(`<!----> ${escape_html(typeBadge.label)}`);
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (visibilityBadge) {
                    $$renderer5.push("<!--[-->");
                    const VIcon = visibilityBadge.icon;
                    Badge($$renderer5, {
                      class: cn("ui:absolute ui:bottom-2 ui:z-10 ui:flex ui:items-center ui:rounded-md! ui:gap-1 ui:capitalize", typeBadge ? "ui:right-2 ui:left-auto" : "ui:left-2"),
                      variant: "secondary",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->`);
                        VIcon($$renderer6, { class: visibilityBadge.iconClass });
                        $$renderer6.push(`<!----> ${escape_html(visibilityBadge.label)}`);
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <!---->`);
          Item_content($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Item_title($$renderer4, {
                class: "ui:flex ui:w-full ui:min-h-14 ui:items-center ui:text-base!",
                children: ($$renderer5) => {
                  $$renderer5.push(`<span class="ui:line-clamp-2">${escape_html(title)}</span>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <!---->`);
              Item_description($$renderer4, {
                class: "ui:min-h-[63px]",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(description)}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              if (tags) {
                $$renderer4.push("<!--[-->");
                tags($$renderer4);
                $$renderer4.push(`<!---->`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]--> `);
              if (footer) {
                $$renderer4.push("<!--[-->");
                Separator($$renderer4, { class: "ui:my-3" });
                $$renderer4.push(`<!----> `);
                footer($$renderer4);
                $$renderer4.push(`<!---->`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      };
      Item($$renderer2, {
        variant: "outline",
        class: cn("ui:group ui:relative ui:max-w-[320px] ui:p-3!", className),
        child,
        $$slots: { child: true }
      });
    }
    $$renderer2.push(`<!---->`);
  });
}

export { Course_card as C, DEFAULT_COURSE_BANNER_IMAGE as D, Item_sub_description as I };
//# sourceMappingURL=course-card-DsfvWmvV.js.map
