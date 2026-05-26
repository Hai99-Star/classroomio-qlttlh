import { l as attr_class, m as attr_style, d as attr, j as clsx, e as stringify, n as escape_html, b as spread_props } from './index2-Eg0dVEDW.js';
import { d as LEGACY_THEME_MAP } from './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import { c as cn } from './index6-DijlZyMe.js';
import { M as Minus } from './minus-C_S1F5ho.js';
import { P as Plus } from './plus2-B3hKTcCm.js';
import { I as Icon } from './button-McsHA0hU.js';

const CERTIFICATE_TEMPLATE_IDS = ["classique", "brutalist", "noir", "poster", "minimal"];
function escapeHtml(input) {
  return String(input ?? "").replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}
function getYear(value) {
  const match = String(value ?? "").match(/\b(19|20|21)\d{2}\b/);
  if (match)
    return match[0];
  return String((/* @__PURE__ */ new Date()).getFullYear());
}
function shadeColor(hex, percent) {
  const normalized = hex.startsWith("#") ? hex.slice(1) : hex;
  if (normalized.length !== 6)
    return hex;
  const numeric = parseInt(normalized, 16);
  if (Number.isNaN(numeric))
    return hex;
  const offset = Math.round(percent / 100 * 255);
  const clamp = (value) => Math.max(0, Math.min(255, value));
  const red = clamp((numeric >> 16 & 255) + offset);
  const green = clamp((numeric >> 8 & 255) + offset);
  const blue = clamp((numeric & 255) + offset);
  const next = red << 16 | green << 8 | blue;
  return "#" + next.toString(16).padStart(6, "0");
}
const FONTS_LINK_HREF = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Cinzel:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Bodoni+Moda:ital,wght@0,400;0,700;1,400&family=Archivo+Black&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Space+Grotesk:wght@400;500;700&display=swap";
const BASE_STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1100px; height: 780px; background: transparent; }
  body { -webkit-font-smoothing: antialiased; }
  .cert { width: 1100px; height: 780px; position: relative; overflow: hidden; }
