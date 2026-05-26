import { l as attr_class, d as attr, m as attr_style, j as clsx, e as stringify, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { s as spring } from './spring-CMJ2WkAz.js';

/* empty css                                  */
function People($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      isHovered = false,
      class: className = ""
    } = $$props;
    const animatedX = spring(0, { stiffness: 200, damping: 13 });
    $$renderer2.push(`<div${attr_class(clsx(className), "svelte-16lu4ru")} aria-label="users" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round" class="users-icon svelte-16lu4ru"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" class="svelte-16lu4ru"></path><circle cx="9" cy="7" r="4" class="svelte-16lu4ru"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"${attr_style(`transform: translateX(${stringify(store_get($$store_subs ??= {}, "$animatedX", animatedX))}px)`)} class="svelte-16lu4ru"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"${attr_style(`transform: translateX(${stringify(store_get($$store_subs ??= {}, "$animatedX", animatedX))}px)`)} class="svelte-16lu4ru"></path></svg></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { People as P };
//# sourceMappingURL=people-DwBXfNtv.js.map
