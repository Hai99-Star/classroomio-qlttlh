import { c as bind_props, n as escape_html } from './index2-Eg0dVEDW.js';
import './index6-DijlZyMe.js';
import { F as Field_description } from './field-description-yPSV800w.js';
import { F as Field_label, a as Field_error } from './field-label-BEb0I1_z.js';
import { F as Field } from './field-BxJz8KV9.js';
import { I as Input } from './input-CkarY5WD.js';

function Input_field($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      label = "",
      placeholder = "",
      value = void 0,
      name = "",
      onKeyDown = (_e) => {
      },
      className = "",
      labelClassName = "",
      inputClassName = "",
      type = "text",
      autoFocus = false,
      isRequired = false,
      isDisabled = false,
      min = void 0,
      max = void 0,
      step = void 0,
      maxLength = void 0,
      errorMessage = "",
      helperMessage = "",
      autoComplete = true,
      onchange = () => {
      },
      onInputChange = () => {
      },
      labelAction
    } = $$props;
    let inputRef = null;
    function handleInputChange(e) {
      onInputChange(e);
    }
    function handleBlur(e) {
      onchange(e);
    }
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
              for: name || "input-field",
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
          Input($$renderer4, {
            class: inputClassName,
            id: name || "input-field",
            type,
            placeholder,
            name,
            min,
            max,
            step,
            maxlength: maxLength,
            required: isRequired,
            disabled: isDisabled,
            autocomplete: autoComplete ? "on" : "off",
            "aria-invalid": errorMessage ? "true" : void 0,
            onkeydown: onKeyDown,
            onchange: handleInputChange,
            onblur: handleBlur,
            get ref() {
              return inputRef;
            },
            set ref($$value) {
              inputRef = $$value;
              $$settled = false;
            },
            get value() {
              return value;
            },
            set value($$value) {
              value = $$value;
              $$settled = false;
            }
          });
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
    bind_props($$props, { value, type });
  });
}

export { Input_field as I };
//# sourceMappingURL=input-field-w4kZespe.js.map
