import { l as attr_class, j as clsx } from './index2-Eg0dVEDW.js';

function Hoverable_item($$renderer, $$props) {
  let { children, class: className = "" } = $$props;
  let isHovered = false;
  $$renderer.push(`<div role="presentation"${attr_class(clsx(className))}>`);
  children($$renderer, isHovered);
  $$renderer.push(`<!----></div>`);
}

export { Hoverable_item as H };
//# sourceMappingURL=hoverable-item-DbC0eVyl.js.map
