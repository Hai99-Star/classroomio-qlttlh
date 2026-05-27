import { a as store_get, u as unsubscribe_stores, h as head, d as attr, f as ensure_array_like, l as attr_class, n as escape_html, e as stringify, m as attr_style, z as store_mutate, c as bind_props } from './index2-Eg0dVEDW.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import cloneDeep from 'lodash/cloneDeep.js';
import isBoolean from 'lodash/isBoolean.js';
import { L as Label } from './label-CXfFBnqp.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-g3CkXSRA.js';
import { C as Circle_check_icon } from './circle-check-icon-De2_dpHS.js';
import './index4-3F2xRc80.js';
import './search2-Bcr7AZ8r.js';
import './sso-COLElRqe.js';
import { b as currentOrgPath, q as quizStore, t as themeImages, n as allOptions, l as deleteModal, p as allThemes, c as currentOrg, r as optionImage, s as booleanOptions } from './org-BIDTy0Q0.js';
import './content-BYLGOVzm.js';
import { t } from './translations-BxDrjLWK.js';
import { s as snackbar } from './store-D_AYzDdq.js';
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
import 'pluralize';
import './client3-CP3T_KrU.js';
import './setup-progress.svelte-CJivOuj6.js';
import './client-CKgEa-sO.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import 'lodash/get.js';
import './landing-page-1a54p-PE.js';
import './app-DrlCEKij.js';
import './submission-CIIjGYOS.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import 'lodash/isNumber.js';
import 'canvas-confetti';
import './question-container.svelte_svelte_type_style_lang-Cx6VgeOH.js';
import { D as Delete_modal, q as quizApi } from './delete-modal2-D5ciVf4a.js';
import { I as Input_field } from './input-field-w4kZespe.js';
import { I as Icon_button } from './icon-button-De7MyFOi.js';
import { A as Arrow_left } from './arrow-left-Cb-a-0D0.js';
import { C as Circle_alert } from './circle-alert-BX73hpNU.js';
import './utils2-DPSDgWhA.js';
import './index-AIbsv2Pd.js';
import './create-id-D7gdjJzW.js';
import './mounted-B958bjT3.js';
import './chevron-down2-mQy71LmC.js';
import './scroll-lock-BXzTpNNH.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-Cwop8WOR.js';
import './check-92w5ryLF.js';
import './floating-layer-anchor-g9tHJXH3.js';
import './hidden-input-D1JyMc-e.js';
import './sr-only-styles-C-iucSJr.js';
import './shared-server-DaWdgxVh.js';
import 'zod';
import './org3-BuUSwZTB.js';
import 'lodash/merge.js';
import '@sveltekit-i18n/parser-icu';
import './index14-HMlD0kYH.js';
import './index13-C4Mtu7Q0.js';
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
import './index7-moivQoE0.js';
import './dialog-BVhwOzzC.js';
import './x2-B8ExpX8J.js';
import './dialog-header-BMWmXTce.js';
import './dialog-title-Cob84UGI.js';
import './field-description-yPSV800w.js';
import './field-label-BEb0I1_z.js';
import './input-CkarY5WD.js';

