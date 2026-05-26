import { l as attr_class, d as attr, j as clsx } from './index2-Eg0dVEDW.js';
import { A as Attachment } from './attachment-DuGjlKEs.js';
import { C as Community, i as isActive } from './app2-Bjy9FPab.js';
import { C as Course } from './course-CF1uUloU.js';
import { G as Goal } from './goal-C_iaeEkX.js';
import { H as Home } from './home-C9RNcUNP.js';
import { L as Landingpage, B as Bot } from './bot-f-4w3Uyd.js';
import { P as People } from './people-DwBXfNtv.js';
import { S as Settings } from './settings-CHfda6vr.js';

/* empty css                                  */
function Api($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered: isParentHovered = false,
    class: className = ""
  } = $$props;
  let localMotion = false;
  const showMotion = isParentHovered || localMotion;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-11kmpod")} aria-label="braces" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("braces-icon svelte-11kmpod", void 0, { "motion-active": showMotion })}><g class="brace-left-wrap svelte-11kmpod"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1" class="svelte-11kmpod"></path></g><g class="brace-right-wrap svelte-11kmpod"><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2v5a2 2 0 0 1-2 2h-1" class="svelte-11kmpod"></path></g></svg></div>`);
}
function Chart_column($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered: isParentHovered = false,
    class: className = ""
  } = $$props;
  let localMotion = false;
  const showMotion = isParentHovered || localMotion;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-6qumw0")} aria-label="chart-column" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("chart-column-icon svelte-6qumw0", void 0, { "animate": showMotion })}><path d="M3 3v16a2 2 0 0 0 2 2h16" class="frame svelte-6qumw0"></path><path d="M18 17V9" class="column column-2 svelte-6qumw0"></path><path d="M13 17V5" class="column column-1 svelte-6qumw0"></path><path d="M8 17v-3" class="column column-0 svelte-6qumw0"></path></svg></div>`);
}
function Dashboard($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered: isParentHovered = false,
    class: className = ""
  } = $$props;
  let localMotion = false;
  const showMotion = isParentHovered || localMotion;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-1gy7wrt")} aria-label="layout-grid" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("layout-grid-icon svelte-1gy7wrt", void 0, { "motion-active": showMotion })}><rect width="7" height="7" x="3" y="3" rx="1" class="top-left-panel svelte-1gy7wrt"></rect><rect width="7" height="7" x="14" y="3" rx="1" class="top-right-panel svelte-1gy7wrt"></rect><rect width="7" height="7" x="14" y="14" rx="1" class="bottom-right-panel svelte-1gy7wrt"></rect><rect width="7" height="7" x="3" y="14" rx="1" class="bottom-left-panel svelte-1gy7wrt"></rect></svg></div>`);
}
function Setup($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      color = "currentColor",
      size = 28,
      strokeWidth = 2,
      isHovered = false,
      class: className = ""
    } = $$props;
    let line1a_x2 = 14;
    let line1b_x1 = 10;
    let line1c_x1 = 14;
    let line1c_x2 = 14;
    let line2a_x2 = 12;
    let line2b_x1 = 8;
    let line2c_x1 = 8;
    let line2c_x2 = 8;
    let line3a_x2 = 12;
    let line3b_x1 = 16;
    let line3c_x1 = 16;
    let line3c_x2 = 16;
    $$renderer2.push(`<div${attr_class(clsx(className), "svelte-dlwfy6")} aria-label="sliders-horizontal" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round" class="sliders-icon svelte-dlwfy6"><line x1="21"${attr("x2", line1a_x2)} y1="4" y2="4"></line><line${attr("x1", line1b_x1)} x2="3" y1="4" y2="4"></line><line${attr("x1", line1c_x1)}${attr("x2", line1c_x2)} y1="2" y2="6"></line><line x1="21"${attr("x2", line2a_x2)} y1="12" y2="12"></line><line${attr("x1", line2b_x1)} x2="3" y1="12" y2="12"></line><line${attr("x1", line2c_x1)}${attr("x2", line2c_x2)} y1="10" y2="14"></line><line x1="3"${attr("x2", line3a_x2)} y1="20" y2="20"></line><line${attr("x1", line3b_x1)} x2="21" y1="20" y2="20"></line><line${attr("x1", line3c_x1)}${attr("x2", line3c_x2)} y1="18" y2="22"></line></svg></div>`);
  });
}
function Tag($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered = false,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-114p8m1")} aria-label="tag" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("tag-icon svelte-114p8m1", void 0, { "animate": isHovered })}><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" class="svelte-114p8m1"></path><circle cx="7.5" cy="7.5" r=".5"${attr("fill", color)} class="svelte-114p8m1"></circle></svg></div>`);
}
function Zap($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered: isParentHovered = false,
    class: className = ""
  } = $$props;
  let localMotion = false;
  const showMotion = isParentHovered || localMotion;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-1vo1hbw")} aria-label="zap" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_class("zap-icon svelte-1vo1hbw", void 0, { "motion-active": showMotion })}><g class="zap-wrap svelte-1vo1hbw"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" class="svelte-1vo1hbw"></path></g></svg></div>`);
}
const baseNavConfig = [
  {
    group: "home",
    titleKey: "org_navigation.home",
    path: "",
    icon: Home,
    matchPattern: "^/org/[^/]+/?$"
  },
  {
    group: "home",
    titleKey: "org_navigation.dashboard",
    path: "/dash",
    icon: Dashboard,
    matchPattern: "^/org/[^/]+/dash(/.*)?$"
  },
  {
    group: "home",
    titleKey: "org_navigation.stats",
    path: "/stats",
    icon: Chart_column,
    useHashUrl: true,
    matchPattern: "^/org/[^/]+/(analytics|compliance)(/.*)?$",
    items: [
      {
        titleKey: "org_navigation.analytics",
        path: "/analytics",
        matchPattern: "^/org/[^/]+/analytics(/.*)?$"
      },
      {
        titleKey: "org_navigation.compliance",
        path: "/compliance",
        requiresAdmin: true,
        matchPattern: "^/org/[^/]+/compliance(/.*)?$"
      }
    ]
  },
  {
    group: "home",
    titleKey: "org_navigation.setup",
    path: "/setup",
    icon: Setup,
    requiresAdmin: true,
    matchPattern: "^/org/[^/]+/setup(/.*)?$"
  },
  {
    group: "content",
    titleKey: "org_navigation.courses",
    path: "/courses",
    icon: Course,
    matchPattern: "^/org/[^/]+/courses(/.*)?$"
    // Matches nested routes
  },
  {
    group: "content",
    titleKey: "org_navigation.programs",
    path: "/programs",
    icon: Goal,
    matchPattern: "^/org/[^/]+/programs(/.*)?$"
  },
  {
    group: "content",
    titleKey: "org_navigation.media",
    path: "/media",
    icon: Attachment,
    matchPattern: "^/org/[^/]+/media(/.*)?$"
  },
  {
    group: "content",
    titleKey: "org_navigation.tags",
    path: "/tags",
    icon: Tag,
    requiresAdmin: true,
    matchPattern: "^/org/[^/]+/tags(/.*)?$"
  },
  {
    group: "content",
    titleKey: "org_navigation.widgets",
    path: "/widgets",
    icon: Landingpage,
    matchPattern: "^(/org/[^/]+/widgets(/.*)?|/widgets/[^/]+(/.*)?)$"
  },
  {
    group: "people",
    titleKey: "org_navigation.community",
    path: "/community",
    icon: Community,
    supportsDynamicSegment: true,
    // Supports /community/[slug]
    matchPattern: "^/org/[^/]+/community(/.*)?$",
    // Matches nested routes
    nestedRoutes: [
      {
        path: "ask",
        titleKey: "Ask Question"
        // Could be translated
      }
    ]
  },
  {
    group: "people",
    titleKey: "org_navigation.audience",
    path: "/audience",
    icon: People,
    matchPattern: "^/org/[^/]+/audience(/.*)?$"
    // Matches nested routes
  },
  {
    group: "automation",
    titleKey: "automation.tabs.mcp",
    path: "/mcp",
    icon: Bot,
    requiresAdmin: true,
    disableWhenNotAdmin: true,
    matchPattern: "^/org/[^/]+/mcp(/.*)?$"
  },
  {
    group: "automation",
    titleKey: "automation.tabs.api",
    path: "/api",
    icon: Api,
    requiresAdmin: true,
    disableWhenNotAdmin: true,
    matchPattern: "^/org/[^/]+/api(/.*)?$"
  },
  {
    group: "automation",
    titleKey: "automation.tabs.zapier",
    path: "/zapier",
    icon: Zap,
    requiresAdmin: true,
    disableWhenNotAdmin: true,
    matchPattern: "^/org/[^/]+/zapier(/.*)?$"
  },
  {
    titleKey: "org_navigation.settings",
    path: "/settings",
    icon: Settings,
    useHashUrl: true,
    // Use '#' for collapsible parent
    matchPattern: "^/org/[^/]+/settings(/.*)?$",
    // Matches nested routes
    items: [
      {
        titleKey: "settings.tabs.profile_tab",
        path: "/settings"
      },
      {
        titleKey: "settings.tabs.organization_tab",
        path: "/settings/org"
      },
      {
        titleKey: "settings.tabs.landing_page_tab",
        path: "/settings/landingpage"
      },
      {
        titleKey: "settings.tabs.billing_tab",
        path: "/settings/billing"
      },
      {
        titleKey: "settings.tabs.ai_credits_tab",
        path: "/settings/ai-credits"
      },
      {
        titleKey: "settings.tabs.ai_tutor_tab",
        path: "/settings/ai-tutor"
      },
      {
        titleKey: "settings.tabs.auth_tab",
        matchPattern: "^/org/[^/]+/settings/auth(/.*)?$",
        path: "/settings/auth",
        isPaid: true
      }
    ],
    nestedRoutes: [
      {
        path: "billing",
        titleKey: "settings.tabs.billing_tab"
      },
      {
        path: "ai-credits",
        titleKey: "settings.tabs.ai_credits_tab"
      },
      {
        path: "ai-tutor",
        titleKey: "settings.tabs.ai_tutor_tab"
      },
      {
        path: "customize-lms",
        titleKey: "settings.tabs.customize_lms_tab"
      },
      {
        path: "domains",
        titleKey: "settings.tabs.domains_tab"
      },
      {
        path: "teams",
        titleKey: "settings.tabs.teams_tab"
      },
      {
        path: "auth",
        titleKey: "settings.tabs.auth_tab"
      },
      {
        path: "auth/sso",
        titleKey: "settings.tabs.sso_tab"
      },
      {
        path: "auth/token-auth",
        titleKey: "settings.tabs.token_auth_tab"
      }
    ]
  }
];
function getOrgNavigationItems(currentOrgPath, currentOrg, isOrgAdmin, t, pagePathname) {
  const items = [];
  for (const config of baseNavConfig) {
    if (config.requiresAdmin && !isOrgAdmin && !config.disableWhenNotAdmin) {
      continue;
    }
    const visibleSubConfigs = config.items?.filter((sub) => !sub.requiresAdmin || isOrgAdmin) ?? [];
    if (config.items && visibleSubConfigs.length === 0) {
      continue;
    }
    const url = config.path === "" ? currentOrgPath : `${currentOrgPath}${config.path}`;
    const fullPath = config.path === "" ? `/org/${currentOrg.siteName}` : `/org/${currentOrg.siteName}${config.path}`;
    const matchPattern = typeof config.matchPattern === "function" ? config.matchPattern(currentOrg.siteName) : config.matchPattern;
    const item = {
      title: t(config.titleKey),
      url: config.useHashUrl ? "#" : url,
      path: config.path,
      // Store actual path for breadcrumb generation
      icon: config.icon,
      matchPattern,
      isActive: isActive(pagePathname, fullPath, matchPattern),
      isExpanded: config.items ? isActive(pagePathname, fullPath, matchPattern) : void 0,
      disabled: Boolean(config.disableWhenNotAdmin && !isOrgAdmin),
      useHashUrl: config.useHashUrl,
      nestedRoutes: config.nestedRoutes,
      supportsDynamicSegment: config.supportsDynamicSegment,
      isPaid: config.isPaid
    };
    if (visibleSubConfigs.length > 0) {
      item.items = visibleSubConfigs.map((subConfig) => {
        const subMatchPattern = typeof subConfig.matchPattern === "function" ? subConfig.matchPattern(currentOrg.siteName) : subConfig.matchPattern;
        const subUrl = `${currentOrgPath}${subConfig.path}`;
        return {
          title: t(subConfig.titleKey),
          isActive: isActive(pagePathname, subUrl, subMatchPattern, true),
          url: subUrl,
          path: subConfig.path,
          isPaid: subConfig.isPaid
        };
      });
    }
    items.push(item);
  }
  return items;
}
const GROUP_ORDER = [
  { key: "home", labelKey: "org_navigation.home" },
  { key: "content", labelKey: "org_navigation.content" },
  { key: "people", labelKey: "org_navigation.people" },
  { key: "automation", labelKey: "org_navigation.automation" },
  { key: null, labelKey: null }
];
function getOrgNavigationGroups(currentOrgPath, currentOrg, isOrgAdmin, t, pagePathname) {
  const pathnameOnly = pagePathname.split("?")[0];
  const groupedMap = /* @__PURE__ */ new Map();
  for (const groupDef of GROUP_ORDER) {
    groupedMap.set(groupDef.key, []);
  }
  for (const config of baseNavConfig) {
    if (config.requiresAdmin && !isOrgAdmin && !config.disableWhenNotAdmin) {
      continue;
    }
    const visibleSubConfigs = config.items?.filter((sub) => !sub.requiresAdmin || isOrgAdmin) ?? [];
    if (config.items && visibleSubConfigs.length === 0) {
      continue;
    }
    const url = config.path === "" ? currentOrgPath : `${currentOrgPath}${config.path}`;
    const fullPath = config.path === "" ? `/org/${currentOrg.siteName}` : `/org/${currentOrg.siteName}${config.path}`;
    const matchPattern = typeof config.matchPattern === "function" ? config.matchPattern(currentOrg.siteName) : config.matchPattern;
    const item = {
      title: t(config.titleKey),
      url: config.useHashUrl ? "#" : url,
      path: config.path,
      icon: config.icon,
      matchPattern,
      isActive: isActive(pathnameOnly, fullPath, matchPattern),
      isExpanded: config.items ? isActive(pathnameOnly, fullPath, matchPattern) : void 0,
      disabled: Boolean(config.disableWhenNotAdmin && !isOrgAdmin),
      useHashUrl: config.useHashUrl,
      nestedRoutes: config.nestedRoutes,
      supportsDynamicSegment: config.supportsDynamicSegment,
      isPaid: config.isPaid
    };
    if (visibleSubConfigs.length > 0) {
      item.items = visibleSubConfigs.map((subConfig) => {
        const subMatchPattern = typeof subConfig.matchPattern === "function" ? subConfig.matchPattern(currentOrg.siteName) : subConfig.matchPattern;
        const subUrl = `${currentOrgPath}${subConfig.path}`;
        return {
          title: t(subConfig.titleKey),
          isActive: isActive(pathnameOnly, subUrl, subMatchPattern, true),
          url: subUrl,
          path: subConfig.path,
          isPaid: subConfig.isPaid
        };
      });
    }
    const groupKey = config.group !== void 0 ? config.group : null;
    const bucket = groupedMap.get(groupKey) ?? groupedMap.get(null);
    bucket.push(item);
  }
  return GROUP_ORDER.filter(({ key }) => (groupedMap.get(key) ?? []).length > 0).map(({ key, labelKey }) => ({
    labelKey,
    items: groupedMap.get(key) ?? []
  }));
}

export { getOrgNavigationItems as a, baseNavConfig as b, getOrgNavigationGroups as g };
//# sourceMappingURL=org-navigation-B6F9Gh6m.js.map
