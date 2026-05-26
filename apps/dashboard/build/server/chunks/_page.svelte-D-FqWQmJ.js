import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores, c as bind_props, z as store_mutate, d as attr } from './index2-Eg0dVEDW.js';
import './client3-CP3T_KrU.js';
import './index4-DxtvI9Cx.js';
import './workspaces-CkuaVfOP.js';
import './client-Bi-QreUE.js';
import { t } from './translations-BxDrjLWK.js';
import './index6-DijlZyMe.js';
import './translation-B9Er9sXd.js';
import { B as Button } from './button-McsHA0hU.js';
import './states.svelte-CIWoDLSQ.js';
import './input-group-button-BAHNvNdh.js';
import { c as currentOrg, d as isFreePlan } from './org-BIDTy0Q0.js';
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
import { F as Field } from './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import 'is-valid-domain';
import './search2-Bcr7AZ8r.js';
import './sso-COLElRqe.js';
import { S as Switch } from './switch-Du8qYWxg.js';
import { o as orgApi } from './org.svelte-Dm7Q0orz.js';
import { h as handleOpenWidget, U as Upload_widget } from './upload-widget-HgU3qw5R.js';
import { I as Input } from './input-CkarY5WD.js';
import { F as Field_description } from './field-description-yPSV800w.js';
import { F as Field_group } from './field-group-CsZtrba5.js';
import { F as Field_label } from './field-label-BEb0I1_z.js';
import { F as Field_set, a as Field_legend } from './field-set-CvEL423F.js';
import { F as Field_separator } from './field-separator-CCwxfqwE.js';
import 'lodash/debounce.js';
import './token-auth.svelte-DjZztUDB.js';
import './store4-BumQoz9y.js';
import 'lodash/cloneDeep.js';
import 'lodash/set.js';
import './index8-D5Z_9ShZ.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import 'zod';
import './org3-BuUSwZTB.js';
import './index15-B_EOCZVP.js';
import '@better-auth/sso/client';
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
import 'lodash/merge.js';
import './base.svelte-C2lk8LDX.js';
import 'zod/v4';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import './video-recording-settings-DX6acopI.js';
import './hidden-input-D1JyMc-e.js';
import './sr-only-styles-C-iucSJr.js';
import './server3-VLoL706W.js';
import './routing-Cz2vwfLK.js';
import './store-D_AYzDdq.js';
import './upload-CcxRpjKo.js';
import './audience-query-utils-DHNyhHub.js';
import './underline-tabs-trigger-kfAMW9ai.js';
import './tabs-trigger-BTKUSTH_.js';
import './tabs-content-HVCoSzw-.js';
import './context2-Dq8HS6q_.js';
import './index7-moivQoE0.js';
import './dialog-BVhwOzzC.js';
import './x2-B8ExpX8J.js';
import './index17-Cgq4UFe3.js';
import './input-field-w4kZespe.js';
import './dialog-header-BMWmXTce.js';
import './dialog-title-Cob84UGI.js';
import './label-CXfFBnqp.js';
import './separator-C8wJJtqC.js';

