import { l as attr_class, d as attr, j as clsx } from './index2-Eg0dVEDW.js';

/* empty css                                  */
function Exercise($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered = false,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-jrnmxb")} aria-label="list-todo" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("list-todo-icon svelte-jrnmxb", void 0, { "animate": isHovered })}><rect x="3" y="5" width="6" height="6" rx="1" class="svelte-jrnmxb"></rect><path d="M3 17l2 2 4-4" class="check-path svelte-jrnmxb"></path><path d="M13 6h8" class="svelte-jrnmxb"></path><path d="M13 12h8" class="svelte-jrnmxb"></path><path d="M13 18h8" class="svelte-jrnmxb"></path></svg></div>`);
}

export { Exercise as E };
//# sourceMappingURL=exercise-8V9pDq65.js.map
