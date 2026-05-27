import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores, f as ensure_array_like } from './index2-Eg0dVEDW.js';
import './index6-DijlZyMe.js';
import { P as Page_header, c as Page_body, a as Page_header_content, b as Page_title } from './page-title-CsoF4Ebl.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { B as Button, S as Spinner } from './button-McsHA0hU.js';
import { I as Input } from './input-CkarY5WD.js';
import { R as Root, D as Dialog_content } from './index7-D3vVTB5p.js';
import { F as Field_label, a as Field_error } from './field-label-BEb0I1_z.js';
import { F as Field } from './field-BxJz8KV9.js';
import { F as Field_group } from './field-group-CsZtrba5.js';
import { F as Field_set, a as Field_legend } from './field-set-CvEL423F.js';
import { F as Field_separator } from './field-separator-CCwxfqwE.js';
import { c as classroomio } from './index4-CY3O4yvX.js';
import { b as ZCreateWorkspace } from './workspaces-cZV9hT32.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-Bh2VVy5Z.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { v as isPrimaryWorkspace, c as currentOrg } from './org-t71AQfHV.js';
import { t } from './translations-BxDrjLWK.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-D1aNdwc5.js';
import { D as Dialog_footer } from './dialog-footer-DCoQXX2J.js';
import './utils2-DPSDgWhA.js';
import './index14-HMlD0kYH.js';
import './dialog-BqIvyJui.js';
import './dialog-content-7tRy2FJ1.js';
import './create-id-D7gdjJzW.js';
import './scroll-lock-CqTUXsNd.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './x2-B8ExpX8J.js';
import './label-CXfFBnqp.js';
import './separator-C8wJJtqC.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import './domains-D9J1UytB.js';
import 'zod';
import './org3-BuUSwZTB.js';
import 'zod/v4';
import 'lodash/merge.js';
import '@sveltekit-i18n/parser-icu';
import './dialog-title-DHgMN8vm.js';

