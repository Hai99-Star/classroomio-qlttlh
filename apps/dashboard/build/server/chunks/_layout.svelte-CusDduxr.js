import { a as store_get, u as unsubscribe_stores, l as attr_class, d as attr, j as clsx, n as escape_html, f as ensure_array_like, c as bind_props, g as attributes, b as spread_props } from './index2-Eg0dVEDW.js';
import { g as goto } from './client2-CqohmrW2.js';
import { p as page } from './index5-nlVlCL1t.js';
import './picker-data-NeeeTF6U.js';
import { c as cn } from './index6-DijlZyMe.js';
import './index8-D5Z_9ShZ.js';
import './badge-DTmoBcZS.js';
import { B as Button, b as buttonVariants, I as Icon } from './button-McsHA0hU.js';
import './button-group-B7_AGlHf.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './states.svelte-BI9DWQmF.js';
import './empty-media-ClSn1CG9.js';
import './field-BxJz8KV9.js';
import './input-group-button-BAHNvNdh.js';
import './item-CUOTGwjL.js';
import './toggle-group-item-BLEzxLjD.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import { L as List } from './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './resource-list-row-DOW12fib.js';
import './question-type-capabilities-B1VkdJbc.js';
import { C as Chevron_left } from './chevron-left-DF8YHdtj.js';
import { C as Chevron_right } from './chevron-right2-DJRdFTZC.js';
import { A as Arrow_left } from './arrow-left2-Dl6-kuJA.js';
import { A as Arrow_right } from './arrow-right-BFYbcsyD.js';
import { D as Drawer, e as Drawer_portal, f as Drawer_overlay, a as Drawer_content, b as Drawer_header, c as Drawer_title } from './drawer-title-eL5qtFnQ.js';
import { P as Provider, R as Root$1, T as Tooltip_trigger, a as Tooltip_content } from './index13-ubjsmMp7.js';
import { P as Powered_by } from './powered-by2-Bm-L25bi.js';
import { N as Number_badge } from './number-badge-CWSCFK8J.js';
import { m as mergeProps } from './create-id-D7gdjJzW.js';
import { a as setMode, r as resetMode } from './mode-NtjMtzBS.js';
import { R as Root, D as Dropdown_menu_trigger, a as Dropdown_menu_content, b as Dropdown_menu_item } from './index12-DrKMqqv6.js';
import { t as toPublicSidebarSections } from './public-course-mappers-C8Cnu2N9.js';
import { t } from './translations-BxDrjLWK.js';
import './utils2-DPSDgWhA.js';
import './exports-DiyTWREe.js';
import './index-AIbsv2Pd.js';
import './event-ByDKS2H7.js';
import './client3-CP3T_KrU.js';
import './index14-HMlD0kYH.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-7tRy2FJ1.js';
import './scroll-lock-CqTUXsNd.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './clone-u51BKwOQ.js';
import './dialog-BqIvyJui.js';
import './dialog-title-DHgMN8vm.js';
import './dialog-description2-T5WKf1k9.js';
import './popper-layer-force-mount-H2EBI_WO.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './lock2-DSH1gNe6.js';
import './floating-layer-anchor-CBXkOzVQ.js';
import './index4-CY3O4yvX.js';
import './shared-server-DaWdgxVh.js';
import './org-t71AQfHV.js';
import 'lodash/merge.js';
import './domains-D9J1UytB.js';
import '@sveltekit-i18n/parser-icu';

