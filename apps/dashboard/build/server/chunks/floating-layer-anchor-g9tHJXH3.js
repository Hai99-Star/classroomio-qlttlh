import { c as FloatingAnchorState } from './popper-layer-force-mount-Cwop8WOR.js';
import { e as boxWith } from './create-id-D7gdjJzW.js';

function Floating_layer_anchor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { id, children, virtualEl, ref, tooltip = false } = $$props;
    FloatingAnchorState.create(
      {
        id: boxWith(() => id),
        virtualEl: boxWith(() => virtualEl),
        ref
      },
      tooltip
    );
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}

export { Floating_layer_anchor as F };
//# sourceMappingURL=floating-layer-anchor-g9tHJXH3.js.map
