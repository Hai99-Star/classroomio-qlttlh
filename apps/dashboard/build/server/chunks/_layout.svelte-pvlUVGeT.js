import { a as store_get, b as spread_props, u as unsubscribe_stores, h as head, c as bind_props, d as attr, e as stringify, f as ensure_array_like, g as attributes, j as clsx, k as derived, l as attr_class, m as attr_style, n as escape_html } from './index2-Eg0dVEDW.js';
import { p as page } from './index5-nlVlCL1t.js';
import './index6-DijlZyMe.js';
import { d as derivedMode, m as modeStorageKey, t as themeStorageKey, a as darkClassNames, l as lightClassNames, b as disableTransitions, c as themeColors, s as synchronousModeChanges } from './states.svelte-BI9DWQmF.js';
import './button-McsHA0hU.js';
import './input-group-button-BAHNvNdh.js';
import './translations-BxDrjLWK.js';
import './org-t71AQfHV.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-DpnO-FI3.js';
import { a as authClient } from './client-7aKHdcPD.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './event-ByDKS2H7.js';
import './landing-page-1a54p-PE.js';
import './app-CdpE9djd.js';
import './index4-CY3O4yvX.js';
import './submission-CIIjGYOS.js';
import './exports-DiyTWREe.js';
import './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './domains-D9J1UytB.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import { s as setInitialMode, d as defineConfig } from './mode-NtjMtzBS.js';
import { h as html } from './html-FW6Ia4bL.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { a4 as fallback, a5 as run } from './utils2-DPSDgWhA.js';
import { C as Context } from './context-Dq8HS6q_.js';
import merge from 'lodash/merge.js';
import './client3-CP3T_KrU.js';
import './index13-ubjsmMp7.js';
import './create-id-D7gdjJzW.js';
import './scroll-lock-CqTUXsNd.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-H2EBI_WO.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './index14-HMlD0kYH.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-7tRy2FJ1.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import './base.svelte-Bh2VVy5Z.js';
import 'zod/v4';
import './index15-B_EOCZVP.js';
import './shared-server-DaWdgxVh.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';

