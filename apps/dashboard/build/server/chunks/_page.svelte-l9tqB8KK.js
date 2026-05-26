import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores, f as ensure_array_like, d as attr } from './index2-Eg0dVEDW.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import './badge-DTmoBcZS.js';
import './button-McsHA0hU.js';
import './index6-DijlZyMe.js';
import './empty-media-ClSn1CG9.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './states.svelte-CIWoDLSQ.js';
import './input-group-button-BAHNvNdh.js';
import { t } from './translations-BxDrjLWK.js';
import './client3-CP3T_KrU.js';
import './org-BIDTy0Q0.js';
import './setup-progress.svelte-lN1sp4vm.js';
import './client-Bi-QreUE.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import 'lodash/get.js';
import 'pluralize';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './index4-DxtvI9Cx.js';
import './submission-CIIjGYOS.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './content-BYLGOVzm.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import './question-container.svelte_svelte_type_style_lang-Cx6VgeOH.js';
import './picker-data-NeeeTF6U.js';
import './index8-D5Z_9ShZ.js';
import './button-group-B7_AGlHf.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import './resource-list-row-DOW12fib.js';
import './tag2-BBx_7Ec0.js';
import './index-66v1pYOD.js';
import './workspaces-CkuaVfOP.js';
import './tutor-config-BGC0RHK-.js';
import './onboarding-B0T94ghC.js';
import './search2-Bcr7AZ8r.js';
import './sso-COLElRqe.js';
import './program-_gJE-tXQ.js';
import './widget-oNxbU1sS.js';
import './translation-B9Er9sXd.js';
import 'lodash/isEmpty.js';
import './store2-BB3e-tdk.js';
import 'papaparse';
import 'jspdf-autotable';
import 'jspdf';
import cloneDeep from 'lodash/cloneDeep.js';
import { C as Chip } from './chip-BZT61Rcy.js';
import './utils2-DPSDgWhA.js';
import './index-AIbsv2Pd.js';
import './index14-HMlD0kYH.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './index13-C4Mtu7Q0.js';
import './create-id-D7gdjJzW.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-DTG9QsOx.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './base.svelte-C2lk8LDX.js';
import 'zod/v4';
import './index15-B_EOCZVP.js';
import './shared-server-DaWdgxVh.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';
import './exercise-8V9pDq65.js';
import './lesson-CRrxCXoW.js';
import './Icon-BfkBTjtA.js';
import './org3-BuUSwZTB.js';
import './index11-ChqzWCsR.js';

function Exercises($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const defaultSections = [
      {
        id: 0,
        title: store_get($$store_subs ??= {}, "$t", t)("exercises.not_submitted"),
        items: [],
        className: "text-[#E35353] bg-[#FDDFE4]"
      },
      {
        id: 1,
        title: store_get($$store_subs ??= {}, "$t", t)("exercises.submitted"),
        items: [],
        className: "text-orange-700 bg-orange-200"
      },
      {
        id: 2,
        title: store_get($$store_subs ??= {}, "$t", t)("exercises.in_progress"),
        items: [],
        className: "text-yellow-700 bg-yellow-200"
      },
      {
        id: 3,
        title: store_get($$store_subs ??= {}, "$t", t)("exercises.graded"),
        value: 0,
        items: [],
        className: "text-green-700 bg-green-200"
      }
    ];
    let sections = cloneDeep(defaultSections);
    $$renderer2.push(`<div class="flex w-full items-center overflow-x-auto"><!--[-->`);
    const each_array = ensure_array_like(sections);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let { title, items, className, id } = each_array[$$index_1];
      $$renderer2.push(`<div class="mr-3 h-[70vh] max-w-[355px] min-w-[355px] overflow-hidden rounded-md border border-gray-50 bg-gray-100 p-3 dark:border-neutral-700 dark:bg-black"><div class="mb-2 flex items-center gap-2"><p class="ml-2 dark:text-white">${escape_html(title)}</p> `);
      Chip($$renderer2, { value: items.length, className });
      $$renderer2.push(`<!----></div> <div class="h-full overflow-y-auto pr-2 pb-3"><!--[-->`);
      const each_array_1 = ensure_array_like(items);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let item = each_array_1[$$index];
        $$renderer2.push(`<div class="mx-0 my-2 w-full rounded-md bg-white px-3 py-3 dark:bg-neutral-800"><a class="ui:text-primary mb-2 flex w-full cursor-pointer items-center"${attr("href", item.courseURL)}><p class="text-xs">${escape_html(item.courseTitle)}</p></a> <a class="text-md text-black dark:text-white"${attr("href", item.exerciseURL)}>`);
        if (id === 3) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`(${escape_html(item.grade)}) -`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> ${escape_html(item.exerciseTitle)}</a> `);
        if (item.lessonURL) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<a class="my-2 flex w-fit items-center text-black no-underline hover:underline"${attr("href", item.lessonURL)}><p class="text-grey text-sm dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("exercises.lesson"))} <span class="italic">${escape_html(item.lessonTitle)}</span></p></a>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <p class="text-xs text-gray-500 dark:text-white">${escape_html(item.submissionUpdatedAt)}</p></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    head("1vzdpzi", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Exercises - ClassroomIO</title>`);
      });
    });
    Page($$renderer2, {
      class: "w-full",
      children: ($$renderer3) => {
        Page_header($$renderer3, {
          children: ($$renderer4) => {
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("exercises.heading"))}`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        {
          let child = function($$renderer4) {
            Exercises($$renderer4);
          };
          Page_body($$renderer3, { child, $$slots: { child: true } });
        }
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-l9tqB8KK.js.map
