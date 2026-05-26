import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import { Q as QUESTION_TYPE_REGISTRY, a as QUESTION_TYPE_KEY } from './question-type-capabilities-B1VkdJbc.js';

const ROUTES = {
  COURSES: "courses",
  LESSONS: "lessons"
};
const EXERCISE_TEMPLATE_TAGS = {
  HTML: "HTML",
  CSS: "CSS",
  JS: "JS",
  Typescript: "Typescript",
  ReactJS: "ReactJS",
  VueJS: "VueJS",
  NodeJS: "NodeJS",
  Python: "Python",
  PHP: "PHP",
  GIT: "GIT"
};
const CourseSortBy = {
  DateCreated: "date_created",
  Published: "published",
  Lessons: "lessons"
};
const DEFAULT_COURSE_SORT = CourseSortBy.DateCreated;
const CourseSortOrder = {
  Asc: "asc",
  Desc: "desc"
};
const DEFAULT_SORT_ORDER = CourseSortOrder.Desc;
const DEFAULT_CERTIFICATE_THEME_ID = "classique";
new Set(Object.values(CourseSortOrder));
const COURSE_SORT_OPTIONS = [
  { value: CourseSortBy.DateCreated, label: "courses.course_filter.date_created" },
  { value: CourseSortBy.Published, label: "courses.course_filter.published" },
  { value: CourseSortBy.Lessons, label: "courses.course_filter.lessons" }
];
new Set(Object.values(CourseSortBy));
dayjs.extend(relativeTime);
const calDateDiff = (date) => {
  return dayjs(date).fromNow(true) + ` ago`;
};
const getGreeting = () => {
  const date = /* @__PURE__ */ new Date();
  const hours = date.getHours();
  return hours < 12 ? "dashboard.morning_heading" : hours < 18 ? "dashboard.afternoon_heading" : "dashboard.evening_heading";
};
const PREMIUM_QUESTION_TYPE_KEYS = /* @__PURE__ */ new Set([
  QUESTION_TYPE_KEY.FILE_UPLOAD,
  QUESTION_TYPE_KEY.ORDERING,
  QUESTION_TYPE_KEY.LINK,
  QUESTION_TYPE_KEY.STAR,
  QUESTION_TYPE_KEY.VIDEO_RECORDING
]);
const QUESTION_TYPE_LABEL_KEYS = {
  [QUESTION_TYPE_KEY.RADIO]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.single",
  [QUESTION_TYPE_KEY.CHECKBOX]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.multiple",
  [QUESTION_TYPE_KEY.TEXTAREA]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.paragraph",
  [QUESTION_TYPE_KEY.TRUE_FALSE]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.true_false",
  [QUESTION_TYPE_KEY.SHORT_ANSWER]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.short_answer",
  [QUESTION_TYPE_KEY.NUMERIC]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.numeric",
  [QUESTION_TYPE_KEY.FILL_BLANK]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.fill_blank",
  [QUESTION_TYPE_KEY.FILE_UPLOAD]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.file_upload",
  [QUESTION_TYPE_KEY.MATCHING]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.matching",
  [QUESTION_TYPE_KEY.ORDERING]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.ordering",
  [QUESTION_TYPE_KEY.HOTSPOT]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.hotspot",
  [QUESTION_TYPE_KEY.LINK]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.link",
  [QUESTION_TYPE_KEY.WORD_BANK]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.word_bank",
  [QUESTION_TYPE_KEY.STAR]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.star",
  [QUESTION_TYPE_KEY.VIDEO_RECORDING]: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.video_recording"
};
const HIDDEN_QUESTION_TYPE_KEYS = /* @__PURE__ */ new Set([QUESTION_TYPE_KEY.MATCHING, QUESTION_TYPE_KEY.HOTSPOT]);
const QUESTION_TYPES = QUESTION_TYPE_REGISTRY.filter((qt) => !HIDDEN_QUESTION_TYPE_KEYS.has(qt.key)).map(
  (questionType) => ({
    id: questionType.id,
    key: questionType.key,
    label: questionType.label,
    labelKey: QUESTION_TYPE_LABEL_KEYS[questionType.key],
    autoGradable: questionType.autoGradable
  })
);
const DEFAULT_QUESTION_TYPE = QUESTION_TYPES.find(
  (questionType) => questionType.key === QUESTION_TYPE_KEY.RADIO
) ?? QUESTION_TYPES[0] ?? {
  id: 1,
  key: QUESTION_TYPE_KEY.RADIO,
  label: "Single answer",
  labelKey: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.single"
};
const QUESTION_TEMPLATE = {
  id: 1,
  title: "",
  type: DEFAULT_QUESTION_TYPE.id,
  answers: [],
  options: [
    {
      id: 1,
      value: null
    }
  ]
};

export { CourseSortBy as C, DEFAULT_QUESTION_TYPE as D, EXERCISE_TEMPLATE_TAGS as E, PREMIUM_QUESTION_TYPE_KEYS as P, QUESTION_TEMPLATE as Q, ROUTES as R, QUESTION_TYPES as a, DEFAULT_CERTIFICATE_THEME_ID as b, calDateDiff as c, DEFAULT_COURSE_SORT as d, COURSE_SORT_OPTIONS as e, DEFAULT_SORT_ORDER as f, getGreeting as g, CourseSortOrder as h };
//# sourceMappingURL=page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js.map
