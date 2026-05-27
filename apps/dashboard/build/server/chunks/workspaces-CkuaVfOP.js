import * as z from 'zod';
import { b as blockedSubdomain } from './org3-BuUSwZTB.js';
import './content-BYLGOVzm.js';

const ZUpdateProfile = z.object({
  fullname: z.string().min(3).optional(),
  username: z.string().min(3).optional(),
  locale: z.enum(["en", "hi", "fr", "pt", "de", "vi", "ru", "es", "pl", "da"]).optional(),
  avatarUrl: z.url().optional()
});
const ZProfileUpdateForm = ZUpdateProfile.extend({
  fullname: z.string().min(5),
  username: z.string().min(1)
});
const ZChangeEmail = z.object({
  newEmail: z.email()
});
z.object({
  email: z.email()
});
const ZCreateWorkspace = z.object({
  name: z.string().min(5).refine((val) => !/^[-]|[-]$/.test(val), {
    message: "Workspace name cannot start or end with a hyphen"
  }),
  siteName: z.string().min(5).refine((val) => !/^[-]|[-]$/.test(val), {
    message: "Site name cannot start or end with a hyphen"
  }).refine((val) => !blockedSubdomain.includes(val), {
    message: "Sitename already exists."
  })
});
z.object({
  workspaceId: z.uuid()
});

export { ZProfileUpdateForm as Z, ZChangeEmail as a, ZCreateWorkspace as b };
//# sourceMappingURL=workspaces-CkuaVfOP.js.map
