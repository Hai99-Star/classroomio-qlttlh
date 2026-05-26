import { u as unsubscribe_stores, a as store_get, n as escape_html, f as ensure_array_like, d as attr, m as attr_style, e as stringify } from './index2-Eg0dVEDW.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import { I as Input } from './input-CkarY5WD.js';
import { D as Domain_input } from './domain-input-DQv9nNsd.js';
import './index6-DijlZyMe.js';
import { F as Field_label, a as Field_error } from './field-label-BEb0I1_z.js';
import { F as Field } from './field-BxJz8KV9.js';
import { F as Field_group } from './field-group-CsZtrba5.js';
import { B as Button } from './button-McsHA0hU.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { o as orgs, m as mergeAccountOrgFromServer, c as currentOrg } from './org-BIDTy0Q0.js';
import { c as classroomio } from './index4-DxtvI9Cx.js';
import { g as goto } from './client2-CqohmrW2.js';
import { h as handleLocaleChange, t } from './translations-BxDrjLWK.js';
import { Z as ZOnboardingCreateOrg, a as ZOnboardingUpdateMetadata } from './onboarding-B0T94ghC.js';
import { b as blockedSubdomain } from './org3-BuUSwZTB.js';
import './content-BYLGOVzm.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-C2lk8LDX.js';
import { r as resolve } from './server3-VLoL706W.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './utils2-DPSDgWhA.js';
import './create-id-D7gdjJzW.js';
import './mounted-B958bjT3.js';
import './chevron-down2-mQy71LmC.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './check-92w5ryLF.js';
import './floating-layer-anchor-g9tHJXH3.js';
import './hidden-input-D1JyMc-e.js';
import './sr-only-styles-C-iucSJr.js';
import './input-group-input-BlASI7k-.js';
import './input-group-button-BAHNvNdh.js';
import './index14-HMlD0kYH.js';
import './label-CXfFBnqp.js';
import './index-AIbsv2Pd.js';
import 'lodash/merge.js';
import './shared-server-DaWdgxVh.js';
import '@sveltekit-i18n/parser-icu';
import 'zod';
import 'zod/v4';
import './routing-Cz2vwfLK.js';

