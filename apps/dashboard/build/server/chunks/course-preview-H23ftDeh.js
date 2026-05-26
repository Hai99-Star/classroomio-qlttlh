import { g as goto } from './client2-CqohmrW2.js';
import { r as resolve } from './server3-VLoL706W.js';
import { s as snackbar } from './store-D_AYzDdq.js';

function getPublicCoursePageUrl(courseSlug, currentOrgDomain = "") {
  if (typeof window === "undefined") {
    return "";
  }
  const trimmedDomain = currentOrgDomain?.trim();
  const origin = trimmedDomain || window.location.origin;
  return new URL(resolve(`/course/${courseSlug}`, {}), origin).toString();
}
function openCoursePreview({ courseId, courseSlug, currentOrgDomain = "" }) {
  if (!courseSlug) {
    snackbar.info("course.header.preview_missing_slug");
    if (courseId) {
      goto(resolve(`/courses/${courseId}/settings`, {}));
    }
    return false;
  }
  const link = getPublicCoursePageUrl(courseSlug, currentOrgDomain);
  if (!link) {
    return false;
  }
  window.open(link, "_blank", "noopener,noreferrer");
  return true;
}
async function copyPublicCoursePageUrl(courseSlug, currentOrgDomain = "") {
  const url = getPublicCoursePageUrl(courseSlug, currentOrgDomain);
  if (!url) {
    return false;
  }
  try {
    await navigator.clipboard.writeText(url);
    snackbar.success("snackbar.public_course.url_copied");
    return true;
  } catch (error) {
    console.error("copyPublicCoursePageUrl error:", error);
    snackbar.error("snackbar.public_course.url_copy_failed");
    return false;
  }
}

export { copyPublicCoursePageUrl as c, openCoursePreview as o };
//# sourceMappingURL=course-preview-H23ftDeh.js.map
