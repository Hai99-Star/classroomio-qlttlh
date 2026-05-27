import { c as bind_props, b as spread_props, t as props_id, g as attributes, k as derived, j as clsx, n as escape_html } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { a as createBitsAttrs, d as createId, n as noop, e as boxWith, m as mergeProps, C as Context, b as attachRef, S as SPACE, E as ENTER, a1 as getElemDirection, a2 as getDirectionalKeys, t as END, H as HOME } from './create-id-D7gdjJzW.js';
import { b as buttonVariants } from './button-McsHA0hU.js';
import { C as Chevron_left } from './chevron-left-DF8YHdtj.js';
import { u as useId } from './scroll-lock-BXzTpNNH.js';
import { C as Chevron_right } from './chevron-right2-DJRdFTZC.js';
import { E as Ellipsis } from './ellipsis-CwLwTK8q.js';

const paginationAttrs = createBitsAttrs({
  component: "pagination",
  parts: ["root", "page", "prev", "next"]
});
const PaginationRootContext = new Context("Pagination.Root");
class PaginationRootState {
  static create(opts) {
    return PaginationRootContext.set(new PaginationRootState(opts));
  }
  opts;
  attachment;
  #totalPages = derived(() => {
    if (this.opts.count.current === 0) return 1;
    return Math.ceil(this.opts.count.current / this.opts.perPage.current);
  });
  get totalPages() {
    return this.#totalPages();
  }
  set totalPages($$value) {
    return this.#totalPages($$value);
  }
  #range = derived(() => {
    const start = (this.opts.page.current - 1) * this.opts.perPage.current;
    const end = Math.min(start + this.opts.perPage.current, this.opts.count.current);
    return { start: start + 1, end };
  });
  get range() {
    return this.#range();
  }
  set range($$value) {
    return this.#range($$value);
  }
  #pages = derived(() => getPageItems({
    page: this.opts.page.current,
    totalPages: this.totalPages,
    siblingCount: this.opts.siblingCount.current
  }));
  get pages() {
    return this.#pages();
  }
  set pages($$value) {
    return this.#pages($$value);
  }
  #hasPrevPage = derived(() => this.opts.page.current > 1);
  get hasPrevPage() {
    return this.#hasPrevPage();
  }
  set hasPrevPage($$value) {
    return this.#hasPrevPage($$value);
  }
  #hasNextPage = derived(() => this.opts.page.current < this.totalPages);
  get hasNextPage() {
    return this.#hasNextPage();
  }
  set hasNextPage($$value) {
    return this.#hasNextPage($$value);
  }
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
  }
  setPage(page) {
    this.opts.page.current = page;
  }
  getPageTriggerNodes() {
    const node = this.opts.ref.current;
    if (!node) return [];
    return Array.from(node.querySelectorAll("[data-pagination-page]"));
  }
  getButtonNode(type) {
    const node = this.opts.ref.current;
    if (!node) return;
    return node.querySelector(paginationAttrs.selector(type));
  }
  prevPage() {
    this.opts.page.current = Math.max(this.opts.page.current - 1, 1);
  }
  nextPage() {
    this.opts.page.current = Math.min(this.opts.page.current + 1, this.totalPages);
  }
  #snippetProps = derived(() => ({
    pages: this.pages,
    range: this.range,
    currentPage: this.opts.page.current
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-orientation": this.opts.orientation.current,
    [paginationAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class PaginationPageState {
  static create(opts) {
    return new PaginationPageState(opts, PaginationRootContext.get());
  }
  opts;
  root;
  attachment;
  #isSelected = derived(() => this.opts.page.current.value === this.root.opts.page.current);
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button !== 0) return;
    this.root.setPage(this.opts.page.current.value);
  }
  onkeydown(e) {
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.root.setPage(this.opts.page.current.value);
    } else {
      handleTriggerKeydown(e, this.opts.ref.current, this.root);
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "aria-label": `Page ${this.opts.page.current.value}`,
    "data-value": `${this.opts.page.current.value}`,
    "data-selected": this.#isSelected() ? "" : void 0,
    [paginationAttrs.page]: "",
    //
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class PaginationButtonState {
  static create(opts) {
    return new PaginationButtonState(opts, PaginationRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  #action() {
    this.opts.type === "prev" ? this.root.prevPage() : this.root.nextPage();
  }
  #isDisabled = derived(() => {
    if (this.opts.disabled.current) return true;
    if (this.opts.type === "prev") return !this.root.hasPrevPage;
    if (this.opts.type === "next") return !this.root.hasNextPage;
    return false;
  });
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button !== 0) return;
    this.#action();
  }
  onkeydown(e) {
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.#action();
    } else {
      handleTriggerKeydown(e, this.opts.ref.current, this.root);
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [paginationAttrs[this.opts.type]]: "",
    disabled: this.#isDisabled(),
    //
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function handleTriggerKeydown(e, node, root) {
  if (!node || !root.opts.ref.current) return;
  const items = root.getPageTriggerNodes();
  const nextButton = root.getButtonNode("next");
  const prevButton = root.getButtonNode("prev");
  if (prevButton) {
    items.unshift(prevButton);
  }
  if (nextButton) {
    items.push(nextButton);
  }
  const currentIndex = items.indexOf(node);
  const dir = getElemDirection(root.opts.ref.current);
  const { nextKey, prevKey } = getDirectionalKeys(dir, root.opts.orientation.current);
  const loop = root.opts.loop.current;
  const keyToIndex = {
    [nextKey]: currentIndex + 1,
    [prevKey]: currentIndex - 1,
    [HOME]: 0,
    [END]: items.length - 1
  };
  let itemIndex = keyToIndex[e.key];
  if (itemIndex === void 0) return;
  e.preventDefault();
  if (itemIndex < 0 && loop) {
    itemIndex = items.length - 1;
  } else if (itemIndex === items.length && loop) {
    itemIndex = 0;
  }
  const itemToFocus = items[itemIndex];
  if (!itemToFocus) return;
  itemToFocus.focus();
}
function getPageItems({ page = 1, totalPages, siblingCount = 1 }) {
  const pageItems = [];
  const pagesToShow = /* @__PURE__ */ new Set([1, totalPages]);
  const firstItemWithSiblings = 3 + siblingCount;
  const lastItemWithSiblings = totalPages - 2 - siblingCount;
  if (firstItemWithSiblings > lastItemWithSiblings) {
    for (let i = 2; i <= totalPages - 1; i++) {
      pagesToShow.add(i);
    }
  } else if (page < firstItemWithSiblings) {
    for (let i = 2; i <= Math.min(firstItemWithSiblings, totalPages); i++) {
      pagesToShow.add(i);
    }
  } else if (page > lastItemWithSiblings) {
    for (let i = totalPages - 1; i >= Math.max(lastItemWithSiblings, 2); i--) {
      pagesToShow.add(i);
    }
  } else {
    for (let i = Math.max(page - siblingCount, 2); i <= Math.min(page + siblingCount, totalPages); i++) {
      pagesToShow.add(i);
    }
  }
  function addPage(value) {
    pageItems.push({ type: "page", value, key: `page-${value}` });
  }
  function addEllipsis() {
    const id = useId();
    pageItems.push({ type: "ellipsis", key: `ellipsis-${id}` });
  }
  let lastNumber = 0;
  for (const p of Array.from(pagesToShow).sort((a, b) => a - b)) {
    if (p - lastNumber > 1) {
      addEllipsis();
    }
    addPage(p);
    lastNumber = p;
  }
  return pageItems;
}
function Pagination$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      count,
      perPage = 1,
      page = 1,
      ref = null,
      siblingCount = 1,
      onPageChange = noop,
      loop = false,
      orientation = "horizontal",
      child,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rootState = PaginationRootState.create({
      id: boxWith(() => id),
      count: boxWith(() => count),
      perPage: boxWith(() => perPage),
      page: boxWith(() => page, (v) => {
        page = v;
        onPageChange?.(v);
      }),
      loop: boxWith(() => loop),
      siblingCount: boxWith(() => siblingCount),
      orientation: boxWith(() => orientation),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, rootState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps, ...rootState.snippetProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2, rootState.snippetProps);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { page, ref });
  });
}
function Pagination_prev_button$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      child,
      children,
      ref = null,
      type = "button",
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const prevButtonState = PaginationButtonState.create({
      type: "prev",
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = mergeProps(restProps, prevButtonState.props, { type });
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Pagination_next_button$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      child,
      children,
      ref = null,
      type = "button",
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const nextButtonState = PaginationButtonState.create({
      type: "next",
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = mergeProps(restProps, nextButtonState.props, { type });
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Pagination_page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      page,
      child,
      children,
      type = "button",
      ref = null,
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const pageState = PaginationPageState.create({
      id: boxWith(() => id),
      page: boxWith(() => page),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = mergeProps(restProps, pageState.props, { type });
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps })}>`);
      if (children) {
        $$renderer2.push("<!--[-->");
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`${escape_html(page.value)}`);
      }
      $$renderer2.push(`<!--]--></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Pagination($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      count = 0,
      perPage = 10,
      page = 1,
      siblingCount = 1,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Pagination$1($$renderer3, spread_props([
        {
          role: "navigation",
          "aria-label": "pagination",
          "data-slot": "pagination",
          class: cn("ui:mx-auto ui:flex ui:w-full ui:justify-center", className),
          count,
          perPage,
          siblingCount
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          get page() {
            return page;
          },
          set page($$value) {
            page = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref, page });
  });
}
function Pagination_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<ul${attributes({
      "data-slot": "pagination-content",
      class: clsx(cn("ui:flex ui:flex-row ui:items-center ui:gap-1", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></ul>`);
    bind_props($$props, { ref });
  });
}
function Pagination_item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ref = null, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<li${attributes({ "data-slot": "pagination-item", ...restProps })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></li>`);
    bind_props($$props, { ref });
  });
}
function Pagination_link($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      size = "icon",
      isActive,
      page,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    function Fallback2($$renderer3) {
      $$renderer3.push(`<!---->${escape_html(page.value)}`);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Pagination_page($$renderer3, spread_props([
        {
          page,
          "aria-current": isActive ? "page" : void 0,
          "data-slot": "pagination-link",
          "data-active": isActive,
          class: cn(buttonVariants({ variant: isActive ? "outline" : "ghost", size }), className),
          children: children || Fallback2
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Fallback$1($$renderer) {
  Chevron_left($$renderer, { class: "ui:size-4" });
  $$renderer.push(`<!----> <span>Previous</span>`);
}
function Pagination_prev_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Pagination_prev_button$1($$renderer3, spread_props([
        {
          "aria-label": "Go to previous page",
          class: cn(
            buttonVariants({
              size: "default",
              variant: "ghost",
              class: "ui:gap-1 ui:px-2.5 ui:sm:pl-2.5"
            }),
            className
          ),
          children: children || Fallback$1
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Fallback($$renderer) {
  $$renderer.push(`<span>Next</span> `);
  Chevron_right($$renderer, { class: "ui:size-4" });
  $$renderer.push(`<!---->`);
}
function Pagination_next_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Pagination_next_button$1($$renderer3, spread_props([
        {
          "aria-label": "Go to next page",
          class: cn(
            buttonVariants({
              size: "default",
              variant: "ghost",
              class: "ui:gap-1 ui:px-2.5 ui:sm:pr-2.5"
            }),
            className
          ),
          children: children || Fallback
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Pagination_ellipsis($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<span${attributes({
      "aria-hidden": "true",
      "data-slot": "pagination-ellipsis",
      class: clsx(cn("ui:flex ui:size-9 ui:items-center ui:justify-center", className)),
      ...restProps
    })}>`);
    Ellipsis($$renderer2, { class: "ui:size-4" });
    $$renderer2.push(`<!----> <span class="sr-only">More pages</span></span>`);
    bind_props($$props, { ref });
  });
}

export { Pagination as P, Pagination_content as a, Pagination_item as b, Pagination_prev_button as c, Pagination_ellipsis as d, Pagination_link as e, Pagination_next_button as f };
//# sourceMappingURL=pagination-ellipsis-CS3WS6z3.js.map
