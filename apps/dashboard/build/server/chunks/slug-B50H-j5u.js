function generateSlug(source, options = {}) {
  const { fallback = "item", appendTimestamp = false } = options;
  const base = (source ?? fallback).trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || fallback;
  return appendTimestamp ? `${base}-${Date.now()}` : base;
}

export { generateSlug as g };
//# sourceMappingURL=slug-B50H-j5u.js.map
