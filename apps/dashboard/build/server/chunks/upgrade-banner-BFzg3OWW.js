import { a as store_get, u as unsubscribe_stores, e as stringify, g as attributes } from './index2-Eg0dVEDW.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import { d as isFreePlan } from './org-t71AQfHV.js';
import { I as Item_actions } from './item-actions-BlOLR7EV.js';
import { I as Item_content } from './item-content--fxXSxOv.js';
import './index6-DijlZyMe.js';
import { I as Item, a as Item_media } from './item-CUOTGwjL.js';
import { I as Item_title } from './item-title-BLGVIel8.js';
import { H as Hoverable_item } from './hoverable-item-DbC0eVyl.js';
import { P as Premium } from './premium-RvNiV2QP.js';
import { C as Chevron_right } from './chevron-right-C3Al4Cvl.js';

function Upgrade_banner($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      className = "",
      onClick = () => {
      },
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    if (store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan)) {
      $$renderer2.push("<!--[-->");
      {
        let children = function($$renderer3, isHovered) {
          $$renderer3.push(`<!---->`);
          {
            let child = function($$renderer4, { props }) {
              $$renderer4.push(`<button${attributes({ ...props })}><!---->`);
              Item_media($$renderer4, {
                variant: "icon",
                children: ($$renderer5) => {
                  Premium($$renderer5, { isHovered, size: 20, class: "text-blue-700 dark:text-white" });
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <!---->`);
              Item_content($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Item_title($$renderer5, {
                    class: "text-blue-700! dark:text-white!",
                    children: ($$renderer6) => {
                      restProps.children?.($$renderer6);
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <!---->`);
              Item_actions($$renderer4, {
                children: ($$renderer5) => {
                  Chevron_right($$renderer5, { class: "size-4 text-blue-700! dark:text-white!" });
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----></button>`);
            };
            Item($$renderer3, {
              variant: "outline",
              size: "sm",
              class: `h-fit w-full border-blue-700! py-2! ${stringify(className)}`,
              child,
              $$slots: { child: true }
            });
          }
          $$renderer3.push(`<!---->`);
        };
        Hoverable_item($$renderer2, { children });
      }
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Upgrade_banner as U };
//# sourceMappingURL=upgrade-banner-BFzg3OWW.js.map