function Quiz_question($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      currentQuestion = { label: "" },
      currentError = {},
      optionHasError = () => false,
      isPreview = false
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (isPreview) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<h1 class="mb-5 text-white">${escape_html(currentQuestion.label)}</h1>`);
      } else {
        $$renderer3.push("<!--[!-->");
        Input_field($$renderer3, {
          placeholder: store_get($$store_subs ??= {}, "$t", t)("components.quiz.start_typing"),
          className: "w-full my-4",
          errorMessage: currentError.isLabelEmpty && store_get($$store_subs ??= {}, "$t", t)("components.quiz.required_field"),
          isRequired: true,
          bgColor: "bg-white",
          get value() {
            return currentQuestion.label;
          },
          set value($$value) {
            currentQuestion.label = $$value;
            $$settled = false;
          }
        });
      }
      $$renderer3.push(`<!--]--> <div class="flex w-full flex-wrap justify-between"><!--[-->`);
      const each_array = ensure_array_like(currentQuestion.options || []);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let option = each_array[$$index];
        $$renderer3.push(`<div class="relative mb-5 w-2/5 rounded bg-white p-5 dark:bg-neutral-800"><img${attr("src", optionImage[option.id])}${attr("alt", option.id)}/> `);
        if (isPreview) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="mt-5">${escape_html(option.label)}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
          Input_field($$renderer3, {
            placeholder: store_get($$store_subs ??= {}, "$t", t)("components.quiz.type_answer"),
            bgColor: "bg-white",
            className: "mt-3",
            isDisabled: currentQuestion.type === "boolean",
            errorMessage: optionHasError(option.id, currentError.options) && store_get($$store_subs ??= {}, "$t", t)("components.quiz.label"),
            get value() {
              return option.label;
            },
            set value($$value) {
              option.label = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> <div class="absolute top-2 right-2 flex justify-end">`);
          Icon_button($$renderer3, {
            onclick: () => option.isCorrect = !option.isCorrect,
            class: option.isCorrect ? "success" : "",
            children: ($$renderer4) => {
              Circle_check_icon($$renderer4, { size: 16, filled: option.isCorrect });
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
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
    bind_props($$props, { currentQuestion });
  });
}
function Preview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    store_get($$store_subs ??= {}, "$quizStore", quizStore).questions.length;
    store_get($$store_subs ??= {}, "$quizStore", quizStore).questions[0] || {};
    {
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
    const quizId = data.quizId;
    let currentQuestion = store_get($$store_subs ??= {}, "$quizStore", quizStore).questions[0] || { id: 0, label: "", type: "multichoice", options: [] };
    let openPreview = false;
    let type = "multichoice";
    let errors = [];
    let currentError = {};
    function activeClass(q, cq) {
      if (q.id === cq.id) {
        return "bg-gray-200 dark:bg-black";
      }
      return "";
    }
    function addQuestion() {
      const newQuestion = {
        id: (/* @__PURE__ */ new Date()).getTime(),
        label: "",
        type: "multichoice",
        options: []
      };
      store_mutate($$store_subs ??= {}, "$quizStore", quizStore, store_get($$store_subs ??= {}, "$quizStore", quizStore).questions = [
        ...store_get($$store_subs ??= {}, "$quizStore", quizStore).questions,
        newQuestion
      ]);
      type = "multichoice";
    }
    function addOption() {
      const cOptIds = currentQuestion.options.map((o) => o.id);
      const nextOption = cloneDeep(allOptions).find((o) => !cOptIds.includes(Number(o.id)));
      if (!nextOption) return;
      currentQuestion.options = [
        ...currentQuestion.options,
        {
          id: Number(nextOption.id),
          label: nextOption.label,
          isCorrect: nextOption.isCorrect
        }
      ];
    }
    function deleteOption() {
      const opt = cloneDeep(currentQuestion.options);
      opt.pop();
      currentQuestion.options = opt;
    }
    function handleQuestionTypeChange(type2) {
      const opt = type2 === "multichoice" ? cloneDeep(allOptions).filter((o, i) => i < 2).map((o) => ({ id: Number(o.id), label: o.label, isCorrect: o.isCorrect })) : cloneDeep(booleanOptions).map((o) => ({ id: Number(o.id), label: o.label, isCorrect: o.isCorrect }));
      currentQuestion.type = type2;
      currentQuestion.options = opt;
    }
    function deleteQuestion() {
      if (store_get($$store_subs ??= {}, "$quizStore", quizStore).questions.length === 1) return;
      store_mutate($$store_subs ??= {}, "$quizStore", quizStore, store_get($$store_subs ??= {}, "$quizStore", quizStore).questions = store_get($$store_subs ??= {}, "$quizStore", quizStore).questions.filter((q) => q.id !== currentQuestion.id));
      currentQuestion = store_get($$store_subs ??= {}, "$quizStore", quizStore).questions[0];
    }
    function previewQuiz() {
      openPreview = !openPreview;
    }
    function validateQuiz() {
      const _errors = [];
      store_get($$store_subs ??= {}, "$quizStore", quizStore).questions.forEach((q) => {
        const labelError = !!((q.label?.length || 0) < 3);
        const options = [];
        let hasOneAnswer = false;
        q.options.forEach((o) => {
          const valLabelError = !!(o.label.length < 3);
          if (valLabelError) {
            options.push({ id: o.id, error: true });
          }
          if (o.isCorrect) {
            hasOneAnswer = true;
          }
        });
        _errors.push({ isLabelEmpty: labelError, hasOneAnswer, id: q.id, options });
      });
      errors = _errors;
      currentError = errors.find((e) => e.id === currentQuestion.id) || {};
      return errors;
    }
    async function saveQuiz() {
      const _errors = validateQuiz();
      if (Array.isArray(_errors) && _errors.length && qHasError(null, _errors)) {
        console.error("Please fix all errors", errors);
        return;
      }
      if (!store_get($$store_subs ??= {}, "$currentOrg", currentOrg).id || !quizId) return;
      await quizApi.update(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).id, quizId, { ...store_get($$store_subs ??= {}, "$quizStore", quizStore) });
      if (quizApi.success) {
        snackbar.success("snackbar.course_settings.success.saved");
      } else {
        snackbar.error("snackbar.course_settings.error.not_right");
      }
    }
    function qHasError(qId, _errs) {
      return _errs.some((qe) => {
        return (qId ? qe.id === qId : true) && (qe.isLabelEmpty || !qe.hasOneAnswer || !!qe.options.length);
      });
    }
    function optionHasError(eId, _errs) {
      if (Array.isArray(_errs) && _errs.length) {
        return _errs.some((e) => e.id === eId && e.error);
      }
      return false;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("17wmxi2", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Quiz</title>`);
        });
      });
      Delete_modal($$renderer3, { onDelete: deleteQuestion });
      $$renderer3.push(`<!----> `);
      if (openPreview) {
        $$renderer3.push("<!--[-->");
        Preview($$renderer3);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <section class="flex h-full w-screen justify-between"><aside class="root h-full w-1/5 bg-gray-100 p-4 dark:bg-neutral-800"><div class="flex h-full flex-col"><a class="text-md flex items-center text-gray-500 dark:text-white"${attr("href", `${store_get($$store_subs ??= {}, "$currentOrgPath", currentOrgPath)}/quiz`)}>`);
      Arrow_left($$renderer3, { size: 16 });
      $$renderer3.push(`<!----> Back to Quizzes</a> <h3 class="my-3">Quiz</h3> <div class="mb-3"><!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$quizStore", quizStore).questions);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let question = each_array[i];
        $$renderer3.push(`<button${attr_class(`mb-3 flex w-full justify-between rounded p-3 text-left text-gray-500 dark:text-white ${stringify(activeClass(question, currentQuestion))}`, "svelte-17wmxi2")}>Question ${escape_html(i + 1)} `);
        if (qHasError(question.id, errors)) {
          $$renderer3.push("<!--[-->");
          Circle_alert($$renderer3, { size: 16, class: "filled" });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></button>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="flex w-full justify-end">`);
      Button($$renderer3, {
        onclick: addQuestion,
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->Add Question`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></div></div></aside> <div class="container h-full w-3/6 svelte-17wmxi2"><div class="h-full p-5"${attr_style(`background: url(${stringify(themeImages[store_get($$store_subs ??= {}, "$quizStore", quizStore).theme]?.editor)}) no-repeat center center fixed; -webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;`)}><div class="content m-auto svelte-17wmxi2"><h1 class="my-5 text-white">${escape_html(store_get($$store_subs ??= {}, "$quizStore", quizStore).title)}</h1> `);
      Quiz_question($$renderer3, { currentQuestion, optionHasError, currentError });
      $$renderer3.push(`<!----> `);
      if (isBoolean(currentError.hasOneAnswer) && !currentError.hasOneAnswer) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="mb-5"><p class="text-red-500">Please select at least one correct answer</p></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (currentQuestion.type !== "boolean") {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="mb-4 flex w-full justify-center gap-4">`);
        if (currentQuestion.options.length < allOptions.length) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            onclick: addOption,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.quiz.add_more"))}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (currentQuestion.options.length > 0) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            onclick: deleteOption,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("components.quiz.remove_last"))}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div></div></div> <aside class="settings h-full w-1/5 bg-gray-100 p-4 dark:bg-neutral-800"><div class="py-5"><h5>Quiz settings</h5> `);
      Button($$renderer3, {
        onclick: saveQuiz,
        class: "my-3",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->Save Changes`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Button($$renderer3, {
        variant: "outline",
        onclick: previewQuiz,
        class: "my-3",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->Preview Quiz`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Button($$renderer3, {
        variant: "ghost",
        onclick: () => {
          if (store_get($$store_subs ??= {}, "$quizStore", quizStore).questions.length === 1) return;
          store_mutate($$store_subs ??= {}, "$deleteModal", deleteModal, store_get($$store_subs ??= {}, "$deleteModal", deleteModal).open = true);
          store_mutate($$store_subs ??= {}, "$deleteModal", deleteModal, store_get($$store_subs ??= {}, "$deleteModal", deleteModal).isQuestion = true);
        },
        class: "my-3",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->Delete question`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> /></div> <div class="flex flex-col justify-evenly"><div class="my-3"><div class="mb-3">`);
      Label($$renderer3, {
        class: "mb-2",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->Question type`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <!---->`);
      Root($$renderer3, {
        type: "single",
        onValueChange: (value) => {
          if (value) {
            handleQuestionTypeChange(value);
          }
        },
        get value() {
          return type;
        },
        set value($$value) {
          type = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Select_trigger($$renderer4, {
            class: "w-full",
            children: ($$renderer5) => {
              $$renderer5.push(`<p>${escape_html(type === "multichoice" ? "Multi-choice answers" : "True or False")}</p>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Select_content($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Select_item($$renderer5, {
                value: "multichoice",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Multi-choice answers`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Select_item($$renderer5, {
                value: "boolean",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->True or False`);
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
      $$renderer3.push(`<!----></div> <div class="mb-3">`);
      Label($$renderer3, {
        class: "mb-2",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->Time limit`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> <!---->`);
      Root($$renderer3, {
        type: "single",
        get value() {
          return store_get($$store_subs ??= {}, "$quizStore", quizStore).timelimit;
        },
        set value($$value) {
          store_mutate($$store_subs ??= {}, "$quizStore", quizStore, store_get($$store_subs ??= {}, "$quizStore", quizStore).timelimit = $$value);
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Select_trigger($$renderer4, {
            class: "w-full",
            children: ($$renderer5) => {
              $$renderer5.push(`<p>${escape_html(store_get($$store_subs ??= {}, "$quizStore", quizStore).timelimit || "Select time limit")}</p>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Select_content($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Select_item($$renderer5, {
                value: "10 seconds",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->10s`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Select_item($$renderer5, {
                value: "20 seconds",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->20s`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Select_item($$renderer5, {
                value: "30 seconds",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->30s`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Select_item($$renderer5, {
                value: "1 minute",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->1m`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Select_item($$renderer5, {
                value: "2 minute",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->2m`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!---->`);
              Select_item($$renderer5, {
                value: "3 minute",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->3m`);
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
      $$renderer3.push(`<!----></div></div> <div class="my-3"><p class="mb-2">Choose a theme</p> <!--[-->`);
      const each_array_1 = ensure_array_like(allThemes);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let _theme = each_array_1[$$index_1];
        $$renderer3.push(`<div${attr_class(`theme relative mb-5 w-full cursor-pointer rounded-md border ${stringify(store_get($$store_subs ??= {}, "$quizStore", quizStore).theme === _theme.id && "border-primary-700")}`, "svelte-17wmxi2")}>`);
        if (store_get($$store_subs ??= {}, "$quizStore", quizStore).theme === _theme.id) {
          $$renderer3.push("<!--[-->");
          Circle_check_icon($$renderer3, { size: 16, filled: true });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> <div role="button" tabindex="0" class="flex h-full w-full flex-col-reverse rounded-md border"${attr_style(`background: url(${stringify(themeImages[_theme.id]?.card)});`)}><p class="mb-3 ml-3 text-white">${escape_html(_theme.label)}</p></div></div>`);
      }
      $$renderer3.push(`<!--]--></div></div></aside></section>`);
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
//# sourceMappingURL=_page.svelte-DEhuLDDg.js.map
