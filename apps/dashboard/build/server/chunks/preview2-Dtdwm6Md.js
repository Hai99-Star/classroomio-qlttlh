import { a as store_get, u as unsubscribe_stores, c as bind_props, l as attr_class, n as escape_html, e as stringify, f as ensure_array_like } from './index2-Eg0dVEDW.js';
import './question-type-capabilities-B1VkdJbc.js';
import { g as getExerciseQuestionLabels, a as getExerciseQuestionContractKey, c as Question_list, Q as Question_renderer } from './question-labels-Dg4Kv9Wx.js';
import { I as Input_field } from './input-field-w4kZespe.js';
import { t } from './translations-BxDrjLWK.js';
import { S as Skeleton } from './skeleton-EXMKyyjB.js';
import { B as Button } from './button-McsHA0hU.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import { t as toExerciseQuestionModel, d as getExerciseSectionDisplayTitle } from './question-type-utils-0UcIMLvN.js';
import './picker-data-NeeeTF6U.js';
import './index6-DijlZyMe.js';
import './index8-D5Z_9ShZ.js';
import './badge-DTmoBcZS.js';
import './button-group-B7_AGlHf.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './states.svelte-BI9DWQmF.js';
import './empty-media-ClSn1CG9.js';
import './field-BxJz8KV9.js';
import './input-group-button-BAHNvNdh.js';
import './item-CUOTGwjL.js';
import { N as Number_badge } from './number-badge-CWSCFK8J.js';
import './toggle-group-item-BLEzxLjD.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './resource-list-row-DOW12fib.js';
import { S as Separator } from './separator-C8wJJtqC.js';

