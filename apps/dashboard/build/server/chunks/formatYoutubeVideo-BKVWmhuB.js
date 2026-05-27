import './index4-CY3O4yvX.js';
import './submission-CIIjGYOS.js';
import './translations-BxDrjLWK.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import './org-t71AQfHV.js';
import './question-type-capabilities-B1VkdJbc.js';
import './exports-DiyTWREe.js';
import './event-ByDKS2H7.js';
import './client2-CqohmrW2.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './domains-D9J1UytB.js';
import { l as lessonApi } from './lesson.svelte-DjXAzqfD.js';

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
//# sourceMappingURL=formatYoutubeVideo-BKVWmhuB.js.map
