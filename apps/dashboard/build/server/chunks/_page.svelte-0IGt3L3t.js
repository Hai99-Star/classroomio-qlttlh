import { h as head, n as escape_html, a as store_get, b as spread_props, f as ensure_array_like, m as attr_style, u as unsubscribe_stores, c as bind_props } from './index2-Eg0dVEDW.js';
import { B as Button } from './button-McsHA0hU.js';
import { B as Button_group } from './button-group-B7_AGlHf.js';
import { c as cn } from './index6-DijlZyMe.js';
import { S as Separator } from './separator-C8wJJtqC.js';
import { R as Root, D as Dialog_content } from './index7-D3vVTB5p.js';
import { R as Root$1, D as Dropdown_menu_trigger, a as Dropdown_menu_content, b as Dropdown_menu_item } from './index12-DrKMqqv6.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import { R as Root$3, P as Popover_trigger, a as Popover_content } from './index9-C_LBahdk.js';
import { R as Root$2, S as Select_trigger, a as Select_content, b as Select_item } from './index10-CThLLXbL.js';
import { T as Table, a as Table_header, d as Table_body, b as Table_row, c as Table_head, e as Table_cell } from './table-row-D0a1OYFI.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { I as Icon_button } from './icon-button-Bm-ZFVBt.js';
import { I as Input_field } from './input-field-w4kZespe.js';
import { T as Textarea_field } from './textarea-field-DcFq3Zr9.js';
import { t as tagApi } from './tag.svelte-BL81RRiY.js';
import { t } from './translations-BxDrjLWK.js';
import { T as TAG_COLOR_OPTIONS } from './tag2-BBx_7Ec0.js';
import { C as Chevron_down } from './chevron-down-Nb-i_SUX.js';
import { T as Tag } from './tag-DqwGAy0Q.js';
import { E as Ellipsis_vertical } from './ellipsis-vertical-DuaSiu3W.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-D1aNdwc5.js';
import { D as Dialog_footer } from './dialog-footer-DCoQXX2J.js';
import './utils2-DPSDgWhA.js';
import './index14-HMlD0kYH.js';
import './create-id-D7gdjJzW.js';
import './dialog-BqIvyJui.js';
import './dialog-content-7tRy2FJ1.js';
import './scroll-lock-CqTUXsNd.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './x2-B8ExpX8J.js';
import './popper-layer-force-mount-H2EBI_WO.js';
import './floating-layer-anchor-CBXkOzVQ.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './mounted-B958bjT3.js';
import './chevron-down2-mQy71LmC.js';
import './check-92w5ryLF.js';
import './hidden-input-D1JyMc-e.js';
import './sr-only-styles-C-iucSJr.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './empty-media-ClSn1CG9.js';
import './index13-ubjsmMp7.js';
import './field-description-yPSV800w.js';
import './field-label-BEb0I1_z.js';
import './label-CXfFBnqp.js';
import './field-BxJz8KV9.js';
import './input-CkarY5WD.js';
import './textarea-CfVjMEtO.js';
import './index4-CY3O4yvX.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import './org-t71AQfHV.js';
import 'lodash/merge.js';
import './domains-D9J1UytB.js';
import './base.svelte-Bh2VVy5Z.js';
import 'zod/v4';
import './store-D_AYzDdq.js';
import '@sveltekit-i18n/parser-icu';
import 'zod';
import './Icon-BfkBTjtA.js';
import './dialog-title-DHgMN8vm.js';

