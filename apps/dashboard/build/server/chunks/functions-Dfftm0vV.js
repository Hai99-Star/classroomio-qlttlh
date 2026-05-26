import { R as ROUTES } from './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';

function getNavItemRoute(courseId, routeId) {
  const path = `/${ROUTES.COURSES}/${courseId}`;
  if (!routeId) {
    return path;
  }
  return `${path}/${routeId}`;
}
function getLessonsRoute(courseId, lessonId) {
  const path = getNavItemRoute(courseId, ROUTES.LESSONS);
  {
    return path;
  }
}
function getActiveCourseNavKey(pathname, courseId) {
  if (!courseId) return null;
  const base = `/${ROUTES.COURSES}/${courseId}`;
  if (!pathname.startsWith(base)) return null;
  const rest = pathname.slice(base.length).replace(/^\//, "");
  const segment = rest.split("/")[0];
  if (!segment) return "course.navItems.nav_news_feed";
  if (segment === ROUTES.LESSONS || segment === "exercises") return "course.navItems.nav_content";
  if (segment === "analytics") return "course.navItems.nav_analytics";
  if (segment === "attendance") return "course.navItems.nav_attendance";
  if (segment === "submissions") return "course.navItems.nav_submissions";
  if (segment === "marks") return "course.navItems.nav_marks";
  if (segment === "compliance") return "course.navItems.nav_compliance";
  if (segment === "certificates") return "course.navItems.nav_certificates";
  if (segment === "landingpage") return "course.navItems.nav_landing_page";
  if (segment === "people") return "course.navItems.nav_people";
  if (segment === "ai-tutor") return "course.navItems.nav_ai_tutor";
  if (segment === "settings") return "course.navItems.nav_settings";
  return null;
}
function getLectureNo(index, initNo = "0") {
  if (index <= 9) {
    return `${initNo}${index}`;
  }
  return index;
}
function calcProgressRate(progressRate, totalLessons) {
  if (!progressRate || !totalLessons) {
    return 0;
  }
  return Math.round(progressRate / totalLessons * 100);
}
function calcCourseProgress(params) {
  const { lessonsCompleted, totalLessons, exercisesCompleted = 0, totalExercises = 0 } = params;
  const totalItems = totalLessons + totalExercises;
  if (totalItems === 0) return 0;
  const completedItems = lessonsCompleted + exercisesCompleted;
  return Math.round(completedItems / totalItems * 100);
}
function formatAnswers(data) {
  const answers = {};
  const questionKeyById = {};
  for (const question of data.questions) {
    const key = question.name ? String(question.name) : String(question.id);
    questionKeyById[String(question.id)] = key;
  }
  for (const answer of data.answers) {
    const questionKey = questionKeyById[String(answer.questionId)];
    if (questionKey && answer.answerData) {
      answers[questionKey] = answer.answerData;
    }
  }
  return answers;
}

export { getNavItemRoute as a, getLessonsRoute as b, getLectureNo as c, calcCourseProgress as d, calcProgressRate as e, formatAnswers as f, getActiveCourseNavKey as g };
//# sourceMappingURL=functions-Dfftm0vV.js.map
