import * as z from 'zod';
import { z as z$1 } from 'zod';
import { b as blockedSubdomain } from './org3-BuUSwZTB.js';
import './content-BYLGOVzm.js';

const AudienceSortBy = z.enum(["createdAt", "name", "email"]);
const AudienceSortOrder = z.enum(["asc", "desc"]);
z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().trim().optional(),
  sortBy: AudienceSortBy.default("createdAt"),
  sortOrder: AudienceSortOrder.default("desc")
});
z.object({
  recipientCsv: z.string().max(25e3),
  courseIds: z.array(z.string().uuid()).optional(),
  programIds: z.array(z.string().uuid()).optional(),
  allCourses: z.boolean().optional().default(false),
  allPrograms: z.boolean().optional().default(false),
  sendEmail: z.boolean().default(true)
});
z.object({
  profileIds: z.array(z.uuid()).min(1).max(500),
  courseIds: z.array(z.uuid()).optional(),
  programIds: z.array(z.uuid()).optional(),
  sendEmail: z.boolean().default(true)
}).refine((data) => (data.courseIds?.length ?? 0) > 0 || (data.programIds?.length ?? 0) > 0, {
  message: "At least one course or program must be selected",
  path: ["courseIds"]
});
z.object({
  email: z.email()
});
z.object({
  siteName: z.string().min(1).optional(),
  customDomain: z.string().min(1).optional(),
  /**
   * Accepts a real boolean (server-side direct calls) or the URL-encoded `'true'`/`'false'`
   * string Hono RPC produces when serializing query params.
   */
  isCustomDomainVerified: z.union([z.boolean(), z.literal("true").transform(() => true), z.literal("false").transform(() => false)]).optional()
});
z.object({
  siteName: z.string().min(1),
  tags: z.string().optional()
});
z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().trim().optional(),
  tags: z.string().optional()
});
z.object({
  siteName: z.string().min(1)
});
z.object({
  orgId: z.uuid(),
  planName: z.enum(["EARLY_ADOPTER", "ENTERPRISE", "BASIC"]),
  subscriptionId: z.string().min(1),
  triggeredBy: z.number().int().positive(),
  payload: z.record(z.string(), z.unknown())
});
z.object({
  subscriptionId: z.string().min(1),
  payload: z.record(z.string(), z.unknown())
});
z.object({
  subscriptionId: z.string().min(1),
  payload: z.record(z.string(), z.unknown())
});
const ZCreateOrganization = z.object({
  name: z.string().min(5).refine((val) => !/^[-]|[-]$/.test(val), {
    message: "Organization name cannot start or end with a hyphen"
  }),
  siteName: z.string().min(5).refine((val) => !/^[-]|[-]$/.test(val), {
    message: "Site name cannot start or end with a hyphen"
  }).refine((val) => !blockedSubdomain.includes(val), {
    message: "Sitename already exists."
  })
});
const ZUpdateOrganization = z.object({
  name: z.string().min(5).refine((val) => !/^[-]|[-]$/.test(val), {
    message: "Organization name cannot start or end with a hyphen"
  }).optional(),
  avatarUrl: z.url().optional(),
  theme: z.string().optional(),
  landingpage: z.record(z.string(), z.unknown()).optional(),
  siteName: z.string().min(1).optional(),
  customDomain: z.string().nullable().optional(),
  isCustomDomainVerified: z.boolean().optional(),
  customization: z.record(z.string(), z.unknown()).optional(),
  disableSignup: z.boolean().optional(),
  disableSignupMessage: z.string().optional(),
  disableEmailPassword: z.boolean().optional(),
  disableGoogleAuth: z.boolean().optional(),
  /** Nested settings (stored in organization.settings JSONB). signup.inviteOnly = true means invite-only signup. */
  settings: z.object({
    signup: z.object({
      inviteOnly: z.boolean().optional()
    }).optional()
  }).optional()
});
z.object({
  emails: z.array(z.string().email()).min(1).max(50),
  roleId: z.number().int().positive()
});
z.object({
  memberId: z.coerce.number().int().positive()
});
z.object({
  userId: z.uuid()
});
const ZDomainAction = z.enum(["connect", "refresh", "remove"]);
z.object({
  action: ZDomainAction,
  domain: z.string().min(1)
});
z.object({
  orgId: z.uuid(),
  quizId: z.uuid()
});
z.object({
  orgId: z.uuid()
});
z.object({
  title: z.string().min(1),
  questions: z.array(z.any()).optional(),
  timelimit: z.string().optional(),
  theme: z.string().optional()
});
z.object({
  title: z.string().min(1).optional(),
  questions: z.array(z.any()).optional(),
  timelimit: z.string().optional(),
  theme: z.string().optional()
});
z.object({
  orgId: z.uuid()
});
z.object({
  token: z.string().min(10).max(512)
});
z$1.object({
  token: z$1.string().min(1),
  redirect: z$1.string().optional()
});
z$1.object({
  sub: z$1.uuid(),
  email: z$1.email(),
  type: z$1.literal("login-link")
});
z$1.object({
  token: z$1.string().min(1),
  redirect: z$1.string().optional()
});
z$1.object({
  sub: z$1.string(),
  email: z$1.email(),
  name: z$1.string().optional(),
  avatar: z$1.url().optional(),
  iat: z$1.number(),
  exp: z$1.number()
});
const ZOrganizationApiKeyType = z$1.enum(["mcp", "api", "zapier"]);
const ZOrganizationApiKeyScope = z$1.enum([
  "course_import:draft:create",
  "course_import:draft:read",
  "course_import:draft:update",
  "course_import:draft:publish",
  "course:read",
  "course:write",
  "course:tag:write",
  "course:exercise:read",
  "course:exercise:write",
  "public_api:*"
]);
z$1.object({
  type: ZOrganizationApiKeyType.optional()
});
z$1.object({
  type: ZOrganizationApiKeyType.default("mcp")
});
z$1.object({
  type: ZOrganizationApiKeyType,
  label: z$1.string().min(1).max(120).optional(),
  expiresAt: z$1.string().datetime().optional(),
  scopes: z$1.array(ZOrganizationApiKeyScope).min(1).optional()
});
z$1.object({
  keyId: z$1.string().uuid()
});
z.object({
  q: z.string().trim().min(1).max(200),
  limit: z.coerce.number().int().min(1).max(20).default(5)
});

export { ZCreateOrganization as Z, ZUpdateOrganization as a };
//# sourceMappingURL=search2-Bcr7AZ8r.js.map
