import { a as store_get, u as unsubscribe_stores, h as head, n as escape_html, c as bind_props, f as ensure_array_like, b as spread_props } from './index2-Eg0dVEDW.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, c as Page_body, b as Page_title } from './page-title-CsoF4Ebl.js';
import './index6-DijlZyMe.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import { B as Button } from './button-McsHA0hU.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { G as Goal } from './goal-C_iaeEkX.js';
import { Z as SvelteSet } from './create-id-D7gdjJzW.js';
import { t } from './translations-BxDrjLWK.js';
import { p as programApi } from './program.svelte-DzKpOc1U.js';
import './index4-DxtvI9Cx.js';
import './org-BIDTy0Q0.js';
import './program-_gJE-tXQ.js';
import { P as Programs } from './programs-Bx5_cLjb.js';
import { R as Root, D as Dialog_content } from './index7-moivQoE0.js';
import { I as Input } from './input-CkarY5WD.js';
import { T as Textarea } from './textarea-CfVjMEtO.js';
import { L as Label } from './label-CXfFBnqp.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-BMWmXTce.js';
import { D as Dialog_description } from './dialog-description-Ue7RvU-C.js';
import { D as Dialog_footer } from './dialog-footer-DCoQXX2J.js';
import { R as Root$1, P as Popover_trigger, a as Popover_content } from './index9-BwUcGQXA.js';
import { T as Toggle_group } from './toggle-group-DvhNC--2.js';
import { T as Toggle_group_item } from './toggle-group-item-BLEzxLjD.js';
import { C as Checkbox } from './checkbox-DZ3KH0FC.js';
import { I as Icon_button } from './icon-button-De7MyFOi.js';
import { F as Funnel } from './funnel-ChFWBndh.js';
import { P as Plus } from './plus-CrIMYHIn.js';
import './utils2-DPSDgWhA.js';
import './index14-HMlD0kYH.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './empty-media-ClSn1CG9.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import './app-DrlCEKij.js';
import './content-BYLGOVzm.js';
import './store-D_AYzDdq.js';
import './base.svelte-C2lk8LDX.js';
import 'zod/v4';
import './shared-server-DaWdgxVh.js';
import 'lodash/merge.js';
import 'zod';
import './resource-list-group-Cn5yrUeL.js';
import './resource-list-row-DOW12fib.js';
import './item-CUOTGwjL.js';
import './page-body-header-BoRdo4AM.js';
import './search3-D8xoPsxt.js';
import './input-group-input-BlASI7k-.js';
import './input-group-button-BAHNvNdh.js';
import './x2-B8ExpX8J.js';
import './search-DbgrMZ24.js';
import 'pluralize';
import './server3-VLoL706W.js';
import './routing-Cz2vwfLK.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import './exports-DiyTWREe.js';
import './badge-DTmoBcZS.js';
import './dialog-BVhwOzzC.js';
import './dialog-content-DTG9QsOx.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './dialog-title-Cob84UGI.js';
import './dialog-description2-7SjLAH6Y.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './floating-layer-anchor-g9tHJXH3.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './clone-u51BKwOQ.js';
import './hidden-input-D1JyMc-e.js';
import './sr-only-styles-C-iucSJr.js';
import './check-92w5ryLF.js';
import './minus-C_S1F5ho.js';
import './index13-C4Mtu7Q0.js';
import './Icon-BfkBTjtA.js';

