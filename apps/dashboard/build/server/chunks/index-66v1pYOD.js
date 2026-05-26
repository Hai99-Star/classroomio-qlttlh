import * as z from 'zod';
import { E as ZComplianceSettings, F as ZCourseMetadata, G as ZExerciseQuestionTypeId, H as ALLOWED_IMAGE_TYPES, I as ZCourseCreateBase, J as ZCourseUpdateBase } from './submission-CIIjGYOS.js';
import './search2-Bcr7AZ8r.js';
import './sso-COLElRqe.js';

const ZSupportedLocale = z.enum(["en", "hi", "fr", "pt", "de", "vi", "ru", "es", "pl", "da"]);
const LESSON_BODY_HTML_DESCRIPTION = "Lesson body HTML only. Do not include the lesson title. Do not use h1 or h2 anywhere in lessonLanguages[].content. Start headings at h3 because that is the highest heading level allowed in lesson content.";
const ZCourseImportWarning = z.object({
  code: z.string().min(1),
  message: z.string().min(1),
  severity: z.enum(["info", "warning", "error"])
});
const ZCourseImportSourceReference = z.object({
  type: z.enum(["prompt", "pdf", "course"]),
  label: z.string().min(1),
  pageStart: z.number().int().min(1).optional(),
  pageEnd: z.number().int().min(1).optional()
});
const ZCourseImportDraftCourse = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  type: z.enum(["LIVE_CLASS", "SELF_PACED", "COMPLIANCE"]),
  locale: ZSupportedLocale.default("en"),
  metadata: ZCourseMetadata.optional(),
  compliance: ZComplianceSettings.optional()
}).refine((data) => data.type !== "COMPLIANCE" || data.compliance !== void 0, {
  message: "Compliance settings are required for COMPLIANCE courses",
  path: ["compliance"]
});
const ZCourseImportDraftSection = z.object({
  externalId: z.string().min(1),
  title: z.string().min(1),
  order: z.number().int().min(0)
});
const ZCourseImportDraftLesson = z.object({
  externalId: z.string().min(1),
  sectionExternalId: z.string().min(1),
  title: z.string().min(1),
  order: z.number().int().min(0),
  isUnlocked: z.boolean().optional(),
  public: z.boolean().optional()
});
const ZCourseImportDraftLessonLanguage = z.object({
  lessonExternalId: z.string().min(1),
  locale: ZSupportedLocale,
  content: z.string().min(1).describe(LESSON_BODY_HTML_DESCRIPTION)
});
const ZCourseImportDraftExerciseOption = z.object({
  label: z.string().min(1),
  isCorrect: z.boolean(),
  settings: z.record(z.string(), z.unknown()).optional()
});
const ZCourseImportDraftExerciseQuestion = z.object({
  question: z.string().min(1),
  questionTypeId: ZExerciseQuestionTypeId.optional(),
  points: z.number().int().min(0).optional(),
  order: z.number().int().min(0).optional(),
  settings: z.record(z.string(), z.unknown()).optional(),
  options: z.array(ZCourseImportDraftExerciseOption).optional()
});
const ZCourseImportDraftExercise = z.object({
  externalId: z.string().min(1),
  lessonExternalId: z.string().min(1).optional(),
  sectionExternalId: z.string().min(1).optional(),
  title: z.string().min(1),
  description: z.string().optional(),
  order: z.number().int().min(0).optional(),
  dueBy: z.string().optional(),
  questions: z.array(ZCourseImportDraftExerciseQuestion).optional()
});
const ZCourseImportDraftPayload = z.object({
  course: ZCourseImportDraftCourse,
  tags: z.array(z.string().trim().min(1).max(80)).max(100).default([]),
  sections: z.array(ZCourseImportDraftSection).min(1),
  lessons: z.array(ZCourseImportDraftLesson).min(1),
  lessonLanguages: z.array(ZCourseImportDraftLessonLanguage).min(1),
  exercises: z.array(ZCourseImportDraftExercise).optional(),
  sourceReferences: z.array(ZCourseImportSourceReference).optional(),
  warnings: z.array(ZCourseImportWarning).default([])
}).superRefine((value, ctx) => {
  const normalizedTags = /* @__PURE__ */ new Set();
  value.tags.forEach((tag, index) => {
    const tagKey = tag.trim().toLowerCase();
    if (normalizedTags.has(tagKey)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["tags", index],
        message: "Draft tags must be unique"
      });
    }
    normalizedTags.add(tagKey);
  });
  const sectionIds = /* @__PURE__ */ new Set();
  value.sections.forEach((section, index) => {
    if (sectionIds.has(section.externalId)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["sections", index, "externalId"],
        message: "Section externalId must be unique"
      });
    }
    sectionIds.add(section.externalId);
  });
  const lessonIds = /* @__PURE__ */ new Set();
  value.lessons.forEach((lesson, index) => {
    if (lessonIds.has(lesson.externalId)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["lessons", index, "externalId"],
        message: "Lesson externalId must be unique"
      });
    }
    lessonIds.add(lesson.externalId);
    if (!sectionIds.has(lesson.sectionExternalId)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["lessons", index, "sectionExternalId"],
        message: "Lesson sectionExternalId must reference an existing section"
      });
    }
  });
  value.lessonLanguages.forEach((lessonLanguage, index) => {
    if (!lessonIds.has(lessonLanguage.lessonExternalId)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["lessonLanguages", index, "lessonExternalId"],
        message: "Lesson language must reference an existing lesson"
      });
    }
  });
  const exerciseIds = /* @__PURE__ */ new Set();
  value.exercises?.forEach((exercise, index) => {
    if (exerciseIds.has(exercise.externalId)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["exercises", index, "externalId"],
        message: "Exercise externalId must be unique"
      });
    }
    exerciseIds.add(exercise.externalId);
    if (exercise.lessonExternalId && !lessonIds.has(exercise.lessonExternalId)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["exercises", index, "lessonExternalId"],
        message: "Exercise lessonExternalId must reference an existing lesson"
      });
    }
    if (exercise.sectionExternalId && !sectionIds.has(exercise.sectionExternalId)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["exercises", index, "sectionExternalId"],
        message: "Exercise sectionExternalId must reference an existing section"
      });
    }
  });
});
z.object({
  sourceType: z.enum(["prompt", "pdf", "course"]),
  idempotencyKey: z.string().min(1).optional(),
  summary: z.record(z.string(), z.unknown()).optional(),
  sourceArtifacts: z.array(z.record(z.string(), z.unknown())).optional(),
  draft: ZCourseImportDraftPayload
});
z.object({
  courseId: z.string().min(1)
});
z.object({
  courseId: z.string().min(1),
  idempotencyKey: z.string().min(1).optional(),
  summary: z.record(z.string(), z.unknown()).optional(),
  sourceArtifacts: z.array(z.record(z.string(), z.unknown())).optional()
});
z.object({
  draftId: z.string().uuid()
});
z.object({
  summary: z.record(z.string(), z.unknown()).optional(),
  sourceArtifacts: z.array(z.record(z.string(), z.unknown())).optional(),
  warnings: z.array(ZCourseImportWarning).optional(),
  draft: ZCourseImportDraftPayload.optional()
});
const ZCourseImportDraftPublishBase = z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  type: z.enum(["LIVE_CLASS", "SELF_PACED", "COMPLIANCE"]).optional(),
  metadata: ZCourseMetadata.optional(),
  compliance: ZComplianceSettings.optional(),
  bannerImageUrl: z.string().url().optional(),
  bannerImageQuery: z.string().min(1).max(120).optional(),
  generateBannerImage: z.boolean().optional()
});
ZCourseImportDraftPublishBase.refine((data) => data.type !== "COMPLIANCE" || data.compliance !== void 0, {
  message: "Compliance settings are required for COMPLIANCE courses",
  path: ["compliance"]
});
const ZCourseImportDraftPublishToCourseBase = ZCourseImportDraftPublishBase.extend({
  courseId: z.string().min(1),
  syncMode: z.enum(["merge", "replace"]).default("merge")
});
ZCourseImportDraftPublishToCourseBase.refine((data) => data.type !== "COMPLIANCE" || data.compliance !== void 0, {
  message: "Compliance settings are required for COMPLIANCE courses",
  path: ["compliance"]
});
const ZEmailData = z.object({
  from: z.string().optional(),
  to: z.email(),
  subject: z.string().min(1),
  content: z.string().min(1),
  replyTo: z.string().optional()
});
z.array(ZEmailData).min(1);
z.object({
  fileName: z.string().min(1),
  fileType: z.enum(ALLOWED_IMAGE_TYPES)
});
const ZTranscriptSegment = z.object({
  start: z.number(),
  end: z.number(),
  text: z.string()
});
z.object({
  language: z.string(),
  segments: z.array(ZTranscriptSegment),
  vttUrl: z.string().min(1),
  vttUrlExpiresAt: z.string(),
  durationSeconds: z.number().nullable()
});
z.object({
  email: z.string().email(),
  courseIds: z.array(z.string().uuid()).optional(),
  sendEmail: z.boolean().default(true)
});
z.object({
  email: z.string().email(),
  sendEmail: z.boolean().default(true)
});
z.object({
  memberId: z.coerce.number().int().positive()
});
z.object({
  tags: z.string().optional()
});
z.object({
  courseId: z.string().uuid()
});
ZCourseCreateBase.omit({
  organizationId: true
}).refine((data) => data.type !== "COMPLIANCE" || data.compliance !== void 0, {
  message: "Compliance settings are required for COMPLIANCE courses",
  path: ["compliance"]
});
ZCourseUpdateBase.omit({
  tagIds: true
}).refine((data) => data.type !== "COMPLIANCE" || data.compliance !== void 0, {
  message: "Compliance settings are required when changing a course to COMPLIANCE",
  path: ["compliance"]
});
z.object({
  mode: z.enum(["merge", "replace"]).default("merge"),
  idempotencyKey: z.string().min(1).optional(),
  summary: z.record(z.string(), z.unknown()).optional(),
  sourceArtifacts: z.array(z.record(z.string(), z.unknown())).optional(),
  draft: ZCourseImportDraftPayload
});
z.object({
  orgId: z.string().optional(),
  siteName: z.string().optional()
}).refine((v) => !!(v.orgId || v.siteName), {
  message: "Either orgId or siteName is required"
});
z.object({
  orgId: z.string().optional(),
  siteName: z.string().optional(),
  days: z.coerce.number().int().min(1).max(365).default(90)
}).refine((v) => !!(v.orgId || v.siteName), {
  message: "Either orgId or siteName is required"
});
const CLIENT_EVENT_TYPES = [
  "landing_view",
  "course_page_view",
  "signup_view",
  "signin_view",
  "pricing_view",
  "cta_click"
];
const ZTrackEvent = z.object({
  eventType: z.enum(CLIENT_EVENT_TYPES),
  occurredAt: z.string().optional(),
  orgId: z.string().uuid().optional(),
  courseId: z.string().uuid().optional(),
  path: z.string().max(2048).optional(),
  referrerHost: z.string().max(255).optional(),
  utmSource: z.string().max(128).optional(),
  utmMedium: z.string().max(128).optional(),
  utmCampaign: z.string().max(128).optional(),
  locale: z.string().max(8).optional(),
  props: z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.null()])).optional()
});
z.object({
  sessionId: z.string().min(8).max(128),
  events: z.array(ZTrackEvent).min(1).max(50)
});
z.object({
  userId: z.string().uuid()
});
z.object({
  orgId: z.string().uuid(),
  days: z.coerce.number().int().min(1).max(365).default(30)
});
z.object({
  orgId: z.string().uuid(),
  days: z.coerce.number().int().min(1).max(365).default(30),
  courseId: z.string().uuid().optional()
});
z.object({
  orgId: z.string().uuid()
});
z.object({
  jobId: z.string().uuid()
});
z.object({
  assetId: z.string().uuid()
});
z.object({
  /** Comma-separated list of job ids; capped at 50 to keep URLs reasonable. */
  ids: z.string().min(1).transform((value) => value.split(",").map((entry) => entry.trim()).filter(Boolean)).pipe(z.array(z.string().uuid()).min(1).max(50))
});

