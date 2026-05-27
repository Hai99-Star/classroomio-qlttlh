import './index6-DijlZyMe.js';
import { S as Sidebar_provider, a as Sidebar_inset, b as Sidebar, c as Sidebar_header, d as Sidebar_content, e as Sidebar_trigger, f as Sidebar_group, g as Sidebar_menu, h as Sidebar_menu_item } from './sidebar-trigger-CyHJa3-O.js';
import { S as Sidebar_menu_button } from './states.svelte-BI9DWQmF.js';
import { B as Button, b as buttonVariants } from './button-McsHA0hU.js';
import { S as Separator } from './separator-C8wJJtqC.js';
import { R as Root, P as Popover_trigger, a as Popover_content } from './index9-C_LBahdk.js';
import { M as Menu, S as Search, B as Breadcrumb, a as Breadcrumb_list, b as Breadcrumb_item, c as Breadcrumb_separator, d as Breadcrumb_ellipsis, D as Drawer_trigger, e as Drawer_description, f as Drawer_footer, g as Breadcrumb_link, h as Breadcrumb_page, i as Drawer_close } from './menu-CMJe-Q2d.js';
import { a as store_get, u as unsubscribe_stores, f as ensure_array_like, n as escape_html, b as spread_props, d as attr, g as attributes } from './index2-Eg0dVEDW.js';
import { M as MediaQuery } from './create-id-D7gdjJzW.js';
import { D as Drawer, a as Drawer_content, b as Drawer_header, c as Drawer_title } from './drawer-title-eL5qtFnQ.js';
import { R as Root$1, D as Dropdown_menu_trigger, a as Dropdown_menu_content, b as Dropdown_menu_item } from './index12-DrKMqqv6.js';
import { p as page } from './index5-nlVlCL1t.js';
import { o as orgs, c as currentOrg } from './org-t71AQfHV.js';
import { t } from './translations-BxDrjLWK.js';
import { g as getLmsNavigationItems } from './lms-navigation-ZzxwNKyC.js';
import { i as isActive } from './app2-Bjy9FPab.js';
import { c as currentCommunityQuestion } from './store3-D6L6kxSt.js';
import { E as Empty, a as Empty_header, c as Empty_title, d as Empty_description, b as Empty_content } from './empty-content-qPjsGDm9.js';
import { E as Empty_media } from './empty-media-ClSn1CG9.js';
import { B as Bell, C as Collapsible, c as Collapsible_trigger, d as Collapsible_content, S as Sidebar_menu_sub, a as Sidebar_menu_sub_item, b as Sidebar_menu_sub_button } from './collapsible-content-5NVLCAcG.js';
import { R as Refresh_ccw } from './refresh-ccw-CI5btw-m.js';
import { S as Sidebar_skeleton, b as Sidebar_footer, a as Sidebar_rail } from './sidebar-skeleton-5x7IPWc9.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { S as Sidebar_group_label } from './sidebar-group-label-D1NB5-x5.js';
import { H as Hoverable_item } from './hoverable-item-DbC0eVyl.js';
import { C as Chevron_right } from './chevron-right-C3Al4Cvl.js';
import { O as Org_logo } from './org-logo-CDot_Aq3.js';
import './index13-ubjsmMp7.js';
import './scroll-lock-CqTUXsNd.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './utils2-DPSDgWhA.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-H2EBI_WO.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './dialog-BqIvyJui.js';
import './dialog-content-7tRy2FJ1.js';
import './dialog-title-DHgMN8vm.js';
import './dialog-description2-T5WKf1k9.js';
import './index14-HMlD0kYH.js';
import './floating-layer-anchor-CBXkOzVQ.js';
import './input-group-input-BlASI7k-.js';
import './input-CkarY5WD.js';
import './input-group-button-BAHNvNdh.js';
import './Icon-BfkBTjtA.js';
import './ellipsis-CwLwTK8q.js';
import './chevron-right2-DJRdFTZC.js';
import './server3-VLoL706W.js';
import './routing-Cz2vwfLK.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import './exports-DiyTWREe.js';
import './index-AIbsv2Pd.js';
import './app-CdpE9djd.js';
import './domains-D9J1UytB.js';
import './user-avatar-C553w_lG.js';
import './avatar-fallback-CG2pdu70.js';
import './mode-NtjMtzBS.js';
import './dropdown-menu-separator-DTaX7YPG.js';
import './dropdown-menu-group-Dq5gXS46.js';
import './clone-u51BKwOQ.js';
import './client3-CP3T_KrU.js';
import 'lodash/merge.js';
import '@sveltekit-i18n/parser-icu';
import './course-CF1uUloU.js';
import './exercise-8V9pDq65.js';
import './explore-B48ys64e.js';
import './goal-C_iaeEkX.js';
import './home-C9RNcUNP.js';
import './settings-CHfda6vr.js';
import './dot-field-B9cQMeU_.js';
import './skeleton-EXMKyyjB.js';
import './string-Cj27R2Pv.js';

