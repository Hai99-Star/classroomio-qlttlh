import { h as head, n as escape_html, a as store_get, f as ensure_array_like, u as unsubscribe_stores, g as attributes } from './index2-Eg0dVEDW.js';
import { p as page } from './index5-nlVlCL1t.js';
import './index6-DijlZyMe.js';
import { S as Sidebar_provider, a as Sidebar_inset, b as Sidebar, c as Sidebar_header, d as Sidebar_content, f as Sidebar_group, g as Sidebar_menu, h as Sidebar_menu_item, e as Sidebar_trigger } from './sidebar-trigger-CyHJa3-O.js';
import { e as useSidebar, S as Sidebar_menu_button } from './states.svelte-BI9DWQmF.js';
import { S as Spinner } from './button-McsHA0hU.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { S as Sidebar_skeleton, a as Sidebar_rail, b as Sidebar_footer } from './sidebar-skeleton-5x7IPWc9.js';
import { S as Skeleton } from './skeleton-EXMKyyjB.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { o as orgs, b as currentOrgPath, i as isOrgAdmin, R as ROLE } from './org-t71AQfHV.js';
import { O as Org_logo } from './org-logo-CDot_Aq3.js';
import { r as resolve } from './server3-VLoL706W.js';
import './picker-data-NeeeTF6U.js';
import './index8-D5Z_9ShZ.js';
import './badge-DTmoBcZS.js';
import './button-group-B7_AGlHf.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './empty-media-ClSn1CG9.js';
import './field-BxJz8KV9.js';
import './input-group-button-BAHNvNdh.js';
import './item-CUOTGwjL.js';
import './toggle-group-item-BLEzxLjD.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import { C as Course } from './course-CF1uUloU.js';
import { H as Hoverable_item } from './hoverable-item-DbC0eVyl.js';
import { N as News_feed } from './news-feed-DASXVKG8.js';
import { P as People } from './people-DwBXfNtv.js';
import { S as Settings } from './settings-CHfda6vr.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './resource-list-row-DOW12fib.js';
import './question-type-capabilities-B1VkdJbc.js';
import { B as Back_button } from './back-button-BI2Xs063.js';
import { t } from './translations-BxDrjLWK.js';
import { i as isStudentExperience } from './app-CdpE9djd.js';
import { p as programApi } from './program.svelte-DBgvQqeB.js';
import './index4-CY3O4yvX.js';
import './program-DOGHw_6z.js';
import './domains-D9J1UytB.js';
import { P as Powered_by } from './powered-by-BxMkJciK.js';
import { S as Separator } from './separator-C8wJJtqC.js';
import './utils2-DPSDgWhA.js';
import './client3-CP3T_KrU.js';
import './client2-CqohmrW2.js';
import './exports-DiyTWREe.js';
import './index-AIbsv2Pd.js';
import './event-ByDKS2H7.js';
import './index13-ubjsmMp7.js';
import './create-id-D7gdjJzW.js';
import './scroll-lock-CqTUXsNd.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-H2EBI_WO.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './dialog-BqIvyJui.js';
import './dialog-content-7tRy2FJ1.js';
import './dialog-title-DHgMN8vm.js';
import './dialog-description2-T5WKf1k9.js';
import './index14-HMlD0kYH.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import 'lodash/merge.js';
import './avatar-fallback-CG2pdu70.js';
import './string-Cj27R2Pv.js';
import './routing-Cz2vwfLK.js';
import './spring-CMJ2WkAz.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './arrow-left2-Dl6-kuJA.js';
import '@sveltekit-i18n/parser-icu';
import './store-D_AYzDdq.js';
import './base.svelte-Bh2VVy5Z.js';
import 'zod/v4';
import './shared-server-DaWdgxVh.js';
import 'zod';
import './powered-by2-Bm-L25bi.js';
import './arrow-up-right-DrMYhHzL.js';
import './Icon-BfkBTjtA.js';