function Diff() {}
Diff.prototype = {
  diff: function diff(oldString, newString) {
    var _options$timeout;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = options.callback;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.options = options;
    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    } // Allow subclasses to massage the input prior to running


    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;

    if (options.maxEditLength) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }

    var maxExecutionTime = (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : Infinity;
    var abortAfterTimestamp = Date.now() + maxExecutionTime;
    var bestPath = [{
      oldPos: -1,
      lastComponent: undefined
    }]; // Seed editLength = 0, i.e. the content starts with the same values

    var newPos = this.extractCommon(bestPath[0], newString, oldString, 0);

    if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
      // Identity per the equality and tokenizer
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    } // Once we hit the right edge of the edit graph on some diagonal k, we can
    // definitely reach the end of the edit graph in no more than k edits, so
    // there's no point in considering any moves to diagonal k+1 any more (from
    // which we're guaranteed to need at least k+1 more edits).
    // Similarly, once we've reached the bottom of the edit graph, there's no
    // point considering moves to lower diagonals.
    // We record this fact by setting minDiagonalToConsider and
    // maxDiagonalToConsider to some finite value once we've hit the edge of
    // the edit graph.
    // This optimization is not faithful to the original algorithm presented in
    // Myers's paper, which instead pointlessly extends D-paths off the end of
    // the edit graph - see page 7 of Myers's paper which notes this point
    // explicitly and illustrates it with a diagram. This has major performance
    // implications for some common scenarios. For instance, to compute a diff
    // where the new text simply appends d characters on the end of the
    // original text of length n, the true Myers algorithm will take O(n+d^2)
    // time while this optimization needs only O(n+d) time.


    var minDiagonalToConsider = -Infinity,
        maxDiagonalToConsider = Infinity; // Main worker method. checks all permutations of a given edit length for acceptance.

    function execEditLength() {
      for (var diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
        var basePath = void 0;
        var removePath = bestPath[diagonalPath - 1],
            addPath = bestPath[diagonalPath + 1];

        if (removePath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = false;

        if (addPath) {
          // what newPos will be after we do an insertion:
          var addPathNewPos = addPath.oldPos - diagonalPath;
          canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
        }

        var canRemove = removePath && removePath.oldPos + 1 < oldLen;

        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        } // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the old string is the farthest from the origin
        // and does not pass the bounds of the diff graph
        // TODO: Remove the `+ 1` here to make behavior match Myers algorithm
        //       and prefer to order removals before insertions.


        if (!canRemove || canAdd && removePath.oldPos + 1 < addPath.oldPos) {
          basePath = self.addToPath(addPath, true, undefined, 0);
        } else {
          basePath = self.addToPath(removePath, undefined, true, 1);
        }

        newPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

        if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
          // If we have hit the end of both strings, then we are done
          return done(buildValues(self, basePath.lastComponent, newString, oldString, self.useLongestToken));
        } else {
          bestPath[diagonalPath] = basePath;

          if (basePath.oldPos + 1 >= oldLen) {
            maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
          }

          if (newPos + 1 >= newLen) {
            minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
          }
        }
      }

      editLength++;
    } // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced, or until the edit length exceeds options.maxEditLength (if given),
    // in which case it will return undefined.


    if (callback) {
      (function exec() {
        setTimeout(function () {
          if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
        var ret = execEditLength();

        if (ret) {
          return ret;
        }
      }
    }
  },
  addToPath: function addToPath(path, added, removed, oldPosInc) {
    var last = path.lastComponent;

    if (last && last.added === added && last.removed === removed) {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: last.count + 1,
          added: added,
          removed: removed,
          previousComponent: last.previousComponent
        }
      };
    } else {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: 1,
          added: added,
          removed: removed,
          previousComponent: last
        }
      };
    }
  },
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        oldPos = basePath.oldPos,
        newPos = oldPos - diagonalPath,
        commonCount = 0;

    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.lastComponent = {
        count: commonCount,
        previousComponent: basePath.lastComponent
      };
    }

    basePath.oldPos = oldPos;
    return newPos;
  },
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },
  removeEmpty: function removeEmpty(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }

    return ret;
  },
  castInput: function castInput(value) {
    return value;
  },
  tokenize: function tokenize(value) {
    return value.split('');
  },
  join: function join(chars) {
    return chars.join('');
  }
};

