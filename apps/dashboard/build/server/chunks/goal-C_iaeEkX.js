import { l as attr_class, d as attr, j as clsx } from './index2-Eg0dVEDW.js';

/* empty css                                  */
function Goal($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered = false,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-1ok685u")} aria-label="list-checks" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("list-checks-icon svelte-1ok685u", void 0, { "animate": isHovered })}><path d="M3 17l2 2 4-4" class="check-path svelte-1ok685u"></path><path d="M3 7l2 2 4-4" class="check-path svelte-1ok685u"></path><path d="M13 6h8" class="svelte-1ok685u"></path><path d="M13 12h8" class="svelte-1ok685u"></path><path d="M13 18h8" class="svelte-1ok685u"></path></svg></div>`);
}

export { Goal as G };
//# sourceMappingURL=goal-C_iaeEkX.js.map
