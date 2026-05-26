import { a as store_get, f as ensure_array_like, n as escape_html, l as attr_class, d as attr, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { t } from './translations-BxDrjLWK.js';
import { P as Progress } from './progress-C-m28_ec.js';
import { A as Activity_card } from './activity-card-ir3pQ0rh.js';
import './index6-DijlZyMe.js';
import './states.svelte-CIWoDLSQ.js';
import './button-McsHA0hU.js';
import './input-group-button-BAHNvNdh.js';
import './client3-CP3T_KrU.js';
import './org-BIDTy0Q0.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-lN1sp4vm.js';
import './client-Bi-QreUE.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './event-ByDKS2H7.js';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './index4-DxtvI9Cx.js';
import './submission-CIIjGYOS.js';
import './exports-DiyTWREe.js';
import './client2-CqohmrW2.js';
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
import { C as Chart_line, U as Unfold_vertical, H as Hero_profile_card, L as Loading_page } from './unfold-vertical-Cs7XYAbY.js';
import { B as Book_open } from './book-open-gUTgx0US.js';
import './utils2-DPSDgWhA.js';
import './index14-HMlD0kYH.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import './create-id-D7gdjJzW.js';
import './index13-C4Mtu7Q0.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-DTG9QsOx.js';
import 'lodash/merge.js';
import './base.svelte-C2lk8LDX.js';
import 'zod/v4';
import './index15-B_EOCZVP.js';
import './shared-server-DaWdgxVh.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';
import './user-avatar-C553w_lG.js';
import './avatar-fallback-CG2pdu70.js';
import './Icon-BfkBTjtA.js';
import './skeleton-EXMKyyjB.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    let userCourseAnalytics = data.userCourseAnalytics ?? void 0;
    function getPercentage(a, b) {
      if (b === 0) {
        return 0;
      }
      return Math.round(a / b * 100);
    }
    let exerciseFilter = "all";
    function toggleExerciseFilter(filter) {
      if (exerciseFilter === filter) {
        exerciseFilter = "all";
      } else {
        exerciseFilter = filter;
      }
    }
    let learningActivities = [
      {
        description: store_get($$store_subs ??= {}, "$t", t)("analytics.overall_course_progress_user_description"),
        icon: Book_open,
        percentage: userCourseAnalytics?.progressPercentage ?? 0,
        title: store_get($$store_subs ??= {}, "$t", t)("analytics.overall_course_progress")
      },
      {
        description: store_get($$store_subs ??= {}, "$t", t)("analytics.assignment_completion_description"),
        icon: Chart_line,
        percentage: getPercentage(userCourseAnalytics?.userExercisesStats?.filter((exercise) => exercise.isCompleted)?.length || 0, userCourseAnalytics?.userExercisesStats?.length || 0),
        title: store_get($$store_subs ??= {}, "$t", t)("analytics.assignment_completion")
      },
      {
        description: store_get($$store_subs ??= {}, "$t", t)("analytics.average_grade_description"),
        icon: Unfold_vertical,
        percentage: userCourseAnalytics?.averageGrade ?? 0,
        title: store_get($$store_subs ??= {}, "$t", t)("analytics.average_grade")
      }
    ];
    let filteredExercises = userCourseAnalytics?.userExercisesStats?.filter((exercise) => {
      if (exerciseFilter === "all") {
        return true;
      }
      return exercise.isCompleted === (exerciseFilter === "completed");
    });
    let completedExercises = userCourseAnalytics?.userExercisesStats?.filter((exercise) => exercise.isCompleted)?.length || 0;
    let incompleteExercises = userCourseAnalytics?.userExercisesStats?.filter((exercise) => !exercise.isCompleted)?.length || 0;
    if (userCourseAnalytics) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="px-1">`);
      if (userCourseAnalytics.user) {
        $$renderer2.push("<!--[-->");
        Hero_profile_card($$renderer2, { user: userCourseAnalytics.user });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="mt-5 px-0"><div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      const each_array = ensure_array_like(learningActivities);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let activity = each_array[$$index];
        Activity_card($$renderer2, { activity });
      }
      $$renderer2.push(`<!--]--></div></div> <div class="mt-5 rounded-md border p-3 md:p-5"><h3 class="text-2xl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.exercises"))}</h3> <div class="flex flex-col gap-2"><div class="flex items-center justify-between"><p class="text-sm font-medium text-gray-600 dark:text-gray-200">${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.exercises"))}</p> <p class="text-sm font-medium text-gray-600 dark:text-gray-200">${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.progress_description", {
        value: completedExercises,
        total: userCourseAnalytics?.userExercisesStats?.length
      }))}</p></div> `);
      Progress($$renderer2, {
        value: getPercentage(completedExercises, userCourseAnalytics?.userExercisesStats?.length)
      });
      $$renderer2.push(`<!----> <div class="flex items-center justify-between">`);
      Badge($$renderer2, {
        type: exerciseFilter === "incomplete" ? "secondary" : "outline",
        class: "text-yellow-700 lowercase dark:text-yellow-500",
        onclick: () => toggleExerciseFilter("incomplete"),
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(incompleteExercises)}
            ${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.incomplete"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Badge($$renderer2, {
        type: exerciseFilter === "completed" ? "gray" : "outline",
        class: "text-green-700 lowercase dark:text-green-500",
        onclick: () => toggleExerciseFilter("completed"),
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(completedExercises)}
            ${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.complete"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div> <!--[-->`);
      const each_array_1 = ensure_array_like(filteredExercises);
      for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
        let exercise = each_array_1[index];
        $$renderer2.push(`<!---->`);
        {
          $$renderer2.push(`<div${attr_class(`mt-5 flex items-center justify-between gap-4 rounded-md border p-5  ${exercise.isCompleted ? "border-green-200 bg-green-50 dark:bg-green-100" : "border-yellow-200 bg-yellow-50 dark:bg-yellow-100"}`)}><div class="flex w-2/3 items-center gap-4">`);
          Book_open($$renderer2, { size: 16 });
          $$renderer2.push(`<!----> <div><div class="mb-2"><a${attr("href", `/courses/${data.courseId}/exercises/${exercise.id}`)}><p class="text-lg font-semibold text-gray-600">${escape_html(exercise.title)}</p></a> `);
          if (exercise.lessonId) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<a${attr("href", `/courses/${data.courseId}/lessons/${exercise.lessonId}`)}><p class="text-sm text-gray-500">#${escape_html(exercise.lessonTitle)}</p></a>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (exercise.lessonTitle) {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<p class="text-sm text-gray-500">#${escape_html(exercise.lessonTitle)}</p>`);
            } else {
              $$renderer2.push("<!--[!-->");
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]--></div> <p class="text-sm text-gray-500">Score: ${escape_html(exercise.score)}/${escape_html(exercise.totalPoints)} `);
          if (exercise.isCompleted) {
            $$renderer2.push("<!--[-->");
            Badge($$renderer2, {
              type: exercise.status === 3 ? "secondary" : "outline",
              children: ($$renderer3) => {
                $$renderer3.push(`<!---->${escape_html(exercise.status === 3 ? store_get($$store_subs ??= {}, "$t", t)("analytics.graded") : store_get($$store_subs ??= {}, "$t", t)("analytics.not_graded"))}`);
              },
              $$slots: { default: true }
            });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></p></div></div> `);
          Badge($$renderer2, {
            class: `${exercise.isCompleted ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"}`,
            children: ($$renderer3) => {
              $$renderer3.push(`<!---->${escape_html(exercise.isCompleted ? store_get($$store_subs ??= {}, "$t", t)("analytics.completed") : store_get($$store_subs ??= {}, "$t", t)("analytics.incomplete"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer2.push(`<!----></div>`);
        }
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
      Loading_page($$renderer2);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-hpWIN33e.js.map
