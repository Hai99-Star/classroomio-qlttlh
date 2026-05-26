import { l as attr_class, d as attr, j as clsx } from './index2-Eg0dVEDW.js';

/* empty css                                  */
function Lesson($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered = false,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-kyda4h")} aria-label="book-open-text" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("book-open-text-icon svelte-kyda4h", void 0, { "animate": isHovered })}><path d="M12 7v14" class="center-line svelte-kyda4h"></path><path d="M16 12h2" class="text-line text-line-right-bottom svelte-kyda4h"></path><path d="M16 8h2" class="text-line text-line-right-top svelte-kyda4h"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" class="book-path svelte-kyda4h"></path><path d="M6 12h2" class="text-line text-line-left-bottom svelte-kyda4h"></path><path d="M6 8h2" class="text-line text-line-left-top svelte-kyda4h"></path></svg></div>`);
}

export { Lesson as L };
//# sourceMappingURL=lesson-CRrxCXoW.js.map
