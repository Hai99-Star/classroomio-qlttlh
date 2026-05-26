import { c as bind_props } from './index2-Eg0dVEDW.js';
import { c as DialogRootState } from './dialog-content-DTG9QsOx.js';
import { n as noop, e as boxWith } from './create-id-D7gdjJzW.js';

function Dialog($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = false,
      onOpenChange = noop,
      onOpenChangeComplete = noop,
      children
    } = $$props;
    DialogRootState.create({
      variant: boxWith(() => "dialog"),
      open: boxWith(() => open, (v) => {
        open = v;
        onOpenChange(v);
      }),
      onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
    });
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { open });
  });
}

export { Dialog as D };
//# sourceMappingURL=dialog-BVhwOzzC.js.map
