import { a as store_get, u as unsubscribe_stores, n as escape_html, f as ensure_array_like, l as attr_class, e as stringify, c as bind_props } from './index2-Eg0dVEDW.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, c as Page_body, b as Page_title } from './page-title-CsoF4Ebl.js';
import './index6-DijlZyMe.js';
import { P as Page } from './page-CIWgv5lu.js';
import { B as Button } from './button-McsHA0hU.js';
import { I as Input } from './input-CkarY5WD.js';
import { T as Textarea } from './textarea-CfVjMEtO.js';
import { L as Label } from './label-CXfFBnqp.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import { S as Separator } from './separator-C8wJJtqC.js';
import { t } from './translations-BxDrjLWK.js';
import { p as programApi } from './program.svelte-DarRiqGl.js';
import './index4-3F2xRc80.js';
import { R as ROLE, b as currentOrgPath, i as isOrgAdmin } from './org-BIDTy0Q0.js';
import { P as PROGRAM_GOAL_TYPES, d as PROGRAM_GOAL_DEADLINE_KINDS } from './program-_gJE-tXQ.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { g as goto } from './client2-CqohmrW2.js';
import { r as resolve } from './server3-VLoL706W.js';
import './content-BYLGOVzm.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { I as Icon_button } from './icon-button-De7MyFOi.js';
import './app-DrlCEKij.js';
import { p as programGoalApi } from './goal.svelte-uEXk5_Ph.js';
import { R as Root$1, D as Dialog_content } from './index7-moivQoE0.js';
import { C as Checkbox } from './checkbox-DZ3KH0FC.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-BMWmXTce.js';
import { P as Plus } from './plus-CrIMYHIn.js';
import { P as Pencil } from './pencil-DAMrDWiT.js';
import { T as Trash } from './trash-Cbsvg8py.js';
import './utils2-DPSDgWhA.js';
import './index14-HMlD0kYH.js';
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
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import './store-D_AYzDdq.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import './shared-server-DaWdgxVh.js';
import 'lodash/merge.js';
import 'zod';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './routing-Cz2vwfLK.js';
import './index13-C4Mtu7Q0.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './dialog-BVhwOzzC.js';
import './dialog-content-DTG9QsOx.js';
import './x2-B8ExpX8J.js';
import './clone-u51BKwOQ.js';
import './minus-C_S1F5ho.js';
import './dialog-title-Cob84UGI.js';
import './Icon-BfkBTjtA.js';

