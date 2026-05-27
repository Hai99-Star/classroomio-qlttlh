import { a as store_get, u as unsubscribe_stores, c as bind_props, l as attr_class, j as clsx, n as escape_html, b as spread_props, d as attr, e as stringify, f as ensure_array_like, z as store_mutate, m as attr_style, A as invalid_default_snippet } from './index2-Eg0dVEDW.js';
import get from 'lodash/get.js';
import pluralize from 'pluralize';
import { p as page } from './index5-nlVlCL1t.js';
import { o as onDestroy } from './index-server-CicpYXzh.js';
import { r as resolve } from './server3-VLoL706W.js';
import { S as Safe_html_content } from './safe-html-content-B3tL84oN.js';
import { B as Blurfade, m as motionValue, a as motion, s as sync } from './blurfade-BtQcpqGq.js';
import { c as cn } from './index6-DijlZyMe.js';
import { c as getLectureNo } from './functions-Dfftm0vV.js';
import { n as normalizeLandingPageSettings } from './landing-page-1a54p-PE.js';
import { c as currentOrg } from './org-t71AQfHV.js';
import { b as basePath } from './app-CdpE9djd.js';
import { u as user } from './user-Ahqcoe6u.js';
import { t } from './translations-BxDrjLWK.js';
import { c as calDateDiff } from './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import { h as handleOpenWidget, U as Upload_widget, r as reviewsModalStore } from './upload-widget-E92TgxOV.js';
import './index4-CY3O4yvX.js';
import './submission-CIIjGYOS.js';
import './question-type-capabilities-B1VkdJbc.js';
import './exports-DiyTWREe.js';
import { g as goto } from './client2-CqohmrW2.js';
import { c as courseApi } from './course.svelte-DAbi1vVF.js';
import { C as ContentType } from './domains-D9J1UytB.js';
import { B as Button } from './button-McsHA0hU.js';
import { C as Chip } from './chip-BZT61Rcy.js';
import { U as Underline_tabs, a as Underline_tabs_list, b as Underline_tabs_trigger } from './underline-tabs-trigger-kfAMW9ai.js';
import { R as Root, D as Dialog_content } from './index7-D3vVTB5p.js';
import { I as Image_1 } from './image2-BA-KJrg7.js';
import { P as Powered_by } from './powered-by-BxMkJciK.js';
import { H as Html_render, P as Play } from './html-render-BjdW32kI.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-CG2pdu70.js';
import { c as calcCourseDiscount, i as isCourseFree } from './course2-CiL0obJ7.js';
import 'lodash/isNumber.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './event-ByDKS2H7.js';
import { I as Input_field } from './input-field-w4kZespe.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-D1aNdwc5.js';
import { c as capturePosthogEvent } from './index16-Bj79zRdC.js';
import { C as Chevron_down } from './chevron-down-Nb-i_SUX.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { U as Users } from './users-CS_ofwgc.js';
import { B as Book_open } from './book-open-gUTgx0US.js';
import { C as Clock } from './clock-CYOMG4Z1.js';
import { U as User } from './user2-BbQOYQ0A.js';

