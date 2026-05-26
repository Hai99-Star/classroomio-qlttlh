import { l as attr_class, e as stringify } from './index2-Eg0dVEDW.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-CG2pdu70.js';

function User_avatar($$renderer, $$props) {
  let {
    src,
    alt = "User",
    class: className = "size-6",
    iconClass = ""
  } = $$props;
  $$renderer.push(`<!---->`);
  Avatar($$renderer, {
    class: className,
    children: ($$renderer2) => {
      if (src) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<!---->`);
        Avatar_image($$renderer2, { src, alt });
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <!---->`);
      Avatar_fallback($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<img src="/images/avatar.svg" alt="User avatar"${attr_class(`size-10 rounded-md ${stringify(iconClass)}`)}/>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}

export { User_avatar as U };
//# sourceMappingURL=user-avatar-C553w_lG.js.map