function Program_sidebar_navigation($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { path, id } = $$props;
    const currentPath = path || page.url.pathname;
    const isLmsProgramContext = page.url.searchParams.get("source") === "lms" || store_get($$store_subs ??= {}, "$isStudentExperience", isStudentExperience);
    const programsListPath = isLmsProgramContext ? "/lms/programs" : `${store_get($$store_subs ??= {}, "$currentOrgPath", currentOrgPath)}/programs`;
    const currentMemberRole = programApi.members.find((m) => m.profileId === store_get($$store_subs ??= {}, "$profile", profile).id)?.roleId ?? null;
    const canManageMembers = store_get($$store_subs ??= {}, "$isOrgAdmin", isOrgAdmin) === true || currentMemberRole !== null && currentMemberRole <= ROLE.TUTOR;
    const canManageSettings = store_get($$store_subs ??= {}, "$isOrgAdmin", isOrgAdmin) === true || currentMemberRole === ROLE.ADMIN;
    const navItems = [
      {
        id: "newsfeed",
        title: store_get($$store_subs ??= {}, "$t", t)("programs.sidebar.newsfeed") || "Newsfeed",
        url: `/programs/${id}/newsfeed`,
        isActive: currentPath.endsWith("/newsfeed"),
        icon: News_feed,
        show: () => true
      },
      {
        id: "courses",
        title: store_get($$store_subs ??= {}, "$t", t)("programs.sidebar.courses") || "Courses",
        url: `/programs/${id}/courses`,
        isActive: currentPath.endsWith("/courses"),
        icon: Course,
        show: () => true
      },
      {
        id: "people",
        title: store_get($$store_subs ??= {}, "$t", t)("programs.sidebar.people") || "People",
        url: `/programs/${id}/people`,
        isActive: currentPath.endsWith("/people"),
        icon: People,
        show: () => canManageMembers
      },
      {
        id: "settings",
        title: store_get($$store_subs ??= {}, "$t", t)("programs.sidebar.settings") || "Settings",
        url: `/programs/${id}/settings`,
        isActive: currentPath.endsWith("/settings"),
        icon: Settings,
        show: () => canManageSettings
      }
    ].filter((item) => item.show());
    $$renderer2.push(`<!---->`);
    Sidebar_group($$renderer2, {
      class: "pt-0!",
      children: ($$renderer3) => {
        Back_button($$renderer3, {
          href: resolve(programsListPath, {}),
          label: store_get($$store_subs ??= {}, "$t", t)(isLmsProgramContext ? "lms_navigation.programs" : "org_navigation.programs") || "Programs",
          class: "px-2! py-2!"
        });
        $$renderer3.push(`<!----> <!---->`);
        Sidebar_menu($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!--[-->`);
            const each_array = ensure_array_like(navItems);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let item = each_array[$$index];
              $$renderer4.push(`<!---->`);
              Sidebar_menu_item($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  {
                    let child = function($$renderer6, { props }) {
                      {
                        let children = function($$renderer7, isHovered) {
                          const Icon = item.icon;
                          $$renderer7.push(`<a${attributes({ href: resolve(item.url, {}), ...props }, "svelte-uybtwi")}><!---->`);
                          Icon($$renderer7, { isHovered, size: 16 });
                          $$renderer7.push(`<!----> <span>${escape_html(item.title)}</span></a>`);
                        };
                        Hoverable_item($$renderer6, { children });
                      }
                    };
                    Sidebar_menu_button($$renderer5, {
                      tooltipContent: item.title,
                      isActive: item.isActive,
                      child,
                      $$slots: { child: true }
                    });
                  }
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Program_sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const SIDEBAR_ITEM_SKELETON_COUNT = 4;
    let { path, id, isProgramReady = true } = $$props;
    const isOrgLoaded = store_get($$store_subs ??= {}, "$orgs", orgs).length > 0 && store_get($$store_subs ??= {}, "$profile", profile).id;
    const sidebar = useSidebar();
    const currentPath = path || page.url.pathname;
    if (!isOrgLoaded) {
      $$renderer2.push("<!--[-->");
      Sidebar_skeleton($$renderer2);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!---->`);
      Sidebar($$renderer2, {
        collapsible: "icon",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          Sidebar_header($$renderer3, {
            children: ($$renderer4) => {
              Org_logo($$renderer4);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <!---->`);
          Sidebar_content($$renderer3, {
            children: ($$renderer4) => {
              if (isProgramReady) {
                $$renderer4.push("<!--[-->");
                Program_sidebar_navigation($$renderer4, { path: currentPath, id });
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push(`<!---->`);
                Sidebar_group($$renderer4, {
                  class: "pt-0!",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<div class="flex h-8 items-center gap-2 rounded-md px-2">`);
                    Skeleton($$renderer5, { class: "ui:size-4 ui:rounded-md" });
                    $$renderer5.push(`<!----> `);
                    Skeleton($$renderer5, { class: "ui:h-4 ui:w-24" });
                    $$renderer5.push(`<!----></div> <!---->`);
                    Sidebar_menu($$renderer5, {
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!--[-->`);
                        const each_array = ensure_array_like(Array(SIDEBAR_ITEM_SKELETON_COUNT));
                        for (let i = 0, $$length = each_array.length; i < $$length; i++) {
                          each_array[i];
                          $$renderer6.push(`<!---->`);
                          Sidebar_menu_item($$renderer6, {
                            children: ($$renderer7) => {
                              $$renderer7.push(`<div class="ui:flex ui:h-8 ui:items-center ui:gap-2 ui:rounded-md ui:px-2" data-sidebar="menu-skeleton">`);
                              Skeleton($$renderer7, { class: "ui:size-4 ui:rounded-md" });
                              $$renderer7.push(`<!----> `);
                              Skeleton($$renderer7, { class: "ui:h-4 ui:max-w-32 ui:flex-1" });
                              $$renderer7.push(`<!----></div>`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer6.push(`<!---->`);
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
              }
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <!---->`);
          Sidebar_rail($$renderer3, {});
          $$renderer3.push(`<!----> <!---->`);
          Sidebar_footer($$renderer3, {
            children: ($$renderer4) => {
              Powered_by($$renderer4, {
                variant: "sidebar",
                sidebarUtmSource: "lms-program-sidebar",
                showOnlyLogo: !sidebar.open || sidebar.isMobile
              });
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Program_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<header class="border-border ui:bg-background sticky top-0 z-100 flex h-12 w-full shrink-0 items-center gap-2 border-b backdrop-blur transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-8"><div class="flex w-full items-center gap-2 px-4">`);
    Sidebar_trigger($$renderer2, {});
    $$renderer2.push(`<!----> <div class="h-4 w-2">`);
    Separator($$renderer2, { orientation: "vertical" });
    $$renderer2.push(`<!----></div> <div class="flex min-w-0 items-center gap-2"><p class="max-w-2xs truncate text-sm font-medium">${escape_html(programApi.program?.name || "")}</p></div> <span class="grow"></span></div></header>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, data } = $$props;
    const isProgramReady = (() => {
      return programApi.program?.id === data.programId && programApi.loadedMembersProgramId === data.programId && programApi.loadedCoursesProgramId === data.programId;
    })();
    head("1op0v2i", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(programApi.program?.name || "Program")} - ClassroomIO</title>`);
      });
    });
    $$renderer2.push(`<!---->`);
    Sidebar_provider($$renderer2, {
      "data-sveltekit-preload-data": "off",
      children: ($$renderer3) => {
        Program_sidebar($$renderer3, { path: page.url.pathname, id: data.programId, isProgramReady });
        $$renderer3.push(`<!----> <!---->`);
        Sidebar_inset($$renderer3, {
          class: "w-[calc(100vw-var(--sidebar-width))] group-data-[collapsible=icon]:w-[calc(100vw-var(--sidebar-width-icon))]",
          children: ($$renderer4) => {
            Program_header($$renderer4);
            $$renderer4.push(`<!----> `);
            if (!isProgramReady) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="mx-auto flex h-[calc(100vh-56px)] w-full items-center justify-center">`);
              Empty($$renderer4, {
                title: "Loading program...",
                description: "Please wait while we load your program data.",
                icon: Spinner,
                iconClass: "h-8 w-8",
                variant: "page"
              });
              $$renderer4.push(`<!----></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              children?.($$renderer4);
              $$renderer4.push(`<!---->`);
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
  });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DxG4l2V1.js.map
