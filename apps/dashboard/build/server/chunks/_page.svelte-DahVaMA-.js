import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import './index6-DijlZyMe.js';
import { P as Page_header, c as Page_body, a as Page_header_content, b as Page_title } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import { t } from './translations-BxDrjLWK.js';
import { p as programApi } from './program.svelte-DarRiqGl.js';
import './index4-3F2xRc80.js';
import './org-BIDTy0Q0.js';
import './program-_gJE-tXQ.js';
import { P as Programs } from './programs-Bx5_cLjb.js';
import './utils2-DPSDgWhA.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import './app-DrlCEKij.js';
import './content-BYLGOVzm.js';
import './store-D_AYzDdq.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import './shared-server-DaWdgxVh.js';
import 'lodash/merge.js';
import 'zod';
import './resource-list-group-Cn5yrUeL.js';
import './resource-list-row-DOW12fib.js';
import './item-CUOTGwjL.js';
import './index14-HMlD0kYH.js';
import './page-body-header-BoRdo4AM.js';
import './empty-BlKxfDG3.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './empty-media-ClSn1CG9.js';
import './search3-D8xoPsxt.js';
import './input-group-input-BlASI7k-.js';
import './input-CkarY5WD.js';
import './input-group-button-BAHNvNdh.js';
import './button-McsHA0hU.js';
import './x2-B8ExpX8J.js';
import './search-DbgrMZ24.js';
import './goal-C_iaeEkX.js';
import 'pluralize';
import './server3-VLoL706W.js';
import './routing-Cz2vwfLK.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import './exports-DiyTWREe.js';
import './badge-DTmoBcZS.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let searchValue = "";
    const programs = programApi.programs;
    const filteredPrograms = (() => {
      const normalizedSearch = searchValue.trim().toLowerCase();
      return programs.filter((program) => {
        if (!normalizedSearch) {
          return true;
        }
        return [program.name, program.description].some((value) => value?.toLowerCase().includes(normalizedSearch));
      });
    })();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("1say8qo", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("lms_navigation.programs") || "Programs")} - ClassroomIO</title>`);
        });
      });
      $$renderer3.push(`<!---->`);
      Page($$renderer3, {
        class: "w-full",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Page_header($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Page_header_content($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Page_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("lms_navigation.programs") || "Programs")}`);
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
          {
            let child = function($$renderer5) {
              Programs($$renderer5, {
                programs: filteredPrograms,
                isLMS: true,
                isLoading: programApi.isLoading && programs.length === 0,
                emptyTitle: store_get($$store_subs ??= {}, "$t", t)("programs.lms.empty_title") || "No programs yet",
                emptyDescription: store_get($$store_subs ??= {}, "$t", t)("programs.lms.empty_description"),
                get searchValue() {
                  return searchValue;
                },
                set searchValue($$value) {
                  searchValue = $$value;
                  $$settled = false;
                }
              });
            };
            Page_body($$renderer4, { child, $$slots: { child: true } });
          }
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

export { _page as default };
//# sourceMappingURL=_page.svelte-DahVaMA-.js.map
