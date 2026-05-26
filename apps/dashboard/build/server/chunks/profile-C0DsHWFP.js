import { a as store_get, u as unsubscribe_stores, c as bind_props, n as escape_html, z as store_mutate, b as spread_props, l as attr_class, j as clsx, f as ensure_array_like } from './index2-Eg0dVEDW.js';
import { p as page } from './index5-nlVlCL1t.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { c as classroomio } from './index4-DxtvI9Cx.js';
import { Z as ZProfileUpdateForm, a as ZChangeEmail } from './workspaces-CkuaVfOP.js';
import { a as authClient } from './client-Bi-QreUE.js';
import { t, h as handleLocaleChange, i as initialized } from './translations-BxDrjLWK.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-C2lk8LDX.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { u as uploadImage } from './upload-CcxRpjKo.js';
import { L as Label } from './label-CXfFBnqp.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import { L as LANGUAGES } from './translation-B9Er9sXd.js';
import { I as Input } from './input-CkarY5WD.js';
import { B as Button } from './button-McsHA0hU.js';
import './index6-DijlZyMe.js';
import './states.svelte-CIWoDLSQ.js';
import './input-group-button-BAHNvNdh.js';
import './org-BIDTy0Q0.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-lN1sp4vm.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './event-ByDKS2H7.js';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
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
import { F as Field_label, a as Field_error } from './field-label-BEb0I1_z.js';
import { F as Field } from './field-BxJz8KV9.js';
import { F as Field_group } from './field-group-CsZtrba5.js';
import { F as Field_set, a as Field_legend } from './field-set-CvEL423F.js';
import { F as Field_separator } from './field-separator-CCwxfqwE.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { U as Unsaved_changes } from './unsaved-changes-DP5vyp0g.js';
import { U as Upload_image } from './upload-image-DrkVoklD.js';
import { I as Icon } from './Icon-BfkBTjtA.js';