function Star($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "star" },
      /**
       * @component @name Star
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuNTI1IDIuMjk1YS41My41MyAwIDAgMSAuOTUgMGwyLjMxIDQuNjc5YTIuMTIzIDIuMTIzIDAgMCAwIDEuNTk1IDEuMTZsNS4xNjYuNzU2YS41My41MyAwIDAgMSAuMjk0LjkwNGwtMy43MzYgMy42MzhhMi4xMjMgMi4xMjMgMCAwIDAtLjYxMSAxLjg3OGwuODgyIDUuMTRhLjUzLjUzIDAgMCAxLS43NzEuNTZsLTQuNjE4LTIuNDI4YTIuMTIyIDIuMTIyIDAgMCAwLTEuOTczIDBMNi4zOTYgMjEuMDFhLjUzLjUzIDAgMCAxLS43Ny0uNTZsLjg4MS01LjEzOWEyLjEyMiAyLjEyMiAwIDAgMC0uNjExLTEuODc5TDIuMTYgOS43OTVhLjUzLjUzIDAgMCAxIC4yOTQtLjkwNmw1LjE2NS0uNzU1YTIuMTIyIDIuMTIyIDAgMCAwIDEuNTk3LTEuMTZ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/star
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
const useCombineMotionValues = (values, combineValues) => {
  let subscriptions = [];
  let vals = values;
  const unsubscribe = () => {
    subscriptions.forEach((unsubscribe2) => unsubscribe2());
  };
  const subscribe = () => {
    subscriptions = vals.map((val) => val.onChange(handler));
    updateValue();
  };
  const value = motionValue(combineValues(), () => {
    unsubscribe();
    subscribe();
    return unsubscribe;
  });
  let updateValue = () => {
    value.set(combineValues());
  };
  const handler = () => {
    sync.update(updateValue, false, true);
  };
  value.reset = (_values, _combineValues) => {
    vals = _values;
    unsubscribe();
    updateValue = () => {
      value.set(_combineValues());
    };
    subscribe();
  };
  return value;
};
const useMotionTemplate = (fragments, ...values) => {
  let numFragments = fragments.length;
  const buildValue = () => {
    let output = ``;
    for (let i = 0; i < numFragments; i++) {
      output += fragments[i];
      const value2 = values[i];
      if (value2) output += values[i].get();
    }
    return output;
  };
  const value = useCombineMotionValues(values, buildValue);
  value.resetInner = value.reset;
  value.reset = (f, ...vs) => {
    numFragments = f.length;
    value.resetInner(vs, buildValue);
  };
  return value;
};
function Sparkle_particle($$renderer, $$props) {
  let { id, x, y, color, delay, scale } = $$props;
  motion($$renderer, {
    initial: { opacity: 0, left: x, top: y },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, scale, 0],
      rotate: [75, 120, 150]
    },
    transition: { duration: 0.8, repeat: Infinity, delay },
    children: invalid_default_snippet,
    $$slots: {
      default: ($$renderer2, { motion: motion2 }) => {
        $$renderer2.push(`<div${attr("id", id)} class="pointer-events-none absolute z-20"${attr_style("", { left: x, top: y })}><svg width="21" height="21" viewBox="0 0 21 21" class="block"><path d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"${attr("fill", color)}></path></svg></div>`);
      }
    }
  });
}
function Sparkle_text($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      text = "Hello World",
      colors = { first: "#9E7AFF", second: "#FE8BBB" },
      class: className = ""
    } = $$props;
    let sparkles = [];
    let interval;
    onDestroy(() => clearInterval(interval));
    $$renderer2.push(`<div${attr_class(clsx(className))}${attr_style("", {
      "--sparkles-first-color": `${stringify(colors.first)};`,
      "--sparkles-second-color": `${stringify(colors.second)};`
    })}><span class="relative inline-block"><!--[-->`);
    const each_array = ensure_array_like(sparkles);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      Sparkle_particle($$renderer2, spread_props([item]));
    }
    $$renderer2.push(`<!--]--> <strong>${escape_html(text)}</strong></span></div>`);
  });
}
function Magic_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      gradientOpacity = 0.8,
      class: className = "",
      children
    } = $$props;
    const gradSize = motionValue(200);
    const gradColor = motionValue("#262626");
    const mouseX = motionValue(-200);
    const mouseY = motionValue(-200);
    const bg = useMotionTemplate`radial-gradient(${gradSize}px circle at ${mouseX}px ${mouseY}px, ${gradColor}, transparent 100%)`;
    $$renderer2.push(`<div${attr_class(clsx(cn("group relative flex size-full justify-center overflow-hidden rounded-xl border bg-neutral-100 py-4 text-black dark:bg-neutral-900 dark:text-white", className)))}><div class="relative z-10">`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="flex h-full items-center justify-center text-center"><p class="text-2xl">Magic Card</p></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    motion($$renderer2, {
      style: { background: bg, opacity: gradientOpacity },
      children: invalid_default_snippet,
      $$slots: {
        default: ($$renderer3, { motion: motion2 }) => {
          $$renderer3.push(`<div class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>`);
        }
      }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
const NAV_ITEM_KEY = {
  REQUIREMENT: "#requirement",
  DESCRIPTION: "#description",
  GOALS: "#goals",
  CERTIFICATE: "#certificate",
  LESSONS: "#lessons",
  REVIEWS: "#reviews",
  INSTRUCTOR: "#instructor"
};
const NAV_ITEMS = [
  {
    key: NAV_ITEM_KEY.REQUIREMENT,
    label: "course.navItem.landing_page.editor.title.requirement"
  },
  {
    key: NAV_ITEM_KEY.DESCRIPTION,
    label: "course.navItem.landing_page.editor.title.description"
  },
  {
    key: NAV_ITEM_KEY.GOALS,
    label: "course.navItem.landing_page.editor.title.goals"
  },
  {
    key: NAV_ITEM_KEY.CERTIFICATE,
    label: "course.navItem.landing_page.editor.title.certificate"
  },
  {
    key: NAV_ITEM_KEY.LESSONS,
    label: "course.navItems.nav_content"
  },
  {
    key: NAV_ITEM_KEY.REVIEWS,
    label: "course.navItem.landing_page.editor.title.reviews"
  },
  {
    key: NAV_ITEM_KEY.INSTRUCTOR,
    label: "course.navItem.landing_page.editor.title.instructor"
  }
];
function sortLessons(lessons) {
  return [...lessons].sort((a, b) => new Date(a.createdAt || "").getTime() - new Date(b.createdAt || "").getTime()).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
function getLessonsFromItems(items) {
  const lessonItems = items.filter((item) => item.type === ContentType.Lesson);
  const lessons = lessonItems.map((lesson) => ({
    id: lesson.id,
    title: lesson.title,
    order: lesson.order ?? null,
    createdAt: lesson.createdAt ?? null
  }));
  return lessons;
}
function getExerciseCountFromItems(items) {
  return items.filter((item) => item.type === ContentType.Exercise).length;
}
function getCourseLessons(course) {
  if (!course?.content) return [];
  if (course.content.grouped) {
    const groupedLessons = course.content.sections.flatMap((section) => getLessonsFromItems(section.items));
    return sortLessons(groupedLessons);
  }
  if (!course.content.items.length) return [];
  return getLessonsFromItems(course.content.items);
}
function getCourseSections(course) {
  if (!course?.content) return [];
  if (course.content.grouped) {
    return course.content.sections.map((section) => {
      const lessons = getLessonsFromItems(section.items);
      return {
        id: section.id,
        title: section.title ?? course.title ?? "Lessons",
        lessons,
        exerciseCount: getExerciseCountFromItems(section.items)
      };
    });
  }
  if (!course.content.items.length) return [];
  return [
    {
      id: "ungrouped",
      title: course.title ?? "Lessons",
      lessons: getLessonsFromItems(course.content.items),
      exerciseCount: getExerciseCountFromItems(course.content.items)
    }
  ];
}
function getTotalLessons(sections) {
  return sections.reduce((total, section) => {
    return total + section.lessons.length;
  }, 0);
}
function filterNavItems(course, reviews) {
  const rules = get(course, "metadata.sectionDisplay", {});
  return NAV_ITEMS.filter((item) => {
    const key = item.key;
    if (typeof rules[key] === "boolean") {
      return !!rules[key];
    }
    if (key === NAV_ITEM_KEY.REVIEWS) {
      return reviews.length > 0;
    }
    return true;
  });
}
function Payment_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { open = false, paymentLink = "", courseId = "" } = $$props;
    let fields = { fullname: "", email: "" };
    let errors = { fullname: "", email: "" };
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
            class: "w-96",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->Process course payment`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<form>`);
                Input_field($$renderer5, {
                  label: "Your Fullname",
                  autoFocus: true,
                  placeholder: "John Doe",
                  className: "mb-4",
                  isRequired: true,
                  autoComplete: false,
                  errorMessage: errors.fullname,
                  get value() {
                    return fields.fullname;
                  },
                  set value($$value) {
                    fields.fullname = $$value;
                    $$settled = false;
                  }
                });
                $$renderer5.push(`<!----> `);
                Input_field($$renderer5, {
                  label: "Your Email",
                  placeholder: "johndoe@email.com",
                  className: "mb-4",
                  isRequired: true,
                  autoComplete: false,
                  errorMessage: errors.email,
                  get value() {
                    return fields.email;
                  },
                  set value($$value) {
                    fields.email = $$value;
                    $$settled = false;
                  }
                });
                $$renderer5.push(`<!----> <div class="mt-5 flex flex-row-reverse items-center">`);
                Button($$renderer5, {
                  type: "submit",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(paymentLink ? "Next" : "Finish")}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----></div></form>`);
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
    bind_props($$props, { open });
  });
}
function Pricing_section($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      className = "",
      editMode = false,
      courseData,
      startCoursePayment = false,
      mobile = false
    } = $$props;
    let openModal = false;
    const discount = get(courseData, "metadata.discount", 0);
    const calculatedCost = calcCourseDiscount(discount, courseData.cost || 0, !!courseData.metadata?.showDiscount);
    const isFree = isCourseFree(calculatedCost);
    async function handleJoinCourse() {
      if (editMode || !store_get($$store_subs ??= {}, "$currentOrg", currentOrg).siteName) return;
      capturePosthogEvent("join_course", {
        course_id: courseData.id,
        course_title: courseData.title,
        course_cost: courseData.cost,
        course_free: isFree
      });
      if (isFree) {
        goto(`/course/${courseData.slug}/enroll`);
      } else {
        openModal = true;
      }
      startCoursePayment = false;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Payment_modal($$renderer3, {
        paymentLink: get(courseData, "metadata.paymentLink", ""),
        courseId: courseData.id,
        get open() {
          return openModal;
        },
        set open($$value) {
          openModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      if (mobile) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="sticky bottom-0 flex h-fit w-full items-center justify-center bg-gray-50 transition duration-300 lg:hidden dark:bg-neutral-800"><aside${attr_class(`sticky z-0 w-[90%] max-w-[405px] bg-gray-50 lg:hidden dark:bg-neutral-800 ${stringify(className)}`)}><div class="flex items-center justify-center gap-3 px-3 py-3"><div class="text-center">`);
        if (courseData?.metadata?.allowNewStudent) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="flex items-center gap-1 text-sm font-medium dark:text-white">${escape_html(calculatedCost)} `);
          if (isFree) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<span class="text-xs">(${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.free"))})</span>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></p> `);
          if (courseData?.metadata?.showDiscount) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="text-sm font-light text-gray-500 dark:text-white">${escape_html(discount)}% ${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.discount"))}. <span class="line-through">${escape_html(courseData.cost)}</span></p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<p class="text-lg dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.not_accepting"))}</p>`);
        }
        $$renderer3.push(`<!--]--></div> <div class="flex h-full w-full flex-col items-center">`);
        Button($$renderer3, {
          onclick: handleJoinCourse,
          disabled: !courseData.metadata?.allowNewStudent,
          class: "w-full",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(isFree ? store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.enroll") : store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.buy"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div></div></aside></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<aside${attr_class(`ui:border-border ui:bg-card relative w-[90%] max-w-[405px] rounded-lg border lg:sticky lg:w-[350px] lg:min-w-[250px] xl:w-[405px] xl:min-w-[330px] ${stringify(editMode ? "lg:top-0" : "lg:top-10")} h-fit ${stringify(className)}`)}><div class="p-4 lg:p-10"><div class="mb-6">`);
        if (courseData?.metadata?.allowNewStudent) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="text-2xl font-bold dark:text-white">${escape_html(calculatedCost)} `);
          if (isFree) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<span class="text-base font-normal">(${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.free"))})</span>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></p> `);
          if (courseData?.metadata?.showDiscount) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="mt-1 text-sm font-light text-gray-500 dark:text-white">${escape_html(discount)}% ${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.discount"))}. <span class="line-through">${escape_html(courseData.cost)}</span></p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<p class="text-lg dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.not_accepting"))}</p>`);
        }
        $$renderer3.push(`<!--]--></div> <div class="flex w-full flex-col items-center">`);
        Button($$renderer3, {
          class: "mb-3 h-12 w-full text-base font-semibold",
          onclick: handleJoinCourse,
          disabled: !courseData.metadata?.allowNewStudent,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(isFree ? store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.enroll") : store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.buy"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if (courseData?.metadata?.showDiscount && courseData.metadata.allowNewStudent) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="text-sm font-light text-gray-500 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.pricing_section.bird"))}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></div> `);
        if (courseData?.metadata?.reward?.show) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="ui:border-t ui:border-border flex flex-col items-center p-10">`);
          Html_render($$renderer3, {
            className: "text-sm font-light leading-relaxed",
            children: ($$renderer4) => {
              Safe_html_content($$renderer4, { content: get(courseData, "metadata.reward.description", "") });
            }
          });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></aside>`);
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { startCoursePayment });
  });
}
function Nav_section($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { id, children } = $$props;
    let includesHash = page.url.hash?.includes(id) ?? false;
    $$renderer2.push(`<section${attr("id", id)}${attr_class(clsx(cn("border-b border-gray-300 pt-5 pb-5", includesHash && "pt-22")))}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></section>`);
  });
}
function Sections_display($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { title, lessonCount, exerciseCount } = $$props;
    $$renderer2.push(`<div class="my-3 w-full rounded-md"><button class="flex w-full items-center justify-between bg-[#F7F7F7] py-3 pr-4 pl-3 text-sm font-medium dark:bg-neutral-700"><span class="flex items-center gap-2">`);
    {
      $$renderer2.push("<!--[!-->");
      Chevron_down($$renderer2, { size: 16 });
    }
    $$renderer2.push(`<!--]--> ${escape_html(title)}</span> <span class="text-xs font-normal">${escape_html(pluralize(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.lessons"), lessonCount, true))},
      ${escape_html(pluralize(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.exercises"), exerciseCount, true))}</span></button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Course_landing_page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      editMode = false,
      courseData = void 0,
      showStandaloneShell = false
    } = $$props;
    const showMarketingHero = showStandaloneShell || editMode;
    const landingSettings = normalizeLandingPageSettings(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).landingpage);
    const heroShellClass = landingSettings.theme === "classic" ? "ui:w-full ui:bg-muted/10 ui:text-foreground ui:font-sans" : "ui:w-full ui:bg-background ui:text-foreground ui:font-sans";
    store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name || get(courseData, "org.name", "") || "ClassroomIO";
    store_get($$store_subs ??= {}, "$currentOrg", currentOrg).avatarUrl || void 0;
    store_get($$store_subs ??= {}, "$user", user).isLoggedIn ? {
      label: t.get(store_get($$store_subs ??= {}, "$basePath", basePath) === "/lms" || store_get($$store_subs ??= {}, "$basePath", basePath) === "#" ? "navigation.goto_lms" : "navigation.goto_dashboard"),
      href: resolve(
        store_get($$store_subs ??= {}, "$basePath", basePath) !== "#" ? store_get($$store_subs ??= {}, "$basePath", basePath) : "/lms",
        {}
      )
    } : { label: t.get("navigation.login") };
    (() => {
      const slug = typeof courseData.slug === "string" && courseData.slug.length > 0 ? courseData.slug : "";
      const enrollHref = slug ? resolve(`/course/${slug}/enroll`, {}) : "#";
      const enrollmentsOpen = get(courseData, "metadata.allowNewStudent") === true;
      return {
        ...landingSettings.hero,
        heading: get(courseData, "title", "") || landingSettings.hero.heading,
        subheading: get(courseData, "description", "") || landingSettings.hero.subheading,
        primaryAction: {
          label: t.get("course.navItem.landing_page.start_course"),
          href: enrollHref,
          disabled: editMode || !enrollmentsOpen
        },
        image: get(courseData, "logo", "") || landingSettings.hero.image
      };
    })();
    const lessonsLayoutIsGrouped = courseData.content?.grouped === true;
    const reviews = get(courseData, "metadata.reviews") || [];
    const lessons = getCourseLessons(courseData);
    const totalRatings = reviews?.reduce((acc = 0, review) => acc + (review?.rating || 0), 0);
    const averageRating = reviews?.length ? (totalRatings / reviews.length).toFixed(1) : null;
    const expandDescription = Array(reviews?.length ?? 0).fill(false);
    const instructor = get(courseData, "metadata.instructor") || {};
    const organizationName = get(courseData, "org.name") || store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name || "";
    const instructorName = (() => {
      const name = get(instructor, "name");
      return typeof name === "string" && name.trim().length > 0 ? name : organizationName;
    })();
    const instructorImageUrl = (() => {
      const imageUrl = get(instructor, "imgUrl");
      return typeof imageUrl === "string" && imageUrl.trim().length > 0 ? imageUrl : "/images/avatar.svg";
    })();
    const certificate = get(courseData, "metadata.certificate", { templateUrl: "/images/certificate-template.svg" });
    const navItems = filterNavItems(courseData, reviews);
    const navItemKeys = navItems.map((item) => item.key);
    let startCoursePayment = false;
    let activeNav = NAV_ITEMS[0].key;
    const courseSections = getCourseSections(courseData);
    const totalLessons = getTotalLessons(courseSections);
    const studentCount = courseData.group?.members?.length ?? 0;
    onDestroy(() => {
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (!editMode && showStandaloneShell) {
        $$renderer3.push("<!--[-->");
        Powered_by($$renderer3, {});
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <div class="flex w-full flex-col items-center bg-white dark:bg-black">`);
      if (showMarketingHero) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div${attr_class(clsx(heroShellClass))}>`);
        {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (editMode && store_get($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget).open) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="mx-auto w-full max-w-7xl px-6 py-2">`);
          Upload_widget($$renderer3, {
            imageURL: courseApi.course?.logo,
            onchange: (newLogo) => courseApi.course.logo = newLogo
          });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> `);
        if (reviews.length > 0 || studentCount > 0 || lessons.length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="w-full border-b border-gray-200 bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900"><div class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-6 px-6 py-4 text-sm md:justify-start">`);
          if (averageRating) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="flex items-center gap-1.5 text-gray-700 dark:text-gray-300">`);
            Star($$renderer3, { size: 16, class: "fill-yellow-400 text-yellow-400" });
            $$renderer3.push(`<!----> <span class="font-semibold">${escape_html(averageRating)}</span> <span class="text-gray-500 dark:text-gray-400">(${escape_html(reviews.length)} ${escape_html(reviews.length === 1 ? "review" : "reviews")})</span></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (studentCount > 0) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="flex items-center gap-1.5 text-gray-700 dark:text-gray-300">`);
            Users($$renderer3, { size: 16 });
            $$renderer3.push(`<!----> <span>${escape_html(studentCount)} ${escape_html(studentCount === 1 ? "student" : "students")}</span></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (lessons.length > 0) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="flex items-center gap-1.5 text-gray-700 dark:text-gray-300">`);
            Book_open($$renderer3, { size: 16 });
            $$renderer3.push(`<!----> <span>${escape_html(pluralize("lesson", lessons.length, true))}</span></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (courseData.type) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="flex items-center gap-1.5 text-gray-700 dark:text-gray-300">`);
            Clock($$renderer3, { size: 16 });
            $$renderer3.push(`<!----> <span>${escape_html(courseData.type === "LIVE_CLASS" ? "Live Class" : "Self-Paced")}</span></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <div class="w-full bg-white dark:bg-black"><div class="mx-auto my-2 flex w-full max-w-6xl flex-col-reverse items-center justify-between px-4 lg:flex-row lg:items-start lg:py-8"><div class="w-full max-w-[680px] min-w-[60%] p-3 lg:mr-10"><!---->`);
      Underline_tabs($$renderer3, {
        class: "py-2",
        get value() {
          return activeNav;
        },
        set value($$value) {
          activeNav = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Underline_tabs_list($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!--[-->`);
              const each_array = ensure_array_like(navItems);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let navItem = each_array[$$index];
                $$renderer5.push(`<!---->`);
                Underline_tabs_trigger($$renderer5, {
                  value: navItem.key,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<a${attr("href", resolve(page.url.pathname + navItem.key, {}))}>${escape_html(store_get($$store_subs ??= {}, "$t", t)(navItem.label))}</a>`);
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
      if (navItemKeys.includes(NAV_ITEM_KEY.REQUIREMENT)) {
        $$renderer3.push("<!--[-->");
        Nav_section($$renderer3, {
          id: "requirement",
          children: ($$renderer4) => {
            Blurfade($$renderer4, {
              delay: 0.1,
              children: ($$renderer5) => {
                $$renderer5.push(`<h3 class="mt-0 mb-3 text-2xl font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.requirement"))}</h3> `);
                Html_render($$renderer5, {
                  className: "text-sm font-light leading-relaxed",
                  children: ($$renderer6) => {
                    Safe_html_content($$renderer6, { content: get(courseData, "metadata.requirements", "") });
                  }
                });
                $$renderer5.push(`<!---->`);
              }
            });
          }
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (navItemKeys.includes(NAV_ITEM_KEY.DESCRIPTION)) {
        $$renderer3.push("<!--[-->");
        Nav_section($$renderer3, {
          id: "description",
          children: ($$renderer4) => {
            Blurfade($$renderer4, {
              delay: 0.1,
              children: ($$renderer5) => {
                $$renderer5.push(`<h3 class="mt-0 mb-3 text-2xl font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.description"))}</h3> `);
                Html_render($$renderer5, {
                  className: "dark:text-white text-sm font-light leading-relaxed",
                  children: ($$renderer6) => {
                    Safe_html_content($$renderer6, { content: get(courseData, "metadata.description", "") });
                  }
                });
                $$renderer5.push(`<!---->`);
              }
            });
          }
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (navItemKeys.includes(NAV_ITEM_KEY.GOALS)) {
        $$renderer3.push("<!--[-->");
        Nav_section($$renderer3, {
          id: "goals",
          children: ($$renderer4) => {
            Blurfade($$renderer4, {
              delay: 0.1,
              children: ($$renderer5) => {
                $$renderer5.push(`<h3 class="mt-0 mb-3 text-2xl font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.learn"))}</h3> `);
                Html_render($$renderer5, {
                  className: "text-sm font-light leading-relaxed",
                  children: ($$renderer6) => {
                    Safe_html_content($$renderer6, { content: get(courseData, "metadata.goals", "") });
                  }
                });
                $$renderer5.push(`<!---->`);
              }
            });
          }
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (navItemKeys.includes(NAV_ITEM_KEY.CERTIFICATE)) {
        $$renderer3.push("<!--[-->");
        Nav_section($$renderer3, {
          id: "certificate",
          children: ($$renderer4) => {
            Blurfade($$renderer4, {
              delay: 0.1,
              children: ($$renderer5) => {
                $$renderer5.push(`<h3 class="mt-0 text-2xl font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.certificate"))}</h3> <p class="mb-4 text-sm font-light dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.certificate_text"))}</p> `);
                Magic_card($$renderer5, {
                  gradientOpacity: 0.15,
                  class: "inline-block w-auto border-0 bg-transparent py-0 dark:bg-transparent",
                  children: ($$renderer6) => {
                    Image_1($$renderer6, {
                      src: certificate?.templateUrl,
                      alt: "certificate template",
                      className: "max-h-[215px] w-auto"
                    });
                  }
                });
                $$renderer5.push(`<!---->`);
              }
            });
          }
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (!lessonsLayoutIsGrouped) {
        $$renderer3.push("<!--[-->");
        Nav_section($$renderer3, {
          id: "lessons",
          children: ($$renderer4) => {
            Blurfade($$renderer4, {
              delay: 0.1,
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="mb-3 flex w-full items-center justify-between"><h3 class="mt-0 mb-3 text-2xl font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.content"))}</h3> <p class="text-sm font-light dark:text-white">${escape_html(pluralize("lesson", lessons.length, true))}</p></div> <div class="flex flex-wrap gap-2"><!--[-->`);
                const each_array_1 = ensure_array_like(lessons);
                for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
                  let lesson = each_array_1[index];
                  Blurfade($$renderer5, {
                    delay: 0.05 * Math.min(index, 10),
                    children: ($$renderer6) => {
                      $$renderer6.push(`<div class="rounded-lg border border-gray-200 px-3 py-1.5 transition-colors hover:border-gray-400 dark:border-neutral-700 dark:hover:border-neutral-500">`);
                      Chip($$renderer6, { value: getLectureNo(index + 1, "0") });
                      $$renderer6.push(`<!----> <p class="ml-2 inline text-xs font-light dark:text-white">${escape_html(lesson.title)}</p></div>`);
                    },
                    $$slots: { default: true }
                  });
                }
                $$renderer5.push(`<!--]--></div>`);
              }
            });
          }
        });
      } else {
        $$renderer3.push("<!--[!-->");
        Nav_section($$renderer3, {
          id: "lessons",
          children: ($$renderer4) => {
            Blurfade($$renderer4, {
              delay: 0.1,
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex items-center justify-between"><h1 class="text-2xl font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.course_content"))}</h1> <span class="text-xs font-normal">${escape_html(pluralize(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.modules"), courseSections.length, true))},
                  ${escape_html(pluralize(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.lessons"), totalLessons, true))}</span></div> <!--[-->`);
                const each_array_2 = ensure_array_like(courseSections);
                for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
                  let section = each_array_2[index];
                  Blurfade($$renderer5, {
                    delay: 0.05 * Math.min(index, 8),
                    children: ($$renderer6) => {
                      Sections_display($$renderer6, {
                        exerciseCount: section.exerciseCount,
                        lessonCount: section.lessons?.length,
                        lessons: section.lessons,
                        title: section.title
                      });
                    },
                    $$slots: { default: true }
                  });
                }
                $$renderer5.push(`<!--]-->`);
              }
            });
          }
        });
      }
      $$renderer3.push(`<!--]--> `);
      if (navItemKeys.includes(NAV_ITEM_KEY.REVIEWS)) {
        $$renderer3.push("<!--[-->");
        Nav_section($$renderer3, {
          id: "reviews",
          children: ($$renderer4) => {
            Blurfade($$renderer4, {
              delay: 0.1,
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="mb-6 flex items-center gap-3"><h2 class="text-2xl font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.reviews"))}</h2> `);
                if (averageRating) {
                  $$renderer5.push("<!--[-->");
                  Sparkle_text($$renderer5, {
                    text: averageRating,
                    colors: { first: "#facc15", second: "#f97316" },
                    class: "text-xl font-bold"
                  });
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]--></div>`);
              }
            });
            $$renderer4.push(`<!----> <div class="grid gap-4 sm:grid-cols-2"><!--[-->`);
            const each_array_3 = ensure_array_like(reviews.slice(0, 4));
            for (let id = 0, $$length = each_array_3.length; id < $$length; id++) {
              let review = each_array_3[id];
              if (!review.hide) {
                $$renderer4.push("<!--[-->");
                Blurfade($$renderer4, {
                  delay: 0.1 + id * 0.08,
                  children: ($$renderer5) => {
                    $$renderer5.push(`<div class="flex flex-row items-start gap-3 rounded-lg border border-gray-100 p-4 dark:border-neutral-800"><!---->`);
                    Avatar($$renderer5, {
                      class: "mt-1 size-10 shrink-0",
                      children: ($$renderer6) => {
                        if (review.avatar_url) {
                          $$renderer6.push("<!--[-->");
                          $$renderer6.push(`<!---->`);
                          Avatar_image($$renderer6, {
                            src: review.avatar_url,
                            alt: review.name ? review.name : "Avatar"
                          });
                          $$renderer6.push(`<!---->`);
                        } else {
                          $$renderer6.push("<!--[!-->");
                        }
                        $$renderer6.push(`<!--]--> <!---->`);
                        Avatar_fallback($$renderer6, {
                          children: ($$renderer7) => {
                            User($$renderer7, { class: "ui:size-5 ui:text-muted-foreground" });
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----> <div class="min-w-0 flex-1"><p class="mb-0.5 font-medium">${escape_html(review.name)}</p> <div class="mb-2 flex items-center gap-0.5"><!--[-->`);
                    const each_array_4 = ensure_array_like(Array(5));
                    for (let starIndex = 0, $$length2 = each_array_4.length; starIndex < $$length2; starIndex++) {
                      each_array_4[starIndex];
                      Star($$renderer5, {
                        size: 14,
                        class: starIndex < (review.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-neutral-600"
                      });
                    }
                    $$renderer5.push(`<!--]--></div> <div class="mb-2 overflow-hidden"${attr_style("", { "max-height": expandDescription[id] ? "none" : "60px" })}><p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">${escape_html(review.description)}</p></div> `);
                    if (!expandDescription[id] && review.description.split(" ").length > 12) {
                      $$renderer5.push("<!--[-->");
                      $$renderer5.push(`<button class="ui:text-primary text-sm font-normal underline">See More</button>`);
                    } else {
                      $$renderer5.push("<!--[!-->");
                    }
                    $$renderer5.push(`<!--]--> `);
                    if (expandDescription[id]) {
                      $$renderer5.push("<!--[-->");
                      $$renderer5.push(`<button class="ui:text-primary text-sm font-normal underline">See Less</button>`);
                    } else {
                      $$renderer5.push("<!--[!-->");
                    }
                    $$renderer5.push(`<!--]--></div></div>`);
                  }
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]--></div> `);
            if (reviews.length > 4) {
              $$renderer4.push("<!--[-->");
              Button($$renderer4, {
                class: "mt-4",
                variant: "outline",
                onclick: () => store_mutate($$store_subs ??= {}, "$reviewsModalStore", reviewsModalStore, store_get($$store_subs ??= {}, "$reviewsModalStore", reviewsModalStore).open = true),
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.see_all"))}`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> <!---->`);
            Root($$renderer4, {
              get open() {
                return store_get($$store_subs ??= {}, "$reviewsModalStore", reviewsModalStore).open;
              },
              set open($$value) {
                store_mutate($$store_subs ??= {}, "$reviewsModalStore", reviewsModalStore, store_get($$store_subs ??= {}, "$reviewsModalStore", reviewsModalStore).open = $$value);
                $$settled = false;
              },
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Dialog_content($$renderer5, {
                  class: "w-9/12",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->`);
                    Dialog_header($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->`);
                        Dialog_title($$renderer7, {
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.reviews_modal.title"))}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!---->`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> <div class="flex"><div class="w-1/3"><h2 class="text-xl">${escape_html(averageRating)}
                      ${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.reviews_modal.rating"))}</h2> <h2 class="mt-2 text-lg font-semibold">${escape_html(reviews.length)}
                      ${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.reviews_modal.ratings"))}</h2></div> <div class="flex w-4/6 flex-wrap"><!--[-->`);
                    const each_array_5 = ensure_array_like(reviews);
                    for (let id = 0, $$length = each_array_5.length; id < $$length; id++) {
                      let review = each_array_5[id];
                      $$renderer6.push(`<div class="my-2 flex w-full flex-row items-start"><!---->`);
                      Avatar($$renderer6, {
                        class: "mt-1 h-10 w-10",
                        children: ($$renderer7) => {
                          if (review.avatar_url) {
                            $$renderer7.push("<!--[-->");
                            $$renderer7.push(`<!---->`);
                            Avatar_image($$renderer7, {
                              src: review.avatar_url,
                              alt: review.name ? review.name : "Avatar"
                            });
                            $$renderer7.push(`<!---->`);
                          } else {
                            $$renderer7.push("<!--[!-->");
                          }
                          $$renderer7.push(`<!--]--> <!---->`);
                          Avatar_fallback($$renderer7, {
                            children: ($$renderer8) => {
                              User($$renderer8, { class: "ui:size-5 ui:text-muted-foreground" });
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!---->`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> <div class="w-11/12 pl-2.5"><p class="mb-0.5 font-medium">${escape_html(review.name)}</p> <div class="flex flex-row items-center gap-1"><div class="flex items-center gap-0.5"><!--[-->`);
                      const each_array_6 = ensure_array_like(Array(5));
                      for (let starIndex = 0, $$length2 = each_array_6.length; starIndex < $$length2; starIndex++) {
                        each_array_6[starIndex];
                        Star($$renderer6, {
                          size: 14,
                          class: starIndex < (review.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-neutral-600"
                        });
                      }
                      $$renderer6.push(`<!--]--></div> <p class="text-xs text-gray-600">${escape_html(calDateDiff(review.created_at))}</p></div> <div class="mb-2 overflow-hidden transition-all"${attr_style("", { "max-height": expandDescription[id] ? "none" : "60px" })}><p class="my-2 text-sm leading-relaxed text-gray-600">${escape_html(review.description)}</p></div></div></div>`);
                    }
                    $$renderer6.push(`<!--]--></div></div>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          }
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      Nav_section($$renderer3, {
        id: "instructor",
        children: ($$renderer4) => {
          Blurfade($$renderer4, {
            delay: 0.1,
            children: ($$renderer5) => {
              $$renderer5.push(`<h3 class="mt-0 mb-4 text-2xl font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.instructor"))}</h3> <div class="mb-4 flex items-center gap-4"><img alt="Author Avatar" class="block h-20 w-20 rounded-full object-cover ring-2 ring-gray-200 dark:ring-neutral-700"${attr("src", instructorImageUrl)}/> <div><p class="text-base font-medium dark:text-white">${escape_html(instructorName)}</p> <p class="text-sm text-gray-500 dark:text-gray-400">${escape_html(get(instructor, "role", ""))}</p> `);
              if (get(instructor, "courseNo", "")) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<p class="mt-1 flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300">`);
                Play($$renderer5, { size: 14, class: "filled" });
                $$renderer5.push(`<!----> <span>${escape_html(get(instructor, "courseNo", ""))}
                      ${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.courses"))}</span></p>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--></div></div> <p class="text-sm leading-relaxed font-light dark:text-white">${escape_html(get(instructor, "description", ""))}</p>`);
            }
          });
        }
      });
      $$renderer3.push(`<!----></div> `);
      Pricing_section($$renderer3, {
        courseData,
        editMode,
        className: "target-component",
        get startCoursePayment() {
          return startCoursePayment;
        },
        set startCoursePayment($$value) {
          startCoursePayment = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div> `);
      {
        $$renderer3.push("<!--[-->");
        Pricing_section($$renderer3, {
          courseData,
          editMode,
          mobile: true,
          className: "w-full",
          get startCoursePayment() {
            return startCoursePayment;
          },
          set startCoursePayment($$value) {
            startCoursePayment = $$value;
            $$settled = false;
          }
        });
      }
      $$renderer3.push(`<!--]--></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { courseData });
  });
}

export { Course_landing_page as C, NAV_ITEM_KEY as N };
//# sourceMappingURL=course-landing-page-DBzpdmD4.js.map
