const DEFAULT_COMPLIANCE_SETTINGS = {
  retakeIntervalMonths: 12,
  gracePeriodDays: 0,
  reminderDaysBefore: [30, 7, 1],
  isMandatory: true,
  framework: null,
  maxRetakeAttempts: null,
  passingScore: 80
};
function isSelfPacedLikeCourse(courseType) {
  return courseType === "SELF_PACED" || courseType === "COMPLIANCE";
}
function getCourseContentProgress(course) {
  const exercisesCompleted = typeof course.exercisesCompleted === "number" ? course.exercisesCompleted : 0;
  const totalExercises = typeof course.exerciseCount === "number" ? course.exerciseCount : 0;
  const totalItems = (course.lessonCount ?? 0) + totalExercises;
  if (totalItems <= 0) {
    return 0;
  }
  const completedItems = (course.progressRate ?? 0) + exercisesCompleted;
  return Math.round(completedItems / totalItems * 100);
}
function getStudentCourseComplianceStatus(course) {
  if (course.type !== "COMPLIANCE") {
    return null;
  }
  if (!("complianceStatus" in course)) {
    return null;
  }
  return course.complianceStatus;
}
function isStudentCourseComplete(course) {
  if (course.type === "COMPLIANCE") {
    const complianceStatus = getStudentCourseComplianceStatus(course);
    return complianceStatus === "compliant" || complianceStatus === "waived";
  }
  return getCourseContentProgress(course) >= 100;
}
function getStudentCourseProgressPercent(course) {
  return getCourseContentProgress(course);
}
function getStudentCourseComplianceDate(course) {
  if (course.type !== "COMPLIANCE") {
    return null;
  }
  const complianceStatus = getStudentCourseComplianceStatus(course);
  const validUntil = "complianceValidUntil" in course ? course.complianceValidUntil ?? null : null;
  const dueDate = "complianceDueDate" in course ? course.complianceDueDate ?? null : null;
  if ((complianceStatus === "compliant" || complianceStatus === "waived") && validUntil) {
    return {
      labelKey: "courses.course_card.valid_until",
      value: validUntil
    };
  }
  if (dueDate) {
    return {
      labelKey: "courses.course_card.due_date",
      value: dueDate
    };
  }
  return null;
}
function getStudentCourseComplianceStatusKey(course) {
  const complianceStatus = getStudentCourseComplianceStatus(course);
  return complianceStatus ? `course.navItem.compliance.status.${complianceStatus}` : null;
}
function getStudentCourseComplianceStatusVariant(course) {
  const complianceStatus = getStudentCourseComplianceStatus(course);
  if (!complianceStatus) {
    return "outline";
  }
  if (complianceStatus === "compliant") {
    return "success";
  }
  if (complianceStatus === "expiring_soon" || complianceStatus === "in_progress" || complianceStatus === "in_grace_period") {
    return "warning";
  }
  if (complianceStatus === "non_compliant") {
    return "destructive";
  }
  if (complianceStatus === "waived") {
    return "secondary";
  }
  return "outline";
}

export { DEFAULT_COMPLIANCE_SETTINGS as D, isStudentCourseComplete as a, getStudentCourseProgressPercent as b, getStudentCourseComplianceStatusKey as c, getStudentCourseComplianceStatusVariant as d, getStudentCourseComplianceDate as g, isSelfPacedLikeCourse as i };
//# sourceMappingURL=compliance-utils-UIprJIyn.js.map
