import { k as derived, o as getContext, c as bind_props, b as spread_props, t as props_id, g as attributes } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { t as tv } from './index14-HMlD0kYH.js';
import { a as createBitsAttrs, C as Context, b as attachRef, R as RovingFocusGroup, d as createId, e as boxWith, m as mergeProps, E as ENTER, S as SPACE, f as boolToEmptyStrOrUndef, g as getAriaChecked, h as boolToStr, i as boolToTrueOrUndef } from './create-id-D7gdjJzW.js';

const toggleGroupAttrs = createBitsAttrs({ component: "toggle-group", parts: ["root", "item"] });
const ToggleGroupRootContext = new Context("ToggleGroup.Root");
class ToggleGroupBaseState {
  opts;
  rovingFocusGroup;
  attachment;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
    this.rovingFocusGroup = new RovingFocusGroup({
      candidateAttr: toggleGroupAttrs.item,
      rootNode: opts.ref,
      loop: opts.loop,
      orientation: opts.orientation
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [toggleGroupAttrs.root]: "",
    role: "group",
    "data-orientation": this.opts.orientation.current,
    "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class ToggleGroupSingleState extends ToggleGroupBaseState {
  opts;
  isMulti = false;
  #anyPressed = derived(() => this.opts.value.current !== "");
  get anyPressed() {
    return this.#anyPressed();
  }
  set anyPressed($$value) {
    return this.#anyPressed($$value);
  }
  constructor(opts) {
    super(opts);
    this.opts = opts;
  }
  includesItem(item) {
    return this.opts.value.current === item;
  }
  toggleItem(item, id) {
    if (this.includesItem(item)) {
      this.opts.value.current = "";
    } else {
      this.opts.value.current = item;
      this.rovingFocusGroup.setCurrentTabStopId(id);
    }
  }
}
class ToggleGroupMultipleState extends ToggleGroupBaseState {
  opts;
  isMulti = true;
  #anyPressed = derived(() => this.opts.value.current.length > 0);
  get anyPressed() {
    return this.#anyPressed();
  }
  set anyPressed($$value) {
    return this.#anyPressed($$value);
  }
  constructor(opts) {
    super(opts);
    this.opts = opts;
  }
  includesItem(item) {
    return this.opts.value.current.includes(item);
  }
  toggleItem(item, id) {
    if (this.includesItem(item)) {
      this.opts.value.current = this.opts.value.current.filter((v) => v !== item);
    } else {
      this.opts.value.current = [...this.opts.value.current, item];
      this.rovingFocusGroup.setCurrentTabStopId(id);
    }
  }
}
class ToggleGroupRootState {
  static create(opts) {
    const { type, ...rest } = opts;
    const rootState = type === "single" ? new ToggleGroupSingleState(rest) : new ToggleGroupMultipleState(rest);
    return ToggleGroupRootContext.set(rootState);
  }
}
class ToggleGroupItemState {
  static create(opts) {
    return new ToggleGroupItemState(opts, ToggleGroupRootContext.get());
  }
  opts;
  root;
  attachment;
  #isDisabled = derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
  #isPressed = derived(() => this.root.includesItem(this.opts.value.current));
  get isPressed() {
    return this.#isPressed();
  }
  set isPressed($$value) {
    return this.#isPressed($$value);
  }
  #ariaChecked = derived(() => {
    return this.root.isMulti ? void 0 : getAriaChecked(this.isPressed, false);
  });
  #ariaPressed = derived(() => {
    return this.root.isMulti ? boolToStr(this.isPressed) : void 0;
  });
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  #toggleItem() {
    if (this.#isDisabled()) return;
    this.root.toggleItem(this.opts.value.current, this.opts.id.current);
  }
  onclick(_) {
    if (this.#isDisabled()) return;
    this.root.toggleItem(this.opts.value.current, this.opts.id.current);
  }
  onkeydown(e) {
    if (this.#isDisabled()) return;
    if (e.key === ENTER || e.key === SPACE) {
      e.preventDefault();
      this.#toggleItem();
      return;
    }
    if (!this.root.opts.rovingFocus.current) return;
    this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
  }
  #tabIndex = 0;
  #snippetProps = derived(() => ({ pressed: this.isPressed }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: this.root.isMulti ? void 0 : "radio",
    tabindex: this.#tabIndex,
    "data-orientation": this.root.opts.orientation.current,
    "data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
    "data-state": getToggleItemDataState(this.isPressed),
    "data-value": this.opts.value.current,
    "aria-pressed": this.#ariaPressed(),
    "aria-checked": this.#ariaChecked(),
    disabled: boolToTrueOrUndef(this.#isDisabled()),
    [toggleGroupAttrs.item]: "",
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
function getToggleItemDataState(condition) {
  return condition ? "on" : "off";
}
function Toggle_group_item$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      ref = null,
      value,
      disabled = false,
      id = createId(uid),
      type = "button",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const itemState = ToggleGroupItemState.create({
      id: boxWith(() => id),
      value: boxWith(() => value),
      disabled: boxWith(() => disabled ?? false),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, itemState.props, { type });
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps, ...itemState.snippetProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps })}>`);
      children?.($$renderer2, itemState.snippetProps);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
const TOGGLE_GROUP_CONTEXT = Symbol("toggle-group-context");
const toggleGroupItemVariants = tv({
  base: "ui:hover:bg-muted ui:hover:text-muted-foreground ui:data-[state=on]:bg-primary ui:data-[state=on]:text-primary-foreground ui:focus-visible:border-ring ui:focus-visible:ring-ring/50 ui:aria-invalid:ring-destructive/20 ui:dark:aria-invalid:ring-destructive/40 ui:aria-invalid:border-destructive ui:inline-flex ui:items-center ui:justify-center ui:gap-2 ui:rounded-md ui:text-sm ui:font-medium ui:whitespace-nowrap ui:transition-[color,box-shadow] ui:outline-none ui:focus-visible:ring-[3px] ui:disabled:pointer-events-none ui:disabled:opacity-50 ui:[&_svg]:pointer-events-none ui:[&_svg]:shrink-0 ui:[&_svg:not([class*='ui:size-'])]:size-4",
  variants: {
    variant: {
      default: "ui:bg-transparent",
      outline: "ui:border-input ui:hover:bg-accent ui:hover:text-accent-foreground ui:border ui:bg-transparent ui:shadow-xs"
    },
    size: {
      default: "ui:h-9 ui:min-w-9 ui:px-2",
      sm: "ui:h-8 ui:min-w-8 ui:px-1.5",
      lg: "ui:h-10 ui:min-w-10 ui:px-2.5"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Toggle_group_item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const toggleGroupContext = getContext(TOGGLE_GROUP_CONTEXT);
    let {
      ref = null,
      class: className,
      variant = void 0,
      size = void 0,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const resolvedVariant = variant ?? toggleGroupContext?.getVariant() ?? "default";
    const resolvedSize = size ?? toggleGroupContext?.getSize() ?? "default";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Toggle_group_item$1($$renderer3, spread_props([
        {
          "data-slot": "toggle-group-item",
          class: cn(toggleGroupItemVariants({ variant: resolvedVariant, size: resolvedSize }), className)
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

export { Toggle_group_item as T, TOGGLE_GROUP_CONTEXT as a, ToggleGroupRootState as b };
//# sourceMappingURL=toggle-group-item-BLEzxLjD.js.map
