import * as z from 'zod';

const TAG_COLOR_OPTIONS = [
  "#EF4444",
  "#F97316",
  "#F59E0B",
  "#84CC16",
  "#22C55E",
  "#14B8A6",
  "#06B6D4",
  "#3B82F6",
  "#8B5CF6",
  "#EC4899"
];
const ZTagColor = z.enum(TAG_COLOR_OPTIONS);
z.object({
  groupId: z.uuid()
});
const ZTagGroupCreate = z.object({
  name: z.string().min(1).max(80),
  description: z.string().max(240).optional(),
  order: z.number().int().min(0).optional()
});
const ZTagGroupUpdate = ZTagGroupCreate.partial().refine((value) => Object.keys(value).length > 0, {
  message: "At least one field is required"
});
z.object({
  tagId: z.uuid()
});
const ZTagCreate = z.object({
  name: z.string().min(1).max(80),
  description: z.string().max(240).optional(),
  groupId: z.uuid(),
  color: ZTagColor
});
const ZTagUpdate = z.object({
  name: z.string().min(1).max(80).optional(),
  description: z.string().max(240).optional(),
  groupId: z.uuid().optional(),
  color: ZTagColor.optional()
}).refine((value) => Object.keys(value).length > 0, {
  message: "At least one field is required"
});
z.object({
  courseId: z.uuid()
});
const ZCourseTagAssignment = z.object({
  tagIds: z.array(z.uuid()).max(100).default([])
});
const ZAutomationTagMode = z.enum(["merge", "replace"]).default("merge");
const ZAutomationTagName = z.string().trim().min(1).max(80);
z.object({
  draftId: z.string().uuid()
});
const ZAutomationDraftTagAssignment = z.object({
  tagNames: z.array(ZAutomationTagName).min(1).max(100),
  mode: ZAutomationTagMode,
  groupName: z.string().trim().min(1).max(80).optional()
});
ZAutomationDraftTagAssignment.extend({
  courseIds: z.array(z.string().uuid()).min(1).max(100)
});

export { TAG_COLOR_OPTIONS as T, ZTagGroupCreate as Z, ZTagGroupUpdate as a, ZTagCreate as b, ZTagUpdate as c, ZCourseTagAssignment as d };
//# sourceMappingURL=tag2-BBx_7Ec0.js.map
