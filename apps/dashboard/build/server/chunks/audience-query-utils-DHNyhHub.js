const DEFAULT_ORG_AUDIENCE_QUERY = {
  page: 1,
  limit: 20,
  sortBy: "createdAt",
  sortOrder: "desc"
};
function getAudienceQueryFromSearchParams(searchParams, defaults = DEFAULT_ORG_AUDIENCE_QUERY) {
  const page = Number(searchParams.get("page"));
  const limit = Number(searchParams.get("limit"));
  const sortBy = searchParams.get("sortBy");
  const sortOrder = searchParams.get("sortOrder");
  const search = searchParams.get("search")?.trim() || void 0;
  return {
    page: Number.isFinite(page) && page > 0 ? Math.floor(page) : defaults.page,
    limit: Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : defaults.limit,
    sortBy: sortBy === "name" || sortBy === "email" || sortBy === "createdAt" ? sortBy : defaults.sortBy,
    sortOrder: sortOrder === "asc" || sortOrder === "desc" ? sortOrder : defaults.sortOrder,
    search
  };
}
function getAudienceSearchParams(query) {
  const searchParams = new URLSearchParams();
  searchParams.set("page", String(query.page));
  searchParams.set("limit", String(query.limit));
  searchParams.set("sortBy", query.sortBy);
  searchParams.set("sortOrder", query.sortOrder);
  if (query.search) {
    searchParams.set("search", query.search);
  }
  return searchParams;
}
function toAudienceRequestQuery(query) {
  if (!query) {
    return void 0;
  }
  return {
    page: query.page != null ? String(query.page) : void 0,
    limit: query.limit != null ? String(query.limit) : void 0,
    search: query.search,
    sortBy: query.sortBy,
    sortOrder: query.sortOrder
  };
}

export { DEFAULT_ORG_AUDIENCE_QUERY as D, getAudienceSearchParams as a, getAudienceQueryFromSearchParams as g, toAudienceRequestQuery as t };
//# sourceMappingURL=audience-query-utils-DHNyhHub.js.map
