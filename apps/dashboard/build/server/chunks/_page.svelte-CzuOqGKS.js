import { a as store_get, h as head, u as unsubscribe_stores, n as escape_html, f as ensure_array_like, l as attr_class, e as stringify } from './index2-Eg0dVEDW.js';
import { B as Button } from './button-McsHA0hU.js';
import { I as Item_actions } from './item-actions-BlOLR7EV.js';
import { I as Item_content } from './item-content--fxXSxOv.js';
import { I as Item_description } from './item-description-BY5f-Oua.js';
import './index6-DijlZyMe.js';
import { I as Item_group } from './item-group-BItRfnoE.js';
import { I as Item, a as Item_media } from './item-CUOTGwjL.js';
import { I as Item_title } from './item-title-BLGVIel8.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import { S as Setup_progress, B as Badge_check } from './badge-check-CiVACk0s.js';
import { c as currentOrg } from './org-BIDTy0Q0.js';
import { g as goto } from './client2-CqohmrW2.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { t } from './translations-BxDrjLWK.js';
import { s as setupProgressApi } from './setup-progress.svelte-CJivOuj6.js';
import { B as Book_open } from './book-open-gUTgx0US.js';
import { F as File_text } from './file-text-By0j_W0Z.js';
import { G as Globe } from './globe-DoLv90oB.js';
import { U as User_plus } from './user-plus-D7PLE6lr.js';
import { U as Users } from './users-CS_ofwgc.js';
import { C as Chevron_right } from './chevron-right-C3Al4Cvl.js';
import './utils2-DPSDgWhA.js';
import './index14-HMlD0kYH.js';
import './skeleton-EXMKyyjB.js';
import './Icon-BfkBTjtA.js';
import './index-AIbsv2Pd.js';
import 'lodash/merge.js';
import './content-BYLGOVzm.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import '@sveltekit-i18n/parser-icu';
import './index4-3F2xRc80.js';
import './shared-server-DaWdgxVh.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const setupList = setupProgressApi.setupList.map((item) => {
      if (item.id === "profile") {
        return {
          ...item,
          is_completed: !store_get($$store_subs ??= {}, "$profile", profile).avatarUrl?.includes("avatars/avatar.png") || !!store_get($$store_subs ??= {}, "$profile", profile).avatarUrl
        };
      }
      return item;
    });
    const completed = setupList.filter((list) => list.is_completed).length;
    const total = setupList.length;
    const StepsEnum = {
      UPDATE_PROFILE: "profile",
      UPDATE_ORG_PROFILE: "organization",
      CREATE_COURSE: "course",
      CREATE_LESSON: "lesson",
      CREATE_EXERCISE: "exercise",
      PUBLISH_COURSE: "publish"
    };
    const isCompleted = (id) => {
      return setupList?.find((c) => c.id === id)?.is_completed == true;
    };
    const handleClick = (id) => {
      switch (id) {
        case StepsEnum.CREATE_COURSE:
          goto(`/org/${store_get($$store_subs ??= {}, "$currentOrg", currentOrg).siteName}/courses?create=true`);
          break;
        case StepsEnum.CREATE_LESSON:
          if (isCompleted("course")) {
            const courses = setupProgressApi.progress.courses || [];
            const courseId = courses[0]?.id;
            if (courseId) {
              goto();
            }
          } else {
            snackbar.info("setup.info_course");
          }
          break;
        case StepsEnum.CREATE_EXERCISE:
          if (isCompleted("lesson")) {
            const courses = setupProgressApi.progress.courses || [];
            const lessons = setupProgressApi.progress.lessons || [];
            const courseId = courses[0]?.id;
            const lessonId = lessons[0]?.id;
            if (courseId && lessonId) {
              goto();
            }
          } else {
            snackbar.info("setup.info_lesson");
          }
          break;
        case StepsEnum.PUBLISH_COURSE:
          if (isCompleted("course")) {
            const courses = setupProgressApi.progress.courses || [];
            const courseId = courses[0]?.id;
            if (courseId) {
              goto();
            }
          } else {
            snackbar.info("setup.info_course");
          }
          break;
        case StepsEnum.UPDATE_PROFILE:
          goto(`/org/${store_get($$store_subs ??= {}, "$currentOrg", currentOrg).siteName}/settings`);
          break;
        case StepsEnum.UPDATE_ORG_PROFILE:
          goto(`/org/${store_get($$store_subs ??= {}, "$currentOrg", currentOrg).siteName}/settings/org`);
          break;
      }
    };
    head("1vwl9bs", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Setup - ClassroomIO</title>`);
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
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("setup.get_started"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Page_subtitle($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("setup.description"))}`);
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
                Setup_progress($$renderer5, { setupItems: setupList });
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
            $$renderer4.push(`<section class="space-y-6 px-4"><!---->`);
            Item($$renderer4, {
              variant: "outline",
              class: "ui:cursor-default",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Item_content($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->`);
                    Item_description($$renderer6, {
                      class: "mb-4",
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("setup.description"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> <div class="flex items-center gap-2"><!---->`);
                    Item_description($$renderer6, {
                      class: "text-sm",
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(completed)} of ${escape_html(total)}
                ${escape_html(store_get($$store_subs ??= {}, "$t", t)("setup.completed"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> <div class="flex gap-1"><!--[-->`);
                    const each_array = ensure_array_like(Array(total));
                    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
                      each_array[i];
                      $$renderer6.push(`<div${attr_class(`size-2 rounded-full ${stringify(i < completed ? "bg-green-600" : "bg-gray-300 dark:bg-gray-600")}`)}></div>`);
                    }
                    $$renderer6.push(`<!--]--></div></div>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Item_group($$renderer4, {
              class: "space-y-2",
              children: ($$renderer5) => {
                $$renderer5.push(`<!--[-->`);
                const each_array_1 = ensure_array_like(setupList);
                for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                  let list = each_array_1[$$index_1];
                  $$renderer5.push(`<!---->`);
                  Item($$renderer5, {
                    variant: "muted",
                    class: list.is_completed ? "opacity-60" : "",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Item_media($$renderer6, {
                        variant: "icon",
                        children: ($$renderer7) => {
                          if (list.is_completed) {
                            $$renderer7.push("<!--[-->");
                            $$renderer7.push(`<div class="flex size-5 items-center justify-center rounded">`);
                            Badge_check($$renderer7, { class: "size-5 text-white" });
                            $$renderer7.push(`<!----></div>`);
                          } else {
                            $$renderer7.push("<!--[!-->");
                            if (list.id === StepsEnum.CREATE_COURSE) {
                              $$renderer7.push("<!--[-->");
                              Book_open($$renderer7, { class: "size-5 text-gray-600" });
                            } else {
                              $$renderer7.push("<!--[!-->");
                              if (list.id === StepsEnum.CREATE_LESSON || list.id === StepsEnum.CREATE_EXERCISE) {
                                $$renderer7.push("<!--[-->");
                                File_text($$renderer7, { class: "size-5 text-gray-600" });
                              } else {
                                $$renderer7.push("<!--[!-->");
                                if (list.id === StepsEnum.PUBLISH_COURSE) {
                                  $$renderer7.push("<!--[-->");
                                  Globe($$renderer7, { class: "size-5 text-gray-600" });
                                } else {
                                  $$renderer7.push("<!--[!-->");
                                  if (list.id === StepsEnum.UPDATE_PROFILE) {
                                    $$renderer7.push("<!--[-->");
                                    User_plus($$renderer7, { class: "size-5 text-gray-600" });
                                  } else {
                                    $$renderer7.push("<!--[!-->");
                                    if (list.id === StepsEnum.UPDATE_ORG_PROFILE) {
                                      $$renderer7.push("<!--[-->");
                                      Users($$renderer7, { class: "size-5 text-gray-600" });
                                    } else {
                                      $$renderer7.push("<!--[!-->");
                                      Book_open($$renderer7, { class: "size-5 text-gray-600" });
                                    }
                                    $$renderer7.push(`<!--]-->`);
                                  }
                                  $$renderer7.push(`<!--]-->`);
                                }
                                $$renderer7.push(`<!--]-->`);
                              }
                              $$renderer7.push(`<!--]-->`);
                            }
                            $$renderer7.push(`<!--]-->`);
                          }
                          $$renderer7.push(`<!--]-->`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> <!---->`);
                      Item_content($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->`);
                          Item_title($$renderer7, {
                            class: list.is_completed ? "text-gray-500 line-through" : "font-semibold",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(list.title))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Item_description($$renderer7, {
                            class: list.is_completed ? "text-gray-500 line-through" : "",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(list.desc))}`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!---->`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> <!---->`);
                      Item_actions($$renderer6, {
                        children: ($$renderer7) => {
                          if (list.is_completed) {
                            $$renderer7.push("<!--[-->");
                            Button($$renderer7, {
                              variant: "secondary",
                              size: "sm",
                              disabled: true,
                              class: "bg-gray-400 text-white",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("setup.done"))}`);
                              },
                              $$slots: { default: true }
                            });
                          } else {
                            $$renderer7.push("<!--[!-->");
                            Button($$renderer7, {
                              variant: "outline",
                              size: "sm",
                              onclick: () => handleClick(list.id),
                              class: "w-full sm:w-auto",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("setup.todo"))} `);
                                Chevron_right($$renderer8, { class: "ml-2 size-4" });
                                $$renderer8.push(`<!---->`);
                              },
                              $$slots: { default: true }
                            });
                          }
                          $$renderer7.push(`<!--]-->`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                }
                $$renderer5.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></section>`);
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
//# sourceMappingURL=_page.svelte-CzuOqGKS.js.map
