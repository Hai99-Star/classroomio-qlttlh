import { c as bind_props, n as escape_html, a as store_get, f as ensure_array_like, b as spread_props, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { R as Root, P as Popover_trigger, a as Popover_content } from './index9-C_LBahdk.js';
import { T as Toggle_group } from './toggle-group-DvhNC--2.js';
import { T as Toggle_group_item } from './toggle-group-item-BLEzxLjD.js';
import { B as Button, S as Spinner } from './button-McsHA0hU.js';
import { t } from './translations-BxDrjLWK.js';
import { F as Funnel } from './funnel-ChFWBndh.js';

function Sort_popover($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      sortOptions,
      sortKey = "",
      selectedOrder = "desc",
      defaultSortKey = "",
      defaultSortOrder = "desc",
      isFiltering = false,
      hasActiveFilters,
      title,
      onClearFilters = () => {
      },
      onSortKeyChange,
      onOrderChange,
      additionalContent
    } = $$props;
    let isOpen = false;
    const isActive = hasActiveFilters !== void 0 ? hasActiveFilters : sortKey !== defaultSortKey || selectedOrder !== defaultSortOrder;
    function setSortKey(value) {
      sortKey = value;
      onSortKeyChange?.(value);
    }
    function setOrder(value) {
      if (value === "asc" || value === "desc") {
        selectedOrder = value;
        onOrderChange?.(value);
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
        get open() {
          return isOpen;
        },
        set open($$value) {
          isOpen = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          {
            let child = function($$renderer5, { props }) {
              $$renderer5.push(`<div class="relative">`);
              Button($$renderer5, spread_props([
                props,
                {
                  variant: "outline",
                  size: "sm",
                  "aria-label": store_get($$store_subs ??= {}, "$t", t)("courses.tag_filters.filter"),
                  children: ($$renderer6) => {
                    if (isFiltering) {
                      $$renderer6.push("<!--[-->");
                      Spinner($$renderer6, { class: "size-4" });
                    } else {
                      $$renderer6.push("<!--[!-->");
                      Funnel($$renderer6, { size: 16 });
                    }
                    $$renderer6.push(`<!--]--> <span class="hidden md:inline">${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.tag_filters.filter"))}</span>`);
                  },
                  $$slots: { default: true }
                }
              ]));
              $$renderer5.push(`<!----> `);
              if (isActive) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<span class="ui:bg-primary absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-white" aria-hidden="true"></span>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--></div>`);
            };
            Popover_trigger($$renderer4, { child, $$slots: { child: true } });
          }
          $$renderer4.push(`<!----> <!---->`);
          Popover_content($$renderer4, {
            align: "end",
            class: "w-[360px] p-3",
            children: ($$renderer5) => {
              $$renderer5.push(`<div class="space-y-4"><div class="flex items-center justify-between gap-2"><p class="text-sm font-semibold">${escape_html(title ?? store_get($$store_subs ??= {}, "$t", t)("courses.tag_filters.popover_title"))}</p> `);
              Button($$renderer5, {
                variant: "link",
                class: "h-auto p-0",
                onclick: onClearFilters,
                disabled: !isActive,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.tag_filters.clear_all"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div> `);
              if (sortOptions.length > 0) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="space-y-2"><p class="ui:text-muted-foreground text-xs font-semibold uppercase">${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.tag_filters.sort"))}</p> <div class="flex flex-wrap gap-2"><!--[-->`);
                const each_array = ensure_array_like(sortOptions);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let option = each_array[$$index];
                  Button($$renderer5, {
                    type: "button",
                    size: "sm",
                    variant: sortKey === option.value ? "secondary" : "outline",
                    onclick: () => setSortKey(option.value),
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(option.label)}`);
                    },
                    $$slots: { default: true }
                  });
                }
                $$renderer5.push(`<!--]--></div></div> <div class="space-y-2"><p class="ui:text-muted-foreground text-xs font-semibold uppercase">${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.tag_filters.order"))}</p> <!---->`);
                Toggle_group($$renderer5, {
                  type: "single",
                  variant: "outline",
                  size: "sm",
                  value: selectedOrder,
                  onValueChange: setOrder,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->`);
                    Toggle_group_item($$renderer6, {
                      value: "asc",
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.tag_filters.ascending"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> <!---->`);
                    Toggle_group_item($$renderer6, {
                      value: "desc",
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.tag_filters.descending"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> `);
              additionalContent?.($$renderer5);
              $$renderer5.push(`<!----></div>`);
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
    bind_props($$props, { sortKey, selectedOrder });
  });
}

export { Sort_popover as S };
//# sourceMappingURL=sort-popover-BhcP8GRW.js.map
