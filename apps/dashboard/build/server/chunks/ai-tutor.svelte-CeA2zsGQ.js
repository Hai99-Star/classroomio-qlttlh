import { c as classroomio } from './index4-3F2xRc80.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-Bx8dlk4A.js';
import { Z as ZAiTutorSettingsUpdate, a as ZCourseAiTutorOverride } from './tutor-config-BGC0RHK-.js';
import { s as snackbar } from './store-D_AYzDdq.js';

class AiTutorApi extends BaseApiWithErrors {
  orgSettings = null;
  courseSettings = null;
  loading = false;
  saving = false;
  async fetchOrgSettings() {
    this.loading = true;
    try {
      await this.execute({
        requestFn: () => classroomio.organization["ai-tutor"].$get(),
        logContext: "fetching org AI tutor settings",
        onSuccess: (response) => {
          this.orgSettings = response.data;
        }
      });
    } finally {
      this.loading = false;
    }
  }
  async updateOrgSettings(patch) {
    const result = ZAiTutorSettingsUpdate.safeParse(patch);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return;
    }
    this.saving = true;
    try {
      await this.execute({
        requestFn: () => classroomio.organization["ai-tutor"].$put({ json: result.data }),
        logContext: "updating org AI tutor settings",
        onSuccess: (response) => {
          this.orgSettings = response.data;
          this.errors = {};
          snackbar.success("aiTutor.snackbar.saved");
        },
        onError: (result2) => {
          if (typeof result2 !== "string" && "field" in result2 && result2.field) {
            this.errors[result2.field] = result2.error;
          }
        }
      });
    } finally {
      this.saving = false;
    }
  }
  async fetchCourseSettings(courseId) {
    this.loading = true;
    try {
      await this.execute({
        requestFn: () => classroomio.course[":courseId"]["ai-tutor"].$get({ param: { courseId } }),
        logContext: "fetching course AI tutor settings",
        onSuccess: (response) => {
          this.courseSettings = response.data;
        }
      });
    } finally {
      this.loading = false;
    }
  }
  async updateCourseSettings(courseId, patch) {
    const result = ZCourseAiTutorOverride.safeParse(patch ?? {});
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return;
    }
    this.saving = true;
    try {
      await this.execute({
        requestFn: () => classroomio.course[":courseId"]["ai-tutor"].$put({ param: { courseId }, json: result.data }),
        logContext: "updating course AI tutor settings",
        onSuccess: (response) => {
          if (this.courseSettings) {
            this.courseSettings = { ...this.courseSettings, override: response.data };
          }
          this.errors = {};
          snackbar.success("aiTutor.snackbar.saved");
        }
      });
    } finally {
      this.saving = false;
    }
  }
}
const aiTutorApi = new AiTutorApi();

export { aiTutorApi as a };
//# sourceMappingURL=ai-tutor.svelte-CeA2zsGQ.js.map
