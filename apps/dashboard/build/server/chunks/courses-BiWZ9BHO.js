import { a as store_get, u as unsubscribe_stores, c as bind_props, z as store_mutate, l as attr_class, n as escape_html, f as ensure_array_like, e as stringify, m as attr_style, d as attr, b as spread_props } from './index2-Eg0dVEDW.js';
import './index6-DijlZyMe.js';
import { R as Resource_list_group } from './resource-list-group-Cn5yrUeL.js';
import { R as Resource_list_row } from './resource-list-row-DOW12fib.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { S as Search } from './search3-D8xoPsxt.js';
import { P as Page_body_header } from './page-body-header-BoRdo4AM.js';
import './states.svelte-CIWoDLSQ.js';
import { B as Button } from './button-McsHA0hU.js';
import './input-group-button-BAHNvNdh.js';
import { t } from './translations-BxDrjLWK.js';
import './client3-CP3T_KrU.js';
import { c as currentOrg, e as currentOrgDomain } from './org-BIDTy0Q0.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-CJivOuj6.js';
import './client-CKgEa-sO.js';
import { e as COURSE_SORT_OPTIONS, d as DEFAULT_COURSE_SORT } from './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import { I as Icon_button } from './icon-button-De7MyFOi.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './event-ByDKS2H7.js';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import { c as classroomio } from './index4-3F2xRc80.js';
import { P as deleteCourseModal, Q as courseMetaDeta, R as deleteCourseModalInitialState, S as createCourseModal, T as copyCourseModal, U as ZCourseClone, V as copyCourseModalInitialState } from './submission-CIIjGYOS.js';
import './exports-DiyTWREe.js';
import { g as goto } from './client2-CqohmrW2.js';
import { c as courseApi } from './course.svelte-dh_CGwPg.js';
import { C as ContentType } from './content-BYLGOVzm.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import 'canvas-confetti';
import { D as Delete_modal } from './delete-modal-Ci-cEGGr.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import './picker-data-NeeeTF6U.js';
import './index8-D5Z_9ShZ.js';
import './button-group-B7_AGlHf.js';
import { L as Library_big, C as Card_list } from './card-list-DmHn4pHH.js';
import { C as Card_loader } from './card-loader-CQgEsW2u.js';
import { R as Root$1, D as Dialog_content } from './index7-moivQoE0.js';
import { I as Input_field } from './input-field-w4kZespe.js';
import { T as Textarea_field } from './textarea-field-DcFq3Zr9.js';
import { g as get } from './index-AIbsv2Pd.js';
import { g as generateSlug } from './slug-B50H-j5u.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-Bx8dlk4A.js';
import { r as resolve } from './server3-VLoL706W.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-BMWmXTce.js';
import { C as Create_course_button } from './create-course-button-CInJDwkg.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-CG2pdu70.js';
import { R as Root$2, D as Dropdown_menu_trigger, a as Dropdown_menu_content, b as Dropdown_menu_item } from './index12-CJhCFtIc.js';
import { I as Image_1 } from './image2-BA-KJrg7.js';
import { o as openCoursePreview, c as copyPublicCoursePageUrl } from './course-preview-H23ftDeh.js';
import { C as Course_content_icon } from './course-content-icon-DNEaJfFa.js';
import { C as Course_public_badge } from './course-public-badge-DbQWyF43.js';
import { E as External_link } from './external-link2-fIhqfPmo.js';
import { C as Copy } from './copy-ra0N3Sls.js';
import { D as Dropdown_menu_separator } from './dropdown-menu-separator-CbPvKo5r.js';
import { E as Ellipsis_vertical } from './ellipsis-vertical-DuaSiu3W.js';
import { p as page } from './index5-nlVlCL1t.js';
import { F as Field_description } from './field-description-yPSV800w.js';
import { R as Radio_option_card_group } from './radio-option-card-group-C8ie26r6.js';
import { D as Dialog_footer } from './dialog-footer-DCoQXX2J.js';
import './question-container.svelte_svelte_type_style_lang-Cx6VgeOH.js';
import { G as Grid_2x2, L as List } from './list-BMFST-P_.js';

