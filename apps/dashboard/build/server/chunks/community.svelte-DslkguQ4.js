import { g as get } from './index-AIbsv2Pd.js';
import { c as classroomio } from './index4-DxtvI9Cx.js';
import * as z from 'zod';
import { b as basePath, i as isStudentExperience } from './app-DrlCEKij.js';
import { c as coursesApi } from './courses.svelte-y7SgDChY.js';
import { c as currentCommunityQuestion } from './store3-D6L6kxSt.js';
import { c as currentOrg } from './org-BIDTy0Q0.js';
import './question-type-capabilities-B1VkdJbc.js';
import { g as generateSlug } from './slug-B50H-j5u.js';
import { g as goto } from './client2-CqohmrW2.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-C2lk8LDX.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { r as resolve } from './server3-VLoL706W.js';
import { s as snackbar } from './store-D_AYzDdq.js';

z.object({
  orgId: z.string().min(1, "orgId is required")
});
z.object({
  slug: z.string().min(1, "slug is required")
});
z.object({
  slug: z.string().min(1, "slug is required"),
  body: z.string().min(1, "body is required"),
  title: z.string().min(1, "title is required"),
  courseId: z.string().min(1, "courseId is required"),
  organizationId: z.string().min(1, "organizationId is required"),
  authorProfileId: z.string().min(1, "authorProfileId is required"),
  votes: z.number().optional()
});
const ZCreateCommunityQuestion = z.object({
  body: z.string().min(1),
  title: z.string().min(1),
  courseId: z.string().optional()
});
z.object({
  id: z.coerce.number()
});
const ZCommunityQuestionUpdate = z.object({
  title: z.string().min(1, "title is required"),
  body: z.string().min(1, "body is required"),
  courseId: z.string().min(1, "courseId is required")
});
z.object({
  id: z.string().min(1, "id is required")
});
z.object({
  questionId: z.coerce.number()
});
const ZCommunityComment = z.object({
  body: z.string().min(1, "body is required"),
  authorProfileId: z.string().min(1, "authorProfileId is required"),
  votes: z.number().optional()
});
z.object({
  isQuestion: z.boolean()
});
z.object({
  id: z.union([z.string().min(1, "id is required"), z.number().min(1, "id is required")])
});
class CommunityApi extends BaseApiWithErrors {
  questions = [];
  question = null;
  courses = [];
  isEditMode = false;
  isEditing = false;
  isCommenting = false;
  editContent = { title: "", body: "", courseId: "" };
  comment = "";
  deleteCommentState = { shouldDelete: false, commentId: "" };
  answer = {
    authorId: 0,
    body: "",
    courseId: "",
    courseTitle: "",
    createdAt: "",
    id: 0,
    slug: "",
    title: "",
    votes: 0
  };
  /**
   * Fetches community questions for an organization
   * Handles API call, success/error handling, and navigation
   * @param orgId Organization ID
   */
  async fetchCommunityQuestions({ orgId }) {
    await this.execute({
      requestFn: () => classroomio.community.$get({ query: { orgId } }),
      logContext: "fetching community questions",
      onSuccess: (response) => {
        this.questions = response.data;
      },
      onError: (result) => {
        console.error("Error loading community questions:", result);
        goto(resolve(get(basePath), {}));
      }
    });
  }
  /**
   * Fetches a single community question by slug
   * Handles API call, success/error handling, navigation, and store updates
   * @param slug Question slug
   */
  async fetchCommunityQuestion({ slug }) {
    await this.execute({
      requestFn: () => classroomio.community[":slug"].$get({ param: { slug } }),
      logContext: "fetching community question",
      onSuccess: (response) => {
        if (response.data) {
          this.question = response.data;
          currentCommunityQuestion.set({ title: response.data.title });
        }
      },
      onError: (result) => {
        const isStudent = get(isStudentExperience);
        console.error(`[${isStudent ? "LMS" : "ORG"}] Error loading community`, result);
        goto(resolve(get(basePath), {}));
      }
    });
  }
  /**
   * Creates a new community question
   * Handles validation, API call, success/error handling, and navigation
   * @param fields User-provided fields (title, body, courseId)
   */
  async createQuestion(fields) {
    const result = ZCreateCommunityQuestion.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "community");
      return;
    }
    const slug = generateSlug(fields.title, { appendTimestamp: true });
    const currentOrg$1 = get(currentOrg);
    const profile$1 = get(profile);
    if (!currentOrg$1?.id || !profile$1?.id) {
      snackbar.error("snackbar.community.error.missing_context");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.community.$post({
        json: {
          title: result.data.title,
          body: result.data.body,
          courseId: result.data.courseId || "",
          organizationId: currentOrg$1.id,
          authorProfileId: profile$1.id,
          votes: 0,
          slug
        }
      }),
      logContext: "creating community question",
      onSuccess: (response) => {
        const questionData = Array.isArray(response.data) ? response.data[0] : response.data;
        const questionSlug = questionData?.slug || slug;
        snackbar.success("snackbar.community.success.question_submitted");
        const path = get(basePath);
        goto(resolve(`${path}/community/${questionSlug}`, {}));
        this.success = true;
        this.errors = {};
      },
      onError: (result2) => {
        console.error("Error creating question:", result2);
        snackbar.error("snackbar.community.error.try_again");
        if (typeof result2 !== "string" && "error" in result2) {
          this.handleValidationError(result2);
        }
      }
    });
  }
  /**
   * Creates a comment for a community question
   * Handles validation, API call, and success/error handling
   * Uses this.comment state for the comment body
   * @param questionId Question ID
   * @param onSuccess Optional callback to execute on successful comment creation
   */
  async createComment(questionId, onSuccess) {
    const profile$1 = get(profile);
    if (!profile$1?.id) {
      snackbar.error("snackbar.community.error.missing_context");
      return;
    }
    const result = ZCommunityComment.safeParse({ body: this.comment, authorProfileId: profile$1.id, votes: 0 });
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "community");
      return;
    }
    this.isCommenting = true;
    await this.execute({
      requestFn: () => classroomio.community[":id"].comment.$post({
        param: { id: String(questionId) },
        json: {
          body: result.data.body,
          authorProfileId: result.data.authorProfileId,
          votes: result.data.votes
        }
      }),
      logContext: "submitting comment",
      onSuccess: (response) => {
        if (response.data) {
          this.answer = response.data;
          snackbar.success("snackbar.community.success.comment_submitted");
          if (this.question && this.question.slug) {
            this.fetchCommunityQuestion({ slug: this.question.slug });
          }
          onSuccess?.();
        }
        this.success = true;
        this.errors = {};
        this.isCommenting = false;
      },
      onError: (result2) => {
        console.error("Error creating comment:", result2);
        snackbar.error("snackbar.community.error.comment_failed");
        if (typeof result2 !== "string" && "error" in result2) {
          this.handleValidationError(result2);
        }
        this.isCommenting = false;
      }
    });
  }
  /**
   * Upvotes a post (question or comment)
   * Handles API call and updates local state with returned vote count
   * @param id Post ID
   * @param isQuestion Boolean indicating if it's a question
   */
  async upvotePost({ id, isQuestion }) {
    await this.execute({
      requestFn: () => classroomio.community[":id"].upvote.$post({ param: { id: id.toString() }, json: { isQuestion } }),
      logContext: "upvoting post",
      onSuccess: (response) => {
        if (this.question && response.data) {
          const newVoteCount = response.data.votes;
          if (isQuestion && String(this.question.id) === String(id)) {
            this.question.votes = newVoteCount;
          } else if (!isQuestion) {
            this.question.comments = this.question.comments.map((comment) => {
              if (String(comment.id) === String(id)) {
                return { ...comment, votes: newVoteCount };
              }
              return comment;
            });
          }
        }
      },
      onError: (result) => {
        console.error("Error upvoting post:", result);
        snackbar.error("snackbar.community.error.try_again");
      }
    });
  }
  /**
   * Updates a community question
   * Handles validation, API call, and success/error handling
   * @param questionId Question ID
   * @param fields User-provided fields (title, body, courseId)
   */
  async updateQuestion(questionId, fields) {
    const result = ZCommunityQuestionUpdate.safeParse({
      title: fields.title,
      body: fields.body,
      courseId: fields.courseId || ""
    });
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "community");
      return;
    }
    this.isEditing = true;
    await this.execute({
      requestFn: () => classroomio.community[":id"].$put({
        param: { id: String(questionId) },
        json: {
          title: result.data.title,
          body: result.data.body,
          courseId: result.data.courseId
        }
      }),
      logContext: "updating community question",
      onSuccess: () => {
        if (this.question) {
          this.question = { ...this.question, ...result.data };
        }
        console.log("this.question", this.question);
        snackbar.success("snackbar.community.success.question_updated");
        this.exitEditMode();
        this.success = true;
        this.errors = {};
        this.isEditing = false;
      },
      onError: (result2) => {
        console.error("Error updating question:", result2);
        snackbar.error("snackbar.community.error.update_failed");
        if (typeof result2 !== "string" && "error" in result2) {
          this.handleValidationError(result2);
        }
        this.isEditing = false;
      }
    });
  }
  /**
   * Enters edit mode and initializes edit content with question data
   * @param question Question data to populate edit form
   */
  enterEditMode(question) {
    this.isEditMode = true;
    this.editContent = {
      title: question.title || "",
      body: question.body || "",
      courseId: question.courseId || ""
    };
  }
  /**
   * Exits edit mode and resets edit content
   */
  exitEditMode() {
    this.isEditMode = false;
    this.editContent = { title: "", body: "", courseId: "" };
  }
  /**
   * Deletes a question by its ID (including all comments)
   * Handles API call, success/error handling, and navigation
   * @param questionId Question ID
   */
  async deleteQuestion(questionId) {
    await this.execute({
      requestFn: () => classroomio.community[":id"].$delete({ param: { id: questionId } }),
      logContext: "deleting community question",
      onSuccess: () => {
        snackbar.success("snackbar.community.success.success_delete");
        const path = get(basePath);
        goto(resolve(`${path}/community`, {}));
        this.success = true;
      },
      onError: (result) => {
        console.error("Error deleting question:", result);
        snackbar.error("snackbar.community.error.delete_failed");
      }
    });
  }
  /**
   * Deletes a comment by its ID
   * Handles API call and success/error handling
   * Resets deleteComment state on success
   * @param commentId Comment ID
   */
  async deleteComment(commentId) {
    await this.execute({
      requestFn: () => classroomio.community[":id"].comment.$delete({ param: { id: commentId } }),
      logContext: "deleting community comment",
      onSuccess: () => {
        if (this.question) {
          this.question.comments = this.question.comments.filter((comment) => String(comment.id) !== commentId);
        }
        this.deleteCommentState.shouldDelete = false;
        this.deleteCommentState.commentId = "";
        snackbar.success("snackbar.community.success.success_delete");
        this.success = true;
      },
      onError: (result) => {
        console.error("Error deleting comment:", result);
        snackbar.error("snackbar.community.error.delete_failed");
      }
    });
  }
  /**
   * Fetches courses for the organization
   * Checks store first, then fetches if needed
   * @param userId User ID
   * @param orgId Organization ID
   */
  async fetchCoursesForOrg(userId, orgId) {
    if (this.courses.length || !userId || !orgId) return;
    const isStudent = get(isStudentExperience);
    if (isStudent) {
      const response = await coursesApi.getEnrolledCourses();
      if (response?.success && response?.data) {
        this.courses = response.data.map((course) => ({ id: course.id, title: course.title }));
      }
    } else {
      const response = await coursesApi.getOrgCourses();
      if (response?.success && response?.data) {
        this.courses = response.data.map((course) => ({ id: course.id, title: course.title }));
      }
    }
  }
}
const communityApi = new CommunityApi();

export { communityApi as c };
//# sourceMappingURL=community.svelte-DslkguQ4.js.map
