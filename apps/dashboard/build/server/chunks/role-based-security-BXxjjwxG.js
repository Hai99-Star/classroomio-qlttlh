import { a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { p as profile } from './user-Ahqcoe6u.js';
import './index4-CY3O4yvX.js';
import './submission-CIIjGYOS.js';
import './translations-BxDrjLWK.js';
import { i as isOrgAdmin } from './org-t71AQfHV.js';
import './question-type-capabilities-B1VkdJbc.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import { c as courseApi } from './course.svelte-DAbi1vVF.js';
import './domains-D9J1UytB.js';

function Role_based_security($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      allowedRoles = [],
      onDenied = () => {
      },
      onlyStudent = false,
      children
    } = $$props;
    const userRole = (() => {
      const user = courseApi.group.people.find((person) => person.profileId === store_get($$store_subs ??= {}, "$profile", profile).id);
      return user ? Number(user.roleId) : null;
    })();
    const show = (() => {
      if (onlyStudent) {
        return isAllowed(userRole);
      } else {
        return isAllowed(userRole) || !!store_get($$store_subs ??= {}, "$isOrgAdmin", isOrgAdmin);
      }
    })();
    function isAllowed(userRole2) {
      if (userRole2 === null) return false;
      return allowedRoles.includes(userRole2);
    }
    if (show) {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Role_based_security as R };
//# sourceMappingURL=role-based-security-BXxjjwxG.js.map
