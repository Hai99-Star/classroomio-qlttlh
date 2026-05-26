import { a as store_get, n as escape_html, u as unsubscribe_stores, b as spread_props } from './index2-Eg0dVEDW.js';
import { g as goto } from './client2-CqohmrW2.js';
import { r as resolve } from './server3-VLoL706W.js';
import { C as Circle_check_icon } from './circle-check-icon-De2_dpHS.js';
import { B as Button } from './button-McsHA0hU.js';
import { P as Provider, R as Root, T as Tooltip_trigger, a as Tooltip_content } from './index13-C4Mtu7Q0.js';
import { a as isOrgStudent } from './app-DrlCEKij.js';
import { t } from './translations-BxDrjLWK.js';
import './index4-DxtvI9Cx.js';
import './submission-CIIjGYOS.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import './org-BIDTy0Q0.js';
import './question-type-capabilities-B1VkdJbc.js';
import { c as courseApi } from './course.svelte-COVg9MQ9.js';
import { C as ContentType } from './content-BYLGOVzm.js';
import { l as lessonApi } from './lesson.svelte-DHSyMYln.js';
import { c as getOrderedNavigableContent, b as getContentRoute } from './question-container.svelte_svelte_type_style_lang-Cx6VgeOH.js';
import { o as openCourseCompletionModal } from './course-completion-modal-B9jcuT_n.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { C as Chevron_right } from './chevron-right-C3Al4Cvl.js';

function Chevron_left($$renderer, $$props) {
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
    const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
    Icon($$renderer2, spread_props([
      { name: "chevron-left" },
      /**
       * @component @name ChevronLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUgMTgtNi02IDYtNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chevron-left
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
function Content_navigation_actions($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { lessonId, courseId, exerciseId } = $$props;
    let isMarkingComplete = false;
    const navigableContentItems = getOrderedNavigableContent(courseApi.course);
    const lessonItems = navigableContentItems.filter((item) => item.type === ContentType.Lesson);
    const prevNextContent = (() => {
      const currentId = lessonId ?? exerciseId;
      const currentType = lessonId ? ContentType.Lesson : ContentType.Exercise;
      if (!currentId) return { prev: null, next: null };
      const idx = navigableContentItems.findIndex((item) => item.type === currentType && item.id === currentId);
      if (idx < 0) return { prev: null, next: null };
      return {
        prev: navigableContentItems[idx - 1] ?? null,
        next: navigableContentItems[idx + 1] ?? null
      };
    })();
    function goToContent(target) {
      if (!target) return;
      const courseIdResolved = courseApi.course?.id;
      if (!courseIdResolved) return;
      const path = getContentRoute(courseIdResolved, target);
      if (!path) return;
      goto(resolve(path, {}));
    }
    const isPrevDisabled = !prevNextContent.prev;
    const isNextDisabled = !prevNextContent.next;
    const isLessonComplete = (() => {
      if (!lessonId) return false;
      const lesson = lessonItems.find((l) => l.id === lessonId);
      return lesson?.isComplete ?? false;
    })();
    const showMarkComplete = !!lessonId && !exerciseId;
    const currentLessonItem = lessonId ? lessonItems.find((l) => l.id === lessonId) : null;
    const isLessonLocked = store_get($$store_subs ??= {}, "$isOrgStudent", isOrgStudent) && currentLessonItem && !(currentLessonItem.isUnlocked ?? false);
    const isMarkCompleteDisabled = isMarkingComplete || isLessonLocked || isLessonComplete;
    async function markLessonComplete(currentLessonId) {
      isMarkingComplete = true;
      const lesson = lessonItems.find((entry) => entry.id === currentLessonId);
      const currentIsComplete = lesson?.isComplete ?? lessonApi.lesson?.isComplete ?? false;
      const isComplete = !currentIsComplete;
      await lessonApi.updateCompletion(courseId, currentLessonId, isComplete);
      if (lessonApi.success) {
        snackbar.success("snackbar.lessons.success.complete_marked");
        updateCourseContentCompletion(currentLessonId, isComplete);
        const allComplete = store_get($$store_subs ??= {}, "$isOrgStudent", isOrgStudent) && isComplete && navigableContentItems.length > 0 && navigableContentItems.every((item) => item.isComplete);
        if (allComplete) {
          openCourseCompletionModal(courseId);
        }
      } else {
        snackbar.error("snackbar.lessons.error.try_later");
      }
      isMarkingComplete = false;
    }
    function updateCourseContentCompletion(currentLessonId, isComplete) {
      if (!courseApi.course?.content) return;
      if (courseApi.course.content.grouped) {
        courseApi.course = {
          ...courseApi.course,
          content: {
            ...courseApi.course.content,
            sections: courseApi.course.content.sections.map((section) => ({
              ...section,
              items: section.items.map((item) => item.type === ContentType.Lesson && item.id === currentLessonId ? { ...item, isComplete } : item)
            }))
          }
        };
        return;
      }
      courseApi.course = {
        ...courseApi.course,
        content: {
          ...courseApi.course.content,
          items: courseApi.course.content.items.map((item) => item.type === ContentType.Lesson && item.id === currentLessonId ? { ...item, isComplete } : item)
        }
      };
    }
    $$renderer2.push(`<div class="flex items-center gap-2">`);
    if (showMarkComplete && lessonId) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        size: "sm",
        variant: "secondary",
        onclick: () => markLessonComplete(lessonId),
        loading: isMarkingComplete,
        disabled: isMarkCompleteDisabled,
        children: ($$renderer3) => {
          Circle_check_icon($$renderer3, { size: 14, filled: isLessonComplete });
          $$renderer3.push(`<!----> <span class="text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.mark_as"))} ${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.complete"))}</span>`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <!---->`);
    Provider($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex items-center gap-1"><!---->`);
        Root($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Tooltip_trigger($$renderer4, {
              children: ($$renderer5) => {
                Button($$renderer5, {
                  size: "icon-sm",
                  variant: "outline",
                  onclick: () => goToContent(prevNextContent.prev),
                  disabled: isPrevDisabled,
                  "aria-label": store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.prev"),
                  children: ($$renderer6) => {
                    Chevron_left($$renderer6, { size: 14 });
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Tooltip_content($$renderer4, {
              side: "bottom",
              sideOffset: 4,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.prev_shortcut"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Root($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Tooltip_trigger($$renderer4, {
              children: ($$renderer5) => {
                Button($$renderer5, {
                  size: "icon-sm",
                  variant: "outline",
                  onclick: () => goToContent(prevNextContent.next),
                  disabled: isNextDisabled,
                  "aria-label": store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.next"),
                  children: ($$renderer6) => {
                    Chevron_right($$renderer6, { size: 14 });
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Tooltip_content($$renderer4, {
              side: "bottom",
              sideOffset: 4,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.next_shortcut"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      }
    });
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Content_navigation_actions as C, Chevron_left as a };
//# sourceMappingURL=content-navigation-actions-kHj_--cZ.js.map
