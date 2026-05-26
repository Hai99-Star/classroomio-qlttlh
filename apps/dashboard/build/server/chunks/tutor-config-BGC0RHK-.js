import { z } from 'zod';
import { a as AGENT_MODEL_IDS } from './index11-ChqzWCsR.js';

const ZAgentCourseId = z.string().min(1);
const ZAgentJsonRecord = z.record(z.string(), z.unknown());
const AGENT_RUN_STATUSES = [
  "queued",
  "running",
  "waiting_for_input",
  "paused",
  "completed",
  "failed",
  "canceled"
];
z.enum(AGENT_RUN_STATUSES);
z.object({
  courseId: ZAgentCourseId,
  conversationId: z.string().uuid().optional(),
  messages: z.array(z.any()),
  // UIMessage[] from Vercel AI SDK — validated by the SDK itself
  model: z.enum(AGENT_MODEL_IDS).optional(),
  context: z.object({
    lessonId: z.string().uuid().optional(),
    exerciseId: z.string().uuid().optional(),
    documentId: z.string().optional()
  }).optional()
});
z.object({
  courseId: ZAgentCourseId,
  conversationId: z.string().uuid()
});
z.object({
  courseId: ZAgentCourseId
});
z.object({
  amount: z.number().int().min(1)
});
z.object({
  orgId: z.string().uuid(),
  triggeredBy: z.string().uuid().optional(),
  providerOrderId: z.string().min(1),
  tokens: z.number().int().positive(),
  quantity: z.number().int().positive(),
  unitPriceCents: z.number().int().nonnegative(),
  currency: z.string().default("USD"),
  payload: z.record(z.string(), z.unknown()).optional()
});
z.object({
  courseId: ZAgentCourseId
});
z.object({
  conversationId: z.string().uuid()
});
z.object({
  courseId: ZAgentCourseId,
  title: z.string().optional()
});
z.object({
  messages: z.array(z.any()),
  title: z.string().optional()
});
z.object({
  title: z.string().min(1).max(120)
});
z.object({
  conversationId: z.string().uuid()
});
z.object({
  conversationId: z.string().uuid()
});
z.object({
  firstMessageText: z.string().min(1).max(500)
});
z.object({
  prompt: z.string().min(1).max(2e3)
});
z.object({
  messages: z.array(z.any()),
  courseId: ZAgentCourseId
});
z.object({
  prompt: z.string().min(1).max(1e3),
  tone: z.enum(["professional", "casual", "expert", "friendly"]),
  format: z.enum(["plain", "html"]).default("plain"),
  context: z.string().max(500).optional(),
  courseId: z.string().uuid().optional()
});
z.object({
  courseId: ZAgentCourseId
});
z.object({
  runId: z.string().uuid()
});
z.object({
  courseId: ZAgentCourseId,
  conversationId: z.string().uuid().optional(),
  phase: z.string().min(1).max(64).optional(),
  approvedPlan: ZAgentJsonRecord.optional(),
  executionCursor: ZAgentJsonRecord.optional(),
  sourceIds: z.array(z.string().min(1)).optional(),
  modelSummary: z.string().max(1e5).optional()
});
z.object({
  text: z.string().min(1).max(4e3)
});
const TutorPersonaIdSchema = z.enum(["friendly", "formal", "encouraging", "socratic", "custom"]);
const TutorResponseLengthSchema = z.enum(["short", "medium", "long"]);
const TutorAssessmentModeSchema = z.enum(["direct_answer", "hint_only", "block_during_exercise"]);
const TutorCodePolicySchema = z.enum(["allowed", "hints_only", "forbidden"]);
const TutorGroundingScopeSchema = z.enum(["lesson", "course", "workspace"]);
const ZAiTutorEscalation = z.object({
  enabled: z.boolean(),
  email: z.union([z.literal(""), z.string().email()])
});
const ZAiTutorSettings = z.object({
  enabled: z.boolean(),
  persona: TutorPersonaIdSchema,
  customPersona: z.string().max(500).default(""),
  responseLength: TutorResponseLengthSchema,
  welcomeMessage: z.string().max(500).default(""),
  disclaimerFooter: z.string().max(200).default(""),
  thingsToSay: z.string().max(2e3).default(""),
  thingsNotToSay: z.string().max(2e3).default(""),
  forbiddenTopics: z.array(z.string().min(1).max(60)).max(20).default([]),
  groundingScope: TutorGroundingScopeSchema,
  requireCitations: z.boolean(),
  assessmentMode: TutorAssessmentModeSchema,
  revealSolutionsAfterAttempts: z.number().int().min(0).max(20),
  codePolicy: TutorCodePolicySchema,
  blockOffTopic: z.boolean(),
  profanityFilter: z.boolean(),
  escalation: ZAiTutorEscalation
});
const ZAiTutorSettingsUpdate = ZAiTutorSettings.partial();
const ZCourseAiTutorOverride = ZAiTutorSettings.partial().extend({
  inheritFromOrg: z.boolean().optional()
});
const ZTutorUsagePeriod = z.enum(["current", "previous", "last90"]);
z.object({
  period: ZTutorUsagePeriod.default("current"),
  search: z.string().max(120).optional(),
  sort: z.enum(["messages", "tokens", "capPct"]).default("messages"),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20)
});
z.object({
  userId: z.string().uuid()
});

export { ZAiTutorSettingsUpdate as Z, ZCourseAiTutorOverride as a };
//# sourceMappingURL=tutor-config-BGC0RHK-.js.map
