import { a as store_get, h as head, u as unsubscribe_stores, n as escape_html, b as spread_props } from './index2-Eg0dVEDW.js';
import { r as resolve } from './server3-VLoL706W.js';
import { g as get } from './index-AIbsv2Pd.js';
import { c as classroomio, e as dev } from './index4-DxtvI9Cx.js';
import { o as orgs, m as mergeAccountOrgFromServer, c as currentOrg } from './org-BIDTy0Q0.js';
import { u as user, p as profile, d as defaultUserState, a as defaultProfileState } from './user-Ahqcoe6u.js';
import { a as authClient } from './client-Bi-QreUE.js';
import { g as goto } from './client2-CqohmrW2.js';
import { t, h as handleLocaleChange } from './translations-BxDrjLWK.js';
import { i as identifyPosthogUser, c as capturePosthogEvent, a as initPosthog } from './index16-Bj79zRdC.js';
import { a as isOrgStudent, b as basePath } from './app-DrlCEKij.js';
import { a as isPublicRoute } from './isPublicRoute-DDGeAA80.js';
import { l as licenseApi } from './license.svelte-Cw7yPjRa.js';
import * as Sentry from '@sentry/sveltekit';
import { p as public_env } from './shared-server-DaWdgxVh.js';
import posthog from 'posthog-js';
import { p as page } from './index5-nlVlCL1t.js';
import { lighten, darken } from 'color2k';
import { a as BaseApi } from './base.svelte-C2lk8LDX.js';
import { S as Spinner, B as Button } from './button-McsHA0hU.js';
import { E as Empty, S as Simple_logo_nav } from './empty-BlKxfDG3.js';
import { b as buildOrgLandingPageProps, n as normalizeLandingPageSettings } from './landing-page-1a54p-PE.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import './utils2-DPSDgWhA.js';
import './routing-Cz2vwfLK.js';
import './event-ByDKS2H7.js';
import './content-BYLGOVzm.js';
import 'lodash/merge.js';
import './index15-B_EOCZVP.js';
import '@better-auth/sso/client';
import './exports-DiyTWREe.js';
import '@sveltekit-i18n/parser-icu';
import './routes-DaVXfsS2.js';
import './constants-C43vhkR3.js';
import './client3-CP3T_KrU.js';
import 'zod/v4';
import './index6-DijlZyMe.js';
import './index14-HMlD0kYH.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './empty-media-ClSn1CG9.js';
import './rocket-Dn-EQ87F.js';
import './video-A1V3FGdB.js';
import './circle-question-mark-DkJv7M1I.js';

