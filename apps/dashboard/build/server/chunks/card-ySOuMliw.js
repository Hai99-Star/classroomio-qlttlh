import { a as store_get, u as unsubscribe_stores, l as attr_class, e as stringify, n as escape_html, f as ensure_array_like, m as attr_style, b as spread_props, g as attributes, z as store_mutate } from './index2-Eg0dVEDW.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { r as resolve } from './server3-VLoL706W.js';
import './picker-data-NeeeTF6U.js';
import './index6-DijlZyMe.js';
import './index8-D5Z_9ShZ.js';
import { B as Button } from './button-McsHA0hU.js';
import './button-group-B7_AGlHf.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './states.svelte-BI9DWQmF.js';
import './empty-media-ClSn1CG9.js';
import './field-BxJz8KV9.js';
import './input-group-button-BAHNvNdh.js';
import './item-CUOTGwjL.js';
import { P as Progress } from './progress-C-m28_ec.js';
import './toggle-group-item-BLEzxLjD.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './resource-list-row-DOW12fib.js';
import './question-type-capabilities-B1VkdJbc.js';
import { D as DEFAULT_COURSE_BANNER_IMAGE, C as Course_card, I as Item_sub_description } from './course-card-DsfvWmvV.js';
import pluralize from 'pluralize';
import { t } from './translations-BxDrjLWK.js';
import './client3-CP3T_KrU.js';
import { e as currentOrgDomain } from './org-t71AQfHV.js';
import './setup-progress.svelte-DpnO-FI3.js';
import './client-7aKHdcPD.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import 'lodash/get.js';
import { d as calcCourseProgress, e as calcProgressRate } from './functions-Dfftm0vV.js';
import './landing-page-1a54p-PE.js';
import './app-CdpE9djd.js';
import './index4-CY3O4yvX.js';
import { T as copyCourseModal, P as deleteCourseModal } from './submission-CIIjGYOS.js';
import './exports-DiyTWREe.js';
import { g as goto } from './client2-CqohmrW2.js';
import { c as getStudentCourseComplianceStatusKey, d as getStudentCourseComplianceStatusVariant, g as getStudentCourseComplianceDate } from './compliance-utils-UIprJIyn.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './domains-D9J1UytB.js';
import { I as Image_1 } from './image2-BA-KJrg7.js';
import { c as calcCourseDiscount } from './course2-CiL0obJ7.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { R as Root, D as Dropdown_menu_trigger, a as Dropdown_menu_content, b as Dropdown_menu_item } from './index12-DrKMqqv6.js';
import { o as openCoursePreview, c as copyPublicCoursePageUrl } from './course-preview-H23ftDeh.js';
import { I as Icon_button } from './icon-button-Bm-ZFVBt.js';
import { E as Ellipsis_vertical } from './ellipsis-vertical-DuaSiu3W.js';
import { E as External_link } from './external-link2-fIhqfPmo.js';
import { C as Copy } from './copy-ra0N3Sls.js';
import { D as Dropdown_menu_separator } from './dropdown-menu-separator-DTaX7YPG.js';
import { C as Course_publish_badge } from './course-publish-badge-uyQ9WCEZ.js';
import { P as Provider, R as Root$1, T as Tooltip_trigger, a as Tooltip_content } from './index13-ubjsmMp7.js';
import { T as Trending_up } from './trending-up-KD5BC5T8.js';
import { S as Shield_check } from './shield-check-mDLcvAsw.js';
import { U as User } from './user2-BbQOYQ0A.js';
import { C as Circle_dot } from './circle-dot-Cx8zZgu7.js';
import { G as Globe } from './globe-DoLv90oB.js';
import { A as Arrow_right } from './arrow-right2-BV5uTt9N.js';

