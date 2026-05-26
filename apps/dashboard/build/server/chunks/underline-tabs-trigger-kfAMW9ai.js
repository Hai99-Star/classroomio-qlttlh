import { t as props_id, c as bind_props, b as spread_props, l as attr_class, j as clsx, k as derived } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { a4 as box } from './create-id-D7gdjJzW.js';
import { T as Tabs, a as Tabs_list, b as Tabs_trigger } from './tabs-trigger-BTKUSTH_.js';
import { T as Tabs_content } from './tabs-content-HVCoSzw-.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import { C as Context } from './context2-Dq8HS6q_.js';

class UnderlineTabsRootState {
  constructor(opts) {
    this.opts = opts;
    this.hoveredTab = this.opts.value.current;
  }
  hoveredTab = null;
  isHovered = false;
}
class UnderlineTabsTriggerState {
  constructor(opts, rootState) {
    this.opts = opts;
    this.rootState = rootState;
  }
  handleFocus() {
    this.rootState.isHovered = true;
    this.rootState.hoveredTab = this.opts.value.current;
  }
  handleBlur() {
    if (this.rootState.hoveredTab === this.opts.value.current) {
      this.rootState.isHovered = false;
    }
  }
  onmouseenter(e) {
    this.handleFocus();
    this.opts.onmouseenter.current?.(e);
  }
  onmouseleave(e) {
    this.handleBlur();
    this.opts.onmouseleave.current?.(e);
  }
  onfocus(e) {
    this.handleFocus();
    this.opts.onfocus.current?.(e);
  }
  onblur(e) {
    this.handleBlur();
    this.opts.onblur.current?.(e);
  }
  #props = derived(() => ({
    value: this.opts.value.current,
    onmouseenter: this.onmouseenter.bind(this),
    onmouseleave: this.onmouseleave.bind(this),
    onfocus: this.onfocus.bind(this),
    onblur: this.onblur.bind(this)
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
const ctx = new Context("underline-tabs-root-ctx");
function useUnderlineTabs(opts) {
  return ctx.set(new UnderlineTabsRootState(opts));
}
function useUnderlineTabsTrigger(opts) {
  return new UnderlineTabsTriggerState(opts, ctx.get());
}
function Underline_tabs($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      ref = null,
      value = "",
      id = uid,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    useUnderlineTabs({
      value: box.with(() => value, (v) => value = v),
      id: box.with(() => id)
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Tabs($$renderer3, spread_props([
        {
          orientation: "horizontal",
          "data-slot": "underline-tabs",
          class: cn("ui:flex ui:flex-col ui:gap-2", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          get value() {
            return value;
          },
          set value($$value) {
            value = $$value;
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
    bind_props($$props, { ref, value });
  });
}
function Underline_tabs_content($$renderer, $$props) {
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
      Tabs_content($$renderer3, spread_props([
        {
          "data-slot": "underline-tabs-content",
          class: cn("ui:flex-1 ui:outline-none", className)
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
function Underline_tabs_list($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Tabs_list($$renderer3, spread_props([
        {
          "data-slot": "underline-tabs-list",
          class: cn("ui:text-muted-foreground ui:border-border ui:relative ui:inline-flex ui:h-9 ui:w-full ui:max-w-full ui:items-center ui:justify-start ui:overflow-x-auto ui:border-b", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            children?.($$renderer4);
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
    bind_props($$props, { ref });
  });
}
function Underline_tabs_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      value,
      class: className,
      onmouseenter,
      onmouseleave,
      onfocus,
      onblur,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const state = useUnderlineTabsTrigger({
      value: box.with(() => value),
      onmouseenter: box.with(() => onmouseenter),
      onmouseleave: box.with(() => onmouseleave),
      onfocus: box.with(() => onfocus),
      onblur: box.with(() => onblur)
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="ui:relative ui:h-full"><!---->`);
      Tabs_trigger($$renderer3, spread_props([
        {
          "data-slot": "underline-tabs-trigger",
          class: cn("dark:data-[state=active]:text-foreground data-[state=active]:text-foreground ui:text-foreground ui:z-10 ui:relative ui:inline-flex ui:h-[calc(100%-3px)] ui:flex-1 ui:items-center ui:justify-center ui:gap-1.5 ui:whitespace-nowrap ui:px-3 ui:py-1 ui:text-sm ui:transition-colors ui:focus:outline-none ui:disabled:pointer-events-none ui:disabled:opacity-50 ui:cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", state.rootState.isHovered && state.rootState.hoveredTab === value && "data-[state=inactive]:text-primary-foreground ui:text-primary", className)
        },
        state.props,
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            children?.($$renderer4);
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
      $$renderer3.push(`<!----> `);
      if (state.rootState.hoveredTab === value) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div${attr_class(clsx(cn("ui:bg-primary-foreground ui:z-1 ui:absolute ui:top-0 ui:h-[calc(100%-3px)] ui:w-full ui:rounded-md ui:opacity-0 ui:transition-opacity ui:duration-300 ui:pointer-events-none ui:peer-focus-visible:ui:opacity-100", state.rootState.isHovered && "ui:opacity-100")))}></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (state.rootState.opts.value.current === value) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="ui:bg-primary ui:z-1 ui:absolute ui:-bottom-px ui:h-0.5 ui:w-full ui:pointer-events-none"></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div>`);
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

export { Underline_tabs as U, Underline_tabs_list as a, Underline_tabs_trigger as b, Underline_tabs_content as c };
//# sourceMappingURL=underline-tabs-trigger-kfAMW9ai.js.map
