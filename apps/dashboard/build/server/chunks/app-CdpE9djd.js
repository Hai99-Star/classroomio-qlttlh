import { b as currentOrgPath, R as ROLE, c as currentOrg } from './org-t71AQfHV.js';
import { d as derived, w as writable } from './index-AIbsv2Pd.js';
import './domains-D9J1UytB.js';

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
  return $gs.isOrgSite;
});
const basePath = derived(
  [isStudentExperience, currentOrgPath],
  ([$isStudent, $orgPath]) => $isStudent ? "/lms" : $orgPath
);

export { isOrgStudent as a, basePath as b, globalStore as g, isStudentExperience as i };
//# sourceMappingURL=app-CdpE9djd.js.map
