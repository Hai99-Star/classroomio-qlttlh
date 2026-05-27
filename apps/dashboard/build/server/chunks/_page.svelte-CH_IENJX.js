import { a as store_get, u as unsubscribe_stores, c as bind_props, n as escape_html, f as ensure_array_like, l as attr_class, m as attr_style, j as clsx, e as stringify } from './index2-Eg0dVEDW.js';
import { p as page } from './index5-nlVlCL1t.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, c as Page_body, b as Page_title } from './page-title-CsoF4Ebl.js';
import './index6-DijlZyMe.js';
import { P as Page } from './page-CIWgv5lu.js';
import { B as Button } from './button-McsHA0hU.js';
import './empty-media-ClSn1CG9.js';
import { t } from './translations-BxDrjLWK.js';
import { c as classroomio } from './index4-CY3O4yvX.js';
import './submission-CIIjGYOS.js';
import { R as ROLE, i as isOrgAdmin } from './org-t71AQfHV.js';
import './question-type-capabilities-B1VkdJbc.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import { p as profile } from './user-Ahqcoe6u.js';
import './domains-D9J1UytB.js';
import './states.svelte-BI9DWQmF.js';
import './input-group-button-BAHNvNdh.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import './setup-progress.svelte-DpnO-FI3.js';
import './client-7aKHdcPD.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './landing-page-1a54p-PE.js';
import './app-CdpE9djd.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { N as News_feed_loader } from './news-feed-loader-D4rqkglB.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { g as get } from './index-AIbsv2Pd.js';
import { Z as ZCreateProgramNewsfeed, a as ZUpdateProgramNewsfeed, b as ZUpdateProgramReaction, c as ZCreateProgramNewsfeedComment } from './program-DOGHw_6z.js';
import { g as getTextFromHTML } from './toHtml-GTqKmhWM.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-Bh2VVy5Z.js';
import { R as Root, D as Dialog_content } from './index7-D3vVTB5p.js';
import './client3-CP3T_KrU.js';
import { T as Text_editor } from './text-editor-CgwQnvEU.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-D1aNdwc5.js';
import { D as Dialog_footer } from './dialog-footer-DCoQXX2J.js';
import { p as programApi } from './program.svelte-DBgvQqeB.js';
import { p as programGoalApi } from './goal.svelte-CVDdo8sj.js';
import './utils2-DPSDgWhA.js';
import './index14-HMlD0kYH.js';
import '@sveltekit-i18n/parser-icu';
import './shared-server-DaWdgxVh.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';
import 'lodash/merge.js';
import './index13-ubjsmMp7.js';
import './create-id-D7gdjJzW.js';
import './scroll-lock-CqTUXsNd.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-H2EBI_WO.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-7tRy2FJ1.js';
import './index15-B_EOCZVP.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import './skeleton-EXMKyyjB.js';
import 'zod/v4';
import './dialog-BqIvyJui.js';
import './x2-B8ExpX8J.js';
import './editor-D3JSzBVc.js';
import './copy2-MZgWu04s.js';
import './index12-DrKMqqv6.js';
import './floating-layer-anchor-CBXkOzVQ.js';
import './chevron-down2-mQy71LmC.js';
import './index9-C_LBahdk.js';
import './input-CkarY5WD.js';
import './search-DbgrMZ24.js';
import './chevron-right2-DJRdFTZC.js';
import './arrow-left2-Dl6-kuJA.js';
import './arrow-right-BFYbcsyD.js';
import './dropdown-menu-group-Dq5gXS46.js';
import './dropdown-menu-separator-DTaX7YPG.js';
import './plus2-B3hKTcCm.js';
import './trash-22-Dx9O7WWV.js';
import './dialog-title-DHgMN8vm.js';

