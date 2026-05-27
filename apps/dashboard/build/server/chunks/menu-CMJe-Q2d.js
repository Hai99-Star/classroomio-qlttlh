import { c as bind_props, b as spread_props, a as store_get, g as attributes, j as clsx, u as unsubscribe_stores, n as escape_html, d as attr, f as ensure_array_like } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { I as Input_group, a as Input_group_input } from './input-group-input-BlASI7k-.js';
import { I as Input_group_addon } from './input-group-button-BAHNvNdh.js';
import { t } from './translations-BxDrjLWK.js';
import { s as searchStore } from './app2-Bjy9FPab.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { E as Ellipsis } from './ellipsis-CwLwTK8q.js';
import { C as Chevron_right } from './chevron-right2-DJRdFTZC.js';
import { T as Trigger, d as Description, C as Close } from './drawer-title-eL5qtFnQ.js';
import { r as resolve } from './server3-VLoL706W.js';
import { g as goto } from './client2-CqohmrW2.js';
import { b as basePath, g as globalStore } from './app-CdpE9djd.js';
import { R as Root, D as Dropdown_menu_trigger, a as Dropdown_menu_content, b as Dropdown_menu_item } from './index12-DrKMqqv6.js';
import { g as Sidebar_menu, h as Sidebar_menu_item } from './sidebar-trigger-CyHJa3-O.js';
import { e as useSidebar, S as Sidebar_menu_button, u as userPrefersMode } from './states.svelte-BI9DWQmF.js';
import { B as Button } from './button-McsHA0hU.js';
import { U as User_avatar } from './user-avatar-C553w_lG.js';
import { a as setMode, r as resetMode } from './mode-NtjMtzBS.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { c as currentOrg, R as ROLE } from './org-t71AQfHV.js';
import './domains-D9J1UytB.js';
import { D as Dropdown_menu_separator } from './dropdown-menu-separator-DTaX7YPG.js';
import { D as Dropdown_menu_group } from './dropdown-menu-group-Dq5gXS46.js';

