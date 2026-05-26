import { l as attr_class, d as attr, j as clsx, f as ensure_array_like, m as attr_style, e as stringify, g as attributes, c as bind_props, n as escape_html, b as spread_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { R as Root, P as Popover_trigger, a as Popover_content } from './index9-BwUcGQXA.js';
import { R as Root$1, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import { B as Button, I as Icon } from './button-McsHA0hU.js';
import { T as Textarea } from './textarea-CfVjMEtO.js';
import { I as Info } from './info-DS8iN8bm.js';
import { c as classroomio } from './index4-DxtvI9Cx.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { B as BaseApiWithErrors } from './base.svelte-C2lk8LDX.js';

function Sidebar_group_content($$renderer, $$props) {
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
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: clsx(cn("ui:w-full ui:text-sm", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Header($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered = false,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-1tgtzmo")} aria-label="gallery-thumbnails" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("gallery-thumbnails-icon svelte-1tgtzmo", void 0, { "animate": isHovered })}><rect width="18" height="14" x="3" y="3" rx="2" class="svelte-1tgtzmo"></rect><!--[-->`);
  const each_array = ensure_array_like(["M4 21h1", "M9 21h1", "M14 21h1", "M19 21h1"]);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let d = each_array[index];
    $$renderer.push(`<path${attr("d", d)} class="thumbnail-line svelte-1tgtzmo"${attr_style(`--index: ${stringify(index + 1)}`)}></path>`);
  }
  $$renderer.push(`<!--]--></svg></div>`);
}
function Sparkles($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.562.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
        }
      ],
      ["path", { "d": "M20 2v4" }],
      ["path", { "d": "M22 4h-4" }],
      ["circle", { "cx": "4", "cy": "20", "r": "2" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "sparkles" },
      /**
       * @component @name Sparkles
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuMDE3IDIuODE0YTEgMSAwIDAgMSAxLjk2NiAwbDEuMDUxIDUuNTU4YTIgMiAwIDAgMCAxLjU5NCAxLjU5NGw1LjU1OCAxLjA1MWExIDEgMCAwIDEgMCAxLjk2NmwtNS41NTggMS4wNTFhMiAyIDAgMCAwLTEuNTk0IDEuNTk0bC0xLjA1MSA1LjU1OGExIDEgMCAwIDEtMS45NjYgMGwtMS4wNTEtNS41NThhMiAyIDAgMCAwLTEuNTk0LTEuNTk0bC01LjU1OC0xLjA1MWExIDEgMCAwIDEgMC0xLjk2Nmw1LjU1OC0xLjA1MWEyIDIgMCAwIDAgMS41OTQtMS41OTR6IiAvPgogIDxwYXRoIGQ9Ik0yMCAydjQiIC8+CiAgPHBhdGggZD0iTTIyIDRoLTQiIC8+CiAgPGNpcmNsZSBjeD0iNCIgY3k9IjIwIiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/sparkles
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Ai_generate_popover($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { onGenerate, align = "end", class: className } = $$props;
    const TONE_STORAGE_KEY = "ai-generate-popover-tone";
    function readStoredTone() {
      try {
        const stored = localStorage.getItem(TONE_STORAGE_KEY);
        if (stored === "professional" || stored === "casual" || stored === "expert" || stored === "friendly") {
          return stored;
        }
      } catch {
      }
      return "expert";
    }
    let open = false;
    let prompt = "";
    let tone = readStoredTone();
    let loading = false;
    function handleToneChange(value) {
      tone = value;
      try {
        localStorage.setItem(TONE_STORAGE_KEY, tone);
      } catch {
      }
    }
    const toneOptions = [
      { value: "professional", label: "Professional" },
      { value: "casual", label: "Casual" },
      { value: "expert", label: "Expert" },
      { value: "friendly", label: "Friendly" }
    ];
    async function handleGenerate() {
      if (!prompt.trim() || loading) return;
      loading = true;
      try {
        await onGenerate(prompt.trim(), tone);
        open = false;
        prompt = "";
      } finally {
        loading = false;
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Popover_trigger($$renderer4, {
            children: ($$renderer5) => {
              Button($$renderer5, {
                type: "button",
                variant: "ghost",
                size: "icon",
                class: cn("ui:size-6 ui:text-muted-foreground ui:hover:text-primary", className),
                "aria-label": "Generate content with AI",
                children: ($$renderer6) => {
                  Sparkles($$renderer6, { class: "ui:size-3.5" });
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Popover_content($$renderer4, {
            align,
            sideOffset: 8,
            class: "ui:w-96 ui:p-4 ui:space-y-3",
            style: "z-index: 251",
            children: ($$renderer5) => {
              $$renderer5.push(`<div class="ui:flex ui:items-center ui:gap-2"><p class="ui:text-sm ui:font-semibold">Generate Content</p> `);
              Info($$renderer5, { class: "ui:size-4 ui:text-muted-foreground" });
              $$renderer5.push(`<!----></div> <div class="ui:space-y-1.5"><p class="ui:text-sm ui:text-muted-foreground">Describe what this text is about</p> `);
              Textarea($$renderer5, {
                placeholder: "e.g. a headline about the benefits of learning online",
                rows: 3,
                onkeydown: (e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleGenerate();
                },
                get value() {
                  return prompt;
                },
                set value($$value) {
                  prompt = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----></div> <div class="ui:flex ui:items-center ui:justify-between ui:gap-2"><!---->`);
              Root$1($$renderer5, {
                type: "single",
                value: tone,
                onValueChange: handleToneChange,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Select_trigger($$renderer6, {
                    size: "sm",
                    class: "ui:w-auto",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->Tone: ${escape_html(toneOptions.find((t) => t.value === tone)?.label)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Select_content($$renderer6, {
                    style: "z-index: 251",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!--[-->`);
                      const each_array = ensure_array_like(toneOptions);
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let option = each_array[$$index];
                        $$renderer7.push(`<!---->`);
                        Select_item($$renderer7, {
                          value: option.value,
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(option.label)}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!---->`);
                      }
                      $$renderer7.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Button($$renderer5, {
                type: "button",
                variant: "secondary",
                size: "sm",
                disabled: !prompt.trim() || loading,
                onclick: handleGenerate,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(loading ? "Generating…" : "Generate")}`);
                },
                $$slots: { default: true }
              });
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
  });
}
class TextGenerationApi extends BaseApiWithErrors {
  async generate(prompt, tone, format = "plain", context, courseId) {
    let generatedText = null;
    await this.execute({
      requestFn: () => classroomio.agent["generate-text"].$post({ json: { prompt, tone, format, context, courseId } }),
      logContext: "generating text",
      onSuccess: (response) => {
        generatedText = response.data.text;
      },
      onError: () => {
        snackbar.error("Failed to generate text. Please try again.");
      }
    });
    return generatedText;
  }
}
const textGenerationApi = new TextGenerationApi();
function Ai_generate_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      onInsert,
      context,
      format = "plain",
      courseId,
      align = "right"
    } = $$props;
    Ai_generate_popover($$renderer2, {
      align,
      onGenerate: async (prompt, tone) => {
        const text = await textGenerationApi.generate(prompt, tone, format, context, courseId);
        if (text) onInsert(text);
      }
    });
  });
}

export { Ai_generate_button as A, Header as H, Sidebar_group_content as S };
//# sourceMappingURL=ai-generate-button-sOclZIqT.js.map
