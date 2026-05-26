import { b as spread_props, q as element, c as bind_props, g as attributes, j as clsx, f as ensure_array_like } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { t as tv } from './index14-HMlD0kYH.js';

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
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      name,
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth = false,
      iconNode = [],
      children,
      $$slots,
      $$events,
      ...props
    } = $$props;
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...props,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(["lucide-icon lucide", name && `lucide-${name}`, props.class])
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]-->`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></svg>`);
  });
}
function Loader($$renderer, $$props) {
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
      ["path", { "d": "M12 2v4" }],
      ["path", { "d": "m16.2 7.8 2.9-2.9" }],
      ["path", { "d": "M18 12h4" }],
      ["path", { "d": "m16.2 16.2 2.9 2.9" }],
      ["path", { "d": "M12 18v4" }],
      ["path", { "d": "m4.9 19.1 2.9-2.9" }],
      ["path", { "d": "M2 12h4" }],
      ["path", { "d": "m4.9 4.9 2.9 2.9" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "loader" },
      /**
       * @component @name Loader
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMnY0IiAvPgogIDxwYXRoIGQ9Im0xNi4yIDcuOCAyLjktMi45IiAvPgogIDxwYXRoIGQ9Ik0xOCAxMmg0IiAvPgogIDxwYXRoIGQ9Im0xNi4yIDE2LjIgMi45IDIuOSIgLz4KICA8cGF0aCBkPSJNMTIgMTh2NCIgLz4KICA8cGF0aCBkPSJtNC45IDE5LjEgMi45LTIuOSIgLz4KICA8cGF0aCBkPSJNMiAxMmg0IiAvPgogIDxwYXRoIGQ9Im00LjkgNC45IDIuOSAyLjkiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/loader
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
function Spinner($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, $$slots, $$events, ...restProps } = $$props;
    Loader($$renderer2, spread_props([
      {
        role: "status",
        "aria-label": "Loading",
        class: cn("ui:size-4 ui:animate-spin", className)
      },
      restProps
    ]));
  });
}
const buttonVariants = tv({
  base: "ui:aria-invalid:ring-destructive/20 ui:dark:aria-invalid:ring-destructive/40 ui:aria-invalid:border-destructive ui:focus-visible:border-ring ui:focus-visible:ring-ring/50 ui:relative ui:inline-flex ui:shrink-0 ui:items-center ui:justify-center ui:gap-2 ui:overflow-hidden ui:rounded-md ui:text-sm ui:font-medium ui:whitespace-nowrap ui:outline-hidden ui:transition-all ui:select-none ui:focus-visible:ring-[3px] ui:disabled:pointer-events-none ui:disabled:cursor-not-allowed ui:disabled:opacity-50 ui:[&_svg]:pointer-events-none ui:[&_svg]:shrink-0 ui:[&_svg:not([class*='ui:size-'])]:size-4 ui:cursor-pointer",
  variants: {
    variant: {
      default: "ui:bg-primary ui:text-primary-foreground ui:[a&]:hover:bg-primary/90 ui:shadow-2xs",
      "light-default": "ui:bg-primary/20 ui:text-primary ui:[a&]:hover:bg-primary/30 ui:shadow-2xs",
      destructive: "ui:bg-destructive ui:[a&]:hover:bg-destructive/90 ui:focus-visible:ring-destructive/20 ui:dark:bg-destructive/60 ui:dark:focus-visible:ring-destructive/40 ui:text-white ui:shadow-2xs",
      outline: "ui:bg-background ui:[a&]:hover:bg-accent ui:[a&]:hover:text-accent-foreground ui:dark:border-input ui:dark:bg-input/30 ui:dark:hover:bg-input/50 ui:border ui:shadow-2xs",
      secondary: "ui:bg-secondary ui:text-secondary-foreground ui:[a&]:hover:bg-secondary/80 ui:shadow-2xs",
      ghost: "ui:[a&]:hover:bg-accent ui:[a&]:hover:text-accent-foreground ui:dark:[a&]:hover:bg-accent/50",
      "ghost-default": "ui:text-primary ui:[a&]:hover:bg-accent ui:[a&]:hover:text-primary ui:dark:[a&]:hover:bg-accent/50",
      "ghost-outline": "ui:bg-background ui:[a&]:hover:bg-accent ui:[a&]:hover:text-accent-foreground ui:dark:hover:border-input ui:dark:bg-input/30 ui:dark:hover:bg-input/50 ui:hover:border ui:hover:shadow-2xs",
      link: "ui:text-primary ui:underline-offset-4 ui:[a&]:hover:underline"
    },
    size: {
      default: "ui:h-9 ui:px-4 ui:py-2 ui:has-[>svg]:px-3",
      sm: "ui:h-8 ui:gap-1.5 ui:rounded-md ui:px-3 ui:has-[>svg]:px-2.5",
      lg: "ui:h-10 ui:rounded-md ui:px-6 ui:has-[>svg]:px-4",
      icon: "ui:size-9",
      "icon-2xs": "ui:size-4",
      "icon-xs": `ui:size-6`,
      "icon-sm": "ui:size-8",
      "icon-lg": "ui:size-10"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      variant = "default",
      size = "default",
      animate = void 0,
      href = void 0,
      type = "button",
      loading = false,
      disabled = false,
      tabindex = 0,
      onclick,
      onClickPromise,
      class: className,
      children,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const animateClasses = {
      border: "",
      "bg-shine": "ui:animate-shine ui:border ui:border-neutral-800 ui:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] ui:bg-[length:200%_100%] ui:text-white"
    };
    element(
      $$renderer2,
      href ? "a" : "button",
      () => {
        $$renderer2.push(`${attributes({
          ...rest,
          "data-slot": "button",
          type: href ? void 0 : type,
          href: href && !disabled ? href : void 0,
          disabled: href ? void 0 : disabled || loading,
          "aria-disabled": href ? disabled : void 0,
          role: href && disabled ? "link" : void 0,
          tabindex: href && disabled ? -1 : tabindex,
          class: clsx(cn(buttonVariants({ variant, size }), animate && animateClasses[animate], className))
        })}`);
      },
      () => {
        if (type !== void 0 && loading) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="ui:absolute ui:flex ui:size-full ui:place-items-center ui:justify-center ui:bg-inherit"><div class="ui:flex ui:place-items-center ui:justify-center">`);
          Spinner($$renderer2, { class: "custom ui:size-4" });
          $$renderer2.push(`<!----></div></div> <span class="ui:sr-only">Loading</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (loading && size.includes("icon")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="ui:sr-only">Loading</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
          children?.($$renderer2);
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
    );
    bind_props($$props, { ref });
  });
}

export { Button as B, Icon as I, Spinner as S, buttonVariants as b };
//# sourceMappingURL=button-McsHA0hU.js.map