function tc(tryFunc, catchFunc) {
  let val;
  try {
    val = tryFunc();
  } catch (e) {
    if (typeof catchFunc === "function") {
      val = catchFunc(e);
    } else {
      val = catchFunc;
    }
  }
  return val;
}
function setTheme(theme = "") {
  localStorage.setItem("theme", theme);
  if (theme?.includes("#")) {
    const escapedHex = theme.replace(/"/g, '\\"');
    document.body.setAttribute("data-theme", escapedHex);
    injectCustomTheme(escapedHex);
  } else {
    document.body.setAttribute("data-theme", theme);
  }
}
const _lighten = (hex, no) => tc(() => lighten(hex, no), hex);
const _darken = (hex, no) => tc(() => darken(hex, no), hex);
function injectCustomTheme(hex) {
  const shades = {
    50: _lighten(hex, 0.7),
    100: _lighten(hex, 0.6),
    200: _lighten(hex, 0.5),
    300: _lighten(hex, 0.4),
    400: _lighten(hex, 0.3),
    500: _lighten(hex, 0.2),
    600: _lighten(hex, 0.1),
    700: hex,
    800: _darken(hex, 0.1),
    900: _darken(hex, 0.2)
  };
  const styleContent = `
    body[data-theme="${hex}"] {
      --primary: ${shades[700]};
      --primary-foreground: ${shades[50]};
      --ring: ${shades[400]};
      --chart-1: ${shades[300]};
      --chart-2: ${shades[500]};
      --chart-3: ${shades[600]};
      --chart-4: ${shades[700]};
      --chart-5: ${shades[800]};
      --sidebar-primary: ${shades[700]};
      --sidebar-primary-foreground: ${shades[50]};
      --sidebar-accent: ${shades[50]};
      --sidebar-accent-foreground: ${shades[700]};
      --sidebar-ring: ${shades[400]};
    }

    body.dark[data-theme="${hex}"],
    html.dark body[data-theme="${hex}"] {
      --primary: ${shades[500]};
      --primary-foreground: ${shades[50]};
      --ring: ${shades[900]};
      --sidebar-primary: ${shades[500]};
      --sidebar-primary-foreground: ${shades[50]};
      --sidebar-accent: oklch(0.268 0.007 34.298);
      --sidebar-accent-foreground: ${shades[500]};
      --sidebar-ring: ${shades[900]};
    }
  `;
  const styleElement = document.createElement("style");
  styleElement.innerHTML = styleContent;
  document.head.appendChild(styleElement);
}
const isEnabled = () => Boolean(public_env.PUBLIC_SENTRY_DSN?.trim()) && !dev && public_env.PUBLIC_IS_SELFHOSTED !== "true";
const setSentryUser = (user2) => {
  if (!isEnabled()) return;
  Sentry.setUser({
    id: user2.id,
    ...user2.email && { email: user2.email },
    ...user2.username && { username: user2.username },
    ...user2.fullname && { fullname: user2.fullname }
  });
};
const clearSentryUser = () => {
  if (!isEnabled()) return;
  Sentry.setUser(null);
};
async function logout(redirect = true) {
  const { error } = await authClient.signOut();
  if (error) {
    console.error("Error logging out: ", error);
  }
  appInitApi.reset();
  capturePosthogEvent("user_logged_out");
  posthog.reset();
  clearSentryUser();
  if (redirect) {
    goto(resolve("/login", {}));
  }
}
const UMAMI_WEBSITE_ID = "80a9544a-4dda-4c91-b62f-b6be7a8a3b5c";
const initUmami = () => {
  if (licenseApi.hasAccess("no-tracking")) return;
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://umami.hz.oncws.com/script.js";
  script.dataset.websiteId = UMAMI_WEBSITE_ID;
  const nonce = document.querySelector("script[nonce]")?.getAttribute("nonce");
  if (nonce) script.setAttribute("nonce", nonce);
  document.head.appendChild(script);
};
let isInitialized = false;
function setupAnalytics(user2) {
  if (isInitialized) return;
  isInitialized = true;
  initPosthog(user2);
  initUmami();
}
function setupAnalyticsBasedOnLicense(user2) {
  if (licenseApi.hasAccess("no-tracking")) {
    return;
  }
  setupAnalytics(user2);
}
const shouldRedirectOnAuth = (path) => {
  return ["login", "signup", "onboarding"].some((r) => path.includes(r)) || path === "/";
};
class AppInitApi extends BaseApi {
  data = null;
  session = null;
  get loading() {
    return this.isLoading;
  }
  async setupApp(locals, params) {
    if (!locals.user) {
      if (!params.isOrgSite) {
        goto(resolve("/login", {}));
        return false;
      }
      console.log("No user found in locals");
      return;
    }
    this.session = locals;
    if (params.isOrgSite && params.orgId) {
      await this.autoEnrollOnTenantSite(params.orgId);
    }
    await this.execute({
      requestFn: () => classroomio.account.$get(),
      logContext: "fetching account",
      onSuccess: (data) => {
        this.data = data;
        licenseApi.setFeatures(data.licenseFeatures);
        setupAnalyticsBasedOnLicense(data.profile?.id ? {
          id: data.profile.id,
          email: data.profile.email,
          name: data.profile.fullname
        } : void 0);
        this.setupStores(params);
        this.setUserAnalytics();
        this.routeUserToNextPage(params);
      },
      onError: () => {
        logout();
      }
    });
  }
  async autoEnrollOnTenantSite(orgId) {
    try {
      const response = await classroomio.organization["auto-enroll-student"].$post({}, { headers: { "cio-org-id": orgId } });
      if (!response.ok) {
        console.warn("auto-enroll-student failed", response.status, await response.text().catch(() => ""));
        return;
      }
      await authClient.getSession({ query: { disableCookieCache: true } });
    } catch (error) {
      console.warn("auto-enroll-student threw", error);
    }
  }
  /*
    1. Update user store
    2. Update profile store
    3. Update organizations store
  */
  setupStores(params) {
    if (!this.data?.success || !this.session) {
      return;
    }
    user.update((_user) => ({
      ..._user,
      fetchingUser: false,
      isLoggedIn: true,
      currentSession: this.session?.user || void 0
    }));
    profile.set(this.data.profile);
    handleLocaleChange(this.data.profile.locale ?? "en");
    this.setOrgStore(params);
  }
  setOrgStore(params) {
    if (!this.data?.success || !this.data) {
      return;
    }
    if (!this.data.organizations.length) {
      return;
    }
    orgs.set(this.data.organizations.map((org) => mergeAccountOrgFromServer(org)));
    let nextOrg;
    if (params?.isOrgSite && params.orgSiteName) {
      nextOrg = this.data.organizations.find((org) => org.siteName === params.orgSiteName);
    }
    if (!nextOrg) {
      const lastOrgSiteName = localStorage.getItem("classroomio_org_sitename");
      nextOrg = this.data.organizations.find((org) => org.siteName === lastOrgSiteName) ?? this.data.organizations[0];
    }
    currentOrg.set(mergeAccountOrgFromServer(nextOrg));
    const theme = get(currentOrg)?.theme;
    setTheme(theme || "blue");
  }
  routeUserToNextPage({ isOrgSite }) {
    console.log("routeUserToNextPage", window.location.pathname);
    if (!this.data?.success) {
      return;
    }
    const redirect = page.url.searchParams.get("redirect");
    if (redirect) {
      console.log("redirecting to", redirect);
      window.location.href = redirect;
      return;
    }
    const path = window.location.pathname;
    if (isPublicRoute(path) && (path !== "/" || isOrgSite)) {
      console.log("no redirect is needed");
      return;
    }
    const isStudent = get(isOrgStudent);
    const userHasOrganizations = this.data.organizations.length > 0;
    {
      if (!userHasOrganizations) {
        console.log("self-hosted: redirecting to onboarding");
        return goto(resolve(`/onboarding`, {}));
      }
    }
    if (!shouldRedirectOnAuth(page.url.pathname)) return;
    const shouldGoToLMS = !!isStudent;
    console.log("redirecting to", shouldGoToLMS ? "lms" : "org");
    return shouldGoToLMS ? this.goToLMS() : this.goToOrg();
  }
  goToLMS() {
    goto(resolve("/lms", {}));
  }
  goToOrg() {
    const selectedOrg = get(currentOrg);
    goto(resolve(`/org/${selectedOrg.siteName}`, {}));
  }
  setUserAnalytics() {
    const profileStore = get(profile);
    if (!profileStore?.id) return;
    setSentryUser({
      id: profileStore.id,
      username: profileStore.username,
      email: profileStore.email,
      fullname: profileStore.fullname
    });
    identifyPosthogUser(profileStore.id, { email: profileStore.email, name: profileStore.fullname });
  }
  reset() {
    super.reset();
    this.data = null;
    licenseApi.reset();
    user.set(defaultUserState);
    profile.set(defaultProfileState);
  }
  get isInitializedAndReady() {
    return !this.isLoading && !this.error && this.data !== null;
  }
}
const appInitApi = new AppInitApi();
function Frown($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["circle", { "cx": "12", "cy": "12", "r": "10" }],
      ["path", { "d": "M16 16s-1.5-2-4-2-4 2-4 2" }],
      ["line", { "x1": "9", "x2": "9.01", "y1": "9", "y2": "9" }],
      ["line", { "x1": "15", "x2": "15.01", "y1": "9", "y2": "9" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "frown" },
      /**
       * @component @name Frown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTYgMTZzLTEuNS0yLTQtMi00IDItNCAyIiAvPgogIDxsaW5lIHgxPSI5IiB4Mj0iOS4wMSIgeTE9IjkiIHkyPSI5IiAvPgogIDxsaW5lIHgxPSIxNSIgeDI9IjE1LjAxIiB5MT0iOSIgeTI9IjkiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/frown
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const hasSetupError = !appInitApi.loading && !!appInitApi.error;
    const pageTitle = data.isOrgSite && data.org ? data.org.name : "ClassroomIO - The Course Platform That's Actually Easy To Use";
    const authAction = store_get($$store_subs ??= {}, "$user", user).isLoggedIn ? {
      label: t.get(store_get($$store_subs ??= {}, "$basePath", basePath) === "/lms" || store_get($$store_subs ??= {}, "$basePath", basePath) === "#" ? "navigation.goto_lms" : "navigation.goto_dashboard"),
      href: resolve(
        store_get($$store_subs ??= {}, "$basePath", basePath) !== "#" ? store_get($$store_subs ??= {}, "$basePath", basePath) : "/lms",
        {}
      )
    } : { label: t.get("navigation.login"), href: "/login" };
    (() => {
      if (!data.isOrgSite || !data.org) return null;
      return buildOrgLandingPageProps(data.org, normalizeLandingPageSettings(data.org.landingpage), data.courses, data.hasMoreCourses, authAction);
    })();
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(pageTitle)}</title>`);
      });
    });
    if (data.isOrgSite && data.org) {
      $$renderer2.push("<!--[-->");
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (hasSetupError) {
        $$renderer2.push("<!--[-->");
        Empty($$renderer2, {
          title: "Something Went Wrong",
          description: "We encountered an unexpected error. Please reload the page or contact us for support.",
          icon: Frown,
          variant: "page",
          layout: "full-page",
          showLogo: true,
          children: ($$renderer3) => {
            $$renderer3.push(`<p class="my-2 text-red-500">${escape_html(appInitApi.error)}</p> <div class="flex gap-2">`);
            Button($$renderer3, {
              variant: "secondary",
              onclick: () => window.location.reload(),
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->Reload Page`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> `);
            Button($$renderer3, {
              variant: "default",
              href: "https://classroomio.com/contact",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->Contact Us`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----></div>`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="m-2 flex h-screen w-screen flex-col items-center justify-center font-sans sm:m-0">`);
        Simple_logo_nav($$renderer2);
        $$renderer2.push(`<!----> `);
        Spinner($$renderer2, { class: "size-14! text-blue-700!" });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CXQwN93q.js.map
