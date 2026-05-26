import { h as head, n as escape_html, a as store_get, f as ensure_array_like, d as attr, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { r as resolve } from './server3-VLoL706W.js';
import './index6-DijlZyMe.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import { T as Table, a as Table_header, b as Table_row, c as Table_head, d as Table_body, e as Table_cell } from './table-row-D0a1OYFI.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { G as Goal } from './goal-C_iaeEkX.js';
import { t } from './translations-BxDrjLWK.js';
import './index4-DxtvI9Cx.js';
import './org-BIDTy0Q0.js';
import './app-DrlCEKij.js';
import { p as programGoalApi } from './goal.svelte-njuIcN61.js';
import './program-_gJE-tXQ.js';
import './utils2-DPSDgWhA.js';
import './routing-Cz2vwfLK.js';
import './event-ByDKS2H7.js';
import './index14-HMlD0kYH.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './empty-media-ClSn1CG9.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import './shared-server-DaWdgxVh.js';
import './content-BYLGOVzm.js';
import 'lodash/merge.js';
import './store-D_AYzDdq.js';
import './base.svelte-C2lk8LDX.js';
import 'zod/v4';
import 'zod';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const overviewRows = programGoalApi.overviewRows;
    const programs = (() => {
      const map = /* @__PURE__ */ new Map();
      for (const row of overviewRows) {
        const bucket = map.get(row.programId) ?? {
          programId: row.programId,
          programName: row.programName,
          goals: []
        };
        bucket.goals.push(row);
        map.set(row.programId, bucket);
      }
      return [...map.values()].sort((a, b) => a.programName.localeCompare(b.programName));
    })();
    function aggregateOnTrackPct(rows) {
      if (rows.length === 0) return 0;
      const total = rows.reduce((sum, row) => sum + row.totalLearners, 0);
      if (total === 0) return 0;
      const onTrack = rows.reduce((sum, row) => sum + (row.totalLearners - row.atRiskCount - row.overdueCount), 0);
      return Math.round(onTrack / total * 100);
    }
    function aggregateCount(rows, field) {
      return rows.reduce((sum, row) => sum + Number(row[field] ?? 0), 0);
    }
    head("1biqwjf", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.heading"))} · ClassroomIO</title>`);
      });
    });
    $$renderer2.push(`<!---->`);
    Page($$renderer2, {
      class: "w-full",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Page_header($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.heading"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Page_subtitle($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.description"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        {
          let child = function($$renderer4) {
            if (!programGoalApi.isLoading && overviewRows.length === 0) {
              $$renderer4.push("<!--[-->");
              Empty($$renderer4, {
                title: store_get($$store_subs ??= {}, "$t", t)("programs.goals.empty_title"),
                description: store_get($$store_subs ??= {}, "$t", t)("programs.goals.empty_description"),
                icon: Goal,
                variant: "page"
              });
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<div class="flex w-full flex-col gap-6 p-4"><!--[-->`);
              const each_array = ensure_array_like(programs);
              for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
                let program = each_array[$$index_1];
                const onTrackPct = aggregateOnTrackPct(program.goals);
                const totalLearners = aggregateCount(program.goals, "totalLearners");
                const overdueLearners = aggregateCount(program.goals, "overdueCount");
                const atRiskLearners = aggregateCount(program.goals, "atRiskCount");
                $$renderer4.push(`<section class="flex flex-col gap-3 rounded-md border p-4"><header class="flex flex-wrap items-baseline justify-between gap-3"><a${attr("href", resolve(`/programs/${program.programId}/settings`, {}))} class="text-base font-semibold hover:underline">${escape_html(program.programName)}</a> <div class="flex flex-wrap items-center gap-3 text-xs"><span class="ui:text-muted-foreground"><span class="text-base font-semibold text-emerald-600">${escape_html(onTrackPct)}%</span> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.tile.on_track"))}</span> <span class="ui:text-muted-foreground"><span class="font-medium">${escape_html(totalLearners)}</span> learners</span> `);
                if (atRiskLearners > 0) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<span class="text-amber-700"><span class="font-medium">${escape_html(atRiskLearners)}</span> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.tile.at_risk_short"))}</span>`);
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]--> `);
                if (overdueLearners > 0) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<span class="text-red-600"><span class="font-medium">${escape_html(overdueLearners)}</span> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.tile.overdue_short"))}</span>`);
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]--></div></header> <div class="rounded-md border"><!---->`);
                Table($$renderer4, {
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->`);
                    Table_header($$renderer5, {
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->`);
                        Table_row($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->`);
                            Table_head($$renderer7, {
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->Goal`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_head($$renderer7, {
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->Type`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_head($$renderer7, {
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.status.completed"))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_head($$renderer7, {
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.status.in_progress"))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_head($$renderer7, {
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.status.at_risk"))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_head($$renderer7, {
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.status.overdue"))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!----> <!---->`);
                            Table_head($$renderer7, {
                              children: ($$renderer8) => {
                                $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.tile.on_track"))}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer7.push(`<!---->`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!----> <!---->`);
                    Table_body($$renderer5, {
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!--[-->`);
                        const each_array_1 = ensure_array_like(program.goals);
                        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
                          let goal = each_array_1[$$index];
                          $$renderer6.push(`<!---->`);
                          Table_row($$renderer6, {
                            children: ($$renderer7) => {
                              $$renderer7.push(`<!---->`);
                              Table_cell($$renderer7, {
                                class: "font-medium",
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->${escape_html(goal.title)}`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer7.push(`<!----> <!---->`);
                              Table_cell($$renderer7, {
                                children: ($$renderer8) => {
                                  Badge($$renderer8, {
                                    variant: "outline",
                                    children: ($$renderer9) => {
                                      $$renderer9.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`programs.goals.type.${goal.type}`))}`);
                                    },
                                    $$slots: { default: true }
                                  });
                                },
                                $$slots: { default: true }
                              });
                              $$renderer7.push(`<!----> <!---->`);
                              Table_cell($$renderer7, {
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->${escape_html(goal.completedCount)}/${escape_html(goal.totalLearners)}`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer7.push(`<!----> <!---->`);
                              Table_cell($$renderer7, {
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->${escape_html(goal.inProgressCount)}`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer7.push(`<!----> <!---->`);
                              Table_cell($$renderer7, {
                                class: goal.atRiskCount > 0 ? "text-amber-700" : "",
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->${escape_html(goal.atRiskCount)}`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer7.push(`<!----> <!---->`);
                              Table_cell($$renderer7, {
                                class: goal.overdueCount > 0 ? "text-red-600" : "",
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->${escape_html(goal.overdueCount)}`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer7.push(`<!----> <!---->`);
                              Table_cell($$renderer7, {
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->${escape_html(goal.onTrackPct)}%`);
                                },
                                $$slots: { default: true }
                              });
                              $$renderer7.push(`<!---->`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer6.push(`<!---->`);
                        }
                        $$renderer6.push(`<!--]-->`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----></div></section>`);
              }
              $$renderer4.push(`<!--]--></div>`);
            }
            $$renderer4.push(`<!--]-->`);
          };
          Page_body($$renderer3, { child, $$slots: { child: true } });
        }
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DHFdNsly.js.map
