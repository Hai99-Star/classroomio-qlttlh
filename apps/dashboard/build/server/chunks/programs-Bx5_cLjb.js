import { a as store_get, u as unsubscribe_stores, c as bind_props, f as ensure_array_like, n as escape_html } from './index2-Eg0dVEDW.js';
import './index6-DijlZyMe.js';
import { R as Resource_list_group } from './resource-list-group-Cn5yrUeL.js';
import { R as Resource_list_row } from './resource-list-row-DOW12fib.js';
import { P as Page_body_header } from './page-body-header-BoRdo4AM.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { S as Search } from './search3-D8xoPsxt.js';
import { S as Spinner } from './button-McsHA0hU.js';
import { G as Goal } from './goal-C_iaeEkX.js';
import { t } from './translations-BxDrjLWK.js';
import pluralize from 'pluralize';
import { r as resolve } from './server3-VLoL706W.js';
import { g as goto } from './client2-CqohmrW2.js';
import { B as Badge } from './badge-DTmoBcZS.js';

function List($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { program, isLMS = false, href } = $$props;
    const courseCount = program.courseCount ?? 0;
    const studentCount = program.studentCount ?? 0;
    function handleRowClick() {
      if (href) {
        goto(resolve(href, {}));
        return;
      }
      const nextRoute = isLMS ? `/programs/${program.id}/newsfeed?source=lms` : `/programs/${program.id}/newsfeed`;
      goto(resolve(nextRoute, {}));
    }
    function getStatusVariant(status) {
      if (status === "ACTIVE") {
        return "success";
      }
      if (status === "INACTIVE") {
        return "secondary";
      }
      return "outline";
    }
    function getStatusLabelKey(status) {
      if (status === "ACTIVE") {
        return "programs.status.active";
      }
      if (status === "INACTIVE") {
        return "programs.status.inactive";
      }
      return "programs.status.archived";
    }
    $$renderer2.push(`<!---->`);
    Resource_list_row($$renderer2, {
      variant: "default",
      align: "start",
      class: "ui:cursor-pointer ui:py-3",
      onclick: handleRowClick,
      role: "row",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="ui:flex ui:w-full ui:items-start ui:gap-6"><div class="ui:min-w-0 ui:flex-1"><p class="ui:w-full ui:truncate ui:text-base ui:font-semibold">${escape_html(program.name)}</p> `);
        if (program.description) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="ui:mt-1 ui:text-sm ui:text-muted-foreground">${escape_html(program.description)}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> <div class="ui:flex ui:shrink-0 ui:items-start">`);
        Badge($$renderer3, {
          variant: getStatusVariant(program.status),
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(getStatusLabelKey(program.status)))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> <div class="ui:flex ui:shrink-0 ui:flex-col ui:items-start ui:gap-1"><p class="ui:text-sm ui:text-muted-foreground">${escape_html(pluralize(t.get("programs.card.courses"), courseCount, true))}</p> `);
        if (!isLMS) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="ui:text-sm ui:text-muted-foreground">${escape_html(pluralize(t.get("programs.card.students"), studentCount, true))}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Programs($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      programs = [],
      isLMS = false,
      isLoading = false,
      searchValue = "",
      emptyTitle = store_get($$store_subs ??= {}, "$t", t)("programs.empty_title"),
      emptyDescription = store_get($$store_subs ??= {}, "$t", t)("programs.empty_description"),
      searchPlaceholder = store_get($$store_subs ??= {}, "$t", t)("programs.search_placeholder"),
      filterControls
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Page_body_header($$renderer3, {
        align: "right",
        class: "p-0!",
        children: ($$renderer4) => {
          Search($$renderer4, {
            placeholder: searchPlaceholder,
            get value() {
              return searchValue;
            },
            set value($$value) {
              searchValue = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----> `);
          filterControls?.($$renderer4);
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <div class="mx-auto mt-4 w-full flex-1">`);
      if (isLoading) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="flex h-64 items-center justify-center">`);
        Spinner($$renderer3, {});
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        if (!programs.length) {
          $$renderer3.push("<!--[-->");
          Empty($$renderer3, {
            title: emptyTitle,
            description: emptyDescription,
            icon: Goal,
            variant: "page"
          });
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<!---->`);
          Resource_list_group($$renderer3, {
            class: "w-full",
            children: ($$renderer4) => {
              $$renderer4.push(`<!--[-->`);
              const each_array = ensure_array_like(programs);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let program = each_array[$$index];
                List($$renderer4, { program, isLMS });
              }
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { searchValue });
  });
}

export { Programs as P };
//# sourceMappingURL=programs-Bx5_cLjb.js.map
