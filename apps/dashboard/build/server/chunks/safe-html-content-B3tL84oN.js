import { f as ensure_array_like, d as attr, m as attr_style, e as stringify } from './index2-Eg0dVEDW.js';
import './question-type-capabilities-B1VkdJbc.js';
import { p as purify } from './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import { h as html } from './html-FW6Ia4bL.js';

const FORBID_TAGS = [
  "script",
  "iframe",
  "object",
  "embed",
  "form",
  "input",
  "textarea",
  "select",
  "button",
  "meta",
  "link",
  "foreignObject",
  "math"
];
const FORBID_ATTR = [
  "onerror",
  "onload",
  "onclick",
  "onmouseover",
  "onfocus",
  "onblur",
  "onchange",
  "onsubmit",
  "onreset",
  "onselect",
  "onunload"
];
const ADD_ATTR = ["data-type", "data-latex", "colwidth"];
const ALLOWED_URI_REGEXP = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;
function createSanitizeHtmlConfig() {
  return {
    FORBID_TAGS: [...FORBID_TAGS],
    FORBID_ATTR: [...FORBID_ATTR],
    ADD_ATTR: [...ADD_ATTR],
    KEEP_CONTENT: true,
    SANITIZE_DOM: true,
    ALLOW_DATA_ATTR: false,
    ALLOWED_URI_REGEXP
  };
}
function stripSvgDataUrls(html2) {
  return html2.replace(/src\s*=\s*["']data:image\/svg[^"']*["']/gi, 'src=""');
}
const browser = typeof window !== "undefined" && typeof window.document !== "undefined";
function sanitizeHtml(html2) {
  if (typeof html2 !== "string") return "";
  if (!browser) {
    return fallbackSanitize(html2);
  }
  let sanitized = String(purify.sanitize(html2, createSanitizeHtmlConfig()));
  sanitized = stripSvgDataUrls(sanitized);
  return sanitized;
}
function fallbackSanitize(html2) {
  if (typeof html2 !== "string") return "";
  html2 = html2.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, "");
  html2 = html2.replace(/<svg\b[^>]*\/>/gi, "");
  html2 = html2.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  html2 = html2.replace(/javascript:/gi, "");
  html2 = html2.replace(/src\s*=\s*["']data:image\/svg[^"']*["']/gi, 'src=""');
  html2 = html2.replace(/\s+on\w+\s*=\s*"[^"]*"/gi, "");
  html2 = html2.replace(/\s+on\w+\s*=\s*'[^']*'/gi, "");
  html2 = html2.replace(/\s+on\w+\s*=\s*[^\s"'>]+/gi, "");
  html2 = html2.replace(/\bdata:\s*text\/html/gi, "data:text/plain");
  html2 = html2.replace(/vbscript:/gi, "");
  html2 = html2.replace(/expression\s*\(/gi, "");
  FORBID_TAGS.forEach((tag) => {
    const regex = new RegExp(`<${tag}\\b[^>]*>.*?<\\/${tag}>`, "gi");
    html2 = html2.replace(regex, "");
    const selfClosing = new RegExp(`<${tag}\\b[^>]*\\/>`, "gi");
    html2 = html2.replace(selfClosing, "");
    const unclosed = new RegExp(`<${tag}\\b[^>]*>`, "gi");
    html2 = html2.replace(unclosed, "");
  });
  return html2;
}
function fallbackSanitizeSvg(svg) {
  let output = svg.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  output = output.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, "");
  output = output.replace(/\s*on\w+\s*=\s*[^\s>]*/gi, "");
  return output;
}
function sanitizeSvgForSandbox(svg) {
  if (typeof svg !== "string" || !svg) return "";
  if (!browser) {
    return fallbackSanitizeSvg(svg);
  }
  return purify.sanitize(svg, {
    USE_PROFILES: { svg: true, svgFilters: true }
  });
}
function splitHtmlAndSvg(html2) {
  if (typeof html2 !== "string" || !html2) return [];
  const segments = [];
  const svgRegex = /<svg\b[^>]*>[\s\S]*?<\/svg>/gi;
  let lastIndex = 0;
  let match;
  while ((match = svgRegex.exec(html2)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "html", content: sanitizeHtml(html2.slice(lastIndex, match.index)) });
    }
    segments.push({ type: "svg", content: sanitizeSvgForSandbox(match[0]) });
    lastIndex = svgRegex.lastIndex;
  }
  if (lastIndex < html2.length) {
    segments.push({ type: "html", content: sanitizeHtml(html2.slice(lastIndex)) });
  }
  return segments;
}
function Safe_html_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { content } = $$props;
    const segments = splitHtmlAndSvg(content);
    function svgDimensions(svg) {
      const widthMatch = svg.match(/\bwidth\s*=\s*["'](\d+)/i);
      const heightMatch = svg.match(/\bheight\s*=\s*["'](\d+)/i);
      return {
        width: widthMatch ? `${widthMatch[1]}px` : "100%",
        height: heightMatch ? `${heightMatch[1]}px` : "150px"
      };
    }
    function svgSrcdoc(rawSvg) {
      return `<!DOCTYPE html><html><head><style>body{margin:0;display:flex;justify-content:center}</style></head><body>${rawSvg}</body></html>`;
    }
    $$renderer2.push(`<!---->`);
    {
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(segments);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let segment = each_array[i];
        if (segment.type === "html") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`${html(segment.content)}`);
        } else {
          $$renderer2.push("<!--[!-->");
          const dims = svgDimensions(segment.content);
          $$renderer2.push(`<iframe sandbox=""${attr("srcdoc", svgSrcdoc(segment.content))} title="Embedded diagram"${attr_style(`border:none;overflow:hidden;width:${stringify(dims.width)};height:${stringify(dims.height)}`)}></iframe>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!---->`);
  });
}

export { Safe_html_content as S, sanitizeHtml as s };
//# sourceMappingURL=safe-html-content-B3tL84oN.js.map
