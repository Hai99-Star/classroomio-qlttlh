import { h as head, n as escape_html, a as store_get, f as ensure_array_like, d as attr, l as attr_class, j as clsx, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { g as goto } from './client2-CqohmrW2.js';
import { S as Skeleton } from './skeleton-EXMKyyjB.js';
import { t } from './translations-BxDrjLWK.js';
import { g as getGreeting, c as calDateDiff } from './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import { b as currentOrgPath } from './org-BIDTy0Q0.js';
import './badge-DTmoBcZS.js';
import './event-ByDKS2H7.js';
import './picker-data-NeeeTF6U.js';
import './index6-DijlZyMe.js';
import './index8-D5Z_9ShZ.js';
import { B as Button } from './button-McsHA0hU.js';
import './button-group-B7_AGlHf.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './states.svelte-CIWoDLSQ.js';
import './empty-media-ClSn1CG9.js';
import './field-BxJz8KV9.js';
import './input-group-button-BAHNvNdh.js';
import './item-CUOTGwjL.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Progress } from './progress-C-m28_ec.js';
import './toggle-group-item-BLEzxLjD.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './resource-list-row-DOW12fib.js';
import './question-type-capabilities-B1VkdJbc.js';
import 'pluralize';
import { A as Activity_card } from './activity-card-ir3pQ0rh.js';
import './client3-CP3T_KrU.js';
import './setup-progress.svelte-CJivOuj6.js';
import { p as profile } from './user-Ahqcoe6u.js';
import './client-CKgEa-sO.js';
import 'lodash/get.js';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './index4-3F2xRc80.js';
import './submission-CIIjGYOS.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './content-BYLGOVzm.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { U as User_avatar } from './user-avatar-C553w_lG.js';
import { V as Visit_org_site_btn } from './visit-org-site-btn-DikaI_H3.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { C as Create_course_button } from './create-course-button-CInJDwkg.js';
import './question-container.svelte_svelte_type_style_lang-Cx6VgeOH.js';
import { C as Chart_container } from './ChartAnnotations-BLeXX766.js';
import { B as BarChart } from './BarChart-DvLFLLUH.js';
import { A as Award } from './award-BQe0egvP.js';
import { B as Book } from './book-B8R-KVy3.js';
import { U as Users } from './users-CS_ofwgc.js';
import { C as Chevron_right } from './chevron-right-C3Al4Cvl.js';
import './utils2-DPSDgWhA.js';
import './exports-DiyTWREe.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'lodash/merge.js';
import './index14-HMlD0kYH.js';
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
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import './index15-B_EOCZVP.js';
import './shared-server-DaWdgxVh.js';
import '@better-auth/sso/client';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';
import './avatar-fallback-CG2pdu70.js';
import './domains-BtBKqU6B.js';
import './useMobile-CN4Yzs6U.js';
import './arrow-up-right-DrMYhHzL.js';
import './Icon-BfkBTjtA.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './plus-CrIMYHIn.js';
import './exercise-8V9pDq65.js';
import './lesson-CRrxCXoW.js';
import './context-Dq8HS6q_.js';
import './clone-u51BKwOQ.js';
import './spring-CMJ2WkAz.js';

function Login_activity_chart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const chartConfig = {
      count: {
        label: store_get($$store_subs ??= {}, "$t", t)("dashboard.login_activity_logins"),
        color: "var(--chart-1)"
      }
    };
    const series = [
      {
        key: "count",
        value: "count",
        label: chartConfig.count.label,
        color: "var(--color-count)"
      }
    ];
    const hasData = data !== null && data.some((d) => d.count > 0);
    $$renderer2.push(`<div class="bg-card flex min-h-[45vh] w-full flex-col rounded-xl border p-3 md:p-5 dark:text-white"><div class="mb-4"><h3 class="text-lg font-semibold tracking-tight">${escape_html(store_get($$store_subs ??= {}, "$t", t)("dashboard.login_activity_title"))}</h3> <p class="ui:text-muted-foreground mt-1 text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("dashboard.login_activity_description"))}</p></div> <div class="flex h-full flex-col justify-center">`);
    if (hasData) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!---->`);
      Chart_container($$renderer2, {
        class: "h-[260px] w-full",
        config: chartConfig,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          BarChart($$renderer3, { data, x: "day", axis: "x", series });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="ui:text-muted-foreground flex h-[260px] items-center justify-center text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("dashboard.login_activity_no_data"))}</div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { data } = $$props;
    const stats = data.stats;
    const loginActivity = data.loginActivity;
    const recentCertifications = stats?.recentCertifications || [];
    const numberOfCourses = stats?.numberOfCourses || 0;
    const totalCertificates = stats?.totalCertificates || 0;
    const totalStudents = stats?.totalStudents || 0;
    const topCourses = stats?.topCourses || [];
    head("1cl4sgt", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Dashboard - ClassroomIO</title>`);
      });
    });
    $$renderer2.push(`<!---->`);
    Page($$renderer2, {
      class: "w-full",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Page_header($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(getGreeting()))}
        ${escape_html(store_get($$store_subs ??= {}, "$profile", profile).fullname)}!`);
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
                Create_course_button($$renderer5, { variant: "outline", isResponsive: true });
                $$renderer5.push(`<!----> `);
                Visit_org_site_btn($$renderer5, {});
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
            $$renderer4.push(`<div class="mb-10 flex flex-wrap items-start"><div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">`);
            Activity_card($$renderer4, {
              activity: {
                icon: Award,
                title: store_get($$store_subs ??= {}, "$t", t)("dashboard.certificates_earned"),
                percentage: totalCertificates ?? 0,
                description: store_get($$store_subs ??= {}, "$t", t)("dashboard.certificates_earned_description"),
                hidePercentage: true
              }
            });
            $$renderer4.push(`<!----> `);
            Activity_card($$renderer4, {
              activity: {
                icon: Book,
                title: store_get($$store_subs ??= {}, "$t", t)("dashboard.no_of_courses"),
                percentage: numberOfCourses ?? 0,
                description: store_get($$store_subs ??= {}, "$t", t)("dashboard.no_courses_description"),
                hidePercentage: true
              }
            });
            $$renderer4.push(`<!----> `);
            Activity_card($$renderer4, {
              activity: {
                icon: Users,
                title: store_get($$store_subs ??= {}, "$t", t)("dashboard.total_students"),
                percentage: totalStudents ?? 0,
                description: store_get($$store_subs ??= {}, "$t", t)("dashboard.total_students_description"),
                hidePercentage: true
              }
            });
            $$renderer4.push(`<!----></div></div> <div class="grid grid-cols-1 gap-4 lg:grid-cols-2"><div class="bg-card flex min-h-[45vh] w-full flex-col rounded-xl border p-3 md:p-5 dark:text-white"><div class="mb-4 flex items-center justify-between"><h3 class="text-lg font-semibold tracking-tight">${escape_html(store_get($$store_subs ??= {}, "$t", t)("dashboard.top_courses"))}</h3></div> <div class="flex h-full flex-col">`);
            if (!stats) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="space-y-3"><!--[-->`);
              const each_array = ensure_array_like(Array(5));
              for (let i = 0, $$length = each_array.length; i < $$length; i++) {
                each_array[i];
                Skeleton($$renderer4, { class: "h-16 w-full rounded-lg" });
              }
              $$renderer4.push(`<!--]--></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              if (topCourses.length === 0) {
                $$renderer4.push("<!--[-->");
                Empty($$renderer4, {
                  title: store_get($$store_subs ??= {}, "$t", t)("dashboard.create_first_course"),
                  description: store_get($$store_subs ??= {}, "$t", t)("dashboard.create_first_course_description"),
                  icon: Book,
                  class: "h-full",
                  children: ($$renderer5) => {
                    Create_course_button($$renderer5, { variant: "outline" });
                  },
                  $$slots: { default: true }
                });
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push(`<ul class="ui:divide-border -mx-2 divide-y"><!--[-->`);
                const each_array_1 = ensure_array_like(topCourses);
                for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
                  let course = each_array_1[i];
                  const rank = i + 1;
                  $$renderer4.push(`<li><a${attr("href", `/courses/${course.id}`)} class="group ui:hover:bg-muted/50 flex items-center gap-3 rounded-lg px-2 py-3 transition-colors md:gap-4"><span${attr_class(clsx([
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold tabular-nums",
                    rank === 1 && "ui:bg-amber-100 ui:text-amber-900 ui:dark:bg-amber-500/20 ui:dark:text-amber-200",
                    rank === 2 && "ui:bg-slate-100 ui:text-slate-700 ui:dark:bg-slate-500/20 ui:dark:text-slate-200",
                    rank === 3 && "ui:bg-orange-100 ui:text-orange-800 ui:dark:bg-orange-500/20 ui:dark:text-orange-200",
                    rank > 3 && "ui:bg-muted ui:text-muted-foreground"
                  ]))}>${escape_html(rank)}</span> <div class="min-w-0 flex-1"><p class="line-clamp-1 text-sm leading-snug font-medium group-hover:underline">${escape_html(course.title)}</p> <div class="ui:text-muted-foreground mt-1 flex items-center gap-1 text-xs">`);
                  Users($$renderer4, { class: "h-3 w-3" });
                  $$renderer4.push(`<!----> <span class="tabular-nums">${escape_html(course.enrollments)}</span> <span>${escape_html(store_get($$store_subs ??= {}, "$t", t)(course.enrollments === 1 ? "dashboard.student" : "dashboard.students"))}</span></div></div> <div class="hidden w-48 shrink-0 grid-cols-2 gap-3 sm:grid"><div class="space-y-1"><div class="flex items-baseline justify-between gap-1"><span class="ui:text-muted-foreground text-[10px] tracking-wide uppercase">${escape_html(store_get($$store_subs ??= {}, "$t", t)("dashboard.completion"))}</span> <span class="text-xs font-semibold tabular-nums">${escape_html(course.completion)}%</span></div> `);
                  Progress($$renderer4, { value: course.completion, class: "ui:h-1.5" });
                  $$renderer4.push(`<!----></div> <div class="space-y-1"><div class="flex items-baseline justify-between gap-1"><span class="ui:text-muted-foreground text-[10px] tracking-wide uppercase">${escape_html(store_get($$store_subs ??= {}, "$t", t)("dashboard.certification_rate"))}</span> <span class="text-xs font-semibold tabular-nums">${escape_html(course.certification)}%</span></div> `);
                  Progress($$renderer4, { value: course.certification, class: "ui:h-1.5" });
                  $$renderer4.push(`<!----></div></div> `);
                  Chevron_right($$renderer4, {
                    class: "ui:text-muted-foreground h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                  });
                  $$renderer4.push(`<!----></a></li>`);
                }
                $$renderer4.push(`<!--]--></ul>`);
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]--></div></div> <div class="flex min-h-[45vh] w-full flex-col rounded-md border p-3 md:p-5 dark:text-white"><h3 class="mb-4 text-lg">${escape_html(store_get($$store_subs ??= {}, "$t", t)("dashboard.recent_certifications"))}</h3> <div class="h-full space-y-6">`);
            if (!stats) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<!--[-->`);
              const each_array_2 = ensure_array_like(Array(5));
              for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
                each_array_2[i];
                Skeleton($$renderer4, { class: "h-10 w-full rounded-md" });
              }
              $$renderer4.push(`<!--]-->`);
            } else {
              $$renderer4.push("<!--[!-->");
              const each_array_3 = ensure_array_like(recentCertifications);
              if (each_array_3.length !== 0) {
                $$renderer4.push("<!--[-->");
                for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
                  let certification = each_array_3[$$index_3];
                  $$renderer4.push(`<div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2">`);
                  User_avatar($$renderer4, {
                    src: certification.avatarUrl,
                    alt: certification.name ?? "User",
                    class: "h-6 w-6"
                  });
                  $$renderer4.push(`<!----> <div class="min-h-[45px] space-y-1"><p class="text-sm leading-none capitalize">${escape_html(certification.name)}</p> <p class="ui:text-muted-foreground text-sm"><span class="italic">${escape_html(calDateDiff(certification.date))}</span></p></div></div> <div class="w-2/4"><a class="hover:underline"${attr("href", `/courses/${certification.courseId}`)}><p class="line-clamp-2 pb-[0.1rem] text-sm leading-none">${escape_html(certification.course)}</p></a></div></div>`);
                }
              } else {
                $$renderer4.push("<!--[!-->");
                Empty($$renderer4, {
                  title: store_get($$store_subs ??= {}, "$t", t)("dashboard.no_certifications_yet"),
                  description: store_get($$store_subs ??= {}, "$t", t)("dashboard.no_certifications_yet_description"),
                  icon: Award,
                  class: "h-full",
                  children: ($$renderer5) => {
                    Button($$renderer5, {
                      variant: "outline",
                      onclick: () => goto(`${store_get($$store_subs ??= {}, "$currentOrgPath", currentOrgPath)}/courses`),
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("dashboard.view_courses"))}`);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]--></div></div></div> <div class="mt-4">`);
            Login_activity_chart($$renderer4, { data: loginActivity });
            $$renderer4.push(`<!----></div>`);
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
//# sourceMappingURL=_page.svelte-oZ1fh7pA.js.map