function generateLmsBreadcrumbs(pathname, searchParams, navItems, t2, pageData) {
  const breadcrumbs = [];
  const pathWithQuery = pathname + searchParams;
  const relativePath = pathname.replace(/^\/lms/, "").replace(/^\//, "") || "";
  const pathSegments = relativePath.split("/").filter(Boolean);
  if (!relativePath || relativePath === "") {
    return breadcrumbs;
  }
  const firstSegment = pathSegments[0];
  let matchedNavItem;
  for (const item of navItems) {
    const itemPath = item.path.replace(/^\//, "");
    if (itemPath === firstSegment || itemPath === "" && firstSegment === void 0) {
      matchedNavItem = item;
      break;
    }
  }
  if (!matchedNavItem) {
    for (const item of navItems) {
      const fullItemPath = `/lms${item.path}`;
      if (isActive(pathname, fullItemPath)) {
        matchedNavItem = item;
        break;
      }
    }
  }
  if (matchedNavItem) {
    const href = matchedNavItem.useHashUrl ? `/lms${matchedNavItem.path}` : matchedNavItem.url;
    breadcrumbs.push({
      label: t2(matchedNavItem.title),
      href
    });
  }
  if (matchedNavItem?.items && searchParams) {
    const subItem = matchedNavItem.items.find((sub) => isActive(pathWithQuery, sub.url, void 0, true));
    if (subItem) {
      breadcrumbs.push({
        label: t2(subItem.title),
        href: subItem.url
      });
      return breadcrumbs;
    }
  }
  if (pathSegments.length > 1 && matchedNavItem) {
    const secondSegment = pathSegments[1];
    if (matchedNavItem.nestedRoutes) {
      const nestedRoute = matchedNavItem.nestedRoutes.find((route) => route.path === secondSegment);
      if (nestedRoute) {
        breadcrumbs.push({
          label: t2(nestedRoute.titleKey),
          // Could be translated if needed
          href: `/lms${matchedNavItem.path}/${nestedRoute.path}`
        });
        return breadcrumbs;
      }
    }
    if (matchedNavItem.supportsDynamicSegment && secondSegment) {
      const isStaticRoute = matchedNavItem.nestedRoutes?.some((route) => route.path === secondSegment);
      if (!isStaticRoute && pageData?.breadcrumb) {
        breadcrumbs.push({
          label: pageData.breadcrumb,
          href: `/lms${matchedNavItem.path}/${secondSegment}`
        });
      }
      return breadcrumbs;
    }
  }
  return breadcrumbs;
}
function Lms_breadcrumbs($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const navItems = getLmsNavigationItems(store_get($$store_subs ??= {}, "$currentOrg", currentOrg), store_get($$store_subs ??= {}, "$t", t), page.url.pathname);
    const breadcrumbTitle = store_get($$store_subs ??= {}, "$currentCommunityQuestion", currentCommunityQuestion).title;
    const breadcrumbs = generateLmsBreadcrumbs(page.url.pathname, page.url.search, navItems, store_get($$store_subs ??= {}, "$t", t), breadcrumbTitle ? { breadcrumb: breadcrumbTitle } : void 0);
    let open = false;
    const isDesktop = new MediaQuery("(min-width: 768px)");
    const ITEMS_TO_DISPLAY = isDesktop.current ? 2 : 1;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Breadcrumb($$renderer3, {
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Breadcrumb_list($$renderer4, {
            class: "flex-nowrap!",
            children: ($$renderer5) => {
              if (breadcrumbs.length > 0) {
                $$renderer5.push("<!--[-->");
                if (breadcrumbs.length > ITEMS_TO_DISPLAY) {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<!---->`);
                  Breadcrumb_item($$renderer5, {
                    children: ($$renderer6) => {
                      if (isDesktop.current) {
                        $$renderer6.push("<!--[-->");
                        $$renderer6.push(`<!---->`);
                        Root$1($$renderer6, {
                          get open() {
                            return open;
                          },
                          set open($$value) {
                            open = $$value;
                            $$settled = false;
                          },
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->`);
                            Dropdown_menu_trigger($$renderer7, {
                              class: "flex items-center gap-1",
                              "aria-label": "Toggle menu",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->`);
                                Breadcrumb_ellipsis($$renderer8, { class: "size-4" });
                                $$renderer8.push(`<!---->`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Dropdown_menu_content($$renderer7, {
                              align: "start",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!--[-->`);
                                const each_array = ensure_array_like(breadcrumbs.slice(0, -ITEMS_TO_DISPLAY));
                                for (let i = 0, $$length = each_array.length; i < $$length; i++) {
                                  let breadcrumb = each_array[i];
                                  $$renderer8.push(`<!---->`);
                                  Dropdown_menu_item($$renderer8, {
                                    children: ($$renderer9) => {
                                      $$renderer9.push(`<a${attr("href", breadcrumb.href ? breadcrumb.href : "##")}>${escape_html(breadcrumb.label)}</a>`);
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
                      } else {
                        $$renderer6.push("<!--[!-->");
                        $$renderer6.push(`<!---->`);
                        Drawer($$renderer6, {
                          get open() {
                            return open;
                          },
                          set open($$value) {
                            open = $$value;
                            $$settled = false;
                          },
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->`);
                            Drawer_trigger($$renderer7, {
                              "aria-label": "Toggle Menu",
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->`);
                                Breadcrumb_ellipsis($$renderer8, { class: "size-4" });
                                $$renderer8.push(`<!---->`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Drawer_content($$renderer7, {
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->`);
                                Drawer_header($$renderer8, {
                                  class: "text-start",
                                  children: ($$renderer9) => {
                                    $$renderer9.push(`<!---->`);
                                    Drawer_title($$renderer9, {
                                      children: ($$renderer10) => {
                                        $$renderer10.push(`<!---->Navigate to`);
                                      },
                                      $$slots: { default: true }
                                    });
                                    $$renderer9.push(`<!----> <!---->`);
                                    Drawer_description($$renderer9, {
                                      children: ($$renderer10) => {
                                        $$renderer10.push(`<!---->Select a page to navigate to.`);
                                      },
                                      $$slots: { default: true }
                                    });
                                    $$renderer9.push(`<!---->`);
                                  },
                                  $$slots: { default: true }
                                });
                                $$renderer8.push(`<!----> <div class="grid gap-1 px-4"><!--[-->`);
                                const each_array_1 = ensure_array_like(breadcrumbs.slice(0, -ITEMS_TO_DISPLAY));
                                for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
                                  let breadcrumb = each_array_1[i];
                                  $$renderer8.push(`<a${attr("href", breadcrumb.href ? breadcrumb.href : "##")} class="py-1 text-sm">${escape_html(breadcrumb.label)}</a>`);
                                }
                                $$renderer8.push(`<!--]--></div> <!---->`);
                                Drawer_footer($$renderer8, {
                                  class: "pt-4",
                                  children: ($$renderer9) => {
                                    $$renderer9.push(`<!---->`);
                                    Drawer_close($$renderer9, {
                                      class: buttonVariants({ variant: "outline" }),
                                      children: ($$renderer10) => {
                                        $$renderer10.push(`<!---->Close`);
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
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Breadcrumb_separator($$renderer5, {});
                  $$renderer5.push(`<!---->`);
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]--> <!--[-->`);
                const each_array_2 = ensure_array_like(breadcrumbs.slice(-ITEMS_TO_DISPLAY));
                for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
                  let breadcrumb = each_array_2[index];
                  $$renderer5.push(`<!---->`);
                  Breadcrumb_item($$renderer5, {
                    children: ($$renderer6) => {
                      const isLast = index === breadcrumbs.slice(-ITEMS_TO_DISPLAY).length - 1;
                      if (!isLast) {
                        $$renderer6.push("<!--[-->");
                        $$renderer6.push(`<!---->`);
                        Breadcrumb_link($$renderer6, {
                          href: breadcrumb.href,
                          class: "max-w-20 truncate md:max-w-none",
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->${escape_html(breadcrumb.label)}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!----> <!---->`);
                        Breadcrumb_separator($$renderer6, {});
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                        $$renderer6.push(`<!---->`);
                        Breadcrumb_page($$renderer6, {
                          class: "max-w-20 truncate md:max-w-none",
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->${escape_html(breadcrumb.label)}`);
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
                }
                $$renderer5.push(`<!--]-->`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]-->`);
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
function Lms_header($$renderer, $$props) {
  let { hideSearch = false } = $$props;
  $$renderer.push(`<header class="border-border ui:bg-background bg-background sticky top-0 z-50 flex h-12 w-full shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-8"><div class="flex w-full items-center gap-2 px-4"><!---->`);
  Sidebar_trigger($$renderer, {});
  $$renderer.push(`<!----> <div class="h-4 w-2">`);
  Separator($$renderer, { orientation: "vertical" });
  $$renderer.push(`<!----></div> `);
  Lms_breadcrumbs($$renderer);
  $$renderer.push(`<!----> <span class="grow"></span> `);
  if (!hideSearch) {
    $$renderer.push("<!--[-->");
    Search($$renderer, { scope: "lms" });
    $$renderer.push(`<!----> <!---->`);
    Root($$renderer, {
      children: ($$renderer2) => {
        $$renderer2.push(`<!---->`);
        Popover_trigger($$renderer2, {
          children: ($$renderer3) => {
            Button($$renderer3, {
              variant: "outline",
              size: "icon",
              children: ($$renderer4) => {
                Bell($$renderer4, { class: "custom rounded-full" });
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----> <!---->`);
        Popover_content($$renderer2, {
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->`);
            Empty($$renderer3, {
              class: "ui:from-muted/50 ui:to-background ui:h-full ui:bg-gradient-to-b ui:from-30%",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->`);
                Empty_header($$renderer4, {
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->`);
                    Empty_media($$renderer5, {
                      variant: "icon",
                      children: ($$renderer6) => {
                        Bell($$renderer6, {});
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----> <!---->`);
                    Empty_title($$renderer5, {
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->No Notifications`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----> <!---->`);
                    Empty_description($$renderer5, {
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->You're all caught up. New notifications will appear here.`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> <!---->`);
                Empty_content($$renderer4, {
                  children: ($$renderer5) => {
                    Button($$renderer5, {
                      variant: "outline",
                      size: "sm",
                      children: ($$renderer6) => {
                        Refresh_ccw($$renderer6, {});
                        $$renderer6.push(`<!----> Refresh`);
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
            $$renderer3.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer.push(`<!---->`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div></header>`);
}
function Nav_main($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const items = getLmsNavigationItems(store_get($$store_subs ??= {}, "$currentOrg", currentOrg), store_get($$store_subs ??= {}, "$t", t), page.url.pathname);
    const pathWithQuery = page.url.pathname + page.url.search;
    $$renderer2.push(`<!---->`);
    Sidebar_group($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Sidebar_group_label($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("org_navigation.platform"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Sidebar_menu($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!--[-->`);
            const each_array = ensure_array_like(items);
            for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
              let item = each_array[$$index_1];
              $$renderer4.push(`<!---->`);
              {
                let child = function($$renderer5, { props }) {
                  $$renderer5.push(`<!---->`);
                  Sidebar_menu_item($$renderer5, spread_props([
                    props,
                    {
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->`);
                        {
                          let child2 = function($$renderer7, { props: props2 }) {
                            $$renderer7.push(`<!---->`);
                            {
                              let child3 = function($$renderer8, { props: props3 }) {
                                {
                                  let children = function($$renderer9, isHovered) {
                                    $$renderer9.push(`<a${attributes({ href: item.url, ...props3 })}>`);
                                    if (item.icon) {
                                      $$renderer9.push("<!--[-->");
                                      const Icon = item.icon;
                                      $$renderer9.push(`<!---->`);
                                      Icon($$renderer9, { isHovered, size: 16, class: "custom" });
                                      $$renderer9.push(`<!----> <span>${escape_html(item.title)}</span>`);
                                    } else {
                                      $$renderer9.push("<!--[!-->");
                                      $$renderer9.push(`<span>${escape_html(item.title)}</span>`);
                                    }
                                    $$renderer9.push(`<!--]--> `);
                                    if (item.items) {
                                      $$renderer9.push("<!--[-->");
                                      Chevron_right($$renderer9, {
                                        class: "custom ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                      });
                                    } else {
                                      $$renderer9.push("<!--[!-->");
                                    }
                                    $$renderer9.push(`<!--]--></a>`);
                                  };
                                  Hoverable_item($$renderer8, { children });
                                }
                              };
                              Sidebar_menu_button($$renderer7, spread_props([
                                props2,
                                {
                                  tooltipContent: item.title,
                                  isActive: item.isActive,
                                  child: child3,
                                  $$slots: { child: true }
                                }
                              ]));
                            }
                            $$renderer7.push(`<!---->`);
                          };
                          Collapsible_trigger($$renderer6, { child: child2, $$slots: { child: true } });
                        }
                        $$renderer6.push(`<!----> `);
                        if (item.items) {
                          $$renderer6.push("<!--[-->");
                          $$renderer6.push(`<!---->`);
                          Collapsible_content($$renderer6, {
                            children: ($$renderer7) => {
                              $$renderer7.push(`<!---->`);
                              Sidebar_menu_sub($$renderer7, {
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!--[-->`);
                                  const each_array_1 = ensure_array_like(item.items ?? []);
                                  for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
                                    let subItem = each_array_1[$$index];
                                    $$renderer8.push(`<!---->`);
                                    Sidebar_menu_sub_item($$renderer8, {
                                      children: ($$renderer9) => {
                                        $$renderer9.push(`<!---->`);
                                        {
                                          let child2 = function($$renderer10, { props: props2 }) {
                                            $$renderer10.push(`<a${attributes({ href: subItem.url, ...props2 })}><span>${escape_html(subItem.title)}</span></a>`);
                                          };
                                          Sidebar_menu_sub_button($$renderer9, {
                                            isActive: isActive(pathWithQuery, subItem.url, void 0, true),
                                            child: child2,
                                            $$slots: { child: true }
                                          });
                                        }
                                        $$renderer9.push(`<!---->`);
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
                        } else {
                          $$renderer6.push("<!--[!-->");
                        }
                        $$renderer6.push(`<!--]-->`);
                      },
                      $$slots: { default: true }
                    }
                  ]));
                  $$renderer5.push(`<!---->`);
                };
                Collapsible($$renderer4, {
                  open: item.isActive || item.isExpanded,
                  class: "group/collapsible",
                  child,
                  $$slots: { child: true }
                });
              }
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
function Lms_sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const isOrgLoaded = store_get($$store_subs ??= {}, "$orgs", orgs).length > 0 && store_get($$store_subs ??= {}, "$profile", profile).id;
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
              Nav_main($$renderer4);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <!---->`);
          Sidebar_footer($$renderer3, {
            class: "gap-4!",
            children: ($$renderer4) => {
              Menu($$renderer4);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <!---->`);
          Sidebar_rail($$renderer3, {});
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
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<!---->`);
  Sidebar_provider($$renderer, {
    children: ($$renderer2) => {
      Lms_sidebar($$renderer2);
      $$renderer2.push(`<!----> <!---->`);
      Sidebar_inset($$renderer2, {
        children: ($$renderer3) => {
          Lms_header($$renderer3, {});
          $$renderer3.push(`<!----> <div class="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 px-4">`);
          children?.($$renderer3);
          $$renderer3.push(`<!----></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-4sW2ALWw.js.map
