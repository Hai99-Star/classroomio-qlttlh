import { c as classroomio } from './index4-CY3O4yvX.js';
import { B as BaseApiWithErrors } from './base.svelte-Bh2VVy5Z.js';

const createSetupData = ({
  orgHasAvatarUrl = false,
  isCourseCreated = false,
  isLessonCreated = false,
  isExerciseCreated = false,
  isCoursePublished = false
} = {}) => [
  {
    id: "profile",
    title: "setup.personal_profile.title",
    desc: "setup.personal_profile.desc",
    is_completed: false,
    button_label: "setup.personal_profile.button_label"
  },
  {
    id: "organization",
    title: "setup.organization_profile.title",
    desc: "setup.organization_profile.desc",
    is_completed: orgHasAvatarUrl,
    button_label: "setup.organization_profile.button_label"
  },
  {
    id: "course",
    title: "setup.course.title",
    desc: "setup.course.desc",
    is_completed: isCourseCreated,
    button_label: "setup.course.button_label"
  },
  {
    id: "lesson",
    title: "setup.lesson.title",
    desc: "setup.lesson.desc",
    is_completed: isLessonCreated,
    button_label: "setup.lesson.button_label"
  },
  {
    id: "exercise",
    title: "setup.exercise.title",
    desc: "setup.exercise.desc",
    is_completed: isExerciseCreated,
    button_label: "setup.exercise.button_label"
  },
  {
    id: "publish",
    title: "setup.publish_course.title",
    desc: "setup.publish_course.desc",
    is_completed: isCoursePublished,
    button_label: "setup.publish_course.button_label"
  }
];
class SetupProgressApi extends BaseApiWithErrors {
  progress = { orgSiteName: "", setup: [], courses: [], lessons: [] };
  constructor() {
    super();
    this.isLoading = true;
  }
  /**
   * Computed setup list with profile completion check
   * This computation is shared across components to avoid duplication
   * Note: Profile completion check should be done in components using $profile
   * This returns the base setup list, and components can derive the final list
   */
  get setupList() {
    return this.progress.setup || [];
  }
  /**
   * Private method to update progress state from data
   * @param data Setup progress data from server
   * @param siteName Organization site name
   */
  updateProgress(data, siteName) {
    if (!data) {
      const setup2 = createSetupData();
      this.progress = {
        orgSiteName: siteName,
        setup: setup2,
        courses: [],
        lessons: []
      };
      return;
    }
    const {
      isCourseCreated,
      isCoursePublished,
      orgHasAvatarUrl,
      courseData,
      lessonData,
      isLessonCreated,
      isExerciseCreated
    } = data;
    const setup = createSetupData({
      orgHasAvatarUrl,
      isCourseCreated,
      isLessonCreated,
      isExerciseCreated,
      isCoursePublished
    });
    this.progress = {
      orgSiteName: siteName,
      setup,
      courses: courseData || [],
      lessons: lessonData || []
    };
  }
  /**
   * Initializes progress from server data
   * This is used when data is fetched server-side and passed as a prop
   * @param data Setup progress data from server
   * @param siteName Organization site name
   */
  initializeFromServerData(data, siteName) {
    this.updateProgress(data, siteName);
    this.isLoading = false;
  }
  /**
   * Fetches setup progress data for an organization
   * @param siteName Organization site name
   */
  async fetchSetupProgress(siteName) {
    await this.execute({
      requestFn: () => classroomio.organization.setup.$get({ query: { siteName } }),
      logContext: "fetching setup progress",
      onSuccess: (response) => {
        this.updateProgress(response.data, siteName);
      },
      onError: (error) => {
        console.error("Error fetching setup progress:", error);
        this.updateProgress(null, siteName);
      }
    });
  }
}
const setupProgressApi = new SetupProgressApi();
function calculateProgress(setupItems) {
  if (!setupItems || setupItems.length === 0) return 0;
  const completed = setupItems.filter((item) => item.is_completed).length;
  return Math.round(completed / setupItems.length * 100);
}

export { calculateProgress as c, setupProgressApi as s };
//# sourceMappingURL=setup-progress.svelte-DpnO-FI3.js.map
