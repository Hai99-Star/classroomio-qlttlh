import { a as store_get, u as unsubscribe_stores, h as head, n as escape_html, d as attr } from './index2-Eg0dVEDW.js';
import './index6-DijlZyMe.js';
import { I as Input } from './input-CkarY5WD.js';
import './states.svelte-CIWoDLSQ.js';
import { B as Button } from './button-McsHA0hU.js';
import './input-group-button-BAHNvNdh.js';
import { t } from './translations-BxDrjLWK.js';
import { p as page } from './index5-nlVlCL1t.js';
import { c as currentOrg } from './org-BIDTy0Q0.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-lN1sp4vm.js';
import { A as Auth_ui } from './auth-ui-C1pAAon-.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import { r as resolve } from './server3-VLoL706W.js';
import './landing-page-1a54p-PE.js';
import { g as globalStore } from './app-DrlCEKij.js';
import './index4-DxtvI9Cx.js';
import './submission-CIIjGYOS.js';
import { g as goto } from './client2-CqohmrW2.js';
import { c as capturePosthogEvent } from './index16-Bj79zRdC.js';
import './content-BYLGOVzm.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import { F as Field_content } from './field-content-mP1-miu8.js';
import { F as Field_description } from './field-description-yPSV800w.js';
import { F as Field_label, a as Field_error } from './field-label-BEb0I1_z.js';
import { F as Field } from './field-BxJz8KV9.js';
import { g as getDisableSubmit, a as authValidation } from './validator-BeZKT7pz.js';
import 'canvas-confetti';
import { l as licenseApi } from './license.svelte-Cw7yPjRa.js';
import { S as SIGNUP_FIELDS, a as authSsoStore, b as buildSsoRedirectUrl, c as createSsoEmailChecker } from './auth-sso-store-BiCDI5Rg.js';
import { a as authClient } from './client-Bi-QreUE.js';
import { P as Password } from './password-DcLQW5kE.js';
import { S as Shield, s as ssoApi } from './sso.svelte-CL5tAyN5.js';
import './utils2-DPSDgWhA.js';
import './index13-C4Mtu7Q0.js';
import './create-id-D7gdjJzW.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './index14-HMlD0kYH.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-DTG9QsOx.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import './client3-CP3T_KrU.js';
import 'lodash/merge.js';
import './base.svelte-C2lk8LDX.js';
import 'zod/v4';
import './shared-server-DaWdgxVh.js';
import './avatar-fallback-CG2pdu70.js';
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
import './event-ByDKS2H7.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';
import './exports-DiyTWREe.js';
import 'posthog-js';
import './label-CXfFBnqp.js';
import 'lodash/isNumber.js';
import './constants-C43vhkR3.js';
import './index15-B_EOCZVP.js';
import '@better-auth/sso/client';
import './input-group-input-BlASI7k-.js';
import './lock2-DSH1gNe6.js';
import './Icon-BfkBTjtA.js';
import './sso-COLElRqe.js';
import './store-D_AYzDdq.js';

