import { f as ensure_array_like, l as attr_class, j as clsx, n as escape_html, d as attr, b as spread_props, m as attr_style, e as stringify, c as bind_props } from './index2-Eg0dVEDW.js';
import { a as QUESTION_TYPE_KEY } from './question-type-capabilities-B1VkdJbc.js';
import { R as Root$1, D as Dialog_content } from './index7-D3vVTB5p.js';
import { R as Root, D as Dropdown_menu_trigger, a as Dropdown_menu_content, b as Dropdown_menu_item } from './index12-DrKMqqv6.js';
import { I as Input } from './input-CkarY5WD.js';
import { T as Textarea } from './textarea-CfVjMEtO.js';
import { I as Icon_button } from './icon-button-Bm-ZFVBt.js';
import { i as isYoutubeUrl, M as Media_player, Y as Youtube_link_form, D as Document_card } from './document-card-DsDgdtN9.js';
import { N as Number_badge } from './number-badge-CWSCFK8J.js';
import { c as cn } from './index6-DijlZyMe.js';
import { B as Button, I as Icon, S as Spinner } from './button-McsHA0hU.js';
import { X } from './x2-B8ExpX8J.js';
import { C as Check } from './check-92w5ryLF.js';
import { C as Circle, R as Radio_group, a as Radio_group_item } from './radio-group-item-DbkZj_3K.js';
import { P as Plus } from './plus2-B3hKTcCm.js';
import { T as Trash_2 } from './trash-22-Dx9O7WWV.js';
import { C as Checkbox } from './checkbox-DZ3KH0FC.js';
import { R as Root$3, P as Popover_trigger, a as Popover_content } from './index9-C_LBahdk.js';
import { n as normalizeAcceptedFileTypes, f as formatAcceptedFileTypes, F as FILE_UPLOAD_SUPPORTED_TYPES } from './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import { C as Chevron_down } from './chevron-down2-mQy71LmC.js';
import { C as Circle_question_mark } from './circle-question-mark-DkJv7M1I.js';
import { G as Grip_vertical, E as Editor } from './editor-D3JSzBVc.js';
import { a as getVideoRecordingMaxDurationSeconds, V as VIDEO_RECORDING_PLATFORM_MAX_DURATION_SECONDS, g as getStarRatingMaxFromSettings, i as isValidStarRatingValue, b as VIDEO_RECORDING_DEFAULT_MAX_DURATION_SECONDS } from './video-recording-settings-DX6acopI.js';
import { T as Toggle_group } from './toggle-group-DvhNC--2.js';
import { T as Toggle_group_item } from './toggle-group-item-BLEzxLjD.js';
import { B as Badge } from './badge-DTmoBcZS.js';
import { L as Label } from './label-CXfFBnqp.js';
import { o as onDestroy } from './index-server-CicpYXzh.js';
import { R as Root$2, S as Select_trigger, a as Select_content, b as Select_item } from './index10-CThLLXbL.js';
import { E as External_link } from './external-link-CfLTOMNa.js';
import { H as Hoverable_item } from './hoverable-item-DbC0eVyl.js';
import { C as Chart_container, c as chartDataArray, x as SelectionState, a as accessor, g as setTooltipMetaContext, h as Chart, y as HighlightKey, L as Layer, k as asAny, u as Group, z as Arc, p as Legend, T as Tooltip, r as getChartContext, E as degreesToRadians, F as max$2, I as createMotion, J as min$2, K as TooltipList, M as TooltipItem, N as format$1, O as constant$1, P as array, Q as tau$3, v as layerClass, f as band } from './ChartAnnotations-BLeXX766.js';
import { h as cls } from './d3-tile-DavCumcS.js';
import { B as BarChart } from './BarChart-DvLFLLUH.js';
import 'd3-sankey';
import { s as sanitizeHtml, S as Safe_html_content } from './safe-html-content-B3tL84oN.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-D1aNdwc5.js';
import { t } from './translations-BxDrjLWK.js';

