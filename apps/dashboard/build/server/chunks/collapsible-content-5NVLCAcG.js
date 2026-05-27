import { b as spread_props, c as bind_props, t as props_id, g as attributes, k as derived, j as clsx } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { a as createBitsAttrs, d as createId, n as noop, e as boxWith, m as mergeProps, C as Context, b as attachRef, f as boolToEmptyStrOrUndef, l as getDataOpenClosed, S as SPACE, E as ENTER, h as boolToStr, w as watch } from './create-id-D7gdjJzW.js';
import { o as on } from './events-BzIOqpZK.js';
import { a as PresenceManager, b as afterTick } from './scroll-lock-CqTUXsNd.js';

const collapsibleAttrs = createBitsAttrs({
  component: "collapsible",
  parts: ["root", "content", "trigger"]
});
const CollapsibleRootContext = new Context("Collapsible.Root");
class CollapsibleRootState {
  static create(opts) {
    return CollapsibleRootContext.set(new CollapsibleRootState(opts));
  }
  opts;
  attachment;
  contentNode = null;
  contentPresence;
  contentId = void 0;
  constructor(opts) {
    this.opts = opts;
    this.toggleOpen = this.toggleOpen.bind(this);
    this.attachment = attachRef(this.opts.ref);
    this.contentPresence = new PresenceManager({
      ref: boxWith(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-state": getDataOpenClosed(this.opts.open.current),
    "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
    [collapsibleAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class CollapsibleContentState {
  static create(opts) {
    return new CollapsibleContentState(opts, CollapsibleRootContext.get());
  }
  opts;
  root;
  attachment;
  #present = derived(() => {
    if (this.opts.hiddenUntilFound.current) return this.root.opts.open.current;
    return this.opts.forceMount.current || this.root.opts.open.current;
  });
  get present() {
    return this.#present();
  }
  set present($$value) {
    return this.#present($$value);
  }
  #originalStyles;
  #isMountAnimationPrevented = false;
  #width = 0;
  #height = 0;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.#isMountAnimationPrevented = root.opts.open.current;
    this.root.contentId = this.opts.id.current;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
    watch.pre(() => this.opts.id.current, (id) => {
      this.root.contentId = id;
    });
    watch.pre(
      [
        () => this.opts.ref.current,
        () => this.opts.hiddenUntilFound.current
      ],
      ([node, hiddenUntilFound]) => {
        if (!node || !hiddenUntilFound) return;
        const handleBeforeMatch = () => {
          if (this.root.opts.open.current) return;
          requestAnimationFrame(() => {
            this.root.opts.open.current = true;
          });
        };
        return on(node, "beforematch", handleBeforeMatch);
      }
    );
    watch([() => this.opts.ref.current, () => this.present], ([node]) => {
      if (!node) return;
      afterTick(() => {
        if (!this.opts.ref.current) return;
        this.#originalStyles = this.#originalStyles || {
          transitionDuration: node.style.transitionDuration,
          animationName: node.style.animationName
        };
        node.style.transitionDuration = "0s";
        node.style.animationName = "none";
        const rect = node.getBoundingClientRect();
        this.#height = rect.height;
        this.#width = rect.width;
        if (!this.#isMountAnimationPrevented) {
          const { animationName, transitionDuration } = this.#originalStyles;
          node.style.transitionDuration = transitionDuration;
          node.style.animationName = animationName;
        }
      });
    });
  }
  get shouldRender() {
    return this.root.contentPresence.shouldRender;
  }
  #snippetProps = derived(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    style: {
      "--bits-collapsible-content-height": this.#height ? `${this.#height}px` : void 0,
      "--bits-collapsible-content-width": this.#width ? `${this.#width}px` : void 0
    },
    hidden: this.opts.hiddenUntilFound.current && !this.root.opts.open.current ? "until-found" : void 0,
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    "data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
    [collapsibleAttrs.content]: "",
    ...this.opts.hiddenUntilFound.current && !this.shouldRender ? {} : {
      hidden: this.opts.hiddenUntilFound.current ? !this.shouldRender : this.opts.forceMount.current ? void 0 : !this.shouldRender
    },
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class CollapsibleTriggerState {
  static create(opts) {
    return new CollapsibleTriggerState(opts, CollapsibleRootContext.get());
  }
  opts;
  root;
  attachment;
  #isDisabled = derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  onclick(e) {
    if (this.#isDisabled()) return;
    if (e.button !== 0) return e.preventDefault();
    this.root.toggleOpen();
  }
  onkeydown(e) {
    if (this.#isDisabled()) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.root.toggleOpen();
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    type: "button",
    disabled: this.#isDisabled(),
    "aria-controls": this.root.contentId,
    "aria-expanded": boolToStr(this.root.opts.open.current),
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    "data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
    [collapsibleAttrs.trigger]: "",
    //
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Collapsible$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      id = createId(uid),
      ref = null,
      open = false,
      disabled = false,
      onOpenChange = noop,
      onOpenChangeComplete = noop,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rootState = CollapsibleRootState.create({
      open: boxWith(() => open, (v) => {
        open = v;
        onOpenChange(v);
      }),
      disabled: boxWith(() => disabled),
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
    });
    const mergedProps = mergeProps(restProps, rootState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref, open });
  });
}
function Collapsible_content$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      child,
      ref = null,
      forceMount = false,
      hiddenUntilFound = false,
      children,
      id = createId(uid),
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const contentState = CollapsibleContentState.create({
      id: boxWith(() => id),
      forceMount: boxWith(() => forceMount),
      hiddenUntilFound: boxWith(() => hiddenUntilFound),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, contentState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { ...contentState.snippetProps, props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Collapsible_trigger$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      ref = null,
      id = createId(uid),
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const triggerState = CollapsibleTriggerState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => disabled)
    });
    const mergedProps = mergeProps(restProps, triggerState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Sidebar_menu_sub($$renderer, $$props) {
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
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      class: clsx(cn("ui:border-sidebar-border ui:ml-2.5 ui:flex ui:min-w-0 ui:translate-x-px ui:flex-col ui:gap-1 ui:border-l ui:pl-2 ui:py-0.5", "ui:group-data-[collapsible=icon]:hidden", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></ul>`);
    bind_props($$props, { ref });
  });
}
function Sidebar_menu_sub_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      children,
      child,
      class: className,
      size = "md",
      isActive = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const mergedProps = {
      class: cn("ui:text-sidebar-foreground ui:ring-sidebar-ring ui:text-sidebar-foreground/75 ui:hover:bg-sidebar-accent ui:hover:text-sidebar-accent-foreground ui:active:bg-sidebar-accent ui:active:text-sidebar-accent-foreground ui:[&>svg]:text-sidebar-accent-foreground ui:outline-hidden ui:flex ui:h-7 ui:min-w-0 ui:-translate-x-px ui:items-center ui:gap-2 ui:overflow-hidden ui:rounded-md ui:px-2 ui:focus-visible:ring-2 ui:cursor-pointer ui:disabled:pointer-events-none ui:disabled:opacity-50 ui:aria-disabled:pointer-events-none ui:aria-disabled:opacity-50 ui:[&>span:last-child]:truncate ui:[&>svg]:size-4 ui:[&>svg]:shrink-0", "ui:data-[active=true]:bg-primary/10 ui:data-[active=true]:text-primary ui:dark:data-[active=true]:bg-primary/20 ui:data-[active=true]:[&>svg]:text-primary", size === "sm" && "ui:text-xs", size === "md" && "ui:text-sm", "ui:group-data-[collapsible=icon]:hidden", className),
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      ...restProps
    };
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<a${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></a>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Sidebar_menu_sub_item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      children,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<li${attributes({
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: clsx(cn("ui:group/menu-sub-item ui:relative", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></li>`);
    bind_props($$props, { ref });
  });
}
function Bell($$renderer, $$props) {
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
      [
        "path",
        {
          "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "bell" },
      /**
       * @component @name Bell
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuMjY4IDIxYTIgMiAwIDAgMCAzLjQ2NCAwIiAvPgogIDxwYXRoIGQ9Ik0zLjI2MiAxNS4zMjZBMSAxIDAgMCAwIDQgMTdoMTZhMSAxIDAgMCAwIC43NC0xLjY3M0MxOS40MSAxMy45NTYgMTggMTIuNDk5IDE4IDhBNiA2IDAgMCAwIDYgOGMwIDQuNDk5LTEuNDExIDUuOTU2LTIuNzM4IDcuMzI2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/bell
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
function Collapsible($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ref = null, open = false, $$slots, $$events, ...restProps } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Collapsible$1($$renderer3, spread_props([
        { "data-slot": "collapsible" },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          get open() {
            return open;
          },
          set open($$value) {
            open = $$value;
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
    bind_props($$props, { ref, open });
  });
}
function Collapsible_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ref = null, $$slots, $$events, ...restProps } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Collapsible_trigger$1($$renderer3, spread_props([
        { "data-slot": "collapsible-trigger" },
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
function Collapsible_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ref = null, $$slots, $$events, ...restProps } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Collapsible_content$1($$renderer3, spread_props([
        { "data-slot": "collapsible-content" },
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

export { Bell as B, Collapsible as C, Sidebar_menu_sub as S, Sidebar_menu_sub_item as a, Sidebar_menu_sub_button as b, Collapsible_trigger as c, Collapsible_content as d };
//# sourceMappingURL=collapsible-content-5NVLCAcG.js.map
