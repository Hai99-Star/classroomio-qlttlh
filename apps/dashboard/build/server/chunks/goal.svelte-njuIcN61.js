import { g as get } from './index-AIbsv2Pd.js';
import { c as classroomio } from './index4-DxtvI9Cx.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { t } from './translations-BxDrjLWK.js';
import { c as currentOrg } from './org-BIDTy0Q0.js';
import { B as BaseApiWithErrors } from './base.svelte-C2lk8LDX.js';

class ProgramGoalApi extends BaseApiWithErrors {
  goalsByProgramId = {};
  myGoals = [];
  overviewRows = [];
  loadedProgramId = null;
  goalsFor(programId) {
    return this.goalsByProgramId[programId] ?? [];
  }
  async listGoals(programId, force = false) {
    if (!force && this.goalsByProgramId[programId] && this.loadedProgramId === programId) return;
    await this.execute({
      requestFn: () => classroomio.program[":programId"].goals.$get({ param: { programId } }),
      onSuccess: (res) => {
        this.goalsByProgramId = { ...this.goalsByProgramId, [programId]: res.data };
        this.loadedProgramId = programId;
      },
      logContext: "listProgramGoals"
    });
  }
  async createGoal(programId, data) {
    let ok = false;
    await this.execute({
      requestFn: () => classroomio.program[":programId"].goals.$post({ param: { programId }, json: data }),
      onSuccess: async () => {
        await this.listGoals(programId, true);
        snackbar.success(t.get("programs.goals.created") || "Goal created");
        ok = true;
      },
      logContext: "createProgramGoal"
    });
    return ok;
  }
  async updateGoal(programId, goalId, data) {
    let ok = false;
    await this.execute({
      requestFn: () => classroomio.program[":programId"].goals[":goalId"].$put({ param: { programId, goalId }, json: data }),
      onSuccess: async () => {
        await this.listGoals(programId, true);
        snackbar.success(t.get("programs.goals.updated") || "Goal updated");
        ok = true;
      },
      logContext: "updateProgramGoal"
    });
    return ok;
  }
  async deleteGoal(programId, goalId) {
    let ok = false;
    await this.execute({
      requestFn: () => classroomio.program[":programId"].goals[":goalId"].$delete({ param: { programId, goalId } }),
      onSuccess: async () => {
        await this.listGoals(programId, true);
        snackbar.success(t.get("programs.goals.deleted") || "Goal deleted");
        ok = true;
      },
      logContext: "deleteProgramGoal"
    });
    return ok;
  }
  async evaluateGoal(programId, goalId) {
    let ok = false;
    await this.execute({
      requestFn: () => classroomio.program[":programId"].goals[":goalId"].evaluate.$post({ param: { programId, goalId } }),
      onSuccess: async () => {
        await this.listGoals(programId, true);
        ok = true;
      },
      logContext: "evaluateProgramGoal"
    });
    return ok;
  }
  async listMyGoals() {
    await this.execute({
      requestFn: () => classroomio.program.my.goals.$get({}),
      onSuccess: (res) => {
        this.myGoals = res.data;
      },
      logContext: "listMyGoals"
    });
  }
  async listOverview() {
    const org = get(currentOrg);
    if (!org.id) return;
    await this.execute({
      requestFn: () => classroomio.program.goals.overview.$get({ query: { organizationId: org.id } }),
      onSuccess: (res) => {
        this.overviewRows = res.data.goals;
      },
      logContext: "listGoalsOverview"
    });
  }
}
const programGoalApi = new ProgramGoalApi();

export { programGoalApi as p };
//# sourceMappingURL=goal.svelte-njuIcN61.js.map
