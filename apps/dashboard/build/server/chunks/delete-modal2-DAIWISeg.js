import { z as store_mutate, a as store_get, n as escape_html, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { B as Button } from './button-McsHA0hU.js';
import { R as Root, D as Dialog_content } from './index7-D3vVTB5p.js';
import { l as deleteModal, c as currentOrg } from './org-t71AQfHV.js';
import { c as classroomio } from './index4-CY3O4yvX.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { B as BaseApiWithErrors } from './base.svelte-Bh2VVy5Z.js';
import { t } from './translations-BxDrjLWK.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-D1aNdwc5.js';

class QuizApi extends BaseApiWithErrors {
  quizzes = [];
  quiz = null;
  /**
   * Lists quizzes for an organization
   */
  async list(orgId) {
    await this.execute({
      requestFn: () => classroomio.organization[":orgId"].quiz.$get({ param: { orgId } }),
      logContext: "listing quizzes",
      onSuccess: (response) => {
        if (response.data) {
          this.quizzes = response.data;
          this.success = true;
          this.errors = {};
        }
      },
      onError: () => {
        snackbar.error("Failed to list quizzes");
      }
    });
  }
  /**
   * Gets a quiz by ID
   */
  async get(orgId, quizId) {
    await this.execute({
      requestFn: () => classroomio.organization[":orgId"].quiz[":quizId"].$get({ param: { orgId, quizId } }),
      logContext: "fetching quiz",
      onSuccess: (response) => {
        if (response.data) {
          this.quiz = response.data;
          this.success = true;
          this.errors = {};
        }
      },
      onError: () => {
        snackbar.error("Failed to fetch quiz");
      }
    });
  }
  /**
   * Creates a new quiz
   */
  async create(orgId, data) {
    await this.execute({
      requestFn: () => classroomio.organization[":orgId"].quiz.$post({ param: { orgId }, json: data }),
      logContext: "creating quiz",
      onSuccess: (response) => {
        if (response.data) {
          this.quizzes = [...this.quizzes, response.data];
          this.success = true;
          this.errors = {};
        }
      },
      onError: () => {
        snackbar.error("Failed to create quiz");
      }
    });
    return this.success ? this.quizzes[this.quizzes.length - 1] : null;
  }
  /**
   * Updates a quiz
   */
  async update(orgId, quizId, data) {
    await this.execute({
      requestFn: () => classroomio.organization[":orgId"].quiz[":quizId"].$put({ param: { orgId, quizId }, json: data }),
      logContext: "updating quiz",
      onSuccess: (response) => {
        if (response.data) {
          this.quizzes = this.quizzes.map((q) => q.id === quizId ? response.data : q);
          if (this.quiz?.id === quizId) {
            this.quiz = response.data;
          }
          this.success = true;
          this.errors = {};
        }
      },
      onError: () => {
        snackbar.error("Failed to update quiz");
      }
    });
  }
  /**
   * Deletes a quiz
   */
  async delete(orgId, quizId) {
    await this.execute({
      requestFn: () => classroomio.organization[":orgId"].quiz[":quizId"].$delete({ param: { orgId, quizId } }),
      logContext: "deleting quiz",
      onSuccess: () => {
        this.quizzes = this.quizzes.filter((q) => q.id !== quizId);
        if (this.quiz?.id === quizId) {
          this.quiz = null;
        }
        this.success = true;
        this.errors = {};
      },
      onError: () => {
        snackbar.error("Failed to delete quiz");
      }
    });
  }
}
const quizApi = new QuizApi();
function Delete_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { onDelete = () => {
    } } = $$props;
    function closeModal() {
      deleteModal.update((m) => ({ ...m, open: false, id: null, isQuestion: false }));
    }
    async function deleteQuiz() {
      if (!store_get($$store_subs ??= {}, "$currentOrg", currentOrg).id || !store_get($$store_subs ??= {}, "$deleteModal", deleteModal).id) return;
      await quizApi.delete(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).id, store_get($$store_subs ??= {}, "$deleteModal", deleteModal).id);
      if (quizApi.success) {
        closeModal();
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
        onOpenChange: (isOpen) => {
          if (!isOpen) closeModal();
        },
        get open() {
          return store_get($$store_subs ??= {}, "$deleteModal", deleteModal).open;
        },
        set open($$value) {
          store_mutate($$store_subs ??= {}, "$deleteModal", deleteModal, store_get($$store_subs ??= {}, "$deleteModal", deleteModal).open = $$value);
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "w-2/5 max-w-[388px]",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$deleteModal", deleteModal).isQuestion ? store_get($$store_subs ??= {}, "$t", t)("components.quiz.question_delete") : store_get($$store_subs ??= {}, "$t", t)("components.quiz.quiz_delete"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="my-10 flex w-full flex-col items-center"><h1 class="text-center text-lg dark:text-white">`);
              if (store_get($$store_subs ??= {}, "$deleteModal", deleteModal).isQuestion) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.quiz.delete_question"))}`);
              } else {
                $$renderer5.push("<!--[!-->");
                $$renderer5.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.quiz.delete_quiz"))}`);
              }
              $$renderer5.push(`<!--]--> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.quiz.lose_content"))}</h1> <div class="mt-5">`);
              Button($$renderer5, {
                onclick: () => {
                  if (store_get($$store_subs ??= {}, "$deleteModal", deleteModal).isQuestion) {
                    onDelete();
                    store_mutate($$store_subs ??= {}, "$deleteModal", deleteModal, store_get($$store_subs ??= {}, "$deleteModal", deleteModal).open = false);
                  } else {
                    deleteQuiz();
                  }
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.quiz.delete"))}`);
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
  });
}

export { Delete_modal as D, quizApi as q };
//# sourceMappingURL=delete-modal2-DAIWISeg.js.map