function Kbd($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<kbd${attributes({
      "data-slot": "kbd",
      class: clsx(cn("ui:bg-muted ui:text-muted-foreground ui:pointer-events-none ui:inline-flex ui:h-5 ui:w-fit ui:min-w-5 ui:select-none ui:items-center ui:justify-center ui:gap-1 ui:rounded-sm ui:px-1 ui:font-sans ui:text-xs ui:font-medium", "ui:[&_svg:not([class*='size-'])]:size-3", "ui:in-data-[slot=tooltip-content]:bg-background/20 ui:in-data-[slot=tooltip-content]:text-background ui:dark:in-data-[slot=tooltip-content]:bg-background/10", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></kbd>`);
    bind_props($$props, { ref });
  });
}
function Search$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
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
      ["path", { "d": "m21 21-4.34-4.34" }],
      ["circle", { "cx": "11", "cy": "11", "r": "8" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "search" },
      /**
       * @component @name Search
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0IiAvPgogIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
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
function Search($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      placeholder = "",
      value = "",
      class: className = "",
      onFocus,
      onBlur,
      onKeydown,
      scope = "org",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    function openCommandPalette() {
      searchStore.open(scope);
    }
    function handlePointerdown(event) {
      event.preventDefault();
      openCommandPalette();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Input_group($$renderer3, spread_props([
        {
          class: `hidden! max-w-56 md:flex! ${className}`,
          onpointerdown: handlePointerdown
        },
        restProps,
        {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Input_group_input($$renderer4, {
              placeholder: placeholder || store_get($$store_subs ??= {}, "$t", t)("app.search.placeholder"),
              readonly: true,
              role: "button",
              "aria-haspopup": "dialog",
              get value() {
                return value;
              },
              set value($$value) {
                value = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----> <!---->`);
            Input_group_addon($$renderer4, {
              children: ($$renderer5) => {
                Search$1($$renderer5, {});
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Input_group_addon($$renderer4, {
              align: "inline-end",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Kbd($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->⌘`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Kbd($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->K`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
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
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { value });
  });
}
function Breadcrumb($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<nav${attributes({
      "data-slot": "breadcrumb",
      class: clsx(className),
      "aria-label": "breadcrumb",
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></nav>`);
    bind_props($$props, { ref });
  });
}
function Breadcrumb_ellipsis($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<span${attributes({
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      class: clsx(cn("ui:flex ui:size-9 ui:items-center ui:justify-center", className)),
      ...restProps
    })}>`);
    Ellipsis($$renderer2, { class: "ui:size-4" });
    $$renderer2.push(`<!----> <span class="sr-only">More</span></span>`);
    bind_props($$props, { ref });
  });
}
function Breadcrumb_item($$renderer, $$props) {
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
      "data-slot": "breadcrumb-item",
      class: clsx(cn("ui:inline-flex ui:items-center ui:gap-1.5", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></li>`);
    bind_props($$props, { ref });
  });
}
function Breadcrumb_separator($$renderer, $$props) {
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
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      class: clsx(cn("ui:[&>svg]:size-3.5", className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      Chevron_right($$renderer2, {});
    }
    $$renderer2.push(`<!--]--></li>`);
    bind_props($$props, { ref });
  });
}
function Breadcrumb_link($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      href = void 0,
      child,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const attrs = {
      "data-slot": "breadcrumb-link",
      class: cn("ui:hover:text-foreground ui:transition-colors", className),
      href,
      ...restProps
    };
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: attrs });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<a${attributes({ ...attrs })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></a>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Breadcrumb_list($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<ol${attributes({
      "data-slot": "breadcrumb-list",
      class: clsx(cn("ui:text-muted-foreground ui:flex ui:flex-wrap ui:items-center ui:gap-1.5 ui:break-words ui:text-sm ui:sm:gap-2.5", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></ol>`);
    bind_props($$props, { ref });
  });
}
function Breadcrumb_page($$renderer, $$props) {
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
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: clsx(cn("ui:text-foreground ui:font-normal", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></span>`);
    bind_props($$props, { ref });
  });
}
function Drawer_description($$renderer, $$props) {
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
      Description($$renderer3, spread_props([
        {
          "data-slot": "drawer-description",
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
function Drawer_footer($$renderer, $$props) {
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
      "data-slot": "drawer-footer",
      class: clsx(cn("ui:mt-auto ui:flex ui:flex-col ui:gap-2 ui:p-4", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Drawer_close($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ref = null, $$slots, $$events, ...restProps } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Close($$renderer3, spread_props([
        { "data-slot": "drawer-close" },
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
function Drawer_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ref = null, $$slots, $$events, ...restProps } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Trigger($$renderer3, spread_props([
        { "data-slot": "drawer-trigger" },
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
function Dropdown_menu_label($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      inset,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      class: clsx(cn("ui:px-2 ui:py-1.5 ui:text-sm ui:font-semibold ui:data-[inset]:pl-8", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Chevrons_up_down($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
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
      ["path", { "d": "m7 15 5 5 5-5" }],
      ["path", { "d": "m7 9 5-5 5 5" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "chevrons-up-down" },
      /**
       * @component @name ChevronsUpDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNyAxNSA1IDUgNS01IiAvPgogIDxwYXRoIGQ9Im03IDkgNS01IDUgNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chevrons-up-down
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
function Rocket($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
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
          "d": "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
        }
      ],
      [
        "path",
        {
          "d": "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
        }
      ],
      ["path", { "d": "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }],
      ["path", { "d": "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "rocket" },
      /**
       * @component @name Rocket
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNC41IDE2LjVjLTEuNSAxLjI2LTIgNS0yIDVzMy43NC0uNSA1LTJjLjcxLS44NC43LTIuMTMtLjA5LTIuOTFhMi4xOCAyLjE4IDAgMCAwLTIuOTEtLjA5eiIgLz4KICA8cGF0aCBkPSJtMTIgMTUtMy0zYTIyIDIyIDAgMCAxIDItMy45NUExMi44OCAxMi44OCAwIDAgMSAyMiAyYzAgMi43Mi0uNzggNy41LTYgMTFhMjIuMzUgMjIuMzUgMCAwIDEtNCAyeiIgLz4KICA8cGF0aCBkPSJNOSAxMkg0cy41NS0zLjAzIDItNGMxLjYyLTEuMDggNSAwIDUgMCIgLz4KICA8cGF0aCBkPSJNMTIgMTV2NXMzLjAzLS41NSA0LTJjMS4wOC0xLjYyIDAtNSAwLTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/rocket
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
function Badge_question_mark($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
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
          "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }
      ],
      ["path", { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
      [
        "line",
        { "x1": "12", "x2": "12.01", "y1": "17", "y2": "17" }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "badge-question-mark" },
      /**
       * @component @name BadgeQuestionMark
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMy44NSA4LjYyYTQgNCAwIDAgMSA0Ljc4LTQuNzcgNCA0IDAgMCAxIDYuNzQgMCA0IDQgMCAwIDEgNC43OCA0Ljc4IDQgNCAwIDAgMSAwIDYuNzQgNCA0IDAgMCAxLTQuNzcgNC43OCA0IDQgMCAwIDEtNi43NSAwIDQgNCAwIDAgMS00Ljc4LTQuNzcgNCA0IDAgMCAxIDAtNi43NloiIC8+CiAgPHBhdGggZD0iTTkuMDkgOWEzIDMgMCAwIDEgNS44MyAxYzAgMi0zIDMtMyAzIiAvPgogIDxsaW5lIHgxPSIxMiIgeDI9IjEyLjAxIiB5MT0iMTciIHkyPSIxNyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/badge-question-mark
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
function Bell_plus($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
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
      ["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }],
      ["path", { "d": "M15 8h6" }],
      ["path", { "d": "M18 5v6" }],
      [
        "path",
        {
          "d": "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "bell-plus" },
      /**
       * @component @name BellPlus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuMjY4IDIxYTIgMiAwIDAgMCAzLjQ2NCAwIiAvPgogIDxwYXRoIGQ9Ik0xNSA4aDYiIC8+CiAgPHBhdGggZD0iTTE4IDV2NiIgLz4KICA8cGF0aCBkPSJNMjAuMDAyIDE0LjQ2NGE5IDkgMCAwIDAgLjczOC44NjNBMSAxIDAgMCAxIDIwIDE3SDRhMSAxIDAgMCAxLS43NC0xLjY3M0M0LjU5IDEzLjk1NiA2IDEyLjQ5OSA2IDhhNiA2IDAgMCAxIDguNzUtNS4zMzIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/bell-plus
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
function Log_out($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
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
      ["path", { "d": "m16 17 5-5-5-5" }],
      ["path", { "d": "M21 12H9" }],
      ["path", { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "log-out" },
      /**
       * @component @name LogOut
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYgMTcgNS01LTUtNSIgLz4KICA8cGF0aCBkPSJNMjEgMTJIOSIgLz4KICA8cGF0aCBkPSJNOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/log-out
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
function Monitor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
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
        { "width": "20", "height": "14", "x": "2", "y": "3", "rx": "2" }
      ],
      ["line", { "x1": "8", "x2": "16", "y1": "21", "y2": "21" }],
      ["line", { "x1": "12", "x2": "12", "y1": "17", "y2": "21" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "monitor" },
      /**
       * @component @name Monitor
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjMiIHJ4PSIyIiAvPgogIDxsaW5lIHgxPSI4IiB4Mj0iMTYiIHkxPSIyMSIgeTI9IjIxIiAvPgogIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMTciIHkyPSIyMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/monitor
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
     * @license @lucide/svelte v0.545.0 - ISC
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
function Sun($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
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
function Theme_toggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const themes = [
      { mode: "light", icon: Sun },
      { mode: "dark", icon: Moon },
      { mode: "system", icon: Monitor }
    ];
    const handleThemeChange = (newMode) => {
      if (newMode === "light") {
        setMode("light");
      } else if (newMode === "dark") {
        setMode("dark");
      } else {
        resetMode();
      }
    };
    $$renderer2.push(`<div class="flex items-center justify-between gap-8"><p>Theme</p> <div class="flex items-center gap-1 rounded-md backdrop-blur-sm"><!--[-->`);
    const each_array = ensure_array_like(themes);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let theme = each_array[$$index];
      const isActive = userPrefersMode.current === theme.mode || userPrefersMode.current === void 0;
      Button($$renderer2, {
        size: "icon-sm",
        variant: isActive ? "outline" : "ghost",
        class: [
          "size-4 rounded-md p-1 transition-all duration-200",
          isActive && "shadow-primary/20 shadow-lg"
        ],
        title: theme.mode,
        onclick: () => handleThemeChange(theme.mode),
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          theme.icon($$renderer3, { class: "size-4" });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function themetoggle($$renderer) {
  Dropdown_menu_label($$renderer, {
    class: "p-0 font-normal",
    children: ($$renderer2) => {
      Theme_toggle($$renderer2);
    },
    $$slots: { default: true }
  });
}
function Menu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const sidebar = useSidebar();
    function getRoleLabel(roleId) {
      if (roleId === ROLE.ADMIN) return store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.roles.admin");
      if (roleId === ROLE.TUTOR) return store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.roles.tutor");
      if (roleId === ROLE.STUDENT) return store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.roles.student");
      return "";
    }
    function triggeravatar($$renderer3) {
      User_avatar($$renderer3, {
        src: store_get($$store_subs ??= {}, "$profile", profile).avatarUrl,
        alt: store_get($$store_subs ??= {}, "$profile", profile).fullname
      });
      $$renderer3.push(`<!----> <div class="grid flex-1 text-left text-sm leading-tight font-normal"><span class="truncate">${escape_html(store_get($$store_subs ??= {}, "$profile", profile).fullname)}</span> <span class="truncate text-xs">${escape_html(getRoleLabel(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).roleId))}</span></div>`);
    }
    function usertrigger($$renderer3) {
      Dropdown_menu_label($$renderer3, {
        class: "p-0",
        children: ($$renderer4) => {
          $$renderer4.push(`<a${attr("href", resolve(`${store_get($$store_subs ??= {}, "$basePath", basePath)}/settings`, {}))} class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">`);
          User_avatar($$renderer4, {
            src: store_get($$store_subs ??= {}, "$profile", profile).avatarUrl,
            alt: store_get($$store_subs ??= {}, "$profile", profile).fullname
          });
          $$renderer4.push(`<!----> <div class="grid flex-1 text-left text-sm leading-tight font-normal"><span class="truncate">${escape_html(store_get($$store_subs ??= {}, "$profile", profile).fullname)}</span> <span class="truncate text-xs">${escape_html(store_get($$store_subs ??= {}, "$profile", profile).email)}</span></div></a>`);
        },
        $$slots: { default: true }
      });
    }
    Sidebar_menu($$renderer2, {
      children: ($$renderer3) => {
        Sidebar_menu_item($$renderer3, {
          children: ($$renderer4) => {
            Root($$renderer4, {
              children: ($$renderer5) => {
                {
                  let child = function($$renderer6, { props }) {
                    Sidebar_menu_button($$renderer6, spread_props([
                      {
                        size: "lg",
                        class: "ui:data-[state=open]:bg-sidebar-accent ui:data-[state=open]:text-sidebar-accent-foreground"
                      },
                      props,
                      {
                        children: ($$renderer7) => {
                          triggeravatar($$renderer7);
                          $$renderer7.push(`<!----> `);
                          Chevrons_up_down($$renderer7, { class: "ml-auto size-4" });
                          $$renderer7.push(`<!---->`);
                        },
                        $$slots: { default: true }
                      }
                    ]));
                  };
                  Dropdown_menu_trigger($$renderer5, { child, $$slots: { child: true } });
                }
                $$renderer5.push(`<!----> `);
                Dropdown_menu_content($$renderer5, {
                  class: "ui:w-(--bits-dropdown-menu-anchor-width) ui:min-w-56 ui:rounded-lg",
                  side: sidebar.isMobile ? "bottom" : "right",
                  align: "end",
                  sideOffset: 4,
                  children: ($$renderer6) => {
                    usertrigger($$renderer6);
                    $$renderer6.push(`<!----> `);
                    Dropdown_menu_separator($$renderer6, {});
                    $$renderer6.push(`<!----> `);
                    themetoggle($$renderer6);
                    $$renderer6.push(`<!----> `);
                    Dropdown_menu_separator($$renderer6, {});
                    $$renderer6.push(`<!----> `);
                    Dropdown_menu_group($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<div class="cursor-pointer space-y-2">`);
                        if (!store_get($$store_subs ??= {}, "$globalStore", globalStore).isOrgSite) {
                          $$renderer7.push("<!--[-->");
                          $$renderer7.push(`<div class="space-y-4">`);
                          Dropdown_menu_item($$renderer7, {
                            class: "m-0",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<a href="https://classroomio.com/roadmap" target="_blank" class="flex w-full items-center gap-2">`);
                              Bell_plus($$renderer8, { size: 16 });
                              $$renderer8.push(`<!----> <p class="text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("profileMenu.whats_new"))}</p></a>`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> `);
                          Dropdown_menu_item($$renderer7, {
                            class: "m-0",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<a href="https://classroomio.com/blog/launch-week" target="_blank" class="flex w-full items-center gap-2">`);
                              Rocket($$renderer8, { size: 16 });
                              $$renderer8.push(`<!----> <p class="text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("profileMenu.launch_week"))}</p></a>`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> `);
                          Dropdown_menu_item($$renderer7, {
                            class: "m-0",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<a href="https://classroomio.com/contact" target="_blank" rel="noopener noreferrer" class="flex h-full w-full items-center justify-start space-x-2 text-start">`);
                              Badge_question_mark($$renderer8, { size: 20 });
                              $$renderer8.push(`<!----> <p class="text-sm dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("org_navigation.help"))}</p></a>`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----></div>`);
                        } else {
                          $$renderer7.push("<!--[!-->");
                        }
                        $$renderer7.push(`<!--]--> `);
                        Dropdown_menu_separator($$renderer7, {});
                        $$renderer7.push(`<!----> `);
                        Dropdown_menu_item($$renderer7, {
                          onclick: () => goto(resolve(`/logout`, {})),
                          children: ($$renderer8) => {
                            $$renderer8.push(`<span class="flex items-center gap-2">`);
                            Log_out($$renderer8, {});
                            $$renderer8.push(`<!----> <p class="text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.logout"))}</p></span>`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!----></div>`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Breadcrumb as B, Chevrons_up_down as C, Drawer_trigger as D, Menu as M, Rocket as R, Search as S, Breadcrumb_list as a, Breadcrumb_item as b, Breadcrumb_separator as c, Breadcrumb_ellipsis as d, Drawer_description as e, Drawer_footer as f, Breadcrumb_link as g, Breadcrumb_page as h, Drawer_close as i, Dropdown_menu_label as j };
//# sourceMappingURL=menu-CMJe-Q2d.js.map
