import { a as store_get, u as unsubscribe_stores, n as escape_html, f as ensure_array_like, d as attr } from './index2-Eg0dVEDW.js';
import { g as goto } from './client2-CqohmrW2.js';
import { r as resolve } from './server3-VLoL706W.js';
import { p as page } from './index5-nlVlCL1t.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-CG2pdu70.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { B as Button } from './button-McsHA0hU.js';
import { R as Root$1, D as Dialog_content } from './index7-moivQoE0.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, c as Page_body, b as Page_title } from './page-title-CsoF4Ebl.js';
import './index6-DijlZyMe.js';
import { P as Page } from './page-CIWgv5lu.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import { T as Table, a as Table_header, d as Table_body, b as Table_row, c as Table_head, e as Table_cell } from './table-row-D0a1OYFI.js';
import { S as Search } from './search3-D8xoPsxt.js';
import { C as Chip } from './chip-BZT61Rcy.js';
import { I as Icon_button } from './icon-button-De7MyFOi.js';
import { t } from './translations-BxDrjLWK.js';
import { s as shortenName } from './string-Cj27R2Pv.js';
import { R as ROLE, c as currentOrg, i as isOrgAdmin } from './org-BIDTy0Q0.js';
import './content-BYLGOVzm.js';
import { a as ROLE_LABEL, o as orgApi } from './org.svelte-Dm7Q0orz.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { U as Underline_tabs, a as Underline_tabs_list, b as Underline_tabs_trigger, c as Underline_tabs_content } from './underline-tabs-trigger-kfAMW9ai.js';
import { D as DEFAULT_ORG_AUDIENCE_QUERY } from './audience-query-utils-DHNyhHub.js';
import { T as Tutor_select_section, E as Existing_students_section, B as Bulk_email_section } from './bulk-email-section-4rpfNriS.js';
import { p as programApi } from './program.svelte-DzKpOc1U.js';
import './index4-DxtvI9Cx.js';
import './program-_gJE-tXQ.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-BMWmXTce.js';
import './app-DrlCEKij.js';
import { p as programGoalApi } from './goal.svelte-njuIcN61.js';
import { P as Plus } from './plus-CrIMYHIn.js';
import { S as Select_group } from './select-group-BdMmvCD6.js';
import { U as User } from './user2-BbQOYQ0A.js';
import { C as Check } from './check2-8RRD5s9f.js';
import { C as Copy } from './copy-ra0N3Sls.js';
import { T as Trash } from './trash-Cbsvg8py.js';
import './utils2-DPSDgWhA.js';
import './exports-DiyTWREe.js';
import './index-AIbsv2Pd.js';
import './event-ByDKS2H7.js';
import './routing-Cz2vwfLK.js';
import './client3-CP3T_KrU.js';
import './create-id-D7gdjJzW.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './index14-HMlD0kYH.js';
import './dialog-BVhwOzzC.js';
import './dialog-content-DTG9QsOx.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './x2-B8ExpX8J.js';
import './mounted-B958bjT3.js';
import './chevron-down2-mQy71LmC.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './check-92w5ryLF.js';
import './floating-layer-anchor-g9tHJXH3.js';
import './hidden-input-D1JyMc-e.js';
import './sr-only-styles-C-iucSJr.js';
import './input-group-input-BlASI7k-.js';
import './input-CkarY5WD.js';
import './input-group-button-BAHNvNdh.js';
import './search-DbgrMZ24.js';
import './index13-C4Mtu7Q0.js';
import './safe-polygon.svelte-D5_q4acK.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './search2-Bcr7AZ8r.js';
import 'zod';
import './org3-BuUSwZTB.js';
import './sso-COLElRqe.js';
import './base.svelte-C2lk8LDX.js';
import 'zod/v4';
import './store-D_AYzDdq.js';
import './upload-CcxRpjKo.js';
import './tabs-trigger-BTKUSTH_.js';
import './tabs-content-HVCoSzw-.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './context2-Dq8HS6q_.js';
import './x-BRZyLJGp.js';
import './Icon-BfkBTjtA.js';
import './multi-select-list-D-Hx0T8r.js';
import './checkbox-DZ3KH0FC.js';
import './clone-u51BKwOQ.js';
import './minus-C_S1F5ho.js';
import './input-field-w4kZespe.js';
import './field-description-yPSV800w.js';
import './field-label-BEb0I1_z.js';
import './label-CXfFBnqp.js';
import './field-BxJz8KV9.js';
import './field-group-CsZtrba5.js';
import './field-set-CvEL423F.js';
import './textarea-field-DcFq3Zr9.js';
import './textarea-CfVjMEtO.js';
import './shared-server-DaWdgxVh.js';
import './dialog-title-Cob84UGI.js';

