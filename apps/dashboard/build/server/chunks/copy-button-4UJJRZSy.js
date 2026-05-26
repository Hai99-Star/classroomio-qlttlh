import { c as bind_props, b as spread_props, p as clsx$1 } from './index2-Eg0dVEDW.js';
import { B as Button } from './button-McsHA0hU.js';
import { t as twMerge } from './index6-DijlZyMe.js';
import { C as Check } from './check-92w5ryLF.js';
import { X } from './x2-B8ExpX8J.js';
import { C as Copy } from './copy2-MZgWu04s.js';

class UseClipboard {
  #copiedStatus;
  delay;
  timeout = void 0;
  constructor({ delay = 500 } = {}) {
    this.delay = delay;
  }
  /** Copies the given text to the users clipboard.
   *
   * ## Usage
   * ```ts
   * clipboard.copy('Hello, World!');
   * ```
   *
   * @param text
   * @returns
   */
  async copy(text) {
    if (this.timeout) {
      this.#copiedStatus = void 0;
      clearTimeout(this.timeout);
    }
    this.#copiedStatus = await copyText(text);
    this.timeout = setTimeout(
      () => {
        this.#copiedStatus = void 0;
      },
      this.delay
    );
    return this.#copiedStatus;
  }
  /** true when the user has just copied to the clipboard. */
  get copied() {
    return this.#copiedStatus === "success";
  }
  /**	Indicates whether a copy has occurred
   * and gives a status of either `success` or `failure`. */
  get status() {
    return this.#copiedStatus;
  }
}
async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return "success";
    }
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful ? "success" : "failure";
  } catch {
    return "failure";
  }
}
function cn(...inputs) {
  return twMerge(clsx$1(inputs));
}
function Copy_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      text,
      icon,
      animationDuration = 500,
      variant = "ghost",
      size = "icon",
      onCopy,
      class: className,
      tabindex = -1,
      children,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const resolvedSize = size === "icon" && children ? "default" : size;
    const clipboard = new UseClipboard();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Button($$renderer3, spread_props([
        rest,
        {
          variant,
          size: resolvedSize,
          tabindex,
          class: cn("ui:flex ui:items-center ui:gap-2", className),
          type: "button",
          name: "copy",
          onclick: async () => {
            const status = await clipboard.copy(text);
            onCopy?.(status);
          },
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            if (clipboard.status === "success") {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div>`);
              Check($$renderer4, { tabindex: -1 });
              $$renderer4.push(`<!----> <span class="sr-only">Copied</span></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              if (clipboard.status === "failure") {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<div>`);
                X($$renderer4, { tabindex: -1 });
                $$renderer4.push(`<!----> <span class="sr-only">Failed to copy</span></div>`);
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push(`<div>`);
                if (icon) {
                  $$renderer4.push("<!--[-->");
                  icon($$renderer4);
                  $$renderer4.push(`<!---->`);
                } else {
                  $$renderer4.push("<!--[!-->");
                  Copy($$renderer4, { tabindex: -1 });
                }
                $$renderer4.push(`<!--]--> <span class="sr-only">Copy</span></div>`);
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]--> `);
            children?.($$renderer4);
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}

export { Copy_button as C };
//# sourceMappingURL=copy-button-4UJJRZSy.js.map
