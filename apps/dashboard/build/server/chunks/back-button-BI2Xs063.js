import { n as escape_html } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { B as Button } from './button-McsHA0hU.js';
import { A as Arrow_left } from './arrow-left2-Dl6-kuJA.js';

function Back_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { href, label, class: className } = $$props;
    Button($$renderer2, {
      variant: "link",
      class: cn("ui:h-fit! ui:justify-start! ui:p-0", className),
      href,
      children: ($$renderer3) => {
        Arrow_left($$renderer3, { class: "custom" });
        $$renderer3.push(`<!----> `);
        if (label) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<span class="ui:text-xs">${escape_html(label)}</span>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
  });
}

export { Back_button as B };
//# sourceMappingURL=back-button-BI2Xs063.js.map
