import { w as writable } from './index-AIbsv2Pd.js';

const courseCompletionModal = writable(null);
function openCourseCompletionModal(courseId) {
  courseCompletionModal.set({ open: true, courseId });
}
function closeCourseCompletionModal() {
  courseCompletionModal.set(null);
}

export { closeCourseCompletionModal as c, openCourseCompletionModal as o };
//# sourceMappingURL=course-completion-modal-B9jcuT_n.js.map
