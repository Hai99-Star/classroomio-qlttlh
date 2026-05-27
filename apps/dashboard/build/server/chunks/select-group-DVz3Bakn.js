import { b as spread_props, c as bind_props, t as props_id, g as attributes } from './index2-Eg0dVEDW.js';
import { c as SelectGroupState } from './index10-CThLLXbL.js';
import { d as createId, e as boxWith, m as mergeProps } from './create-id-D7gdjJzW.js';

function Select_group$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      children,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const groupState = SelectGroupState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, groupState.props);
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
function Select_group($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ref = null, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<!---->`);
    Select_group$1($$renderer2, spread_props([{ "data-slot": "select-group" }, restProps]));
    $$renderer2.push(`<!---->`);
    bind_props($$props, { ref });
  });
}

export { Select_group as S };
//# sourceMappingURL=select-group-DVz3Bakn.js.map
