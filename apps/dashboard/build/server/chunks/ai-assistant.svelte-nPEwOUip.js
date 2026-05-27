import { w as writable } from './index-AIbsv2Pd.js';
import { s as sidePanel } from './store.svelte-CDxZ1B8Q.js';
import './client3-CP3T_KrU.js';
import './translations-BxDrjLWK.js';
import { z } from 'zod';
import { Q as QUESTION_TYPE_REGISTRY } from './question-type-capabilities-B1VkdJbc.js';
import { n as escape_html, f as ensure_array_like, l as attr_class, j as clsx } from './index2-Eg0dVEDW.js';
import { R as Root$1, P as Popover_trigger, a as Popover_content } from './index9-C_LBahdk.js';
import { R as Root, S as Select_trigger, a as Select_content, b as Select_item } from './index10-CThLLXbL.js';
import { A as AGENT_MODELS, U as UI_PICKER_MODEL_IDS } from './index11-ChqzWCsR.js';
import { R as Rocket } from './rocket-Dn-EQ87F.js';
import { C as Chevron_down } from './chevron-down2-mQy71LmC.js';
import { C as Check } from './check-92w5ryLF.js';
import { c as classroomio, b as getRequestBaseUrl, h as apiClient } from './index4-CY3O4yvX.js';
import { B as BaseApiWithErrors } from './base.svelte-Bh2VVy5Z.js';