function getExerciseQuestionLabel(labels, key, fallback = "") {
  return labels?.[key] ?? fallback;
}
function getExerciseQuestionContractKey(question, fallbackIndex = 0) {
  if (question.key)
    return question.key;
  if (question.id !== void 0 && question.id !== null)
    return String(question.id);
  return String(fallbackIndex);
}
const TRUE_LABELS = /* @__PURE__ */ new Set(["true", "1", "yes"]);
const FALSE_LABELS = /* @__PURE__ */ new Set(["false", "0", "no"]);
function labelToBoolean(label) {
  const normalized = label.trim().toLowerCase();
  if (TRUE_LABELS.has(normalized))
    return true;
  if (FALSE_LABELS.has(normalized))
    return false;
  return void 0;
}
const RADIO_CODEC = {
  type: "RADIO",
  toApiPayload(data, questionId) {
    return { questionId, optionId: data.optionId };
  },
  fromApiPayload(payload) {
    const optionId = payload.optionId;
    if (optionId === void 0 || Number.isNaN(optionId))
      return null;
    return { type: "RADIO", optionId };
  }
};
const CHECKBOX_CODEC = {
  type: "CHECKBOX",
  toApiPayload(data, questionId) {
    return {
      questionId,
      answer: JSON.stringify({ type: "CHECKBOX", optionIds: data.optionIds })
    };
  },
  fromApiPayload(payload) {
    if (!payload.answer)
      return null;
    const { optionIds } = JSON.parse(payload.answer);
    if (!Array.isArray(optionIds))
      return null;
    return { type: "CHECKBOX", optionIds };
  }
};
const TRUE_FALSE_CODEC = {
  type: "TRUE_FALSE",
  toApiPayload(data, questionId) {
    return { questionId, answer: String(data.value) };
  },
  fromApiPayload(payload) {
    if (payload.answer === void 0)
      return null;
    const resolved = labelToBoolean(payload.answer);
    if (resolved === void 0)
      return null;
    return { type: "TRUE_FALSE", value: resolved };
  }
};
const TEXTAREA_CODEC = {
  type: "TEXTAREA",
  toApiPayload(data, questionId) {
    return { questionId, answer: data.text };
  },
  fromApiPayload(payload) {
    if (payload.answer === void 0)
      return null;
    return { type: "TEXTAREA", text: payload.answer };
  }
};
const SHORT_ANSWER_CODEC = {
  type: "SHORT_ANSWER",
  toApiPayload(data, questionId) {
    return { questionId, answer: data.text };
  },
  fromApiPayload(payload) {
    if (payload.answer === void 0)
      return null;
    return { type: "SHORT_ANSWER", text: payload.answer };
  }
};
const NUMERIC_CODEC = {
  type: "NUMERIC",
  toApiPayload(data, questionId) {
    return { questionId, answer: JSON.stringify({ type: "NUMERIC", value: data.value }) };
  },
  fromApiPayload(payload) {
    if (!payload.answer)
      return null;
    const { value } = JSON.parse(payload.answer);
    return { type: "NUMERIC", value };
  }
};
const FILL_BLANK_CODEC = {
  type: "FILL_BLANK",
  toApiPayload(data, questionId) {
    return { questionId, answer: JSON.stringify({ type: "FILL_BLANK", answers: data.values }) };
  },
  fromApiPayload(payload) {
    if (!payload.answer)
      return null;
    const { answers } = JSON.parse(payload.answer);
    const values = answers.map((v) => String(v).trim()).filter(Boolean);
    return values.length > 0 ? { type: "FILL_BLANK", values } : null;
  }
};
const WORD_BANK_CODEC = {
  type: "WORD_BANK",
  toApiPayload(data, questionId) {
    return { questionId, answer: JSON.stringify({ type: "WORD_BANK", filledBlanks: data.filledBlanks }) };
  },
  fromApiPayload(payload) {
    if (!payload.answer)
      return null;
    try {
      const parsed = JSON.parse(payload.answer);
      if (parsed?.type !== "WORD_BANK" || !Array.isArray(parsed.filledBlanks))
        return null;
      return { type: "WORD_BANK", filledBlanks: parsed.filledBlanks.map((v) => String(v ?? "")) };
    } catch {
      return null;
    }
  }
};
const FILE_UPLOAD_CODEC = {
  type: "FILE_UPLOAD",
  toApiPayload(data, questionId) {
    const obj = { fileKey: data.fileKey, fileName: data.fileName, mimeType: data.mimeType, size: data.size };
    return { questionId, answer: JSON.stringify(obj) };
  },
  fromApiPayload(payload) {
    if (!payload.answer)
      return null;
    const p = JSON.parse(payload.answer);
    return {
      type: "FILE_UPLOAD",
      fileKey: p.fileKey,
      fileName: p.fileName ?? "",
      mimeType: p.mimeType,
      size: p.size
    };
  }
};
const MATCHING_CODEC = {
  type: "MATCHING",
  toApiPayload(data, questionId) {
    return { questionId, answer: JSON.stringify({ type: "MATCHING", value: data.pairs }) };
  },
  fromApiPayload(payload) {
    if (!payload.answer)
      return null;
    const { value: pairs } = JSON.parse(payload.answer);
    return pairs.length > 0 ? { type: "MATCHING", pairs } : null;
  }
};
const ORDERING_CODEC = {
  type: "ORDERING",
  toApiPayload(data, questionId) {
    return { questionId, answer: JSON.stringify({ type: "ORDERING", value: data.orderedValues }) };
  },
  fromApiPayload(payload) {
    if (!payload.answer)
      return null;
    const { value: orderedValues } = JSON.parse(payload.answer);
    return orderedValues.length > 0 ? { type: "ORDERING", orderedValues } : null;
  }
};
const LINK_CODEC = {
  type: "LINK",
  toApiPayload(data, questionId) {
    return { questionId, answer: JSON.stringify({ type: "LINK", links: data.urls }) };
  },
  fromApiPayload(payload) {
    if (!payload.answer)
      return null;
    const { links } = JSON.parse(payload.answer);
    const urls = links.map((v) => String(v).trim()).filter(Boolean);
    return urls.length > 0 ? { type: "LINK", urls } : null;
  }
};
const HOTSPOT_CODEC = {
  type: "HOTSPOT",
  toApiPayload(data, questionId) {
    return { questionId, answer: JSON.stringify({ type: "HOTSPOT", value: data.coordinates }) };
  },
  fromApiPayload(payload) {
    if (!payload.answer)
      return null;
    const { value: coordinates } = JSON.parse(payload.answer);
    return coordinates.length > 0 ? { type: "HOTSPOT", coordinates } : null;
  }
};
const STAR_CODEC = {
  type: "STAR",
  toApiPayload(data, questionId) {
    return { questionId, answer: JSON.stringify({ type: "STAR", value: data.value }) };
  },
  fromApiPayload(payload, question) {
    if (!payload.answer)
      return null;
    try {
      const parsed = JSON.parse(payload.answer);
      if (parsed?.type !== "STAR")
        return null;
      const maxStars = getStarRatingMaxFromSettings(question.settings);
      if (!isValidStarRatingValue(parsed.value, maxStars))
        return null;
      return { type: "STAR", value: parsed.value };
    } catch {
      return null;
    }
  }
};
function isVideoRecordingAnswer(value) {
  if (!value || typeof value !== "object")
    return false;
  const data = value;
  return typeof data.assetId === "string" && data.assetId.length > 0 && typeof data.storageKey === "string" && data.storageKey.length > 0 && typeof data.fileName === "string" && typeof data.mimeType === "string" && data.mimeType.startsWith("video/") && typeof data.size === "number" && Number.isFinite(data.size) && data.size > 0 && typeof data.durationSeconds === "number" && Number.isFinite(data.durationSeconds) && data.durationSeconds > 0 && typeof data.recordedAt === "string" && typeof data.uploadedAt === "string" && data.provider === "cloudflare";
}
const VIDEO_RECORDING_CODEC = {
  type: "VIDEO_RECORDING",
  toApiPayload(data, questionId) {
    const { playbackUrl: _playbackUrl, ...answerData } = data;
    return { questionId, answer: JSON.stringify(answerData) };
  },
  fromApiPayload(payload) {
    if (!payload.answer)
      return null;
    try {
      const parsed = JSON.parse(payload.answer);
      if (parsed?.type !== "VIDEO_RECORDING" || !isVideoRecordingAnswer(parsed))
        return null;
      return {
        type: "VIDEO_RECORDING",
        assetId: parsed.assetId,
        storageKey: parsed.storageKey,
        fileName: parsed.fileName,
        mimeType: parsed.mimeType,
        size: parsed.size,
        durationSeconds: parsed.durationSeconds,
        recordedAt: parsed.recordedAt,
        uploadedAt: parsed.uploadedAt,
        provider: "cloudflare",
        retakeCount: typeof parsed.retakeCount === "number" ? parsed.retakeCount : void 0
      };
    } catch {
      return null;
    }
  }
};
const ANSWER_CODECS = {
  [QUESTION_TYPE_KEY.RADIO]: RADIO_CODEC,
  [QUESTION_TYPE_KEY.CHECKBOX]: CHECKBOX_CODEC,
  [QUESTION_TYPE_KEY.TRUE_FALSE]: TRUE_FALSE_CODEC,
  [QUESTION_TYPE_KEY.TEXTAREA]: TEXTAREA_CODEC,
  [QUESTION_TYPE_KEY.SHORT_ANSWER]: SHORT_ANSWER_CODEC,
  [QUESTION_TYPE_KEY.NUMERIC]: NUMERIC_CODEC,
  [QUESTION_TYPE_KEY.FILL_BLANK]: FILL_BLANK_CODEC,
  [QUESTION_TYPE_KEY.WORD_BANK]: WORD_BANK_CODEC,
  [QUESTION_TYPE_KEY.FILE_UPLOAD]: FILE_UPLOAD_CODEC,
  [QUESTION_TYPE_KEY.MATCHING]: MATCHING_CODEC,
  [QUESTION_TYPE_KEY.ORDERING]: ORDERING_CODEC,
  [QUESTION_TYPE_KEY.LINK]: LINK_CODEC,
  [QUESTION_TYPE_KEY.HOTSPOT]: HOTSPOT_CODEC,
  [QUESTION_TYPE_KEY.STAR]: STAR_CODEC,
  [QUESTION_TYPE_KEY.VIDEO_RECORDING]: VIDEO_RECORDING_CODEC
};
function toApiPayload(data, questionId) {
  return ANSWER_CODECS[data.type].toApiPayload(data, questionId);
}
function extractAnswerDisplayValues(data) {
  switch (data.type) {
    case "RADIO":
      return {
        selectedIds: [String(data.optionId)],
        selectedValues: [data.optionId]
      };
    case "CHECKBOX":
      return {
        selectedIds: data.optionIds.map(String),
        selectedValues: data.optionIds
      };
    case "TRUE_FALSE":
      return {
        selectedIds: [String(data.value)],
        selectedValues: [data.value]
      };
    case "TEXTAREA":
    case "SHORT_ANSWER":
      return { selectedIds: [], selectedValues: [], text: data.text };
    case "NUMERIC":
      return { selectedIds: [], selectedValues: [], text: String(data.value) };
    case "STAR":
      return { selectedIds: [], selectedValues: [data.value], text: String(data.value) };
    case "FILL_BLANK":
      return { selectedIds: [], selectedValues: [], text: data.values.join(", ") };
    case "WORD_BANK":
      return { selectedIds: [], selectedValues: [], text: data.filledBlanks.filter(Boolean).join(", ") };
    case "LINK":
      return { selectedIds: [], selectedValues: data.urls, text: data.urls.join(", ") };
    case "MATCHING":
    case "ORDERING":
    case "HOTSPOT":
    case "FILE_UPLOAD":
    case "VIDEO_RECORDING":
      return { selectedIds: [], selectedValues: [] };
    default:
      return { selectedIds: [], selectedValues: [] };
  }
}
function getRendererDefinition(registry, questionType, fallback) {
  return registry[questionType] ?? fallback;
}
function getRendererForMode(registry, questionType, mode, fallback) {
  const rendererDefinition = getRendererDefinition(registry, questionType, fallback);
  const resolvedMode = mode === "view" ? "take" : mode;
  if (resolvedMode === "review") {
    return rendererDefinition.review ?? rendererDefinition.take;
  }
  return rendererDefinition[resolvedMode];
}
function sanitizeTextareaCharacterLimit(value) {
  const parsed = typeof value === "number" ? value : typeof value === "string" ? Number(value) : Number.NaN;
  if (!Number.isFinite(parsed) || parsed < 0)
    return void 0;
  return Math.floor(parsed);
}
function resolveSettings(input) {
  if (!input || typeof input !== "object")
    return {};
  if ("settings" in input && input.settings && typeof input.settings === "object" && !Array.isArray(input.settings)) {
    return input.settings;
  }
  return input;
}
function decodeHtmlEntities(value) {
  return value.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&#x27;/gi, "'").replace(/&#(\d+);/gi, (_, code) => String.fromCharCode(Number(code))).replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}
function getTextareaCharacterLimits(input) {
  const settings = resolveSettings(input);
  const minCharacters = sanitizeTextareaCharacterLimit(settings.minCharacters);
  const rawMaxCharacters = sanitizeTextareaCharacterLimit(settings.maxCharacters);
  const maxCharacters = minCharacters !== void 0 && rawMaxCharacters !== void 0 && rawMaxCharacters < minCharacters ? minCharacters : rawMaxCharacters;
  return {
    minCharacters,
    maxCharacters
  };
}
function getTextareaAnswerText(value) {
  const html = String(value ?? "");
  return decodeHtmlEntities(html.replace(/<br\s*\/?>/gi, "\n").replace(/<\/(p|div|li|blockquote|h[1-6])>/gi, "\n").replace(/<li\b[^>]*>/gi, "- ").replace(/<[^>]*>/g, "").replace(/\r\n?/g, "\n")).trim();
}
function getTextareaAnswerCharacterCount(value) {
  return getTextareaAnswerText(value).length;
}
function validateTextareaAnswer(value, input) {
  const { minCharacters, maxCharacters } = getTextareaCharacterLimits(input);
  const characterCount = getTextareaAnswerCharacterCount(value);
  if (minCharacters !== void 0 && characterCount < minCharacters) {
    return {
      characterCount,
      minCharacters,
      maxCharacters,
      isValid: false,
      reason: "below_min"
    };
  }
  if (maxCharacters !== void 0 && characterCount > maxCharacters) {
    return {
      characterCount,
      minCharacters,
      maxCharacters,
      isValid: false,
      reason: "above_max"
    };
  }
  return {
    characterCount,
    minCharacters,
    maxCharacters,
    isValid: true,
    reason: null
  };
}
function Question_title($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { title, class: className = "" } = $$props;
    $$renderer2.push(`<h4${attr_class(clsx(cn("ui:font-medium", className)))}>${escape_html(title)}</h4>`);
  });
}
function Question_surface($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className = "", children } = $$props;
    $$renderer2.push(`<div${attr_class(clsx(cn("ui:rounded-md ui:border ui:p-4", className)))}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function Option_image($$renderer, $$props) {
  let {
    src,
    alt,
    variant = "preview",
    onRemove,
    disabled = false,
    removeTooltip = "",
    removeSr = "Remove image",
    hasAnyImageInOptions = false
  } = $$props;
  const sizeClass = variant === "edit" ? "ui:h-24 ui:w-24" : "ui:h-28 ui:w-28";
  const containerClass = `${sizeClass} ui:overflow-hidden ui:rounded-md ui:border ui:border-border`;
  if (variant === "edit") {
    $$renderer.push("<!--[-->");
    if (src) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div${attr_class(`ui:group ui:relative ${stringify(sizeClass)} ui:rounded-md ui:border`)}><div class="ui:absolute ui:inset-0 ui:overflow-hidden ui:rounded-md"><img${attr("src", src)}${attr("alt", alt)} class="ui:h-full ui:w-full ui:object-cover"/></div> `);
      if (onRemove) {
        $$renderer.push("<!--[-->");
        Icon_button($$renderer, {
          disabled,
          tooltipClass: "ui:absolute ui:right-[-12px] ui:top-[-12px] ui:z-10",
          class: "ui:opacity-0 ui:transition-opacity ui:group-hover:opacity-100",
          tooltip: removeTooltip,
          onclick: onRemove,
          size: "icon-sm",
          children: ($$renderer2) => {
            X($$renderer2, {});
            $$renderer2.push(`<!----> <span class="ui:sr-only">${escape_html(removeSr)}</span>`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer.push("<!--[!-->");
      }
      $$renderer.push(`<!--]--></div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]-->`);
  } else {
    $$renderer.push("<!--[!-->");
    if (hasAnyImageInOptions) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div${attr_class(`${stringify(containerClass)} ${stringify(src ? "" : "ui:bg-muted")}`)}>`);
      if (src) {
        $$renderer.push("<!--[-->");
        $$renderer.push(`<img${attr("src", src)}${attr("alt", alt)} class="ui:h-full ui:w-full ui:object-cover"/>`);
      } else {
        $$renderer.push("<!--[!-->");
      }
      $$renderer.push(`<!--]--></div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]-->`);
}
function getOptionImageUrl(option) {
  const settings = option.settings;
  if (!settings || typeof settings !== "object" || Array.isArray(settings)) {
    return null;
  }
  const imageUrl = settings.imageUrl;
  if (typeof imageUrl !== "string") {
    return null;
  }
  const trimmedImageUrl = imageUrl.trim();
  return trimmedImageUrl.length > 0 ? trimmedImageUrl : null;
}
function hasOptionImages(options) {
  return (options ?? []).some((opt) => getOptionImageUrl(opt) !== null);
}
function removeOptionSetting(option, key) {
  const currentSettings = option.settings && typeof option.settings === "object" && !Array.isArray(option.settings) ? option.settings : {};
  const nextSettings = { ...currentSettings };
  delete nextSettings[key];
  return {
    ...option,
    settings: nextSettings
  };
}
function Edit$e($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      },
      onImageUpload
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    let optionImageError = "";
    let isOptionImageUploading = false;
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function updateOption(index, partial) {
      const options = [...question.options ?? []];
      const option = options[index];
      if (!option) return;
      options[index] = { ...option, ...partial };
      patchQuestion({ options });
    }
    function addOption() {
      patchQuestion({
        options: [
          ...question.options ?? [],
          {
            id: `${(/* @__PURE__ */ new Date()).getTime()}-option`,
            label: "",
            value: "",
            isCorrect: false,
            settings: {}
          }
        ]
      });
    }
    function removeOption(index) {
      const options = [...question.options ?? []];
      options.splice(index, 1);
      patchQuestion({ options });
    }
    function toggleCorrectOption(index) {
      const options = [...question.options ?? []];
      const option = options[index];
      if (!option) return;
      options[index] = { ...option, isCorrect: option.isCorrect !== true };
      patchQuestion({ options });
    }
    function openOptionImagePicker(index) {
      if (disabled || isOptionImageUploading) return;
    }
    function removeOptionImage(index) {
      const options = [...question.options ?? []];
      const option = options[index];
      if (!option) return;
      options[index] = removeOptionSetting(option, "imageUrl");
      patchQuestion({ options });
      optionImageError = "";
    }
    $$renderer2.push(`<div class="ui:space-y-3"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("checkbox.edit.helper"))}</p> `);
    if (optionImageError) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-destructive ui:text-xs">${escape_html(optionImageError)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <input type="file" accept="image/*" class="ui:hidden"${attr("disabled", disabled || isOptionImageUploading, true)}/> <div class="ui:space-y-2"><!--[-->`);
    const each_array = ensure_array_like(question.options ?? []);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let option = each_array[index];
      const optionImageUrl = getOptionImageUrl(option);
      $$renderer2.push(`<div class="ui:flex ui:min-w-0 ui:items-start ui:gap-2">`);
      Icon_button($$renderer2, {
        type: "button",
        disabled,
        tooltip: option.isCorrect === true ? label("checkbox.edit.correct_selected_tooltip") : label("checkbox.edit.toggle_correct_tooltip"),
        class: option.isCorrect === true ? "ui:text-primary ui:border-primary/30 ui:bg-primary/10" : "ui:text-muted-foreground",
        onclick: () => toggleCorrectOption(index),
        children: ($$renderer3) => {
          if (option.isCorrect === true) {
            $$renderer3.push("<!--[-->");
            Check($$renderer3, { class: "ui:size-4" });
          } else {
            $$renderer3.push("<!--[!-->");
            Circle($$renderer3, { class: "ui:size-4" });
          }
          $$renderer3.push(`<!--]--> <span class="ui:sr-only">${escape_html(label("checkbox.edit.toggle_correct_sr"))}</span>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> <div class="ui:min-w-0 ui:flex-1 ui:space-y-2">`);
      Input($$renderer2, {
        class: "ui:w-full",
        placeholder: [label("common.option_prefix"), String(index + 1)].filter(Boolean).join(" ").trim(),
        value: option.label,
        disabled,
        onchange: (event) => updateOption(index, { label: event.currentTarget.value })
      });
      $$renderer2.push(`<!----> <div class="ui:flex ui:flex-wrap ui:items-start ui:gap-2">`);
      Button($$renderer2, {
        variant: "outline",
        size: "sm",
        type: "button",
        disabled: disabled || isOptionImageUploading,
        onclick: () => openOptionImagePicker(),
        children: ($$renderer3) => {
          Plus($$renderer3, { class: "ui:size-4" });
          $$renderer3.push(`<!----> ${escape_html(label("question.edit.add_image"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      if (optionImageUrl) {
        $$renderer2.push("<!--[-->");
        Option_image($$renderer2, {
          src: optionImageUrl,
          alt: label("question.edit.image_alt"),
          variant: "edit",
          onRemove: () => removeOptionImage(index),
          disabled,
          removeTooltip: label("question.edit.remove_image_tooltip"),
          removeSr: label("question.edit.remove_image_sr")
        });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div> `);
      Icon_button($$renderer2, {
        type: "button",
        disabled,
        tooltip: label("common.remove"),
        class: "ui:text-muted-foreground",
        onclick: () => removeOption(index),
        children: ($$renderer3) => {
          Trash_2($$renderer3, { class: "ui:size-4" });
          $$renderer3.push(`<!----> <span class="ui:sr-only">${escape_html(label("common.remove"))}</span>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Button($$renderer2, {
      variant: "outline",
      type: "button",
      disabled,
      onclick: addOption,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(label("common.add_option"))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Edit$d($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const acceptedTypes = normalizeAcceptedFileTypes(question.settings?.acceptedTypes);
    const acceptedTypesDisplay = acceptedTypes.length > 0 ? formatAcceptedFileTypes(acceptedTypes) : label("file_upload.edit.accepted_types_placeholder");
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function patchSettings(next) {
      patchQuestion({ settings: { ...question.settings ?? {}, ...next } });
    }
    function toggleAcceptedType(typeValue, checked) {
      const nextAcceptedTypes = checked ? [...acceptedTypes, typeValue] : acceptedTypes.filter((acceptedType) => acceptedType !== typeValue);
      patchSettings({ acceptedTypes: nextAcceptedTypes });
    }
    const rawMaxSize = question.settings?.maxSizeMb;
    const maxSizeMb = typeof rawMaxSize === "number" && !Number.isNaN(rawMaxSize) && rawMaxSize >= 0 ? String(Math.min(rawMaxSize, 2)) : "";
    function onMaxSizeChange(value) {
      const num = Number(value);
      if (value === "" || Number.isNaN(num)) {
        patchSettings({ maxSizeMb: void 0 });
        return;
      }
      patchSettings({ maxSizeMb: Math.min(2, Math.max(0, num)) });
    }
    $$renderer2.push(`<div class="ui:space-y-3"><div class="ui:grid ui:gap-3 ui:md:grid-cols-2"><div class="ui:space-y-1"><p class="ui:text-sm ui:font-medium">${escape_html(label("file_upload.preview.accepted_types_label"))}</p> <!---->`);
    Root$3($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Popover_trigger($$renderer3, {
          disabled,
          class: "ui:w-full",
          children: ($$renderer4) => {
            Button($$renderer4, {
              type: "button",
              variant: "outline",
              class: "ui:w-full ui:justify-between ui:text-left ui:font-normal",
              disabled,
              children: ($$renderer5) => {
                $$renderer5.push(`<span class="ui:truncate">${escape_html(acceptedTypesDisplay)}</span> `);
                Chevron_down($$renderer5, {
                  class: "ui:ml-2 ui:size-4 ui:shrink-0 ui:opacity-50",
                  "aria-hidden": "true"
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Popover_content($$renderer3, {
          align: "start",
          class: "ui:max-h-72 ui:w-88 ui:p-2",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="ui:flex ui:max-h-64 ui:flex-col ui:gap-0 ui:overflow-y-auto"><!--[-->`);
            const each_array = ensure_array_like(FILE_UPLOAD_SUPPORTED_TYPES);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let fileType = each_array[$$index];
              $$renderer4.push(`<label${attr_class(`ui:flex ui:cursor-pointer ui:select-none ui:items-center ui:gap-2 ui:rounded-sm ui:px-2 ui:py-2 ui:text-sm hover:ui:bg-accent hover:ui:text-accent-foreground ${stringify(disabled ? "ui:pointer-events-none ui:opacity-50" : "")}`)}>`);
              Checkbox($$renderer4, {
                checked: acceptedTypes.includes(fileType.value),
                disabled,
                onCheckedChange: (checked) => toggleAcceptedType(fileType.value, checked === true)
              });
              $$renderer4.push(`<!----> <span>${escape_html(fileType.label)}</span></label>`);
            }
            $$renderer4.push(`<!--]--></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <div class="ui:space-y-1"><p class="ui:text-sm ui:font-medium">${escape_html(label("file_upload.preview.max_size_label"))}</p> `);
    Input($$renderer2, {
      type: "number",
      min: "0",
      max: "2",
      step: "0.1",
      placeholder: label("file_upload.edit.max_size_placeholder"),
      value: maxSizeMb,
      disabled,
      onchange: (event) => onMaxSizeChange(event.currentTarget.value)
    });
    $$renderer2.push(`<!----></div></div></div>`);
  });
}
function Edit$c($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function patchSettings(next) {
      patchQuestion({ settings: { ...question.settings ?? {}, ...next } });
    }
    $$renderer2.push(`<div class="ui:space-y-3">`);
    Textarea($$renderer2, {
      class: "ui:w-full",
      rows: 2,
      placeholder: label("fill_blank.edit.accepted_answers_placeholder"),
      value: String(question.settings?.acceptedAnswers ?? ""),
      disabled,
      onchange: (event) => patchSettings({ acceptedAnswers: event.currentTarget.value })
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Edit$b($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    $$renderer2.push(`<div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("hotspot.edit.helper"))}</p></div>`);
  });
}
function Edit$a($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    $$renderer2.push(`<div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("matching.edit.helper"))}</p></div>`);
  });
}
function Edit$9($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function patchSettings(next) {
      patchQuestion({ settings: { ...question.settings ?? {}, ...next } });
    }
    $$renderer2.push(`<div class="ui:space-y-3"><div class="ui:grid ui:gap-3 ui:md:grid-cols-2"><div class="ui:space-y-1"><div class="ui:flex ui:items-center ui:gap-1"><p class="ui:text-sm ui:font-medium">${escape_html(label("numeric.edit.correct_value_label"))}</p> `);
    Icon_button($$renderer2, {
      type: "button",
      class: "ui:h-6 ui:w-6",
      disabled,
      tooltip: label("numeric.edit.correct_value_info"),
      children: ($$renderer3) => {
        Circle_question_mark($$renderer3, { class: "ui:size-3.5" });
        $$renderer3.push(`<!----> <span class="ui:sr-only">${escape_html(label("numeric.edit.correct_value_info"))}</span>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> `);
    Input($$renderer2, {
      type: "number",
      placeholder: label("numeric.edit.correct_value_placeholder"),
      value: String(question.settings?.correctValue ?? ""),
      disabled,
      onchange: (event) => patchSettings({ correctValue: Number(event.currentTarget.value) })
    });
    $$renderer2.push(`<!----></div> <div class="ui:space-y-1"><div class="ui:flex ui:items-center ui:gap-1"><p class="ui:text-sm ui:font-medium">${escape_html(label("numeric.edit.tolerance_label"))}</p> `);
    Icon_button($$renderer2, {
      type: "button",
      class: "ui:h-6 ui:w-6",
      disabled,
      tooltip: label("numeric.edit.tolerance_info"),
      children: ($$renderer3) => {
        Circle_question_mark($$renderer3, { class: "ui:size-3.5" });
        $$renderer3.push(`<!----> <span class="ui:sr-only">${escape_html(label("numeric.edit.tolerance_info"))}</span>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> `);
    Input($$renderer2, {
      type: "number",
      placeholder: label("numeric.edit.tolerance_placeholder"),
      value: String(question.settings?.tolerance ?? ""),
      disabled,
      onchange: (event) => patchSettings({ tolerance: Number(event.currentTarget.value) })
    });
    $$renderer2.push(`<!----></div></div></div>`);
  });
}
function normalizeText(value) {
  return String(value ?? "").trim();
}
function normalizeToken(value) {
  return normalizeText(value).toLowerCase();
}
function buildFallbackLabel(index) {
  return String(index + 1);
}
function buildFallbackId(index) {
  return `ordering-${index + 1}`;
}
function getOrderingItemsFromQuestion(question) {
  const options = Array.isArray(question.options) ? question.options : [];
  if (options.length > 0) {
    return options.map((option, index) => {
      const label = normalizeText(option.label ?? option.value) || buildFallbackLabel(index);
      const id = normalizeText(option.id ?? option.value ?? option.label ?? buildFallbackId(index)) || buildFallbackId(index);
      const answerValue = normalizeText(option.id ?? option.value ?? option.label ?? id) || id;
      return {
        id,
        label,
        answerValue
      };
    });
  }
  const rawItems = Array.isArray(question.settings?.items) ? question.settings.items : [];
  return rawItems.map((rawItem, index) => {
    const label = normalizeText(rawItem) || buildFallbackLabel(index);
    const id = buildFallbackId(index);
    return {
      id,
      label,
      answerValue: label
    };
  });
}
function toOrderingQuestionOptions(items) {
  return items.map((item, index) => ({
    id: item.id || buildFallbackId(index),
    label: item.label,
    value: item.label,
    isCorrect: false
  }));
}
function toOrderingSettings(items) {
  return items.map((item) => item.label);
}
function getOrderedValues(answer) {
  if (answer && typeof answer === "object" && "type" in answer && answer.type === "ORDERING") {
    return Array.isArray(answer.orderedValues) ? answer.orderedValues : [];
  }
  return Array.isArray(answer) ? answer : [];
}
function applyOrderingAnswer(items, answer) {
  const orderedValues = getOrderedValues(answer);
  if (orderedValues.length === 0) {
    return items;
  }
  const answerTokens = orderedValues.map((entry) => normalizeToken(entry)).filter(Boolean);
  if (answerTokens.length === 0) {
    return items;
  }
  const usedItemIds = /* @__PURE__ */ new Set();
  const orderedItems = [];
  answerTokens.forEach((token) => {
    const matchingItem = items.find((item) => {
      if (usedItemIds.has(item.id)) return false;
      const candidates = [item.id, item.answerValue, item.label].map((candidate) => normalizeToken(candidate));
      return candidates.includes(token);
    });
    if (!matchingItem) return;
    usedItemIds.add(matchingItem.id);
    orderedItems.push(matchingItem);
  });
  const remainingItems = items.filter((item) => !usedItemIds.has(item.id));
  return [...orderedItems, ...remainingItems];
}
function areSameOrdering(left, right) {
  if (left.length !== right.length) return false;
  return left.every((item, index) => {
    const other = right[index];
    return other ? item.answerValue === other.answerValue : false;
  });
}
function Edit$8($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    let items = [];
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function createItemId() {
      return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-ordering-item`;
    }
    function normalizeItemIds(nextItems) {
      return nextItems.map((item) => {
        const normalizedId = item.id || createItemId();
        return {
          ...item,
          id: normalizedId,
          answerValue: item.answerValue || normalizedId
        };
      });
    }
    function syncQuestionWithItems(nextItems) {
      const normalizedItems = normalizeItemIds(nextItems);
      items = normalizedItems;
      getItemsSignature(normalizedItems);
      patchQuestion({
        options: toOrderingQuestionOptions(normalizedItems),
        settings: {
          ...question.settings ?? {},
          items: toOrderingSettings(normalizedItems)
        }
      });
    }
    function getItemsSignature(nextItems) {
      return JSON.stringify(nextItems.map((item) => ({
        id: item.id,
        label: item.label,
        answerValue: item.answerValue
      })));
    }
    function updateItemLabel(id, label2) {
      const nextItems = items.map((item) => item.id === id ? { ...item, label: label2, answerValue: item.answerValue || item.id } : item);
      syncQuestionWithItems(nextItems);
    }
    function addItem() {
      const nextId = createItemId();
      syncQuestionWithItems([...items, { id: nextId, label: "", answerValue: nextId }]);
    }
    function removeItem(id) {
      syncQuestionWithItems(items.filter((item) => item.id !== id));
    }
    function formatStepPlaceholder(index) {
      const template = label("ordering.edit.step_placeholder");
      if (!template) return String(index + 1);
      return template.replace("{index}", String(index + 1));
    }
    $$renderer2.push(`<div class="ui:space-y-3"><div class="ui:flex ui:items-center ui:justify-between"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("ordering.edit.helper"))}</p> `);
    Button($$renderer2, {
      variant: "outline",
      size: "sm",
      type: "button",
      disabled,
      onclick: addItem,
      children: ($$renderer3) => {
        Plus($$renderer3, { class: "ui:size-4" });
        $$renderer3.push(`<!----> ${escape_html(label("ordering.edit.add_step"))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <section class="ui:space-y-2">`);
    if (items.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:text-muted-foreground ui:rounded-md ui:border ui:border-dashed ui:p-4 ui:text-sm">${escape_html(label("ordering.edit.empty"))}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(items);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let item = each_array[index];
        $$renderer2.push(`<div class="ui:bg-background ui:flex ui:items-center ui:gap-2 ui:rounded-md ui:border ui:p-2"><div class="ui:text-muted-foreground ui:flex ui:cursor-grab ui:items-center">`);
        Grip_vertical($$renderer2, { class: "ui:size-4" });
        $$renderer2.push(`<!----></div> <span class="ui:bg-muted ui:text-muted-foreground ui:flex ui:h-6 ui:w-6 ui:items-center ui:justify-center ui:rounded-full ui:text-xs">${escape_html(index + 1)}</span> `);
        Input($$renderer2, {
          class: "ui:flex-1",
          value: item.label,
          disabled,
          placeholder: formatStepPlaceholder(index),
          onchange: (event) => updateItemLabel(item.id, event.currentTarget.value)
        });
        $$renderer2.push(`<!----> `);
        Icon_button($$renderer2, {
          type: "button",
          disabled,
          tooltip: label("ordering.edit.remove_step_tooltip"),
          class: "ui:text-muted-foreground",
          onclick: () => removeItem(item.id),
          children: ($$renderer3) => {
            Trash_2($$renderer3, { class: "ui:size-4" });
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></section></div>`);
  });
}
function Edit$7($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      },
      onImageUpload
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    let optionImageError = "";
    let isOptionImageUploading = false;
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function updateOption(index, partial) {
      const options = [...question.options ?? []];
      const option = options[index];
      if (!option) return;
      options[index] = { ...option, ...partial };
      patchQuestion({ options });
    }
    function setCorrectOption(index) {
      const options = [...question.options ?? []].map((option, optionIndex) => ({ ...option, isCorrect: optionIndex === index }));
      patchQuestion({ options });
    }
    function addOption() {
      patchQuestion({
        options: [
          ...question.options ?? [],
          {
            id: `${(/* @__PURE__ */ new Date()).getTime()}-option`,
            label: "",
            value: "",
            isCorrect: false,
            settings: {}
          }
        ]
      });
    }
    function removeOption(index) {
      const options = [...question.options ?? []];
      options.splice(index, 1);
      patchQuestion({ options });
    }
    function openOptionImagePicker(index) {
      if (disabled || isOptionImageUploading) return;
    }
    function removeOptionImage(index) {
      const options = [...question.options ?? []];
      const option = options[index];
      if (!option) return;
      options[index] = removeOptionSetting(option, "imageUrl");
      patchQuestion({ options });
      optionImageError = "";
    }
    $$renderer2.push(`<div class="ui:space-y-3"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("radio.edit.helper"))}</p> `);
    if (optionImageError) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-destructive ui:text-xs">${escape_html(optionImageError)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <input type="file" accept="image/*" class="ui:hidden"${attr("disabled", disabled || isOptionImageUploading, true)}/> <div class="ui:space-y-2"><!--[-->`);
    const each_array = ensure_array_like(question.options ?? []);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let option = each_array[index];
      const optionImageUrl = getOptionImageUrl(option);
      $$renderer2.push(`<div class="ui:flex ui:min-w-0 ui:items-start ui:gap-2">`);
      Icon_button($$renderer2, {
        type: "button",
        disabled,
        tooltip: option.isCorrect === true ? label("radio.edit.correct_selected_tooltip") : label("radio.edit.mark_correct_tooltip"),
        class: option.isCorrect === true ? "ui:text-primary ui:border-primary/30 ui:bg-primary/10" : "ui:text-muted-foreground",
        onclick: () => setCorrectOption(index),
        children: ($$renderer3) => {
          if (option.isCorrect === true) {
            $$renderer3.push("<!--[-->");
            Check($$renderer3, { class: "ui:size-4" });
          } else {
            $$renderer3.push("<!--[!-->");
            Circle($$renderer3, { class: "ui:size-4" });
          }
          $$renderer3.push(`<!--]--> <span class="ui:sr-only">${escape_html(label("radio.edit.mark_correct_sr"))}</span>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> <div class="ui:min-w-0 ui:flex-1 ui:space-y-2">`);
      Input($$renderer2, {
        class: "ui:w-full",
        placeholder: [label("common.option_prefix"), String(index + 1)].filter(Boolean).join(" ").trim(),
        value: option.label,
        disabled,
        onchange: (event) => updateOption(index, { label: event.currentTarget.value })
      });
      $$renderer2.push(`<!----> <div class="ui:flex ui:flex-wrap ui:items-start ui:gap-2">`);
      Button($$renderer2, {
        variant: "outline",
        size: "sm",
        type: "button",
        disabled: disabled || isOptionImageUploading,
        onclick: () => openOptionImagePicker(),
        children: ($$renderer3) => {
          Plus($$renderer3, { class: "ui:size-4" });
          $$renderer3.push(`<!----> ${escape_html(label("question.edit.add_image"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      if (optionImageUrl) {
        $$renderer2.push("<!--[-->");
        Option_image($$renderer2, {
          src: optionImageUrl,
          alt: label("question.edit.image_alt"),
          variant: "edit",
          onRemove: () => removeOptionImage(index),
          disabled,
          removeTooltip: label("question.edit.remove_image_tooltip"),
          removeSr: label("question.edit.remove_image_sr")
        });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div> `);
      Icon_button($$renderer2, {
        type: "button",
        disabled,
        tooltip: label("common.remove"),
        class: "ui:text-muted-foreground",
        onclick: () => removeOption(index),
        children: ($$renderer3) => {
          Trash_2($$renderer3, { class: "ui:size-4" });
          $$renderer3.push(`<!----> <span class="ui:sr-only">${escape_html(label("common.remove"))}</span>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Button($$renderer2, {
      variant: "outline",
      type: "button",
      disabled,
      onclick: addOption,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(label("common.add_option"))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Edit$6($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function patchSettings(next) {
      patchQuestion({ settings: { ...question.settings ?? {}, ...next } });
    }
    $$renderer2.push(`<div class="ui:space-y-3">`);
    Textarea($$renderer2, {
      class: "ui:w-full",
      rows: 2,
      placeholder: label("link.edit.instructions_placeholder"),
      value: String(question.settings?.instructions ?? ""),
      disabled,
      onchange: (event) => patchSettings({ instructions: event.currentTarget.value })
    });
    $$renderer2.push(`<!----> <p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("link.edit.helper"))}</p></div>`);
  });
}
const WORD_BANK_BLANK_MARKER = "___";
function countWordBankBlanks(template) {
  if (!template) return 0;
  const parts = template.split(WORD_BANK_BLANK_MARKER);
  return Math.max(0, parts.length - 1);
}
function parseWordBankTemplate(template) {
  const segments = [];
  if (!template) return segments;
  const parts = template.split(WORD_BANK_BLANK_MARKER);
  let blankIndex = 0;
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].length > 0) {
      segments.push({ type: "text", value: parts[i] });
    }
    if (i < parts.length - 1) {
      segments.push({ type: "blank", index: blankIndex });
      blankIndex += 1;
    }
  }
  return segments;
}
function buildWordBankChips(correctAnswers, distractors) {
  const chips = [];
  correctAnswers.forEach((raw, index) => {
    const label = String(raw ?? "").trim();
    chips.push({ id: `correct-${index}`, label });
  });
  distractors.forEach((raw, index) => {
    const label = String(raw ?? "").trim();
    if (!label) return;
    chips.push({ id: `distractor-${index}`, label });
  });
  return chips;
}
function Edit$5($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function patchSettings(next) {
      patchQuestion({ settings: { ...question.settings ?? {}, ...next } });
    }
    const template = String(question.settings?.template ?? "");
    const correctAnswers = (() => {
      const raw = question.settings?.correctAnswers;
      return Array.isArray(raw) ? raw.map((s) => String(s ?? "")) : [];
    })();
    const distractors = (() => {
      const raw = question.settings?.distractors;
      return Array.isArray(raw) ? raw.map((s) => String(s ?? "")) : [];
    })();
    const blankCount = countWordBankBlanks(template);
    function onTemplateInput(value) {
      const nextBlankCount = countWordBankBlanks(value);
      const prev = correctAnswers;
      const nextCorrect = [];
      for (let i = 0; i < nextBlankCount; i++) {
        nextCorrect.push(prev[i] ?? "");
      }
      patchSettings({ template: value, correctAnswers: nextCorrect });
    }
    function setCorrectAnswerAt(index, value) {
      const next = [...correctAnswers];
      next[index] = value;
      patchSettings({ correctAnswers: next });
    }
    function addDistractor() {
      patchSettings({ distractors: [...distractors, ""] });
    }
    function setDistractorAt(index, value) {
      const next = [...distractors];
      next[index] = value;
      patchSettings({ distractors: next });
    }
    function removeDistractorAt(index) {
      patchSettings({ distractors: distractors.filter((_, i) => i !== index) });
    }
    $$renderer2.push(`<div class="ui:space-y-4"><div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("word_bank.edit.template_label"))}</p> `);
    Textarea($$renderer2, {
      class: "ui:w-full",
      rows: 4,
      value: template,
      placeholder: label("word_bank.edit.template_placeholder"),
      disabled,
      onchange: (event) => onTemplateInput(event.currentTarget.value)
    });
    $$renderer2.push(`<!----> <p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("word_bank.edit.template_helper"))}</p> `);
    if (blankCount === 0 && template.trim().length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-destructive ui:text-xs">${escape_html(label("word_bank.edit.no_blanks_warning"))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (blankCount > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("word_bank.edit.correct_answers_heading"))}</p> <div class="ui:flex ui:flex-col ui:gap-2"><!--[-->`);
      const each_array = ensure_array_like(Array.from({ length: blankCount }, (_, i) => i));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let blankIndex = each_array[$$index];
        $$renderer2.push(`<div class="ui:flex ui:flex-col ui:gap-1 sm:ui:flex-row sm:ui:items-center sm:ui:gap-3"><span class="ui:text-muted-foreground ui:min-w-18 ui:text-sm">${escape_html(label("word_bank.edit.blank_label"))} ${escape_html(blankIndex + 1)}</span> `);
        Input($$renderer2, {
          class: "ui:flex-1",
          value: correctAnswers[blankIndex] ?? "",
          placeholder: label("word_bank.edit.correct_placeholder"),
          disabled,
          onchange: (event) => setCorrectAnswerAt(blankIndex, event.currentTarget.value)
        });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("word_bank.edit.distractors_heading"))}</p> <div class="ui:flex ui:flex-col ui:gap-2"><!--[-->`);
    const each_array_1 = ensure_array_like(distractors);
    for (let distractorIndex = 0, $$length = each_array_1.length; distractorIndex < $$length; distractorIndex++) {
      each_array_1[distractorIndex];
      $$renderer2.push(`<div class="ui:flex ui:items-center ui:gap-2">`);
      Input($$renderer2, {
        class: "ui:flex-1",
        value: distractors[distractorIndex] ?? "",
        placeholder: label("word_bank.edit.distractor_placeholder"),
        disabled,
        onchange: (event) => setDistractorAt(distractorIndex, event.currentTarget.value)
      });
      $$renderer2.push(`<!----> `);
      Icon_button($$renderer2, {
        type: "button",
        class: "ui:shrink-0 ui:text-muted-foreground",
        disabled,
        tooltip: label("common.remove"),
        onclick: () => removeDistractorAt(distractorIndex),
        children: ($$renderer3) => {
          Trash_2($$renderer3, { class: "ui:size-4" });
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Button($$renderer2, {
      type: "button",
      variant: "outline",
      size: "sm",
      disabled,
      onclick: addDistractor,
      children: ($$renderer3) => {
        Plus($$renderer3, { class: "ui:mr-1 ui:size-4" });
        $$renderer3.push(`<!----> ${escape_html(label("word_bank.edit.add_distractor"))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div>`);
  });
}
function Edit$4($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    $$renderer2.push(`<div class="ui:space-y-3">`);
    Textarea($$renderer2, {
      class: "ui:w-full",
      rows: 2,
      placeholder: label("short_answer.edit.instructions_placeholder"),
      value: String(question.settings?.instructions ?? ""),
      disabled,
      onchange: (event) => patchQuestion({
        settings: {
          ...question.settings ?? {},
          instructions: event.currentTarget.value
        }
      })
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Edit$3($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function patchSettings(next) {
      patchQuestion({ settings: { ...question.settings ?? {}, ...next } });
    }
    const maxStars = getStarRatingMaxFromSettings(question.settings);
    function onCorrectValueChange(raw) {
      const parsed = Number(raw);
      if (raw.trim() === "" || Number.isNaN(parsed)) {
        patchSettings({ correctValue: void 0 });
        return;
      }
      const clamped = Math.min(maxStars, Math.max(1, Math.floor(parsed)));
      patchSettings({ correctValue: clamped });
    }
    function onMaxStarsChange(raw) {
      const parsed = Number(raw);
      if (raw.trim() === "" || Number.isNaN(parsed)) {
        patchSettings({ maxStars: void 0 });
        return;
      }
      const nextMax = Math.min(10, Math.max(1, Math.floor(parsed)));
      const rawCorrect = question.settings?.correctValue;
      const currentCorrect = typeof rawCorrect === "number" ? rawCorrect : rawCorrect != null ? Number(rawCorrect) : NaN;
      const nextCorrect = Number.isFinite(currentCorrect) ? Math.min(nextMax, Math.max(1, Math.floor(currentCorrect))) : void 0;
      if (nextCorrect !== void 0) {
        patchSettings({ maxStars: nextMax, correctValue: nextCorrect });
        return;
      }
      patchSettings({ maxStars: nextMax });
    }
    $$renderer2.push(`<div class="ui:space-y-3"><div class="ui:grid ui:gap-3 ui:md:grid-cols-2"><div class="ui:space-y-1"><div class="ui:flex ui:items-center ui:gap-1"><p class="ui:text-sm ui:font-medium">${escape_html(label("star.edit.correct_value_label"))}</p> `);
    Icon_button($$renderer2, {
      type: "button",
      class: "ui:h-6 ui:w-6",
      disabled,
      tooltip: label("star.edit.correct_value_info"),
      children: ($$renderer3) => {
        Circle_question_mark($$renderer3, { class: "ui:size-3.5" });
        $$renderer3.push(`<!----> <span class="ui:sr-only">${escape_html(label("star.edit.correct_value_info"))}</span>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> `);
    Input($$renderer2, {
      type: "number",
      min: "1",
      max: maxStars,
      placeholder: label("star.edit.correct_value_placeholder"),
      value: String(question.settings?.correctValue ?? ""),
      disabled,
      onchange: (event) => onCorrectValueChange(event.currentTarget.value)
    });
    $$renderer2.push(`<!----></div> <div class="ui:space-y-1"><div class="ui:flex ui:items-center ui:gap-1"><p class="ui:text-sm ui:font-medium">${escape_html(label("star.edit.max_stars_label"))}</p> `);
    Icon_button($$renderer2, {
      type: "button",
      class: "ui:h-6 ui:w-6",
      disabled,
      tooltip: label("star.edit.max_stars_info"),
      children: ($$renderer3) => {
        Circle_question_mark($$renderer3, { class: "ui:size-3.5" });
        $$renderer3.push(`<!----> <span class="ui:sr-only">${escape_html(label("star.edit.max_stars_info"))}</span>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> `);
    Input($$renderer2, {
      type: "number",
      min: "1",
      max: "10",
      placeholder: label("star.edit.max_stars_placeholder"),
      value: String(question.settings?.maxStars ?? ""),
      disabled,
      onchange: (event) => onMaxStarsChange(event.currentTarget.value)
    });
    $$renderer2.push(`<!----></div></div></div>`);
  });
}
function Edit$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const characterLimits = getTextareaCharacterLimits(question);
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function patchSettings(next) {
      patchQuestion({ settings: { ...question.settings ?? {}, ...next } });
    }
    function updateCharacterLimit(settingKey, value) {
      const parsedValue = value === "" ? void 0 : sanitizeTextareaCharacterLimit(value);
      if (parsedValue === void 0) {
        patchSettings({ [settingKey]: void 0 });
        return;
      }
      patchSettings({ [settingKey]: parsedValue });
    }
    $$renderer2.push(`<div class="ui:space-y-3">`);
    Textarea($$renderer2, {
      class: "ui:w-full",
      rows: 4,
      disabled: true,
      placeholder: label("textarea.edit.placeholder")
    });
    $$renderer2.push(`<!----> <div class="ui:grid ui:gap-3 ui:md:grid-cols-2"><div class="ui:space-y-1"><p class="ui:text-sm ui:font-medium">${escape_html(label("textarea.edit.min_characters_label"))}</p> `);
    Input($$renderer2, {
      type: "number",
      min: "0",
      step: "1",
      value: characterLimits.minCharacters === void 0 ? "" : String(characterLimits.minCharacters),
      disabled,
      placeholder: label("textarea.edit.min_characters_placeholder"),
      onchange: (event) => updateCharacterLimit("minCharacters", event.currentTarget.value)
    });
    $$renderer2.push(`<!----></div> <div class="ui:space-y-1"><p class="ui:text-sm ui:font-medium">${escape_html(label("textarea.edit.max_characters_label"))}</p> `);
    Input($$renderer2, {
      type: "number",
      min: "0",
      step: "1",
      value: characterLimits.maxCharacters === void 0 ? "" : String(characterLimits.maxCharacters),
      disabled,
      placeholder: label("textarea.edit.max_characters_placeholder"),
      onchange: (event) => updateCharacterLimit("maxCharacters", event.currentTarget.value)
    });
    $$renderer2.push(`<!----></div></div></div>`);
  });
}
function Edit$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function handleCorrectValueChange(value) {
      if (value !== "true" && value !== "false") return;
      const correctValue = value === "true";
      const opts = question.options ?? [];
      const options = opts.map((opt) => {
        const v = String(opt.value ?? opt.label ?? "").toLowerCase();
        const isTrue = v === "true" || v === "1";
        const isFalse = v === "false" || v === "0";
        const isCorrect = isTrue && correctValue || isFalse && !correctValue;
        return isTrue || isFalse ? { ...opt, isCorrect } : opt;
      });
      patchQuestion({
        settings: { ...question.settings ?? {}, correctValue },
        options: options.length >= 2 ? options : [
          {
            id: `${Date.now()}-true`,
            label: "True",
            value: "true",
            isCorrect: correctValue
          },
          {
            id: `${Date.now()}-false`,
            label: "False",
            value: "false",
            isCorrect: !correctValue
          }
        ]
      });
    }
    const selectedValue = (() => {
      const correctOpt = (question.options ?? []).find((o) => o.isCorrect);
      if (correctOpt) {
        const v = String(correctOpt.value ?? correctOpt.label).toLowerCase();
        return v === "false" || v === "0" ? "false" : "true";
      }
      const fromSettings = question.settings?.correctValue;
      return typeof fromSettings === "boolean" ? String(fromSettings) : "true";
    })();
    $$renderer2.push(`<div class="ui:space-y-3"><div class="ui:space-y-2"><p class="ui:text-sm ui:font-medium">${escape_html(label("true_false.edit.correct_answer_label"))}</p> <!---->`);
    Toggle_group($$renderer2, {
      type: "single",
      value: selectedValue,
      disabled,
      variant: "outline",
      onValueChange: handleCorrectValueChange,
      class: "ui:w-fit",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Toggle_group_item($$renderer3, {
          value: "true",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(label("true_false.true_label"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Toggle_group_item($$renderer3, {
          value: "false",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(label("true_false.false_label"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div>`);
  });
}
function Edit($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      disabled = false,
      labels,
      onQuestionChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const maxDurationValue = String(getVideoRecordingMaxDurationSeconds(question.settings));
    function patchQuestion(partial) {
      onQuestionChange({ ...question, ...partial });
    }
    function patchSettings(next) {
      patchQuestion({
        settings: { ...question.settings ?? {}, ...next, allowRetakes: true }
      });
    }
    function onDurationChange(value) {
      const duration = Number(value);
      if (!Number.isFinite(duration) || duration <= 0) {
        patchSettings({
          maxDurationSeconds: VIDEO_RECORDING_DEFAULT_MAX_DURATION_SECONDS
        });
        return;
      }
      patchSettings({
        maxDurationSeconds: Math.min(Math.round(duration), VIDEO_RECORDING_PLATFORM_MAX_DURATION_SECONDS)
      });
    }
    $$renderer2.push(`<div class="ui:space-y-3"><div class="ui:grid ui:gap-3 ui:md:grid-cols-[minmax(0,220px)_1fr] ui:md:items-start"><div class="ui:space-y-1"><p class="ui:text-sm ui:font-medium">${escape_html(label("video_recording.edit.max_duration_label", "Max duration"))}</p> `);
    Input($$renderer2, {
      type: "number",
      min: "1",
      max: VIDEO_RECORDING_PLATFORM_MAX_DURATION_SECONDS,
      step: "1",
      value: maxDurationValue,
      placeholder: label("video_recording.edit.max_duration_placeholder", "60"),
      disabled,
      onchange: (event) => onDurationChange(event.currentTarget.value)
    });
    $$renderer2.push(`<!----></div> <div class="ui:space-y-2 ui:pt-1">`);
    Badge($$renderer2, {
      variant: "secondary",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(label("video_recording.edit.manual_grading", "Requires manual grading"))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("video_recording.edit.max_duration_helper", "Students record in the browser and can retake before submitting."))}</p></div></div></div>`);
  });
}
function Take$e($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer = null,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    function getOptionValue(option, index) {
      return String(option.id ?? option.value ?? option.label ?? index);
    }
    const selectedOptionValues = (() => {
      const optionIds = answer?.type === "CHECKBOX" ? answer.optionIds : [];
      return new Set(optionIds.map((id) => String(id)));
    })();
    const optionsHaveImages = hasOptionImages(question.options);
    function isOptionSelected(option, index) {
      return selectedOptionValues.has(getOptionValue(option, index));
    }
    function toggleOption(nextValue) {
      const nextSelectedValues = new Set(selectedOptionValues);
      if (nextSelectedValues.has(nextValue)) {
        nextSelectedValues.delete(nextValue);
      } else {
        nextSelectedValues.add(nextValue);
      }
      const options = question.options ?? [];
      const optionIds = Array.from(nextSelectedValues).map((val) => {
        const matched = options.find((opt, i) => getOptionValue(opt, i) === val);
        const id = matched?.id ?? val;
        const num = Number(id);
        return Number.isNaN(num) ? void 0 : num;
      }).filter((id) => id !== void 0);
      onAnswerChange({ type: "CHECKBOX", optionIds });
    }
    $$renderer2.push(`<div class="ui:space-y-2"><div${attr_class(clsx(optionsHaveImages ? "ui:grid ui:grid-cols-2 ui:gap-3" : "ui:space-y-2"))}><!--[-->`);
    const each_array = ensure_array_like(question.options ?? []);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let option = each_array[index];
      const optionValue = getOptionValue(option, index);
      const optionId = `checkbox-${question.id ?? "question"}-${index}`;
      const optionImageUrl = getOptionImageUrl(option);
      const isSelected = isOptionSelected(option, index);
      $$renderer2.push(`<div${attr_class(clsx(cn("ui:rounded-md ui:p-2 ui:border", isSelected ? "ui:border-primary" : "ui:border-border", optionsHaveImages ? "ui:space-y-2" : "ui:flex ui:items-center ui:gap-2")))}>`);
      Option_image($$renderer2, {
        src: optionImageUrl,
        alt: label("question.edit.image_alt"),
        variant: "take",
        hasAnyImageInOptions: optionsHaveImages
      });
      $$renderer2.push(`<!----> <div class="ui:flex ui:items-center ui:gap-2">`);
      Checkbox($$renderer2, {
        id: optionId,
        checked: isOptionSelected(option, index),
        disabled,
        onCheckedChange: () => toggleOption(optionValue)
      });
      $$renderer2.push(`<!----> `);
      Label($$renderer2, {
        class: "ui:cursor-pointer ui:font-normal ui:w-full",
        for: optionId,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(option.label || option.value || [label("common.option_prefix"), String(index + 1)].filter(Boolean).join(" "))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function Take$d($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer = null,
      disabled = false,
      labels,
      onAnswerChange = () => {
      },
      onFileUpload
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    let isUploading = false;
    let uploadError = null;
    const acceptedTypes = normalizeAcceptedFileTypes(question.settings?.acceptedTypes);
    const acceptAttribute = acceptedTypes.join(",");
    question.settings?.maxSizeMb;
    const uploadedFile = (() => {
      if (answer?.type !== "FILE_UPLOAD") return null;
      const name = answer.fileName?.trim() ?? "";
      if (!name) return null;
      const url = typeof answer.fileUrl === "string" ? answer.fileUrl : null;
      return {
        fileName: name,
        fileUrl: url ?? null,
        mimeType: answer.mimeType,
        size: answer.size
      };
    })();
    function formatFileSize2(bytes) {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }
    const fileTypeLabel = (() => {
      const mime = uploadedFile?.mimeType ?? "";
      if (mime.includes("pdf")) return "PDF";
      if (mime.includes("wordprocessingml") || mime.includes("docx")) return "DOCX";
      if (mime.includes("msword") || mime.includes("doc")) return "DOC";
      if (mime.includes("image")) return "IMAGE";
      if (mime.includes("video")) return "VIDEO";
      return mime.split("/")[1]?.toUpperCase() ?? "FILE";
    })();
    const subtitle = uploadedFile ? [
      fileTypeLabel,
      uploadedFile.size != null ? formatFileSize2(uploadedFile.size) : null
    ].filter(Boolean).join(" · ") || "–" : "";
    function openFilePicker() {
      if (disabled || isUploading) return;
      uploadError = null;
    }
    $$renderer2.push(`<div class="ui:space-y-2"><input type="file"${attr("accept", acceptAttribute || void 0)} hidden="" class="ui:hidden"${attr("disabled", disabled || isUploading, true)}/> `);
    Button($$renderer2, {
      type: "button",
      variant: "outline",
      disabled: disabled || isUploading,
      onclick: openFilePicker,
      children: ($$renderer3) => {
        {
          $$renderer3.push("<!--[!-->");
          Plus($$renderer3, { class: "ui:size-4" });
          $$renderer3.push(`<!----> ${escape_html(label("file_upload.take.upload_button"))}`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    if (uploadError) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-destructive ui:text-xs">${escape_html(uploadError)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (uploadedFile) {
      $$renderer2.push("<!--[-->");
      Document_card($$renderer2, {
        title: uploadedFile.fileName,
        subtitle,
        fileUrl: uploadedFile.fileUrl,
        viewLabel: label("file_upload.take.view", "View"),
        downloadLabel: label("file_upload.take.download", "Download")
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Take$c($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const value = (() => {
      const values = answer?.type === "FILL_BLANK" ? answer.values : [];
      return values.map((token) => String(token).trim()).filter(Boolean).join(", ");
    })();
    $$renderer2.push(`<div class="ui:space-y-2">`);
    Input($$renderer2, {
      class: "ui:w-full ui:max-w-[300px]",
      value,
      disabled,
      placeholder: label("fill_blank.take.placeholder"),
      onchange: (event) => onAnswerChange({
        type: "FILL_BLANK",
        values: event.currentTarget.value.split(",").map((token) => token.trim()).filter(Boolean)
      })
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Take$b($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer = null,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const value = (() => {
      if (answer?.type === "HOTSPOT") return JSON.stringify(answer.coordinates, null, 2);
      return "";
    })();
    function parseCoordinates(raw) {
      try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((c) => c && typeof c === "object" && typeof c.x === "number" && typeof c.y === "number");
      } catch {
        return [];
      }
    }
    $$renderer2.push(`<div class="ui:space-y-2">`);
    Textarea($$renderer2, {
      class: "ui:w-full",
      rows: 4,
      value,
      disabled,
      placeholder: label("hotspot.take.placeholder"),
      onchange: (event) => {
        const coordinates = parseCoordinates(event.currentTarget.value);
        onAnswerChange({ type: "HOTSPOT", coordinates });
      }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Take$a($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer = null,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const value = (() => {
      if (answer?.type === "MATCHING") return JSON.stringify(answer.pairs, null, 2);
      return "";
    })();
    function parsePairs(raw) {
      try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((p) => p && typeof p === "object" && typeof p.left === "string" && typeof p.right === "string");
      } catch {
        return [];
      }
    }
    $$renderer2.push(`<div class="ui:space-y-2">`);
    Textarea($$renderer2, {
      class: "ui:w-full",
      rows: 4,
      value,
      disabled,
      placeholder: label("matching.take.placeholder"),
      onchange: (event) => {
        const pairs = parsePairs(event.currentTarget.value);
        onAnswerChange({ type: "MATCHING", pairs });
      }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Take$9($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer = null,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const numericValue = (() => {
      const val = answer?.type === "NUMERIC" ? answer.value : void 0;
      if (typeof val === "number" && Number.isFinite(val)) return String(val);
      return "";
    })();
    $$renderer2.push(`<div class="ui:space-y-2">`);
    Input($$renderer2, {
      class: "ui:w-full ui:max-w-[300px]",
      type: "number",
      value: numericValue,
      disabled,
      placeholder: label("numeric.take.placeholder"),
      onchange: (event) => {
        const rawValue = event.currentTarget.value.trim();
        if (rawValue === "") return;
        const num = Number(rawValue);
        onAnswerChange({ type: "NUMERIC", value: Number.isNaN(num) ? 0 : num });
      }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Take$8($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    let items = [];
    $$renderer2.push(`<div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("ordering.take.helper"))}</p> <section class="ui:space-y-2">`);
    if (items.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:text-muted-foreground ui:rounded-md ui:border ui:border-dashed ui:p-4 ui:text-sm">${escape_html(label("ordering.take.empty"))}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(items);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let item = each_array[index];
        $$renderer2.push(`<div class="ui:bg-background ui:flex ui:items-center ui:gap-3 ui:rounded-md ui:border ui:p-3">`);
        Grip_vertical($$renderer2, { class: "ui:text-muted-foreground ui:size-4" });
        $$renderer2.push(`<!----> <span class="ui:bg-muted ui:text-muted-foreground ui:rounded-full ui:px-2 ui:py-1 ui:text-xs">${escape_html(index + 1)}</span> <p class="ui:text-sm">${escape_html(item.label)}</p></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></section></div>`);
  });
}
function Take$7($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer = null,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    function getOptionValue(option, index) {
      return String(option.id ?? option.value ?? option.label ?? index);
    }
    const selectedOptionValue = (() => {
      const optionId = answer?.type === "RADIO" ? answer.optionId : null;
      if (optionId === void 0 || optionId === null) return "";
      return String(optionId);
    })();
    const optionsHaveImages = hasOptionImages(question.options);
    function handleOptionChange(value) {
      const nextValue = String(value ?? "").trim();
      if (!nextValue) return;
      const matchedOption = (question.options ?? []).find((option, index) => getOptionValue(option, index) === nextValue);
      if (matchedOption?.id !== void 0 && matchedOption.id !== null) {
        const optionId = Number(matchedOption.id);
        onAnswerChange({
          type: "RADIO",
          optionId: Number.isNaN(optionId) ? Number(nextValue) : optionId
        });
        return;
      }
      onAnswerChange({ type: "RADIO", optionId: Number(nextValue) });
    }
    $$renderer2.push(`<div class="ui:space-y-2"><!---->`);
    Radio_group($$renderer2, {
      value: selectedOptionValue,
      disabled,
      onValueChange: handleOptionChange,
      children: ($$renderer3) => {
        $$renderer3.push(`<div${attr_class(clsx(optionsHaveImages ? "ui:grid ui:grid-cols-2 ui:gap-3" : "ui:space-y-2"))}><!--[-->`);
        const each_array = ensure_array_like(question.options ?? []);
        for (let index = 0, $$length = each_array.length; index < $$length; index++) {
          let option = each_array[index];
          const optionValue = getOptionValue(option, index);
          const optionId = `radio-${question.id ?? "question"}-${index}`;
          const optionImageUrl = getOptionImageUrl(option);
          const isSelected = selectedOptionValue !== "" && selectedOptionValue === optionValue;
          $$renderer3.push(`<div${attr_class(clsx(cn("ui:rounded-md ui:p-2 ui:border", isSelected ? "ui:border-primary" : "ui:border-border", optionsHaveImages ? "ui:space-y-2" : "ui:flex ui:items-center ui:gap-2")))}>`);
          Option_image($$renderer3, {
            src: optionImageUrl,
            alt: label("question.edit.image_alt"),
            variant: "take",
            hasAnyImageInOptions: optionsHaveImages
          });
          $$renderer3.push(`<!----> <div class="ui:flex ui:items-center ui:gap-2"><!---->`);
          Radio_group_item($$renderer3, { id: optionId, value: optionValue });
          $$renderer3.push(`<!----> `);
          Label($$renderer3, {
            class: "ui:cursor-pointer ui:font-normal ui:w-full",
            for: optionId,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(option.label || option.value || [label("common.option_prefix"), String(index + 1)].filter(Boolean).join(" "))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Take$6($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { answer, disabled = false, labels, onAnswerChange = () => {
    } } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    let links = (() => {
      const nextLinks = toAnswerLinks(answer);
      return nextLinks.length > 0 ? nextLinks : [""];
    })();
    function isValidLink(value) {
      try {
        const parsedUrl = new URL(value);
        return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
      } catch {
        return false;
      }
    }
    function toAnswerLinks(value) {
      if (value?.type === "LINK") return value.urls.map((u) => String(u ?? "").trim()).filter(Boolean);
      return [];
    }
    function syncAnswer(nextLinks) {
      const normalizedLinks = nextLinks.map((entry) => entry.trim()).filter(Boolean);
      onAnswerChange({ type: "LINK", urls: normalizedLinks });
    }
    function addLinkField() {
      links = [...links, ""];
    }
    function removeLinkField(index) {
      if (links.length === 1) return;
      const nextLinks = links.filter((_, linkIndex) => linkIndex !== index);
      links = nextLinks;
      syncAnswer(nextLinks);
    }
    function updateLink(index, value) {
      const nextLinks = links.map((linkValue, linkIndex) => linkIndex === index ? value : linkValue);
      links = nextLinks;
      syncAnswer(nextLinks);
    }
    function formatInputPlaceholder(index) {
      const template = label("link.take.placeholder");
      if (!template) return "";
      return template.replace("{index}", String(index + 1));
    }
    const validationState = (() => links.map((linkValue) => {
      const trimmedValue = linkValue.trim();
      const isEmpty = trimmedValue.length === 0;
      return { isEmpty, isValid: isEmpty ? true : isValidLink(trimmedValue) };
    }))();
    $$renderer2.push(`<div class="ui:space-y-3"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("link.take.helper"))}</p> <div class="ui:space-y-2"><!--[-->`);
    const each_array = ensure_array_like(links);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let link = each_array[index];
      $$renderer2.push(`<div class="ui:space-y-1"><div class="ui:flex ui:items-center ui:gap-2">`);
      Input($$renderer2, {
        class: "ui:flex-1 ui:max-w-[300px]",
        type: "url",
        value: link,
        disabled,
        placeholder: formatInputPlaceholder(index),
        onchange: (event) => updateLink(index, event.currentTarget.value)
      });
      $$renderer2.push(`<!----> `);
      Icon_button($$renderer2, {
        type: "button",
        tooltip: label("link.take.remove_tooltip"),
        disabled: disabled || links.length === 1,
        onclick: () => removeLinkField(index),
        children: ($$renderer3) => {
          Trash_2($$renderer3, { class: "ui:size-4" });
          $$renderer3.push(`<!----> <span class="ui:sr-only">${escape_html(label("link.take.remove_sr"))}</span>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div> `);
      if (!validationState[index]?.isEmpty && !validationState[index]?.isValid) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="ui:text-destructive ui:text-xs">${escape_html(label("link.take.invalid_url_error"))}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Button($$renderer2, {
      variant: "outline",
      size: "sm",
      type: "button",
      disabled,
      onclick: addLinkField,
      children: ($$renderer3) => {
        Plus($$renderer3, { class: "ui:size-4" });
        $$renderer3.push(`<!----> ${escape_html(label("link.take.add_button"))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Take$5($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const template = String(question.settings?.template ?? "");
    const correctAnswers = (() => {
      const raw = question.settings?.correctAnswers;
      return Array.isArray(raw) ? raw.map((s) => String(s ?? "")) : [];
    })();
    const distractors = (() => {
      const raw = question.settings?.distractors;
      return Array.isArray(raw) ? raw.map((s) => String(s ?? "")) : [];
    })();
    const blankCount = countWordBankBlanks(template);
    const segments = parseWordBankTemplate(template);
    const baseChips = buildWordBankChips(correctAnswers, distractors);
    let shuffledChips = [];
    let placementByBlank = [];
    const chipById = (() => {
      const map = /* @__PURE__ */ new Map();
      for (const c of baseChips) {
        map.set(c.id, c);
      }
      return map;
    })();
    function isChipPlaced(chipId) {
      return placementByBlank.some((id) => id === chipId);
    }
    $$renderer2.push(`<div class="ui:space-y-4"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("word_bank.take.helper"))}</p> <div class="ui:bg-muted/30 ui:rounded-lg ui:border ui:p-4 ui:font-mono ui:text-sm ui:leading-relaxed">`);
    if (blankCount === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="ui:text-muted-foreground">${escape_html(template || label("common.not_set"))}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(segments);
      for (let segmentIndex = 0, $$length = each_array.length; segmentIndex < $$length; segmentIndex++) {
        let segment = each_array[segmentIndex];
        if (segment.type === "text") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span>${escape_html(segment.value)}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
          const blankIndex = segment.index;
          const chipId = placementByBlank[blankIndex] ?? null;
          const text = chipId ? chipById.get(chipId)?.label ?? "" : "";
          $$renderer2.push(`<button type="button"${attr_class("ui:inline-flex ui:align-middle ui:mx-0.5 ui:min-h-8 ui:min-w-[5rem] ui:max-w-[16rem] ui:items-center ui:justify-center ui:rounded ui:border-2 ui:px-2 ui:py-0.5 ui:text-left ui:text-sm ui:transition-all ui:duration-200 ui:border-primary disabled:ui:cursor-not-allowed", void 0, {
            "ui:border-dashed": !text,
            "ui:bg-background": !text,
            "ui:border-solid": !!text
          })}${attr("disabled", disabled, true)}${attr("aria-label", label("word_bank.take.clear_blank_sr"))}>`);
          if (text) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span>${escape_html(text)}</span>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<span class="ui:text-muted-foreground ui:select-none"> </span>`);
          }
          $$renderer2.push(`<!--]--></button>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> <div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("word_bank.take.bank_heading"))}</p> <div class="ui:flex ui:flex-wrap ui:gap-2"><!--[-->`);
    const each_array_1 = ensure_array_like(shuffledChips);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let chip = each_array_1[$$index_1];
      const placed = isChipPlaced(chip.id);
      $$renderer2.push(`<button type="button"${attr("draggable", !disabled && !placed)}${attr_class("ui:rounded ui:border-2 ui:border-primary ui:bg-primary ui:px-3 ui:py-1.5 ui:text-sm ui:text-primary-foreground ui:transition-opacity disabled:ui:cursor-not-allowed", void 0, { "ui:opacity-40": placed, "ui:pointer-events-none": placed })}${attr("disabled", disabled, true)}>${escape_html(chip.label || "—")}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
  });
}
function Take$4($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    $$renderer2.push(`<div class="ui:space-y-2">`);
    Input($$renderer2, {
      class: "ui:w-full ui:max-w-[300px]",
      value: answer?.type === "SHORT_ANSWER" ? answer.text : String(answer ?? ""),
      disabled,
      placeholder: label("short_answer.take.placeholder"),
      onchange: (event) => onAnswerChange({ type: "SHORT_ANSWER", text: event.currentTarget.value })
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Star($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.562.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "star" },
      /**
       * @component @name Star
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuNTI1IDIuMjk1YS41My41MyAwIDAgMSAuOTUgMGwyLjMxIDQuNjc5YTIuMTIzIDIuMTIzIDAgMCAwIDEuNTk1IDEuMTZsNS4xNjYuNzU2YS41My41MyAwIDAgMSAuMjk0LjkwNGwtMy43MzYgMy42MzhhMi4xMjMgMi4xMjMgMCAwIDAtLjYxMSAxLjg3OGwuODgyIDUuMTRhLjUzLjUzIDAgMCAxLS43NzEuNTZsLTQuNjE4LTIuNDI4YTIuMTIyIDIuMTIyIDAgMCAwLTEuOTczIDBMNi4zOTYgMjEuMDFhLjUzLjUzIDAgMCAxLS43Ny0uNTZsLjg4MS01LjEzOWEyLjEyMiAyLjEyMiAwIDAgMC0uNjExLTEuODc5TDIuMTYgOS43OTVhLjUzLjUzIDAgMCAxIC4yOTQtLjkwNmw1LjE2NS0uNzU1YTIuMTIyIDIuMTIyIDAgMCAwIDEuNTk3LTEuMTZ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/star
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Star_row($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { maxStars, value, disabled = false, starLabel, onPick } = $$props;
    const starIndices = Array.from({ length: maxStars }, (_, index) => index + 1);
    $$renderer2.push(`<div class="ui:flex ui:flex-wrap ui:items-center ui:gap-1" role="group"><!--[-->`);
    const each_array = ensure_array_like(starIndices);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let starIndex = each_array[$$index];
      if (onPick && !disabled) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<button type="button" class="ui:rounded-md ui:p-1 ui:text-amber-600 ui:transition-colors ui:hover:bg-amber-500/10 focus-visible:ui:ring-ring ui:outline-none focus-visible:ui:ring-2 ui:dark:text-amber-400"${attr("aria-label", starLabel(starIndex))}${attr("aria-pressed", value >= starIndex)}${attr("disabled", disabled, true)}>`);
        Star($$renderer2, {
          class: `ui:size-8 ${stringify(starIndex <= value ? "ui:fill-amber-400 ui:text-amber-500 ui:dark:fill-amber-400 ui:dark:text-amber-300" : "ui:fill-none ui:text-amber-200 ui:dark:text-amber-500/40")}`
        });
        $$renderer2.push(`<!----></button>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<span class="ui:inline-flex ui:p-1" aria-hidden="true">`);
        Star($$renderer2, {
          class: `ui:size-8 ${stringify(starIndex <= value ? "ui:fill-amber-400 ui:text-amber-500 ui:dark:fill-amber-400 ui:dark:text-amber-300" : "ui:fill-none ui:text-amber-200 ui:dark:text-amber-500/40")}`
        });
        $$renderer2.push(`<!----></span>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Take$3($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer = null,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const maxStars = getStarRatingMaxFromSettings(question.settings);
    const selectedValue = (() => {
      if (answer?.type !== "STAR") return 0;
      const value = answer.value;
      if (typeof value !== "number" || !Number.isInteger(value) || value < 1 || value > maxStars) return 0;
      return value;
    })();
    function starLabel(starIndex) {
      return label("star.take.star_sr", "Star {n} of {max}").replace("{n}", String(starIndex)).replace("{max}", String(maxStars));
    }
    $$renderer2.push(`<div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("star.take.helper"))}</p> `);
    Star_row($$renderer2, {
      maxStars,
      value: selectedValue,
      disabled,
      starLabel,
      onPick: (starIndex) => onAnswerChange({ type: "STAR", value: starIndex })
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Take$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const content = answer?.type === "TEXTAREA" ? answer.text : String(answer ?? "");
    const characterLimits = getTextareaCharacterLimits(question);
    const characterCount = getTextareaAnswerCharacterCount(content);
    const shouldShowCharacterCount = characterLimits.minCharacters !== void 0 && characterLimits.maxCharacters !== void 0;
    let detachEditorListeners;
    onDestroy(() => {
      detachEditorListeners?.();
    });
    function normalizeAnswerHtml(value) {
      const html = String(value ?? "").trim();
      if (getTextareaAnswerCharacterCount(html) < 1) return "";
      return html;
    }
    function updateAnswer(value) {
      onAnswerChange({ type: "TEXTAREA", text: normalizeAnswerHtml(value) });
    }
    function getEditorDom(editor) {
      try {
        return editor.view.dom;
      } catch {
        return null;
      }
    }
    function getCurrentCharacterCount(editor) {
      return getTextareaAnswerCharacterCount(editor.getHTML());
    }
    function getSelectedCharacterCount(editor) {
      const { from, to, empty } = editor.state.selection;
      if (empty) return 0;
      return editor.state.doc.textBetween(from, to, "\n", "\n").length;
    }
    function canInsertCharacters(editor, insertedCharacterCount) {
      const maxCharacters = characterLimits.maxCharacters;
      if (maxCharacters === void 0 || insertedCharacterCount < 1) return true;
      const nextCharacterCount = getCurrentCharacterCount(editor) - getSelectedCharacterCount(editor) + insertedCharacterCount;
      return nextCharacterCount <= maxCharacters;
    }
    function getBeforeInputCharacterCount(event) {
      switch (event.inputType) {
        case "insertParagraph":
        case "insertLineBreak":
          return 1;
        default:
          return typeof event.data === "string" ? event.data.length : 0;
      }
    }
    function handleEditorReady(editor) {
      detachEditorListeners?.();
      const editorDom = getEditorDom(editor);
      if (!editorDom || disabled) return;
      const blurHandler = () => {
        if (!editor.isDestroyed) updateAnswer(editor.getHTML());
      };
      const beforeInputHandler = (event) => {
        const inputEvent = event;
        if (!inputEvent.inputType?.startsWith("insert")) return;
        const insertedCharacterCount = getBeforeInputCharacterCount(inputEvent);
        if (canInsertCharacters(editor, insertedCharacterCount)) return;
        inputEvent.preventDefault();
      };
      const pasteHandler = (event) => {
        const pastedText = event.clipboardData?.getData("text/plain") ?? "";
        if (canInsertCharacters(editor, pastedText.length)) return;
        event.preventDefault();
      };
      editorDom.addEventListener("blur", blurHandler);
      editorDom.addEventListener("beforeinput", beforeInputHandler);
      editorDom.addEventListener("paste", pasteHandler);
      detachEditorListeners = () => {
        editorDom.removeEventListener("blur", blurHandler);
        editorDom.removeEventListener("beforeinput", beforeInputHandler);
        editorDom.removeEventListener("paste", pasteHandler);
      };
    }
    $$renderer2.push(`<div class="ui:space-y-2">`);
    Editor($$renderer2, {
      content,
      editable: !disabled,
      showToolBar: !disabled,
      placeholder: label("textarea.take.placeholder"),
      editorClass: "ui:h-40",
      onContentChange: updateAnswer,
      onEditorReady: handleEditorReady
    });
    $$renderer2.push(`<!----> `);
    if (shouldShowCharacterCount) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="ui:text-muted-foreground ui:block ui:text-right ui:text-xs">${escape_html(characterCount)} / ${escape_html(characterLimits.maxCharacters)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Take$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer = null,
      disabled = false,
      labels,
      onAnswerChange = () => {
      }
    } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const selected = (() => {
      const val = answer?.type === "TRUE_FALSE" ? answer.value : void 0;
      if (typeof val === "boolean") return val ? "true" : "false";
      return "";
    })();
    function update(value) {
      if (value !== "true" && value !== "false") return;
      onAnswerChange({ type: "TRUE_FALSE", value: value === "true" });
    }
    $$renderer2.push(`<div class="ui:space-y-2"><!---->`);
    Toggle_group($$renderer2, {
      type: "single",
      value: selected,
      disabled,
      variant: "outline",
      onValueChange: update,
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Toggle_group_item($$renderer3, {
          value: "true",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(label("true_false.true_label"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Toggle_group_item($$renderer3, {
          value: "false",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(label("true_false.false_label"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function formatSeconds(totalSeconds) {
  const safeSeconds = Math.max(0, Math.round(totalSeconds));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 KB";
  const units = ["Bytes", "KB", "MB", "GB"];
  const unitIndex = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / Math.pow(1024, unitIndex);
  return `${value.toFixed(value >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}
function Take($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      question,
      answer = null,
      disabled = false,
      labels,
      onAnswerChange = () => {
      },
      onVideoRecordingUpload
    } = $$props;
    let recordingState = "idle";
    let stream = null;
    let mediaRecorder = null;
    let elapsedSeconds = 0;
    let durationSeconds = 0;
    let recordingBlob = null;
    let previewUrl = "";
    let uploadError = "";
    let recordedAt = "";
    let retakeCount = 0;
    let isPreviewPlaying = false;
    let cameraDevices = [];
    let selectedCameraDeviceId = "";
    let timerId = null;
    let recordingStartedAt = 0;
    let chunks = [];
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const maxDurationSeconds = getVideoRecordingMaxDurationSeconds(question.settings);
    const remainingSeconds = Math.max(0, maxDurationSeconds - elapsedSeconds);
    const isFinalWarning = maxDurationSeconds > 15 && remainingSeconds <= 10 && recordingState === "recording";
    const savedRecording = answer?.type === "VIDEO_RECORDING" ? answer : null;
    const savedPlaybackUrl = (() => {
      if (!savedRecording) return "";
      return savedRecording.playbackUrl ?? savedRecording.fileUrl ?? "";
    })();
    const canUseRecording = recordingBlob && durationSeconds >= 1 && !disabled;
    const recordingProgressPercent = maxDurationSeconds > 0 ? Math.min(100, Math.max(0, elapsedSeconds / maxDurationSeconds * 100)) : 0;
    const recordingProgressDegrees = recordingProgressPercent * 3.6;
    const progressRingBackground = `conic-gradient(var(--primary) ${recordingProgressDegrees}deg, color-mix(in oklab, var(--primary) 12%, var(--background)) ${recordingProgressDegrees}deg)`;
    const isSupported = (() => typeof window !== "undefined" && typeof navigator !== "undefined" && !!navigator.mediaDevices?.getUserMedia && "MediaRecorder" in window)();
    function getSupportedMimeType() {
      const candidates = ["video/webm;codecs=vp8,opus", "video/webm", "video/mp4"];
      const supported = candidates.find((mimeType) => MediaRecorder.isTypeSupported(mimeType));
      return supported ?? "";
    }
    function normalizeMimeType(mimeType) {
      if (mimeType.includes("mp4")) return "video/mp4";
      if (mimeType.includes("quicktime")) return "video/quicktime";
      return "video/webm";
    }
    async function refreshCameraDevices() {
      if (!navigator.mediaDevices?.enumerateDevices) return;
      const devices = await navigator.mediaDevices.enumerateDevices();
      cameraDevices = devices.filter((device) => device.kind === "videoinput");
      if (!selectedCameraDeviceId && cameraDevices[0]) {
        selectedCameraDeviceId = cameraDevices[0].deviceId;
      }
    }
    function getVideoConstraints() {
      if (selectedCameraDeviceId) {
        return { deviceId: { exact: selectedCameraDeviceId } };
      }
      return { facingMode: "user" };
    }
    function clearTimer() {
      if (timerId === null) return;
      window.clearInterval(timerId);
      timerId = null;
    }
    function stopStream() {
      stream?.getTracks().forEach((track) => track.stop());
      stream = null;
    }
    function revokePreviewUrl() {
      if (!previewUrl) return;
      URL.revokeObjectURL(previewUrl);
      previewUrl = "";
    }
    function resetLocalRecording() {
      revokePreviewUrl();
      recordingBlob = null;
      durationSeconds = 0;
      elapsedSeconds = 0;
      uploadError = "";
      isPreviewPlaying = false;
    }
    async function requestCamera() {
      if (disabled || !isSupported) return null;
      try {
        stopStream();
        const nextStream = await navigator.mediaDevices.getUserMedia({ video: getVideoConstraints(), audio: true });
        stream = nextStream;
        selectedCameraDeviceId = nextStream.getVideoTracks()[0]?.getSettings().deviceId ?? selectedCameraDeviceId;
        recordingState = "ready";
        uploadError = "";
        await refreshCameraDevices();
        return nextStream;
      } catch {
        recordingState = "permission_denied";
        return null;
      }
    }
    async function handleCameraChange(nextDeviceId) {
      if (!nextDeviceId || nextDeviceId === selectedCameraDeviceId || recordingState === "recording") return;
      selectedCameraDeviceId = nextDeviceId;
      if (recordingState === "ready") {
        await requestCamera();
      }
    }
    async function startRecording() {
      if (disabled || recordingState === "recording") return;
      const activeStream = stream ?? await requestCamera();
      if (!activeStream) return;
      resetLocalRecording();
      chunks = [];
      const mimeType = getSupportedMimeType();
      const recorder = new MediaRecorder(activeStream, mimeType ? { mimeType } : void 0);
      mediaRecorder = recorder;
      recordingStartedAt = performance.now();
      recordedAt = (/* @__PURE__ */ new Date()).toISOString();
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunks.push(event.data);
      };
      recorder.onstop = () => {
        clearTimer();
        const measuredDuration = Math.max(0, (performance.now() - recordingStartedAt) / 1e3);
        durationSeconds = Math.round(measuredDuration * 10) / 10;
        elapsedSeconds = Math.min(maxDurationSeconds, Math.ceil(durationSeconds));
        const blobType = normalizeMimeType(recorder.mimeType || mimeType);
        const blob = new Blob(chunks, { type: blobType });
        recordingBlob = blob;
        previewUrl = URL.createObjectURL(blob);
        recordingState = durationSeconds >= 1 ? "recorded" : "failed";
      };
      recorder.start();
      recordingState = "recording";
      timerId = window.setInterval(
        () => {
          const elapsed = (performance.now() - recordingStartedAt) / 1e3;
          elapsedSeconds = Math.min(maxDurationSeconds, elapsed);
          if (elapsed >= maxDurationSeconds) {
            stopRecording();
          }
        },
        250
      );
    }
    function stopRecording() {
      if (mediaRecorder?.state === "recording") {
        mediaRecorder.stop();
      }
      clearTimer();
      stopStream();
    }
    function retakeRecording() {
      resetLocalRecording();
      retakeCount += 1;
      recordingState = stream ? "ready" : "idle";
    }
    function deleteRecording() {
      resetLocalRecording();
      onAnswerChange(null);
      recordingState = stream ? "ready" : "idle";
    }
    async function acceptRecording() {
      if (!recordingBlob || !canUseRecording || !onVideoRecordingUpload) return;
      recordingState = "uploading";
      uploadError = "";
      try {
        const mimeType = normalizeMimeType(recordingBlob.type);
        const result = await onVideoRecordingUpload({
          questionId: question.id ?? question.key ?? "",
          blob: recordingBlob,
          fileName: `recording-${Date.now()}.${mimeType === "video/mp4" ? "mp4" : "webm"}`,
          mimeType,
          size: recordingBlob.size,
          durationSeconds,
          recordedAt,
          retakeCount
        });
        onAnswerChange({ ...result, playbackUrl: previewUrl });
        recordingState = "uploaded";
      } catch (error) {
        uploadError = error instanceof Error ? error.message : label("video_recording.take.upload_failed", "Upload failed. Try again.");
        recordingState = "failed";
      }
    }
    onDestroy(() => {
      clearTimer();
      stopStream();
      revokePreviewUrl();
    });
    $$renderer2.push(`<div class="ui:space-y-4" aria-live="polite">`);
    if (!isSupported) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("video_recording.take.unsupported", "Video recording is not supported in this browser."))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="ui:flex ui:flex-col ui:items-center ui:gap-4"><div${attr_class(clsx(recordingState === "recording" ? "ui:rounded-full ui:p-1 ui:shadow-sm" : ""))}${attr_style(recordingState === "recording" ? `background: ${progressRingBackground};` : void 0)}><div class="ui:bg-muted ui:relative ui:grid ui:aspect-square ui:w-52 ui:max-w-full ui:place-items-center ui:overflow-hidden ui:rounded-full ui:sm:w-64">`);
      if (recordingState === "ready" || recordingState === "recording") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<video autoplay muted playsinline class="ui:h-full ui:w-full ui:object-cover ui:[transform:scaleX(-1)]"></video> `);
        if (recordingState === "ready") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<button type="button" class="ui:absolute ui:inset-0 ui:grid ui:place-items-center ui:bg-black/10 ui:text-white ui:transition ui:hover:bg-black/20 ui:focus-visible:outline-none ui:focus-visible:ring-2 ui:focus-visible:ring-ring ui:disabled:pointer-events-none ui:disabled:opacity-50"${attr("disabled", disabled, true)}><span class="ui:rounded-full ui:bg-background/90 ui:px-4 ui:py-2 ui:text-sm ui:font-medium ui:text-foreground ui:shadow-md">${escape_html(label("video_recording.take.start_recording", "Start recording"))}</span></button>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (previewUrl || savedPlaybackUrl) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<video${attr("src", previewUrl || savedPlaybackUrl)} playsinline class="ui:h-full ui:w-full ui:object-cover ui:[transform:scaleX(-1)]"></video> <button type="button" class="ui:group ui:absolute ui:inset-0 ui:grid ui:place-items-center ui:bg-black/10 ui:text-white ui:transition ui:hover:bg-black/20 ui:focus-visible:outline-none ui:focus-visible:ring-2 ui:focus-visible:ring-ring"${attr("aria-label", isPreviewPlaying ? label("video_recording.take.pause_preview", "Pause recording preview") : label("video_recording.take.play_preview", "Play recording preview"))}>`);
          if (isPreviewPlaying) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span class="ui:grid ui:size-14 ui:grid-cols-[6px_6px] ui:place-content-center ui:gap-2 ui:rounded-full ui:bg-background/90 ui:text-foreground ui:opacity-0 ui:shadow-md ui:transition-opacity ui:group-hover:opacity-100 ui:group-focus-visible:opacity-100" aria-hidden="true"><span class="ui:h-5 ui:w-1.5 ui:rounded-sm ui:bg-current"></span> <span class="ui:h-5 ui:w-1.5 ui:rounded-sm ui:bg-current"></span></span>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<span class="ui:grid ui:size-14 ui:place-items-center ui:rounded-full ui:bg-background/90 ui:text-foreground ui:shadow-md" aria-hidden="true"><span class="ui:ml-1 ui:h-0 ui:w-0 ui:border-y-[10px] ui:border-y-transparent ui:border-l-[16px] ui:border-l-current"></span></span>`);
          }
          $$renderer2.push(`<!--]--></button>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (recordingState === "permission_denied") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="ui:flex ui:max-w-40 ui:flex-col ui:items-center ui:gap-3 ui:text-center"><p class="ui:text-sm ui:text-muted-foreground">${escape_html(label("video_recording.take.permission_denied", "Camera or microphone access was blocked."))}</p> `);
            Button($$renderer2, {
              type: "button",
              size: "sm",
              variant: "secondary",
              disabled,
              onclick: requestCamera,
              children: ($$renderer3) => {
                $$renderer3.push(`<!---->${escape_html(label("video_recording.take.start_camera", "Set up camera"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer2.push(`<!----></div>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<button type="button" class="ui:grid ui:size-24 ui:place-items-center ui:rounded-full ui:bg-background ui:px-3 ui:text-center ui:text-sm ui:font-medium ui:text-foreground ui:shadow-sm ui:ring-1 ui:ring-border ui:transition ui:hover:bg-accent ui:focus-visible:outline-none ui:focus-visible:ring-2 ui:focus-visible:ring-ring ui:disabled:pointer-events-none ui:disabled:opacity-50"${attr("disabled", disabled, true)}>${escape_html(label("video_recording.take.start_camera", "Set up camera"))}</button>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></div> `);
      if (cameraDevices.length > 1 && recordingState !== "recording") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="ui:flex ui:w-full ui:max-w-xs ui:flex-col ui:gap-1.5"><span class="ui:text-xs ui:font-medium ui:text-muted-foreground">${escape_html(label("video_recording.take.camera_label", "Camera"))}</span> <!---->`);
        Root$2($$renderer2, {
          type: "single",
          value: selectedCameraDeviceId,
          onValueChange: handleCameraChange,
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->`);
            Select_trigger($$renderer3, {
              class: "ui:w-full",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(cameraDevices.find((device) => device.deviceId === selectedCameraDeviceId)?.label || label("video_recording.take.camera_placeholder", "Select camera"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> <!---->`);
            Select_content($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<!--[-->`);
                const each_array = ensure_array_like(cameraDevices);
                for (let cameraIndex = 0, $$length = each_array.length; cameraIndex < $$length; cameraIndex++) {
                  let device = each_array[cameraIndex];
                  $$renderer4.push(`<!---->`);
                  Select_item($$renderer4, {
                    value: device.deviceId,
                    label: device.label || `Camera ${cameraIndex + 1}`,
                    children: ($$renderer5) => {
                      $$renderer5.push(`<!---->${escape_html(device.label || `${label("video_recording.take.camera_label", "Camera")} ${cameraIndex + 1}`)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push(`<!---->`);
                }
                $$renderer4.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="ui:flex ui:flex-wrap ui:items-center ui:justify-center ui:gap-x-4 ui:gap-y-1 ui:text-sm"><span${attr_class(clsx(isFinalWarning ? "ui:text-destructive ui:font-medium" : "ui:text-muted-foreground"))}>${escape_html(label("video_recording.take.elapsed", "Elapsed"))}: ${escape_html(formatSeconds(elapsedSeconds))}</span> <span${attr_class(clsx(isFinalWarning ? "ui:text-destructive ui:font-medium" : "ui:text-muted-foreground"))}>${escape_html(label("video_recording.take.remaining", "Remaining"))}: ${escape_html(formatSeconds(remainingSeconds))}</span> <span class="ui:text-muted-foreground">${escape_html(label("video_recording.take.max_duration", "Max"))}: ${escape_html(formatSeconds(maxDurationSeconds))}</span></div> `);
      if (recordingState === "failed" && durationSeconds < 1 && recordingBlob) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="ui:text-destructive ui:text-sm">${escape_html(label("video_recording.take.too_short", "Record for at least 1 second."))}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (uploadError) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="ui:text-destructive ui:text-sm">${escape_html(uploadError)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (savedRecording && recordingState !== "recording" && recordingState !== "uploading") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("video_recording.take.uploaded", "Recording uploaded"))}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (savedRecording && recordingState === "recorded") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("video_recording.take.replaces_previous", "A new accepted take replaces the previous answer after upload."))}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="ui:flex ui:flex-wrap ui:justify-center ui:gap-2">`);
      if (savedRecording && (recordingState === "idle" || recordingState === "uploaded")) {
        $$renderer2.push("<!--[-->");
        Button($$renderer2, {
          type: "button",
          variant: "outline",
          disabled,
          onclick: startRecording,
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->${escape_html(label("video_recording.take.retake", "Retake"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----> `);
        Button($$renderer2, {
          type: "button",
          variant: "ghost",
          disabled,
          onclick: deleteRecording,
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->${escape_html(label("video_recording.take.delete", "Delete recording"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (recordingState === "recording") {
          $$renderer2.push("<!--[-->");
          Button($$renderer2, {
            type: "button",
            variant: "destructive",
            disabled,
            onclick: stopRecording,
            children: ($$renderer3) => {
              $$renderer3.push(`<!---->${escape_html(label("video_recording.take.stop_recording", "Stop recording"))}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer2.push("<!--[!-->");
          if (recordingState === "recorded" || recordingState === "failed") {
            $$renderer2.push("<!--[-->");
            Button($$renderer2, {
              type: "button",
              disabled: !canUseRecording,
              onclick: acceptRecording,
              children: ($$renderer3) => {
                $$renderer3.push(`<!---->${escape_html(label(
                  recordingState === "failed" && uploadError ? "video_recording.take.retry_upload" : "video_recording.take.use_recording",
                  recordingState === "failed" && uploadError ? "Retry upload" : "Use recording"
                ))}`);
              },
              $$slots: { default: true }
            });
            $$renderer2.push(`<!----> `);
            Button($$renderer2, {
              type: "button",
              variant: "ghost",
              disabled,
              onclick: retakeRecording,
              children: ($$renderer3) => {
                $$renderer3.push(`<!---->${escape_html(label("video_recording.take.retake", "Retake"))}`);
              },
              $$slots: { default: true }
            });
            $$renderer2.push(`<!----> `);
            if (savedRecording) {
              $$renderer2.push("<!--[-->");
              Button($$renderer2, {
                type: "button",
                variant: "ghost",
                disabled,
                onclick: deleteRecording,
                children: ($$renderer3) => {
                  $$renderer3.push(`<!---->${escape_html(label("video_recording.take.delete", "Delete recording"))}`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer2.push("<!--[!-->");
            }
            $$renderer2.push(`<!--]-->`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (recordingState === "uploading") {
              $$renderer2.push("<!--[-->");
              Button($$renderer2, {
                type: "button",
                disabled: true,
                children: ($$renderer3) => {
                  Spinner($$renderer3, { class: "ui:size-4" });
                  $$renderer3.push(`<!----> ${escape_html(label("video_recording.take.uploading", "Uploading recording..."))}`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer2.push("<!--[!-->");
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Option_correctness_badges($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { labels, showCorrect = false, showIncorrect = false } = $$props;
    const ariaCorrectLabel = getExerciseQuestionLabel(labels, "common.correct_badge", "Correct");
    const ariaIncorrectLabel = getExerciseQuestionLabel(labels, "common.incorrect_badge", "Incorrect");
    if (showCorrect) {
      $$renderer2.push("<!--[-->");
      Badge($$renderer2, {
        variant: "success",
        class: "ui:ml-2 ui:p-1",
        "aria-label": ariaCorrectLabel,
        title: ariaCorrectLabel,
        children: ($$renderer3) => {
          Check($$renderer3, { "aria-hidden": "true", class: "custom" });
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (showIncorrect) {
      $$renderer2.push("<!--[-->");
      Badge($$renderer2, {
        variant: "destructive",
        class: "ui:ml-2 ui:p-1",
        "aria-label": ariaIncorrectLabel,
        title: ariaIncorrectLabel,
        children: ($$renderer3) => {
          X($$renderer3, { "aria-hidden": "true", class: "custom" });
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Mcq_preview_option_row($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { option, index, optionImageUrl, optionsHaveImages, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    $$renderer2.push(`<li${attr_class(clsx(cn(optionsHaveImages && "ui:space-y-2 ui:rounded-md ui:p-2", "ui:text-sm")))}>`);
    Option_image($$renderer2, {
      src: optionImageUrl,
      alt: label("question.edit.image_alt"),
      variant: "preview",
      hasAnyImageInOptions: optionsHaveImages
    });
    $$renderer2.push(`<!----> <div>${escape_html(option.label || option.value || [label("common.option_prefix"), String(index + 1)].filter(Boolean).join(" "))} `);
    Option_correctness_badges($$renderer2, { labels, showCorrect: option.isCorrect === true });
    $$renderer2.push(`<!----></div></li>`);
  });
}
function Preview$e($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const optionsHaveImages = hasOptionImages(question.options);
    $$renderer2.push(`<div class="ui:space-y-2"><ul${attr_class(clsx(optionsHaveImages ? "ui:grid ui:grid-cols-2 ui:gap-3" : "ui:space-y-1"))}><!--[-->`);
    const each_array = ensure_array_like(question.options ?? []);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let option = each_array[index];
      Mcq_preview_option_row($$renderer2, {
        option,
        index,
        optionImageUrl: getOptionImageUrl(option),
        optionsHaveImages,
        labels
      });
    }
    $$renderer2.push(`<!--]--></ul></div>`);
  });
}
function Preview$d($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const acceptedTypes = normalizeAcceptedFileTypes(question.settings?.acceptedTypes);
    const acceptedTypesDisplay = acceptedTypes.length > 0 ? formatAcceptedFileTypes(acceptedTypes) : label("common.not_set");
    $$renderer2.push(`<div class="ui:space-y-1"><p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("file_upload.preview.accepted_types_label"))}:
    ${escape_html(acceptedTypesDisplay)}</p> <p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("file_upload.preview.max_size_label"))}:
    ${escape_html(String(question.settings?.maxSizeMb ?? 0))}</p></div>`);
  });
}
function Preview$c($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    $$renderer2.push(`<div class="ui:space-y-1"><p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("fill_blank.preview.accepted_answers_label"))}:
    ${escape_html(String(question.settings?.acceptedAnswers ?? label("common.not_set")))}</p></div>`);
  });
}
function Preview$b($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    $$renderer2.push(`<div class="ui:space-y-1"><p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("hotspot.preview.helper"))}</p></div>`);
  });
}
function Preview$a($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    $$renderer2.push(`<div class="ui:space-y-1"><p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("matching.preview.helper"))}</p></div>`);
  });
}
function Numeric_expected_fields($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const correctValue = question.settings?.correctValue;
    const tolerance = question.settings?.tolerance;
    $$renderer2.push(`<div class="ui:space-y-1"><p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("numeric.preview.correct_value_label"))}: ${escape_html(correctValue ?? label("common.not_set"))}</p> <p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("numeric.preview.tolerance_label"))}: ${escape_html(tolerance ?? 0)}</p></div>`);
  });
}
function Preview$9($$renderer, $$props) {
  let { question, labels } = $$props;
  Numeric_expected_fields($$renderer, { question, labels });
}
function Ordering_display($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, answer = null, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const expectedOrder = (() => getOrderingItemsFromQuestion(question))();
    const submittedOrder = (() => applyOrderingAnswer(expectedOrder, answer))();
    const hasSubmittedAnswer = answer?.type === "ORDERING" ? answer.orderedValues.length > 0 : false;
    const isSubmittedOrderCorrect = areSameOrdering(expectedOrder, submittedOrder);
    function getRowClass(index) {
      if (!hasSubmittedAnswer) return "ui:border-muted";
      const expected = expectedOrder[index];
      const submitted = submittedOrder[index];
      const isMatch = expected && submitted ? expected.answerValue === submitted.answerValue : false;
      return isMatch ? "ui:border-emerald-400 ui:bg-emerald-50/30" : "ui:border-amber-400 ui:bg-amber-50/30";
    }
    $$renderer2.push(`<div class="ui:space-y-3">`);
    if (hasSubmittedAnswer) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:space-y-1"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("ordering.preview.submitted_label"))}</p> <!--[-->`);
      const each_array = ensure_array_like(submittedOrder);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let item = each_array[index];
        $$renderer2.push(`<div${attr_class(`ui:flex ui:items-center ui:gap-3 ui:rounded-md ui:border ui:p-2 ${getRowClass(index)}`)}><span class="ui:bg-muted ui:text-muted-foreground ui:rounded-full ui:px-2 ui:py-1 ui:text-xs">${escape_html(index + 1)}</span> <span class="ui:text-sm">${escape_html(item.label)}</span></div>`);
      }
      $$renderer2.push(`<!--]--></div> <p${attr_class(`ui:text-xs ${isSubmittedOrderCorrect ? "ui:text-emerald-600" : "ui:text-amber-600"}`)}>${escape_html(isSubmittedOrderCorrect ? label("ordering.preview.matches") : label("ordering.preview.differs"))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="ui:space-y-1"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("ordering.preview.expected_label"))}</p> <!--[-->`);
    const each_array_1 = ensure_array_like(expectedOrder);
    for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
      let item = each_array_1[index];
      $$renderer2.push(`<div class="ui:bg-background ui:flex ui:items-center ui:gap-3 ui:rounded-md ui:border ui:p-2"><span class="ui:bg-muted ui:text-muted-foreground ui:rounded-full ui:px-2 ui:py-1 ui:text-xs">${escape_html(index + 1)}</span> <span class="ui:text-sm">${escape_html(item.label)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function Preview$8($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  Ordering_display($$renderer, spread_props([props, { answer: null }]));
}
function Preview$7($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const optionsHaveImages = hasOptionImages(question.options);
    $$renderer2.push(`<div class="ui:space-y-2"><ul${attr_class(clsx(optionsHaveImages ? "ui:grid ui:grid-cols-2 ui:gap-3" : "ui:space-y-1"))}><!--[-->`);
    const each_array = ensure_array_like(question.options ?? []);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let option = each_array[index];
      Mcq_preview_option_row($$renderer2, {
        option,
        index,
        optionImageUrl: getOptionImageUrl(option),
        optionsHaveImages,
        labels
      });
    }
    $$renderer2.push(`<!--]--></ul></div>`);
  });
}
function Preview$6($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, answer = null, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    function isValidLink(value) {
      try {
        const parsedUrl = new URL(value);
        return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
      } catch {
        return false;
      }
    }
    const links = (() => {
      if (answer?.type === "LINK") return answer.urls.map((u) => String(u ?? "").trim()).filter(Boolean);
      return [];
    })();
    function formatLinkLabel(index) {
      const template = label("link.preview.item_label");
      if (!template) return String(index + 1);
      return template.replace("{index}", String(index + 1));
    }
    $$renderer2.push(`<div class="ui:space-y-2">`);
    if (links.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("link.preview.empty"))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="ui:space-y-2"><!--[-->`);
      const each_array = ensure_array_like(links);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let link = each_array[index];
        $$renderer2.push(`<div class="ui:bg-background ui:rounded-md ui:border ui:p-2">`);
        if (isValidLink(link)) {
          $$renderer2.push("<!--[-->");
          {
            let children = function($$renderer3, isHovered) {
              $$renderer3.push(`<a${attr("href", link)} target="_blank" rel="noreferrer" class="ui:text-primary ui:inline-flex ui:items-center ui:gap-2 ui:text-sm ui:underline"><span>${escape_html(formatLinkLabel(index))}</span> `);
              External_link($$renderer3, { isHovered, size: 14, class: "ui:shrink-0", ariaHidden: true });
              $$renderer3.push(`<!----></a>`);
            };
            Hoverable_item($$renderer2, { children });
          }
          $$renderer2.push(`<!----> <p class="ui:text-muted-foreground ui:mt-1 ui:text-xs">${escape_html(link)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<p class="ui:text-sm">${escape_html(link)}</p>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Preview$5($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const template = String(question.settings?.template ?? "");
    const correctAnswers = (() => {
      const raw = question.settings?.correctAnswers;
      return Array.isArray(raw) ? raw.map((s) => String(s ?? "")) : [];
    })();
    const blankCount = countWordBankBlanks(template);
    const segments = parseWordBankTemplate(template);
    $$renderer2.push(`<div class="ui:space-y-2">`);
    if (blankCount === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("word_bank.preview.filled_label"))}: ${escape_html(label("common.not_set"))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("word_bank.preview.filled_label"))}</p> <div class="ui:bg-muted/30 ui:rounded-lg ui:border ui:p-4 ui:font-mono ui:text-sm ui:leading-relaxed"><!--[-->`);
      const each_array = ensure_array_like(segments);
      for (let segmentIndex = 0, $$length = each_array.length; segmentIndex < $$length; segmentIndex++) {
        let segment = each_array[segmentIndex];
        if (segment.type === "text") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span>${escape_html(segment.value)}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
          const expected = correctAnswers[segment.index]?.trim();
          $$renderer2.push(`<span class="ui:inline-flex ui:mx-0.5 ui:min-h-8 ui:min-w-[5rem] ui:items-center ui:justify-center ui:rounded ui:border-2 ui:border-solid ui:border-primary ui:bg-background ui:px-2 ui:py-0.5">${escape_html(expected || label("common.not_set"))}</span>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Preview$4($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    $$renderer2.push(`<div class="ui:space-y-1"><p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("short_answer.preview.helper"))}</p></div>`);
  });
}
function Preview$3($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const maxStars = getStarRatingMaxFromSettings(question.settings);
    const correctValue = (() => {
      const rawCorrect = question.settings?.correctValue;
      const parsed = typeof rawCorrect === "number" ? rawCorrect : rawCorrect != null ? Number(rawCorrect) : NaN;
      if (!isValidStarRatingValue(parsed, maxStars)) return 0;
      return parsed;
    })();
    $$renderer2.push(`<div class="ui:space-y-2"><p class="ui:text-sm ui:font-medium">${escape_html(label("star.preview.correct_label"))}</p> `);
    Star_row($$renderer2, {
      maxStars,
      value: correctValue,
      disabled: true,
      starLabel: (starIndex) => label("star.take.star_sr", "Star {n} of {max}").replace("{n}", String(starIndex)).replace("{max}", String(maxStars))
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Preview$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, answer = null } = $$props;
    const content = answer?.type === "TEXTAREA" ? answer.text : "";
    $$renderer2.push(`<div class="ui:space-y-2">`);
    Editor($$renderer2, {
      content,
      editable: false,
      showToolBar: false,
      editorClass: "ui:h-40"
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function getTrueFalseCorrectIsTrue(settings) {
  return settings?.correctValue !== false;
}
function Preview$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const correctValue = getTrueFalseCorrectIsTrue(question.settings) ? label("true_false.true_label") : label("true_false.false_label");
    $$renderer2.push(`<div class="ui:space-y-1"><p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("true_false.preview.correct_value_label"))}: ${escape_html(correctValue)}</p></div>`);
  });
}
function Preview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const maxDurationSeconds = getVideoRecordingMaxDurationSeconds(question.settings);
    $$renderer2.push(`<div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("video_recording.preview.max_duration_label", "Max duration"))}: ${escape_html(formatSeconds(maxDurationSeconds))}</p> <p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("video_recording.preview.manual_grading", "Learners record a short video response. Manual grading required."))}</p></div>`);
  });
}
function Chart_legend($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { items, showValue = true } = $$props;
    if (items.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:flex ui:flex-wrap ui:items-center ui:justify-center ui:gap-x-6 ui:gap-y-2 ui:mt-4"><!--[-->`);
      const each_array = ensure_array_like(items);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$renderer2.push(`<div class="ui:flex ui:items-center ui:gap-2"><span class="ui:size-3 ui:shrink-0 ui:rounded-[2px] ui:ring-1 ui:ring-inset ui:ring-border/50"${attr_style(`background-color: ${stringify(item.color)}`)} aria-hidden="true"></span> <span class="ui:text-muted-foreground ui:text-xs">${escape_html(item.label)} `);
        if (showValue && item.value !== void 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="ui:font-medium ui:text-foreground">(${escape_html(item.value)})</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></span></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
function identity(d) {
  return d;
}
function d3pie() {
  var value = identity, sortValues = descending, sort = null, startAngle = constant$1(0), endAngle = constant$1(tau$3), padAngle = constant$1(0);
  function pie(data) {
    var i, n = (data = array(data)).length, j, k, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau$3, Math.max(-tau$3, endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }
    if (sortValues != null) index.sort(function(i2, j2) {
      return sortValues(arcs[i2], arcs[j2]);
    });
    else if (sort != null) index.sort(function(i2, j2) {
      return sort(data[i2], data[j2]);
    });
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }
    return arcs;
  }
  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$1(+_), pie) : value;
  };
  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };
  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };
  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$1(+_), pie) : startAngle;
  };
  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$1(+_), pie) : endAngle;
  };
  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$1(+_), pie) : padAngle;
  };
  return pie;
}
function Pie($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      data,
      range = [0, 360],
      startAngle: startAngleProp,
      endAngle: endAngleProp,
      innerRadius,
      outerRadius,
      cornerRadius = 0,
      padAngle = 0,
      motion,
      offset = 0,
      tooltipContext,
      sort,
      children
    } = $$props;
    const ctx = getChartContext();
    const endAngle = endAngleProp ?? degreesToRadians(ctx.config.xRange ? max$2(ctx.xRange) : max$2(range));
    const motionEndAngle = createMotion(0, () => endAngle, motion);
    const pie = (() => {
      let _pie = d3pie().startAngle(startAngleProp ?? degreesToRadians(ctx.config.xRange ? min$2(ctx.xRange) : min$2(range))).endAngle(motionEndAngle.current).padAngle(padAngle).value(ctx.x);
      if (sort === null) {
        _pie = _pie.sort(null);
      } else if (sort) {
        _pie = _pie.sort(sort);
      }
      return _pie;
    })();
    const arcs = pie(data ?? (Array.isArray(ctx.data) ? ctx.data : []));
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2, { arcs });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(arcs);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let arc = each_array[$$index];
        Arc($$renderer2, {
          class: layerClass("pie-arc"),
          startAngle: arc.startAngle,
          endAngle: arc.endAngle,
          padAngle: arc.padAngle,
          innerRadius,
          outerRadius,
          cornerRadius,
          offset,
          fill: ctx.config.c ? ctx.cScale?.(ctx.c(arc.data)) : null,
          data: arc.data,
          tooltipContext
        });
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function PieChart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      data = [],
      key = "key",
      label = "label",
      value = "value",
      range = [0, 360],
      c = key,
      innerRadius,
      outerRadius,
      cornerRadius = 0,
      padAngle = 0,
      placement = "center",
      maxValue,
      center = placement === "center",
      series: seriesProp,
      legend = false,
      onArcClick = () => {
      },
      // TODO: Not usable with manual tooltip / arc path.  Use `onArcClick`?
      /** Event dispatched with current tooltip data */
      onTooltipClick = () => {
      },
      props = {},
      renderContext = "svg",
      profile = false,
      debug = false,
      tooltip = true,
      children: childrenProp,
      aboveContext,
      belowContext,
      belowMarks,
      aboveMarks,
      marks,
      pie,
      arc,
      context = void 0,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const series = seriesProp === void 0 ? [{ key: "default", value }] : seriesProp;
    const keyAccessor = accessor(key);
    const labelAccessor = accessor(label);
    const valueAccessor = accessor(value);
    const cAccessor = accessor(c);
    const allSeriesData = series.flatMap((s) => s.data?.map((d) => ({ seriesKey: s.key, ...d }))).filter((d) => d);
    const chartData = allSeriesData.length ? allSeriesData : chartDataArray(data);
    const seriesColors = series.map((s) => s.color).filter((d) => d != null);
    const highlightKey = new HighlightKey();
    const selectedKeys = new SelectionState();
    const selectedSeries = new SelectionState();
    const visibleData = chartData.filter((d) => {
      const dataKey = keyAccessor(d);
      return selectedKeys.isEmpty() || selectedKeys.isSelected(dataKey);
    });
    const visibleSeries = series.filter((s) => selectedSeries.isEmpty() || selectedSeries.isSelected(s.key));
    function getLegendProps() {
      return {
        tickFormat: (tick) => {
          const item = chartData.find((d) => keyAccessor(d) === tick);
          return item ? labelAccessor(item) ?? tick : tick;
        },
        placement: "bottom",
        variant: "swatches",
        onclick: (e, item) => {
          selectedKeys.toggle(item.value);
        },
        onpointerenter: (e, item) => highlightKey.current = item.value,
        onpointerleave: (e) => highlightKey.current = null,
        ...props.legend,
        ...typeof legend === "object" ? legend : null,
        classes: {
          item: (item) => visibleData.length && !visibleData.some((d) => keyAccessor(d) === item.value) ? "opacity-50" : "",
          ...props.legend?.classes,
          ...typeof legend === "object" ? legend.classes : null
        }
      };
    }
    function getGroupProps() {
      if (!context) return {};
      return {
        x: placement === "left" ? context.height / 2 : placement === "right" ? context.width - context.height / 2 : void 0,
        center: ["left", "right"].includes(placement) ? "y" : void 0,
        ...props.group
      };
    }
    function getPieProps(s, i) {
      return {
        data: s.data,
        range,
        innerRadius,
        outerRadius,
        cornerRadius,
        padAngle,
        ...props.pie
      };
    }
    function getArcProps(s, seriesIndex, arc2, arcIndex) {
      if (!context) return {};
      const arcDataProps = "props" in arc2.data && typeof arc2.data.props === "object" ? arc2.data.props : {};
      return {
        startAngle: arc2.startAngle,
        endAngle: arc2.endAngle,
        outerRadius: visibleSeries.length > 1 ? seriesIndex * (outerRadius ?? 0) : outerRadius,
        innerRadius,
        cornerRadius,
        padAngle,
        fill: context.cScale?.(context.c(arc2.data)),
        data: arc2.data,
        tooltipContext: context.tooltip,
        onclick: (e) => {
          onArcClick(e, { data: arc2.data, series: s });
          onTooltipClick(e, { data: arc2.data });
        },
        class: cls("transition-opacity", highlightKey.current && highlightKey.current !== keyAccessor(arc2.data) && "opacity-50"),
        ...props.arc,
        ...s.props,
        ...arcDataProps
      };
    }
    if (profile) {
      console.time("PieChart render");
    }
    setTooltipMetaContext({
      type: "pie",
      get color() {
        return c;
      },
      get value() {
        return value;
      },
      get label() {
        return label;
      },
      get key() {
        return key;
      },
      get visibleSeries() {
        return visibleSeries;
      }
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        let children = function($$renderer4, { context: context2 }) {
          const snippetProps = {
            label: labelAccessor,
            key: keyAccessor,
            value: valueAccessor,
            color: cAccessor,
            context: context2,
            series,
            visibleSeries,
            visibleData,
            highlightKey: highlightKey.current,
            setHighlightKey: highlightKey.set,
            getLegendProps,
            getGroupProps
          };
          if (childrenProp) {
            $$renderer4.push("<!--[-->");
            childrenProp($$renderer4, snippetProps);
            $$renderer4.push(`<!---->`);
          } else {
            $$renderer4.push("<!--[!-->");
            belowContext?.($$renderer4, snippetProps);
            $$renderer4.push(`<!----> `);
            Layer($$renderer4, spread_props([
              { type: renderContext },
              asAny(renderContext === "canvas" ? props.canvas : props.svg),
              {
                center,
                debug,
                children: ($$renderer5) => {
                  belowMarks?.($$renderer5, snippetProps);
                  $$renderer5.push(`<!----> `);
                  if (typeof marks === "function") {
                    $$renderer5.push("<!--[-->");
                    marks($$renderer5, snippetProps);
                    $$renderer5.push(`<!---->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                    Group($$renderer5, spread_props([
                      getGroupProps(),
                      {
                        children: ($$renderer6) => {
                          $$renderer6.push(`<!--[-->`);
                          const each_array = ensure_array_like(visibleSeries);
                          for (let seriesIdx = 0, $$length = each_array.length; seriesIdx < $$length; seriesIdx++) {
                            let s = each_array[seriesIdx];
                            if (typeof pie === "function") {
                              $$renderer6.push("<!--[-->");
                              pie($$renderer6, {
                                ...snippetProps,
                                props: getPieProps(s),
                                index: seriesIdx
                              });
                              $$renderer6.push(`<!---->`);
                            } else {
                              $$renderer6.push("<!--[!-->");
                              {
                                let children2 = function($$renderer7, { arcs }) {
                                  $$renderer7.push(`<!--[-->`);
                                  const each_array_1 = ensure_array_like(arcs);
                                  for (let arcIdx = 0, $$length2 = each_array_1.length; arcIdx < $$length2; arcIdx++) {
                                    let arcData = each_array_1[arcIdx];
                                    const arcProps = getArcProps(s, seriesIdx, arcData);
                                    if (typeof arc === "function") {
                                      $$renderer7.push("<!--[-->");
                                      arc($$renderer7, {
                                        ...snippetProps,
                                        props: arcProps,
                                        index: arcIdx,
                                        seriesIndex: seriesIdx
                                      });
                                      $$renderer7.push(`<!---->`);
                                    } else {
                                      $$renderer7.push("<!--[!-->");
                                      Arc($$renderer7, spread_props([arcProps]));
                                    }
                                    $$renderer7.push(`<!--]-->`);
                                  }
                                  $$renderer7.push(`<!--]-->`);
                                };
                                Pie($$renderer6, spread_props([
                                  getPieProps(s),
                                  { children: children2, $$slots: { default: true } }
                                ]));
                              }
                            }
                            $$renderer6.push(`<!--]-->`);
                          }
                          $$renderer6.push(`<!--]-->`);
                        },
                        $$slots: { default: true }
                      }
                    ]));
                  }
                  $$renderer5.push(`<!--]--> `);
                  aboveMarks?.($$renderer5, snippetProps);
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              }
            ]));
            $$renderer4.push(`<!----> `);
            aboveContext?.($$renderer4, snippetProps);
            $$renderer4.push(`<!----> `);
            if (typeof legend === "function") {
              $$renderer4.push("<!--[-->");
              legend($$renderer4, snippetProps);
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
              if (legend) {
                $$renderer4.push("<!--[-->");
                Legend($$renderer4, spread_props([getLegendProps()]));
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]--> `);
            if (typeof tooltip === "function") {
              $$renderer4.push("<!--[-->");
              tooltip($$renderer4, snippetProps);
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
              if (tooltip) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<!---->`);
                {
                  let children2 = function($$renderer5, { data: data2 }) {
                    $$renderer5.push(`<!---->`);
                    TooltipList($$renderer5, spread_props([
                      props.tooltip?.list,
                      {
                        children: ($$renderer6) => {
                          $$renderer6.push(`<!---->`);
                          TooltipItem($$renderer6, spread_props([
                            {
                              label: labelAccessor(data2) || keyAccessor(data2),
                              value: valueAccessor(data2),
                              color: context2.cScale?.(context2.c(data2)),
                              format: format$1,
                              onpointerenter: () => highlightKey.current = keyAccessor(data2),
                              onpointerleave: () => highlightKey.current = null
                            },
                            props.tooltip?.item
                          ]));
                          $$renderer6.push(`<!---->`);
                        },
                        $$slots: { default: true }
                      }
                    ]));
                    $$renderer5.push(`<!---->`);
                  };
                  Tooltip($$renderer4, spread_props([
                    { context: context2 },
                    props.tooltip?.root,
                    { children: children2, $$slots: { default: true } }
                  ]));
                }
                $$renderer4.push(`<!---->`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]-->`);
          }
          $$renderer4.push(`<!--]-->`);
        };
        Chart($$renderer3, spread_props([
          {
            data: visibleData,
            x: value,
            y: key,
            c: key,
            cDomain: chartData.map(keyAccessor),
            cRange: seriesColors.length ? seriesColors : c !== key ? chartData.map((d) => cAccessor(d)) : [
              "var(--color-primary)",
              "var(--color-secondary)",
              "var(--color-info)",
              "var(--color-success)",
              "var(--color-warning)",
              "var(--color-danger)"
            ],
            padding: { bottom: legend === true ? 32 : 0 }
          },
          restProps,
          {
            tooltip: tooltip === false ? false : {
              ...props.tooltip?.context,
              ...typeof tooltip === "object" ? tooltip : null
            },
            get context() {
              return context;
            },
            set context($$value) {
              context = $$value;
              $$settled = false;
            },
            children,
            $$slots: { default: true }
          }
        ]));
      }
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { context });
  });
}
const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)"
];
function getSubmissionLabel(labels, key, fallback = "") {
  return getExerciseQuestionLabel(labels, key, fallback);
}
function getQuestionKey(question) {
  if (question.id !== void 0 && question.id !== null) return String(question.id);
  if (question.key) return String(question.key);
  return null;
}
function normalizeLabel(value, fallback) {
  const label = String(value || "").trim();
  return label.length > 0 ? label : fallback;
}
function getAnswerForQuestion(submission, question) {
  const questionKey = getQuestionKey(question);
  if (!questionKey) return void 0;
  const answer = submission.answers.find((item) => String(item.questionId) === questionKey);
  if (!answer?.answerData || typeof answer.answerData !== "object" || !("type" in answer.answerData)) {
    return void 0;
  }
  return answer.answerData;
}
function withChartColors(items) {
  return items.map((item, index) => ({
    ...item,
    color: CHART_COLORS[index % CHART_COLORS.length]
  }));
}
function Submission$e($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, submissions = [], labels } = $$props;
    const chartConfig = {
      responses: {
        label: getSubmissionLabel(labels, "submission.chart.responses", "Responses"),
        color: "var(--chart-1)"
      }
    };
    const series = [
      {
        key: "responses",
        value: "responses",
        label: chartConfig.responses.label,
        color: "var(--color-responses)"
      }
    ];
    const chartData = (() => {
      const byOptionId = /* @__PURE__ */ new Map();
      for (const option of question.options || []) {
        const optionId = option.id == null ? "" : String(option.id);
        if (!optionId) continue;
        byOptionId.set(optionId, {
          key: optionId,
          label: normalizeLabel(option.label || option.value, optionId),
          responses: 0
        });
      }
      let noAnswerCount = 0;
      for (const submission of submissions || []) {
        const answer = getAnswerForQuestion(submission, question);
        if (!answer || answer.type !== "CHECKBOX" || answer.optionIds.length < 1) {
          noAnswerCount += 1;
          continue;
        }
        let hadKnownOption = false;
        for (const optionId of answer.optionIds) {
          const option = byOptionId.get(String(optionId));
          if (!option) continue;
          hadKnownOption = true;
          option.responses += 1;
        }
        if (!hadKnownOption) {
          noAnswerCount += 1;
        }
      }
      const rows = [...byOptionId.values()].filter((item) => item.responses > 0);
      if (noAnswerCount > 0) {
        rows.push({
          key: "no-answer",
          label: getSubmissionLabel(labels, "submission.common.no_answer", "No answer"),
          responses: noAnswerCount
        });
      }
      return withChartColors(rows);
    })();
    if (chartData.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!---->`);
      Chart_container($$renderer2, {
        config: chartConfig,
        class: "ui:h-[280px] ui:w-full",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          BarChart($$renderer3, {
            data: chartData,
            xScale: band().padding(0.25),
            x: "label",
            axis: "x",
            tooltip: false,
            series
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(getSubmissionLabel(labels, "submission.chart.no_data", "No responses yet"))}</p>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Submission_generic($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, submissions = [], labels, maxSubmissionItems } = $$props;
    function summarizeAnswer(answer) {
      switch (answer.type) {
        case "TEXTAREA":
        case "SHORT_ANSWER":
          return [answer.text];
        case "NUMERIC":
          return [String(answer.value)];
        case "STAR":
          return [String(answer.value)];
        case "LINK":
          return answer.urls;
        case "FILE_UPLOAD":
          return [answer.fileName || answer.fileKey];
        case "MATCHING":
          return [`${answer.pairs.length} pair(s)`];
        case "ORDERING":
          return [answer.orderedValues.join(" -> ")];
        case "HOTSPOT":
          return [`${answer.coordinates.length} point(s)`];
        default: {
          const display = extractAnswerDisplayValues(answer);
          if (typeof display.text === "string" && display.text.trim().length > 0) {
            return [display.text];
          }
          return display.selectedValues.map((value) => String(value));
        }
      }
    }
    const responseRows = (() => {
      const bySummary = /* @__PURE__ */ new Map();
      for (const submission of submissions || []) {
        const answer = getAnswerForQuestion(submission, question);
        if (!answer) continue;
        const values = summarizeAnswer(answer).map((item) => normalizeLabel(item, "")).filter(Boolean);
        if (values.length < 1) continue;
        for (const value of values) {
          bySummary.set(value, (bySummary.get(value) || 0) + 1);
        }
      }
      const rows = [...bySummary.entries()].map(([label, responses]) => ({ label, responses })).sort((a, b) => b.responses - a.responses);
      if (typeof maxSubmissionItems === "number" && maxSubmissionItems > 0) {
        return rows.slice(0, maxSubmissionItems);
      }
      return rows;
    })();
    const totalResponses = responseRows.reduce((sum, row) => sum + row.responses, 0);
    $$renderer2.push(`<div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-sm">${escape_html(totalResponses)}
    ${escape_html(getSubmissionLabel(labels, "submission.list.responses", "Responses"))}</p> `);
    if (responseRows.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:max-h-80 ui:space-y-2 ui:overflow-y-auto ui:pr-1"><!--[-->`);
      const each_array = ensure_array_like(responseRows);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let row = each_array[$$index];
        $$renderer2.push(`<div class="ui:flex ui:items-center ui:justify-between ui:gap-3 ui:rounded-md ui:border ui:px-3 ui:py-2"><p class="ui:text-sm">${escape_html(row.label)}</p> <span class="ui:text-muted-foreground ui:text-xs">${escape_html(row.responses)}</span></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(getSubmissionLabel(labels, "submission.list.no_responses", "No responses yet"))}</p>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Submission$d($$renderer, $$props) {
  let { question, submissions = [], labels, maxSubmissionItems } = $$props;
  Submission_generic($$renderer, { question, submissions, labels, maxSubmissionItems });
}
function Submission$c($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, submissions = [], labels, maxSubmissionItems = 8 } = $$props;
    const chartConfig = {
      responses: {
        label: getSubmissionLabel(labels, "submission.chart.responses", "Responses"),
        color: "var(--chart-1)"
      }
    };
    const series = [
      {
        key: "responses",
        value: "responses",
        label: chartConfig.responses.label,
        color: "var(--color-responses)"
      }
    ];
    const chartData = (() => {
      const byValue = /* @__PURE__ */ new Map();
      let noAnswerCount = 0;
      for (const submission of submissions || []) {
        const answer = getAnswerForQuestion(submission, question);
        if (!answer || answer.type !== "FILL_BLANK") {
          noAnswerCount += 1;
          continue;
        }
        const values = answer.values.map((value) => String(value || "").trim()).filter(Boolean);
        if (values.length < 1) {
          noAnswerCount += 1;
          continue;
        }
        for (const value of values) {
          const key = value.toLowerCase();
          const current = byValue.get(key);
          if (!current) {
            byValue.set(key, { key, label: value, responses: 1 });
            continue;
          }
          current.responses += 1;
        }
      }
      const sorted = [...byValue.values()].sort((a, b) => b.responses - a.responses);
      let rows = sorted;
      if (rows.length > maxSubmissionItems) {
        const kept = rows.slice(0, maxSubmissionItems);
        const otherCount = rows.slice(maxSubmissionItems).reduce((sum, item) => sum + item.responses, 0);
        rows = [
          ...kept,
          {
            key: "other",
            label: getSubmissionLabel(labels, "submission.common.other", "Other"),
            responses: otherCount
          }
        ];
      }
      if (noAnswerCount > 0) {
        rows.push({
          key: "no-answer",
          label: getSubmissionLabel(labels, "submission.common.no_answer", "No answer"),
          responses: noAnswerCount
        });
      }
      return withChartColors(rows.map((row) => ({ ...row, label: normalizeLabel(row.label, row.key) })));
    })();
    if (chartData.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!---->`);
      Chart_container($$renderer2, {
        config: chartConfig,
        class: "ui:h-[280px] ui:w-full",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          BarChart($$renderer3, {
            data: chartData,
            xScale: band().padding(0.25),
            x: "label",
            axis: "x",
            tooltip: false,
            series
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(getSubmissionLabel(labels, "submission.chart.no_data", "No responses yet"))}</p>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Submission$b($$renderer, $$props) {
  let { question, submissions = [], labels, maxSubmissionItems } = $$props;
  Submission_generic($$renderer, { question, submissions, labels, maxSubmissionItems });
}
function Submission$a($$renderer, $$props) {
  let { question, submissions = [], labels, maxSubmissionItems } = $$props;
  Submission_generic($$renderer, { question, submissions, labels, maxSubmissionItems });
}
function Submission$9($$renderer, $$props) {
  let { question, submissions = [], labels, maxSubmissionItems } = $$props;
  Submission_generic($$renderer, { question, submissions, labels, maxSubmissionItems });
}
function Submission$8($$renderer, $$props) {
  let { question, submissions = [], labels, maxSubmissionItems } = $$props;
  Submission_generic($$renderer, { question, submissions, labels, maxSubmissionItems });
}
function Submission_response_pie_chart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { chartData, chartConfig, emptyLabel } = $$props;
    if (chartData.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!---->`);
      Chart_container($$renderer2, {
        config: chartConfig,
        class: "ui:h-[280px] ui:w-full ui:flex-col ui:items-center",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          PieChart($$renderer3, {
            data: chartData,
            key: "key",
            label: "label",
            value: "responses",
            c: "color"
          });
          $$renderer3.push(`<!----> <!---->`);
          Chart_legend($$renderer3, {
            items: chartData.map((d) => ({
              label: d.label,
              color: d.color ?? CHART_COLORS[0],
              value: d.responses
            }))
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(emptyLabel)}</p>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Submission$7($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, submissions = [], labels } = $$props;
    const chartConfig = {
      responses: {
        label: getSubmissionLabel(labels, "submission.chart.responses", "Responses"),
        color: "var(--chart-1)"
      }
    };
    const chartData = (() => {
      const byOptionId = /* @__PURE__ */ new Map();
      for (const option of question.options || []) {
        const optionId = option.id == null ? "" : String(option.id);
        if (!optionId) continue;
        byOptionId.set(optionId, {
          key: optionId,
          label: normalizeLabel(option.label || option.value, optionId),
          responses: 0
        });
      }
      let noAnswerCount = 0;
      for (const submission of submissions || []) {
        const answer = getAnswerForQuestion(submission, question);
        if (!answer || answer.type !== "RADIO") {
          noAnswerCount += 1;
          continue;
        }
        const option = byOptionId.get(String(answer.optionId));
        if (!option) {
          noAnswerCount += 1;
          continue;
        }
        option.responses += 1;
      }
      const rows = [...byOptionId.values()].filter((item) => item.responses > 0);
      if (noAnswerCount > 0) {
        rows.push({
          key: "no-answer",
          label: getSubmissionLabel(labels, "submission.common.no_answer", "No answer"),
          responses: noAnswerCount
        });
      }
      return withChartColors(rows);
    })();
    Submission_response_pie_chart($$renderer2, {
      chartData,
      chartConfig,
      emptyLabel: getSubmissionLabel(labels, "submission.chart.no_data", "No responses yet")
    });
  });
}
function Submission$6($$renderer, $$props) {
  let { question, submissions = [], labels, maxSubmissionItems } = $$props;
  Submission_generic($$renderer, { question, submissions, labels, maxSubmissionItems });
}
function Submission$5($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, submissions = [], labels, maxSubmissionItems = 8 } = $$props;
    const chartConfig = {
      responses: {
        label: getSubmissionLabel(labels, "submission.chart.responses", "Responses"),
        color: "var(--chart-1)"
      }
    };
    const series = [
      {
        key: "responses",
        value: "responses",
        label: chartConfig.responses.label,
        color: "var(--color-responses)"
      }
    ];
    function summarizeWordBankAnswer(answer) {
      if (!answer || !Array.isArray(answer.filledBlanks)) return "";
      return answer.filledBlanks.map((v) => String(v || "").trim()).join(" | ");
    }
    const chartData = (() => {
      const byValue = /* @__PURE__ */ new Map();
      let noAnswerCount = 0;
      for (const submission of submissions || []) {
        const answer = getAnswerForQuestion(submission, question);
        if (!answer || answer.type !== "WORD_BANK") {
          noAnswerCount += 1;
          continue;
        }
        const summary = summarizeWordBankAnswer(answer).trim().toLowerCase();
        if (!summary) {
          noAnswerCount += 1;
          continue;
        }
        const key = summary;
        const current = byValue.get(key);
        if (!current) {
          byValue.set(key, {
            key,
            label: summarizeWordBankAnswer(answer).trim() || key,
            responses: 1
          });
          continue;
        }
        current.responses += 1;
      }
      const sorted = [...byValue.values()].sort((a, b) => b.responses - a.responses);
      let rows = sorted;
      if (rows.length > maxSubmissionItems) {
        const kept = rows.slice(0, maxSubmissionItems);
        const otherCount = rows.slice(maxSubmissionItems).reduce((sum, item) => sum + item.responses, 0);
        rows = [
          ...kept,
          {
            key: "other",
            label: getSubmissionLabel(labels, "submission.common.other", "Other"),
            responses: otherCount
          }
        ];
      }
      if (noAnswerCount > 0) {
        rows.push({
          key: "no-answer",
          label: getSubmissionLabel(labels, "submission.common.no_answer", "No answer"),
          responses: noAnswerCount
        });
      }
      return withChartColors(rows.map((row) => ({ ...row, label: normalizeLabel(row.label, row.key) })));
    })();
    if (chartData.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!---->`);
      Chart_container($$renderer2, {
        config: chartConfig,
        class: "ui:h-[280px] ui:w-full",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          BarChart($$renderer3, {
            data: chartData,
            xScale: band().padding(0.25),
            x: "label",
            axis: "x",
            tooltip: false,
            series
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(getSubmissionLabel(labels, "submission.chart.no_data", "No responses yet"))}</p>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Submission$4($$renderer, $$props) {
  let { question, submissions = [], labels, maxSubmissionItems } = $$props;
  Submission_generic($$renderer, { question, submissions, labels, maxSubmissionItems });
}
function Submission$3($$renderer, $$props) {
  let { question, submissions = [], labels, maxSubmissionItems } = $$props;
  Submission_generic($$renderer, { question, submissions, labels, maxSubmissionItems });
}
function Submission$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, submissions = [], labels, maxSubmissionItems } = $$props;
    const responseRows = (() => {
      const byHtml = /* @__PURE__ */ new Map();
      for (const submission of submissions || []) {
        const answer = getAnswerForQuestion(submission, question);
        if (!answer || answer.type !== "TEXTAREA") continue;
        const rawHtml = String(answer.text || "").trim();
        if (rawHtml.length < 1) continue;
        const safeHtml = sanitizeHtml(rawHtml).trim();
        if (safeHtml.length < 1) continue;
        byHtml.set(safeHtml, (byHtml.get(safeHtml) || 0) + 1);
      }
      const rows = [...byHtml.entries()].map(([html, responses]) => ({ html, responses })).sort((a, b) => b.responses - a.responses);
      if (typeof maxSubmissionItems === "number" && maxSubmissionItems > 0) {
        return rows.slice(0, maxSubmissionItems);
      }
      return rows;
    })();
    const totalResponses = responseRows.reduce((sum, row) => sum + row.responses, 0);
    $$renderer2.push(`<div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-sm">${escape_html(totalResponses)}
    ${escape_html(getSubmissionLabel(labels, "submission.list.responses", "Responses"))}</p> `);
    if (responseRows.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:max-h-80 ui:space-y-2 ui:overflow-y-auto ui:pr-1"><!--[-->`);
      const each_array = ensure_array_like(responseRows);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let row = each_array[index];
        $$renderer2.push(`<div class="ui:flex ui:items-start ui:justify-between ui:gap-3 ui:rounded-md ui:border ui:px-3 ui:py-2"><div class="ui:min-w-0 ui:flex-1 ui:break-words ui:text-sm">`);
        Safe_html_content($$renderer2, { content: row.html });
        $$renderer2.push(`<!----></div> <span class="ui:text-muted-foreground ui:mt-0.5 ui:shrink-0 ui:text-xs">${escape_html(row.responses)}</span></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(getSubmissionLabel(labels, "submission.list.no_responses", "No responses yet"))}</p>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Submission$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, submissions = [], labels } = $$props;
    function resolveBooleanOptionLabel(value) {
      const wanted = String(value);
      const option = (question.options || []).find((item) => {
        const optionValue = String(item.value || "").trim().toLowerCase();
        return optionValue === wanted;
      });
      if (!option) return value ? "True" : "False";
      return normalizeLabel(option.label || option.value, value ? "True" : "False");
    }
    const chartConfig = {
      responses: {
        label: getSubmissionLabel(labels, "submission.chart.responses", "Responses"),
        color: "var(--chart-1)"
      }
    };
    const chartData = (() => {
      let trueCount = 0;
      let falseCount = 0;
      let noAnswerCount = 0;
      for (const submission of submissions || []) {
        const answer = getAnswerForQuestion(submission, question);
        if (!answer || answer.type !== "TRUE_FALSE") {
          noAnswerCount += 1;
          continue;
        }
        if (answer.value) {
          trueCount += 1;
        } else {
          falseCount += 1;
        }
      }
      const rows = [];
      if (trueCount > 0) {
        rows.push({
          key: "true",
          label: resolveBooleanOptionLabel(true),
          responses: trueCount
        });
      }
      if (falseCount > 0) {
        rows.push({
          key: "false",
          label: resolveBooleanOptionLabel(false),
          responses: falseCount
        });
      }
      if (noAnswerCount > 0) {
        rows.push({
          key: "no-answer",
          label: getSubmissionLabel(labels, "submission.common.no_answer", "No answer"),
          responses: noAnswerCount
        });
      }
      return withChartColors(rows);
    })();
    if (chartData.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!---->`);
      Chart_container($$renderer2, {
        config: chartConfig,
        class: "ui:h-[280px] ui:w-full ui:flex-col ui:items-center",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          PieChart($$renderer3, {
            data: chartData,
            key: "key",
            label: "label",
            value: "responses",
            c: "color"
          });
          $$renderer3.push(`<!----> <!---->`);
          Chart_legend($$renderer3, {
            items: chartData.map((d) => ({ label: d.label, color: d.color, value: d.responses }))
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(getSubmissionLabel(labels, "submission.chart.no_data", "No responses yet"))}</p>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Labeled_value_row($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { label, value, class: className = "", valueClass = "" } = $$props;
    $$renderer2.push(`<p${attr_class(clsx(cn("ui:text-sm", className)))}><span class="ui:text-muted-foreground">${escape_html(label)}</span>   <span${attr_class(clsx(cn("ui:font-medium", valueClass)))}>${escape_html(value)}</span></p>`);
  });
}
function Submission($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { answer = null, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const recording = answer?.type === "VIDEO_RECORDING" ? answer : null;
    const playbackUrl = (() => {
      if (!recording) return "";
      const enrichedUrl = recording.fileUrl;
      return recording.playbackUrl ?? enrichedUrl ?? "";
    })();
    function formatDate(value) {
      if (!value) return "—";
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return "—";
      return date.toLocaleString();
    }
    if (!recording) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("video_recording.submission.no_video", "No video submitted."))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="ui:space-y-3">`);
      if (playbackUrl) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="ui:max-w-xl ui:overflow-hidden ui:rounded-md">`);
        Media_player($$renderer2, {
          source: { type: "upload", url: playbackUrl },
          options: {
            controls: true,
            playsinline: true,
            width: "100%",
            maxHeight: "360px"
          }
        });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("video_recording.submission.unavailable", "Video unavailable."))}</p>`);
      }
      $$renderer2.push(`<!--]--> <div class="ui:grid ui:gap-2 ui:text-sm ui:sm:grid-cols-2">`);
      Labeled_value_row($$renderer2, {
        label: label("video_recording.submission.duration", "Duration"),
        value: formatSeconds(recording.durationSeconds)
      });
      $$renderer2.push(`<!----> `);
      Labeled_value_row($$renderer2, {
        label: label("video_recording.submission.file_size", "File size"),
        value: formatFileSize(recording.size)
      });
      $$renderer2.push(`<!----> `);
      Labeled_value_row($$renderer2, {
        label: label("video_recording.submission.recorded_at", "Recorded"),
        value: formatDate(recording.recordedAt)
      });
      $$renderer2.push(`<!----> `);
      Labeled_value_row($$renderer2, {
        label: label("video_recording.submission.uploaded_at", "Uploaded"),
        value: formatDate(recording.uploadedAt)
      });
      $$renderer2.push(`<!----> `);
      Labeled_value_row($$renderer2, {
        label: label("video_recording.submission.retake_count", "Retakes"),
        value: String(recording.retakeCount ?? 0)
      });
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function getOptionNumericId(option) {
  if (option.id === void 0 || option.id === null) return null;
  const n = Number(option.id);
  return Number.isNaN(n) ? null : n;
}
function getMcqReviewRowBorderClass(isSelected, isCorrect) {
  if (isSelected && isCorrect) {
    return "ui:border-emerald-500 ui:bg-emerald-50/40 dark:ui:bg-emerald-950/30";
  }
  if (isSelected && !isCorrect) {
    return "ui:border-red-500 ui:bg-red-50/40 dark:ui:bg-red-950/30";
  }
  if (!isSelected && isCorrect) {
    return "ui:border-emerald-300 ui:bg-emerald-50/20 dark:ui:bg-emerald-950/20";
  }
  return "ui:border-muted";
}
function Review$7($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, answer = null, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const selectedOptionId = (() => {
      if (answer?.type !== "RADIO") return null;
      return answer.optionId;
    })();
    const optionsHaveImages = hasOptionImages(question.options);
    $$renderer2.push(`<div class="ui:space-y-2"><div${attr_class(clsx(optionsHaveImages ? "ui:grid ui:grid-cols-2 ui:gap-3" : "ui:space-y-2"))}><!--[-->`);
    const each_array = ensure_array_like(question.options ?? []);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let option = each_array[index];
      const optionImageUrl = getOptionImageUrl(option);
      const oid = getOptionNumericId(option);
      const isSelected = oid !== null && selectedOptionId !== null && selectedOptionId === oid;
      const isCorrect = option.isCorrect === true;
      $$renderer2.push(`<div${attr_class(clsx(cn("ui:rounded-md ui:border ui:p-2", optionsHaveImages ? "ui:space-y-2" : "ui:flex ui:items-center ui:gap-2", getMcqReviewRowBorderClass(isSelected, isCorrect))))}>`);
      Option_image($$renderer2, {
        src: optionImageUrl,
        alt: label("question.edit.image_alt"),
        variant: "take",
        hasAnyImageInOptions: optionsHaveImages
      });
      $$renderer2.push(`<!----> <div class="ui:flex ui:min-w-0 ui:flex-1 ui:items-center ui:gap-2"><span class="ui:inline-flex ui:h-4 ui:w-4 ui:shrink-0 ui:rounded-full ui:border ui:border-muted-foreground" aria-hidden="true"${attr_style(`box-shadow: inset 0 0 0 3px ${isSelected ? "var(--foreground)" : "transparent"}`)}></span> <div class="ui:text-sm ui:font-normal">${escape_html(option.label || option.value || [label("common.option_prefix"), String(index + 1)].filter(Boolean).join(" "))} `);
      Option_correctness_badges($$renderer2, {
        labels,
        showCorrect: isCorrect,
        showIncorrect: isSelected && !isCorrect
      });
      $$renderer2.push(`<!----></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function Review$6($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, answer = null, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const selectedIds = (() => {
      if (answer?.type !== "CHECKBOX") return [];
      return answer.optionIds;
    })();
    const optionsHaveImages = hasOptionImages(question.options);
    $$renderer2.push(`<div class="ui:space-y-2"><div${attr_class(clsx(optionsHaveImages ? "ui:grid ui:grid-cols-2 ui:gap-3" : "ui:space-y-2"))}><!--[-->`);
    const each_array = ensure_array_like(question.options ?? []);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let option = each_array[index];
      const optionId = `checkbox-review-${question.id ?? "q"}-${index}`;
      const optionImageUrl = getOptionImageUrl(option);
      const oid = getOptionNumericId(option);
      const isSelected = oid !== null && selectedIds.includes(oid);
      const isCorrect = option.isCorrect === true;
      $$renderer2.push(`<div${attr_class(clsx(cn("ui:rounded-md ui:border ui:p-2", optionsHaveImages ? "ui:space-y-2" : "ui:flex ui:items-center ui:gap-2", getMcqReviewRowBorderClass(isSelected, isCorrect))))}>`);
      Option_image($$renderer2, {
        src: optionImageUrl,
        alt: label("question.edit.image_alt"),
        variant: "take",
        hasAnyImageInOptions: optionsHaveImages
      });
      $$renderer2.push(`<!----> <div class="ui:flex ui:items-center ui:gap-2">`);
      Checkbox($$renderer2, { id: optionId, checked: isSelected, disabled: true });
      $$renderer2.push(`<!----> `);
      Label($$renderer2, {
        class: "ui:cursor-default ui:font-normal ui:w-full",
        for: optionId,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(option.label || option.value || [label("common.option_prefix"), String(index + 1)].filter(Boolean).join(" "))} `);
          Option_correctness_badges($$renderer3, {
            labels,
            showCorrect: isCorrect,
            showIncorrect: isSelected && !isCorrect
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function Review$5($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, answer = null, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const studentVal = (() => {
      if (answer?.type !== "NUMERIC" || typeof answer.value !== "number" || !Number.isFinite(answer.value)) {
        return null;
      }
      return answer.value;
    })();
    const correct = question.settings?.correctValue;
    const tolerance = question.settings?.tolerance ?? 0;
    const inRange = (() => {
      if (studentVal === null || correct === void 0) return null;
      return Math.abs(studentVal - correct) <= tolerance;
    })();
    $$renderer2.push(`<div class="ui:space-y-2">`);
    Labeled_value_row($$renderer2, {
      label: label("numeric.review.your_answer_label"),
      value: studentVal !== null ? String(studentVal) : label("common.not_set")
    });
    $$renderer2.push(`<!----> `);
    if (studentVal !== null && correct !== void 0 && inRange !== null) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p${attr_class(clsx(cn(inRange ? "ui:text-xs ui:text-emerald-600" : "ui:text-xs ui:text-red-600")))}>${escape_html(inRange ? label("numeric.review.in_range") : label("numeric.review.out_of_range"))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    Numeric_expected_fields($$renderer2, { question, labels });
    $$renderer2.push(`<!----></div>`);
  });
}
function Review$4($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, answer = null, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    function stripHtml(raw) {
      return raw.replace(/<[^>]*>/g, "").trim();
    }
    function normalizeToken2(s) {
      return s.trim().toLowerCase();
    }
    const studentText = (() => {
      if (answer?.type !== "SHORT_ANSWER") return "";
      return stripHtml(String(answer.text ?? ""));
    })();
    const acceptedList = (() => {
      const raw = question.settings?.acceptedAnswers;
      if (typeof raw !== "string") return [];
      return raw.split(",").map((token) => normalizeToken2(token)).filter(Boolean);
    })();
    $$renderer2.push(`<div class="ui:space-y-2">`);
    Labeled_value_row($$renderer2, {
      label: label("short_answer.review.your_answer_label"),
      value: studentText || label("common.not_set")
    });
    $$renderer2.push(`<!----> `);
    if (acceptedList.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("short_answer.review.accepted_label"))}: ${escape_html(acceptedList.join(", "))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("short_answer.preview.helper"))}</p>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Review$3($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, answer = null, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const studentJoined = (() => {
      if (answer?.type !== "FILL_BLANK") return "";
      return answer.values.map((token) => String(token).trim()).filter(Boolean).join(", ");
    })();
    const acceptedRaw = String(question.settings?.acceptedAnswers ?? "");
    $$renderer2.push(`<div class="ui:space-y-2">`);
    Labeled_value_row($$renderer2, {
      label: label("fill_blank.review.your_answer_label"),
      value: studentJoined || label("common.not_set")
    });
    $$renderer2.push(`<!----> <p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("fill_blank.preview.accepted_answers_label"))}: ${escape_html(acceptedRaw || label("common.not_set"))}</p></div>`);
  });
}
function Review$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, answer = null, labels } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    const template = String(question.settings?.template ?? "");
    const correctAnswers = (() => {
      const raw = question.settings?.correctAnswers;
      return Array.isArray(raw) ? raw.map((s) => String(s ?? "")) : [];
    })();
    const blankCount = countWordBankBlanks(template);
    const segments = parseWordBankTemplate(template);
    const studentFilled = answer?.type === "WORD_BANK" ? answer.filledBlanks : [];
    function studentAtBlank(index) {
      const v = studentFilled[index];
      return v != null && String(v).trim() ? String(v).trim() : label("common.not_set");
    }
    function correctAtBlank(index) {
      const v = correctAnswers[index];
      return v != null && String(v).trim() ? String(v).trim() : label("common.not_set");
    }
    $$renderer2.push(`<div class="ui:space-y-3">`);
    if (blankCount === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="ui:text-muted-foreground ui:text-sm">${escape_html(label("common.not_set"))}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("word_bank.review.your_answer_label"))}</p> <div class="ui:bg-muted/30 ui:rounded-lg ui:border ui:p-4 ui:font-mono ui:text-sm ui:leading-relaxed"><!--[-->`);
      const each_array = ensure_array_like(segments);
      for (let segmentIndex = 0, $$length = each_array.length; segmentIndex < $$length; segmentIndex++) {
        let segment = each_array[segmentIndex];
        if (segment.type === "text") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span>${escape_html(segment.value)}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<span class="ui:inline-flex ui:mx-0.5 ui:min-h-8 ui:min-w-[5rem] ui:items-center ui:justify-center ui:rounded ui:border-2 ui:border-solid ui:border-muted-foreground/40 ui:px-2 ui:py-0.5">${escape_html(studentAtBlank(segment.index))}</span>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></div> <div class="ui:space-y-2"><p class="ui:text-muted-foreground ui:text-xs">${escape_html(label("word_bank.review.correct_label"))}</p> <div class="ui:bg-muted/30 ui:rounded-lg ui:border ui:p-4 ui:font-mono ui:text-sm ui:leading-relaxed"><!--[-->`);
      const each_array_1 = ensure_array_like(segments);
      for (let segmentIndex = 0, $$length = each_array_1.length; segmentIndex < $$length; segmentIndex++) {
        let segment = each_array_1[segmentIndex];
        if (segment.type === "text") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span>${escape_html(segment.value)}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<span class="ui:inline-flex ui:mx-0.5 ui:min-h-8 ui:min-w-[5rem] ui:items-center ui:justify-center ui:rounded ui:border-2 ui:border-solid ui:border-primary ui:px-2 ui:py-0.5">${escape_html(correctAtBlank(segment.index))}</span>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></div> <div class="ui:space-y-1"><!--[-->`);
      const each_array_2 = ensure_array_like(Array.from({ length: blankCount }, (_, i) => i));
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let blankIndex = each_array_2[$$index_2];
        Labeled_value_row($$renderer2, {
          label: `${label("word_bank.edit.blank_label")} ${blankIndex + 1}`,
          value: `${studentAtBlank(blankIndex)} → ${correctAtBlank(blankIndex)}`
        });
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Review$1($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  Ordering_display($$renderer, spread_props([props]));
}
function True_false_review_toggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { labels, correctIsTrue, studentValue, isCorrect } = $$props;
    const label = (key, fallback = "") => getExerciseQuestionLabel(labels, key, fallback);
    $$renderer2.push(`<div class="ui:space-y-2"><!---->`);
    Toggle_group($$renderer2, {
      type: "single",
      value: studentValue,
      disabled: true,
      variant: "outline",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Toggle_group_item($$renderer3, {
          value: "true",
          class: correctIsTrue ? "ui:border-emerald-500 ui:bg-emerald-50/40 dark:ui:bg-emerald-950/30" : "",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(label("true_false.true_label"))} `);
            Option_correctness_badges($$renderer4, {
              labels,
              showCorrect: correctIsTrue,
              showIncorrect: studentValue === "true" && isCorrect === false
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Toggle_group_item($$renderer3, {
          value: "false",
          class: !correctIsTrue ? "ui:border-emerald-500 ui:bg-emerald-50/40 dark:ui:bg-emerald-950/30" : "",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(label("true_false.false_label"))} `);
            Option_correctness_badges($$renderer4, {
              labels,
              showCorrect: !correctIsTrue,
              showIncorrect: studentValue === "false" && isCorrect === false
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Review($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, answer = null, labels } = $$props;
    const correctIsTrue = getTrueFalseCorrectIsTrue(question.settings);
    const studentValue = (() => {
      if (answer?.type !== "TRUE_FALSE") return "";
      return answer.value ? "true" : "false";
    })();
    const isCorrect = (() => {
      if (answer?.type !== "TRUE_FALSE") return null;
      return answer.value === correctIsTrue;
    })();
    True_false_review_toggle($$renderer2, { labels, correctIsTrue, studentValue, isCorrect });
  });
}
const EXERCISE_QUESTION_RENDERER_CONTRACT = {
  [QUESTION_TYPE_KEY.RADIO]: {
    edit: Edit$7,
    take: Take$7,
    preview: Preview$7,
    submission: Submission$7,
    review: Review$7
  },
  [QUESTION_TYPE_KEY.CHECKBOX]: {
    edit: Edit$e,
    take: Take$e,
    preview: Preview$e,
    submission: Submission$e,
    review: Review$6
  },
  [QUESTION_TYPE_KEY.TEXTAREA]: {
    edit: Edit$2,
    take: Take$2,
    preview: Preview$2,
    submission: Submission$2
  },
  [QUESTION_TYPE_KEY.TRUE_FALSE]: {
    edit: Edit$1,
    take: Take$1,
    preview: Preview$1,
    submission: Submission$1,
    review: Review
  },
  [QUESTION_TYPE_KEY.SHORT_ANSWER]: {
    edit: Edit$4,
    take: Take$4,
    preview: Preview$4,
    submission: Submission$4,
    review: Review$4
  },
  [QUESTION_TYPE_KEY.NUMERIC]: {
    edit: Edit$9,
    take: Take$9,
    preview: Preview$9,
    submission: Submission$9,
    review: Review$5
  },
  [QUESTION_TYPE_KEY.FILL_BLANK]: {
    edit: Edit$c,
    take: Take$c,
    preview: Preview$c,
    submission: Submission$c,
    review: Review$3
  },
  [QUESTION_TYPE_KEY.FILE_UPLOAD]: {
    edit: Edit$d,
    take: Take$d,
    preview: Preview$d,
    submission: Submission$d
  },
  [QUESTION_TYPE_KEY.MATCHING]: {
    edit: Edit$a,
    take: Take$a,
    preview: Preview$a,
    submission: Submission$a
  },
  [QUESTION_TYPE_KEY.ORDERING]: {
    edit: Edit$8,
    take: Take$8,
    preview: Preview$8,
    submission: Submission$8,
    review: Review$1
  },
  [QUESTION_TYPE_KEY.HOTSPOT]: {
    edit: Edit$b,
    take: Take$b,
    preview: Preview$b,
    submission: Submission$b
  },
  [QUESTION_TYPE_KEY.LINK]: {
    edit: Edit$6,
    take: Take$6,
    preview: Preview$6,
    submission: Submission$6
  },
  [QUESTION_TYPE_KEY.WORD_BANK]: {
    edit: Edit$5,
    take: Take$5,
    preview: Preview$5,
    submission: Submission$5,
    review: Review$2
  },
  [QUESTION_TYPE_KEY.STAR]: {
    edit: Edit$3,
    take: Take$3,
    preview: Preview$3,
    submission: Submission$3
  },
  [QUESTION_TYPE_KEY.VIDEO_RECORDING]: {
    edit: Edit,
    take: Take,
    preview: Preview,
    submission: Submission,
    review: Submission
  }
};
const FALLBACK_RENDERER = {
  edit: Edit$4,
  take: Take$4,
  preview: Preview$4,
  submission: Submission$4
};
function getExerciseQuestionRenderer(questionTypeKey, mode) {
  return getRendererForMode(EXERCISE_QUESTION_RENDERER_CONTRACT, questionTypeKey, mode, FALLBACK_RENDERER);
}
function Question_renderer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      contract,
      onAnswerChange = () => {
      },
      onQuestionChange = () => {
      },
      showContainer = true,
      questionTypeSelect,
      questionNumber,
      questionNumberActive = true
    } = $$props;
    const Renderer = getExerciseQuestionRenderer(contract.question.questionType, contract.mode);
    const label = (key, fallback = "") => getExerciseQuestionLabel(contract.labels, key, fallback);
    let isImageUploading = false;
    let imageUploadError = "";
    let isDescriptionEditorVisible = false;
    let isYoutubeDialogOpen = false;
    const questionDescription = String(contract.question.settings?.description ?? "");
    const hasDescription = isDescriptionEditorVisible || questionDescription.trim().length > 0;
    const questionImageUrls = (() => {
      const settings = contract.question.settings ?? {};
      const explicitImageUrls = Array.isArray(settings.imageUrls) ? settings.imageUrls.filter((value) => typeof value === "string" && value.trim().length > 0) : [];
      if (explicitImageUrls.length > 0) return explicitImageUrls;
      const legacyImageUrl = settings.imageUrl;
      if (typeof legacyImageUrl === "string" && legacyImageUrl.trim().length > 0) return [legacyImageUrl];
      return [];
    })();
    const questionVideoUrls = (() => {
      const settings = contract.question.settings ?? {};
      const explicitVideoUrls = Array.isArray(settings.videoUrls) ? settings.videoUrls.filter((value) => typeof value === "string" && value.trim().length > 0) : [];
      if (explicitVideoUrls.length > 0) return explicitVideoUrls;
      const legacyVideoUrl = settings.videoUrl;
      if (typeof legacyVideoUrl === "string" && legacyVideoUrl.trim().length > 0) return [legacyVideoUrl];
      return [];
    })();
    const questionVideos = (() => questionVideoUrls.map((videoUrl, index) => {
      const sourceUrl = videoUrl.trim();
      return sourceUrl.length > 0 ? { key: `${sourceUrl}-${index}`, sourceIndex: index, sourceUrl } : null;
    }).filter((entry) => Boolean(entry && isYoutubeUrl(entry.sourceUrl))))();
    function patchQuestion(partial) {
      onQuestionChange({ ...contract.question, ...partial });
    }
    function patchSettings(next) {
      patchQuestion({ settings: { ...contract.question.settings ?? {}, ...next } });
    }
    function setQuestionDescription(nextDescription) {
      const nextSettings = { ...contract.question.settings ?? {} };
      if (nextDescription === null) {
        delete nextSettings.description;
      } else {
        nextSettings.description = nextDescription;
      }
      patchQuestion({ settings: nextSettings });
    }
    function setQuestionImageUrls(nextUrls) {
      const deduped = Array.from(new Set(nextUrls.map((value) => value.trim()).filter(Boolean)));
      const nextSettings = { ...contract.question.settings ?? {}, imageUrls: deduped };
      delete nextSettings.imageUrl;
      patchQuestion({ settings: nextSettings });
    }
    function setQuestionVideoUrls(nextUrls) {
      const deduped = Array.from(new Set(nextUrls.map((value) => value.trim()).filter(Boolean)));
      const nextSettings = { ...contract.question.settings ?? {}, videoUrls: deduped };
      delete nextSettings.videoUrl;
      patchQuestion({ settings: nextSettings });
    }
    function openImagePicker() {
      if (contract.disabled || isImageUploading) return;
    }
    function removeImage(imageIndex) {
      setQuestionImageUrls(questionImageUrls.filter((_, index) => index !== imageIndex));
      imageUploadError = "";
    }
    function onDescriptionAction() {
      if (contract.disabled) return;
      if (hasDescription) {
        isDescriptionEditorVisible = false;
        setQuestionDescription(null);
        return;
      }
      isDescriptionEditorVisible = true;
      setQuestionDescription(questionDescription);
    }
    function openYoutubeDialog() {
      if (contract.disabled) return;
      isYoutubeDialogOpen = true;
    }
    async function addYoutubeVideos(links) {
      if (!links.length) return;
      setQuestionVideoUrls([...questionVideoUrls, ...links]);
      isYoutubeDialogOpen = false;
    }
    function removeVideo(videoIndex) {
      setQuestionVideoUrls(questionVideoUrls.filter((_, index) => index !== videoIndex));
    }
    function content($$renderer3) {
      if (contract.mode === "edit") {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="ui:space-y-3"><div class="ui:flex ui:min-w-0 ui:flex-col ui:items-stretch ui:gap-2 ui:sm:flex-row ui:sm:items-end"><div class="ui:min-w-0 ui:flex-1 ui:space-y-1"><p class="ui:text-sm ui:font-medium">${escape_html(label("question.edit.title_label"))}</p> `);
        Input($$renderer3, {
          class: "ui:w-full",
          value: contract.question.title,
          placeholder: label("question.edit.title_placeholder"),
          disabled: contract.disabled,
          onchange: (event) => patchQuestion({ title: event.currentTarget.value })
        });
        $$renderer3.push(`<!----></div> <!---->`);
        Root($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            {
              let child = function($$renderer5, { props }) {
                Icon_button($$renderer5, spread_props([
                  props,
                  {
                    type: "button",
                    disabled: contract.disabled,
                    children: ($$renderer6) => {
                      Plus($$renderer6, { class: "ui:size-4" });
                      $$renderer6.push(`<!----> <span class="ui:sr-only">${escape_html(label("question.edit.media_menu_sr"))}</span>`);
                    },
                    $$slots: { default: true }
                  }
                ]));
              };
              Dropdown_menu_trigger($$renderer4, { disabled: contract.disabled, child, $$slots: { child: true } });
            }
            $$renderer4.push(`<!----> <!---->`);
            Dropdown_menu_content($$renderer4, {
              align: "end",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Dropdown_menu_item($$renderer5, {
                  disabled: contract.disabled,
                  onclick: onDescriptionAction,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(hasDescription ? label("question.edit.remove_description") : label("question.edit.add_description"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Dropdown_menu_item($$renderer5, {
                  disabled: contract.disabled || isImageUploading,
                  onclick: openImagePicker,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(label("question.edit.add_image"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Dropdown_menu_item($$renderer5, {
                  disabled: contract.disabled,
                  onclick: openYoutubeDialog,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(label("question.edit.add_video"))}`);
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
        $$renderer3.push(`<!----> `);
        if (questionTypeSelect) {
          $$renderer3.push("<!--[-->");
          questionTypeSelect($$renderer3);
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> `);
        if (hasDescription) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="ui:space-y-1"><p class="ui:text-sm ui:font-medium">${escape_html(label("question.edit.description_label"))}</p> `);
          Textarea($$renderer3, {
            rows: 2,
            value: questionDescription,
            placeholder: label("question.edit.description_placeholder"),
            disabled: contract.disabled,
            onchange: (event) => patchSettings({ description: event.currentTarget.value })
          });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> <input type="file" accept="image/*" multiple class="ui:hidden"${attr("disabled", contract.disabled || isImageUploading, true)}/> `);
        if (imageUploadError || questionImageUrls.length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="ui:space-y-2">`);
          if (imageUploadError) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="ui:text-destructive ui:text-xs">${escape_html(imageUploadError)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (questionImageUrls.length > 0) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="ui:flex ui:flex-wrap ui:gap-3"><!--[-->`);
            const each_array = ensure_array_like(questionImageUrls);
            for (let imageIndex = 0, $$length = each_array.length; imageIndex < $$length; imageIndex++) {
              let imageUrl = each_array[imageIndex];
              $$renderer3.push(`<div class="ui:group ui:relative ui:h-40 ui:w-40 ui:rounded-md ui:border"><div class="ui:absolute ui:inset-0 ui:overflow-hidden ui:rounded-md"><img${attr("src", imageUrl)}${attr("alt", label("question.edit.image_alt"))} class="ui:h-full ui:w-full ui:object-cover"/></div> `);
              Icon_button($$renderer3, {
                disabled: contract.disabled,
                tooltipClass: "ui:absolute ui:right-[-12px] ui:top-[-12px] ui:z-10",
                class: "ui:opacity-0 ui:transition-opacity ui:group-hover:opacity-100",
                tooltip: label("question.edit.remove_image_tooltip"),
                onclick: () => removeImage(imageIndex),
                size: "icon-sm",
                children: ($$renderer4) => {
                  X($$renderer4, {});
                  $$renderer4.push(`<!----> <span class="ui:sr-only">${escape_html(label("question.edit.remove_image_sr"))}</span>`);
                },
                $$slots: { default: true }
              });
              $$renderer3.push(`<!----></div>`);
            }
            $$renderer3.push(`<!--]--></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (questionVideos.length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="ui:space-y-3"><!--[-->`);
          const each_array_1 = ensure_array_like(questionVideos);
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let video = each_array_1[$$index_1];
            $$renderer3.push(`<div class="ui:group ui:relative ui:max-w-xl ui:rounded-md ui:border">`);
            Media_player($$renderer3, {
              source: { type: "youtube", url: video.sourceUrl },
              options: {
                maxHeight: "320px",
                width: "100%",
                controls: true,
                playsinline: true
              }
            });
            $$renderer3.push(`<!----> `);
            Icon_button($$renderer3, {
              disabled: contract.disabled,
              tooltipClass: "ui:absolute ui:right-[-12px] ui:top-[-12px] ui:z-10",
              class: "ui:opacity-0 ui:transition-opacity ui:group-hover:opacity-100",
              tooltip: label("question.edit.remove_video_tooltip"),
              onclick: () => removeVideo(video.sourceIndex),
              size: "icon-sm",
              children: ($$renderer4) => {
                X($$renderer4, {});
                $$renderer4.push(`<!----> <span class="ui:sr-only">${escape_html(label("question.edit.remove_video_sr"))}</span>`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----></div>`);
          }
          $$renderer3.push(`<!--]--></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> <!---->`);
        Root$1($$renderer3, {
          get open() {
            return isYoutubeDialogOpen;
          },
          set open($$value) {
            isYoutubeDialogOpen = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Dialog_content($$renderer4, {
              class: "ui:max-w-xl",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Dialog_header($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->`);
                    Dialog_title($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(label("question.edit.video_modal_title"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Youtube_link_form($$renderer5, {
                  inputLabel: label("question.edit.video_link_label"),
                  inputPlaceholder: label("question.edit.video_link_placeholder"),
                  addButtonLabel: label("question.edit.video_add_button"),
                  invalidYoutubeMessage: label("question.edit.video_invalid_link"),
                  disabled: contract.disabled,
                  onSubmit: addYoutubeVideos
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
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (contract.mode !== "edit") {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="ui:mb-4 ui:space-y-3">`);
        if (questionNumber !== void 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="ui:flex ui:items-center ui:gap-2">`);
          Number_badge($$renderer3, { number: questionNumber, active: questionNumberActive });
          $$renderer3.push(`<!----> `);
          if (contract.question.title.trim().length > 0) {
            $$renderer3.push("<!--[-->");
            Question_title($$renderer3, {
              title: contract.question.title,
              class: "ui:min-w-0 ui:flex-1"
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (contract.question.title.trim().length > 0) {
            $$renderer3.push("<!--[-->");
            Question_title($$renderer3, { title: contract.question.title });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--> `);
        if (questionDescription.trim().length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="ui:text-sm ui:text-muted-foreground">${escape_html(questionDescription)}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (questionImageUrls.length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="ui:flex ui:flex-wrap ui:gap-3"><!--[-->`);
          const each_array_2 = ensure_array_like(questionImageUrls);
          for (let imageIndex = 0, $$length = each_array_2.length; imageIndex < $$length; imageIndex++) {
            let imageUrl = each_array_2[imageIndex];
            $$renderer3.push(`<div class="ui:h-40 ui:w-40 ui:overflow-hidden ui:rounded-md ui:border"><img${attr("src", imageUrl)}${attr("alt", label("question.edit.image_alt"))} class="ui:h-full ui:w-full ui:object-cover"/></div>`);
          }
          $$renderer3.push(`<!--]--></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (questionVideos.length > 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="ui:space-y-3"><!--[-->`);
          const each_array_3 = ensure_array_like(questionVideos);
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let video = each_array_3[$$index_3];
            $$renderer3.push(`<div class="ui:max-w-xl ui:overflow-hidden ui:rounded-md ui:border">`);
            Media_player($$renderer3, {
              source: { type: "youtube", url: video.sourceUrl },
              options: {
                maxHeight: "320px",
                width: "100%",
                controls: true,
                playsinline: true
              }
            });
            $$renderer3.push(`<!----></div>`);
          }
          $$renderer3.push(`<!--]--></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <!---->`);
      Renderer($$renderer3, {
        question: contract.question,
        answer: contract.answer,
        submissions: contract.submissions,
        maxSubmissionItems: contract.maxSubmissionItems,
        disabled: contract.disabled,
        labels: contract.labels,
        onImageUpload: contract.onImageUpload,
        onFileUpload: contract.onFileUpload,
        onVideoRecordingUpload: contract.onVideoRecordingUpload,
        onAnswerChange,
        onQuestionChange
      });
      $$renderer3.push(`<!---->`);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (showContainer) {
        $$renderer3.push("<!--[-->");
        Question_surface($$renderer3, {
          children: ($$renderer4) => {
            content($$renderer4);
          }
        });
      } else {
        $$renderer3.push("<!--[!-->");
        content($$renderer3);
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function Question_list($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      contract,
      onAnswerChange = () => {
      },
      onQuestionChange = () => {
      },
      itemClass = "",
      showContainer = true
    } = $$props;
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(contract.questions);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let question = each_array[index];
      const questionKey = getExerciseQuestionContractKey(question, index);
      $$renderer2.push(`<div${attr_class(clsx(itemClass))}>`);
      Question_renderer($$renderer2, {
        contract: {
          mode: contract.mode,
          question,
          answer: contract.answersByKey?.[questionKey],
          submissions: contract.submissions,
          maxSubmissionItems: contract.maxSubmissionItems,
          disabled: contract.disabled,
          labels: contract.labels,
          onImageUpload: contract.onImageUpload,
          onFileUpload: contract.onFileUpload,
          onVideoRecordingUpload: contract.onVideoRecordingUpload
        },
        onAnswerChange: (answer) => onAnswerChange(question, answer),
        onQuestionChange: (updatedQuestion) => onQuestionChange(question, updatedQuestion),
        questionNumber: index + 1,
        questionNumberActive: false,
        showContainer
      });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function getExerciseQuestionLabels() {
  return {
    "common.option_prefix": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.common.option_prefix"
    ),
    "common.remove": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.common.remove"),
    "common.add_option": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.common.add_option"),
    "common.correct_badge": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.common.correct_badge"
    ),
    "common.incorrect_badge": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.common.incorrect_badge"
    ),
    "common.not_set": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.common.not_set"),
    "navigation.previous": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.navigation.previous"),
    "navigation.next": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.navigation.next"),
    "navigation.finish": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.navigation.finish"),
    "question.edit.title_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.title_label"
    ),
    "question.edit.title_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.title_placeholder"
    ),
    "question.edit.description_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.description_label"
    ),
    "question.edit.description_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.description_placeholder"
    ),
    "question.edit.add_description": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.add_description"
    ),
    "question.edit.remove_description": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.remove_description"
    ),
    "question.edit.media_menu_sr": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.media_menu_sr"
    ),
    "question.edit.add_image": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.add_image"
    ),
    "question.edit.add_video": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.add_video"
    ),
    "question.edit.remove_image_tooltip": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.remove_image_tooltip"
    ),
    "question.edit.remove_image_sr": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.remove_image_sr"
    ),
    "question.edit.remove_video_tooltip": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.remove_video_tooltip"
    ),
    "question.edit.remove_video_sr": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.remove_video_sr"
    ),
    "question.edit.image_alt": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.image_alt"
    ),
    "question.edit.video_modal_title": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.video_modal_title"
    ),
    "question.edit.video_link_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.video_link_label"
    ),
    "question.edit.video_link_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.video_link_placeholder"
    ),
    "question.edit.video_add_button": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.video_add_button"
    ),
    "question.edit.video_invalid_link": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.video_invalid_link"
    ),
    "question.edit.upload_error_only_images": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.upload_error_only_images"
    ),
    "question.edit.upload_error_skipped": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.upload_error_skipped"
    ),
    "question.edit.upload_error_failed": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.question.edit.upload_error_failed"
    ),
    "radio.edit.helper": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.radio.edit.helper"),
    "radio.edit.correct_selected_tooltip": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.radio.edit.correct_selected_tooltip"
    ),
    "radio.edit.mark_correct_tooltip": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.radio.edit.mark_correct_tooltip"
    ),
    "radio.edit.mark_correct_sr": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.radio.edit.mark_correct_sr"
    ),
    "checkbox.edit.helper": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.checkbox.edit.helper"
    ),
    "checkbox.edit.correct_selected_tooltip": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.checkbox.edit.correct_selected_tooltip"
    ),
    "checkbox.edit.toggle_correct_tooltip": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.checkbox.edit.toggle_correct_tooltip"
    ),
    "checkbox.edit.toggle_correct_sr": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.checkbox.edit.toggle_correct_sr"
    ),
    "true_false.true_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.true_false.true_label"
    ),
    "true_false.false_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.true_false.false_label"
    ),
    "true_false.edit.correct_answer_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.true_false.edit.correct_answer_label"
    ),
    "true_false.preview.correct_value_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.true_false.preview.correct_value_label"
    ),
    "short_answer.edit.instructions_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.short_answer.edit.instructions_placeholder"
    ),
    "short_answer.take.placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.short_answer.take.placeholder"
    ),
    "short_answer.preview.helper": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.short_answer.preview.helper"
    ),
    "short_answer.review.your_answer_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.short_answer.review.your_answer_label"
    ),
    "short_answer.review.accepted_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.short_answer.review.accepted_label"
    ),
    "numeric.edit.correct_value_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.edit.correct_value_label"
    ),
    "numeric.edit.correct_value_info": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.edit.correct_value_info"
    ),
    "numeric.edit.tolerance_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.edit.tolerance_label"
    ),
    "numeric.edit.tolerance_info": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.edit.tolerance_info"
    ),
    "numeric.edit.correct_value_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.edit.correct_value_placeholder"
    ),
    "numeric.edit.tolerance_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.edit.tolerance_placeholder"
    ),
    "numeric.take.placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.take.placeholder"
    ),
    "numeric.preview.correct_value_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.preview.correct_value_label"
    ),
    "numeric.preview.tolerance_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.preview.tolerance_label"
    ),
    "numeric.review.your_answer_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.review.your_answer_label"
    ),
    "numeric.review.in_range": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.review.in_range"
    ),
    "numeric.review.out_of_range": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.numeric.review.out_of_range"
    ),
    "star.edit.correct_value_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.star.edit.correct_value_label"
    ),
    "star.edit.correct_value_info": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.star.edit.correct_value_info"
    ),
    "star.edit.max_stars_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.star.edit.max_stars_label"
    ),
    "star.edit.max_stars_info": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.star.edit.max_stars_info"
    ),
    "star.edit.correct_value_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.star.edit.correct_value_placeholder"
    ),
    "star.edit.max_stars_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.star.edit.max_stars_placeholder"
    ),
    "star.take.helper": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.star.take.helper"),
    "star.take.star_sr": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.star.take.star_sr"),
    "star.preview.correct_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.star.preview.correct_label"
    ),
    "fill_blank.edit.accepted_answers_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.fill_blank.edit.accepted_answers_placeholder"
    ),
    "fill_blank.take.placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.fill_blank.take.placeholder"
    ),
    "fill_blank.preview.accepted_answers_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.fill_blank.preview.accepted_answers_label"
    ),
    "fill_blank.review.your_answer_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.fill_blank.review.your_answer_label"
    ),
    "word_bank.edit.template_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.edit.template_label"
    ),
    "word_bank.edit.template_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.edit.template_placeholder"
    ),
    "word_bank.edit.template_helper": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.edit.template_helper"
    ),
    "word_bank.edit.no_blanks_warning": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.edit.no_blanks_warning"
    ),
    "word_bank.edit.correct_answers_heading": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.edit.correct_answers_heading"
    ),
    "word_bank.edit.blank_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.edit.blank_label"
    ),
    "word_bank.edit.correct_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.edit.correct_placeholder"
    ),
    "word_bank.edit.distractors_heading": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.edit.distractors_heading"
    ),
    "word_bank.edit.distractor_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.edit.distractor_placeholder"
    ),
    "word_bank.edit.add_distractor": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.edit.add_distractor"
    ),
    "word_bank.take.helper": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.take.helper"
    ),
    "word_bank.take.bank_heading": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.take.bank_heading"
    ),
    "word_bank.take.clear_blank_sr": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.take.clear_blank_sr"
    ),
    "word_bank.preview.filled_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.preview.filled_label"
    ),
    "word_bank.review.your_answer_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.review.your_answer_label"
    ),
    "word_bank.review.correct_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.word_bank.review.correct_label"
    ),
    "file_upload.edit.accepted_types_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.file_upload.edit.accepted_types_placeholder"
    ),
    "file_upload.edit.max_size_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.file_upload.edit.max_size_placeholder"
    ),
    "file_upload.take.selected_file_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.file_upload.take.selected_file_label"
    ),
    "file_upload.take.upload_button": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.file_upload.take.upload_button"
    ),
    "file_upload.take.upload_progress": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.file_upload.take.upload_progress"
    ),
    "file_upload.take.upload_error": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.file_upload.take.upload_error"
    ),
    "file_upload.take.view": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.file_upload.take.view"
    ),
    "file_upload.take.download": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.file_upload.take.download"
    ),
    "file_upload.preview.accepted_types_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.file_upload.preview.accepted_types_label"
    ),
    "file_upload.preview.max_size_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.file_upload.preview.max_size_label"
    ),
    "video_recording.edit.max_duration_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.edit.max_duration_label"
    ),
    "video_recording.edit.max_duration_helper": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.edit.max_duration_helper"
    ),
    "video_recording.edit.max_duration_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.edit.max_duration_placeholder"
    ),
    "video_recording.edit.manual_grading": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.edit.manual_grading"
    ),
    "video_recording.take.unsupported": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.unsupported"
    ),
    "video_recording.take.permission_prompt": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.permission_prompt"
    ),
    "video_recording.take.permission_denied": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.permission_denied"
    ),
    "video_recording.take.start_camera": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.start_camera"
    ),
    "video_recording.take.camera_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.camera_label"
    ),
    "video_recording.take.camera_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.camera_placeholder"
    ),
    "video_recording.take.play_preview": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.play_preview"
    ),
    "video_recording.take.pause_preview": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.pause_preview"
    ),
    "video_recording.take.start_recording": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.start_recording"
    ),
    "video_recording.take.stop_recording": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.stop_recording"
    ),
    "video_recording.take.elapsed": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.elapsed"
    ),
    "video_recording.take.remaining": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.remaining"
    ),
    "video_recording.take.max_duration": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.max_duration"
    ),
    "video_recording.take.too_short": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.too_short"
    ),
    "video_recording.take.use_recording": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.use_recording"
    ),
    "video_recording.take.retake": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.retake"
    ),
    "video_recording.take.delete": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.delete"
    ),
    "video_recording.take.retry_upload": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.retry_upload"
    ),
    "video_recording.take.uploading": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.uploading"
    ),
    "video_recording.take.uploaded": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.uploaded"
    ),
    "video_recording.take.upload_failed": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.upload_failed"
    ),
    "video_recording.take.replaces_previous": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.take.replaces_previous"
    ),
    "video_recording.preview.max_duration_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.preview.max_duration_label"
    ),
    "video_recording.preview.manual_grading": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.preview.manual_grading"
    ),
    "video_recording.submission.no_video": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.submission.no_video"
    ),
    "video_recording.submission.unavailable": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.submission.unavailable"
    ),
    "video_recording.submission.duration": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.submission.duration"
    ),
    "video_recording.submission.file_size": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.submission.file_size"
    ),
    "video_recording.submission.recorded_at": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.submission.recorded_at"
    ),
    "video_recording.submission.uploaded_at": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.submission.uploaded_at"
    ),
    "video_recording.submission.retake_count": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.video_recording.submission.retake_count"
    ),
    "link.edit.instructions_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.link.edit.instructions_placeholder"
    ),
    "link.edit.helper": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.link.edit.helper"),
    "link.take.helper": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.link.take.helper"),
    "link.take.placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.link.take.placeholder"
    ),
    "link.take.remove_tooltip": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.link.take.remove_tooltip"
    ),
    "link.take.remove_sr": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.link.take.remove_sr"),
    "link.take.invalid_url_error": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.link.take.invalid_url_error"
    ),
    "link.take.add_button": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.link.take.add_button"
    ),
    "link.preview.empty": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.link.preview.empty"),
    "link.preview.item_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.link.preview.item_label"
    ),
    "matching.edit.helper": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.matching.edit.helper"
    ),
    "matching.take.placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.matching.take.placeholder"
    ),
    "matching.preview.helper": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.matching.preview.helper"
    ),
    "ordering.fallback_step_prefix": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.ordering.fallback_step_prefix"
    ),
    "ordering.edit.helper": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.ordering.edit.helper"
    ),
    "ordering.edit.add_step": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.ordering.edit.add_step"
    ),
    "ordering.edit.empty": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.ordering.edit.empty"),
    "ordering.edit.step_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.ordering.edit.step_placeholder"
    ),
    "ordering.edit.remove_step_tooltip": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.ordering.edit.remove_step_tooltip"
    ),
    "ordering.take.helper": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.ordering.take.helper"
    ),
    "ordering.take.empty": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.ordering.take.empty"),
    "ordering.preview.submitted_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.ordering.preview.submitted_label"
    ),
    "ordering.preview.expected_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.ordering.preview.expected_label"
    ),
    "ordering.preview.matches": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.ordering.preview.matches"
    ),
    "ordering.preview.differs": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.ordering.preview.differs"
    ),
    "hotspot.edit.helper": t.get("course.navItem.lessons.exercises.all_exercises.shared_question.hotspot.edit.helper"),
    "hotspot.take.placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.hotspot.take.placeholder"
    ),
    "hotspot.preview.helper": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.hotspot.preview.helper"
    ),
    "textarea.edit.placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.textarea.edit.placeholder"
    ),
    "textarea.edit.min_characters_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.textarea.edit.min_characters_label"
    ),
    "textarea.edit.min_characters_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.textarea.edit.min_characters_placeholder"
    ),
    "textarea.edit.max_characters_label": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.textarea.edit.max_characters_label"
    ),
    "textarea.edit.max_characters_placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.textarea.edit.max_characters_placeholder"
    ),
    "textarea.take.placeholder": t.get(
      "course.navItem.lessons.exercises.all_exercises.shared_question.textarea.take.placeholder"
    ),
    "submission.common.no_answer": t.get("course.navItem.lessons.exercises.all_exercises.analytics.individual.no"),
    "submission.common.other": t.get("course.navItem.lessons.exercises.all_exercises.analytics.summary.other"),
    "submission.chart.responses": t.get("course.navItem.lessons.exercises.all_exercises.analytics.summary.responses"),
    "submission.chart.no_data": t.get("course.navItem.lessons.exercises.all_exercises.analytics.summary.no_responses"),
    "submission.list.responses": t.get("course.navItem.lessons.exercises.all_exercises.analytics.summary.responses"),
    "submission.list.no_responses": t.get(
      "course.navItem.lessons.exercises.all_exercises.analytics.summary.no_responses"
    )
  };
}

export { Question_renderer as Q, getExerciseQuestionContractKey as a, getTextareaAnswerCharacterCount as b, Question_list as c, getExerciseQuestionLabels as g, toApiPayload as t, validateTextareaAnswer as v };
//# sourceMappingURL=question-labels-Dg4Kv9Wx.js.map
