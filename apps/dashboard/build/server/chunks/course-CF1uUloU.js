import { l as attr_class, d as attr, j as clsx } from './index2-Eg0dVEDW.js';

/* empty css                                  */
function Course($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered = false,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-lzhbus")} aria-label="book-text" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("book-text-icon svelte-lzhbus", void 0, { "animate": isHovered })}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" class="svelte-lzhbus"></path><path d="M8 11h8" class="ui:text-line ui:text-line-1 svelte-lzhbus"></path><path d="M8 7h6" class="ui:text-line ui:text-line-2 svelte-lzhbus"></path></svg></div>`);
}

export { Course as C };
//# sourceMappingURL=course-CF1uUloU.js.map
