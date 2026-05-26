const QUESTION_TYPE_KEY = {
  RADIO: "RADIO",
  CHECKBOX: "CHECKBOX",
  TEXTAREA: "TEXTAREA",
  TRUE_FALSE: "TRUE_FALSE",
  SHORT_ANSWER: "SHORT_ANSWER",
  NUMERIC: "NUMERIC",
  FILL_BLANK: "FILL_BLANK",
  FILE_UPLOAD: "FILE_UPLOAD",
  MATCHING: "MATCHING",
  ORDERING: "ORDERING",
  HOTSPOT: "HOTSPOT",
  LINK: "LINK",
  WORD_BANK: "WORD_BANK",
  STAR: "STAR",
  VIDEO_RECORDING: "VIDEO_RECORDING"
};
const QUESTION_TYPE_REGISTRY = [
  {
    key: QUESTION_TYPE_KEY.RADIO,
    typename: "RADIO",
    label: "Single answer",
    id: 1,
    autoGradable: true,
    supportsPartialCredit: false,
    manualGradingRequired: false
  },
  {
    key: QUESTION_TYPE_KEY.CHECKBOX,
    typename: "CHECKBOX",
    label: "Multiple answers",
    id: 2,
    autoGradable: true,
    supportsPartialCredit: true,
    manualGradingRequired: false
  },
  {
    key: QUESTION_TYPE_KEY.TEXTAREA,
    typename: "TEXTAREA",
    label: "Paragraph",
    id: 3,
    autoGradable: false,
    supportsPartialCredit: false,
    manualGradingRequired: true
  },
  {
    key: QUESTION_TYPE_KEY.TRUE_FALSE,
    typename: "TRUE_FALSE",
    label: "True/False",
    id: 4,
    autoGradable: true,
    supportsPartialCredit: false,
    manualGradingRequired: false
  },
  {
    key: QUESTION_TYPE_KEY.SHORT_ANSWER,
    typename: "SHORT_ANSWER",
    label: "Short answer",
    id: 5,
    autoGradable: false,
    supportsPartialCredit: false,
    manualGradingRequired: true
  },
  {
    key: QUESTION_TYPE_KEY.NUMERIC,
    typename: "NUMERIC",
    label: "Numeric answer",
    id: 6,
    autoGradable: true,
    supportsPartialCredit: true,
    manualGradingRequired: false
  },
  {
    key: QUESTION_TYPE_KEY.FILL_BLANK,
    typename: "FILL_BLANK",
    label: "Fill in the blank",
    id: 7,
    autoGradable: true,
    supportsPartialCredit: true,
    manualGradingRequired: false
  },
  {
    key: QUESTION_TYPE_KEY.FILE_UPLOAD,
    typename: "FILE_UPLOAD",
    label: "File upload",
    id: 8,
    autoGradable: false,
    supportsPartialCredit: false,
    manualGradingRequired: true
  },
  {
    key: QUESTION_TYPE_KEY.MATCHING,
    typename: "MATCHING",
    label: "Matching",
    id: 9,
    autoGradable: true,
    supportsPartialCredit: true,
    manualGradingRequired: false
  },
  {
    key: QUESTION_TYPE_KEY.ORDERING,
    typename: "ORDERING",
    label: "Ordering",
    id: 10,
    autoGradable: true,
    supportsPartialCredit: true,
    manualGradingRequired: false
  },
  {
    key: QUESTION_TYPE_KEY.HOTSPOT,
    typename: "HOTSPOT",
    label: "Hotspot",
    id: 11,
    autoGradable: true,
    supportsPartialCredit: true,
    manualGradingRequired: false
  },
  {
    key: QUESTION_TYPE_KEY.LINK,
    typename: "LINK",
    label: "Links",
    id: 12,
    autoGradable: false,
    supportsPartialCredit: false,
    manualGradingRequired: true
  },
  {
    key: QUESTION_TYPE_KEY.WORD_BANK,
    typename: "WORD_BANK",
    label: "Word bank",
    id: 13,
    autoGradable: true,
    supportsPartialCredit: true,
    manualGradingRequired: false
  },
  {
    key: QUESTION_TYPE_KEY.STAR,
    typename: "STAR",
    label: "Star rating",
    id: 14,
    autoGradable: true,
    supportsPartialCredit: false,
    manualGradingRequired: false
  },
  {
    key: QUESTION_TYPE_KEY.VIDEO_RECORDING,
    typename: "VIDEO_RECORDING",
    label: "Video recording",
    id: 15,
    autoGradable: false,
    supportsPartialCredit: false,
    manualGradingRequired: true
  }
];
const QUESTION_TYPE_BY_KEY = Object.freeze(QUESTION_TYPE_REGISTRY.reduce((acc, type) => {
  acc[type.key] = type;
  return acc;
}, {}));
const QUESTION_TYPE_IDS = Object.freeze(QUESTION_TYPE_REGISTRY.reduce((acc, type) => {
  acc[type.key] = type.id;
  return acc;
}, {}));
Object.freeze(QUESTION_TYPE_REGISTRY.reduce((acc, type) => {
  acc[type.typename] = type.key;
  return acc;
}, {}));
const QUESTION_TYPE_ID_TO_KEY = Object.freeze(QUESTION_TYPE_REGISTRY.reduce((acc, type) => {
  acc[type.id] = type.key;
  return acc;
}, {}));
function getQuestionTypeByKey(key) {
  return QUESTION_TYPE_BY_KEY[key];
}
function getQuestionTypeById(id) {
  const key = QUESTION_TYPE_ID_TO_KEY[id];
  return key ? QUESTION_TYPE_BY_KEY[key] : void 0;
}
function isAutoGradableQuestionType(key) {
  return getQuestionTypeByKey(key).autoGradable;
}
const AUTO_GRADABLE_QUESTION_TYPE_IDS = QUESTION_TYPE_REGISTRY.filter((entry) => entry.autoGradable).map((entry) => entry.id);
function isAutoGradableQuestionTypeId(questionTypeId) {
  return AUTO_GRADABLE_QUESTION_TYPE_IDS.includes(questionTypeId);
}

export { QUESTION_TYPE_REGISTRY as Q, QUESTION_TYPE_KEY as a, QUESTION_TYPE_IDS as b, isAutoGradableQuestionTypeId as c, getQuestionTypeById as g, isAutoGradableQuestionType as i };
//# sourceMappingURL=question-type-capabilities-B1VkdJbc.js.map