const AI_ASSISTANT_PANEL_ID = "ai-assistant";
function closeAiAssistant() {
  sidePanel.close();
}
function toggleAiAssistant() {
  sidePanel.toggle(AI_ASSISTANT_PANEL_ID);
}
const initialChatPrompt = writable(null);
const initialChatModel = writable(null);
function setInitialChatPrompt(prompt) {
  initialChatPrompt.set(prompt);
}
function setInitialChatModel(model) {
  initialChatModel.set(model);
}
const CoursePlanItemSchema = z.object({
  type: z.enum(["lesson", "exercise"]).describe("'lesson' for content lessons, 'exercise' for quizzes/assessments"),
  title: z.string().min(1),
  description: z.string().min(1),
  order: z.number().int().min(0),
  hasExercise: z.boolean().default(false).describe("Only for lessons: whether to also create an exercise linked to this lesson")
});
const CoursePlanSectionSchema = z.object({
  title: z.string().min(1),
  order: z.number().int().min(0),
  items: z.array(CoursePlanItemSchema).min(1).describe('Ordered list of lessons and exercises. Use type "exercise" for standalone quizzes (e.g. end-of-section). The final course section’s items must include the comprehensive final examination exercise as specified in the course plan rules.')
});
const CoursePlanFieldsSchema = z.object({
  title: z.string().min(1),
  sections: z.array(CoursePlanSectionSchema).min(1).describe("Instructional sections in teaching order, then a final section for the comprehensive course examination. The LAST section must hold the final exam (validated when the plan is submitted). Earlier sections cover the curriculum; each prior section should be represented in the exam by its own in-exercise question block with 3–5 questions when the plan is implemented.")
});
const CoursePlanSchema = CoursePlanFieldsSchema.superRefine((plan, ctx) => {
  const lastIndex = plan.sections.length - 1;
  const lastSection = plan.sections[lastIndex];
  if (!lastSection)
    return;
  const hasFinalExamExercise = lastSection.items.some((item) => item.type === "exercise");
  if (!hasFinalExamExercise) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "The last section must include at least one exercise item for the comprehensive final examination (in implementation: one exercise with create_exercise_section blocks—one per prior course section—each with 3–5 questions).",
      path: ["sections", lastIndex]
    });
  }
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID")
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    lessonId: z.string().describe("The lesson ID to read"),
    locale: z.string().default("en").describe("The locale to read content in")
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    exerciseId: z.string().describe("The exercise ID to read")
  })
});
const fieldBase = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  description: z.string().optional(),
  required: z.boolean().optional(),
  placeholder: z.string().optional()
});
const TemplateFormFieldSchema = z.discriminatedUnion("type", [
  fieldBase.extend({ type: z.literal("text") }),
  fieldBase.extend({ type: z.literal("textarea") }),
  fieldBase.extend({ type: z.literal("url") }),
  fieldBase.extend({
    type: z.literal("select"),
    options: z.array(z.object({ value: z.string().min(1), label: z.string().min(1) })).min(1)
  })
]);
const CourseTemplateIdSchema = z.enum(["product_101", "product_onboarding", "expert_on_x"]);
const COURSE_TEMPLATES = [
  {
    id: "product_101",
    promptTemplate: "Create a [Product Name] 101 course that teaches our customers the fundamentals of using the product end-to-end.",
    formTitle: "Tell us about your product",
    fields: [
      {
        id: "product_name",
        type: "text",
        label: "Product name",
        required: true,
        placeholder: "e.g. Acme CRM"
      },
      {
        id: "product_summary",
        type: "textarea",
        label: "In one or two sentences, what does the product do?",
        required: true,
        placeholder: "e.g. Acme CRM is a sales pipeline tool for B2B teams."
      },
      {
        id: "audience",
        type: "text",
        label: "Who is the audience?",
        required: true,
        placeholder: "e.g. Account executives at SMB sales teams"
      },
      {
        id: "outcome",
        type: "textarea",
        label: "What should learners be able to do after the course?",
        required: true,
        placeholder: "e.g. Build a pipeline, log calls, run reports"
      },
      {
        id: "depth",
        type: "select",
        label: "How deep should the course go?",
        required: true,
        options: [
          { value: "balanced", label: "Balanced — typical 101, ~6 sections, moderate depth" },
          { value: "light", label: "Light — essentials only, ~4 sections, shorter lessons" },
          {
            value: "deep_doc",
            label: "Deep (documentation-grounded) — ~10 sections, in-depth lessons sourced from the docs"
          }
        ]
      },
      {
        id: "documentation_url",
        type: "url",
        label: "Documentation URL (optional)",
        required: false,
        placeholder: "https://docs.your-product.com"
      }
    ],
    coreInstructions: `You are running the Product 101 Course template. The teacher wants a fundamentals course that takes a brand-new customer from zero to confidently using their product end-to-end.

Step-by-step protocol:
1. As your very first action, call ask_template_questions with the registry fields for this template.
2. Wait for a user message with metadata.template.action === 'submit_template_answers' OR 'skip_template_form'.
3. **Immediately after submit_template_answers** (or after you have collected all answers via skip_template_form): your **first** action MUST be a single \`update_course_landing_page\` tool call — no assistant prose and no other tool before it. The course sidebar title was created from a placeholder prompt; you must replace it with real data from the submitted answers:
   - \`title\`: exactly \`"{product_name} 101"\` using the trimmed \`product_name\` value from the answers (e.g. answers "Acme CRM" → title "Acme CRM 101"). Never use angle brackets, square brackets, or the words "Product name" as literals.
   - \`description\` / overview fields: write a short, polished description from \`product_summary\`, \`audience\`, and \`outcome\`. You may refine description again after fetching docs, but this first call must fix the wrong placeholder title.
4. The submitted \`depth\` is one of: \`light\`, \`balanced\`, \`deep_doc\`. Use the section/lesson/word ranges from the "Depth tier" block in the system prompt — do NOT pick your own ranges.
5. If \`documentation_url\` is non-empty, call fetch_documentation_url(url=documentation_url) and then follow up to 14 same-origin sub-pages, prioritising pages that describe core product workflows and how a customer uses the product end-to-end. Apply the link-selection rule in the system prompt — favour product pages (concept overviews, getting-started, how-tos, workflows) over API references for this template's audience. Call fetch_documentation_url again for each chosen URL, one per turn, stopping early if you have enough product-grounded context. For \`deep_doc\`: fetching is REQUIRED before generate_course_plan, and every implemented lesson must be grounded in the fetched markdown — never invent product facts.
6. Optionally call \`update_course_landing_page\` again to enrich description/overview after docs are fetched (keep the same real \`title\` unless the teacher asks to change it).
7. Call generate_course_plan with the following pedagogical shape:
   - Instructional sections progress from "what the product is" to "advanced workflows".
   - Section 1 always covers what the product is, who it's for, and the value proposition (1–2 single-task lessons).
   - Section 2 always covers a guided "first run" / hello-world workflow the learner can do alongside the lesson.
   - Middle sections cover core feature areas grouped by user task, not by UI screen.
   - The penultimate section covers integrations, edge cases, or troubleshooting if relevant.
   - The final section is the comprehensive final examination (per the global plan rules).
   - Match section count, total lesson count, and per-lesson length to the chosen \`depth\` ranges in the "Depth tier" block.
   - Lessons are single-task ("Send your first invoice"), never multi-task. Never use "and"/comma-joined compound titles.
8. Wait for plan approval. Do not implement until the teacher approves.

If the user chose 'skip_template_form', ask the questions from the registry one at a time in plain text instead of re-rendering the form. Use the answers in the same order to drive steps 3–8.`
  },
  {
    id: "product_onboarding",
    promptTemplate: "Create a [Product Name] onboarding training that gets new users productive in their first week.",
    formTitle: "Tell us about your onboarding goals",
    fields: [
      {
        id: "product_name",
        type: "text",
        label: "Product name",
        required: true,
        placeholder: "e.g. Acme CRM"
      },
      {
        id: "audience",
        type: "select",
        label: "Who is being onboarded?",
        required: true,
        options: [
          { value: "new_customer", label: "New external customer" },
          { value: "new_hire", label: "New internal hire / team member" },
          { value: "partner", label: "Partner / reseller" }
        ]
      },
      {
        id: "outcome",
        type: "textarea",
        label: "By the end of week one, what should they be able to do unaided?",
        required: true,
        placeholder: "e.g. Set up their workspace, invite teammates, run their first campaign"
      },
      {
        id: "documentation_url",
        type: "url",
        label: "Documentation URL (optional)",
        required: false,
        placeholder: "https://docs.your-product.com"
      }
    ],
    coreInstructions: `You are running the Product Onboarding Training template. The teacher wants a focused, action-oriented course that gets a specific audience productive within their first week of using the product.

Step-by-step protocol:
1. As your very first action, call ask_template_questions with the registry fields for this template.
2. Wait for metadata.template.action === 'submit_template_answers' OR 'skip_template_form'.
3. **Immediately after submit_template_answers** (or after you have collected all answers via skip_template_form): your **first** action MUST be a single \`update_course_landing_page\` tool call — no assistant prose and no other tool before it. Replace the placeholder-derived course title with real data:
   - \`title\`: if \`audience\` is \`new_hire\`, use \`"{product_name} Team Onboarding"\`; otherwise use \`"{product_name} Onboarding"\` — always with the trimmed \`product_name\` from answers. Never use angle brackets or the literal substring "Product name".
   - \`description\` / overview: from \`outcome\` and audience, write tailored copy.
4. If \`documentation_url\` is non-empty, call fetch_documentation_url(url=documentation_url) and then up to 14 same-origin sub-pages, prioritising onboarding, quickstart, setup, and first-week pages. Apply the link-selection rule in the system prompt — favour product pages (getting-started, how-tos, walkthroughs) over API references; this audience is being onboarded to use the product, not to integrate with it.
5. Optionally call \`update_course_landing_page\` again to refine copy after docs (keep the same real \`title\`).
6. Call generate_course_plan with the following pedagogical shape:
   - 5–7 short, day-shaped sections (e.g. "Day 1: Account setup", "Day 2: Your first project"). Sections are organized by sequenced milestones, not by feature area.
   - Each section has 2–4 lessons, with at least one lesson per section that is action-oriented (a checklist or do-it-now task).
   - Every section ends with a short exercise (3–5 questions) that verifies the learner did the action, not just read the content.
   - The final section is the comprehensive final examination (per the global plan rules) — it should feel like a "ready to work unsupervised" certification.
   - Tone: imperative, concrete, low fluff. Lessons should reference the product UI by the names used in the documentation when fetched.
   - Each daily milestone is split into atomic do-it-now lessons; never combine two actions into one lesson and never use compound titles.
7. Wait for plan approval before implementing.

If 'skip_template_form', ask the registry questions one at a time in plain text and proceed identically through steps 3–7.`
  },
  {
    id: "expert_on_x",
    promptTemplate: "Create a course that turns learners into experts on [Topic].",
    formTitle: "Tell us about the topic",
    fields: [
      {
        id: "topic",
        type: "text",
        label: "Topic or niche",
        required: true,
        placeholder: "e.g. PostgreSQL performance tuning"
      },
      {
        id: "expertise_level",
        type: "select",
        label: "What level of expertise is the target?",
        required: true,
        options: [
          { value: "practitioner", label: "Confident practitioner (working knowledge)" },
          { value: "expert", label: "Domain expert (deep, can teach others)" },
          { value: "specialist", label: "Specialist (can solve novel problems unaided)" }
        ]
      },
      {
        id: "outcome",
        type: "textarea",
        label: "What specific things should an expert in this topic be able to do?",
        required: true,
        placeholder: "e.g. Diagnose and fix slow queries, design indexes from scratch, choose between OLTP and OLAP architectures"
      },
      {
        id: "documentation_url",
        type: "url",
        label: "Reference documentation URL (optional)",
        required: false,
        placeholder: "https://docs.example.com or a reputable reference site"
      }
    ],
    coreInstructions: `You are running the Expert on X template. The teacher wants a depth course that genuinely makes a learner an expert on a specific topic or niche, not a surface-level overview.

Step-by-step protocol:
1. As your very first action, call ask_template_questions with the registry fields for this template.
2. Wait for metadata.template.action === 'submit_template_answers' OR 'skip_template_form'.
3. **Immediately after submit_template_answers** (or after you have collected all answers via skip_template_form): your **first** action MUST be a single \`update_course_landing_page\` tool call — no assistant prose and no other tool before it. Replace the placeholder-derived course title with real data:
   - \`title\`: choose ONE style using the trimmed \`topic\` from answers: either \`Becoming an Expert on {topic}\` or \`{topic}: From Practitioner to Expert\`. Use the actual topic string (e.g. "PostgreSQL performance tuning"), never angle brackets, never the word "Topic" as a placeholder, never square brackets.
   - \`description\` / overview: serious, depth-oriented copy from \`outcome\` and \`expertise_level\`.
4. If \`documentation_url\` is non-empty, call fetch_documentation_url(url=documentation_url) and then up to 14 same-origin sub-pages, prioritising fundamentals, advanced concepts, and edge-case/troubleshooting pages. Apply the link-selection rule in the system prompt — for this template, API references are a primary source when they match the chosen depth, so include them freely alongside conceptual and advanced-pattern pages whenever the expertise target is developer- or integration-facing. If no URL is provided, rely on the topic and outcome to guide planning — do not fabricate sources.
5. Optionally call \`update_course_landing_page\` again to refine copy after docs (keep the same real \`title\`).
6. Call generate_course_plan with the following pedagogical shape:
   - 6–10 instructional sections, organized by mental model / progression of mastery rather than by topic area.
   - Section 1 sets foundational vocabulary and mental models.
   - Middle sections progress through "core mechanics" → "common patterns" → "advanced patterns" → "edge cases and trade-offs".
   - Each section has 3–5 lessons; lessons should target the deep-dive depth profile (3,000+ words per lesson when implemented).
   - Every other section ends with a non-trivial exercise that tests application, not recall.
   - The final section is the comprehensive final examination (per the global plan rules), with a higher difficulty bar than a 101 course.
   - Match the depth to the chosen \`expertise_level\` (practitioner = lower end of the ranges, specialist = upper end).
   - Atomic concept per lesson; depth comes from going deeper on one idea, not from packing many ideas together. Never use compound titles.
7. Wait for plan approval before implementing.

If 'skip_template_form', ask the registry questions one at a time in plain text and proceed identically through steps 3–7.`
  }
];
const templateById = {
  product_101: COURSE_TEMPLATES[0],
  product_onboarding: COURSE_TEMPLATES[1],
  expert_on_x: COURSE_TEMPLATES[2]
};
function getCourseTemplate(id) {
  return templateById[id];
}
const LANDING_PAGE_HTML_FORMATTING_RULES = "Use <p>, <strong> or <b>, <em> or <i>, lists, and <br> as needed. Do not use heading tags (<h1> through <h6>)—the layout already shows each section title. Use normal paragraph text with bold and italic emphasis only.";
const LANDING_PAGE_SECTION_HTML_AGENT_HINT = `HTML only. ${LANDING_PAGE_HTML_FORMATTING_RULES}`;
const LANDING_PAGE_COURSE_DESCRIPTION_PLAIN_HINT = "Plain text only, no HTML—the short public course description.";
const LANDING_PAGE_METADATA_DESCRIPTION_SECTION_HINT = `HTML for the Description section that appears after Requirements on the landing page (not the top-level course description field). ${LANDING_PAGE_HTML_FORMATTING_RULES}`;
const QUESTION_TYPE_ID_DESCRIPTION = QUESTION_TYPE_REGISTRY.map((t) => `${t.id}=${t.typename} (${t.label})`).join(", ");
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    title: z.string().min(1).describe("Section title"),
    order: z.number().int().min(0).describe("Display order (0-based). Set after existing sections when appending.")
  })
});
const exerciseSectionAfterBehaviorSchema = z.discriminatedUnion("action", [
  z.object({ action: z.literal("continue") }),
  z.object({ action: z.literal("submit") }),
  z.object({ action: z.literal("go_to_section"), exerciseSectionId: z.string().uuid() })
]);
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    sectionId: z.string().describe("The section ID to update"),
    title: z.string().min(1).optional().describe("New section title"),
    order: z.number().int().min(0).optional().describe("New section display order (0-based)")
  }).refine((data) => data.title !== void 0 || data.order !== void 0, {
    message: "Provide at least one field to update"
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    sectionId: z.string().describe("The section ID to place the lesson in"),
    title: z.string().min(1).describe("Lesson title"),
    order: z.number().int().min(0).describe("Display order within the section (0-based). Lessons and exercises share the SAME order space within a section, so increment by 1 across both. Example: lesson1=0, lesson2=1, exercise=2.")
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    lessonId: z.string().describe("The lesson ID to update"),
    title: z.string().min(1).optional().describe("New lesson title"),
    sectionId: z.string().optional().describe("Move the lesson into a different section"),
    order: z.number().int().min(0).optional().describe("New order within the section (0-based)"),
    lessonAt: z.string().optional().describe("Scheduled lesson datetime"),
    callUrl: z.string().optional().describe("Optional live session URL"),
    isUnlocked: z.boolean().optional().describe("Whether the lesson is unlocked for students"),
    public: z.boolean().optional().describe("Whether the lesson is public")
  }).refine((data) => data.title !== void 0 || data.sectionId !== void 0 || data.order !== void 0 || data.lessonAt !== void 0 || data.callUrl !== void 0 || data.isUnlocked !== void 0 || data.public !== void 0, {
    message: "Provide at least one field to update"
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    lessonId: z.string().describe("The lesson ID to update"),
    locale: z.string().default("en").describe("The locale to write content in"),
    content: z.string().min(1).describe("The full lesson HTML content. Use only: h2, h3, p, ul, ol, li, strong, em, blockquote, code, pre, a. Never use div, span, table, img, iframe, script, or style.")
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    lessonId: z.string().optional().describe("Optional lesson ID to link the exercise to"),
    sectionId: z.string().optional().describe("Optional section ID"),
    title: z.string().min(1).describe("Exercise title"),
    description: z.string().optional().describe("Optional short description shown to students above the questions."),
    order: z.number().int().min(0).describe("Display order within the section (0-based). REQUIRED whenever sectionId is provided. Lessons and exercises share the SAME order space within a section, so an end-of-section quiz must have a higher order than every lesson in that section. Example: lesson1=0, lesson2=1, end-of-section exercise=2."),
    questions: z.array(z.object({
      question: z.string().min(1).describe("The question text"),
      questionTypeId: z.number().int().min(1).max(QUESTION_TYPE_REGISTRY.length).describe(`Required on every question — never omit. Supported types: ${QUESTION_TYPE_ID_DESCRIPTION}. Vary types across questions (do not default everything to RADIO/1).`),
      points: z.number().min(0).default(1).describe("Points for this question"),
      order: z.number().int().min(0).describe("Display order"),
      options: z.array(z.object({
        label: z.string().min(1).describe("Option text"),
        isCorrect: z.boolean().describe("Whether this is a correct answer")
      })).describe("Answer options. RADIO and CHECKBOX questions MUST have at least 4 options with plausible distractors (not obvious filler). RADIO needs exactly one correct option; CHECKBOX needs at least 2 correct and at least 1 incorrect. TRUE_FALSE uses exactly 2 options. Leave empty for NUMERIC/STAR/WORD_BANK.")
    })).min(1).describe("Aim for 6-10 questions per exercise when assessing a full lesson. Spread across all sub-topics, mix difficulty, and vary question types.")
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    exerciseId: z.string().describe("The exercise that will contain this section"),
    title: z.string().min(1).describe("Section heading shown above questions in this block"),
    description: z.string().optional().describe("Optional intro HTML for this block"),
    order: z.number().int().min(0).describe("Display order within the exercise (0-based)"),
    colorTheme: z.enum(["blue", "green", "amber", "rose", "violet", "slate"]).optional(),
    afterBehavior: exerciseSectionAfterBehaviorSchema.optional()
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    exerciseId: z.string().describe("The exercise containing this block"),
    exerciseSectionId: z.string().describe("Section id from get_exercise_details sections[].id"),
    title: z.string().min(1).optional().describe("Heading shown above questions in this block"),
    description: z.string().optional().describe("Optional intro HTML for this block; empty string clears it")
  }).refine((data) => data.title !== void 0 || data.description !== void 0, {
    message: "Provide at least title or description"
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    exerciseId: z.string().describe("The exercise to update. Must be a real UUID returned by a prior tool call."),
    title: z.string().min(1).optional().describe("New exercise title. Omit to keep unchanged."),
    description: z.string().optional().describe("New short description shown to students. Pass an empty string to clear it."),
    lessonId: z.string().optional().describe("Link the exercise to a lesson in this course"),
    sectionId: z.string().optional().describe("Place the exercise in a section in this course"),
    order: z.number().int().min(0).optional().describe("New order within the section (0-based)"),
    dueBy: z.string().optional().describe("Due date in ISO 8601 format (e.g. 2026-05-01T23:59:00Z). Omit to keep unchanged."),
    isUnlocked: z.boolean().optional().describe("Whether the exercise is unlocked for students."),
    allowMultipleAttempts: z.boolean().optional().describe("Whether students can re-take the exercise.")
  }).refine((data) => data.title !== void 0 || data.description !== void 0 || data.lessonId !== void 0 || data.sectionId !== void 0 || data.order !== void 0 || data.dueBy !== void 0 || data.isUnlocked !== void 0 || data.allowMultipleAttempts !== void 0, {
    message: "Provide at least one field to update"
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    exerciseId: z.string().describe("The existing exercise ID"),
    exerciseSectionId: z.string().uuid().optional().describe("In-exercise section id from get_exercise_details `sections[].id` (not a course outline section id). Use when the exercise has question blocks/sections; omit only when questions are not grouped into sections."),
    questions: z.array(z.object({
      question: z.string().min(1).describe("The question text"),
      questionTypeId: z.number().int().min(1).max(QUESTION_TYPE_REGISTRY.length).describe(`Required on every question — never omit. Supported types: ${QUESTION_TYPE_ID_DESCRIPTION}. Vary types across questions (do not default everything to RADIO/1).`),
      points: z.number().min(0).default(1).describe("Points for this question"),
      order: z.number().int().min(0).describe("Display order"),
      options: z.array(z.object({
        label: z.string().min(1).describe("Option text"),
        isCorrect: z.boolean().describe("Whether this is a correct answer")
      }))
    }))
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    exerciseId: z.string().describe("The existing exercise ID"),
    questions: z.array(z.object({
      id: z.number().int().describe("Existing question id. Required."),
      question: z.string().min(1).optional().describe("New question text. Omit to keep unchanged."),
      questionTypeId: z.number().int().min(1).max(QUESTION_TYPE_REGISTRY.length).optional().describe(`Question type ID. Supported types: ${QUESTION_TYPE_ID_DESCRIPTION}`),
      points: z.number().min(0).optional(),
      order: z.number().int().min(0).optional(),
      exerciseSectionId: z.string().uuid().nullable().optional().describe("In-exercise section id from get_exercise_details (not course outline). Omit to leave unchanged; pass null to unassign from a section."),
      settings: z.record(z.string(), z.unknown()).optional().describe("Per-type correct-answer storage. NUMERIC: { correctValue: number, tolerance?: number }. STAR: { correctValue: number }. WORD_BANK: { correctAnswers: string[], template: string }. Shallow-merged with existing settings."),
      options: z.array(z.object({
        id: z.number().int().optional().describe("Include to update an existing option; omit to create a new one."),
        label: z.string().min(1).optional(),
        isCorrect: z.boolean().optional(),
        settings: z.record(z.string(), z.unknown()).optional()
      })).optional()
    }))
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    title: z.string().min(1).optional().describe("Plain-text public course title (no HTML)"),
    description: z.string().min(1).optional().describe(LANDING_PAGE_COURSE_DESCRIPTION_PLAIN_HINT),
    overview: z.string().optional().describe(LANDING_PAGE_SECTION_HTML_AGENT_HINT),
    cost: z.number().int().min(0).optional().describe("Course price in the selected currency"),
    currency: z.enum(["NGN", "USD"]).optional().describe("Course price currency"),
    imageUrl: z.string().url().optional().describe("Banner image URL to use directly"),
    generateImage: z.boolean().optional().describe("Whether to generate/select a banner image from the image query"),
    imageQuery: z.string().min(1).max(120).optional().describe("Search query for a generated/selected banner image"),
    metadata: z.object({
      requirements: z.string().optional().describe(LANDING_PAGE_SECTION_HTML_AGENT_HINT),
      description: z.string().optional().describe(LANDING_PAGE_METADATA_DESCRIPTION_SECTION_HINT),
      goals: z.string().optional().describe(LANDING_PAGE_SECTION_HTML_AGENT_HINT),
      videoUrl: z.string().optional(),
      showDiscount: z.boolean().optional(),
      discount: z.number().optional(),
      paymentLink: z.string().optional(),
      instructor: z.object({
        name: z.string().optional(),
        role: z.string().optional(),
        coursesNo: z.number().optional(),
        description: z.string().optional().describe(LANDING_PAGE_SECTION_HTML_AGENT_HINT),
        imgUrl: z.string().optional()
      }).optional()
    }).optional().describe("Landing-page metadata fields")
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID")
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The course ID"),
    confirmPublish: z.literal(true).describe("Must be true after explicit teacher confirmation to publish")
  })
});
({
  parameters: z.object({
    plan: CoursePlanSchema.describe("The proposed course structure. Instructional content lives in prior sections; the final section is always the course final examination (see schema). Each lesson includes a short description and whether it should have a linked exercise.")
  })
});
({
  parameters: z.object({
    templateId: CourseTemplateIdSchema,
    title: z.string().min(1),
    description: z.string().optional(),
    fields: z.array(TemplateFormFieldSchema).min(1)
  })
});
({
  parameters: z.object({
    url: z.string().url()
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The current course ID. Must match the active course context.")
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The current course ID"),
    lessonId: z.string().describe("The lesson ID. Must belong to this course.")
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The current course ID"),
    exerciseId: z.string().describe("The exercise ID. Must belong to this course.")
  })
});
({
  parameters: z.object({
    courseId: z.string().describe("The current course ID"),
    query: z.string().min(1).max(200).describe("Free-text query — keywords or a short phrase."),
    limit: z.number().int().min(1).max(20).default(8).describe("Maximum number of results to return.")
  })
});
QUESTION_TYPE_REGISTRY.map((t) => `- ${t.id} = ${t.typename} — ${t.label}`).join("\n");
const DISPLAY_BY_ID = {
  product_101: {
    iconName: "GraduationCap",
    titleKey: "course.creator.template.product_101.title",
    descriptionKey: "course.creator.template.product_101.description",
    formTitleKey: "course.creator.template.product_101.form_title",
    fieldLabelKeys: {
      product_name: "course.creator.template.field.product_name",
      product_summary: "course.creator.template.field.product_summary",
      audience: "course.creator.template.field.audience",
      outcome: "course.creator.template.field.outcome",
      depth: "course.creator.template.field.depth",
      documentation_url: "course.creator.template.field.documentation_url"
    }
  },
  product_onboarding: {
    iconName: "Compass",
    titleKey: "course.creator.template.product_onboarding.title",
    descriptionKey: "course.creator.template.product_onboarding.description",
    formTitleKey: "course.creator.template.product_onboarding.form_title",
    fieldLabelKeys: {
      product_name: "course.creator.template.field.product_name",
      audience: "course.creator.template.field.audience",
      outcome: "course.creator.template.field.outcome",
      documentation_url: "course.creator.template.field.documentation_url"
    }
  },
  expert_on_x: {
    iconName: "Award",
    titleKey: "course.creator.template.expert_on_x.title",
    descriptionKey: "course.creator.template.expert_on_x.description",
    formTitleKey: "course.creator.template.expert_on_x.form_title",
    fieldLabelKeys: {
      topic: "course.creator.template.field.topic",
      expertise_level: "course.creator.template.field.expertise_level",
      outcome: "course.creator.template.field.outcome",
      documentation_url: "course.creator.template.field.documentation_url"
    }
  }
};
function Model_picker($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value,
      disabled = false,
      variant = "compact",
      lockedModelIds = [],
      onChange,
      onLockedSelect
    } = $$props;
    let open = false;
    function isLocked(id) {
      return lockedModelIds.includes(id);
    }
    function handleSelect(id) {
      if (isLocked(id)) {
        onLockedSelect?.(id);
        open = false;
        return;
      }
      onChange(id);
      open = false;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (variant === "select") {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<!---->`);
        Root($$renderer3, {
          type: "single",
          value,
          onValueChange: (v) => v && handleSelect(v),
          disabled,
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Select_trigger($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<span class="ui:flex ui:items-center ui:gap-1">${escape_html(AGENT_MODELS[value].label)} `);
                if (AGENT_MODELS[value].costTier === "high") {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<span class="ui:text-red-500 ui:font-medium">$$$</span>`);
                } else {
                  $$renderer5.push("<!--[!-->");
                  $$renderer5.push(`<span class="ui:text-green-500 ui:font-medium">$</span>`);
                }
                $$renderer5.push(`<!--]--></span>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Select_content($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!--[-->`);
                const each_array = ensure_array_like(UI_PICKER_MODEL_IDS);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let id = each_array[$$index];
                  $$renderer5.push(`<!---->`);
                  Select_item($$renderer5, {
                    value: id,
                    label: AGENT_MODELS[id].label,
                    children: ($$renderer6) => {
                      $$renderer6.push(`<span class="ui:flex ui:w-full ui:items-center ui:justify-between ui:gap-2"><span class="ui:flex ui:min-w-0 ui:items-center ui:gap-2"><span>${escape_html(AGENT_MODELS[id].label)}</span> `);
                      if (isLocked(id)) {
                        $$renderer6.push("<!--[-->");
                        Rocket($$renderer6, { size: 16, class: "ui:text-primary! ui:shrink-0" });
                      } else {
                        $$renderer6.push("<!--[!-->");
                      }
                      $$renderer6.push(`<!--]--></span> <span${attr_class(clsx(AGENT_MODELS[id].costTier === "high" ? "ui:text-red-500 ui:font-medium" : "ui:text-green-500 ui:font-medium"))}>${escape_html(AGENT_MODELS[id].costTier === "high" ? "$$$" : "$")}</span></span>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                }
                $$renderer5.push(`<!--]-->`);
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
        $$renderer3.push(`<!---->`);
        Root$1($$renderer3, {
          get open() {
            return open;
          },
          set open($$value) {
            open = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Popover_trigger($$renderer4, {
              disabled,
              class: "ui:text-muted-foreground hover:ui:bg-muted ui:hover:text-foreground flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs transition-colors disabled:pointer-events-none disabled:opacity-40",
              children: ($$renderer5) => {
                $$renderer5.push(`<span class="truncate">${escape_html(AGENT_MODELS[value].label)}</span> `);
                if (AGENT_MODELS[value].costTier === "high") {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<span class="ui:text-red-500 font-medium">$$$</span>`);
                } else {
                  $$renderer5.push("<!--[!-->");
                  $$renderer5.push(`<span class="ui:text-green-500 font-medium">$</span>`);
                }
                $$renderer5.push(`<!--]--> `);
                Chevron_down($$renderer5, { size: 12 });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Popover_content($$renderer4, {
              class: "ui:p-0! ui:z-[110] w-48",
              align: "end",
              side: "top",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="py-1"><!--[-->`);
                const each_array_1 = ensure_array_like(UI_PICKER_MODEL_IDS);
                for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                  let id = each_array_1[$$index_1];
                  const isSelected = id === value;
                  $$renderer5.push(`<button type="button" class="hover:ui:bg-muted flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-xs transition-colors"><span class="flex min-w-0 items-center gap-2"><span class="min-w-0 truncate">${escape_html(AGENT_MODELS[id].label)}</span> `);
                  if (isLocked(id)) {
                    $$renderer5.push("<!--[-->");
                    Rocket($$renderer5, { size: 16, class: "ui:text-primary! ui:shrink-0" });
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--></span> <span class="flex shrink-0 items-center gap-1">`);
                  if (AGENT_MODELS[id].costTier === "high") {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<span class="ui:text-red-500 font-medium">$$$</span>`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push(`<span class="ui:text-green-500 font-medium">$</span>`);
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (isSelected) {
                    $$renderer5.push("<!--[-->");
                    Check($$renderer5, { size: 14, class: "ui:text-primary" });
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]--></span></button>`);
                }
                $$renderer5.push(`<!--]--></div>`);
              },
              $$slots: { default: true }
            });
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
  });
}
const AI_AGENT_RUNNING_WARNING_DISMISSED_KEY = "classroomio-ai-agent-running-warning-dismissed";
const AI_COURSE_CHAT_DEFAULT_WIDTH = 360;
const AI_COURSE_CHAT_MIN_WIDTH = 280;
const AI_COURSE_CHAT_MAX_WIDTH = 520;
const AI_COURSE_CHAT_STORAGE_KEY = "classroomio-ai-course-chat-width";
const AI_CHAT_MODEL_STORAGE_KEY = "classroomio-ai-chat-model";
const AI_ASSISTANT_QUICK_ACTION_ENTRIES = [
  {
    key: "ai_assistant.quick_action.upload_document_course",
    prompt: "Upload a document to create a course"
  },
  {
    key: "ai_assistant.quick_action.draft_lesson",
    prompt: "Draft a lesson"
  },
  {
    key: "ai_assistant.quick_action.generate_questions_from_lesson",
    prompt: "Generate questions from this lesson"
  },
  {
    key: "ai_assistant.quick_action.summarize_lesson",
    prompt: "Summarize this lesson"
  },
  {
    key: "ai_assistant.quick_action.publish_course",
    prompt: "Help me publish this course"
  }
];
const STUDENT_QUICK_ACTION_ENTRIES = [
  {
    key: "ai_assistant.student_quick_action.explain_lesson",
    prompt: "Explain this lesson"
  },
  {
    key: "ai_assistant.student_quick_action.quiz_me",
    prompt: "Quiz me on this"
  },
  {
    key: "ai_assistant.student_quick_action.summarize_section",
    prompt: "Summarize this section"
  },
  {
    key: "ai_assistant.student_quick_action.what_to_review",
    prompt: "What should I review next?"
  }
];
class AiAssistantApi extends BaseApiWithErrors {
  status = null;
  conversations = [];
  currentConversation = null;
  async fetchStatus(courseId) {
    await this.execute({
      requestFn: () => classroomio.agent.status.$get({ query: { courseId } }),
      logContext: "fetching agent status",
      onSuccess: (result) => {
        this.status = result.data;
      }
    });
  }
  async listConversations(courseId) {
    await this.execute({
      requestFn: () => classroomio.agent.history.$get({ query: { courseId } }),
      logContext: "listing conversations",
      onSuccess: (result) => {
        this.conversations = result.data;
      }
    });
  }
  async loadConversation(conversationId) {
    await this.execute({
      requestFn: () => classroomio.agent.history[":conversationId"].$get({ param: { conversationId } }),
      logContext: "loading conversation",
      onSuccess: (result) => {
        this.currentConversation = { ...result.data, messages: result.data.messages ?? [] };
      }
    });
  }
  async createConversation(courseId, title) {
    let created = null;
    await this.execute({
      requestFn: () => classroomio.agent.history.$post({ json: { courseId, title } }),
      logContext: "creating conversation",
      onSuccess: (result) => {
        const newConversation = result.data;
        created = newConversation;
        this.conversations = [
          {
            ...newConversation,
            createdAt: /* @__PURE__ */ (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: /* @__PURE__ */ (/* @__PURE__ */ new Date()).toISOString()
          },
          ...this.conversations
        ];
      }
    });
    return created;
  }
  async saveMessages(conversationId, messages, title) {
    await this.execute({
      requestFn: () => classroomio.agent.history[":conversationId"].$put({ param: { conversationId }, json: { messages, title } }),
      logContext: "saving messages"
    });
  }
  async deleteConversation(conversationId) {
    await this.execute({
      requestFn: () => classroomio.agent.history[":conversationId"].$delete({ param: { conversationId } }),
      logContext: "deleting conversation",
      onSuccess: () => {
        this.conversations = this.conversations.filter((c) => c.id !== conversationId);
        if (this.currentConversation?.id === conversationId) {
          this.currentConversation = null;
        }
      }
    });
  }
  async generateCourseMeta(prompt) {
    let meta = null;
    await this.execute({
      requestFn: () => classroomio.agent["generate-course-title"].$post({ json: { prompt } }),
      logContext: "generating course meta",
      onSuccess: (result) => {
        meta = result.data;
      }
    });
    return meta;
  }
  async uploadDocument(file, courseId, conversationId) {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const url = `${getRequestBaseUrl()}/agent/upload?courseId=${encodeURIComponent(courseId)}&conversationId=${encodeURIComponent(conversationId)}`;
      const response = await apiClient.request(url, { method: "POST", body: formData, credentials: "include" });
      const result = await response.json();
      if (result.success && result.data) {
        return result.data;
      }
    } catch (error) {
      console.error("Error uploading document:", error);
      this.error = "Failed to upload document";
    }
    return null;
  }
  async generateTitle(conversationId, firstMessageText) {
    let generatedTitle = null;
    await this.execute({
      requestFn: () => classroomio.agent.history[":conversationId"]["generate-title"].$post({ param: { conversationId }, json: { firstMessageText } }),
      logContext: "generating title",
      onSuccess: (result) => {
        generatedTitle = result.data.title;
        this.conversations = this.conversations.map((c) => c.id === conversationId ? { ...c, title: generatedTitle } : c);
        if (this.currentConversation?.id === conversationId) {
          this.currentConversation = { ...this.currentConversation, title: generatedTitle };
        }
      }
    });
    return generatedTitle;
  }
  async renameConversation(conversationId, title) {
    let newTitle = null;
    await this.execute({
      requestFn: () => classroomio.agent.history[":conversationId"].$patch({ param: { conversationId }, json: { title } }),
      logContext: "renaming conversation",
      onSuccess: (result) => {
        newTitle = result.data.title;
        this.conversations = this.conversations.map((c) => c.id === conversationId ? { ...c, title: newTitle } : c);
        if (this.currentConversation?.id === conversationId) {
          this.currentConversation = { ...this.currentConversation, title: newTitle };
        }
      }
    });
    return newTitle;
  }
  async summarizeConversation(messages, courseId) {
    let summary = null;
    await this.execute({
      requestFn: () => classroomio.agent.summarize.$post({ json: { messages, courseId } }),
      logContext: "summarizing conversation",
      onSuccess: (result) => {
        summary = result.data.summary;
      }
    });
    return summary;
  }
  async compactConversation(conversationId) {
    let compacted = null;
    await this.execute({
      requestFn: () => classroomio.agent.history[":conversationId"].compact.$post({ param: { conversationId } }),
      logContext: "compacting conversation",
      onSuccess: (result) => {
        compacted = result.data.messages;
        if (this.currentConversation?.id === conversationId) {
          this.currentConversation = { ...this.currentConversation, messages: compacted };
        }
      }
    });
    return compacted;
  }
}
const aiAssistantApi = new AiAssistantApi();

export { AI_COURSE_CHAT_STORAGE_KEY as A, COURSE_TEMPLATES as C, DISPLAY_BY_ID as D, Model_picker as M, STUDENT_QUICK_ACTION_ENTRIES as S, AI_COURSE_CHAT_MAX_WIDTH as a, AI_COURSE_CHAT_MIN_WIDTH as b, AI_COURSE_CHAT_DEFAULT_WIDTH as c, AI_ASSISTANT_PANEL_ID as d, aiAssistantApi as e, closeAiAssistant as f, getCourseTemplate as g, AI_AGENT_RUNNING_WARNING_DISMISSED_KEY as h, AI_ASSISTANT_QUICK_ACTION_ENTRIES as i, AI_CHAT_MODEL_STORAGE_KEY as j, setInitialChatModel as k, setInitialChatPrompt as s, toggleAiAssistant as t };
//# sourceMappingURL=ai-assistant.svelte-nPEwOUip.js.map
