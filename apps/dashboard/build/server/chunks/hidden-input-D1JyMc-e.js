import { g as attributes, c as bind_props } from './index2-Eg0dVEDW.js';
import { m as mergeProps } from './create-id-D7gdjJzW.js';
import { a as srOnlyStylesString } from './sr-only-styles-C-iucSJr.js';

function Hidden_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = void 0, $$slots, $$events, ...restProps } = $$props;
    const mergedProps = mergeProps(restProps, {
      "aria-hidden": "true",
      tabindex: -1,
      style: srOnlyStylesString
    });
    if (mergedProps.type === "checkbox") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<input${attributes({ ...mergedProps, value }, void 0, void 0, void 0, 4)}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<input${attributes({ value, ...mergedProps }, void 0, void 0, void 0, 4)}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { value });
  });
}

export { Hidden_input as H };
//# sourceMappingURL=hidden-input-D1JyMc-e.js.map
