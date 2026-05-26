import './index4-DxtvI9Cx.js';
import './submission-CIIjGYOS.js';
import './translations-BxDrjLWK.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import './org-BIDTy0Q0.js';
import './question-type-capabilities-B1VkdJbc.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './content-BYLGOVzm.js';
import { l as lessonApi } from './lesson.svelte-DHSyMYln.js';

function getVideoUrls(urls = "") {
  return (urls || "").split(",").filter((url) => !!url.trim());
}
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    snackbar.success("Copied to clipboard");
  } catch (err) {
    console.error("Failed to copy:", err);
    snackbar.error("Failed to copy");
  }
}
function removeVideo(index = 0) {
  lessonApi.deleteLessonVideo(index);
}

export { copyToClipboard as c, getVideoUrls as g, removeVideo as r };
//# sourceMappingURL=formatYoutubeVideo-3GLHQczW.js.map
