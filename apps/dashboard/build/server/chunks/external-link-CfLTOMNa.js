import { l as attr_class, d as attr, j as clsx } from './index2-Eg0dVEDW.js';

/* empty css                                  */
function External_link($$renderer, $$props) {
  let {
    isHovered = false,
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    ariaHidden = false,
    class: className = ""
  } = $$props;
  let pulseFromMouseEnter = false;
  const arrowAnimates = isHovered || pulseFromMouseEnter;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-yh2qif")}${attr("aria-hidden", ariaHidden ? true : void 0)}${attr("aria-label", ariaHidden ? void 0 : "square-arrow-out-up-right")}${attr("role", ariaHidden ? void 0 : "img")}><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round" class="svelte-yh2qif"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" class="svelte-yh2qif"></path><g${attr_class("arrow svelte-yh2qif", void 0, { "animate": arrowAnimates })}><path d="m21 3-9 9" class="svelte-yh2qif"></path><path d="M15 3h6v6" class="svelte-yh2qif"></path></g></svg></div>`);
}

export { External_link as E };
//# sourceMappingURL=external-link-CfLTOMNa.js.map
