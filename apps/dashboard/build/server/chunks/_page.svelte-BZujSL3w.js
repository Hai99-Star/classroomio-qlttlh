import { a as store_get, h as head, u as unsubscribe_stores, n as escape_html, d as attr } from './index2-Eg0dVEDW.js';
import { g as goto } from './client2-CqohmrW2.js';
import { r as resolve } from './server3-VLoL706W.js';
import { B as Button } from './button-McsHA0hU.js';
import './index6-DijlZyMe.js';
import './states.svelte-CIWoDLSQ.js';
import './input-group-button-BAHNvNdh.js';
import { t } from './translations-BxDrjLWK.js';
import { p as page } from './index5-nlVlCL1t.js';
import { R as ROLE } from './org-BIDTy0Q0.js';
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
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import { c as classroomio } from './index4-DxtvI9Cx.js';
import './submission-CIIjGYOS.js';
import { s as snackbar } from './store-D_AYzDdq.js';
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
import './utils2-DPSDgWhA.js';
import './exports-DiyTWREe.js';
import './index-AIbsv2Pd.js';
import './event-ByDKS2H7.js';
import './routing-Cz2vwfLK.js';
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
import './client3-CP3T_KrU.js';
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
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    let loading = false;
    const inviteStatus = data.invite?.invite?.status ?? "INVALID";
    const isInviteEmailMismatch = Boolean(store_get($$store_subs ??= {}, "$profile", profile).email && data.invite?.invite?.email && store_get($$store_subs ??= {}, "$profile", profile).email.toLowerCase() !== data.invite.invite.email.toLowerCase());
    const canJoinOrganization = inviteStatus === "ACTIVE" && !isInviteEmailMismatch;
    const isAlreadyJoined = inviteStatus === "ACCEPTED";
    const orgSlug = data.currentOrg?.siteName ?? data.invite.organization.siteName ?? "";
    function buildInviteAuthParams(pathname, email) {
      const parts = [];
      if (pathname) parts.push(`redirect=${encodeURIComponent(pathname)}`);
      if (email) parts.push(`email=${encodeURIComponent(email)}`);
      return parts.join("&");
    }
    const loginParams = buildInviteAuthParams(page.url?.pathname || "", data.invite?.invite?.email || "");
    const orgName = data.invite?.organization?.name ?? "";
    const inviteRoleId = data.invite?.invite?.roleId ?? 0;
    function getBlockedInviteMessage() {
      if (isInviteEmailMismatch) {
        return t.get("invite.organization.messages.email_mismatch");
      }
      if (inviteStatus === "EXPIRED") {
        return t.get("invite.organization.messages.expired");
      }
      if (inviteStatus === "REVOKED") {
        return t.get("invite.organization.messages.revoked");
      }
      if (inviteStatus === "ACCEPTED") {
        return t.get("invite.organization.messages.accepted");
      }
      return t.get("invite.organization.messages.invalid");
    }
    async function handleSubmit() {
      if (inviteStatus !== "ACTIVE") {
        snackbar.error(getBlockedInviteMessage());
        return;
      }
      if (!store_get($$store_subs ??= {}, "$profile", profile).id || !store_get($$store_subs ??= {}, "$profile", profile).email) {
        const qs = buildInviteAuthParams(page.url?.pathname || "", data.invite?.invite?.email || "");
        return goto(resolve(`/signup?${qs}`, {}));
      }
      if (isInviteEmailMismatch) {
        snackbar.error(getBlockedInviteMessage());
        return;
      }
      loading = true;
      try {
        const response = await classroomio.invite.organization[":token"].accept.$post({ param: { token: data.token } });
        const result = await response.json();
        if (!result.success || !result.data) {
          const failed = result;
          snackbar.error(failed.error ?? failed.message ?? t.get("invite.organization.messages.join_failed"));
          return;
        }
        snackbar.success("invite.organization.messages.joined");
        window.location.href = result.data.redirectTo || "/org";
      } catch (error) {
        console.error("Failed to accept organization invite", error);
        snackbar.error("invite.organization.messages.join_failed");
      } finally {
        loading = false;
      }
    }
    function handleNavigateAfterJoined() {
      if (inviteRoleId === ROLE.STUDENT) {
        return goto(resolve("/lms", {}));
      }
      return goto(resolve(orgSlug ? `/org/${orgSlug}` : "/org", {}));
    }
    head("12dyr99", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("invite.organization.page_title", { orgName: data.invite.organization.name }))}</title>`);
      });
    });
    Auth_ui($$renderer2, {
      isLogin: false,
      handleSubmit,
      isLoading: loading,
      showOnlyContent: true,
      showLogo: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="mt-0 w-full"><p class="text-center text-sm font-light dark:text-white">`);
        if (inviteRoleId === ROLE.STUDENT) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("invite.organization.invitation_student", { orgName }))}`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (inviteRoleId === ROLE.TUTOR) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("invite.organization.invitation_teacher", { orgName }))}`);
          } else {
            $$renderer3.push("<!--[!-->");
            if (inviteRoleId === ROLE.ADMIN) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("invite.organization.invitation_admin", { orgName }))}`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("invite.organization.invitation_fallback", { orgName, role: data.invite.invite.roleLabel }))}`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></p> <p class="mt-3 text-center text-sm font-light dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("invite.organization.email_line", { email: data.invite.invite.email }))}</p> `);
        if (!canJoinOrganization && !isAlreadyJoined) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="mt-3 text-center text-sm text-red-500">${escape_html(getBlockedInviteMessage())}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> <div class="my-4 flex w-full flex-col items-center justify-center gap-3">`);
        if (isAlreadyJoined) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            type: "button",
            onclick: handleNavigateAfterJoined,
            children: ($$renderer4) => {
              if (inviteRoleId === ROLE.STUDENT) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("navigation.goto_lms"))}`);
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("invite.organization.go_to_dashboard"))}`);
              }
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
          Button($$renderer3, {
            type: "submit",
            disabled: !canJoinOrganization || loading,
            loading,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("invite.organization.accept_button"))}`);
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]--> <p class="ui:text-muted-foreground text-center text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.already_have_account"))} <a class="ui:text-primary hover:underline"${attr("href", resolve(`/login?${loginParams}`, {}))}>${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.login"))}</a></p></div>`);
      }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BZujSL3w.js.map
