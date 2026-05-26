import { E as Exercise } from './exercise-8V9pDq65.js';
import { L as Lesson } from './lesson-CRrxCXoW.js';
import { C as ContentType } from './content-BYLGOVzm.js';
import { b as spread_props } from './index2-Eg0dVEDW.js';
import { I as Icon } from './Icon-BfkBTjtA.js';

/* empty css                                  */
function Table_of_contents($$renderer, $$props) {
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
      ["path", { "d": "M16 5H3" }],
      ["path", { "d": "M16 12H3" }],
      ["path", { "d": "M16 19H3" }],
      ["path", { "d": "M21 5h.01" }],
      ["path", { "d": "M21 12h.01" }],
      ["path", { "d": "M21 19h.01" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "table-of-contents" },
      /**
       * @component @name TableOfContents
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgNUgzIiAvPgogIDxwYXRoIGQ9Ik0xNiAxMkgzIiAvPgogIDxwYXRoIGQ9Ik0xNiAxOUgzIiAvPgogIDxwYXRoIGQ9Ik0yMSA1aC4wMSIgLz4KICA8cGF0aCBkPSJNMjEgMTJoLjAxIiAvPgogIDxwYXRoIGQ9Ik0yMSAxOWguMDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/table-of-contents
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
const CONTENT_DEFINITIONS = {
  [ContentType.Section]: {
    label: "Section",
    icon: Table_of_contents
  },
  [ContentType.Lesson]: {
    label: "Lesson",
    icon: Lesson
  },
  [ContentType.Exercise]: {
    label: "Exercise",
    icon: Exercise
  }
};
const EMPTY_CONTENT = {
  grouped: false,
  sections: [],
  items: []
};
function getContentRoute(courseId, item) {
  if (item.type === ContentType.Lesson) {
    return `/courses/${courseId}/lessons/${item.id}`;
  }
  if (item.type === ContentType.Exercise) {
    return `/courses/${courseId}/exercises/${item.id}`;
  }
  if (item.type === ContentType.Section) {
    return `/courses/${courseId}/lessons#section-${item.id}`;
  }
  return "";
}
function getCourseContent(course) {
  return course?.content ?? EMPTY_CONTENT;
}
const NAVIGABLE_CONTENT_TYPES = [ContentType.Lesson, ContentType.Exercise];
function getOrderedNavigableContent(course) {
  const content = getCourseContent(course);
  const items = content.grouped ? content.sections.flatMap((s) => s.items) : content.items;
  return items.filter(
    (item) => NAVIGABLE_CONTENT_TYPES.includes(item.type)
  );
}
function getMentionableContent(course) {
  const content = getCourseContent(course);
  if (!content.grouped) {
    return content.items.filter((item) => NAVIGABLE_CONTENT_TYPES.includes(item.type)).map((item) => ({ id: item.id, title: item.title, type: item.type }));
  }
  const result = [];
  for (const section of content.sections) {
    if (section.id !== "ungrouped" && section.title) {
      result.push({ id: section.id, title: section.title, type: ContentType.Section });
    }
    for (const item of section.items) {
      if (NAVIGABLE_CONTENT_TYPES.includes(item.type)) {
        result.push({ id: item.id, title: item.title, type: item.type });
      }
    }
  }
  return result;
}

export { CONTENT_DEFINITIONS as C, Table_of_contents as T, getCourseContent as a, getContentRoute as b, getOrderedNavigableContent as c, getMentionableContent as g };
//# sourceMappingURL=question-container.svelte_svelte_type_style_lang-Cx6VgeOH.js.map
