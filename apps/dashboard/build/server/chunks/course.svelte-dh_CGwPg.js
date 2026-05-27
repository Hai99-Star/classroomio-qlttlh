import { g as get } from './index-AIbsv2Pd.js';
import { c as classroomio } from './index4-3F2xRc80.js';
import { Z as ZCourseCreate, a as ZCourseUpdate } from './submission-CIIjGYOS.js';
import { D as DEFAULT_COMPLIANCE_SETTINGS } from './compliance-utils-UIprJIyn.js';
import { c as capturePosthogEvent } from './index16-Bj79zRdC.js';
import { R as ROLE, c as currentOrg } from './org-BIDTy0Q0.js';
import { g as goto } from './client2-CqohmrW2.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-Bx8dlk4A.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { r as resolve } from './server3-VLoL706W.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { c as coursesApi } from './courses.svelte-DHUYjzzY.js';
import './content-BYLGOVzm.js';

class CourseApi extends BaseApiWithErrors {
  course = null;
  courseAnalytics = null;
  group = { id: "", tutors: [], students: [], people: [], memberId: "" };
  loadedCourseId = null;
  isCourseDirty = false;
  inFlightCourseRequest = null;
  inFlightCourseId = null;
  /**
   * Updates a single lesson/exercise item in the local course content store.
   * This avoids list staleness when navigating back from item detail pages.
   */
  updateContentItem(itemId, itemType, patch) {
    if (!this.course?.content) return false;
    const content = this.course.content;
    if (content.grouped) {
      let hasUpdatedItem2 = false;
      const sections = content.sections.map((section) => {
        let sectionHasUpdatedItem = false;
        const items2 = section.items.map((item) => {
          if (item.id !== itemId || item.type !== itemType) return item;
          sectionHasUpdatedItem = true;
          return { ...item, ...patch };
        });
        if (!sectionHasUpdatedItem) {
          return section;
        }
        hasUpdatedItem2 = true;
        return { ...section, items: items2 };
      });
      if (!hasUpdatedItem2) return false;
      this.course = { ...this.course, content: { ...content, sections } };
      return true;
    }
    let hasUpdatedItem = false;
    const items = content.items.map((item) => {
      if (item.id !== itemId || item.type !== itemType) return item;
      hasUpdatedItem = true;
      return { ...item, ...patch };
    });
    if (!hasUpdatedItem) return false;
    this.course = { ...this.course, content: { ...content, items } };
    return true;
  }
  /**
   * Removes a single lesson/exercise item from the local course content store.
   * This keeps sidebar lists in sync after delete actions.
   */
  removeContentItem(itemId, itemType) {
    if (!this.course?.content) return false;
    const content = this.course.content;
    if (content.grouped) {
      let hasRemovedItem = false;
      const sections = content.sections.map((section) => {
        const items2 = section.items.filter((item) => {
          const shouldRemove = item.id === itemId && item.type === itemType;
          if (shouldRemove) {
            hasRemovedItem = true;
          }
          return !shouldRemove;
        });
        if (items2.length === section.items.length) {
          return section;
        }
        return { ...section, items: items2 };
      });
      if (!hasRemovedItem) return false;
      this.course = { ...this.course, content: { ...content, sections } };
      return true;
    }
    const items = content.items.filter((item) => !(item.id === itemId && item.type === itemType));
    if (items.length === content.items.length) return false;
    this.course = { ...this.course, content: { ...content, items } };
    return true;
  }
  /**
   * Gets a course by ID
   * @param courseId Course ID
   * @returns The course data or null on error
   */
  async get(courseId) {
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].$get({ param: { courseId }, query: {} }),
      logContext: "fetching course",
      onSuccess: (response) => {
        console.log("response", response.data);
        if (response.data) {
          this.course = response.data;
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("Failed to fetch course");
        }
      }
    });
    return this.course;
  }
  /**
   * Ensures the course store is populated for a given courseId.
   * - Fetches from the API the first time per courseId
   * - Reuses store data on subsequent calls
   * - Can be forced to refetch by calling `invalidateCourse(courseId)`
   */
  async ensureCourse(courseId, profileId) {
    if (!courseId || !profileId) return null;
    if (!this.isCourseDirty && this.loadedCourseId === courseId && this.course?.id === courseId) {
      return this.course;
    }
    if (this.inFlightCourseRequest && this.inFlightCourseId === courseId) {
      return this.inFlightCourseRequest;
    }
    const request = (async () => {
      const course = await this.get(courseId);
      if (course) {
        this.setCourse(course, profileId);
        this.loadedCourseId = courseId;
        this.isCourseDirty = false;
      }
      return this.course;
    })();
    this.inFlightCourseRequest = request;
    this.inFlightCourseId = courseId;
    try {
      return await request;
    } finally {
      if (this.inFlightCourseRequest === request) {
        this.inFlightCourseRequest = null;
        this.inFlightCourseId = null;
      }
    }
  }
  /**
   * Marks the currently loaded course as stale.
   * Next call to `ensureCourse(courseId, profileId)` will refetch.
   */
  invalidateCourse(courseId) {
    if (!courseId) {
      this.isCourseDirty = true;
    } else if (this.loadedCourseId === courseId) {
      this.isCourseDirty = true;
    }
  }
  /**
   * Forces a refetch of the course into the store (used after mutations).
   */
  async refreshCourse(courseId, profileId) {
    this.invalidateCourse(courseId);
    return this.ensureCourse(courseId, profileId);
  }
  /**
   * Enrolls the current user in a course (free: direct enroll; paid: requires inviteToken).
   * @param courseId Course ID
   * @param body Optional invite token for paid/invited courses
   * @returns Success data with redirectTo, or undefined on error
   */
  async enroll(courseId, body = {}) {
    return this.execute({
      requestFn: () => classroomio.course[":courseId"].enroll.$post({ param: { courseId }, json: body }),
      logContext: "enrolling in course",
      onSuccess: () => {
        this.success = true;
        this.errors = {};
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("snackbar.invite.failed_join");
        } else if (typeof result === "object" && result !== null && "error" in result) {
          snackbar.error(result.error);
        }
      }
    });
  }
  /**
   * Gets a course by slug (public route)
   * @param slug Course slug
   * @returns The course data or null on error
   */
  async getBySlug(slug) {
    await this.execute({
      requestFn: () => classroomio.course.slug?.[":slug"].$get({ param: { slug } }),
      logContext: "fetching course by slug",
      onSuccess: (response) => {
        if (response.data) {
          this.course = response.data;
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("Failed to fetch course by slug");
        }
      }
    });
    return this.course;
  }
  /**
   * Creates a new course with group, group member, and default newsfeed
   * @param fields Course creation fields (title, description, type)
   * @returns The created course data or null on error
   */
  async create(fields, onCreated) {
    const org = get(currentOrg);
    const userProfile = get(profile);
    const data = {
      title: fields.title,
      description: fields.description,
      type: fields.type,
      organizationId: org.id,
      compliance: fields.type === "COMPLIANCE" ? DEFAULT_COMPLIANCE_SETTINGS : void 0
    };
    const result = ZCourseCreate.safeParse(data);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "course");
      return null;
    }
    await this.execute({
      requestFn: () => classroomio.course.$post({ json: result.data }),
      logContext: "creating course",
      onSuccess: (response) => {
        if (response.data?.course) {
          const newCourse = response.data.course;
          capturePosthogEvent("course_created", {
            course_id: newCourse.id,
            courseTitle: newCourse.title,
            courseDescription: newCourse.description,
            organization_id: org.id,
            organization_name: org.name,
            user_id: userProfile.id,
            user_email: userProfile.email
          });
          if (onCreated) {
            onCreated(newCourse.id);
          } else {
            goto(resolve(`/courses/${newCourse.id}`, {}));
            snackbar.success("Course created successfully");
          }
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("Failed to create course");
          return;
        }
        if ("error" in result2 && "field" in result2 && result2.field) {
          this.errors[result2.field] = result2.error;
          snackbar.error(result2.error);
        } else if ("error" in result2) {
          this.errors.general = result2.error;
          snackbar.error(result2.error);
        }
      }
    });
  }
  /**
   * Updates a course
   * @param courseId Course ID
   * @param fields Course update fields
   * @returns The updated course data or null on error
   */
  async update(courseId, fields, options = {}) {
    const { showSuccessToast = true } = options;
    const result = ZCourseUpdate.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "course");
      return null;
    }
    const response = await this.execute({
      requestFn: () => classroomio.course[":courseId"].$put({ param: { courseId }, json: result.data }),
      logContext: "updating course",
      onSuccess: (response2) => {
        if (response2.data) {
          if (this.course) {
            Object.assign(this.course, response2.data);
          } else {
            this.course = response2.data;
          }
          if (showSuccessToast) {
            snackbar.success("Course updated successfully");
          }
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("Failed to update course");
          return;
        }
        if ("error" in result2 && "field" in result2 && result2.field) {
          this.errors[result2.field] = result2.error;
          snackbar.error(result2.error);
        } else if ("error" in result2) {
          this.errors.general = result2.error;
          snackbar.error(result2.error);
        }
      }
    });
    const updated = response?.data ?? null;
    if (updated) {
      const profileId = get(profile)?.id;
      if (profileId) {
        await this.refreshCourse(courseId, profileId);
      }
    }
    return updated;
  }
  /**
   * Deletes a course (soft delete)
   * @param courseId Course ID
   * @returns The deleted course data or null on error
   */
  async delete(courseId) {
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].$delete({ param: { courseId } }),
      logContext: "deleting course",
      onSuccess: (response) => {
        coursesApi.removeCourseFromLists(courseId);
        if (response.data) {
          snackbar.success("Course deleted successfully");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("Failed to delete course");
        }
      }
    });
  }
  /**
   * Gets course progress for a profile
   * @param courseId Course ID
   * @param profileId Profile ID
   * @returns Course progress data or null on error
   */
  async getProgress(courseId, profileId) {
    return this.execute({
      requestFn: () => classroomio.course[":courseId"]["progress"].$get({ param: { courseId }, query: { profileId } }),
      logContext: "fetching course progress",
      onSuccess: (response) => {
        if (response.data) {
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("Failed to fetch course progress");
        }
      }
    });
  }
  async getCertificationEvaluation(courseId) {
    return this.execute({
      requestFn: () => classroomio.course[":courseId"]["certification-evaluation"].$get({ param: { courseId } }),
      logContext: "fetching certification evaluation",
      onSuccess: (response) => {
        if (response.data) {
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("Failed to load certification status");
        }
      }
    });
  }
  /**
   * Gets course analytics including student progress, completion rates, and grades
   * @param courseId Course ID
   * @returns Course analytics data or null on error
   */
  async getAnalytics(courseId) {
    await this.execute({
      requestFn: () => classroomio.course[":courseId"]["analytics"].$get({ param: { courseId } }),
      logContext: "fetching course analytics",
      onSuccess: (response) => {
        if (response.data) {
          this.courseAnalytics = response.data;
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("Failed to fetch course analytics");
        }
      }
    });
  }
  /**
   * Sets course data and processes related data (group data)
   * @param data Course data
   * @param profileId Profile ID
   */
  setCourse(data, profileId) {
    if (!data || !(Object.values(data) && Object.values(data).length)) return;
    if (data.group) {
      const copiedGroup = JSON.parse(JSON.stringify(data.group));
      const groupData = Object.assign(copiedGroup, {
        id: copiedGroup.id,
        tutors: [],
        students: [],
        people: [],
        memberId: data.group.members.find((member) => member.profileId === profileId)?.id || ""
      });
      if (Array.isArray(data.group.members)) {
        for (const member of data.group.members) {
          const roleId = Number(member.roleId || 0);
          if (roleId === ROLE.STUDENT) {
            groupData.students.push(member);
          } else if (member.profile) {
            groupData.tutors.push(member);
          }
          groupData.people.push(member);
        }
      }
      this.group = groupData;
    }
    if (data.metadata && !Object.values(data.metadata).some((v) => v !== void 0 && v !== null && v !== "")) {
      data.metadata = {
        requirements: "",
        description: "",
        goals: "",
        videoUrl: "",
        showDiscount: false,
        discount: 0,
        reward: { show: false, description: "" },
        instructor: {
          name: "",
          role: "",
          coursesNo: 0,
          description: "",
          imgUrl: ""
        },
        allowNewStudent: false,
        isContentGroupingEnabled: true
      };
    }
    const metadata = data.metadata ?? void 0;
    const lessonTabsOrder = metadata?.lessonTabsOrder;
    if (lessonTabsOrder) {
      const existingTabIds = lessonTabsOrder.map((tab) => tab.id);
      const allTabs = [
        {
          id: 1,
          name: "course.navItem.lessons.materials.tabs.note.title"
        },
        {
          id: 2,
          name: "course.navItem.lessons.materials.tabs.slide.title"
        },
        {
          id: 3,
          name: "course.navItem.lessons.materials.tabs.video.title"
        },
        {
          id: 4,
          name: "course.navItem.lessons.materials.tabs.document.title"
        }
      ];
      allTabs.forEach((tab) => {
        if (!existingTabIds.includes(tab.id)) {
          lessonTabsOrder.push(tab);
        }
      });
      const legacyDefaultLessonTabIds = [1, 2, 3, 4];
      const lessonMaterialsVideoFirstTabIds = [3, 1, 2, 4];
      const isLegacyDefaultLessonMaterialsOrder = lessonTabsOrder.length === legacyDefaultLessonTabIds.length && lessonTabsOrder.every((tab, index) => tab.id === legacyDefaultLessonTabIds[index]);
      if (isLegacyDefaultLessonMaterialsOrder) {
        const entriesById = new Map(lessonTabsOrder.map((tab) => [tab.id, tab]));
        lessonTabsOrder.length = 0;
        lessonMaterialsVideoFirstTabIds.forEach((id) => {
          const entry = entriesById.get(id);
          if (entry) lessonTabsOrder.push(entry);
        });
      }
    }
    if (data.metadata && data.metadata.isContentGroupingEnabled === void 0) {
      data.metadata.isContentGroupingEnabled = true;
    }
    if (!data.content) {
      data.content = { grouped: false, sections: [], items: [] };
    }
    if (!data.certificate) {
      data.certificate = { isDownloadable: false, theme: "professional" };
    }
    if (!data.certificate.theme) {
      data.certificate.theme = "professional";
    }
    this.course = data;
  }
  /**
   * Creates a payment request
   * @param courseId Course ID
   * @param studentEmail Student email address
   * @param studentFullname Student full name
   */
  async createPaymentRequest(courseId, studentEmail, studentFullname) {
    return this.execute({
      requestFn: () => classroomio.course[":courseId"]["payment-request"]["$post"]({ param: { courseId }, json: { studentEmail, studentFullname } }),
      logContext: "creating payment request",
      onSuccess: () => {
        this.success = true;
        this.errors = {};
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("Failed to send payment request");
        }
      }
    });
  }
}
const courseApi = new CourseApi();

export { courseApi as c };
//# sourceMappingURL=course.svelte-dh_CGwPg.js.map
