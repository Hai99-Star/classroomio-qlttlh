import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores, f as ensure_array_like } from './index2-Eg0dVEDW.js';
import './client3-CP3T_KrU.js';
import './index4-DxtvI9Cx.js';
import './workspaces-CkuaVfOP.js';
import './client-Bi-QreUE.js';
import { t } from './translations-BxDrjLWK.js';
import './index6-DijlZyMe.js';
import './translation-B9Er9sXd.js';
import { B as Button, S as Spinner } from './button-McsHA0hU.js';
import './states.svelte-CIWoDLSQ.js';
import './input-group-button-BAHNvNdh.js';
import { d as isFreePlan, R as ROLE } from './org-BIDTy0Q0.js';
import { B as Badge } from './badge-DTmoBcZS.js';
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
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { a as ROLE_LABEL, o as orgApi } from './org.svelte-Dm7Q0orz.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { v as validateEmailInString } from './validator-BeZKT7pz.js';
import { I as Input } from './input-CkarY5WD.js';
import { C as Coming_soon } from './coming-soon-CcW9Rllr.js';
import { F as Field_description } from './field-description-yPSV800w.js';
import { F as Field_label, a as Field_error } from './field-label-BEb0I1_z.js';
import { F as Field_group } from './field-group-CsZtrba5.js';
import { F as Field_set, a as Field_legend } from './field-set-CvEL423F.js';
import { F as Field_separator } from './field-separator-CCwxfqwE.js';
import { U as Upgrade_banner } from './upgrade-banner-lnSY7iqY.js';
import 'lodash/debounce.js';
import './token-auth.svelte-DjZztUDB.js';
import './store4-BumQoz9y.js';
import 'lodash/cloneDeep.js';
import 'lodash/set.js';
import './index8-D5Z_9ShZ.js';
import { P as Page_header, c as Page_body, a as Page_header_content, b as Page_title } from './page-title-CsoF4Ebl.js';
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
import './mounted-B958bjT3.js';
import './chevron-down2-mQy71LmC.js';
import './check-92w5ryLF.js';
import './floating-layer-anchor-g9tHJXH3.js';
import './hidden-input-D1JyMc-e.js';
import './sr-only-styles-C-iucSJr.js';
import './server3-VLoL706W.js';
import './routing-Cz2vwfLK.js';
import './upload-CcxRpjKo.js';
import './audience-query-utils-DHNyhHub.js';
import './label-CXfFBnqp.js';
import './separator-C8wJJtqC.js';
import './item-actions-BlOLR7EV.js';
import './item-content--fxXSxOv.js';
import './item-title-BLGVIel8.js';
import './premium-RvNiV2QP.js';
import './chevron-right-C3Al4Cvl.js';
import './Icon-BfkBTjtA.js';

