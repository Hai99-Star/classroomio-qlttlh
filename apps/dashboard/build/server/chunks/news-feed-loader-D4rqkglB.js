import { S as Skeleton } from './skeleton-EXMKyyjB.js';

function News_feed_loader($$renderer) {
  $$renderer.push(`<div class="ui:border mb-7 flex w-full max-w-3xl flex-col gap-3 rounded-md p-3"><div class="flex items-center gap-2">`);
  Skeleton($$renderer, { class: "h-8 w-8 overflow-hidden rounded-full" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-4 w-[30%]" });
  $$renderer.push(`<!----></div> `);
  Skeleton($$renderer, { class: "h-4 w-full" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-4 w-full" });
  $$renderer.push(`<!----></div>`);
}

export { News_feed_loader as N };
//# sourceMappingURL=news-feed-loader-D4rqkglB.js.map