function Goal_form_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { open = void 0, programId, goal, onClose } = $$props;
    let title = "";
    let description = "";
    let type = "complete_all";
    let courseIds = [];
    let requiredCount = null;
    let scoreThreshold = 80;
    let teamPassRateThreshold = 80;
    let deadlineKind = "none";
    let deadlineDate = "";
    let relativeDays = null;
    let recurringMonths = null;
    let reminderDaysBeforeText = "7, 1";
    let isSaving = false;
    let formError = null;
    const isEditing = goal !== null;
    const availableCourses = programApi.courses;
    function parseReminders(text) {
      return text.split(/[,\s]+/).map((part) => part.trim()).filter(Boolean).map((part) => Number(part)).filter((value) => Number.isFinite(value) && value >= 0 && value <= 365);
    }
    function buildPayload() {
      if (!title.trim()) {
        formError = store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.title_label") + " is required";
        return null;
      }
      if (courseIds.length === 0) {
        formError = store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.courses_label") + " is required";
        return null;
      }
      return {
        title: title.trim(),
        description: description.trim() || null,
        type,
        courseIds,
        requiredCount: type === "n_of_m" ? requiredCount : null,
        scoreThreshold: type === "score" || type === "pass_rate" ? scoreThreshold : null,
        teamPassRateThreshold: type === "pass_rate" ? teamPassRateThreshold : null,
        reminderDaysBefore: parseReminders(reminderDaysBeforeText),
        deadlineKind,
        deadlineDate: deadlineKind === "absolute" && deadlineDate ? new Date(deadlineDate).toISOString() : null,
        relativeDays: deadlineKind === "relative_to_join" ? relativeDays : null,
        recurringMonths: deadlineKind === "recurring" ? recurringMonths : null
      };
    }
    async function handleSave() {
      formError = null;
      const payload = buildPayload();
      if (!payload) return;
      isSaving = true;
      try {
        const ok = isEditing && goal ? await programGoalApi.updateGoal(programId, goal.id, payload) : await programGoalApi.createGoal(programId, payload);
        if (ok) onClose();
        else formError = programGoalApi.error ?? "Failed to save";
      } finally {
        isSaving = false;
      }
    }
    function toggleCourse(courseId) {
      courseIds = courseIds.includes(courseId) ? courseIds.filter((id) => id !== courseId) : [...courseIds, courseId];
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root$1($$renderer3, {
        onOpenChange: (value) => !value && onClose(),
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "max-h-[90vh] w-[96vw] max-w-2xl overflow-y-auto",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(isEditing ? store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.edit_title") : store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.create_title"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="flex flex-col gap-4"><div class="flex flex-col gap-1.5">`);
              Label($$renderer5, {
                for: "goal-title",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.title_label"))} *`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Input($$renderer5, {
                id: "goal-title",
                maxlength: 255,
                placeholder: store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.title_placeholder"),
                get value() {
                  return title;
                },
                set value($$value) {
                  title = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----></div> <div class="flex flex-col gap-1.5">`);
              Label($$renderer5, {
                for: "goal-description",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.description_label"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Textarea($$renderer5, {
                id: "goal-description",
                rows: 2,
                maxlength: 2e3,
                placeholder: store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.description_placeholder"),
                get value() {
                  return description;
                },
                set value($$value) {
                  description = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----></div> <div class="flex flex-col gap-1.5">`);
              Label($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.type_label"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Root($$renderer5, {
                type: "single",
                get value() {
                  return type;
                },
                set value($$value) {
                  type = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Select_trigger($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`programs.goals.type.${type}`))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Select_content($$renderer6, {
                    style: "z-index: 500 !important",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!--[-->`);
                      const each_array = ensure_array_like(PROGRAM_GOAL_TYPES);
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let goalType = each_array[$$index];
                        $$renderer7.push(`<!---->`);
                        Select_item($$renderer7, {
                          value: goalType,
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`programs.goals.type.${goalType}`))}`);
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
              $$renderer5.push(`<!----></div> <div class="flex flex-col gap-1.5">`);
              Label($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.courses_label"))} *`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              if (availableCourses.length === 0) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<p class="ui:text-muted-foreground text-sm">No courses in this program yet.</p>`);
              } else {
                $$renderer5.push("<!--[!-->");
                $$renderer5.push(`<div class="flex flex-col gap-2 rounded-md border p-3"><!--[-->`);
                const each_array_1 = ensure_array_like(availableCourses);
                for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                  let item = each_array_1[$$index_1];
                  $$renderer5.push(`<label class="flex items-center gap-2 text-sm">`);
                  Checkbox($$renderer5, {
                    checked: courseIds.includes(item.courseId),
                    onCheckedChange: () => toggleCourse(item.courseId)
                  });
                  $$renderer5.push(`<!----> <span>${escape_html(item.course.title ?? "Untitled course")}</span></label>`);
                }
                $$renderer5.push(`<!--]--></div>`);
              }
              $$renderer5.push(`<!--]--></div> `);
              if (type === "n_of_m") {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="flex flex-col gap-1.5">`);
                Label($$renderer5, {
                  for: "goal-required-count",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.required_count_label"))} *`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Input($$renderer5, {
                  id: "goal-required-count",
                  type: "number",
                  min: "1",
                  max: courseIds.length || 50,
                  value: requiredCount ?? "",
                  oninput: (event) => {
                    const value = event.currentTarget.valueAsNumber;
                    requiredCount = Number.isNaN(value) ? null : value;
                  }
                });
                $$renderer5.push(`<!----></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> `);
              if (type === "score" || type === "pass_rate") {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="flex flex-col gap-1.5">`);
                Label($$renderer5, {
                  for: "goal-score",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.score_threshold_label"))} *`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Input($$renderer5, {
                  id: "goal-score",
                  type: "number",
                  min: "0",
                  max: "100",
                  value: scoreThreshold ?? "",
                  oninput: (event) => {
                    const value = event.currentTarget.valueAsNumber;
                    scoreThreshold = Number.isNaN(value) ? null : value;
                  }
                });
                $$renderer5.push(`<!----></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> `);
              if (type === "pass_rate") {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="flex flex-col gap-1.5">`);
                Label($$renderer5, {
                  for: "goal-team-rate",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.team_pass_rate_label"))} *`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Input($$renderer5, {
                  id: "goal-team-rate",
                  type: "number",
                  min: "0",
                  max: "100",
                  value: teamPassRateThreshold ?? "",
                  oninput: (event) => {
                    const value = event.currentTarget.valueAsNumber;
                    teamPassRateThreshold = Number.isNaN(value) ? null : value;
                  }
                });
                $$renderer5.push(`<!----></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> <div class="flex flex-col gap-1.5">`);
              Label($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.deadline_label"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Root($$renderer5, {
                type: "single",
                disabled: type === "readiness",
                get value() {
                  return deadlineKind;
                },
                set value($$value) {
                  deadlineKind = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Select_trigger($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`programs.goals.deadline_kind.${deadlineKind}`))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Select_content($$renderer6, {
                    style: "z-index: 500 !important",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!--[-->`);
                      const each_array_2 = ensure_array_like(PROGRAM_GOAL_DEADLINE_KINDS);
                      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                        let kind = each_array_2[$$index_2];
                        $$renderer7.push(`<!---->`);
                        Select_item($$renderer7, {
                          value: kind,
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`programs.goals.deadline_kind.${kind}`))}`);
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
              $$renderer5.push(`<!----></div> `);
              if (deadlineKind === "absolute") {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="flex flex-col gap-1.5">`);
                Label($$renderer5, {
                  for: "goal-deadline-date",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.deadline_date_label"))} *`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Input($$renderer5, {
                  id: "goal-deadline-date",
                  type: "date",
                  get value() {
                    return deadlineDate;
                  },
                  set value($$value) {
                    deadlineDate = $$value;
                    $$settled = false;
                  }
                });
                $$renderer5.push(`<!----></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> `);
              if (deadlineKind === "relative_to_join") {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="flex flex-col gap-1.5">`);
                Label($$renderer5, {
                  for: "goal-relative-days",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.relative_days_label"))} *`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Input($$renderer5, {
                  id: "goal-relative-days",
                  type: "number",
                  min: "1",
                  max: "3650",
                  value: relativeDays ?? "",
                  oninput: (event) => {
                    const value = event.currentTarget.valueAsNumber;
                    relativeDays = Number.isNaN(value) ? null : value;
                  }
                });
                $$renderer5.push(`<!----></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> `);
              if (deadlineKind === "recurring") {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="flex flex-col gap-1.5">`);
                Label($$renderer5, {
                  for: "goal-recurring-months",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.recurring_months_label"))} *`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Input($$renderer5, {
                  id: "goal-recurring-months",
                  type: "number",
                  min: "1",
                  max: "120",
                  value: recurringMonths ?? "",
                  oninput: (event) => {
                    const value = event.currentTarget.valueAsNumber;
                    recurringMonths = Number.isNaN(value) ? null : value;
                  }
                });
                $$renderer5.push(`<!----></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> `);
              if (deadlineKind !== "none") {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="flex flex-col gap-1.5">`);
                Label($$renderer5, {
                  for: "goal-reminders",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.reminders_label"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Input($$renderer5, {
                  id: "goal-reminders",
                  placeholder: "7, 3, 1",
                  get value() {
                    return reminderDaysBeforeText;
                  },
                  set value($$value) {
                    reminderDaysBeforeText = $$value;
                    $$settled = false;
                  }
                });
                $$renderer5.push(`<!----> <p class="ui:text-muted-foreground text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.reminders_helper"))}</p></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> `);
              if (formError) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<p class="text-sm text-red-600">${escape_html(formError)}</p>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> <div class="mt-2 flex justify-end gap-2">`);
              Button($$renderer5, {
                variant: "ghost",
                onclick: onClose,
                disabled: isSaving,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.cancel"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Button($$renderer5, {
                variant: "secondary",
                onclick: handleSave,
                loading: isSaving,
                disabled: isSaving,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.modal.save"))}`);
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
    bind_props($$props, { open });
  });
}
function Goals_section($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { programId, canManage } = $$props;
    let isModalOpen = false;
    let editingGoal = null;
    const goals = programGoalApi.goalsFor(programId);
    function openCreate() {
      editingGoal = null;
      isModalOpen = true;
    }
    function openEdit(goal) {
      editingGoal = goal;
      isModalOpen = true;
    }
    async function deleteGoal(goal) {
      const confirmMessage = store_get($$store_subs ??= {}, "$t", t)("programs.goals.delete_confirm");
      if (!confirm(confirmMessage)) return;
      await programGoalApi.deleteGoal(programId, goal.id);
    }
    function summarizeDeadline(goal) {
      if (goal.deadlineKind === "none") return store_get($$store_subs ??= {}, "$t", t)("programs.goals.lms.no_deadline");
      if (goal.deadlineKind === "absolute" && goal.deadlineDate) {
        return new Date(goal.deadlineDate).toLocaleDateString();
      }
      if (goal.deadlineKind === "relative_to_join" && goal.relativeDays) {
        return `+${goal.relativeDays}d after join`;
      }
      if (goal.deadlineKind === "recurring" && goal.recurringMonths) {
        return `Repeats every ${goal.recurringMonths}mo`;
      }
      return store_get($$store_subs ??= {}, "$t", t)("programs.goals.lms.no_deadline");
    }
    function totalLearners(goal) {
      return Object.values(goal.statusCounts ?? {}).reduce((sum, value) => sum + (value ?? 0), 0);
    }
    function statusValue(goal, status) {
      return goal.statusCounts?.[status] ?? 0;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<section><div class="mb-3 flex items-start justify-between gap-3"><div><h2 class="text-sm font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.heading"))}</h2> <p class="ui:text-muted-foreground mt-1 text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.description"))}</p></div> `);
      if (canManage) {
        $$renderer3.push("<!--[-->");
        Button($$renderer3, {
          variant: "secondary",
          onclick: openCreate,
          children: ($$renderer4) => {
            Plus($$renderer4, { size: 16 });
            $$renderer4.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.add"))}`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div> `);
      if (goals.length === 0) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="rounded-md border p-6 text-center"><p class="text-sm font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.empty_title"))}</p> <p class="ui:text-muted-foreground mt-1 text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.empty_description"))}</p></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="flex flex-col gap-3"><!--[-->`);
        const each_array = ensure_array_like(goals);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let goal = each_array[$$index];
          const total = totalLearners(goal);
          const completed = statusValue(goal, "completed");
          const overdue = statusValue(goal, "overdue");
          const atRisk = statusValue(goal, "at_risk");
          $$renderer3.push(`<div class="flex flex-col gap-3 rounded-md border p-4"><div class="flex items-start justify-between gap-3"><div class="min-w-0"><div class="flex flex-wrap items-center gap-2"><p class="font-medium">${escape_html(goal.title)}</p> `);
          Badge($$renderer3, {
            variant: "outline",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`programs.goals.type.${goal.type}`))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div> `);
          if (goal.description) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="ui:text-muted-foreground mt-1 text-sm">${escape_html(goal.description)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <p class="ui:text-muted-foreground mt-2 text-xs">${escape_html(goal.courseIds.length)} courses · ${escape_html(summarizeDeadline(goal))}</p></div> `);
          if (canManage) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="flex items-center gap-1">`);
            Icon_button($$renderer3, {
              onclick: () => openEdit(goal),
              children: ($$renderer4) => {
                Pencil($$renderer4, { size: 16 });
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> `);
            Icon_button($$renderer3, {
              onclick: () => deleteGoal(goal),
              children: ($$renderer4) => {
                Trash($$renderer4, { size: 16 });
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="grid grid-cols-2 gap-2 sm:grid-cols-4"><div class="rounded border p-2 text-center"><p class="ui:text-muted-foreground text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.status.completed"))}</p> <p class="text-base font-semibold">${escape_html(completed)}/${escape_html(total)}</p></div> <div class="rounded border p-2 text-center"><p class="ui:text-muted-foreground text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.status.in_progress"))}</p> <p class="text-base font-semibold">${escape_html(statusValue(goal, "in_progress"))}</p></div> <div${attr_class(`rounded border p-2 text-center ${stringify(atRisk > 0 ? "bg-amber-50" : "")}`)}><p class="ui:text-muted-foreground text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.status.at_risk"))}</p> <p class="text-base font-semibold">${escape_html(atRisk)}</p></div> <div${attr_class(`rounded border p-2 text-center ${stringify(overdue > 0 ? "bg-red-50" : "")}`)}><p class="ui:text-muted-foreground text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.status.overdue"))}</p> <p class="text-base font-semibold">${escape_html(overdue)}</p></div></div></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
      $$renderer3.push(`<!--]--></section> `);
      Goal_form_modal($$renderer3, {
        programId,
        goal: editingGoal,
        onClose: () => isModalOpen = false,
        get open() {
          return isModalOpen;
        },
        set open($$value) {
          isModalOpen = $$value;
          $$settled = false;
        }
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
    let { data } = $$props;
    const programId = data.programId;
    let name = "";
    let description = "";
    let status = "ACTIVE";
    let isSaving = false;
    const currentMemberRole = programApi.members.find((m) => m.profileId === store_get($$store_subs ??= {}, "$profile", profile).id)?.roleId ?? null;
    const canManageGoals = Boolean(store_get($$store_subs ??= {}, "$isOrgAdmin", isOrgAdmin)) || currentMemberRole === ROLE.ADMIN || currentMemberRole === ROLE.TUTOR;
    const statusOptions = [
      {
        value: "ACTIVE",
        label: store_get($$store_subs ??= {}, "$t", t)("programs.status.active") || "Active"
      },
      {
        value: "INACTIVE",
        label: store_get($$store_subs ??= {}, "$t", t)("programs.status.inactive") || "Inactive"
      },
      {
        value: "ARCHIVED",
        label: store_get($$store_subs ??= {}, "$t", t)("programs.status.archived") || "Archived"
      }
    ];
    const hasUnsavedChanges = (() => {
      const currentProgram = programApi.program;
      if (!currentProgram) {
        return false;
      }
      return name.trim() !== currentProgram.name || description.trim() !== (currentProgram.description ?? "") || status !== (currentProgram.status ?? "ACTIVE");
    })();
    async function handleSave() {
      isSaving = true;
      try {
        await programApi.updateProgram(programId, {
          name: name.trim() || void 0,
          description: description.trim() || null,
          status
        });
      } finally {
        isSaving = false;
      }
    }
    async function handleDelete() {
      if (!confirm(store_get($$store_subs ??= {}, "$t", t)("programs.settings.confirm_delete") || "Are you sure you want to delete this program? This cannot be undone.")) {
        return;
      }
      await programApi.deleteProgram(programId);
      goto(resolve(`${store_get($$store_subs ??= {}, "$currentOrgPath", currentOrgPath)}/programs`, {}));
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Page($$renderer3, {
        class: "mx-auto flex w-[90%] px-4 md:max-w-2xl lg:max-w-3xl",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Page_header($$renderer4, {
            class: "sticky top-13 z-10 bg-white",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Page_header_content($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Page_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.sidebar.settings") || "Settings")}`);
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
                  Button($$renderer6, {
                    variant: "secondary",
                    loading: isSaving,
                    disabled: isSaving || !hasUnsavedChanges,
                    onclick: handleSave,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.settings.save") || "Save Changes")}`);
                    },
                    $$slots: { default: true }
                  });
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
              $$renderer5.push(`<div class="w-full px-4 py-6"><div class="flex flex-col gap-6"><section><h2 class="mb-4 text-sm font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.settings.general") || "General")}</h2> <div class="flex flex-col gap-4"><div class="flex flex-col gap-1.5">`);
              Label($$renderer5, {
                for: "prog-name",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.settings.name_label") || "Name")} *`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Input($$renderer5, {
                id: "prog-name",
                maxlength: 255,
                get value() {
                  return name;
                },
                set value($$value) {
                  name = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----></div> <div class="flex flex-col gap-1.5">`);
              Label($$renderer5, {
                for: "prog-desc",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.settings.description_label") || "Description")}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Textarea($$renderer5, {
                id: "prog-desc",
                rows: 4,
                maxlength: 2e3,
                get value() {
                  return description;
                },
                set value($$value) {
                  description = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----></div> <div class="flex flex-col gap-1.5">`);
              Label($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.settings.status_label") || "Status")}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Root($$renderer5, {
                type: "single",
                get value() {
                  return status;
                },
                set value($$value) {
                  status = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Select_trigger($$renderer6, {
                    class: "w-48",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(statusOptions.find((o) => o.value === status)?.label)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Select_content($$renderer6, {
                    style: "z-index: 500 !important",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!--[-->`);
                      const each_array = ensure_array_like(statusOptions);
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let option = each_array[$$index];
                        $$renderer7.push(`<!---->`);
                        Select_item($$renderer7, {
                          value: option.value,
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(option.label)}`);
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
              $$renderer5.push(`<!----></div></div></section> `);
              Separator($$renderer5, {});
              $$renderer5.push(`<!----> `);
              Goals_section($$renderer5, { programId, canManage: canManageGoals });
              $$renderer5.push(`<!----> `);
              Separator($$renderer5, {});
              $$renderer5.push(`<!----> <section><h2 class="mb-1 text-sm font-semibold text-red-600">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.settings.danger_zone") || "Danger Zone")}</h2> <p class="text-muted-foreground mb-4 text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.settings.delete_description") || "Once deleted, this program and all its data cannot be recovered.")}</p> `);
              Button($$renderer5, {
                variant: "destructive",
                onclick: handleDelete,
                disabled: programApi.isLoading,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.settings.delete") || "Delete Program")}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></section></div></div>`);
            };
            Page_body($$renderer4, { child, $$slots: { child: true } });
          }
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
//# sourceMappingURL=_page.svelte-ByRBam0S.js.map
