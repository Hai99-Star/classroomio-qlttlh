import { w as writable, d as derived } from './index-AIbsv2Pd.js';
import merge from 'lodash/merge.js';
import { T as TENANT_ROOT_DOMAIN } from './domains-D9J1UytB.js';

const PLAN = {
  BASIC: "BASIC",
  EARLY_ADOPTER: "EARLY_ADOPTER",
  ENTERPRISE: "ENTERPRISE"
};
const PLAN_NAMES = {
  [PLAN.BASIC]: "Free",
  [PLAN.EARLY_ADOPTER]: "Early Adopter",
  [PLAN.ENTERPRISE]: "Enterprise"
};
const PUBLIC_IS_SELFHOSTED = "false";
const ROLE = {
  ADMIN: 1,
  TUTOR: 2,
  STUDENT: 3
};
const themeImages = {
  standard: {
    card: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/standard-quiz-card.svg",
    editor: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/standard-quiz-editor.svg",
    play: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/standard-quiz-play.svg"
  },
  mainland: {
    card: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/mainstream-quiz-card.svg",
    editor: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/mainstream-quiz-editor.svg",
    play: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/mainstream-quiz-play.svg"
  }
};
const optionImage = {
  circle: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/circle.svg",
  spade: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/spade.svg",
  square: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/square.svg",
  pentagon: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/pentagon.svg",
  hexagon: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/hexagon.svg",
  triangle: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/triangle.svg"
};
const allOptions = [
  {
    id: "circle",
    label: "",
    isCorrect: false
  },
  {
    id: "triangle",
    label: "",
    isCorrect: false
  },
  {
    id: "spade",
    label: "",
    isCorrect: false
  },
  {
    id: "square",
    label: "",
    isCorrect: false
  },
  {
    id: "pentagon",
    label: "",
    isCorrect: false
  },
  {
    id: "hexagon",
    label: "",
    isCorrect: false
  }
];
const booleanOptions = [
  {
    id: "triangle",
    label: "True",
    image: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/triangle.svg"
  },
  {
    id: "square",
    label: "False",
    image: "https://pgrest.classroomio.com/storage/v1/object/public/avatars/quizes/square.svg"
  }
];
const allThemes = [
  {
    id: "standard",
    label: "Standard"
  },
  {
    id: "mainland",
    label: "Mainland Bridge"
  }
];
({
  id: (/* @__PURE__ */ new Date()).getTime()
});
const DEFAULT_ORG_CUSTOMIZATION = {
  apps: { poll: true, comments: true },
  course: { grading: true, newsfeed: true },
  dashboard: { exercise: true, community: true, bannerText: "", bannerImage: "" },
  auth: { backgroundImage: "" }
};
function mergeAccountOrgFromServer(org) {
  return {
    ...org,
    customization: merge({}, DEFAULT_ORG_CUSTOMIZATION, org.customization ?? {})
  };
}
const orgs = writable([]);
const currentOrg = writable({
  avatarUrl: "",
  createdAt: "",
  customCode: "",
  customDomain: "",
  customization: {
    ...DEFAULT_ORG_CUSTOMIZATION
  },
  disableEmailPassword: false,
  disableGoogleAuth: false,
  disableSignup: false,
  disableSignupMessage: "",
  favicon: "",
  id: "",
  isCustomDomainVerified: false,
  isRestricted: false,
  landingpage: {},
  name: "",
  parentOrganizationId: null,
  plans: [],
  readOnlyUntil: null,
  roleId: 0,
  settings: {},
  siteName: "",
  theme: ""
});
const isSecondaryWorkspace = derived(currentOrg, ($currentOrg) => Boolean($currentOrg.parentOrganizationId));
const isPrimaryWorkspace = derived(
  currentOrg,
  ($currentOrg) => Boolean($currentOrg.id) && !$currentOrg.parentOrganizationId
);
const isOrgAdmin = derived(currentOrg, ($currentOrg) => {
  if ($currentOrg.roleId === 0) return null;
  return $currentOrg.roleId === ROLE.ADMIN;
});
const getActivePlan = (org) => {
  return org.plans.find((p) => p.isActive);
};
const currentOrgPlan = derived(currentOrg, ($currentOrg) => getActivePlan($currentOrg));
const currentOrgPath = derived(
  currentOrg,
  ($currentOrg) => $currentOrg.siteName ? `/org/${$currentOrg.siteName}` : "#"
);
const currentOrgDomain = derived(currentOrg, ($currentOrg) => {
  return $currentOrg.customDomain && $currentOrg.isCustomDomainVerified ? `https://${$currentOrg.customDomain}` : $currentOrg.siteName ? `https://${$currentOrg.siteName}.${TENANT_ROOT_DOMAIN}` : "";
});
const isFreePlan = derived(currentOrg, ($currentOrg) => {
  if (!$currentOrg.id || PUBLIC_IS_SELFHOSTED === "true") return false;
  const plan = getActivePlan($currentOrg);
  return !plan || plan.planName === PLAN.BASIC;
});
const isEnterprisePlan = derived(currentOrg, ($currentOrg) => {
  const plan = getActivePlan($currentOrg);
  return plan?.planName === PLAN.ENTERPRISE;
});
const currentOrgMaxAudience = derived(
  currentOrgPlan,
  ($plan) => !$plan ? 20 : $plan.planName === PLAN.EARLY_ADOPTER ? 1e4 : $plan.planName === PLAN.ENTERPRISE ? Number.MAX_SAFE_INTEGER : 20
);
const createQuizModal = writable({
  open: false,
  openEdit: false,
  title: "",
  id: null
});
const deleteModal = writable({
  id: null,
  open: false,
  isQuestion: false
});
const quizStore = writable({
  uuid: "",
  title: "",
  questions: [],
  timelimit: "10s",
  theme: "standard",
  pin: ""
});

export { PUBLIC_IS_SELFHOSTED as P, ROLE as R, PLAN as a, currentOrgPath as b, currentOrg as c, isFreePlan as d, currentOrgDomain as e, PLAN_NAMES as f, isEnterprisePlan as g, currentOrgPlan as h, isOrgAdmin as i, currentOrgMaxAudience as j, createQuizModal as k, deleteModal as l, mergeAccountOrgFromServer as m, allOptions as n, orgs as o, allThemes as p, quizStore as q, optionImage as r, booleanOptions as s, themeImages as t, isSecondaryWorkspace as u, isPrimaryWorkspace as v };
//# sourceMappingURL=org-t71AQfHV.js.map
