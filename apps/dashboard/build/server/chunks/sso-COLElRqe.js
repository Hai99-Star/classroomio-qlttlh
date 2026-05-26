import * as z from 'zod';

const SSO_PROVIDERS = ["OKTA", "GOOGLE_WORKSPACE", "AUTH0"];
const ZCreateSsoConnection = z.object({
  provider: z.enum(SSO_PROVIDERS),
  displayName: z.string().min(1, "Display name is required"),
  issuer: z.url("Must be a valid URL"),
  domain: z.string().min(1, "Domain is required").regex(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/, "Invalid domain format"),
  clientId: z.string().min(1, "Client ID is required"),
  clientSecret: z.string().min(1, "Client secret is required"),
  scopes: z.string().default("openid profile email")
});
const ZUpdateSsoConnection = z.object({
  displayName: z.string().min(1).optional(),
  issuer: z.url().optional(),
  domain: z.string().optional(),
  clientId: z.string().optional(),
  clientSecret: z.string().optional(),
  scopes: z.string().optional(),
  isActive: z.boolean().optional()
});
const ZUpdateSsoPolicy = z.object({
  forceSso: z.boolean().optional(),
  autoJoinSsoDomains: z.boolean().optional(),
  breakGlassEnabled: z.boolean().optional(),
  defaultRoleId: z.number().int().positive().optional(),
  roleMapping: z.record(z.string(), z.number()).optional()
});
z.object({
  email: z.email("Valid email is required")
});
z.object({
  orgId: z.uuid()
});

export { ZCreateSsoConnection as Z, ZUpdateSsoConnection as a, ZUpdateSsoPolicy as b };
//# sourceMappingURL=sso-COLElRqe.js.map
