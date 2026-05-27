import { c as bind_props, n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { B as Button } from './button-McsHA0hU.js';
import { t } from './translations-BxDrjLWK.js';
import { R as Root, D as Dialog_content } from './index7-D3vVTB5p.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-D1aNdwc5.js';

function Delete_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { open = false, onDelete = () => {
    }, isLoading = false } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
        onOpenChange: (isOpen) => {
          if (!isOpen && !isLoading) open = false;
        },
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "w-96 p-6",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                class: "p-2",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("delete_modal.label"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div><p class="text-center text-xl dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("delete_modal.content"))}</p> <div class="mt-8 flex items-center justify-between">`);
              Button($$renderer5, {
                variant: "outline",
                onclick: () => open = false,
                disabled: isLoading,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("delete_modal.no"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Button($$renderer5, {
                variant: "destructive",
                onclick: onDelete,
                loading: isLoading,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("delete_modal.yes"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { open });
  });
}

export { Delete_modal as D };
//# sourceMappingURL=delete-modal-C6-WN6zg.js.map
