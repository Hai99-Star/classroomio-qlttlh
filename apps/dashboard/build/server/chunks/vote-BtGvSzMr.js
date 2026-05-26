import { C as Chip } from './chip-BZT61Rcy.js';
import { B as Button } from './button-McsHA0hU.js';
import { A as Arrow_up } from './arrow-up-BAkVUkU1.js';

function Vote($$renderer, $$props) {
  let { value = 0, upVote = () => {
  }, disabled = false } = $$props;
  Button($$renderer, {
    onclick: disabled ? void 0 : upVote,
    disabled,
    variant: "ghost",
    class: "h-fit! flex-col",
    children: ($$renderer2) => {
      Arrow_up($$renderer2, { size: 16 });
      $$renderer2.push(`<!----> `);
      Chip($$renderer2, { value });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
}

export { Vote as V };
//# sourceMappingURL=vote-BtGvSzMr.js.map
