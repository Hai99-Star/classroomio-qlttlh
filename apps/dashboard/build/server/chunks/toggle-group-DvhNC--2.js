import { s as setContext, c as bind_props, b as spread_props, t as props_id, g as attributes } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { a as TOGGLE_GROUP_CONTEXT, b as ToggleGroupRootState } from './toggle-group-item-BLEzxLjD.js';
import { d as createId, n as noop, w as watch, e as boxWith, m as mergeProps } from './create-id-D7gdjJzW.js';

function Toggle_group$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      value = void 0,
      onValueChange = noop,
      type,
      disabled = false,
      loop = true,
      orientation = "horizontal",
      rovingFocus = true,
      child,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    function handleDefaultValue() {
      if (value !== void 0) return;
      value = type === "single" ? "" : [];
    }
    handleDefaultValue();
    watch.pre(() => value, () => {
      handleDefaultValue();
    });
    const rootState = ToggleGroupRootState.create({
      id: boxWith(() => id),
      value: boxWith(() => value, (v) => {
        value = v;
        onValueChange(v);
      }),
      disabled: boxWith(() => disabled),
      loop: boxWith(() => loop),
      orientation: boxWith(() => orientation),
      rovingFocus: boxWith(() => rovingFocus),
      type,
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
    bind_props($$props, { ref, value });
  });
}
function Toggle_group($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      value = void 0,
      class: className,
      variant = "default",
      size = "default",
      spacing = 1,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    setContext(TOGGLE_GROUP_CONTEXT, { getVariant: () => variant, getSize: () => size });
    const spacingClassName = (() => {
      switch (spacing) {
        case 0:
          return "ui:gap-0";
        case 2:
          return "ui:gap-2";
        case 3:
          return "ui:gap-3";
        case 4:
          return "ui:gap-4";
        case 1:
        default:
          return "ui:gap-1";
      }
    })();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Toggle_group$1($$renderer3, spread_props([
        {
          "data-slot": "toggle-group",
          class: cn("ui:flex ui:w-fit ui:items-center ui:justify-center", spacingClassName, className)
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

export { Toggle_group as T };
//# sourceMappingURL=toggle-group-DvhNC--2.js.map
