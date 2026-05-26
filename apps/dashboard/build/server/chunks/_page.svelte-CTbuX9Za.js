import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { B as Button } from './button-McsHA0hU.js';
import './exports-DiyTWREe.js';
import { r as resolve } from './server3-VLoL706W.js';
import './client2-CqohmrW2.js';
import { p as page } from './index5-nlVlCL1t.js';
import './index4-DxtvI9Cx.js';
import './search2-Bcr7AZ8r.js';
import './sso-COLElRqe.js';
import './org-BIDTy0Q0.js';
import './content-BYLGOVzm.js';
import { t } from './translations-BxDrjLWK.js';
import './index6-DijlZyMe.js';
import './empty-media-ClSn1CG9.js';
import './states.svelte-CIWoDLSQ.js';
import './input-group-button-BAHNvNdh.js';
import './badge-DTmoBcZS.js';
import './setup-progress.svelte-lN1sp4vm.js';
import './client-Bi-QreUE.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './submission-CIIjGYOS.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import './picker-data-NeeeTF6U.js';
import './index8-D5Z_9ShZ.js';
import './button-group-B7_AGlHf.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import './resource-list-row-DOW12fib.js';
import { B as Back_button } from './back-button-BI2Xs063.js';
import { Z as SvelteSet } from './create-id-D7gdjJzW.js';
import { L as Label } from './label-CXfFBnqp.js';
import { R as Radio_group, a as Radio_group_item } from './radio-group-item-DbkZj_3K.js';
import { T as Textarea_field } from './textarea-field-DcFq3Zr9.js';
import { M as Multi_select_list } from './multi-select-list-D-Hx0T8r.js';
import './event-ByDKS2H7.js';
import './utils2-DPSDgWhA.js';
import './index14-HMlD0kYH.js';
import './routing-Cz2vwfLK.js';
import './index-AIbsv2Pd.js';
import './client3-CP3T_KrU.js';
import './shared-server-DaWdgxVh.js';
import 'zod';
import './org3-BuUSwZTB.js';
import 'lodash/merge.js';
import '@sveltekit-i18n/parser-icu';
import './index13-C4Mtu7Q0.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-DTG9QsOx.js';
import './base.svelte-C2lk8LDX.js';
import 'zod/v4';
import './index15-B_EOCZVP.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import './video-recording-settings-DX6acopI.js';
import './arrow-left2-Dl6-kuJA.js';
import './hidden-input-D1JyMc-e.js';
import './sr-only-styles-C-iucSJr.js';
import './field-description-yPSV800w.js';
import './field-label-BEb0I1_z.js';
import './textarea-CfVjMEtO.js';
import './checkbox-DZ3KH0FC.js';
import './clone-u51BKwOQ.js';
import './check-92w5ryLF.js';
import './input-field-w4kZespe.js';
import './input-CkarY5WD.js';
import './search3-D8xoPsxt.js';
import './input-group-input-BlASI7k-.js';
import './x2-B8ExpX8J.js';
import './search-DbgrMZ24.js';

