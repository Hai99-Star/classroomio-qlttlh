import { n as escape_html, a as store_get, u as unsubscribe_stores, f as ensure_array_like, g as attributes, b as spread_props } from './index2-Eg0dVEDW.js';
import './index6-DijlZyMe.js';
import { P as Page_body_header } from './page-body-header-BoRdo4AM.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { I as Item_actions } from './item-actions-BlOLR7EV.js';
import { I as Item_content } from './item-content--fxXSxOv.js';
import { I as Item_description } from './item-description-BY5f-Oua.js';
import { I as Item } from './item-CUOTGwjL.js';
import { I as Item_title } from './item-title-BLGVIel8.js';
import { S as Search } from './search3-D8xoPsxt.js';
import { B as Button } from './button-McsHA0hU.js';
import { r as resolve } from './server3-VLoL706W.js';
import { v as isMobileStore } from './states.svelte-CIWoDLSQ.js';
import './input-group-button-BAHNvNdh.js';
import { t } from './translations-BxDrjLWK.js';
import './client3-CP3T_KrU.js';
import './org-BIDTy0Q0.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-CJivOuj6.js';
import './client-CKgEa-sO.js';
import { c as calDateDiff } from './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './landing-page-1a54p-PE.js';
import { b as basePath } from './app-DrlCEKij.js';
import './index4-3F2xRc80.js';
import './submission-CIIjGYOS.js';
import './exports-DiyTWREe.js';
import { g as goto } from './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './content-BYLGOVzm.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { V as Vote } from './vote-BtGvSzMr.js';
import { S as Skeleton } from './skeleton-EXMKyyjB.js';
import { P as Plus } from './plus-CrIMYHIn.js';
import { c as communityApi } from './community.svelte--VcN9OTJ.js';
import { I as Icon } from './Icon-BfkBTjtA.js';

