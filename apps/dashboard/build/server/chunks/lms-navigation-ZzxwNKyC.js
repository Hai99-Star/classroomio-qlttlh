import { C as Community, i as isActive } from './app2-Bjy9FPab.js';
import { C as Course } from './course-CF1uUloU.js';
import { E as Exercise } from './exercise-8V9pDq65.js';
import { E as Explore } from './explore-B48ys64e.js';
import { G as Goal } from './goal-C_iaeEkX.js';
import { H as Home } from './home-C9RNcUNP.js';
import { S as Settings } from './settings-CHfda6vr.js';

/* empty css                                  */
const baseNavConfig = [
  {
    titleKey: "lms_navigation.home",
    path: "",
    icon: Home,
    matchPattern: "^/lms/?$"
  },
  {
    titleKey: "lms_navigation.my_learning",
    path: "/mylearning",
    icon: Course,
    matchPattern: "^/lms/mylearning(/.*)?$"
  },
  {
    titleKey: "lms_navigation.programs",
    path: "/programs",
    icon: Goal,
    matchPattern: "^/lms/programs(/.*)?$"
  },
  {
    titleKey: "lms_navigation.exercise",
    path: "/exercises",
    icon: Exercise,
    matchPattern: "^/lms/exercises(/.*)?$",
    show: (currentOrg) => currentOrg?.customization?.dashboard?.exercise === true
  },
  {
    titleKey: "lms_navigation.community",
    path: "/community",
    icon: Community,
    matchPattern: "^/lms/community(/.*)?$",
    show: (currentOrg) => currentOrg?.customization?.dashboard?.community === true,
    supportsDynamicSegment: true,
    // Supports /community/[slug]
    nestedRoutes: [
      {
        path: "ask",
        titleKey: "Ask Question"
        // Could be translated
      }
    ]
  },
  {
    titleKey: "lms_navigation.explore",
    path: "/explore",
    icon: Explore,
    matchPattern: "^/lms/explore(/.*)?$"
  },
  {
    titleKey: "lms_navigation.settings",
    path: "/settings",
    icon: Settings,
    useHashUrl: true,
    matchPattern: "^/lms/settings(/.*)?$",
    items: [
      {
        titleKey: "Profile",
        path: "/settings"
      },
      {
        titleKey: "Integrations",
        path: "/settings/integrations"
      }
    ]
  }
];
function getLmsNavigationItems(currentOrg, t, pagePathname) {
  const items = [];
  for (const config of baseNavConfig) {
    if (config.show && !config.show(currentOrg)) {
      continue;
    }
    const url = config.path === "" ? "/lms" : `/lms${config.path}`;
    const fullPath = config.path === "" ? "/lms" : `/lms${config.path}`;
    const item = {
      title: t(config.titleKey),
      url: config.useHashUrl ? "#" : url,
      path: config.path,
      icon: config.icon,
      isActive: isActive(pagePathname, fullPath, config.matchPattern),
      isExpanded: config.items ? isActive(pagePathname, fullPath, config.matchPattern) : void 0,
      useHashUrl: config.useHashUrl,
      nestedRoutes: config.nestedRoutes,
      supportsDynamicSegment: config.supportsDynamicSegment,
      show: config.show ? () => config.show(currentOrg) : void 0
    };
    if (config.items) {
      item.items = config.items.map((subConfig) => ({
        title: t(`settings.tabs.${subConfig.titleKey.toLowerCase()}_tab`) || subConfig.titleKey,
        url: `/lms${subConfig.path}`,
        path: subConfig.path
      }));
    }
    items.push(item);
  }
  return items;
}

export { baseNavConfig as b, getLmsNavigationItems as g };
//# sourceMappingURL=lms-navigation-ZzxwNKyC.js.map
