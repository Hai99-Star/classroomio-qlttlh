import { l as attr_class, j as clsx, m as attr_style, d as attr, e as stringify, f as ensure_array_like, n as escape_html, b as spread_props } from './index2-Eg0dVEDW.js';
import { o as onDestroy } from './index-server-CicpYXzh.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import { I as Icon, B as Button } from './button-McsHA0hU.js';
import { I as Input } from './input-CkarY5WD.js';
import { L as Label } from './label-CXfFBnqp.js';
import { c as cn } from './index6-DijlZyMe.js';
import { I as Item_content } from './item-content--fxXSxOv.js';
import { I as Item_header } from './item-header-CnzfEv7R.js';
import { I as Item, a as Item_media } from './item-CUOTGwjL.js';
import { I as Item_title } from './item-title-BLGVIel8.js';
import { F as File_text } from './file-text2-C57ccc05.js';

function Captions($$renderer, $$props) {
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
        "rect",
        {
          "width": "18",
          "height": "14",
          "x": "3",
          "y": "5",
          "rx": "2",
          "ry": "2"
        }
      ],
      ["path", { "d": "M7 15h4M15 15h2M7 11h2M13 11h4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "captions" },
      /**
       * @component @name Captions
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHg9IjMiIHk9IjUiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNNyAxNWg0TTE1IDE1aDJNNyAxMWgyTTEzIDExaDQiIC8+Cjwvc3ZnPg==) - https://lucide.dev/icons/captions
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
function getYoutubeVideoId(url) {
  const trimmedUrl = String(url ?? "").trim();
  if (!trimmedUrl) return null;
  try {
    const parsedUrl = new URL(trimmedUrl);
    const host = parsedUrl.hostname.replace(/^www\./, "").toLowerCase();
    if (host === "youtu.be") {
      return parsedUrl.pathname.split("/").filter(Boolean)[0] ?? null;
    }
    if (host !== "youtube.com" && host !== "m.youtube.com") {
      return null;
    }
    const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
    if (pathParts[0] === "watch") {
      return parsedUrl.searchParams.get("v");
    }
    if (pathParts[0] === "embed" || pathParts[0] === "shorts" || pathParts[0] === "live") {
      return pathParts[1] ?? null;
    }
    return null;
  } catch {
    return null;
  }
}
function isYoutubeUrl(url) {
  return getYoutubeVideoId(url) !== null;
}
function Plyr_player($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { src, poster, options = {}, tracks = [] } = $$props;
    const playsinline = options.playsinline !== false;
    const maxHeight = options.maxHeight || "400px";
    options.controls !== false;
    options.autoplay === true;
    const isYouTube = isYoutubeUrl(src);
    const youtubeVideoId = isYouTube ? getYoutubeVideoId(src) : null;
    onDestroy(() => {
      return;
    });
    $$renderer2.push(`<div class="ui:relative"${attr_style(`max-height: ${stringify(maxHeight)}; min-height: ${stringify(options.minHeight)}; height: ${stringify(options.height)};`)}>`);
    if (isYouTube && youtubeVideoId) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="plyr__video-embed" data-plyr-provider="youtube"${attr("data-plyr-embed-id", youtubeVideoId)}></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<video${attr("src", src)}${attr("poster", poster)}${attr("playsinline", playsinline, true)} class="plyr-player"><!--[-->`);
      const each_array = ensure_array_like(tracks);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let track = each_array[$$index];
        $$renderer2.push(`<track${attr("kind", track.kind ?? "captions")}${attr("src", track.src)}${attr("srclang", track.srclang)}${attr("label", track.label)}${attr("default", track.default ?? false, true)}/>`);
      }
      $$renderer2.push(`<!--]--></video>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (options.transcriptPanelControl) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button type="button" class="plyr__control" data-cio-transcript-panel=""${attr("aria-label", options.transcriptPanelControl.label)} hidden="">`);
      Captions($$renderer2, {
        class: "custom",
        "aria-hidden": "true",
        focusable: "false",
        size: 18
      });
      $$renderer2.push(`<!----> <span class="plyr__tooltip" role="tooltip">${escape_html(options.transcriptPanelControl.label)}</span></button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Muse_player($$renderer, $$props) {
  let { svid } = $$props;
  const embedUrl = svid ? `https://muse.ai/embed/${svid}?logo=https://app.classroomio.com/logo-512.png&subtitles=auto&cover_play_position=center` : "";
  if (embedUrl) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div style="position:relative;padding-bottom:51.416579%"><iframe${attr("src", embedUrl)} style="width:100%;height:100%;position:absolute;left:0;top:0" frameborder="0" allowfullscreen title="Muse AI Video"></iframe></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]-->`);
}
function Media_player($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { source, options = {}, class: className = "" } = $$props;
    const tracks = source.tracks ?? [];
    const isMuse = (() => source.type === "muse" && source.metadata?.svid)();
    const isGoogleDrive = source.type === "google_drive";
    const poster = source.type === "upload" ? source.metadata?.thumbnailUrl : void 0;
    const iframeTitle = source.metadata?.title?.trim() || "Video";
    const iframeMaxHeight = options.maxHeight ?? "400px";
    const iframeWidth = options.width ?? "100%";
    $$renderer2.push(`<div${attr_class(clsx(className))}>`);
    if (isMuse) {
      $$renderer2.push("<!--[-->");
      Muse_player($$renderer2, { svid: source.metadata?.svid });
    } else {
      $$renderer2.push("<!--[!-->");
      if (isGoogleDrive) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="ui:relative ui:overflow-hidden ui:rounded-md ui:border ui:border-border"${attr_style("", { "max-height": iframeMaxHeight, width: iframeWidth })}><iframe${attr("src", source.url)}${attr("title", iframeTitle)} class="ui:block ui:h-full ui:min-h-[240px] ui:w-full ui:border-0" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen${attr_style("", { "aspect-ratio": "16 / 9" })}></iframe></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        Plyr_player($$renderer2, { src: source.url, poster, options, tracks });
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Youtube_link_form($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      inputLabel,
      inputPlaceholder = "",
      addButtonLabel,
      invalidYoutubeMessage,
      disabled = false,
      class: className = "",
      onSubmit = () => {
      },
      onInputChange = () => {
      }
    } = $$props;
    let rawInput = "";
    let validationError = "";
    let isSubmitting = false;
    function handleInputChange(event) {
      rawInput = event.currentTarget.value;
      validationError = "";
      onInputChange(rawInput);
    }
    $$renderer2.push(`<form${attr_class(clsx(cn("ui:flex ui:w-full ui:items-end ui:justify-between ui:gap-4", className)))}><div class="ui:flex-1 ui:space-y-1">`);
    Label($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(inputLabel)}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Input($$renderer2, {
      value: rawInput,
      disabled: disabled || isSubmitting,
      placeholder: inputPlaceholder,
      onchange: handleInputChange
    });
    $$renderer2.push(`<!----> `);
    if (validationError) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-destructive ui:text-xs">${escape_html(validationError)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    Button($$renderer2, {
      type: "submit",
      disabled: disabled || isSubmitting,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(addButtonLabel)}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></form>`);
  });
}
function Download($$renderer, $$props) {
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
      ["path", { "d": "M12 15V3" }],
      ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
      ["path", { "d": "m7 10 5 5 5-5" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "download" },
      /**
       * @component @name Download
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTVWMyIgLz4KICA8cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIgLz4KICA8cGF0aCBkPSJtNyAxMCA1IDUgNS01IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/download
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
function Document_card($$renderer, $$props) {
  let {
    title,
    subtitle = "",
    fileUrl = null,
    viewLabel = "View",
    downloadLabel = "Download",
    actions,
    header,
    class: className = ""
  } = $$props;
  $$renderer.push(`<!---->`);
  Item($$renderer, {
    variant: "outline",
    class: `ui:w-fit! ui:min-w-0 ui:cursor-default! ui:p-3! ${stringify(className)}`,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="ui:flex ui:w-full ui:min-w-0 ui:flex-col">`);
      if (header) {
        $$renderer2.push("<!--[-->");
        header($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <!---->`);
      Item_header($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          Item_media($$renderer3, {
            variant: "icon",
            class: "ui:size-14! ui:[&_svg]:size-8!",
            "aria-label": title,
            children: ($$renderer4) => {
              File_text($$renderer4, { class: "ui:text-muted-foreground" });
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> <!---->`);
      Item_content($$renderer2, {
        class: "ui:w-full! ui:min-w-0",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          Item_title($$renderer3, {
            class: "ui:line-clamp-2 ui:min-h-[44px] ui:text-base!",
            title,
            children: ($$renderer4) => {
              $$renderer4.push(`<span class="ui:max-w-[200px] ui:truncate ui:break-all">${escape_html(title)}</span>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          if (subtitle) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="ui:text-muted-foreground ui:mt-1 ui:text-xs">${escape_html(subtitle)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (actions || fileUrl) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="ui:mt-3 ui:flex ui:w-full ui:min-w-0 ui:gap-2">`);
            if (actions) {
              $$renderer3.push("<!--[-->");
              actions($$renderer3);
              $$renderer3.push(`<!---->`);
            } else {
              $$renderer3.push("<!--[!-->");
              if (fileUrl) {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<a${attr("href", fileUrl)} target="_blank" rel="noopener noreferrer" class="ui:border-input ui:bg-background ui:text-foreground hover:ui:bg-accent hover:ui:text-accent-foreground ui:shrink ui:inline-flex ui:items-center ui:gap-1.5 ui:rounded-md ui:border ui:px-3 ui:py-1.5 ui:text-sm ui:font-medium">${escape_html(viewLabel)}</a> <a${attr("href", fileUrl)} target="_blank" rel="noopener noreferrer"${attr("download", title)} class="ui:border-input ui:bg-background ui:text-foreground hover:ui:bg-accent hover:ui:text-accent-foreground ui:shrink ui:inline-flex ui:items-center ui:gap-1.5 ui:rounded-md ui:border ui:px-3 ui:py-1.5 ui:text-sm ui:font-medium">`);
                Download($$renderer3, { class: "ui:size-4" });
                $$renderer3.push(`<!----> ${escape_html(downloadLabel)}</a>`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]-->`);
            }
            $$renderer3.push(`<!--]--></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}

export { Document_card as D, Media_player as M, Youtube_link_form as Y, getYoutubeVideoId as g, isYoutubeUrl as i };
//# sourceMappingURL=document-card-DsDgdtN9.js.map
