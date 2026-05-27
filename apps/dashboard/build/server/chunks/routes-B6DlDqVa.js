const ROUTE = {
  HOME: "/",
  COURSES: "/courses",
  PAGES: "/pages",
  COURSE: "/course",
  LOGIN: "/login",
  SIGN_UP: "/signup",
  INVITE: "/invite",
  FORGOT: "/forgot",
  RESET: "/reset",
  LOGOUT: "/logout",
  AUTH_FAILED: "/auth-failed",
  VERIFY_EMAIL_ERROR: "/verify-email-error"
};
const PUBLIC_ROUTES = [
  `^${ROUTE.HOME}$`,
  ROUTE.LOGIN,
  ROUTE.LOGOUT,
  ROUTE.SIGN_UP,
  `^${ROUTE.INVITE}/.*`,
  ROUTE.FORGOT,
  ROUTE.RESET,
  `^${ROUTE.PAGES}/.*`,
  `^${ROUTE.COURSE}/[^/]+(/enroll)?/?$`,
  `^${ROUTE.COURSE}/[^/]+/lesson/.*`,
  `^${ROUTE.COURSES}/?$`,
  "/404",
  `^${ROUTE.VERIFY_EMAIL_ERROR}$`,
  ROUTE.AUTH_FAILED,
  "^/csp-report$"
];
const PUBLIC_API_ROUTES = ["/api/polar", "/api/lmz", "/api/verify", "/api/auth", "/proxy"];

export { PUBLIC_API_ROUTES as P, ROUTE as R, PUBLIC_ROUTES as a };
//# sourceMappingURL=routes-B6DlDqVa.js.map
