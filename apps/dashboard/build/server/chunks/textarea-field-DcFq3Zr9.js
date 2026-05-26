import { c as bind_props, n as escape_html, b as spread_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { F as Field_description } from './field-description-yPSV800w.js';
import { F as Field_label, a as Field_error } from './field-label-BEb0I1_z.js';
import { F as Field } from './field-BxJz8KV9.js';
import { T as Textarea } from './textarea-CfVjMEtO.js';

function Textarea_field($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      label = "",
      labelClassName = "",
      helperMessage = "",
      errorMessage = "",
      isRequired = false,
      className = "",
      bgColor = "",
      labelAction,
      iconbutton,
      value = void 0,
      $$slots,
      $$events,
      ...textareaProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Field($$renderer3, {
        class: className,
        children: ($$renderer4) => {
          if (label) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<div class="flex items-center justify-between"><!---->`);
            Field_label($$renderer4, {
              class: labelClassName,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(label)} `);
                if (isRequired) {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<span class="ui:text-red-700">*</span>`);
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            labelAction?.($$renderer4);
            $$renderer4.push(`<!----></div>`);
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]--> `);
          Textarea($$renderer4, spread_props([
            {
              class: cn(bgColor, errorMessage ? "ui:border-red-500" : ""),
              "aria-invalid": errorMessage ? "true" : void 0
            },
            textareaProps,
            {
              get value() {
                return value;
              },
              set value($$value) {
                value = $$value;
                $$settled = false;
              }
            }
          ]));
          $$renderer4.push(`<!----> `);
          if (errorMessage) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<!---->`);
            Field_error($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(errorMessage)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          } else {
            $$renderer4.push("<!--[!-->");
            if (helperMessage) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<!---->`);
              Field_description($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(helperMessage)}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]-->`);
          }
          $$renderer4.push(`<!--]--> `);
          iconbutton?.($$renderer4);
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
    bind_props($$props, { value });
  });
}

export { Textarea_field as T };
//# sourceMappingURL=textarea-field-DcFq3Zr9.js.map