function buildValues(diff, lastComponent, newString, oldString, useLongestToken) {
  // First we convert our linked list of components in reverse order to an
  // array in the right order:
  var components = [];
  var nextComponent;

  while (lastComponent) {
    components.push(lastComponent);
    nextComponent = lastComponent.previousComponent;
    delete lastComponent.previousComponent;
    lastComponent = nextComponent;
  }

  components.reverse();
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];

    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });
        component.value = diff.join(value);
      } else {
        component.value = diff.join(newString.slice(newPos, newPos + component.count));
      }

      newPos += component.count; // Common case

      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.

      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  } // Special case handle for when one terminal is ignored (i.e. whitespace).
  // For this case we merge the terminal into the prior string and drop the change.
  // This is only available for string mode.


  var finalComponent = components[componentLen - 1];

  if (componentLen > 1 && typeof finalComponent.value === 'string' && (finalComponent.added || finalComponent.removed) && diff.equals('', finalComponent.value)) {
    components[componentLen - 2].value += finalComponent.value;
    components.pop();
  }

  return components;
}

//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF

var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var reWhitespace = /\S/;
var wordDiff = new Diff();

wordDiff.equals = function (left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }

  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};

wordDiff.tokenize = function (value) {
  // All whitespace symbols except newline group into one token, each newline - in separate token
  var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

  for (var i = 0; i < tokens.length - 1; i++) {
    // If we have an empty string in the next field and we have only word chars before and after, merge
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }

  return tokens;
};

