import { f as ensure_array_like, d as attr, m as attr_style, n as escape_html, e as stringify, l as attr_class, j as clsx, b as spread_props } from './index2-Eg0dVEDW.js';
import { h as html } from './html-FW6Ia4bL.js';
import { N as Nav$5, H as Hero$5, a as Nav$1$1, b as Hero$1$1, c as Hero$2$1, S as Secondary_action_button, d as Nav$2$1 } from './hero-Dwb5biIu.js';
import { B as Blurfade } from './blurfade-BtQcpqGq.js';
import { L as Landing_page_footer, G as Globe, E as Editable_section } from './landing-page-footer-C4QvJE2h.js';
import { l as landingPageLinkIconMap } from './landing-page-1a54p-PE.js';
import { c as cn } from './index6-DijlZyMe.js';
import { D as Dot_pattern } from './dot-pattern-BsrHOSuA.js';
import { C as Card, a as Card_content, b as Card_title, c as Card_description } from './card-title-BAC38wyM.js';
import { A as Arrow_right } from './arrow-right-BFYbcsyD.js';
import { B as Button, I as Icon } from './button-McsHA0hU.js';
import './item-CUOTGwjL.js';
import { C as Course_card, I as Item_sub_description } from './course-card-DsfvWmvV.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';

function Circle_dot($$renderer, $$props) {
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
      ["circle", { "cx": "12", "cy": "12", "r": "10" }],
      ["circle", { "cx": "12", "cy": "12", "r": "1" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "circle-dot" },
      /**
       * @component @name CircleDot
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-dot
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
function Border_beam($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      size = 200,
      duration = 15,
      anchor = 90,
      borderWidth = 1.5,
      colorFrom = "#ffaa40",
      colorTo = "#9c40ff",
      delay = 0,
      class: className = ""
    } = $$props;
    $$renderer2.push(`<div${attr_class(clsx(cn("cio-marketing-border-beam", className)))}${attr_style("", {
      "--border-width": borderWidth,
      "--size": size,
      "--color-from": colorFrom,
      "--color-to": colorTo,
      "--delay": `${stringify(delay)}s`,
      "--anchor": anchor,
      "--duration": duration
    })}></div>`);
  });
}
function Clock($$renderer, $$props) {
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
      ["path", { "d": "M12 6v6l4 2" }],
      ["circle", { "cx": "12", "cy": "12", "r": "10" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "clock" },
      /**
       * @component @name Clock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNnY2bDQgMiIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clock
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
function Shield_check($$renderer, $$props) {
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
          "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { "d": "m9 12 2 2 4-4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "shield-check" },
      /**
       * @component @name ShieldCheck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiIC8+CiAgPHBhdGggZD0ibTkgMTIgMiAyIDQtNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/shield-check
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
function Tag($$renderer, $$props) {
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
          "d": "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
        }
      ],
      [
        "circle",
        { "cx": "7.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "tag" },
      /**
       * @component @name Tag
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuNTg2IDIuNTg2QTIgMiAwIDAgMCAxMS4xNzIgMkg0YTIgMiAwIDAgMC0yIDJ2Ny4xNzJhMiAyIDAgMCAwIC41ODYgMS40MTRsOC43MDQgOC43MDRhMi40MjYgMi40MjYgMCAwIDAgMy40MiAwbDYuNTgtNi41OGEyLjQyNiAyLjQyNiAwIDAgMCAwLTMuNDJ6IiAvPgogIDxjaXJjbGUgY3g9IjcuNSIgY3k9IjcuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/tag
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
function User($$renderer, $$props) {
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
      ["path", { "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
      ["circle", { "cx": "12", "cy": "7", "r": "4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "user" },
      /**
       * @component @name User
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTkgMjF2LTJhNCA0IDAgMCAwLTQtNEg5YTQgNCAwIDAgMC00IDR2MiIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/user
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
function Embed($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { embed, variant = "minimal" } = $$props;
    if (embed) {
      $$renderer2.push("<!--[-->");
      Editable_section($$renderer2, {
        sectionKey: "embed",
        children: ($$renderer3) => {
          if (variant === "terminal") {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<section class="ui:py-24 ui:px-6" style="border-top: 1px solid #1c1f28; background: #06070a;"><div class="ui:mx-auto ui:max-w-[1120px]">`);
            Blurfade($$renderer3, {
              delay: 0,
              once: true,
              children: ($$renderer4) => {
                $$renderer4.push(`<p class="ui:font-mono ui:text-[11px] ui:tracking-[0.12em] ui:uppercase ui:mb-3 ui:inline-flex ui:items-center ui:gap-2" style="color: var(--primary);"><span class="ui:size-1.5 ui:rounded-full" style="background: var(--primary); box-shadow: 0 0 12px var(--primary);"></span> Embed</p>`);
              }
            });
            $$renderer3.push(`<!----> `);
            Blurfade($$renderer3, {
              delay: 0.08,
              once: true,
              children: ($$renderer4) => {
                $$renderer4.push(`<h3 class="ui:text-[36px] ui:font-semibold ui:tracking-tight ui:m-0 ui:mb-4" style="color: #e9eaed; line-height: 1.1; letter-spacing: -0.025em;">${escape_html(embed.title)}</h3>`);
              }
            });
            $$renderer3.push(`<!----> `);
            if (embed.description?.trim()) {
              $$renderer3.push("<!--[-->");
              Blurfade($$renderer3, {
                delay: 0.16,
                once: true,
                children: ($$renderer4) => {
                  $$renderer4.push(`<p class="ui:max-w-xl ui:m-0 ui:mb-6 ui:text-[15px]" style="color: #9da1ab;">${escape_html(embed.description)}</p>`);
                }
              });
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (embed.secondaryAction?.label && embed.secondaryAction?.href) {
              $$renderer3.push("<!--[-->");
              Blurfade($$renderer3, {
                delay: 0.22,
                once: true,
                children: ($$renderer4) => {
                  $$renderer4.push(`<div class="ui:mb-8">`);
                  Secondary_action_button($$renderer4, {
                    href: embed.secondaryAction.href,
                    label: embed.secondaryAction.label,
                    variant
                  });
                  $$renderer4.push(`<!----></div>`);
                }
              });
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (embed.code) {
              $$renderer3.push("<!--[-->");
              Blurfade($$renderer3, {
                delay: 0.3,
                once: true,
                children: ($$renderer4) => {
                  $$renderer4.push(`<div class="ui:rounded-xl ui:overflow-hidden ui:max-w-[820px]" style="border: 1px solid #262a35; background: #0f1218; box-shadow: 0 30px 90px -30px rgba(0,0,0,0.7);"><div class="ui:p-5 ui:overflow-x-auto" style="color: #e9eaed;">${html(embed.code)}</div></div>`);
                }
              });
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--></div></section>`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<section class="ui:py-12 ui:px-6 ui:md:px-8"><div class="ui:mx-auto ui:flex ui:max-w-7xl ui:flex-col ui:items-center ui:gap-6 ui:text-center">`);
            Blurfade($$renderer3, {
              delay: 0,
              once: true,
              children: ($$renderer4) => {
                $$renderer4.push(`<h3 class="ui:text-center ui:text-2xl ui:font-semibold ui:tracking-tight">${escape_html(embed.title)}</h3>`);
              }
            });
            $$renderer3.push(`<!----> `);
            if (embed.description?.trim()) {
              $$renderer3.push("<!--[-->");
              Blurfade($$renderer3, {
                delay: 0.12,
                once: true,
                children: ($$renderer4) => {
                  $$renderer4.push(`<p class="ui:max-w-3xl ui:text-center ui:text-base ui:leading-7 ui:text-muted-foreground">${escape_html(embed.description)}</p>`);
                }
              });
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (embed.secondaryAction?.label && embed.secondaryAction?.href) {
              $$renderer3.push("<!--[-->");
              Blurfade($$renderer3, {
                delay: 0.2,
                once: true,
                children: ($$renderer4) => {
                  Secondary_action_button($$renderer4, {
                    href: embed.secondaryAction.href,
                    label: embed.secondaryAction.label,
                    variant
                  });
                }
              });
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (embed.code) {
              $$renderer3.push("<!--[-->");
              Blurfade($$renderer3, {
                delay: 0.28,
                once: true,
                children: ($$renderer4) => {
                  $$renderer4.push(`<div class="ui:flex ui:w-full ui:justify-center">${html(embed.code)}</div>`);
                }
              });
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--></div></section>`);
          }
          $$renderer3.push(`<!--]-->`);
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Links($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { links, variant = "minimal" } = $$props;
    function linkDisplayHint(href) {
      const trimmed = href.trim();
      if (!trimmed) return "";
      try {
        const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
        const url = new URL(withProtocol);
        return url.hostname.replace(/^www\./, "");
      } catch {
        return trimmed.length > 48 ? `${trimmed.slice(0, 45)}…` : trimmed;
      }
    }
    if (links && links.cards.length > 0) {
      $$renderer2.push("<!--[-->");
      Editable_section($$renderer2, {
        sectionKey: "links",
        children: ($$renderer3) => {
          if (variant === "minimal") {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<section class="ui:py-20 ui:px-4"><div class="ui:max-w-[1200px] ui:mx-auto">`);
            Blurfade($$renderer3, {
              delay: 0,
              once: true,
              children: ($$renderer4) => {
                $$renderer4.push(`<h2${attr_class(`ui:text-2xl ui:font-semibold ${stringify(links.description?.trim() ? "ui:mb-3" : "ui:mb-10")}`)}>${escape_html(links.heading)}</h2>`);
              }
            });
            $$renderer3.push(`<!----> `);
            if (links.description?.trim()) {
              $$renderer3.push("<!--[-->");
              Blurfade($$renderer3, {
                delay: 0.12,
                once: true,
                children: ($$renderer4) => {
                  $$renderer4.push(`<p class="ui:text-base ui:text-muted-foreground ui:max-w-2xl ui:mb-10">${escape_html(links.description)}</p>`);
                }
              });
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:lg:grid-cols-3 ui:gap-6"><!--[-->`);
            const each_array = ensure_array_like(links.cards);
            for (let index = 0, $$length = each_array.length; index < $$length; index++) {
              let card = each_array[index];
              const IconComponent = landingPageLinkIconMap[card.icon];
              Blurfade($$renderer3, {
                delay: 0.1 * index,
                once: true,
                children: ($$renderer4) => {
                  $$renderer4.push(`<a${attr("href", card.href)} target="_blank" rel="noreferrer" class="ui:group ui:block ui:h-full ui:no-underline"${attr("aria-label", `${card.title} — ${linkDisplayHint(card.href)} (opens in new tab)`)}><!---->`);
                  Card($$renderer4, {
                    class: "ui:rounded-none ui:border-border/60 ui:shadow-none ui:h-full ui:p-0 ui:gap-0 ui:transition-colors ui:hover:border-border",
                    children: ($$renderer5) => {
                      $$renderer5.push(`<!---->`);
                      Card_content($$renderer5, {
                        class: "ui:p-8 ui:flex ui:flex-col ui:flex-1 ui:h-full",
                        children: ($$renderer6) => {
                          $$renderer6.push(`<!---->`);
                          IconComponent($$renderer6, {
                            class: "ui:size-6 ui:text-foreground ui:mb-6",
                            "aria-hidden": "true"
                          });
                          $$renderer6.push(`<!----> <!---->`);
                          Card_title($$renderer6, {
                            class: "ui:text-xl ui:font-normal ui:mb-3",
                            children: ($$renderer7) => {
                              $$renderer7.push(`<!---->${escape_html(card.title)}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer6.push(`<!----> <!---->`);
                          Card_description($$renderer6, {
                            class: "ui:text-base ui:leading-relaxed ui:text-muted-foreground ui:line-clamp-3 ui:mb-6",
                            children: ($$renderer7) => {
                              $$renderer7.push(`<!---->${escape_html(card.description)}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer6.push(`<!----> <div class="ui:flex ui:items-center ui:gap-1.5 ui:text-sm ui:text-muted-foreground ui:mt-auto" aria-hidden="true"><span class="ui:truncate">${escape_html(linkDisplayHint(card.href))}</span> `);
                          Arrow_right($$renderer6, {
                            class: "ui:size-4 ui:shrink-0 ui:transition-transform ui:group-hover:translate-x-0.5"
                          });
                          $$renderer6.push(`<!----></div>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push(`<!----></a>`);
                }
              });
            }
            $$renderer3.push(`<!--]--></div></div></section>`);
          } else {
            $$renderer3.push("<!--[!-->");
            if (variant === "tech") {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<section class="ui:relative ui:py-24 ui:px-6 ui:bg-primary ui:text-primary-foreground ui:overflow-hidden">`);
              Dot_pattern($$renderer3, { class: "ui:opacity-[0.08]" });
              $$renderer3.push(`<!----> <div class="ui:relative ui:max-w-7xl ui:mx-auto">`);
              Blurfade($$renderer3, {
                delay: 0,
                once: true,
                children: ($$renderer4) => {
                  $$renderer4.push(`<h2 class="ui:text-4xl ui:lg:text-5xl ui:font-extrabold ui:tracking-tight ui:mb-3">${escape_html(links.heading)}</h2>`);
                }
              });
              $$renderer3.push(`<!----> `);
              if (links.description?.trim()) {
                $$renderer3.push("<!--[-->");
                Blurfade($$renderer3, {
                  delay: 0.12,
                  once: true,
                  children: ($$renderer4) => {
                    $$renderer4.push(`<p class="ui:text-lg ui:text-primary-foreground/80 ui:max-w-2xl ui:mb-14 ui:font-mono">${escape_html(links.description)}</p>`);
                  }
                });
              } else {
                $$renderer3.push("<!--[!-->");
                $$renderer3.push(`<div class="ui:mb-14" aria-hidden="true"></div>`);
              }
              $$renderer3.push(`<!--]--> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:lg:grid-cols-3 ui:border ui:border-primary-foreground/20"><!--[-->`);
              const each_array_1 = ensure_array_like(links.cards);
              for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
                let card = each_array_1[index];
                const IconComponent = landingPageLinkIconMap[card.icon];
                Blurfade($$renderer3, {
                  delay: 0.08 * index,
                  once: true,
                  children: ($$renderer4) => {
                    $$renderer4.push(`<a${attr("href", card.href)} target="_blank" rel="noreferrer" class="ui:group ui:block ui:h-full ui:p-8 ui:border-r ui:border-b ui:border-primary-foreground/15 ui:transition-colors ui:hover:bg-primary-foreground/5 ui:no-underline ui:text-primary-foreground"${attr("aria-label", `${card.title} — ${linkDisplayHint(card.href)} (opens in new tab)`)}><div class="ui:inline-flex ui:items-center ui:justify-center ui:size-9 ui:bg-primary-foreground/15 ui:text-primary-foreground ui:font-mono ui:font-bold ui:mb-5"><!---->`);
                    IconComponent($$renderer4, { class: "ui:size-4 custom", "aria-hidden": "true" });
                    $$renderer4.push(`<!----></div> <h3 class="ui:text-lg ui:font-bold ui:tracking-tight ui:mb-2">${escape_html(card.title)}</h3> <p class="ui:text-sm ui:text-primary-foreground/70 ui:leading-relaxed ui:line-clamp-3 ui:m-0">${escape_html(card.description)}</p></a>`);
                  }
                });
              }
              $$renderer3.push(`<!--]--></div></div></section>`);
            } else {
              $$renderer3.push("<!--[!-->");
              if (variant === "studio") {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<section class="ui:py-24 ui:px-6 ui:border-t ui:border-border ui:bg-background"><div class="ui:max-w-[1080px] ui:mx-auto"><div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:gap-12 ui:mb-12 ui:items-end">`);
                Blurfade($$renderer3, {
                  delay: 0,
                  once: true,
                  children: ($$renderer4) => {
                    $$renderer4.push(`<div><p class="ui:text-sm ui:text-muted-foreground ui:mb-1.5 ui:inline-flex ui:items-center ui:gap-2"><span class="ui:size-1.5 ui:rounded-full ui:bg-primary"></span> Resources</p> <h2 class="ui:text-3xl ui:lg:text-4xl ui:font-semibold ui:tracking-tight ui:m-0">${escape_html(links.heading)}</h2></div>`);
                  }
                });
                $$renderer3.push(`<!----> `);
                if (links.description?.trim()) {
                  $$renderer3.push("<!--[-->");
                  Blurfade($$renderer3, {
                    delay: 0.1,
                    once: true,
                    children: ($$renderer4) => {
                      $$renderer4.push(`<p class="ui:text-base ui:text-muted-foreground ui:leading-relaxed ui:m-0">${escape_html(links.description)}</p>`);
                    }
                  });
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]--></div> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:lg:grid-cols-4 ui:gap-3"><!--[-->`);
                const each_array_2 = ensure_array_like(links.cards);
                for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
                  let card = each_array_2[index];
                  const IconComponent = landingPageLinkIconMap[card.icon];
                  Blurfade($$renderer3, {
                    delay: 0.06 * index,
                    once: true,
                    children: ($$renderer4) => {
                      $$renderer4.push(`<a${attr("href", card.href)} target="_blank" rel="noreferrer" class="ui:group ui:block ui:h-full ui:p-6 ui:bg-card ui:border ui:border-border ui:rounded-xl ui:transition-colors ui:hover:border-foreground/30 ui:hover:bg-muted/30 ui:no-underline"${attr("aria-label", `${card.title} — ${linkDisplayHint(card.href)} (opens in new tab)`)}><div class="ui:inline-flex ui:items-center ui:justify-center ui:size-8 ui:rounded-lg ui:bg-muted ui:border ui:border-border ui:text-primary ui:mb-3"><!---->`);
                      IconComponent($$renderer4, { class: "ui:size-4", "aria-hidden": "true" });
                      $$renderer4.push(`<!----></div> <h3 class="ui:text-sm ui:font-medium ui:tracking-tight ui:mb-1.5 ui:text-foreground">${escape_html(card.title)}</h3> <p class="ui:text-[13px] ui:text-muted-foreground ui:leading-relaxed ui:line-clamp-3 ui:m-0">${escape_html(card.description)}</p></a>`);
                    }
                  });
                }
                $$renderer3.push(`<!--]--></div></div></section>`);
              } else {
                $$renderer3.push("<!--[!-->");
                if (variant === "terminal") {
                  $$renderer3.push("<!--[-->");
                  const cardCount = links.cards.length;
                  const lgColsClass = cardCount >= 4 ? "ui:lg:grid-cols-4" : cardCount === 3 ? "ui:lg:grid-cols-3" : cardCount === 2 ? "ui:lg:grid-cols-2" : "ui:lg:grid-cols-1";
                  const mdColsClass = cardCount === 1 ? "ui:md:grid-cols-1" : "ui:md:grid-cols-2";
                  $$renderer3.push(`<section class="ui:py-24 ui:px-6" style="border-top: 1px solid #1c1f28; background: radial-gradient(ellipse 60% 100% at 50% 0%, color-mix(in oklab, var(--primary) 6%, transparent) 0%, transparent 60%), #06070a;"><div class="ui:max-w-[1120px] ui:mx-auto">`);
                  Blurfade($$renderer3, {
                    delay: 0,
                    once: true,
                    children: ($$renderer4) => {
                      $$renderer4.push(`<p class="ui:font-mono ui:text-[11px] ui:tracking-[0.12em] ui:uppercase ui:mb-3 ui:inline-flex ui:items-center ui:gap-2" style="color: var(--primary);"><span class="ui:size-1.5 ui:rounded-full" style="background: var(--primary); box-shadow: 0 0 12px var(--primary);"></span> Resources</p>`);
                    }
                  });
                  $$renderer3.push(`<!----> `);
                  Blurfade($$renderer3, {
                    delay: 0.08,
                    once: true,
                    children: ($$renderer4) => {
                      $$renderer4.push(`<h2 class="ui:text-[40px] ui:font-semibold ui:tracking-tight ui:m-0 ui:mb-10" style="color: #e9eaed; letter-spacing: -0.025em; line-height: 1.08;">${escape_html(links.heading)}</h2>`);
                    }
                  });
                  $$renderer3.push(`<!----> <div${attr_class(`ui:grid ui:grid-cols-1 ${stringify(mdColsClass)} ${stringify(lgColsClass)} ui:overflow-hidden ui:rounded-[14px] ui:gap-[1px]`)} style="border: 1px solid #1c1f28; background: #1c1f28;"><!--[-->`);
                  const each_array_3 = ensure_array_like(links.cards);
                  for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
                    let card = each_array_3[index];
                    const IconComponent = landingPageLinkIconMap[card.icon];
                    Blurfade($$renderer3, {
                      delay: 0.06 * index,
                      once: true,
                      children: ($$renderer4) => {
                        $$renderer4.push(`<a${attr("href", card.href)} target="_blank" rel="noreferrer" class="ui:flex ui:flex-col ui:gap-3 ui:p-7 ui:no-underline ui:h-full ui:transition-colors" style="background: #0f1218; color: #e9eaed;"${attr("aria-label", `${card.title} — ${linkDisplayHint(card.href)} (opens in new tab)`)}><div class="ui:inline-flex ui:items-center ui:justify-center ui:size-9 ui:rounded-lg" style="border: 1px solid #262a35; background: #14171f; color: var(--primary);"><!---->`);
                        IconComponent($$renderer4, { class: "ui:size-4", "aria-hidden": "true" });
                        $$renderer4.push(`<!----></div> <h3 class="ui:text-sm ui:font-semibold ui:m-0" style="color: #e9eaed;">${escape_html(card.title)}</h3> <p class="ui:text-[13px] ui:m-0 ui:line-clamp-3" style="color: #9da1ab; line-height: 1.5;">${escape_html(card.description)}</p></a>`);
                      }
                    });
                  }
                  $$renderer3.push(`<!--]--></div></div></section>`);
                } else {
                  $$renderer3.push("<!--[!-->");
                  if (variant === "corporate") {
                    $$renderer3.push("<!--[-->");
                    $$renderer3.push(`<section class="ui:py-20 ui:px-6 ui:bg-muted/30 ui:border-t ui:border-b ui:border-border"><div class="ui:max-w-[1120px] ui:mx-auto">`);
                    Blurfade($$renderer3, {
                      delay: 0,
                      once: true,
                      children: ($$renderer4) => {
                        $$renderer4.push(`<p class="ui:text-xs ui:font-semibold ui:tracking-widest ui:uppercase ui:text-foreground ui:mb-3">Resources</p>`);
                      }
                    });
                    $$renderer3.push(`<!----> `);
                    Blurfade($$renderer3, {
                      delay: 0.1,
                      once: true,
                      children: ($$renderer4) => {
                        $$renderer4.push(`<h2 class="ui:text-3xl ui:font-semibold ui:tracking-tight ui:m-0 ui:mb-10">${escape_html(links.heading)}</h2>`);
                      }
                    });
                    $$renderer3.push(`<!----> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:border-t ui:border-l ui:border-border"><!--[-->`);
                    const each_array_4 = ensure_array_like(links.cards);
                    for (let index = 0, $$length = each_array_4.length; index < $$length; index++) {
                      let card = each_array_4[index];
                      const IconComponent = landingPageLinkIconMap[card.icon];
                      Blurfade($$renderer3, {
                        delay: 0.06 * index,
                        once: true,
                        children: ($$renderer4) => {
                          $$renderer4.push(`<a${attr("href", card.href)} target="_blank" rel="noreferrer" class="ui:flex ui:gap-5 ui:items-start ui:p-7 ui:border-r ui:border-b ui:border-border ui:bg-background ui:transition-colors ui:hover:bg-muted/40 ui:no-underline ui:h-full"${attr("aria-label", `${card.title} — ${linkDisplayHint(card.href)} (opens in new tab)`)}><div class="ui:inline-flex ui:items-center ui:justify-center ui:size-9 ui:bg-foreground ui:text-background ui:flex-shrink-0"><!---->`);
                          IconComponent($$renderer4, { class: "ui:size-4", "aria-hidden": "true" });
                          $$renderer4.push(`<!----></div> <div class="ui:min-w-0"><h3 class="ui:text-base ui:font-semibold ui:tracking-tight ui:mb-1.5 ui:m-0">${escape_html(card.title)}</h3> <p class="ui:text-sm ui:text-muted-foreground ui:leading-relaxed ui:line-clamp-3 ui:m-0">${escape_html(card.description)}</p></div></a>`);
                        }
                      });
                    }
                    $$renderer3.push(`<!--]--></div></div></section>`);
                  } else {
                    $$renderer3.push("<!--[!-->");
                    if (variant === "saas") {
                      $$renderer3.push("<!--[-->");
                      $$renderer3.push(`<section class="ui:py-20 ui:px-6 ui:bg-muted/40"><div class="ui:max-w-[1180px] ui:mx-auto"><div class="ui:text-center ui:max-w-xl ui:mx-auto ui:mb-12">`);
                      Blurfade($$renderer3, {
                        delay: 0,
                        once: true,
                        children: ($$renderer4) => {
                          $$renderer4.push(`<p class="ui:text-xs ui:font-semibold ui:tracking-widest ui:uppercase ui:text-primary ui:mb-3">Resources</p>`);
                        }
                      });
                      $$renderer3.push(`<!----> `);
                      Blurfade($$renderer3, {
                        delay: 0.1,
                        once: true,
                        children: ($$renderer4) => {
                          $$renderer4.push(`<h2 class="ui:text-3xl ui:md:text-4xl ui:font-bold ui:tracking-tight ui:m-0">${escape_html(links.heading)}</h2>`);
                        }
                      });
                      $$renderer3.push(`<!----> `);
                      if (links.description?.trim()) {
                        $$renderer3.push("<!--[-->");
                        Blurfade($$renderer3, {
                          delay: 0.18,
                          once: true,
                          children: ($$renderer4) => {
                            $$renderer4.push(`<p class="ui:text-base ui:text-muted-foreground ui:mt-3 ui:leading-relaxed">${escape_html(links.description)}</p>`);
                          }
                        });
                      } else {
                        $$renderer3.push("<!--[!-->");
                      }
                      $$renderer3.push(`<!--]--></div> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:lg:grid-cols-3 ui:gap-[1px] ui:bg-border ui:border ui:border-border"><!--[-->`);
                      const each_array_5 = ensure_array_like(links.cards);
                      for (let index = 0, $$length = each_array_5.length; index < $$length; index++) {
                        let card = each_array_5[index];
                        const IconComponent = landingPageLinkIconMap[card.icon];
                        Blurfade($$renderer3, {
                          delay: 0.08 * index,
                          once: true,
                          children: ($$renderer4) => {
                            $$renderer4.push(`<a${attr("href", card.href)} target="_blank" rel="noreferrer" class="ui:bg-background ui:p-7 ui:flex ui:flex-col ui:items-center ui:text-center ui:gap-3 ui:transition-colors ui:hover:bg-muted/40 ui:no-underline ui:h-full"${attr("aria-label", `${card.title} — ${linkDisplayHint(card.href)} (opens in new tab)`)}><div class="ui:inline-flex ui:items-center ui:justify-center ui:size-10 ui:rounded-xl ui:bg-primary/10 ui:text-primary ui:mb-1"><!---->`);
                            IconComponent($$renderer4, { class: "ui:size-5", "aria-hidden": "true" });
                            $$renderer4.push(`<!----></div> <h3 class="ui:text-base ui:font-bold ui:tracking-tight ui:m-0">${escape_html(card.title)}</h3> <p class="ui:text-sm ui:text-muted-foreground ui:leading-relaxed ui:line-clamp-3 ui:m-0">${escape_html(card.description)}</p></a>`);
                          }
                        });
                      }
                      $$renderer3.push(`<!--]--></div></div></section>`);
                    } else {
                      $$renderer3.push("<!--[!-->");
                      if (variant === "bold") {
                        $$renderer3.push("<!--[-->");
                        $$renderer3.push(`<section class="ui:relative ui:py-20 ui:px-6 ui:bg-background ui:overflow-hidden">`);
                        Dot_pattern($$renderer3, { class: "ui:opacity-[0.10]" });
                        $$renderer3.push(`<!----> <div class="ui:relative ui:max-w-7xl ui:mx-auto">`);
                        Blurfade($$renderer3, {
                          delay: 0,
                          once: true,
                          children: ($$renderer4) => {
                            $$renderer4.push(`<h2 class="ui:text-4xl ui:font-black ui:tracking-tight ui:mb-3">${escape_html(links.heading)}</h2>`);
                          }
                        });
                        $$renderer3.push(`<!----> `);
                        if (links.description?.trim()) {
                          $$renderer3.push("<!--[-->");
                          Blurfade($$renderer3, {
                            delay: 0.12,
                            once: true,
                            children: ($$renderer4) => {
                              $$renderer4.push(`<p class="ui:text-lg ui:text-muted-foreground ui:max-w-2xl ui:mb-12">${escape_html(links.description)}</p>`);
                            }
                          });
                        } else {
                          $$renderer3.push("<!--[!-->");
                          $$renderer3.push(`<div class="ui:mb-12" aria-hidden="true"></div>`);
                        }
                        $$renderer3.push(`<!--]--> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:lg:grid-cols-3 ui:gap-8"><!--[-->`);
                        const each_array_6 = ensure_array_like(links.cards);
                        for (let index = 0, $$length = each_array_6.length; index < $$length; index++) {
                          let card = each_array_6[index];
                          const IconComponent = landingPageLinkIconMap[card.icon];
                          const visitLabel = links.boldVisitLabel?.trim();
                          Blurfade($$renderer3, {
                            delay: 0.1 * index,
                            once: true,
                            children: ($$renderer4) => {
                              $$renderer4.push(`<a${attr("href", card.href)} target="_blank" rel="noreferrer" class="ui:group ui:block ui:h-full ui:no-underline"${attr("aria-label", `${card.title}${visitLabel ? ` — ${visitLabel}` : ""} (opens in new tab)`)}><!---->`);
                              Card($$renderer4, {
                                class: "ui:relative ui:overflow-hidden ui:rounded-3xl ui:bg-background ui:border-border/50 ui:p-8 ui:h-full ui:flex ui:flex-col ui:transition-all ui:duration-300 ui:hover:shadow-xl ui:hover:shadow-primary/5",
                                children: ($$renderer5) => {
                                  Border_beam($$renderer5, {
                                    size: 120,
                                    duration: 8,
                                    colorFrom: "var(--primary)",
                                    colorTo: "color-mix(in oklab, var(--primary) 65%, white)"
                                  });
                                  $$renderer5.push(`<!----> <div class="ui:inline-flex ui:items-center ui:justify-center ui:size-12 ui:rounded-2xl ui:bg-primary/10 ui:text-primary ui:mb-6"><!---->`);
                                  IconComponent($$renderer5, { class: "ui:size-6", "aria-hidden": "true" });
                                  $$renderer5.push(`<!----></div> <!---->`);
                                  Card_title($$renderer5, {
                                    class: "ui:text-2xl ui:font-bold ui:tracking-tight ui:mb-3",
                                    children: ($$renderer6) => {
                                      $$renderer6.push(`<!---->${escape_html(card.title)}`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer5.push(`<!----> <!---->`);
                                  Card_description($$renderer5, {
                                    class: "ui:text-base ui:text-muted-foreground ui:line-clamp-3 ui:mb-6",
                                    children: ($$renderer6) => {
                                      $$renderer6.push(`<!---->${escape_html(card.description)}`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer5.push(`<!----> <div class="ui:mt-auto"><span class="ui:inline-flex ui:items-center ui:gap-1.5 ui:text-sm ui:font-bold ui:text-foreground ui:bg-muted ui:px-3 ui:py-1.5 ui:rounded-lg ui:transition-colors ui:group-hover:bg-primary ui:group-hover:text-primary-foreground" aria-hidden="true">`);
                                  if (visitLabel) {
                                    $$renderer5.push("<!--[-->");
                                    $$renderer5.push(`${escape_html(visitLabel)}`);
                                  } else {
                                    $$renderer5.push("<!--[!-->");
                                  }
                                  $$renderer5.push(`<!--]--> `);
                                  Arrow_right($$renderer5, { class: "ui:size-3.5" });
                                  $$renderer5.push(`<!----></span></div>`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer4.push(`<!----></a>`);
                            }
                          });
                        }
                        $$renderer3.push(`<!--]--></div></div></section>`);
                      } else {
                        $$renderer3.push("<!--[!-->");
                        $$renderer3.push(`<section class="ui:py-10 ui:px-6 ui:lg:px-8 ui:max-w-7xl ui:mx-auto"><div class="ui:text-center">`);
                        Blurfade($$renderer3, {
                          delay: 0,
                          once: true,
                          children: ($$renderer4) => {
                            $$renderer4.push(`<h2 class="ui:text-3xl ui:font-bold ui:text-foreground">${escape_html(links.heading)}</h2>`);
                          }
                        });
                        $$renderer3.push(`<!----> `);
                        Blurfade($$renderer3, {
                          delay: 0.15,
                          once: true,
                          children: ($$renderer4) => {
                            $$renderer4.push(`<div class="ui:mt-6 ui:h-px ui:w-24 ui:bg-border ui:mx-auto"></div>`);
                          }
                        });
                        $$renderer3.push(`<!----> `);
                        if (links.description?.trim()) {
                          $$renderer3.push("<!--[-->");
                          Blurfade($$renderer3, {
                            delay: 0.22,
                            once: true,
                            children: ($$renderer4) => {
                              $$renderer4.push(`<p class="ui:mt-6 ui:text-center ui:text-muted-foreground ui:max-w-2xl ui:mx-auto">${escape_html(links.description)}</p>`);
                            }
                          });
                        } else {
                          $$renderer3.push("<!--[!-->");
                        }
                        $$renderer3.push(`<!--]--></div> <div class="ui:mt-10 ui:grid ui:grid-cols-1 ui:sm:grid-cols-2 ui:lg:grid-cols-3 ui:gap-8 ui:justify-items-center"><!--[-->`);
                        const each_array_7 = ensure_array_like(links.cards);
                        for (let index = 0, $$length = each_array_7.length; index < $$length; index++) {
                          let card = each_array_7[index];
                          const IconComponent = landingPageLinkIconMap[card.icon];
                          const learnMoreLabel = links.classicLearnMoreLabel?.trim();
                          Blurfade($$renderer3, {
                            delay: 0.1 * index,
                            once: true,
                            class: "ui:w-full ui:max-w-md",
                            children: ($$renderer4) => {
                              $$renderer4.push(`<a${attr("href", card.href)} target="_blank" rel="noreferrer" class="ui:group ui:block ui:h-full ui:no-underline"${attr("aria-label", `${card.title}${learnMoreLabel ? ` — ${learnMoreLabel}` : ""} (opens in new tab)`)}><!---->`);
                              Card($$renderer4, {
                                class: "ui:w-full ui:rounded-xl ui:border-border ui:bg-background ui:p-6 ui:h-full ui:flex ui:flex-col ui:hover:shadow-md ui:transition-shadow",
                                children: ($$renderer5) => {
                                  $$renderer5.push(`<div class="ui:flex ui:items-center ui:justify-center ui:size-12 ui:rounded-full ui:bg-muted ui:mb-4"><!---->`);
                                  IconComponent($$renderer5, { class: "ui:size-5 ui:text-foreground", "aria-hidden": "true" });
                                  $$renderer5.push(`<!----></div> <!---->`);
                                  Card_title($$renderer5, {
                                    class: "ui:text-xl ui:font-semibold ui:mb-2",
                                    children: ($$renderer6) => {
                                      $$renderer6.push(`<!---->${escape_html(card.title)}`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer5.push(`<!----> <!---->`);
                                  Card_description($$renderer5, {
                                    class: "ui:text-sm ui:text-muted-foreground ui:line-clamp-3 ui:mb-4",
                                    children: ($$renderer6) => {
                                      $$renderer6.push(`<!---->${escape_html(card.description)}`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer5.push(`<!----> <div class="ui:text-sm ui:font-medium ui:text-foreground ui:border-t ui:border-border/60 ui:pt-3 ui:mt-auto ui:flex ui:items-center ui:gap-1.5 ui:group-hover:text-primary ui:transition-colors" aria-hidden="true">`);
                                  if (learnMoreLabel) {
                                    $$renderer5.push("<!--[-->");
                                    $$renderer5.push(`<span>${escape_html(learnMoreLabel)}</span>`);
                                  } else {
                                    $$renderer5.push("<!--[!-->");
                                  }
                                  $$renderer5.push(`<!--]--> `);
                                  Arrow_right($$renderer5, { class: "ui:size-4" });
                                  $$renderer5.push(`<!----></div>`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer4.push(`<!----></a>`);
                            }
                          });
                        }
                        $$renderer3.push(`<!--]--></div></section>`);
                      }
                      $$renderer3.push(`<!--]-->`);
                    }
                    $$renderer3.push(`<!--]-->`);
                  }
                  $$renderer3.push(`<!--]-->`);
                }
                $$renderer3.push(`<!--]-->`);
              }
              $$renderer3.push(`<!--]-->`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]-->`);
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Callout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { callout, variant = "minimal" } = $$props;
    const sectionClasses = {
      minimal: "ui:py-20 ui:px-6",
      bold: "ui:py-24 ui:px-6 ui:bg-foreground ui:text-background",
      classic: "ui:py-20 ui:px-6 ui:bg-foreground ui:text-background",
      saas: "ui:py-24 ui:md:py-28 ui:px-6 ui:relative ui:overflow-hidden",
      tech: "ui:py-24 ui:px-6 ui:bg-foreground ui:text-background",
      studio: "ui:py-32 ui:px-6 ui:relative ui:overflow-hidden ui:bg-background ui:text-foreground ui:border-t ui:border-border",
      corporate: "ui:py-20 ui:px-6 ui:bg-muted/40 ui:text-foreground ui:border-t ui:border-border",
      terminal: "ui:py-20 ui:px-6 ui:border-t ui:border-[#1c1f28] ui:text-[#e9eaed] ui:bg-[#06070a]"
    };
    const headingClasses = {
      minimal: "ui:text-3xl ui:font-semibold ui:tracking-tight",
      bold: "ui:text-4xl ui:lg:text-5xl ui:font-black ui:tracking-tighter",
      classic: "ui:text-3xl ui:font-bold ui:tracking-tight",
      saas: "ui:text-4xl ui:md:text-5xl ui:font-bold ui:tracking-tight ui:leading-[1.05]",
      tech: "ui:text-4xl ui:lg:text-5xl ui:font-extrabold ui:tracking-tight",
      studio: "ui:text-5xl ui:lg:text-6xl ui:font-semibold ui:tracking-tight ui:leading-[1.02]",
      corporate: "ui:text-3xl ui:lg:text-4xl ui:font-semibold ui:tracking-tight",
      terminal: "ui:text-[22px] ui:font-semibold ui:tracking-tight"
    };
    const descriptionClasses = {
      minimal: "ui:text-lg ui:text-foreground/70",
      bold: "ui:text-xl ui:text-background/70",
      classic: "ui:text-lg ui:text-background/80",
      saas: "ui:text-base ui:md:text-lg ui:text-muted-foreground ui:max-w-xl ui:mx-auto",
      tech: "ui:text-lg ui:text-background/70 ui:font-mono",
      studio: "ui:text-base ui:text-muted-foreground ui:max-w-xl ui:mx-auto",
      corporate: "ui:text-base ui:text-muted-foreground ui:max-w-xl ui:mx-auto",
      terminal: "ui:text-sm ui:max-w-md ui:mx-auto ui:text-[#9da1ab]"
    };
    const buttonClasses = {
      minimal: "ui:rounded-full",
      bold: "ui:rounded-xl ui:px-8 ui:py-6 ui:text-base ui:font-bold ui:shadow-lg ui:shadow-primary/20",
      classic: "ui:px-8 ui:font-semibold",
      saas: "ui:rounded-full ui:px-7 ui:font-semibold ui:shadow-md ui:shadow-primary/20",
      tech: "ui:rounded-none ui:px-8 ui:font-semibold",
      studio: "ui:rounded-md ui:px-5 ui:font-medium ui:shadow-lg ui:shadow-primary/25",
      corporate: "ui:rounded-none ui:px-8 ui:font-medium",
      terminal: "ui:rounded-full ui:px-4 ui:font-mono ui:text-[13px] ui:bg-[#0f1218] ui:text-[#e9eaed] ui:border ui:border-[#262a35] ui:hover:bg-[#14171f]"
    };
    const eyebrowClasses = {
      minimal: "",
      bold: "",
      classic: "",
      saas: "ui:text-xs ui:font-semibold ui:tracking-widest ui:uppercase ui:text-primary ui:mb-1",
      tech: "ui:font-mono ui:text-xs ui:tracking-widest ui:uppercase ui:text-background/70 ui:mb-1",
      studio: "ui:text-sm ui:text-muted-foreground ui:inline-flex ui:items-center ui:gap-2 ui:mb-2",
      corporate: "ui:text-xs ui:font-semibold ui:tracking-widest ui:uppercase ui:text-foreground ui:mb-1",
      terminal: ""
    };
    const eyebrowLabels = {
      minimal: null,
      bold: null,
      classic: null,
      saas: "Get started",
      tech: "// get started",
      studio: "Ready when you are",
      corporate: "Ready when you are",
      terminal: null
    };
    const minimalBackground = `
    linear-gradient(
      135deg,
      color-mix(in oklab, var(--primary) 10%, var(--background)) 0%,
      color-mix(in oklab, var(--primary) 4%, var(--background)) 100%
    )
  `;
    if (callout) {
      $$renderer2.push("<!--[-->");
      Editable_section($$renderer2, {
        sectionKey: "callout",
        children: ($$renderer3) => {
          $$renderer3.push(`<section${attr_class(clsx(sectionClasses[variant]))}${attr_style(variant === "minimal" ? `background: ${minimalBackground};` : void 0)}>`);
          if (variant === "studio") {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="ui:pointer-events-none ui:absolute ui:left-1/2 ui:bottom-[-220px] ui:size-[800px] ui:-translate-x-1/2" style="background: radial-gradient(ellipse at center, color-mix(in oklab, var(--primary) 28%, transparent) 0%, transparent 60%); filter: blur(40px);" aria-hidden="true"></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (variant === "saas") {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="ui:pointer-events-none ui:absolute ui:top-1/2 ui:left-1/2 ui:size-[640px] ui:-translate-x-1/2 ui:-translate-y-1/2 ui:opacity-60" style="background: radial-gradient(ellipse at center, color-mix(in oklab, var(--primary) 14%, transparent) 0%, transparent 60%);" aria-hidden="true"></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <div class="ui:relative ui:mx-auto ui:flex ui:max-w-3xl ui:flex-col ui:items-center ui:gap-6 ui:text-center">`);
          if (eyebrowLabels[variant]) {
            $$renderer3.push("<!--[-->");
            Blurfade($$renderer3, {
              delay: 0,
              once: true,
              children: ($$renderer4) => {
                if (variant === "studio") {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<p${attr_class(clsx(eyebrowClasses[variant]))}><span class="ui:size-1.5 ui:rounded-full ui:bg-primary"></span> ${escape_html(eyebrowLabels[variant])}</p>`);
                } else {
                  $$renderer4.push("<!--[!-->");
                  $$renderer4.push(`<p${attr_class(clsx(eyebrowClasses[variant]))}>${escape_html(eyebrowLabels[variant])}</p>`);
                }
                $$renderer4.push(`<!--]-->`);
              }
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          Blurfade($$renderer3, {
            delay: 0.05,
            once: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<h2${attr_class(clsx(headingClasses[variant]))}>${escape_html(callout.heading)}</h2>`);
            }
          });
          $$renderer3.push(`<!----> `);
          if (callout.description) {
            $$renderer3.push("<!--[-->");
            Blurfade($$renderer3, {
              delay: 0.15,
              once: true,
              children: ($$renderer4) => {
                $$renderer4.push(`<p${attr_class(clsx(descriptionClasses[variant]))}>${escape_html(callout.description)}</p>`);
              }
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          Blurfade($$renderer3, {
            delay: 0.3,
            once: true,
            children: ($$renderer4) => {
              Button($$renderer4, {
                href: callout.action.href,
                size: "lg",
                class: buttonClasses[variant],
                variant: variant === "bold" || variant === "classic" || variant === "tech" ? "secondary" : "default",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(callout.action.label)}`);
                },
                $$slots: { default: true }
              });
            }
          });
          $$renderer3.push(`<!----></div></section>`);
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function getPrimaryCourseTag(course) {
  return course.tags?.[0];
}
function getCourseTypeLandingMeta(course) {
  const raw = course.type?.trim();
  if (!raw) return void 0;
  const known = {
    LIVE_CLASS: {
      label: "Live class",
      icon: Circle_dot,
      iconClass: "custom ui:size-3.5 ui:shrink-0 ui:text-red-700"
    },
    SELF_PACED: {
      label: "Self-paced",
      icon: User,
      iconClass: "custom ui:size-3.5 ui:shrink-0 ui:text-primary"
    },
    COMPLIANCE: {
      label: "Compliance",
      icon: Shield_check,
      iconClass: "custom ui:size-3.5 ui:shrink-0 ui:text-emerald-700"
    },
    PUBLIC: {
      label: "Public",
      icon: Globe,
      iconClass: "custom ui:size-3.5 ui:shrink-0 ui:text-primary"
    }
  };
  if (known[raw]) {
    return known[raw];
  }
  const label = raw.toLowerCase().split("_").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return {
    label: label || raw,
    icon: Graduation_cap,
    iconClass: "custom ui:size-3.5 ui:shrink-0 ui:text-muted-foreground"
  };
}
function formatExerciseCountLabel(count) {
  if (count === 1) return "1 exercise";
  return `${count} exercises`;
}
function calcCourseDiscount(percent = 0, cost, showDiscount) {
  if (!percent || !showDiscount) return cost;
  const discountAmount = percent / 100 * cost;
  const discountedPrice = cost - discountAmount;
  return Math.round(discountedPrice);
}
function Minimal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      orgName,
      logoUrl,
      navItems,
      authAction,
      hero,
      courses,
      hasMoreCourses = false,
      disableCourseLinks = false,
      embed,
      callout,
      links,
      footer
    } = $$props;
    function formatCurrency(cost, currency = "USD") {
      if (!cost) return "Free";
      return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(cost);
    }
    $$renderer2.push(`<div class="ui:min-h-screen ui:bg-background ui:text-foreground ui:font-sans"><main>`);
    {
      let navigation = function($$renderer3) {
        Nav$2$1($$renderer3, { orgName, logoUrl, navItems, authAction });
      };
      Hero$2$1($$renderer2, { hero, navigation });
    }
    $$renderer2.push(`<!----> <section class="ui:py-20 ui:px-4"><div class="ui:max-w-[1200px] ui:mx-auto"><h2 class="ui:text-2xl ui:font-semibold ui:mb-8">Our Courses</h2> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:gap-6"><!--[-->`);
    const each_array = ensure_array_like(courses);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let course = each_array[index];
      const courseTypeMeta = getCourseTypeLandingMeta(course);
      const primaryTag = getPrimaryCourseTag(course);
      Blurfade($$renderer2, {
        delay: 0.1 * index,
        once: true,
        children: ($$renderer3) => {
          $$renderer3.push(`<a${attr("href", disableCourseLinks ? void 0 : course.link || (course.slug ? `/course/${course.slug}` : void 0))}${attr_class(`ui:block ui:h-full ui:no-underline ${stringify(disableCourseLinks ? "ui:cursor-default" : "ui:transition-colors")}`)}${attr("aria-disabled", disableCourseLinks)}${attr("tabindex", disableCourseLinks ? -1 : void 0)}><!---->`);
          Card($$renderer3, {
            class: `ui:rounded-none ui:border-border/60 ui:shadow-none ui:h-full ui:p-0 ui:gap-0 ${stringify(disableCourseLinks ? "" : "ui:hover:border-border ui:transition-colors")}`,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Card_content($$renderer4, {
                class: "ui:p-8 ui:flex ui:flex-col ui:flex-1",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Card_title($$renderer5, {
                    class: "ui:text-xl ui:font-normal ui:mb-4",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(course.title)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Card_description($$renderer5, {
                    class: "ui:mb-8 ui:line-clamp-3 ui:text-base ui:leading-relaxed",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(course.description)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <div class="ui:flex ui:items-center ui:gap-6 ui:text-sm ui:mt-auto">`);
                  if (course.duration) {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<div class="ui:flex ui:items-center ui:gap-1.5 ui:text-muted-foreground">`);
                    Clock($$renderer5, { class: "ui:size-4" });
                    $$renderer5.push(`<!----> <span>${escape_html(course.duration)}</span></div>`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (courseTypeMeta) {
                    $$renderer5.push("<!--[-->");
                    const TypeIcon = courseTypeMeta.icon;
                    $$renderer5.push(`<div class="ui:flex ui:items-center ui:gap-1.5 ui:text-muted-foreground"><!---->`);
                    TypeIcon($$renderer5, { class: courseTypeMeta.iconClass });
                    $$renderer5.push(`<!----> <span>${escape_html(courseTypeMeta.label)}</span></div>`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (primaryTag) {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<div class="ui:flex ui:items-center ui:gap-1.5 ui:text-muted-foreground">`);
                    Tag($$renderer5, { class: "ui:size-4" });
                    $$renderer5.push(`<!----> `);
                    if (primaryTag.color) {
                      $$renderer5.push("<!--[-->");
                      $$renderer5.push(`<span class="ui:inline-block ui:h-2 ui:w-2 ui:rounded-full"${attr_style(`background-color: ${primaryTag.color}`)} aria-hidden="true"></span>`);
                    } else {
                      $$renderer5.push("<!--[!-->");
                    }
                    $$renderer5.push(`<!--]--> <span>${escape_html(primaryTag.name)}</span></div>`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--> <div class="ui:ml-auto ui:font-semibold">${escape_html(course.price || formatCurrency(course.cost, course.currency))}</div></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></a>`);
        }
      });
    }
    $$renderer2.push(`<!--]--></div> `);
    if (hasMoreCourses) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:mt-10 ui:flex ui:justify-center">`);
      Button($$renderer2, {
        href: disableCourseLinks ? void 0 : "/courses",
        variant: "outline",
        size: "lg",
        disabled: disableCourseLinks,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->View more courses`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></section></main> `);
    Links($$renderer2, { links, variant: "minimal" });
    $$renderer2.push(`<!----> `);
    Embed($$renderer2, { embed, variant: "minimal" });
    $$renderer2.push(`<!----> `);
    Callout($$renderer2, { callout, variant: "minimal" });
    $$renderer2.push(`<!----> `);
    Landing_page_footer($$renderer2, { orgName, logoUrl, footer, variant: "minimal" });
    $$renderer2.push(`<!----></div>`);
  });
}
function Bold($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      orgName,
      logoUrl,
      navItems,
      authAction,
      hero,
      courses,
      hasMoreCourses = false,
      disableCourseLinks = false,
      embed,
      callout,
      links,
      footer
    } = $$props;
    function formatCurrency(cost, currency = "USD") {
      if (!cost) return "Free";
      return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(cost);
    }
    $$renderer2.push(`<div class="ui:min-h-screen ui:bg-background ui:text-foreground ui:font-sans">`);
    Nav$1$1($$renderer2, { orgName, logoUrl, navItems, authAction });
    $$renderer2.push(`<!----> <main>`);
    Hero$1$1($$renderer2, { hero });
    $$renderer2.push(`<!----> <section class="ui:relative ui:bg-muted/30 ui:px-6 ui:overflow-hidden ui:mb-12">`);
    Dot_pattern($$renderer2, { class: "ui:opacity-[0.15]" });
    $$renderer2.push(`<!----> <div class="ui:relative ui:max-w-7xl ui:mx-auto"><div class="ui:flex ui:items-end ui:justify-between ui:mb-12"><h2 class="ui:text-4xl ui:font-black ui:tracking-tight">Latest Courses</h2></div> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:gap-8"><!--[-->`);
    const each_array = ensure_array_like(courses);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let course = each_array[index];
      const courseTypeMeta = getCourseTypeLandingMeta(course);
      const primaryTag = getPrimaryCourseTag(course);
      Blurfade($$renderer2, {
        delay: 0.1 * index,
        once: true,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          Card($$renderer3, {
            class: `ui:group ui:relative ui:overflow-hidden ui:bg-background ui:rounded-3xl ui:p-4 ui:flex-col ui:sm:flex-row ui:gap-6 ui:duration-300 ui:h-full ui:border-border/50 ${stringify(disableCourseLinks ? "" : "ui:hover:shadow-xl ui:hover:shadow-primary/5 ui:transition-all")}`,
            children: ($$renderer4) => {
              Border_beam($$renderer4, {
                size: 120,
                duration: 8,
                colorFrom: "var(--primary)",
                colorTo: "color-mix(in oklab, var(--primary) 65%, white)"
              });
              $$renderer4.push(`<!----> `);
              if (course.logo) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<img${attr("src", course.logo)}${attr("alt", course.title)} class="ui:w-full ui:sm:w-48 ui:h-48 ui:object-cover ui:rounded-2xl ui:group-hover:scale-[1.02] ui:transition-transform ui:duration-500"/>`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]--> <!---->`);
              Card_content($$renderer4, {
                class: "ui:p-2 ui:flex ui:flex-col ui:justify-center ui:flex-1",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Card_title($$renderer5, {
                    class: "ui:text-2xl ui:font-bold ui:mb-2",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(course.title)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Card_description($$renderer5, {
                    class: "ui:mb-6 ui:line-clamp-2",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(course.description)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <div class="ui:flex ui:items-center ui:gap-4 ui:text-sm ui:font-semibold ui:mb-6">`);
                  if (course.duration) {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<div class="ui:flex ui:items-center ui:gap-1.5 ui:text-muted-foreground ui:bg-muted ui:px-2.5 ui:py-1 ui:rounded-md">`);
                    Clock($$renderer5, { class: "ui:size-3.5" });
                    $$renderer5.push(`<!----> <span>${escape_html(course.duration)}</span></div>`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (courseTypeMeta) {
                    $$renderer5.push("<!--[-->");
                    const TypeIcon = courseTypeMeta.icon;
                    $$renderer5.push(`<div class="ui:flex ui:items-center ui:gap-1.5 ui:text-foreground ui:bg-muted ui:px-2.5 ui:py-1 ui:rounded-md"><!---->`);
                    TypeIcon($$renderer5, { class: courseTypeMeta.iconClass });
                    $$renderer5.push(`<!----> <span>${escape_html(courseTypeMeta.label)}</span></div>`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (primaryTag) {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<div class="ui:flex ui:items-center ui:gap-1.5 ui:text-foreground ui:bg-muted ui:px-2.5 ui:py-1 ui:rounded-md">`);
                    Tag($$renderer5, { class: "ui:size-3.5 ui:text-primary" });
                    $$renderer5.push(`<!----> `);
                    if (primaryTag.color) {
                      $$renderer5.push("<!--[-->");
                      $$renderer5.push(`<span class="ui:inline-block ui:h-2 ui:w-2 ui:rounded-full"${attr_style(`background-color: ${primaryTag.color}`)} aria-hidden="true"></span>`);
                    } else {
                      $$renderer5.push("<!--[!-->");
                    }
                    $$renderer5.push(`<!--]--> <span>${escape_html(primaryTag.name)}</span></div>`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--></div> <div class="ui:mt-auto ui:flex ui:items-center ui:justify-between"><span class="ui:font-black ui:text-lg">${escape_html(course.price || formatCurrency(course.cost, course.currency))}</span> `);
                  Button($$renderer5, {
                    href: disableCourseLinks ? void 0 : course.link,
                    variant: "outline",
                    class: `ui:rounded-lg ui:font-bold ui:text-sm ${stringify(disableCourseLinks ? "ui:pointer-events-none" : "ui:hover:bg-primary ui:hover:text-primary-foreground ui:group-hover:bg-primary ui:group-hover:text-primary-foreground ui:transition-colors")}`,
                    "aria-disabled": disableCourseLinks,
                    tabindex: disableCourseLinks ? -1 : void 0,
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->Details`);
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
      });
    }
    $$renderer2.push(`<!--]--></div> `);
    if (hasMoreCourses) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:mt-12 ui:flex ui:justify-center">`);
      Button($$renderer2, {
        href: disableCourseLinks ? void 0 : "/courses",
        size: "lg",
        class: "ui:rounded-xl ui:px-8",
        disabled: disableCourseLinks,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->View more courses`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></section></main> `);
    Links($$renderer2, { links, variant: "bold" });
    $$renderer2.push(`<!----> `);
    Embed($$renderer2, { embed, variant: "bold" });
    $$renderer2.push(`<!----> `);
    Callout($$renderer2, { callout, variant: "bold" });
    $$renderer2.push(`<!----> `);
    Landing_page_footer($$renderer2, { orgName, logoUrl, footer, variant: "bold" });
    $$renderer2.push(`<!----></div>`);
  });
}
function Classic($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      orgName,
      logoUrl,
      navItems,
      authAction,
      hero,
      courses,
      hasMoreCourses = false,
      disableCourseLinks = false,
      embed,
      callout,
      links,
      footer
    } = $$props;
    $$renderer2.push(`<div class="ui:min-h-screen ui:bg-muted/10 ui:text-foreground ui:font-sans">`);
    Nav$5($$renderer2, { orgName, logoUrl, navItems, authAction });
    $$renderer2.push(`<!----> <main>`);
    Hero$5($$renderer2, { hero });
    $$renderer2.push(`<!----> <section class="ui:py-10 ui:px-6 ui:lg:px-8 ui:max-w-7xl ui:mx-auto"><div class="ui:text-center ui:mb-8">`);
    Blurfade($$renderer2, {
      delay: 0,
      once: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<h2 class="ui:text-3xl ui:font-bold ui:text-foreground">Featured Programs</h2>`);
      }
    });
    $$renderer2.push(`<!----> `);
    Blurfade($$renderer2, {
      delay: 0.15,
      once: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="ui:mt-6 ui:h-px ui:w-24 ui:bg-border ui:mx-auto"></div>`);
      }
    });
    $$renderer2.push(`<!----></div> <div class="ui:grid ui:grid-cols-1 ui:sm:grid-cols-2 ui:lg:grid-cols-3 ui:gap-8 ui:justify-items-center"><!--[-->`);
    const each_array = ensure_array_like(courses);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let course = each_array[index];
      const courseTypeMeta = getCourseTypeLandingMeta(course);
      const pricingData = {
        cost: course.cost ?? 0,
        discount: course.metadata?.discount ?? 0,
        showDiscount: !!course.metadata?.showDiscount
      };
      const displayCost = calcCourseDiscount(pricingData.discount, pricingData.cost, pricingData.showDiscount);
      const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: course.currency ?? "USD" });
      Blurfade($$renderer2, {
        delay: 0.1 * index,
        once: true,
        class: "ui:w-full ui:flex ui:justify-center",
        children: ($$renderer3) => {
          {
            let tags = function($$renderer4) {
              if (course.tags && course.tags.length > 0) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<div class="ui:flex ui:flex-wrap ui:gap-1 ui:min-w-0"><!--[-->`);
                const each_array_1 = ensure_array_like(course.tags);
                for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
                  let tag = each_array_1[$$index];
                  $$renderer4.push(`<!---->`);
                  Item_sub_description($$renderer4, {
                    class: "ui:border-border ui:inline-flex ui:shrink-0 ui:items-center ui:gap-1.5 ui:rounded-full ui:border ui:px-2",
                    children: ($$renderer5) => {
                      $$renderer5.push(`<span class="ui:bg-primary/60 ui:inline-block ui:h-1.5 ui:w-1.5 ui:shrink-0 ui:rounded-full"${attr_style(tag.color ? `background-color: ${tag.color}` : void 0)} aria-hidden="true"></span> <span>${escape_html(tag.name)}</span>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push(`<!---->`);
                }
                $$renderer4.push(`<!--]--></div>`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            }, footer2 = function($$renderer4) {
              $$renderer4.push(`<div class="ui:flex ui:justify-between ui:w-full"><div class="ui:w-[80%]"><p class="ui:text-xs ui:pl-2 ui:dark:text-white"><span>${escape_html(course.lessonCount || 0)} lessons</span> &amp; <span>${escape_html(formatExerciseCountLabel(course.exerciseCount ?? 0))}</span></p> <div class="ui:py-2 ui:text-xs">`);
              if (course.price != null && String(course.price).length > 0) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<span class="ui:px-2">${escape_html(course.price)}</span>`);
              } else {
                $$renderer4.push("<!--[!-->");
                if (!displayCost) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<span class="ui:px-2">Free</span>`);
                } else {
                  $$renderer4.push("<!--[!-->");
                  if (pricingData.showDiscount) {
                    $$renderer4.push("<!--[-->");
                    $$renderer4.push(`<span class="ui:px-2">${escape_html(currencyFormatter.format(displayCost))} <span class="line-through">${escape_html(currencyFormatter.format(pricingData.cost))}</span></span>`);
                  } else {
                    $$renderer4.push("<!--[!-->");
                    $$renderer4.push(`<span class="ui:px-2">${escape_html(currencyFormatter.format(displayCost))}</span>`);
                  }
                  $$renderer4.push(`<!--]-->`);
                }
                $$renderer4.push(`<!--]-->`);
              }
              $$renderer4.push(`<!--]--></div></div></div>`);
            };
            Course_card($$renderer3, {
              href: disableCourseLinks ? void 0 : course.link || (course.slug ? `/course/${course.slug}` : void 0),
              bannerImage: course.logo || "",
              bannerAlt: course.title,
              title: course.title,
              description: course.description,
              typeBadge: courseTypeMeta ? {
                label: courseTypeMeta.label,
                icon: courseTypeMeta.icon,
                iconClass: courseTypeMeta.iconClass
              } : void 0,
              class: cn("ui:group ui:relative", !disableCourseLinks && "ui:hover:shadow-md ui:transition-shadow"),
              tags,
              footer: footer2
            });
          }
        }
      });
    }
    $$renderer2.push(`<!--]--></div> `);
    if (hasMoreCourses) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:mt-12 ui:flex ui:justify-center">`);
      Button($$renderer2, {
        href: disableCourseLinks ? void 0 : "/courses",
        variant: "outline",
        size: "lg",
        class: "ui:px-8",
        disabled: disableCourseLinks,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->View more courses`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></section></main> `);
    Links($$renderer2, { links, variant: "classic" });
    $$renderer2.push(`<!----> `);
    Embed($$renderer2, { embed, variant: "classic" });
    $$renderer2.push(`<!----> `);
    Callout($$renderer2, { callout, variant: "classic" });
    $$renderer2.push(`<!----> `);
    Landing_page_footer($$renderer2, { orgName, logoUrl, footer, variant: "classic" });
    $$renderer2.push(`<!----></div>`);
  });
}
function Nav$4($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { orgName, logoUrl, navItems, authAction } = $$props;
    Editable_section($$renderer2, {
      sectionKey: "navigation",
      children: ($$renderer3) => {
        $$renderer3.push(`<header class="ui:flex ui:items-center ui:justify-between ui:gap-4 ui:py-2 ui:pl-5 ui:pr-2 ui:rounded-full ui:border ui:border-border ui:bg-background/85 ui:backdrop-blur-md ui:shadow-[0_4px_24px_-8px_rgba(14,14,16,0.08)]"><a href="/" class="ui:flex ui:items-center ui:gap-2 ui:font-semibold ui:text-[15px] ui:tracking-tight ui:text-foreground ui:no-underline">`);
        if (logoUrl) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<img${attr("src", logoUrl)}${attr("alt", orgName)} class="ui:h-6 ui:w-auto"/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> ${escape_html(orgName)}</a> `);
        if (navItems.length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<nav class="ui:hidden ui:md:flex ui:gap-1"><!--[-->`);
          const each_array = ensure_array_like(navItems);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            $$renderer3.push(`<a${attr("href", item.href)} class="ui:px-3.5 ui:py-1.5 ui:text-sm ui:font-medium ui:text-foreground/80 ui:hover:text-foreground ui:hover:bg-muted/60 ui:rounded-full ui:transition-colors ui:no-underline">${escape_html(item.label)}</a>`);
          }
          $$renderer3.push(`<!--]--></nav>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> <div class="ui:flex ui:items-center ui:gap-1.5">`);
        if (authAction) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            href: authAction.href,
            variant: "default",
            size: "sm",
            class: "ui:rounded-full ui:px-4",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(authAction.label)}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></header>`);
      }
    });
  });
}
function Hero$4($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { hero, navigation } = $$props;
    Editable_section($$renderer2, {
      sectionKey: "hero",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="ui:relative ui:px-6 ui:pt-4 ui:pb-20 ui:md:pb-24"><div class="ui:relative ui:max-w-[1180px] ui:mx-auto ui:sticky ui:top-4 ui:z-50">`);
        navigation($$renderer3);
        $$renderer3.push(`<!----></div> <div class="ui:relative ui:max-w-[1180px] ui:mx-auto ui:pt-16 ui:md:pt-20 ui:text-center">`);
        Blurfade($$renderer3, {
          delay: 0,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<h1 class="ui:text-4xl ui:md:text-5xl ui:lg:text-[56px] ui:font-bold ui:tracking-tight ui:leading-[1.05] ui:max-w-3xl ui:mx-auto ui:mb-5">${escape_html(hero.heading)}</h1>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.15,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="ui:text-base ui:md:text-lg ui:text-muted-foreground ui:max-w-xl ui:mx-auto ui:mb-8 ui:leading-relaxed">${escape_html(hero.subheading)}</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.3,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="ui:flex ui:items-center ui:justify-center ui:gap-2.5">`);
            Button($$renderer4, {
              href: hero.primaryAction.href,
              disabled: hero.primaryAction.disabled ?? false,
              size: "lg",
              class: "ui:rounded-full ui:px-6",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(hero.primaryAction.label)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (hero.secondaryAction) {
              $$renderer4.push("<!--[-->");
              Secondary_action_button($$renderer4, {
                href: hero.secondaryAction.href,
                label: hero.secondaryAction.label,
                variant: "saas"
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
        $$renderer3.push(`<!----> `);
        if (hero.image) {
          $$renderer3.push("<!--[-->");
          Blurfade($$renderer3, {
            delay: 0.45,
            once: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="ui:mt-16 ui:max-w-4xl ui:mx-auto"><img${attr("src", hero.image)} alt="" class="ui:w-full ui:h-auto ui:rounded-2xl ui:border ui:border-border ui:shadow-[0_20px_60px_-30px_rgba(14,14,16,0.25)]"/></div>`);
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></section>`);
      }
    });
  });
}
function Saas($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      orgName,
      logoUrl,
      navItems,
      authAction,
      hero,
      courses,
      hasMoreCourses = false,
      disableCourseLinks = false,
      embed,
      callout,
      links,
      footer
    } = $$props;
    function formatCurrency(cost, currency = "USD") {
      if (!cost) return "Free";
      return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(cost);
    }
    $$renderer2.push(`<div class="saas-root ui:min-h-screen ui:bg-background ui:text-foreground ui:font-sans svelte-1he1gxm"><div class="frame">`);
    {
      let navigation = function($$renderer3) {
        Nav$4($$renderer3, { orgName, logoUrl, navItems, authAction });
      };
      Hero$4($$renderer2, { hero, navigation });
    }
    $$renderer2.push(`<!----> `);
    if (courses.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="plus-row"></div> <section class="ui:py-20 ui:px-6"><div class="ui:max-w-[1180px] ui:mx-auto"><div class="ui:flex ui:flex-col ui:md:flex-row ui:md:items-end ui:md:justify-between ui:gap-4 ui:mb-12"><div><p class="ui:text-xs ui:font-semibold ui:tracking-widest ui:uppercase ui:text-primary ui:mb-3">Catalog</p> <h2 class="ui:text-3xl ui:md:text-4xl ui:font-bold ui:tracking-tight">Featured programs.</h2></div> `);
      if (hasMoreCourses) {
        $$renderer2.push("<!--[-->");
        Button($$renderer2, {
          href: disableCourseLinks ? void 0 : "/courses",
          variant: "outline",
          class: "ui:rounded-full ui:self-start ui:md:self-auto",
          disabled: disableCourseLinks,
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->Browse catalog`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="course-grid ui:relative"><!--[-->`);
      const each_array = ensure_array_like(courses);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let course = each_array[index];
        const courseTypeMeta = getCourseTypeLandingMeta(course);
        const primaryTag = getPrimaryCourseTag(course);
        Blurfade($$renderer2, {
          delay: 0.06 * index,
          once: true,
          class: "course-card-wrap",
          children: ($$renderer3) => {
            $$renderer3.push(`<a${attr("href", disableCourseLinks ? void 0 : course.link || (course.slug ? `/course/${course.slug}` : void 0))}${attr_class(`course-card ui:flex ui:flex-col ui:h-full ui:no-underline ui:bg-background ui:transition-colors ${stringify(disableCourseLinks ? "ui:cursor-default" : "ui:hover:bg-muted/40")}`)}${attr("aria-disabled", disableCourseLinks)}${attr("tabindex", disableCourseLinks ? -1 : void 0)}>`);
            if (course.logo) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<div class="ui:h-40 ui:w-full ui:bg-cover ui:bg-center ui:relative"${attr_style(`background-image: url(${course.logo});`)}>`);
              if (courseTypeMeta) {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<span class="ui:absolute ui:top-3 ui:left-3 ui:bg-background/95 ui:text-foreground ui:text-[11px] ui:font-semibold ui:px-2.5 ui:py-1 ui:rounded-full">${escape_html(courseTypeMeta.label)}</span>`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]--></div>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> <div class="ui:p-5 ui:flex ui:flex-col ui:flex-1 ui:gap-2"><h3 class="ui:text-lg ui:font-bold ui:tracking-tight ui:leading-snug ui:m-0">${escape_html(course.title)}</h3> <p class="ui:text-sm ui:text-muted-foreground ui:line-clamp-2 ui:leading-relaxed ui:m-0 ui:flex-1">${escape_html(course.description)}</p> <div class="ui:flex ui:items-center ui:gap-2 ui:flex-wrap ui:text-xs ui:text-muted-foreground ui:mt-2">`);
            if (course.duration) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span class="ui:inline-flex ui:items-center ui:gap-1">`);
              Clock($$renderer3, { class: "ui:size-3.5" });
              $$renderer3.push(`<!----> ${escape_html(course.duration)}</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (primaryTag) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span class="ui:inline-flex ui:items-center ui:gap-1">`);
              Tag($$renderer3, { class: "ui:size-3.5" });
              $$renderer3.push(`<!----> `);
              if (primaryTag.color) {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<span class="ui:inline-block ui:size-2 ui:rounded-full"${attr_style(`background-color: ${primaryTag.color}`)} aria-hidden="true"></span>`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]--> ${escape_html(primaryTag.name)}</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--></div> <div class="ui:flex ui:items-center ui:justify-between ui:pt-4 ui:mt-2 ui:border-t ui:border-border/60"><span class="ui:text-sm ui:font-bold">${escape_html(course.price || formatCurrency(course.cost, course.currency))}</span> <span class="ui:inline-flex ui:items-center ui:gap-1 ui:text-xs ui:font-semibold ui:text-primary" aria-hidden="true">Enroll `);
            Arrow_right($$renderer3, { class: "ui:size-3.5" });
            $$renderer3.push(`<!----></span></div></div></a>`);
          }
        });
      }
      $$renderer2.push(`<!--]--></div></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (links && links.cards.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="plus-row"></div> `);
      Links($$renderer2, { links, variant: "saas" });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (embed) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="plus-row"></div> `);
      Embed($$renderer2, { embed, variant: "saas" });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (callout) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="plus-row"></div> `);
      Callout($$renderer2, { callout, variant: "saas" });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    Landing_page_footer($$renderer2, { orgName, logoUrl, footer, variant: "saas" });
    $$renderer2.push(`<!----></div>`);
  });
}
function Nav$3($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { orgName, logoUrl, navItems, authAction } = $$props;
    Editable_section($$renderer2, {
      sectionKey: "navigation",
      children: ($$renderer3) => {
        $$renderer3.push(`<header class="ui:flex ui:items-center ui:justify-between ui:gap-6 ui:py-4 ui:text-primary-foreground"><a href="/" class="ui:flex ui:items-center ui:gap-2 ui:font-bold ui:text-base ui:tracking-tight ui:text-primary-foreground ui:no-underline">`);
        if (logoUrl) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<img${attr("src", logoUrl)}${attr("alt", orgName)} class="ui:h-7 ui:w-auto"/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> ${escape_html(orgName)}</a> `);
        if (navItems.length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<nav class="ui:hidden ui:md:flex ui:gap-1.5 ui:font-mono ui:text-[13px]"><!--[-->`);
          const each_array = ensure_array_like(navItems);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            $$renderer3.push(`<a${attr("href", item.href)} class="ui:px-3 ui:py-1.5 ui:rounded-full ui:border ui:border-transparent ui:text-primary-foreground/85 ui:hover:text-primary-foreground ui:hover:border-primary-foreground/30 ui:hover:bg-primary-foreground/10 ui:transition-colors ui:no-underline">( ${escape_html(item.label.toLowerCase())} )</a>`);
          }
          $$renderer3.push(`<!--]--></nav>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (authAction) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            href: authAction.href,
            size: "sm",
            variant: "outline",
            class: "ui:rounded-none ui:font-semibold ui:border-primary-foreground ui:text-primary-foreground ui:bg-transparent ui:hover:bg-primary-foreground/10 ui:hover:text-primary-foreground",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(authAction.label)} →`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></header>`);
      }
    });
  });
}
function Hero$3($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { hero, navigation } = $$props;
    Editable_section($$renderer2, {
      sectionKey: "hero",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="ui:relative ui:bg-primary ui:text-primary-foreground ui:overflow-hidden ui:px-6 ui:pt-2 ui:pb-20"><div class="ui:pointer-events-none ui:absolute ui:inset-0 ui:opacity-[0.08]" style="background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px); background-size: 56px 56px;" aria-hidden="true"></div> <div class="ui:relative ui:max-w-[1280px] ui:mx-auto">`);
        navigation($$renderer3);
        $$renderer3.push(`<!----></div> <div class="ui:relative ui:max-w-[1280px] ui:mx-auto ui:py-16 ui:lg:py-24 ui:grid ui:lg:grid-cols-2 ui:gap-12 ui:items-center"><div>`);
        Blurfade($$renderer3, {
          delay: 0,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="ui:inline-block ui:font-mono ui:text-xs ui:tracking-widest ui:uppercase ui:text-primary-foreground/80 ui:bg-primary-foreground/10 ui:px-3 ui:py-1.5 ui:mb-6">// engineering academy</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.12,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<h1 class="ui:text-5xl ui:lg:text-7xl ui:font-extrabold ui:tracking-tight ui:leading-[0.95] ui:mb-6">${escape_html(hero.heading)}</h1>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.24,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="ui:text-lg ui:lg:text-xl ui:text-primary-foreground/80 ui:max-w-xl ui:mb-8 ui:leading-relaxed">${escape_html(hero.subheading)}</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.36,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="ui:flex ui:flex-wrap ui:items-center ui:gap-3">`);
            Button($$renderer4, {
              href: hero.primaryAction.href,
              disabled: hero.primaryAction.disabled ?? false,
              size: "lg",
              variant: "secondary",
              class: "ui:rounded-none ui:px-7 ui:font-semibold ui:bg-primary-foreground ui:text-primary ui:hover:bg-primary-foreground/90",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(hero.primaryAction.label)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (hero.secondaryAction) {
              $$renderer4.push("<!--[-->");
              Secondary_action_button($$renderer4, {
                href: hero.secondaryAction.href,
                label: hero.secondaryAction.label,
                variant: "tech"
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
        $$renderer3.push(`<!----></div> `);
        if (hero.image) {
          $$renderer3.push("<!--[-->");
          Blurfade($$renderer3, {
            delay: 0.3,
            once: true,
            class: "ui:hidden ui:lg:block",
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="ui:relative"><div class="ui:absolute ui:inset-0 ui:bg-primary-foreground/10 ui:translate-x-3 ui:translate-y-3"></div> <img${attr("src", hero.image)} alt="" class="ui:relative ui:w-full ui:h-[460px] ui:object-cover ui:border ui:border-primary-foreground/20"/></div>`);
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></section>`);
      }
    });
  });
}
function Tech($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      orgName,
      logoUrl,
      navItems,
      authAction,
      hero,
      courses,
      hasMoreCourses = false,
      disableCourseLinks = false,
      embed,
      callout,
      links,
      footer
    } = $$props;
    function formatCurrency(cost, currency = "USD") {
      if (!cost) return "Free";
      return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(cost);
    }
    $$renderer2.push(`<div class="ui:min-h-screen ui:bg-background ui:text-foreground ui:font-sans"><main>`);
    {
      let navigation = function($$renderer3) {
        Nav$3($$renderer3, { orgName, logoUrl, navItems, authAction });
      };
      Hero$3($$renderer2, { hero, navigation });
    }
    $$renderer2.push(`<!----> `);
    if (courses.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="ui:py-24 ui:px-6"><div class="ui:max-w-[1280px] ui:mx-auto"><div class="ui:flex ui:items-end ui:justify-between ui:flex-wrap ui:gap-4 ui:mb-14"><div><p class="ui:font-mono ui:text-xs ui:tracking-widest ui:uppercase ui:text-primary ui:mb-3">// catalog</p> <h2 class="ui:text-4xl ui:lg:text-5xl ui:font-extrabold ui:tracking-tight ui:m-0">Latest courses</h2></div> `);
      if (hasMoreCourses) {
        $$renderer2.push("<!--[-->");
        Button($$renderer2, {
          href: disableCourseLinks ? void 0 : "/courses",
          variant: "outline",
          class: "ui:rounded-none ui:font-mono ui:text-sm",
          disabled: disableCourseLinks,
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->view all →`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:lg:grid-cols-3 ui:border-t ui:border-l ui:border-border"><!--[-->`);
      const each_array = ensure_array_like(courses);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let course = each_array[index];
        const courseTypeMeta = getCourseTypeLandingMeta(course);
        Blurfade($$renderer2, {
          delay: 0.06 * index,
          once: true,
          children: ($$renderer3) => {
            $$renderer3.push(`<a${attr("href", disableCourseLinks ? void 0 : course.link || (course.slug ? `/course/${course.slug}` : void 0))}${attr_class(`ui:flex ui:flex-col ui:h-full ui:p-7 ui:border-r ui:border-b ui:border-border ui:bg-background ui:transition-colors ui:no-underline ${stringify(disableCourseLinks ? "ui:cursor-default" : "ui:hover:bg-muted/40")}`)}${attr("aria-disabled", disableCourseLinks)}${attr("tabindex", disableCourseLinks ? -1 : void 0)}>`);
            if (courseTypeMeta) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span class="ui:inline-block ui:self-start ui:px-2.5 ui:py-1 ui:bg-primary ui:text-primary-foreground ui:font-mono ui:text-[10px] ui:font-semibold ui:tracking-wider ui:uppercase ui:mb-4">${escape_html(courseTypeMeta.label)}</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> <h3 class="ui:text-xl ui:font-bold ui:tracking-tight ui:leading-tight ui:mb-3 ui:m-0">${escape_html(course.title)}</h3> <p class="ui:text-sm ui:text-muted-foreground ui:leading-relaxed ui:line-clamp-3 ui:flex-1 ui:m-0 ui:mb-5">${escape_html(course.description)}</p> <div class="ui:flex ui:items-center ui:justify-between ui:pt-4 ui:border-t ui:border-dashed ui:border-border"><span class="ui:font-mono ui:text-sm ui:font-bold">${escape_html(course.price || formatCurrency(course.cost, course.currency))}</span> <span class="ui:inline-flex ui:items-center ui:gap-1 ui:font-mono ui:text-xs ui:text-primary ui:font-bold" aria-hidden="true">enroll `);
            Arrow_right($$renderer3, { class: "ui:size-3.5" });
            $$renderer3.push(`<!----></span></div> `);
            if (course.duration) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<p class="ui:font-mono ui:text-[11px] ui:text-muted-foreground ui:mt-3 ui:inline-flex ui:items-center ui:gap-1.5">`);
              Clock($$renderer3, { class: "ui:size-3" });
              $$renderer3.push(`<!----> ${escape_html(course.duration)}</p>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--></a>`);
          }
        });
      }
      $$renderer2.push(`<!--]--></div></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></main> `);
    Links($$renderer2, { links, variant: "tech" });
    $$renderer2.push(`<!----> `);
    Embed($$renderer2, { embed, variant: "tech" });
    $$renderer2.push(`<!----> `);
    Callout($$renderer2, { callout, variant: "tech" });
    $$renderer2.push(`<!----> `);
    Landing_page_footer($$renderer2, { orgName, logoUrl, footer, variant: "tech" });
    $$renderer2.push(`<!----></div>`);
  });
}
function Nav$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { orgName, logoUrl, navItems, authAction } = $$props;
    Editable_section($$renderer2, {
      sectionKey: "navigation",
      children: ($$renderer3) => {
        $$renderer3.push(`<header class="ui:sticky ui:top-0 ui:z-50 ui:bg-background/75 ui:backdrop-blur-md ui:border-b ui:border-border"><div class="ui:max-w-[1080px] ui:mx-auto ui:px-6"><div class="ui:grid ui:grid-cols-[1fr_auto_1fr] ui:items-center ui:h-14"><a href="/" class="ui:flex ui:items-center ui:gap-2 ui:font-semibold ui:text-[14px] ui:tracking-tight ui:text-foreground ui:no-underline">`);
        if (logoUrl) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<img${attr("src", logoUrl)}${attr("alt", orgName)} class="ui:h-5 ui:w-auto"/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> ${escape_html(orgName)}</a> `);
        if (navItems.length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<nav class="ui:hidden ui:md:flex ui:gap-0.5 ui:justify-self-center"><!--[-->`);
          const each_array = ensure_array_like(navItems);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            $$renderer3.push(`<a${attr("href", item.href)} class="ui:px-3 ui:py-1.5 ui:text-[13px] ui:text-muted-foreground ui:hover:text-foreground ui:hover:bg-muted ui:rounded-md ui:transition-colors ui:no-underline">${escape_html(item.label)}</a>`);
          }
          $$renderer3.push(`<!--]--></nav>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<span></span>`);
        }
        $$renderer3.push(`<!--]--> <div class="ui:justify-self-end ui:flex ui:items-center ui:gap-1">`);
        if (authAction) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            href: authAction.href,
            size: "sm",
            class: "ui:rounded-md ui:px-3.5",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(authAction.label)}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></div></div></header>`);
      }
    });
  });
}
function Hero$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { hero, courses, navigation } = $$props;
    const programsCount = courses.length;
    const statusLabel = programsCount > 0 ? `Now in session · ${programsCount} ${programsCount === 1 ? "program" : "programs"} running` : "Studio opening soon";
    const marqueeItems = courses.slice(0, 10);
    const showMarquee = marqueeItems.length > 0;
    navigation($$renderer2);
    $$renderer2.push(`<!----> `);
    Editable_section($$renderer2, {
      sectionKey: "hero",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="ui:relative ui:overflow-hidden ui:px-6 ui:pt-20 ui:pb-20 ui:md:pt-24 ui:md:pb-24 svelte-s8ua3r"><div class="ui:pointer-events-none ui:absolute ui:-top-32 ui:-left-24 ui:h-[520px] ui:w-[520px] ui:rounded-full ui:opacity-60 ui:blur-3xl svelte-s8ua3r" style="background: radial-gradient(circle, color-mix(in oklab, var(--primary) 35%, transparent) 0%, transparent 70%);" aria-hidden="true"></div> <div class="ui:pointer-events-none ui:absolute ui:-top-20 ui:right-[-10%] ui:h-[420px] ui:w-[420px] ui:rounded-full ui:opacity-40 ui:blur-3xl svelte-s8ua3r" style="background: radial-gradient(circle, color-mix(in oklab, var(--primary) 18%, transparent) 0%, transparent 70%);" aria-hidden="true"></div> <div class="ui:relative ui:max-w-[1080px] ui:mx-auto svelte-s8ua3r">`);
        Blurfade($$renderer3, {
          delay: 0,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<span class="ui:inline-flex ui:items-center ui:gap-2 ui:mb-7 ui:px-3 ui:py-1.5 ui:rounded-full ui:border ui:border-border ui:bg-card/70 ui:backdrop-blur-sm ui:text-[12px] ui:font-medium ui:text-foreground svelte-s8ua3r"><span class="studio-status-dot ui:size-1.5 ui:rounded-full svelte-s8ua3r" aria-hidden="true"></span> ${escape_html(statusLabel)}</span>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.08,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<h1 class="ui:text-4xl ui:md:text-5xl ui:lg:text-[64px] ui:font-semibold ui:tracking-tight ui:leading-[1.02] ui:max-w-[18ch] ui:mb-5 ui:text-foreground ui:text-balance svelte-s8ua3r">${escape_html(hero.heading)}</h1>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.18,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="ui:text-base ui:md:text-lg ui:text-muted-foreground ui:max-w-xl ui:mb-8 ui:leading-relaxed svelte-s8ua3r">${escape_html(hero.subheading)}</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.28,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="ui:flex ui:flex-wrap ui:items-center ui:gap-2 svelte-s8ua3r">`);
            Button($$renderer4, {
              href: hero.primaryAction.href,
              disabled: hero.primaryAction.disabled ?? false,
              class: "ui:rounded-md ui:px-5",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(hero.primaryAction.label)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (hero.secondaryAction) {
              $$renderer4.push("<!--[-->");
              Secondary_action_button($$renderer4, {
                href: hero.secondaryAction.href,
                label: hero.secondaryAction.label,
                variant: "studio"
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
        $$renderer3.push(`<!----> `);
        if (hero.image) {
          $$renderer3.push("<!--[-->");
          Blurfade($$renderer3, {
            delay: 0.4,
            once: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="studio-polaroid ui:mt-16 ui:relative ui:rounded-xl ui:border ui:border-border ui:bg-card ui:p-2 ui:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.35)] svelte-s8ua3r"><img${attr("src", hero.image)} alt="" class="ui:w-full ui:h-auto ui:rounded-lg ui:border ui:border-border svelte-s8ua3r"/></div>`);
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (showMarquee) {
          $$renderer3.push("<!--[-->");
          Blurfade($$renderer3, {
            delay: hero.image ? 0.5 : 0.4,
            once: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="studio-marquee-mask ui:mt-16 ui:py-4 ui:border-y ui:border-border svelte-s8ua3r" aria-hidden="true"><div class="studio-marquee-track ui:flex ui:gap-12 ui:whitespace-nowrap ui:w-max svelte-s8ua3r"><!--[-->`);
              const each_array = ensure_array_like([...marqueeItems, ...marqueeItems]);
              for (let index = 0, $$length = each_array.length; index < $$length; index++) {
                let course = each_array[index];
                $$renderer4.push(`<span class="ui:inline-flex ui:items-center ui:gap-3 svelte-s8ua3r"><span class="ui:size-1 ui:rounded-full ui:bg-primary/70 svelte-s8ua3r"></span> <span class="ui:text-sm ui:font-medium ui:text-muted-foreground svelte-s8ua3r">${escape_html(course.title)}</span></span>`);
              }
              $$renderer4.push(`<!--]--></div></div>`);
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></section>`);
      }
    });
    $$renderer2.push(`<!---->`);
  });
}
function Studio($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      orgName,
      logoUrl,
      navItems,
      authAction,
      hero,
      courses,
      hasMoreCourses = false,
      disableCourseLinks = false,
      embed,
      callout,
      links,
      footer
    } = $$props;
    function formatCurrency(cost, currency = "USD") {
      if (!cost) return "Free";
      return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(cost);
    }
    $$renderer2.push(`<div class="ui:min-h-screen ui:bg-background ui:text-foreground ui:font-sans"><main>`);
    {
      let navigation = function($$renderer3) {
        Nav$2($$renderer3, { orgName, logoUrl, navItems, authAction });
      };
      Hero$2($$renderer2, { hero, courses, navigation });
    }
    $$renderer2.push(`<!----> `);
    if (courses.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="ui:py-24 ui:px-6 ui:border-t ui:border-border"><div class="ui:max-w-[1080px] ui:mx-auto"><div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:gap-12 ui:items-end ui:mb-12"><div><p class="ui:text-sm ui:text-muted-foreground ui:mb-1.5 ui:inline-flex ui:items-center ui:gap-2"><span class="ui:size-1.5 ui:rounded-full ui:bg-primary"></span> Catalog</p> <h2 class="ui:text-3xl ui:lg:text-4xl ui:font-semibold ui:tracking-tight ui:m-0">Programs your team can actually finish.</h2></div> `);
      if (hasMoreCourses) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="ui:flex ui:justify-start ui:md:justify-end">`);
        Button($$renderer2, {
          href: disableCourseLinks ? void 0 : "/courses",
          variant: "outline",
          class: "ui:rounded-md",
          disabled: disableCourseLinks,
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->Browse all →`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:lg:grid-cols-3 ui:gap-3"><!--[-->`);
      const each_array = ensure_array_like(courses);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let course = each_array[index];
        const courseTypeMeta = getCourseTypeLandingMeta(course);
        Blurfade($$renderer2, {
          delay: 0.06 * index,
          once: true,
          children: ($$renderer3) => {
            $$renderer3.push(`<a${attr("href", disableCourseLinks ? void 0 : course.link || (course.slug ? `/course/${course.slug}` : void 0))}${attr_class(`ui:group ui:flex ui:flex-col ui:h-full ui:bg-card ui:border ui:border-border ui:rounded-xl ui:overflow-hidden ui:transition-colors ui:no-underline ${stringify(disableCourseLinks ? "ui:cursor-default" : "ui:hover:border-foreground/30")}`)}${attr("aria-disabled", disableCourseLinks)}${attr("tabindex", disableCourseLinks ? -1 : void 0)}><div class="ui:relative ui:h-[200px] ui:bg-muted/50 ui:border-b ui:border-border ui:p-5 ui:overflow-hidden">`);
            if (course.logo) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<img${attr("src", course.logo)} alt="" class="ui:absolute ui:inset-0 ui:w-full ui:h-full ui:object-cover ui:opacity-60"/>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> <div class="ui:relative ui:flex ui:items-start ui:justify-between" style="background: linear-gradient(180deg, transparent 60%, var(--card) 100%);">`);
            if (courseTypeMeta) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span class="ui:inline-flex ui:items-center ui:gap-1.5 ui:px-2 ui:py-0.5 ui:bg-background/95 ui:border ui:border-border ui:rounded-md ui:text-[11px] ui:font-medium ui:text-foreground">${escape_html(courseTypeMeta.label)}</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--></div></div> <div class="ui:p-5 ui:flex ui:items-end ui:justify-between ui:gap-3 ui:flex-1"><div class="ui:flex-1 ui:min-w-0"><p class="ui:text-[13px] ui:text-muted-foreground ui:mb-1.5 ui:m-0">${escape_html(course.price || formatCurrency(course.cost, course.currency))}</p> <h3 class="ui:text-base ui:font-medium ui:tracking-tight ui:leading-snug ui:m-0">${escape_html(course.title)}</h3></div> <span class="ui:flex-shrink-0 ui:inline-flex ui:items-center ui:justify-center ui:size-8 ui:rounded-full ui:border ui:border-border ui:text-muted-foreground ui:group-hover:bg-foreground ui:group-hover:text-background ui:group-hover:border-foreground ui:transition-colors" aria-hidden="true">`);
            Arrow_right($$renderer3, { class: "ui:size-3.5" });
            $$renderer3.push(`<!----></span></div></a>`);
          }
        });
      }
      $$renderer2.push(`<!--]--></div></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></main> `);
    Links($$renderer2, { links, variant: "studio" });
    $$renderer2.push(`<!----> `);
    Embed($$renderer2, { embed, variant: "studio" });
    $$renderer2.push(`<!----> `);
    Callout($$renderer2, { callout, variant: "studio" });
    $$renderer2.push(`<!----> `);
    Landing_page_footer($$renderer2, { orgName, logoUrl, footer, variant: "studio" });
    $$renderer2.push(`<!----></div>`);
  });
}
function Nav$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { orgName, logoUrl, navItems, authAction } = $$props;
    Editable_section($$renderer2, {
      sectionKey: "navigation",
      children: ($$renderer3) => {
        $$renderer3.push(`<header class="ui:sticky ui:top-0 ui:z-50 ui:bg-background/95 ui:backdrop-blur-md ui:border-b ui:border-border"><div class="ui:max-w-[1120px] ui:mx-auto ui:px-6"><div class="ui:flex ui:items-center ui:justify-between ui:h-14"><a href="/" class="ui:flex ui:items-center ui:gap-2 ui:font-semibold ui:text-[15px] ui:tracking-tight ui:text-foreground ui:no-underline">`);
        if (logoUrl) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<img${attr("src", logoUrl)}${attr("alt", orgName)} class="ui:h-6 ui:w-auto"/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> ${escape_html(orgName)}</a> `);
        if (navItems.length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<nav class="ui:hidden ui:md:flex ui:gap-7"><!--[-->`);
          const each_array = ensure_array_like(navItems);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            $$renderer3.push(`<a${attr("href", item.href)} class="ui:text-sm ui:text-muted-foreground ui:hover:text-foreground ui:transition-colors ui:no-underline">${escape_html(item.label)}</a>`);
          }
          $$renderer3.push(`<!--]--></nav>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> <div class="ui:flex ui:items-center ui:gap-3">`);
        if (authAction) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            href: authAction.href,
            size: "sm",
            class: "ui:rounded-none ui:px-4 ui:font-medium",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(authAction.label)}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></div></div></header>`);
      }
    });
  });
}
function Hero$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { orgName, hero, navigation } = $$props;
    const stats = hero.stats ?? [];
    navigation($$renderer2);
    $$renderer2.push(`<!----> `);
    Editable_section($$renderer2, {
      sectionKey: "hero",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="ui:px-6 ui:pt-12 ui:pb-24 ui:md:pt-16 ui:md:pb-28"><div class="ui:max-w-[1120px] ui:mx-auto">`);
        Blurfade($$renderer3, {
          delay: 0,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="ui:flex ui:items-center ui:gap-4 ui:pb-5 ui:mb-10 ui:border-b ui:border-border"><span class="ui:text-[11px] ui:font-semibold ui:tracking-[0.2em] ui:uppercase ui:text-foreground">${escape_html(orgName)}</span> <span class="ui:h-px ui:flex-1 ui:bg-border" aria-hidden="true"></span> <span class="ui:text-[11px] ui:font-semibold ui:tracking-[0.2em] ui:uppercase ui:text-muted-foreground">Learning Report</span></div>`);
          }
        });
        $$renderer3.push(`<!----> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-12 ui:gap-x-8 ui:gap-y-12"><div class="ui:md:col-span-7">`);
        Blurfade($$renderer3, {
          delay: 0.08,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<h1 class="ui:text-4xl ui:md:text-5xl ui:lg:text-[56px] ui:font-semibold ui:tracking-tight ui:leading-[1.05] ui:mb-6 ui:text-foreground">${escape_html(hero.heading)}</h1>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.18,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="ui:text-base ui:md:text-lg ui:text-muted-foreground ui:max-w-xl ui:mb-8 ui:leading-relaxed">${escape_html(hero.subheading)}</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.28,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="ui:flex ui:flex-wrap ui:items-center ui:gap-3">`);
            Button($$renderer4, {
              href: hero.primaryAction.href,
              disabled: hero.primaryAction.disabled ?? false,
              class: "ui:rounded-none ui:px-6 ui:font-medium",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(hero.primaryAction.label)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (hero.secondaryAction) {
              $$renderer4.push("<!--[-->");
              Secondary_action_button($$renderer4, {
                href: hero.secondaryAction.href,
                label: hero.secondaryAction.label,
                variant: "corporate"
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
        $$renderer3.push(`<!----></div> `);
        if (stats.length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<aside class="ui:md:col-span-4 ui:md:col-start-9 ui:md:border-l ui:md:border-border ui:md:pl-8">`);
          Blurfade($$renderer3, {
            delay: 0.32,
            once: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<p class="ui:text-[11px] ui:font-semibold ui:tracking-[0.2em] ui:uppercase ui:text-muted-foreground ui:mb-6">At a glance</p> <dl class="ui:flex ui:flex-col"><!--[-->`);
              const each_array = ensure_array_like(stats);
              for (let index = 0, $$length = each_array.length; index < $$length; index++) {
                let stat = each_array[index];
                $$renderer4.push(`<div class="ui:flex ui:items-baseline ui:justify-between ui:gap-4 ui:py-4 ui:border-t ui:border-border ui:first:border-t-0"><div class="ui:flex ui:items-baseline ui:gap-3 ui:min-w-0"><span class="ui:text-[11px] ui:font-mono ui:text-muted-foreground ui:tabular-nums">${escape_html(String(index + 1).padStart(2, "0"))}</span> <dt class="ui:text-sm ui:text-foreground ui:truncate">${escape_html(stat.label)}</dt></div> <dd class="ui:text-2xl ui:md:text-3xl ui:font-semibold ui:tracking-tight ui:tabular-nums ui:text-foreground ui:m-0">${escape_html(stat.value)}</dd></div>`);
              }
              $$renderer4.push(`<!--]--></dl>`);
            }
          });
          $$renderer3.push(`<!----></aside>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></div></section>`);
      }
    });
    $$renderer2.push(`<!---->`);
  });
}
function Corporate($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      orgName,
      logoUrl,
      navItems,
      authAction,
      hero,
      courses,
      hasMoreCourses = false,
      disableCourseLinks = false,
      embed,
      callout,
      links,
      footer
    } = $$props;
    function formatCurrency(cost, currency = "USD") {
      if (!cost) return "Free";
      return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(cost);
    }
    $$renderer2.push(`<div class="ui:min-h-screen ui:bg-background ui:text-foreground ui:font-sans"><main>`);
    {
      let navigation = function($$renderer3) {
        Nav$1($$renderer3, { orgName, logoUrl, navItems, authAction });
      };
      Hero$1($$renderer2, { orgName, hero, navigation });
    }
    $$renderer2.push(`<!----> `);
    if (courses.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="ui:py-24 ui:px-6 ui:border-t ui:border-border"><div class="ui:max-w-[1120px] ui:mx-auto"><div class="ui:flex ui:items-end ui:justify-between ui:flex-wrap ui:gap-4 ui:mb-10"><div><p class="ui:text-xs ui:font-semibold ui:tracking-widest ui:uppercase ui:text-foreground ui:mb-3">Catalog</p> <h2 class="ui:text-3xl ui:lg:text-4xl ui:font-semibold ui:tracking-tight ui:m-0 ui:max-w-xl">Programs your teams are taking</h2></div> `);
      if (hasMoreCourses) {
        $$renderer2.push("<!--[-->");
        Button($$renderer2, {
          href: disableCourseLinks ? void 0 : "/courses",
          variant: "outline",
          class: "ui:rounded-none ui:font-medium",
          disabled: disableCourseLinks,
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->Browse catalog →`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:lg:grid-cols-3 ui:border-t ui:border-l ui:border-border"><!--[-->`);
      const each_array = ensure_array_like(courses);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let course = each_array[index];
        const courseTypeMeta = getCourseTypeLandingMeta(course);
        Blurfade($$renderer2, {
          delay: 0.06 * index,
          once: true,
          children: ($$renderer3) => {
            $$renderer3.push(`<a${attr("href", disableCourseLinks ? void 0 : course.link || (course.slug ? `/course/${course.slug}` : void 0))}${attr_class(`ui:flex ui:flex-col ui:h-full ui:p-6 ui:gap-2 ui:border-r ui:border-b ui:border-border ui:bg-background ui:transition-colors ui:no-underline ${stringify(disableCourseLinks ? "ui:cursor-default" : "ui:hover:bg-muted/30")}`)}${attr("aria-disabled", disableCourseLinks)}${attr("tabindex", disableCourseLinks ? -1 : void 0)}>`);
            if (courseTypeMeta) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span class="ui:text-[11px] ui:font-semibold ui:tracking-widest ui:uppercase ui:text-muted-foreground ui:mb-1">${escape_html(courseTypeMeta.label)}</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> <h3 class="ui:text-lg ui:font-semibold ui:tracking-tight ui:leading-snug ui:m-0">${escape_html(course.title)}</h3> <p class="ui:text-sm ui:text-muted-foreground ui:leading-relaxed ui:line-clamp-3 ui:flex-1 ui:m-0">${escape_html(course.description)}</p> <div class="ui:flex ui:items-center ui:justify-between ui:pt-4 ui:mt-3 ui:border-t ui:border-border"><span class="ui:text-sm ui:font-semibold">${escape_html(course.price || formatCurrency(course.cost, course.currency))}</span> <span class="ui:text-sm ui:text-foreground ui:underline ui:underline-offset-4" aria-hidden="true">Enroll →</span></div></a>`);
          }
        });
      }
      $$renderer2.push(`<!--]--></div></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></main> `);
    Links($$renderer2, { links, variant: "corporate" });
    $$renderer2.push(`<!----> `);
    Embed($$renderer2, { embed, variant: "corporate" });
    $$renderer2.push(`<!----> `);
    Callout($$renderer2, { callout, variant: "corporate" });
    $$renderer2.push(`<!----> `);
    Landing_page_footer($$renderer2, { orgName, logoUrl, footer, variant: "corporate" });
    $$renderer2.push(`<!----></div>`);
  });
}
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { orgName, logoUrl, navItems, authAction } = $$props;
    Editable_section($$renderer2, {
      sectionKey: "navigation",
      children: ($$renderer3) => {
        $$renderer3.push(`<header class="ui:relative ui:z-50 ui:px-6" style="background: transparent;"><div class="ui:max-w-[1120px] ui:mx-auto"><div class="ui:flex ui:items-center ui:justify-between ui:h-16"><div class="ui:flex ui:items-center ui:gap-8"><a href="/"${attr("aria-label", orgName)} class="ui:flex ui:items-center ui:gap-2 ui:no-underline ui:text-foreground" style="color: var(--terminal-ink, #e9eaed);">`);
        if (logoUrl) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<img${attr("src", logoUrl)}${attr("alt", orgName)} class="ui:h-6 ui:w-auto"/>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<svg viewBox="0 0 16 16" fill="none" class="ui:size-5"><path d="M2 2 L8 8 L2 14 M14 2 L8 8 L14 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
        }
        $$renderer3.push(`<!--]--></a> `);
        if (navItems.length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<nav class="ui:hidden ui:md:flex ui:items-center ui:gap-6"><!--[-->`);
          const each_array = ensure_array_like(navItems);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            $$renderer3.push(`<a${attr("href", item.href)} class="ui:text-[11px] ui:font-medium ui:tracking-[0.12em] ui:uppercase ui:no-underline ui:transition-colors" style="color: var(--terminal-ink-dim, #9da1ab);">${escape_html(item.label)}</a>`);
          }
          $$renderer3.push(`<!--]--> <span class="ui:select-none" style="color: var(--terminal-ink-faint, #3d4049);" aria-hidden="true">/</span></nav>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> <div class="ui:flex ui:items-center ui:gap-3">`);
        if (authAction) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            href: authAction.href,
            size: "sm",
            variant: "outline",
            class: "ui:rounded-full ui:px-4 ui:font-medium ui:bg-transparent ui:border-[var(--terminal-line-strong,#262a35)] ui:text-[var(--terminal-ink,#e9eaed)] ui:hover:bg-white/5",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(authAction.label)}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></div></div></header>`);
      }
    });
  });
}
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { orgName, hero, courses, navigation } = $$props;
    const programsCount = courses.length;
    const learnersCount = courses.reduce((sum, course) => sum + (course.totalStudents ?? 0), 0);
    const tracksCount = new Set(courses.map((course) => course.type).filter(Boolean)).size;
    const numberFormatter = new Intl.NumberFormat("en-US");
    const learnersFormatted = numberFormatter.format(learnersCount);
    function priceLabel(course) {
      if (course.price) return course.price;
      if (!course.cost) return "Free";
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: course.currency ?? "USD",
        maximumFractionDigits: 0
      }).format(course.cost);
    }
    function durationLabel(course) {
      if (course.duration) return course.duration;
      if (course.lessonCount && course.lessonCount > 0) {
        return `${course.lessonCount} ${course.lessonCount === 1 ? "lesson" : "lessons"}`;
      }
      return "—";
    }
    const terminalRows = courses.slice(0, 5).map((course, index) => ({
      n: String(index + 1).padStart(2, "0"),
      slug: course.slug ?? course.id,
      price: priceLabel(course),
      duration: durationLabel(course)
    }));
    const orgSlug = orgName.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "org";
    navigation($$renderer2);
    $$renderer2.push(`<!----> `);
    Editable_section($$renderer2, {
      sectionKey: "hero",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="ui:relative ui:overflow-hidden ui:px-6 ui:pt-16 ui:pb-16 ui:md:pt-20 ui:md:pb-20 svelte-rcua61" style="background: #06070a; --terminal-bg: #06070a; --terminal-bg-soft: #0c0e13; --terminal-bg-card: #0f1218; --terminal-bg-elevated: #14171f; --terminal-line: #1c1f28; --terminal-line-soft: #161922; --terminal-line-strong: #262a35; --terminal-ink: #e9eaed; --terminal-ink-dim: #9da1ab; --terminal-ink-muted: #61656f; --terminal-ink-faint: #3d4049;"><div class="ui:pointer-events-none ui:absolute ui:inset-x-0 ui:-top-32 ui:h-[680px] ui:opacity-90 svelte-rcua61" style="background: radial-gradient(ellipse 60% 70% at 50% 30%, color-mix(in oklab, var(--primary) 22%, transparent) 0%, transparent 65%);" aria-hidden="true"></div> <div class="ui:relative ui:max-w-[1120px] ui:mx-auto ui:text-center svelte-rcua61">`);
        Blurfade($$renderer3, {
          delay: 0,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<h1 class="ui:font-semibold ui:leading-[0.95] ui:mb-10 ui:max-w-[20ch] ui:mx-auto ui:text-balance svelte-rcua61" style="font-size: clamp(48px, 9vw, 128px); letter-spacing: -0.04em; background: linear-gradient(180deg, color-mix(in oklab, var(--primary) 60%, #ffffff) 0%, color-mix(in oklab, var(--primary) 35%, transparent) 45%, rgba(8, 10, 14, 0.3) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; text-shadow: 0 8px 60px color-mix(in oklab, var(--primary) 18%, transparent); user-select: none;">${escape_html(hero.heading)}</h1>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.12,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="ui:inline-flex ui:items-center ui:gap-2 ui:mb-8 svelte-rcua61">`);
            if (hero.secondaryAction) {
              $$renderer4.push("<!--[-->");
              Button($$renderer4, {
                href: hero.secondaryAction.href,
                size: "sm",
                variant: "outline",
                class: "ui:rounded-full ui:px-4 ui:font-medium ui:bg-white/5 ui:border-[var(--terminal-line-strong)] ui:text-[var(--terminal-ink)] ui:hover:bg-white/10",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(hero.secondaryAction.label)}`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> `);
            Button($$renderer4, {
              href: hero.primaryAction.href,
              disabled: hero.primaryAction.disabled ?? false,
              size: "sm",
              class: "ui:rounded-full ui:px-4 ui:font-medium ui:bg-[#f4f5f7] ui:text-[#0a0b0e] ui:hover:bg-white",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(hero.primaryAction.label)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.22,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="ui:text-[15px] ui:mb-7 ui:max-w-xl ui:mx-auto svelte-rcua61" style="color: var(--terminal-ink-dim);">${escape_html(hero.subheading)}</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        if (programsCount > 0) {
          $$renderer3.push("<!--[-->");
          Blurfade($$renderer3, {
            delay: 0.3,
            once: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<span class="ui:inline-flex ui:items-center ui:gap-3 ui:px-4 ui:py-2 ui:rounded-full ui:font-mono ui:text-[13px] svelte-rcua61" style="border: 1px solid var(--terminal-line-strong); background: rgba(255,255,255,0.02); backdrop-filter: blur(8px); color: var(--terminal-ink-dim);"><span style="color: var(--primary);" class="svelte-rcua61">></span> <span class="svelte-rcua61"><span style="color: var(--terminal-ink); font-weight: 500;" class="svelte-rcua61">${escape_html(programsCount)}</span> ${escape_html(programsCount === 1 ? "program" : "programs")} running</span> `);
              if (learnersCount > 0) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<span class="ui:inline-block ui:w-px ui:h-3 svelte-rcua61" style="background: var(--terminal-line-strong);"></span> <span class="svelte-rcua61"><span style="color: var(--terminal-ink); font-weight: 500;" class="svelte-rcua61">${escape_html(learnersFormatted)}</span> learners</span>`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]--> `);
              if (tracksCount > 1) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<span class="ui:inline-block ui:w-px ui:h-3 svelte-rcua61" style="background: var(--terminal-line-strong);"></span> <span class="svelte-rcua61"><span style="color: var(--terminal-ink); font-weight: 500;" class="svelte-rcua61">${escape_html(tracksCount)}</span> tracks</span>`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]--></span>`);
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (hero.image) {
          $$renderer3.push("<!--[-->");
          Blurfade($$renderer3, {
            delay: 0.4,
            once: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="ui:mt-14 ui:max-w-[880px] ui:mx-auto ui:rounded-xl ui:overflow-hidden ui:text-left svelte-rcua61" style="border: 1px solid var(--terminal-line-strong); background: var(--terminal-bg-card); box-shadow: 0 30px 90px -30px rgba(0,0,0,0.7), 0 0 0 1px color-mix(in oklab, var(--primary) 6%, transparent);"><div class="ui:flex ui:items-center ui:gap-2 ui:px-4 ui:py-3 svelte-rcua61" style="border-bottom: 1px solid var(--terminal-line); background: var(--terminal-bg-elevated);"><span class="ui:flex ui:gap-1.5 ui:mr-2 svelte-rcua61"><span class="ui:size-[11px] ui:rounded-full svelte-rcua61" style="background: #ff5f57;"></span> <span class="ui:size-[11px] ui:rounded-full svelte-rcua61" style="background: #febc2e;"></span> <span class="ui:size-[11px] ui:rounded-full svelte-rcua61" style="background: #28c840;"></span></span> <span class="ui:flex-1 ui:text-center ui:font-mono ui:text-xs ui:truncate svelte-rcua61" style="color: var(--terminal-ink-dim);">${escape_html(orgSlug)}/preview</span></div> <img${attr("src", hero.image)}${attr("alt", orgName)} class="ui:block ui:w-full ui:h-auto svelte-rcua61"/></div>`);
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
          if (terminalRows.length > 0) {
            $$renderer3.push("<!--[-->");
            Blurfade($$renderer3, {
              delay: 0.4,
              once: true,
              children: ($$renderer4) => {
                $$renderer4.push(`<div class="ui:mt-14 ui:max-w-[880px] ui:mx-auto ui:rounded-xl ui:overflow-hidden ui:text-left svelte-rcua61" style="border: 1px solid var(--terminal-line-strong); background: var(--terminal-bg-card); box-shadow: 0 30px 90px -30px rgba(0,0,0,0.7), 0 0 0 1px color-mix(in oklab, var(--primary) 6%, transparent);"><div class="ui:flex ui:items-center ui:gap-2 ui:px-4 ui:py-3 svelte-rcua61" style="border-bottom: 1px solid var(--terminal-line); background: var(--terminal-bg-elevated);"><span class="ui:flex ui:gap-1.5 ui:mr-2 svelte-rcua61"><span class="ui:size-[11px] ui:rounded-full svelte-rcua61" style="background: #ff5f57;"></span> <span class="ui:size-[11px] ui:rounded-full svelte-rcua61" style="background: #febc2e;"></span> <span class="ui:size-[11px] ui:rounded-full svelte-rcua61" style="background: #28c840;"></span></span> <span class="ui:flex-1 ui:text-center ui:font-mono ui:text-xs ui:truncate svelte-rcua61" style="color: var(--terminal-ink-dim);">${escape_html(orgSlug)}/main · catalog</span> <span class="ui:font-mono ui:text-[11px] svelte-rcua61" style="color: var(--terminal-ink-muted);">${escape_html(programsCount)}
                ${escape_html(programsCount === 1 ? "program" : "programs")}</span></div> <div class="ui:p-5 ui:font-mono ui:text-[13px] svelte-rcua61" style="color: var(--terminal-ink); line-height: 1.7;"><div class="ui:flex ui:items-baseline ui:gap-2 ui:px-3 ui:py-2 ui:rounded-md ui:mb-3 svelte-rcua61" style="background: rgba(255,255,255,0.02); border: 1px solid var(--terminal-line);"><span style="color: var(--primary);" class="svelte-rcua61">></span> <span class="svelte-rcua61">list programs --org ${escape_html(orgSlug)}</span></div> <div class="ui:py-1 ui:text-[12px] svelte-rcua61" style="color: var(--terminal-ink-muted);">● Loaded ${escape_html(programsCount)}
                ${escape_html(programsCount === 1 ? "program" : "programs")}</div> <div class="ui:mt-2 ui:flex ui:flex-col svelte-rcua61"><!--[-->`);
                const each_array = ensure_array_like(terminalRows);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let row = each_array[$$index];
                  $$renderer4.push(`<div class="ui:flex ui:items-baseline ui:gap-4 ui:py-1.5 svelte-rcua61" style="color: var(--terminal-ink);"><span style="color: var(--terminal-ink-faint);" class="svelte-rcua61">${escape_html(row.n)}</span> <span class="ui:truncate ui:flex-1 svelte-rcua61" style="color: var(--primary);">${escape_html(row.slug)}</span> <span class="ui:text-[12px] svelte-rcua61" style="color: var(--terminal-ink-dim);">${escape_html(row.duration)}</span> <span class="ui:text-[12px] ui:w-20 ui:text-right svelte-rcua61">${escape_html(row.price)}</span></div>`);
                }
                $$renderer4.push(`<!--]--></div> <div class="ui:flex ui:items-baseline ui:gap-2 ui:mt-4 svelte-rcua61"><span style="color: var(--primary);" class="svelte-rcua61">></span> <span class="ui:inline-block ui:w-2 ui:h-[14px] ui:align-middle svelte-rcua61" style="background: var(--primary); animation: terminal-caret 1s steps(1) infinite;" aria-hidden="true"></span></div></div> <div class="ui:flex ui:items-center ui:justify-between ui:px-4 ui:py-2.5 ui:font-mono ui:text-[11px] svelte-rcua61" style="border-top: 1px solid var(--terminal-line); background: var(--terminal-bg-soft); color: var(--terminal-ink-muted);"><div class="ui:flex ui:gap-4 svelte-rcua61"><span class="svelte-rcua61">Enter enroll</span> <span class="svelte-rcua61">↑/↓ navigate</span> <span class="svelte-rcua61">^q quit</span></div> <div style="color: var(--terminal-ink-dim);" class="svelte-rcua61">${escape_html(orgSlug)}-cli</div></div></div>`);
              }
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div></section>`);
      }
    });
    $$renderer2.push(`<!---->`);
  });
}
function Terminal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      orgName,
      logoUrl,
      navItems,
      authAction,
      hero,
      courses,
      hasMoreCourses = false,
      disableCourseLinks = false,
      embed,
      callout,
      links,
      footer
    } = $$props;
    function priceLabel(course) {
      if (course.price) return course.price;
      if (!course.cost) return "Free";
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: course.currency ?? "USD",
        maximumFractionDigits: 0
      }).format(course.cost);
    }
    const courseTypeKeys = Array.from(new Set(courses.map((course) => course.type).filter((t) => Boolean(t))));
    const tabs = [
      { key: "all", label: "All" },
      ...courseTypeKeys.map((type) => {
        const meta = getCourseTypeLandingMeta({ type });
        return { key: type, label: meta?.label ?? type };
      })
    ];
    let activeTab = "all";
    const visibleCourses = courses;
    function slugify(course) {
      if (course.slug) return course.slug;
      return course.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    }
    $$renderer2.push(`<div class="ui:min-h-screen ui:font-sans ui:w-full" style="background: #06070a; color: #e9eaed; --terminal-bg: #06070a; --terminal-bg-soft: #0c0e13; --terminal-bg-card: #0f1218; --terminal-bg-elevated: #14171f; --terminal-line: #1c1f28; --terminal-line-soft: #161922; --terminal-line-strong: #262a35; --terminal-ink: #e9eaed; --terminal-ink-dim: #9da1ab; --terminal-ink-muted: #61656f; --terminal-ink-faint: #3d4049;"><main>`);
    {
      let navigation = function($$renderer3) {
        Nav($$renderer3, { orgName, logoUrl, navItems, authAction });
      };
      Hero($$renderer2, {
        orgName,
        hero,
        courses,
        navigation
      });
    }
    $$renderer2.push(`<!----> `);
    if (courses.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="ui:py-24 ui:px-6" style="border-top: 1px solid var(--terminal-line); background: var(--terminal-bg);"><div class="ui:max-w-[1120px] ui:mx-auto">`);
      Blurfade($$renderer2, {
        delay: 0,
        once: true,
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="ui:font-mono ui:text-[11px] ui:tracking-[0.12em] ui:uppercase ui:mb-3 ui:inline-flex ui:items-center ui:gap-2" style="color: var(--primary);"><span class="ui:size-1.5 ui:rounded-full" style="background: var(--primary); box-shadow: 0 0 12px var(--primary);"></span> Catalog</p>`);
        }
      });
      $$renderer2.push(`<!----> `);
      Blurfade($$renderer2, {
        delay: 0.08,
        once: true,
        children: ($$renderer3) => {
          $$renderer3.push(`<h2 class="ui:text-4xl ui:lg:text-[40px] ui:font-semibold ui:tracking-tight ui:leading-[1.08] ui:m-0 ui:mb-3 ui:max-w-[700px]" style="color: var(--terminal-ink);">Programs your team can actually finish.</h2>`);
        }
      });
      $$renderer2.push(`<!----> `);
      Blurfade($$renderer2, {
        delay: 0.14,
        once: true,
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="ui:text-[15px] ui:max-w-xl ui:m-0 ui:mb-8" style="color: var(--terminal-ink-dim);">Tracks built around real-world artifacts — pull requests, postmortems, and runbooks. No filler.</p>`);
        }
      });
      $$renderer2.push(`<!----> `);
      if (tabs.length > 1) {
        $$renderer2.push("<!--[-->");
        Blurfade($$renderer2, {
          delay: 0.2,
          once: true,
          children: ($$renderer3) => {
            $$renderer3.push(`<div class="ui:inline-flex ui:items-center ui:gap-0.5 ui:p-1 ui:rounded-full ui:mb-8" style="border: 1px solid var(--terminal-line-strong); background: var(--terminal-bg-card);" role="tablist"><!--[-->`);
            const each_array = ensure_array_like(tabs);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let tab = each_array[$$index];
              const isActive = activeTab === tab.key;
              $$renderer3.push(`<button type="button" role="tab"${attr("aria-selected", isActive)} class="ui:px-3.5 ui:py-1.5 ui:text-[13px] ui:font-medium ui:rounded-full ui:transition-colors"${attr_style(isActive ? "background: var(--terminal-ink); color: var(--terminal-bg);" : "background: transparent; color: var(--terminal-ink-dim);")}>${escape_html(tab.label)}</button>`);
            }
            $$renderer3.push(`<!--]--></div>`);
          }
        });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-2 ui:lg:grid-cols-3 ui:gap-[14px]"><!--[-->`);
      const each_array_1 = ensure_array_like(visibleCourses);
      for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
        let course = each_array_1[index];
        Blurfade($$renderer2, {
          delay: 0.04 * index,
          once: true,
          children: ($$renderer3) => {
            $$renderer3.push(`<a${attr("href", disableCourseLinks ? void 0 : course.link || (course.slug ? `/course/${course.slug}` : void 0))}${attr("aria-disabled", disableCourseLinks)}${attr("tabindex", disableCourseLinks ? -1 : void 0)} class="ui:relative ui:flex ui:flex-col ui:gap-2.5 ui:p-6 ui:rounded-xl ui:no-underline ui:transition-colors ui:h-full"${attr_style(` background: linear-gradient(180deg, var(--terminal-bg-card) 0%, var(--terminal-bg-soft) 100%); border: 1px solid var(--terminal-line); color: var(--terminal-ink); min-height: 180px; cursor: ${stringify(disableCourseLinks ? "default" : "pointer")}; `)}><span class="ui:font-mono ui:text-[11px] ui:tracking-[0.04em]" style="color: var(--primary);">$ ${escape_html(slugify(course))}</span> <h3 class="ui:text-[17px] ui:font-semibold ui:leading-snug ui:m-0" style="color: var(--terminal-ink); letter-spacing: -0.01em;">${escape_html(course.title)}</h3> <p class="ui:text-[13.5px] ui:leading-[1.5] ui:m-0 ui:flex-1 ui:line-clamp-3" style="color: var(--terminal-ink-dim);">${escape_html(course.description)}</p> <div class="ui:flex ui:items-center ui:justify-between ui:pt-3.5 ui:font-mono ui:text-[12px]" style="border-top: 1px dashed var(--terminal-line);"><span style="color: var(--terminal-ink);">${escape_html(priceLabel(course))}</span> <span aria-hidden="true" style="color: var(--terminal-ink-dim);">→</span></div></a>`);
          }
        });
      }
      $$renderer2.push(`<!--]--></div> `);
      if (hasMoreCourses) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="ui:mt-7 ui:flex ui:justify-center">`);
        Button($$renderer2, {
          href: disableCourseLinks ? void 0 : "/courses",
          variant: "outline",
          disabled: disableCourseLinks,
          class: "ui:rounded-full ui:px-5 ui:bg-transparent ui:border-[var(--terminal-line-strong)] ui:text-[var(--terminal-ink)] ui:hover:bg-white/5",
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->View all programs →`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></main> `);
    Links($$renderer2, { links, variant: "terminal" });
    $$renderer2.push(`<!----> `);
    Embed($$renderer2, { embed, variant: "terminal" });
    $$renderer2.push(`<!----> `);
    Callout($$renderer2, { callout, variant: "terminal" });
    $$renderer2.push(`<!----> `);
    Landing_page_footer($$renderer2, { orgName, logoUrl, footer, variant: "terminal" });
    $$renderer2.push(`<!----></div>`);
  });
}
const landingPageThemeComponents = {
  minimal: Minimal,
  bold: Bold,
  classic: Classic,
  saas: Saas,
  tech: Tech,
  studio: Studio,
  corporate: Corporate,
  terminal: Terminal
};

export { landingPageThemeComponents as l };
//# sourceMappingURL=landing-page-components-D_n6Y6lS.js.map
