import { g as attributes, d as attr, j as clsx } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Dot_pattern($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      width = 16,
      height = 16,
      x = 0,
      y = 0,
      cx = 1,
      cy = 1,
      cr = 1,
      fillColor = "rgb(163 163 163 / 0.8)",
      class: className = "",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const patternId = crypto.randomUUID().toString().slice(0, 10);
    $$renderer2.push(`<svg${attributes(
      {
        "aria-hidden": "true",
        class: clsx(cn("pointer-events-none absolute inset-0 h-full w-full", className)),
        ...restProps,
        fill: fillColor
      },
      void 0,
      void 0,
      void 0,
      3
    )}><defs><pattern${attr("id", patternId)}${attr("width", width)}${attr("height", height)} patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse"${attr("x", x)}${attr("y", y)}><circle id="pattern-circle"${attr("cx", cx)}${attr("cy", cy)}${attr("r", cr)}></circle></pattern></defs><rect width="100%" height="100%"${attr("stroke-width", 0)}${attr("fill", `url(#${patternId})`)}></rect></svg>`);
  });
}

export { Dot_pattern as D };
//# sourceMappingURL=dot-pattern-BsrHOSuA.js.map
