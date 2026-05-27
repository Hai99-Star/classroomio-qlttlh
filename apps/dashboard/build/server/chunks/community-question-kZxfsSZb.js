import { h as head, n as escape_html, a as store_get, f as ensure_array_like, c as bind_props, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import pluralize from 'pluralize';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, c as Page_body, b as Page_title } from './page-title-CsoF4Ebl.js';
import './index6-DijlZyMe.js';
import { P as Page } from './page-CIWgv5lu.js';
import { P as Page_subtitle } from './page-subtitle-B7Y4ZhzE.js';
import { R as Root$1, S as Select_trigger, a as Select_content, b as Select_item } from './index10-CThLLXbL.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-CG2pdu70.js';
import { S as Skeleton } from './skeleton-EXMKyyjB.js';
import { t } from './translations-BxDrjLWK.js';
import { c as calDateDiff } from './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import { B as Button } from './button-McsHA0hU.js';
import { i as isOrgAdmin } from './org-t71AQfHV.js';
import { c as communityApi } from './community.svelte-C795zqr3.js';
import { p as profile } from './user-Ahqcoe6u.js';
import './states.svelte-BI9DWQmF.js';
import './input-group-button-BAHNvNdh.js';
import './client3-CP3T_KrU.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-DpnO-FI3.js';
import './client-7aKHdcPD.js';
import { I as Icon_button } from './icon-button-Bm-ZFVBt.js';
import { S as Safe_html_content } from './safe-html-content-B3tL84oN.js';
import 'lodash/get.js';
import './event-ByDKS2H7.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './landing-page-1a54p-PE.js';
import './app-CdpE9djd.js';
import './index4-CY3O4yvX.js';
import './submission-CIIjGYOS.js';
import './question-type-capabilities-B1VkdJbc.js';
import './exports-DiyTWREe.js';
import './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './domains-D9J1UytB.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import { I as Input_field } from './input-field-w4kZespe.js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { T as Text_editor } from './text-editor-CgwQnvEU.js';
import { V as Vote } from './vote-BtGvSzMr.js';
import { R as Root, D as Dialog_content } from './index7-D3vVTB5p.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-D1aNdwc5.js';
import { U as User_avatar } from './user-avatar-C553w_lG.js';
import { C as Circle_check_icon } from './circle-check-icon-De2_dpHS.js';
import './field-BxJz8KV9.js';
import { T as Trash } from './trash-Cbsvg8py.js';
import './picker-data-NeeeTF6U.js';
import './index8-D5Z_9ShZ.js';
import './button-group-B7_AGlHf.js';
import './resource-list-row-DOW12fib.js';
import { B as Back_button } from './back-button-BI2Xs063.js';
import { U as User } from './user2-BbQOYQ0A.js';