function Mode_watcher_lite($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { themeColors: themeColors2 } = $$props;
    if (themeColors2) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<meta name="theme-color"${attr("content", themeColors2.dark)}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Mode_watcher_full($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { trueNonce = "", initConfig, themeColors: themeColors2 } = $$props;
    head("1ypimp8", $$renderer2, ($$renderer3) => {
      if (themeColors2) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="theme-color"${attr("content", themeColors2.dark)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> ${html(`<script${trueNonce ? ` nonce=${trueNonce}` : ""}>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`)}`);
    });
  });
}
function Mode_watcher($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      defaultMode = "system",
      themeColors: themeColorsProp,
      disableTransitions: disableTransitionsProp = true,
      darkClassNames: darkClassNamesProp = ["dark"],
      lightClassNames: lightClassNamesProp = [],
      defaultTheme = "",
      nonce = "",
      themeStorageKey: themeStorageKeyProp = "mode-watcher-theme",
      modeStorageKey: modeStorageKeyProp = "mode-watcher-mode",
      disableHeadScriptInjection = false,
      synchronousModeChanges: synchronousModeChangesProp = false
    } = $$props;
    modeStorageKey.current = modeStorageKeyProp;
    themeStorageKey.current = themeStorageKeyProp;
    darkClassNames.current = darkClassNamesProp;
    lightClassNames.current = lightClassNamesProp;
    disableTransitions.current = disableTransitionsProp;
    themeColors.current = themeColorsProp;
    synchronousModeChanges.current = synchronousModeChangesProp;
    const initConfig = defineConfig({
      defaultMode,
      themeColors: themeColorsProp,
      darkClassNames: darkClassNamesProp,
      lightClassNames: lightClassNamesProp,
      defaultTheme,
      modeStorageKey: modeStorageKeyProp,
      themeStorageKey: themeStorageKeyProp
    });
    const trueNonce = typeof window === "undefined" ? nonce : "";
    if (disableHeadScriptInjection) {
      $$renderer2.push("<!--[-->");
      Mode_watcher_lite($$renderer2, { themeColors: themeColors.current });
    } else {
      $$renderer2.push("<!--[!-->");
      Mode_watcher_full($$renderer2, { trueNonce, initConfig, themeColors: themeColors.current });
    }
    $$renderer2.push(`<!--]-->`);
  });
}
const bars = Array(12).fill(0);
function Loader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { visible, class: className } = $$props;
    $$renderer2.push(`<div${attr_class(clsx(["sonner-loading-wrapper", className].filter(Boolean).join(" ")))}${attr("data-visible", visible)}><div class="sonner-spinner"><!--[-->`);
    const each_array = ensure_array_like(bars);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      each_array[i];
      $$renderer2.push(`<div class="sonner-loading-bar"></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
const isBrowser = typeof document !== "undefined";
const sonnerContext = new Context("<Toaster/>");
let toastsCounter = 0;
class ToastState {
  toasts = [];
  heights = [];
  #findToastIdx = (id) => {
    const idx = this.toasts.findIndex((toast) => toast.id === id);
    if (idx === -1) return null;
    return idx;
  };
  addToast = (data) => {
    if (!isBrowser) return;
    this.toasts.unshift(data);
  };
  updateToast = ({ id, data, type, message }) => {
    const toastIdx = this.toasts.findIndex((toast) => toast.id === id);
    const toastToUpdate = this.toasts[toastIdx];
    this.toasts[toastIdx] = {
      ...toastToUpdate,
      ...data,
      id,
      title: message,
      type,
      updated: true
    };
  };
  create = (data) => {
    const { message, ...rest } = data;
    const id = typeof data?.id === "number" || data.id && data.id?.length > 0 ? data.id : toastsCounter++;
    const dismissable = data.dismissable === void 0 ? true : data.dismissable;
    const type = data.type === void 0 ? "default" : data.type;
    run(() => {
      const alreadyExists = this.toasts.find((toast) => toast.id === id);
      if (alreadyExists) {
        this.updateToast({ id, data, type, message, dismissable });
      } else {
        this.addToast({ ...rest, id, title: message, dismissable, type });
      }
    });
    return id;
  };
  dismiss = (id) => {
    run(() => {
      if (id === void 0) {
        this.toasts = this.toasts.map((toast) => ({ ...toast, dismiss: true }));
        return;
      }
      const toastIdx = this.toasts.findIndex((toast) => toast.id === id);
      if (this.toasts[toastIdx]) {
        this.toasts[toastIdx] = { ...this.toasts[toastIdx], dismiss: true };
      }
    });
    return id;
  };
  remove = (id) => {
    if (id === void 0) {
      this.toasts = [];
      return;
    }
    const toastIdx = this.#findToastIdx(id);
    if (toastIdx === null) return;
    this.toasts.splice(toastIdx, 1);
    return id;
  };
  message = (message, data) => {
    return this.create({ ...data, type: "default", message });
  };
  error = (message, data) => {
    return this.create({ ...data, type: "error", message });
  };
  success = (message, data) => {
    return this.create({ ...data, type: "success", message });
  };
  info = (message, data) => {
    return this.create({ ...data, type: "info", message });
  };
  warning = (message, data) => {
    return this.create({ ...data, type: "warning", message });
  };
  loading = (message, data) => {
    return this.create({ ...data, type: "loading", message });
  };
  promise = (promise, data) => {
    if (!data) {
      return;
    }
    let id = void 0;
    if (data.loading !== void 0) {
      id = this.create({
        ...data,
        promise,
        type: "loading",
        message: typeof data.loading === "string" ? data.loading : data.loading()
      });
    }
    const p = promise instanceof Promise ? promise : promise();
    let shouldDismiss = id !== void 0;
    p.then((response) => {
      if (typeof response === "object" && response && "ok" in response && typeof response.ok === "boolean" && !response.ok) {
        shouldDismiss = false;
        const message = constructPromiseErrorMessage(response);
        this.create({ id, type: "error", message });
      } else if (data.success !== void 0) {
        shouldDismiss = false;
        const message = typeof data.success === "function" ? data.success(response) : data.success;
        this.create({ id, type: "success", message });
      }
    }).catch((error) => {
      if (data.error !== void 0) {
        shouldDismiss = false;
        const message = typeof data.error === "function" ? data.error(error) : data.error;
        this.create({ id, type: "error", message });
      }
    }).finally(() => {
      if (shouldDismiss) {
        this.dismiss(id);
        id = void 0;
      }
      data.finally?.();
    });
    return id;
  };
  custom = (component, data) => {
    const id = data?.id || toastsCounter++;
    this.create({ component, id, ...data });
    return id;
  };
  removeHeight = (id) => {
    this.heights = this.heights.filter((height) => height.toastId !== id);
  };
  setHeight = (data) => {
    const toastIdx = this.#findToastIdx(data.toastId);
    if (toastIdx === null) {
      this.heights.push(data);
      return;
    }
    this.heights[toastIdx] = data;
  };
  reset = () => {
    this.toasts = [];
    this.heights = [];
  };
}
function constructPromiseErrorMessage(response) {
  if (response && typeof response === "object" && "status" in response) {
    return `HTTP error! Status: ${response.status}`;
  }
  return `Error! ${response}`;
}
const toastState = new ToastState();
function toastFunction(message, data) {
  return toastState.create({ message, ...data });
}
class SonnerState {
  /**
   * A derived state of the toasts that are not dismissed.
   */
  #activeToasts = derived(() => toastState.toasts.filter((toast) => !toast.dismiss));
  get toasts() {
    return this.#activeToasts();
  }
}
const basicToast = toastFunction;
Object.assign(basicToast, {
  success: toastState.success,
  info: toastState.info,
  warning: toastState.warning,
  error: toastState.error,
  custom: toastState.custom,
  message: toastState.message,
  promise: toastState.promise,
  dismiss: toastState.dismiss,
  loading: toastState.loading,
  getActiveToasts: () => {
    return toastState.toasts.filter((toast) => !toast.dismiss);
  }
});
function isAction(action) {
  return action.label !== void 0;
}
const TOAST_LIFETIME$1 = 4e3;
const GAP$1 = 14;
const TIME_BEFORE_UNMOUNT = 200;
const DEFAULT_TOAST_CLASSES = {
  toast: "",
  title: "",
  description: "",
  loader: "",
  closeButton: "",
  cancelButton: "",
  actionButton: "",
  action: "",
  warning: "",
  error: "",
  success: "",
  default: "",
  info: "",
  loading: ""
};
function Toast($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      toast,
      index,
      expanded,
      invert: invertFromToaster,
      position,
      visibleToasts,
      expandByDefault,
      closeButton: closeButtonFromToaster,
      interacting,
      cancelButtonStyle = "",
      actionButtonStyle = "",
      duration: durationFromToaster,
      descriptionClass = "",
      classes: classesProp,
      unstyled = false,
      loadingIcon,
      successIcon,
      errorIcon,
      warningIcon,
      closeIcon,
      infoIcon,
      defaultRichColors = false,
      swipeDirections: swipeDirectionsProp,
      closeButtonAriaLabel,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const defaultClasses = { ...DEFAULT_TOAST_CLASSES };
    let mounted = false;
    let removed = false;
    let swiping = false;
    let swipeOut = false;
    let isSwiped = false;
    let offsetBeforeRemove = 0;
    let initialHeight = 0;
    toast.duration || durationFromToaster || TOAST_LIFETIME$1;
    let swipeOutDirection = null;
    const isFront = index === 0;
    const isVisible = index + 1 <= visibleToasts;
    const toastType = toast.type;
    const dismissable = toast.dismissable !== false;
    const toastClass = toast.class || "";
    const toastDescriptionClass = toast.descriptionClass || "";
    const heightIndex = toastState.heights.findIndex((height) => height.toastId === toast.id) || 0;
    const closeButton = toast.closeButton ?? closeButtonFromToaster;
    toast.duration ?? durationFromToaster ?? TOAST_LIFETIME$1;
    const coords = position.split("-");
    const toastsHeightBefore = toastState.heights.reduce(
      (prev, curr, reducerIndex) => {
        if (reducerIndex >= heightIndex) return prev;
        return prev + curr.height;
      },
      0
    );
    const invert = toast.invert || invertFromToaster;
    const disabled = toastType === "loading";
    const classes = { ...defaultClasses, ...classesProp };
    toast.title;
    toast.description;
    const offset = Math.round(heightIndex * GAP$1 + toastsHeightBefore);
    function deleteToast() {
      removed = true;
      offsetBeforeRemove = offset;
      toastState.removeHeight(toast.id);
      setTimeout(
        () => {
          toastState.remove(toast.id);
        },
        TIME_BEFORE_UNMOUNT
      );
    }
    toast.promise && toastType === "loading" || toast.duration === Number.POSITIVE_INFINITY;
    const icon = (() => {
      if (toast.icon) return toast.icon;
      if (toastType === "success") return successIcon;
      if (toastType === "error") return errorIcon;
      if (toastType === "warning") return warningIcon;
      if (toastType === "info") return infoIcon;
      if (toastType === "loading") return loadingIcon;
      return null;
    })();
    function LoadingIcon($$renderer3) {
      if (loadingIcon) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div${attr_class(clsx(cn(classes?.loader, toast?.classes?.loader, "sonner-loader")))}${attr("data-visible", toastType === "loading")}>`);
        loadingIcon($$renderer3);
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        Loader($$renderer3, {
          class: cn(classes?.loader, toast.classes?.loader),
          visible: toastType === "loading"
        });
      }
      $$renderer3.push(`<!--]-->`);
    }
    $$renderer2.push(`<li${attr("tabindex", 0)}${attr_class(clsx(cn(restProps.class, toastClass, classes?.toast, toast?.classes?.toast, classes?.[toastType], toast?.classes?.[toastType])))} data-sonner-toast=""${attr("data-rich-colors", toast.richColors ?? defaultRichColors)}${attr("data-styled", !(toast.component || toast.unstyled || unstyled))}${attr("data-mounted", mounted)}${attr("data-promise", Boolean(toast.promise))}${attr("data-swiped", isSwiped)}${attr("data-removed", removed)}${attr("data-visible", isVisible)}${attr("data-y-position", coords[0])}${attr("data-x-position", coords[1])}${attr("data-index", index)}${attr("data-front", isFront)}${attr("data-swiping", swiping)}${attr("data-dismissable", dismissable)}${attr("data-type", toastType)}${attr("data-invert", invert)}${attr("data-swipe-out", swipeOut)}${attr("data-swipe-direction", swipeOutDirection)}${attr("data-expanded", Boolean(expanded || expandByDefault && mounted))}${attr_style(`${restProps.style} ${toast.style}`, {
      "--index": index,
      "--toasts-before": index,
      "--z-index": toastState.toasts.length - index,
      "--offset": `${removed ? offsetBeforeRemove : offset}px`,
      "--initial-height": expandByDefault ? "auto" : `${initialHeight}px`
    })}>`);
    if (closeButton && !toast.component && toastType !== "loading" && closeIcon !== null) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button${attr("aria-label", closeButtonAriaLabel)}${attr("data-disabled", disabled)} data-close-button=""${attr_class(clsx(cn(classes?.closeButton, toast?.classes?.closeButton)))}>`);
      closeIcon?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (toast.component) {
      $$renderer2.push("<!--[-->");
      const Component = toast.component;
      $$renderer2.push(`<!---->`);
      Component($$renderer2, spread_props([toast.componentProps, { closeToast: deleteToast }]));
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if ((toastType || toast.icon || toast.promise) && toast.icon !== null && (icon !== null || toast.icon)) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div data-icon=""${attr_class(clsx(cn(classes?.icon, toast?.classes?.icon)))}>`);
        if (toast.promise || toastType === "loading") {
          $$renderer2.push("<!--[-->");
          if (toast.icon) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<!---->`);
            toast.icon($$renderer2, {});
            $$renderer2.push(`<!---->`);
          } else {
            $$renderer2.push("<!--[!-->");
            LoadingIcon($$renderer2);
          }
          $$renderer2.push(`<!--]-->`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (toast.type !== "loading") {
          $$renderer2.push("<!--[-->");
          if (toast.icon) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<!---->`);
            toast.icon($$renderer2, {});
            $$renderer2.push(`<!---->`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (toastType === "success") {
              $$renderer2.push("<!--[-->");
              successIcon?.($$renderer2);
              $$renderer2.push(`<!---->`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (toastType === "error") {
                $$renderer2.push("<!--[-->");
                errorIcon?.($$renderer2);
                $$renderer2.push(`<!---->`);
              } else {
                $$renderer2.push("<!--[!-->");
                if (toastType === "warning") {
                  $$renderer2.push("<!--[-->");
                  warningIcon?.($$renderer2);
                  $$renderer2.push(`<!---->`);
                } else {
                  $$renderer2.push("<!--[!-->");
                  if (toastType === "info") {
                    $$renderer2.push("<!--[-->");
                    infoIcon?.($$renderer2);
                    $$renderer2.push(`<!---->`);
                  } else {
                    $$renderer2.push("<!--[!-->");
                  }
                  $$renderer2.push(`<!--]-->`);
                }
                $$renderer2.push(`<!--]-->`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div data-content=""><div data-title=""${attr_class(clsx(cn(classes?.title, toast?.classes?.title)))}>`);
      if (toast.title) {
        $$renderer2.push("<!--[-->");
        if (typeof toast.title !== "string") {
          $$renderer2.push("<!--[-->");
          const Title = toast.title;
          $$renderer2.push(`<!---->`);
          Title($$renderer2, spread_props([toast.componentProps]));
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`${escape_html(toast.title)}`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> `);
      if (toast.description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div data-description=""${attr_class(clsx(cn(descriptionClass, toastDescriptionClass, classes?.description, toast.classes?.description)))}>`);
        if (typeof toast.description !== "string") {
          $$renderer2.push("<!--[-->");
          const Description = toast.description;
          $$renderer2.push(`<!---->`);
          Description($$renderer2, spread_props([toast.componentProps]));
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`${escape_html(toast.description)}`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> `);
      if (toast.cancel) {
        $$renderer2.push("<!--[-->");
        if (typeof toast.cancel === "function") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<!---->`);
          toast.cancel($$renderer2, {});
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (isAction(toast.cancel)) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<button data-button="" data-cancel=""${attr_style(toast.cancelButtonStyle ?? cancelButtonStyle)}${attr_class(clsx(cn(classes?.cancelButton, toast?.classes?.cancelButton)))}>${escape_html(toast.cancel.label)}</button>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (toast.action) {
        $$renderer2.push("<!--[-->");
        if (typeof toast.action === "function") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<!---->`);
          toast.action($$renderer2, {});
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (isAction(toast.action)) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<button data-button=""${attr_style(toast.actionButtonStyle ?? actionButtonStyle)}${attr_class(clsx(cn(classes?.actionButton, toast?.classes?.actionButton)))}>${escape_html(toast.action.label)}</button>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></li>`);
  });
}
function SuccessIcon($$renderer) {
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);
}
function ErrorIcon($$renderer) {
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`);
}
function WarningIcon($$renderer) {
  $$renderer.push(`<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`);
}
function InfoIcon($$renderer) {
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`);
}
function CloseIcon($$renderer) {
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
}
const VISIBLE_TOASTS_AMOUNT = 3;
const VIEWPORT_OFFSET = "24px";
const MOBILE_VIEWPORT_OFFSET = "16px";
const TOAST_LIFETIME = 4e3;
const TOAST_WIDTH = 356;
const GAP = 14;
const DARK = "dark";
const LIGHT = "light";
function getOffsetObject(defaultOffset, mobileOffset) {
  const styles = {};
  [defaultOffset, mobileOffset].forEach((offset, index) => {
    const isMobile = index === 1;
    const prefix = isMobile ? "--mobile-offset" : "--offset";
    const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
    function assignAll(offset2) {
      ["top", "right", "bottom", "left"].forEach((key) => {
        styles[`${prefix}-${key}`] = typeof offset2 === "number" ? `${offset2}px` : offset2;
      });
    }
    if (typeof offset === "number" || typeof offset === "string") {
      assignAll(offset);
    } else if (typeof offset === "object") {
      ["top", "right", "bottom", "left"].forEach((key) => {
        const value = offset[key];
        if (value === void 0) {
          styles[`${prefix}-${key}`] = defaultValue;
        } else {
          styles[`${prefix}-${key}`] = typeof value === "number" ? `${value}px` : value;
        }
      });
    } else {
      assignAll(defaultValue);
    }
  });
  return styles;
}
function Toaster($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    function getInitialTheme(t) {
      if (t !== "system") return t;
      if (typeof window !== "undefined") {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          return DARK;
        }
        return LIGHT;
      }
      return LIGHT;
    }
    let {
      invert = false,
      position = "bottom-right",
      hotkey = ["altKey", "KeyT"],
      expand = false,
      closeButton = false,
      offset = VIEWPORT_OFFSET,
      mobileOffset = MOBILE_VIEWPORT_OFFSET,
      theme = "light",
      richColors = false,
      duration = TOAST_LIFETIME,
      visibleToasts = VISIBLE_TOASTS_AMOUNT,
      toastOptions = {},
      dir = "auto",
      gap = GAP,
      loadingIcon: loadingIconProp,
      successIcon: successIconProp,
      errorIcon: errorIconProp,
      warningIcon: warningIconProp,
      closeIcon: closeIconProp,
      infoIcon: infoIconProp,
      containerAriaLabel = "Notifications",
      class: className,
      closeButtonAriaLabel = "Close toast",
      onblur,
      onfocus,
      onmouseenter,
      onmousemove,
      onmouseleave,
      ondragend,
      onpointerdown,
      onpointerup,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    function getDocumentDirection() {
      if (dir !== "auto") return dir;
      if (typeof window === "undefined") return "ltr";
      if (typeof document === "undefined") return "ltr";
      const dirAttribute = document.documentElement.getAttribute("dir");
      if (dirAttribute === "auto" || !dirAttribute) {
        run(() => dir = window.getComputedStyle(document.documentElement).direction ?? "ltr");
        return dir;
      }
      run(() => dir = dirAttribute);
      return dirAttribute;
    }
    const possiblePositions = Array.from(new Set([
      position,
      ...toastState.toasts.filter((toast) => toast.position).map((toast) => toast.position)
    ].filter(Boolean)));
    let expanded = false;
    let interacting = false;
    let actualTheme = getInitialTheme(theme);
    const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    sonnerContext.set(new SonnerState());
    $$renderer2.push(`<section${attr("aria-label", `${stringify(containerAriaLabel)} ${stringify(hotkeyLabel)}`)}${attr("tabindex", -1)} aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-go7r3f">`);
    if (toastState.toasts.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(possiblePositions);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let position2 = each_array[index];
        const [y, x] = position2.split("-");
        const offsetObject = getOffsetObject(offset, mobileOffset);
        $$renderer2.push(`<ol${attributes(
          {
            tabindex: -1,
            dir: getDocumentDirection(),
            class: clsx(className),
            "data-sonner-toaster": true,
            "data-sonner-theme": actualTheme,
            "data-y-position": y,
            "data-x-position": x,
            style: restProps.style,
            ...restProps
          },
          "svelte-go7r3f",
          void 0,
          {
            "--front-toast-height": `${toastState.heights[0]?.height}px`,
            "--width": `${TOAST_WIDTH}px`,
            "--gap": `${gap}px`,
            "--offset-top": offsetObject["--offset-top"],
            "--offset-right": offsetObject["--offset-right"],
            "--offset-bottom": offsetObject["--offset-bottom"],
            "--offset-left": offsetObject["--offset-left"],
            "--mobile-offset-top": offsetObject["--mobile-offset-top"],
            "--mobile-offset-right": offsetObject["--mobile-offset-right"],
            "--mobile-offset-bottom": offsetObject["--mobile-offset-bottom"],
            "--mobile-offset-left": offsetObject["--mobile-offset-left"]
          }
        )}><!--[-->`);
        const each_array_1 = ensure_array_like(toastState.toasts.filter((toast) => !toast.position && index === 0 || toast.position === position2));
        for (let index2 = 0, $$length2 = each_array_1.length; index2 < $$length2; index2++) {
          let toast = each_array_1[index2];
          {
            let successIcon = function($$renderer3) {
              if (successIconProp) {
                $$renderer3.push("<!--[-->");
                successIconProp?.($$renderer3);
                $$renderer3.push(`<!---->`);
              } else {
                $$renderer3.push("<!--[!-->");
                if (successIconProp !== null) {
                  $$renderer3.push("<!--[-->");
                  SuccessIcon($$renderer3);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]-->`);
              }
              $$renderer3.push(`<!--]-->`);
            }, errorIcon = function($$renderer3) {
              if (errorIconProp) {
                $$renderer3.push("<!--[-->");
                errorIconProp?.($$renderer3);
                $$renderer3.push(`<!---->`);
              } else {
                $$renderer3.push("<!--[!-->");
                if (errorIconProp !== null) {
                  $$renderer3.push("<!--[-->");
                  ErrorIcon($$renderer3);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]-->`);
              }
              $$renderer3.push(`<!--]-->`);
            }, warningIcon = function($$renderer3) {
              if (warningIconProp) {
                $$renderer3.push("<!--[-->");
                warningIconProp?.($$renderer3);
                $$renderer3.push(`<!---->`);
              } else {
                $$renderer3.push("<!--[!-->");
                if (warningIconProp !== null) {
                  $$renderer3.push("<!--[-->");
                  WarningIcon($$renderer3);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]-->`);
              }
              $$renderer3.push(`<!--]-->`);
            }, infoIcon = function($$renderer3) {
              if (infoIconProp) {
                $$renderer3.push("<!--[-->");
                infoIconProp?.($$renderer3);
                $$renderer3.push(`<!---->`);
              } else {
                $$renderer3.push("<!--[!-->");
                if (infoIconProp !== null) {
                  $$renderer3.push("<!--[-->");
                  InfoIcon($$renderer3);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]-->`);
              }
              $$renderer3.push(`<!--]-->`);
            }, closeIcon = function($$renderer3) {
              if (closeIconProp) {
                $$renderer3.push("<!--[-->");
                closeIconProp?.($$renderer3);
                $$renderer3.push(`<!---->`);
              } else {
                $$renderer3.push("<!--[!-->");
                if (closeIconProp !== null) {
                  $$renderer3.push("<!--[-->");
                  CloseIcon($$renderer3);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]-->`);
              }
              $$renderer3.push(`<!--]-->`);
            };
            Toast($$renderer2, {
              index: index2,
              toast,
              defaultRichColors: richColors,
              duration: toastOptions?.duration ?? duration,
              class: toastOptions?.class ?? "",
              descriptionClass: toastOptions?.descriptionClass || "",
              invert,
              visibleToasts,
              closeButton,
              interacting,
              position: position2,
              style: toastOptions?.style ?? "",
              classes: toastOptions.classes || {},
              unstyled: toastOptions.unstyled ?? false,
              cancelButtonStyle: toastOptions?.cancelButtonStyle ?? "",
              actionButtonStyle: toastOptions?.actionButtonStyle ?? "",
              closeButtonAriaLabel: toastOptions?.closeButtonAriaLabel ?? closeButtonAriaLabel,
              expandByDefault: expand,
              expanded,
              loadingIcon: loadingIconProp,
              successIcon,
              errorIcon,
              warningIcon,
              infoIcon,
              closeIcon,
              $$slots: {
                successIcon: true,
                errorIcon: true,
                warningIcon: true,
                infoIcon: true,
                closeIcon: true
              }
            });
          }
        }
        $$renderer2.push(`<!--]--></ol>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></section>`);
  });
}
function Sonner_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...restProps } = $$props;
    Toaster($$renderer2, spread_props([
      { theme: derivedMode.current, class: "toaster ui:z-999 group" },
      restProps
    ]));
  });
}
function Snackbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    Sonner_1($$renderer2, { position: "top-right" });
  });
}
function MetaTags($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let updatedTitle;
    let title = fallback($$props["title"], "");
    let titleTemplate = fallback($$props["titleTemplate"], "");
    let robots = fallback($$props["robots"], "index,follow");
    let additionalRobotsProps = fallback($$props["additionalRobotsProps"], () => void 0, true);
    let description = fallback($$props["description"], () => void 0, true);
    let mobileAlternate = fallback($$props["mobileAlternate"], () => void 0, true);
    let languageAlternates = fallback($$props["languageAlternates"], () => void 0, true);
    let twitter = fallback($$props["twitter"], () => void 0, true);
    let facebook = fallback($$props["facebook"], () => void 0, true);
    let openGraph = fallback($$props["openGraph"], () => void 0, true);
    let canonical = fallback($$props["canonical"], () => void 0, true);
    let keywords = fallback($$props["keywords"], () => void 0, true);
    let additionalMetaTags = fallback($$props["additionalMetaTags"], () => void 0, true);
    let additionalLinkTags = fallback($$props["additionalLinkTags"], () => void 0, true);
    let robotsParams = "";
    if (additionalRobotsProps) {
      const {
        nosnippet,
        maxSnippet,
        maxImagePreview,
        maxVideoPreview,
        noarchive,
        noimageindex,
        notranslate,
        unavailableAfter
      } = additionalRobotsProps;
      robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
    }
    updatedTitle = titleTemplate ? title ? titleTemplate.replace(/%s/g, title) : title : title;
    if (!robots && additionalRobotsProps) {
      console.warn("additionalRobotsProps cannot be used when robots is set to false");
    }
    head("98mke3", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<!---->`);
      {
        if (updatedTitle) {
          $$renderer3.push("<!--[-->");
          $$renderer3.title(($$renderer4) => {
            $$renderer4.push(`<title>${escape_html(updatedTitle)}</title>`);
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!----> `);
      if (robots !== false) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="robots"${attr("content", `${stringify(robots)}${stringify(robotsParams)}`)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (description) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="description"${attr("content", description)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (canonical) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<link rel="canonical"${attr("href", canonical)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (keywords?.length) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="keywords"${attr("content", keywords.join(", "))}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (mobileAlternate) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<link rel="alternate"${attr("media", mobileAlternate.media)}${attr("href", mobileAlternate.href)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (languageAlternates && languageAlternates.length > 0) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(languageAlternates);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let languageAlternate = each_array[$$index];
          $$renderer3.push(`<link rel="alternate"${attr("hreflang", languageAlternate.hrefLang)}${attr("href", languageAlternate.href)}/>`);
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (twitter) {
        $$renderer3.push("<!--[-->");
        if (twitter.cardType) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta name="twitter:card"${attr("content", twitter.cardType)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (twitter.site) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta name="twitter:site"${attr("content", twitter.site)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (twitter.handle) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta name="twitter:creator"${attr("content", twitter.handle)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (twitter.title) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta name="twitter:title"${attr("content", twitter.title)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (twitter.description) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta name="twitter:description"${attr("content", twitter.description)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (twitter.image) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta name="twitter:image"${attr("content", twitter.image)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (twitter.imageAlt) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta name="twitter:image:alt"${attr("content", twitter.imageAlt)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (facebook) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta property="fb:app_id"${attr("content", facebook.appId)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (openGraph) {
        $$renderer3.push("<!--[-->");
        if (openGraph.url || canonical) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta property="og:url"${attr("content", openGraph.url || canonical)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (openGraph.type) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta property="og:type"${attr("content", openGraph.type.toLowerCase())}/> `);
          if (openGraph.type.toLowerCase() === "profile" && openGraph.profile) {
            $$renderer3.push("<!--[-->");
            if (openGraph.profile.firstName) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="profile:first_name"${attr("content", openGraph.profile.firstName)}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (openGraph.profile.lastName) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="profile:last_name"${attr("content", openGraph.profile.lastName)}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (openGraph.profile.username) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="profile:username"${attr("content", openGraph.profile.username)}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (openGraph.profile.gender) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="profile:gender"${attr("content", openGraph.profile.gender)}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          } else {
            $$renderer3.push("<!--[!-->");
            if (openGraph.type.toLowerCase() === "book" && openGraph.book) {
              $$renderer3.push("<!--[-->");
              if (openGraph.book.authors && openGraph.book.authors.length) {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<!--[-->`);
                const each_array_1 = ensure_array_like(openGraph.book.authors);
                for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                  let author = each_array_1[$$index_1];
                  $$renderer3.push(`<meta property="book:author"${attr("content", author)}/>`);
                }
                $$renderer3.push(`<!--]-->`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]--> `);
              if (openGraph.book.isbn) {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<meta property="book:isbn"${attr("content", openGraph.book.isbn)}/>`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]--> `);
              if (openGraph.book.releaseDate) {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<meta property="book:release_date"${attr("content", openGraph.book.releaseDate)}/>`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]--> `);
              if (openGraph.book.tags && openGraph.book.tags.length) {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<!--[-->`);
                const each_array_2 = ensure_array_like(openGraph.book.tags);
                for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                  let tag = each_array_2[$$index_2];
                  $$renderer3.push(`<meta property="book:tag"${attr("content", tag)}/>`);
                }
                $$renderer3.push(`<!--]-->`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]-->`);
            } else {
              $$renderer3.push("<!--[!-->");
              if (openGraph.type.toLowerCase() === "article" && openGraph.article) {
                $$renderer3.push("<!--[-->");
                if (openGraph.article.publishedTime) {
                  $$renderer3.push("<!--[-->");
                  $$renderer3.push(`<meta property="article:published_time"${attr("content", openGraph.article.publishedTime)}/>`);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]--> `);
                if (openGraph.article.modifiedTime) {
                  $$renderer3.push("<!--[-->");
                  $$renderer3.push(`<meta property="article:modified_time"${attr("content", openGraph.article.modifiedTime)}/>`);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]--> `);
                if (openGraph.article.expirationTime) {
                  $$renderer3.push("<!--[-->");
                  $$renderer3.push(`<meta property="article:expiration_time"${attr("content", openGraph.article.expirationTime)}/>`);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]--> `);
                if (openGraph.article.authors && openGraph.article.authors.length) {
                  $$renderer3.push("<!--[-->");
                  $$renderer3.push(`<!--[-->`);
                  const each_array_3 = ensure_array_like(openGraph.article.authors);
                  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
                    let author = each_array_3[$$index_3];
                    $$renderer3.push(`<meta property="article:author"${attr("content", author)}/>`);
                  }
                  $$renderer3.push(`<!--]-->`);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]--> `);
                if (openGraph.article.section) {
                  $$renderer3.push("<!--[-->");
                  $$renderer3.push(`<meta property="article:section"${attr("content", openGraph.article.section)}/>`);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]--> `);
                if (openGraph.article.tags && openGraph.article.tags.length) {
                  $$renderer3.push("<!--[-->");
                  $$renderer3.push(`<!--[-->`);
                  const each_array_4 = ensure_array_like(openGraph.article.tags);
                  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
                    let tag = each_array_4[$$index_4];
                    $$renderer3.push(`<meta property="article:tag"${attr("content", tag)}/>`);
                  }
                  $$renderer3.push(`<!--]-->`);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]-->`);
              } else {
                $$renderer3.push("<!--[!-->");
                if (openGraph.type.toLowerCase() === "video.movie" || openGraph.type.toLowerCase() === "video.episode" || openGraph.type.toLowerCase() === "video.tv_show" || openGraph.type.toLowerCase() === "video.other" && openGraph.video) {
                  $$renderer3.push("<!--[-->");
                  if (openGraph.video?.actors && openGraph.video.actors.length) {
                    $$renderer3.push("<!--[-->");
                    $$renderer3.push(`<!--[-->`);
                    const each_array_5 = ensure_array_like(openGraph.video.actors);
                    for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
                      let actor = each_array_5[$$index_5];
                      if (actor.profile) {
                        $$renderer3.push("<!--[-->");
                        $$renderer3.push(`<meta property="video:actor"${attr("content", actor.profile)}/>`);
                      } else {
                        $$renderer3.push("<!--[!-->");
                      }
                      $$renderer3.push(`<!--]--> `);
                      if (actor.role) {
                        $$renderer3.push("<!--[-->");
                        $$renderer3.push(`<meta property="video:actor:role"${attr("content", actor.role)}/>`);
                      } else {
                        $$renderer3.push("<!--[!-->");
                      }
                      $$renderer3.push(`<!--]-->`);
                    }
                    $$renderer3.push(`<!--]-->`);
                  } else {
                    $$renderer3.push("<!--[!-->");
                  }
                  $$renderer3.push(`<!--]--> `);
                  if (openGraph.video?.directors && openGraph.video.directors.length) {
                    $$renderer3.push("<!--[-->");
                    $$renderer3.push(`<!--[-->`);
                    const each_array_6 = ensure_array_like(openGraph.video.directors);
                    for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
                      let director = each_array_6[$$index_6];
                      $$renderer3.push(`<meta property="video:director"${attr("content", director)}/>`);
                    }
                    $$renderer3.push(`<!--]-->`);
                  } else {
                    $$renderer3.push("<!--[!-->");
                  }
                  $$renderer3.push(`<!--]--> `);
                  if (openGraph.video?.writers && openGraph.video.writers.length) {
                    $$renderer3.push("<!--[-->");
                    $$renderer3.push(`<!--[-->`);
                    const each_array_7 = ensure_array_like(openGraph.video.writers);
                    for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
                      let writer = each_array_7[$$index_7];
                      $$renderer3.push(`<meta property="video:writer"${attr("content", writer)}/>`);
                    }
                    $$renderer3.push(`<!--]-->`);
                  } else {
                    $$renderer3.push("<!--[!-->");
                  }
                  $$renderer3.push(`<!--]--> `);
                  if (openGraph.video?.duration) {
                    $$renderer3.push("<!--[-->");
                    $$renderer3.push(`<meta property="video:duration"${attr("content", openGraph.video.duration.toString())}/>`);
                  } else {
                    $$renderer3.push("<!--[!-->");
                  }
                  $$renderer3.push(`<!--]--> `);
                  if (openGraph.video?.releaseDate) {
                    $$renderer3.push("<!--[-->");
                    $$renderer3.push(`<meta property="video:release_date"${attr("content", openGraph.video.releaseDate)}/>`);
                  } else {
                    $$renderer3.push("<!--[!-->");
                  }
                  $$renderer3.push(`<!--]--> `);
                  if (openGraph.video?.tags && openGraph.video.tags.length) {
                    $$renderer3.push("<!--[-->");
                    $$renderer3.push(`<!--[-->`);
                    const each_array_8 = ensure_array_like(openGraph.video.tags);
                    for (let $$index_8 = 0, $$length = each_array_8.length; $$index_8 < $$length; $$index_8++) {
                      let tag = each_array_8[$$index_8];
                      $$renderer3.push(`<meta property="video:tag"${attr("content", tag)}/>`);
                    }
                    $$renderer3.push(`<!--]-->`);
                  } else {
                    $$renderer3.push("<!--[!-->");
                  }
                  $$renderer3.push(`<!--]--> `);
                  if (openGraph.video?.series) {
                    $$renderer3.push("<!--[-->");
                    $$renderer3.push(`<meta property="video:series"${attr("content", openGraph.video.series)}/>`);
                  } else {
                    $$renderer3.push("<!--[!-->");
                  }
                  $$renderer3.push(`<!--]-->`);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]-->`);
              }
              $$renderer3.push(`<!--]-->`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (openGraph.title || updatedTitle) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta property="og:title"${attr("content", openGraph.title || updatedTitle)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (openGraph.description || description) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta property="og:description"${attr("content", openGraph.description || description)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (openGraph.images && openGraph.images.length) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!--[-->`);
          const each_array_9 = ensure_array_like(openGraph.images);
          for (let $$index_9 = 0, $$length = each_array_9.length; $$index_9 < $$length; $$index_9++) {
            let image = each_array_9[$$index_9];
            $$renderer3.push(`<meta property="og:image"${attr("content", image.url)}/> `);
            if (image.alt) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="og:image:alt"${attr("content", image.alt)}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (image.width) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="og:image:width"${attr("content", image.width.toString())}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (image.height) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="og:image:height"${attr("content", image.height.toString())}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (image.secureUrl) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="og:image:secure_url"${attr("content", image.secureUrl.toString())}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (image.type) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="og:image:type"${attr("content", image.type.toString())}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (openGraph.videos && openGraph.videos.length) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!--[-->`);
          const each_array_10 = ensure_array_like(openGraph.videos);
          for (let $$index_10 = 0, $$length = each_array_10.length; $$index_10 < $$length; $$index_10++) {
            let video = each_array_10[$$index_10];
            $$renderer3.push(`<meta property="og:video"${attr("content", video.url)}/> `);
            if (video.width) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="og:video:width"${attr("content", video.width.toString())}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (video.height) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="og:video:height"${attr("content", video.height.toString())}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (video.secureUrl) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="og:video:secure_url"${attr("content", video.secureUrl.toString())}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (video.type) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="og:video:type"${attr("content", video.type.toString())}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (openGraph.audio && openGraph.audio.length) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!--[-->`);
          const each_array_11 = ensure_array_like(openGraph.audio);
          for (let $$index_11 = 0, $$length = each_array_11.length; $$index_11 < $$length; $$index_11++) {
            let audio = each_array_11[$$index_11];
            $$renderer3.push(`<meta property="og:audio"${attr("content", audio.url)}/> `);
            if (audio.secureUrl) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="og:audio:secure_url"${attr("content", audio.secureUrl.toString())}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (audio.type) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<meta property="og:audio:type"${attr("content", audio.type.toString())}/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (openGraph.locale) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta property="og:locale"${attr("content", openGraph.locale)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (openGraph.siteName) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<meta property="og:site_name"${attr("content", openGraph.siteName)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (additionalMetaTags && Array.isArray(additionalMetaTags)) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<!--[-->`);
        const each_array_12 = ensure_array_like(additionalMetaTags);
        for (let $$index_12 = 0, $$length = each_array_12.length; $$index_12 < $$length; $$index_12++) {
          let tag = each_array_12[$$index_12];
          $$renderer3.push(`<meta${attributes({ ...tag })}/>`);
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (additionalLinkTags?.length) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<!--[-->`);
        const each_array_13 = ensure_array_like(additionalLinkTags);
        for (let $$index_13 = 0, $$length = each_array_13.length; $$index_13 < $$length; $$index_13++) {
          let tag = each_array_13[$$index_13];
          $$renderer3.push(`<link${attributes({ ...tag })} onload="this.__e=event" onerror="this.__e=event"/>`);
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    });
    bind_props($$props, {
      title,
      titleTemplate,
      robots,
      additionalRobotsProps,
      description,
      mobileAlternate,
      languageAlternates,
      twitter,
      facebook,
      openGraph,
      canonical,
      keywords,
      additionalMetaTags,
      additionalLinkTags
    });
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, children } = $$props;
    const metaTags = merge(data.baseMetaTags, page.data.pageMetaTags);
    const session = authClient.useSession();
    !store_get($$store_subs ??= {}, "$session", session).isPending && !store_get($$store_subs ??= {}, "$session", session).isRefetching && store_get($$store_subs ??= {}, "$session", session).data;
    $$renderer2.push(`<div>`);
    Mode_watcher($$renderer2, {});
    $$renderer2.push(`<!----> `);
    MetaTags($$renderer2, spread_props([metaTags]));
    $$renderer2.push(`<!----> `);
    Snackbar($$renderer2);
    $$renderer2.push(`<!----> `);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-pvlUVGeT.js.map
