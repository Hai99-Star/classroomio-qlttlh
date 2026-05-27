import { h as head, a as store_get, n as escape_html, f as ensure_array_like, l as attr_class, d as attr, e as stringify, c as bind_props, b as spread_props, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { g as goto } from './client2-CqohmrW2.js';
import { r as resolve } from './server3-VLoL706W.js';
import { t } from './translations-BxDrjLWK.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import { T as Textarea } from './textarea-CfVjMEtO.js';
import { B as Button, I as Icon$1 } from './button-McsHA0hU.js';
import { C as COURSE_TEMPLATES, D as DISPLAY_BY_ID, M as Model_picker, e as aiAssistantApi, s as setInitialChatPrompt, k as setInitialChatModel, j as AI_CHAT_MODEL_STORAGE_KEY } from './ai-assistant.svelte-DDk5Eqw5.js';
import { U as UI_PICKER_MODEL_IDS, A as AGENT_MODELS, D as DEFAULT_PICKER_MODEL_ID } from './index11-ChqzWCsR.js';
import './index4-3F2xRc80.js';
import './submission-CIIjGYOS.js';
import { d as isFreePlan } from './org-BIDTy0Q0.js';
import './question-type-capabilities-B1VkdJbc.js';
import { c as courseApi } from './course.svelte-dh_CGwPg.js';
import './content-BYLGOVzm.js';
import { o as openUpgradeModal } from './org2-B7sNZuj0.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { A as Award } from './award-BQe0egvP.js';
import { C as Circle } from './circle-x3XXIXjh.js';
import './utils2-DPSDgWhA.js';
import './exports-DiyTWREe.js';
import './index-AIbsv2Pd.js';
import './event-ByDKS2H7.js';
import './routing-Cz2vwfLK.js';
import '@sveltekit-i18n/parser-icu';
import './index6-DijlZyMe.js';
import './create-id-D7gdjJzW.js';
import './mounted-B958bjT3.js';
import './chevron-down2-mQy71LmC.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './check-92w5ryLF.js';
import './floating-layer-anchor-g9tHJXH3.js';
import './hidden-input-D1JyMc-e.js';
import './sr-only-styles-C-iucSJr.js';
import './index14-HMlD0kYH.js';
import './store.svelte-CDxZ1B8Q.js';
import './client3-CP3T_KrU.js';
import 'zod';
import './index9-BwUcGQXA.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './rocket-Dn-EQ87F.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import './shared-server-DaWdgxVh.js';
import './video-recording-settings-DX6acopI.js';
import 'lodash/merge.js';
import './compliance-utils-UIprJIyn.js';
import './index16-Bj79zRdC.js';
import './license.svelte-Cw7yPjRa.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './user-Ahqcoe6u.js';
import './store-D_AYzDdq.js';
import './courses.svelte-DHUYjzzY.js';

function Circle_check($$renderer, $$props) {
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
      ["path", { "d": "m9 12 2 2 4-4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "circle-check" },
      /**
       * @component @name CircleCheck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJtOSAxMiAyIDIgNC00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-check
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
function Compass($$renderer, $$props) {
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
          "d": "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
        }
      ],
      ["circle", { "cx": "12", "cy": "12", "r": "10" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "compass" },
      /**
       * @component @name Compass
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYuMjQgNy43Ni0xLjgwNCA1LjQxMWEyIDIgMCAwIDEtMS4yNjUgMS4yNjVMNy43NiAxNi4yNGwxLjgwNC01LjQxMWEyIDIgMCAwIDEgMS4yNjUtMS4yNjV6IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/compass
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
function Graduation_cap($$renderer, $$props) {
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
          "d": "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
        }
      ],
      ["path", { "d": "M22 10v6" }],
      ["path", { "d": "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "graduation-cap" },
      /**
       * @component @name GraduationCap
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuNDIgMTAuOTIyYTEgMSAwIDAgMC0uMDE5LTEuODM4TDEyLjgzIDUuMThhMiAyIDAgMCAwLTEuNjYgMEwyLjYgOS4wOGExIDEgMCAwIDAgMCAxLjgzMmw4LjU3IDMuOTA4YTIgMiAwIDAgMCAxLjY2IDB6IiAvPgogIDxwYXRoIGQ9Ik0yMiAxMHY2IiAvPgogIDxwYXRoIGQ9Ik02IDEyLjVWMTZhNiAzIDAgMCAwIDEyIDB2LTMuNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/graduation-cap
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
function Loader_circle$1($$renderer, $$props) {
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
    const iconNode = [["path", { "d": "M21 12a9 9 0 1 1-6.219-8.56" }]];
    Icon($$renderer2, spread_props([
      { name: "loader-circle" },
      /**
       * @component @name LoaderCircle
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTJhOSA5IDAgMSAxLTYuMjE5LTguNTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/loader-circle
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
function Arrow_up($$renderer, $$props) {
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
      ["path", { "d": "m5 12 7-7 7 7" }],
      ["path", { "d": "M12 19V5" }]
    ];
    Icon$1($$renderer2, spread_props([
      { name: "arrow-up" },
      /**
       * @component @name ArrowUp
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNSAxMiA3LTcgNyA3IiAvPgogIDxwYXRoIGQ9Ik0xMiAxOVY1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-up
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
function Loader_circle($$renderer, $$props) {
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
    const iconNode = [["path", { "d": "M21 12a9 9 0 1 1-6.219-8.56" }]];
    Icon$1($$renderer2, spread_props([
      { name: "loader-circle" },
      /**
       * @component @name LoaderCircle
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTJhOSA5IDAgMSAxLTYuMjE5LTguNTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/loader-circle
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
function Course_creator($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      heading,
      placeholder,
      loading = false,
      levelOptions = [],
      model = DEFAULT_PICKER_MODEL_ID,
      lockedModelIds = [],
      onModelChange,
      onLockedModelSelect,
      onsubmit,
      prompt = ""
    } = $$props;
    let level = "beginner";
    let selectedModel = model;
    const selectedLevelLabel = levelOptions.find((o) => o.value === level)?.label ?? levelOptions[0]?.label ?? "";
    const canSubmit = !!prompt.trim() && !loading;
    function handleModelChange(id) {
      selectedModel = id;
      onModelChange?.(id);
    }
    function handleSubmit() {
      if (!canSubmit) return;
      onsubmit?.({ prompt, level, model: selectedModel });
    }
    function handleKeydown(event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        handleSubmit();
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="ui:flex ui:w-full ui:flex-col ui:items-center ui:gap-8"><h1 class="ui:text-center ui:text-3xl ui:font-semibold ui:tracking-tight">${escape_html(heading)}</h1> <div class="ui:bg-card ui:w-full ui:max-w-3xl ui:rounded-2xl ui:border ui:p-4">`);
      Textarea($$renderer3, {
        placeholder,
        rows: 4,
        disabled: loading,
        onkeydown: handleKeydown,
        class: "ui:w-full ui:resize-none ui:border-0! ui:focus-visible:ring-0! ui:focus-visible:ring-offset-0! ui:dark:bg-card!",
        get value() {
          return prompt;
        },
        set value($$value) {
          prompt = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="ui:mt-3 ui:flex ui:items-center ui:gap-2"><!---->`);
      Root($$renderer3, {
        type: "single",
        disabled: loading,
        get value() {
          return level;
        },
        set value($$value) {
          level = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Select_trigger($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(selectedLevelLabel)}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Select_content($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!--[-->`);
              const each_array = ensure_array_like(levelOptions);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let option = each_array[$$index];
                $$renderer5.push(`<!---->`);
                Select_item($$renderer5, {
                  value: option.value,
                  label: option.label,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(option.label)}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              }
              $$renderer5.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Model_picker($$renderer3, {
        value: selectedModel,
        disabled: loading,
        variant: "select",
        lockedModelIds,
        onChange: handleModelChange,
        onLockedSelect: onLockedModelSelect
      });
      $$renderer3.push(`<!----> <div class="ui:ml-auto">`);
      Button($$renderer3, {
        variant: "default",
        size: "icon",
        disabled: !canSubmit,
        onclick: handleSubmit,
        children: ($$renderer4) => {
          if (loading) {
            $$renderer4.push("<!--[-->");
            Loader_circle($$renderer4, { class: "ui:h-4 ui:w-4 ui:animate-spin" });
          } else {
            $$renderer4.push("<!--[!-->");
            Arrow_up($$renderer4, { class: "ui:h-4 ui:w-4" });
          }
          $$renderer4.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div></div></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { prompt });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const steps = [
      {
        key: "reading",
        label: t.get("course.creator.drafting.step_reading")
      },
      {
        key: "naming",
        label: t.get("course.creator.drafting.step_naming")
      },
      {
        key: "building",
        label: t.get("course.creator.drafting.step_building")
      }
    ];
    let creatingState = "idle";
    let creatingStep = "reading";
    let draftingPrompt = "";
    let composerPrompt = "";
    let selectedTemplateId = null;
    let selectedModel = DEFAULT_PICKER_MODEL_ID;
    const paidModelIds = UI_PICKER_MODEL_IDS.filter((id) => !AGENT_MODELS[id].isFree);
    function isAgentModelId(value) {
      return typeof value === "string" && UI_PICKER_MODEL_IDS.includes(value);
    }
    function stepStatus(key) {
      const order = ["reading", "naming", "building"];
      const current = order.indexOf(creatingStep);
      const target = order.indexOf(key);
      if (target < current) return "done";
      if (target === current) return "active";
      return "pending";
    }
    function handleModelChange(model) {
      if (!isAgentModelId(model)) return;
      if (store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan) && paidModelIds.includes(model)) {
        openUpgradeModal();
        return;
      }
      selectedModel = model;
      try {
        localStorage.setItem(AI_CHAT_MODEL_STORAGE_KEY, model);
      } catch {
      }
    }
    function handleLockedModelSelect() {
      openUpgradeModal();
    }
    async function handleCreate({ prompt, level, model }) {
      if (isAgentModelId(model)) {
        if (store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan) && paidModelIds.includes(model)) {
          openUpgradeModal();
          return;
        }
        handleModelChange(model);
      }
      draftingPrompt = prompt;
      creatingState = "creating";
      creatingStep = "reading";
      await new Promise((r) => setTimeout(r, 700));
      creatingStep = "naming";
      let title;
      let description;
      {
        const meta = await aiAssistantApi.generateCourseMeta(prompt);
        title = meta?.title ?? prompt.slice(0, 80);
        description = meta?.description ?? prompt.slice(0, 150);
      }
      creatingStep = "building";
      setInitialChatPrompt(`${prompt}

Course type: Self-paced. Level: ${level}.`);
      setInitialChatModel(selectedModel);
      await courseApi.create({ title, description, type: "SELF_PACED" }, (courseId) => {
        goto(resolve(`/courses/${courseId}/lessons`, {}));
      });
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("1a4i1gm", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Home - ClassroomIO</title>`);
        });
      });
      if (creatingState === "creating") {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-4"><div class="flex flex-col items-center gap-2 text-center"><h1 class="text-2xl font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.creator.drafting.heading"))}</h1> <p class="ui:text-muted-foreground text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.creator.drafting.subtext"))}</p></div> <div class="ui:border w-full max-w-lg rounded-2xl p-5"><p class="mb-5 text-sm text-neutral-300 italic">"${escape_html(draftingPrompt)}"</p> <div class="flex flex-col gap-3"><!--[-->`);
        const each_array = ensure_array_like(steps);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let step = each_array[$$index];
          const status = stepStatus(step.key);
          $$renderer3.push(`<div class="flex items-center gap-3">`);
          if (status === "done") {
            $$renderer3.push("<!--[-->");
            Circle_check($$renderer3, { class: "h-4 w-4 shrink-0 text-green-500" });
          } else {
            $$renderer3.push("<!--[!-->");
            if (status === "active") {
              $$renderer3.push("<!--[-->");
              Loader_circle$1($$renderer3, { class: "h-4 w-4 shrink-0 animate-spin text-white" });
            } else {
              $$renderer3.push("<!--[!-->");
              Circle($$renderer3, { class: "h-4 w-4 shrink-0 text-neutral-600" });
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--> <span${attr_class(`text-sm ${stringify(status === "done" ? "text-neutral-400 line-through" : status === "active" ? "ui:text-foreground" : "ui:text-muted-foreground")}`)}>${escape_html(step.label)}</span></div>`);
        }
        $$renderer3.push(`<!--]--></div></div></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="flex min-h-[90vh] items-center justify-center px-4 py-12"><div class="w-full max-w-3xl">`);
        Course_creator($$renderer3, {
          heading: store_get($$store_subs ??= {}, "$t", t)("course.creator.heading"),
          placeholder: store_get($$store_subs ??= {}, "$t", t)("course.creator.placeholder"),
          model: selectedModel,
          levelOptions: [
            {
              value: "beginner",
              label: store_get($$store_subs ??= {}, "$t", t)("course.creator.level.beginner")
            },
            {
              value: "intermediate",
              label: store_get($$store_subs ??= {}, "$t", t)("course.creator.level.intermediate")
            },
            {
              value: "advanced",
              label: store_get($$store_subs ??= {}, "$t", t)("course.creator.level.advanced")
            }
          ],
          lockedModelIds: store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan) ? paidModelIds : [],
          onModelChange: handleModelChange,
          onLockedModelSelect: handleLockedModelSelect,
          onsubmit: handleCreate,
          get prompt() {
            return composerPrompt;
          },
          set prompt($$value) {
            composerPrompt = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> <p class="ui:text-muted-foreground my-3 text-center text-sm font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.creator.template.heading"))}</p> <div class="grid gap-3 sm:grid-cols-3"><!--[-->`);
        const each_array_1 = ensure_array_like(COURSE_TEMPLATES);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let template = each_array_1[$$index_1];
          const display = DISPLAY_BY_ID[template.id];
          const isSelected = selectedTemplateId === template.id;
          $$renderer3.push(`<button type="button"${attr_class(`group ui:border ui:transition-colors focus-visible:ui:ring-[3px] focus-visible:ui:ring-ring/50 focus-visible:ui:outline-none flex h-full min-h-[168px] w-full cursor-pointer flex-col items-start gap-3 rounded-2xl p-5 text-left sm:p-6 ${stringify(isSelected ? "ui:bg-primary/5 ui:border-primary ui:ring-primary/20 ui:ring-2" : "ui:bg-card ui:border-border ui:hover:border-primary")}`)}${attr("aria-label", store_get($$store_subs ??= {}, "$t", t)(display.titleKey))}${attr("aria-pressed", isSelected)}><div class="ui:text-primary ui:bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-lg">`);
          if (display.iconName === "GraduationCap") {
            $$renderer3.push("<!--[-->");
            Graduation_cap($$renderer3, { class: "size-6" });
          } else {
            $$renderer3.push("<!--[!-->");
            if (display.iconName === "Compass") {
              $$renderer3.push("<!--[-->");
              Compass($$renderer3, { class: "size-6" });
            } else {
              $$renderer3.push("<!--[!-->");
              Award($$renderer3, { class: "size-6" });
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></div> <span class="ui:text-foreground text-sm leading-tight font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)(display.titleKey))}</span> <span class="ui:text-muted-foreground text-xs leading-snug">${escape_html(store_get($$store_subs ??= {}, "$t", t)(display.descriptionKey))}</span></button>`);
        }
        $$renderer3.push(`<!--]--></div></div></div>`);
      }
      $$renderer3.push(`<!--]-->`);
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

export { _page as default };
//# sourceMappingURL=_page.svelte-BxJWoauQ.js.map