function Delete_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      onDelete = () => {
      },
      onCancel = () => {
      },
      open = false,
      isQuestion = false,
      isDeleting = false
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "w-96",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.delete.title"))}
        ${escape_html(isQuestion ? store_get($$store_subs ??= {}, "$t", t)("community.delete.question") : store_get($$store_subs ??= {}, "$t", t)("community.delete.comment"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div><p class="mt-0 text-base dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.delete.sure"))}
        ${escape_html(isQuestion ? store_get($$store_subs ??= {}, "$t", t)("community.delete.question") : store_get($$store_subs ??= {}, "$t", t)("community.delete.comment"))}?</p> <div class="mt-5 flex items-center justify-between">`);
              Button($$renderer5, {
                variant: "outline",
                onclick: onCancel,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.delete.no"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Button($$renderer5, {
                onclick: onDelete,
                loading: isDeleting,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.delete.yes"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div></div>`);
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
    bind_props($$props, { open });
  });
}
function Community_comment_item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      comment,
      isVoted,
      isValidAnswer = false,
      isAuthorOrAdmin,
      upVote,
      onDelete
    } = $$props;
    $$renderer2.push(`<div class="flex items-start px-1">`);
    Vote($$renderer2, {
      value: comment.votes ?? 0,
      upVote,
      disabled: isVoted ?? false
    });
    $$renderer2.push(`<!----> <div class="border-gray w-full rounded-lg border"><header class="flex items-center justify-between p-2 leading-none"><div class="flex items-center text-black">`);
    User_avatar($$renderer2, {
      src: comment.author?.avatarUrl,
      alt: comment.author?.fullname ?? "User",
      class: "size-7"
    });
    $$renderer2.push(`<!----> <p class="ml-2 text-sm dark:text-white">${escape_html(comment.author?.fullname)}</p> <p class="ui:text-muted-foreground ml-2 text-sm">${escape_html(comment.createdAt ? calDateDiff(comment.createdAt) : "")}</p></div> `);
    if (isValidAnswer) {
      $$renderer2.push("<!--[-->");
      Circle_check_icon($$renderer2, { size: 16 });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (isAuthorOrAdmin) {
      $$renderer2.push("<!--[-->");
      Icon_button($$renderer2, {
        onclick: onDelete,
        children: ($$renderer3) => {
          Trash($$renderer3, { size: 16 });
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></header> <article class="prose prose-sm sm:prose p-2">`);
    Safe_html_content($$renderer2, { content: comment.body ?? "" });
    $$renderer2.push(`<!----></article></div></div>`);
  });
}
function Community_question($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { slug, question, backHref } = $$props;
    let commentEditor = void 0;
    let isValidAnswer = false;
    let voted = { question: false, comment: {} };
    let deleteQuestionState = { shouldDelete: false, questionId: "" };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("rdsqpu", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>${escape_html(communityApi.question?.title || store_get($$store_subs ??= {}, "$t", t)("community.ask.question"))}</title>`);
        });
      });
      Delete_modal($$renderer3, {
        isDeleting: communityApi.isLoading,
        onCancel: () => {
          communityApi.deleteCommentState.shouldDelete = false;
          communityApi.deleteCommentState.commentId = "";
        },
        onDelete: () => {
          communityApi.deleteComment(communityApi.deleteCommentState.commentId);
        },
        get open() {
          return communityApi.deleteCommentState.shouldDelete;
        },
        set open($$value) {
          communityApi.deleteCommentState.shouldDelete = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Delete_modal($$renderer3, {
        isDeleting: communityApi.isLoading,
        isQuestion: true,
        onCancel: () => {
          deleteQuestionState.shouldDelete = false;
          deleteQuestionState.questionId = "";
        },
        onDelete: () => {
          if (communityApi.question) {
            communityApi.deleteQuestion(String(communityApi.question.id));
          }
        },
        get open() {
          return deleteQuestionState.shouldDelete;
        },
        set open($$value) {
          deleteQuestionState.shouldDelete = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      if (!communityApi.question) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="mb-3 space-y-2 px-5 py-10">`);
        Skeleton($$renderer3, { class: "h-4 w-[25%]" });
        $$renderer3.push(`<!----> `);
        Skeleton($$renderer3, { class: "h-4 w-full" });
        $$renderer3.push(`<!----> `);
        Skeleton($$renderer3, { class: "h-80 w-full" });
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<!---->`);
        Page($$renderer3, {
          class: "mx-auto w-[90%] md:mx-10 md:max-w-3xl lg:mb-20",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Page_header($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Page_header_content($$renderer5, {
                  children: ($$renderer6) => {
                    if (backHref) {
                      $$renderer6.push("<!--[-->");
                      Back_button($$renderer6, {
                        href: backHref,
                        label: store_get($$store_subs ??= {}, "$t", t)("community.ask.go_back")
                      });
                    } else {
                      $$renderer6.push("<!--[!-->");
                    }
                    $$renderer6.push(`<!--]--> `);
                    if (communityApi.isEditMode) {
                      $$renderer6.push("<!--[-->");
                      $$renderer6.push(`<div class="flex w-full items-center gap-2">`);
                      Input_field($$renderer6, {
                        className: "flex-1",
                        errorMessage: communityApi.errors.title,
                        isDisabled: communityApi.isEditing,
                        get value() {
                          return communityApi.editContent.title;
                        },
                        set value($$value) {
                          communityApi.editContent.title = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer6.push(`<!----> <!---->`);
                      Root$1($$renderer6, {
                        type: "single",
                        disabled: communityApi.isEditing,
                        get value() {
                          return communityApi.editContent.courseId;
                        },
                        set value($$value) {
                          communityApi.editContent.courseId = $$value;
                          $$settled = false;
                        },
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->`);
                          Select_trigger($$renderer7, {
                            class: "h-full w-30! truncate",
                            disabled: communityApi.isEditing,
                            children: ($$renderer8) => {
                              $$renderer8.push(`<span class="truncate">${escape_html(communityApi.editContent.courseId ? communityApi.courses.find((course) => course.id === communityApi.editContent.courseId)?.title : store_get($$store_subs ??= {}, "$t", t)("community.ask.select_course"))}</span>`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!----> <!---->`);
                          Select_content($$renderer7, {
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!--[-->`);
                              const each_array = ensure_array_like(communityApi.courses);
                              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                                let course = each_array[$$index];
                                $$renderer8.push(`<!---->`);
                                Select_item($$renderer8, {
                                  value: course.id,
                                  children: ($$renderer9) => {
                                    $$renderer9.push(`<!---->${escape_html(course.title)}`);
                                  },
                                  $$slots: { default: true }
                                });
                                $$renderer8.push(`<!---->`);
                              }
                              $$renderer8.push(`<!--]-->`);
                            },
                            $$slots: { default: true }
                          });
                          $$renderer7.push(`<!---->`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----></div>`);
                    } else {
                      $$renderer6.push("<!--[!-->");
                      $$renderer6.push(`<div class="flex items-center gap-2">`);
                      Vote($$renderer6, {
                        value: communityApi.question.votes ?? 0,
                        upVote: () => {
                          if (voted.question || !communityApi.question) return;
                          voted.question = true;
                          communityApi.upvotePost({ id: Number(communityApi.question.id), isQuestion: true });
                        },
                        disabled: voted.question
                      });
                      $$renderer6.push(`<!----> <!---->`);
                      Page_title($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(communityApi.question.title)}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----></div> <!---->`);
                      Page_subtitle($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.question.page_subtitle"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    }
                    $$renderer6.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                if (communityApi.question.authorId === store_get($$store_subs ??= {}, "$profile", profile).id) {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<!---->`);
                  Page_action($$renderer5, {
                    children: ($$renderer6) => {
                      Button($$renderer6, {
                        variant: "outline",
                        loading: communityApi.isEditing,
                        onclick: () => {
                          if (!communityApi.question) return;
                          if (communityApi.isEditMode) {
                            communityApi.updateQuestion(Number(communityApi.question.id), communityApi.editContent);
                          } else {
                            communityApi.enterEditMode(communityApi.question);
                          }
                        },
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(communityApi.isEditMode ? store_get($$store_subs ??= {}, "$t", t)("community.ask.save") : store_get($$store_subs ??= {}, "$t", t)("community.ask.edit"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      if (communityApi.isEditMode) {
                        $$renderer6.push("<!--[-->");
                        Button($$renderer6, {
                          variant: "ghost",
                          disabled: communityApi.isEditing,
                          onclick: () => communityApi.exitEditMode(),
                          children: ($$renderer7) => {
                            $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.ask.cancel"))}`);
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
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            {
              let child = function($$renderer5) {
                $$renderer5.push(`<div class="my-1 rounded-md border px-1"><div class="flex items-center justify-between p-2 leading-none"><div class="flex items-center text-black no-underline hover:underline"><!---->`);
                Avatar($$renderer5, {
                  class: "h-7 w-7",
                  children: ($$renderer6) => {
                    if (communityApi.question?.authorAvatarUrl) {
                      $$renderer6.push("<!--[-->");
                      $$renderer6.push(`<!---->`);
                      Avatar_image($$renderer6, {
                        src: communityApi.question.authorAvatarUrl,
                        alt: communityApi.question?.authorFullname ? communityApi.question.authorFullname : "User"
                      });
                      $$renderer6.push(`<!---->`);
                    } else {
                      $$renderer6.push("<!--[!-->");
                    }
                    $$renderer6.push(`<!--]--> <!---->`);
                    Avatar_fallback($$renderer6, {
                      children: ($$renderer7) => {
                        User($$renderer7, { class: "ui:size-3.5 ui:text-muted-foreground" });
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <p class="ml-2 text-sm dark:text-white">${escape_html(communityApi.question?.authorFullname)}</p> <p class="ml-2 text-sm text-gray-500 dark:text-white">${escape_html(communityApi.question?.createdAt ? calDateDiff(communityApi.question.createdAt) : "")}</p></div> `);
                if (communityApi.question?.authorId === store_get($$store_subs ??= {}, "$profile", profile).id || store_get($$store_subs ??= {}, "$isOrgAdmin", isOrgAdmin)) {
                  $$renderer5.push("<!--[-->");
                  Icon_button($$renderer5, {
                    onclick: () => {
                      if (!communityApi.question) return;
                      deleteQuestionState.shouldDelete = true;
                      deleteQuestionState.questionId = String(communityApi.question.id);
                    },
                    children: ($$renderer6) => {
                      Trash($$renderer6, { size: 16 });
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]--></div> `);
                if (communityApi.isEditMode) {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<div class="my-2">`);
                  Text_editor($$renderer5, {
                    placeholder: "Give an answer",
                    content: communityApi.editContent.body,
                    onChange: (content) => communityApi.editContent.body = content
                  });
                  $$renderer5.push(`<!----></div>`);
                } else {
                  $$renderer5.push("<!--[!-->");
                  $$renderer5.push(`<section class="prose prose-sm sm:prose p-2">`);
                  Safe_html_content($$renderer5, { content: communityApi.question?.body ?? "" });
                  $$renderer5.push(`<!----></section>`);
                }
                $$renderer5.push(`<!--]--></div> <div class="my-2">${escape_html(pluralize(store_get($$store_subs ??= {}, "$t", t)("community.answers"), communityApi.question?.comments.length ?? 0, true))}</div> `);
                if (!!communityApi.question?.comments?.length) {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<div class="space-y-2"><!--[-->`);
                  const each_array_1 = ensure_array_like(communityApi.question?.comments);
                  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                    let commentItem = each_array_1[$$index_1];
                    Community_comment_item($$renderer5, {
                      comment: commentItem,
                      isVoted: !!voted.comment[commentItem.id],
                      isValidAnswer,
                      isAuthorOrAdmin: commentItem.author?.id === store_get($$store_subs ??= {}, "$profile", profile).id || store_get($$store_subs ??= {}, "$isOrgAdmin", isOrgAdmin) === true,
                      upVote: () => {
                        if (voted.comment[commentItem.id]) return;
                        voted.comment[commentItem.id] = true;
                        communityApi.upvotePost({ id: commentItem.id, isQuestion: false });
                      },
                      onDelete: () => {
                        console.log("deleting commentItem", commentItem);
                        communityApi.deleteCommentState.shouldDelete = true;
                        communityApi.deleteCommentState.commentId = commentItem.id;
                      }
                    });
                  }
                  $$renderer5.push(`<!--]--></div>`);
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]--> <hr/> <div class="mt-4">`);
                Text_editor($$renderer5, {
                  placeholder: "Give an answer",
                  class: "h-48!",
                  content: communityApi.comment,
                  onChange: (content) => communityApi.comment = content,
                  onReady: (editor) => commentEditor = editor
                });
                $$renderer5.push(`<!----> <div class="mt-2 flex justify-end">`);
                Button($$renderer5, {
                  onclick: () => {
                    console.log("comment", communityApi.comment);
                    console.log("question", communityApi.question);
                    if (communityApi.question) {
                      communityApi.createComment(Number(communityApi.question.id), () => {
                        commentEditor?.commands?.clearContent?.();
                      });
                    }
                  },
                  loading: communityApi.isCommenting,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("community.ask.comment"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----></div></div>`);
              };
              Page_body($$renderer4, { child, $$slots: { child: true } });
            }
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      }
      $$renderer3.push(`<!--]-->`);
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

export { Community_question as C };
//# sourceMappingURL=community-question-kZxfsSZb.js.map
