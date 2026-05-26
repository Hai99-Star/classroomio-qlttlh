import * as z from 'zod';
import { z as z$1 } from 'zod';
import { w as writable } from './index-AIbsv2Pd.js';
import { b as QUESTION_TYPE_IDS } from './question-type-capabilities-B1VkdJbc.js';
import { V as VIDEO_RECORDING_PLATFORM_MAX_DURATION_SECONDS, g as getStarRatingMaxFromSettings, i as isValidStarRatingValue } from './video-recording-settings-DX6acopI.js';

const ALLOWED_CONTENT_TYPES = ["video/mp4", "video/quicktime", "video/x-msvideo", "video/x-matroska"];
const ALLOWED_DOCUMENT_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // .docx
  "application/msword"
  // .doc
];
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
const QUESTION_TYPE = QUESTION_TYPE_IDS;
const ZAttendanceUpsert = z.object({
  courseId: z.string().min(1),
  lessonId: z.string().min(1),
  studentId: z.string().min(1),
  isPresent: z.boolean()
});
z.object({
  courseId: z.string().min(1),
  lessonId: z.string().optional()
});
const ZCourseCalloutAnimation = z.enum(["waves", "dotted", "none"]);
const ZCourseCallout = z.object({
  title: z.string().min(1).max(120),
  description: z.string().min(1).max(500),
  buttonLabel: z.string().min(1).max(40),
  buttonUrl: z.string().url(),
  animation: ZCourseCalloutAnimation.default("waves")
});
const ZCourseCalloutInput = ZCourseCallout.nullable();
const ZCourseClone = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  slug: z.string().min(1),
  organizationId: z.string().min(1)
});
z.object({
  courseId: z.string().min(1)
});
z.object({
  courseId: z.string().min(1)
});
z.object({
  slug: z.string().optional()
});
z.object({
  slug: z.string().min(1)
});
z.object({
  courseId: z.string().min(1)
});
z.object({
  inviteToken: z.string().min(1).optional()
});
z.object({
  courseId: z.string().min(1)
});
const ZCertificateSignatory = z.object({
  name: z.string().max(80).default(""),
  role: z.string().max(80).default("")
});
const ZCertificateTemplateId = z.enum(["classique", "brutalist", "noir", "poster", "minimal"]);
const ZCertificateDesign = z.object({
  templateId: ZCertificateTemplateId,
  accentColor: z.string().regex(/^#[0-9a-fA-F]{6}$/, { message: "Accent must be a 6-digit hex color" }),
  subtitle: z.string().max(120).optional(),
  descriptionOverride: z.string().max(500).optional(),
  signatories: z.tuple([ZCertificateSignatory, ZCertificateSignatory]),
  idFormat: z.string().max(40).optional()
});
z.object({
  studentName: z.string().min(1).max(120),
  studentId: z.string().min(1).max(64).optional(),
  issuedAt: z.string().datetime().optional(),
  /** When true, skips the eligibility check (course owner previewing their own design). */
  previewMode: z.boolean().optional()
});
z.object({
  courseTitle: z.string().min(1),
  orgName: z.string().min(1),
  orgTheme: z.string().min(1),
  lessons: z.array(z.object({
    lessonTitle: z.string().min(1),
    lessonNumber: z.string().min(1),
    lessonNote: z.string(),
    slideUrl: z.string().url().optional(),
    video: z.array(z.string().url()).optional()
  }))
});
z.object({
  title: z.string().min(1),
  number: z.string().min(1),
  orgName: z.string().min(1),
  note: z.string(),
  slideUrl: z.string().url().optional(),
  video: z.array(z.string().url()).optional(),
  courseTitle: z.string().min(1)
});
z.object({
  fileName: z.string().min(1),
  fileType: z.enum(ALLOWED_CONTENT_TYPES)
});
z.object({
  fileName: z.string().min(1),
  fileType: z.enum(ALLOWED_DOCUMENT_TYPES)
});
z.object({
  keys: z.array(z.string().min(1)).min(1)
});
const ZCourseContentUpdateItem = z.object({
  id: z.string().min(1),
  type: z.enum(["LESSON", "EXERCISE"]),
  isUnlocked: z.boolean().optional(),
  order: z.number().int().min(0).optional(),
  sectionId: z.string().nullable().optional()
});
z.object({
  items: z.array(ZCourseContentUpdateItem).min(1)
});
const ZCourseContentReorderSection = z.object({
  id: z.string().min(1),
  order: z.number().int().min(0)
});
const ZCourseContentReorderItem = ZCourseContentUpdateItem.omit({
  isUnlocked: true
});
const ZCourseContentReorderBase = z.object({
  sections: z.array(ZCourseContentReorderSection).min(1).optional(),
  items: z.array(ZCourseContentReorderItem).min(1).optional()
});
ZCourseContentReorderBase.superRefine((data, ctx) => {
  if (!data.sections?.length && !data.items?.length) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["sections"],
      message: "Provide sections or items to reorder"
    });
  }
  const sectionIds = /* @__PURE__ */ new Set();
  data.sections?.forEach((section, index) => {
    if (sectionIds.has(section.id)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["sections", index, "id"],
        message: "Section IDs must be unique"
      });
    }
    sectionIds.add(section.id);
  });
  const itemKeys = /* @__PURE__ */ new Set();
  data.items?.forEach((item, index) => {
    if (item.order === void 0 && item.sectionId === void 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["items", index],
        message: "Each item must provide order or sectionId"
      });
    }
    const itemKey = `${item.type}:${item.id}`;
    if (itemKeys.has(itemKey)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["items", index, "id"],
        message: "Item IDs must be unique per content type"
      });
    }
    itemKeys.add(itemKey);
  });
});
const ZCourseContentDeleteItem = z.object({
  id: z.string().min(1),
  type: z.enum(["LESSON", "EXERCISE"])
});
z.object({
  sectionId: z.string().min(1).optional(),
  items: z.array(ZCourseContentDeleteItem).min(1).optional()
}).superRefine((data, ctx) => {
  if (Boolean(data.sectionId) === Boolean(data.items)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["sectionId"],
      message: "Provide either sectionId or items"
    });
  }
  const itemKeys = /* @__PURE__ */ new Set();
  data.items?.forEach((item, index) => {
    const itemKey = `${item.type}:${item.id}`;
    if (itemKeys.has(itemKey)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["items", index, "id"],
        message: "Item IDs must be unique per content type"
      });
    }
    itemKeys.add(itemKey);
  });
});
const ZComplianceSettings = z.object({
  retakeIntervalMonths: z.number().int().min(1).max(120),
  gracePeriodDays: z.number().int().min(0).max(365).optional().default(0),
  reminderDaysBefore: z.array(z.number().int().min(1).max(365)).max(10).optional().default([30, 7, 1]),
  isMandatory: z.boolean().optional().default(true),
  framework: z.enum(["HIPAA", "OSHA", "SOX", "GDPR", "PCI_DSS", "FERPA", "ISO", "CUSTOM"]).nullable().optional(),
  maxRetakeAttempts: z.number().int().min(1).nullable().optional(),
  passingScore: z.number().int().min(0).max(100).optional().default(80)
});
const ZCourseCreateBase = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  type: z.enum(["LIVE_CLASS", "SELF_PACED", "COMPLIANCE", "PUBLIC"]),
  organizationId: z.string().min(1),
  compliance: ZComplianceSettings.optional()
});
const ZCourseCreate = ZCourseCreateBase.refine((data) => data.type !== "COMPLIANCE" || data.compliance !== void 0, {
  message: "Compliance settings are required for COMPLIANCE courses",
  path: ["compliance"]
});
const ZCourseReward = z.object({
  show: z.boolean(),
  description: z.string()
});
const ZCourseInstructor = z.object({
  name: z.string(),
  role: z.string(),
  coursesNo: z.number(),
  description: z.string(),
  imgUrl: z.string()
});
const ZCourseCertificate = z.object({
  templateUrl: z.string()
});
const ZCourseReview = z.object({
  id: z.number(),
  hide: z.boolean(),
  name: z.string(),
  avatar_url: z.string(),
  rating: z.number(),
  created_at: z.number(),
  description: z.string()
});
const ZCourseLessonTabsOrder = z.array(z.object({
  id: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  name: z.string()
}));
const ZCourseMetadata = z.object({
  requirements: z.string().optional(),
  description: z.string().optional(),
  goals: z.string().optional(),
  videoUrl: z.string().optional(),
  showDiscount: z.boolean().optional(),
  discount: z.number().optional(),
  paymentLink: z.string().optional(),
  reward: ZCourseReward.optional(),
  instructor: ZCourseInstructor.optional(),
  certificate: ZCourseCertificate.optional(),
  reviews: z.array(ZCourseReview).optional(),
  lessonTabsOrder: ZCourseLessonTabsOrder.optional(),
  grading: z.boolean().optional(),
  lessonDownload: z.boolean().optional(),
  allowNewStudent: z.boolean(),
  sectionDisplay: z.record(z.string(), z.boolean()).optional(),
  isContentGroupingEnabled: z.boolean().optional()
});
const ZCourseLandingPageMetadataUpdate = z.object({
  requirements: z.string().optional(),
  description: z.string().optional(),
  goals: z.string().optional(),
  videoUrl: z.string().optional(),
  showDiscount: z.boolean().optional(),
  discount: z.number().optional(),
  paymentLink: z.string().optional(),
  reward: ZCourseReward.partial().optional(),
  instructor: ZCourseInstructor.partial().optional(),
  certificate: ZCourseCertificate.partial().optional(),
  reviews: z.array(ZCourseReview).optional(),
  lessonTabsOrder: ZCourseLessonTabsOrder.optional(),
  grading: z.boolean().optional(),
  lessonDownload: z.boolean().optional(),
  allowNewStudent: z.boolean().optional(),
  sectionDisplay: z.record(z.string(), z.boolean()).optional(),
  isContentGroupingEnabled: z.boolean().optional()
});
const ZCertificationSettings = z.object({
  isDownloadable: z.boolean().optional(),
  /** Legacy theme id (one of the 6 original themes). Kept for read compatibility; new courses use `design.templateId`. */
  theme: z.string().optional(),
  /** Atelier-era certificate design (template, accent, signatories, subtitle, etc.). */
  design: ZCertificateDesign.optional(),
  /** ISO 8601 datetime string or null to clear */
  deadline: z.union([z.string().min(1), z.null()]).optional(),
  threshold: z.number().int().min(0).max(100).optional(),
  requiredExerciseId: z.union([z.string().uuid(), z.null()]).optional(),
  exerciseMinScorePercent: z.number().int().min(0).max(100).nullable().optional(),
  emailMessage: z.string().max(5e3).nullable().optional()
});
const ZCourseUpdateBase = z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  type: z.enum(["LIVE_CLASS", "SELF_PACED", "COMPLIANCE", "PUBLIC"]).optional(),
  logo: z.string().optional(),
  slug: z.string().optional(),
  isPublished: z.boolean().optional(),
  overview: z.string().optional(),
  metadata: ZCourseMetadata.optional(),
  cost: z.number().int().min(0).optional(),
  currency: z.enum(["NGN", "USD"]).optional(),
  certificate: ZCertificationSettings.optional(),
  tagIds: z.array(z.uuid()).max(100).optional(),
  compliance: ZComplianceSettings.optional(),
  callout: ZCourseCalloutInput.optional()
});
const ZCourseUpdate = ZCourseUpdateBase.refine((data) => data.type !== "COMPLIANCE" || data.compliance !== void 0, {
  message: "Compliance settings are required when changing a course to COMPLIANCE",
  path: ["compliance"]
});
z.object({
  courseId: z.string().min(1)
});
z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  overview: z.string().optional(),
  cost: z.number().int().min(0).optional(),
  currency: z.enum(["NGN", "USD"]).optional(),
  imageUrl: z.url().optional(),
  generateImage: z.boolean().optional(),
  imageQuery: z.string().min(1).max(120).optional(),
  metadata: ZCourseLandingPageMetadataUpdate.optional()
});
z.object({
  courseId: z.string().min(1)
});
z.object({
  courseId: z.string().min(1)
});
z.object({
  profileId: z.string().uuid()
});
z.object({
  courseId: z.string().min(1),
  userId: z.string().uuid()
});
const ZCourseComplianceParam = z$1.object({
  courseId: z$1.string().uuid()
});
ZCourseComplianceParam.extend({
  profileId: z$1.string().uuid()
});
const ZOptionalProfileIds = z$1.array(z$1.string().uuid()).min(1).optional();
const ZCourseComplianceReset = z$1.object({
  profileIds: ZOptionalProfileIds,
  dueDate: z$1.string().datetime()
});
const ZCourseComplianceExtend = z$1.object({
  profileIds: ZOptionalProfileIds,
  dueDate: z$1.string().datetime()
});
const ZCourseComplianceWaive = z$1.object({
  profileIds: ZOptionalProfileIds,
  waiverReason: z$1.string().trim().min(1).max(1e3).optional(),
  waiverExpiresAt: z$1.string().datetime().optional()
});
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ZSlug = z.string().min(1, { message: "Slug is required" }).max(80, { message: "Slug must be 80 characters or fewer" }).regex(SLUG_REGEX, {
  message: "Slug must be lowercase letters, numbers, and single dashes"
});
function slugifyTitle(title) {
  const normalized = title.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80).replace(/-+$/g, "");
  return normalized || "untitled";
}
z.object({
  courseSlug: ZSlug
});
z.object({
  courseSlug: ZSlug,
  itemSlug: ZSlug
});
const ZCourseSectionCreate = z.object({
  title: z.string().min(1),
  courseId: z.string().min(1),
  order: z.number().int().min(0).optional()
});
const ZCourseSectionUpdate = z.object({
  title: z.string().min(1).optional(),
  order: z.number().int().min(0).optional()
});
const ZCourseSectionPromoteUngrouped = z.object({
  title: z.string().min(1)
});
z.object({
  sectionId: z.string().min(1)
});
const ZCourseSectionReorder = z.object({
  sections: z.array(z.object({
    id: z.string().min(1),
    order: z.number().int().min(0)
  })).min(1)
});
z.object({
  courseId: z.string().min(1)
});
z.object({
  courseId: z.string().min(1),
  inviteId: z.string().uuid()
});
z.object({
  courseId: z.string().min(1),
  inviteId: z.string().uuid()
});
z.object({
  token: z.string().min(1)
});
z.object({
  courseId: z.uuid()
});
const ZCourseInvitePreset = z.enum(["ONE_TIME_24H", "MULTI_USE_7D", "MULTI_USE_30D", "CUSTOM"]);
z.object({
  preset: ZCourseInvitePreset.default("MULTI_USE_30D"),
  expiresAt: z.string().min(1).optional(),
  maxUses: z.number().int().min(1).max(1e3).optional(),
  allowedEmails: z.array(z.string().email()).max(100).optional(),
  allowedDomains: z.array(z.string().min(1)).max(100).optional(),
  recipientEmails: z.array(z.string().email()).max(500).optional(),
  recipientCsv: z.string().max(25e3).optional(),
  sendEmail: z.boolean().default(false),
  metadata: z.record(z.string(), z.unknown()).optional()
}).refine((data) => {
  const hasEmails = (data.recipientEmails?.length ?? 0) > 0;
  const hasCsv = typeof data.recipientCsv === "string" && data.recipientCsv.trim().length > 0;
  return hasEmails || hasCsv;
}, { message: "recipientEmails or recipientCsv is required", path: ["recipientEmails"] });
const courseMetaDeta = writable({
  view: "list"
});
const createCourseModal = writable({
  title: "",
  type: "",
  description: "",
  emails: "",
  tutors: "",
  students: ""
});
const copyCourseModalInitialState = {
  open: false,
  courseIdToCopy: null,
  id: "",
  title: "",
  description: "",
  isSaving: false,
  error: null
};
const copyCourseModal = writable({ ...copyCourseModalInitialState });
const deleteCourseModalInitialState = {
  open: false,
  id: "",
  title: "",
  isDeleting: false
};
const deleteCourseModal = writable({ ...deleteCourseModalInitialState });
const ZExerciseSectionAfterBehavior = z$1.discriminatedUnion("action", [
  z$1.object({ action: z$1.literal("continue") }),
  z$1.object({ action: z$1.literal("go_to_section"), exerciseSectionId: z$1.string().uuid() }),
  z$1.object({ action: z$1.literal("submit") })
]);
const ZExerciseSection = z$1.object({
  id: z$1.string().uuid().optional(),
  title: z$1.string().min(1, "Section title is required"),
  description: z$1.string().optional().nullable(),
  order: z$1.number().int().min(0),
  colorTheme: z$1.enum(["blue", "green", "amber", "rose", "violet", "slate"]).default("blue"),
  afterBehavior: ZExerciseSectionAfterBehavior.default({ action: "continue" }),
  questionIds: z$1.array(z$1.union([z$1.string(), z$1.number().int()])).optional()
});
ZExerciseSection.omit({ id: true });
ZExerciseSection.partial().required({ id: true });
const EXERCISE_QUESTION_TYPE_ID_LITERALS = [
  z.literal(QUESTION_TYPE.RADIO),
  z.literal(QUESTION_TYPE.CHECKBOX),
  z.literal(QUESTION_TYPE.TEXTAREA),
  z.literal(QUESTION_TYPE.TRUE_FALSE),
  z.literal(QUESTION_TYPE.SHORT_ANSWER),
  z.literal(QUESTION_TYPE.NUMERIC),
  z.literal(QUESTION_TYPE.FILL_BLANK),
  z.literal(QUESTION_TYPE.FILE_UPLOAD),
  z.literal(QUESTION_TYPE.MATCHING),
  z.literal(QUESTION_TYPE.ORDERING),
  z.literal(QUESTION_TYPE.HOTSPOT),
  z.literal(QUESTION_TYPE.LINK),
  z.literal(QUESTION_TYPE.WORD_BANK),
  z.literal(QUESTION_TYPE.STAR),
  z.literal(QUESTION_TYPE.VIDEO_RECORDING)
];
const ZExerciseQuestionTypeId = z.union(EXERCISE_QUESTION_TYPE_ID_LITERALS);
const QUESTION_VALIDATION_RULES = {
  [QUESTION_TYPE.RADIO]: [
    (question) => {
      const options = question.options || [];
      if (options.length > 0 && options.length < 2) {
        return "Options must have at least 2 items for RADIO/CHECKBOX questions";
      }
      return null;
    },
    (question) => {
      const options = question.options || [];
      if (options.length > 0 && !options.some((opt) => opt.isCorrect === true)) {
        return "Please mark an option as the correct answer";
      }
      return null;
    }
  ],
  [QUESTION_TYPE.CHECKBOX]: [
    (question) => {
      const options = question.options || [];
      if (options.length > 0 && options.length < 2) {
        return "Options must have at least 2 items for RADIO/CHECKBOX questions";
      }
      return null;
    },
    (question) => {
      const options = question.options || [];
      if (options.length > 0 && !options.some((opt) => opt.isCorrect === true)) {
        return "Please mark an option as the correct answer";
      }
      return null;
    }
  ],
  [QUESTION_TYPE.TRUE_FALSE]: [
    (question) => {
      const options = question.options || [];
      if (options.length > 0 && options.length < 2) {
        return "True/False questions need both True and False options";
      }
      return null;
    },
    (question) => {
      const options = question.options || [];
      if (options.length > 0 && !options.some((opt) => opt.isCorrect === true)) {
        return "Please mark an option as the correct answer";
      }
      return null;
    }
  ],
  [QUESTION_TYPE.TEXTAREA]: [],
  [QUESTION_TYPE.WORD_BANK]: [
    (question) => {
      const settings = question.settings;
      const template = String(settings?.template ?? "");
      const blankCount = Math.max(0, template.split("___").length - 1);
      if (blankCount < 1) {
        return "Word bank questions need at least one ___ blank in the template";
      }
      const raw = settings?.correctAnswers;
      const answers = Array.isArray(raw) ? raw : [];
      if (answers.length < blankCount) {
        return "Provide a correct answer for each blank";
      }
      for (let i = 0; i < blankCount; i++) {
        if (!String(answers[i] ?? "").trim()) {
          return `Correct answer for blank ${i + 1} is required`;
        }
      }
      return null;
    }
  ],
  [QUESTION_TYPE.STAR]: [
    (question) => {
      const settings = question.settings ?? {};
      const maxStars = getStarRatingMaxFromSettings(settings);
      const rawCorrect = settings.correctValue;
      const correct = typeof rawCorrect === "number" ? rawCorrect : rawCorrect != null ? Number(rawCorrect) : NaN;
      if (!isValidStarRatingValue(correct, maxStars)) {
        return "Set a correct star value from 1 up to the maximum number of stars";
      }
      return null;
    }
  ],
  [QUESTION_TYPE.VIDEO_RECORDING]: [
    (question) => {
      const settings = question.settings ?? {};
      const rawDuration = settings.maxDurationSeconds;
      const maxDurationSeconds = typeof rawDuration === "number" ? rawDuration : rawDuration != null ? Number(rawDuration) : NaN;
      if (!Number.isFinite(maxDurationSeconds) || maxDurationSeconds <= 0) {
        return "Set a recording duration greater than 0 seconds";
      }
      if (maxDurationSeconds > VIDEO_RECORDING_PLATFORM_MAX_DURATION_SECONDS) {
        return `Recording duration cannot exceed ${VIDEO_RECORDING_PLATFORM_MAX_DURATION_SECONDS} seconds`;
      }
      return null;
    }
  ]
};
const ZExerciseUpdateQuestionBase = z.object({
  id: z.number().int().optional(),
  exerciseSectionId: z.string().uuid().nullable().optional(),
  question: z.string().min(1),
  questionTypeId: ZExerciseQuestionTypeId.optional(),
  points: z.number().int().min(0).optional(),
  order: z.number().int().min(0).optional(),
  settings: z.record(z.string(), z.unknown()).optional(),
  deletedAt: z.string().optional(),
  // Marks question as deleted
  options: z.array(z.object({
    id: z.number().int().optional(),
    label: z.string().min(1),
    isCorrect: z.boolean(),
    settings: z.record(z.string(), z.unknown()).optional(),
    deletedAt: z.string().optional()
    // Marks option as deleted
  })).optional()
});
function validateQuestionOptions(question, ctx) {
  if (question.deletedAt)
    return;
  const rules = QUESTION_VALIDATION_RULES[question.questionTypeId ?? -1] ?? [];
  for (const rule of rules) {
    const message = rule(question);
    if (!message)
      continue;
    ctx.addIssue({
      code: "custom",
      message,
      path: ["options"]
    });
  }
}
const ZExerciseUpdateQuestion = ZExerciseUpdateQuestionBase.superRefine(validateQuestionOptions);
const ZExerciseCreateQuestionBase = z.object({
  question: z.string().min(1),
  questionTypeId: ZExerciseQuestionTypeId.optional(),
  points: z.number().int().min(0).optional(),
  order: z.number().int().min(0).optional(),
  settings: z.record(z.string(), z.unknown()).optional(),
  options: z.array(z.object({
    label: z.string().min(1),
    isCorrect: z.boolean(),
    settings: z.record(z.string(), z.unknown()).optional()
  })).optional()
});
const ZExerciseCreateQuestion = ZExerciseCreateQuestionBase.superRefine(validateQuestionOptions);
const ZExerciseCreate = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  lessonId: z.string().optional(),
  sectionId: z.string().optional(),
  order: z.number().int().optional(),
  courseId: z.string().min(1),
  dueBy: z.string().optional(),
  slug: ZSlug.optional(),
  questions: z.array(ZExerciseCreateQuestion).optional()
});
const ZExerciseUpdate = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  lessonId: z.string().optional(),
  sectionId: z.string().optional(),
  order: z.number().int().optional(),
  isUnlocked: z.boolean().optional(),
  dueBy: z.string().optional(),
  // Changed from iso.datetime() to string to match frontend format
  allowMultipleAttempts: z.boolean().optional(),
  slug: ZSlug.optional(),
  questions: z.array(ZExerciseUpdateQuestion).optional(),
  sections: z.array(ZExerciseSection).optional(),
  sectionDisplayMode: z.enum(["one_question", "all_questions"]).optional()
});
z.object({
  exerciseId: z.string().min(1)
});
z.object({
  lessonId: z.string().optional(),
  sectionId: z.string().optional()
});
const ZExerciseSubmissionCreate = z.object({
  exerciseId: z.string().min(1),
  answers: z.array(z.object({
    questionId: z.number().int(),
    optionId: z.number().int().optional(),
    answer: z.string().optional()
  })).min(1)
});
z.object({
  lessonId: z.string().optional(),
  sectionId: z.string().optional(),
  order: z.number().int().optional(),
  templateId: z.number().int().min(1)
});
const VIDEO_RECORDING_MIME_TYPES = ["video/webm", "video/mp4", "video/quicktime"];
const ZExerciseVideoRecordingParam = z.object({
  exerciseId: z.string().min(1),
  questionId: z.string().regex(/^\d+$/).transform(Number)
});
ZExerciseVideoRecordingParam.extend({
  submissionId: z.string().uuid()
});
const ZExerciseVideoRecordingUploadInit = z.object({
  fileName: z.string().min(1),
  mimeType: z.enum(VIDEO_RECORDING_MIME_TYPES),
  size: z.number().int().positive()
});
const ZExerciseVideoRecordingUploadComplete = z.object({
  assetId: z.string().uuid(),
  storageKey: z.string().min(1),
  fileName: z.string().min(1),
  mimeType: z.enum(VIDEO_RECORDING_MIME_TYPES),
  size: z.number().int().positive(),
  durationSeconds: z.number().positive().max(VIDEO_RECORDING_PLATFORM_MAX_DURATION_SECONDS + 2),
  recordedAt: z.string().datetime(),
  retakeCount: z.number().int().min(0).optional()
});
const ZLessonCreate = z.object({
  title: z.string().min(1),
  note: z.string().optional(),
  courseId: z.string().min(1),
  sectionId: z.string().optional(),
  order: z.number().int().min(0).optional(),
  lessonAt: z.string().optional(),
  teacherId: z.string().optional(),
  isUnlocked: z.boolean().optional(),
  public: z.boolean().optional(),
  slug: ZSlug.optional()
});
const ZLessonUpdate = z.object({
  title: z.string().min(1).optional(),
  note: z.string().optional(),
  sectionId: z.string().optional(),
  order: z.number().int().min(0).optional(),
  callUrl: z.string().optional(),
  lessonAt: z.string().optional(),
  teacherId: z.string().optional(),
  isUnlocked: z.boolean().optional(),
  public: z.boolean().optional(),
  slug: ZSlug.optional(),
  isComplete: z.boolean().optional(),
  videoUrl: z.url().optional(),
  slideUrl: z.url().optional(),
  videos: z.array(z.object({
    type: z.enum(["youtube", "generic", "upload", "google_drive"]),
    link: z.string(),
    key: z.string().optional(),
    assetId: z.string().uuid().optional(),
    fileName: z.string().optional(),
    metadata: z.record(z.string(), z.unknown()).optional()
  })).optional(),
  documents: z.array(z.object({
    type: z.string(),
    name: z.string(),
    link: z.string(),
    size: z.number().optional(),
    key: z.string(),
    assetId: z.string().uuid().optional()
  })).optional()
});
z.object({
  lessonId: z.string().min(1)
});
z.object({
  sectionId: z.string().optional(),
  courseId: z.string().min(1)
});
z.object({
  courseId: z.string().min(1),
  lessonId: z.string().min(1)
});
z.object({
  locale: z.string().min(1),
  endRange: z.string().transform(Number).pipe(z.number().int().min(0))
});
const ZLessonReorder = z.object({
  lessons: z.array(z.object({
    id: z.string().min(1),
    order: z.number().int().min(0),
    sectionId: z.string().optional()
  })).min(1)
});
const ZLessonCommentCreate = z.object({
  lessonId: z.string().min(1),
  comment: z.string().min(1)
});
z.object({
  commentId: z.string().min(1)
});
const ZLessonCommentUpdate = z.object({
  comment: z.string().min(1)
});
z.object({
  cursor: z.string().optional(),
  limit: z.coerce.number().min(1).max(50).optional().default(10)
});
z.object({
  lessonId: z.string().min(1),
  isComplete: z.boolean()
});
z.object({
  isComplete: z.boolean()
});
z.object({
  courseId: z.uuid(),
  lessonId: z.uuid()
});
z.object({
  courseId: z.uuid(),
  lessonId: z.uuid(),
  locale: z.enum(["en", "hi", "fr", "pt", "de", "vi", "ru", "es", "pl", "da"])
});
z.object({
  locale: z.enum(["en", "hi", "fr", "pt", "de", "vi", "ru", "es", "pl", "da"]),
  content: z.string().optional()
});
z.object({
  content: z.string().optional()
});
const AssetKind = z.enum(["video", "document", "image", "audio", "other"]);
const AssetProvider = z.enum(["upload", "youtube", "generic", "external_url", "google_drive"]);
const AssetStatus = z.enum(["active", "archived"]);
const AssetTargetType = z.enum(["lesson", "exercise", "question"]);
const ZAssetListQuery = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  kind: AssetKind.optional(),
  status: AssetStatus.optional(),
  search: z.string().trim().optional(),
  includeExternal: z.coerce.boolean().optional().default(true)
});
const ZAssetCreateUpload = z.object({
  kind: AssetKind.default("video"),
  provider: AssetProvider.default("upload"),
  storageProvider: z.string().default("s3"),
  storageKey: z.string().min(1).optional(),
  sourceUrl: z.string().url().optional(),
  mimeType: z.string().optional(),
  byteSize: z.coerce.number().int().min(0).optional(),
  checksum: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  thumbnailUrl: z.string().url().optional(),
  durationSeconds: z.coerce.number().int().min(0).optional(),
  aspectRatio: z.string().optional(),
  isExternal: z.boolean().optional().default(false),
  metadata: z.record(z.string(), z.unknown()).optional()
}).superRefine((value, ctx) => {
  if (value.provider === "upload" && !value.storageKey) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "storageKey is required for upload assets",
      path: ["storageKey"]
    });
  }
  if (!value.isExternal && value.provider === "upload" && value.byteSize == null) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "byteSize is required for uploaded internal assets",
      path: ["byteSize"]
    });
  }
});
z.object({
  assetId: z.string().min(1)
});
const ZAssetUpdate = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  thumbnailUrl: z.string().url().optional(),
  durationSeconds: z.coerce.number().int().min(0).optional(),
  aspectRatio: z.string().optional(),
  status: AssetStatus.optional(),
  metadata: z.record(z.string(), z.unknown()).optional()
});
const ZAssetAttach = z.object({
  targetType: AssetTargetType,
  targetId: z.string().min(1),
  slotType: z.string().min(1),
  slotKey: z.string().optional(),
  position: z.coerce.number().int().min(0).optional()
});
const ZAssetDetach = z.object({
  usageId: z.string().uuid().optional(),
  targetType: AssetTargetType.optional(),
  targetId: z.string().optional(),
  slotType: z.string().optional(),
  slotKey: z.string().optional(),
  position: z.coerce.number().int().min(0).optional()
}).superRefine((value, ctx) => {
  if (!value.usageId) {
    if (!value.targetType || !value.targetId || !value.slotType) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "usageId or targetType/targetId/slotType is required"
      });
    }
  }
});
z.object({
  assetId: z.string().min(1)
});
z.object({
  includeArchived: z.coerce.boolean().optional().default(false),
  includeExternal: z.coerce.boolean().optional().default(true)
});
const ZAssetStorageQuery = z.object({
  includeArchived: z.coerce.boolean().optional().default(false),
  includeExternal: z.coerce.boolean().optional().default(true)
});
const ZYouTubeMetadataQuery = z.object({
  url: z.string().url()
});
const ZNewsfeedCreate = z.object({
  courseId: z.string().min(1),
  content: z.string().min(1),
  isPinned: z.boolean().optional()
});
const ZNewsfeedUpdate = z.object({
  content: z.string().min(1).optional(),
  isPinned: z.boolean().optional()
});
const ZNewsfeedReactionUpdate = z.object({
  reaction: z.record(z.enum(["clap", "smile", "thumbsup", "thumbsdown"]), z.array(z.string()))
});
z.object({
  feedId: z.string().min(1)
});
z.object({
  cursor: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(50).optional().default(10)
});
const ZNewsfeedCommentCreate = z.object({
  courseNewsfeedId: z.string().min(1),
  content: z.string().min(1)
});
z.object({
  commentId: z.string().min(1)
});
const ZNewsfeedCommentUpdate = z.object({
  content: z.string().min(1)
});
z.object({
  cursor: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(50).optional().default(5)
});
const ZSubmissionGradingState = z.enum(["queued", "processing", "awaiting_manual", "completed", "failed"]);
z.enum(["auto_graded", "manual_required", "hybrid"]);
z.object({
  submissionId: z.string().min(1)
});
const ZSubmissionUpdate = z.object({
  statusId: z.number().int().optional(),
  gradingState: ZSubmissionGradingState.optional(),
  total: z.number().int().min(0).optional(),
  feedback: z.string().optional(),
  reviewerId: z.number().int().optional()
});
const ZSubmissionAnswerUpdate = z.object({
  questionId: z.number().int(),
  optionId: z.number().int().optional(),
  answer: z.string().optional(),
  points: z.number().int().min(0).optional()
});
const ZSubmissionGradeItem = z.object({
  questionId: z.number().int(),
  points: z.number().int().min(0)
});
const ZSubmissionGradesUpdate = z.object({
  answers: z.array(ZSubmissionGradeItem),
  total: z.number().int().min(0),
  feedback: z.string().optional(),
  statusId: z.number().int().min(1).max(3).optional()
});