function Import($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { courses, programs } = $$props;
    let recipientCsv = "";
    let courseAccessMode = "none";
    let programAccessMode = "none";
    let selectedCourseIds = new SvelteSet();
    let selectedProgramIds = new SvelteSet();
    function toggleCourse(courseId) {
      if (selectedCourseIds.has(courseId)) {
        selectedCourseIds.delete(courseId);
      } else {
        selectedCourseIds.add(courseId);
      }
    }
    function toggleProgram(programId) {
      if (selectedProgramIds.has(programId)) {
        selectedProgramIds.delete(programId);
      } else {
        selectedProgramIds.add(programId);
      }
    }
    page.url.pathname.replace(/\/import$/, "");
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<form id="import-audience-form" class="space-y-6"><p class="ui:text-muted-foreground text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.description"))}</p> `);
      Textarea_field($$renderer3, {
        label: store_get($$store_subs ??= {}, "$t", t)("audience.import.emails_label"),
        rows: 6,
        className: "w-full",
        placeholder: store_get($$store_subs ??= {}, "$t", t)("audience.import.emails_placeholder"),
        get value() {
          return recipientCsv;
        },
        set value($$value) {
          recipientCsv = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="space-y-3">`);
      Label($$renderer3, {
        class: "text-sm font-medium",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.course_access"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <!---->`);
      Radio_group($$renderer3, {
        class: "space-y-2",
        get value() {
          return courseAccessMode;
        },
        set value($$value) {
          courseAccessMode = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex items-center gap-2"><!---->`);
          Radio_group_item($$renderer4, { value: "none", id: "course-none" });
          $$renderer4.push(`<!----> `);
          Label($$renderer4, {
            for: "course-none",
            class: "font-normal",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.no_courses"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div> <div class="flex items-center gap-2"><!---->`);
          Radio_group_item($$renderer4, { value: "all", id: "course-all" });
          $$renderer4.push(`<!----> `);
          Label($$renderer4, {
            for: "course-all",
            class: "font-normal",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.all_courses"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div> <div class="flex items-center gap-2"><!---->`);
          Radio_group_item($$renderer4, { value: "select", id: "course-select" });
          $$renderer4.push(`<!----> `);
          Label($$renderer4, {
            for: "course-select",
            class: "font-normal",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.select_courses"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if (courseAccessMode === "select") {
        $$renderer3.push("<!--[-->");
        Multi_select_list($$renderer3, {
          class: "ml-6",
          listClass: "max-h-40",
          heading: store_get($$store_subs ??= {}, "$t", t)("audience.assign.select_courses"),
          emptyMessage: store_get($$store_subs ??= {}, "$t", t)("audience.import.select_courses_placeholder"),
          items: courses.map((c) => ({ id: c.id, label: c.title || c.id })),
          isSelected: (id) => selectedCourseIds.has(id),
          onToggle: toggleCourse,
          namePrefix: "import-course"
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="space-y-3">`);
      Label($$renderer3, {
        class: "text-sm font-medium",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.program_access"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <!---->`);
      Radio_group($$renderer3, {
        class: "space-y-2",
        get value() {
          return programAccessMode;
        },
        set value($$value) {
          programAccessMode = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex items-center gap-2"><!---->`);
          Radio_group_item($$renderer4, { value: "none", id: "program-none" });
          $$renderer4.push(`<!----> `);
          Label($$renderer4, {
            for: "program-none",
            class: "font-normal",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.no_programs"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div> <div class="flex items-center gap-2"><!---->`);
          Radio_group_item($$renderer4, { value: "all", id: "program-all" });
          $$renderer4.push(`<!----> `);
          Label($$renderer4, {
            for: "program-all",
            class: "font-normal",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.all_programs"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div> <div class="flex items-center gap-2"><!---->`);
          Radio_group_item($$renderer4, { value: "select", id: "program-select" });
          $$renderer4.push(`<!----> `);
          Label($$renderer4, {
            for: "program-select",
            class: "font-normal",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.select_programs"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if (programAccessMode === "select") {
        $$renderer3.push("<!--[-->");
        Multi_select_list($$renderer3, {
          class: "ml-6",
          listClass: "max-h-40",
          heading: store_get($$store_subs ??= {}, "$t", t)("audience.import.select_programs"),
          emptyMessage: store_get($$store_subs ??= {}, "$t", t)("audience.import.select_programs_placeholder"),
          items: programs.map((p) => ({ id: p.id, label: p.name || p.id })),
          isSelected: (id) => selectedProgramIds.has(id),
          onToggle: toggleProgram,
          namePrefix: "import-program"
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div></form>`);
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
    var $$store_subs;
    let { data } = $$props;
    const audiencePath = page.url.pathname.replace(/\/import$/, "");
    head("1mb79r5", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.title"))} - ClassroomIO</title>`);
      });
    });
    $$renderer2.push(`<!---->`);
    Page($$renderer2, {
      class: "mx-auto w-full max-w-3xl",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Page_header($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                Back_button($$renderer5, {
                  href: resolve(audiencePath, {}),
                  label: store_get($$store_subs ??= {}, "$t", t)("audience.import.back"),
                  class: "p-0!"
                });
                $$renderer5.push(`<!----> <!---->`);
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.title"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Page_subtitle($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.page_subtitle"))}`);
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
                  type: "submit",
                  form: "import-audience-form",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.import.submit"))}`);
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
            Import($$renderer4, { courses: data.courses, programs: data.programs });
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

export { _page as default };
//# sourceMappingURL=_page.svelte-CTbuX9Za.js.map
