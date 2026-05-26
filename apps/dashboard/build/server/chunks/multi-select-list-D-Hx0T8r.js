import { c as bind_props, l as attr_class, j as clsx, n as escape_html, f as ensure_array_like, d as attr } from './index2-Eg0dVEDW.js';
import { S as Spinner } from './button-McsHA0hU.js';
import { C as Checkbox } from './checkbox-DZ3KH0FC.js';
import { I as Input_field } from './input-field-w4kZespe.js';
import { c as cn } from './index6-DijlZyMe.js';
import { S as Search } from './search3-D8xoPsxt.js';

function Checkbox_field($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      label = "",
      value = "",
      checked = false,
      name = "",
      isEditable = false,
      disabled = false,
      className = "",
      onchange = () => {
      },
      onclick,
      children
    } = $$props;
    const rowClass = cn("group ui:inline-flex ui:w-full ui:items-center ui:hover:bg-muted ui:rounded-md ui:p-2 ui:text-left", disabled ? "cursor-not-allowed" : "cursor-pointer", className);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (onclick !== void 0) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div${attr_class(clsx(rowClass))} role="button"${attr("tabindex", disabled ? -1 : 0)}${attr("aria-pressed", checked)}${attr("aria-disabled", disabled ? true : void 0)}>`);
        Checkbox($$renderer3, {
          class: "ui:pointer-events-none",
          name,
          value,
          disabled: disabled || isEditable,
          get checked() {
            return checked;
          },
          set checked($$value) {
            checked = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> `);
        if (isEditable) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="ui:w-2/4">`);
          Input_field($$renderer3, {
            placeholder: "Your option",
            className: "ui:ml-1",
            type: "text",
            onchange,
            get value() {
              return label;
            },
            set value($$value) {
              label = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<span class="ui:ml-2 ui:dark:text-white ui:text-sm">${escape_html(label)}</span>`);
        }
        $$renderer3.push(`<!--]--> `);
        children?.($$renderer3);
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        if (isEditable) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div${attr_class(clsx(rowClass))}>`);
          Checkbox($$renderer3, {
            name,
            value,
            disabled: disabled || isEditable,
            get checked() {
              return checked;
            },
            set checked($$value) {
              checked = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> <div class="ui:w-2/4">`);
          Input_field($$renderer3, {
            placeholder: "Your option",
            className: "ui:ml-1",
            type: "text",
            onchange,
            get value() {
              return label;
            },
            set value($$value) {
              label = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div> `);
          children?.($$renderer3);
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<label${attr_class(clsx(rowClass))}>`);
          Checkbox($$renderer3, {
            name,
            value,
            disabled,
            get checked() {
              return checked;
            },
            set checked($$value) {
              checked = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> <span class="ui:ml-2 ui:dark:text-white ui:text-sm">${escape_html(label)}</span> `);
          children?.($$renderer3);
          $$renderer3.push(`<!----></label>`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { label, checked });
  });
}
function Multi_select_list($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      heading = "",
      headingSnippet,
      emptyMessage,
      items,
      isLoading = false,
      isSelected,
      onToggle,
      namePrefix = "multi-select",
      class: className,
      listClass,
      searchPlaceholder = "",
      searchValue = "",
      onSearchValueChange
    } = $$props;
    const hasHeading = heading || headingSnippet;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div data-slot="multi-select-list"${attr_class(clsx(cn("ui:border-border ui:space-y-3 ui:rounded-md ui:border", className)))}>`);
      if (hasHeading || searchPlaceholder) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div${attr_class(clsx(cn("ui:border-border ui:flex ui:gap-3 ui:border-b ui:px-2 ui:py-2 ui:items-center ui:justify-between", !hasHeading && "ui:justify-end")))}>`);
        if (heading) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="ui:text-sm ui:font-medium">${escape_html(heading)} (${escape_html(items.length)})</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (headingSnippet) {
            $$renderer3.push("<!--[-->");
            headingSnippet($$renderer3);
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--> `);
        if (searchPlaceholder) {
          $$renderer3.push("<!--[-->");
          Search($$renderer3, {
            placeholder: searchPlaceholder,
            onValueChange: onSearchValueChange,
            class: "ui:w-full ui:max-w-sm",
            get value() {
              return searchValue;
            },
            set value($$value) {
              searchValue = $$value;
              $$settled = false;
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (isLoading) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="ui:flex ui:min-h-40 ui:items-center ui:justify-center ui:px-2 ui:pb-2">`);
        Spinner($$renderer3, { class: "ui:size-5 ui:text-muted-foreground" });
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        if (items.length === 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="ui:text-muted-foreground ui:px-2 ui:pb-2 ui:text-sm">${escape_html(emptyMessage)}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div data-slot="multi-select-list-items"${attr_class(clsx(cn("ui:max-h-60 ui:space-y-2 ui:overflow-y-auto ui:px-2 ui:pb-2", listClass)))}><!--[-->`);
          const each_array = ensure_array_like(items);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            Checkbox_field($$renderer3, {
              name: `${namePrefix}-${item.id}`,
              label: item.label || item.id,
              checked: isSelected(item.id),
              onclick: () => onToggle(item.id),
              children: ($$renderer4) => {
                if (item.description) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<p class="ui:ml-2 ui:text-muted-foreground ui:text-sm">${escape_html(item.description)}</p>`);
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
          }
          $$renderer3.push(`<!--]--></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { searchValue });
  });
}

export { Checkbox_field as C, Multi_select_list as M };
//# sourceMappingURL=multi-select-list-D-Hx0T8r.js.map
