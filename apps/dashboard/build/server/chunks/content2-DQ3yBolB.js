import { l as attr_class, d as attr, j as clsx } from './index2-Eg0dVEDW.js';

/* empty css                                  */
function Content($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered = false,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-32o5je")} aria-label="book-type" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("book-type-icon svelte-32o5je", void 0, { "animate": isHovered })}><path d="M10 13h4" class="svelte-32o5je"></path><path d="M12 6v7" class="svelte-32o5je"></path><path d="M16 8V6H8v2" class="svelte-32o5je"></path><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" class="svelte-32o5je"></path></svg></div>`);
}

export { Content as C };
//# sourceMappingURL=content2-DQ3yBolB.js.map
