import { f as ensure_array_like, g as attributes, j as clsx, c as bind_props } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { e as useSidebar } from './states.svelte-CIWoDLSQ.js';
import { S as Skeleton } from './skeleton-EXMKyyjB.js';

function Sidebar_footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: clsx(cn("ui:flex ui:flex-col ui:gap-2 ui:p-2", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Sidebar_rail($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      onclick,
      onpointerdown,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    useSidebar();
    $$renderer2.push(`<button${attributes({
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: clsx(cn("ui:hover:after:bg-sidebar-border ui:absolute ui:inset-y-0 ui:z-20 ui:hidden ui:w-4 ui:-translate-x-1/2 ui:transition-all ui:ease-linear ui:after:absolute ui:after:inset-y-0 ui:after:left-[calc(1/2*100%-1px)] ui:after:w-[2px] ui:sm:flex ui:group-data-[side=left]:-right-4 ui:group-data-[side=right]:left-0", "ui:in-data-[side=left]:cursor-w-resize ui:in-data-[side=right]:cursor-e-resize", "ui:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize ui:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "ui:hover:group-data-[collapsible=offcanvas]:bg-sidebar ui:group-data-[collapsible=offcanvas]:translate-x-0 ui:group-data-[collapsible=offcanvas]:after:left-full", "ui:[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "ui:[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></button>`);
    bind_props($$props, { ref });
  });
}
function Sidebar_skeleton($$renderer) {
  $$renderer.push(`<div class="bg-sidebar flex h-[calc(100vh-48px)] w-64 flex-col gap-2 border-r p-2"><div class="flex items-center gap-2 rounded-md p-2">`);
  Skeleton($$renderer, { class: "h-8 w-8 rounded-lg" });
  $$renderer.push(`<!----> <div class="flex flex-1 flex-col gap-1">`);
  Skeleton($$renderer, { class: "h-4 w-24" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-3 w-16" });
  $$renderer.push(`<!----></div> `);
  Skeleton($$renderer, { class: "h-4 w-4" });
  $$renderer.push(`<!----></div> <div class="flex flex-col gap-1 py-2">`);
  Skeleton($$renderer, { class: "mb-2 h-3 w-16 px-2" });
  $$renderer.push(`<!----> <!--[-->`);
  const each_array = ensure_array_like(Array(5));
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$renderer.push(`<div class="flex items-center gap-2 rounded-md p-2">`);
    Skeleton($$renderer, { class: "h-4 w-4" });
    $$renderer.push(`<!----> `);
    Skeleton($$renderer, { class: "h-4 w-full" });
    $$renderer.push(`<!----></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="flex-1"></div> <div class="mx-4 mb-2 flex flex-col items-center gap-3 rounded-md border p-4">`);
  Skeleton($$renderer, { class: "h-16 w-16 rounded-md" });
  $$renderer.push(`<!----> <div class="flex flex-col items-center gap-2">`);
  Skeleton($$renderer, { class: "h-4 w-32" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-3 w-40" });
  $$renderer.push(`<!----></div> `);
  Skeleton($$renderer, { class: "h-9 w-24 rounded-md" });
  $$renderer.push(`<!----></div> <div class="flex items-center gap-2 rounded-md p-2">`);
  Skeleton($$renderer, { class: "h-8 w-8 rounded-lg" });
  $$renderer.push(`<!----> <div class="flex flex-1 flex-col gap-1">`);
  Skeleton($$renderer, { class: "h-4 w-24" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-3 w-20" });
  $$renderer.push(`<!----></div> `);
  Skeleton($$renderer, { class: "h-4 w-4" });
  $$renderer.push(`<!----></div></div>`);
}

export { Sidebar_skeleton as S, Sidebar_rail as a, Sidebar_footer as b };
//# sourceMappingURL=sidebar-skeleton-D77R0ohh.js.map
