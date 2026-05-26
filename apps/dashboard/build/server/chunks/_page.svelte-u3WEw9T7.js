import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores, f as ensure_array_like, l as attr_class, d as attr } from './index2-Eg0dVEDW.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import './client3-CP3T_KrU.js';
import './index4-DxtvI9Cx.js';
import './search2-Bcr7AZ8r.js';
import './sso-COLElRqe.js';
import { b as currentOrgPath } from './org-BIDTy0Q0.js';
import './content-BYLGOVzm.js';
import { t } from './translations-BxDrjLWK.js';
import './index6-DijlZyMe.js';
import './empty-media-ClSn1CG9.js';
import './states.svelte-CIWoDLSQ.js';
import './button-McsHA0hU.js';
import './input-group-button-BAHNvNdh.js';
import { B as Badge } from './badge-DTmoBcZS.js';
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
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import './resource-list-row-DOW12fib.js';
import { B as Back_button } from './back-button-BI2Xs063.js';
import { P as Progress } from './progress-C-m28_ec.js';
import { A as Activity_card } from './activity-card-ir3pQ0rh.js';
import { C as Chart_line, U as Unfold_vertical, H as Hero_profile_card, L as Loading_page } from './unfold-vertical-Cs7XYAbY.js';
import { B as Book_open } from './book-open-gUTgx0US.js';
import './utils2-DPSDgWhA.js';
import './index-AIbsv2Pd.js';
import './shared-server-DaWdgxVh.js';
import 'zod';
import './org3-BuUSwZTB.js';
import 'lodash/merge.js';
import '@sveltekit-i18n/parser-icu';
import './index14-HMlD0kYH.js';
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
import './user-avatar-C553w_lG.js';
import './avatar-fallback-CG2pdu70.js';
import './Icon-BfkBTjtA.js';
import './skeleton-EXMKyyjB.js';

function User_analytics($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const userAnalytics = data.analytics;
    let userMetrics = [
      {
        icon: Book_open,
        title: store_get($$store_subs ??= {}, "$t", t)("analytics.enrolled_courses"),
        description: store_get($$store_subs ??= {}, "$t", t)("analytics.enrolled_courses_description"),
        percentage: userAnalytics?.courses?.length || 0,
        hidePercentage: true
      },
      {
        icon: Chart_line,
        title: store_get($$store_subs ??= {}, "$t", t)("analytics.overall_course_progress"),
        description: store_get($$store_subs ??= {}, "$t", t)("analytics.overall_course_progress_description"),
        percentage: userAnalytics?.overallCourseProgress || 0
      },
      {
        icon: Unfold_vertical,
        title: store_get($$store_subs ??= {}, "$t", t)("analytics.total_average_grade"),
        description: store_get($$store_subs ??= {}, "$t", t)("analytics.total_average_grade_description"),
        percentage: userAnalytics?.overallAverageGrade || 0
      }
    ];
    let completedCourses = userAnalytics?.courses?.filter((course) => course.lessons_count === course.lessons_completed)?.length;
    let incompleteCourses = userAnalytics?.courses?.filter((course) => course.lessons_count !== course.lessons_completed)?.length;
    let courseFilter = "all";
    let filteredCourses = userAnalytics?.courses?.filter((course) => {
      if (courseFilter === "all") {
        return true;
      }
      return course.lessons_count === course.lessons_completed === (courseFilter === "completed");
    });
    if (userAnalytics) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="px-5 py-1">`);
      Hero_profile_card($$renderer2, { user: userAnalytics.user });
      $$renderer2.push(`<!----> <div class="mt-5 px-0"><div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      const each_array = ensure_array_like(userMetrics);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let activity = each_array[$$index];
        Activity_card($$renderer2, { activity });
      }
      $$renderer2.push(`<!--]--></div></div> <div class="mt-5 rounded-md border p-3 md:p-5"><h3 class="text-2xl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.courses"))}</h3> <div class="flex flex-col gap-2"><div class="flex items-center justify-between"><p class="text-sm font-medium text-gray-600 dark:text-gray-200">${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.progress"))}</p> <p class="text-sm font-medium text-gray-600 dark:text-gray-200">${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.progress_description", { value: completedCourses, total: userAnalytics.courses.length }))}</p></div> `);
      Progress($$renderer2, { value: userAnalytics.overallCourseProgress });
      $$renderer2.push(`<!----> <div class="flex items-center justify-between">`);
      Badge($$renderer2, {
        type: courseFilter === "incomplete" ? "secondary" : "outline",
        class: "text-yellow-700 dark:text-yellow-500",
        onclick: () => courseFilter = "incomplete",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(incompleteCourses)}
            ${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.incomplete"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Badge($$renderer2, {
        type: courseFilter === "completed" ? "secondary" : "outline",
        class: "text-green-700 dark:text-green-500",
        onclick: () => courseFilter = "completed",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(completedCourses)}
            ${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.complete"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div> <!--[-->`);
      const each_array_1 = ensure_array_like(filteredCourses);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let course = each_array_1[$$index_1];
        $$renderer2.push(`<div${attr_class(`mt-5 w-full rounded-md border border-gray-200 p-5 ${course.lessons_count === course.lessons_completed ? "border-green-200 bg-green-50 dark:bg-green-100" : "border-yellow-200 bg-yellow-50 dark:bg-yellow-100"}`)}><div class="flex items-center justify-between gap-4"><div class="flex w-4/5 items-center gap-4"><img${attr("src", course.logo || "/images/classroomio-course-img-template.jpg")}${attr("alt", course.title)} class="h-20 w-24 rounded-md"/> <div class="mb-4 gap-4"><a${attr("href", `/courses/${course.id}`)}><p class="text-lg font-semibold text-gray-600">${escape_html(course.title)}</p></a> <p class="line-clamp-2 text-sm text-gray-600">${escape_html(course.description)}</p></div></div> `);
        Badge($$renderer2, {
          class: `${course.lessons_count === course.lessons_completed ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"}`,
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->${escape_html(course.lessons_count === course.lessons_completed ? store_get($$store_subs ??= {}, "$t", t)("analytics.completed") : store_get($$store_subs ??= {}, "$t", t)("analytics.incomplete"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div> <div class="flex w-full items-center gap-1">`);
        Progress($$renderer2, { value: course.progress_percentage });
        $$renderer2.push(`<!----> <p>${escape_html(course.progress_percentage)}%</p></div></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      Loading_page($$renderer2);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    head("4i3cvi", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(t.get("audience.user_analytics.title"))} - ClassroomIO</title>`);
      });
    });
    $$renderer2.push(`<!---->`);
    Page($$renderer2, {
      class: "w-full md:max-w-5xl lg:mx-auto",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Page_header($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                Back_button($$renderer5, {
                  href: `${store_get($$store_subs ??= {}, "$currentOrgPath", currentOrgPath)}/audience`,
                  label: store_get($$store_subs ??= {}, "$t", t)("community.ask.go_back")
                });
                $$renderer5.push(`<!----> <!---->`);
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.user_analytics.title"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Page_subtitle($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.user_analytics.page_subtitle"))}`);
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
        $$renderer3.push(`<!----> <!---->`);
        {
          let child = function($$renderer4) {
            User_analytics($$renderer4, { data });
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
//# sourceMappingURL=_page.svelte-u3WEw9T7.js.map
