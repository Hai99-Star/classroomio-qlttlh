import { c as classroomio } from './index4-DxtvI9Cx.js';
import { Z as SvelteSet } from './create-id-D7gdjJzW.js';
import { B as BaseApiWithErrors } from './base.svelte-C2lk8LDX.js';

class CoursesApi extends BaseApiWithErrors {
  orgCourses = [];
  orgCoursesPagination = null;
  enrolledCourses = [];
  recommendedCourses = [];
  activeOrgCoursesRequestController = null;
  cancelOrgCoursesRequest() {
    this.activeOrgCoursesRequestController?.abort();
    this.activeOrgCoursesRequestController = null;
  }
  /** Keeps list UIs in sync after a course is deleted (server data is updated separately on navigation). */
  removeCourseFromLists(courseId) {
    this.orgCourses = this.orgCourses.filter((c) => c.id !== courseId);
    this.enrolledCourses = this.enrolledCourses.filter((c) => c.id !== courseId);
    this.recommendedCourses = this.recommendedCourses.filter((c) => c.id !== courseId);
  }
  /**
   * Fetches org courses for the current organization
   * Org ID is automatically added from currentOrg store
   */
  async getOrgCourses(tagSlugs = []) {
    const allCourses = [];
    let page = 1;
    let totalPages = 1;
    let lastResponse;
    while (page <= totalPages) {
      const response = await this.getOrgCoursesPage({ page, limit: 100 }, tagSlugs);
      if (!response) {
        return response;
      }
      allCourses.push(...response.data ?? []);
      totalPages = response.pagination?.totalPages ?? 1;
      lastResponse = response;
      page += 1;
    }
    this.orgCourses = allCourses;
    this.orgCoursesPagination = lastResponse?.pagination ?? null;
    return lastResponse;
  }
  async getOrgCoursesPage(query = {}, tagSlugs = [], options = {}) {
    const normalizedTagSlugs = Array.from(new SvelteSet(tagSlugs.map((tag) => tag.trim()).filter(Boolean)));
    const requestQuery = {
      page: String(query.page ?? 1),
      limit: String(query.limit ?? 20),
      search: query.search,
      tags: normalizedTagSlugs.length > 0 ? normalizedTagSlugs.join(",") : void 0
    };
    let requestSignal = options.signal;
    let requestController = null;
    if (options.abortPrevious) {
      this.cancelOrgCoursesRequest();
      requestController = new AbortController();
      this.activeOrgCoursesRequestController = requestController;
      requestSignal = requestController.signal;
    }
    const response = await this.execute({
      requestFn: () => classroomio.organization.courses.$get({ query: requestQuery }, { init: { signal: requestSignal } }),
      logContext: "fetching org courses",
      onSuccess: (response2) => {
        if (response2.data) {
          this.orgCourses = response2.data;
        }
        this.orgCoursesPagination = response2.pagination;
      }
    });
    if (requestController && this.activeOrgCoursesRequestController === requestController) {
      this.activeOrgCoursesRequestController = null;
    }
    return response;
  }
  /**
   * Fetches user enrolled courses for the current organization
   * Org ID is automatically added from currentOrg store
   */
  async getEnrolledCourses() {
    return this.execute({
      requestFn: () => classroomio.organization.courses.enrolled.$get({}),
      logContext: "fetching enrolled courses",
      onSuccess: (response) => {
        if (response.data) {
          this.enrolledCourses = response.data;
        }
      }
    });
  }
  /**
   * Fetches recommended courses (published courses user isn't enrolled in) for the current organization
   * Org ID is automatically added from currentOrg store
   */
  async getRecommendedCourses() {
    await this.execute({
      requestFn: () => classroomio.organization.courses.recommended.$get({}),
      logContext: "fetching recommended courses",
      onSuccess: (response) => {
        if (response.data) {
          this.recommendedCourses = response.data;
        }
        this.errors = {};
      },
      onError: (result) => {
        if (typeof result === "string") {
          console.error("Failed to fetch recommended courses:", result);
          return;
        }
        if ("error" in result) {
          console.error("Failed to fetch recommended courses:", result.error);
        }
      }
    });
  }
}
const coursesApi = new CoursesApi();

export { coursesApi as c };
//# sourceMappingURL=courses.svelte-y7SgDChY.js.map
