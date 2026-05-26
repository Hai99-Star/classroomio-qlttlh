import { c as bind_props, f as ensure_array_like, n as escape_html, g as attributes, j as clsx } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { R as Radio_group, a as Radio_group_item } from './radio-group-item-DbkZj_3K.js';
import { F as Field_content } from './field-content-mP1-miu8.js';
import { F as Field_description } from './field-description-yPSV800w.js';
import { F as Field } from './field-BxJz8KV9.js';
import { F as Field_label } from './field-label-BEb0I1_z.js';

function Field_title($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "field-title",
      class: clsx(cn("ui:flex ui:w-fit ui:items-center ui:gap-2 ui:text-sm ui:font-medium ui:leading-snug ui:group-data-[disabled=true]/field:opacity-50", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Radio_option_card($$renderer, $$props) {
  let {
    id,
    title,
    description,
    value,
    disabled = false,
    titleSuffix,
    class: className
  } = $$props;
  $$renderer.push(`<!---->`);
  Field_label($$renderer, {
    for: id,
    class: className,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->`);
      Field($$renderer2, {
        orientation: "horizontal",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          Field_content($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Field_title($$renderer4, {
                class: "ui:flex ui:items-center ui:gap-2",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(title)} `);
                  if (titleSuffix) {
                    $$renderer5.push("<!--[-->");
                    titleSuffix($$renderer5);
                    $$renderer5.push(`<!---->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <!---->`);
              Field_description($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(description)}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <!---->`);
          Radio_group_item($$renderer3, { value, id, "aria-label": title, disabled });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}
function Radio_option_card_group($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      options,
      value = "",
      class: className,
      titleSuffix: parentTitleSuffix
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Radio_group($$renderer3, {
        class: cn("ui:grid ui:gap-3 ui:md:grid-cols-2", className),
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!--[-->`);
          const each_array = ensure_array_like(options);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let option = each_array[$$index];
            {
              let titleSuffix = function($$renderer5) {
                parentTitleSuffix?.($$renderer5, option);
                $$renderer5.push(`<!---->`);
              };
              Radio_option_card($$renderer4, {
                id: option.id,
                title: option.title,
                description: option.description,
                value: option.value,
                disabled: option.disabled,
                titleSuffix
              });
            }
          }
          $$renderer4.push(`<!--]-->`);
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
    bind_props($$props, { value });
  });
}

export { Radio_option_card_group as R };
//# sourceMappingURL=radio-option-card-group-C8ie26r6.js.map
