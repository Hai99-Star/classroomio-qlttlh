import { c as bind_props, b as spread_props, m as attr_style, e as stringify, t as props_id, g as attributes, k as derived } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { d as createId, e as boxWith, m as mergeProps, b as attachRef, a as createBitsAttrs } from './create-id-D7gdjJzW.js';

const progressAttrs = createBitsAttrs({ component: "progress", parts: ["root"] });
class ProgressRootState {
  static create(opts) {
    return new ProgressRootState(opts);
  }
  opts;
  attachment;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
  }
  #props = derived(() => ({
    role: "progressbar",
    value: this.opts.value.current,
    "aria-valuemin": this.opts.min.current,
    "aria-valuemax": this.opts.max.current,
    "aria-valuenow": this.opts.value.current === null ? void 0 : this.opts.value.current,
    "data-value": this.opts.value.current === null ? void 0 : this.opts.value.current,
    "data-state": getProgressDataState(this.opts.value.current, this.opts.max.current),
    "data-max": this.opts.max.current,
    "data-min": this.opts.min.current,
    "data-indeterminate": this.opts.value.current === null ? "" : void 0,
    [progressAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function getProgressDataState(value, max) {
  if (value === null) return "indeterminate";
  return value === max ? "loaded" : "loading";
}
function Progress$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      child,
      children,
      value = 0,
      max = 100,
      min = 0,
      id = createId(uid),
      ref = null,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rootState = ProgressRootState.create({
      value: boxWith(() => value),
      max: boxWith(() => max),
      min: boxWith(() => min),
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
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
    bind_props($$props, { ref });
  });
}
function Progress($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      max = 100,
      value,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Progress$1($$renderer3, spread_props([
        {
          "data-slot": "progress",
          class: cn("ui:bg-primary/20 ui:relative ui:h-2 ui:w-full ui:overflow-hidden ui:rounded-md", className),
          value,
          max
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
            $$renderer4.push(`<div data-slot="progress-indicator" class="ui:bg-primary ui:h-full ui:w-full ui:flex-1 ui:transition-all"${attr_style(`transform: translateX(-${stringify(100 - 100 * (value ?? 0) / (max ?? 1))}%)`)}></div>`);
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

export { Progress as P };
//# sourceMappingURL=progress-C-m28_ec.js.map
