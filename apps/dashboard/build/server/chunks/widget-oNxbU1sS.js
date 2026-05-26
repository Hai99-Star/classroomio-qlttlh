import * as z from 'zod';

const WIDGET_STATUS_VALUES = ["DRAFT", "PUBLISHED", "ARCHIVED"];
const WIDGET_LAYOUT_TYPE_VALUES = [
  "card_grid",
  "tag_filter",
  "carousel",
  "primary_course",
  "compact_list",
  "editorial_spotlight",
  "category_shelf"
];
const WIDGET_SELECTION_MODE_VALUES = ["manual", "published"];
const WIDGET_SORT_BY_VALUES = ["manual", "newest", "title"];
const WIDGET_THEME_PRESET_VALUES = ["classroomio", "graphite", "linen", "spruce"];
const WIDGET_SHADOW_SIZE_VALUES = ["none", "sm", "md", "lg"];
const WIDGET_TOP_BADGE_STYLE_VALUES = ["solid", "outline"];
const WIDGET_CARD_GRID_COLUMN_VALUES = ["2", "3"];
const WIDGET_CAROUSEL_VISIBLE_CARD_VALUES = ["2", "3", "4"];
const WIDGET_COMPACT_LIST_DENSITY_VALUES = ["comfortable", "compact"];
const WIDGET_EDITORIAL_TITLE_STYLE_VALUES = ["serif", "sans"];
const WIDGET_TAG_FILTER_SOURCE_VALUES = ["auto", "manual"];
const ZCssColor = z.string().trim().min(1).max(64);
const ZWidgetStatus = z.enum(WIDGET_STATUS_VALUES);
const ZWidgetLayoutType = z.enum(WIDGET_LAYOUT_TYPE_VALUES);
const ZWidgetSelectionMode = z.enum(WIDGET_SELECTION_MODE_VALUES);
const ZWidgetSortBy = z.enum(WIDGET_SORT_BY_VALUES);
const ZWidgetThemePreset = z.enum(WIDGET_THEME_PRESET_VALUES);
const ZWidgetShadowSize = z.enum(WIDGET_SHADOW_SIZE_VALUES);
const ZWidgetTopBadgeStyle = z.enum(WIDGET_TOP_BADGE_STYLE_VALUES);
const ZWidgetCardGridColumns = z.enum(WIDGET_CARD_GRID_COLUMN_VALUES);
const ZWidgetCarouselVisibleCards = z.enum(WIDGET_CAROUSEL_VISIBLE_CARD_VALUES);
const ZWidgetCompactListDensity = z.enum(WIDGET_COMPACT_LIST_DENSITY_VALUES);
const ZWidgetEditorialTitleStyle = z.enum(WIDGET_EDITORIAL_TITLE_STYLE_VALUES);
const ZWidgetTagFilterSource = z.enum(WIDGET_TAG_FILTER_SOURCE_VALUES);
const DEFAULT_WIDGET_CONTENT_CONFIG = {
  loadMoreLabel: "Load more",
  hideLoadMore: false,
  showBorder: true,
  borderWidth: 1,
  borderRadius: 12,
  shadowSize: "md",
  shadowColor: "rgba(15, 23, 42, 0.3)",
  showCourseImage: true,
  showCourseTypeBadge: true,
  showLessonsCount: true,
  showPrice: true,
  showDescriptionExcerpt: true,
  shortenLongDescription: true,
  showRating: true,
  showFeaturedStyle: false,
  ctaLabel: "View course"
};
const DEFAULT_WIDGET_COLORS_CONFIG = {
  primaryColor: "#0f172a",
  backgroundColor: "#ffffff",
  textColor: "#0f172a",
  badgeColor: "#e2e8f0",
  borderColor: "rgba(15, 23, 42, 0.3)",
  highlightColor: "#f8fafc"
};
const DEFAULT_WIDGET_TYPOGRAPHY_CONFIG = {
  fontFamily: "'DM Sans', Inter, ui-sans-serif, system-ui, sans-serif",
  fontSizeScale: 1
};
const DEFAULT_WIDGET_FILTERS_CONFIG = {
  includeTagIds: [],
  excludeTagIds: [],
  topBadgeStyle: "solid"
};
const DEFAULT_WIDGET_BRANDING_CONFIG = {
  showPoweredBy: true
};
const DEFAULT_WIDGET_ADVANCED_CONFIG = {
  customCss: ""
};
const DEFAULT_LAYOUT_OPTIONS_CARD_GRID = {
  columns: "3",
  maxCount: 9,
  showRating: true
};
const DEFAULT_LAYOUT_OPTIONS_TAG_FILTER = {
  maxCount: 12,
  tagSource: "auto",
  manualTagIds: [],
  defaultTagId: null,
  showAllOption: true
};
const DEFAULT_LAYOUT_OPTIONS_CAROUSEL = {
  visibleCards: "3",
  maxCount: 6,
  autoPlay: false,
  autoPlayIntervalMs: 5e3,
  showDots: true,
  showArrows: true,
  loop: true
};
const DEFAULT_LAYOUT_OPTIONS_PRIMARY_COURSE = {
  featuredCourseId: null,
  eyebrowLabel: "Featured course",
  ctaLabel: "Enroll now",
  secondaryMaxCount: 3
};
const DEFAULT_LAYOUT_OPTIONS_COMPACT_LIST = {
  maxCount: 5,
  density: "comfortable",
  showThumbnail: true,
  showTags: true
};
const DEFAULT_LAYOUT_OPTIONS_EDITORIAL_SPOTLIGHT = {
  mainCourseId: null,
  secondaryMaxCount: 4,
  titleStyle: "serif"
};
const DEFAULT_LAYOUT_OPTIONS_CATEGORY_SHELF = {
  categoryTagIds: [],
  defaultCategoryTagId: null,
  showAllTab: true,
  maxPerCategory: 6
};
const DEFAULT_LAYOUT_OPTIONS = {
  cardGrid: DEFAULT_LAYOUT_OPTIONS_CARD_GRID,
  tagFilter: DEFAULT_LAYOUT_OPTIONS_TAG_FILTER,
  carousel: DEFAULT_LAYOUT_OPTIONS_CAROUSEL,
  primaryCourse: DEFAULT_LAYOUT_OPTIONS_PRIMARY_COURSE,
  compactList: DEFAULT_LAYOUT_OPTIONS_COMPACT_LIST,
  editorialSpotlight: DEFAULT_LAYOUT_OPTIONS_EDITORIAL_SPOTLIGHT,
  categoryShelf: DEFAULT_LAYOUT_OPTIONS_CATEGORY_SHELF
};
const DEFAULT_WIDGET_CONFIG = {
  themePreset: "classroomio",
  sortBy: "manual",
  content: DEFAULT_WIDGET_CONTENT_CONFIG,
  colors: DEFAULT_WIDGET_COLORS_CONFIG,
  typography: DEFAULT_WIDGET_TYPOGRAPHY_CONFIG,
  filters: DEFAULT_WIDGET_FILTERS_CONFIG,
  branding: DEFAULT_WIDGET_BRANDING_CONFIG,
  advanced: DEFAULT_WIDGET_ADVANCED_CONFIG,
  layoutOptions: DEFAULT_LAYOUT_OPTIONS
};
const ZWidgetContentConfig = z.object({
  loadMoreLabel: z.string().trim().min(1).max(64).default("Load more"),
  hideLoadMore: z.boolean().default(false),
  showBorder: z.boolean().default(true),
  borderWidth: z.number().min(0).max(8).default(1),
  borderRadius: z.number().min(0).max(32).default(12),
  shadowSize: ZWidgetShadowSize.default("md"),
  shadowColor: ZCssColor.default("rgba(15, 23, 42, 0.3)"),
  showCourseImage: z.boolean().default(true),
  showCourseTypeBadge: z.boolean().default(true),
  showLessonsCount: z.boolean().default(true),
  showPrice: z.boolean().default(true),
  showDescriptionExcerpt: z.boolean().default(true),
  shortenLongDescription: z.boolean().default(true),
  showRating: z.boolean().default(true),
  showFeaturedStyle: z.boolean().default(false),
  ctaLabel: z.string().trim().min(1).max(64).default("View course")
});
const ZWidgetColorsConfig = z.object({
  primaryColor: ZCssColor.default("#0f172a"),
  backgroundColor: ZCssColor.default("#ffffff"),
  textColor: ZCssColor.default("#0f172a"),
  badgeColor: ZCssColor.default("#e2e8f0"),
  borderColor: ZCssColor.default("rgba(15, 23, 42, 0.3)"),
  highlightColor: ZCssColor.default("#f8fafc")
});
const ZWidgetTypographyConfig = z.object({
  fontFamily: z.string().trim().min(1).max(120).default("'DM Sans', Inter, ui-sans-serif, system-ui, sans-serif"),
  fontSizeScale: z.number().min(0.8).max(1.4).default(1)
});
const ZWidgetFiltersConfig = z.object({
  includeTagIds: z.array(z.uuid()).default([]),
  excludeTagIds: z.array(z.uuid()).default([]),
  topBadgeStyle: ZWidgetTopBadgeStyle.default("solid")
});
const ZWidgetBrandingConfig = z.object({
  showPoweredBy: z.boolean().default(true)
});
const ZWidgetAdvancedConfig = z.object({
  customCss: z.string().max(5e3).default("")
});
const ZWidgetCardGridOptions = z.object({
  columns: ZWidgetCardGridColumns.default("3"),
  maxCount: z.number().int().min(3).max(24).default(9),
  showRating: z.boolean().default(true)
});
const ZWidgetTagFilterOptions = z.object({
  maxCount: z.number().int().min(4).max(24).default(12),
  tagSource: ZWidgetTagFilterSource.default("auto"),
  manualTagIds: z.array(z.uuid()).default([]),
  defaultTagId: z.uuid().nullable().default(null),
  showAllOption: z.boolean().default(true)
});
const ZWidgetCarouselOptions = z.object({
  visibleCards: ZWidgetCarouselVisibleCards.default("3"),
  maxCount: z.number().int().min(3).max(12).default(6),
  autoPlay: z.boolean().default(false),
  autoPlayIntervalMs: z.number().int().min(3e3).max(1e4).default(5e3),
  showDots: z.boolean().default(true),
  showArrows: z.boolean().default(true),
  loop: z.boolean().default(true)
});
const ZWidgetPrimaryCourseOptions = z.object({
  featuredCourseId: z.uuid().nullable().default(null),
  eyebrowLabel: z.string().trim().min(1).max(40).default("Featured course"),
  ctaLabel: z.string().trim().min(1).max(40).default("Enroll now"),
  secondaryMaxCount: z.number().int().min(0).max(6).default(3)
});
const ZWidgetCompactListOptions = z.object({
  maxCount: z.number().int().min(1).max(12).default(5),
  density: ZWidgetCompactListDensity.default("comfortable"),
  showThumbnail: z.boolean().default(true),
  showTags: z.boolean().default(true)
});
const ZWidgetEditorialSpotlightOptions = z.object({
  mainCourseId: z.uuid().nullable().default(null),
  secondaryMaxCount: z.number().int().min(2).max(4).default(4),
  titleStyle: ZWidgetEditorialTitleStyle.default("serif")
});
const ZWidgetCategoryShelfOptions = z.object({
  categoryTagIds: z.array(z.uuid()).max(8).default([]),
  defaultCategoryTagId: z.uuid().nullable().default(null),
  showAllTab: z.boolean().default(true),
  maxPerCategory: z.number().int().min(3).max(9).default(6)
});
const ZWidgetLayoutOptions = z.object({
  cardGrid: ZWidgetCardGridOptions.default(DEFAULT_LAYOUT_OPTIONS_CARD_GRID),
  tagFilter: ZWidgetTagFilterOptions.default(DEFAULT_LAYOUT_OPTIONS_TAG_FILTER),
  carousel: ZWidgetCarouselOptions.default(DEFAULT_LAYOUT_OPTIONS_CAROUSEL),
  primaryCourse: ZWidgetPrimaryCourseOptions.default(DEFAULT_LAYOUT_OPTIONS_PRIMARY_COURSE),
  compactList: ZWidgetCompactListOptions.default(DEFAULT_LAYOUT_OPTIONS_COMPACT_LIST),
  editorialSpotlight: ZWidgetEditorialSpotlightOptions.default(DEFAULT_LAYOUT_OPTIONS_EDITORIAL_SPOTLIGHT),
  categoryShelf: ZWidgetCategoryShelfOptions.default(DEFAULT_LAYOUT_OPTIONS_CATEGORY_SHELF)
});
const ZWidgetConfig = z.object({
  themePreset: ZWidgetThemePreset.default("classroomio"),
  sortBy: ZWidgetSortBy.default("manual"),
  content: ZWidgetContentConfig.default(DEFAULT_WIDGET_CONTENT_CONFIG),
  colors: ZWidgetColorsConfig.default(DEFAULT_WIDGET_COLORS_CONFIG),
  typography: ZWidgetTypographyConfig.default(DEFAULT_WIDGET_TYPOGRAPHY_CONFIG),
  filters: ZWidgetFiltersConfig.default(DEFAULT_WIDGET_FILTERS_CONFIG),
  branding: ZWidgetBrandingConfig.default(DEFAULT_WIDGET_BRANDING_CONFIG),
  advanced: ZWidgetAdvancedConfig.default(DEFAULT_WIDGET_ADVANCED_CONFIG),
  layoutOptions: ZWidgetLayoutOptions.default(DEFAULT_LAYOUT_OPTIONS)
});
const ZWidgetPlanGatedFields = z.object({
  isPaidPlan: z.boolean(),
  canUseCustomColors: z.boolean(),
  canUseCustomCss: z.boolean(),
  canToggleBranding: z.boolean(),
  isBrandingForced: z.boolean(),
  availableThemes: z.array(ZWidgetThemePreset),
  selectedTheme: ZWidgetThemePreset
});
const ZWidgetPayloadCourseTag = z.object({
  id: z.uuid(),
  name: z.string(),
  slug: z.string(),
  color: z.string()
});
const ZWidgetPayloadCourse = z.object({
  id: z.uuid(),
  slug: z.string(),
  title: z.string(),
  description: z.string().nullable().optional(),
  imageUrl: z.string().nullable().optional(),
  price: z.union([z.string(), z.number()]).nullable().optional(),
  lessonCount: z.number().int().nonnegative(),
  exerciseCount: z.number().int().nonnegative().default(0),
  rating: z.number().min(0).max(5).nullable().optional(),
  ratingCount: z.number().int().nonnegative().default(0),
  courseType: z.string().nullable().optional(),
  createdAt: z.string(),
  tags: z.array(ZWidgetPayloadCourseTag).default([]),
  featured: z.boolean().default(false),
  url: z.string()
});
const ZWidgetPayloadCategory = z.object({
  tagId: z.uuid(),
  name: z.string(),
  slug: z.string(),
  color: z.string(),
  courseIds: z.array(z.uuid())
});
const ZWidgetPayloadLabels = z.object({
  loadMoreLabel: z.string(),
  poweredByLabel: z.string()
});
const ZWidgetPayload = z.object({
  version: z.literal("v1"),
  widgetId: z.uuid(),
  publicKey: z.string(),
  organization: z.object({
    id: z.uuid(),
    name: z.string(),
    siteName: z.string(),
    customDomain: z.string().nullable().optional()
  }),
  layoutType: ZWidgetLayoutType,
  selectionMode: ZWidgetSelectionMode,
  design: ZWidgetConfig,
  planGatedFields: ZWidgetPlanGatedFields,
  labels: ZWidgetPayloadLabels,
  courses: z.array(ZWidgetPayloadCourse),
  tagPool: z.array(ZWidgetPayloadCourseTag).default([]),
  categories: z.array(ZWidgetPayloadCategory).default([]),
  timestamp: z.number().int().nonnegative()
});
const ZWidgetListItem = z.object({
  id: z.uuid(),
  organizationId: z.uuid(),
  name: z.string(),
  status: ZWidgetStatus,
  layoutType: ZWidgetLayoutType,
  selectionMode: ZWidgetSelectionMode,
  publicKey: z.string(),
  hasUnpublishedChanges: z.boolean().default(false),
  latestPublishedVersionId: z.uuid().nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string()
});
const ZWidgetEditorCourse = z.object({
  id: z.uuid(),
  slug: z.string(),
  title: z.string(),
  description: z.string().nullable().optional(),
  imageUrl: z.string().nullable().optional(),
  isPublished: z.boolean().nullable().optional(),
  price: z.union([z.string(), z.number()]).nullable().optional(),
  lessonCount: z.number().int().nonnegative(),
  exerciseCount: z.number().int().nonnegative().default(0),
  courseType: z.string().nullable().optional(),
  createdAt: z.string(),
  tags: z.array(ZWidgetPayloadCourseTag).default([])
});
const ZWidgetVersionRecord = z.object({
  id: z.uuid(),
  widgetId: z.uuid(),
  version: z.number().int().positive(),
  payloadSnapshot: ZWidgetPayload,
  runtimeManifest: z.record(z.string(), z.unknown()),
  rolledBackFromVersionId: z.uuid().nullable().optional(),
  publishedAt: z.string(),
  publishedByUserId: z.uuid()
});
z.object({
  widget: ZWidgetListItem.extend({
    config: ZWidgetConfig,
    selectedCourseIds: z.array(z.uuid()),
    embedCode: z.string(),
    hostedEmbedUrl: z.string(),
    publicScriptUrl: z.string()
  }),
  organization: z.object({
    id: z.uuid(),
    name: z.string(),
    siteName: z.string(),
    customDomain: z.string().nullable().optional()
  }),
  orgBaseUrl: z.string(),
  availableCourses: z.array(ZWidgetEditorCourse),
  availableTags: z.array(z.object({
    id: z.uuid(),
    name: z.string(),
    slug: z.string(),
    color: z.string(),
    groupId: z.uuid()
  })),
  versions: z.array(ZWidgetVersionRecord),
  planGatedFields: ZWidgetPlanGatedFields,
  planName: z.string().nullable()
});
function applyLayoutRefinements(data, ctx) {
  if (!data.layoutType || !data.config)
    return;
  const layoutOptions = data.config.layoutOptions;
  const selectedIds = new Set(data.selectedCourseIds ?? []);
  const isManual = data.selectionMode === "manual";
  if (data.layoutType === "primary_course") {
    const featuredId = layoutOptions.primaryCourse.featuredCourseId;
    if (!featuredId) {
      ctx.addIssue({
        code: "custom",
        path: ["config", "layoutOptions", "primaryCourse", "featuredCourseId"],
        message: "A featured course is required for the Primary course layout."
      });
    } else if (isManual && !selectedIds.has(featuredId)) {
      ctx.addIssue({
        code: "custom",
        path: ["config", "layoutOptions", "primaryCourse", "featuredCourseId"],
        message: "The featured course must be one of the selected courses."
      });
    }
  }
  if (data.layoutType === "editorial_spotlight") {
    const mainId = layoutOptions.editorialSpotlight.mainCourseId;
    if (!mainId) {
      ctx.addIssue({
        code: "custom",
        path: ["config", "layoutOptions", "editorialSpotlight", "mainCourseId"],
        message: "A main course is required for the Editorial spotlight layout."
      });
    } else if (isManual && !selectedIds.has(mainId)) {
      ctx.addIssue({
        code: "custom",
        path: ["config", "layoutOptions", "editorialSpotlight", "mainCourseId"],
        message: "The main course must be one of the selected courses."
      });
    }
  }
  if (data.layoutType === "category_shelf" && !isManual) {
    if (layoutOptions.categoryShelf.categoryTagIds.length === 0) {
      ctx.addIssue({
        code: "custom",
        path: ["config", "layoutOptions", "categoryShelf", "categoryTagIds"],
        message: "Add at least one category tag for the Category shelf layout."
      });
    }
  }
}
const ZCreateWidget = z.object({
  name: z.string().trim().min(1).max(120),
  layoutType: ZWidgetLayoutType.default("card_grid"),
  selectionMode: ZWidgetSelectionMode.default("manual"),
  config: ZWidgetConfig.default(DEFAULT_WIDGET_CONFIG),
  selectedCourseIds: z.array(z.uuid()).default([])
}).superRefine((data, ctx) => applyLayoutRefinements(data, ctx));
const ZUpdateWidget = z.object({
  name: z.string().trim().min(1).max(120).optional(),
  layoutType: ZWidgetLayoutType.optional(),
  selectionMode: ZWidgetSelectionMode.optional(),
  config: ZWidgetConfig.optional(),
  selectedCourseIds: z.array(z.uuid()).optional()
}).superRefine((data, ctx) => applyLayoutRefinements(data, ctx));
z.object({
  versionId: z.uuid()
});
z.object({
  widgetId: z.uuid()
});
z.object({
  publicKey: z.string().trim().min(8)
});

export { ZCreateWidget as Z, ZUpdateWidget as a };
//# sourceMappingURL=widget-oNxbU1sS.js.map
