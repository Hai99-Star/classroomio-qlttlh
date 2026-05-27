import { g as get } from './index-AIbsv2Pd.js';
import { c as classroomio } from './index4-3F2xRc80.js';
import { Z as ZCreateOrganization, a as ZUpdateOrganization } from './search2-Bcr7AZ8r.js';
import './sso-COLElRqe.js';
import { R as ROLE, o as orgs, m as mergeAccountOrgFromServer, c as currentOrg } from './org-BIDTy0Q0.js';
import './content-BYLGOVzm.js';
import { g as goto } from './client2-CqohmrW2.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-Bx8dlk4A.js';
import { r as resolve } from './server3-VLoL706W.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { t } from './translations-BxDrjLWK.js';
import { u as uploadImage } from './upload-B049_g3q.js';
import { t as toAudienceRequestQuery, D as DEFAULT_ORG_AUDIENCE_QUERY } from './audience-query-utils-DHNyhHub.js';

const ROLE_LABEL = {
  [ROLE.ADMIN]: "course.navItem.people.roles.admin",
  [ROLE.TUTOR]: "course.navItem.people.roles.tutor",
  [ROLE.STUDENT]: "course.navItem.people.roles.student"
};
const ROLES = [
  {
    label: "course.navItem.people.roles.filter",
    value: "all"
  },
  {
    label: ROLE_LABEL[ROLE.ADMIN],
    value: ROLE.ADMIN
  },
  {
    label: ROLE_LABEL[ROLE.TUTOR],
    value: ROLE.TUTOR
  },
  {
    label: ROLE_LABEL[ROLE.STUDENT],
    value: ROLE.STUDENT
  }
];
class OrgApi extends BaseApiWithErrors {
  teamMembers = [];
  audience = [];
  audiencePagination = null;
  publicCourses = [];
  hasMorePublicCourses = false;
  isFetchingOrgPublicCourses = false;
  activeAudienceRequestController = null;
  cancelAudienceRequest() {
    this.activeAudienceRequestController?.abort();
    this.activeAudienceRequestController = null;
  }
  /**
   * Gets organization team members (non-students)
   * @returns Team members array
   */
  async getOrgTeam() {
    return this.execute({
      requestFn: () => classroomio.organization.team.$get(),
      logContext: "fetching organization team",
      onSuccess: (response) => {
        const mappedTeam = response.data.map((member) => ({
          ...member,
          role: ROLE_LABEL[member.roleId] || "",
          isAdmin: member.roleId === ROLE.ADMIN,
          verified: member.verified ?? false
        }));
        this.teamMembers = mappedTeam;
      }
    });
  }
  /**
   * Gets organization audience (students)
   * @param orgId Organization ID
   * @returns Audience array
   */
  async getOrgAudience(orgId, query, options = {}) {
    if (!orgId) return;
    const requestQuery = toAudienceRequestQuery({ ...DEFAULT_ORG_AUDIENCE_QUERY, ...query });
    let requestSignal = options.signal;
    let requestController = null;
    if (options.abortPrevious) {
      this.cancelAudienceRequest();
      requestController = new AbortController();
      this.activeAudienceRequestController = requestController;
      requestSignal = requestController.signal;
    }
    const response = await this.execute({
      requestFn: () => classroomio.organization.audience.$get({ query: requestQuery }, { init: { signal: requestSignal } }),
      logContext: "fetching organization audience",
      onSuccess: (response2) => {
        this.audience = response2.data;
        this.audiencePagination = response2.pagination;
      }
    });
    if (requestController && this.activeAudienceRequestController === requestController) {
      this.activeAudienceRequestController = null;
    }
    return response;
  }
  /**
   * Gets public courses by organization siteName (for landing pages)
   * @param siteName Organization site name
   * @returns Published courses array
   */
  async getPublicCoursesBySiteName(siteName) {
    this.isFetchingOrgPublicCourses = true;
    await this.execute({
      requestFn: () => classroomio.organization.courses.public.$get({ query: { siteName } }),
      logContext: "fetching public courses",
      onSuccess: (response) => {
        this.publicCourses = response.data.courses;
        this.hasMorePublicCourses = response.data.hasMoreCourses;
      }
    });
    this.isFetchingOrgPublicCourses = false;
  }
  /**
   * Gets current organization by siteName or custom domain
   * @param siteName Organization site name or custom domain
   * @param isCustomDomain Whether the siteName is a custom domain
   * @returns Organization data or null if not found
   */
  async getOrgBySiteName(siteName, isCustomDomain = false) {
    const query = { siteName };
    if (isCustomDomain) {
      query.customDomain = siteName;
      query.isCustomDomainVerified = true;
    }
    const result = await this.execute({
      requestFn: () => classroomio.organization.$get({ query }),
      logContext: "fetching organization",
      onSuccess: (response) => {
        if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
          return;
        }
        orgs.set(response.data);
      }
    });
    return result?.data?.[0] ?? null;
  }
  /**
   * Creates a new organization with the current user as owner
   * @param fields Organization creation data (name, siteName)
   */
  async create(fields) {
    const result = ZCreateOrganization.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "organization");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.organization.$post({ json: result.data }),
      logContext: "creating organization",
      onSuccess: (response) => {
        if (!response.data) {
          return;
        }
        const { organization, organizations } = response.data;
        orgs.set(organizations.map((org) => mergeAccountOrgFromServer(org)));
        const createdOrg = organizations.find((org) => org.id === organization.id);
        if (createdOrg) {
          currentOrg.set(mergeAccountOrgFromServer(createdOrg));
        }
        snackbar.success("snackbar.success_update");
        goto(resolve(`/org/${organization.siteName}`, {}));
      },
      onError: (result2) => {
        if (typeof result2 === "string") {
          snackbar.error(result2);
          return;
        }
        if ("error" in result2 && "field" in result2) {
          this.errors[result2.field] = result2.error;
        } else if ("error" in result2) {
          this.errors.general = result2.error;
        }
      }
    });
  }
  /**
   * Updates an organization
   * @param orgId Organization ID
   * @param fields Organization update data (name, avatar, theme, landingpage)
   * @param options Options for the update operation
   * @param options.onSuccess Callback function to be called on success
   */
  async update(orgId, fields, options = {}) {
    const result = ZUpdateOrganization.safeParse(fields);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error, "organization");
      return;
    }
    this.isLoading = true;
    let avatarUrl;
    if (fields.avatar instanceof File) {
      avatarUrl = await uploadImage(fields.avatar);
    } else if (typeof fields.avatar === "string") {
      avatarUrl = fields.avatar;
    }
    fields.avatar = void 0;
    const updates = {
      ...fields,
      landingpage: fields.landingpage ?? void 0,
      avatarUrl
    };
    await this.execute({
      requestFn: () => classroomio.organization.$put({ json: updates }),
      logContext: "updating organization",
      onSuccess: (response) => {
        if (!response.data) {
          return;
        }
        if (options.onSuccess) {
          return options.onSuccess({
            name: response.data.name,
            avatarUrl: response.data.avatarUrl ?? void 0,
            theme: response.data.theme ?? void 0,
            landingpage: response.data.landingpage ?? void 0,
            siteName: response.data.siteName ?? void 0,
            customDomain: response.data.customDomain,
            isCustomDomainVerified: response.data.isCustomDomainVerified ?? void 0,
            customization: response.data.customization ?? void 0
          });
        }
        orgs.update((_orgs) => _orgs.map((org) => {
          if (org.id === orgId) {
            return mergeAccountOrgFromServer({ ...org, ...response.data });
          }
          return org;
        }));
        const currentOrgData = get(currentOrg);
        if (currentOrgData.id === orgId) {
          currentOrg.update((org) => mergeAccountOrgFromServer({ ...org, ...response.data }));
        }
        snackbar.success("snackbar.course_settings.success.update_successful");
        this.success = true;
        this.errors = {};
      },
      onError: (error) => {
        console.error("Error updating organization:", error);
        const message = error instanceof Error ? error.message : `${error}`;
        this.errors.general = message;
        snackbar.error(`${t.get("snackbar.update_failed")}: ${message}`);
      }
    });
  }
  /**
   * Invites team members to the organization
   *
   * @param emails Array of email addresses
   * @param roleId Role ID (ADMIN or TUTOR)
   */
  async inviteTeamMembers(emails, roleId) {
    return this.execute({
      requestFn: () => classroomio.organization.team.invite.$post({ json: { emails, roleId } }),
      logContext: "inviting team members",
      onSuccess: () => {
        this.getOrgTeam();
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
          return;
        }
        if ("error" in result && "field" in result) {
          this.errors[result.field] = result.error;
        }
      }
    });
  }
  /**
   * Removes a team member from the organization
   *
   * @param memberId Member ID to remove
   */
  async removeTeamMember(memberId) {
    return this.execute({
      requestFn: () => classroomio.organization.team[":memberId"].$delete({ param: { memberId: memberId.toString() } }),
      logContext: "removing team member",
      onSuccess: () => {
        this.getOrgTeam();
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
        }
      }
    });
  }
  /**
   * Sends a domain request (connect, refresh, or remove)
   * @param action Domain operation action
   * @param domain Domain name
   * @returns Domain request response data
   */
  async sendDomainRequest(action, domain) {
    return this.execute({
      requestFn: () => classroomio.domain.$post({ json: { action, domain } }),
      logContext: `processing domain request: ${action}`,
      onSuccess: () => {
        this.success = true;
        this.errors = {};
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
        }
      }
    });
  }
  /**
   * Imports users into the organization as students
   */
  async importAudienceMembers(data) {
    return this.execute({
      requestFn: () => classroomio.organization.audience.import.$post({ json: data }),
      logContext: "importing audience members",
      onSuccess: (response) => {
        const d = response.data;
        snackbar.success(t.get("audience.import.snackbar_success", {
          imported: d.imported,
          assigned: d.assigned ?? 0,
          pendingInvitesRenewed: d.pendingInvitesRenewed ?? 0,
          emailsSent: d.emailsSent
        }));
        this.success = true;
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
          return;
        }
        if ("error" in result && "field" in result) {
          this.errors[result.field] = result.error;
        }
      }
    });
  }
  /**
   * Assigns existing audience members to courses
   */
  async assignAudienceToCourses(data) {
    return this.execute({
      requestFn: () => classroomio.organization.audience["assign-courses"].$post({ json: data }),
      logContext: "assigning audience to courses",
      onSuccess: (response) => {
        const d = response.data;
        snackbar.success(t.get("audience.assign.snackbar_success", {
          assigned: d.assigned,
          alreadyEnrolled: d.alreadyEnrolled,
          emailsSent: d.emailsSent
        }));
        this.success = true;
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
          return;
        }
        if ("error" in result) {
          snackbar.error(result.error);
        }
      }
    });
  }
  async resendAudienceInvite(data) {
    return this.execute({
      requestFn: () => classroomio.organization.audience["resend-invite"].$post({ json: data }),
      logContext: "resending audience invite",
      onSuccess: (response) => {
        if (response.data.emailSent) {
          snackbar.success("audience.invite.resend_snackbar_success");
        } else {
          snackbar.error("audience.invite.resend_snackbar_email_failed");
        }
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
        }
      }
    });
  }
  async revokeAudienceInvite(data) {
    return this.execute({
      requestFn: () => classroomio.organization.audience["revoke-invite"].$post({ json: data }),
      logContext: "revoking audience invite",
      onSuccess: () => {
        snackbar.success("audience.invite.revoke_snackbar_success");
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
        }
      }
    });
  }
  async deleteAudienceMember(memberId) {
    return this.execute({
      requestFn: () => classroomio.organization.audience[":memberId"].$delete({ param: { memberId: memberId.toString() } }),
      logContext: "removing audience member",
      onSuccess: () => {
        snackbar.success("audience.delete.snackbar_success");
      },
      onError: (result) => {
        if (typeof result === "string") {
          snackbar.error(result);
          return;
        }
        snackbar.error("error" in result ? result.error : result.message);
      }
    });
  }
}
const orgApi = new OrgApi();

export { ROLES as R, ROLE_LABEL as a, orgApi as o };
//# sourceMappingURL=org.svelte-DOb0Hq6Y.js.map