function Section_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const COLOR_CLASSES = {
      blue: "ui:bg-blue-600!",
      green: "ui:bg-emerald-500!",
      amber: "ui:bg-amber-500!",
      rose: "ui:bg-rose-500!",
      violet: "ui:bg-violet-500!",
      slate: "ui:bg-slate-500!"
    };
    let {
      title,
      description = null,
      sectionNumber,
      totalSections: _totalSections,
      colorTheme = "blue",
      questionCount,
      totalPoints,
      labels = {}
    } = $$props;
    const sectionMetaSummary = (() => {
      const segments = [];
      if (questionCount !== void 0) {
        segments.push(`${questionCount} ${labels.questions ?? "questions"}`);
      }
      if (totalPoints !== void 0) {
        segments.push(`${totalPoints} ${labels.points ?? "points"}`);
      }
      return segments.join(" · ");
    })();
    $$renderer2.push(`<header><div class="ui:flex ui:items-center ui:gap-2"><span${attr_class(`ui:h-2 ui:w-2 ui:rounded-full ui:inline-block ${COLOR_CLASSES[colorTheme]}`)}></span> <p class="ui:text-sm ui:font-medium ui:uppercase">${escape_html(title)}</p> `);
    if (questionCount !== void 0 || totalPoints !== void 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-xs ui:text-muted-foreground">(${escape_html(sectionMetaSummary)})</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    Separator($$renderer2, {
      orientation: "horizontal",
      class: `ui:flex-1 ui:h-0.5! ${stringify(COLOR_CLASSES[colorTheme])}`
    });
    $$renderer2.push(`<!----></div> <p class="ui:text-sm ui:text-muted-foreground">${escape_html(description)}</p></header>`);
  });
}
function Grade($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { gradeMax = 0, disableGrading = false, grade = 0 } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex items-center">`);
      Input_field($$renderer3, {
        placeholder: store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.exercises.new_exercise_modal.points"),
        max: gradeMax,
        type: "number",
        inputClassName: "!w-16",
        isDisabled: disableGrading,
        get value() {
          return grade;
        },
        set value($$value) {
          grade = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <p class="ml-2 flex items-center text-base dark:text-white"><span class="mr-1">/</span> <span>${escape_html(gradeMax)}</span></p></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { grade });
  });
}
function Reason_box($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      reason = "",
      isLoading = false,
      rejectGrade = () => {
      },
      acceptGrade = () => {
      }
    } = $$props;
    $$renderer2.push(`<div class="rounded-md border">`);
    if (isLoading) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex w-full px-2 py-4"><div class="flex w-full flex-row items-start space-x-4"><img src="/ai.svg" alt="alt" class="animate-pulse"/> <div class="w-full">`);
      Skeleton($$renderer2, { class: "h-4 w-full" });
      $$renderer2.push(`<!----> `);
      Skeleton($$renderer2, { class: "h-4 w-full" });
      $$renderer2.push(`<!----> `);
      Skeleton($$renderer2, { class: "h-4 w-full" });
      $$renderer2.push(`<!----></div></div> <div class="flex space-x-2">`);
      Skeleton($$renderer2, { class: "h-4 w-20" });
      $$renderer2.push(`<!----></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="flex items-start justify-between px-2 py-4"><div class="flex items-center space-x-4"><img src="/ai.svg" alt="alt"/> <p class="text-sm font-normal">${escape_html(reason)}</p></div> <div class="flex space-x-2">`);
      Button($$renderer2, {
        onclick: acceptGrade,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.submissions.grading_modal.accept_grade"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        variant: "destructive",
        onclick: rejectGrade,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.submissions.grading_modal.reject_grade"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Preview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      questions = [],
      sections = [],
      questionnaireMetaData: _questionnaireMetaData = {},
      grades = {},
      disableGrading = true,
      isGradeWithAI = false,
      isLoading = false,
      reasons = {}
    } = $$props;
    function acceptGradeSuggestion() {
      isGradeWithAI = false;
    }
    function rejectGradeSuggestion(questionId) {
      isGradeWithAI = false;
      grades[String(questionId)] = 0;
    }
    function getAnswerForQuestion(questionModel, fallbackIndex = 0) {
      const questionKey = getExerciseQuestionContractKey(questionModel, fallbackIndex);
      return _questionnaireMetaData?.answers?.[questionKey];
    }
    const questionModels = questions.map((question) => toExerciseQuestionModel(question));
    const questionLabels = getExerciseQuestionLabels();
    const sectionFallbackTitle = store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.exercises.all_exercises.section.fallback_title");
    const activeSections = sections.filter((section) => !section.deletedAt).sort((a, b) => a.order - b.order);
    const hasSectionGroups = activeSections.length > 0;
    const answersByKey = questionModels.reduce(
      (acc, questionModel, index) => {
        const questionKey = getExerciseQuestionContractKey(questionModel, index);
        acc[questionKey] = _questionnaireMetaData?.answers?.[questionKey];
        return acc;
      },
      {}
    );
    function getQuestionsForSection(exerciseSectionId) {
      return questions.filter((question) => !question.deletedAt && question.exerciseSectionId === exerciseSectionId);
    }
    function getSectionPoints(sectionQuestions) {
      return sectionQuestions.reduce((total, question) => total + Number(question.points ?? 0), 0);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (hasSectionGroups) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="space-y-6"><!--[-->`);
        const each_array = ensure_array_like(activeSections);
        for (let sectionIndex = 0, $$length = each_array.length; sectionIndex < $$length; sectionIndex++) {
          let section = each_array[sectionIndex];
          const sectionQuestions = getQuestionsForSection(section.id);
          const sectionQuestionModels = sectionQuestions.map((question) => toExerciseQuestionModel(question));
          $$renderer3.push(`<section class="space-y-4 pt-4"><!---->`);
          Section_header($$renderer3, {
            title: getExerciseSectionDisplayTitle({
              title: section.title,
              sectionNumber: sectionIndex + 1,
              sectionLabel: sectionFallbackTitle
            }),
            description: section.description,
            sectionNumber: sectionIndex + 1,
            totalSections: activeSections.length,
            colorTheme: section.colorTheme,
            questionCount: sectionQuestions.length,
            totalPoints: getSectionPoints(sectionQuestions),
            labels: {
              section: store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.exercises.all_exercises.section.fallback_title"),
              questions: store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.exercises.all_exercises.view_mode.questions"),
              points: store_get($$store_subs ??= {}, "$t", t)("course.navItem.lessons.exercises.all_exercises.view_mode.points")
            }
          });
          $$renderer3.push(`<!----> <!---->`);
          Question_list($$renderer3, {
            contract: {
              mode: disableGrading ? "review" : "review",
              questions: sectionQuestionModels,
              answersByKey,
              labels: questionLabels,
              disabled: true
            },
            itemClass: "mb-4"
          });
          $$renderer3.push(`<!----></section>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        if (disableGrading && !Object.keys(grades || {}).length) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!---->`);
          Question_list($$renderer3, {
            contract: {
              mode: "review",
              questions: questionModels,
              answersByKey,
              labels: questionLabels,
              disabled: true
            },
            itemClass: "mb-4"
          });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (disableGrading && Object.keys(grades || {}).length) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<!--[-->`);
            const each_array_1 = ensure_array_like(questions);
            for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
              let currentQuestion = each_array_1[index];
              const questionModel = questionModels[index];
              $$renderer3.push(`<div class="mb-4 space-y-3"><div class="flex items-center justify-between gap-2">`);
              Number_badge($$renderer3, { number: index + 1, active: true });
              $$renderer3.push(`<!----> `);
              Grade($$renderer3, {
                grade: grades[currentQuestion.id],
                gradeMax: currentQuestion.points,
                disableGrading: true
              });
              $$renderer3.push(`<!----></div> <!---->`);
              Question_renderer($$renderer3, {
                contract: {
                  mode: "review",
                  question: questionModel,
                  answer: getAnswerForQuestion(questionModel, index),
                  labels: questionLabels,
                  disabled: true
                }
              });
              $$renderer3.push(`<!----></div>`);
            }
            $$renderer3.push(`<!--]-->`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<!--[-->`);
            const each_array_2 = ensure_array_like(questions);
            for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
              let currentQuestion = each_array_2[index];
              const questionModel = questionModels[index];
              $$renderer3.push(`<div class="mb-4 space-y-3"><div class="flex items-center justify-between gap-2">`);
              Number_badge($$renderer3, { number: index + 1, active: true });
              $$renderer3.push(`<!----> `);
              Grade($$renderer3, {
                gradeMax: currentQuestion.points,
                disableGrading,
                get grade() {
                  return grades[currentQuestion.id];
                },
                set grade($$value) {
                  grades[currentQuestion.id] = $$value;
                  $$settled = false;
                }
              });
              $$renderer3.push(`<!----></div> <!---->`);
              Question_renderer($$renderer3, {
                contract: {
                  mode: "review",
                  question: questionModel,
                  answer: getAnswerForQuestion(questionModel, index),
                  labels: questionLabels,
                  disabled: true
                }
              });
              $$renderer3.push(`<!----> `);
              if (isGradeWithAI) {
                $$renderer3.push("<!--[-->");
                Reason_box($$renderer3, {
                  reason: reasons[currentQuestion.id],
                  isLoading,
                  acceptGrade: acceptGradeSuggestion,
                  rejectGrade: () => rejectGradeSuggestion(currentQuestion.id)
                });
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]--></div>`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
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
    bind_props($$props, { grades, isGradeWithAI, isLoading, reasons });
  });
}

export { Preview as P, Section_header as S };
//# sourceMappingURL=preview2-Dtdwm6Md.js.map
