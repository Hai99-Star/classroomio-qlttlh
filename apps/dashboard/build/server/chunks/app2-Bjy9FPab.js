import { l as attr_class, d as attr, j as clsx } from './index2-Eg0dVEDW.js';

/* empty css                                  */
function Community($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered = false,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-kpi0la")} aria-label="message-square-more" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("message-square-more-icon svelte-kpi0la", void 0, { "animate": isHovered })}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" class="svelte-kpi0la"></path><path class="dot dot1 svelte-kpi0la" d="M8 10h.01"></path><path class="dot dot2 svelte-kpi0la" d="M12 10h.01"></path><path class="dot dot3 svelte-kpi0la" d="M16 10h.01"></path></svg></div>`);
}
class SearchStore {
  isOpen = false;
  scope = "org";
  open(scope = "org") {
    this.scope = scope;
    this.isOpen = true;
  }
  close() {
    this.isOpen = false;
  }
  toggle(scope = "org") {
    this.scope = scope;
    this.isOpen = !this.isOpen;
  }
}
const searchStore = new SearchStore();
function isActive(pagePath, itemPath, matchPattern, exact = false) {
  if (matchPattern) {
    try {
      const regex = new RegExp(matchPattern);
      return regex.test(pagePath);
    } catch (error) {
      console.warn("Invalid regex pattern in isActive:", matchPattern, error);
    }
  }
  const normalizedPagePath = pagePath === "/" ? "/" : pagePath.replace(/\/$/, "");
  const normalizedItemPath = itemPath === "/" ? "/" : itemPath.replace(/\/$/, "");
  if (exact) {
    return normalizedPagePath === normalizedItemPath;
  }
  if (normalizedPagePath === normalizedItemPath) {
    return true;
  }
  const pagePathWithSlash = normalizedPagePath + "/";
  const itemPathWithSlash = normalizedItemPath + "/";
  return pagePathWithSlash.startsWith(itemPathWithSlash);
}

export { Community as C, isActive as i, searchStore as s };
//# sourceMappingURL=app2-Bjy9FPab.js.map
