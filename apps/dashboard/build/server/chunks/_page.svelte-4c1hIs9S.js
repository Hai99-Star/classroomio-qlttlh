import { h as head, a as store_get, d as attr, n as escape_html, u as unsubscribe_stores, k as derived, f as ensure_array_like, l as attr_class, j as clsx, m as attr_style, b as spread_props } from './index2-Eg0dVEDW.js';
import { p as page } from './index5-nlVlCL1t.js';
import { S as Spinner, B as Button } from './button-McsHA0hU.js';
import { t } from './translations-BxDrjLWK.js';
import { c as classroomio } from './index4-3F2xRc80.js';
import './submission-CIIjGYOS.js';
import { c as currentOrg, d as isFreePlan } from './org-BIDTy0Q0.js';
import './question-type-capabilities-B1VkdJbc.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import { c as courseApi } from './course.svelte-dh_CGwPg.js';
import './content-BYLGOVzm.js';
import { C as CERTIFICATE_TEMPLATES, A as ACCENT_COLORS, D as DEFAULT_CERTIFICATE_DESIGN } from './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './picker-data-NeeeTF6U.js';
import { c as cn } from './index6-DijlZyMe.js';
import './index8-D5Z_9ShZ.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import './button-group-B7_AGlHf.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './states.svelte-CIWoDLSQ.js';
import './empty-media-ClSn1CG9.js';
import { F as Field } from './field-BxJz8KV9.js';
import './input-group-button-BAHNvNdh.js';
import './item-CUOTGwjL.js';
import './toggle-group-item-BLEzxLjD.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import { I as Icon_button } from './icon-button-De7MyFOi.js';
import './resource-list-row-DOW12fib.js';
import { C as Certificate_preview, r as resolveTemplateId } from './certificate-preview-CUwZUs2K.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { r as resolve } from './server3-VLoL706W.js';
import { A as Arrow_left } from './arrow-left-Cb-a-0D0.js';
import { F as Field_description } from './field-description-yPSV800w.js';
import { F as Field_group } from './field-group-CsZtrba5.js';
import { F as Field_set, a as Field_legend } from './field-set-CvEL423F.js';
import { F as Field_separator } from './field-separator-CCwxfqwE.js';
import { I as Input_field } from './input-field-w4kZespe.js';
import { T as Textarea_field } from './textarea-field-DcFq3Zr9.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { D as Download } from './download-DqZpYab8.js';
import { I as Image } from './image-DHe8wFrM.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { L as Layers } from './layers-Ds5JmJ9s.js';
import './utils2-DPSDgWhA.js';
import './client3-CP3T_KrU.js';
import './index14-HMlD0kYH.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import './shared-server-DaWdgxVh.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';
import 'lodash/merge.js';
import './compliance-utils-UIprJIyn.js';
import './index16-Bj79zRdC.js';
import './license.svelte-Cw7yPjRa.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import './courses.svelte-DHUYjzzY.js';
import './create-id-D7gdjJzW.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './index13-C4Mtu7Q0.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-DTG9QsOx.js';
import './plus2-B3hKTcCm.js';
import './routing-Cz2vwfLK.js';
import './separator-C8wJJtqC.js';
import './field-label-BEb0I1_z.js';
import './label-CXfFBnqp.js';
import './input-CkarY5WD.js';
import './textarea-CfVjMEtO.js';

