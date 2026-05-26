import { l as attr_class, d as attr, j as clsx } from './index2-Eg0dVEDW.js';

/* empty css                                  */
function Home($$renderer, $$props) {
  let {
    isHovered = false,
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    ariaHidden = false,
    class: className = ""
  } = $$props;
  let pulseFromMouseEnter = false;
  const iconAnimates = isHovered || pulseFromMouseEnter;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-p9wgm2")}${attr("aria-hidden", ariaHidden ? true : void 0)}${attr("aria-label", ariaHidden ? void 0 : "house")}${attr("role", ariaHidden ? void 0 : "img")}><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("house-icon svelte-p9wgm2", void 0, { "animate": iconAnimates })}><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" class="svelte-p9wgm2"></path><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" class="door svelte-p9wgm2"></path></svg></div>`);
}

export { Home as H };
//# sourceMappingURL=home-C9RNcUNP.js.map
