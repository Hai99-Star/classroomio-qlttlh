import { g as getQuestionTypeById, a as QUESTION_TYPE_KEY } from './question-type-capabilities-B1VkdJbc.js';
import { a as QUESTION_TYPES, D as DEFAULT_QUESTION_TYPE } from './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import { t } from './translations-BxDrjLWK.js';

const STATUS = {
  PENDING: 0,
  SUBMITTED: 1,
  IN_PROGRESS: 2,
  GRADED: 3
};
const UNTITLED_EXERCISE_SECTION_TITLE = "Untitled section";
function getExerciseSectionDisplayTitle({
  title,
  sectionNumber,
  sectionLabel
}) {
  if (title.trim() === UNTITLED_EXERCISE_SECTION_TITLE) return `${sectionLabel} ${sectionNumber}`;
  return title;
}
function getExerciseEditorQuestionTypeLabel(questionType) {
  if (!questionType) return t.get("course.navItem.lessons.exercises.all_exercises.edit_mode.select_type");
  if ("labelKey" in questionType && questionType.labelKey) return t.get(questionType.labelKey);
  return questionType.label ?? t.get("course.navItem.lessons.exercises.all_exercises.edit_mode.select_type");
}
const OPTION_QUESTION_TYPE_KEYS = /* @__PURE__ */ new Set([
  QUESTION_TYPE_KEY.RADIO,
  QUESTION_TYPE_KEY.CHECKBOX,
  QUESTION_TYPE_KEY.TRUE_FALSE
]);
function getQuestionTypeId(question) {
  const value = Number(question.questionTypeId ?? question.questionType?.id ?? DEFAULT_QUESTION_TYPE?.id ?? 1);
  return Number.isNaN(value) ? DEFAULT_QUESTION_TYPE?.id ?? 1 : value;
}
function getQuestionTypeOptionById(questionTypeId) {
  return QUESTION_TYPES.find((questionType) => questionType.id === questionTypeId) ?? DEFAULT_QUESTION_TYPE;
}
function getQuestionTypeKeyFromId(questionTypeId) {
  return getQuestionTypeById(questionTypeId)?.key ?? QUESTION_TYPE_KEY.RADIO;
}
function getQuestionTypeKey(question) {
  return getQuestionTypeKeyFromId(getQuestionTypeId(question));
}
function questionTypeSupportsOptions(questionTypeKey) {
  return OPTION_QUESTION_TYPE_KEYS.has(questionTypeKey);
}
function toExerciseQuestionModel(question) {
  const options = (question.options || []).filter((option) => !option.deletedAt).map((option) => ({
    id: option.id,
    label: option.label || String(option.value ?? ""),
    value: option.value ?? void 0,
    isCorrect: option.isCorrect,
    settings: option.settings && typeof option.settings === "object" && !Array.isArray(option.settings) ? { ...option.settings } : void 0
  }));
  const rawSettings = question.settings;
  const settings = rawSettings && typeof rawSettings === "object" ? rawSettings : {};
  const required = typeof question.required === "boolean" ? question.required : typeof settings.required === "boolean" ? settings.required : true;
  return {
    id: question.id,
    key: question.name ? String(question.name) : question.id ? String(question.id) : void 0,
    title: question.title || "",
    questionType: getQuestionTypeKey(question),
    points: Number(question.points || 0),
    required,
    options,
    settings
  };
}

export { STATUS as S, UNTITLED_EXERCISE_SECTION_TITLE as U, getQuestionTypeId as a, getQuestionTypeKeyFromId as b, getQuestionTypeKey as c, getExerciseSectionDisplayTitle as d, getExerciseEditorQuestionTypeLabel as e, getQuestionTypeOptionById as g, questionTypeSupportsOptions as q, toExerciseQuestionModel as t };
//# sourceMappingURL=question-type-utils-0UcIMLvN.js.map