const ErrorCodes = {
  // Program errors
  PROGRAM_NOT_FOUND: "PROGRAM_NOT_FOUND",
  PROGRAM_FORBIDDEN: "PROGRAM_FORBIDDEN",
  PROGRAM_CREATE_FAILED: "PROGRAM_CREATE_FAILED",
  PROGRAM_UPDATE_FAILED: "PROGRAM_UPDATE_FAILED",
  PROGRAM_DELETE_FAILED: "PROGRAM_DELETE_FAILED",
  PROGRAM_MEMBER_NOT_FOUND: "PROGRAM_MEMBER_NOT_FOUND",
  PROGRAM_NEWSFEED_NOT_FOUND: "PROGRAM_NEWSFEED_NOT_FOUND",
  PROGRAM_NEWSFEED_COMMENT_NOT_FOUND: "PROGRAM_NEWSFEED_COMMENT_NOT_FOUND",
  PROGRAM_MEMBER_CHECK_FAILED: "PROGRAM_MEMBER_CHECK_FAILED"
};
class ProgramNewsfeedApi extends BaseApiWithErrors {
  feeds = [];
  commentsByFeedId = {};
  isNewFeedModalOpen = false;
  openNewFeedModal() {
    this.isNewFeedModalOpen = true;
  }
  closeNewFeedModal() {
    this.isNewFeedModalOpen = false;
  }
  async list(programId) {
    await this.execute({
      requestFn: () => classroomio.program[":programId"].newsfeed.$get({ param: { programId }, query: {} }),
      logContext: "listing program newsfeed",
      onSuccess: (response) => {
        this.feeds = response.data.items || [];
        this.commentsByFeedId = {};
        for (const feed of this.feeds) {
          this.initComments(feed.id, feed.commentCount);
        }
      },
      onError: () => {
        snackbar.error("snackbar.program.error.news_feed_fail");
      }
    });
  }
  async create(programId, fields) {
    this.success = false;
    const validationResult = ZCreateProgramNewsfeed.safeParse({ ...fields, content: getTextFromHTML(fields.content) });
    if (!validationResult.success) {
      this.errors = mapZodErrorsToTranslations(validationResult.error, "newsfeed");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.program[":programId"].newsfeed.$post({ param: { programId }, json: fields }),
      logContext: "creating program newsfeed",
      onSuccess: (response) => {
        const author = get(profile);
        const newFeed = {
          ...response.data,
          authorProfileId: author.id,
          authorFullname: author.fullname,
          authorUsername: author.username,
          authorAvatarUrl: author.avatarUrl,
          commentCount: 0
        };
        this.feeds = [newFeed, ...this.feeds];
        this.initComments(newFeed.id, 0);
        snackbar.success("snackbar.program.success.post_created");
      }
    });
  }
  async update(programId, feedId, fields) {
    this.success = false;
    const validationResult = ZUpdateProgramNewsfeed.safeParse({
      ...fields,
      ...fields.content ? { content: getTextFromHTML(fields.content) } : {}
    });
    if (!validationResult.success) {
      this.errors = mapZodErrorsToTranslations(validationResult.error, "newsfeed");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.program[":programId"].newsfeed[":feedId"].$put({ param: { programId, feedId }, json: fields }),
      logContext: "updating program newsfeed",
      onSuccess: (response) => {
        const index = this.feeds.findIndex((feed) => feed.id === feedId);
        if (index === -1) {
          return;
        }
        const existingFeed = this.feeds[index];
        this.feeds[index] = {
          ...existingFeed,
          ...response.data,
          authorProfileId: existingFeed.authorProfileId,
          authorFullname: existingFeed.authorFullname,
          authorUsername: existingFeed.authorUsername,
          authorAvatarUrl: existingFeed.authorAvatarUrl,
          commentCount: existingFeed.commentCount
        };
        snackbar.success("snackbar.program.success.post_updated");
      }
    });
  }
  async react(programId, feedId, reaction) {
    const validationResult = ZUpdateProgramReaction.safeParse({ reaction });
    if (!validationResult.success) {
      this.errors = mapZodErrorsToTranslations(validationResult.error, "newsfeed");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.program[":programId"].newsfeed[":feedId"].react.$put({ param: { programId, feedId }, json: validationResult.data }),
      logContext: "reacting to program newsfeed",
      onSuccess: (response) => {
        const index = this.feeds.findIndex((feed) => feed.id === feedId);
        if (index === -1) {
          return;
        }
        const existingFeed = this.feeds[index];
        this.feeds[index] = {
          ...existingFeed,
          ...response.data,
          authorProfileId: existingFeed.authorProfileId,
          authorFullname: existingFeed.authorFullname,
          authorUsername: existingFeed.authorUsername,
          authorAvatarUrl: existingFeed.authorAvatarUrl,
          commentCount: existingFeed.commentCount
        };
      },
      onError: () => {
        snackbar.error("snackbar.program.error.reaction_error");
      }
    });
  }
  async delete(programId, feedId) {
    await this.execute({
      requestFn: () => classroomio.program[":programId"].newsfeed[":feedId"].$delete({ param: { programId, feedId } }),
      logContext: "deleting program newsfeed",
      onSuccess: () => {
        this.feeds = this.feeds.filter((feed) => feed.id !== feedId);
        const { [feedId]: _removedComments, ...remainingComments } = this.commentsByFeedId;
        this.commentsByFeedId = remainingComments;
        snackbar.success("snackbar.program.success.feed_delete_success");
      }
    });
  }
  initComments(feedId, totalCount) {
    if (!this.commentsByFeedId[feedId]) {
      this.commentsByFeedId[feedId] = {
        items: [],
        totalCount,
        hasMore: false,
        isLoading: false,
        cursor: null
      };
      return;
    }
    this.commentsByFeedId[feedId].totalCount = totalCount;
  }
  async getComments(programId, feedId) {
    if (!this.commentsByFeedId[feedId]) {
      this.initComments(feedId, 0);
    }
    this.commentsByFeedId[feedId].isLoading = true;
    await this.execute({
      requestFn: () => classroomio.program[":programId"].newsfeed[":feedId"].comments.$get({ param: { programId, feedId } }),
      logContext: "fetching program newsfeed comments",
      onSuccess: (response) => {
        this.commentsByFeedId[feedId] = {
          items: response.data,
          totalCount: response.data.length,
          hasMore: false,
          isLoading: false,
          cursor: null
        };
      },
      onError: () => {
        this.commentsByFeedId[feedId].isLoading = false;
      }
    });
  }
  async createComment(programId, feedId, content, author) {
    const validationResult = ZCreateProgramNewsfeedComment.safeParse({ content: getTextFromHTML(content) });
    if (!validationResult.success) {
      this.errors = mapZodErrorsToTranslations(validationResult.error, "newsfeed");
      return;
    }
    await this.execute({
      requestFn: () => classroomio.program[":programId"].newsfeed[":feedId"].comment.$post({ param: { programId, feedId }, json: { content } }),
      logContext: "creating program newsfeed comment",
      onSuccess: (response) => {
        const existingCommentState = this.commentsByFeedId[feedId];
        if (!existingCommentState) {
          return;
        }
        const newComment = {
          ...response.data,
          authorProfileId: author.id,
          authorFullname: author.fullname,
          authorUsername: author.username,
          authorAvatarUrl: author.avatarUrl
        };
        this.commentsByFeedId[feedId] = {
          ...existingCommentState,
          items: [newComment, ...existingCommentState.items],
          totalCount: existingCommentState.totalCount + 1
        };
        const feedIndex = this.feeds.findIndex((feed) => feed.id === feedId);
        if (feedIndex !== -1) {
          this.feeds[feedIndex] = {
            ...this.feeds[feedIndex],
            commentCount: this.feeds[feedIndex].commentCount + 1
          };
        }
        snackbar.success("snackbar.program.success.comment_added");
      }
    });
  }
  async deleteComment(programId, feedId, commentId) {
    await this.execute({
      requestFn: () => classroomio.program[":programId"].newsfeed[":feedId"].comment[":commentId"].$delete({ param: { programId, feedId, commentId } }),
      logContext: "deleting program newsfeed comment",
      onSuccess: () => {
        const existingCommentState = this.commentsByFeedId[feedId];
        if (!existingCommentState) {
          return;
        }
        this.commentsByFeedId[feedId] = {
          ...existingCommentState,
          items: existingCommentState.items.filter((item) => String(item.id) !== commentId),
          totalCount: Math.max(0, existingCommentState.totalCount - 1)
        };
        const feedIndex = this.feeds.findIndex((feed) => feed.id === feedId);
        if (feedIndex !== -1) {
          this.feeds[feedIndex] = {
            ...this.feeds[feedIndex],
            commentCount: Math.max(0, this.feeds[feedIndex].commentCount - 1)
          };
        }
        snackbar.success("snackbar.program.success.comment_deleted");
      }
    });
  }
}
const programNewsfeedApi = new ProgramNewsfeedApi();
function tryParseApiErrorBody(raw) {
  if (!raw?.trim()) {
    return null;
  }
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed === "object" && parsed !== null && "success" in parsed && parsed.success === false && "code" in parsed && typeof parsed.code === "string" && "error" in parsed && typeof parsed.error === "string") {
      return parsed;
    }
  } catch {
  }
  return null;
}
const PROGRAM_ERROR_CODE_SNACKBAR_KEYS = {
  [ErrorCodes.PROGRAM_FORBIDDEN]: "snackbar.program.error.code.program_forbidden",
  [ErrorCodes.PROGRAM_MEMBER_CHECK_FAILED]: "snackbar.program.error.code.program_member_check_failed",
  [ErrorCodes.PROGRAM_NOT_FOUND]: "snackbar.program.error.code.program_not_found",
  [ErrorCodes.PROGRAM_CREATE_FAILED]: "snackbar.program.error.code.program_create_failed",
  [ErrorCodes.PROGRAM_UPDATE_FAILED]: "snackbar.program.error.code.program_update_failed",
  [ErrorCodes.PROGRAM_DELETE_FAILED]: "snackbar.program.error.code.program_delete_failed",
  [ErrorCodes.PROGRAM_MEMBER_NOT_FOUND]: "snackbar.program.error.code.program_member_not_found",
  [ErrorCodes.PROGRAM_NEWSFEED_NOT_FOUND]: "snackbar.program.error.code.program_newsfeed_not_found",
  [ErrorCodes.PROGRAM_NEWSFEED_COMMENT_NOT_FOUND]: "snackbar.program.error.code.program_newsfeed_comment_not_found"
};
function getErrorKey(rawError, kind) {
  const parsed = tryParseApiErrorBody(rawError);
  const mapped = parsed?.code ? PROGRAM_ERROR_CODE_SNACKBAR_KEYS[parsed.code] : void 0;
  if (mapped) {
    return mapped;
  }
  return kind === "update" ? "snackbar.program.error.post_update_failed" : "snackbar.program.error.post_create_failed";
}
function New_feed_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { programId = "", edit = false, editFeed = void 0 } = $$props;
    let isLoading = false;
    let newPost = "";
    const resetEditor = () => {
      newPost = "";
      edit = false;
      editFeed = null;
      programNewsfeedApi.closeNewFeedModal();
    };
    const onPost = async () => {
      isLoading = true;
      try {
        if (edit && editFeed) {
          await programNewsfeedApi.update(programId, editFeed.id, { content: newPost ?? "" });
          if (programNewsfeedApi.success) {
            resetEditor();
          } else {
            snackbar.error(getErrorKey(programNewsfeedApi.error, "update"));
          }
        } else {
          await programNewsfeedApi.create(programId, { content: newPost ?? "", isPinned: false });
          if (programNewsfeedApi.success) {
            resetEditor();
          } else {
            snackbar.error(getErrorKey(programNewsfeedApi.error, "create"));
          }
        }
      } catch {
        snackbar.error(getErrorKey(programNewsfeedApi.error, edit ? "update" : "create"));
      } finally {
        isLoading = false;
      }
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
        onOpenChange: (isOpen) => {
          if (!isOpen) {
            resetEditor();
          }
        },
        get open() {
          return programNewsfeedApi.isNewFeedModalOpen;
        },
        set open($$value) {
          programNewsfeedApi.isNewFeedModalOpen = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "h-fit! w-fit! max-w-none!",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(edit ? store_get($$store_subs ??= {}, "$t", t)("programs.newsfeed.edit_post") : store_get($$store_subs ??= {}, "$t", t)("programs.newsfeed.make_a_post"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <section class="max-w-lg">`);
              Text_editor($$renderer5, {
                content: newPost || editFeed?.content || "",
                onChange: (text) => {
                  newPost = text;
                },
                editorClass: "max-h-[400px]",
                placeholder: store_get($$store_subs ??= {}, "$t", t)("programs.newsfeed.editor_placeholder")
              });
              $$renderer5.push(`<!----></section> <!---->`);
              Dialog_footer($$renderer5, {
                children: ($$renderer6) => {
                  Button($$renderer6, {
                    variant: "outline",
                    onclick: resetEditor,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.newsfeed.cancel"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> `);
                  Button($$renderer6, {
                    loading: isLoading,
                    onclick: onPost,
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.newsfeed.post_submit"))}`);
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
    bind_props($$props, { edit, editFeed });
  });
}
function My_goals_widget($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { programId } = $$props;
    const myGoals = programGoalApi.myGoals.filter((assignment) => !programId || assignment.programId === programId);
    function formatDue(assignment) {
      if (!assignment.dueDate) return store_get($$store_subs ??= {}, "$t", t)("programs.goals.lms.no_deadline");
      const dueDate = new Date(assignment.dueDate);
      const now = /* @__PURE__ */ new Date();
      const days = Math.ceil((dueDate.getTime() - now.getTime()) / (24 * 60 * 60 * 1e3));
      if (days < 0) return store_get($$store_subs ??= {}, "$t", t)("programs.goals.lms.overdue");
      if (days === 0) return store_get($$store_subs ??= {}, "$t", t)("programs.goals.lms.due_today");
      if (days === 1) return store_get($$store_subs ??= {}, "$t", t)("programs.goals.lms.due_tomorrow");
      return store_get($$store_subs ??= {}, "$t", t)("programs.goals.lms.due_in_days").replace("{days}", String(days));
    }
    function progressPct(assignment) {
      if (assignment.requiredCount <= 0) return 0;
      return Math.min(100, Math.round(assignment.completedCount / assignment.requiredCount * 100));
    }
    function statusVariant(status) {
      if (status === "completed") return "default";
      if (status === "overdue") return "destructive";
      if (status === "at_risk") return "outline";
      return "secondary";
    }
    if (myGoals.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="mb-4"><h3 class="mb-2 text-sm font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.goals.lms.heading"))}</h3> <div class="flex flex-col gap-2"><!--[-->`);
      const each_array = ensure_array_like(myGoals);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let assignment = each_array[$$index];
        $$renderer2.push(`<div class="flex flex-col gap-2 rounded-md border p-3"><div class="flex flex-wrap items-center justify-between gap-2"><div class="min-w-0"><p class="font-medium">${escape_html(assignment.goal.title)}</p> `);
        if (!programId) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="ui:text-muted-foreground text-xs">${escape_html(assignment.programName)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> `);
        Badge($$renderer2, {
          variant: statusVariant(assignment.status),
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(`programs.goals.status.${assignment.status}`))}`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div> <div class="flex flex-wrap items-center gap-3 text-xs"><span class="ui:text-muted-foreground">${escape_html(assignment.completedCount)}/${escape_html(assignment.requiredCount)} (${escape_html(progressPct(assignment))}%)</span> <span${attr_class(clsx(assignment.status === "overdue" ? "text-red-600" : assignment.status === "at_risk" ? "text-amber-700" : "ui:text-muted-foreground"))}>${escape_html(formatDue(assignment))}</span></div> <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-100"><div class="h-full bg-emerald-500 transition-[width]"${attr_style(`width: ${stringify(progressPct(assignment))}%`)}></div></div></div>`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const programId = data.programId;
    let edit = false;
    let editFeed = null;
    const query = new URLSearchParams(page.url.search);
    query.get("feedId") || "";
    const currentProgramMember = (() => programApi.members.find((member) => member.profile?.id === store_get($$store_subs ??= {}, "$profile", profile).id) ?? null)();
    currentProgramMember?.id || "";
    const currentProgramRoleId = currentProgramMember?.roleId || null;
    ({
      id: store_get($$store_subs ??= {}, "$profile", profile).id || "",
      username: store_get($$store_subs ??= {}, "$profile", profile).username || "",
      fullname: store_get($$store_subs ??= {}, "$profile", profile).fullname || "",
      avatarUrl: store_get($$store_subs ??= {}, "$profile", profile).avatarUrl || ""
    });
    const canCreateNewsfeed = Boolean(store_get($$store_subs ??= {}, "$isOrgAdmin", isOrgAdmin)) || currentProgramRoleId === ROLE.ADMIN || currentProgramRoleId === ROLE.TUTOR;
    Boolean(store_get($$store_subs ??= {}, "$isOrgAdmin", isOrgAdmin)) || canCreateNewsfeed;
    (() => {
      return [...programNewsfeedApi.feeds].sort((firstFeed, secondFeed) => {
        return Number(Boolean(secondFeed.isPinned)) - Number(Boolean(firstFeed.isPinned));
      });
    })();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Page($$renderer3, {
        class: "mx-auto flex w-[90%] px-4 md:max-w-2xl lg:max-w-3xl",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Page_header($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Page_header_content($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Page_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.sidebar.newsfeed"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Page_action($$renderer5, {
                children: ($$renderer6) => {
                  if (canCreateNewsfeed) {
                    $$renderer6.push("<!--[-->");
                    Button($$renderer6, {
                      onclick: () => programNewsfeedApi.openNewFeedModal(),
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("programs.newsfeed.post"))}`);
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$renderer6.push("<!--[!-->");
                  }
                  $$renderer6.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          {
            let child = function($$renderer5) {
              New_feed_modal($$renderer5, {
                programId,
                get edit() {
                  return edit;
                },
                set edit($$value) {
                  edit = $$value;
                  $$settled = false;
                },
                get editFeed() {
                  return editFeed;
                },
                set editFeed($$value) {
                  editFeed = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----> `);
              My_goals_widget($$renderer5, { programId });
              $$renderer5.push(`<!----> `);
              {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="flex w-full flex-col items-center">`);
                News_feed_loader($$renderer5);
                $$renderer5.push(`<!----> `);
                News_feed_loader($$renderer5);
                $$renderer5.push(`<!----> `);
                News_feed_loader($$renderer5);
                $$renderer5.push(`<!----></div>`);
              }
              $$renderer5.push(`<!--]-->`);
            };
            Page_body($$renderer4, { child, $$slots: { child: true } });
          }
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

export { _page as default };
//# sourceMappingURL=_page.svelte-CH_IENJX.js.map