function Invite_members_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { programId } = $$props;
    let tutors = [];
    let selectedIds = [];
    let isLoadingStudents = false;
    let activeTab = "students";
    const addPeopleParam = new URLSearchParams(page.url.search).get("add");
    const isOpen = addPeopleParam === "true";
    const selectedTutors = tutors.filter((tutor) => selectedIds.includes(tutor.id.toString()));
    const availableStudents = (() => getAvailableStudents(orgApi.audience, programApi.members))();
    const INVITE_MODAL = "course.navItem.people.invite_modal";
    function getAvailableStudents(students, programMembers) {
      const existingStudentIds = new Set(programMembers.filter((member) => Number(member.roleId) === ROLE.STUDENT).map((member) => member.profileId).filter((profileId) => Boolean(profileId)));
      return students.filter((student) => {
        if (!student.profileId) {
          return false;
        }
        return !existingStudentIds.has(student.profileId);
      });
    }
    function closeModal() {
      goto(resolve(page.url.pathname, {}));
    }
    async function handleStudentSearch(value) {
      const orgId = store_get($$store_subs ??= {}, "$currentOrg", currentOrg).id;
      if (!orgId) {
        return;
      }
      isLoadingStudents = true;
      try {
        await orgApi.getOrgAudience(
          orgId,
          {
            ...DEFAULT_ORG_AUDIENCE_QUERY,
            search: value.trim() || void 0
          },
          { abortPrevious: true }
        );
      } finally {
        isLoadingStudents = false;
      }
    }
    async function addTutors() {
      if (!selectedTutors.length) {
        closeModal();
        return;
      }
      programApi.success = false;
      await programApi.addMembers(programId, {
        members: selectedTutors.map((tutor) => ({
          profileId: tutor.profileId,
          roleId: ROLE.TUTOR,
          email: tutor.email,
          name: tutor.text
        }))
      });
      if (programApi.success) {
        closeModal();
      }
    }
    async function assignExistingStudents(profileIds, sendEmail) {
      await programApi.assignExistingStudentsToProgram(programId, { profileIds, sendEmail });
    }
    async function inviteNewStudents(recipientCsv, sendEmail) {
      await programApi.inviteStudentsToProgram(programId, { recipientCsv, sendEmail });
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root$1($$renderer3, {
        open: isOpen,
        onOpenChange: (open) => {
          if (!open) closeModal();
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "max-h-[80vh] w-[96vw] max-w-3xl! overflow-y-auto",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.people.invite_modal_title"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Underline_tabs($$renderer5, {
                get value() {
                  return activeTab;
                },
                set value($$value) {
                  activeTab = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Underline_tabs_list($$renderer6, {
                    class: "flex flex-wrap",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Underline_tabs_trigger($$renderer7, {
                        value: "tutors",
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`${INVITE_MODAL}.invite`))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> <!---->`);
                      Underline_tabs_trigger($$renderer7, {
                        value: "students",
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`${INVITE_MODAL}.invite_students`))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Underline_tabs_content($$renderer6, {
                    value: "tutors",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<div class="space-y-3">`);
                      Tutor_select_section($$renderer7, {
                        tutors,
                        isLoading: orgApi.isLoading,
                        helperHref: `/org/${store_get($$store_subs ??= {}, "$currentOrg", currentOrg).siteName}/settings/teams`,
                        get selectedIds() {
                          return selectedIds;
                        },
                        set selectedIds($$value) {
                          selectedIds = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> <div class="mt-5 flex flex-row-reverse items-center gap-2">`);
                      Button($$renderer7, {
                        variant: "secondary",
                        type: "button",
                        onclick: addTutors,
                        loading: programApi.isLoading,
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`${INVITE_MODAL}.finish`))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----></div></div>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Underline_tabs_content($$renderer6, {
                    value: "students",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<div class="space-y-6">`);
                      Existing_students_section($$renderer7, {
                        students: availableStudents,
                        isLoading: isLoadingStudents,
                        onSearchValueChange: handleStudentSearch,
                        onAssign: assignExistingStudents
                      });
                      $$renderer7.push(`<!----> `);
                      Bulk_email_section($$renderer7, { onInvite: inviteNewStudents });
                      $$renderer7.push(`<!----></div>`);
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
  });
}
function Goals_overview_tiles($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { programId } = $$props;
    const goals = programGoalApi.goalsFor(programId);
    function totalLearners(goal) {
      return Object.values(goal.statusCounts ?? {}).reduce((sum, value) => sum + (value ?? 0), 0);
    }
    function statusValue(goal, status) {
      return goal.statusCounts?.[status] ?? 0;
    }
    function onTrackPct(goal) {
      const total = totalLearners(goal);
      if (total === 0) return 0;
      const onTrack = statusValue(goal, "completed") + statusValue(goal, "in_progress") + statusValue(goal, "not_started");
      return Math.round(onTrack / total * 100);
    }
    if (goals.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="mb-4"><h3 class="mb-2 text-sm font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.heading"))}</h3> <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      const each_array = ensure_array_like(goals);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let goal = each_array[$$index];
        const total = totalLearners(goal);
        const completed = statusValue(goal, "completed");
        const overdue = statusValue(goal, "overdue");
        const atRisk = statusValue(goal, "at_risk");
        $$renderer2.push(`<div class="flex flex-col gap-2 rounded-md border p-3"><div class="flex items-start justify-between gap-2"><p class="line-clamp-2 text-sm font-medium">${escape_html(goal.title)}</p> `);
        Badge($$renderer2, {
          variant: "outline",
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`programs.goals.type.${goal.type}`))}`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div> <div class="flex items-baseline gap-1"><span class="text-lg font-semibold">${escape_html(onTrackPct(goal))}%</span> <span class="ui:text-muted-foreground text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.tile.on_track"))}</span></div> <div class="flex flex-wrap gap-3 text-xs"><span><span class="font-medium">${escape_html(completed)}/${escape_html(total)}</span>  ${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.tile.completed_short"))}</span> `);
        if (atRisk > 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="text-amber-700"><span class="font-medium">${escape_html(atRisk)}</span>  ${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.tile.at_risk_short"))}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (overdue > 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="text-red-600"><span class="font-medium">${escape_html(overdue)}</span>  ${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.tile.overdue_short"))}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></div>`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    let memberToDelete = null;
    let isDeleteModalOpen = false;
    let filterBy = "all";
    let searchValue = "";
    let copiedEmail = null;
    const members = sortAndFilterPeople(programApi.members, filterBy);
    const currentUserRole = (() => {
      const currentMember = programApi.members.find((member) => member.profileId === store_get($$store_subs ??= {}, "$profile", profile).id);
      return currentMember ? Number(currentMember.roleId) : null;
    })();
    const canManageMembers = (() => Boolean(store_get($$store_subs ??= {}, "$isOrgAdmin", isOrgAdmin)) || currentUserRole === ROLE.ADMIN || currentUserRole === ROLE.TUTOR)();
    const selectOptions = [
      {
        label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.roles.filter"),
        value: "all"
      },
      {
        label: store_get($$store_subs ??= {}, "$t", t)(ROLE_LABEL[ROLE.TUTOR]),
        value: `${ROLE.TUTOR}`
      },
      {
        label: store_get($$store_subs ??= {}, "$t", t)(ROLE_LABEL[ROLE.STUDENT]),
        value: `${ROLE.STUDENT}`
      }
    ];
    function sortAndFilterPeople(people, activeFilter) {
      return [...people || []].filter((person) => {
        if (activeFilter === "all") {
          return true;
        }
        return Number(person.roleId) === Number(activeFilter);
      }).sort((a, b) => new Date(a.createdAt || "").getTime() - new Date(b.createdAt || "").getTime()).sort((a, b) => Number(a.roleId) - Number(b.roleId));
    }
    function filterPeople(query, people) {
      const normalizedQuery = query.toLowerCase();
      return people.filter((person) => {
        const fullname = person.profile?.fullname?.toLowerCase() ?? "";
        const email = getEmail(person).toLowerCase();
        return fullname.includes(normalizedQuery) || email.includes(normalizedQuery);
      });
    }
    function getEmail(person) {
      return person.profile?.email ?? person.email ?? "";
    }
    function obscureEmail(email) {
      const [username = "", domain = ""] = email.split("@");
      if (username.length <= 2) {
        return email;
      }
      const obscuredUsername = username.charAt(0) + "*".repeat(username.length - 2) + username.charAt(username.length - 1);
      return `${obscuredUsername}@${domain}`;
    }
    function getRoleLabel(roleId) {
      if (roleId === ROLE.ADMIN) {
        return store_get($$store_subs ??= {}, "$t", t)(ROLE_LABEL[ROLE.ADMIN]);
      }
      if (roleId === ROLE.TUTOR) {
        return store_get($$store_subs ??= {}, "$t", t)(ROLE_LABEL[ROLE.TUTOR]);
      }
      return store_get($$store_subs ??= {}, "$t", t)(ROLE_LABEL[ROLE.STUDENT]);
    }
    async function copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
        copiedEmail = text;
        setTimeout(
          () => {
            copiedEmail = null;
          },
          2e3
        );
      } catch (error) {
        console.error("Failed to copy email:", error);
      }
    }
    async function deletePerson() {
      if (!memberToDelete) {
        return;
      }
      programApi.success = false;
      await programApi.removeMember(data.programId, memberToDelete.id);
      if (programApi.success) {
        isDeleteModalOpen = false;
        memberToDelete = null;
      }
    }
    function openInviteModal() {
      goto(resolve(`${page.url.pathname}?add=true`, {}));
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Page($$renderer3, {
        class: "mx-auto w-[90%] md:max-w-3xl",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Page_header($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Page_header_content($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Page_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.sidebar.people"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Page_action($$renderer5, {
                children: ($$renderer6) => {
                  if (canManageMembers) {
                    $$renderer6.push("<!--[-->");
                    Button($$renderer6, {
                      onclick: openInviteModal,
                      children: ($$renderer7) => {
                        Plus($$renderer7, { size: 16 });
                        $$renderer7.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.people.invite"))}`);
                      },
                      $$slots: { default: true }
                    });
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
          $$renderer4.push(`<!----> <!---->`);
          {
            let child = function($$renderer5) {
              Goals_overview_tiles($$renderer5, { programId: data.programId });
              $$renderer5.push(`<!----> <section class="space-y-2"><div class="flex flex-col items-center justify-end gap-2 md:flex-row">`);
              Search($$renderer5, {
                placeholder: store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.search"),
                get value() {
                  return searchValue;
                },
                set value($$value) {
                  searchValue = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----> <!---->`);
              Root($$renderer5, {
                type: "single",
                name: "roles",
                get value() {
                  return filterBy;
                },
                set value($$value) {
                  filterBy = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Select_trigger($$renderer6, {
                    class: "max-w-[100px]",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(selectOptions.find((option) => option.value === filterBy)?.label)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Select_content($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Select_group($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!--[-->`);
                          const each_array = ensure_array_like(selectOptions);
                          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                            let option = each_array[$$index];
                            $$renderer8.push(`<!---->`);
                            Select_item($$renderer8, {
                              value: option.value,
                              label: option.label,
                              disabled: option.value === filterBy,
                              children: ($$renderer9) => {
                                $$renderer9.push(`<!---->${escape_html(option.label)}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer8.push(`<!---->`);
                          }
                          $$renderer8.push(`<!--]-->`);
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
              $$renderer5.push(`<!----></div> <div class="rounded-md border"><!---->`);
              Table($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Table_header($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Table_row($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->`);
                          Table_head($$renderer8, {
                            children: ($$renderer9) => {
                              $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.name"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer8.push(`<!----> <!---->`);
                          Table_head($$renderer8, {
                            children: ($$renderer9) => {
                              $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.role"))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer8.push(`<!----> <!---->`);
                          Table_head($$renderer8, {
                            children: ($$renderer9) => {
                              $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.action"))}`);
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
                  $$renderer6.push(`<!----> <!---->`);
                  Table_body($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!--[-->`);
                      const each_array_1 = ensure_array_like(filterPeople(searchValue, members));
                      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                        let person = each_array_1[$$index_1];
                        $$renderer7.push(`<!---->`);
                        Table_row($$renderer7, {
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->`);
                            Table_cell($$renderer8, {
                              class: "w-4/6 md:w-3/6",
                              children: ($$renderer9) => {
                                if (person.profile) {
                                  $$renderer9.push("<!--[-->");
                                  $$renderer9.push(`<div class="flex items-start lg:items-center"><!---->`);
                                  Avatar($$renderer9, {
                                    class: "mr-3",
                                    children: ($$renderer10) => {
                                      if (person.profile.avatarUrl) {
                                        $$renderer10.push("<!--[-->");
                                        $$renderer10.push(`<!---->`);
                                        Avatar_image($$renderer10, {
                                          src: person.profile.avatarUrl,
                                          alt: person.profile.fullname ? person.profile.fullname : "User"
                                        });
                                        $$renderer10.push(`<!---->`);
                                      } else {
                                        $$renderer10.push("<!--[!-->");
                                      }
                                      $$renderer10.push(`<!--]--> <!---->`);
                                      Avatar_fallback($$renderer10, {
                                        children: ($$renderer11) => {
                                          User($$renderer11, { class: "ui:size-4 ui:text-muted-foreground" });
                                        },
                                        $$slots: { default: true }
                                      });
                                      $$renderer10.push(`<!---->`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer9.push(`<!----> <div class="flex flex-col items-start lg:flex-row lg:items-center"><div class="mr-2"><p class="text-base font-normal dark:text-white">${escape_html(person.profile.fullname)}</p> <p class="ui:text-primary line-clamp-1 text-xs">${escape_html(obscureEmail(getEmail(person)))}</p></div> <div class="flex items-center">`);
                                  if (canManageMembers) {
                                    $$renderer9.push("<!--[-->");
                                    Button($$renderer9, {
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-8 w-8",
                                      onclick: () => copyToClipboard(getEmail(person)),
                                      children: ($$renderer10) => {
                                        if (copiedEmail === getEmail(person)) {
                                          $$renderer10.push("<!--[-->");
                                          Check($$renderer10, { size: 16, class: "text-green-600" });
                                        } else {
                                          $$renderer10.push("<!--[!-->");
                                          Copy($$renderer10, { size: 16 });
                                        }
                                        $$renderer10.push(`<!--]-->`);
                                      },
                                      $$slots: { default: true }
                                    });
                                  } else {
                                    $$renderer9.push("<!--[!-->");
                                  }
                                  $$renderer9.push(`<!--]--> `);
                                  if (person.profileId === store_get($$store_subs ??= {}, "$profile", profile).id) {
                                    $$renderer9.push("<!--[-->");
                                    Badge($$renderer9, {
                                      variant: "secondary",
                                      children: ($$renderer10) => {
                                        $$renderer10.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.you"))}`);
                                      },
                                      $$slots: { default: true }
                                    });
                                  } else {
                                    $$renderer9.push("<!--[!-->");
                                  }
                                  $$renderer9.push(`<!--]--></div></div></div>`);
                                } else {
                                  $$renderer9.push("<!--[!-->");
                                  $$renderer9.push(`<div class="flex w-2/4 items-start lg:items-center">`);
                                  Chip($$renderer9, { value: shortenName(person.email ?? ""), className: "mr-3" });
                                  $$renderer9.push(`<!----> <a${attr("href", `mailto:${person.email ?? ""}`)} class="text-md ui:text-primary mr-2 dark:text-white">${escape_html(person.email)}</a> <div class="flex items-center justify-between">`);
                                  if (canManageMembers) {
                                    $$renderer9.push("<!--[-->");
                                    Button($$renderer9, {
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-8 w-8",
                                      onclick: () => copyToClipboard(getEmail(person)),
                                      children: ($$renderer10) => {
                                        if (copiedEmail === getEmail(person)) {
                                          $$renderer10.push("<!--[-->");
                                          Check($$renderer10, { size: 16, class: "text-green-600" });
                                        } else {
                                          $$renderer10.push("<!--[!-->");
                                          Copy($$renderer10, { size: 16 });
                                        }
                                        $$renderer10.push(`<!--]-->`);
                                      },
                                      $$slots: { default: true }
                                    });
                                  } else {
                                    $$renderer9.push("<!--[!-->");
                                  }
                                  $$renderer9.push(`<!--]--> `);
                                  Chip($$renderer9, {
                                    value: store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.pending"),
                                    className: "bg-yellow-200 text-yellow-700"
                                  });
                                  $$renderer9.push(`<!----></div></div>`);
                                }
                                $$renderer9.push(`<!--]-->`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer8.push(`<!----> <!---->`);
                            Table_cell($$renderer8, {
                              class: "w-1/4",
                              children: ($$renderer9) => {
                                $$renderer9.push(`<p class="w-1/4 text-center text-base font-normal dark:text-white">${escape_html(getRoleLabel(Number(person.roleId)))}</p>`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer8.push(`<!----> <!---->`);
                            Table_cell($$renderer8, {
                              class: "w-1/4",
                              children: ($$renderer9) => {
                                if (canManageMembers && person.profileId !== store_get($$store_subs ??= {}, "$profile", profile).id) {
                                  $$renderer9.push("<!--[-->");
                                  $$renderer9.push(`<div class="hidden space-x-2 sm:flex sm:items-center">`);
                                  Icon_button($$renderer9, {
                                    onclick: () => {
                                      memberToDelete = person;
                                      isDeleteModalOpen = true;
                                    },
                                    children: ($$renderer10) => {
                                      Trash($$renderer10, { size: 16 });
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer9.push(`<!----></div>`);
                                } else {
                                  $$renderer9.push("<!--[!-->");
                                }
                                $$renderer9.push(`<!--]-->`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer8.push(`<!---->`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!---->`);
                      }
                      $$renderer7.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div></section>`);
            };
            Page_body($$renderer4, { child, $$slots: { child: true } });
          }
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Invite_members_modal($$renderer3, { programId: data.programId });
      $$renderer3.push(`<!----> <!---->`);
      Root$1($$renderer3, {
        get open() {
          return isDeleteModalOpen;
        },
        set open($$value) {
          isDeleteModalOpen = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "w-96 pt-3",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                class: "px-5 py-2",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.delete_confirmation.title"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div><p class="mt-0 text-base dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.delete_confirmation.sure"))} <strong>${escape_html(memberToDelete ? getEmail(memberToDelete) : "")}</strong>?</p> <div class="mt-5 flex items-center justify-between">`);
              Button($$renderer5, {
                variant: "outline",
                onclick: () => isDeleteModalOpen = false,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.delete_confirmation.no"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Button($$renderer5, {
                variant: "outline",
                onclick: deletePerson,
                loading: programApi.isLoading,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.delete_confirmation.yes"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div></div>`);
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

export { _page as default };
//# sourceMappingURL=_page.svelte-DZtQm1HH.js.map