function Customize_lms($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let widgetKey = "";
    function widgetControl(key) {
      widgetKey = key;
      store_mutate($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget, store_get($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget).open = true);
    }
    function authBackgroundWidgetControl() {
      if (store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan)) {
        return;
      }
      widgetKey = "auth-background";
      store_mutate($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget, store_get($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget).open = true);
    }
    function deleteAuthBackgroundImage() {
      store_mutate($$store_subs ??= {}, "$currentOrg", currentOrg, store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.auth.backgroundImage = "");
    }
    async function handleSave() {
      await orgApi.update(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).id, {
        customization: store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization
      });
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Field_group($$renderer3, {
        class: "w-full max-w-md! px-2",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Field_set($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_legend($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.dashboard.title"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_group($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Field($$renderer6, {
                    orientation: "horizontal",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.dashboard.community"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Switch($$renderer7, {
                        get checked() {
                          return store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.community;
                        },
                        set checked($$value) {
                          store_mutate($$store_subs ??= {}, "$currentOrg", currentOrg, store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.community = $$value);
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> <!---->`);
                      Field_description($$renderer7, {
                        class: "text-sm",
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.community ? store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.enabled") : store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.disabled"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    orientation: "horizontal",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.dashboard.exercises"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Switch($$renderer7, {
                        get checked() {
                          return store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.exercise;
                        },
                        set checked($$value) {
                          store_mutate($$store_subs ??= {}, "$currentOrg", currentOrg, store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.exercise = $$value);
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> <!---->`);
                      Field_description($$renderer7, {
                        class: "text-sm",
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.exercise ? store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.enabled") : store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.disabled"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.dashboard.banner_image"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Button($$renderer7, {
                        variant: "outline",
                        onclick: () => widgetControl("banner-image"),
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.dashboard.banner_image_btn"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      if (store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.bannerImage) {
                        $$renderer7.push("<!--[-->");
                        $$renderer7.push(`<img alt="Banner"${attr("src", store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.bannerImage)} class="mt-2 w-full rounded-md"/>`);
                      } else {
                        $$renderer7.push("<!--[!-->");
                      }
                      $$renderer7.push(`<!--]--> `);
                      if (store_get($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget).open && widgetKey === "banner-image") {
                        $$renderer7.push("<!--[-->");
                        Upload_widget($$renderer7, {
                          get imageURL() {
                            return store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.bannerImage;
                          },
                          set imageURL($$value) {
                            store_mutate($$store_subs ??= {}, "$currentOrg", currentOrg, store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.bannerImage = $$value);
                            $$settled = false;
                          }
                        });
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
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.dashboard.banner_text"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Input($$renderer7, {
                        placeholder: store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.dashboard.banner_text_placeholder"),
                        get value() {
                          return store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.bannerText;
                        },
                        set value($$value) {
                          store_mutate($$store_subs ??= {}, "$currentOrg", currentOrg, store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.dashboard.bannerText = $$value);
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!---->`);
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
          Field_separator($$renderer4, {});
          $$renderer4.push(`<!----> <!---->`);
          Field_set($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_legend($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.auth_background.title"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_description($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.auth_background.description"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              if (store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan)) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<!---->`);
                Field_description($$renderer5, {
                  class: "ui:text-muted-foreground",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.auth_background.paid_plan_note"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> <!---->`);
              Field_group($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<div class="flex items-center gap-2">`);
                      Button($$renderer7, {
                        onclick: authBackgroundWidgetControl,
                        disabled: store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan),
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.settings.replace"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Button($$renderer7, {
                        variant: "outline",
                        onclick: deleteAuthBackgroundImage,
                        disabled: store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan),
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("ai.reset"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----></div> `);
                      if (store_get($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget).open && widgetKey === "auth-background") {
                        $$renderer7.push("<!--[-->");
                        Upload_widget($$renderer7, {
                          get imageURL() {
                            return store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.auth.backgroundImage;
                          },
                          set imageURL($$value) {
                            store_mutate($$store_subs ??= {}, "$currentOrg", currentOrg, store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.auth.backgroundImage = $$value);
                            $$settled = false;
                          }
                        });
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
                      $$renderer7.push(`<div class="relative w-fit"><img style="min-width:280px; min-height:200px"${attr("alt", store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.auth_background.preview_alt"))}${attr("src", store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.auth.backgroundImage ? store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.auth.backgroundImage : "/images/classroomio-course-img-template.jpg")} class="relative mt-2 h-[200px] w-[280px] rounded-md object-cover md:mt-0"/></div>`);
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
          Field_separator($$renderer4, {});
          $$renderer4.push(`<!----> <!---->`);
          Field_set($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_legend($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.course.title"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_group($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Field($$renderer6, {
                    orientation: "horizontal",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.course.newsfeed"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Switch($$renderer7, {
                        get checked() {
                          return store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.course.newsfeed;
                        },
                        set checked($$value) {
                          store_mutate($$store_subs ??= {}, "$currentOrg", currentOrg, store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.course.newsfeed = $$value);
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> <!---->`);
                      Field_description($$renderer7, {
                        class: "text-gray-600",
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.course.newsfeed ? store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.enabled") : store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.disabled"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    orientation: "horizontal",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.course.grading"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Switch($$renderer7, {
                        get checked() {
                          return store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.course.grading;
                        },
                        set checked($$value) {
                          store_mutate($$store_subs ??= {}, "$currentOrg", currentOrg, store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.course.grading = $$value);
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> <!---->`);
                      Field_description($$renderer7, {
                        class: "text-gray-600",
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.course.grading ? store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.enabled") : store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.disabled"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!---->`);
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
          Field_separator($$renderer4, {});
          $$renderer4.push(`<!----> <!---->`);
          Field_set($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_legend($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.apps.title"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_group($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Field($$renderer6, {
                    orientation: "horizontal",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.apps.poll"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Switch($$renderer7, {
                        get checked() {
                          return store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.apps.poll;
                        },
                        set checked($$value) {
                          store_mutate($$store_subs ??= {}, "$currentOrg", currentOrg, store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.apps.poll = $$value);
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> <!---->`);
                      Field_description($$renderer7, {
                        class: "text-gray-600",
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.apps.poll ? store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.enabled") : store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.disabled"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    orientation: "horizontal",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.apps.live_comment"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Switch($$renderer7, {
                        get checked() {
                          return store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.apps.comments;
                        },
                        set checked($$value) {
                          store_mutate($$store_subs ??= {}, "$currentOrg", currentOrg, store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.apps.comments = $$value);
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> <!---->`);
                      Field_description($$renderer7, {
                        class: "text-gray-600",
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.apps.comments ? store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.enabled") : store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.disabled"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!---->`);
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
    bind_props($$props, { handleSave });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let customizeLmsComponent = null;
    let isSaving = false;
    async function handleSave() {
      isSaving = true;
      try {
        await customizeLmsComponent?.handleSave();
      } finally {
        isSaving = false;
      }
    }
    head("15043sp", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Customize LMS - ClassroomIO</title>`);
      });
    });
    $$renderer2.push(`<!---->`);
    Page($$renderer2, {
      class: "w-full md:max-w-4xl lg:mx-auto",
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
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.title"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Page_subtitle($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.page_subtitle"))}`);
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
                Button($$renderer5, {
                  variant: "default",
                  loading: isSaving,
                  disabled: isSaving,
                  onclick: handleSave,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.settings.customize_lms.save"))}`);
                  },
                  $$slots: { default: true }
                });
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
            Customize_lms($$renderer4, {});
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
//# sourceMappingURL=_page.svelte-D-FqWQmJ.js.map
