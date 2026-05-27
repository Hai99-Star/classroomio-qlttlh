import { a as store_get, n as escape_html, f as ensure_array_like, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-CThLLXbL.js';
import { B as Button } from './button-McsHA0hU.js';
import { I as Input_field } from './input-field-w4kZespe.js';
import './index6-DijlZyMe.js';
import './states.svelte-BI9DWQmF.js';
import './input-group-button-BAHNvNdh.js';
import { t } from './translations-BxDrjLWK.js';
import './client3-CP3T_KrU.js';
import './org-t71AQfHV.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-DpnO-FI3.js';
import './client-7aKHdcPD.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './event-ByDKS2H7.js';
import './landing-page-1a54p-PE.js';
import './app-CdpE9djd.js';
import './index4-CY3O4yvX.js';
import './submission-CIIjGYOS.js';
import './exports-DiyTWREe.js';
import './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './domains-D9J1UytB.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { T as Text_editor } from './text-editor-CgwQnvEU.js';
import { c as communityApi } from './community.svelte-C795zqr3.js';

function Ask_community($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let fields = { title: "", body: "", courseId: "" };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="mb-3 flex justify-between gap-x-5">`);
      Input_field($$renderer3, {
        placeholder: store_get($$store_subs ??= {}, "$t", t)("community.ask.title"),
        errorMessage: communityApi.errors.title,
        className: "w-[75%]",
        get value() {
          return fields.title;
        },
        set value($$value) {
          fields.title = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="w-[25%]"><!---->`);
      Root($$renderer3, {
        type: "single",
        get value() {
          return fields.courseId;
        },
        set value($$value) {
          fields.courseId = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Select_trigger($$renderer4, {
            class: "h-full w-full",
            children: ($$renderer5) => {
              $$renderer5.push(`<p>${escape_html(fields.courseId ? communityApi.courses.find((course) => course.id === fields.courseId)?.title : store_get($$store_subs ??= {}, "$t", t)("community.ask.select_course"))}</p>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Select_content($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!--[-->`);
              const each_array = ensure_array_like(communityApi.courses);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let course = each_array[$$index];
                $$renderer5.push(`<!---->`);
                Select_item($$renderer5, {
                  value: course.id,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(course.title)}`);
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
      if (communityApi.errors.courseId) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<p class="mt-1 text-sm text-red-500">${escape_html(communityApi.errors.courseId)}</p>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div></div> <div class="px-2">`);
      Text_editor($$renderer3, {
        placeholder: "Give an answer",
        content: fields.body,
        onChange: (content) => fields.body = content
      });
      $$renderer3.push(`<!----> `);
      if (communityApi.errors.body) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<p class="mt-2 text-sm text-red-500">${escape_html(communityApi.errors.body)}</p>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="mt-4 flex justify-end">`);
      Button($$renderer3, {
        variant: "default",
        onclick: () => communityApi.createQuestion(fields),
        disabled: communityApi.isLoading,
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.ask.publish"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div>`);
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

export { Ask_community as A };
//# sourceMappingURL=ask-community-CzoUr0L2.js.map