`;
const renderBrutalist = ({ design, data }) => {
  const accent = design.accentColor;
  const subtitle = design.subtitle ?? "";
  const description = design.descriptionOverride || data.courseDescription;
  const [signatoryOne, signatoryTwo] = design.signatories;
  const idDigits = data.certificateId.match(/\d+/)?.[0] ?? "00";
  const body = `
    <div class="cert t-brutalist">
      <div class="grid-bg"></div>
      <div class="header">
        <div>${escapeHtml(data.orgName)}</div>
        <div class="blk">${escapeHtml(data.certificateId)}</div>
      </div>
      <div class="title-block">
        <div class="num">&#8470;<span>${escapeHtml(idDigits)}</span></div>
      </div>
      <div class="meta-row">
        <div>
          <div class="k">Date</div>
          <div class="v">${escapeHtml(data.date)}</div>
        </div>
        <div>
          <div class="k">Award</div>
          <div class="v">${escapeHtml(data.courseName)}</div>
        </div>
        <div>
          <div class="k">Class</div>
          <div class="v">${escapeHtml(subtitle)}</div>
        </div>
      </div>
      <div class="recipient-block">
        <div class="lbl">Awarded To</div>
        <div class="recipient">${escapeHtml(data.recipientName)}</div>
        <div class="description">${escapeHtml(description)}</div>
      </div>
      <div class="stamp">Verified</div>
      <div class="footer">
        <div>
          <div class="lbl">${escapeHtml(signatoryOne.role)}</div>
          <div class="name">${escapeHtml(signatoryOne.name)}</div>
        </div>
        <div>
          <div class="lbl">${escapeHtml(signatoryTwo.role)}</div>
          <div class="name">${escapeHtml(signatoryTwo.name)}</div>
        </div>
      </div>
    </div>
  `;
  const styles = `
    .t-brutalist {
      background: #f0ede4;
      color: #000;
      font-family: 'Archivo Black', sans-serif;
      padding: 0;
    }
    .t-brutalist .grid-bg {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px);
      background-size: 40px 40px;
    }
    .t-brutalist .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 40px 50px 0;
      position: relative;
      z-index: 2;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }
    .t-brutalist .header .blk {
      background: ${accent};
      color: #fff;
      padding: 6px 10px;
    }
    .t-brutalist .title-block {
      padding: 40px 50px 0;
      position: relative;
      z-index: 2;
    }
    .t-brutalist .num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 120px;
      font-weight: 700;
      line-height: 0.85;
      color: ${accent};
      letter-spacing: -0.04em;
    }
    .t-brutalist .num span { color: #000; }
    .t-brutalist .meta-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      border-top: 4px solid ${accent};
      border-bottom: 2px solid #000;
      margin: 30px 50px 0;
      position: relative;
      z-index: 2;
    }
    .t-brutalist .meta-row > div {
      padding: 14px 18px;
      border-right: 2px solid #000;
      font-family: 'JetBrains Mono', monospace;
    }
    .t-brutalist .meta-row > div:last-child { border-right: none; }
    .t-brutalist .meta-row .k {
      font-size: 9px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 4px;
    }
    .t-brutalist .meta-row .v {
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .t-brutalist .recipient-block {
      padding: 40px 50px;
      position: relative;
      z-index: 2;
    }
    .t-brutalist .recipient-block .lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.22em;
      color: ${accent};
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .t-brutalist .recipient {
      font-size: 88px;
      line-height: 0.95;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      border-left: 6px solid ${accent};
      padding-left: 18px;
      margin-left: -24px;
    }
    .t-brutalist .description {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      margin-top: 20px;
      text-transform: none;
      max-width: 780px;
      color: #333;
      letter-spacing: 0.02em;
    }
    .t-brutalist .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-top: 2px solid #000;
      background: #fff;
    }
    .t-brutalist .footer > div {
      padding: 18px 50px;
      font-family: 'JetBrains Mono', monospace;
    }
    .t-brutalist .footer > div:first-child { border-right: 2px solid #000; }
    .t-brutalist .footer .lbl {
      font-size: 9px;
      letter-spacing: 0.22em;
      color: #666;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .t-brutalist .footer .name {
      font-family: 'Archivo Black', sans-serif;
      font-size: 22px;
      text-transform: uppercase;
      letter-spacing: -0.01em;
    }
    .t-brutalist .stamp {
      position: absolute;
      top: 50%;
      right: 50px;
      transform: translateY(-50%) rotate(-12deg);
      border: 3px solid ${accent};
      color: ${accent};
      padding: 10px 20px;
      font-family: 'Archivo Black', sans-serif;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      z-index: 3;
      background: rgba(255, 255, 255, 0.6);
    }
  `;
  return { body, styles };
};
const renderClassique = ({ design, data }) => {
  const accent = design.accentColor;
  const subtitle = design.subtitle ?? "";
  const description = design.descriptionOverride || data.courseDescription;
  const [signatoryOne, signatoryTwo] = design.signatories;
  const body = `
    <div class="cert t-classique">
      <div class="corner tl"></div>
      <div class="corner tr"></div>
      <div class="corner bl"></div>
      <div class="corner br"></div>
      <div class="top-tag">${escapeHtml(data.orgName)}</div>
      <div class="ornament">&#10086;</div>
      <div class="title">${escapeHtml(data.courseName)}</div>
      <div class="subtitle">${escapeHtml(subtitle)}</div>
      <div class="presented">&mdash; this is to certify that &mdash;</div>
      <div class="recipient">${escapeHtml(data.recipientName)}</div>
      <div class="description">${escapeHtml(description)}</div>
      <div class="footer">
        <div class="sig">
          <div class="name">${escapeHtml(signatoryOne.name)}</div>
          <div class="label">${escapeHtml(signatoryOne.role)}</div>
        </div>
        <div class="seal">
          <div class="star">&#9733;</div>
          <div class="yr">${getYear(data.date)}</div>
          <div class="lbl">${escapeHtml(data.certificateId)}</div>
        </div>
        <div class="sig">
          <div class="name">${escapeHtml(signatoryTwo.name)}</div>
          <div class="label">${escapeHtml(signatoryTwo.role)}</div>
        </div>
      </div>
    </div>
  `;
  const styles = `
    .t-classique {
      background: #faf6ec;
      color: #2a1810;
      padding: 55px;
      font-family: 'Cormorant Garamond', serif;
    }
    .t-classique::before {
      content: '';
      position: absolute;
      inset: 30px;
      border: 2px double ${accent};
      pointer-events: none;
    }
    .t-classique::after {
      content: '';
      position: absolute;
      inset: 42px;
      border: 1px solid ${accent};
      pointer-events: none;
    }
    .t-classique .corner {
      position: absolute;
      width: 80px;
      height: 80px;
      border: 1px solid ${accent};
      pointer-events: none;
    }
    .t-classique .corner.tl { top: 55px; left: 55px; border-right: none; border-bottom: none; }
    .t-classique .corner.tr { top: 55px; right: 55px; border-left: none; border-bottom: none; }
    .t-classique .corner.bl { bottom: 55px; left: 55px; border-right: none; border-top: none; }
    .t-classique .corner.br { bottom: 55px; right: 55px; border-left: none; border-top: none; }
    .t-classique .ornament {
      font-family: 'Cinzel', serif;
      text-align: center;
      font-size: 24px;
      color: ${accent};
      margin: 8px 0;
      letter-spacing: 0.5em;
    }
    .t-classique .top-tag {
      text-align: center;
      font-family: 'Cinzel', serif;
      font-size: 13px;
      letter-spacing: 0.6em;
      color: ${accent};
      margin-top: 60px;
      text-transform: uppercase;
    }
    .t-classique .title {
      text-align: center;
      font-family: 'Bodoni Moda', serif;
      font-size: 78px;
      font-weight: 400;
      font-style: italic;
      margin: 8px 0 4px;
      color: #2a1810;
    }
    .t-classique .subtitle {
      text-align: center;
      font-family: 'Cinzel', serif;
      font-size: 14px;
      letter-spacing: 0.45em;
      color: ${accent};
      margin-bottom: 36px;
      text-transform: uppercase;
    }
    .t-classique .presented {
      text-align: center;
      font-style: italic;
      font-size: 18px;
      color: #5a3a25;
      margin-bottom: 8px;
    }
    .t-classique .recipient {
      text-align: center;
      font-family: 'Bodoni Moda', serif;
      font-size: 64px;
      font-weight: 400;
      margin: 6px 120px 12px;
      border-bottom: 2px solid ${accent};
      padding-bottom: 14px;
      line-height: 1.05;
    }
    .t-classique .description {
      text-align: center;
      font-size: 18px;
      font-style: italic;
      color: #3a2515;
      margin: 20px 110px 0;
      line-height: 1.6;
    }
    .t-classique .footer {
      position: absolute;
      bottom: 90px;
      left: 55px;
      right: 55px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: end;
      gap: 40px;
    }
    .t-classique .sig {
      text-align: center;
      border-top: 1px solid ${accent};
      padding-top: 6px;
    }
    .t-classique .sig .name {
      font-family: 'Bodoni Moda', serif;
      font-size: 20px;
      font-style: italic;
    }
    .t-classique .sig .label {
      font-family: 'Cinzel', serif;
      font-size: 10px;
      letter-spacing: 0.3em;
      color: ${accent};
      text-transform: uppercase;
      margin-top: 2px;
    }
    .t-classique .seal {
      width: 120px;
      height: 120px;
      border: 2px solid ${accent};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: ${accent};
      background: radial-gradient(circle, #faf6ec 60%, ${accent}1a);
      position: relative;
    }
    .t-classique .seal::before {
      content: '';
      position: absolute;
      inset: 6px;
      border: 1px dashed ${accent};
      border-radius: 50%;
    }
    .t-classique .seal .star { font-size: 20px; }
    .t-classique .seal .yr {
      font-family: 'Cinzel', serif;
      font-size: 18px;
      font-weight: 600;
      margin-top: 2px;
    }
    .t-classique .seal .lbl {
      font-family: 'Cinzel', serif;
      font-size: 8px;
      letter-spacing: 0.2em;
      margin-top: 2px;
    }
  `;
  return { body, styles };
};
const renderMinimal = ({ design, data }) => {
  const accent = design.accentColor;
  const subtitle = design.subtitle ?? "";
  const description = design.descriptionOverride || data.courseDescription;
  const [signatoryOne, signatoryTwo] = design.signatories;
  const body = `
    <div class="cert t-minimal">
      <span class="accent-bar" aria-hidden="true"></span>
      <div class="top">
        <span>${escapeHtml(data.orgName)}</span>
        <span>${escapeHtml(data.certificateId)} &middot; ${escapeHtml(data.date)}</span>
      </div>
      <div class="body">
        <div class="small">&mdash; ${escapeHtml(subtitle)} &mdash;</div>
        <div class="title">${escapeHtml(data.courseName)}</div>
        <div class="recipient-row">
          <div class="num">${escapeHtml(data.certificateId)}</div>
          <div class="recipient">${escapeHtml(data.recipientName)}</div>
        </div>
        <div class="description">${escapeHtml(description)}</div>
      </div>
      <div class="footer">
        <div>
          <div class="k">${escapeHtml(signatoryOne.role)}</div>
          <div class="v">${escapeHtml(signatoryOne.name)}</div>
        </div>
        <div>
          <div class="k">${escapeHtml(signatoryTwo.role)}</div>
          <div class="v">${escapeHtml(signatoryTwo.name)}</div>
        </div>
        <div>
          <div class="k">Issued</div>
          <div class="v">${escapeHtml(data.date)}</div>
        </div>
        <div class="ref">
          <div class="k">Reference</div>
          <div class="v">${escapeHtml(data.certificateId)}</div>
        </div>
      </div>
    </div>
  `;
  const styles = `
    .t-minimal {
      background: #fff;
      color: #0a0a0a;
      padding: 80px 100px;
      font-family: 'Space Grotesk', sans-serif;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .t-minimal .accent-bar {
      position: absolute;
      top: 0;
      left: 0;
      width: 12px;
      height: 100%;
      background: ${accent};
    }
    .t-minimal .top {
      display: flex;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: #999;
      padding-bottom: 20px;
      border-bottom: 1px solid #0a0a0a;
    }
    .t-minimal .body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px 0;
    }
    .t-minimal .small {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: ${accent};
      margin-bottom: 22px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      align-self: flex-start;
    }
    .t-minimal .small::before {
      content: '';
      width: 28px;
      height: 2px;
      background: ${accent};
    }
    .t-minimal .small::after {
      content: '';
      width: 28px;
      height: 2px;
      background: ${accent};
    }
    .t-minimal .title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 68px;
      font-weight: 300;
      font-style: italic;
      line-height: 1;
      margin-bottom: 50px;
      letter-spacing: -0.01em;
    }
    .t-minimal .recipient-row {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 30px;
      align-items: end;
      border-bottom: 2px solid ${accent};
      padding-bottom: 14px;
      margin-bottom: 24px;
    }
    .t-minimal .recipient-row .num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: ${accent};
      padding-bottom: 14px;
      letter-spacing: 0.1em;
    }
    .t-minimal .recipient {
      font-family: 'Cormorant Garamond', serif;
      font-size: 88px;
      font-weight: 400;
      line-height: 0.95;
      letter-spacing: -0.02em;
    }
    .t-minimal .description {
      font-size: 16px;
      line-height: 1.6;
      color: #333;
      max-width: 700px;
      font-weight: 400;
    }
    .t-minimal .footer {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 30px;
      padding-top: 20px;
      border-top: 1px solid #0a0a0a;
      font-family: 'JetBrains Mono', monospace;
    }
    .t-minimal .footer .k {
      font-size: 9px;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: #999;
      margin-bottom: 4px;
    }
    .t-minimal .footer .v {
      font-family: 'Cormorant Garamond', serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.1;
    }
    .t-minimal .footer .ref .k { color: ${accent}; }
    .t-minimal .footer .ref .v { color: ${accent}; }
  `;
  return { body, styles };
};
const renderNoir = ({ design, data }) => {
  const accent = design.accentColor;
  const accentDeep = shadeColor(accent, -30);
  const subtitle = design.subtitle ?? "";
  const description = design.descriptionOverride || data.courseDescription;
  const [signatoryOne, signatoryTwo] = design.signatories;
  const body = `
    <div class="cert t-noir">
      <div class="top">
        <span>${escapeHtml(data.certificateId)}</span>
        <div class="line"></div>
        <span>${escapeHtml(data.orgName)}</span>
        <div class="line"></div>
        <span>${escapeHtml(data.date)}</span>
      </div>
      <div class="crest">&#10022; &#10022; &#10022;</div>
      <div class="title">${escapeHtml(data.courseName)}</div>
      <div class="title-line">
        <div class="l"></div>
        <span>${escapeHtml(subtitle)}</span>
        <div class="l"></div>
      </div>
      <div class="presented">presented to</div>
      <div class="recipient">${escapeHtml(data.recipientName)}</div>
      <div class="description">${escapeHtml(description)}</div>
      <div class="footer">
        <div class="sig">
          <div class="name">${escapeHtml(signatoryOne.name)}</div>
          <div class="label">${escapeHtml(signatoryOne.role)}</div>
        </div>
        <div class="medal">
          <div class="yr">${getYear(data.date)}</div>
          <div class="lbl">&#9733; AWARD &#9733;</div>
        </div>
        <div class="sig">
          <div class="name">${escapeHtml(signatoryTwo.name)}</div>
          <div class="label">${escapeHtml(signatoryTwo.role)}</div>
        </div>
      </div>
    </div>
  `;
  const styles = `
    .t-noir {
      background: #0e0e0e;
      color: #f5f1e8;
      padding: 55px;
      font-family: 'Cormorant Garamond', serif;
      background-image:
        radial-gradient(circle at 30% 20%, ${accent}14, transparent 50%),
        radial-gradient(circle at 70% 80%, ${accent}0c, transparent 50%);
    }
    .t-noir::before {
      content: '';
      position: absolute;
      inset: 30px;
      border: 1px solid ${accent}66;
      pointer-events: none;
    }
    .t-noir::after {
      content: '';
      position: absolute;
      inset: 36px;
      border: 1px solid ${accent}33;
      pointer-events: none;
    }
    .t-noir .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 40px;
      font-family: 'Cinzel', serif;
      font-size: 11px;
      letter-spacing: 0.4em;
      color: ${accent};
      text-transform: uppercase;
    }
    .t-noir .top .line {
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, transparent, ${accent}, transparent);
      margin: 0 20px;
    }
    .t-noir .crest {
      text-align: center;
      margin-top: 30px;
      font-family: 'Cinzel', serif;
      color: ${accent};
      font-size: 32px;
      letter-spacing: 0.3em;
    }
    .t-noir .title {
      text-align: center;
      font-family: 'Playfair Display', serif;
      font-size: 84px;
      font-weight: 400;
      font-style: italic;
      margin: 20px 0 4px;
      color: #f5f1e8;
      line-height: 1;
    }
    .t-noir .title-line {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 18px;
      margin-bottom: 36px;
    }
    .t-noir .title-line .l {
      width: 80px;
      height: 1px;
      background: ${accent};
    }
    .t-noir .title-line span {
      font-family: 'Cinzel', serif;
      font-size: 13px;
      letter-spacing: 0.5em;
      color: ${accent};
      text-transform: uppercase;
    }
    .t-noir .presented {
      text-align: center;
      font-style: italic;
      font-size: 18px;
      color: #c9b88c;
      margin-bottom: 6px;
    }
    .t-noir .recipient {
      text-align: center;
      font-family: 'Playfair Display', serif;
      font-size: 72px;
      font-weight: 400;
      color: ${accent};
      margin: 0 80px;
      padding-bottom: 16px;
      border-bottom: 1px solid ${accent}66;
      line-height: 1.05;
    }
    .t-noir .description {
      text-align: center;
      font-style: italic;
      font-size: 19px;
      margin: 24px 110px 0;
      color: #c9b88c;
      line-height: 1.6;
    }
    .t-noir .footer {
      position: absolute;
      bottom: 90px;
      left: 80px;
      right: 80px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: end;
      gap: 40px;
    }
    .t-noir .sig {
      text-align: center;
      border-top: 1px solid ${accent};
      padding-top: 6px;
    }
    .t-noir .sig .name {
      font-family: 'Playfair Display', serif;
      font-size: 20px;
      font-style: italic;
      color: #f5f1e8;
    }
    .t-noir .sig .label {
      font-family: 'Cinzel', serif;
      font-size: 10px;
      letter-spacing: 0.3em;
      color: ${accent};
      text-transform: uppercase;
      margin-top: 2px;
    }
    .t-noir .medal {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background: radial-gradient(circle, ${accent} 0%, ${accentDeep} 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #0e0e0e;
      box-shadow: 0 0 30px ${accent}4d;
      position: relative;
    }
    .t-noir .medal::before {
      content: '';
      position: absolute;
      inset: 6px;
      border: 1px solid #0e0e0e;
      border-radius: 50%;
    }
    .t-noir .medal .yr {
      font-family: 'Cinzel', serif;
      font-size: 20px;
      font-weight: 700;
    }
    .t-noir .medal .lbl {
      font-family: 'Cinzel', serif;
      font-size: 8px;
      letter-spacing: 0.2em;
    }
  `;
  return { body, styles };
};
const renderPoster = ({ design, data }) => {
  const accent = design.accentColor;
  const subtitle = design.subtitle ?? "";
  const description = design.descriptionOverride || data.courseDescription;
  const [signatoryOne, signatoryTwo] = design.signatories;
  const [firstTitleWord, ...restTitleWords] = data.courseName.split(" ");
  const titleEmphasis = restTitleWords.join(" ");
  const body = `
    <div class="cert t-poster">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="content">
        <div class="top">
          <span class="pill">${escapeHtml(data.orgName)}</span>
          <span>${escapeHtml(data.certificateId)} / ${escapeHtml(data.date)}</span>
        </div>
        <div class="title">${escapeHtml(firstTitleWord || "Award")} <em>${escapeHtml(titleEmphasis)}</em></div>
        <div class="of">${escapeHtml(subtitle)}</div>
        <div class="recipient-area">
          <div class="lbl">Awarded To</div>
          <div class="recipient">${escapeHtml(data.recipientName)}</div>
        </div>
        <div class="description">${escapeHtml(description)}</div>
        <div class="bottom">
          <div>
            <div class="k">${escapeHtml(signatoryOne.role)}</div>
            <div class="v">${escapeHtml(signatoryOne.name)}</div>
          </div>
          <div>
            <div class="k">${escapeHtml(signatoryTwo.role)}</div>
            <div class="v">${escapeHtml(signatoryTwo.name)}</div>
          </div>
          <div>
            <div class="k">Issued</div>
            <div class="v">${escapeHtml(data.date)}</div>
          </div>
        </div>
      </div>
      <div class="corner-num">${getYear(data.date)}</div>
    </div>
  `;
  const styles = `
    .t-poster {
      background: #fef2dc;
      color: #1a1a1a;
      padding: 0;
      font-family: 'Space Grotesk', sans-serif;
      overflow: hidden;
    }
    .t-poster .blob {
      position: absolute;
      width: 550px;
      height: 550px;
      border-radius: 50%;
      filter: blur(2px);
      opacity: 0.95;
    }
    .t-poster .blob-1 {
      background: ${accent};
      top: -180px;
      right: -120px;
    }
    .t-poster .blob-2 {
      background: #1e3a8a;
      bottom: -200px;
      left: -150px;
      width: 480px;
      height: 480px;
    }
    .t-poster .blob-3 {
      background: #fbbf24;
      top: 40%;
      left: 55%;
      width: 200px;
      height: 200px;
    }
    .t-poster .content {
      position: relative;
      z-index: 2;
      height: 100%;
      padding: 50px 55px;
      display: flex;
      flex-direction: column;
    }
    .t-poster .top {
      display: flex;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 30px;
    }
    .t-poster .top .pill {
      background: ${accent};
      color: #fef2dc;
      padding: 5px 12px;
      border-radius: 100px;
    }
    .t-poster .title {
      font-family: 'Playfair Display', serif;
      font-size: 140px;
      font-weight: 900;
      line-height: 0.85;
      letter-spacing: -0.04em;
      color: #1a1a1a;
    }
    .t-poster .title em {
      font-style: italic;
      font-weight: 400;
      color: ${accent};
    }
    .t-poster .of {
      font-family: 'Playfair Display', serif;
      font-size: 62px;
      font-style: italic;
      font-weight: 400;
      line-height: 1;
      margin-top: -4px;
      color: #1a1a1a;
    }
    .t-poster .recipient-area {
      margin-top: 40px;
      background: ${accent};
      color: #fef2dc;
      padding: 24px 30px;
      align-self: flex-start;
      max-width: 75%;
      transform: rotate(-1deg);
      box-shadow: 8px 8px 0 #1a1a1a;
    }
    .t-poster .recipient-area .lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.22em;
      color: #fef2dc;
      opacity: 0.8;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .t-poster .recipient {
      font-family: 'Playfair Display', serif;
      font-size: 54px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.02em;
    }
    .t-poster .description {
      font-size: 15px;
      line-height: 1.55;
      margin-top: 20px;
      max-width: 580px;
      color: #1a1a1a;
      font-weight: 500;
    }
    .t-poster .bottom {
      margin-top: auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 24px;
      border-top: 2px solid #1a1a1a;
      padding-top: 18px;
      font-family: 'JetBrains Mono', monospace;
    }
    .t-poster .bottom .k {
      font-size: 9px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 3px;
    }
    .t-poster .bottom .v {
      font-family: 'Playfair Display', serif;
      font-size: 22px;
      font-weight: 700;
      color: #1a1a1a;
    }
    .t-poster .corner-num {
      position: absolute;
      bottom: 36px;
      right: 50px;
      font-family: 'Playfair Display', serif;
      font-size: 80px;
      font-weight: 900;
      font-style: italic;
      color: ${accent};
      z-index: 3;
      line-height: 0.8;
    }
  `;
  return { body, styles };
};
const RENDERERS = {
  classique: renderClassique,
  brutalist: renderBrutalist,
  noir: renderNoir,
  poster: renderPoster,
  minimal: renderMinimal
};
function resolveTemplateId(value) {
  if (!value)
    return "classique";
  if (CERTIFICATE_TEMPLATE_IDS.includes(value)) {
    return value;
  }
  if (value in LEGACY_THEME_MAP) {
    return LEGACY_THEME_MAP[value];
  }
  return "classique";
}
function renderCertificate(design, data) {
  const templateId = resolveTemplateId(design.templateId);
  const renderer = RENDERERS[templateId];
  const { body, styles } = renderer({ design: { ...design, templateId }, data });
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1100,initial-scale=1.0">
  <title>Certificate</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="${FONTS_LINK_HREF}">
</head>
<body>
${body}
</body>
</html>`;
  const fullStyles = BASE_STYLES + "\n" + styles;
  return { html, styles: fullStyles };
}
function renderCertificateDocument(design, data) {
  const { html, styles } = renderCertificate(design, data);
  return html.replace("</head>", `<style>${styles}</style></head>`);
}
function Maximize($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.562.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M8 3H5a2 2 0 0 0-2 2v3" }],
      ["path", { "d": "M21 8V5a2 2 0 0 0-2-2h-3" }],
      ["path", { "d": "M3 16v3a2 2 0 0 0 2 2h3" }],
      ["path", { "d": "M16 21h3a2 2 0 0 0 2-2v-3" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "maximize" },
      /**
       * @component @name Maximize
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzIiAvPgogIDxwYXRoIGQ9Ik0yMSA4VjVhMiAyIDAgMCAwLTItMmgtMyIgLz4KICA8cGF0aCBkPSJNMyAxNnYzYTIgMiAwIDAgMCAyIDJoMyIgLz4KICA8cGF0aCBkPSJNMTYgMjFoM2EyIDIgMCAwIDAgMi0ydi0zIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/maximize
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Certificate_preview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      design,
      data,
      zoom = "fit",
      showControls = false,
      class: className,
      width = 1100,
      height = 780
    } = $$props;
    const MIN_SCALE = 0.18;
    const MAX_SCALE = 1.5;
    let manualScale = typeof zoom === "number" ? clamp(zoom) : null;
    let fitScale = 0.4;
    const srcdoc = renderCertificateDocument(design, data);
    const isFit = zoom === "fit" && manualScale == null;
    const scale = isFit ? fitScale : manualScale ?? clamp(typeof zoom === "number" ? zoom : 0.4);
    function clamp(value) {
      return Math.max(MIN_SCALE, Math.min(MAX_SCALE, value));
    }
    $$renderer2.push(`<div${attr_class(clsx(cn("ui:relative ui:flex ui:h-full ui:w-full ui:items-center ui:justify-center ui:overflow-hidden", className)))}><div class="ui:origin-center"${attr_style("", {
      width: `${stringify(width)}px`,
      height: `${stringify(height)}px`,
      transform: `scale(${stringify(scale)})`
    })}><iframe title="Certificate preview" sandbox="allow-same-origin" class="ui:h-full ui:w-full ui:rounded-sm ui:border-0 ui:shadow-[0_18px_40px_rgba(0,0,0,0.18),0_6px_12px_rgba(0,0,0,0.12)]"${attr("srcdoc", srcdoc)}${attr_style("", {
      width: `${stringify(width)}px`,
      height: `${stringify(height)}px`
    })}></iframe></div> `);
    if (showControls) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ui:absolute ui:bottom-3 ui:right-3 ui:flex ui:items-center ui:gap-1 ui:rounded-full ui:border ui:border-border ui:bg-card/95 ui:px-2 ui:py-1 ui:text-foreground ui:shadow-sm ui:backdrop-blur"><button type="button" class="ui:flex ui:size-7 ui:items-center ui:justify-center ui:rounded-full ui:transition-colors hover:ui:bg-muted" aria-label="Zoom out">`);
      Minus($$renderer2, { class: "ui:size-3.5" });
      $$renderer2.push(`<!----></button> <span class="ui:min-w-10 ui:text-center ui:text-[10px] ui:font-medium ui:tracking-wider">${escape_html(Math.round(scale * 100))}%</span> <button type="button" class="ui:flex ui:size-7 ui:items-center ui:justify-center ui:rounded-full ui:transition-colors hover:ui:bg-muted" aria-label="Zoom in">`);
      Plus($$renderer2, { class: "ui:size-3.5" });
      $$renderer2.push(`<!----></button> <button type="button" class="ui:flex ui:size-7 ui:items-center ui:justify-center ui:rounded-full ui:transition-colors hover:ui:bg-muted" aria-label="Fit to viewport">`);
      Maximize($$renderer2, { class: "ui:size-3.5" });
      $$renderer2.push(`<!----></button></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}

export { Certificate_preview as C, resolveTemplateId as r };
//# sourceMappingURL=certificate-preview-CUwZUs2K.js.map
