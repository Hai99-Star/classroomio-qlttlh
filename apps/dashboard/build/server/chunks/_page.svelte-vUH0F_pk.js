import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores, m as attr_style, d as attr, f as ensure_array_like, l as attr_class, j as clsx } from './index2-Eg0dVEDW.js';
import { o as onDestroy } from './index-server-CicpYXzh.js';
import './content-BYLGOVzm.js';
import { B as BRAND_ROOT_DOMAIN, T as TENANT_ROOT_DOMAIN } from './domains-BtBKqU6B.js';
import './widget-oNxbU1sS.js';
import { a5 as run } from './utils2-DPSDgWhA.js';
import { t } from './translations-BxDrjLWK.js';
import 'zod';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';

const WIDGET_THEME_SERIF_STACK = {
  classroomio: "'Lora', Georgia, 'Times New Roman', serif",
  graphite: "'IBM Plex Serif', Georgia, 'Times New Roman', serif",
  linen: "'Libre Baskerville', Georgia, 'Times New Roman', serif",
  spruce: "'Fraunces', Georgia, 'Times New Roman', serif"
};
function getWidgetThemeSerifStack(themePreset) {
  return WIDGET_THEME_SERIF_STACK[themePreset];
}
const COURSE_TYPE_MAP = {
  LIVE_CLASS: { label: "Live class", className: "cio-type-badge cio-type-live" },
  SELF_PACED: { label: "Self paced", className: "cio-type-badge cio-type-self" },
  COMPLIANCE: { label: "Compliance", className: "cio-type-badge cio-type-compliance" }
};
function getCourseTypeMeta(courseType) {
  if (!courseType) return null;
  return COURSE_TYPE_MAP[courseType] ?? { label: courseType, className: "cio-type-badge cio-type-default" };
}
function getStarSegments(rating) {
  if (rating == null) return { filled: 0, empty: 5 };
  const rounded = Math.round(rating);
  const filled = Math.max(0, Math.min(5, rounded));
  return { filled, empty: 5 - filled };
}
function buildCssVarsFromDesign(design) {
  const shadowBlur = design.content.shadowSize === "lg" ? 28 : design.content.shadowSize === "md" ? 18 : design.content.shadowSize === "sm" ? 8 : 0;
  return [
    `--cio-primary:${design.colors.primaryColor}`,
    `--cio-bg:${design.colors.backgroundColor}`,
    `--cio-text:${design.colors.textColor}`,
    `--cio-border:${design.colors.borderColor}`,
    `--cio-badge:${design.colors.badgeColor}`,
    `--cio-highlight:${design.colors.highlightColor}`,
    `--cio-radius:${design.content.borderRadius}px`,
    `--cio-font:${design.typography.fontFamily}`,
    `--cio-font-serif:${getWidgetThemeSerifStack(design.themePreset)}`,
    `--cio-font-scale:${design.typography.fontSizeScale}`,
    `--cio-shadow:0 8px ${shadowBlur}px ${design.content.shadowColor}`
  ].join(";");
}
function getCourseExcerpt(course, maxLength = 160) {
  if (!course.description) return "";
  const flat = course.description.replace(/\s+/g, " ").trim();
  if (flat.length <= maxLength) return flat;
  return `${flat.slice(0, maxLength - 1).trim()}…`;
}
function formatLessonsLine(course) {
  const parts = [];
  if (course.lessonCount) parts.push(`${course.lessonCount} lessons`);
  if (course.exerciseCount) parts.push(`${course.exerciseCount} exercises`);
  return parts.join(" · ");
}
function getOrgDomainForUtm(organization) {
  const custom = organization.customDomain?.trim();
  if (custom) {
    try {
      if (custom.includes("://")) {
        return new URL(custom).hostname;
      }
    } catch {
    }
    return custom.replace(/^\/+/, "").split("/")[0] || organization.siteName;
  }
  const site = organization.siteName.trim();
  return site ? `${site}.${TENANT_ROOT_DOMAIN}` : BRAND_ROOT_DOMAIN;
}
function buildPoweredByMarketingUrl(payload) {
  const orgDomain = getOrgDomainForUtm(payload.organization);
  const params = new URLSearchParams({
    utm_source: "classroomio_widget",
    utm_medium: "embed",
    utm_campaign: "powered_by",
    utm_content: payload.widgetId,
    utm_term: orgDomain
  });
  return `https://${BRAND_ROOT_DOMAIN}/?${params.toString()}`;
}
function Stars($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { rating = null, ratingCount, showCount = true } = $$props;
    const segments = getStarSegments(rating);
    const showStars = rating != null;
    $$renderer2.push(`<span class="cio-stars">`);
    if (showStars) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(Array(segments.filled));
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        each_array[i];
        $$renderer2.push(`<span class="cio-star">★</span>`);
      }
      $$renderer2.push(`<!--]--> <!--[-->`);
      const each_array_1 = ensure_array_like(Array(segments.empty));
      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
        each_array_1[i];
        $$renderer2.push(`<span class="cio-star cio-star-empty">★</span>`);
      }
      $$renderer2.push(`<!--]--> <span class="cio-rating-val">${escape_html(rating?.toFixed(1))}</span> `);
      if (showCount && ratingCount) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="cio-rating-count">(${escape_html(ratingCount)})</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></span>`);
  });
}
function Type_badge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { courseType } = $$props;
    const meta = getCourseTypeMeta(courseType);
    if (meta) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span${attr_class(clsx(meta.className))}>${escape_html(meta.label)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Thumb($$renderer, $$props) {
  let { src = null, alt = "", className = "" } = $$props;
  if (src) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<img${attr("src", src)}${attr("alt", alt)}${attr_class(`cio-img-cover ${className}`)} loading="lazy"/>`);
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<span${attr_class(`cio-thumb-fallback ${className}`)} aria-hidden="true"></span>`);
  }
  $$renderer.push(`<!--]-->`);
}
function Card_grid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { payload } = $$props;
    const options = payload.design.layoutOptions.cardGrid;
    const showRating = options.showRating;
    const courses = payload.courses.slice(0, options.maxCount);
    const cssVars = `--cio-cg-cols:${options.columns}`;
    if (courses.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="cio-empty">No courses to display.</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="cio-cg-grid"${attr_style(cssVars)}><!--[-->`);
      const each_array = ensure_array_like(courses);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let course = each_array[$$index_1];
        $$renderer2.push(`<a class="cio-cg-card"${attr("href", course.url)} target="_blank" rel="noreferrer noopener"${attr("aria-label", course.title)}>`);
        if (payload.design.content.showCourseImage) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="cio-cg-img">`);
          Thumb($$renderer2, {
            src: course.imageUrl,
            alt: course.title,
            className: "cio-cg-img-art"
          });
          $$renderer2.push(`<!----> `);
          if (payload.design.content.showCourseTypeBadge) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span style="position:relative;z-index:1">`);
            Type_badge($$renderer2, { courseType: course.courseType });
            $$renderer2.push(`<!----></span>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="cio-cg-body"><h3 class="cio-cg-title">${escape_html(course.title)}</h3> `);
        if (payload.design.content.showDescriptionExcerpt && course.description) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="cio-cg-desc">${escape_html(getCourseExcerpt(course))}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (course.tags.length > 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="cio-cg-tags"><!--[-->`);
          const each_array_1 = ensure_array_like(course.tags.slice(0, 3));
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let tag = each_array_1[$$index];
            $$renderer2.push(`<span class="cio-pill">${escape_html(tag.name)}</span>`);
          }
          $$renderer2.push(`<!--]--> `);
          if (course.tags.length > 3) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span class="cio-pill">+${escape_html(course.tags.length - 3)}</span>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="cio-cg-footer">`);
        if (showRating) {
          $$renderer2.push("<!--[-->");
          Stars($$renderer2, { rating: course.rating, ratingCount: course.ratingCount });
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<span></span>`);
        }
        $$renderer2.push(`<!--]--> <span class="cio-cg-meta">${escape_html(formatLessonsLine(course))}</span></div></div></a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Tag_filter($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { payload } = $$props;
    const options = payload.design.layoutOptions.tagFilter;
    const courses = payload.courses.slice(0, options.maxCount);
    const tagPool = payload.tagPool;
    let activeTagId = run(() => payload.design.layoutOptions.tagFilter.defaultTagId ?? null);
    const visibleCourses = activeTagId === null ? courses : courses.filter((course) => course.tags.some((tag) => tag.id === activeTagId));
    if (tagPool.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="cio-tf-bar" role="tablist">`);
      if (options.showAllOption) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<button type="button"${attr_class("cio-tf-btn", void 0, { "cio-on": activeTagId === null })}>All</button>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <!--[-->`);
      const each_array = ensure_array_like(tagPool);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$renderer2.push(`<button type="button"${attr_class("cio-tf-btn", void 0, { "cio-on": activeTagId === tag.id })}>${escape_html(tag.name)}</button>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (visibleCourses.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="cio-empty">No courses match this filter.</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="cio-tf-grid"><!--[-->`);
      const each_array_1 = ensure_array_like(visibleCourses);
      for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
        let course = each_array_1[$$index_2];
        $$renderer2.push(`<a class="cio-tf-row"${attr("href", course.url)} target="_blank" rel="noreferrer noopener"${attr("aria-label", course.title)}>`);
        if (payload.design.content.showCourseImage) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="cio-tf-thumb">`);
          Thumb($$renderer2, { src: course.imageUrl, alt: course.title });
          $$renderer2.push(`<!----></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="cio-tf-info"><h3 class="cio-tf-title">${escape_html(course.title)}</h3> <div class="cio-tf-sub">`);
        if (payload.design.content.showCourseTypeBadge) {
          $$renderer2.push("<!--[-->");
          Type_badge($$renderer2, { courseType: course.courseType });
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        Stars($$renderer2, {
          rating: course.rating,
          ratingCount: course.ratingCount,
          showCount: false
        });
        $$renderer2.push(`<!----></div> `);
        if (course.tags.length > 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="cio-tf-tags-row"><!--[-->`);
          const each_array_2 = ensure_array_like(course.tags.slice(0, 3));
          for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
            let tag = each_array_2[$$index_1];
            $$renderer2.push(`<span class="cio-pill">${escape_html(tag.name)}</span>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Carousel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { payload } = $$props;
    const options = payload.design.layoutOptions.carousel;
    const courses = payload.courses.slice(0, options.maxCount);
    const visible = Number(options.visibleCards);
    const maxIndex = Math.max(courses.length - visible, 0);
    let position = 0;
    const cardBasis = `calc((100% - ${(visible - 1) * 12}px) / ${visible})`;
    const translatePct = courses.length > 0 ? `calc(-${position} * (100% + 12px) / ${visible})` : "0";
    onDestroy(() => {
    });
    if (courses.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="cio-empty">No courses to display.</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="cio-cr-wrap" role="region" aria-roledescription="carousel"><div class="cio-cr-outer"><div class="cio-cr-track"${attr_style(`transform: translateX(${translatePct})`)}><!--[-->`);
      const each_array = ensure_array_like(courses);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let course = each_array[$$index];
        $$renderer2.push(`<a class="cio-cr-card"${attr("href", course.url)} target="_blank" rel="noreferrer noopener"${attr_style(`flex:0 0 ${cardBasis}`)}>`);
        if (payload.design.content.showCourseImage) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="cio-cr-img">`);
          Thumb($$renderer2, { src: course.imageUrl, alt: course.title });
          $$renderer2.push(`<!----></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="cio-cr-body"><h3 class="cio-cr-title">${escape_html(course.title)}</h3> <div class="cio-cr-rating-row">`);
        Stars($$renderer2, {
          rating: course.rating,
          ratingCount: course.ratingCount,
          showCount: false
        });
        $$renderer2.push(`<!----></div> `);
        if (payload.design.content.showCourseTypeBadge) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="cio-cr-tags-row">`);
          Type_badge($$renderer2, { courseType: course.courseType });
          $$renderer2.push(`<!----></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="cio-cr-meta">${escape_html(formatLessonsLine(course))}</div></div></a>`);
      }
      $$renderer2.push(`<!--]--></div></div> `);
      if (maxIndex > 0 && (options.showDots || options.showArrows)) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="cio-cr-nav">`);
        if (options.showDots) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="cio-cr-dots"><!--[-->`);
          const each_array_1 = ensure_array_like(Array(maxIndex + 1));
          for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
            each_array_1[i];
            $$renderer2.push(`<button type="button"${attr_class("cio-cr-dot", void 0, { "cio-on": i === position })}${attr("aria-label", `Go to slide ${i + 1}`)}></button>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<span></span>`);
        }
        $$renderer2.push(`<!--]--> `);
        if (options.showArrows) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="cio-cr-arrows"><button type="button" class="cio-cr-btn"${attr("disabled", !options.loop && position === 0, true)} aria-label="Previous"><svg class="cio-cr-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button> <button type="button" class="cio-cr-btn"${attr("disabled", !options.loop && position === maxIndex, true)} aria-label="Next"><svg class="cio-cr-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<span></span>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Primary_course($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { payload } = $$props;
    const options = payload.design.layoutOptions.primaryCourse;
    const featured = payload.courses[0] ?? null;
    const secondary = payload.courses.slice(1, 1 + options.secondaryMaxCount);
    if (!featured) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="cio-empty">Pick a featured course to display.</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<a class="cio-ph-hero"${attr("href", featured.url)} target="_blank" rel="noreferrer noopener"><div><div class="cio-ph-eyebrow">${escape_html(options.eyebrowLabel)}</div> <h2 class="cio-ph-title">${escape_html(featured.title)}</h2> `);
      if (payload.design.content.showDescriptionExcerpt && featured.description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="cio-ph-desc">${escape_html(getCourseExcerpt(featured, 220))}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="cio-ph-row">`);
      if (featured.rating != null) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="cio-ph-rating-val">${escape_html(featured.rating.toFixed(1))}</span> <span class="cio-ph-star">★★★★★</span> `);
        if (featured.ratingCount) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="cio-ph-count">(${escape_html(featured.ratingCount)} reviews)</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <span class="cio-ph-sep">·</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <span class="cio-ph-meta">${escape_html(formatLessonsLine(featured))}</span></div> `);
      if (payload.design.content.showCourseTypeBadge || featured.tags.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="cio-ph-badges">`);
        if (payload.design.content.showCourseTypeBadge) {
          $$renderer2.push("<!--[-->");
          Type_badge($$renderer2, { courseType: featured.courseType });
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <!--[-->`);
        const each_array = ensure_array_like(featured.tags.slice(0, 2));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let tag = each_array[$$index];
          $$renderer2.push(`<span class="cio-pill">${escape_html(tag.name)}</span>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <span class="cio-ph-btn">${escape_html(options.ctaLabel)} →</span></div> `);
      if (payload.design.content.showCourseImage) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="cio-ph-img">`);
        Thumb($$renderer2, { src: featured.imageUrl, alt: featured.title });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></a> `);
      if (secondary.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="cio-ph-grid"><!--[-->`);
        const each_array_1 = ensure_array_like(secondary);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let course = each_array_1[$$index_1];
          $$renderer2.push(`<a class="cio-ph-mini"${attr("href", course.url)} target="_blank" rel="noreferrer noopener"><h3 class="cio-ph-mini-title">${escape_html(course.title)}</h3> <div class="cio-ph-mini-meta">`);
          if (payload.design.content.showCourseTypeBadge) {
            $$renderer2.push("<!--[-->");
            Type_badge($$renderer2, { courseType: course.courseType });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> `);
          Stars($$renderer2, {
            rating: course.rating,
            ratingCount: course.ratingCount,
            showCount: false
          });
          $$renderer2.push(`<!----></div></a>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Compact_list($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { payload } = $$props;
    const options = payload.design.layoutOptions.compactList;
    const courses = payload.courses.slice(0, options.maxCount);
    if (courses.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="cio-empty">No courses to display.</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attr_class("cio-cl-list", void 0, { "cio-density-compact": options.density === "compact" })}><!--[-->`);
      const each_array = ensure_array_like(courses);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let course = each_array[$$index_1];
        $$renderer2.push(`<a class="cio-cl-item"${attr("href", course.url)} target="_blank" rel="noreferrer noopener"${attr("aria-label", course.title)}>`);
        if (options.showThumbnail && payload.design.content.showCourseImage) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="cio-cl-thumb">`);
          Thumb($$renderer2, { src: course.imageUrl, alt: course.title });
          $$renderer2.push(`<!----></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="cio-cl-info"><div class="cio-cl-top"><span class="cio-cl-title">${escape_html(course.title)}</span> `);
        if (payload.design.content.showLessonsCount) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="cio-cl-lessons">${escape_html(course.lessonCount)} lessons</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> <div class="cio-cl-mid">`);
        if (payload.design.content.showCourseTypeBadge) {
          $$renderer2.push("<!--[-->");
          Type_badge($$renderer2, { courseType: course.courseType });
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        Stars($$renderer2, { rating: course.rating, ratingCount: course.ratingCount });
        $$renderer2.push(`<!----></div> `);
        if (options.showTags && course.tags.length > 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="cio-cl-bottom"><!--[-->`);
          const each_array_1 = ensure_array_like(course.tags.slice(0, 3));
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let tag = each_array_1[$$index];
            $$renderer2.push(`<span class="cio-pill">${escape_html(tag.name)}</span>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Editorial_spotlight($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { payload } = $$props;
    const options = payload.design.layoutOptions.editorialSpotlight;
    const main = payload.courses[0] ?? null;
    const secondary = payload.courses.slice(1, 1 + options.secondaryMaxCount);
    if (!main) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="cio-empty">Pick a main course to display.</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="cio-ed-grid"><a class="cio-ed-main"${attr("href", main.url)} target="_blank" rel="noreferrer noopener"${attr("aria-label", main.title)}>`);
      if (payload.design.content.showCourseImage) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="cio-ed-img-wrap">`);
        Thumb($$renderer2, { src: main.imageUrl, alt: main.title });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="cio-ed-body">`);
      if (payload.design.content.showCourseTypeBadge || main.tags.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="cio-ed-top-meta">`);
        if (payload.design.content.showCourseTypeBadge) {
          $$renderer2.push("<!--[-->");
          Type_badge($$renderer2, { courseType: main.courseType });
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <!--[-->`);
        const each_array = ensure_array_like(main.tags.slice(0, 1));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let tag = each_array[$$index];
          $$renderer2.push(`<span class="cio-pill">${escape_html(tag.name)}</span>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <h2${attr_class("cio-ed-title", void 0, { "cio-title-sans": options.titleStyle === "sans" })}>${escape_html(main.title)}</h2> `);
      if (payload.design.content.showDescriptionExcerpt && main.description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="cio-ed-desc">${escape_html(getCourseExcerpt(main, 200))}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="cio-ed-foot">`);
      Stars($$renderer2, { rating: main.rating, ratingCount: main.ratingCount });
      $$renderer2.push(`<!----> `);
      if (main.tags.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div style="display:flex;gap:4px;flex-wrap:wrap"><!--[-->`);
        const each_array_1 = ensure_array_like(main.tags.slice(0, 3));
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let tag = each_array_1[$$index_1];
          $$renderer2.push(`<span class="cio-pill">${escape_html(tag.name)}</span>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div></a> `);
      if (secondary.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="cio-ed-stack"><!--[-->`);
        const each_array_2 = ensure_array_like(secondary);
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
          let course = each_array_2[$$index_2];
          $$renderer2.push(`<a class="cio-ed-mini"${attr("href", course.url)} target="_blank" rel="noreferrer noopener">`);
          if (payload.design.content.showCourseImage) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="cio-ed-mini-img">`);
            Thumb($$renderer2, { src: course.imageUrl, alt: course.title });
            $$renderer2.push(`<!----></div>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> <div><h3 class="cio-ed-mini-title">${escape_html(course.title)}</h3> <div class="cio-ed-mini-meta">`);
          if (payload.design.content.showCourseTypeBadge) {
            $$renderer2.push("<!--[-->");
            Type_badge($$renderer2, { courseType: course.courseType });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> `);
          Stars($$renderer2, {
            rating: course.rating,
            ratingCount: course.ratingCount,
            showCount: false
          });
          $$renderer2.push(`<!----></div></div></a>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Category_shelf($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { payload } = $$props;
    const options = payload.design.layoutOptions.categoryShelf;
    const courseById = new Map(payload.courses.map((course) => [course.id, course]));
    const categories = payload.categories;
    const tabs = options.showAllTab ? [
      {
        id: "all",
        label: "All courses",
        courseIds: payload.courses.map((c) => c.id)
      },
      ...categories.map((cat) => ({ id: cat.tagId, label: cat.name, courseIds: cat.courseIds }))
    ] : categories.map((cat) => ({ id: cat.tagId, label: cat.name, courseIds: cat.courseIds }));
    let activeId = run(() => {
      const initialOptions = payload.design.layoutOptions.categoryShelf;
      const initialCategories = payload.categories;
      return initialOptions.defaultCategoryTagId ?? (initialOptions.showAllTab ? "all" : initialCategories[0]?.tagId ?? "");
    });
    const activeCourses = (() => {
      const tab = tabs.find((entry) => entry.id === activeId) ?? tabs[0];
      if (!tab) return [];
      return tab.courseIds.map((id) => courseById.get(id)).filter((course) => course !== void 0).slice(0, options.maxPerCategory);
    })();
    if (tabs.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="cio-empty">Add at least one category tag to display this layout.</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="cio-shelf-tabs" role="tablist"><!--[-->`);
      const each_array = ensure_array_like(tabs);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tab = each_array[$$index];
        $$renderer2.push(`<button type="button"${attr_class("cio-shelf-tab", void 0, { "cio-on": tab.id === activeId })}>${escape_html(tab.label)}</button>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="cio-shelf-pane">`);
      if (activeCourses.length === 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="cio-empty">No courses in this category yet.</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="cio-shelf-grid"><!--[-->`);
        const each_array_1 = ensure_array_like(activeCourses);
        for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
          let course = each_array_1[$$index_2];
          $$renderer2.push(`<a class="cio-shelf-card"${attr("href", course.url)} target="_blank" rel="noreferrer noopener">`);
          if (payload.design.content.showCourseImage) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="cio-shelf-img">`);
            Thumb($$renderer2, { src: course.imageUrl, alt: course.title });
            $$renderer2.push(`<!----></div>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> <div class="cio-shelf-body"><h3 class="cio-shelf-title">${escape_html(course.title)}</h3> <div class="cio-shelf-meta-row">`);
          if (payload.design.content.showCourseTypeBadge) {
            $$renderer2.push("<!--[-->");
            Type_badge($$renderer2, { courseType: course.courseType });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> `);
          Stars($$renderer2, { rating: course.rating, ratingCount: course.ratingCount });
          $$renderer2.push(`<!----></div> `);
          if (course.tags.length > 0) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="cio-shelf-tags-row"><!--[-->`);
            const each_array_2 = ensure_array_like(course.tags.slice(0, 2));
            for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
              let tag = each_array_2[$$index_1];
              $$renderer2.push(`<span class="cio-pill">${escape_html(tag.name)}</span>`);
            }
            $$renderer2.push(`<!--]--></div>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div></a>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Course_widget($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { payload } = $$props;
    const cssVars = payload ? buildCssVarsFromDesign(payload.design) : "";
    const poweredByHref = payload ? buildPoweredByMarketingUrl(payload) : "";
    if (!payload) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="cio-widget cio-widget--empty">No widget payload provided.</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="cio-widget"${attr_style(cssVars)}${attr("data-cio-layout", payload.layoutType)}>`);
      if (payload.layoutType === "card_grid") {
        $$renderer2.push("<!--[-->");
        Card_grid($$renderer2, { payload });
      } else {
        $$renderer2.push("<!--[!-->");
        if (payload.layoutType === "tag_filter") {
          $$renderer2.push("<!--[-->");
          Tag_filter($$renderer2, { payload });
        } else {
          $$renderer2.push("<!--[!-->");
          if (payload.layoutType === "carousel") {
            $$renderer2.push("<!--[-->");
            Carousel($$renderer2, { payload });
          } else {
            $$renderer2.push("<!--[!-->");
            if (payload.layoutType === "primary_course") {
              $$renderer2.push("<!--[-->");
              Primary_course($$renderer2, { payload });
            } else {
              $$renderer2.push("<!--[!-->");
              if (payload.layoutType === "compact_list") {
                $$renderer2.push("<!--[-->");
                Compact_list($$renderer2, { payload });
              } else {
                $$renderer2.push("<!--[!-->");
                if (payload.layoutType === "editorial_spotlight") {
                  $$renderer2.push("<!--[-->");
                  Editorial_spotlight($$renderer2, { payload });
                } else {
                  $$renderer2.push("<!--[!-->");
                  if (payload.layoutType === "category_shelf") {
                    $$renderer2.push("<!--[-->");
                    Category_shelf($$renderer2, { payload });
                  } else {
                    $$renderer2.push("<!--[!-->");
                  }
                  $$renderer2.push(`<!--]-->`);
                }
                $$renderer2.push(`<!--]-->`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--> `);
      if (payload.design.branding.showPoweredBy) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a class="cio-branding"${attr("href", poweredByHref)} target="_blank" rel="noopener noreferrer">${escape_html(payload.labels.poweredByLabel)}</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Widget_preview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { payload = null } = $$props;
    onDestroy(() => {
    });
    if (!payload) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:text-muted-foreground rounded-2xl border border-dashed p-8 text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("widgets.preview.empty"))}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      Course_widget($$renderer2, { payload });
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let payload = null;
    crypto.randomUUID();
    onDestroy(() => {
      {
        return;
      }
    });
    head("p37dan", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<style>
    body {
      margin: 0;
      padding: 0;
      background: transparent;
      overflow: hidden;
    }
  </style>`);
    });
    $$renderer2.push(`<div>`);
    {
      $$renderer2.push("<!--[!-->");
      Widget_preview($$renderer2, { payload });
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-vUH0F_pk.js.map
