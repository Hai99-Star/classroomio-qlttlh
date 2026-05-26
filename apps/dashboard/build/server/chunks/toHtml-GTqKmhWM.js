const isHtmlValueEmpty = (html) => {
  if (!html || typeof html !== "string") return true;
  if (/<svg\b/i.test(html)) return false;
  return false;
};
const getTextFromHTML = (html) => {
  const dummyDiv = document.createElement("div");
  dummyDiv.innerHTML = html;
  return dummyDiv.textContent?.trim() || "";
};

export { getTextFromHTML as g, isHtmlValueEmpty as i };
//# sourceMappingURL=toHtml-GTqKmhWM.js.map
