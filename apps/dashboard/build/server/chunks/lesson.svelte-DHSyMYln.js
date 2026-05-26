import { g as get } from './index-AIbsv2Pd.js';
import { c as classroomio } from './index4-DxtvI9Cx.js';
import { j as ZLessonCreate, k as ZLessonUpdate, l as ZCourseSectionCreate, m as ZCourseSectionPromoteUngrouped, n as ZCourseSectionUpdate, o as ZCourseSectionReorder, p as ZLessonReorder, q as ZLessonCommentCreate, r as ZLessonCommentUpdate } from './submission-CIIjGYOS.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-C2lk8LDX.js';
import { m as mediaApi } from './media-manager.svelte-livPOGqH.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { s as snackbar } from './store-D_AYzDdq.js';

class LessonApi extends BaseApiWithErrors {
  lesson = null;
  sections = [];
  commentsByLessonId = {};
  currentLocale = "en";
  isSaving = false;
  isDirty = false;
  isCommenting = false;
  isUpdatingComment = false;
  translations = {};
  note = "";
  /**
   * Gets a lesson by ID
   */
  async get(courseId, lessonId) {
    return this.execute({
      requestFn: () => classroomio.course[":courseId"].lesson[":lessonId"].$get({ param: { courseId, lessonId } }),
      logContext: "fetching lesson",
      onSuccess: (response) => {
        if (response.data) {
          this.lesson = response.data;
          if (this.lesson.lessonLanguages) {
            this.setTranslations();
          }
        }
      }
    });
  }
  /**
   * Creates a new lesson
   */
  async create(courseId, fields) {
    const result = ZLessonCreate.safeParse({ ...fields, courseId });
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "lesson");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].lesson.$post({ param: { courseId }, json: result.data }),
      logContext: "creating lesson",
      onSuccess: (response) => {
        if (response.data) {
          const createdLesson = response.data;
          this.lesson = {
            ...createdLesson,
            lessonLanguages: createdLesson.lessonLanguages ?? []
          };
          snackbar.success("snackbar.lessons.lesson_created");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.lessons.lesson_create_failed");
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
   * Updates a lesson
   */
  async update(courseId, lessonId, fields) {
    const result = ZLessonUpdate.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "lesson");
      return false;
    }
    this.isSaving = true;
    const response = await this.execute({
      requestFn: () => classroomio.course[":courseId"].lesson[":lessonId"].$put({ param: { courseId, lessonId }, json: result.data }),
      logContext: "updating lesson",
      onSuccess: () => {
        this.errors = {};
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.lessons.lesson_update_failed");
          return;
        }
        if ("error" in result2 && "field" in result2 && result2.field) {
          this.errors[result2.field] = result2.error;
          snackbar.error(result2.error);
        } else {
          snackbar.error("snackbar.lessons.lesson_update_failed");
        }
      }
    });
    this.isSaving = false;
    return Boolean(response);
  }
  /**
   * Deletes a lesson
   */
  async delete(courseId, lessonId) {
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].lesson[":lessonId"].$delete({ param: { courseId, lessonId } }),
      logContext: "deleting lesson",
      onSuccess: (response) => {
        if (response.data) {
          snackbar.success("snackbar.lessons.lesson_deleted");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("snackbar.lessons.lesson_delete_failed");
        }
      }
    });
  }
  // Course Section methods
  /**
   * Creates a course section
   */
  async createSection(courseId, fields) {
    const result = ZCourseSectionCreate.safeParse({ ...fields, courseId });
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "lesson");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].section.$post({ param: { courseId }, json: result.data }),
      logContext: "creating course section",
      onSuccess: (response) => {
        if (response.data) {
          snackbar.success("snackbar.lessons.section_created");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.lessons.section_create_failed");
          return;
        }
        if ("error" in result2 && "field" in result2 && result2.field) {
          this.errors[result2.field] = result2.error;
          snackbar.error(result2.error);
        }
      }
    });
  }
  /**
   * Creates a real section from synthetic ungrouped content and moves all ungrouped items.
   */
  async promoteUngroupedSection(courseId, fields) {
    const result = ZCourseSectionPromoteUngrouped.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "lesson");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].section["promote-ungrouped"].$post({ param: { courseId }, json: result.data }),
      logContext: "promoting ungrouped section",
      onSuccess: () => {
        snackbar.success("snackbar.lessons.section_updated");
        this.success = true;
        this.errors = {};
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.lessons.section_update_failed");
          return;
        }
        if ("error" in result2 && "field" in result2 && result2.field) {
          this.errors[result2.field] = result2.error;
          snackbar.error(result2.error);
          return;
        }
        if ("error" in result2) {
          this.errors.general = result2.error;
          snackbar.error(result2.error);
        }
      }
    });
  }
  /**
   * Updates a course section
   */
  async updateSection(courseId, sectionId, fields) {
    const result = ZCourseSectionUpdate.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "lesson");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].section[":sectionId"].$put({ param: { courseId, sectionId }, json: result.data }),
      logContext: "updating course section",
      onSuccess: (response) => {
        if (response.data) {
          snackbar.success("snackbar.lessons.section_updated");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.lessons.section_update_failed");
        }
      }
    });
  }
  /**
   * Deletes a course section
   */
  async deleteSection(courseId, sectionId) {
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].section[":sectionId"].$delete({ param: { courseId, sectionId } }),
      logContext: "deleting course section"
    });
  }
  /**
   * Reorders course sections
   */
  async reorderSections(courseId, sections) {
    const result = ZCourseSectionReorder.safeParse({ sections });
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "lesson");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].section.reorder.$post({ param: { courseId }, json: result.data }),
      logContext: "reordering course sections",
      onSuccess: (response) => {
        if (response.data) {
          snackbar.success("snackbar.lessons.sections_reordered");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.lessons.sections_reorder_failed");
        }
      }
    });
  }
  /**
   * Reorders lessons
   */
  async reorderLessons(courseId, lessons) {
    const result = ZLessonReorder.safeParse({ lessons });
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "lesson");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].lesson.reorder.$post({ param: { courseId }, json: result.data }),
      logContext: "reordering lessons",
      onSuccess: (response) => {
        if (response.data) {
          snackbar.success("snackbar.lessons.lessons_reordered");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error("snackbar.lessons.lessons_reorder_failed");
        }
      }
    });
  }
  // Lesson Comment methods
  /**
   * Initializes comments state for a lesson
   */
  initComments(lessonId, totalCount) {
    if (!this.commentsByLessonId[lessonId]) {
      this.commentsByLessonId[lessonId] = {
        items: [],
        totalCount,
        hasMore: totalCount > 0,
        isLoading: false,
        cursor: null
      };
    }
  }
  /**
   * Gets comments for a lesson
   */
  async getComments(courseId, lessonId, limit = 10) {
    if (!this.commentsByLessonId[lessonId]) {
      this.initComments(lessonId, 0);
    }
    this.commentsByLessonId[lessonId].isLoading = true;
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].lesson[":lessonId"].comment.$get({
        param: { courseId, lessonId },
        query: { limit: String(limit) }
      }),
      logContext: "fetching lesson comments",
      onSuccess: (response) => {
        if (response.data) {
          this.commentsByLessonId[lessonId] = {
            items: response.data.items,
            totalCount: response.data.totalCount,
            hasMore: response.data.hasMore,
            isLoading: false,
            cursor: response.data.nextCursor
          };
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        this.commentsByLessonId[lessonId].isLoading = false;
        if (typeof result === "string") {
          snackbar.error("snackbar.lessons.comment_fetch_failed");
        }
      }
    });
  }
  /**
   * Load more comments (uses cursor)
   */
  async loadMoreComments(courseId, lessonId, limit = 10) {
    const commentState = this.commentsByLessonId[lessonId];
    if (!commentState || !commentState.hasMore || commentState.isLoading || !commentState.cursor) {
      return;
    }
    commentState.isLoading = true;
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].lesson[":lessonId"].comment.$get({
        param: { courseId, lessonId },
        query: { cursor: commentState.cursor, limit: String(limit) }
      }),
      logContext: "loading more lesson comments",
      onSuccess: (response) => {
        if (response.data) {
          this.commentsByLessonId[lessonId] = {
            items: [...commentState.items, ...response.data.items],
            totalCount: response.data.totalCount,
            hasMore: response.data.hasMore,
            isLoading: false,
            cursor: response.data.nextCursor
          };
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        commentState.isLoading = false;
        if (typeof result === "string") {
          snackbar.error("snackbar.lessons.load_more_comments_failed");
        }
      }
    });
  }
  /**
   * Creates a lesson comment
   */
  async createComment(courseId, lessonId, comment) {
    if (!courseId || !lessonId) {
      snackbar.error("snackbar.lessons.comment_add_failed");
      return;
    }
    const result = ZLessonCommentCreate.safeParse({ lessonId, comment });
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "lesson");
      return;
    }
    this.isCommenting = true;
    try {
      await this.execute({
        requestFn: () => classroomio.course[":courseId"].lesson[":lessonId"].comment.$post({ param: { courseId, lessonId }, json: result.data }),
        logContext: "creating lesson comment",
        onSuccess: (response) => {
          if (response.data && this.commentsByLessonId[lessonId]) {
            this.commentsByLessonId[lessonId].items = [
              this.getCommentFromResponse(response.data),
              ...this.commentsByLessonId[lessonId].items
            ];
            this.commentsByLessonId[lessonId].totalCount++;
          }
        },
        onError: (result2) => {
          if (typeof result2 === "string") {
            snackbar.error("snackbar.lessons.comment_add_failed");
          }
        }
      });
    } finally {
      this.isCommenting = false;
    }
  }
  /**
   * Updates a lesson comment
   */
  async updateComment(courseId, lessonId, commentId, comment) {
    const result = ZLessonCommentUpdate.safeParse({ comment });
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "lesson");
      return;
    }
    this.success = false;
    this.isUpdatingComment = true;
    try {
      await this.execute({
        requestFn: () => classroomio.course[":courseId"].lesson.comment[":commentId"].$put({ param: { courseId, commentId }, json: result.data }),
        logContext: "updating lesson comment",
        onSuccess: (response) => {
          if (response.data) {
            if (this.commentsByLessonId[lessonId]) {
              this.commentsByLessonId[lessonId].items = this.commentsByLessonId[lessonId].items.map((c) => c.id === Number(commentId) ? this.getCommentFromResponse(response.data) : c);
            }
            snackbar.success("snackbar.lessons.comment_updated");
            this.success = true;
            this.errors = {};
          }
        },
        onError: (result2) => {
          if (typeof result2 === "string") {
            snackbar.error("snackbar.lessons.comment_update_failed");
          }
        }
      });
    } finally {
      this.isUpdatingComment = false;
    }
  }
  /**
   * Deletes a lesson comment
   */
  async deleteComment(courseId, lessonId, commentId) {
    await this.execute({
      requestFn: () => classroomio.course[":courseId"].lesson.comment[":commentId"].$delete({ param: { courseId, commentId } }),
      logContext: "deleting lesson comment",
      onSuccess: (response) => {
        if (response.data) {
          if (this.commentsByLessonId[lessonId]) {
            this.commentsByLessonId[lessonId].items = this.commentsByLessonId[lessonId].items.filter((c) => c.id !== Number(commentId));
            this.commentsByLessonId[lessonId].totalCount--;
          }
          snackbar.success("snackbar.lessons.comment_deleted");
          this.success = true;
          this.errors = {};
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("snackbar.lessons.comment_delete_failed");
        }
      }
    });
  }
  /**
   * Updates lesson completion
   */
  async updateCompletion(courseId, lessonId, isComplete) {
    return this.execute({
      requestFn: () => classroomio.course[":courseId"].lesson[":lessonId"].completion.$put({ param: { courseId, lessonId }, json: { isComplete } }),
      logContext: "updating lesson completion",
      onSuccess: (response) => {
        if (response.data) {
          if (this.lesson?.id === lessonId) {
            this.lesson = { ...this.lesson, isComplete };
          }
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error("snackbar.lessons.completion_update_failed");
        }
      }
    });
  }
  /**
   * Sets translations for a lesson
   * Translations are stored separately from the lesson data
   */
  setTranslations() {
    if (!this.lesson) return;
    const translations = this.lesson?.lessonLanguages?.reduce(
      (acc, cur) => {
        if (cur.locale) {
          acc[cur.locale] = cur.content || "";
        }
        return acc;
      },
      {}
    );
    this.translations = { ...this.translations, [this.lesson.id]: translations };
  }
  updateTranslation(lessonId, locale, content) {
    this.translations = {
      ...this.translations,
      [lessonId]: { ...this.translations[lessonId], [locale]: content }
    };
  }
  getCommentFromResponse(response) {
    const userProfile = get(profile);
    return {
      id: response.id,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
      lessonId: response.lessonId,
      groupmemberId: response.groupmemberId,
      comment: response.comment,
      groupmember: { id: response.groupmemberId },
      profile: {
        fullname: userProfile.fullname,
        avatarUrl: userProfile.avatarUrl
      }
    };
  }
  /**
   * Deletes a video from lesson materials
   */
  async deleteLessonVideo(videoIndex) {
    if (!this.lesson) return;
    const videos = Array.isArray(this.lesson.videos) ? [...this.lesson.videos] : [];
    const removedVideo = videos[videoIndex];
    if (removedVideo?.assetId && this.lesson.id) {
      await mediaApi.detachAsset(removedVideo.assetId, {
        targetType: "lesson",
        targetId: this.lesson.id,
        slotType: "lesson_video",
        position: videoIndex
      });
    }
    this.lesson = {
      ...this.lesson,
      videos: videos.filter((_v, i) => i !== videoIndex)
    };
    this.isDirty = true;
  }
  /**
   * Deletes a document from lesson materials
   */
  async deleteLessonDocument(documentIndex) {
    if (!this.lesson) return;
    const documents = Array.isArray(this.lesson.documents) ? [...this.lesson.documents] : [];
    const removedDocument = documents[documentIndex];
    if (removedDocument?.assetId && this.lesson.id) {
      await mediaApi.detachAsset(removedDocument.assetId, {
        targetType: "lesson",
        targetId: this.lesson.id,
        slotType: "lesson_document",
        position: documentIndex
      });
    }
    this.lesson = {
      ...this.lesson,
      documents: documents.filter((_d, i) => i !== documentIndex)
    };
    this.isDirty = true;
  }
  /**
   * Generic method to update lesson state
   * @param field - The field name to update (type-safe)
   * @param value - The new value for the field (or array of items to append)
   * @param options - Optional configuration for array operations
   */
  updateLessonState(field, value, options) {
    if (!this.lesson) return;
    if (options?.append && Array.isArray(this.lesson[field])) {
      const existingArray = this.lesson[field];
      const newItems = Array.isArray(value) ? value : [value];
      this.lesson = { ...this.lesson, [field]: [...existingArray, ...newItems] };
    } else {
      this.lesson = { ...this.lesson, [field]: value };
    }
    this.isDirty = true;
  }
  /**
   * Gets lesson version history for a lesson and locale
   * @param courseId Course ID
   * @param lessonId Lesson ID
   * @param locale Locale
   * @param endRange End range for pagination (0-indexed, inclusive)
   * @returns Lesson history data or null on error
   */
  async getHistory(courseId, lessonId, locale, endRange) {
    return this.execute({
      requestFn: () => classroomio.course[":courseId"]["lesson"][":lessonId"]["history"].$get({
        param: { courseId, lessonId },
        query: { locale, endRange: endRange.toString() }
      }),
      logContext: "fetching lesson history"
    });
  }
  /**
   * Creates or updates a lesson language translation (upsert)
   * @param courseId Course ID
   * @param lessonId Lesson ID
   * @param locale Locale
   * @param content Translation content
   */
  async upsertLanguage(courseId, lessonId, locale, content) {
    return this.execute({
      requestFn: () => classroomio.course[":courseId"].lesson[":lessonId"].language.$post({ param: { courseId, lessonId }, json: { locale, content } }),
      logContext: "upserting lesson language",
      onSuccess: () => {
        this.success = true;
        this.errors = {};
      },
      onError: () => {
        snackbar.error("snackbar.materials.update_translations");
      }
    });
  }
  /**
   * Saves the current lesson state (materials and translations)
   * @param courseId Course ID
   * @param lessonId Lesson ID
   */
  async save(courseId, lessonId) {
    if (!this.lesson) return false;
    this.isDirty = false;
    await Promise.all([
      this.update(courseId, lessonId, {
        slideUrl: this.lesson.slideUrl || void 0,
        videos: this.lesson.videos || [],
        documents: this.lesson.documents || []
      }),
      this.upsertLanguage(courseId, lessonId, this.currentLocale, this.translations[lessonId]?.[this.currentLocale] || "")
    ]);
  }
}
const lessonApi = new LessonApi();

export { lessonApi as l };
//# sourceMappingURL=lesson.svelte-DHSyMYln.js.map
