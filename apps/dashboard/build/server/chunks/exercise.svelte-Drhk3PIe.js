import { c as classroomio } from './index4-CY3O4yvX.js';
import { e as ZExerciseCreate, f as ZExerciseUpdate, g as ZExerciseSubmissionCreate, h as ZExerciseVideoRecordingUploadInit, i as ZExerciseVideoRecordingUploadComplete } from './submission-CIIjGYOS.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-Bh2VVy5Z.js';
import { s as snackbar } from './store-D_AYzDdq.js';

class ExerciseApi extends BaseApiWithErrors {
  exercise = null;
  /**
   * Gets an exercise by ID
   */
  async get(courseId, exerciseId) {
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].exercise[":exerciseId"].$get({ param: { courseId, exerciseId } }),
      logContext: "fetching exercise",
      onSuccess: (response) => {
        if (response.data) {
          this.exercise = response.data;
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("Failed to fetch exercise");
        }
      }
    });
  }
  /**
   * Creates a new exercise
   */
  async create(courseId, fields) {
    const result = ZExerciseCreate.safeParse({ ...fields, courseId });
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "exercise");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].exercise.$post({ param: { courseId }, json: result.data }),
      logContext: "creating exercise",
      onSuccess: (response) => {
        if (response.data) {
          this.exercise = response.data;
          snackbar.success("Exercise created successfully");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("Failed to create exercise");
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
   * Updates an exercise
   */
  async update(courseId, exerciseId, fields) {
    this.success = false;
    const result = ZExerciseUpdate.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "exercise");
      return;
    }
    this.errors = {};
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].exercise[":exerciseId"].$put({ param: { courseId, exerciseId }, json: result.data }),
      logContext: "updating exercise",
      onSuccess: (response) => {
        if (response.data) {
          this.exercise = response.data;
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result2) => {
        this.success = false;
        if (typeof result2 === "string") {
          snackbar.error("Failed to update exercise");
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
   * Deletes an exercise
   */
  async delete(courseId, exerciseId) {
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].exercise[":exerciseId"].$delete({ param: { courseId, exerciseId } }),
      logContext: "deleting exercise",
      onSuccess: (response) => {
        if (response.data) {
          snackbar.success("Exercise deleted successfully");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("Failed to delete exercise");
        }
      }
    });
  }
  /**
   * Submits an exercise
   */
  async submit(courseId, exerciseId, answers) {
    const result = ZExerciseSubmissionCreate.safeParse({ exerciseId, answers });
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "exercise");
      return;
    }
    return await this.execute({
      requestFn: () => classroomio.course[":courseId"].exercise[":exerciseId"].submission.$post({ param: { courseId, exerciseId }, json: result.data }),
      logContext: "submitting exercise",
      onSuccess: (response) => {
        if (response.data) {
          snackbar.success("Exercise submitted successfully");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("Failed to submit exercise");
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
  async initVideoRecordingUpload(courseId, exerciseId, questionId, fields) {
    const result = ZExerciseVideoRecordingUploadInit.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "exercise");
      return null;
    }
    return await this.execute({
      requestFn: () => classroomio.course[":courseId"].exercise[":exerciseId"].question[":questionId"]["video-recording"].upload.init.$post({
        param: { courseId, exerciseId, questionId: String(questionId) },
        json: result.data
      }),
      logContext: "initializing video recording upload"
    });
  }
  async completeVideoRecordingUpload(courseId, exerciseId, questionId, fields) {
    const result = ZExerciseVideoRecordingUploadComplete.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "exercise");
      return null;
    }
    return await this.execute({
      requestFn: () => classroomio.course[":courseId"].exercise[":exerciseId"].question[":questionId"]["video-recording"].upload.complete.$post({
        param: { courseId, exerciseId, questionId: String(questionId) },
        json: result.data
      }),
      logContext: "completing video recording upload"
    });
  }
  async getVideoRecordingPlaybackUrl(courseId, exerciseId, submissionId, questionId) {
    return await this.execute({
      requestFn: () => classroomio.course[":courseId"].exercise[":exerciseId"].submission[":submissionId"].question[":questionId"]["video-recording"].playback.$get({
        param: {
          courseId,
          exerciseId,
          submissionId,
          questionId: String(questionId)
        }
      }),
      logContext: "getting video recording playback URL"
    });
  }
  /**
   * Creates an exercise from a template
   * @param courseId Course ID
   * @param lessonId Lesson ID
   * @param templateId Template ID
   * @returns The created exercise data or null on error
   */
  async createFromTemplate(courseId, templateId, options = {}) {
    const templateIdValue = Number(templateId);
    await this.execute({
      requestFn: () => classroomio.course[":courseId"]["exercise"]["from-template"].$post({
        param: { courseId },
        json: {
          lessonId: options.lessonId,
          sectionId: options.sectionId,
          order: options.order,
          templateId: templateIdValue
        }
      }),
      logContext: "creating exercise from template",
      onSuccess: (response) => {
        if (response.data) {
          this.exercise = response.data;
          snackbar.success("Exercise created successfully");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("Failed to create exercise from template");
          return;
        }
        if ("error" in result && "field" in result && result.field) {
          this.errors[result.field] = result.error;
          snackbar.error(result.error);
        } else if ("error" in result) {
          this.errors.general = result.error;
          snackbar.error(result.error);
        }
      }
    });
  }
  /**
   * Checks if exercise is completed
   * NOTE: This route does not exist in the API. Use the submission list endpoint instead.
   */
}
const exerciseApi = new ExerciseApi();

export { exerciseApi as e };
//# sourceMappingURL=exercise.svelte-Drhk3PIe.js.map
