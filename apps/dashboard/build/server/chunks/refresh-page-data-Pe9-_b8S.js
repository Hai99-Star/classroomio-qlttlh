import { i as invalidateAll } from './client2-CqohmrW2.js';
import { I as Icon_button } from './icon-button-De7MyFOi.js';
import { t } from './translations-BxDrjLWK.js';
import { R as Refresh_ccw } from './refresh-ccw-CI5btw-m.js';

function Refresh_page_data($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { disabled = false, onRefresh } = $$props;
    let isRefreshing = false;
    async function handleRefresh() {
      if (disabled || isRefreshing) return;
      isRefreshing = true;
      try {
        if (onRefresh) {
          await onRefresh();
          return;
        }
        await invalidateAll();
      } finally {
        isRefreshing = false;
      }
    }
    Icon_button($$renderer2, {
      onclick: handleRefresh,
      disabled: disabled || isRefreshing,
      tooltip: t.get("common.refresh"),
      tooltipSide: "bottom",
      "aria-label": t.get("common.refresh"),
      children: ($$renderer3) => {
        Refresh_ccw($$renderer3, { class: isRefreshing ? "animate-spin" : "", size: 16 });
      },
      $$slots: { default: true }
    });
  });
}

export { Refresh_page_data as R };
//# sourceMappingURL=refresh-page-data-Pe9-_b8S.js.map
