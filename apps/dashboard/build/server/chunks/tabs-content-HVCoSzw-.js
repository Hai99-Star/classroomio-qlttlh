import { t as props_id, g as attributes, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as TabsContentState } from './tabs-trigger-BTKUSTH_.js';
import { d as createId, e as boxWith, m as mergeProps } from './create-id-D7gdjJzW.js';

function Tabs_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      id = createId(uid),
      ref = null,
      value,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const contentState = TabsContentState.create({
      value: boxWith(() => value),
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, contentState.props);
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

export { Tabs_content as T };
//# sourceMappingURL=tabs-content-HVCoSzw-.js.map
