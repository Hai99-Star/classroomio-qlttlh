import { n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { P as Provider, R as Root, T as Tooltip_trigger, a as Tooltip_content } from './index13-ubjsmMp7.js';
import { C as ContentType } from './domains-D9J1UytB.js';
import { C as Course_content_icon } from './course-content-icon-D0lyU-9r.js';
import { t } from './translations-BxDrjLWK.js';

function Content_count_badges($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { lessons, exercises } = $$props;
    $$renderer2.push(`<!---->`);
    Provider($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Root($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Tooltip_trigger($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<span class="inline-flex items-center gap-1 rounded border px-1 py-0.5 text-[10px] leading-none">`);
                Course_content_icon($$renderer5, { type: ContentType.Lesson, size: 12 });
                $$renderer5.push(`<!----> <span>${escape_html(lessons)}</span></span>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Tooltip_content($$renderer4, {
              side: "top",
              sideOffset: 4,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.sidebar.content_count.lessons", { count: lessons }))}`);
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
                $$renderer5.push(`<span class="inline-flex items-center gap-1 rounded border px-1 py-0.5 text-[10px] leading-none">`);
                Course_content_icon($$renderer5, { type: ContentType.Exercise, size: 12 });
                $$renderer5.push(`<!----> <span>${escape_html(exercises)}</span></span>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Tooltip_content($$renderer4, {
              side: "top",
              sideOffset: 4,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.sidebar.content_count.exercises", { count: exercises }))}`);
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
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Content_count_badges as C };
//# sourceMappingURL=content-count-badges-BGmgG0lh.js.map
