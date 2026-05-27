import { s as setContext, k as derived, o as getContext, c as bind_props, b as spread_props, l as attr_class, d as attr, j as clsx, n as escape_html, g as attributes } from './index2-Eg0dVEDW.js';
import { R as Root, T as Tooltip_trigger, a as Tooltip_content } from './index13-ubjsmMp7.js';
import { c as cn } from './index6-DijlZyMe.js';
import { M as MediaQuery, c as createSubscriber, m as mergeProps } from './create-id-D7gdjJzW.js';
import { t as tv } from './index14-HMlD0kYH.js';
import { H as Hoverable_item } from './hoverable-item-DbC0eVyl.js';
import { D as Dialog_content, a as Dialog_overlay, b as Dialog_close } from './dialog-content-7tRy2FJ1.js';
import { P as Portal } from './scroll-lock-CqTUXsNd.js';
import { a5 as run } from './utils2-DPSDgWhA.js';

const DEFAULT_MOBILE_BREAKPOINT = 768;
class IsMobile extends MediaQuery {
  constructor(breakpoint = DEFAULT_MOBILE_BREAKPOINT) {
    super(`max-width: ${breakpoint - 1}px`);
  }
}
const isMobileStore = new IsMobile();
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
class SidebarState {
  props;
  #open = derived(() => this.props.open());
  get open() {
    return this.#open();
  }
  set open($$value) {
    return this.#open($$value);
  }
  openMobile = false;
  setOpen;
  #isMobile;
  #state = derived(() => this.open ? "expanded" : "collapsed");
  get state() {
    return this.#state();
  }
  set state($$value) {
    return this.#state($$value);
  }
  constructor(props) {
    this.setOpen = props.setOpen;
    this.#isMobile = new IsMobile();
    this.props = props;
  }
  // Convenience getter for checking if the sidebar is mobile
  // without this, we would need to use `sidebar.isMobile.current` everywhere
  get isMobile() {
    return this.#isMobile.current;
  }
  // Event handler to apply to the `<svelte:window>`
  handleShortcutKeydown = (e) => {
    if (e.key === SIDEBAR_KEYBOARD_SHORTCUT && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      this.toggle();
    }
  };
  setOpenMobile = (value) => {
    this.openMobile = value;
  };
  toggle = () => {
    return this.#isMobile.current ? this.openMobile = !this.openMobile : this.setOpen(!this.open);
  };
}
const SYMBOL_KEY = "scn-sidebar";
function setSidebar(props) {
  return setContext(Symbol.for(SYMBOL_KEY), new SidebarState(props));
}
function useSidebar() {
  return getContext(Symbol.for(SYMBOL_KEY));
}
const sidebarMenuButtonVariants = tv({
  base: "ui:peer/menu-button ui:cursor-pointer ui:outline-hidden ui:text-sidebar-foreground/80 ui:ring-sidebar-ring ui:hover:bg-sidebar-accent ui:hover:text-sidebar-accent-foreground ui:active:bg-sidebar-accent ui:active:text-sidebar-accent-foreground ui:group-has-data-[sidebar=menu-action]/menu-item:pr-8 ui:data-[active=true]:bg-primary/10 ui:data-[active=true]:text-primary ui:dark:data-[active=true]:bg-primary/20 ui:data-[active=true]:[&>svg]:text-primary ui:data-[state=open]:hover:bg-sidebar-accent ui:data-[state=open]:hover:text-sidebar-accent-foreground ui:group-data-[collapsible=icon]:size-8! ui:group-data-[collapsible=icon]:p-2! ui:flex ui:w-full ui:items-center ui:gap-2 ui:overflow-hidden ui:rounded-md ui:p-2 ui:text-left ui:text-sm ui:transition-[width,height,padding] ui:focus-visible:ring-2 ui:disabled:pointer-events-none ui:disabled:opacity-50 ui:aria-disabled:pointer-events-none ui:aria-disabled:opacity-50 ui:[&>span:last-child]:truncate ui:[&>svg]:size-4 ui:[&>svg]:shrink-0",
  variants: {
    variant: {
      default: "ui:hover:bg-sidebar-accent ui:hover:text-sidebar-accent-foreground",
      outline: "ui:bg-background ui:hover:bg-sidebar-accent ui:hover:text-sidebar-accent-foreground ui:shadow-[0_0_0_1px_var(--sidebar-border)] ui:hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
    },
    size: {
      default: "ui:h-8 ui:text-sm",
      sm: "ui:h-7 ui:text-xs",
      lg: "ui:group-data-[collapsible=icon]:p-0! ui:h-12 ui:text-sm"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Sidebar_menu_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      child,
      variant = "default",
      size = "default",
      isActive = false,
      tooltipContent,
      tooltipContentProps,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const sidebar = useSidebar();
    const buttonProps = {
      class: cn(sidebarMenuButtonVariants({ variant, size }), className),
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      ...restProps
    };
    function Button($$renderer3, { props }) {
      const mergedProps = mergeProps(buttonProps, props);
      if (child) {
        $$renderer3.push("<!--[-->");
        child($$renderer3, { props: mergedProps });
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<button${attributes({ ...mergedProps })}>`);
        children?.($$renderer3);
        $$renderer3.push(`<!----></button>`);
      }
      $$renderer3.push(`<!--]-->`);
    }
    if (!tooltipContent) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {});
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!---->`);
      Root($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          {
            let child2 = function($$renderer4, { props }) {
              Button($$renderer4, { props });
            };
            Tooltip_trigger($$renderer3, { child: child2, $$slots: { child: true } });
          }
          $$renderer3.push(`<!----> <!---->`);
          Tooltip_content($$renderer3, spread_props([
            {
              side: "right",
              align: "center",
              hidden: sidebar.state !== "collapsed" || sidebar.isMobile
            },
            tooltipContentProps,
            {
              children: ($$renderer4) => {
                if (typeof tooltipContent === "string") {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`${escape_html(tooltipContent)}`);
                } else {
                  $$renderer4.push("<!--[!-->");
                  if (tooltipContent) {
                    $$renderer4.push("<!--[-->");
                    tooltipContent($$renderer4);
                    $$renderer4.push(`<!---->`);
                  } else {
                    $$renderer4.push("<!--[!-->");
                  }
                  $$renderer4.push(`<!--]-->`);
                }
                $$renderer4.push(`<!--]-->`);
              },
              $$slots: { default: true }
            }
          ]));
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Sheet_overlay($$renderer, $$props) {
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
      Dialog_overlay($$renderer3, spread_props([
        {
          "data-slot": "sheet-overlay",
          class: cn("ui:data-[state=open]:animate-in ui:data-[state=closed]:animate-out ui:data-[state=closed]:fade-out-0 ui:data-[state=open]:fade-in-0 ui:fixed ui:inset-0 ui:z-50 ui:bg-black/50", className)
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
function Close($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered = false,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-9y45f1")} aria-label="x" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("x svelte-9y45f1", void 0, { "animate": isHovered })}><path d="M18 6 6 18" class="diagonal-1 svelte-9y45f1"></path><path d="m6 6 12 12" class="diagonal-2 svelte-9y45f1"></path></svg></div>`);
}
const sheetVariants = tv({
  base: "ui:bg-background ui:data-[state=open]:animate-in ui:data-[state=closed]:animate-out ui:fixed ui:z-50 ui:flex ui:flex-col ui:gap-4 ui:shadow-lg ui:transition ui:ease-in-out ui:data-[state=closed]:duration-300 ui:data-[state=open]:duration-500",
  variants: {
    side: {
      top: "ui:data-[state=closed]:slide-out-to-top ui:data-[state=open]:slide-in-from-top ui:inset-x-0 ui:top-0 ui:h-auto ui:border-b",
      bottom: "ui:data-[state=closed]:slide-out-to-bottom ui:data-[state=open]:slide-in-from-bottom ui:inset-x-0 ui:bottom-0 ui:h-auto ui:border-t",
      left: "ui:data-[state=closed]:slide-out-to-left ui:data-[state=open]:slide-in-from-left ui:inset-y-0 ui:left-0 ui:h-full ui:w-3/4 ui:border-r ui:sm:max-w-sm",
      right: "ui:data-[state=closed]:slide-out-to-right ui:data-[state=open]:slide-in-from-right ui:inset-y-0 ui:right-0 ui:h-full ui:w-3/4 ui:border-l ui:sm:max-w-sm"
    }
  },
  defaultVariants: { side: "ui:right" }
});
function Sheet_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      side = "right",
      portalProps,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Portal($$renderer3, spread_props([
        portalProps,
        {
          children: ($$renderer4) => {
            Sheet_overlay($$renderer4, {});
            $$renderer4.push(`<!----> <!---->`);
            Dialog_content($$renderer4, spread_props([
              {
                "data-slot": "sheet-content",
                class: cn(sheetVariants({ side }), className)
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
                children: ($$renderer5) => {
                  children?.($$renderer5);
                  $$renderer5.push(`<!----> `);
                  {
                    let children2 = function($$renderer6, isHovered) {
                      $$renderer6.push(`<!---->`);
                      Dialog_close($$renderer6, {
                        class: "ui:ring-offset-background ui:focus-visible:ring-ring ui:rounded-xs ui:focus-visible:outline-hidden ui:absolute ui:right-4 ui:top-4 ui:opacity-70 ui:transition-opacity ui:hover:opacity-100 ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2 ui:disabled:pointer-events-none",
                        children: ($$renderer7) => {
                          Close($$renderer7, { isHovered });
                          $$renderer7.push(`<!----> <span class="sr-only">Close</span>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    };
                    Hoverable_item($$renderer5, { children: children2 });
                  }
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              }
            ]));
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
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
const CLASS_VALUE_PRIMITIVE_TYPES = ["string", "number", "bigint", "boolean"];
function isClassValue(value) {
  if (value === null || value === void 0)
    return true;
  if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value))
    return true;
  if (Array.isArray(value))
    return value.every((item) => isClassValue(item));
  if (typeof value === "object") {
    if (Object.getPrototypeOf(value) !== Object.prototype)
      return false;
    return true;
  }
  return false;
}
const BoxSymbol = Symbol("box");
const isWritableSymbol = Symbol("is-writable");
function isBox(value) {
  return isObject(value) && BoxSymbol in value;
}
function isWritableBox(value) {
  return box.isBox(value) && isWritableSymbol in value;
}
function box(initialValue) {
  let current = initialValue;
  return {
    [BoxSymbol]: true,
    [isWritableSymbol]: true,
    get current() {
      return current;
    },
    set current(v) {
      current = v;
    }
  };
}
function boxWith(getter, setter) {
  const derived2 = getter();
  if (setter) {
    return {
      [BoxSymbol]: true,
      [isWritableSymbol]: true,
      get current() {
        return derived2;
      },
      set current(v) {
        setter(v);
      }
    };
  }
  return {
    [BoxSymbol]: true,
    get current() {
      return getter();
    }
  };
}
function boxFrom(value) {
  if (box.isBox(value)) return value;
  if (isFunction(value)) return box.with(value);
  return box(value);
}
function boxFlatten(boxes) {
  return Object.entries(boxes).reduce(
    (acc, [key, b]) => {
      if (!box.isBox(b)) {
        return Object.assign(acc, { [key]: b });
      }
      if (box.isWritableBox(b)) {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          set(v) {
            b.current = v;
          }
        });
      } else {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          }
        });
      }
      return acc;
    },
    {}
  );
}
function toReadonlyBox(b) {
  if (!box.isWritableBox(b)) return b;
  return {
    [BoxSymbol]: true,
    get current() {
      return b.current;
    }
  };
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
function createParser(matcher, replacer) {
  const regex = RegExp(matcher, "g");
  return (str) => {
    if (typeof str !== "string") {
      throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
    }
    if (!str.match(regex))
      return str;
    return str.replace(regex, replacer);
  };
}
const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
  if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  return Object.keys(styleObj).map((property) => `${camelToKebab(property)}: ${styleObj[property]};`).join("\n");
}
function styleToString(style = {}) {
  return styleToCSS(style).replace("\n", " ");
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
styleToString(srOnlyStyles);
const defaultWindow$1 = void 0;
function getActiveElement$1(document2) {
  let activeElement = document2.activeElement;
  while (activeElement?.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
let ActiveElement$1 = class ActiveElement {
  #document;
  #subscribe;
  constructor(options = {}) {
    const { window: window2 = defaultWindow$1, document: document2 = window2?.document } = options;
    if (window2 === void 0) return;
    this.#document = document2;
    this.#subscribe = createSubscriber();
  }
  get current() {
    this.#subscribe?.();
    if (!this.#document) return null;
    return getActiveElement$1(this.#document);
  }
};
new ActiveElement$1();
function runWatcher(sources, flush, effect, options = {}) {
  const { lazy = false } = options;
}
function watch(sources, effect, options) {
  runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
  runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
globalThis.vaulIdCounter ??= { current: 0 };
function useId(prefix = "vaul-svelte") {
  globalThis.vaulIdCounter.current++;
  return `${prefix}-${globalThis.vaulIdCounter.current}`;
}
const defaultWindow = void 0;
function getActiveElement(document2) {
  let activeElement = document2.activeElement;
  while (activeElement?.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
class ActiveElement2 {
  #document;
  #subscribe;
  constructor(options = {}) {
    const { window: window2 = defaultWindow, document: document2 = window2?.document } = options;
    if (window2 === void 0) return;
    this.#document = document2;
    this.#subscribe = createSubscriber();
  }
  get current() {
    this.#subscribe?.();
    if (!this.#document) return null;
    return getActiveElement(this.#document);
  }
}
new ActiveElement2();
function getStorage(storageType, window2) {
  switch (storageType) {
    case "local":
      return window2.localStorage;
    case "session":
      return window2.sessionStorage;
  }
}
class PersistedState {
  #current;
  #key;
  #serializer;
  #storage;
  #subscribe;
  #version = 0;
  constructor(key, initialValue, options = {}) {
    const {
      storage: storageType = "local",
      serializer = { serialize: JSON.stringify, deserialize: JSON.parse },
      syncTabs = true,
      window: window2 = defaultWindow
    } = options;
    this.#current = initialValue;
    this.#key = key;
    this.#serializer = serializer;
    if (window2 === void 0) return;
    const storage = getStorage(storageType, window2);
    this.#storage = storage;
    const existingValue = storage.getItem(key);
    if (existingValue !== null) {
      this.#current = this.#deserialize(existingValue);
    } else {
      this.#serialize(initialValue);
    }
    if (syncTabs && storageType === "local") {
      this.#subscribe = createSubscriber();
    }
  }
  get current() {
    this.#subscribe?.();
    this.#version;
    const root = this.#deserialize(this.#storage?.getItem(this.#key)) ?? this.#current;
    const proxies = /* @__PURE__ */ new WeakMap();
    const proxy = (value) => {
      if (value === null || value?.constructor.name === "Date" || typeof value !== "object") {
        return value;
      }
      let p = proxies.get(value);
      if (!p) {
        p = new Proxy(value, {
          get: (target, property) => {
            this.#version;
            return proxy(Reflect.get(target, property));
          },
          set: (target, property, value2) => {
            this.#version += 1;
            Reflect.set(target, property, value2);
            this.#serialize(root);
            return true;
          }
        });
        proxies.set(value, p);
      }
      return p;
    };
    return proxy(root);
  }
  set current(newValue) {
    this.#serialize(newValue);
    this.#version += 1;
  }
  #handleStorageEvent = (event) => {
    if (event.key !== this.#key || event.newValue === null) return;
    this.#current = this.#deserialize(event.newValue);
    this.#version += 1;
  };
  #deserialize(value) {
    try {
      return this.#serializer.deserialize(value);
    } catch (error) {
      console.error(`Error when parsing "${value}" from persisted store "${this.#key}"`, error);
      return;
    }
  }
  #serialize(value) {
    try {
      if (value != void 0) {
        this.#storage?.setItem(this.#key, this.#serializer.serialize(value));
      }
    } catch (error) {
      console.error(`Error when writing value from persisted store "${this.#key}" to ${this.#storage}`, error);
    }
  }
}
function sanitizeClassNames(classNames) {
  return classNames.filter((className) => className.length > 0);
}
const noopStorage = {
  getItem: (_key) => null,
  setItem: (_key, _value) => {
  }
};
const isBrowser = typeof document !== "undefined";
const modeStorageKey = box("mode-watcher-mode");
const themeStorageKey = box("mode-watcher-theme");
const modes = ["dark", "light", "system"];
function isValidMode(value) {
  if (typeof value !== "string")
    return false;
  return modes.includes(value);
}
class UserPrefersMode {
  #defaultValue = "system";
  #storage = isBrowser ? localStorage : noopStorage;
  #initialValue = this.#storage.getItem(modeStorageKey.current);
  #value = isValidMode(this.#initialValue) ? this.#initialValue : this.#defaultValue;
  #persisted = this.#makePersisted();
  #makePersisted(value = this.#value) {
    return new PersistedState(modeStorageKey.current, value, {
      serializer: {
        serialize: (v) => v,
        deserialize: (v) => {
          if (isValidMode(v)) return v;
          return this.#defaultValue;
        }
      }
    });
  }
  constructor() {
  }
  get current() {
    return this.#persisted.current;
  }
  set current(newValue) {
    this.#persisted.current = newValue;
  }
}
class SystemPrefersMode {
  #defaultValue = void 0;
  #track = true;
  #current = this.#defaultValue;
  #mediaQueryState = typeof window !== "undefined" && typeof window.matchMedia === "function" ? new MediaQuery("prefers-color-scheme: light") : { current: false };
  query() {
    if (!isBrowser) return;
    this.#current = this.#mediaQueryState.current ? "light" : "dark";
  }
  tracking(active) {
    this.#track = active;
  }
  constructor() {
    this.query = this.query.bind(this);
    this.tracking = this.tracking.bind(this);
  }
  get current() {
    return this.#current;
  }
}
const userPrefersMode = new UserPrefersMode();
const systemPrefersMode = new SystemPrefersMode();
class CustomTheme {
  #storage = isBrowser ? localStorage : noopStorage;
  #initialValue = this.#storage.getItem(themeStorageKey.current);
  #value = this.#initialValue === null || this.#initialValue === void 0 ? "" : this.#initialValue;
  #persisted = this.#makePersisted();
  #makePersisted(value = this.#value) {
    return new PersistedState(themeStorageKey.current, value, {
      serializer: {
        serialize: (v) => {
          if (typeof v !== "string") return "";
          return v;
        },
        deserialize: (v) => v
      }
    });
  }
  constructor() {
  }
  /**
   * The current theme.
   * @returns The current theme.
   */
  get current() {
    return this.#persisted.current;
  }
  /**
   * Set the current theme.
   * @param newValue The new theme to set.
   */
  set current(newValue) {
    this.#persisted.current = newValue;
  }
}
const customTheme = new CustomTheme();
let timeoutAction;
let timeoutEnable;
let hasLoaded = false;
let styleElement = null;
function getStyleElement() {
  if (styleElement)
    return styleElement;
  styleElement = document.createElement("style");
  styleElement.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`));
  return styleElement;
}
function withoutTransition(action, synchronous = false) {
  if (typeof document === "undefined")
    return;
  if (!hasLoaded) {
    hasLoaded = true;
    action();
    return;
  }
  const isTest = typeof process !== "undefined" && process.env?.NODE_ENV === "test" || typeof window !== "undefined" && window.__vitest_worker__;
  if (isTest) {
    action();
    return;
  }
  clearTimeout(timeoutAction);
  clearTimeout(timeoutEnable);
  const style = getStyleElement();
  const disable = () => document.head.appendChild(style);
  const enable = () => {
    if (style.parentNode) {
      document.head.removeChild(style);
    }
  };
  function executeAction() {
    action();
    window.requestAnimationFrame(enable);
  }
  if (typeof window.requestAnimationFrame !== "undefined") {
    disable();
    if (synchronous) {
      executeAction();
    } else {
      window.requestAnimationFrame(() => {
        executeAction();
      });
    }
    return;
  }
  disable();
  timeoutAction = window.setTimeout(() => {
    action();
    timeoutEnable = window.setTimeout(enable, 16);
  }, 16);
}
const themeColors = box(void 0);
const disableTransitions = box(true);
const synchronousModeChanges = box(false);
const darkClassNames = box([]);
const lightClassNames = box([]);
function createDerivedMode() {
  const current = (() => {
    if (!isBrowser) return void 0;
    const derivedMode2 = userPrefersMode.current === "system" ? systemPrefersMode.current : userPrefersMode.current;
    const sanitizedDarkClassNames = sanitizeClassNames(darkClassNames.current);
    const sanitizedLightClassNames = sanitizeClassNames(lightClassNames.current);
    function update() {
      const htmlEl = document.documentElement;
      const themeColorEl = document.querySelector('meta[name="theme-color"]');
      if (derivedMode2 === "light") {
        if (sanitizedDarkClassNames.length) htmlEl.classList.remove(...sanitizedDarkClassNames);
        if (sanitizedLightClassNames.length) htmlEl.classList.add(...sanitizedLightClassNames);
        htmlEl.style.colorScheme = "light";
        if (themeColorEl && themeColors.current) {
          themeColorEl.setAttribute("content", themeColors.current.light);
        }
      } else {
        if (sanitizedLightClassNames.length) htmlEl.classList.remove(...sanitizedLightClassNames);
        if (sanitizedDarkClassNames.length) htmlEl.classList.add(...sanitizedDarkClassNames);
        htmlEl.style.colorScheme = "dark";
        if (themeColorEl && themeColors.current) {
          themeColorEl.setAttribute("content", themeColors.current.dark);
        }
      }
    }
    if (disableTransitions.current) {
      withoutTransition(update, synchronousModeChanges.current);
    } else {
      update();
    }
    return derivedMode2;
  })();
  return {
    get current() {
      return current;
    }
  };
}
function createDerivedTheme() {
  const current = (() => {
    customTheme.current;
    if (!isBrowser) return void 0;
    function update() {
      const htmlEl = document.documentElement;
      htmlEl.setAttribute("data-theme", customTheme.current);
    }
    if (disableTransitions.current) {
      withoutTransition(update, run(() => synchronousModeChanges.current));
    } else {
      update();
    }
    return customTheme.current;
  })();
  return {
    get current() {
      return current;
    }
  };
}
const derivedMode = createDerivedMode();
createDerivedTheme();

export { Close as C, Sidebar_menu_button as S, darkClassNames as a, disableTransitions as b, themeColors as c, derivedMode as d, useSidebar as e, setSidebar as f, Sheet_content as g, SIDEBAR_COOKIE_NAME as h, SIDEBAR_COOKIE_MAX_AGE as i, SIDEBAR_WIDTH as j, SIDEBAR_WIDTH_ICON as k, lightClassNames as l, modeStorageKey as m, SIDEBAR_WIDTH_MOBILE as n, box as o, useId as p, isClassValue as q, styleToString as r, synchronousModeChanges as s, themeStorageKey as t, userPrefersMode as u, isMobileStore as v, watch as w };
//# sourceMappingURL=states.svelte-BI9DWQmF.js.map