export { ZNewsfeedUpdate as A, ZNewsfeedReactionUpdate as B, ZNewsfeedCommentCreate as C, ZNewsfeedCommentUpdate as D, ZComplianceSettings as E, ZCourseMetadata as F, ZExerciseQuestionTypeId as G, ALLOWED_IMAGE_TYPES as H, ZCourseCreateBase as I, ZCourseUpdateBase as J, ZAttendanceUpsert as K, slugifyTitle as L, ZSubmissionUpdate as M, ZSubmissionGradesUpdate as N, ZSubmissionAnswerUpdate as O, deleteCourseModal as P, courseMetaDeta as Q, deleteCourseModalInitialState as R, createCourseModal as S, copyCourseModal as T, ZCourseClone as U, copyCourseModalInitialState as V, ZCourseCreate as Z, ZCourseUpdate as a, ZCourseComplianceReset as b, ZCourseComplianceExtend as c, ZCourseComplianceWaive as d, ZExerciseCreate as e, ZExerciseUpdate as f, ZExerciseSubmissionCreate as g, ZExerciseVideoRecordingUploadInit as h, ZExerciseVideoRecordingUploadComplete as i, ZLessonCreate as j, ZLessonUpdate as k, ZCourseSectionCreate as l, ZCourseSectionPromoteUngrouped as m, ZCourseSectionUpdate as n, ZCourseSectionReorder as o, ZLessonReorder as p, ZLessonCommentCreate as q, ZLessonCommentUpdate as r, ZAssetListQuery as s, ZAssetStorageQuery as t, ZYouTubeMetadataQuery as u, ZAssetCreateUpload as v, ZAssetUpdate as w, ZAssetAttach as x, ZAssetDetach as y, ZNewsfeedCreate as z };
//# sourceMappingURL=submission-CIIjGYOS.js.map
