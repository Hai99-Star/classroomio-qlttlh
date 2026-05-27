import { h as head, n as escape_html } from './index2-Eg0dVEDW.js';
import { g as goto } from './client2-CqohmrW2.js';
import './index6-DijlZyMe.js';
import { I as Input } from './input-CkarY5WD.js';
import './states.svelte-BI9DWQmF.js';
import { B as Button } from './button-McsHA0hU.js';
import './input-group-button-BAHNvNdh.js';
import './translations-BxDrjLWK.js';
import './client3-CP3T_KrU.js';
import './org-t71AQfHV.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-DpnO-FI3.js';
import { A as Auth_ui } from './auth-ui-BCuwIvkB.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './event-ByDKS2H7.js';
import './landing-page-1a54p-PE.js';
import './app-CdpE9djd.js';
import './index4-CY3O4yvX.js';
import './submission-CIIjGYOS.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './domains-D9J1UytB.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import { F as Field_content } from './field-content-mP1-miu8.js';
import { F as Field_label, a as Field_error } from './field-label-BEb0I1_z.js';
import { F as Field } from './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { a as authClient } from './client-7aKHdcPD.js';
import { f as forgotPasswordValidation } from './validation-BFFVN77q.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { B as BaseApiWithErrors } from './base.svelte-Bh2VVy5Z.js';
import { b as Card_title, c as Card_description } from './card-title-BAC38wyM.js';
import './utils2-DPSDgWhA.js';
import './exports-DiyTWREe.js';
import './index-AIbsv2Pd.js';
import './index13-ubjsmMp7.js';
import './create-id-D7gdjJzW.js';
import './scroll-lock-CqTUXsNd.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-H2EBI_WO.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './index14-HMlD0kYH.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-7tRy2FJ1.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './index5-nlVlCL1t.js';
import './shared-server-DaWdgxVh.js';
import './avatar-fallback-CG2pdu70.js';
import './card-footer-BHtLQwFA.js';
import './card-header-CpBV_NsL.js';
import './separator-C8wJJtqC.js';
import './routes-B6DlDqVa.js';
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
import './label-CXfFBnqp.js';
import './index15-B_EOCZVP.js';
import '@better-auth/sso/client';
import 'zod/v4';

function Email_sent_icon($$renderer) {
  $$renderer.push(`<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M85.3281 31H34.6719C33.4724 31 32.5 31.9724 32.5 33.1719V70.8281C32.5 72.0276 33.4724 73 34.6719 73H85.3281C86.5276 73 87.5 72.0276 87.5 70.8281V33.1719C87.5 31.9724 86.5276 31 85.3281 31ZM34.6719 27C31.2632 27 28.5 29.7632 28.5 33.1719V70.8281C28.5 74.2368 31.2632 77 34.6719 77H85.3281C88.7368 77 91.5 74.2368 91.5 70.8281V33.1719C91.5 29.7632 88.7368 27 85.3281 27H34.6719Z" fill="#0233BD"></path><rect x="40.9844" y="37.875" width="36.4141" height="3.08594" rx="1.54297" fill="#658DFE"></rect><rect x="40.9844" y="44.0469" width="36.4141" height="3.08594" rx="1.54297" fill="#658DFE"></rect><rect x="40.9844" y="50.2188" width="36.4141" height="3.08594" rx="1.54297" fill="#658DFE"></rect><path d="M23 94.0391V62.5938H97V94.0391C97 96.067 95.356 97.7109 93.3281 97.7109H26.6719C24.644 97.7109 23 96.067 23 94.0391Z" fill="#658DFE" stroke="#0233BD" stroke-width="5"></path></svg>`);
}
class ForgotApi extends BaseApiWithErrors {
  async submit(fields) {
    const errors = forgotPasswordValidation(fields);
    if (errors) {
      this.errors = errors;
      return;
    }
    try {
      this.isLoading = true;
      this.errors = {};
      this.success = false;
      const { error } = await authClient.requestPasswordReset({
        email: fields.email,
        redirectTo: window.location.origin + "/reset"
      });
      if (error) throw error;
      this.success = true;
    } catch (error) {
      console.error(error);
      snackbar.error("snackbar.something");
    } finally {
      this.isLoading = false;
    }
  }
}
const forgotApi = new ForgotApi();
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let fields = { email: "" };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("16rfj3a", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Forgot Password - ClassroomIO</title>`);
        });
      });
      Auth_ui($$renderer3, {
        handleSubmit: () => forgotApi.submit(fields),
        showOnlyContent: true,
        showLogo: !forgotApi.success,
        children: ($$renderer4) => {
          if (forgotApi.success) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<div class="ui:flex ui:flex-col ui:items-center ui:justify-center ui:gap-4">`);
            Email_sent_icon($$renderer4);
            $$renderer4.push(`<!----> <!---->`);
            Card_title($$renderer4, {
              class: "ui:text-xl",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Email Sent!`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <p class="ui:text-center ui:text-sm ui:text-muted-foreground">We have sent a confirmation email to <span class="ui:text-primary">${escape_html(fields.email)}</span>. Kindly check your
        inbox to reset password or spam to reset your password.</p></div> <div class="ui:mt-6 ui:flex ui:w-full ui:items-center ui:justify-end">`);
            Button($$renderer4, {
              type: "button",
              class: "ui:w-full",
              onclick: () => goto(),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Okay`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          } else {
            $$renderer4.push("<!--[!-->");
            $$renderer4.push(`<div class="ui:flex ui:flex-col ui:gap-6"><div><!---->`);
            Card_title($$renderer4, {
              class: "ui:text-xl",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Forgot Password`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Card_description($$renderer4, {
              class: "ui:mt-2",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->We will send you a reset link to your email`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <!---->`);
            Field($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Field_label($$renderer5, {
                  for: "email",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->Your email`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Field_content($$renderer5, {
                  children: ($$renderer6) => {
                    Input($$renderer6, {
                      id: "email",
                      type: "email",
                      placeholder: "you@domain.com",
                      disabled: forgotApi.isLoading,
                      autofocus: true,
                      "aria-invalid": forgotApi.errors.email ? "true" : void 0,
                      get value() {
                        return fields.email;
                      },
                      set value($$value) {
                        fields.email = $$value;
                        $$settled = false;
                      }
                    });
                    $$renderer6.push(`<!----> `);
                    if (forgotApi.errors.email) {
                      $$renderer6.push("<!--[-->");
                      $$renderer6.push(`<!---->`);
                      Field_error($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(forgotApi.errors.email)}`);
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
            $$renderer4.push(`<!----> <div class="ui:flex ui:w-full ui:flex-col ui:gap-2">`);
            Button($$renderer4, {
              type: "submit",
              disabled: forgotApi.isLoading,
              loading: forgotApi.isLoading,
              class: "ui:w-full",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Reset Password`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Button($$renderer4, {
              type: "button",
              variant: "ghost",
              class: "ui:w-full",
              onclick: () => goto(),
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Cancel`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div></div>`);
          }
          $$renderer4.push(`<!--]-->`);
        }
      });
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DNyEIBUW.js.map