class CourseCloneApi extends BaseApiWithErrors {
  /**
   * Clones a course
   * @param courseId The ID of the course to clone
   * @param title Course title
   * @param description Course description (optional)
   * @returns The cloned course data or null on error
   */
  async clone(courseId, title, description) {
    const slug = generateSlug(title, { appendTimestamp: true });
    const data = { title, description, slug, organizationId: get(currentOrg).id };
    const result = ZCourseClone.safeParse(data);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "course");
      return null;
    }
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].clone.$post({ param: { courseId }, json: result.data }),
      logContext: "cloning course",
      onSuccess: (response) => {
        this.errors = {};
        copyCourseModal.set(copyCourseModalInitialState);
        copyCourseModal.update((modal) => ({ ...modal, open: false }));
        goto(resolve(`/courses/${response.course.id}`, {}));
        snackbar.success(t.get("courses.copy_course.success.course_cloned"));
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error(result2);
          return;
        }
        if ("error" in result2 && "field" in result2) {
          this.errors[result2.field] = result2.error;
        } else if ("error" in result2) {
          snackbar.error(result2.error);
        }
      }
    });
  }
}
const courseCloneApi = new CourseCloneApi();
function Sort_select($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      options,
      value = "",
      placeholder,
      class: className = "min-w-[150px]",
      onValueChange
    } = $$props;
    const selectedLabel = options.find((o) => o.value === value)?.label ?? placeholder ?? options[0]?.label ?? "";
    function handleChange(newValue) {
      value = newValue;
      onValueChange?.(newValue);
    }
    $$renderer2.push(`<!---->`);
    Root($$renderer2, {
      type: "single",
      value,
      onValueChange: handleChange,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Select_trigger($$renderer3, {
          class: className,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(selectedLabel)}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Select_content($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!--[-->`);
            const each_array = ensure_array_like(options);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let option = each_array[$$index];
              $$renderer4.push(`<!---->`);
              Select_item($$renderer4, {
                value: option.value,
                label: option.label,
                disabled: option.value === value,
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(option.label)}`);
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
    bind_props($$props, { value });
  });
}
function Copy_course_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root$1($$renderer3, {
        get open() {
          return store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).open;
        },
        set open($$value) {
          store_mutate($$store_subs ??= {}, "$copyCourseModal", copyCourseModal, store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).open = $$value);
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
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.copy_course.title"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <form>`);
              Input_field($$renderer5, {
                label: store_get($$store_subs ??= {}, "$t", t)("courses.copy_course.course_name_label"),
                autoFocus: true,
                placeholder: store_get($$store_subs ??= {}, "$t", t)("courses.copy_course.course_name_placeholder"),
                className: "mb-4",
                isRequired: true,
                autoComplete: false,
                errorMessage: courseCloneApi.errors.title,
                get value() {
                  return store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).title;
                },
                set value($$value) {
                  store_mutate($$store_subs ??= {}, "$copyCourseModal", copyCourseModal, store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).title = $$value);
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----> `);
              Textarea_field($$renderer5, {
                label: store_get($$store_subs ??= {}, "$t", t)("courses.copy_course.course_description_label"),
                placeholder: store_get($$store_subs ??= {}, "$t", t)("courses.copy_course.course_description_placeholder"),
                className: "mb-4",
                rows: 4,
                errorMessage: courseCloneApi.errors.description,
                get value() {
                  return store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).description;
                },
                set value($$value) {
                  store_mutate($$store_subs ??= {}, "$copyCourseModal", copyCourseModal, store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).description = $$value);
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----> `);
              if (courseCloneApi.errors.general) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="mb-4 text-sm text-red-600">${escape_html(courseCloneApi.errors.general)}</div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> <div class="mt-5 flex flex-row-reverse items-center">`);
              Button($$renderer5, {
                type: "submit",
                loading: store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).isSaving,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.copy_course.create_button"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div></form>`);
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
function hashStringToUInt32(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index++) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}
function buildCoursePlaceholderAvatarUrl(seed) {
  const stableSeed = hashStringToUInt32(seed).toString(36);
  return `https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(stableSeed)}`;
}
function Course_list_row($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      id,
      slug = "",
      title,
      logo = null,
      type,
      description = "",
      isPublished = false,
      lessonCount = 0,
      exerciseCount = 0,
      totalStudents = 0,
      updatedAt,
      tags = [],
      isExplore = false,
      isLMS = false
    } = $$props;
    const titleInitial = title.trim().charAt(0).toUpperCase() || "C";
    const bannerImage = logo?.trim() ? logo : "/images/classroomio-course-img-template.jpg";
    const showPublicCourseLinks = isPublished && type === "PUBLIC" && slug.trim().length > 0;
    const showActionsColumn = !isLMS || isLMS && showPublicCourseLinks;
    const gridTemplateColumns = showActionsColumn ? "7rem minmax(0, 2fr) 5.5rem minmax(0, 2fr) 4.5rem 6rem 2.5rem" : "7rem minmax(0, 2fr) 5.5rem minmax(0, 2fr) 4.5rem 6rem";
    const studentPlaceholderAvatarUrls = (() => [
      buildCoursePlaceholderAvatarUrl(`${id}:student:0`),
      buildCoursePlaceholderAvatarUrl(`${id}:student:1`)
    ])();
    const emptyStateAvatarUrl = buildCoursePlaceholderAvatarUrl(`${id}:student:empty`);
    const typeLabel = type ? store_get($$store_subs ??= {}, "$t", t)(`course.navItem.settings.${type.toLowerCase()}`) : null;
    const updatedLabel = (() => {
      if (!updatedAt) return null;
      const d = new Date(updatedAt);
      if (isNaN(d.getTime())) return null;
      return `Updated ${d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
    })();
    function handleRowClick() {
      if (isExplore) {
        goto(resolve(`/course/${slug}`, {}));
        return;
      }
      if (isLMS) {
        goto(resolve(`/courses/${id}/lessons?next=true`, {}));
        return;
      }
      goto(resolve(`/courses/${id}`, {}));
    }
    function handleOpen(e) {
      e.stopPropagation();
      goto(resolve(`/courses/${id}`, {}));
    }
    function handleClone(e) {
      e.stopPropagation();
      store_mutate($$store_subs ??= {}, "$copyCourseModal", copyCourseModal, store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).open = true);
      store_mutate($$store_subs ??= {}, "$copyCourseModal", copyCourseModal, store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).id = id);
      store_mutate($$store_subs ??= {}, "$copyCourseModal", copyCourseModal, store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).title = title);
      store_mutate($$store_subs ??= {}, "$copyCourseModal", copyCourseModal, store_get($$store_subs ??= {}, "$copyCourseModal", copyCourseModal).description = description);
    }
    function handleDelete(e) {
      e.stopPropagation();
      store_mutate($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal, store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).open = true);
      store_mutate($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal, store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).id = id);
      store_mutate($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal, store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).title = title);
    }
    async function handleCopyCourseUrl() {
      await copyPublicCoursePageUrl(slug, store_get($$store_subs ??= {}, "$currentOrgDomain", currentOrgDomain));
    }
    $$renderer2.push(`<!---->`);
    Resource_list_row($$renderer2, {
      variant: "default",
      size: "sm",
      align: "start",
      class: "cursor-pointer py-4!",
      onclick: handleRowClick,
      role: "row",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid w-full items-start gap-3"${attr_style(`grid-template-columns: ${stringify(gridTemplateColumns)}`)}><div class="ui:border-border bg-muted relative size-28 shrink-0 overflow-hidden rounded-md border" aria-hidden="true">`);
        Image_1($$renderer3, {
          src: bannerImage,
          alt: "",
          className: "h-full w-full object-cover"
        });
        $$renderer3.push(`<!----></div> <div class="flex min-w-0 flex-col gap-0.5"><div class="flex min-w-0 flex-wrap items-center gap-2"><p class="line-clamp-2 min-w-0 flex-1 text-base">${escape_html(title)}</p> `);
        if (type === "PUBLIC") {
          $$renderer3.push("<!--[-->");
          Course_public_badge($$renderer3, { class: "shrink-0" });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> `);
        if (typeLabel) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="ui:text-muted-foreground mt-0.5 text-sm">${escape_html(typeLabel)}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (updatedLabel) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="ui:text-muted-foreground mt-0.5 text-xs">${escape_html(updatedLabel)}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> <div>`);
        if (isPublished) {
          $$renderer3.push("<!--[-->");
          Badge($$renderer3, {
            variant: "success",
            class: "whitespace-nowrap",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.published"))}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
          Badge($$renderer3, {
            variant: "secondary",
            class: "whitespace-nowrap",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.unpublished"))}`);
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]--></div> <div class="flex min-w-0 flex-wrap items-center gap-1">`);
        if (tags.length === 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<span class="ui:text-muted-foreground text-xs">—</span>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(tags);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let tag = each_array[$$index];
            Badge($$renderer3, {
              variant: "outline",
              class: "max-w-[140px] truncate",
              children: ($$renderer4) => {
                $$renderer4.push(`<span class="ui:bg-primary/60 inline-block h-1.5 w-1.5 shrink-0 rounded-full"${attr_style(tag.color ? `background-color: ${tag.color}` : void 0)} aria-hidden="true"></span> ${escape_html(tag.name)}`);
              },
              $$slots: { default: true }
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--></div> <div class="flex flex-col gap-1 tabular-nums"><p class="flex items-center gap-1.5 text-sm"${attr("aria-label", `${stringify(lessonCount)} lessons`)}>`);
        Course_content_icon($$renderer3, { type: ContentType.Lesson, size: 14 });
        $$renderer3.push(`<!----> <span class="font-medium">${escape_html(lessonCount)}</span></p> <p class="flex items-center gap-1.5 text-sm"${attr("aria-label", `${stringify(exerciseCount)} exercises`)}>`);
        Course_content_icon($$renderer3, { type: ContentType.Exercise, size: 14 });
        $$renderer3.push(`<!----> <span class="font-medium">${escape_html(exerciseCount)}</span></p></div> <div class="flex items-center gap-1">`);
        if (totalStudents > 0) {
          $$renderer3.push("<!--[-->");
          if (totalStudents < 3) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="flex items-center gap-1"><!---->`);
            Avatar($$renderer3, {
              class: "ui:border-background size-6 border-2",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->`);
                Avatar_image($$renderer4, {
                  src: studentPlaceholderAvatarUrls[0],
                  alt: "",
                  loading: "lazy",
                  decoding: "async"
                });
                $$renderer4.push(`<!----> <!---->`);
                Avatar_fallback($$renderer4, {
                  "aria-hidden": "true",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(titleInitial)}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> <p class="text-xs tabular-nums">${escape_html(totalStudents)}</p></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<div class="flex -space-x-2"><!--[-->`);
            const each_array_1 = ensure_array_like(studentPlaceholderAvatarUrls);
            for (let slotIndex = 0, $$length = each_array_1.length; slotIndex < $$length; slotIndex++) {
              let avatarUrl = each_array_1[slotIndex];
              $$renderer3.push(`<!---->`);
              Avatar($$renderer3, {
                class: "ui:border-background size-6 border-2",
                children: ($$renderer4) => {
                  $$renderer4.push(`<!---->`);
                  Avatar_image($$renderer4, { src: avatarUrl, alt: "", loading: "lazy", decoding: "async" });
                  $$renderer4.push(`<!----> <!---->`);
                  Avatar_fallback($$renderer4, {
                    "aria-hidden": "true",
                    children: ($$renderer5) => {
                      $$renderer5.push(`<!---->${escape_html(titleInitial)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer3.push(`<!---->`);
            }
            $$renderer3.push(`<!--]--> <!---->`);
            Avatar($$renderer3, {
              class: "ui:border-background size-6 border-2",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->`);
                Avatar_fallback($$renderer4, {
                  class: "text-[10px]",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->+${escape_html(totalStudents - 2)}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----></div>`);
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<!---->`);
          Avatar($$renderer3, {
            class: "size-6",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Avatar_image($$renderer4, {
                src: emptyStateAvatarUrl,
                alt: "",
                loading: "lazy",
                decoding: "async"
              });
              $$renderer4.push(`<!----> <!---->`);
              Avatar_fallback($$renderer4, {
                "aria-hidden": "true",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(titleInitial)}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <p class="text-xs">0</p>`);
        }
        $$renderer3.push(`<!--]--></div> `);
        if (showActionsColumn) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="flex justify-end"><!---->`);
          Root$2($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              {
                let child = function($$renderer5, { props }) {
                  Button($$renderer5, spread_props([
                    props,
                    {
                      variant: "ghost",
                      size: "icon",
                      class: "size-8",
                      "aria-label": store_get($$store_subs ??= {}, "$t", t)("courses.course_card.actions_menu_aria"),
                      onclick: (e) => e.stopPropagation(),
                      children: ($$renderer6) => {
                        Ellipsis_vertical($$renderer6, { class: "size-4" });
                      },
                      $$slots: { default: true }
                    }
                  ]));
                };
                Dropdown_menu_trigger($$renderer4, { child, $$slots: { child: true } });
              }
              $$renderer4.push(`<!----> <!---->`);
              Dropdown_menu_content($$renderer4, {
                align: "end",
                children: ($$renderer5) => {
                  if (showPublicCourseLinks) {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<!---->`);
                    Dropdown_menu_item($$renderer5, {
                      onclick: () => openCoursePreview({
                        courseId: id,
                        courseSlug: slug,
                        currentOrgDomain: store_get($$store_subs ??= {}, "$currentOrgDomain", currentOrgDomain)
                      }),
                      children: ($$renderer6) => {
                        External_link($$renderer6, { class: "mr-2 size-4" });
                        $$renderer6.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.open_public_course"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----> <!---->`);
                    Dropdown_menu_item($$renderer5, {
                      onclick: () => void handleCopyCourseUrl(),
                      children: ($$renderer6) => {
                        Copy($$renderer6, { class: "mr-2 size-4" });
                        $$renderer6.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.copy_course_url"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (!isLMS) {
                    $$renderer5.push("<!--[-->");
                    if (showPublicCourseLinks) {
                      $$renderer5.push("<!--[-->");
                      $$renderer5.push(`<!---->`);
                      Dropdown_menu_separator($$renderer5, {});
                      $$renderer5.push(`<!---->`);
                    } else {
                      $$renderer5.push("<!--[!-->");
                    }
                    $$renderer5.push(`<!--]--> <!---->`);
                    Dropdown_menu_item($$renderer5, {
                      onclick: handleOpen,
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.open"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----> <!---->`);
                    Dropdown_menu_item($$renderer5, {
                      onclick: handleClone,
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.clone"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----> <!---->`);
                    Dropdown_menu_separator($$renderer5, {});
                    $$renderer5.push(`<!----> <!---->`);
                    Dropdown_menu_item($$renderer5, {
                      variant: "destructive",
                      onclick: handleDelete,
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.course_card.context_menu.delete"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
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
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function New_course_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let step = 0;
    const options = [
      {
        id: "self-paced",
        title: store_get($$store_subs ??= {}, "$t", t)("new_course_modal.self_paced_label"),
        subtitle: store_get($$store_subs ??= {}, "$t", t)("new_course_modal.self_paced_subtitle"),
        type: "SELF_PACED",
        isDisabled: false
      },
      {
        id: "live-class",
        title: store_get($$store_subs ??= {}, "$t", t)("new_course_modal.live_class_label"),
        subtitle: store_get($$store_subs ??= {}, "$t", t)("new_course_modal.live_class_subtitle"),
        type: "LIVE_CLASS",
        isDisabled: false
      },
      {
        id: "compliance",
        title: store_get($$store_subs ??= {}, "$t", t)("new_course_modal.compliance_label"),
        subtitle: store_get($$store_subs ??= {}, "$t", t)("new_course_modal.compliance_subtitle"),
        type: "COMPLIANCE",
        isDisabled: false
      },
      {
        id: "public",
        title: store_get($$store_subs ??= {}, "$t", t)("new_course_modal.public_label"),
        subtitle: store_get($$store_subs ??= {}, "$t", t)("new_course_modal.public_subtitle"),
        type: "PUBLIC",
        isDisabled: false
      }
    ];
    const courseTypeOptionsForGroup = options.map((o) => ({
      id: o.id,
      title: o.title,
      description: o.subtitle,
      value: o.type
    }));
    let type = options[0].type;
    function onClose(redirectTo) {
      goto();
      createCourseModal.update(() => ({
        title: "",
        description: "",
        type: "",
        emails: "",
        tutors: "",
        students: ""
      }));
    }
    let open = new URLSearchParams(page.url.search).get("create") === "true";
    function course_type_selector($$renderer3) {
      $$renderer3.push(`<!---->`);
      Field_description($$renderer3, {
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.new_course_modal.type_selector_title"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Radio_option_card_group($$renderer3, {
        options: courseTypeOptionsForGroup,
        class: "grid-cols-1 md:grid-cols-2",
        get value() {
          return type;
        },
        set value($$value) {
          type = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root$1($$renderer3, {
        onOpenChange: (isOpen) => {
          if (!isOpen) onClose(page.url.pathname);
        },
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
            class: "mx-auto w-4/5 max-w-2xl md:w-2/5 md:min-w-[600px]",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.new_course_modal.heading"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              if (step === 0) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="my-4 space-y-4">`);
                course_type_selector($$renderer5);
                $$renderer5.push(`<!----> <!---->`);
                Dialog_footer($$renderer5, {
                  children: ($$renderer6) => {
                    Button($$renderer6, {
                      onclick: () => step = 1,
                      disabled: !type,
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.new_course_modal.next"))}`);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
                $$renderer5.push(`<form><div class="mb-4 flex items-end space-x-2">`);
                Input_field($$renderer5, {
                  label: store_get($$store_subs ??= {}, "$t", t)("courses.new_course_modal.course_name"),
                  placeholder: store_get($$store_subs ??= {}, "$t", t)("courses.new_course_modal.course_name_placeholder"),
                  className: "w-full",
                  isRequired: true,
                  errorMessage: courseApi.errors.title,
                  autoComplete: false,
                  get value() {
                    return store_get($$store_subs ??= {}, "$createCourseModal", createCourseModal).title;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$createCourseModal", createCourseModal, store_get($$store_subs ??= {}, "$createCourseModal", createCourseModal).title = $$value);
                    $$settled = false;
                  }
                });
                $$renderer5.push(`<!----></div> `);
                Textarea_field($$renderer5, {
                  label: store_get($$store_subs ??= {}, "$t", t)("courses.new_course_modal.short_description"),
                  rows: 4,
                  placeholder: store_get($$store_subs ??= {}, "$t", t)("courses.new_course_modal.short_description_placeholder"),
                  className: "mb-4",
                  isRequired: true,
                  errorMessage: courseApi.errors.description,
                  isAIEnabled: true,
                  initAIPrompt: `Write a 30 word description for a course titled: ${stringify(store_get($$store_subs ??= {}, "$createCourseModal", createCourseModal).title)}`,
                  get value() {
                    return store_get($$store_subs ??= {}, "$createCourseModal", createCourseModal).description;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$createCourseModal", createCourseModal, store_get($$store_subs ??= {}, "$createCourseModal", createCourseModal).description = $$value);
                    $$settled = false;
                  }
                });
                $$renderer5.push(`<!----> <!---->`);
                Dialog_footer($$renderer5, {
                  children: ($$renderer6) => {
                    Button($$renderer6, {
                      variant: "outline",
                      onclick: () => step = 0,
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.new_course_modal.back"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> `);
                    Button($$renderer6, {
                      type: "submit",
                      disabled: courseApi.isLoading,
                      loading: courseApi.isLoading,
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("courses.new_course_modal.button"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----></form>`);
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
function Courses($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      courses = [],
      emptyTitle = store_get($$store_subs ??= {}, "$t", t)("courses.course_card.empty_title"),
      emptyDescription = store_get($$store_subs ??= {}, "$t", t)("courses.course_card.empty_description"),
      isExplore = false,
      isLMS = false,
      searchValue = "",
      sortKey = DEFAULT_COURSE_SORT,
      isLoading = false,
      showSortSelect = true,
      filterControls
    } = $$props;
    const filterOptions = COURSE_SORT_OPTIONS.map((option) => ({
      value: option.value,
      label: store_get($$store_subs ??= {}, "$t", t)(option.label)
    }));
    const setViewPreference = (preference) => {
      store_mutate($$store_subs ??= {}, "$courseMetaDeta", courseMetaDeta, store_get($$store_subs ??= {}, "$courseMetaDeta", courseMetaDeta).view = preference);
    };
    async function handleDeleteCourse() {
      if (!store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).id) return;
      store_mutate($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal, store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).isDeleting = true);
      await courseApi.delete(store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).id);
      if (courseApi.success) {
        deleteCourseModal.set(deleteCourseModalInitialState);
      }
      store_mutate($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal, store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).isDeleting = false);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      New_course_modal($$renderer3);
      $$renderer3.push(`<!----> `);
      Copy_course_modal($$renderer3);
      $$renderer3.push(`<!----> `);
      Delete_modal($$renderer3, {
        onDelete: handleDeleteCourse,
        isLoading: store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).isDeleting,
        get open() {
          return store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).open;
        },
        set open($$value) {
          store_mutate($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal, store_get($$store_subs ??= {}, "$deleteCourseModal", deleteCourseModal).open = $$value);
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <!---->`);
      Page_body_header($$renderer3, {
        align: "right",
        class: "p-0!",
        children: ($$renderer4) => {
          Search($$renderer4, {
            placeholder: store_get($$store_subs ??= {}, "$t", t)("courses.search_placeholder"),
            get value() {
              return searchValue;
            },
            set value($$value) {
              searchValue = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----> `);
          if (showSortSelect) {
            $$renderer4.push("<!--[-->");
            Sort_select($$renderer4, {
              options: filterOptions,
              get value() {
                return sortKey;
              },
              set value($$value) {
                sortKey = $$value;
                $$settled = false;
              }
            });
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]--> `);
          filterControls?.($$renderer4);
          $$renderer4.push(`<!----> `);
          if (!isLMS) {
            $$renderer4.push("<!--[-->");
            if (store_get($$store_subs ??= {}, "$courseMetaDeta", courseMetaDeta).view === "list") {
              $$renderer4.push("<!--[-->");
              Icon_button($$renderer4, {
                onclick: () => setViewPreference("grid"),
                children: ($$renderer5) => {
                  Grid_2x2($$renderer5, { size: 16 });
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer4.push("<!--[!-->");
              Icon_button($$renderer4, {
                onclick: () => setViewPreference("list"),
                children: ($$renderer5) => {
                  List($$renderer5, { size: 16 });
                },
                $$slots: { default: true }
              });
            }
            $$renderer4.push(`<!--]-->`);
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <div class="mx-auto mt-4 w-full flex-1">`);
      if (isLoading) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<section${attr_class(`${isLoading || courses ? "cards-container" : ""} `)}>`);
        Card_loader($$renderer3);
        $$renderer3.push(`<!----> `);
        Card_loader($$renderer3);
        $$renderer3.push(`<!----> `);
        Card_loader($$renderer3);
        $$renderer3.push(`<!----></section>`);
      } else {
        $$renderer3.push("<!--[!-->");
        if (!courses.length) {
          $$renderer3.push("<!--[-->");
          Empty($$renderer3, {
            title: emptyTitle,
            description: emptyDescription,
            icon: Library_big,
            variant: "page",
            children: ($$renderer4) => {
              if (!isLMS) {
                $$renderer4.push("<!--[-->");
                Create_course_button($$renderer4, { isResponsive: true });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
          if (isLMS || store_get($$store_subs ??= {}, "$courseMetaDeta", courseMetaDeta).view === "grid") {
            $$renderer3.push("<!--[-->");
            Card_list($$renderer3, { courses, isExplore, isLMS });
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<!---->`);
            Resource_list_group($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<!--[-->`);
                const each_array = ensure_array_like(courses);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let courseData = each_array[$$index];
                  Course_list_row($$renderer4, {
                    id: courseData.id,
                    slug: courseData.slug ?? "",
                    title: courseData.title,
                    logo: courseData.logo ?? null,
                    type: courseData.type,
                    description: courseData.description,
                    isPublished: courseData.isPublished ?? false,
                    lessonCount: courseData.lessonCount,
                    exerciseCount: "exerciseCount" in courseData ? courseData.exerciseCount ?? 0 : 0,
                    totalStudents: "totalStudents" in courseData ? courseData.totalStudents : 0,
                    updatedAt: "updatedAt" in courseData ? courseData.updatedAt ?? null : null,
                    tags: "tags" in courseData && Array.isArray(courseData.tags) ? courseData.tags : [],
                    isExplore,
                    isLMS
                  });
                }
                $$renderer4.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!---->`);
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { searchValue, sortKey });
  });
}

export { Courses as C };
//# sourceMappingURL=courses-BiWZ9BHO.js.map