function Senja_embed($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { id = "" } = $$props;
    const noTracking = licenseApi.hasAccess("no-tracking");
    if (!noTracking) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="senja-embed"${attr("data-id", id)} data-lazyload="false" data-spinner="false"></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const emailFromUrl = page.url.searchParams.get("email") ?? "";
    const isEmailPrefilled = !!emailFromUrl;
    let fields = Object.assign({}, SIGNUP_FIELDS, emailFromUrl ? { email: emailFromUrl } : {});
    let loading = false;
    let errors = {};
    let submitError = "";
    let discoveryState = null;
    const disableSubmit = getDisableSubmit(fields);
    const redirectUrl = page.url.searchParams.get("redirect");
    const inviteToken = page.url.searchParams.get("invite_token");
    const org = store_get($$store_subs ??= {}, "$currentOrg", currentOrg)?.id ? store_get($$store_subs ??= {}, "$currentOrg", currentOrg) : data.org ?? store_get($$store_subs ??= {}, "$currentOrg", currentOrg);
    const ssoState = discoveryState ?? store_get($$store_subs ??= {}, "$authSsoStore", authSsoStore).ssoState;
    const orgSupportsSso = store_get($$store_subs ??= {}, "$authSsoStore", authSsoStore).orgSupportsSso;
    const hasInviteContext = !!inviteToken || !!redirectUrl && (redirectUrl.includes("/invite/") || redirectUrl.includes("invite_token"));
    const inviteOnly = !!org?.settings?.signup?.inviteOnly;
    const signupRestricted = store_get($$store_subs ??= {}, "$globalStore", globalStore).isOrgSite && (org.disableSignup || inviteOnly && !hasInviteContext);
    const hideGoogleAuth = !!(store_get($$store_subs ??= {}, "$globalStore", globalStore).isOrgSite && org.disableGoogleAuth);
    const handleEmailChange = createSsoEmailChecker({
      getEmail: () => fields.email,
      getOrgSupportsSso: () => orgSupportsSso,
      discoverSso: (email) => ssoApi.discoverSso(email),
      onChecking: () => {
        discoveryState = {
          ...store_get($$store_subs ??= {}, "$authSsoStore", authSsoStore).ssoState,
          checking: true
        };
      },
      onResult: (state) => {
        discoveryState = state;
      },
      onClear: () => {
        errors.email = "";
        discoveryState = null;
      }
    });
    async function handleSsoLogin() {
      const url = buildSsoRedirectUrl(ssoState.redirectUrl);
      await authClient.signIn.sso({
        email: fields.email,
        providerId: ssoState.providerId || "",
        callbackURL: url
      });
    }
    async function handleSubmit() {
      if (signupRestricted) {
        submitError = t.get("settings.auth.login.signup_disabled_error");
        return;
      }
      if (ssoState.required && ssoState.available) {
        handleSsoLogin();
        return;
      }
      const validationRes = authValidation(fields);
      console.log("validationRes", validationRes);
      if (Object.keys(validationRes).length) {
        errors = Object.assign(errors, validationRes);
        return;
      }
      try {
        loading = true;
        const name = fields.email.split("@")[0];
        const headers = store_get($$store_subs ??= {}, "$globalStore", globalStore).isOrgSite ? { "cio-org-id": org.id } : void 0;
        const { error } = await authClient.signUp.email({ email: fields.email, password: fields.password, name }, {
          headers,
          onSuccess: (ctx) => {
            console.log("Signup successful");
            capturePosthogEvent("user_signed_up", {
              distinct_id: ctx.data.user.id || "",
              email: ctx.data.user.email,
              username: name
            });
            if (store_get($$store_subs ??= {}, "$globalStore", globalStore).isOrgSite) {
              capturePosthogEvent("student_signed_up", {
                distinct_id: ctx.data.user.id || "",
                email: ctx.data.user.email,
                username: name
              });
            }
            const redirect = redirectUrl || "/";
            window.location.href = redirect.startsWith("/") ? redirect : `/?redirect=${encodeURIComponent(redirect)}`;
          }
        });
        if (error) throw error;
      } catch (error) {
        submitError = error?.error_description || error?.message || "";
        loading = false;
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("z5wozd", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Join ClassroomIO</title>`);
        });
      });
      Senja_embed($$renderer3, { id: "aa054658-1e15-4d00-8920-91f424326c4e" });
      $$renderer3.push(`<!----> `);
      if (signupRestricted) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="ui:p-6 ui:bg-amber-50 ui:dark:bg-amber-900/20 ui:rounded-lg ui:border ui:border-amber-200 ui:dark:border-amber-800 ui:text-center"><h2 class="ui:text-lg ui:font-semibold ui:text-amber-800 ui:dark:text-amber-200">${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.signup_disabled.title"))}</h2> <p class="ui:mt-2 ui:text-sm ui:text-amber-700 ui:dark:text-amber-300">${escape_html(org.disableSignupMessage || (inviteOnly ? store_get($$store_subs ??= {}, "$t", t)("login.signup_disabled.invite_only_message") : store_get($$store_subs ??= {}, "$t", t)("settings.auth.login.signup_disabled_error")))}</p> `);
        Button($$renderer3, {
          variant: "outline",
          class: "ui:mt-4",
          onclick: () => goto(resolve("/login", {})),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.signup_disabled.go_to_login"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      } else {
        let getPasswordAuthAlternative = function($$renderer4) {
          $$renderer4.push(`<div class="space-y-3">`);
          if (ssoState.required) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<div class="flex items-center gap-3">`);
            Shield($$renderer4, { class: "size-5 text-blue-600" });
            $$renderer4.push(`<!----> <div class="flex-1"><p class="mt-1 text-xs text-blue-600">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.login.sso_required"))}</p></div></div>`);
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]--> `);
          Button($$renderer4, {
            type: "button",
            variant: "outline",
            class: "w-full",
            onclick: handleSsoLogin,
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.auth.login.sign_in_with_sso", { provider: ssoState.providerName || "SSO" }))}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div>`);
        };
        $$renderer3.push("<!--[!-->");
        Auth_ui($$renderer3, {
          isLogin: false,
          handleSubmit,
          isLoading: loading,
          hideGoogleAuth,
          getPasswordAuthAlternative: ssoState.available ? getPasswordAuthAlternative : void 0,
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="ui:flex ui:flex-col ui:gap-6"><!---->`);
            Field($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Field_label($$renderer5, {
                  for: "email",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.fields.email"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Field_content($$renderer5, {
                  children: ($$renderer6) => {
                    Input($$renderer6, {
                      id: "email",
                      type: "email",
                      oninput: handleEmailChange,
                      placeholder: "you@domain.com",
                      disabled: loading || isEmailPrefilled,
                      readonly: isEmailPrefilled,
                      autofocus: true,
                      "aria-invalid": errors.email ? "true" : void 0,
                      autocomplete: "email",
                      get value() {
                        return fields.email;
                      },
                      set value($$value) {
                        fields.email = $$value;
                        $$settled = false;
                      }
                    });
                    $$renderer6.push(`<!----> `);
                    if (errors.email) {
                      $$renderer6.push("<!--[-->");
                      $$renderer6.push(`<!---->`);
                      Field_error($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(errors.email))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    } else {
                      $$renderer6.push("<!--[!-->");
                    }
                    $$renderer6.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (!ssoState.required) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<!---->`);
              Field($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Field_label($$renderer5, {
                    for: "password",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.fields.password"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field_content($$renderer5, {
                    children: ($$renderer6) => {
                      Password($$renderer6, {
                        id: "password",
                        placeholder: "************",
                        disabled: loading,
                        "aria-invalid": errors.password ? "true" : void 0,
                        autocomplete: "new-password",
                        get value() {
                          return fields.password;
                        },
                        set value($$value) {
                          fields.password = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer6.push(`<!----> `);
                      if (errors.password) {
                        $$renderer6.push("<!--[-->");
                        $$renderer6.push(`<!---->`);
                        Field_error($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(errors.password))}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                      }
                      $$renderer6.push(`<!--]--> <!---->`);
                      Field_description($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.fields.password_helper_message"))}`);
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
              Field($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Field_label($$renderer5, {
                    for: "confirmPassword",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.fields.confirm_password"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Field_content($$renderer5, {
                    children: ($$renderer6) => {
                      Password($$renderer6, {
                        id: "confirmPassword",
                        placeholder: "************",
                        disabled: loading,
                        "aria-invalid": errors.confirmPassword ? "true" : void 0,
                        autocomplete: "new-password",
                        get value() {
                          return fields.confirmPassword;
                        },
                        set value($$value) {
                          fields.confirmPassword = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer6.push(`<!----> `);
                      if (errors.confirmPassword) {
                        $$renderer6.push("<!--[-->");
                        $$renderer6.push(`<!---->`);
                        Field_error($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->${escape_html(errors.confirmPassword)}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              if (submitError) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<p class="ui:text-sm ui:text-destructive">${escape_html(submitError)}</p>`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]--> `);
              Button($$renderer4, {
                type: "submit",
                disabled: disableSubmit || loading,
                loading,
                class: "ui:w-full",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.create_account"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
      }
      $$renderer3.push(`<!--]-->`);
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
//# sourceMappingURL=_page.svelte-BrkW8XCn.js.map