var lineDiff = new Diff();

lineDiff.tokenize = function (value) {
  if (this.options.stripTrailingCr) {
    // remove one \r before \n to match GNU diff's --strip-trailing-cr behavior
    value = value.replace(/\r\n/g, '\n');
  }

  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  } // Merge the content and line separators into single tokens


  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];

    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }

      retLines.push(line);
    }
  }

  return retLines;
};

var sentenceDiff = new Diff();

sentenceDiff.tokenize = function (value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};

var cssDiff = new Diff();

cssDiff.tokenize = function (value) {
  return value.split(/([{}:;,]|\s+)/);
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var objectPrototypeToString = Object.prototype.toString;
var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

jsonDiff.useLongestToken = true;
jsonDiff.tokenize = lineDiff.tokenize;

jsonDiff.castInput = function (value) {
  var _this$options = this.options,
      undefinedReplacement = _this$options.undefinedReplacement,
      _this$options$stringi = _this$options.stringifyReplacer,
      stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
    return typeof v === 'undefined' ? undefinedReplacement : v;
  } : _this$options$stringi;
  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
};

jsonDiff.equals = function (left, right) {
  return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
};
// object that is already on the "stack" of items being processed. Accepts an optional replacer

function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];

  if (replacer) {
    obj = replacer(key, obj);
  }

  var i;

  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }

  var canonicalizedObj;

  if ('[object Array]' === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);

    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
    }

    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }

  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }

  if (_typeof(obj) === 'object' && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);

    var sortedKeys = [],
        _key;

    for (_key in obj) {
      /* istanbul ignore else */
      if (obj.hasOwnProperty(_key)) {
        sortedKeys.push(_key);
      }
    }

    sortedKeys.sort();

    for (i = 0; i < sortedKeys.length; i += 1) {
      _key = sortedKeys[i];
      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
    }

    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }

  return canonicalizedObj;
}

var arrayDiff = new Diff();

arrayDiff.tokenize = function (value) {
  return value.slice();
};

arrayDiff.join = arrayDiff.removeEmpty = function (value) {
  return value;
};
//# sourceMappingURL=index-66v1pYOD.js.map
