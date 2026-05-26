import { a as store_get, h as head, u as unsubscribe_stores, n as escape_html, b as spread_props } from './index2-Eg0dVEDW.js';
import { p as page } from './stores-DlcRpICw.js';
import { g as goto } from './client2-CqohmrW2.js';
import { t } from './translations-BxDrjLWK.js';
import { B as Button } from './button-McsHA0hU.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { T as Triangle_alert } from './triangle-alert-PDu4bwpl.js';
import './utils2-DPSDgWhA.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import './index6-DijlZyMe.js';
import './index14-HMlD0kYH.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './empty-media-ClSn1CG9.js';

function Octagon_alert($$renderer, $$props) {
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
      ["path", { "d": "M12 16h.01" }],
      ["path", { "d": "M12 8v4" }],
      [
        "path",
        {
          "d": "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "octagon-alert" },
      /**
       * @component @name OctagonAlert
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTZoLjAxIiAvPgogIDxwYXRoIGQ9Ik0xMiA4djQiIC8+CiAgPHBhdGggZD0iTTE1LjMxMiAyYTIgMiAwIDAgMSAxLjQxNC41ODZsNC42ODggNC42ODhBMiAyIDAgMCAxIDIyIDguNjg4djYuNjI0YTIgMiAwIDAgMS0uNTg2IDEuNDE0bC00LjY4OCA0LjY4OGEyIDIgMCAwIDEtMS40MTQuNTg2SDguNjg4YTIgMiAwIDAgMS0xLjQxNC0uNTg2bC00LjY4OC00LjY4OEEyIDIgMCAwIDEgMiAxNS4zMTJWOC42ODhhMiAyIDAgMCAxIC41ODYtMS40MTRsNC42ODgtNC42ODhBMiAyIDAgMCAxIDguNjg4IDJ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/octagon-alert
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
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let type = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("error") || "unknown";
    let { message, title } = (() => {
      const fields = { title: "", message: "" };
      switch (type) {
        case "token_expired":
          fields.title = store_get($$store_subs ??= {}, "$t", t)("email_verification.errors.token_expired.title");
          fields.message = store_get($$store_subs ??= {}, "$t", t)("email_verification.errors.token_expired.message");
          break;
        case "email_mismatch":
          fields.title = store_get($$store_subs ??= {}, "$t", t)("email_verification.errors.email_mismatch.title");
          fields.message = store_get($$store_subs ??= {}, "$t", t)("email_verification.errors.email_mismatch.message");
          break;
        case "legacy_method_blocked":
          fields.title = store_get($$store_subs ??= {}, "$t", t)("email_verification.errors.legacy_blocked.title");
          fields.message = store_get($$store_subs ??= {}, "$t", t)("email_verification.errors.legacy_blocked.message");
          break;
        case "database_error":
          fields.title = store_get($$store_subs ??= {}, "$t", t)("email_verification.errors.database.title");
          fields.message = store_get($$store_subs ??= {}, "$t", t)("email_verification.errors.database.message");
          break;
        default:
          fields.title = store_get($$store_subs ??= {}, "$t", t)("email_verification.errors.unknown.title");
          fields.message = store_get($$store_subs ??= {}, "$t", t)("email_verification.errors.unknown.message");
      }
      return fields;
    })();
    function handleSupport() {
      window.open("mailto:help@classroomio.com?subject=Email Verification Issue&body=Error Type: " + type, "_blank");
    }
    head("ty05oa", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Email Verification Error - ClassroomIO</title>`);
      });
      $$renderer3.push(`<meta name="description" content="There was an issue verifying your email address."/>`);
    });
    Empty($$renderer2, {
      title,
      description: message,
      icon: Octagon_alert,
      variant: "page",
      layout: "full-page",
      showLogo: true,
      class: "h-fit! max-h-none! flex-none!",
      children: ($$renderer3) => {
        if (type === "legacy_method_blocked") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="rounded-md border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20"><div class="flex items-center">`);
          Triangle_alert($$renderer3, { class: "h-5 w-5 flex-shrink-0 text-yellow-400" });
          $$renderer3.push(`<!----> <div class="ml-3"><h3 class="text-sm font-medium text-yellow-800 dark:text-yellow-200">${escape_html(store_get($$store_subs ??= {}, "$t", t)("email_verification.security_notice.title"))}</h3> <p class="mt-1 text-xs text-yellow-700 dark:text-yellow-300">${escape_html(store_get($$store_subs ??= {}, "$t", t)("email_verification.security_notice.message"))}</p></div></div></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> <div class="lex w-full flex-col justify-center gap-4 md:flex-row">`);
        Button($$renderer3, {
          onclick: handleSupport,
          variant: "ghost",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("email_verification.actions.contact_support"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Button($$renderer3, {
          onclick: () => goto(),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("email_verification.actions.back_to_dashboard"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-pB70PNNT.js.map