class AccountApi extends BaseApiWithErrors {
  workspaces = [];
  limits = null;
  usage = null;
  async listWorkspaces() {
    return this.execute({
      requestFn: () => classroomio.account.workspaces.$get(),
      logContext: "fetching account workspaces",
      onSuccess: (response) => {
        this.workspaces = response.data.workspaces;
        this.limits = response.data.limits;
      }
    });
  }
  async loadUsage() {
    return this.execute({
      requestFn: () => classroomio.account.usage.$get(),
      logContext: "fetching account usage",
      onSuccess: (response) => {
        this.usage = response.data;
      }
    });
  }
  async createWorkspace(fields) {
    const parsed = ZCreateWorkspace.safeParse(fields);
    if (!parsed.success) {
      this.errors = mapZodErrorsToTranslations(parsed.error);
      return;
    }
    return this.execute({
      requestFn: () => classroomio.account.workspaces.$post({ json: parsed.data }),
      logContext: "creating workspace",
      onSuccess: async (response) => {
        this.workspaces = [...this.workspaces, response.data];
        snackbar.success("snackbar.account.workspaceCreated");
        await this.listWorkspaces();
      },
      onError: (result) => {
        if (typeof result === "object" && "code" in result) {
          snackbar.error(`snackbar.account.${String(result.code).toLowerCase()}`);
        }
      }
    });
  }
  async deleteWorkspace(workspaceId) {
    return this.execute({
      requestFn: () => classroomio.account.workspaces[":workspaceId"].$delete({ param: { workspaceId } }),
      logContext: "deleting workspace",
      onSuccess: () => {
        this.workspaces = this.workspaces.filter((row) => row.id !== workspaceId);
        snackbar.success("snackbar.account.workspaceDeleted");
      },
      onError: (result) => {
        if (typeof result === "object" && "code" in result) {
          snackbar.error(`snackbar.account.${String(result.code).toLowerCase()}`);
        }
      }
    });
  }
}
const accountApi = new AccountApi();
function Workspaces($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let isCreateOpen = false;
    let formName = "";
    let formSiteName = "";
    let confirmDeleteId = null;
    const limits = accountApi.limits;
    const usage = accountApi.usage;
    const workspaces = accountApi.workspaces;
    const ctaState = (() => {
      if (!limits) return { kind: "loading" };
      if (limits.requiresUpgrade) {
        return { kind: "upgrade" };
      }
      if (!limits.canCreate) {
        return { kind: "limit", allowance: limits.allowance };
      }
      return {
        kind: "create",
        used: limits.used,
        allowance: limits.allowance
      };
    })();
    async function onCreate() {
      await accountApi.createWorkspace({ name: formName, siteName: formSiteName });
      if (accountApi.success) {
        formName = "";
        formSiteName = "";
        isCreateOpen = false;
      }
    }
    async function onDelete(id) {
      await accountApi.deleteWorkspace(id);
      confirmDeleteId = null;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (!store_get($$store_subs ??= {}, "$isPrimaryWorkspace", isPrimaryWorkspace)) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="ui:text-muted-foreground rounded border p-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.secondary_billing_notice", {
          primaryName: store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name
        }))}</div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<!---->`);
        Field_group($$renderer3, {
          class: "w-full max-w-2xl px-2",
          children: ($$renderer4) => {
            if (usage) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<!---->`);
              Field_set($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="rounded border p-4"><p class="text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.usage_banner", {
                    learners: usage.learnerCount,
                    tokens: usage.tokensUsedThisMonth,
                    workspaces: usage.workspaceCount
                  }))}</p></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <!---->`);
              Field_separator($$renderer4, {});
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> <!---->`);
            Field_set($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex items-center justify-between"><!---->`);
                Field_legend($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.page_title"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                if (ctaState.kind === "create") {
                  $$renderer5.push("<!--[-->");
                  Button($$renderer5, {
                    onclick: () => isCreateOpen = true,
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.create_cta"))} <span class="ui:text-muted-foreground ml-2">${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.create_cta_used", { used: ctaState.used, allowance: ctaState.allowance }))}</span>`);
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$renderer5.push("<!--[!-->");
                  if (ctaState.kind === "limit") {
                    $$renderer5.push("<!--[-->");
                    Button($$renderer5, {
                      disabled: true,
                      variant: "outline",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.create_cta_disabled_limit", { allowance: ctaState.allowance }))}`);
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$renderer5.push("<!--[!-->");
                    if (ctaState.kind === "upgrade") {
                      $$renderer5.push("<!--[-->");
                      Button($$renderer5, {
                        variant: "outline",
                        href: "/pricing",
                        children: ($$renderer6) => {
                          $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.create_cta_disabled_upgrade"))} <span class="ml-2 underline">${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.upgrade_link"))}</span>`);
                        },
                        $$slots: { default: true }
                      });
                    } else {
                      $$renderer5.push("<!--[!-->");
                    }
                    $$renderer5.push(`<!--]-->`);
                  }
                  $$renderer5.push(`<!--]-->`);
                }
                $$renderer5.push(`<!--]--></div> <!---->`);
                Field_group($$renderer5, {
                  children: ($$renderer6) => {
                    if (accountApi.isLoading && workspaces.length === 0) {
                      $$renderer6.push("<!--[-->");
                      Spinner($$renderer6, { class: "size-10! text-blue-700!" });
                    } else {
                      $$renderer6.push("<!--[!-->");
                      $$renderer6.push(`<!--[-->`);
                      const each_array = ensure_array_like(workspaces);
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let workspace = each_array[$$index];
                        $$renderer6.push(`<!---->`);
                        Field($$renderer6, {
                          children: ($$renderer7) => {
                            $$renderer7.push(`<div class="flex items-center justify-between"><div class="flex items-center gap-3"><p class="text-sm font-medium">${escape_html(workspace.name)}</p> <span class="ui:text-muted-foreground text-xs">${escape_html(workspace.siteName)}</span> `);
                            if (workspace.isPrimary) {
                              $$renderer7.push("<!--[-->");
                              Badge($$renderer7, {
                                variant: "secondary",
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.primary_badge"))}`);
                                },
                                $$slots: { default: true }
                              });
                            } else {
                              $$renderer7.push("<!--[!-->");
                            }
                            $$renderer7.push(`<!--]--> `);
                            if (workspace.readOnlyUntil) {
                              $$renderer7.push("<!--[-->");
                              Badge($$renderer7, {
                                variant: "outline",
                                class: "text-yellow-700",
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.read_only_badge"))}`);
                                },
                                $$slots: { default: true }
                              });
                            } else {
                              $$renderer7.push("<!--[!-->");
                            }
                            $$renderer7.push(`<!--]--></div> `);
                            if (!workspace.isPrimary) {
                              $$renderer7.push("<!--[-->");
                              Button($$renderer7, {
                                variant: "ghost",
                                class: "text-red-500 hover:text-red-700",
                                onclick: () => confirmDeleteId = workspace.id,
                                children: ($$renderer8) => {
                                  $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.delete_action"))}`);
                                },
                                $$slots: { default: true }
                              });
                            } else {
                              $$renderer7.push("<!--[!-->");
                            }
                            $$renderer7.push(`<!--]--></div>`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer6.push(`<!---->`);
                      }
                      $$renderer6.push(`<!--]-->`);
                    }
                    $$renderer6.push(`<!--]-->`);
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
        $$renderer3.push(`<!---->`);
      }
      $$renderer3.push(`<!--]--> <!---->`);
      Root($$renderer3, {
        get open() {
          return isCreateOpen;
        },
        set open($$value) {
          isCreateOpen = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.create_modal_title"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Field_group($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.name_label"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Input($$renderer7, {
                        get value() {
                          return formName;
                        },
                        set value($$value) {
                          formName = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> `);
                      if (accountApi.errors.name) {
                        $$renderer7.push("<!--[-->");
                        $$renderer7.push(`<!---->`);
                        Field_error($$renderer7, {
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(accountApi.errors.name)}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!---->`);
                      } else {
                        $$renderer7.push("<!--[!-->");
                      }
                      $$renderer7.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Field($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Field_label($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.site_name_label"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> `);
                      Input($$renderer7, {
                        get value() {
                          return formSiteName;
                        },
                        set value($$value) {
                          formSiteName = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> `);
                      if (accountApi.errors.siteName) {
                        $$renderer7.push("<!--[-->");
                        $$renderer7.push(`<!---->`);
                        Field_error($$renderer7, {
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(accountApi.errors.siteName)}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!---->`);
                      } else {
                        $$renderer7.push("<!--[!-->");
                      }
                      $$renderer7.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Dialog_footer($$renderer5, {
                children: ($$renderer6) => {
                  Button($$renderer6, {
                    variant: "outline",
                    onclick: () => isCreateOpen = false,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.cancel"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> `);
                  Button($$renderer6, {
                    onclick: onCreate,
                    loading: accountApi.isLoading,
                    disabled: accountApi.isLoading,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.create_modal_submit"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
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
      Root($$renderer3, {
        open: confirmDeleteId !== null,
        onOpenChange: (open) => !open && (confirmDeleteId = null),
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.delete_confirm_title"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <p class="ui:text-muted-foreground">${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.delete_confirm_body"))}</p> <!---->`);
              Dialog_footer($$renderer5, {
                children: ($$renderer6) => {
                  Button($$renderer6, {
                    variant: "outline",
                    onclick: () => confirmDeleteId = null,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.cancel"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> `);
                  Button($$renderer6, {
                    variant: "destructive",
                    onclick: () => confirmDeleteId && onDelete(confirmDeleteId),
                    loading: accountApi.isLoading,
                    disabled: accountApi.isLoading,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.delete_action"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
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
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    head("1erl7f7", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.page_title"))} - ClassroomIO</title>`);
      });
    });
    Page_header($$renderer2, {
      children: ($$renderer3) => {
        Page_header_content($$renderer3, {
          children: ($$renderer4) => {
            Page_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.page_title"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Page_subtitle($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("account.workspaces.page_description"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    {
      let child = function($$renderer3) {
        Workspaces($$renderer3);
      };
      Page_body($$renderer2, { child, $$slots: { child: true } });
    }
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Dd5m8P5l.js.map
