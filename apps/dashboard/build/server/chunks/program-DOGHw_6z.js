import * as z from 'zod';
import { R as ROLE } from './org-t71AQfHV.js';
import './domains-D9J1UytB.js';

z.object({
  name: z.string().min(1).max(255),
  description: z.string().max(2e3).optional(),
  coverImage: z.string().url().optional()
});
z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().max(2e3).nullable().optional(),
  coverImage: z.string().url().nullable().optional(),
  status: z.enum(["ACTIVE", "INACTIVE", "ARCHIVED"]).optional()
});
z.object({
  courseId: z.string().uuid()
});
z.object({
  members: z.array(z.object({
    profileId: z.string().uuid().optional(),
    email: z.string().email().optional(),
    name: z.string().optional(),
    roleId: z.union([z.literal(ROLE.TUTOR), z.literal(ROLE.STUDENT)])
  })).min(1).refine((members) => members.every((member) => member.profileId || member.email), {
    message: "Each member must include a profileId or email"
  })
});
z.object({
  roleId: z.union([z.literal(ROLE.TUTOR), z.literal(ROLE.STUDENT)])
});
const ZCreateProgramNewsfeed = z.object({
  content: z.string().min(1),
  isPinned: z.boolean().optional()
});
const ZUpdateProgramNewsfeed = z.object({
  content: z.string().min(1).optional(),
  isPinned: z.boolean().optional()
});
const ZUpdateProgramReaction = z.object({
  reaction: z.object({
    clap: z.array(z.string()),
    smile: z.array(z.string()),
    thumbsup: z.array(z.string()),
    thumbsdown: z.array(z.string())
  })
});
const ZCreateProgramNewsfeedComment = z.object({
  content: z.string().min(1)
});
z.object({
  recipientCsv: z.string().min(1).max(25e3),
  sendEmail: z.boolean().default(true)
});
z.object({
  profileIds: z.array(z.string().uuid()).min(1).max(500),
  sendEmail: z.boolean().default(true)
});
const PROGRAM_GOAL_TYPES = ["complete_all", "n_of_m", "score", "pass_rate", "readiness"];
const PROGRAM_GOAL_DEADLINE_KINDS = ["absolute", "relative_to_join", "recurring", "none"];
const goalCommonFields = {
  title: z.string().min(1).max(255),
  description: z.string().max(2e3).nullable().optional(),
  courseIds: z.array(z.string().uuid()).max(50),
  reminderDaysBefore: z.array(z.number().int().min(0).max(365)).max(5).default([7, 1])
};
const goalDeadlineFields = {
  deadlineKind: z.enum(PROGRAM_GOAL_DEADLINE_KINDS).default("none"),
  deadlineDate: z.string().datetime().nullable().optional(),
  relativeDays: z.number().int().min(1).max(3650).nullable().optional(),
  recurringMonths: z.number().int().min(1).max(120).nullable().optional()
};
z.object({
  type: z.enum(PROGRAM_GOAL_TYPES),
  requiredCount: z.number().int().min(1).max(50).nullable().optional(),
  scoreThreshold: z.number().int().min(0).max(100).nullable().optional(),
  teamPassRateThreshold: z.number().int().min(0).max(100).nullable().optional(),
  ...goalCommonFields,
  ...goalDeadlineFields
}).refine((data) => data.courseIds.length > 0, {
  message: "At least one course is required",
  path: ["courseIds"]
}).refine((data) => data.type !== "n_of_m" || data.requiredCount && data.requiredCount > 0, {
  message: "requiredCount is required for n_of_m goals",
  path: ["requiredCount"]
}).refine((data) => data.type !== "n_of_m" || !data.requiredCount || data.requiredCount <= data.courseIds.length, {
  message: "requiredCount cannot exceed selected courses",
  path: ["requiredCount"]
}).refine((data) => data.type !== "score" || data.scoreThreshold !== null && data.scoreThreshold !== void 0, {
  message: "scoreThreshold is required for score goals",
  path: ["scoreThreshold"]
}).refine((data) => data.type !== "pass_rate" || data.scoreThreshold !== null && data.scoreThreshold !== void 0 && data.teamPassRateThreshold !== null && data.teamPassRateThreshold !== void 0, {
  message: "scoreThreshold and teamPassRateThreshold are required for pass_rate goals",
  path: ["teamPassRateThreshold"]
}).refine((data) => data.deadlineKind !== "absolute" || !!data.deadlineDate, {
  message: "deadlineDate is required for absolute deadlines",
  path: ["deadlineDate"]
}).refine((data) => data.deadlineKind !== "relative_to_join" || !!data.relativeDays, {
  message: "relativeDays is required for relative-to-join deadlines",
  path: ["relativeDays"]
}).refine((data) => data.deadlineKind !== "recurring" || !!data.recurringMonths, {
  message: "recurringMonths is required for recurring deadlines",
  path: ["recurringMonths"]
}).refine((data) => data.type !== "readiness" || data.deadlineKind === "none", {
  message: "Readiness goals do not support deadlines",
  path: ["deadlineKind"]
});
z.object({
  type: z.enum(PROGRAM_GOAL_TYPES).optional(),
  title: z.string().min(1).max(255).optional(),
  description: z.string().max(2e3).nullable().optional(),
  courseIds: z.array(z.string().uuid()).max(50).optional(),
  requiredCount: z.number().int().min(1).max(50).nullable().optional(),
  scoreThreshold: z.number().int().min(0).max(100).nullable().optional(),
  teamPassRateThreshold: z.number().int().min(0).max(100).nullable().optional(),
  reminderDaysBefore: z.array(z.number().int().min(0).max(365)).max(5).optional(),
  deadlineKind: z.enum(PROGRAM_GOAL_DEADLINE_KINDS).optional(),
  deadlineDate: z.string().datetime().nullable().optional(),
  relativeDays: z.number().int().min(1).max(3650).nullable().optional(),
  recurringMonths: z.number().int().min(1).max(120).nullable().optional(),
  status: z.enum(["active", "archived"]).optional()
}).refine((data) => Object.keys(data).length > 0, {
  message: "No fields to update"
});

export { PROGRAM_GOAL_TYPES as P, ZCreateProgramNewsfeed as Z, ZUpdateProgramNewsfeed as a, ZUpdateProgramReaction as b, ZCreateProgramNewsfeedComment as c, PROGRAM_GOAL_DEADLINE_KINDS as d };
//# sourceMappingURL=program-DOGHw_6z.js.map
