import { u as unsubscribe_stores, c as bind_props, a as store_get, n as escape_html, f as ensure_array_like, d as attr } from './index2-Eg0dVEDW.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import { B as Button, S as Spinner } from './button-McsHA0hU.js';
import { t } from './translations-BxDrjLWK.js';
import { X } from './x-BRZyLJGp.js';
import { o as onDestroy } from './index-server-CicpYXzh.js';
import { Z as SvelteSet } from './create-id-D7gdjJzW.js';
import { M as Multi_select_list, C as Checkbox_field } from './multi-select-list-D-Hx0T8r.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import './index6-DijlZyMe.js';
import { F as Field_description } from './field-description-yPSV800w.js';
import './field-BxJz8KV9.js';
import { F as Field_group } from './field-group-CsZtrba5.js';
import { F as Field_set, a as Field_legend } from './field-set-CvEL423F.js';
import { T as Textarea_field } from './textarea-field-DcFq3Zr9.js';

function Tutor_select_section($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      tutors,
      selectedIds = void 0,
      isLoading,
      titleKey = "course.navItem.people.invite_modal.invite",
      emptySelectionKey = "course.navItem.people.invite_modal.select",
      loadingKey = "course.navItem.people.invite_modal.loading",
      helperTextKey = "course.navItem.people.invite_modal.to_add",
      helperLinkKey = "course.navItem.people.invite_modal.go_to",
      helperHref = "#"
    } = $$props;
    const selectedTutors = tutors.filter((tutor) => selectedIds.includes(tutor.id.toString()));
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="rounded-md border p-4"><p class="mb-2 text-base font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)(titleKey))}</p> <!---->`);
      Root($$renderer3, {
        type: "multiple",
        disabled: isLoading,
        get value() {
          return selectedIds;
        },
        set value($$value) {
          selectedIds = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Select_trigger($$renderer4, {
            class: "w-full",
            children: ($$renderer5) => {
              $$renderer5.push(`<div>`);
              if (selectedTutors.length > 0) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="flex flex-wrap gap-1"><!--[-->`);
                const each_array = ensure_array_like(selectedTutors);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let tutor = each_array[$$index];
                  Badge($$renderer5, {
                    variant: "secondary",
                    class: "flex items-center gap-1",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(tutor.text)} `);
                      Button($$renderer6, {
                        type: "button",
                        size: "icon-sm",
                        variant: "ghost",
                        onclick: (event) => {
                          event.stopPropagation();
                          selectedIds = selectedIds.filter((id) => id !== tutor.id.toString());
                        },
                        class: "h-5 w-5 rounded-sm hover:bg-gray-200",
                        "aria-label": `Remove ${tutor.text}`,
                        children: ($$renderer7) => {
                          X($$renderer7, { size: 14 });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                }
                $$renderer5.push(`<!--]--></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
                $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)(emptySelectionKey))}`);
              }
              $$renderer5.push(`<!--]--></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Select_content($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!--[-->`);
              const each_array_1 = ensure_array_like(tutors);
              for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                let tutor = each_array_1[$$index_1];
                $$renderer5.push(`<!---->`);
                Select_item($$renderer5, {
                  value: tutor.id.toString(),
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(tutor.text)}`);
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
      $$renderer3.push(`<!----> `);
      if (isLoading) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="mt-2 flex items-center gap-2">`);
        Spinner($$renderer3, { class: "h-4 w-4" });
        $$renderer3.push(`<!----> <span class="text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)(loadingKey))}</span></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<span class="mt-2 block text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)(helperTextKey))} <a${attr("href", helperHref)} class="ui:text-primary underline">${escape_html(store_get($$store_subs ??= {}, "$t", t)(helperLinkKey))}</a></span>`);
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { selectedIds });
  });
}
function Existing_students_section($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      students,
      isLoading = false,
      onSearchValueChange,
      onAssign,
      headingKey = "course.navItem.people.invite_modal.existing_students_title",
      emptyMatchingKey = "course.navItem.people.invite_modal.no_matching_existing_students",
      emptyDefaultKey = "course.navItem.people.invite_modal.no_existing_students",
      searchPlaceholderKey = "course.navItem.people.invite_modal.existing_students_search",
      notifyLabelKey = "course.navItem.people.invite_modal.notify_existing_students",
      submitKey = "course.navItem.people.invite_modal.grant_access",
      selectAtLeastOneKey = "course.navItem.people.invite_modal.select_at_least_one_student"
    } = $$props;
    let searchValue = "";
    let sendEmail = true;
    let isSubmitting = false;
    let searchTimeout = null;
    const SEARCH_DEBOUNCE_MS = 350;
    const selectedProfileIds = new SvelteSet();
    const sortedStudents = (() => [...students].sort((a, b) => (a.name || a.email || "").localeCompare(b.name || b.email || "", void 0, { sensitivity: "base" })))();
    const selectedCount = selectedProfileIds.size;
    const emptyMessage = searchValue.trim() ? store_get($$store_subs ??= {}, "$t", t)(emptyMatchingKey) : store_get($$store_subs ??= {}, "$t", t)(emptyDefaultKey);
    const multiSelectItems = sortedStudents.filter((student) => Boolean(student.profileId)).map((student) => ({
      id: student.profileId,
      label: student.name || student.email,
      description: student.email
    }));
    function toggleStudent(profileId) {
      if (selectedProfileIds.has(profileId)) {
        selectedProfileIds.delete(profileId);
        return;
      }
      selectedProfileIds.add(profileId);
    }
    function handleSearch(value) {
      searchValue = value;
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      if (!value.trim()) {
        void onSearchValueChange(value);
        return;
      }
      searchTimeout = setTimeout(
        () => {
          void onSearchValueChange(value);
        },
        SEARCH_DEBOUNCE_MS
      );
    }
    async function assignStudents() {
      if (selectedProfileIds.size === 0) {
        snackbar.error(selectAtLeastOneKey);
        return;
      }
      isSubmitting = true;
      try {
        await onAssign([...selectedProfileIds], sendEmail);
        selectedProfileIds.clear();
        searchValue = "";
      } finally {
        isSubmitting = false;
      }
    }
    onDestroy(() => {
      if (!searchTimeout) {
        return;
      }
      clearTimeout(searchTimeout);
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="space-y-2"><div class="max-h-72 overflow-y-auto">`);
      {
        let headingSnippet = function($$renderer4) {
          $$renderer4.push(`<p class="ui:text-sm ui:font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)(headingKey))} (${escape_html(multiSelectItems.length)}) `);
          if (selectedCount > 0) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<span class="ui:text-muted-foreground text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("audience.selected_count", { count: selectedCount }))}</span>`);
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]--></p>`);
        };
        Multi_select_list($$renderer3, {
          class: "border-0",
          emptyMessage,
          items: multiSelectItems,
          isLoading,
          isSelected: (id) => selectedProfileIds.has(id),
          onSearchValueChange: handleSearch,
          onToggle: (id) => toggleStudent(id),
          namePrefix: "existing-student",
          listClass: "max-h-60",
          searchPlaceholder: store_get($$store_subs ??= {}, "$t", t)(searchPlaceholderKey),
          get searchValue() {
            return searchValue;
          },
          set searchValue($$value) {
            searchValue = $$value;
            $$settled = false;
          },
          headingSnippet,
          $$slots: { headingSnippet: true }
        });
      }
      $$renderer3.push(`<!----></div> `);
      Checkbox_field($$renderer3, {
        name: "notify-existing-students",
        label: store_get($$store_subs ??= {}, "$t", t)(notifyLabelKey),
        get checked() {
          return sendEmail;
        },
        set checked($$value) {
          sendEmail = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Button($$renderer3, {
        variant: "secondary",
        onclick: assignStudents,
        loading: isSubmitting,
        disabled: isLoading || isSubmitting,
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(submitKey))}`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div>`);
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
function Bulk_email_section($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      onInvite,
      titleKey = "course.navItem.people.invite_modal.invite_new_students_title",
      descriptionKey = "course.navItem.people.invite_modal.invite_new_students_description",
      submitKey = "course.navItem.people.invite_modal.invite_new_students",
      noEmailsKey = "audience.import.snackbar_no_emails"
    } = $$props;
    let recipientCsv = "";
    let sendInviteEmails = true;
    let isSubmitting = false;
    async function inviteStudents() {
      if (!recipientCsv.trim()) {
        snackbar.error(noEmailsKey);
        return;
      }
      isSubmitting = true;
      try {
        await onInvite(recipientCsv, sendInviteEmails);
        recipientCsv = "";
      } finally {
        isSubmitting = false;
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Field_set($$renderer3, {
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Field_legend($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(titleKey))}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Field_description($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(descriptionKey))}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Field_group($$renderer4, {
            children: ($$renderer5) => {
              Textarea_field($$renderer5, {
                label: store_get($$store_subs ??= {}, "$t", t)("audience.import.emails_label"),
                rows: 4,
                className: "w-full",
                placeholder: store_get($$store_subs ??= {}, "$t", t)("audience.import.emails_placeholder"),
                get value() {
                  return recipientCsv;
                },
                set value($$value) {
                  recipientCsv = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----> `);
              Checkbox_field($$renderer5, {
                name: "send-invite-emails",
                label: store_get($$store_subs ??= {}, "$t", t)("audience.import.send_email"),
                get checked() {
                  return sendInviteEmails;
                },
                set checked($$value) {
                  sendInviteEmails = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Button($$renderer4, {
            variant: "secondary",
            onclick: inviteStudents,
            loading: isSubmitting,
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(submitKey))}`);
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

export { Bulk_email_section as B, Existing_students_section as E, Tutor_select_section as T };
//# sourceMappingURL=bulk-email-section-4rpfNriS.js.map
