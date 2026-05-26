import { h as head, a as store_get, u as unsubscribe_stores, n as escape_html, d as attr } from './index2-Eg0dVEDW.js';
import { g as goto } from './client2-CqohmrW2.js';
import { p as page } from './index5-nlVlCL1t.js';
import { B as Button } from './button-McsHA0hU.js';
import './index6-DijlZyMe.js';
import './states.svelte-CIWoDLSQ.js';
import './input-group-button-BAHNvNdh.js';
import { t } from './translations-BxDrjLWK.js';
import './org-BIDTy0Q0.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-lN1sp4vm.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { A as Auth_ui } from './auth-ui-DbYP635I.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import { r as resolve } from './server3-VLoL706W.js';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './index4-DxtvI9Cx.js';
import './submission-CIIjGYOS.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { c as courseApi } from './course.svelte-COVg9MQ9.js';
import './content-BYLGOVzm.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import { c as capturePosthogEvent } from './index16-Bj79zRdC.js';
import 'canvas-confetti';
import './constants-C43vhkR3.js';
import './utils2-DPSDgWhA.js';
import './exports-DiyTWREe.js';
import './index-AIbsv2Pd.js';
import './event-ByDKS2H7.js';
import './client3-CP3T_KrU.js';
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
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './base.svelte-C2lk8LDX.js';
import 'zod/v4';
import './avatar-fallback-CG2pdu70.js';
import './client-Bi-QreUE.js';
import './index15-B_EOCZVP.js';
import './shared-server-DaWdgxVh.js';
import '@better-auth/sso/client';
import './card-title-BAC38wyM.js';
import './card-footer-BHtLQwFA.js';
import './card-header-CpBV_NsL.js';
import './separator-C8wJJtqC.js';
import './routes-DaVXfsS2.js';
import './dot-pattern-BsrHOSuA.js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './routing-Cz2vwfLK.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';
import './compliance-utils-UIprJIyn.js';
import './courses.svelte-y7SgDChY.js';
import './license.svelte-Cw7yPjRa.js';
import 'posthog-js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    let loading = false;
    const inviteStatus = data.invite?.status ?? "INVALID";
    const canJoinCourse = data.requiresPaymentOrInvite ? false : (inviteStatus === "ACTIVE" || !data.invite) && data.course?.allowNewStudent !== false && data.course?.status === "ACTIVE" && Boolean(data.course?.isPublished);
    function getBlockedMessage() {
      if (data.requiresPaymentOrInvite) {
        return t.get("course.navItem.landing_page.enroll_page.requires_payment_or_invite");
      }
      if (data.course?.allowNewStudent === false) {
        return t.get("course.navItem.landing_page.pricing_section.not_accepting");
      }
      if (data.course?.status !== "ACTIVE" || !data.course?.isPublished) {
        return "This course is currently unavailable for enrollment.";
      }
      if (data.invite && inviteStatus === "EXPIRED") {
        return "This invite link has expired.";
      }
      if (data.invite && inviteStatus === "USED_UP") {
        return "This invite link has reached its usage limit.";
      }
      if (data.invite && inviteStatus === "REVOKED") {
        return "This invite link has been revoked.";
      }
      if (data.invite && inviteStatus !== "ACTIVE") {
        return "This invite link is not valid.";
      }
      return "";
    }
    async function handleSubmit() {
      if (!canJoinCourse) {
        snackbar.error(getBlockedMessage());
        return;
      }
      console.log("profile", store_get($$store_subs ??= {}, "$profile", profile));
      loading = true;
      const redirectPath = page.url?.pathname ?? `/course/${data.course?.slug ?? ""}/enroll`;
      const redirectSearch = data.token ? `?invite_token=${encodeURIComponent(data.token)}` : "";
      const redirectUrl = `${redirectPath}${redirectSearch}`;
      if (!store_get($$store_subs ??= {}, "$profile", profile).id || !store_get($$store_subs ??= {}, "$profile", profile).email) {
        const inviteEmail = data.inviteEmail ?? "";
        const target = data.inviteEmailExists ? "/login" : "/signup";
        const params = new URLSearchParams({ redirect: redirectUrl });
        if (inviteEmail) params.set("email", inviteEmail);
        goto(resolve(`${target}?${params.toString()}`, {}));
        loading = false;
        return;
      }
      try {
        const body = data.token ? { inviteToken: data.token } : {};
        const result = await courseApi.enroll(data.course.id, body);
        if (!result?.data) {
          return;
        }
        capturePosthogEvent("student_joined_course", {
          course_name: data.course?.title,
          student_id: store_get($$store_subs ??= {}, "$profile", profile).id,
          student_email: store_get($$store_subs ??= {}, "$profile", profile).email,
          already_joined: result.data.alreadyJoined
        });
        window.location.href = result.data.redirectTo || "/lms";
      } finally {
        loading = false;
      }
    }
    head("13zcm81", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Join ${escape_html(data.course?.title ?? "Course")} on ClassroomIO</title>`);
      });
      $$renderer3.push(`<meta name="robots" content="noindex, nofollow"/>`);
    });
    Auth_ui($$renderer2, {
      isLogin: false,
      handleSubmit,
      isLoading: loading || !store_get($$store_subs ??= {}, "$profile", profile).id,
      showOnlyContent: true,
      showLogo: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="mt-0 w-full"><h3 class="mt-0 mb-4 text-center text-lg font-medium dark:text-white">${escape_html(data.course?.title)}</h3> <p class="text-center text-sm font-light dark:text-white">${escape_html(data.course?.description)}</p> `);
        if (data.requiresPaymentOrInvite) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="ui:text-muted-foreground mt-3 text-center text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.enroll_page.requires_payment_or_invite"))}</p> <a${attr("href", resolve(`/course/${data.course?.slug ?? ""}`, {}))} class="ui:text-primary ui:underline mt-3 block text-center text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.enroll_page.back_to_course"))}</a>`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (!canJoinCourse) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="mt-3 text-center text-sm text-red-500">${escape_html(getBlockedMessage())}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div> <div class="my-4 flex w-full items-center justify-center">`);
        Button($$renderer3, {
          type: "submit",
          disabled: !canJoinCourse || loading,
          loading,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.enroll_page.join_course"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CVSP0vuV.js.map
