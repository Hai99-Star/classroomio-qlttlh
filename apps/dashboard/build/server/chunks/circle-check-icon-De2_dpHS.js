import { d as attr, l as attr_class, e as stringify } from './index2-Eg0dVEDW.js';

/* empty css                                                */
function Circle_check_icon($$renderer, $$props) {
  let { filled, size = 16 } = $$props;
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${attr_class(`custom lucide-icon lucide lucide-circle-check ${stringify(filled ? "filled" : "")}`, "svelte-1syjwo8")}><circle cx="12" cy="12" r="10" class="svelte-1syjwo8"></circle><path d="m9 12 2 2 4-4" class="svelte-1syjwo8"></path></svg>`);
}

export { Circle_check_icon as C };
//# sourceMappingURL=circle-check-icon-De2_dpHS.js.map
