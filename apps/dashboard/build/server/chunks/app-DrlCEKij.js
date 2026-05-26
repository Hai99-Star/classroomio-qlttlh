import { b as currentOrgPath, R as ROLE, c as currentOrg } from './org-BIDTy0Q0.js';
import { d as derived, w as writable } from './index-AIbsv2Pd.js';
import './content-BYLGOVzm.js';

const globalStore = writable({
  isDark: false,
  isOrgSite: false,
  orgSiteName: ""
});
const isOrgStudent = derived(currentOrg, ($currentOrg) => {
  if ($currentOrg.roleId === 0) return null;
  return $currentOrg.roleId === ROLE.STUDENT;
});
const isStudentExperience = derived([globalStore, isOrgStudent], ([$gs, $isStudent]) => {
  return $isStudent ?? false;
});
const basePath = derived(
  [isStudentExperience, currentOrgPath],
  ([$isStudent, $orgPath]) => $isStudent ? "/lms" : $orgPath
);

export { isOrgStudent as a, basePath as b, globalStore as g, isStudentExperience as i };
//# sourceMappingURL=app-DrlCEKij.js.map
