import { h as head, a as store_get, u as unsubscribe_stores, f as ensure_array_like, n as escape_html, d as attr, e as stringify, z as store_mutate } from './index2-Eg0dVEDW.js';
import './event-ByDKS2H7.js';
import './index4-3F2xRc80.js';
import './search2-Bcr7AZ8r.js';
import './sso-COLElRqe.js';
import { t as themeImages, b as currentOrgPath, k as createQuizModal } from './org-BIDTy0Q0.js';
import './content-BYLGOVzm.js';
import './exports-DiyTWREe.js';
import './client2-CqohmrW2.js';
import { t } from './translations-BxDrjLWK.js';
import './index6-DijlZyMe.js';
import './badge-DTmoBcZS.js';
import './picker-data-NeeeTF6U.js';
import './index8-D5Z_9ShZ.js';
import { B as Button } from './button-McsHA0hU.js';
import './button-group-B7_AGlHf.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './states.svelte-CIWoDLSQ.js';
import './empty-media-ClSn1CG9.js';
import './field-BxJz8KV9.js';
import './input-group-button-BAHNvNdh.js';
import './item-CUOTGwjL.js';
import './toggle-group-item-BLEzxLjD.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import './resource-list-row-DOW12fib.js';
import './question-type-capabilities-B1VkdJbc.js';
import pluralize from 'pluralize';
import './client3-CP3T_KrU.js';
import './setup-progress.svelte-CJivOuj6.js';
import './client-CKgEa-sO.js';
import { c as calDateDiff } from './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import 'lodash/get.js';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './submission-CIIjGYOS.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import { i as isMobile } from './useMobile-CN4Yzs6U.js';
import './question-container.svelte_svelte_type_style_lang-Cx6VgeOH.js';
import { S as Skeleton } from './skeleton-EXMKyyjB.js';
import { I as Image_1 } from './image2-BA-KJrg7.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { D as Delete_modal, q as quizApi } from './delete-modal2-D5ciVf4a.js';
import { C as Circle_question_mark } from './circle-question-mark2-CWZxAwwq.js';
import { R as Root, D as Dialog_content } from './index7-moivQoE0.js';
import { I as Input_field } from './input-field-w4kZespe.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-BMWmXTce.js';
import { P as Plus } from './plus-CrIMYHIn.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import 'zod';
import './org3-BuUSwZTB.js';
import 'lodash/merge.js';
import '@sveltekit-i18n/parser-icu';
import './index14-HMlD0kYH.js';
import './create-id-D7gdjJzW.js';
import './index13-C4Mtu7Q0.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-DTG9QsOx.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './base.svelte-Bx8dlk4A.js';
import 'zod/v4';
import './index15-B_EOCZVP.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import './video-recording-settings-DX6acopI.js';
import './exercise-8V9pDq65.js';
import './lesson-CRrxCXoW.js';
import './Icon-BfkBTjtA.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './store-D_AYzDdq.js';
import './dialog-BVhwOzzC.js';
import './x2-B8ExpX8J.js';
import './field-description-yPSV800w.js';
import './field-label-BEb0I1_z.js';
import './label-CXfFBnqp.js';
import './input-CkarY5WD.js';
import './dialog-title-Cob84UGI.js';

