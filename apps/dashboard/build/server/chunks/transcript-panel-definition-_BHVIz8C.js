import { n as escape_html, a as store_get, f as ensure_array_like, l as attr_class, d as attr, u as unsubscribe_stores, b as spread_props, e as stringify } from './index2-Eg0dVEDW.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { I as Icon_button } from './icon-button-Bm-ZFVBt.js';
import { t } from './translations-BxDrjLWK.js';
import { s as sidePanel } from './store.svelte-CDxZ1B8Q.js';
import './client3-CP3T_KrU.js';
import { X } from './x-BRZyLJGp.js';

function Captions($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
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
function History($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
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
        { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }
      ],
      ["path", { "d": "M3 3v5h5" }],
      ["path", { "d": "M12 7v5l4 2" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "history" },
      /**
       * @component @name History
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmE5IDkgMCAxIDAgOS05IDkuNzUgOS43NSAwIDAgMC02Ljc0IDIuNzRMMyA4IiAvPgogIDxwYXRoIGQ9Ik0zIDN2NWg1IiAvPgogIDxwYXRoIGQ9Ik0xMiA3djVsNCAyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/history
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
class LessonVideoBus {
  /** Asset id of the currently mounted upload-video player (if any). */
  assetId = null;
  /** Last reported playback time in seconds. */
  currentTimeSeconds = 0;
  /** True after the user (or autoplay) has started playback at least once for the current asset. */
  hasPlayed = false;
  /** Latest transcript payload for the active asset; null if none / still loading. */
  transcript = null;
  /** True while the transcript fetch is in flight. */
  transcriptLoading = false;
  seekFn = () => {
  };
  setSeekFn(seekFn) {
    this.seekFn = seekFn;
  }
  seek(seconds) {
    this.seekFn(seconds);
  }
  /** Reset all per-lesson state (called when the upload asset changes or the player unmounts). */
  reset(opts) {
    if (!opts?.keepAssetId) {
      this.assetId = null;
    }
    this.currentTimeSeconds = 0;
    this.hasPlayed = false;
    this.transcript = null;
    this.transcriptLoading = false;
    this.seekFn = () => {
    };
  }
}
const lessonVideoBus = new LessonVideoBus();
function Transcript_side_panel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const transcript = lessonVideoBus.transcript;
    const transcriptLoading = lessonVideoBus.transcriptLoading;
    const segments = transcript?.segments ?? [];
    const language = transcript?.language ?? "";
    const currentTimeSeconds = lessonVideoBus.currentTimeSeconds;
    function isActiveSegment(segment, index) {
      const isLast = index === segments.length - 1;
      if (isLast) {
        return currentTimeSeconds >= segment.start && currentTimeSeconds <= segment.end;
      }
      return currentTimeSeconds >= segment.start && currentTimeSeconds < segment.end;
    }
    function formatTimestamp(seconds) {
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60).toString().padStart(2, "0");
      return `${m}:${s}`;
    }
    $$renderer2.push(`<div class="flex min-h-0 flex-1 flex-col"><header class="border-border flex items-center justify-between gap-2 border-b px-4 py-3"><div class="flex min-w-0 items-center gap-2">`);
    Captions($$renderer2, { size: 18, class: "ui:text-primary shrink-0" });
    $$renderer2.push(`<!----> <div class="min-w-0"><h2 class="text-sm font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.materials.tabs.video.transcript.title"))}</h2> `);
    if (language) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground truncate text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.materials.tabs.video.transcript.language", { language }))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> `);
    Icon_button($$renderer2, {
      onclick: () => sidePanel.close(),
      variant: "outline",
      size: "icon-xs",
      tooltip: store_get($$store_subs ??= {}, "$t", t)("side_panel.close_aria"),
      children: ($$renderer3) => {
        X($$renderer3, { size: 16 });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></header> <div class="min-h-0 flex-1 overflow-y-auto p-3">`);
    if (segments.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(segments);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let segment = each_array[index];
        const active = isActiveSegment(segment, index);
        $$renderer2.push(`<button type="button"${attr_class(`ui:text-foreground hover:ui:bg-muted/80 focus-visible:ui:ring-ring mb-1 w-full rounded-md px-2 py-1.5 text-left text-sm leading-snug transition-colors last:mb-0 focus:outline-none focus-visible:ring-2 ${stringify(active ? "ui:bg-primary/10 ui:font-medium" : "")}`)}${attr("data-active", active ? "true" : void 0)}><span class="ui:text-muted-foreground mr-1.5 text-xs tabular-nums">${escape_html(formatTimestamp(segment.start))}</span> ${escape_html(segment.text)}</button>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (transcriptLoading) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="ui:text-muted-foreground py-8 text-center text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.materials.tabs.video.transcript.loading"))}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<p class="ui:text-muted-foreground py-8 text-center text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.materials.tabs.video.transcript.empty"))}</p>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
const TRANSCRIPT_PANEL_ID = "transcript";
const transcriptPanelDefinition = {
  id: TRANSCRIPT_PANEL_ID,
  titleKey: "course.navItem.lessons.materials.tabs.video.transcript.title",
  scope: "lesson",
  component: Transcript_side_panel,
  defaultWidth: 380,
  minWidth: 320,
  maxWidth: 560,
  widthStorageKey: "transcript-panel-width"
};

export { History as H, TRANSCRIPT_PANEL_ID as T, lessonVideoBus as l, transcriptPanelDefinition as t };
//# sourceMappingURL=transcript-panel-definition-_BHVIz8C.js.map
