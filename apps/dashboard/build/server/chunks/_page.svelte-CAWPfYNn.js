import { h as head, n as escape_html } from './index2-Eg0dVEDW.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import { g as goto } from './client2-CqohmrW2.js';
import { p as page } from './index5-nlVlCL1t.js';
import 'lodash/isNumber.js';
import './translations-BxDrjLWK.js';
import './index6-DijlZyMe.js';
import './states.svelte-BI9DWQmF.js';
import { B as Button } from './button-McsHA0hU.js';
import './input-group-button-BAHNvNdh.js';
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
import { F as Field_description } from './field-description-yPSV800w.js';
import { F as Field_label, a as Field_error } from './field-label-BEb0I1_z.js';
import { F as Field } from './field-BxJz8KV9.js';
import 'canvas-confetti';
import { a as authClient } from './client-7aKHdcPD.js';
import { r as resetPasswordValidation } from './validation-BFFVN77q.js';
import { r as resolve } from './server3-VLoL706W.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { B as BaseApiWithErrors } from './base.svelte-Bh2VVy5Z.js';
import { P as Password } from './password-D30lcUaQ.js';
import { b as Card_title, c as Card_description } from './card-title-BAC38wyM.js';
import './utils2-DPSDgWhA.js';
import './index-AIbsv2Pd.js';
import './client3-CP3T_KrU.js';
import '@sveltekit-i18n/parser-icu';
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
import 'lodash/merge.js';
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
import './routing-Cz2vwfLK.js';
import 'zod/v4';
import './input-group-input-BlASI7k-.js';
import './input-CkarY5WD.js';
import './lock2-DSH1gNe6.js';

class ResetApi extends BaseApiWithErrors {
  async submit(fields) {
    const errors = resetPasswordValidation(fields);
    if (errors) {
      this.errors = errors;
      return;
    }
    try {
      this.isLoading = true;
      this.errors = {};
      this.success = false;
      const { error } = await authClient.resetPassword({
        newPassword: fields.password,
        // required
        token: fields.token
        // required
      });
      if (error) throw new Error(error.message);
      this.success = true;
      snackbar.success();
      goto(resolve("/login", {}));
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : String(error);
      snackbar.error(message);
    } finally {
      this.isLoading = false;
    }
  }
  setError(_errors) {
    this.errors = _errors;
  }
}
const resetApi = new ResetApi();
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let fields = { password: "", confirmPassword: "", token: "" };
    const isSubmitDisabled = fields.password && fields.confirmPassword && fields.password !== fields.confirmPassword;
    const token = new URLSearchParams(page.url.search).get("token");
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("vw5i", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Reset Password - ClassroomIO</title>`);
        });
      });
      Auth_ui($$renderer3, {
        isLogin: false,
        handleSubmit: () => resetApi.submit({ ...fields, token: token ?? "" }),
        showOnlyContent: true,
        isLoading: resetApi.isLoading,
        showLogo: true,
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="ui:flex ui:flex-col ui:gap-6"><div><!---->`);
          Card_title($$renderer4, {
            class: "ui:text-xl",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->New Password`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Card_description($$renderer4, {
            class: "ui:mt-2",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->Enter your new password details`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div> <!---->`);
          Field($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_label($$renderer5, {
                for: "password",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Your Password`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_content($$renderer5, {
                children: ($$renderer6) => {
                  Password($$renderer6, {
                    id: "password",
                    placeholder: "************",
                    disabled: resetApi.isLoading,
                    "aria-invalid": resetApi.errors.password ? "true" : void 0,
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
                  if (resetApi.errors.password) {
                    $$renderer6.push("<!--[-->");
                    $$renderer6.push(`<!---->`);
                    Field_error($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(resetApi.errors.password)}`);
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
                      $$renderer7.push(`<!---->Password must be more than 8 characters`);
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
                  $$renderer6.push(`<!---->Confirm Password`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_content($$renderer5, {
                children: ($$renderer6) => {
                  Password($$renderer6, {
                    id: "confirmPassword",
                    placeholder: "************",
                    disabled: resetApi.isLoading,
                    "aria-invalid": resetApi.errors.confirmPassword ? "true" : void 0,
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
                  if (resetApi.errors.confirmPassword) {
                    $$renderer6.push("<!--[-->");
                    $$renderer6.push(`<!---->`);
                    Field_error($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(resetApi.errors.confirmPassword)}`);
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
          Button($$renderer4, {
            type: "submit",
            disabled: isSubmitDisabled || resetApi.isLoading,
            loading: resetApi.isLoading,
            class: "ui:w-full",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->Reset Password`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div>`);
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
//# sourceMappingURL=_page.svelte-CAWPfYNn.js.map
