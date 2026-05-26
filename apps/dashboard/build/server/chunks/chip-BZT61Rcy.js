import { n as escape_html } from './index2-Eg0dVEDW.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { c as cn } from './index6-DijlZyMe.js';

function Chip($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = 0, className = "" } = $$props;
    Badge($$renderer2, {
      class: cn("ui:h-5 ui:min-w-5 ui:rounded-full ui:px-1 ui:font-mono tabular-nums", className),
      variant: "outline",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(value)}`);
      },
      $$slots: { default: true }
    });
  });
}

export { Chip as C };
//# sourceMappingURL=chip-BZT61Rcy.js.map
