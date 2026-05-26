import { w as writable } from './index-AIbsv2Pd.js';

const defaultUserState = {
  openAuthModal: false,
  fetchingUser: true,
  isLoggedIn: false,
  currentSession: void 0,
  expiresAt: 0
};
const defaultProfileState = {
  id: "",
  fullname: "",
  avatarUrl: "",
  username: "",
  email: null,
  role: null,
  goal: null,
  source: null,
  telegramChatId: null,
  locale: "en",
  isEmailVerified: false,
  verifiedAt: null,
  canAddCourse: true,
  isRestricted: false,
  createdAt: "",
  updatedAt: "",
  metadata: null
};
const user = writable(defaultUserState);
const profile = writable(defaultProfileState);

export { defaultProfileState as a, defaultUserState as d, profile as p, user as u };
//# sourceMappingURL=user-Ahqcoe6u.js.map
