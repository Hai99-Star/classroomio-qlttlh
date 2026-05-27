import './index4-3F2xRc80.js';

function toPublicSidebarSections(tree) {
  const sectionLookup = /* @__PURE__ */ new Map();
  for (const section of tree.sections) {
    sectionLookup.set(section.id, {
      id: section.id,
      title: section.title,
      items: []
    });
  }
  const orphanSection = {
    id: "__unsectioned",
    title: "Lessons",
    items: []
  };
  for (const item of tree.items) {
    const targetSection = item.sectionId && sectionLookup.has(item.sectionId) ? sectionLookup.get(item.sectionId) : orphanSection;
    targetSection.items.push({
      kind: item.kind,
      id: item.id,
      slug: item.slug,
      title: item.title,
      isUnlocked: item.isUnlocked
    });
  }
  const ordered = Array.from(sectionLookup.values()).filter((section) => section.items.length > 0);
  if (orphanSection.items.length > 0) {
    ordered.push(orphanSection);
  }
  return ordered;
}
function toPublicLessonView(lesson) {
  return {
    kind: "lesson",
    title: lesson.title,
    sectionTitle: lesson.sectionTitle,
    body: lesson.body ?? "",
    video: lesson.video,
    isUnlocked: lesson.isUnlocked
  };
}
function toPublicExerciseQuestions(questions) {
  const all = [...questions.unsectioned, ...questions.sections.flatMap((section) => section.questions)];
  return all.map((question) => mapQuestion(question));
}
function mapQuestion(question) {
  return {
    id: question.id,
    title: question.title,
    questionType: question.questionTypeKey,
    points: question.points,
    options: question.options.map((option) => ({
      id: option.id,
      label: option.label,
      isCorrect: option.isCorrect,
      settings: option.settings ?? {}
    })),
    settings: question.settings ?? {}
  };
}
function toPublicExerciseView(exercise) {
  return {
    kind: "exercise",
    title: exercise.title,
    description: exercise.description,
    sectionTitle: exercise.sectionTitle,
    isUnlocked: exercise.isUnlocked,
    questions: toPublicExerciseQuestions(exercise.questions)
  };
}

export { toPublicLessonView as a, toPublicExerciseView as b, toPublicSidebarSections as t };
//# sourceMappingURL=public-course-mappers-Dgcj6R1F.js.map
