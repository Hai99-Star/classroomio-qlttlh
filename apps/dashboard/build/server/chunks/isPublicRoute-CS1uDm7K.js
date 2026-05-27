import { P as PUBLIC_API_ROUTES, a as PUBLIC_ROUTES } from './routes-B6DlDqVa.js';

const isPublicRoute = (route = "") => {
  return PUBLIC_ROUTES.some((publicRoute) => {
    const regex = new RegExp(publicRoute, "g");
    return regex.test(route);
  });
};
const isPublicApiRoute = (pathname = "") => {
  return PUBLIC_API_ROUTES.some((route) => pathname.includes(route));
};

export { isPublicRoute as a, isPublicApiRoute as i };
//# sourceMappingURL=isPublicRoute-CS1uDm7K.js.map
