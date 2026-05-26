import { c as cn } from './index6-DijlZyMe.js';
import { C as ContentType } from './content-BYLGOVzm.js';
import { C as CONTENT_DEFINITIONS } from './question-container.svelte_svelte_type_style_lang-Cx6VgeOH.js';

function Course_content_icon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const iconColorClassByType = {
      // For now, I don't think sections need a different color. If there is a good reason for it, we can uncomment this.
      // [ContentType.Section]: 'text-violet-600 dark:text-violet-400',
      [ContentType.Lesson]: "text-sky-600 dark:text-sky-400",
      [ContentType.Exercise]: "text-green-600 dark:text-green-400"
    };
    let { type, size = 14, className = "", isHovered = false } = $$props;
    const Icon = CONTENT_DEFINITIONS[type].icon;
    const iconClass = cn("shrink-0 custom", iconColorClassByType[type], className);
    $$renderer2.push(`<!---->`);
    Icon($$renderer2, { size, class: iconClass, isHovered });
    $$renderer2.push(`<!---->`);
  });
}

export { Course_content_icon as C };
//# sourceMappingURL=course-content-icon-DNEaJfFa.js.map
