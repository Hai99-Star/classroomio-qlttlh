import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import './index4-CY3O4yvX.js';
import { t } from './translations-BxDrjLWK.js';
import './tutor-config-BGC0RHK-.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, c as Page_body, b as Page_title } from './page-title-CsoF4Ebl.js';
import './index6-DijlZyMe.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import { B as Button } from './button-McsHA0hU.js';
import { a as aiTutorApi } from './ai-tutor.svelte-BWftOwnH.js';
import { w as writable } from './index-AIbsv2Pd.js';
import './field-BxJz8KV9.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './org-t71AQfHV.js';
import 'lodash/merge.js';
import './domains-D9J1UytB.js';
import '@sveltekit-i18n/parser-icu';
import 'zod';
import './index11-ChqzWCsR.js';
import './index14-HMlD0kYH.js';
import './base.svelte-Bh2VVy5Z.js';
import 'zod/v4';
import './store-D_AYzDdq.js';

const defaultAiTutorSettings = {
  enabled: true,
  persona: "encouraging",
  customPersona: "",
  responseLength: "medium",
  welcomeMessage: "",
  disclaimerFooter: "I am an AI tutor, not your instructor.",
  thingsToSay: "",
  thingsNotToSay: "",
  forbiddenTopics: [],
  groundingScope: "course",
  requireCitations: true,
  assessmentMode: "hint_only",
  revealSolutionsAfterAttempts: 3,
  codePolicy: "hints_only",
  blockOffTopic: true,
  profanityFilter: true,
  escalation: { enabled: false, email: "" }
};
const orgTutorSettingsStore = writable({ ...defaultAiTutorSettings });
function Org_settings($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    async function handleSave() {
      await aiTutorApi.updateOrgSettings(store_get($$store_subs ??= {}, "$orgTutorSettingsStore", orgTutorSettingsStore));
    }
    $$renderer2.push(`<!---->`);
    Page($$renderer2, {
      class: "mx-auto flex w-[90%] px-4 md:max-w-2xl lg:max-w-3xl",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Page_header($$renderer3, {
          isSticky: true,
          class: "ui:bg-background z-10",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("aiTutor.page.org.title"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Page_subtitle($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("aiTutor.page.org.description"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Page_action($$renderer4, {
              children: ($$renderer5) => {
                Button($$renderer5, {
                  loading: aiTutorApi.saving,
                  disabled: aiTutorApi.saving || true,
                  onclick: handleSave,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("aiTutor.action.save"))}`);
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
            {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<p class="ui:text-muted-foreground text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("aiTutor.state.loading"))}</p>`);
            }
            $$renderer4.push(`<!--]-->`);
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
function _page($$renderer) {
  head("76n2sc", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>AI Tutor Settings - ClassroomIO</title>`);
    });
  });
  Org_settings($$renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-B6-e65n9.js.map
