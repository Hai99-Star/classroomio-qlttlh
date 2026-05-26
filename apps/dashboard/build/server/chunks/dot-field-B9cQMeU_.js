import { l as attr_class, m as attr_style, d as attr, j as clsx, e as stringify } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';

function Dot_field($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      dotRadius = 1.5,
      dotSpacing = 14,
      cursorRadius = 500,
      cursorForce = 0.1,
      bulgeOnly = true,
      bulgeStrength = 67,
      glowRadius = 160,
      sparkle = false,
      waveAmplitude = 0,
      glowColor,
      maxGlowOpacity = 0.2,
      class: className = ""
    } = $$props;
    const glowId = `dot-field-glow-${crypto.randomUUID().slice(0, 10)}`;
    $$renderer2.push(`<div${attr_class(clsx(cn("relative h-full w-full", glowColor == null && "ui:[--dot-field-glow:#fff] ui:dark:[--dot-field-glow:#0a0a0a]", className)))}${attr_style(glowColor != null ? `--dot-field-glow: ${glowColor}` : void 0)}><canvas class="absolute inset-0 h-full w-full"></canvas> <svg class="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true"><defs><radialGradient${attr("id", glowId)}><stop offset="0%" stop-color="var(--dot-field-glow, #fff)"></stop><stop offset="100%" stop-color="var(--dot-field-glow, #fff)"></stop></radialGradient></defs><circle cx="-9999" cy="-9999"${attr("r", glowRadius)}${attr("fill", `url(#${stringify(glowId)})`)}${attr_style("", { opacity: "0", "will-change": "opacity" })}></circle></svg></div>`);
  });
}

export { Dot_field as D };
//# sourceMappingURL=dot-field-B9cQMeU_.js.map