const Portal = Drawer_portal;
function Bottom_nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      positionLabel,
      sublineLabel,
      hasPrev,
      hasNext,
      openSheetLabel = "Open course outline",
      prevLabel = "Previous lesson",
      nextLabel = "Next lesson",
      class: className
    } = $$props;
    $$renderer2.push(`<nav${attr_class(clsx(cn("ui:fixed ui:inset-x-0 ui:bottom-0 ui:z-40 ui:flex ui:items-stretch ui:gap-1 ui:border-t ui:border-border ui:bg-background/95 ui:p-1.5 ui:backdrop-blur ui:lg:hidden", className)))} aria-label="Lesson navigation"><button type="button" class="ui:inline-flex ui:items-center ui:justify-center ui:rounded-md ui:px-3 ui:py-3 ui:text-foreground ui:transition-colors ui:hover:bg-muted ui:disabled:opacity-30"${attr("aria-label", prevLabel)}${attr("disabled", !hasPrev, true)}>`);
    Chevron_left($$renderer2, { class: "ui:size-5" });
    $$renderer2.push(`<!----></button> <button type="button" class="ui:flex ui:flex-1 ui:items-center ui:justify-center ui:gap-2 ui:rounded-md ui:px-3 ui:py-2 ui:text-center ui:transition-colors ui:hover:bg-muted"${attr("aria-label", openSheetLabel)}>`);
    List($$renderer2, { class: "ui:size-4 ui:text-primary" });
    $$renderer2.push(`<!----> <span class="ui:flex ui:min-w-0 ui:flex-col ui:items-start ui:text-left ui:leading-tight"><span class="ui:text-[0.7rem] ui:font-medium ui:uppercase ui:tracking-wide ui:text-muted-foreground">${escape_html(positionLabel)}</span> `);
    if (sublineLabel) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="ui:max-w-[55vw] ui:truncate ui:text-sm ui:font-medium ui:text-foreground">${escape_html(sublineLabel)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></span></button> <button type="button" class="ui:inline-flex ui:items-center ui:justify-center ui:rounded-md ui:px-3 ui:py-3 ui:text-foreground ui:transition-colors ui:hover:bg-muted ui:disabled:opacity-30"${attr("aria-label", nextLabel)}${attr("disabled", !hasNext, true)}>`);
    Chevron_right($$renderer2, { class: "ui:size-5" });
    $$renderer2.push(`<!----></button></nav>`);
  });
}
function prevBody($$renderer, item, label) {
  Arrow_left($$renderer, {
    class: "ui:size-4 ui:text-muted-foreground ui:group-hover:text-primary"
  });
  $$renderer.push(`<!----> <div class="ui:flex ui:min-w-0 ui:flex-col"><span class="ui:text-xs ui:font-medium ui:uppercase ui:tracking-wide ui:text-muted-foreground">${escape_html(label)}</span> <span class="ui:truncate ui:text-sm ui:font-medium ui:text-foreground ui:group-hover:text-primary">${escape_html(item.title)}</span></div>`);
}
function nextBody($$renderer, item, label) {
  $$renderer.push(`<div class="ui:flex ui:min-w-0 ui:flex-col ui:items-end"><span class="ui:text-xs ui:font-medium ui:uppercase ui:tracking-wide ui:text-muted-foreground">${escape_html(label)}</span> <span class="ui:truncate ui:text-sm ui:font-medium ui:text-foreground ui:group-hover:text-primary">${escape_html(item.title)}</span></div> `);
  Arrow_right($$renderer, {
    class: "ui:size-4 ui:text-muted-foreground ui:group-hover:text-primary"
  });
  $$renderer.push(`<!---->`);
}
function Footer_nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      prev = null,
      next = null,
      hrefFor,
      prevLabel = "Previous",
      nextLabel = "Next",
      class: className
    } = $$props;
    const cardClass = "ui:group ui:flex ui:flex-1 ui:items-center ui:gap-3 ui:rounded-lg ui:border ui:border-border ui:bg-background ui:px-4 ui:py-3 ui:text-left ui:transition-colors ui:hover:border-primary/40 ui:hover:bg-muted/50";
    const prevHref = prev ? hrefFor?.(prev) : void 0;
    const nextHref = next ? hrefFor?.(next) : void 0;
    if (prev || next) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<nav${attr_class(clsx(cn("ui:mt-12 ui:flex ui:flex-col ui:gap-3 ui:border-t ui:border-border ui:pt-6 ui:sm:flex-row", className)))} aria-label="Lesson navigation">`);
      if (prev) {
        $$renderer2.push("<!--[-->");
        if (prevHref) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<a${attr("href", prevHref)}${attr_class(clsx(cardClass))}>`);
          prevBody($$renderer2, prev, prevLabel);
          $$renderer2.push(`<!----></a>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<button type="button"${attr_class(clsx(cardClass))}>`);
          prevBody($$renderer2, prev, prevLabel);
          $$renderer2.push(`<!----></button>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="ui:flex-1"></div>`);
      }
      $$renderer2.push(`<!--]--> `);
      if (next) {
        $$renderer2.push("<!--[-->");
        if (nextHref) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<a${attr("href", nextHref)}${attr_class(clsx(cn(cardClass, "ui:justify-end ui:text-right")))}>`);
          nextBody($$renderer2, next, nextLabel);
          $$renderer2.push(`<!----></a>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<button type="button"${attr_class(clsx(cn(cardClass, "ui:justify-end ui:text-right")))}>`);
          nextBody($$renderer2, next, nextLabel);
          $$renderer2.push(`<!----></button>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="ui:flex-1"></div>`);
      }
      $$renderer2.push(`<!--]--></nav>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Sidebar_row($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      number,
      title,
      active = false,
      locked = false,
      href,
      class: className
    } = $$props;
    const rowClass = cn("ui:group ui:flex ui:items-center ui:gap-1.5 ui:py-1 ui:pl-3 ui:pr-4 ui:rounded-sm ui:text-sm ui:leading-snug ui:w-full ui:text-left ui:transition-colors", active && "ui:bg-transparent", locked && !active && "ui:text-muted-foreground", className);
    const titleClass = cn(
      "ui:text-wrap ui:transition-colors ui:text-[13px]",
      "ui:group-hover:text-primary",
      active ? "ui:text-primary" : "ui:text-foreground/70 ui:group-hover:text-foreground",
      locked && !active && "ui:text-muted-foreground"
    );
    function body($$renderer3) {
      Number_badge($$renderer3, { number, active, locked });
      $$renderer3.push(`<!----> <span${attr_class(clsx(titleClass))}>${escape_html(title)}</span>`);
    }
    if (href) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", href)}${attr_class(clsx(rowClass))}${attr("aria-current", active ? "page" : void 0)}>`);
      body($$renderer2);
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button type="button"${attr_class(clsx(rowClass))}${attr("aria-current", active ? "page" : void 0)}${attr("aria-disabled", locked || void 0)}>`);
      body($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      sections,
      activeSlug = null,
      onItemClick,
      hrefFor,
      showPoweredBy = true,
      courseSlug = null,
      orgSlug = null,
      poweredByLabel = "Powered by",
      poweredByBrand = "ClassroomIO",
      class: className
    } = $$props;
    $$renderer2.push(`<div${attr_class(clsx(cn("ui:flex ui:h-full ui:flex-col ui:bg-sidebar", className)))}><nav class="ui:flex ui:flex-1 ui:flex-col ui:gap-6 ui:py-6 ui:px-2" aria-label="Course outline"><!---->`);
    Provider($$renderer2, {
      delayDuration: 300,
      children: ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(sections);
        for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
          let section = each_array[$$index_1];
          $$renderer3.push(`<div class="ui:flex ui:min-w-0 ui:flex-col ui:gap-2"><h2 class="ui:m-0 ui:min-w-0 ui:w-full"><!---->`);
          Root$1($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              {
                let child = function($$renderer5, { props }) {
                  $$renderer5.push(`<span${attributes({
                    ...mergeProps(
                      {
                        class: cn("ui:block ui:w-full ui:min-w-0 ui:truncate ui:px-3 ui:font-medium ui:uppercase ui:text-[11px] ui:text-muted-foreground ui:transition-colors")
                      },
                      props
                    )
                  })}>${escape_html(section.title)}</span>`);
                };
                Tooltip_trigger($$renderer4, { child, $$slots: { child: true } });
              }
              $$renderer4.push(`<!----> <!---->`);
              Tooltip_content($$renderer4, {
                side: "top",
                sideOffset: 6,
                class: "ui:max-w-xs",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(section.title)}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></h2> <div class="ui:flex ui:flex-col"><!--[-->`);
          const each_array_1 = ensure_array_like(section.items);
          for (let index = 0, $$length2 = each_array_1.length; index < $$length2; index++) {
            let item = each_array_1[index];
            Sidebar_row($$renderer3, {
              number: index + 1,
              title: item.title,
              active: item.slug === activeSlug,
              locked: !item.isUnlocked,
              href: hrefFor?.(item)
            });
          }
          $$renderer3.push(`<!--]--></div></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!----></nav> `);
    if (showPoweredBy) {
      $$renderer2.push("<!--[-->");
      Powered_by($$renderer2, {
        courseSlug,
        orgSlug,
        label: poweredByLabel,
        brand: poweredByBrand
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Mobile_sheet($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = false,
      onOpenChange,
      sections,
      activeSlug = null,
      onItemClick,
      hrefFor,
      title = "Course outline",
      showPoweredBy = true,
      courseSlug = null,
      orgSlug = null,
      poweredByLabel = "Powered by",
      poweredByBrand = "ClassroomIO"
    } = $$props;
    function handleOpenChange(next) {
      open = next;
      onOpenChange?.(next);
    }
    function handleItemClick(item) {
      onItemClick?.(item);
      handleOpenChange(false);
    }
    $$renderer2.push(`<!---->`);
    Drawer($$renderer2, {
      open,
      onOpenChange: handleOpenChange,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Portal($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Drawer_overlay($$renderer4, { class: "ui:fixed ui:inset-0 ui:z-50 ui:bg-black/40" });
            $$renderer4.push(`<!----> <!---->`);
            Drawer_content($$renderer4, {
              class: "ui:fixed ui:inset-x-0 ui:bottom-0 ui:z-50 ui:flex ui:max-h-[85vh] ui:flex-col ui:rounded-t-xl ui:border-t ui:border-border ui:bg-background",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="ui:mx-auto ui:mt-2 ui:h-1 ui:w-10 ui:rounded-full ui:bg-muted" aria-hidden="true"></div> <!---->`);
                Drawer_header($$renderer5, {
                  class: "ui:px-5 ui:pt-3 ui:pb-2",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->`);
                    Drawer_title($$renderer6, {
                      class: "ui:text-sm ui:font-semibold ui:text-foreground",
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(title)}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <div class="ui:flex-1 ui:overflow-y-auto ui:px-2 ui:pb-[max(env(safe-area-inset-bottom),1rem)]">`);
                Sidebar($$renderer5, {
                  sections,
                  activeSlug,
                  onItemClick: handleItemClick,
                  hrefFor,
                  showPoweredBy,
                  courseSlug,
                  orgSlug,
                  poweredByLabel,
                  poweredByBrand
                });
                $$renderer5.push(`<!----></div>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { open });
  });
}
function Sun($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.562.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["circle", { "cx": "12", "cy": "12", "r": "4" }],
      ["path", { "d": "M12 2v2" }],
      ["path", { "d": "M12 20v2" }],
      ["path", { "d": "m4.93 4.93 1.41 1.41" }],
      ["path", { "d": "m17.66 17.66 1.41 1.41" }],
      ["path", { "d": "M2 12h2" }],
      ["path", { "d": "M20 12h2" }],
      ["path", { "d": "m6.34 17.66-1.41 1.41" }],
      ["path", { "d": "m19.07 4.93-1.41 1.41" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "sun" },
      /**
       * @component @name Sun
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTEyIDIwdjIiIC8+CiAgPHBhdGggZD0ibTQuOTMgNC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxMmgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgogIDxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Moon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.562.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "moon" },
      /**
       * @component @name Moon
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuOTg1IDEyLjQ4NmE5IDkgMCAxIDEtOS40NzMtOS40NzJjLjQwNS0uMDIyLjYxNy40Ni40MDIuODAzYTYgNiAwIDAgMCA4LjI2OCA4LjI2OGMuMzQ0LS4yMTUuODI1LS4wMDQuODAzLjQwMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/moon
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Dark_mode($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    Root($$renderer2, {
      children: ($$renderer3) => {
        Dropdown_menu_trigger($$renderer3, {
          class: buttonVariants({ variant: "outline", size: "icon" }),
          children: ($$renderer4) => {
            Sun($$renderer4, {
              class: "ui:h-[1.2rem] ui:w-[1.2rem] ui:rotate-0 ui:scale-100 ui:dark:-rotate-90 ui:dark:scale-0 !transition-all"
            });
            $$renderer4.push(`<!----> `);
            Moon($$renderer4, {
              class: "ui:absolute ui:h-[1.2rem] ui:w-[1.2rem] ui:rotate-90 ui:scale-0 ui:dark:rotate-0 ui:dark:scale-100 !transition-all"
            });
            $$renderer4.push(`<!----> <span class="sr-only">Toggle theme</span>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Dropdown_menu_content($$renderer3, {
          align: "end",
          children: ($$renderer4) => {
            Dropdown_menu_item($$renderer4, {
              onclick: () => setMode("light"),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Light`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Dropdown_menu_item($$renderer4, {
              onclick: () => setMode("dark"),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Dark`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Dropdown_menu_item($$renderer4, {
              onclick: () => resetMode(),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->System`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
  });
}
function Shell($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      sections,
      activeSlug = null,
      hrefFor,
      onItemClick,
      activeItem = null,
      activeFlatIndex = null,
      totalItems = 0,
      onPrev,
      onNext,
      hasPrev = false,
      hasNext = false,
      prevItem = null,
      nextItem = null,
      courseTitle,
      org = null,
      homeHref = "/",
      exploreHref = "/courses",
      signInHref = "/login",
      exploreLabel = "Explore courses",
      signInLabel = "Sign in",
      footerPrevLabel = "Previous",
      footerNextLabel = "Next",
      courseSlug = null,
      poweredByLabel = "Powered by",
      poweredByBrand = "ClassroomIO",
      showPoweredBy = true,
      children,
      topRight,
      class: className
    } = $$props;
    let sheetOpen = false;
    const positionLabel = activeFlatIndex !== null && totalItems > 0 ? `${activeFlatIndex + 1} / ${totalItems}` : "";
    const orgInitial = (org?.name?.trim()?.charAt(0) ?? "C").toUpperCase();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div${attr_class(clsx(cn("ui:min-h-dvh ui:bg-background ui:text-foreground", className)))}><header class="ui:sticky ui:top-0 ui:z-30 ui:border-b ui:border-border ui:bg-background/95 ui:backdrop-blur ui:supports-[backdrop-filter]:bg-background/80"><div class="ui:flex ui:h-12 ui:items-center ui:gap-3 ui:px-4 ui:lg:px-6"><a${attr("href", homeHref)} class="ui:flex ui:shrink-0 ui:items-center ui:gap-2 ui:rounded-md ui:focus-visible:outline-none ui:focus-visible:ring-2 ui:focus-visible:ring-ring">`);
      if (org?.avatarUrl) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<img${attr("src", org.avatarUrl)} alt="" class="ui:size-6 ui:rounded ui:object-cover" width="24" height="24" loading="lazy"/>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<span class="ui:flex ui:size-6 ui:items-center ui:justify-center ui:rounded ui:bg-primary/10 ui:text-[11px] ui:font-semibold ui:text-primary" aria-hidden="true">${escape_html(orgInitial)}</span>`);
      }
      $$renderer3.push(`<!--]--> <span class="ui:truncate ui:text-sm ui:font-medium ui:text-foreground">${escape_html(org?.name ?? "")}</span></a> <span aria-hidden="true" class="ui:text-muted-foreground/60">|</span> <span class="ui:min-w-0 ui:flex-1 ui:truncate ui:text-sm ui:text-muted-foreground"${attr("title", courseTitle)}>${escape_html(courseTitle)}</span> <div class="ui:ml-auto ui:flex ui:shrink-0 ui:items-center ui:gap-2">`);
      if (topRight) {
        $$renderer3.push("<!--[-->");
        topRight($$renderer3);
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[!-->");
        Button($$renderer3, {
          href: exploreHref,
          variant: "secondary",
          size: "sm",
          class: "ui:hidden ui:sm:inline-flex",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(exploreLabel)}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Button($$renderer3, {
          href: signInHref,
          variant: "default",
          size: "sm",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(signInLabel)}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      }
      $$renderer3.push(`<!--]--> `);
      Dark_mode($$renderer3);
      $$renderer3.push(`<!----></div></div></header> <div class="ui:flex ui:min-h-[calc(100dvh-3rem)] ui:w-full"><aside class="ui:sticky ui:top-12 ui:hidden ui:h-[calc(100dvh-3rem)] ui:w-72 ui:shrink-0 ui:overflow-y-auto ui:border-r ui:border-border ui:lg:block" aria-label="Course outline sidebar">`);
      Sidebar($$renderer3, {
        sections,
        activeSlug,
        hrefFor,
        onItemClick: hrefFor ? void 0 : onItemClick,
        showPoweredBy,
        courseSlug,
        orgSlug: org?.siteName ?? org?.name ?? null,
        poweredByLabel,
        poweredByBrand
      });
      $$renderer3.push(`<!----></aside> <main class="ui:flex ui:min-w-0 ui:flex-1 ui:flex-col ui:pb-24 ui:lg:pb-12">`);
      children($$renderer3);
      $$renderer3.push(`<!----> `);
      if (prevItem || nextItem) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="ui:mx-auto ui:w-full ui:max-w-3xl ui:px-4 ui:pb-10 ui:sm:px-6">`);
        Footer_nav($$renderer3, {
          prev: prevItem,
          next: nextItem,
          hrefFor,
          prevLabel: footerPrevLabel,
          nextLabel: footerNextLabel
        });
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></main></div> `);
      if (activeItem) {
        $$renderer3.push("<!--[-->");
        Bottom_nav($$renderer3, {
          positionLabel: positionLabel || "Outline",
          sublineLabel: activeItem.title,
          hasPrev,
          hasNext
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      Mobile_sheet($$renderer3, {
        sections,
        activeSlug,
        hrefFor,
        showPoweredBy,
        courseSlug,
        orgSlug: org?.siteName ?? org?.name ?? null,
        poweredByLabel,
        poweredByBrand,
        onItemClick: (item) => {
          if (!hrefFor) {
            onItemClick?.(item);
          }
          sheetOpen = false;
        },
        get open() {
          return sheetOpen;
        },
        set open($$value) {
          sheetOpen = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, children } = $$props;
    const sections = toPublicSidebarSections(data.tree);
    const flatItems = sections.flatMap((section) => section.items);
    const itemSlug = page.params.itemSlug ?? "";
    const activeIndex = flatItems.findIndex((entry) => entry.slug === itemSlug);
    const activeItem = flatItems[activeIndex] ?? null;
    const prevItem = activeIndex > 0 ? flatItems[activeIndex - 1] : null;
    const nextItem = activeIndex >= 0 && activeIndex < flatItems.length - 1 ? flatItems[activeIndex + 1] : null;
    const courseTitle = data.tree.course.title;
    const org = data.tree.course.org ?? null;
    const hrefFor = (item) => `/course/${data.tree.course.slug}/lesson/${item.slug}`;
    async function navigateTo(item) {
      if (!item) return;
      await goto(hrefFor(item));
    }
    $$renderer2.push(`<!---->`);
    {
      $$renderer2.push(`<!---->`);
      Shell($$renderer2, {
        sections,
        courseTitle,
        org,
        activeSlug: itemSlug,
        activeItem,
        activeFlatIndex: activeIndex >= 0 ? activeIndex : null,
        totalItems: flatItems.length,
        hasPrev: !!prevItem,
        hasNext: !!nextItem,
        prevItem,
        nextItem,
        hrefFor,
        exploreHref: "/courses",
        signInHref: "/login",
        exploreLabel: store_get($$store_subs ??= {}, "$t", t)("public_course.header.explore_courses"),
        signInLabel: store_get($$store_subs ??= {}, "$t", t)("public_course.header.sign_in"),
        footerPrevLabel: store_get($$store_subs ??= {}, "$t", t)("public_course.footer_nav.previous"),
        footerNextLabel: store_get($$store_subs ??= {}, "$t", t)("public_course.footer_nav.next"),
        courseSlug: data.tree.course.slug,
        poweredByLabel: store_get($$store_subs ??= {}, "$t", t)("public_course.powered_by.label"),
        poweredByBrand: store_get($$store_subs ??= {}, "$t", t)("public_course.powered_by.brand"),
        onItemClick: navigateTo,
        onPrev: () => navigateTo(prevItem),
        onNext: () => navigateTo(nextItem),
        children: ($$renderer3) => {
          children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        }
      });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-CusDduxr.js.map