function Button_group_separator($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      orientation = "vertical",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Separator($$renderer3, spread_props([
        {
          "data-slot": "button-group-separator",
          orientation,
          class: cn("ui:bg-input ui:relative ui:m-0! ui:self-stretch ui:data-[orientation=vertical]:h-auto", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Tags_admin($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { orgSlug } = $$props;
    let isTagModalOpen = false;
    let isTagGroupModalOpen = false;
    let tagGroupModalMode = "create";
    let editingGroupId = null;
    let tagModalMode = "create";
    let editingTagId = null;
    let tagName = "";
    let tagDescription = "";
    let tagGroupId = "";
    let tagColor = TAG_COLOR_OPTIONS[0];
    let groupName = "";
    let groupDescription = "";
    const hasTagGroups = tagApi.tagGroups.length > 0;
    function resetTagForm() {
      tagApi.reset();
      tagName = "";
      tagDescription = "";
      tagGroupId = tagApi.tagGroups[0]?.id ?? "";
      tagColor = TAG_COLOR_OPTIONS[0];
      editingTagId = null;
      tagModalMode = "create";
    }
    function openCreateTagModal() {
      resetTagForm();
      isTagModalOpen = true;
    }
    function openEditTagModal(tag) {
      tagApi.reset();
      tagModalMode = "edit";
      editingTagId = tag.id;
      tagName = tag.name;
      tagDescription = tag.description ?? "";
      tagGroupId = tag.groupId;
      tagColor = tag.color;
      isTagModalOpen = true;
    }
    function openCreateTagGroupModal() {
      tagApi.reset();
      tagGroupModalMode = "create";
      editingGroupId = null;
      groupName = "";
      groupDescription = "";
      isTagGroupModalOpen = true;
    }
    function openEditTagGroupModal(group) {
      tagApi.reset();
      tagGroupModalMode = "edit";
      editingGroupId = group.id;
      groupName = group.name;
      groupDescription = group.description ?? "";
      isTagGroupModalOpen = true;
    }
    async function handleTagGroupSubmit() {
      if (tagGroupModalMode === "edit" && editingGroupId) {
        const updated = await tagApi.updateTagGroup(editingGroupId, { name: groupName, description: groupDescription || void 0 });
        if (!updated) {
          return;
        }
        isTagGroupModalOpen = false;
        return;
      }
      const created = await tagApi.createTagGroup({ name: groupName, description: groupDescription || void 0 });
      if (!created) {
        return;
      }
      isTagGroupModalOpen = false;
      if (!tagGroupId && tagApi.tagGroups.length > 0) {
        tagGroupId = tagApi.tagGroups[0].id;
      }
    }
    async function handleTagSubmit() {
      if (tagModalMode === "edit" && editingTagId) {
        const updated = await tagApi.updateTag(editingTagId, {
          name: tagName,
          description: tagDescription || void 0,
          groupId: tagGroupId,
          color: tagColor
        });
        if (updated) {
          isTagModalOpen = false;
        }
        return;
      }
      const created = await tagApi.createTag({
        name: tagName,
        description: tagDescription || void 0,
        groupId: tagGroupId,
        color: tagColor
      });
      if (created) {
        isTagModalOpen = false;
      }
    }
    function getTagCoursesHref(tagSlug) {
      return `/org/${orgSlug}/courses?tags=${encodeURIComponent(tagSlug)}`;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("48fujy", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.page_title"))}</title>`);
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
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.heading"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Page_subtitle($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.page_subtitle"))}`);
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
                  $$renderer6.push(`<!---->`);
                  Button_group($$renderer6, {
                    children: ($$renderer7) => {
                      Button($$renderer7, {
                        onclick: openCreateTagModal,
                        disabled: !hasTagGroups,
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.create_tag"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> <!---->`);
                      Button_group_separator($$renderer7, {});
                      $$renderer7.push(`<!----> <!---->`);
                      Root$1($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->`);
                          {
                            let child = function($$renderer9, { props }) {
                              Button($$renderer9, spread_props([
                                props,
                                {
                                  size: "icon",
                                  "aria-label": store_get($$store_subs ??= {}, "$t", t)("tags_admin.create"),
                                  children: ($$renderer10) => {
                                    Chevron_down($$renderer10, { size: 16 });
                                  },
                                  $$slots: { default: true }
                                }
                              ]));
                            };
                            Dropdown_menu_trigger($$renderer8, { child, $$slots: { child: true } });
                          }
                          $$renderer8.push(`<!----> <!---->`);
                          Dropdown_menu_content($$renderer8, {
                            align: "end",
                            class: "w-56",
                            children: ($$renderer9) => {
                              $$renderer9.push(`<!---->`);
                              Dropdown_menu_item($$renderer9, {
                                onclick: openCreateTagModal,
                                disabled: !hasTagGroups,
                                children: ($$renderer10) => {
                                  $$renderer10.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.create_tag"))}`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer9.push(`<!----> <!---->`);
                              Dropdown_menu_item($$renderer9, {
                                onclick: openCreateTagGroupModal,
                                children: ($$renderer10) => {
                                  $$renderer10.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.create_group"))}`);
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
                  $$renderer6.push(`<!---->`);
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
              if (!tagApi.tagGroups.length) {
                $$renderer5.push("<!--[-->");
                Empty($$renderer5, {
                  title: store_get($$store_subs ??= {}, "$t", t)("tags_admin.empty.title"),
                  description: store_get($$store_subs ??= {}, "$t", t)("tags_admin.empty.description"),
                  icon: Tag,
                  variant: "page",
                  children: ($$renderer6) => {
                    Button($$renderer6, {
                      onclick: openCreateTagGroupModal,
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.create_group"))}`);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
              } else {
                $$renderer5.push("<!--[!-->");
                $$renderer5.push(`<div class="rounded-md border"><!---->`);
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
                                $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.table.tag"))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer8.push(`<!----> <!---->`);
                            Table_head($$renderer8, {
                              children: ($$renderer9) => {
                                $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.table.total_courses"))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer8.push(`<!----> <!---->`);
                            Table_head($$renderer8, {
                              children: ($$renderer9) => {
                                $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.table.description"))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer8.push(`<!----> <!---->`);
                            Table_head($$renderer8, {
                              children: ($$renderer9) => {
                                $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.table.category"))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer8.push(`<!----> <!---->`);
                            Table_head($$renderer8, {
                              class: "text-right",
                              children: ($$renderer9) => {
                                $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.table.action"))}`);
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
                        const each_array = ensure_array_like(tagApi.tagGroups);
                        for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
                          let group = each_array[$$index_1];
                          $$renderer7.push(`<!---->`);
                          Table_row($$renderer7, {
                            class: "group ui:bg-muted/20",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->`);
                              Table_cell($$renderer8, {
                                colspan: 5,
                                children: ($$renderer9) => {
                                  $$renderer9.push(`<div class="flex items-start justify-between gap-4 py-1"><div class="space-y-1"><p class="text-sm font-semibold">${escape_html(group.name)}</p> `);
                                  if (group.description) {
                                    $$renderer9.push("<!--[-->");
                                    $$renderer9.push(`<p class="ui:text-muted-foreground max-w-[320px] truncate text-xs">${escape_html(group.description)}</p>`);
                                  } else {
                                    $$renderer9.push("<!--[!-->");
                                  }
                                  $$renderer9.push(`<!--]--></div> <!---->`);
                                  Root$1($$renderer9, {
                                    children: ($$renderer10) => {
                                      $$renderer10.push(`<!---->`);
                                      Dropdown_menu_trigger($$renderer10, {
                                        class: "flex shrink-0 items-center justify-center",
                                        children: ($$renderer11) => {
                                          Icon_button($$renderer11, {
                                            variant: "outline",
                                            class: "pointer-events-none opacity-0 transition-opacity group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100",
                                            "aria-label": store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.actions_menu"),
                                            children: ($$renderer12) => {
                                              Ellipsis_vertical($$renderer12, { size: 16 });
                                            },
                                            $$slots: { default: true }
                                          });
                                        },
                                        $$slots: { default: true }
                                      });
                                      $$renderer10.push(`<!----> <!---->`);
                                      Dropdown_menu_content($$renderer10, {
                                        align: "end",
                                        children: ($$renderer11) => {
                                          $$renderer11.push(`<!---->`);
                                          Dropdown_menu_item($$renderer11, {
                                            onclick: () => openEditTagGroupModal(group),
                                            children: ($$renderer12) => {
                                              $$renderer12.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.edit_group"))}`);
                                            },
                                            $$slots: { default: true }
                                          });
                                          $$renderer11.push(`<!---->`);
                                        },
                                        $$slots: { default: true }
                                      });
                                      $$renderer10.push(`<!---->`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer9.push(`<!----></div>`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer8.push(`<!---->`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> `);
                          if (group.tags.length === 0) {
                            $$renderer7.push("<!--[-->");
                            $$renderer7.push(`<!---->`);
                            Table_row($$renderer7, {
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->`);
                                Table_cell($$renderer8, {
                                  colspan: 5,
                                  class: "ui:text-muted-foreground text-sm",
                                  children: ($$renderer9) => {
                                    $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.table.empty_group"))}`);
                                  },
                                  $$slots: { default: true }
                                });
                                $$renderer8.push(`<!---->`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!---->`);
                          } else {
                            $$renderer7.push("<!--[!-->");
                            $$renderer7.push(`<!--[-->`);
                            const each_array_1 = ensure_array_like(group.tags);
                            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
                              let tag = each_array_1[$$index];
                              $$renderer7.push(`<!---->`);
                              Table_row($$renderer7, {
                                class: "group",
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->`);
                                  Table_cell($$renderer8, {
                                    children: ($$renderer9) => {
                                      $$renderer9.push(`<div class="flex items-center gap-2"><span class="inline-block h-3 w-3 rounded-full border"${attr_style(`background-color: ${tag.color}`)} aria-hidden="true"></span> <span class="font-medium">${escape_html(tag.name)}</span></div>`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer8.push(`<!----> <!---->`);
                                  Table_cell($$renderer8, {
                                    children: ($$renderer9) => {
                                      Button($$renderer9, {
                                        variant: "link",
                                        class: "h-auto p-0",
                                        href: getTagCoursesHref(tag.slug),
                                        children: ($$renderer10) => {
                                          $$renderer10.push(`<!---->${escape_html(tag.courseCount)}
                           
                          ${escape_html(tag.courseCount === 1 ? store_get($$store_subs ??= {}, "$t", t)("tags_admin.table.course") : store_get($$store_subs ??= {}, "$t", t)("tags_admin.table.courses"))}`);
                                        },
                                        $$slots: { default: true }
                                      });
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer8.push(`<!----> <!---->`);
                                  Table_cell($$renderer8, {
                                    children: ($$renderer9) => {
                                      $$renderer9.push(`<p class="max-w-[320px] truncate">${escape_html(tag.description || store_get($$store_subs ??= {}, "$t", t)("tags_admin.common.not_available"))}</p>`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer8.push(`<!----> <!---->`);
                                  Table_cell($$renderer8, {
                                    children: ($$renderer9) => {
                                      $$renderer9.push(`<!---->${escape_html(group.name)}`);
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer8.push(`<!----> <!---->`);
                                  Table_cell($$renderer8, {
                                    class: "text-right",
                                    children: ($$renderer9) => {
                                      $$renderer9.push(`<!---->`);
                                      Root$1($$renderer9, {
                                        children: ($$renderer10) => {
                                          $$renderer10.push(`<!---->`);
                                          Dropdown_menu_trigger($$renderer10, {
                                            class: "inline-flex items-center justify-center",
                                            children: ($$renderer11) => {
                                              Icon_button($$renderer11, {
                                                variant: "outline",
                                                class: "pointer-events-none opacity-0 transition-opacity group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100",
                                                "aria-label": store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.actions_menu"),
                                                children: ($$renderer12) => {
                                                  Ellipsis_vertical($$renderer12, { size: 16 });
                                                },
                                                $$slots: { default: true }
                                              });
                                            },
                                            $$slots: { default: true }
                                          });
                                          $$renderer10.push(`<!----> <!---->`);
                                          Dropdown_menu_content($$renderer10, {
                                            align: "end",
                                            children: ($$renderer11) => {
                                              $$renderer11.push(`<!---->`);
                                              Dropdown_menu_item($$renderer11, {
                                                onclick: () => openEditTagModal(tag),
                                                children: ($$renderer12) => {
                                                  $$renderer12.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.edit_tag"))}`);
                                                },
                                                $$slots: { default: true }
                                              });
                                              $$renderer11.push(`<!---->`);
                                            },
                                            $$slots: { default: true }
                                          });
                                          $$renderer10.push(`<!---->`);
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
                            }
                            $$renderer7.push(`<!--]-->`);
                          }
                          $$renderer7.push(`<!--]-->`);
                        }
                        $$renderer7.push(`<!--]-->`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----></div>`);
              }
              $$renderer5.push(`<!--]-->`);
            };
            Page_body($$renderer4, { child, $$slots: { child: true } });
          }
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <!---->`);
      Root($$renderer3, {
        get open() {
          return isTagGroupModalOpen;
        },
        set open($$value) {
          isTagGroupModalOpen = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "sm:max-w-lg",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(tagGroupModalMode === "edit" ? "tags_admin.group_modal.edit_title" : "tags_admin.group_modal.create_title"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="space-y-4 py-2">`);
              Input_field($$renderer5, {
                label: store_get($$store_subs ??= {}, "$t", t)("tags_admin.group_modal.name"),
                errorMessage: tagApi.errors.name,
                autoFocus: true,
                get value() {
                  return groupName;
                },
                set value($$value) {
                  groupName = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----> `);
              Textarea_field($$renderer5, {
                label: store_get($$store_subs ??= {}, "$t", t)("tags_admin.group_modal.description"),
                placeholder: store_get($$store_subs ??= {}, "$t", t)("tags_admin.group_modal.description_placeholder"),
                errorMessage: tagApi.errors.description,
                get value() {
                  return groupDescription;
                },
                set value($$value) {
                  groupDescription = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----></div> <!---->`);
              Dialog_footer($$renderer5, {
                children: ($$renderer6) => {
                  Button($$renderer6, {
                    variant: "outline",
                    onclick: () => isTagGroupModalOpen = false,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.cancel"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> `);
                  Button($$renderer6, {
                    onclick: handleTagGroupSubmit,
                    loading: tagApi.isLoading,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.save"))}`);
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
      $$renderer3.push(`<!----> <!---->`);
      Root($$renderer3, {
        get open() {
          return isTagModalOpen;
        },
        set open($$value) {
          isTagModalOpen = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "sm:max-w-lg",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(tagModalMode === "edit" ? "tags_admin.tag_modal.edit_title" : "tags_admin.tag_modal.create_title"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="space-y-4 py-2">`);
              Input_field($$renderer5, {
                label: store_get($$store_subs ??= {}, "$t", t)("tags_admin.tag_modal.name"),
                errorMessage: tagApi.errors.name,
                autoFocus: true,
                get value() {
                  return tagName;
                },
                set value($$value) {
                  tagName = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----> `);
              Textarea_field($$renderer5, {
                label: store_get($$store_subs ??= {}, "$t", t)("tags_admin.tag_modal.description"),
                placeholder: store_get($$store_subs ??= {}, "$t", t)("tags_admin.tag_modal.description_placeholder"),
                errorMessage: tagApi.errors.description,
                get value() {
                  return tagDescription;
                },
                set value($$value) {
                  tagDescription = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----> <div class="space-y-2"><p class="text-sm font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.tag_modal.category"))}</p> <!---->`);
              Root$2($$renderer5, {
                type: "single",
                get value() {
                  return tagGroupId;
                },
                set value($$value) {
                  tagGroupId = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Select_trigger($$renderer6, {
                    class: "w-full",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<p>${escape_html(tagGroupId ? tagApi.tagGroups.find((group) => group.id === tagGroupId)?.name || store_get($$store_subs ??= {}, "$t", t)("tags_admin.tag_modal.select_category") : store_get($$store_subs ??= {}, "$t", t)("tags_admin.tag_modal.select_category"))}</p>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Select_content($$renderer6, {
                    class: "ui:z-[250]",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!--[-->`);
                      const each_array_2 = ensure_array_like(tagApi.tagGroups);
                      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                        let group = each_array_2[$$index_2];
                        $$renderer7.push(`<!---->`);
                        Select_item($$renderer7, {
                          value: group.id,
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(group.name)}`);
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
              $$renderer5.push(`<!----> `);
              if (tagApi.errors.groupId) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<p class="text-sm text-red-600">${escape_html(tagApi.errors.groupId)}</p>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--></div> <div class="space-y-2"><p class="text-sm font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.tag_modal.color"))}</p> <!---->`);
              Root$3($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  {
                    let child = function($$renderer7, { props }) {
                      Button($$renderer7, spread_props([
                        props,
                        {
                          type: "button",
                          variant: "outline",
                          class: "w-full justify-start gap-2",
                          children: ($$renderer8) => {
                            $$renderer8.push(`<span class="inline-block h-3 w-3 rounded-full border"${attr_style(`background-color: ${tagColor}`)} aria-hidden="true"></span> ${escape_html(tagColor)}`);
                          },
                          $$slots: { default: true }
                        }
                      ]));
                    };
                    Popover_trigger($$renderer6, { child, $$slots: { child: true } });
                  }
                  $$renderer6.push(`<!----> <!---->`);
                  Popover_content($$renderer6, {
                    align: "start",
                    class: "z-250! w-44 p-3",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<div class="grid grid-cols-5 gap-2"><!--[-->`);
                      const each_array_3 = ensure_array_like(TAG_COLOR_OPTIONS);
                      for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
                        let color = each_array_3[$$index_3];
                        Button($$renderer7, {
                          type: "button",
                          variant: "outline",
                          size: "icon",
                          class: `h-6 w-6 rounded-full p-0 ${tagColor === color ? "ring-2 ring-offset-1" : ""}`,
                          style: `background-color: ${color}`,
                          "aria-label": color,
                          onclick: () => {
                            tagColor = color;
                          }
                        });
                      }
                      $$renderer7.push(`<!--]--></div>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <p class="ui:text-muted-foreground text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.tag_modal.color_help"))}</p></div> `);
              if (!hasTagGroups) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<p class="ui:text-muted-foreground text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.tag_modal.no_groups"))}</p>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--></div> <!---->`);
              Dialog_footer($$renderer5, {
                children: ($$renderer6) => {
                  Button($$renderer6, {
                    variant: "outline",
                    onclick: () => isTagModalOpen = false,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.cancel"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> `);
                  Button($$renderer6, {
                    onclick: handleTagSubmit,
                    loading: tagApi.isLoading,
                    disabled: !hasTagGroups,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("tags_admin.actions.save"))}`);
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
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    Tags_admin($$renderer2, {
      initialTagGroups: data.initialTagGroups,
      orgSlug: data.orgSlug
    });
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-0IGt3L3t.js.map
