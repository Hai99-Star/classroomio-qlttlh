import { S as Spinner } from './button-McsHA0hU.js';
import { I as Icon_button } from './icon-button-Bm-ZFVBt.js';
import { C as Close } from './states.svelte-BI9DWQmF.js';

function Close_btn($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { onClick = () => {
    }, isClosing = false, tooltip } = $$props;
    function handleClick() {
      onClick("");
    }
    Icon_button($$renderer2, {
      tooltip,
      onclick: handleClick,
      disabled: isClosing,
      children: ($$renderer3) => {
        if (isClosing) {
          $$renderer3.push("<!--[-->");
          Spinner($$renderer3, { class: "size-5 text-blue-700!" });
        } else {
          $$renderer3.push("<!--[!-->");
          Close($$renderer3, { size: 16, class: "[&_svg]:dark:text-white" });
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
  });
}

export { Close_btn as C };
//# sourceMappingURL=close-btn-mfLuzc3c.js.map
