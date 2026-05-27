import { b as spread_props } from './index2-Eg0dVEDW.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { D as DEFAULT_QUESTION_TYPE, Q as QUESTION_TEMPLATE } from './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import { g as getQuestionTypeOptionById, a as getQuestionTypeId, U as UNTITLED_EXERCISE_SECTION_TITLE, S as STATUS } from './question-type-utils-0UcIMLvN.js';
import { w as writable } from './index-AIbsv2Pd.js';
import './index4-CY3O4yvX.js';
import './submission-CIIjGYOS.js';
import './translations-BxDrjLWK.js';
import './org-t71AQfHV.js';
import './question-type-capabilities-B1VkdJbc.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './domains-D9J1UytB.js';
import { e as exerciseApi } from './exercise.svelte-Drhk3PIe.js';

function File_question_mark($$renderer, $$props) {
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
      ["path", { "d": "M12 17h.01" }],
      [
        "path",
        {
          "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
        }
      ],
      ["path", { "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "file-question-mark" },
      /**
       * @component @name FileQuestionMark
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTdoLjAxIiAvPgogIDxwYXRoIGQ9Ik0xNSAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWN3oiIC8+CiAgPHBhdGggZD0iTTkuMSA5YTMgMyAwIDAgMSA1LjgyIDFjMCAyLTMgMy0zIDMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/file-question-mark
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
const deleteConfirmation = writable({ open: false });
const questionnaireOrder = writable({ open: false });
const questionnaireValidation = writable({});
const initAnswerState = {
  answers: {},
  scores: {},
  grades: {},
  totalPossibleGrade: 0,
  finalTotalGrade: 0,
  currentQuestionIndex: 0,
  isFinished: false,
  progressValue: 0,
  status: STATUS.PENDING,
  comment: "",
  exerciseId: null,
  currentSectionIndex: 0,
  sectionPhase: "overview"
};
const questionnaireMetaData = writable(initAnswerState);
const questionnaire = writable({
  title: "",
  dueBy: "",
  isDueByDirty: false,
  isTitleDirty: false,
  description: "",
  isDescriptionDirty: false,
  questions: [],
  sections: [],
  sectionDisplayMode: "one_question",
  totalSubmissions: 0,
  allowMultipleAttempts: false,
  slug: ""
});
function clearQuestionnaireValidation() {
  questionnaireValidation.set({});
}
function reset() {
  questionnaireMetaData.update((metaData) => ({
    ...metaData,
    answers: {},
    scores: {},
    grades: {},
    currentQuestionIndex: 0,
    isFinished: false,
    exerciseId: null,
    totalPossibleGrade: 0,
    finalTotalGrade: 0,
    status: STATUS.PENDING,
    comment: "",
    progressValue: 100,
    currentSectionIndex: 0,
    sectionPhase: "overview"
  }));
  clearQuestionnaireValidation();
}
function resetStudentExerciseTake() {
  questionnaireMetaData.set({
    ...initAnswerState,
    exerciseId: null
  });
  clearQuestionnaireValidation();
}
function mapZodErrorsToQuestionErrors(zodErrors, questions) {
  const errors = {};
  for (const [path, message] of Object.entries(zodErrors)) {
    const pathParts = path.split(".");
    const questionIndex = pathParts[0] === "questions" ? parseInt(pathParts[1]) : -1;
    if (questionIndex >= 0 && questionIndex < questions.length) {
      const question = questions[questionIndex];
      if (question && !question.deletedAt) {
        const qErrors = errors[question.id] || {};
        if (path.includes("options")) {
          qErrors.option = message;
        } else if (path.includes("question")) {
          qErrors.title = message;
        } else if (path.includes("points")) {
          qErrors.points = message;
        }
        errors[question.id] = { ...qErrors };
      }
    }
  }
  return errors;
}
function hasSections(sections) {
  return sections.some((section) => !section.deletedAt);
}
function compareQuestionsByOrder(leftQuestion, rightQuestion) {
  const leftOrder = leftQuestion.order ?? 0;
  const rightOrder = rightQuestion.order ?? 0;
  if (leftOrder !== rightOrder) return leftOrder - rightOrder;
  return String(leftQuestion.id).localeCompare(String(rightQuestion.id), void 0, { numeric: true });
}
function getQuestionsForSection(questions, exerciseSectionId) {
  return questions.filter((question) => !question.deletedAt && question.exerciseSectionId === exerciseSectionId).sort(compareQuestionsByOrder);
}
function handleAddQuestion(exerciseSectionId) {
  let nextQuestionId = "";
  questionnaire.update((q) => {
    const { questions } = q;
    const activeSections = q.sections.filter((section) => !section.deletedAt);
    const nextExerciseSectionId = exerciseSectionId ?? (activeSections.length > 0 ? activeSections[0].id : null);
    nextQuestionId = `${questions.length + 1}-form`;
    return {
      ...q,
      questions: [
        ...questions,
        {
          ...QUESTION_TEMPLATE,
          id: nextQuestionId,
          name: `${nextQuestionId}`,
          value: "",
          points: 0,
          order: questions.length,
          exerciseSectionId: nextExerciseSectionId,
          questionType: DEFAULT_QUESTION_TYPE,
          questionTypeId: DEFAULT_QUESTION_TYPE.id,
          options: [
            {
              id: "1-form",
              label: "",
              value: null,
              isCorrect: false
            }
          ]
        }
      ]
    };
  });
  return nextQuestionId;
}
function handleAddSection() {
  let nextSectionId = "";
  questionnaire.update((q) => {
    const activeSections = q.sections.filter((section) => !section.deletedAt);
    const firstAvailableSectionOrder = activeSections.reduce((highestOrder, section) => Math.max(highestOrder, section.order), -1) + 1;
    const activeUnsectionedQuestions = q.questions.filter(
      (question) => !question.deletedAt && !question.exerciseSectionId
    );
    const nextSectionDisplayNumber = activeSections.length + (activeUnsectionedQuestions.length > 0 ? 2 : 1);
    const nextSections = [...q.sections];
    let questions = q.questions;
    let nextSectionOrder = firstAvailableSectionOrder;
    if (activeUnsectionedQuestions.length > 0) {
      const untitledSectionId = crypto.randomUUID();
      const untitledSection = {
        id: untitledSectionId,
        title: UNTITLED_EXERCISE_SECTION_TITLE,
        description: null,
        order: nextSectionOrder,
        colorTheme: "blue",
        afterBehavior: { action: "continue" },
        isDirty: true
      };
      nextSectionOrder += 1;
      nextSections.push(untitledSection);
      questions = q.questions.map((question) => {
        if (question.deletedAt || question.exerciseSectionId) return question;
        return {
          ...question,
          exerciseSectionId: untitledSectionId,
          isDirty: true
        };
      });
    }
    const sectionId = crypto.randomUUID();
    nextSectionId = sectionId;
    const nextSection = {
      id: sectionId,
      title: `Section ${nextSectionDisplayNumber}`,
      description: null,
      order: nextSectionOrder,
      colorTheme: "blue",
      afterBehavior: { action: "continue" },
      isDirty: true
    };
    return {
      ...q,
      questions,
      sections: [...nextSections, nextSection]
    };
  });
  return nextSectionId;
}
function handleRemoveSection(exerciseSectionId, moveQuestionsToExerciseSectionId) {
  questionnaire.update((q) => {
    const activeSections = q.sections.filter((section) => !section.deletedAt);
    const remainingSections = activeSections.filter((section) => section.id !== exerciseSectionId);
    const shouldClearSections = remainingSections.length === 0;
    const deletedAt = (/* @__PURE__ */ new Date()).toString();
    return {
      ...q,
      sections: q.sections.map(
        (section) => section.id === exerciseSectionId ? { ...section, deletedAt, isDirty: true } : section
      ),
      questions: q.questions.map((question) => {
        if (question.exerciseSectionId !== exerciseSectionId) return question;
        if (moveQuestionsToExerciseSectionId || shouldClearSections) {
          return {
            ...question,
            exerciseSectionId: shouldClearSections ? null : moveQuestionsToExerciseSectionId,
            isDirty: true
          };
        }
        return {
          ...question,
          deletedAt,
          isDirty: true
        };
      })
    };
  });
}
function handleUpdateSectionAfterBehavior(exerciseSectionId, afterBehavior) {
  questionnaire.update((q) => ({
    ...q,
    sections: q.sections.map(
      (section) => section.id === exerciseSectionId ? { ...section, afterBehavior, isDirty: true } : section
    )
  }));
}
function handleUpdateSectionColorTheme(exerciseSectionId, colorTheme) {
  questionnaire.update((q) => ({
    ...q,
    sections: q.sections.map(
      (section) => section.id === exerciseSectionId ? { ...section, colorTheme, isDirty: true } : section
    )
  }));
}
function handleUpdateSectionTitle(exerciseSectionId, title) {
  questionnaire.update((q) => ({
    ...q,
    sections: q.sections.map(
      (section) => section.id === exerciseSectionId ? { ...section, title, isDirty: true } : section
    )
  }));
}
function handleUpdateSectionDescription(exerciseSectionId, description) {
  questionnaire.update((q) => ({
    ...q,
    sections: q.sections.map(
      (section) => section.id === exerciseSectionId ? { ...section, description, isDirty: true } : section
    )
  }));
}
function handleReorderSections(orderedSectionIds) {
  const orderBySectionId = new Map(orderedSectionIds.map((sectionId, index) => [sectionId, index]));
  questionnaire.update((q) => ({
    ...q,
    sections: q.sections.map((section) => {
      const nextOrder = orderBySectionId.get(section.id);
      if (nextOrder === void 0 || nextOrder === section.order) return section;
      return { ...section, order: nextOrder, isDirty: true };
    })
  }));
}
function handleRemoveQuestion(questionId) {
  return () => {
    questionnaire.update((q) => {
      const questionIndex = q.questions.findIndex((qItem) => qItem.id === questionId);
      if (questionIndex === -1) return q;
      q.questions[questionIndex].deletedAt = (/* @__PURE__ */ new Date()).toString();
      return q;
    });
  };
}
function handleCode(questionId, shouldAdd = true) {
  questionnaire.update((q) => {
    const questionIndex = q.questions.findIndex((qItem) => qItem.id === questionId);
    if (questionIndex === -1) return q;
    const question = q.questions[questionIndex];
    q.questions[questionIndex].code = shouldAdd ? question.code || "" : void 0;
    return q;
  });
}
function normalizeQuestionOrder(questions) {
  if (questions.length === 0) return questions;
  const withOrderZero = questions.filter((q) => q.order == null || q.order === 0);
  const isUnordered = withOrderZero.length > 1;
  const toNumericId = (id) => typeof id === "number" ? id : typeof id === "string" ? parseInt(id, 10) || 0 : 0;
  if (!isUnordered) {
    return [...questions].sort((a, b) => {
      const orderA = a.order ?? 0;
      const orderB = b.order ?? 0;
      if (orderA !== orderB) return orderA - orderB;
      return toNumericId(a.id) - toNumericId(b.id);
    });
  }
  const sortedById = [...questions].sort((a, b) => toNumericId(a.id) - toNumericId(b.id));
  return sortedById.map((q, index) => ({ ...q, order: index + 1 }));
}
function hydrateExercisePageData(exercise, exerciseId) {
  let questions = [];
  const sections = Array.isArray(exercise.sections) ? exercise.sections.map((section) => ({
    id: section.id,
    title: section.title,
    description: section.description ?? null,
    order: section.order,
    colorTheme: section.colorTheme,
    afterBehavior: section.afterBehavior
  })).sort((left, right) => left.order - right.order) : [];
  const exerciseQuestions = [...Array.isArray(exercise.questions) ? exercise.questions : []];
  if (exerciseQuestions.length > 0) {
    const mappedQuestions = exerciseQuestions.map((question) => {
      const questionType = getQuestionTypeOptionById(getQuestionTypeId(question));
      return {
        ...question,
        exerciseSectionId: question.exerciseSectionId ?? null,
        questionTypeId: questionType.id,
        questionType
      };
    });
    if (sections.length > 0) {
      const unsectionedQuestions = mappedQuestions.filter(
        (question) => !question.deletedAt && !question.exerciseSectionId
      );
      if (unsectionedQuestions.length > 0) {
        const untitledSectionId = crypto.randomUUID();
        const nextSectionOrder = sections.reduce((highestOrder, section) => Math.max(highestOrder, section.order), -1) + 1;
        sections.push({
          id: untitledSectionId,
          title: UNTITLED_EXERCISE_SECTION_TITLE,
          description: null,
          order: nextSectionOrder,
          colorTheme: "blue",
          afterBehavior: { action: "continue" },
          isDirty: true
        });
        for (const question of unsectionedQuestions) {
          question.exerciseSectionId = untitledSectionId;
          question.isDirty = true;
        }
      }
    }
    questions = normalizeQuestionOrder(mappedQuestions);
  }
  clearQuestionnaireValidation();
  questionnaire.set({
    title: exercise.title,
    description: exercise.description,
    dueBy: exercise.dueBy,
    isTitleDirty: false,
    isDescriptionDirty: false,
    isDueByDirty: false,
    questions,
    sections,
    sectionDisplayMode: exercise.sectionDisplayMode ?? "one_question",
    totalSubmissions: 0,
    allowMultipleAttempts: !!exercise.allowMultipleAttempts,
    slug: exercise.slug ?? ""
  });
  questionnaireMetaData.update((metadata) => ({ ...metadata, exerciseId }));
}
async function refreshExercisePageData(courseId, exerciseId) {
  await exerciseApi.get(courseId, exerciseId);
  if (!exerciseApi.exercise) return null;
  hydrateExercisePageData(exerciseApi.exercise, exerciseId);
  return exerciseApi.exercise;
}

export { File_question_mark as F, reset as a, questionnaireOrder as b, questionnaireValidation as c, hydrateExercisePageData as d, handleAddQuestion as e, handleAddSection as f, getQuestionsForSection as g, hasSections as h, questionnaireMetaData as i, resetStudentExerciseTake as j, handleCode as k, deleteConfirmation as l, mapZodErrorsToQuestionErrors as m, handleUpdateSectionTitle as n, handleUpdateSectionDescription as o, handleUpdateSectionAfterBehavior as p, questionnaire as q, refreshExercisePageData as r, handleRemoveQuestion as s, handleReorderSections as t, handleRemoveSection as u, handleUpdateSectionColorTheme as v };
//# sourceMappingURL=exercise-page-utils-BstdfR31.js.map