function Teams($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let emailsStr = "";
    let errorMessage = "";
    let role = ROLE.TUTOR.toString();
    let isRemoving = null;
    async function onSendInvite() {
      if (store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan)) {
        snackbar.error("upgrade.required");
        return;
      }
      const { hasError, error: _error, emails } = validateEmailInString(emailsStr);
      if (hasError) {
        errorMessage = _error;
        return;
      }
      errorMessage = "";
      await orgApi.inviteTeamMembers(emails, parseInt(role));
      if (orgApi.success) {
        snackbar.success("snackbar.team_members.invite_sent");
        emailsStr = "";
      } else {
        if (orgApi.errors.emails) {
          errorMessage = orgApi.errors.emails;
        } else if (orgApi.errors.general) {
          snackbar.error(orgApi.errors.general);
        }
      }
    }
    async function onRemove(id) {
      if (store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan)) {
        snackbar.error("upgrade.required");
        return;
      }
      isRemoving = id;
      await orgApi.removeTeamMember(id);
      if (orgApi.success) {
        snackbar.success("snackbar.team_members.remove_success");
      } else {
        snackbar.error("snackbar.team_members.remove_fail");
      }
      isRemoving = null;
    }
    const isTeamMemberAdmin = (members, profileId) => {
      return members.some((member) => member.profileId === profileId && member.isAdmin);
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Upgrade_banner($$renderer3, {
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("upgrade.team"))}`);
        },
        $$slots: { default: true }
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
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.teams.add"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_description($$renderer5, {
                class: "mb-5",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.teams.add_team"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_group($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.teams.invite"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Input($$renderer7, {
                        placeholder: store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.teams.placeholder"),
                        class: "w-full",
                        disabled: store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan),
                        get value() {
                          return emailsStr;
                        },
                        set value($$value) {
                          emailsStr = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> `);
                      if (errorMessage) {
                        $$renderer7.push("<!--[-->");
                        $$renderer7.push(`<!---->`);
                        Field_error($$renderer7, {
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(errorMessage)}`);
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
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.teams.role"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> <!---->`);
                      Root($$renderer7, {
                        type: "single",
                        disabled: store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan),
                        get value() {
                          return role;
                        },
                        set value($$value) {
                          role = $$value;
                          $$settled = false;
                        },
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->`);
                          Select_trigger($$renderer8, {
                            id: "invite-role",
                            class: "w-40",
                            children: ($$renderer9) => {
                              $$renderer9.push(`<p>${escape_html(role ? store_get($$store_subs ??= {}, "$t", t)(ROLE_LABEL[role]) : store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.teams.select_role"))}</p>`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer8.push(`<!----> <!---->`);
                          Select_content($$renderer8, {
                            children: ($$renderer9) => {
                              $$renderer9.push(`<!---->`);
                              Select_item($$renderer9, {
                                value: ROLE.ADMIN.toString(),
                                children: ($$renderer10) => {
                                  $$renderer10.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(ROLE_LABEL[ROLE.ADMIN]))}`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer9.push(`<!----> <!---->`);
                              Select_item($$renderer9, {
                                value: ROLE.TUTOR.toString(),
                                children: ($$renderer10) => {
                                  $$renderer10.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(ROLE_LABEL[ROLE.TUTOR]))}`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer9.push(`<!---->`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer8.push(`<!---->`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> `);
                  Button($$renderer6, {
                    variant: "default",
                    onclick: onSendInvite,
                    loading: orgApi.isLoading,
                    disabled: orgApi.isLoading || store_get($$store_subs ??= {}, "$isFreePlan", isFreePlan),
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.teams.send_invite"))}`);
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
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.teams.members"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_group($$renderer5, {
                children: ($$renderer6) => {
                  if (orgApi.isLoading && orgApi.teamMembers.length === 0) {
                    $$renderer6.push("<!--[-->");
                    Spinner($$renderer6, { class: "size-10! text-blue-700!" });
                  } else {
                    $$renderer6.push("<!--[!-->");
                    if (orgApi.teamMembers.length > 0) {
                      $$renderer6.push("<!--[-->");
                      $$renderer6.push(`<!--[-->`);
                      const each_array = ensure_array_like(orgApi.teamMembers);
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let teamMember = each_array[$$index];
                        $$renderer6.push(`<!---->`);
                        Field($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<div class="flex items-center justify-between"><div class="flex items-center"><p class="mr-3 text-sm text-gray-500 dark:text-white">${escape_html(teamMember.email)}</p> `);
                            Badge($$renderer7, {
                              variant: "secondary",
                              class: "mr-3 text-xs",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(teamMember.role))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> `);
                            if (!teamMember.verified) {
                              $$renderer7.push("<!--[-->");
                              Badge($$renderer7, {
                                variant: "outline",
                                class: "bg-yellow-200 text-xs text-yellow-700 dark:bg-yellow-700",
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.teams.invite_sent"))}`);
                                },
                                $$slots: { default: true }
                              });
                            } else {
                              $$renderer7.push("<!--[!-->");
                              if (teamMember.profileId === store_get($$store_subs ??= {}, "$profile", profile).id) {
                                $$renderer7.push("<!--[-->");
                                Coming_soon($$renderer7, {
                                  label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.teams.you")
                                });
                              } else {
                                $$renderer7.push("<!--[!-->");
                              }
                              $$renderer7.push(`<!--]-->`);
                            }
                            $$renderer7.push(`<!--]--></div> `);
                            if (teamMember.profileId !== store_get($$store_subs ??= {}, "$profile", profile).id && isTeamMemberAdmin(orgApi.teamMembers, store_get($$store_subs ??= {}, "$profile", profile).id)) {
                              $$renderer7.push("<!--[-->");
                              Button($$renderer7, {
                                variant: "ghost",
                                onclick: () => onRemove(teamMember.id),
                                loading: isRemoving === teamMember.id,
                                disabled: isRemoving === teamMember.id,
                                class: "text-red-500 hover:text-red-700",
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.teams.remove"))}`);
                                },
                                $$slots: { default: true }
                              });
                            } else {
                              $$renderer7.push("<!--[!-->");
                            }
                            $$renderer7.push(`<!--]--></div>`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      }
                      $$renderer6.push(`<!--]-->`);
                    } else {
                      $$renderer6.push("<!--[!-->");
                    }
                    $$renderer6.push(`<!--]-->`);
                  }
                  $$renderer6.push(`<!--]-->`);
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
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    head("17r4g15", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Teams - ClassroomIO</title>`);
      });
    });
    Page_header($$renderer2, {
      children: ($$renderer3) => {
        Page_header_content($$renderer3, {
          children: ($$renderer4) => {
            Page_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("upgrade.team_members"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Page_subtitle($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.teams.page_subtitle"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    {
      let child = function($$renderer3) {
        Teams($$renderer3);
      };
      Page_body($$renderer2, { child, $$slots: { child: true } });
    }
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CVH1EdHf.js.map
