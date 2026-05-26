import { c as classroomio } from './index4-DxtvI9Cx.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { b as ZCourseComplianceReset, c as ZCourseComplianceExtend, d as ZCourseComplianceWaive } from './submission-CIIjGYOS.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-C2lk8LDX.js';

class ComplianceApi extends BaseApiWithErrors {
  overview = null;
  learnerHistory = null;
  overviewKey = null;
  learnerHistoryKey = null;
  async getOverview(courseId) {
    const result = await this.execute({
      requestFn: () => classroomio.course[":courseId"].compliance.$get({ param: { courseId } }),
      logContext: "fetching course compliance overview",
      onSuccess: (response) => {
        this.overview = response.data;
        this.overviewKey = courseId;
        this.success = true;
        this.errors = {};
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.course.compliance.overview_failed");
        }
      }
    });
    return result?.data;
  }
  async ensureOverview(courseId) {
    if (this.overviewKey === courseId && this.overview) {
      return this.overview;
    }
    return this.getOverview(courseId);
  }
  async getLearnerHistory(courseId, profileId) {
    const result = await this.execute({
      requestFn: () => classroomio.course[":courseId"].compliance.learners[":profileId"].$get({ param: { courseId, profileId } }),
      logContext: "fetching learner compliance history",
      onSuccess: (response) => {
        this.learnerHistory = response.data;
        this.learnerHistoryKey = `${courseId}:${profileId}`;
        this.success = true;
        this.errors = {};
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.course.compliance.history_failed");
        }
      }
    });
    return result?.data;
  }
  async ensureLearnerHistory(courseId, profileId) {
    const requestKey = `${courseId}:${profileId}`;
    if (this.learnerHistoryKey === requestKey && this.learnerHistory) {
      return this.learnerHistory;
    }
    return this.getLearnerHistory(courseId, profileId);
  }
  async resetCourseCompliance(courseId, fields) {
    const result = ZCourseComplianceReset.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "course");
      return;
    }
    const response = await this.execute({
      requestFn: () => classroomio.course[":courseId"].compliance.reset.$post({ param: { courseId }, json: result.data }),
      logContext: "resetting course compliance",
      onSuccess: () => {
        snackbar.success("snackbar.course.compliance.reset_success");
        this.success = true;
        this.errors = {};
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.course.compliance.reset_failed");
          return;
        }
        if ("error" in result2 && "field" in result2 && result2.field) {
          this.errors[result2.field] = result2.error;
        }
      }
    });
    if (response?.data) {
      this.overviewKey = null;
      await this.getOverview(courseId);
    }
    return response?.data;
  }
  async extendCourseCompliance(courseId, fields) {
    const result = ZCourseComplianceExtend.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "course");
      return;
    }
    const response = await this.execute({
      requestFn: () => classroomio.course[":courseId"].compliance.extend.$post({ param: { courseId }, json: result.data }),
      logContext: "extending course compliance",
      onSuccess: () => {
        snackbar.success("snackbar.course.compliance.extend_success");
        this.success = true;
        this.errors = {};
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.course.compliance.extend_failed");
          return;
        }
        if ("error" in result2 && "field" in result2 && result2.field) {
          this.errors[result2.field] = result2.error;
        }
      }
    });
    if (response?.data) {
      this.overviewKey = null;
      await this.getOverview(courseId);
    }
    return response?.data;
  }
  async waiveCourseCompliance(courseId, fields) {
    const result = ZCourseComplianceWaive.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "course");
      return;
    }
    const response = await this.execute({
      requestFn: () => classroomio.course[":courseId"].compliance.waive.$post({ param: { courseId }, json: result.data }),
      logContext: "waiving course compliance",
      onSuccess: () => {
        snackbar.success("snackbar.course.compliance.waive_success");
        this.success = true;
        this.errors = {};
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.course.compliance.waive_failed");
          return;
        }
        if ("error" in result2 && "field" in result2 && result2.field) {
          this.errors[result2.field] = result2.error;
        }
      }
    });
    if (response?.data) {
      this.overviewKey = null;
      await this.getOverview(courseId);
    }
    return response?.data;
  }
  reset() {
    super.reset();
    this.overview = null;
    this.learnerHistory = null;
    this.overviewKey = null;
    this.learnerHistoryKey = null;
  }
}
const complianceApi = new ComplianceApi();

export { complianceApi as c };
//# sourceMappingURL=compliance.svelte-De60QPDd.js.map
