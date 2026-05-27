import { c as bind_props, g as attributes, j as clsx, b as spread_props, d as attr, l as attr_class, e as stringify } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { P as Provider } from './index13-C4Mtu7Q0.js';
import { f as setSidebar, e as useSidebar, g as Sheet_content, h as SIDEBAR_COOKIE_NAME, i as SIDEBAR_COOKIE_MAX_AGE, j as SIDEBAR_WIDTH, k as SIDEBAR_WIDTH_ICON, n as SIDEBAR_WIDTH_MOBILE } from './states.svelte-CIWoDLSQ.js';
import { D as Dialog } from './dialog-BVhwOzzC.js';
import { D as Dialog_title } from './dialog-title-Cob84UGI.js';
import { D as Dialog_description } from './dialog-description2-7SjLAH6Y.js';
import { B as Button, I as Icon } from './button-McsHA0hU.js';

function Sidebar_content($$renderer, $$props) {
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
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: clsx(cn("ui:flex ui:min-h-0 ui:flex-1 ui:flex-col ui:gap-2 ui:overflow-auto ui:group-data-[collapsible=icon]:overflow-hidden", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Sidebar_group($$renderer, $$props) {
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
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: clsx(cn("ui:relative ui:flex ui:w-full ui:min-w-0 ui:flex-col ui:p-2", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Sidebar_header($$renderer, $$props) {
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
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: clsx(cn("ui:flex ui:flex-col ui:gap-2 ui:p-2", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Sidebar_inset($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<main${attributes({
      "data-slot": "sidebar-inset",
      class: clsx(cn("ui:bg-background ui:relative ui:flex ui:w-full ui:flex-1 ui:flex-col ui:h-full", "ui:md:peer-data-[variant=inset]:m-2 ui:md:peer-data-[variant=inset]:ml-0 ui:md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 ui:md:peer-data-[variant=inset]:rounded-xl ui:md:peer-data-[variant=inset]:shadow-sm", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></main>`);
    bind_props($$props, { ref });
  });
}
function Sidebar_menu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<ul${attributes({
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: clsx(cn("ui:flex ui:w-full ui:min-w-0 ui:flex-col ui:gap-1", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></ul>`);
    bind_props($$props, { ref });
  });
}
function Sidebar_menu_item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<li${attributes({
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: clsx(cn("ui:group/menu-item ui:relative", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></li>`);
    bind_props($$props, { ref });
  });
}
function Sidebar_provider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      open = true,
      onOpenChange = () => {
      },
      class: className,
      style,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    setSidebar({
      open: () => open,
      setOpen: (value) => {
        open = value;
        onOpenChange(value);
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      }
    });
    $$renderer2.push(`<!---->`);
    Provider($$renderer2, {
      delayDuration: 0,
      children: ($$renderer3) => {
        $$renderer3.push(`<div${attributes({
          "data-slot": "sidebar-wrapper",
          style: `--sidebar-width: ${stringify(SIDEBAR_WIDTH)}; --sidebar-width-icon: ${stringify(SIDEBAR_WIDTH_ICON)}; ${stringify(style)}`,
          class: clsx(cn("ui:group/sidebar-wrapper ui:has-data-[variant=inset]:bg-sidebar ui:flex ui:max-h-svh ui:w-full", className)),
          ...restProps
        })}>`);
        children?.($$renderer3);
        $$renderer3.push(`<!----></div>`);
      }
    });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { ref, open });
  });
}
function Sheet_header($$renderer, $$props) {
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
      "data-slot": "sheet-header",
      class: clsx(cn("ui:flex ui:flex-col ui:gap-1.5 ui:p-4", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Sheet_title($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Dialog_title($$renderer3, spread_props([
        {
          "data-slot": "sheet-title",
          class: cn("ui:text-foreground ui:font-semibold", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
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
function Sheet_description($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Dialog_description($$renderer3, spread_props([
        {
          "data-slot": "sheet-description",
          class: cn("ui:text-muted-foreground ui:text-sm", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
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
const Root = Dialog;
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const sidebar = useSidebar();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (collapsible === "none") {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div${attributes({
          class: clsx(cn("ui:bg-sidebar ui:text-sidebar-foreground ui:w-(--sidebar-width) ui:flex ui:h-full ui:flex-col", className)),
          ...restProps
        })}>`);
        children?.($$renderer3);
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        if (sidebar.isMobile) {
          $$renderer3.push("<!--[-->");
          var bind_get = () => sidebar.openMobile;
          var bind_set = (v) => sidebar.setOpenMobile(v);
          $$renderer3.push(`<!---->`);
          Root($$renderer3, spread_props([
            {
              get open() {
                return bind_get();
              },
              set open($$value) {
                bind_set($$value);
              }
            },
            restProps,
            {
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->`);
                Sheet_content($$renderer4, {
                  "data-sidebar": "sidebar",
                  "data-slot": "sidebar",
                  "data-mobile": "true",
                  class: "ui:bg-sidebar ui:text-sidebar-foreground ui:w-(--sidebar-width) ui:p-0 ui:[&>button]:hidden",
                  style: `--sidebar-width: ${stringify(SIDEBAR_WIDTH_MOBILE)};`,
                  side,
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->`);
                    Sheet_header($$renderer5, {
                      class: "sr-only",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->`);
                        Sheet_title($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->Sidebar`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!----> <!---->`);
                        Sheet_description($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->Displays the mobile sidebar.`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----> <div class="ui:flex ui:h-full ui:w-full ui:flex-col">`);
                    children?.($$renderer5);
                    $$renderer5.push(`<!----></div>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!---->`);
              },
              $$slots: { default: true }
            }
          ]));
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="ui:text-sidebar-foreground ui:hidden ui:md:block ui:group ui:peer"${attr("data-state", sidebar.state)}${attr("data-collapsible", sidebar.state === "collapsed" ? collapsible : "")}${attr("data-variant", variant)}${attr("data-side", side)} data-slot="sidebar"><div data-slot="sidebar-gap"${attr_class(clsx(cn("ui:w-(--sidebar-width) ui:relative ui:bg-transparent ui:transition-[width] ui:duration-200 ui:ease-linear", "ui:group-data-[collapsible=offcanvas]:w-0", "ui:group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "ui:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "ui:group-data-[collapsible=icon]:w-(--sidebar-width-icon)")))}></div> <div${attributes({
            "data-slot": "sidebar-container",
            class: clsx(cn(
              "ui:w-(--sidebar-width) ui:fixed ui:inset-y-0 ui:z-100 ui:hidden ui:max-h-svh ui:transition-[left,right,width] ui:duration-200 ui:ease-linear ui:md:flex",
              side === "left" ? "ui:left-0 ui:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "ui:right-0 ui:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              variant === "floating" || variant === "inset" ? "ui:p-2 ui:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "ui:group-data-[collapsible=icon]:w-(--sidebar-width-icon) ui:group-data-[side=left]:border-r ui:group-data-[side=right]:border-l",
              className
            )),
            ...restProps
          })}><div data-sidebar="sidebar" data-slot="sidebar-inner" class="ui:bg-sidebar ui:group-data-[variant=floating]:border-sidebar-border ui:flex ui:h-full ui:w-full ui:flex-col ui:group-data-[variant=floating]:rounded-lg ui:group-data-[variant=floating]:border ui:group-data-[variant=floating]:shadow-sm">`);
          children?.($$renderer3);
          $$renderer3.push(`<!----></div></div></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]-->`);
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
function Panel_left($$renderer, $$props) {
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
        "rect",
        { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }
      ],
      ["path", { "d": "M9 3v18" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "panel-left" },
      /**
       * @component @name PanelLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik05IDN2MTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/panel-left
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
function Sidebar_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      onclick,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const sidebar = useSidebar();
    Button($$renderer2, spread_props([
      {
        "data-sidebar": "trigger",
        "data-slot": "sidebar-trigger",
        variant: "ghost",
        size: "icon",
        class: cn("ui:size-7", className),
        type: "button",
        onclick: (e) => {
          onclick?.(e);
          sidebar.toggle();
        }
      },
      restProps,
      {
        children: ($$renderer3) => {
          Panel_left($$renderer3, {});
          $$renderer3.push(`<!----> <span class="sr-only">Toggle Sidebar</span>`);
        },
        $$slots: { default: true }
      }
    ]));
    bind_props($$props, { ref });
  });
}

export { Sidebar_provider as S, Sidebar_inset as a, Sidebar as b, Sidebar_header as c, Sidebar_content as d, Sidebar_trigger as e, Sidebar_group as f, Sidebar_menu as g, Sidebar_menu_item as h };
//# sourceMappingURL=sidebar-trigger-DiPCRN_T.js.map