function Message_circle_plus($$renderer, $$props) {
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
          "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        }
      ],
      ["path", { "d": "M8 12h8" }],
      ["path", { "d": "M12 8v8" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "message-circle-plus" },
      /**
       * @component @name MessageCirclePlus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi45OTIgMTYuMzQyYTIgMiAwIDAgMSAuMDk0IDEuMTY3bC0xLjA2NSAzLjI5YTEgMSAwIDAgMCAxLjIzNiAxLjE2OGwzLjQxMy0uOTk4YTIgMiAwIDAgMSAxLjA5OS4wOTIgMTAgMTAgMCAxIDAtNC43NzctNC43MTkiIC8+CiAgPHBhdGggZD0iTTggMTJoOCIgLz4KICA8cGF0aCBkPSJNMTIgOHY4IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/message-circle-plus
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
function Message_square_more($$renderer, $$props) {
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
          "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { "d": "M12 11h.01" }],
      ["path", { "d": "M16 11h.01" }],
      ["path", { "d": "M8 11h.01" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "message-square-more" },
      /**
       * @component @name MessageSquareMore
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMTdhMiAyIDAgMCAxLTIgMkg2LjgyOGEyIDIgMCAwIDAtMS40MTQuNTg2bC0yLjIwMiAyLjIwMkEuNzEuNzEgMCAwIDEgMiAyMS4yODZWNWEyIDIgMCAwIDEgMi0yaDE2YTIgMiAwIDAgMSAyIDJ6IiAvPgogIDxwYXRoIGQ9Ik0xMiAxMWguMDEiIC8+CiAgPHBhdGggZD0iTTE2IDExaC4wMSIgLz4KICA8cGF0aCBkPSJNOCAxMWguMDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/message-square-more
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
function Community_list_loader($$renderer) {
  $$renderer.push(`<div class="relative flex h-[70px] w-full rounded-md border p-2 transition ease-in-out"><div class="mr-2 flex w-10 flex-col justify-evenly gap-2 rounded-md px-1">`);
  Skeleton($$renderer, { class: "h-2/6 w-full rounded-sm" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-2/6 w-full rounded-sm" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-2/6 w-full rounded-sm" });
  $$renderer.push(`<!----></div> <div class="flex w-9/12 flex-col gap-2 rounded-md">`);
  Skeleton($$renderer, { class: "h-4 w-3/6 rounded-sm" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-4 w-1/4 rounded-sm" });
  $$renderer.push(`<!----></div> <div class="ml-auto w-10 flex-col justify-evenly rounded-md px-1">`);
  Skeleton($$renderer, { class: "h-4 w-full rounded-sm" });
  $$renderer.push(`<!----></div></div>`);
}
function Ask_community_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    function askCommunity() {
      goto(resolve(`${store_get($$store_subs ??= {}, "$basePath", basePath)}/community/ask`, {}));
    }
    if (isMobileStore.current) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        onclick: askCommunity,
        children: ($$renderer3) => {
          Plus($$renderer3, { size: 16 });
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      Button($$renderer2, {
        onclick: askCommunity,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.ask_button"))}`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Community($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { questions } = $$props;
    let searchValue = "";
    let selectedId = "";
    let filteredQuestions = communityApi.questions.filter((question) => question?.title?.toLowerCase?.()?.includes(searchValue.toLowerCase()) && (!selectedId || question?.courseId === selectedId));
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Page_body_header($$renderer3, {
        children: ($$renderer4) => {
          Search($$renderer4, {
            placeholder: store_get($$store_subs ??= {}, "$t", t)("community.find_question"),
            get value() {
              return searchValue;
            },
            set value($$value) {
              searchValue = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----> <!---->`);
          Root($$renderer4, {
            type: "single",
            get value() {
              return selectedId;
            },
            set value($$value) {
              selectedId = $$value;
              $$settled = false;
            },
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Select_trigger($$renderer5, {
                class: "w-full bg-gray-100 dark:bg-neutral-800",
                children: ($$renderer6) => {
                  $$renderer6.push(`<p class="truncate">${escape_html(selectedId ? communityApi.courses.find((course) => course.id === selectedId)?.title || store_get($$store_subs ??= {}, "$t", t)("community.all") : store_get($$store_subs ??= {}, "$t", t)("community.all"))}</p>`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Select_content($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Select_item($$renderer6, {
                    value: "",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.all"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!--[-->`);
                  const each_array = ensure_array_like(communityApi.courses);
                  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                    let course = each_array[$$index];
                    $$renderer6.push(`<!---->`);
                    Select_item($$renderer6, {
                      value: course.id,
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(course.title)}`);
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
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if (communityApi.isLoading) {
        $$renderer3.push("<!--[-->");
        Community_list_loader($$renderer3);
        $$renderer3.push(`<!----> `);
        Community_list_loader($$renderer3);
        $$renderer3.push(`<!----> `);
        Community_list_loader($$renderer3);
        $$renderer3.push(`<!----> `);
        Community_list_loader($$renderer3);
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[!-->");
        const each_array_1 = ensure_array_like(filteredQuestions);
        if (each_array_1.length !== 0) {
          $$renderer3.push("<!--[-->");
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let question = each_array_1[$$index_1];
            $$renderer3.push(`<!---->`);
            {
              let child = function($$renderer4, { props }) {
                $$renderer4.push(`<a${attributes({
                  href: resolve(`${store_get($$store_subs ??= {}, "$basePath", basePath)}/community/[slug]`, { slug: question.slug }),
                  ...props
                })}>`);
                Vote($$renderer4, { value: question.votes });
                $$renderer4.push(`<!----> <!---->`);
                Item_content($$renderer4, {
                  class: "gap-y-0.5",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->`);
                    Item_title($$renderer5, {
                      class: "mt-0",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(question.title)}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----> <!---->`);
                    Item_description($$renderer5, {
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(question?.authorFullname)} asked ${escape_html(calDateDiff(question.createdAt || /* @__PURE__ */ new Date()))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----> `);
                    Button($$renderer5, {
                      class: "m-0! justify-start! px-0! py-0! underline",
                      href: resolve(`/courses/[id]`, { id: question.courseId }),
                      variant: "ghost",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<span class="text-muted-foreground p-0 text-xs">#${escape_html(question?.courseTitle)}</span>`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> <!---->`);
                Item_actions($$renderer4, {
                  children: ($$renderer5) => {
                    $$renderer5.push(`<div class="flex items-center">`);
                    Message_circle_plus($$renderer5, { size: 16 });
                    $$renderer5.push(`<!----> <span class="ml-1">${escape_html(question.comments)}</span></div>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----></a>`);
              };
              Item($$renderer3, { variant: "outline", child, $$slots: { child: true } });
            }
            $$renderer3.push(`<!---->`);
          }
        } else {
          $$renderer3.push("<!--[!-->");
          Empty($$renderer3, {
            title: store_get($$store_subs ??= {}, "$t", t)("community.no_question"),
            description: store_get($$store_subs ??= {}, "$t", t)("community.ask_a_question"),
            icon: Message_square_more,
            variant: "page",
            children: ($$renderer4) => {
              Ask_community_button($$renderer4);
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]-->`);
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

export { Ask_community_button as A, Community as C };
//# sourceMappingURL=community-B6sku17T.js.map