function User_profile_icon($$renderer) {
  $$renderer.push(`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_174_5581)"><path d="M16 8C15.0111 8 14.0444 8.29325 13.2222 8.84265C12.3999 9.39206 11.759 10.173 11.3806 11.0866C11.0022 12.0002 10.9031 13.0055 11.0961 13.9755C11.289 14.9454 11.7652 15.8363 12.4645 16.5355C13.1637 17.2348 14.0546 17.711 15.0246 17.9039C15.9945 18.0969 16.9998 17.9978 17.9134 17.6194C18.8271 17.241 19.6079 16.6001 20.1574 15.7779C20.7068 14.9556 21 13.9889 21 13C21 11.6739 20.4732 10.4021 19.5355 9.46447C18.5979 8.52678 17.3261 8 16 8Z" fill="#ADADAD"></path><path d="M16 2C13.2311 2 10.5243 2.82109 8.22202 4.35943C5.91973 5.89777 4.12532 8.08427 3.06569 10.6424C2.00607 13.2006 1.72882 16.0155 2.26901 18.7313C2.80921 21.447 4.14258 23.9416 6.10051 25.8995C8.05845 27.8574 10.553 29.1908 13.2687 29.731C15.9845 30.2712 18.7994 29.9939 21.3576 28.9343C23.9157 27.8747 26.1022 26.0803 27.6406 23.778C29.1789 21.4757 30 18.7689 30 16C29.9958 12.2883 28.5195 8.72973 25.8949 6.10512C23.2703 3.48052 19.7118 2.00418 16 2ZM23.9925 24.9258C23.9726 23.614 23.4382 22.3626 22.5043 21.4412C21.5704 20.5198 20.3119 20.0022 19 20H13C11.6881 20.0022 10.4296 20.5198 9.49573 21.4412C8.56186 22.3626 8.02739 23.614 8.00751 24.9258C6.19407 23.3065 4.91524 21.1747 4.34034 18.8125C3.76545 16.4503 3.92161 13.9691 4.78814 11.6977C5.65468 9.42618 7.19073 7.47147 9.19288 6.09237C11.195 4.71327 13.5688 3.97483 16 3.97483C18.4312 3.97483 20.805 4.71327 22.8071 6.09237C24.8093 7.47147 26.3453 9.42618 27.2119 11.6977C28.0784 13.9691 28.2346 16.4503 27.6597 18.8125C27.0848 21.1747 25.8059 23.3065 23.9925 24.9258Z" fill="#ADADAD"></path></g><defs><clipPath id="clip0_174_5581"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>`);
}
const ONBOARDING_STEPS = {
  ORG_SETUP: 1,
  USER_METADATA: 2
};
const DROPDOWN_ITEMS = [
  { id: "de", text: "German" },
  { id: "en", text: "English" },
  { id: "es", text: "Spanish" },
  { id: "fr", text: "French" },
  { id: "hi", text: "Hindi" },
  { id: "pl", text: "Polish" },
  { id: "pt", text: "Portuguese" },
  { id: "ru", text: "Russian" },
  { id: "vi", text: "Vietnamese" },
  { id: "da", text: "Danish" }
];
const GOALS = [
  {
    label: "onboarding.sell",
    value: "sell-online"
  },
  {
    label: "onboarding.teach",
    value: "teach-online"
  },
  {
    label: "onboarding.employees",
    value: "employees"
  },
  {
    label: "onboarding.customers",
    value: "customers"
  },
  {
    label: "onboarding.expanding",
    value: "expanding-platform"
  }
];
const SOURCES = [
  {
    label: "onboarding.articles",
    value: "articles"
  },
  {
    label: "onboarding.search",
    value: "search-engine"
  },
  {
    label: "onboarding.social",
    value: "social-media"
  },
  {
    label: "onboarding.friends",
    value: "friends-family"
  }
];
const onboardingValidation = (field, step) => {
  if (step === ONBOARDING_STEPS.ORG_SETUP) {
    if (blockedSubdomain.includes(field.siteName || "")) {
      return { siteName: "Sitename already exists." };
    }
    const result = ZOnboardingCreateOrg.safeParse(field);
    if (!result.success) {
      return mapZodErrorsToTranslations(result.error);
    }
  }
  if (step === ONBOARDING_STEPS.USER_METADATA) {
    const result = ZOnboardingUpdateMetadata.safeParse(field);
    if (!result.success) {
      return mapZodErrorsToTranslations(result.error);
    }
  }
};
class OnboardingApi extends BaseApiWithErrors {
  step = ONBOARDING_STEPS.ORG_SETUP;
  async submit(data) {
    if (this.step === ONBOARDING_STEPS.ORG_SETUP) {
      return this.submitOrgSetup(data);
    }
    if (this.step === ONBOARDING_STEPS.USER_METADATA) {
      return this.submitUserMetada(data);
    }
    return false;
  }
  async submitOrgSetup(data) {
    const errors = onboardingValidation(data, ONBOARDING_STEPS.ORG_SETUP);
    if (errors) {
      this.errors = errors;
      return false;
    }
    await this.execute({
      requestFn: () => classroomio.onboarding["create-org"].$post({ json: data }),
      logContext: "submitting organization setup",
      onSuccess: (result) => {
        const { organizations } = result.data;
        orgs.set(organizations.map((org) => mergeAccountOrgFromServer(org)));
        currentOrg.set(mergeAccountOrgFromServer(organizations[0]));
        this.errors = {};
        this.step = ONBOARDING_STEPS.USER_METADATA;
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
          return;
        }
        if ("message" in result) {
          snackbar.error(result.message);
          return;
        }
        if ("error" in result) {
          this.handleValidationError(result);
        }
      }
    });
  }
  async submitUserMetada(data) {
    const errors = onboardingValidation(data, ONBOARDING_STEPS.USER_METADATA);
    if (errors) {
      this.errors = errors;
      return false;
    }
    await this.execute({
      requestFn: () => classroomio.onboarding["update-metadata"].$post({ json: data }),
      logContext: "submitting organization setup",
      onSuccess: (result) => {
        profile.set(result.data);
        handleLocaleChange(result.data.locale ?? "en");
        const welcomePopup = `${result.data.isEmailVerified}`;
        return goto(resolve(`/org/${data.siteName}?welcomePopup=${welcomePopup}`, {}));
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
          return;
        }
        if ("message" in result) {
          snackbar.error(result.message);
          return;
        }
        if ("error" in result) {
          this.handleValidationError(result);
        }
      }
    });
  }
  reset() {
    super.reset();
  }
}
const onboardingApi = new OnboardingApi();
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let fields = { fullname: "", orgName: "", siteName: "", locale: "en" };
    const progress = Math.round(onboardingApi.step / Object.keys(ONBOARDING_STEPS).length * 100);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (store_get($$store_subs ??= {}, "$profile", profile).id) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="flex min-h-screen w-full justify-center dark:bg-neutral-900"><div class="flex w-9/12 max-w-md flex-col items-center justify-center"><div class="flex flex-col items-center"><div class="mb-4 flex w-full items-center justify-center"><img src="/logo-192.png" alt="ClassroomIO logo" height="50" width="50" data-atf="1"/> <h4 class="text-xl dark:text-white">ClassroomIO</h4></div> <div class="mb-6 flex w-64 items-center justify-center rounded-2xl border border-gray-300 bg-gray-100 py-6 dark:bg-neutral-800">`);
        User_profile_icon($$renderer3);
        $$renderer3.push(`<!----> <p class="ml-2 text-sm dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$profile", profile).email)}</p></div></div> <div class="form-container w-full overflow-y-auto px-2 svelte-16sjas">`);
        if (onboardingApi.step === ONBOARDING_STEPS.ORG_SETUP) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!---->`);
          Field_group($$renderer3, {
            class: "mb-6",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Field($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Field_label($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("onboarding.fullname"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Input($$renderer5, {
                    name: "fullname",
                    type: "text",
                    placeholder: "e.g Joke Silva",
                    get value() {
                      return fields.fullname;
                    },
                    set value($$value) {
                      fields.fullname = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer5.push(`<!----> `);
                  if (onboardingApi.errors.fullname) {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<!---->`);
                    Field_error($$renderer5, {
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(onboardingApi.errors.fullname)}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <!---->`);
              Field($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Field_label($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("onboarding.name"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Input($$renderer5, {
                    name: "orgname",
                    type: "text",
                    placeholder: "e.g My School Name",
                    get value() {
                      return fields.orgName;
                    },
                    set value($$value) {
                      fields.orgName = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer5.push(`<!----> `);
                  if (onboardingApi.errors.orgName) {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<!---->`);
                    Field_error($$renderer5, {
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(onboardingApi.errors.orgName)}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <!---->`);
              Field($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Field_label($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("onboarding.organisation_sitename"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Domain_input($$renderer5, {
                    placeholder: "myschool",
                    prefix: "https://",
                    suffix: ".classroomio.com",
                    oninput: () => {
                    },
                    get value() {
                      return fields.siteName;
                    },
                    set value($$value) {
                      fields.siteName = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer5.push(`<!----> `);
                  if (onboardingApi.errors.siteName) {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<!---->`);
                    Field_error($$renderer5, {
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(onboardingApi.errors.siteName)}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div id="goal-question" class="mb-6 flex flex-col items-center"><div class="w-10/12"><div class="mb-10 flex w-full flex-col items-start justify-between"><label for="text-field" class="m-0 mb-3 text-lg font-normal dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("onboarding.what_brings"))}</label> <!--[-->`);
          const each_array = ensure_array_like(GOALS);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let goal = each_array[$$index];
            $$renderer3.push(`<label class="mb-1 inline-flex w-full items-center font-light dark:text-white"><input type="radio"${attr("checked", fields.goal === goal.value, true)} name="goal"${attr("value", goal.value)} class="mr-2"/> ${escape_html(store_get($$store_subs ??= {}, "$t", t)(goal.label))}</label>`);
          }
          $$renderer3.push(`<!--]--> `);
          if (onboardingApi.errors.goal) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(onboardingApi.errors.goal)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="flex w-full flex-col items-start justify-between"><label for="text-field" class="m-0 mb-3 text-lg font-normal dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("onboarding.how"))}</label> <!--[-->`);
          const each_array_1 = ensure_array_like(SOURCES);
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let source = each_array_1[$$index_1];
            $$renderer3.push(`<label class="mb-1 inline-flex w-full items-center font-light dark:text-white"><input type="radio"${attr("checked", fields.source === source.value, true)} name="source"${attr("value", source.value)} class="mr-2"/> ${escape_html(store_get($$store_subs ??= {}, "$t", t)(source.label))}</label>`);
          }
          $$renderer3.push(`<!--]--> `);
          if (onboardingApi.errors.source) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(onboardingApi.errors.source)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="mt-10"><span class="dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("content.toggle_label"))}:</span> <!---->`);
          Root($$renderer3, {
            type: "single",
            get value() {
              return fields.locale;
            },
            set value($$value) {
              fields.locale = $$value;
              $$settled = false;
            },
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Select_trigger($$renderer4, {
                class: "w-full",
                children: ($$renderer5) => {
                  $$renderer5.push(`<p>${escape_html(DROPDOWN_ITEMS.find((item) => item.id === fields.locale)?.text)}</p>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <!---->`);
              Select_content($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!--[-->`);
                  const each_array_2 = ensure_array_like(DROPDOWN_ITEMS);
                  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                    let item = each_array_2[$$index_2];
                    $$renderer5.push(`<!---->`);
                    Select_item($$renderer5, {
                      value: item.id,
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(item.text)}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div></div></div>`);
        }
        $$renderer3.push(`<!--]--></div> <div class="mt-8 flex w-full items-center justify-between"><div class="relative h-2 w-24 bg-gray-300"><span class="progress bg-primary-700 absolute top-0 left-0 h-full"${attr_style(`width: ${stringify(progress)}%;`)}></span></div> <div class="flex">`);
        if (onboardingApi.step > ONBOARDING_STEPS.ORG_SETUP) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            variant: "ghost",
            onclick: () => onboardingApi.step = ONBOARDING_STEPS.ORG_SETUP,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("onboarding.back"))}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        Button($$renderer3, {
          loading: onboardingApi.isLoading,
          onclick: () => onboardingApi.submit(fields),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("onboarding.continue"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div></div></div></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
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
//# sourceMappingURL=_page.svelte-CK8eiyyD.js.map
