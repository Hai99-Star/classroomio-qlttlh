import { l as attr_class, d as attr, j as clsx } from './index2-Eg0dVEDW.js';

/* empty css                                  */
function News_feed($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered = false,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-a36in")} aria-label="message-circle-more" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("message-circle-more-icon svelte-a36in", void 0, { "animate": isHovered })}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" class="svelte-a36in"></path><path d="M8 12h.01" class="dot dot1 svelte-a36in"></path><path d="M12 12h.01" class="dot dot2 svelte-a36in"></path><path d="M16 12h.01" class="dot dot3 svelte-a36in"></path></svg></div>`);
}

export { News_feed as N };
//# sourceMappingURL=news-feed-DASXVKG8.js.map
