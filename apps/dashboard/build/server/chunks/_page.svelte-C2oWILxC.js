import { h as head, n as escape_html, a as store_get, f as ensure_array_like, u as unsubscribe_stores, l as attr_class, j as clsx, m as attr_style, e as stringify, b as spread_props } from './index2-Eg0dVEDW.js';
import { t } from './translations-BxDrjLWK.js';
import { c as currentOrg } from './org-t71AQfHV.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { c as cn } from './index6-DijlZyMe.js';
import { P as Page } from './page-CIWgv5lu.js';
import { U as Underline_tabs, a as Underline_tabs_list, b as Underline_tabs_trigger, c as Underline_tabs_content } from './underline-tabs-trigger-kfAMW9ai.js';
import { B as Button, S as Spinner } from './button-McsHA0hU.js';
import { C as Card, b as Card_title, c as Card_description, a as Card_content } from './card-title-BAC38wyM.js';
import { C as Card_header } from './card-header-CpBV_NsL.js';
import { S as Shield_check } from './shield-check-mDLcvAsw.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { T as Triangle_alert } from './triangle-alert-PDu4bwpl.js';
import { C as Clock } from './clock-CYOMG4Z1.js';
import { C as Circle_question_mark } from './circle-question-mark2-CWZxAwwq.js';
import { T as Table, a as Table_header, b as Table_row, c as Table_head, d as Table_body, e as Table_cell } from './table-row-D0a1OYFI.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { B as Book } from './book-B8R-KVy3.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { U as User_avatar } from './user-avatar-C553w_lG.js';
import { U as Users } from './users-CS_ofwgc.js';
import { c as classroomio } from './index4-CY3O4yvX.js';
import { a as BaseApi } from './base.svelte-Bh2VVy5Z.js';
import { R as Refresh_cw } from './refresh-cw-DDDmx78S.js';
import './utils2-DPSDgWhA.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './domains-D9J1UytB.js';
import './create-id-D7gdjJzW.js';
import './tabs-trigger-BTKUSTH_.js';
import './tabs-content-HVCoSzw-.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './context2-Dq8HS6q_.js';
import './index14-HMlD0kYH.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './empty-media-ClSn1CG9.js';
import './avatar-fallback-CG2pdu70.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './shared-server-DaWdgxVh.js';
import 'zod/v4';