function Create_program_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { open = false } = $$props;
    let name = "";
    let description = "";
    async function handleCreate() {
      if (!name.trim()) return;
      await programApi.createProgram({
        name: name.trim(),
        description: description.trim() || void 0
      });
      name = "";
      description = "";
      open = false;
    }
    function handleCancel() {
      name = "";
      description = "";
      open = false;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
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
            class: "max-w-md",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.create_modal.title") || "Create Program")}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Dialog_description($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.create_modal.description") || "Add a new certification or compliance program.")}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="flex flex-col gap-4 py-2"><div class="flex flex-col gap-1.5">`);
              Label($$renderer5, {
                for: "program-name",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.create_modal.name_label") || "Name")} *`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Input($$renderer5, {
                id: "program-name",
                placeholder: store_get($$store_subs ??= {}, "$t", t)("programs.create_modal.name_placeholder") || "e.g. OSHA Safety Certification",
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
                for: "program-description",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.create_modal.description_label") || "Description")}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Textarea($$renderer5, {
                id: "program-description",
                placeholder: store_get($$store_subs ??= {}, "$t", t)("programs.create_modal.description_placeholder") || "What is this program about?",
                rows: 3,
                maxlength: 2e3,
                get value() {
                  return description;
                },
                set value($$value) {
                  description = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----></div></div> <!---->`);
              Dialog_footer($$renderer5, {
                children: ($$renderer6) => {
                  Button($$renderer6, {
                    variant: "outline",
                    onclick: handleCancel,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("app.cancel") || "Cancel")}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> `);
                  Button($$renderer6, {
                    onclick: handleCreate,
                    disabled: !name.trim() || programApi.isLoading,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.create_modal.submit") || "Create")}`);
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
    bind_props($$props, { open });
  });
}
const DEFAULT_PROGRAM_SORT = "name";
const DEFAULT_PROGRAM_SORT_ORDER = "asc";
function Program_filter_popover($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      sortKey = DEFAULT_PROGRAM_SORT,
      selectedOrder = DEFAULT_PROGRAM_SORT_ORDER,
      selectedStatuses = [],
      statusOptions = [],
      sortOptions = [],
      onToggleStatus = () => {
      },
      onClearFilters = () => {
      }
    } = $$props;
    let isOpen = false;
    const hasActiveFilters = sortKey !== DEFAULT_PROGRAM_SORT || selectedOrder !== DEFAULT_PROGRAM_SORT_ORDER || selectedStatuses.length > 0;
    function isStatusSelected(status) {
      return selectedStatuses.includes(status);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root$1($$renderer3, {
        get open() {
          return isOpen;
        },
        set open($$value) {
          isOpen = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          {
            let child = function($$renderer5, { props }) {
              $$renderer5.push(`<div class="relative">`);
              Icon_button($$renderer5, spread_props([
                props,
                {
                  "aria-label": store_get($$store_subs ??= {}, "$t", t)("programs.filters.filter"),
                  tooltip: store_get($$store_subs ??= {}, "$t", t)("programs.filters.filter"),
                  children: ($$renderer6) => {
                    Funnel($$renderer6, { size: 16 });
                  },
                  $$slots: { default: true }
                }
              ]));
              $$renderer5.push(`<!----> `);
              if (hasActiveFilters) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<span class="ui:bg-primary absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-white" aria-hidden="true"></span>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--></div>`);
            };
            Popover_trigger($$renderer4, { child, $$slots: { child: true } });
          }
          $$renderer4.push(`<!----> <!---->`);
          Popover_content($$renderer4, {
            align: "end",
            class: "w-[360px] p-3",
            children: ($$renderer5) => {
              $$renderer5.push(`<div class="space-y-4"><div class="flex items-center justify-between gap-2"><p class="text-sm font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.filters.popover_title"))}</p> `);
              Button($$renderer5, {
                variant: "link",
                class: "h-auto p-0",
                onclick: onClearFilters,
                disabled: !hasActiveFilters,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.filters.clear_all"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div> <div class="space-y-2"><p class="ui:text-muted-foreground text-xs font-semibold uppercase">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.filters.sort"))}</p> <div class="flex flex-wrap gap-2"><!--[-->`);
              const each_array = ensure_array_like(sortOptions);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let option = each_array[$$index];
                Button($$renderer5, {
                  type: "button",
                  size: "sm",
                  variant: sortKey === option.value ? "secondary" : "outline",
                  onclick: () => sortKey = option.value,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(option.label)}`);
                  },
                  $$slots: { default: true }
                });
              }
              $$renderer5.push(`<!--]--></div></div> <div class="space-y-2"><p class="ui:text-muted-foreground text-xs font-semibold uppercase">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.filters.order"))}</p> <!---->`);
              Toggle_group($$renderer5, {
                type: "single",
                variant: "outline",
                size: "sm",
                value: selectedOrder,
                onValueChange: (value) => {
                  if (value === "asc" || value === "desc") {
                    selectedOrder = value;
                  }
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Toggle_group_item($$renderer6, {
                    value: "asc",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.filters.ascending"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Toggle_group_item($$renderer6, {
                    value: "desc",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.filters.descending"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div> <div class="space-y-3"><p class="ui:text-muted-foreground text-xs font-semibold uppercase">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.filters.status"))}</p> <div class="space-y-2"><!--[-->`);
              const each_array_1 = ensure_array_like(statusOptions);
              for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                let option = each_array_1[$$index_1];
                $$renderer5.push(`<label class="hover:ui:bg-muted/30 flex cursor-pointer items-center rounded-md border px-3 py-2"><div class="flex items-center gap-2">`);
                Checkbox($$renderer5, {
                  checked: isStatusSelected(option.value),
                  onCheckedChange: (checked) => onToggleStatus(option.value, Boolean(checked))
                });
                $$renderer5.push(`<!----> <span class="text-sm">${escape_html(option.label)}</span></div></label>`);
              }
              $$renderer5.push(`<!--]--></div></div></div>`);
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
    bind_props($$props, { sortKey, selectedOrder });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    let showCreateModal = false;
    let searchValue = "";
    let sortKey = DEFAULT_PROGRAM_SORT;
    let selectedOrder = DEFAULT_PROGRAM_SORT_ORDER;
    let selectedStatuses = [];
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
    const sortOptions = [
      {
        value: "name",
        label: store_get($$store_subs ??= {}, "$t", t)("programs.filters.sort_name") || "Name"
      },
      {
        value: "courses",
        label: store_get($$store_subs ??= {}, "$t", t)("programs.filters.sort_courses") || "Courses"
      },
      {
        value: "students",
        label: store_get($$store_subs ??= {}, "$t", t)("programs.filters.sort_students") || "Students"
      },
      {
        value: "status",
        label: store_get($$store_subs ??= {}, "$t", t)("programs.filters.sort_status") || "Status"
      }
    ];
    const filteredPrograms = (() => {
      const normalizedSearch = searchValue.trim().toLowerCase();
      const sourcePrograms = programApi.programs.filter((program) => {
        const matchesSearch = !normalizedSearch || [program.name, program.description].some((value) => value?.toLowerCase().includes(normalizedSearch));
        const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(program.status);
        return matchesSearch && matchesStatus;
      });
      const sortedPrograms = [...sourcePrograms];
      return sortedPrograms.sort((firstProgram, secondProgram) => {
        let comparison = 0;
        if (sortKey === "name") {
          comparison = firstProgram.name.localeCompare(secondProgram.name);
        } else if (sortKey === "courses") {
          comparison = firstProgram.courseCount - secondProgram.courseCount;
        } else if (sortKey === "students") {
          comparison = firstProgram.studentCount - secondProgram.studentCount;
        } else if (sortKey === "status") {
          comparison = firstProgram.status.localeCompare(secondProgram.status);
        }
        return selectedOrder === "asc" ? comparison : comparison * -1;
      });
    })();
    function toggleStatus(status, checked) {
      const nextStatuses = new SvelteSet(selectedStatuses);
      if (checked) {
        nextStatuses.add(status);
      } else {
        nextStatuses.delete(status);
      }
      selectedStatuses = Array.from(nextStatuses);
    }
    function clearFilters() {
      sortKey = DEFAULT_PROGRAM_SORT;
      selectedOrder = DEFAULT_PROGRAM_SORT_ORDER;
      selectedStatuses = [];
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("14edsgw", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.page_title") || "Programs")} - ClassroomIO</title>`);
        });
      });
      $$renderer3.push(`<!---->`);
      Page($$renderer3, {
        class: "w-full",
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
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.heading") || "Programs")}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Page_subtitle($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.description") || "Give a group of people access to multiple courses, like a class")}`);
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
                    onclick: () => showCreateModal = true,
                    children: ($$renderer7) => {
                      Plus($$renderer7, { size: 16 });
                      $$renderer7.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.create") || "New Program")}`);
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
              if (!programApi.isLoading && filteredPrograms.length === 0 && !searchValue.trim() && selectedStatuses.length === 0) {
                $$renderer5.push("<!--[-->");
                Empty($$renderer5, {
                  title: store_get($$store_subs ??= {}, "$t", t)("programs.empty_title") || "No programs yet",
                  description: store_get($$store_subs ??= {}, "$t", t)("programs.empty_description") || "Create your first program to get started.",
                  icon: Goal,
                  variant: "page",
                  children: ($$renderer6) => {
                    Button($$renderer6, {
                      onclick: () => showCreateModal = true,
                      children: ($$renderer7) => {
                        Plus($$renderer7, { size: 16 });
                        $$renderer7.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.create") || "New Program")}`);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              } else {
                $$renderer5.push("<!--[!-->");
                {
                  let filterControls = function($$renderer6) {
                    Program_filter_popover($$renderer6, {
                      selectedStatuses,
                      statusOptions,
                      sortOptions,
                      onToggleStatus: toggleStatus,
                      onClearFilters: clearFilters,
                      get sortKey() {
                        return sortKey;
                      },
                      set sortKey($$value) {
                        sortKey = $$value;
                        $$settled = false;
                      },
                      get selectedOrder() {
                        return selectedOrder;
                      },
                      set selectedOrder($$value) {
                        selectedOrder = $$value;
                        $$settled = false;
                      }
                    });
                  };
                  Programs($$renderer5, {
                    programs: filteredPrograms,
                    isLoading: programApi.isLoading && filteredPrograms.length === 0,
                    emptyTitle: store_get($$store_subs ??= {}, "$t", t)("programs.empty_title") || "No programs yet",
                    emptyDescription: searchValue.trim() || selectedStatuses.length > 0 ? store_get($$store_subs ??= {}, "$t", t)("programs.no_matching_programs") || "No programs match your filters." : store_get($$store_subs ??= {}, "$t", t)("programs.empty_description") || "Create your first program to get started.",
                    get searchValue() {
                      return searchValue;
                    },
                    set searchValue($$value) {
                      searchValue = $$value;
                      $$settled = false;
                    },
                    filterControls,
                    $$slots: { filterControls: true }
                  });
                }
              }
              $$renderer5.push(`<!--]-->`);
            };
            Page_body($$renderer4, { child, $$slots: { child: true } });
          }
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Create_program_modal($$renderer3, {
        get open() {
          return showCreateModal;
        },
        set open($$value) {
          showCreateModal = $$value;
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

export { _page as default };
//# sourceMappingURL=_page.svelte-DRSLrhrU.js.map