const getCurrencyFormatter = (currency) => {
  const locale = currency == "NGN" ? "en-NG" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2
  });
};
function Card_dropdown($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      id,
      title,
      description,
      isPublished = false,
      courseType = null,
      slug = "",
      lmsPublicQuickOnly = false
    } = $$props;
    const showPublicCourseLinks = isPublished && courseType === "PUBLIC" && slug.trim().length > 0;
    function redirect(url) {
      goto(resolve(url, {}));
    }
    function handleShareCourse() {
      redirect(`/courses/${id}/settings#share`);
    }
    function handleInvite() {
      redirect(`/courses/${id}/people?add=true`);
    }
    function handleDeleteCourse() {
      store_mutate($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal, store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).open = true);
      store_mutate($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal, store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).id = id);
      store_mutate($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal, store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).title = title);
    }
    function handleCloneCourse() {
      store_mutate($$store_subs ??= {}, "$copyCourseModal", copyCourseModal, store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).open = true);
      store_mutate($$store_subs ??= {}, "$copyCourseModal", copyCourseModal, store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).id = id);
      store_mutate($$store_subs ??= {}, "$copyCourseModal", copyCourseModal, store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).title = title);
      store_mutate($$store_subs ??= {}, "$copyCourseModal", copyCourseModal, store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).description = description);
    }
    function handleOpenPublicCourse() {
      openCoursePreview({
        courseId: id,
        courseSlug: slug,
        currentOrgDomain: store_get($$store_subs ??= {}, "$currentOrgDomain", currentOrgDomain)
      });
    }
    async function handleCopyCourseUrl() {
      await copyPublicCoursePageUrl(slug, store_get($$store_subs ??= {}, "$currentOrgDomain", currentOrgDomain));
    }
    if (lmsPublicQuickOnly ? showPublicCourseLinks : true) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!---->`);
      Root($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          Dropdown_menu_trigger($$renderer3, {
            class: "ui:data-[state=open]:opacity-100 absolute top-6 right-6 z-40 flex items-center justify-center opacity-0 transition-all delay-150 duration-200 ease-in-out group-hover:opacity-100",
            onclick: (e) => e.stopPropagation(),
            children: ($$renderer4) => {
              Icon_button($$renderer4, {
                variant: "outline",
                children: ($$renderer5) => {
                  Ellipsis_vertical($$renderer5, { size: 16 });
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <!---->`);
          Dropdown_menu_content($$renderer3, {
            align: "end",
            children: ($$renderer4) => {
              if (lmsPublicQuickOnly) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<!---->`);
                Dropdown_menu_item($$renderer4, {
                  onclick: handleOpenPublicCourse,
                  children: ($$renderer5) => {
                    External_link($$renderer5, { size: 16, class: "mr-2" });
                    $$renderer5.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.open_public_course"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> <!---->`);
                Dropdown_menu_item($$renderer4, {
                  onclick: () => void handleCopyCourseUrl(),
                  children: ($$renderer5) => {
                    Copy($$renderer5, { size: 16, class: "mr-2" });
                    $$renderer5.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.copy_course_url"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!---->`);
              } else {
                $$renderer4.push("<!--[!-->");
                if (showPublicCourseLinks) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<!---->`);
                  Dropdown_menu_item($$renderer4, {
                    onclick: handleOpenPublicCourse,
                    children: ($$renderer5) => {
                      External_link($$renderer5, { size: 16, class: "mr-2" });
                      $$renderer5.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.open_public_course"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push(`<!----> <!---->`);
                  Dropdown_menu_item($$renderer4, {
                    onclick: () => void handleCopyCourseUrl(),
                    children: ($$renderer5) => {
                      Copy($$renderer5, { size: 16, class: "mr-2" });
                      $$renderer5.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.copy_course_url"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push(`<!----> <!---->`);
                  Dropdown_menu_separator($$renderer4, {});
                  $$renderer4.push(`<!---->`);
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]--> <!---->`);
                Dropdown_menu_item($$renderer4, {
                  onclick: handleCloneCourse,
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.clone"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> <!---->`);
                Dropdown_menu_item($$renderer4, {
                  onclick: handleShareCourse,
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.share"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> <!---->`);
                Dropdown_menu_item($$renderer4, {
                  onclick: handleInvite,
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.invite"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> <!---->`);
                Dropdown_menu_separator($$renderer4, {});
                $$renderer4.push(`<!----> <!---->`);
                Dropdown_menu_item($$renderer4, {
                  class: "text-red-600",
                  onclick: handleDeleteCourse,
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.delete"))}`);
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
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Course_tags_overflow($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { tags, variant = "card" } = $$props;
    const gapClass = variant === "table" ? "gap-2" : "gap-1";
    const displayTagCount = tags.length;
    const hiddenTags = tags.slice(displayTagCount);
    const hiddenTagsLabel = hiddenTags.map((t2) => t2.name).join(", ");
    if (tags.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="relative min-h-[12px] w-full min-w-0"><div${attr_class(`pointer-events-none invisible absolute top-0 left-0 -z-10 flex ${stringify(gapClass)}`)} aria-hidden="true"><!--[-->`);
      const each_array = ensure_array_like(tags);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        if (variant === "card") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<!---->`);
          Item_sub_description($$renderer2, {
            class: "border-border inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2",
            children: ($$renderer3) => {
              $$renderer3.push(`<span class="ui:bg-primary/60 inline-block h-1.5 w-1.5 shrink-0 rounded-full"${attr_style(tag.color ? `background-color: ${tag.color}` : void 0)} aria-hidden="true"></span> <span>${escape_html(tag.name)}</span>`);
            },
            $$slots: { default: true }
          });
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<span class="ui:text-muted-foreground text-2xs inline-flex shrink-0 items-center gap-1.5"><span class="ui:bg-primary/60 inline-block h-1.5 w-1.5 shrink-0 rounded-full"${attr_style(tag.color ? `background-color: ${tag.color}` : void 0)} aria-hidden="true"></span> <span>${escape_html(tag.name)}</span></span>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div> <span${attr_class(`border-border ui:text-muted-foreground pointer-events-none invisible absolute top-0 left-0 -z-10 inline-flex shrink-0 items-center rounded-full border ${stringify(variant === "table" ? "text-2xs px-1.5 py-0.5" : "px-2 text-xs")}`)} aria-hidden="true">+${escape_html(tags.length)}</span> <div${attr_class(`ui:text-muted-foreground flex min-w-0 flex-nowrap items-center overflow-hidden ${stringify(gapClass)} ${stringify(variant === "table" ? "text-2xs" : "")}`)}><!--[-->`);
      const each_array_1 = ensure_array_like(tags.slice(0, displayTagCount));
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let tag = each_array_1[$$index_1];
        if (variant === "card") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<!---->`);
          Item_sub_description($$renderer2, {
            class: "border-border inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2",
            children: ($$renderer3) => {
              $$renderer3.push(`<span class="ui:bg-primary/60 inline-block h-1.5 w-1.5 shrink-0 rounded-full"${attr_style(tag.color ? `background-color: ${tag.color}` : void 0)} aria-hidden="true"></span> <span>${escape_html(tag.name)}</span>`);
            },
            $$slots: { default: true }
          });
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<span class="inline-flex shrink-0 items-center gap-1.5"><span class="ui:bg-primary/60 inline-block h-1.5 w-1.5 shrink-0 rounded-full"${attr_style(tag.color ? `background-color: ${tag.color}` : void 0)} aria-hidden="true"></span> <span>${escape_html(tag.name)}</span></span>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--> `);
      if (hiddenTags.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<!---->`);
        Provider($$renderer2, {
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->`);
            Root$1($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->`);
                {
                  let child = function($$renderer5, { props }) {
                    if (variant === "card") {
                      $$renderer5.push("<!--[-->");
                      $$renderer5.push(`<!---->`);
                      Item_sub_description($$renderer5, spread_props([
                        props,
                        {
                          class: "border-border inline-flex shrink-0 cursor-default items-center gap-1.5 rounded-full border px-2",
                          "aria-label": store_get($$store_subs ??= {}, "$t", t)("courses.course_card.tags_overflow_aria", { count: hiddenTags.length }),
                          children: ($$renderer6) => {
                            $$renderer6.push(`<!---->+${escape_html(hiddenTags.length)}`);
                          },
                          $$slots: { default: true }
                        }
                      ]));
                      $$renderer5.push(`<!---->`);
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push(`<span${attributes({
                        ...props,
                        class: "border-border ui:text-muted-foreground text-2xs inline-flex shrink-0 cursor-default items-center rounded-full border px-1.5 py-0.5",
                        "aria-label": store_get($$store_subs ??= {}, "$t", t)("courses.course_card.tags_overflow_aria", { count: hiddenTags.length })
                      })}>+${escape_html(hiddenTags.length)}</span>`);
                    }
                    $$renderer5.push(`<!--]-->`);
                  };
                  Tooltip_trigger($$renderer4, { child, $$slots: { child: true } });
                }
                $$renderer4.push(`<!----> <!---->`);
                Tooltip_content($$renderer4, {
                  side: "top",
                  sideOffset: 4,
                  class: "max-w-xs",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(hiddenTagsLabel)}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!---->`);
          }
        });
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { course, isOnLandingPage, isLMS, isExplore, href, actions } = $$props;
    let {
      bannerImage,
      id = "",
      slug = "",
      title = "",
      description = "",
      isPublished = false,
      totalLessons = 0,
      totalExercises = 0,
      totalStudents = 0,
      currency = "USD",
      progressRate = 45,
      type,
      pricingData = { cost: 0, discount: 0, showDiscount: false }
    } = {
      id: course.id,
      slug: course.slug,
      bannerImage: course.logo || DEFAULT_COURSE_BANNER_IMAGE,
      title: course.title,
      type: course.type,
      description: course.description,
      isPublished: !!course.isPublished,
      pricingData: {
        cost: course.cost,
        discount: course.metadata?.discount || 0,
        showDiscount: course.metadata?.showDiscount || false
      },
      currency: course.currency,
      totalLessons: course.lessonCount,
      totalExercises: (() => {
        const c = course;
        return typeof c.exerciseCount === "number" ? c.exerciseCount : 0;
      })(),
      progressRate: (() => {
        const c = course;
        if (typeof c.exerciseCount === "number" && typeof c.exercisesCompleted === "number") {
          return calcCourseProgress({
            lessonsCompleted: "progressRate" in course ? course.progressRate ?? 0 : 0,
            totalLessons: course.lessonCount ?? 0,
            exercisesCompleted: c.exercisesCompleted,
            totalExercises: c.exerciseCount
          });
        }
        return calcProgressRate("progressRate" in course ? course.progressRate : 0, course.lessonCount);
      })(),
      totalStudents: "totalStudents" in course ? course.totalStudents : 0
    };
    let formatter = getCurrencyFormatter(currency);
    const courseTags = "tags" in course && Array.isArray(course.tags) ? course.tags : [];
    const COURSE_TAG = {
      ["LIVE_CLASS"]: {
        style: "",
        label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.settings.live_class"),
        icon: Circle_dot,
        iconStyle: "custom text-red-700"
      },
      ["SELF_PACED"]: {
        style: "",
        label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.settings.self_paced"),
        icon: User,
        iconStyle: "custom ui:text-primary"
      },
      ["COMPLIANCE"]: {
        style: "",
        label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.settings.compliance"),
        icon: Shield_check,
        iconStyle: "custom text-emerald-700"
      },
      SPECIALIZATION: {
        style: "",
        label: store_get($$store_subs ??= {}, "$t", t)("specialization.course_tag"),
        icon: Trending_up
      }
    };
    let cost = calcCourseDiscount(pricingData.discount, pricingData.cost ?? 0, !!pricingData.showDiscount);
    let courseUrl = (() => {
      if (href) {
        return href;
      }
      if (isOnLandingPage || isExplore) {
        if (!slug) {
          return void 0;
        }
        return `/course/${slug}`;
      }
      return `/courses/${id}${isLMS ? "/lessons?next=true" : ""}`;
    })();
    const typeBadge = type && COURSE_TAG[type] ? {
      label: COURSE_TAG[type].label,
      icon: COURSE_TAG[type].icon,
      iconClass: COURSE_TAG[type].iconStyle
    } : void 0;
    const visibilityBadge = type === "PUBLIC" ? {
      label: store_get($$store_subs ??= {}, "$t", t)("courses.course_card.public_badge"),
      icon: Globe,
      iconClass: "custom ui:text-primary size-3.5 shrink-0"
    } : void 0;
    const showLmsPublicCourseMenu = isLMS && type === "PUBLIC" && !!slug?.trim() && isPublished;
    const complianceStatusKey = isLMS && type === "COMPLIANCE" && !isExplore ? getStudentCourseComplianceStatusKey(course) : null;
    const complianceStatusVariant = isLMS && type === "COMPLIANCE" && !isExplore ? getStudentCourseComplianceStatusVariant(course) : "outline";
    const complianceDate = isLMS && type === "COMPLIANCE" && !isExplore ? getStudentCourseComplianceDate(course) : null;
    function formatDate(value) {
      if (!value) {
        return "";
      }
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) {
        return "";
      }
      return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
    }
    {
      let media = function($$renderer3) {
        Image_1($$renderer3, {
          src: bannerImage,
          alt: "Course banner image",
          className: "w-full h-full rounded-sm object-cover"
        });
      }, overlay = function($$renderer3) {
        if (actions) {
          $$renderer3.push("<!--[-->");
          actions($$renderer3);
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (!isOnLandingPage) {
            $$renderer3.push("<!--[-->");
            if (!isLMS) {
              $$renderer3.push("<!--[-->");
              Card_dropdown($$renderer3, { id, title, description, isPublished, courseType: type, slug });
            } else {
              $$renderer3.push("<!--[!-->");
              if (showLmsPublicCourseMenu) {
                $$renderer3.push("<!--[-->");
                Card_dropdown($$renderer3, {
                  id,
                  title,
                  description,
                  isPublished,
                  courseType: type,
                  slug,
                  lmsPublicQuickOnly: true
                });
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]-->`);
            }
            $$renderer3.push(`<!--]-->`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      }, tags = function($$renderer3) {
        if (!isLMS) {
          $$renderer3.push("<!--[-->");
          Course_tags_overflow($$renderer3, { tags: courseTags, variant: "card" });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      }, footer = function($$renderer3) {
        $$renderer3.push(`<div${attr_class(`flex justify-between ${stringify(isLMS && "items-center")} w-full`)}><div class="w-[60%]">`);
        if (isLMS || isOnLandingPage) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p${attr_class(`text-xs ${stringify(!isLMS && "pl-2")} flex gap-1 dark:text-white`)}><span>${escape_html(totalLessons)}
              ${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.lessons_number"))}</span> &amp; <span>${escape_html(pluralize(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.exercise"), totalExercises, true))}</span></p>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> <div class="py-2 text-xs">`);
        if (isOnLandingPage) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<span class="px-2">`);
          if (!cost) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.free"))}`);
          } else {
            $$renderer3.push("<!--[!-->");
            if (pricingData.showDiscount) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`${escape_html(formatter.format(cost))} <span class="line-through">${escape_html(formatter?.format(pricingData?.cost ?? 0))}</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`${escape_html(formatter.format(cost))}`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></span>`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (isLMS) {
            $$renderer3.push("<!--[-->");
            if (!isExplore) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<div class="flex w-3/4 items-center gap-2">`);
              Progress($$renderer3, { value: progressRate });
              $$renderer3.push(`<!----> <p class="ui:text-muted-foreground text-xs">${escape_html(progressRate)}%</p></div> `);
              if (type === "COMPLIANCE") {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<div class="mt-2 flex flex-wrap items-center gap-2">`);
                if (complianceStatusKey) {
                  $$renderer3.push("<!--[-->");
                  Badge($$renderer3, {
                    variant: complianceStatusVariant,
                    children: ($$renderer4) => {
                      $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(complianceStatusKey))}`);
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]--> `);
                if (complianceDate?.value) {
                  $$renderer3.push("<!--[-->");
                  $$renderer3.push(`<p class="ui:text-muted-foreground text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)(complianceDate.labelKey))}: ${escape_html(formatDate(complianceDate.value))}</p>`);
                } else {
                  $$renderer3.push("<!--[!-->");
                }
                $$renderer3.push(`<!--]--></div>`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]-->`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          } else {
            $$renderer3.push("<!--[!-->");
            Course_publish_badge($$renderer3, { isPublished });
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div></div> `);
        if (isLMS) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            variant: "outline",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(isExplore ? store_get($$store_subs ??= {}, "$t", t)("courses.course_card.learn_more") : store_get($$store_subs ??= {}, "$t", t)("courses.course_card.continue_course"))} `);
              Arrow_right($$renderer4, { class: "custom" });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
          if (!isOnLandingPage) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="flex flex-col justify-end gap-1 text-right"><p class="pl-2 text-xs whitespace-nowrap dark:text-white"><span>${escape_html(totalLessons)}
              ${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.lessons_number"))}</span> &amp; <span>${escape_html(pluralize(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.exercise"), totalExercises, true))}</span></p> <p class="pl-2 text-xs dark:text-white">${escape_html(pluralize(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.students"), totalStudents, true))}</p></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div>`);
      };
      Course_card($$renderer2, {
        href: courseUrl ? resolve(courseUrl, {}) : void 0,
        title,
        description,
        typeBadge,
        visibilityBadge,
        class: "group relative",
        media,
        overlay,
        tags,
        footer
      });
    }
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Card as C };
//# sourceMappingURL=card-ySOuMliw.js.map
