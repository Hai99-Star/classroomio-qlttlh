const isCourseFree = (cost) => !(Number(cost) > 0);
function calcCourseDiscount(percent = 0, cost, showDiscount) {
  if (!percent || !showDiscount) return cost;
  const discountAmount = percent / 100 * cost;
  const discountedPrice = cost - discountAmount;
  return Math.round(discountedPrice);
}

export { calcCourseDiscount as c, isCourseFree as i };
//# sourceMappingURL=course2-CiL0obJ7.js.map
