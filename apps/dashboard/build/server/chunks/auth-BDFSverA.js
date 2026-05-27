import { a as store_get, n as escape_html, u as unsubscribe_stores, b as spread_props, l as attr_class, j as clsx } from './index2-Eg0dVEDW.js';
import { p as page } from './stores-DlcRpICw.js';
import { g as goto } from './client2-CqohmrW2.js';
import { U as Underline_tabs, a as Underline_tabs_list, b as Underline_tabs_trigger, c as Underline_tabs_content } from './underline-tabs-trigger-kfAMW9ai.js';
import { t } from './translations-BxDrjLWK.js';
import { l as licenseApi } from './license.svelte-Cw7yPjRa.js';
import { b as currentOrgPath, c as currentOrg, g as isEnterprisePlan } from './org-BIDTy0Q0.js';
import { c as cn } from './index6-DijlZyMe.js';
import './states.svelte-CIWoDLSQ.js';
import { S as Spinner, B as Button, I as Icon$1 } from './button-McsHA0hU.js';
import './input-group-button-BAHNvNdh.js';
import './client3-CP3T_KrU.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-CJivOuj6.js';
import './client-CKgEa-sO.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './event-ByDKS2H7.js';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import { b as getRequestBaseUrl } from './index4-3F2xRc80.js';
import './submission-CIIjGYOS.js';
import 'posthog-js';
import './content-BYLGOVzm.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import { F as Field } from './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { U as Upgrade_banner } from './upgrade-banner-lnSY7iqY.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { F as Field_description } from './field-description-yPSV800w.js';
import { F as Field_group } from './field-group-CsZtrba5.js';
import { F as Field_label, a as Field_error } from './field-label-BEb0I1_z.js';
import { F as Field_set, a as Field_legend } from './field-set-CvEL423F.js';
import { F as Field_separator } from './field-separator-CCwxfqwE.js';
import { S as Switch } from './switch-Du8qYWxg.js';
import { T as Textarea } from './textarea-CfVjMEtO.js';
import { o as orgApi } from './org.svelte-DOb0Hq6Y.js';
import './index8-D5Z_9ShZ.js';
import { A as Alert_callout } from './alert-callout-LlRb7Zok.js';
import { L as Lock } from './lock-DpzObtQi.js';
import { R as Root$1, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import { S as Shield, s as ssoApi, n as normalizeSsoConfig } from './sso.svelte-CrEsaWg-.js';
import { I as Input } from './input-CkarY5WD.js';
import { K as Key, C as Code$1, a as Code_copy_button } from './code-copy-button-UhlLz_Bi.js';
import { t as tokenAuthApi } from './token-auth.svelte-ju-03Zv-.js';
import { R as Root, D as Dropdown_menu_trigger, a as Dropdown_menu_content, b as Dropdown_menu_item } from './index12-CJhCFtIc.js';
import { I as Icon_button } from './icon-button-De7MyFOi.js';
import { E as Ellipsis_vertical } from './ellipsis-vertical-DuaSiu3W.js';
import { D as Dropdown_menu_separator } from './dropdown-menu-separator-CbPvKo5r.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { F as File_text } from './file-text2-C57ccc05.js';
import { C as Code_overflow } from './code-overflow-BKAxQLng.js';

function Code($$renderer, $$props) {
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
      ["path", { "d": "m16 18 6-6-6-6" }],
      ["path", { "d": "m8 6-6 6 6 6" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "code" },
      /**
       * @component @name Code
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYgMTggNi02LTYtNiIgLz4KICA8cGF0aCBkPSJtOCA2LTYgNiA2IDYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/code
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
function File_code($$renderer, $$props) {
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
          "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
        }
      ],
      ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }],
      ["path", { "d": "M10 12.5 8 15l2 2.5" }],
      ["path", { "d": "m14 12.5 2 2.5-2 2.5" }]
    ];
    Icon$1($$renderer2, spread_props([
      { name: "file-code" },
      /**
       * @component @name FileCode
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAyMmEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmg4YTIuNCAyLjQgMCAwIDEgMS43MDQuNzA2bDMuNTg4IDMuNTg4QTIuNCAyLjQgMCAwIDEgMjAgOHYxMmEyIDIgMCAwIDEtMiAyeiIgLz4KICA8cGF0aCBkPSJNMTQgMnY1YTEgMSAwIDAgMCAxIDFoNSIgLz4KICA8cGF0aCBkPSJNMTAgMTIuNSA4IDE1bDIgMi41IiAvPgogIDxwYXRoIGQ9Im0xNCAxMi41IDIgMi41LTIgMi41IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-code
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
function File_braces($$renderer, $$props) {
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
          "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
        }
      ],
      ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }],
      [
        "path",
        {
          "d": "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
        }
      ],
      [
        "path",
        {
          "d": "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
        }
      ]
    ];
    Icon$1($$renderer2, spread_props([
      { name: "file-braces" },
      /**
       * @component @name FileBraces
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAyMmEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmg4YTIuNCAyLjQgMCAwIDEgMS43MDQuNzA2bDMuNTg4IDMuNTg4QTIuNCAyLjQgMCAwIDEgMjAgOHYxMmEyIDIgMCAwIDEtMiAyeiIgLz4KICA8cGF0aCBkPSJNMTQgMnY1YTEgMSAwIDAgMCAxIDFoNSIgLz4KICA8cGF0aCBkPSJNMTAgMTJhMSAxIDAgMCAwLTEgMXYxYTEgMSAwIDAgMS0xIDEgMSAxIDAgMCAxIDEgMXYxYTEgMSAwIDAgMCAxIDEiIC8+CiAgPHBhdGggZD0iTTE0IDE4YTEgMSAwIDAgMCAxLTF2LTFhMSAxIDAgMCAxIDEtMSAxIDEgMCAwIDEtMS0xdi0xYTEgMSAwIDAgMC0xLTEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/file-braces
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
function Code_file_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { filename, class: className, icon: IconSlot } = $$props;
    const iconMap = {
      ".json": File_braces,
      ".ts": File_code,
      ".tsx": File_code,
      ".js": File_code,
      ".jsx": File_code,
      ".mjs": File_code,
      ".cjs": File_code,
      ".svelte": File_code,
      ".bash": File_code,
      ".sh": File_code,
      ".diff": File_code
    };
    const ext = filename.includes(".") ? filename.slice(filename.lastIndexOf(".")) : "";
    const Icon2 = IconSlot ?? iconMap[ext] ?? File_text;
    $$renderer2.push(`<div id="file-name"${attr_class(clsx(cn("ui:flex ui:h-9 ui:items-center ui:justify-between ui:border-b ui:border-border ui:px-6", className)))} role="presentation"><div class="ui:flex ui:items-center ui:gap-2"><!---->`);
    Icon2($$renderer2, { class: "ui:size-4" });
    $$renderer2.push(`<!----> <span class="ui:text-sm ui:font-medium">${escape_html(filename)}</span></div></div>`);
  });
}
function Auth_general($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let disableSignup = store_get($$store_subs ??= {}, "$currentOrg", currentOrg)?.disableSignup ?? false;
    let disableSignupMessage = store_get($$store_subs ??= {}, "$currentOrg", currentOrg)?.disableSignupMessage ?? "";
    let allowPublicSignups = !store_get($$store_subs ??= {}, "$currentOrg", currentOrg)?.settings?.signup?.inviteOnly;
    let disableEmailPassword = store_get($$store_subs ??= {}, "$currentOrg", currentOrg)?.disableEmailPassword ?? false;
    let disableGoogleAuth = store_get($$store_subs ??= {}, "$currentOrg", currentOrg)?.disableGoogleAuth ?? false;
    let isSaving = false;
    async function handleSave() {
      if (!store_get($$store_subs ??= {}, "$currentOrg", currentOrg)) return;
      isSaving = true;
      const existingSettings = store_get($$store_subs ??= {}, "$currentOrg", currentOrg).settings || {};
      const existingSignup = existingSettings.signup || {};
      await orgApi.update(
        store_get($$store_subs ??= {}, "$currentOrg", currentOrg).id,
        {
          disableSignup,
          disableSignupMessage,
          settings: {
            ...existingSettings,
            signup: { ...existingSignup, inviteOnly: !allowPublicSignups }
          },
          disableEmailPassword,
          disableGoogleAuth
        },
        {
          onSuccess: () => {
            snackbar.success(t.get("snackbar.success_update"));
          }
        }
      );
      isSaving = false;
    }
    let currentAllowPublicSignups = !store_get($$store_subs ??= {}, "$currentOrg", currentOrg)?.settings?.signup?.inviteOnly;
    let hasChanges = disableSignup !== (store_get($$store_subs ??= {}, "$currentOrg", currentOrg)?.disableSignup ?? false) || disableSignupMessage !== (store_get($$store_subs ??= {}, "$currentOrg", currentOrg)?.disableSignupMessage ?? "") || allowPublicSignups !== currentAllowPublicSignups || disableEmailPassword !== (store_get($$store_subs ??= {}, "$currentOrg", currentOrg)?.disableEmailPassword ?? false) || disableGoogleAuth !== (store_get($$store_subs ??= {}, "$currentOrg", currentOrg)?.disableGoogleAuth ?? false);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Field_group($$renderer3, {
        class: "w-full max-w-2xl! px-2",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Field_set($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_legend($$renderer5, {
                class: "flex items-center gap-2",
                children: ($$renderer6) => {
                  Lock($$renderer6, { class: "size-5" });
                  $$renderer6.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.heading"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_description($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.description"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="mt-4 space-y-4"><!---->`);
              Field($$renderer5, {
                orientation: "horizontal",
                children: ($$renderer6) => {
                  Switch($$renderer6, {
                    disabled: !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan) || isSaving,
                    get checked() {
                      return disableSignup;
                    },
                    set checked($$value) {
                      disableSignup = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer6.push(`<!----> <div class="space-y-0.5"><!---->`);
                  Field_label($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.disable_signup.label"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field_description($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.disable_signup.description"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field($$renderer5, {
                orientation: "horizontal",
                children: ($$renderer6) => {
                  Switch($$renderer6, {
                    disabled: !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan) || isSaving,
                    get checked() {
                      return allowPublicSignups;
                    },
                    set checked($$value) {
                      allowPublicSignups = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer6.push(`<!----> <div class="space-y-0.5"><!---->`);
                  Field_label($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.allow_public_signups.label"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field_description($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.allow_public_signups.description"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              if (disableSignup) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<!---->`);
                Field($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->`);
                    Field_label($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.disable_signup_message.label"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> <!---->`);
                    Field_description($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.disable_signup_message.description"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> `);
                    Textarea($$renderer6, {
                      placeholder: store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.disable_signup_message.placeholder"),
                      class: "mt-2 w-full",
                      disabled: !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan) || isSaving,
                      rows: 3,
                      get value() {
                        return disableSignupMessage;
                      },
                      set value($$value) {
                        disableSignupMessage = $$value;
                        $$settled = false;
                      }
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> <!---->`);
              Field($$renderer5, {
                orientation: "horizontal",
                children: ($$renderer6) => {
                  Switch($$renderer6, {
                    disabled: !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan) || isSaving,
                    get checked() {
                      return disableEmailPassword;
                    },
                    set checked($$value) {
                      disableEmailPassword = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer6.push(`<!----> <div class="space-y-0.5"><!---->`);
                  Field_label($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.disable_email_password.label"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field_description($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.disable_email_password.description"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field($$renderer5, {
                orientation: "horizontal",
                children: ($$renderer6) => {
                  Switch($$renderer6, {
                    disabled: !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan) || isSaving,
                    get checked() {
                      return disableGoogleAuth;
                    },
                    set checked($$value) {
                      disableGoogleAuth = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer6.push(`<!----> <div class="space-y-0.5"><!---->`);
                  Field_label($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.disable_google_auth.label"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field_description($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.disable_google_auth.description"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div> `);
              if (hasChanges) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="mt-6 flex justify-end">`);
                Button($$renderer5, {
                  variant: "default",
                  onclick: handleSave,
                  loading: isSaving,
                  disabled: isSaving || !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan),
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.save_button"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Field_separator($$renderer4, {});
          $$renderer4.push(`<!----> <!---->`);
          Alert_callout($$renderer4, {
            variant: "information",
            title: store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.note_title"),
            description: store_get($$store_subs ??= {}, "$t", t)("settings.auth.general.note_description"),
            class: "w-full"
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
class SsoStore {
  // The SSO configuration data
  config = null;
  // Loading states
  isLoading = false;
  isInitialized = false;
  // Error state
  error = null;
  /**
   * Load SSO config from API (only if not already loaded)
   * Call this on first page render
   */
  async loadConfig(force = false) {
    if (this.isInitialized && !force) {
      return;
    }
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.error = null;
    try {
      const result = await ssoApi.getSsoConfig();
      if (result?.data) {
        this.config = normalizeSsoConfig(result.data);
      }
      this.isInitialized = true;
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load SSO config";
      console.error("Failed to load SSO config:", err);
    } finally {
      this.isLoading = false;
    }
  }
  /**
   * Refresh the config from API
   * Use this after creating/updating/deleting connections
   */
  async refreshConfig() {
    return this.loadConfig(true);
  }
  /**
   * Update local config after policy changes
   */
  updatePolicy(policy) {
    if (this.config) {
      this.config = { ...this.config, policy };
    }
  }
  /**
   * Update local config after connection changes
   */
  updateConfig(config) {
    if (this.config) {
      this.config = { ...this.config, config };
    } else {
      this.config = { config, policy: null };
    }
  }
  /**
   * Clear the store (e.g., on logout)
   */
  clear() {
    this.config = null;
    this.isInitialized = false;
    this.error = null;
  }
  /**
   * Check if SSO is configured for current org
   */
  get hasConfig() {
    return this.config?.config !== null;
  }
  /**
   * Check if SSO is active
   */
  get isActive() {
    return this.config?.config?.isActive ?? false;
  }
  /**
   * Check if Force SSO is enabled
   */
  get forceSso() {
    return this.config?.policy?.forceSso ?? false;
  }
}
const ssoStore = new SsoStore();
function Auth_sso($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let provider = "GOOGLE_WORKSPACE";
    let displayName = "";
    let issuer = "";
    let domain = "";
    let clientId = "";
    let clientSecret = "";
    let forceSso = false;
    let autoJoinSsoDomains = false;
    let breakGlassEnabled = true;
    let isActivating = false;
    let isDeleting = false;
    async function onCreateConnection() {
      if (!store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan)) {
        snackbar.error("upgrade.required");
        return;
      }
      const result = await ssoApi.createConnection({
        provider,
        displayName,
        issuer,
        domain,
        clientId,
        clientSecret,
        scopes: "openid profile email"
      });
      if (result?.data) {
        snackbar.success(t.get("settings.auth.sso.messages.created"));
        await ssoStore.refreshConfig();
      }
    }
    async function onActivate() {
      isActivating = true;
      const result = await ssoApi.activateConnection();
      if (result?.data) {
        ssoStore.updateConfig({ ...ssoStore.config.config, isActive: true });
        snackbar.success(t.get("settings.auth.sso.messages.activated"));
      }
      isActivating = false;
    }
    async function onDelete() {
      if (!confirm(t.get("settings.auth.sso.connection.delete_confirm"))) {
        return;
      }
      isDeleting = true;
      const result = await ssoApi.deleteConnection();
      if (result) {
        ssoStore.clear();
        snackbar.success(t.get("settings.auth.sso.messages.deleted"));
      }
      isDeleting = false;
    }
    async function onUpdatePolicy() {
      const result = await ssoApi.updatePolicy({ forceSso, autoJoinSsoDomains, breakGlassEnabled });
      if (result?.data) {
        ssoStore.updatePolicy(result.data);
        snackbar.success(store_get($$store_subs ??= {}, "$t", t)("snackbar.success_update"));
      }
    }
    function getProviderLabel(p) {
      switch (p) {
        case "OKTA":
          return t.get("settings.auth.sso.setup.providers.okta");
        case "GOOGLE_WORKSPACE":
          return t.get("settings.auth.sso.setup.providers.google_workspace");
        case "AUTH0":
          return t.get("settings.auth.sso.setup.providers.auth0");
        default:
          return p;
      }
    }
    function getCallbackUrl(providerId) {
      return `${getRequestBaseUrl()}/api/auth/sso/callback/${providerId}`;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (ssoStore.isLoading && !ssoStore.isInitialized) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="flex justify-center py-10">`);
        Spinner($$renderer3, { class: "size-10! text-blue-700!" });
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        if (ssoStore.config?.config) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!---->`);
          Field_group($$renderer3, {
            class: "w-full max-w-2xl! px-2",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Field_set($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Field_legend($$renderer5, {
                    class: "flex items-center gap-2",
                    children: ($$renderer6) => {
                      Shield($$renderer6, { class: "size-5" });
                      $$renderer6.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.connection.heading"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field_description($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.connection.description"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <div class="space-y-4 rounded-md border p-3"><div><div class="flex items-center gap-2"><h3 class="font-semibold">${escape_html(ssoStore.config.config.displayName)}</h3> `);
                  Badge($$renderer5, {
                    variant: ssoStore.config.config.isActive ? "default" : "secondary",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(ssoStore.config.config.isActive ? store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.connection.active") : store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.connection.inactive"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----></div> <p class="text-sm text-gray-500">${escape_html(getProviderLabel(ssoStore.config.config.provider))} • ${escape_html(ssoStore.config.config.domain)}</p></div> <div class="flex gap-2">`);
                  if (!ssoStore.config.config.isActive) {
                    $$renderer5.push("<!--[-->");
                    Button($$renderer5, {
                      variant: "secondary",
                      onclick: onActivate,
                      loading: isActivating,
                      disabled: isActivating,
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.connection.activate_button"))}`);
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  Button($$renderer5, {
                    variant: "destructive",
                    onclick: onDelete,
                    loading: isDeleting,
                    disabled: isDeleting,
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.connection.delete_button"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----></div></div> `);
                  if (ssoStore.config.config.isActive) {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<div class="mt-4 rounded bg-blue-50 p-3 text-sm dark:bg-blue-900/20"><p class="font-medium text-blue-800 dark:text-blue-200">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.connection.callback_url_label"))}</p> <code class="mt-1 block rounded bg-white p-2 text-xs break-all dark:bg-slate-800">${escape_html(getCallbackUrl(ssoStore.config.config.betterAuthProviderId))}</code> <p class="mt-2 text-blue-600 dark:text-blue-300">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.connection.callback_url_description"))}</p></div>`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]-->`);
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
                    class: "flex items-center gap-2",
                    children: ($$renderer6) => {
                      Key($$renderer6, { class: "size-5" });
                      $$renderer6.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.policies.heading"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field_description($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.policies.description"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <div class="mt-4 space-y-4"><!---->`);
                  Field($$renderer5, {
                    orientation: "horizontal",
                    children: ($$renderer6) => {
                      Switch($$renderer6, {
                        onCheckedChange: onUpdatePolicy,
                        disabled: !ssoStore.config.config.isActive,
                        get checked() {
                          return forceSso;
                        },
                        set checked($$value) {
                          forceSso = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer6.push(`<!----> <div class="space-y-0.5"><!---->`);
                      Field_label($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.policies.force_sso.label"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> <!---->`);
                      Field_description($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.policies.force_sso.description"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----></div>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field($$renderer5, {
                    orientation: "horizontal",
                    children: ($$renderer6) => {
                      Switch($$renderer6, {
                        onCheckedChange: onUpdatePolicy,
                        disabled: !ssoStore.config.config.isActive,
                        get checked() {
                          return autoJoinSsoDomains;
                        },
                        set checked($$value) {
                          autoJoinSsoDomains = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer6.push(`<!----> <div class="space-y-0.5"><!---->`);
                      Field_label($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.policies.auto_join.label"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> <!---->`);
                      Field_description($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.policies.auto_join.description"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----></div>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field($$renderer5, {
                    orientation: "horizontal",
                    children: ($$renderer6) => {
                      Switch($$renderer6, {
                        onCheckedChange: onUpdatePolicy,
                        disabled: !ssoStore.config.config.isActive,
                        get checked() {
                          return breakGlassEnabled;
                        },
                        set checked($$value) {
                          breakGlassEnabled = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer6.push(`<!----> <div class="space-y-0.5"><!---->`);
                      Field_label($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.policies.break_glass.label"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> <!---->`);
                      Field_description($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.policies.break_glass.description"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----></div>`);
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
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<!---->`);
          Field_group($$renderer3, {
            class: "w-full max-w-md! px-2",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Field_set($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Field_legend($$renderer5, {
                    class: "flex items-center gap-2",
                    children: ($$renderer6) => {
                      Shield($$renderer6, { class: "size-5" });
                      $$renderer6.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.heading"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field_description($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.description"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Field_label($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.provider_label"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> <!---->`);
                      Root$1($$renderer6, {
                        type: "single",
                        disabled: !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan),
                        get value() {
                          return provider;
                        },
                        set value($$value) {
                          provider = $$value;
                          $$settled = false;
                        },
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->`);
                          Select_trigger($$renderer7, {
                            class: "w-full",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<p>${escape_html(getProviderLabel(provider))}</p>`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Select_content($$renderer7, {
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->`);
                              Select_item($$renderer8, {
                                value: "OKTA",
                                children: ($$renderer9) => {
                                  $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.providers.okta"))}`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer8.push(`<!----> <!---->`);
                              Select_item($$renderer8, {
                                value: "GOOGLE_WORKSPACE",
                                children: ($$renderer9) => {
                                  $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.providers.google_workspace"))}`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer8.push(`<!----> <!---->`);
                              Select_item($$renderer8, {
                                value: "AUTH0",
                                children: ($$renderer9) => {
                                  $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.providers.auth0"))}`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer8.push(`<!---->`);
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
                  Field($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Field_label($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.display_name_label"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Input($$renderer6, {
                        placeholder: store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.display_name_placeholder"),
                        class: "w-full",
                        disabled: !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan),
                        get value() {
                          return displayName;
                        },
                        set value($$value) {
                          displayName = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer6.push(`<!----> `);
                      if (ssoApi.errors.displayName) {
                        $$renderer6.push("<!--[-->");
                        $$renderer6.push(`<!---->`);
                        Field_error($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->${escape_html(ssoApi.errors.displayName)}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Field_label($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.issuer_label"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> <!---->`);
                      Field_description($$renderer6, {
                        class: "ui:text-muted-foreground",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.issuer_help"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Input($$renderer6, {
                        placeholder: store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.issuer_placeholder"),
                        class: "w-full",
                        disabled: !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan),
                        get value() {
                          return issuer;
                        },
                        set value($$value) {
                          issuer = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer6.push(`<!----> `);
                      if (ssoApi.errors.issuer) {
                        $$renderer6.push("<!--[-->");
                        $$renderer6.push(`<!---->`);
                        Field_error($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->${escape_html(ssoApi.errors.issuer)}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Field_label($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.domain_label"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Input($$renderer6, {
                        placeholder: store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.domain_placeholder"),
                        class: "w-full",
                        disabled: !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan),
                        get value() {
                          return domain;
                        },
                        set value($$value) {
                          domain = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer6.push(`<!----> `);
                      if (ssoApi.errors.domain) {
                        $$renderer6.push("<!--[-->");
                        $$renderer6.push(`<!---->`);
                        Field_error($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->${escape_html(ssoApi.errors.domain)}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Field_label($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.client_id_label"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Input($$renderer6, {
                        placeholder: store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.client_id_placeholder"),
                        class: "w-full",
                        disabled: !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan),
                        get value() {
                          return clientId;
                        },
                        set value($$value) {
                          clientId = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer6.push(`<!----> `);
                      if (ssoApi.errors.clientId) {
                        $$renderer6.push("<!--[-->");
                        $$renderer6.push(`<!---->`);
                        Field_error($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->${escape_html(ssoApi.errors.clientId)}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Field_label($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.client_secret_label"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Input($$renderer6, {
                        type: "password",
                        placeholder: store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.client_secret_placeholder"),
                        class: "w-full",
                        disabled: !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan),
                        get value() {
                          return clientSecret;
                        },
                        set value($$value) {
                          clientSecret = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer6.push(`<!----> `);
                      if (ssoApi.errors.clientSecret) {
                        $$renderer6.push("<!--[-->");
                        $$renderer6.push(`<!---->`);
                        Field_error($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->${escape_html(ssoApi.errors.clientSecret)}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Button($$renderer5, {
                    variant: "default",
                    onclick: onCreateConnection,
                    loading: ssoApi.isLoading,
                    disabled: ssoApi.isLoading || !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan),
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.sso.setup.create_button"))}`);
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
function Auth_token_auth($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let isDeleting = false;
    let isGenerated = false;
    async function onGenerate() {
      if (!store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan)) return;
      await tokenAuthApi.generateSecret();
      isGenerated = true;
    }
    async function onRotate() {
      if (!store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan)) return;
      await tokenAuthApi.rotateSecret();
      isGenerated = true;
    }
    async function onDelete() {
      if (!confirm(t.get("settings.token_auth.delete_confirm"))) return;
      isDeleting = true;
      await tokenAuthApi.deleteTokenAuth();
      isDeleting = false;
    }
    async function onToggleActive(checked) {
      await tokenAuthApi.activateTokenAuth(checked);
    }
    const codeExample = `const { SignJWT } = require('jose');

async function openCourseInLMS() {
  // Secret generated above
  const secret = process.env.TOKEN_AUTH_SECRET;
  const baseUrl = 'https://api.classroomio.dev';

  const token = await new SignJWT({
    sub: 'test-user-123',
    email: 'test@example.com',
    name: 'Test User'
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2m')
    .sign(new TextEncoder().encode(secret));

  const url = new URL('/api/auth/token-exchange', baseUrl);
  url.searchParams.set('token', token);
  url.searchParams.set('redirect', '/courses/course-slug');

  console.log(url.toString());
  window.open(url.toString(), '_blank');
}
openCourseInLMS();`;
    if (tokenAuthApi.isLoading && tokenAuthApi.tokenAuth === null && !tokenAuthApi.generatedSecret) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex justify-center py-10">`);
      Spinner($$renderer2, { class: "size-10! text-blue-700!" });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!---->`);
      Field_group($$renderer2, {
        class: "w-full max-w-2xl! px-2",
        children: ($$renderer3) => {
          if (tokenAuthApi.tokenAuth || tokenAuthApi.generatedSecret) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<!---->`);
            Field_set($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->`);
                Field_legend($$renderer4, {
                  class: "flex items-center gap-2",
                  children: ($$renderer5) => {
                    Key($$renderer5, { class: "size-5" });
                    $$renderer5.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.heading"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> <!---->`);
                Field_description($$renderer4, {
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.description"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> <div class="mt-4 flex flex-wrap items-center justify-between gap-4"><div class="flex flex-wrap items-center gap-4"><div class="space-y-1"><p class="ui:text-muted-foreground text-sm font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.status"))}</p> `);
                Badge($$renderer4, {
                  variant: tokenAuthApi.tokenAuth?.isActive ? "default" : "secondary",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(tokenAuthApi.tokenAuth?.isActive ? store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.active") : store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.inactive"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----></div> `);
                if (tokenAuthApi.tokenAuth?.createdAt) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<p class="ui:text-muted-foreground text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.created_at"))}: ${escape_html(new Date(tokenAuthApi.tokenAuth.createdAt).toLocaleDateString())}</p>`);
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]--> `);
                if (tokenAuthApi.tokenAuth?.secretLast4) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<p class="ui:text-muted-foreground text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.secret_last4"))} …${escape_html(tokenAuthApi.tokenAuth.secretLast4)}</p>`);
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]--></div> `);
                if (tokenAuthApi.tokenAuth) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<!---->`);
                  Root($$renderer4, {
                    children: ($$renderer5) => {
                      $$renderer5.push(`<!---->`);
                      Dropdown_menu_trigger($$renderer5, {
                        disabled: tokenAuthApi.isLoading || isDeleting,
                        class: "flex shrink-0 items-center justify-center",
                        children: ($$renderer6) => {
                          Icon_button($$renderer6, {
                            variant: "outline",
                            "aria-label": store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.actions_menu"),
                            children: ($$renderer7) => {
                              Ellipsis_vertical($$renderer7, { size: 16 });
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push(`<!----> <!---->`);
                      Dropdown_menu_content($$renderer5, {
                        align: "end",
                        children: ($$renderer6) => {
                          if (!tokenAuthApi.tokenAuth?.isActive) {
                            $$renderer6.push("<!--[-->");
                            $$renderer6.push(`<!---->`);
                            Dropdown_menu_item($$renderer6, {
                              onclick: () => onToggleActive(true),
                              disabled: tokenAuthApi.isLoading,
                              children: ($$renderer7) => {
                                $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.activate"))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer6.push(`<!---->`);
                          } else {
                            $$renderer6.push("<!--[!-->");
                          }
                          $$renderer6.push(`<!--]--> `);
                          if (tokenAuthApi.tokenAuth?.isActive) {
                            $$renderer6.push("<!--[-->");
                            $$renderer6.push(`<!---->`);
                            Dropdown_menu_item($$renderer6, {
                              onclick: () => onToggleActive(false),
                              disabled: tokenAuthApi.isLoading,
                              children: ($$renderer7) => {
                                $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.deactivate"))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer6.push(`<!---->`);
                          } else {
                            $$renderer6.push("<!--[!-->");
                          }
                          $$renderer6.push(`<!--]--> <!---->`);
                          Dropdown_menu_item($$renderer6, {
                            onclick: onRotate,
                            disabled: tokenAuthApi.isLoading,
                            children: ($$renderer7) => {
                              $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.rotate"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer6.push(`<!----> <!---->`);
                          Dropdown_menu_separator($$renderer6, {});
                          $$renderer6.push(`<!----> <!---->`);
                          Dropdown_menu_item($$renderer6, {
                            class: "ui:text-red-600",
                            onclick: onDelete,
                            disabled: isDeleting,
                            children: ($$renderer7) => {
                              $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.delete"))}`);
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
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]--></div> `);
                if (isGenerated) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<div class="mt-4 rounded border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/30"><p class="ui:text-amber-800 dark:ui:text-amber-200 text-sm font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.secret_shown_once"))}</p> <div class="mt-2"><!---->`);
                  Code$1($$renderer4, {
                    code: tokenAuthApi.generatedSecret ?? "",
                    lang: "bash",
                    hideLines: true,
                    variant: "secondary",
                    class: "ui:break-all ui:text-xs"
                  });
                  $$renderer4.push(`<!----></div></div>`);
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]--> `);
                if (tokenAuthApi.tokenAuth && !tokenAuthApi.generatedSecret) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<!---->`);
                  Field($$renderer4, {
                    orientation: "horizontal",
                    class: "mt-4",
                    children: ($$renderer5) => {
                      Switch($$renderer5, {
                        checked: tokenAuthApi.tokenAuth?.isActive ?? false,
                        onCheckedChange: onToggleActive,
                        disabled: tokenAuthApi.isLoading
                      });
                      $$renderer5.push(`<!----> <div class="space-y-0.5"><!---->`);
                      Field_label($$renderer5, {
                        children: ($$renderer6) => {
                          $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.status"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push(`<!----> <!---->`);
                      Field_description($$renderer5, {
                        children: ($$renderer6) => {
                          $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.active"))} / ${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.inactive"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push(`<!----></div>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push(`<!---->`);
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<!---->`);
            Field_set($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->`);
                Field_legend($$renderer4, {
                  class: "flex items-center gap-2",
                  children: ($$renderer5) => {
                    Key($$renderer5, { class: "size-5" });
                    $$renderer5.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.heading"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> <!---->`);
                Field_description($$renderer4, {
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.description"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> <!---->`);
                Field_description($$renderer4, {
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.no_config"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> `);
                Button($$renderer4, {
                  variant: "secondary",
                  onclick: onGenerate,
                  loading: tokenAuthApi.isLoading,
                  disabled: tokenAuthApi.isLoading || !store_get($$store_subs ??= {}, "$isEnterprisePlan", isEnterprisePlan),
                  class: "w-fit",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.generate"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!---->`);
          }
          $$renderer3.push(`<!--]--> <!---->`);
          Field_separator($$renderer3, {});
          $$renderer3.push(`<!----> <!---->`);
          Field_set($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Field_legend($$renderer4, {
                class: "flex items-center gap-2",
                children: ($$renderer5) => {
                  Code($$renderer5, { class: "size-5" });
                  $$renderer5.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.integration_guide"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <!---->`);
              Field_description($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.token_auth.integration_description"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <div class="ui:w-full ui:rounded-lg ui:border ui:border-border mt-4"><!---->`);
              Code_file_header($$renderer4, { filename: "integration.js" });
              $$renderer4.push(`<!----> <!---->`);
              Code_overflow($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Code$1($$renderer5, {
                    code: codeExample,
                    lang: "javascript",
                    class: "ui:w-full ui:border-none",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Code_copy_button($$renderer6, {});
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Auth($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const ssoLicensed = licenseApi.hasAccess("sso");
    const tokenAuthLicensed = licenseApi.hasAccess("token-auth");
    licenseApi.isResolved;
    function getTabFromPath(path) {
      if (path.endsWith("/auth/sso")) return "sso";
      if (path.endsWith("/auth/token-auth")) return "token-auth";
      return "general";
    }
    let currentTab = getTabFromPath(store_get($$store_subs ??= {}, "$page", page).url.pathname);
    function handleTabChange(value) {
      if (value === currentTab) return;
      store_get($$store_subs ??= {}, "$currentOrgPath", currentOrgPath) + "/settings/auth";
      switch (value) {
        case "general":
          goto();
          break;
        case "sso":
          goto();
          break;
        case "token-auth":
          goto();
          break;
      }
    }
    Upgrade_banner($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("upgrade.enterprise_required"))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <!---->`);
    Underline_tabs($$renderer2, {
      value: currentTab,
      onValueChange: (e) => handleTabChange(e),
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Underline_tabs_list($$renderer3, {
          class: "mb-6",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Underline_tabs_trigger($$renderer4, {
              value: "general",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.tabs.general"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (ssoLicensed) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<!---->`);
              Underline_tabs_trigger($$renderer4, {
                value: "sso",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.tabs.sso"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> `);
            if (tokenAuthLicensed) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<!---->`);
              Underline_tabs_trigger($$renderer4, {
                value: "token-auth",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.tabs.token_auth"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Underline_tabs_content($$renderer3, {
          value: "general",
          children: ($$renderer4) => {
            Auth_general($$renderer4);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if (ssoLicensed) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!---->`);
          Underline_tabs_content($$renderer3, {
            value: "sso",
            children: ($$renderer4) => {
              Auth_sso($$renderer4);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (tokenAuthLicensed) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!---->`);
          Underline_tabs_content($$renderer3, {
            value: "token-auth",
            children: ($$renderer4) => {
              Auth_token_auth($$renderer4);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Auth as A };
//# sourceMappingURL=auth-BDFSverA.js.map