function Loader($$renderer) {
  $$renderer.push(`<div class="root relative mr-4 mb-4 flex w-full rounded-md border border-gray-100 p-3 transition ease-in-out dark:bg-neutral-800 svelte-1097x7o">`);
  Skeleton($$renderer, { class: "h-full w-[20%]" });
  $$renderer.push(`<!----> <div class="mx-5 flex w-full flex-col justify-evenly">`);
  Skeleton($$renderer, { class: "h-4 w-2/4" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-16 w-2/4" });
  $$renderer.push(`<!----></div></div>`);
}
function Quiz_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { quiz, totalQuestions } = $$props;
    function startQuiz() {
    }
    if (quiz) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="root relative mb-5 flex w-full flex-col rounded-lg border bg-gray-100 p-3 transition ease-in-out hover:shadow-2xl lg:flex-row dark:bg-black svelte-1ijpsvv">`);
      Image_1($$renderer2, {
        src: themeImages[quiz.theme]?.card || themeImages.standard.card,
        alt: "quiz-card",
        className: "max-w-[300px] min-w-[200px]"
      });
      $$renderer2.push(`<!----> <div class="flex w-full flex-col justify-between p-2 md:p-5"><div class="flex justify-between"><h4 class="title text-md capitalize dark:text-white"><a${attr("href", `${stringify(store_get($$store_subs ??= {}, "$currentOrgPath", currentOrgPath))}/quiz/${stringify(quiz.id)}`)}>${escape_html(quiz.title)}</a></h4></div> <div class="flex flex-col justify-between md:flex-row"><div><p class="mb-2">${escape_html(pluralize("question", totalQuestions, true))}</p> <p class="mb-2 md:mb-0">${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.quiz.updated"))} ${escape_html(calDateDiff(quiz.updated_at))}</p></div> `);
      Button($$renderer2, {
        variant: "outline",
        onclick: startQuiz,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.quiz.start"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Quizzes($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="m-auto my-4 flex flex-wrap items-center justify-center lg:justify-start">`);
    if (quizApi.isLoading) {
      $$renderer2.push("<!--[-->");
      Loader($$renderer2);
      $$renderer2.push(`<!----> `);
      Loader($$renderer2);
      $$renderer2.push(`<!----> `);
      Loader($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      const each_array = ensure_array_like(quizApi.quizzes);
      if (each_array.length !== 0) {
        $$renderer2.push("<!--[-->");
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let quiz = each_array[$$index];
          Quiz_card($$renderer2, { quiz, totalQuestions: quiz.questions?.length || 0 });
        }
      } else {
        $$renderer2.push("<!--[!-->");
        Empty($$renderer2, {
          title: store_get($$store_subs ??= {}, "$t", t)("components.quiz.no_quizz"),
          description: store_get($$store_subs ??= {}, "$t", t)("components.quiz.interactive"),
          icon: Circle_question_mark,
          variant: "page"
        });
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function New_quiz_modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let open = false;
    let errors = { title: "" };
    let isLoading = false;
    function handleClose() {
      store_mutate($$store_subs ??= {}, "$createQuizModal", createQuizModal, store_get($$store_subs ??= {}, "$createQuizModal", createQuizModal).id = null);
      store_mutate($$store_subs ??= {}, "$createQuizModal", createQuizModal, store_get($$store_subs ??= {}, "$createQuizModal", createQuizModal).title = "");
      store_mutate($$store_subs ??= {}, "$createQuizModal", createQuizModal, store_get($$store_subs ??= {}, "$createQuizModal", createQuizModal).open = false);
      store_mutate($$store_subs ??= {}, "$createQuizModal", createQuizModal, store_get($$store_subs ??= {}, "$createQuizModal", createQuizModal).openEdit = false);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("1kd4tgd", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.quiz.title"))} - ClassroomIO</title>`);
        });
      });
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
        onOpenChange: (isOpen) => {
          if (!isOpen) handleClose();
        },
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
            class: "w-4/5 md:w-2/5",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$createQuizModal", createQuizModal).openEdit ? store_get($$store_subs ??= {}, "$t", t)("components.quiz.update") : store_get($$store_subs ??= {}, "$t", t)("components.quiz.create"))}
        ${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.quiz.a_quiz"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <form>`);
              Input_field($$renderer5, {
                label: store_get($$store_subs ??= {}, "$t", t)("components.quiz.quiz_title"),
                placeholder: store_get($$store_subs ??= {}, "$t", t)("components.quiz.placehoolder"),
                className: "mb-4",
                isRequired: true,
                errorMessage: errors.title,
                autoComplete: false,
                get value() {
                  return store_get($$store_subs ??= {}, "$createQuizModal", createQuizModal).title;
                },
                set value($$value) {
                  store_mutate($$store_subs ??= {}, "$createQuizModal", createQuizModal, store_get($$store_subs ??= {}, "$createQuizModal", createQuizModal).title = $$value);
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----> <div class="mt-5 flex items-center justify-end">`);
              Button($$renderer5, {
                type: "submit",
                disabled: isLoading,
                loading: isLoading,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$createQuizModal", createQuizModal).openEdit ? store_get($$store_subs ??= {}, "$t", t)("components.quiz.save") : store_get($$store_subs ??= {}, "$t", t)("components.quiz.continue"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div></form>`);
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
    head("ib3cd8", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Interactive Quizzes - ClassroomIO</title>`);
      });
    });
    $$renderer2.push(`<section class="mx-auto w-full max-w-6xl"><div class="px-5 py-10"><div class="mb-10 flex items-center justify-between"><h1 class="text-2xl md:text-3xl dark:text-white">Interactive Quizzes</h1> `);
    if (store_get($$store_subs ??= {}, "$isMobile", isMobile)) {
      $$renderer2.push("<!--[-->");
      Button($$renderer2, {
        onclick: () => store_mutate($$store_subs ??= {}, "$createQuizModal", createQuizModal, store_get($$store_subs ??= {}, "$createQuizModal", createQuizModal).open = true),
        children: ($$renderer3) => {
          Plus($$renderer3, { size: 16 });
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      Button($$renderer2, {
        onclick: () => store_mutate($$store_subs ??= {}, "$createQuizModal", createQuizModal, store_get($$store_subs ??= {}, "$createQuizModal", createQuizModal).open = true),
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Create Quiz`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div> `);
    New_quiz_modal($$renderer2);
    $$renderer2.push(`<!----> `);
    Delete_modal($$renderer2, {});
    $$renderer2.push(`<!----> `);
    Quizzes($$renderer2);
    $$renderer2.push(`<!----></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Cl92csCO.js.map