function Palette($$renderer, $$props) {
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
        {
          "d": "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"
        }
      ],
      [
        "circle",
        { "cx": "13.5", "cy": "6.5", "r": ".5", "fill": "currentColor" }
      ],
      [
        "circle",
        {
          "cx": "17.5",
          "cy": "10.5",
          "r": ".5",
          "fill": "currentColor"
        }
      ],
      [
        "circle",
        { "cx": "6.5", "cy": "12.5", "r": ".5", "fill": "currentColor" }
      ],
      [
        "circle",
        { "cx": "8.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "palette" },
      /**
       * @component @name Palette
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjJhMSAxIDAgMCAxIDAtMjAgMTAgOSAwIDAgMSAxMCA5IDUgNSAwIDAgMS01IDVoLTIuMjVhMS43NSAxLjc1IDAgMCAwLTEuNCAyLjhsLjMuNGExLjc1IDEuNzUgMCAwIDEtMS40IDIuOHoiIC8+CiAgPGNpcmNsZSBjeD0iMTMuNSIgY3k9IjYuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgLz4KICA8Y2lyY2xlIGN4PSIxNy41IiBjeT0iMTAuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgLz4KICA8Y2lyY2xlIGN4PSI2LjUiIGN5PSIxMi41IiByPSIuNSIgZmlsbD0iY3VycmVudENvbG9yIiAvPgogIDxjaXJjbGUgY3g9IjguNSIgY3k9IjcuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/palette
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
function Printer($$renderer, $$props) {
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
        {
          "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
        }
      ],
      ["path", { "d": "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }],
      [
        "rect",
        { "x": "6", "y": "14", "width": "12", "height": "8", "rx": "1" }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "printer" },
      /**
       * @component @name Printer
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAxOEg0YTIgMiAwIDAgMS0yLTJ2LTVhMiAyIDAgMCAxIDItMmgxNmEyIDIgMCAwIDEgMiAydjVhMiAyIDAgMCAxLTIgMmgtMiIgLz4KICA8cGF0aCBkPSJNNiA5VjNhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxdjYiIC8+CiAgPHJlY3QgeD0iNiIgeT0iMTQiIHdpZHRoPSIxMiIgaGVpZ2h0PSI4IiByeD0iMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/printer
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
function Type($$renderer, $$props) {
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
      ["path", { "d": "M12 4v16" }],
      ["path", { "d": "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" }],
      ["path", { "d": "M9 20h6" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "type" },
      /**
       * @component @name Type
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNHYxNiIgLz4KICA8cGF0aCBkPSJNNCA3VjVhMSAxIDAgMCAxIDEtMWgxNGExIDEgMCAwIDEgMSAxdjIiIC8+CiAgPHBhdGggZD0iTTkgMjBoNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/type
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
function Certificate_editor_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      courseId,
      courseTitle,
      templateLabel,
      isDirty,
      isSaving,
      isFreePlan: isFreePlan2,
      onSave,
      onDiscard
    } = $$props;
    $$renderer2.push(`<header class="ui:border-border ui:bg-background ui:text-foreground flex shrink-0 items-center justify-between gap-3 border-b px-3 py-3"><div class="flex min-w-0 flex-1 items-center gap-2">`);
    Button($$renderer2, {
      variant: "ghost",
      size: "icon",
      href: resolve("/courses/[id]/certificates", { id: courseId }),
      class: "ui:size-8 shrink-0",
      "aria-label": store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.back"),
      children: ($$renderer3) => {
        Arrow_left($$renderer3, { class: "size-4" });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <div class="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-2"><h1 class="truncate text-sm tracking-tight sm:text-base">${escape_html(courseTitle)}</h1> <div class="flex flex-wrap items-center gap-1">`);
    Badge($$renderer2, {
      variant: "secondary",
      class: "text-[10px] uppercase",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(templateLabel)}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    if (isDirty) {
      $$renderer2.push("<!--[-->");
      Badge($$renderer2, {
        variant: "outline",
        class: "text-[10px]",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.unsaved"))}`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (isFreePlan2) {
      $$renderer2.push("<!--[-->");
      Badge($$renderer2, {
        variant: "outline",
        class: "text-[10px]",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.free_plan"))}`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="flex shrink-0 items-center gap-1.5">`);
    if (isDirty) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        variant: "ghost",
        size: "sm",
        type: "button",
        onclick: onDiscard,
        class: "hidden sm:inline-flex",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.discard"))}`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    Button($$renderer2, {
      variant: "outline",
      size: "sm",
      type: "button",
      disabled: !isDirty || isSaving,
      loading: isSaving,
      onclick: onSave,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.save"))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Template_thumb($$renderer, $$props) {
  let { id } = $$props;
  if (id === "classique") {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="flex h-full w-full flex-col items-center justify-center bg-[#faf6ec] text-[#6b4513]"><span class="text-[18px] italic" style="font-family:'Bodoni Moda',serif">Classique</span> <span class="mt-1 text-[6px] tracking-[0.3em]" style="font-family:'Cinzel',serif">— EST 1892 —</span></div>`);
  } else {
    $$renderer.push("<!--[!-->");
    if (id === "brutalist") {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="flex h-full w-full items-end justify-start bg-[#f0ede4] p-2"><div class="w-full text-left leading-[0.85] text-black" style="font-family:'Archivo Black',sans-serif;font-size:18px">RAW<br/> <span class="text-[#ff4500] italic" style="font-family:'Playfair Display',serif;font-weight:400">form</span></div></div>`);
    } else {
      $$renderer.push("<!--[!-->");
      if (id === "noir") {
        $$renderer.push("<!--[-->");
        $$renderer.push(`<div class="flex h-full w-full flex-col items-center justify-center bg-[#0e0e0e] text-[#d4af37]"><span class="text-[16px] text-[#f5f1e8] italic" style="font-family:'Playfair Display',serif">Noir</span> <span class="mt-1 text-[6px] tracking-[0.3em]" style="font-family:'Cinzel',serif">★ ATELIER ★</span></div>`);
      } else {
        $$renderer.push("<!--[!-->");
        if (id === "poster") {
          $$renderer.push("<!--[-->");
          $$renderer.push(`<div class="relative h-full w-full overflow-hidden bg-[#fef2dc]"><span class="absolute -top-3 -right-4 h-10 w-10 rounded-full bg-[#ff5722]"></span> <span class="absolute -bottom-3 -left-3 h-9 w-9 rounded-full bg-[#1e3a8a]"></span> <div class="relative z-10 flex h-full w-full items-center justify-center"><span class="font-black italic" style="font-family:'Playfair Display',serif;font-size:18px">Poster</span></div></div>`);
        } else {
          $$renderer.push("<!--[!-->");
          $$renderer.push(`<div class="flex h-full w-full flex-col items-center justify-center bg-white text-black"><span class="text-[18px] font-light italic" style="font-family:'Cormorant Garamond',serif">Minimal</span> <span class="mt-1 block h-px w-7 bg-black"></span> <span class="mt-1 text-[6px] tracking-[0.3em]" style="font-family:'JetBrains Mono',monospace">N°001</span></div>`);
        }
        $$renderer.push(`<!--]-->`);
      }
      $$renderer.push(`<!--]-->`);
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]-->`);
}
function Templates_panel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { value, disabled = false } = $$props;
    $$renderer2.push(`<div class="grid grid-cols-2 gap-3"><!--[-->`);
    const each_array = ensure_array_like(CERTIFICATE_TEMPLATES);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let template = each_array[$$index];
      const isActive = template.id === value;
      $$renderer2.push(`<button type="button"${attr_class(clsx(cn("group ui:border-border relative aspect-[1.4/1] overflow-hidden rounded-md border bg-white text-left transition-transform", "hover:-translate-y-0.5 hover:shadow-md", isActive && "ui:border-primary ui:ring-primary -translate-y-0.5 shadow-md ring-2", disabled && "cursor-not-allowed opacity-60 hover:translate-y-0 hover:shadow-none")))}${attr("disabled", disabled, true)}${attr("aria-pressed", isActive)}>`);
      Template_thumb($$renderer2, { id: template.id });
      $$renderer2.push(`<!----> <span${attr_class(clsx(cn("absolute right-0 bottom-0 left-0 px-2 py-1 text-center text-[9px] font-medium tracking-[0.18em] uppercase", isActive ? "ui:bg-primary ui:text-primary-foreground" : "ui:bg-foreground ui:text-background")))}>${escape_html(template.label)}</span></button>`);
    }
    $$renderer2.push(`<!--]--></div> <p class="ui:text-muted-foreground mt-4 text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.templates_hint"))}</p>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function toDraft(design) {
  return {
    templateId: design.templateId,
    accentColor: design.accentColor,
    subtitle: design.subtitle ?? "",
    descriptionOverride: design.descriptionOverride ?? "",
    idFormat: design.idFormat ?? "",
    signatories: [
      {
        name: design.signatories[0]?.name ?? "",
        role: design.signatories[0]?.role ?? ""
      },
      {
        name: design.signatories[1]?.name ?? "",
        role: design.signatories[1]?.role ?? ""
      }
    ]
  };
}
function fromDraft(draft) {
  return {
    templateId: draft.templateId,
    accentColor: draft.accentColor,
    subtitle: draft.subtitle.trim() || void 0,
    descriptionOverride: draft.descriptionOverride.trim() || void 0,
    idFormat: draft.idFormat.trim() || void 0,
    signatories: [
      {
        name: draft.signatories[0].name,
        role: draft.signatories[0].role
      },
      {
        name: draft.signatories[1].name,
        role: draft.signatories[1].role
      }
    ]
  };
}
function readStoredDesign() {
  const certificate = courseApi.course?.certificate;
  const stored = certificate?.design;
  const legacyTheme = certificate?.theme;
  return {
    templateId: resolveTemplateId(stored?.templateId ?? legacyTheme),
    accentColor: stored?.accentColor ?? DEFAULT_CERTIFICATE_DESIGN.accentColor,
    subtitle: stored?.subtitle ?? DEFAULT_CERTIFICATE_DESIGN.subtitle,
    descriptionOverride: stored?.descriptionOverride,
    signatories: [
      {
        name: stored?.signatories?.[0]?.name ?? DEFAULT_CERTIFICATE_DESIGN.signatories[0].name,
        role: stored?.signatories?.[0]?.role ?? DEFAULT_CERTIFICATE_DESIGN.signatories[0].role
      },
      {
        name: stored?.signatories?.[1]?.name ?? DEFAULT_CERTIFICATE_DESIGN.signatories[1].name,
        role: stored?.signatories?.[1]?.role ?? DEFAULT_CERTIFICATE_DESIGN.signatories[1].role
      }
    ],
    idFormat: stored?.idFormat ?? DEFAULT_CERTIFICATE_DESIGN.idFormat
  };
}
class CertificateEditorStore {
  activePanel = "templates";
  draft = toDraft(DEFAULT_CERTIFICATE_DESIGN);
  initial = toDraft(DEFAULT_CERTIFICATE_DESIGN);
  isSaving = false;
  #initializedCourseId = null;
  #isDirty = derived(() => JSON.stringify(this.draft) !== JSON.stringify(this.initial));
  get isDirty() {
    return this.#isDirty();
  }
  set isDirty($$value) {
    return this.#isDirty($$value);
  }
  syncFromCourse(courseId, force = false) {
    if (!force && this.#initializedCourseId === courseId) return;
    const stored = readStoredDesign();
    this.initial = toDraft(stored);
    this.draft = toDraft(stored);
    this.#initializedCourseId = courseId;
  }
  reset() {
    this.draft = toDraft(fromDraft(this.initial));
  }
  setTemplate(templateId) {
    this.draft.templateId = templateId;
  }
  setAccent(color) {
    this.draft.accentColor = color;
  }
  /**
   * Returns a render-ready design with empty optional strings collapsed to
   * `undefined`, suitable for handing to `Certificate.Preview` / API payload.
   */
  toDesign() {
    return fromDraft(this.draft);
  }
  async save() {
    const course = courseApi.course;
    if (!course?.id) return;
    this.isSaving = true;
    try {
      const certificate = {
        ...course.certificate ?? {},
        design: fromDraft(this.draft),
        theme: this.draft.templateId
      };
      const updated = await courseApi.update(course.id, { certificate }, { showSuccessToast: false });
      if (updated) {
        this.initial = {
          ...this.draft,
          signatories: [
            { ...this.draft.signatories[0] },
            { ...this.draft.signatories[1] }
          ]
        };
        snackbar.success(t.get("course.navItem.certificates.editor.saved"));
      }
    } finally {
      this.isSaving = false;
    }
  }
}
const certificateEditorStore = new CertificateEditorStore();
function Content_panel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { disabled = false } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Field_group($$renderer3, {
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Field_set($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_legend($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.section_header"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_group($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      Input_field($$renderer7, {
                        label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.subtitle"),
                        placeholder: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.subtitle_placeholder"),
                        isDisabled: disabled,
                        get value() {
                          return certificateEditorStore.draft.subtitle;
                        },
                        set value($$value) {
                          certificateEditorStore.draft.subtitle = $$value;
                          $$settled = false;
                        }
                      });
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      Textarea_field($$renderer7, {
                        label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.description_override"),
                        rows: 4,
                        placeholder: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.description_override_placeholder"),
                        disabled,
                        get value() {
                          return certificateEditorStore.draft.descriptionOverride;
                        },
                        set value($$value) {
                          certificateEditorStore.draft.descriptionOverride = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> <!---->`);
                      Field_description($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.description_override_hint"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Field_separator($$renderer4, {});
          $$renderer4.push(`<!----> <!---->`);
          Field_set($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_legend($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.section_signatories"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_group($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      Input_field($$renderer7, {
                        label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.signatory_one_name"),
                        isDisabled: disabled,
                        get value() {
                          return certificateEditorStore.draft.signatories[0].name;
                        },
                        set value($$value) {
                          certificateEditorStore.draft.signatories[0].name = $$value;
                          $$settled = false;
                        }
                      });
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      Input_field($$renderer7, {
                        label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.signatory_one_role"),
                        isDisabled: disabled,
                        get value() {
                          return certificateEditorStore.draft.signatories[0].role;
                        },
                        set value($$value) {
                          certificateEditorStore.draft.signatories[0].role = $$value;
                          $$settled = false;
                        }
                      });
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      Input_field($$renderer7, {
                        label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.signatory_two_name"),
                        isDisabled: disabled,
                        get value() {
                          return certificateEditorStore.draft.signatories[1].name;
                        },
                        set value($$value) {
                          certificateEditorStore.draft.signatories[1].name = $$value;
                          $$settled = false;
                        }
                      });
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      Input_field($$renderer7, {
                        label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.signatory_two_role"),
                        isDisabled: disabled,
                        get value() {
                          return certificateEditorStore.draft.signatories[1].role;
                        },
                        set value($$value) {
                          certificateEditorStore.draft.signatories[1].role = $$value;
                          $$settled = false;
                        }
                      });
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Field_separator($$renderer4, {});
          $$renderer4.push(`<!----> <!---->`);
          Field_set($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_legend($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.section_reference"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field($$renderer5, {
                children: ($$renderer6) => {
                  Input_field($$renderer6, {
                    label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.id_format"),
                    placeholder: "N° {seq}",
                    isDisabled: disabled,
                    get value() {
                      return certificateEditorStore.draft.idFormat;
                    },
                    set value($$value) {
                      certificateEditorStore.draft.idFormat = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field_description($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.id_format_hint"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
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
  });
}
function Colors_panel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { value, disabled = false } = $$props;
    $$renderer2.push(`<div class="space-y-3"><div class="grid grid-cols-6 gap-2"><!--[-->`);
    const each_array = ensure_array_like(ACCENT_COLORS);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let color = each_array[$$index];
      const isActive = color.toLowerCase() === value.toLowerCase();
      $$renderer2.push(`<button type="button"${attr_class(clsx(cn("ui:border-border relative aspect-square rounded-md border transition-transform", "hover:-translate-y-0.5", isActive && "ui:ring-foreground ring-2 ring-offset-2", disabled && "cursor-not-allowed opacity-60 hover:translate-y-0")))}${attr("aria-label", color)}${attr("aria-pressed", isActive)}${attr("disabled", disabled, true)}${attr_style("", { "background-color": color })}></button>`);
    }
    $$renderer2.push(`<!--]--></div> <p class="ui:text-muted-foreground text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.accent_hint"))}</p></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Export_panel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { courseId, courseTitle, disabled = false } = $$props;
    let isPdfLoading = false;
    let isPngLoading = false;
    let isPrintLoading = false;
    const downloadName = (courseTitle || "certificate").replace(/\s+/g, "-").toLowerCase();
    async function buildBody() {
      return {
        studentName: store_get($$store_subs ??= {}, "$profile", profile).fullname || "Preview Recipient",
        studentId: store_get($$store_subs ??= {}, "$profile", profile).id || void 0,
        issuedAt: (/* @__PURE__ */ new Date()).toISOString(),
        previewMode: true
      };
    }
    async function downloadPdf() {
      if (disabled || isPdfLoading) return;
      isPdfLoading = true;
      try {
        const body = await buildBody();
        const response = await classroomio.course[":courseId"]["download"]["certificate"]["$post"]({ param: { courseId }, json: body });
        const blob = await response.blob();
        triggerDownload(new Blob([blob], { type: "application/pdf" }), `${downloadName}.pdf`);
      } catch (error) {
        console.error("Preview PDF error", error);
        snackbar.error("course.navItem.certificates.editor.preview_failed");
      } finally {
        isPdfLoading = false;
      }
    }
    async function downloadPng() {
      if (disabled || isPngLoading) return;
      isPngLoading = true;
      try {
        const body = await buildBody();
        const response = await classroomio.course[":courseId"]["download"]["certificate"]["png"]["$post"]({ param: { courseId }, json: body });
        const blob = await response.blob();
        triggerDownload(new Blob([blob], { type: "image/png" }), `${downloadName}.png`);
      } catch (error) {
        console.error("Preview PNG error", error);
        snackbar.error("course.navItem.certificates.editor.preview_failed");
      } finally {
        isPngLoading = false;
      }
    }
    async function print() {
      if (disabled || isPrintLoading) return;
      isPrintLoading = true;
      try {
        const body = await buildBody();
        const response = await classroomio.course[":courseId"]["download"]["certificate"]["png"]["$post"]({ param: { courseId }, json: body });
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const printWindow = window.open("", "_blank");
        if (printWindow) {
          printWindow.document.write(`<!doctype html><html><head><title>${courseTitle}</title><style>@page{size:A4 landscape;margin:0}body{margin:0;display:flex;align-items:center;justify-content:center;background:#fff}img{width:100vw;max-width:1100px;height:auto}</style></head><body><img alt="" src="${url}" onload="setTimeout(()=>window.print(),300)"></body></html>`);
          printWindow.document.close();
        }
      } catch (error) {
        console.error("Preview print error", error);
        snackbar.error("course.navItem.certificates.editor.preview_failed");
      } finally {
        isPrintLoading = false;
      }
    }
    function triggerDownload(blob, filename) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    }
    $$renderer2.push(`<div class="space-y-2">`);
    Button($$renderer2, {
      class: "w-full justify-start",
      disabled,
      loading: isPdfLoading,
      onclick: downloadPdf,
      children: ($$renderer3) => {
        Download($$renderer3, { class: "size-4" });
        $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.download_pdf"))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      variant: "outline",
      class: "w-full justify-start",
      disabled,
      loading: isPngLoading,
      onclick: downloadPng,
      children: ($$renderer3) => {
        Image($$renderer3, { class: "size-4" });
        $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.download_png"))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      variant: "outline",
      class: "w-full justify-start",
      disabled,
      loading: isPrintLoading,
      onclick: print,
      children: ($$renderer3) => {
        Printer($$renderer3, { class: "size-4" });
        $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.print"))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <p class="ui:text-muted-foreground mt-3 text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.export_hint"))}</p></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Certificate_editor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { courseId } = $$props;
    const store = certificateEditorStore;
    const courseTitle = courseApi.course?.title ?? "";
    const activeTemplateMeta = CERTIFICATE_TEMPLATES.find((tpl) => tpl.id === store.draft.templateId) ?? CERTIFICATE_TEMPLATES[0];
    const previewDesign = store.toDesign();
    const sampleRenderData = {
      recipientName: store_get($$store_subs ??= {}, "$profile", profile).fullname || store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.sample_recipient"),
      courseName: courseTitle || store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.sample_course"),
      courseDescription: store.draft.descriptionOverride || courseApi.course?.description || store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.sample_description"),
      orgName: store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name || store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.sample_org"),
      orgLogoUrl: store_get($$store_subs ??= {}, "$currentOrg", currentOrg).avatarUrl || void 0,
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" }),
      certificateId: (store.draft.idFormat || "N° {seq}").replace("{seq}", "0247")
    };
    function navVariant(panel) {
      return store.activePanel === panel ? "default" : "ghost";
    }
    function setActive(panel) {
      store.activePanel = panel;
    }
    if (courseApi.course?.id === courseId) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:bg-background ui:text-foreground flex h-dvh flex-col">`);
      Certificate_editor_header($$renderer2, {
        courseId,
        courseTitle,
        templateLabel: activeTemplateMeta.label,
        isDirty: store.isDirty,
        isSaving: store.isSaving,
        isFreePlan: store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan),
        onSave: () => store.save(),
        onDiscard: () => store.reset()
      });
      $$renderer2.push(`<!----> <div class="flex min-h-0 flex-1"><nav class="ui:border-border ui:bg-secondary flex w-14 shrink-0 flex-col items-center gap-1.5 border-r py-3"${attr("aria-label", store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.sections"))}>`);
      Icon_button($$renderer2, {
        type: "button",
        variant: navVariant("templates"),
        tooltip: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_templates"),
        tooltipSide: "right",
        "aria-label": store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_templates"),
        "aria-current": store.activePanel === "templates" ? "page" : void 0,
        onclick: () => setActive("templates"),
        children: ($$renderer3) => {
          Layers($$renderer3, { class: "size-4" });
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Icon_button($$renderer2, {
        type: "button",
        variant: navVariant("content"),
        tooltip: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_content"),
        tooltipSide: "right",
        "aria-label": store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_content"),
        "aria-current": store.activePanel === "content" ? "page" : void 0,
        onclick: () => setActive("content"),
        children: ($$renderer3) => {
          Type($$renderer3, { class: "size-4" });
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Icon_button($$renderer2, {
        type: "button",
        variant: navVariant("colors"),
        tooltip: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_colors"),
        tooltipSide: "right",
        "aria-label": store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_colors"),
        "aria-current": store.activePanel === "colors" ? "page" : void 0,
        onclick: () => setActive("colors"),
        children: ($$renderer3) => {
          Palette($$renderer3, { class: "size-4" });
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Icon_button($$renderer2, {
        type: "button",
        variant: navVariant("export"),
        tooltip: store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_export"),
        tooltipSide: "right",
        "aria-label": store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_export"),
        "aria-current": store.activePanel === "export" ? "page" : void 0,
        onclick: () => setActive("export"),
        children: ($$renderer3) => {
          Download($$renderer3, { class: "size-4" });
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></nav> <aside class="ui:border-border ui:bg-card flex w-[min(100%,380px)] shrink-0 flex-col border-r"><div class="ui:border-border border-b px-5 py-4">`);
      if (store.activePanel === "templates") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h2 class="text-sm font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_templates"))}</h2> <p class="ui:text-muted-foreground mt-1 text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_templates_subtitle"))}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (store.activePanel === "content") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<h2 class="text-sm font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_content"))}</h2> <p class="ui:text-muted-foreground mt-1 text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_content_subtitle"))}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (store.activePanel === "colors") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<h2 class="text-sm font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_colors"))}</h2> <p class="ui:text-muted-foreground mt-1 text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_colors_subtitle"))}</p>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<h2 class="text-sm font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_export"))}</h2> <p class="ui:text-muted-foreground mt-1 text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.panel_export_subtitle"))}</p>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div> <div class="min-h-0 flex-1 overflow-y-auto px-5 py-4">`);
      if (store.activePanel === "templates") {
        $$renderer2.push("<!--[-->");
        Templates_panel($$renderer2, {
          value: store.draft.templateId,
          disabled: store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan)
        });
      } else {
        $$renderer2.push("<!--[!-->");
        if (store.activePanel === "content") {
          $$renderer2.push("<!--[-->");
          Content_panel($$renderer2, {
            disabled: store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan)
          });
        } else {
          $$renderer2.push("<!--[!-->");
          if (store.activePanel === "colors") {
            $$renderer2.push("<!--[-->");
            Colors_panel($$renderer2, {
              value: store.draft.accentColor,
              disabled: store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan)
            });
          } else {
            $$renderer2.push("<!--[!-->");
            Export_panel($$renderer2, {
              courseId,
              courseTitle,
              disabled: store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan)
            });
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></aside> <section class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-auto bg-zinc-100 bg-[radial-gradient(circle,#d4d4d8_1px,transparent_1px)] [background-size:18px_18px] dark:bg-zinc-950 dark:bg-[radial-gradient(circle,rgba(113,113,122,0.4)_1px,transparent_1px)]"${attr("aria-label", store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.preview"))}><div class="flex min-h-0 flex-1 items-center justify-center p-6 sm:p-10 lg:p-14"><!---->`);
      Certificate_preview($$renderer2, {
        design: previewDesign,
        data: sampleRenderData,
        showControls: true
      });
      $$renderer2.push(`<!----></div></section></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const courseId = page.params.id ?? "";
    const isReady = courseApi.course?.id === courseId;
    head("1kk7ghp", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(courseApi.course?.title ?? store_get($$store_subs ??= {}, "$t", t)("course.navItem.certificates.editor.title"))}</title>`);
      });
    });
    $$renderer2.push(`<div class="ui:bg-background min-h-screen w-full">`);
    if (isReady) {
      $$renderer2.push("<!--[-->");
      Certificate_editor($$renderer2, { courseId });
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="flex min-h-[60vh] items-center justify-center">`);
      Spinner($$renderer2, { class: "size-8!" });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-4c1hIs9S.js.map
