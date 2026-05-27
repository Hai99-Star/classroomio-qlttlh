import { g as get } from './index-AIbsv2Pd.js';
import { c as classroomio } from './index4-3F2xRc80.js';
import { c as currentOrg } from './org-BIDTy0Q0.js';
import { i as isStudentExperience } from './app-DrlCEKij.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { t } from './translations-BxDrjLWK.js';
import { B as BaseApiWithErrors } from './base.svelte-Bx8dlk4A.js';

class ProgramApi extends BaseApiWithErrors {
  programs = [];
  program = null;
  members = [];
  courses = [];
  newsfeed = null;
  isProgramShellLoading = false;
  currentProgramId = null;
  loadedProgramId = null;
  loadedMembersProgramId = null;
  loadedCoursesProgramId = null;
  loadedCoursesStudentExperience = null;
  loadedNewsfeedProgramId = null;
  syncProgramCourseCount(programId, courseCount) {
    this.programs = this.programs.map((program) => program.id === programId ? { ...program, courseCount } : program);
  }
  async listPrograms() {
    const org = get(currentOrg);
    if (!org.id) return;
    await this.execute({
      requestFn: () => classroomio.program.$get({ query: { organizationId: org.id } }),
      onSuccess: (data) => {
        this.programs = data.data;
      },
      logContext: "listPrograms"
    });
  }
  async getProgram(programId, force = false) {
    if (!force && this.loadedProgramId === programId) return;
    await this.execute({
      requestFn: () => classroomio.program[":programId"].$get({ param: { programId } }),
      onSuccess: (data) => {
        this.program = data.data;
        this.loadedProgramId = programId;
      },
      logContext: "getProgram"
    });
  }
  resetProgramShell(programId) {
    this.currentProgramId = programId ?? null;
    this.program = null;
    this.members = [];
    this.courses = [];
    this.newsfeed = null;
    this.loadedProgramId = null;
    this.loadedMembersProgramId = null;
    this.loadedCoursesProgramId = null;
    this.loadedCoursesStudentExperience = null;
    this.loadedNewsfeedProgramId = null;
  }
  async ensureProgramShell(programId, force = false) {
    const studentExperience = get(isStudentExperience);
    const isShellReady = this.loadedProgramId === programId && this.loadedMembersProgramId === programId && this.loadedCoursesProgramId === programId && this.loadedCoursesStudentExperience === studentExperience;
    if (!force && isShellReady) {
      return;
    }
    const isProgramChanged = this.currentProgramId !== programId;
    if (force || isProgramChanged) {
      this.resetProgramShell(programId);
    }
    this.currentProgramId = programId;
    this.isProgramShellLoading = true;
    try {
      await Promise.all([
        this.getProgram(programId, force),
        this.listMembers(programId, force),
        this.listCourses(programId, force)
      ]);
    } finally {
      this.isProgramShellLoading = false;
    }
  }
  async createProgram(data) {
    const org = get(currentOrg);
    if (!org.id) return;
    await this.execute({
      requestFn: () => classroomio.program.$post({ json: { ...data, organizationId: org.id } }),
      onSuccess: (res) => {
        this.programs = [res.data, ...this.programs];
        snackbar.success(t.get("programs.create_success") || "Program created");
      },
      logContext: "createProgram"
    });
  }
  async updateProgram(programId, data) {
    await this.execute({
      requestFn: () => classroomio.program[":programId"].$put({ param: { programId }, json: data }),
      onSuccess: (res) => {
        this.program = res.data;
        this.programs = this.programs.map((p) => p.id === programId ? { ...p, ...res.data } : p);
        snackbar.success(t.get("programs.update_success") || "Program updated");
      },
      onError: (result) => {
        const message = typeof result === "string" ? result : result.error;
        snackbar.error(message || "Failed to update program");
      },
      logContext: "updateProgram"
    });
  }
  async deleteProgram(programId) {
    await this.execute({
      requestFn: () => classroomio.program[":programId"].$delete({ param: { programId } }),
      onSuccess: () => {
        this.programs = this.programs.filter((p) => p.id !== programId);
        snackbar.success(t.get("programs.delete_success") || "Program deleted");
      },
      logContext: "deleteProgram"
    });
  }
  // Members
  async listMembers(programId, force = false) {
    if (!force && this.loadedMembersProgramId === programId) return;
    await this.execute({
      requestFn: () => classroomio.program[":programId"].members.$get({ param: { programId } }),
      onSuccess: (data) => {
        this.members = data.data;
        this.loadedMembersProgramId = programId;
      },
      logContext: "listProgramMembers"
    });
  }
  async addMembers(programId, data) {
    await this.execute({
      requestFn: () => classroomio.program[":programId"].members.$post({ param: { programId }, json: data }),
      onSuccess: async () => {
        await this.listMembers(programId, true);
        snackbar.success(t.get("programs.members_added") || "Members added");
      },
      logContext: "addProgramMembers"
    });
  }
  async updateMember(programId, memberId, data) {
    await this.execute({
      requestFn: () => classroomio.program[":programId"].members[":memberId"].$put({ param: { programId, memberId }, json: data }),
      onSuccess: (res) => {
        this.members = this.members.map((m) => m.id === memberId ? { ...m, ...res.data } : m);
      },
      logContext: "updateProgramMember"
    });
  }
  async removeMember(programId, memberId) {
    await this.execute({
      requestFn: () => classroomio.program[":programId"].members[":memberId"].$delete({ param: { programId, memberId } }),
      onSuccess: () => {
        this.members = this.members.filter((m) => m.id !== memberId);
        snackbar.success(t.get("programs.member_removed") || "Member removed");
      },
      logContext: "removeProgramMember"
    });
  }
  // Courses
  async listCourses(programId, force = false) {
    const studentExperience = get(isStudentExperience);
    if (!force && this.loadedCoursesProgramId === programId && this.loadedCoursesStudentExperience === studentExperience) {
      return;
    }
    await this.execute({
      requestFn: () => classroomio.program[":programId"].courses.$get({ param: { programId } }),
      onSuccess: (data) => {
        this.courses = data.data;
        this.syncProgramCourseCount(programId, data.data.length);
        this.loadedCoursesProgramId = programId;
        this.loadedCoursesStudentExperience = studentExperience;
      },
      logContext: "listProgramCourses"
    });
  }
  async addCourse(programId, data) {
    await this.execute({
      requestFn: () => classroomio.program[":programId"].courses.$post({ param: { programId }, json: data }),
      onSuccess: async () => {
        await this.listCourses(programId, true);
        this.syncProgramCourseCount(programId, this.courses.length);
        snackbar.success(t.get("programs.course_added") || "Course added");
      },
      logContext: "addCourseToProgram"
    });
  }
  async addCourses(programId, courseIds) {
    if (courseIds.length === 0) {
      return false;
    }
    this.isLoading = true;
    this.error = null;
    this.success = false;
    try {
      for (const courseId of courseIds) {
        const response = await classroomio.program[":programId"].courses.$post({ param: { programId }, json: { courseId } });
        const result = await response.json();
        if (!result.success) {
          this.error = result.error ?? "Failed to add course to program";
          return false;
        }
      }
      await this.listCourses(programId, true);
      this.syncProgramCourseCount(programId, this.courses.length);
      const successMessage = courseIds.length === 1 ? t.get("programs.course_added") || "Course added" : t.get("programs.multiple_added") || "Courses added";
      snackbar.success(successMessage);
      this.success = true;
      return true;
    } catch (error) {
      console.error("Error in addCoursesToProgram:", error);
      this.error = error instanceof Error ? error.message : "Failed to add courses to program";
      return false;
    } finally {
      this.isLoading = false;
    }
  }
  async removeCourse(programId, courseId) {
    await this.execute({
      requestFn: () => classroomio.program[":programId"].courses[":courseId"].$delete({ param: { programId, courseId } }),
      onSuccess: () => {
        this.courses = this.courses.filter((c) => c.courseId !== courseId);
        this.syncProgramCourseCount(programId, this.courses.length);
        snackbar.success(t.get("programs.course_removed") || "Course removed");
      },
      logContext: "removeCourseFromProgram"
    });
  }
  // Invitations (program-scoped)
  /**
   * Invite new students to a program by CSV. Goes through the program-scoped
   * endpoint so a Program ADMIN/TUTOR can invite without org-admin rights.
   * Returns whether the call succeeded so callers can refresh their lists.
   */
  async inviteStudentsToProgram(programId, data) {
    let ok = false;
    await this.execute({
      requestFn: () => classroomio.program[":programId"].invite.$post({ param: { programId }, json: data }),
      onSuccess: async () => {
        await this.listMembers(programId, true);
        snackbar.success(t.get("programs.invite_sent") || "Invites sent");
        ok = true;
      },
      logContext: "inviteStudentsToProgram"
    });
    return ok;
  }
  /**
   * Assign existing org audience student profiles to this program.
   * Same scoping as `inviteStudentsToProgram` — caller only needs program-team
   * membership for this program.
   */
  async assignExistingStudentsToProgram(programId, data) {
    let ok = false;
    await this.execute({
      requestFn: () => classroomio.program[":programId"].invite.assign.$post({ param: { programId }, json: data }),
      onSuccess: async () => {
        await this.listMembers(programId, true);
        snackbar.success(t.get("programs.members_added") || "Members added");
        ok = true;
      },
      logContext: "assignExistingStudentsToProgram"
    });
    return ok;
  }
  // Newsfeed
  async listNewsfeed(programId, force = false, cursor) {
    if (!force && this.loadedNewsfeedProgramId === programId) return;
    await this.execute({
      requestFn: () => classroomio.program[":programId"].newsfeed.$get({
        param: { programId },
        query: { limit: "10", ...cursor ? { cursor } : {} }
      }),
      onSuccess: (data) => {
        this.newsfeed = data.data;
        this.loadedNewsfeedProgramId = programId;
      },
      logContext: "listProgramNewsfeed"
    });
  }
  // LMS — enrolled programs
  async listEnrolledPrograms() {
    await this.execute({
      requestFn: () => classroomio.program.enrolled.$get({}),
      onSuccess: (data) => {
        this.programs = data.data;
      },
      logContext: "listEnrolledPrograms"
    });
  }
}
const programApi = new ProgramApi();

export { programApi as p };
//# sourceMappingURL=program.svelte-DarRiqGl.js.map