function Circle_check_big($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M21.801 10A10 10 0 1 1 17 3.335" }],
      ["path", { "d": "m9 11 3 3L22 4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "circle-check-big" },
      /**
       * @component @name CircleCheckBig
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuODAxIDEwQTEwIDEwIDAgMSAxIDE3IDMuMzM1IiAvPgogIDxwYXRoIGQ9Im05IDExIDMgM0wyMiA0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-check-big
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
class ProfileApi extends BaseApiWithErrors {
  validateForm(fields) {
    const validationData = {
      fullname: fields.fullname,
      username: fields.username,
      locale: fields.locale
    };
    const result = ZProfileUpdateForm.safeParse(validationData);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return false;
    }
    return true;
  }
  async updateUserInfo(fields, avatarUrl) {
    const userUpdates = {};
    userUpdates.name = fields.fullname;
    if (avatarUrl) {
      userUpdates.image = avatarUrl;
    }
    if (Object.keys(userUpdates).length > 0) {
      const { error: userError } = await authClient.updateUser(userUpdates);
      if (userError) throw userError;
    }
  }
  buildProfileUpdates(fields, locale, avatarUrl) {
    const profileUpdates = {};
    profileUpdates.fullname = fields.fullname;
    profileUpdates.username = fields.username;
    profileUpdates.locale = locale;
    if (avatarUrl) {
      profileUpdates.avatarUrl = avatarUrl;
    }
    return profileUpdates;
  }
  async updateProfile(profileUpdates) {
    if (Object.keys(profileUpdates).length === 0) {
      return;
    }
    await this.execute({
      requestFn: () => classroomio.account.profile.$put({ json: profileUpdates }),
      logContext: "updating profile",
      onSuccess: (response) => {
        profile.update((_profile) => ({ ..._profile, ...response.profile }));
      }
    });
  }
  handleError(error) {
    console.error(error);
    const message = error instanceof Error ? error.message : `${error}`;
    if (message.includes("profile_username_key")) {
      this.errors.username = t.get("snackbar.lms.error.username_exists");
      snackbar.error("snackbar.lms.error.username_exists");
    } else {
      this.errors.general = message;
      snackbar.error(`${t.get("snackbar.update_failed")}: ${message}`);
    }
  }
  async submit(fields, hasLangChanged, locale) {
    if (!this.validateForm(fields)) {
      return;
    }
    try {
      this.isLoading = true;
      this.errors = {};
      this.success = false;
      let avatarUrl;
      if (fields.avatar instanceof File) {
        avatarUrl = await uploadImage(fields.avatar);
      }
      await this.updateUserInfo(fields, avatarUrl);
      const profileUpdates = this.buildProfileUpdates(fields, locale, avatarUrl);
      await this.updateProfile(profileUpdates);
      if (hasLangChanged && locale) {
        handleLocaleChange(locale);
      }
      snackbar.success("snackbar.course_settings.success.update_successful");
      this.success = true;
    } catch (error) {
      this.handleError(error);
    } finally {
      this.isLoading = false;
    }
  }
  async changeEmail(fields) {
    const result = ZChangeEmail.safeParse({ newEmail: fields.newEmail });
    console.log("result", result);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return;
    }
    try {
      this.isLoading = true;
      this.errors = {};
      this.success = false;
      const { error } = await authClient.changeEmail({ newEmail: fields.newEmail, callbackURL: fields.callbackURL });
      if (error) throw new Error(error.message);
      snackbar.success();
      this.success = true;
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : `${error}`;
      this.errors.email = message;
      snackbar.error(`${t.get("snackbar.update_failed")}: ${message}`);
    } finally {
      this.isLoading = false;
    }
  }
}
const profileApi = new ProfileApi();
function Language_picker($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { className = "", value = "en", hasLangChanged = false, change } = $$props;
    function handleSelect(selectedValue) {
      value = selectedValue;
      hasLangChanged = true;
      change?.();
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (store_get($$store_subs ??= {}, "$initialized", initialized)) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div${attr_class(clsx(className))}>`);
        Label($$renderer3, {
          class: "mb-2 block",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("content.toggle_label"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Root($$renderer3, {
          type: "single",
          onValueChange: handleSelect,
          get value() {
            return value;
          },
          set value($$value) {
            value = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Select_trigger($$renderer4, {
              class: "w-full",
              children: ($$renderer5) => {
                $$renderer5.push(`<p>${escape_html(value ? LANGUAGES.find((lang) => lang.id === value)?.text : "Pick a Language")}</p>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Select_content($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!--[-->`);
                const each_array = ensure_array_like(LANGUAGES);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let language = each_array[$$index];
                  $$renderer5.push(`<!---->`);
                  Select_item($$renderer5, {
                    value: language.id,
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(language.text)}`);
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
        $$renderer3.push(`<!----></div>`);
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
    bind_props($$props, { value, hasLangChanged });
  });
}
function Profile($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let avatar = void 0;
    let hasLangChanged = false;
    let locale = store_get($$store_subs ??= {}, "$profile", profile).locale || void 0;
    let hasUnsavedChanges = false;
    let email = store_get($$store_subs ??= {}, "$profile", profile).email || "";
    let isChangingEmail = false;
    let emailChangeInitiated = false;
    async function handleUpdate() {
      await profileApi.submit(
        {
          fullname: store_get($$store_subs ??= {}, "$profile", profile).fullname,
          username: store_get($$store_subs ??= {}, "$profile", profile).username,
          locale,
          avatar
        },
        hasLangChanged,
        locale
      );
      if (profileApi.success) {
        hasUnsavedChanges = false;
        avatar = void 0;
      }
    }
    async function handleEmailChange() {
      if (email === store_get($$store_subs ??= {}, "$profile", profile).email) {
        return;
      }
      const url = new URL(window.location.href);
      url.searchParams.set("trigger", "app");
      await profileApi.changeEmail({ newEmail: email, callbackURL: url.toString() });
      if (profileApi.success) {
        isChangingEmail = false;
        emailChangeInitiated = true;
        email = store_get($$store_subs ??= {}, "$profile", profile).email || "";
      }
    }
    const isVerificationSent = page.url.searchParams.get("trigger") === "app";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Unsaved_changes($$renderer3, {
        get hasUnsavedChanges() {
          return hasUnsavedChanges;
        },
        set hasUnsavedChanges($$value) {
          hasUnsavedChanges = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <!---->`);
      Field_group($$renderer3, {
        class: "w-full max-w-md! px-2",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Field_set($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_legend($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.profile_picture.heading"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field($$renderer5, {
                children: ($$renderer6) => {
                  Upload_image($$renderer6, {
                    src: store_get($$store_subs ??= {}, "$profile", profile).avatarUrl,
                    widthHeight: "w-16 h-16 lg:w-24 lg:h-24",
                    isDisabled: profileApi.isLoading,
                    change: () => hasUnsavedChanges = true,
                    get avatar() {
                      return avatar;
                    },
                    set avatar($$value) {
                      avatar = $$value;
                      $$settled = false;
                    }
                  });
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Field_separator($$renderer4, {});
          $$renderer4.push(`<!----> <!---->`);
          Field_set($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_legend($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.personal_information.heading"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              if (isVerificationSent) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="flex items-center gap-2 rounded-md border border-gray-200 p-2 text-green-500">`);
                Circle_check_big($$renderer5, { class: "size-8" });
                $$renderer5.push(`<!----> <p class="text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.personal_information.email_change_verification_sent"))}</p></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> <!---->`);
              Field_group($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.personal_information.full_name"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Input($$renderer7, {
                        class: "",
                        oninput: () => hasUnsavedChanges = true,
                        get value() {
                          return store_get($$store_subs ??= {}, "$profile", profile).fullname;
                        },
                        set value($$value) {
                          store_mutate($$store_subs ??= {}, "$profile", profile, store_get($$store_subs ??= {}, "$profile", profile).fullname = $$value);
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> `);
                      if (profileApi.errors.fullname) {
                        $$renderer7.push("<!--[-->");
                        $$renderer7.push(`<!---->`);
                        Field_error($$renderer7, {
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(profileApi.errors.fullname))}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!---->`);
                      } else {
                        $$renderer7.push("<!--[!-->");
                      }
                      $$renderer7.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.personal_information.username"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Input($$renderer7, {
                        oninput: () => hasUnsavedChanges = true,
                        get value() {
                          return store_get($$store_subs ??= {}, "$profile", profile).username;
                        },
                        set value($$value) {
                          store_mutate($$store_subs ??= {}, "$profile", profile, store_get($$store_subs ??= {}, "$profile", profile).username = $$value);
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> `);
                      if (profileApi.errors.username) {
                        $$renderer7.push("<!--[-->");
                        $$renderer7.push(`<!---->`);
                        Field_error($$renderer7, {
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(profileApi.errors.username))}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!---->`);
                      } else {
                        $$renderer7.push("<!--[!-->");
                      }
                      $$renderer7.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.personal_information.email"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Input($$renderer7, {
                        class: "w-full",
                        type: "email",
                        disabled: profileApi.isLoading,
                        oninput: () => {
                          if (email !== store_get($$store_subs ??= {}, "$profile", profile).email) {
                            isChangingEmail = true;
                            emailChangeInitiated = false;
                          }
                        },
                        get value() {
                          return email;
                        },
                        set value($$value) {
                          email = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> `);
                      if (profileApi.errors.newEmail) {
                        $$renderer7.push("<!--[-->");
                        $$renderer7.push(`<!---->`);
                        Field_error($$renderer7, {
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(profileApi.errors.newEmail))}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!---->`);
                      } else {
                        $$renderer7.push("<!--[!-->");
                      }
                      $$renderer7.push(`<!--]--> `);
                      if (isChangingEmail && email !== store_get($$store_subs ??= {}, "$profile", profile).email) {
                        $$renderer7.push("<!--[-->");
                        $$renderer7.push(`<div class="mt-2 flex gap-2">`);
                        Button($$renderer7, {
                          variant: "default",
                          class: "text-sm",
                          loading: profileApi.isLoading,
                          disabled: profileApi.isLoading,
                          onclick: handleEmailChange,
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.personal_information.confirm"))}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!----> `);
                        Button($$renderer7, {
                          variant: "ghost",
                          class: "ui:text-primary text-sm",
                          disabled: profileApi.isLoading,
                          onclick: () => {
                            email = store_get($$store_subs ??= {}, "$profile", profile).email || "";
                            isChangingEmail = false;
                            emailChangeInitiated = false;
                            profileApi.errors.newEmail = "";
                          },
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.personal_information.cancel"))}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!----></div>`);
                      } else {
                        $$renderer7.push("<!--[!-->");
                      }
                      $$renderer7.push(`<!--]--> `);
                      if (emailChangeInitiated) {
                        $$renderer7.push("<!--[-->");
                        $$renderer7.push(`<div class="mt-2 flex items-center gap-2 rounded-md border border-gray-200 p-2 text-amber-500">`);
                        Circle_check_big($$renderer7, { class: "size-8" });
                        $$renderer7.push(`<!----> <p class="text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.personal_information.email_change_verification_note"))}</p></div>`);
                      } else {
                        $$renderer7.push("<!--[!-->");
                      }
                      $$renderer7.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      Language_picker($$renderer7, {
                        change: () => hasUnsavedChanges = true,
                        className: "",
                        get hasLangChanged() {
                          return hasLangChanged;
                        },
                        set hasLangChanged($$value) {
                          hasLangChanged = $$value;
                          $$settled = false;
                        },
                        get value() {
                          return locale;
                        },
                        set value($$value) {
                          locale = $$value;
                          $$settled = false;
                        }
                      });
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
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { handleUpdate });
  });
}

export { Profile as P };
//# sourceMappingURL=profile-C0DsHWFP.js.map
