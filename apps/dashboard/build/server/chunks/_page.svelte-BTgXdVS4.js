import './index4-3F2xRc80.js';
import { t } from './translations-BxDrjLWK.js';
import './tutor-config-BGC0RHK-.js';
import './index6-DijlZyMe.js';
import { B as Button } from './button-McsHA0hU.js';
import './field-BxJz8KV9.js';
import { n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, c as Page_body, b as Page_title } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import { a as aiTutorApi } from './ai-tutor.svelte-CeA2zsGQ.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import './org-BIDTy0Q0.js';
import 'lodash/merge.js';
import './content-BYLGOVzm.js';
import '@sveltekit-i18n/parser-icu';
import 'zod';
import './index11-ChqzWCsR.js';
import './index14-HMlD0kYH.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import './store-D_AYzDdq.js';

function Course_settings($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { courseId } = $$props;
    async function handleSave() {
      {
        await aiTutorApi.updateCourseSettings(courseId, { inheritFromOrg: true });
        return;
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Page($$renderer3, {
        class: "mx-auto flex w-[90%] px-4 md:max-w-2xl lg:max-w-3xl",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Page_header($$renderer4, {
            isSticky: true,
            class: "ui:bg-background z-10",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Page_header_content($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Page_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("aiTutor.page.course.title"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Page_subtitle($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("aiTutor.page.course.description"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Page_action($$renderer5, {
                children: ($$renderer6) => {
                  Button($$renderer6, {
                    loading: aiTutorApi.saving,
                    disabled: aiTutorApi.saving || true,
                    onclick: handleSave,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("aiTutor.action.save"))}`);
                    },
                    $$slots: { default: true }
                  });
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
              {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<p class="ui:text-muted-foreground text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aiTutor.state.loading"))}</p>`);
              }
              $$renderer5.push(`<!--]-->`);
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
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    Course_settings($$renderer2, { courseId: data.courseId });
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BTgXdVS4.js.map