function Circle_dashed($$renderer, $$props) {
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
      ["path", { "d": "M10.1 2.182a10 10 0 0 1 3.8 0" }],
      ["path", { "d": "M13.9 21.818a10 10 0 0 1-3.8 0" }],
      ["path", { "d": "M17.609 3.721a10 10 0 0 1 2.69 2.7" }],
      ["path", { "d": "M2.182 13.9a10 10 0 0 1 0-3.8" }],
      ["path", { "d": "M20.279 17.609a10 10 0 0 1-2.7 2.69" }],
      ["path", { "d": "M21.818 10.1a10 10 0 0 1 0 3.8" }],
      ["path", { "d": "M3.721 6.391a10 10 0 0 1 2.7-2.69" }],
      ["path", { "d": "M6.391 20.279a10 10 0 0 1-2.69-2.7" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "circle-dashed" },
      /**
       * @component @name CircleDashed
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuMSAyLjE4MmExMCAxMCAwIDAgMSAzLjggMCIgLz4KICA8cGF0aCBkPSJNMTMuOSAyMS44MThhMTAgMTAgMCAwIDEtMy44IDAiIC8+CiAgPHBhdGggZD0iTTE3LjYwOSAzLjcyMWExMCAxMCAwIDAgMSAyLjY5IDIuNyIgLz4KICA8cGF0aCBkPSJNMi4xODIgMTMuOWExMCAxMCAwIDAgMSAwLTMuOCIgLz4KICA8cGF0aCBkPSJNMjAuMjc5IDE3LjYwOWExMCAxMCAwIDAgMS0yLjcgMi42OSIgLz4KICA8cGF0aCBkPSJNMjEuODE4IDEwLjFhMTAgMTAgMCAwIDEgMCAzLjgiIC8+CiAgPHBhdGggZD0iTTMuNzIxIDYuMzkxYTEwIDEwIDAgMCAxIDIuNy0yLjY5IiAvPgogIDxwYXRoIGQ9Ik02LjM5MSAyMC4yNzlhMTAgMTAgMCAwIDEtMi42OS0yLjciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/circle-dashed
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
function Circle_slash($$renderer, $$props) {
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
      ["circle", { "cx": "12", "cy": "12", "r": "10" }],
      ["line", { "x1": "9", "x2": "15", "y1": "15", "y2": "9" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "circle-slash" },
      /**
       * @component @name CircleSlash
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8bGluZSB4MT0iOSIgeDI9IjE1IiB5MT0iMTUiIHkyPSI5IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-slash
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
function Footprints($$renderer, $$props) {
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
          "d": "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
        }
      ],
      [
        "path",
        {
          "d": "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
        }
      ],
      ["path", { "d": "M16 17h4" }],
      ["path", { "d": "M4 13h4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "footprints" },
      /**
       * @component @name Footprints
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxNnYtMi4zOEM0IDExLjUgMi45NyAxMC41IDMgOGMuMDMtMi43MiAxLjQ5LTYgNC41LTZDOS4zNyAyIDEwIDMuOCAxMCA1LjVjMCAzLjExLTIgNS42Ni0yIDguNjhWMTZhMiAyIDAgMSAxLTQgMFoiIC8+CiAgPHBhdGggZD0iTTIwIDIwdi0yLjM4YzAtMi4xMiAxLjAzLTMuMTIgMS01LjYyLS4wMy0yLjcyLTEuNDktNi00LjUtNkMxNC42MyA2IDE0IDcuOCAxNCA5LjVjMCAzLjExIDIgNS42NiAyIDguNjhWMjBhMiAyIDAgMSAwIDQgMFoiIC8+CiAgPHBhdGggZD0iTTE2IDE3aDQiIC8+CiAgPHBhdGggZD0iTTQgMTNoNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/footprints
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
function Shield_off($$renderer, $$props) {
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
      ["path", { "d": "m2 2 20 20" }],
      [
        "path",
        {
          "d": "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"
        }
      ],
      [
        "path",
        {
          "d": "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "shield-off" },
      /**
       * @component @name ShieldOff
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMiAyIDIwIDIwIiAvPgogIDxwYXRoIGQ9Ik01IDVhMSAxIDAgMCAwLTEgMXY3YzAgNSAzLjUgNy41IDcuNjcgOC45NGExIDEgMCAwIDAgLjY3LjAxYzIuMzUtLjgyIDQuNDgtMS45NyA1LjktMy43MSIgLz4KICA8cGF0aCBkPSJNOS4zMDkgMy42NTJBMTIuMjUyIDEyLjI1MiAwIDAgMCAxMS4yNCAyLjI4YTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXY3YTkuNzg0IDkuNzg0IDAgMCAxLS4wOCAxLjI2NCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/shield-off
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
function Status_tiles($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const tiles = [
      {
        key: "compliant",
        labelKey: "compliance.status.compliant",
        icon: Shield_check,
        tone: "success"
      },
      {
        key: "non_compliant",
        labelKey: "compliance.status.non_compliant",
        icon: Shield_off,
        tone: "danger"
      },
      {
        key: "expiring_soon",
        labelKey: "compliance.status.expiring_soon",
        icon: Triangle_alert,
        tone: "warning"
      },
      {
        key: "in_grace_period",
        labelKey: "compliance.status.in_grace_period",
        icon: Clock,
        tone: "warning"
      },
      {
        key: "in_progress",
        labelKey: "compliance.status.in_progress",
        icon: Footprints,
        tone: "info"
      },
      {
        key: "not_started",
        labelKey: "compliance.status.not_started",
        icon: Circle_dashed,
        tone: "muted"
      },
      {
        key: "waived",
        labelKey: "compliance.status.waived",
        icon: Circle_slash,
        tone: "muted"
      },
      {
        key: "no_record",
        labelKey: "compliance.status.no_record",
        icon: Circle_question_mark,
        tone: "muted"
      }
    ];
    const toneClass = {
      success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      danger: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
      info: "ui:bg-primary/10 ui:text-primary",
      muted: "ui:bg-muted ui:text-muted-foreground"
    };
    const counts = data?.summary.counts ?? null;
    $$renderer2.push(`<!---->`);
    Card($$renderer2, {
      class: "ui:bg-card",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Card_header($$renderer3, {
          class: "pb-2",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Card_title($$renderer4, {
              class: "text-base font-semibold",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.summary.heading"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.summary.description"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Card_content($$renderer3, {
          class: "pt-0",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4"><!--[-->`);
            const each_array = ensure_array_like(tiles);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let tile = each_array[$$index];
              $$renderer4.push(`<div class="flex min-w-0 flex-col gap-2"><div${attr_class(clsx(cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full", toneClass[tile.tone])))}><!---->`);
              tile.icon($$renderer4, { class: "h-4 w-4" });
              $$renderer4.push(`<!----></div> <p class="ui:text-foreground text-2xl font-semibold tabular-nums">${escape_html(counts?.[tile.key] ?? 0)}</p> <p class="ui:text-muted-foreground text-xs leading-snug">${escape_html(store_get($$store_subs ??= {}, "$t", t)(tile.labelKey))}</p></div>`);
            }
            $$renderer4.push(`<!--]--></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Course_breakdown($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { rows } = $$props;
    $$renderer2.push(`<!---->`);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Card_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.courses.heading"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.courses.description"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (rows.length === 0) {
              $$renderer4.push("<!--[-->");
              Empty($$renderer4, {
                icon: Book,
                title: store_get($$store_subs ??= {}, "$t", t)("compliance.courses.empty")
              });
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<!---->`);
              Table($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Table_header($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Table_row($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->`);
                          Table_head($$renderer7, {
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.courses.course"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Table_head($$renderer7, {
                            class: "text-right",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.courses.learners"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Table_head($$renderer7, {
                            class: "text-right",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.status.compliant"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Table_head($$renderer7, {
                            class: "text-right",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.status.expiring_soon"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Table_head($$renderer7, {
                            class: "text-right",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.status.non_compliant"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Table_head($$renderer7, {
                            class: "text-right",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.courses.completion"))}`);
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
                  $$renderer5.push(`<!----> <!---->`);
                  Table_body($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!--[-->`);
                      const each_array = ensure_array_like(rows);
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let row = each_array[$$index];
                        const complete = row.counts.compliant;
                        const percent = row.learnerCount > 0 ? Math.round(complete / row.learnerCount * 100) : 0;
                        $$renderer6.push(`<!---->`);
                        Table_row($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->`);
                            Table_cell($$renderer7, {
                              class: "font-medium",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(row.courseTitle)}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_cell($$renderer7, {
                              class: "text-right tabular-nums",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(row.learnerCount)}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_cell($$renderer7, {
                              class: "text-right tabular-nums",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(row.counts.compliant)}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_cell($$renderer7, {
                              class: "text-right tabular-nums",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(row.counts.expiring_soon)}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_cell($$renderer7, {
                              class: "text-right tabular-nums",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(row.counts.non_compliant)}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_cell($$renderer7, {
                              class: "text-right",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<div class="flex items-center justify-end gap-2"><div class="ui:bg-muted h-1.5 w-20 overflow-hidden rounded-full"><div class="ui:bg-primary h-full"${attr_style(`width: ${stringify(percent)}%`)}></div></div> <span class="ui:text-muted-foreground w-9 text-right text-xs tabular-nums">${escape_html(percent)}%</span></div>`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!---->`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Learners_table($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { rows, statusFilter = "all" } = $$props;
    const filtered = statusFilter === "all" ? rows : rows.filter((row) => row.status === statusFilter);
    const statusTone = {
      compliant: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
      expiring_soon: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
      in_grace_period: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
      non_compliant: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
      waived: "ui:bg-muted ui:text-muted-foreground",
      in_progress: "ui:bg-primary/10 ui:text-primary",
      not_started: "ui:bg-muted ui:text-muted-foreground",
      no_record: "ui:bg-muted ui:text-muted-foreground"
    };
    function statusLabel(status) {
      return store_get($$store_subs ??= {}, "$t", t)(`compliance.status.${status}`);
    }
    function formatDate(iso) {
      if (!iso) return "—";
      const date = new Date(iso);
      if (Number.isNaN(date.getTime())) return "—";
      return date.toLocaleDateString();
    }
    $$renderer2.push(`<!---->`);
    Card($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Card_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.learners.heading"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.learners.subtitle", { count: filtered.length }))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (filtered.length === 0) {
              $$renderer4.push("<!--[-->");
              Empty($$renderer4, {
                icon: Users,
                title: store_get($$store_subs ??= {}, "$t", t)("compliance.learners.empty")
              });
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<!---->`);
              Table($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Table_header($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Table_row($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->`);
                          Table_head($$renderer7, {
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.learners.learner"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Table_head($$renderer7, {
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.learners.course"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Table_head($$renderer7, {
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.learners.status"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Table_head($$renderer7, {
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.learners.due_date"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Table_head($$renderer7, {
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.learners.expires"))}`);
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
                  $$renderer5.push(`<!----> <!---->`);
                  Table_body($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!--[-->`);
                      const each_array = ensure_array_like(filtered);
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let row = each_array[$$index];
                        $$renderer6.push(`<!---->`);
                        Table_row($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->`);
                            Table_cell($$renderer7, {
                              children: ($$renderer8) => {
                                $$renderer8.push(`<div class="flex items-center gap-2">`);
                                User_avatar($$renderer8, {
                                  src: row.avatarUrl,
                                  alt: row.fullname ?? row.email ?? "Learner",
                                  class: "h-7 w-7"
                                });
                                $$renderer8.push(`<!----> <div class="min-w-0"><p class="ui:text-foreground truncate text-sm font-medium">${escape_html(row.fullname ?? "—")}</p> <p class="ui:text-muted-foreground truncate text-xs">${escape_html(row.email ?? "")}</p></div></div>`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_cell($$renderer7, {
                              class: "text-sm",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(row.courseTitle)}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_cell($$renderer7, {
                              children: ($$renderer8) => {
                                Badge($$renderer8, {
                                  variant: "outline",
                                  class: statusTone[row.status],
                                  children: ($$renderer9) => {
                                    $$renderer9.push(`<!---->${escape_html(statusLabel(row.status))}`);
                                  },
                                  $$slots: { default: true }
                                });
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_cell($$renderer7, {
                              class: "ui:text-muted-foreground text-sm",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(formatDate(row.dueDate))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_cell($$renderer7, {
                              class: "ui:text-muted-foreground text-sm",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(formatDate(row.validUntil))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!---->`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
class ComplianceApi extends BaseApi {
  overview = null;
  loading = false;
  lastFetchedOrgId = null;
  async fetchOverview(orgId) {
    if (!orgId) return;
    this.loading = true;
    this.lastFetchedOrgId = orgId;
    await this.execute({
      requestFn: () => classroomio.dash["compliance-overview"].$get({ query: { orgId } }),
      logContext: "fetching org compliance overview",
      onSuccess: (response) => {
        this.overview = response.data;
      }
    });
    this.loading = false;
  }
  ensureFetched(orgId) {
    if (this.lastFetchedOrgId === orgId) return;
    this.fetchOverview(orgId);
  }
}
const complianceApi = new ComplianceApi();
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    function handleRefresh() {
      const orgId = store_get($$store_subs ??= {}, "$currentOrg", currentOrg).id;
      if (!orgId) return;
      complianceApi.fetchOverview(orgId);
    }
    const statusFilters = [
      "all",
      "compliant",
      "expiring_soon",
      "in_grace_period",
      "non_compliant",
      "in_progress",
      "not_started",
      "waived",
      "no_record"
    ];
    let activeFilter = "all";
    head("oxsrla", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.title"))} - ClassroomIO</title>`);
      });
    });
    $$renderer2.push(`<!---->`);
    Page($$renderer2, {
      class: "w-full",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Page_header($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.title"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <p class="ui:text-muted-foreground text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.subtitle"))}</p>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Page_action($$renderer4, {
              children: ($$renderer5) => {
                Button($$renderer5, {
                  variant: "outline",
                  size: "sm",
                  disabled: complianceApi.loading,
                  onclick: handleRefresh,
                  children: ($$renderer6) => {
                    Refresh_cw($$renderer6, { class: complianceApi.loading ? "animate-spin" : "" });
                    $$renderer6.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.refresh"))}`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        {
          let child = function($$renderer4) {
            $$renderer4.push(`<div class="space-y-6">`);
            if (complianceApi.loading && !complianceApi.overview) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="flex h-32 items-center justify-center">`);
              Spinner($$renderer4, { class: "ui:text-muted-foreground size-6" });
              $$renderer4.push(`<!----></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Status_tiles($$renderer4, { data: complianceApi.overview });
              $$renderer4.push(`<!----> <!---->`);
              Underline_tabs($$renderer4, {
                value: "courses",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Underline_tabs_list($$renderer5, {
                    class: "mb-6",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Underline_tabs_trigger($$renderer6, {
                        value: "courses",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.tabs.courses"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> <!---->`);
                      Underline_tabs_trigger($$renderer6, {
                        value: "learners",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("compliance.tabs.learners"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Underline_tabs_content($$renderer5, {
                    value: "courses",
                    class: "space-y-4",
                    children: ($$renderer6) => {
                      Course_breakdown($$renderer6, { rows: complianceApi.overview?.courses ?? [] });
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Underline_tabs_content($$renderer5, {
                    value: "learners",
                    class: "space-y-4",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<div class="flex flex-wrap gap-2"><!--[-->`);
                      const each_array = ensure_array_like(statusFilters);
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let filter = each_array[$$index];
                        Button($$renderer6, {
                          variant: activeFilter === filter ? "default" : "outline",
                          size: "sm",
                          onclick: () => activeFilter = filter,
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`compliance.filter.${filter}`))}`);
                          },
                          $$slots: { default: true }
                        });
                      }
                      $$renderer6.push(`<!--]--></div> `);
                      Learners_table($$renderer6, {
                        rows: complianceApi.overview?.learners ?? [],
                        statusFilter: activeFilter
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
            }
            $$renderer4.push(`<!--]--></div>`);
          };
          Page_body($$renderer3, { child, $$slots: { child: true } });
        }
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C2oWILxC.js.map
