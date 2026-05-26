import { g as attributes, a as store_get, n as escape_html, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-CG2pdu70.js';
import './index6-DijlZyMe.js';
import { g as Sidebar_menu, h as Sidebar_menu_item } from './sidebar-trigger-DiPCRN_T.js';
import { S as Sidebar_menu_button } from './states.svelte-CIWoDLSQ.js';
import { S as Skeleton } from './skeleton-EXMKyyjB.js';
import './button-McsHA0hU.js';
import { c as currentOrg } from './org-BIDTy0Q0.js';
import { s as shortenName } from './string-Cj27R2Pv.js';
import { b as basePath } from './app-DrlCEKij.js';

function Org_logo($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    Sidebar_menu($$renderer2, {
      children: ($$renderer3) => {
        Sidebar_menu_item($$renderer3, {
          children: ($$renderer4) => {
            {
              let child = function($$renderer5, { props }) {
                $$renderer5.push(`<a${attributes({
                  href: store_get($$store_subs ??= {}, "$basePath", basePath),
                  ...props
                })}>`);
                if (store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name) {
                  $$renderer5.push("<!--[-->");
                  Avatar($$renderer5, {
                    class: "flex size-6! items-center justify-center rounded-md!",
                    children: ($$renderer6) => {
                      Avatar_image($$renderer6, {
                        src: store_get($$store_subs ??= {}, "$currentOrg", currentOrg).avatarUrl,
                        alt: store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name
                      });
                      $$renderer6.push(`<!----> `);
                      Avatar_fallback($$renderer6, {
                        class: "rounded-md! text-xs",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(shortenName(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <span class="truncate text-sm">${escape_html(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name)}</span>`);
                } else {
                  $$renderer5.push("<!--[!-->");
                  Skeleton($$renderer5, { class: "h-4 w-24" });
                }
                $$renderer5.push(`<!--]--></a>`);
              };
              Sidebar_menu_button($$renderer4, {
                size: "sm",
                class: "ui:data-[state=open]:bg-sidebar-accent ui:data-[state=open]:text-sidebar-accent-foreground",
                child,
                $$slots: { child: true }
              });
            }
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Org_logo as O };
//# sourceMappingURL=org-logo-BDORepaT.js.map
