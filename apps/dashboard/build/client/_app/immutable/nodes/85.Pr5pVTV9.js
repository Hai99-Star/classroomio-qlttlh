import"../chunks/CWj6FrbW.js";import{o as hn,a as xn}from"../chunks/D0IxJWuM.js";import{p as an,f as c,i,g as n,j as U,r as o,b as a,c as en,e as J,k as _,t as R,d as $,s as pn,A as Tn,aa as In,a as on,u as bn,l as zn}from"../chunks/DMkybXYI.js";import{s as L}from"../chunks/B4Gb2Xkj.js";import{i as f}from"../chunks/BDnaBRn_.js";import{h as Dn}from"../chunks/ChhRsMFN.js";import{p as gn,b as En,a as Pn,s as An}from"../chunks/CbrIGZze.js";import{s as sn,c as Nn,a as Z,d as un}from"../chunks/CY39jyo7.js";import{e as K,i as Rn}from"../chunks/BCCWaYmt.js";import{B as Sn,T as Mn}from"../chunks/BnEUqkOx.js";import"../chunks/V4SXNKd-.js";import{a as _n,e as Cn}from"../chunks/IqKSOxrF.js";import{t as On}from"../chunks/CuT4tmgA.js";import{a as Ln,b as Bn}from"../chunks/qyDTe6iz.js";const Fn={classroomio:"'Lora', Georgia, 'Times New Roman', serif",graphite:"'IBM Plex Serif', Georgia, 'Times New Roman', serif",linen:"'Libre Baskerville', Georgia, 'Times New Roman', serif",spruce:"'Fraunces', Georgia, 'Times New Roman', serif"},Gn={classroomio:["DM Sans","Inter","Lora"],graphite:["IBM Plex Sans","IBM Plex Serif","Inter"],linen:["Source Sans 3","Libre Baskerville"],spruce:["Plus Jakarta Sans","Fraunces"]},Wn={"dm sans":"DM Sans",inter:"Inter",lora:"Lora","ibm plex sans":"IBM Plex Sans","ibm plex serif":"IBM Plex Serif","source sans 3":"Source Sans 3","source sans3":"Source Sans 3","libre baskerville":"Libre Baskerville","plus jakarta sans":"Plus Jakarta Sans",fraunces:"Fraunces",manrope:"Manrope","nunito sans":"Nunito Sans","open sans":"Open Sans","work sans":"Work Sans",outfit:"Outfit",figtree:"Figtree","playfair display":"Playfair Display","space grotesk":"Space Grotesk"},Un={"Libre Baskerville":"wght@400;700",Lora:"wght@400;600;700",Fraunces:"wght@400;600;700"},jn="wght@400;500;600;700";function Vn(t){return Fn[t]}function qn(t){const r=[];let e;const s=/'([^']+)'|"([^"]+)"/g;for(;(e=s.exec(t))!==null;){const I=(e[1]??e[2]??"").trim();I&&r.push(I)}return r}function Hn(t){const r=new Set;for(const e of qn(t)){const s=e.trim().toLowerCase(),I=Wn[s];I&&r.add(I)}return r}function Yn(t){const r=new Set(Gn[t.themePreset]);for(const e of Hn(t.typography.fontFamily))r.add(e);return[...r].sort((e,s)=>e.localeCompare(s))}function Xn(t){const r=Un[t]??jn;return`family=${encodeURIComponent(t)}:${r}`}function Jn(t){const r=Yn(t);return r.length===0?"":`https://fonts.googleapis.com/css2?${r.map(Xn).join("&")}&display=swap`}const Qn=`/*
 * Widget layouts v2 — scoped CSS for the public course widget.
 *
 * Every selector is namespaced under \`.cio-widget\` so styles can be safely
 * injected into a host page (via Shadow DOM in the embed bundle, or via
 * <svelte:head> in the dashboard preview iframe) without bleeding into other
 * UI on the page.
 */

.cio-widget,
.cio-widget * {
  box-sizing: border-box;
}

.cio-widget {
  --cio-color-bg-primary: var(--cio-bg, #ffffff);
  --cio-color-bg-secondary: var(--cio-highlight, #f8fafc);
  --cio-color-text-primary: var(--cio-text, #0f172a);
  --cio-color-text-secondary: rgba(15, 23, 42, 0.7);
  --cio-color-text-tertiary: rgba(15, 23, 42, 0.55);
  --cio-color-border-primary: color-mix(in srgb, var(--cio-border, rgba(15, 23, 42)) 100%, transparent);
  --cio-color-border-secondary: color-mix(in srgb, var(--cio-border, rgba(15, 23, 42)) 92%, transparent);
  --cio-color-border-tertiary: color-mix(in srgb, var(--cio-border, rgba(15, 23, 42)) 80%, transparent);
  --cio-color-primary: var(--cio-primary, #0f172a);
  --cio-color-badge-bg: var(--cio-badge, #e2e8f0);

  --cio-radius-sm: 6px;
  --cio-radius-md: 10px;
  --cio-radius-lg: var(--cio-radius, 14px);
  --cio-shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.04);

  font-family: var(--cio-font, 'DM Sans', Inter, ui-sans-serif, system-ui, sans-serif);
  font-size: calc(14px * var(--cio-font-scale, 1));
  color: var(--cio-color-text-primary);
  background: var(--cio-color-bg-primary);
  border-radius: var(--cio-radius-lg);
  padding: 16px;
  width: 100%;
  display: block;
  overflow: hidden;
}

.cio-widget.cio-widget--empty {
  color: var(--cio-color-text-tertiary);
  font-size: 13px;
  text-align: center;
}

.cio-widget a {
  color: inherit;
  text-decoration: none;
}

.cio-widget button {
  font: inherit;
  cursor: pointer;
}

/* ---------------------------------------------------------------- */
/* Shared atoms */
/* ---------------------------------------------------------------- */

.cio-type-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 20px;
  letter-spacing: 0.01em;
  white-space: nowrap;
}
.cio-type-live {
  background: #fef3c7;
  color: #92400e;
}
.cio-type-self {
  background: #ede9fe;
  color: #5b21b6;
}
.cio-type-compliance {
  background: #dcfce7;
  color: #166534;
}
.cio-type-default {
  background: var(--cio-color-badge-bg);
  color: var(--cio-color-text-secondary);
}

.cio-stars {
  display: inline-flex;
  gap: 1px;
  align-items: center;
}
.cio-star {
  font-size: 11px;
  color: #f59e0b;
  line-height: 1;
}
.cio-star.cio-star-empty {
  color: #d1d5db;
}
.cio-rating-val {
  font-size: 12px;
  font-weight: 500;
  color: var(--cio-color-text-secondary);
  margin-left: 4px;
}
.cio-rating-count {
  font-size: 11px;
  color: var(--cio-color-text-tertiary);
  margin-left: 2px;
}

.cio-pill {
  font-size: 10px;
  font-weight: 400;
  padding: 2px 8px;
  border-radius: 20px;
  border: 0.5px solid var(--cio-color-border-tertiary);
  color: var(--cio-color-text-secondary);
  background: transparent;
  white-space: nowrap;
}

.cio-thumb-fallback {
  width: 100%;
  height: 100%;
  display: block;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.85) 0%, rgba(56, 189, 248, 0.85) 100%);
}

.cio-img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.cio-empty {
  padding: 32px 16px;
  text-align: center;
  font-size: 13px;
  color: var(--cio-color-text-tertiary);
  border: 1px dashed var(--cio-color-border-tertiary);
  border-radius: var(--cio-radius-lg);
}

.cio-branding {
  display: block;
  margin-top: 16px;
  text-align: right;
  font-size: 11px;
  color: var(--cio-color-text-tertiary);
  opacity: 0.8;
  text-decoration: none;
}
.cio-branding:hover {
  opacity: 1;
  text-decoration: underline;
}
.cio-branding:visited {
  color: var(--cio-color-text-tertiary);
}

/* ---------------------------------------------------------------- */
/* 1. Card grid */
/* ---------------------------------------------------------------- */

.cio-cg-grid {
  display: grid;
  grid-template-columns: repeat(var(--cio-cg-cols, 3), minmax(0, 1fr));
  gap: 14px;
}
.cio-cg-card {
  background: var(--cio-color-bg-primary);
  border: 0.5px solid var(--cio-color-border-tertiary);
  border-radius: var(--cio-radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    border-color 0.15s,
    transform 0.15s;
}
.cio-cg-card:hover {
  border-color: var(--cio-color-border-primary);
  transform: translateY(-2px);
}
.cio-cg-img {
  height: 136px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  background: var(--cio-color-bg-secondary);
}
.cio-cg-img-art {
  position: absolute;
  inset: 0;
}
.cio-cg-body {
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}
.cio-cg-title {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--cio-color-text-primary);
  margin: 0;
}
.cio-cg-desc {
  font-size: 11px;
  color: var(--cio-color-text-secondary);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}
.cio-cg-tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.cio-cg-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 0.5px solid var(--cio-color-border-tertiary);
  margin-top: auto;
  gap: 8px;
}
.cio-cg-meta {
  font-size: 11px;
  color: var(--cio-color-text-tertiary);
}

/* ---------------------------------------------------------------- */
/* 2. Tag filter */
/* ---------------------------------------------------------------- */

.cio-tf-bar {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}
.cio-tf-btn {
  font-size: 11px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 20px;
  border: 0.5px solid var(--cio-color-border-secondary);
  background: var(--cio-color-bg-primary);
  color: var(--cio-color-text-secondary);
  transition: all 0.12s;
}
.cio-tf-btn:hover:not(.cio-on) {
  background: var(--cio-color-bg-secondary);
}
.cio-tf-btn.cio-on {
  background: var(--cio-color-primary);
  color: var(--cio-color-bg-primary);
  border-color: var(--cio-color-primary);
}
.cio-tf-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.cio-tf-row {
  display: flex;
  gap: 12px;
  padding: 12px;
  background: var(--cio-color-bg-primary);
  border: 0.5px solid var(--cio-color-border-tertiary);
  border-radius: var(--cio-radius-lg);
  align-items: center;
  transition: border-color 0.12s;
}
.cio-tf-row:hover {
  border-color: var(--cio-color-border-primary);
}
.cio-tf-thumb {
  width: 56px;
  height: 56px;
  border-radius: var(--cio-radius-md);
  overflow: hidden;
  flex-shrink: 0;
  background: var(--cio-color-bg-secondary);
}
.cio-tf-info {
  flex: 1;
  min-width: 0;
}
.cio-tf-title {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--cio-color-text-primary);
  margin: 0 0 4px;
}
.cio-tf-sub {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 5px;
}
.cio-tf-tags-row {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

/* ---------------------------------------------------------------- */
/* 3. Carousel */
/* ---------------------------------------------------------------- */

.cio-cr-wrap {
  position: relative;
  padding: 0 2px;
}
.cio-cr-outer {
  overflow: hidden;
}
.cio-cr-track {
  display: flex;
  gap: 12px;
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}
.cio-cr-card {
  background: var(--cio-color-bg-primary);
  border: 0.5px solid var(--cio-color-border-tertiary);
  border-radius: var(--cio-radius-lg);
  overflow: hidden;
  transition: border-color 0.15s;
  display: flex;
  flex-direction: column;
}
.cio-cr-card:hover {
  border-color: var(--cio-color-border-primary);
}
.cio-cr-img {
  height: 110px;
  position: relative;
  background: var(--cio-color-bg-secondary);
}
.cio-cr-body {
  padding: 11px 12px 13px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.cio-cr-title {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.35;
  color: var(--cio-color-text-primary);
  margin: 0;
}
.cio-cr-rating-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.cio-cr-tags-row {
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
}
.cio-cr-meta {
  font-size: 10px;
  color: var(--cio-color-text-tertiary);
}
.cio-cr-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}
.cio-cr-dots {
  display: flex;
  gap: 5px;
}
.cio-cr-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--cio-color-border-secondary);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.15s;
}
.cio-cr-dot.cio-on {
  background: var(--cio-color-primary);
}
.cio-cr-arrows {
  display: flex;
  gap: 6px;
}
/* \`button { font: inherit }\` above — scope controls so icon sizing applies */
.cio-widget button.cio-cr-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--cio-color-bg-primary);
  border: 0.5px solid var(--cio-color-border-secondary);
  color: var(--cio-color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: background 0.12s;
}
.cio-widget button.cio-cr-btn .cio-cr-btn-icon {
  width: 18px;
  height: 18px;
  display: block;
  flex-shrink: 0;
}
.cio-widget button.cio-cr-btn:hover {
  background: var(--cio-color-bg-secondary);
}
.cio-widget button.cio-cr-btn:disabled {
  opacity: 0.3;
  cursor: default;
}

/* ---------------------------------------------------------------- */
/* 4. Primary course (hero) */
/* ---------------------------------------------------------------- */

.cio-ph-hero {
  background: var(--cio-color-bg-primary);
  color: var(--cio-color-text-primary);
  border: 1px solid var(--cio-color-border-secondary);
  border-radius: var(--cio-radius-lg);
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 160px;
  gap: 20px;
  align-items: center;
  margin-bottom: 12px;
  text-decoration: none;
  transition: border-color 0.15s;
}
.cio-ph-hero:hover {
  border-color: var(--cio-color-border-primary);
}
.cio-ph-eyebrow {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cio-color-text-tertiary);
  margin-bottom: 6px;
}
.cio-ph-title {
  font-family: var(--cio-font-serif, 'Lora', Georgia, serif);
  font-size: 20px;
  font-weight: 600;
  color: var(--cio-color-text-primary);
  line-height: 1.3;
  margin: 0 0 8px;
}
.cio-ph-desc {
  font-size: 12px;
  color: var(--cio-color-text-secondary);
  line-height: 1.6;
  margin: 0 0 12px;
}
.cio-ph-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}
.cio-ph-rating-val {
  font-size: 13px;
  font-weight: 500;
  color: var(--cio-color-text-primary);
}
.cio-ph-star {
  font-size: 11px;
  color: #f59e0b;
  letter-spacing: 1px;
}
.cio-ph-count {
  font-size: 11px;
  color: var(--cio-color-text-tertiary);
}
.cio-ph-sep {
  font-size: 11px;
  color: var(--cio-color-border-secondary);
}
.cio-ph-meta {
  font-size: 11px;
  color: var(--cio-color-text-secondary);
}
.cio-ph-badges {
  display: flex;
  gap: 7px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.cio-ph-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--cio-color-primary);
  color: var(--cio-color-bg-primary);
  font-size: 12px;
  font-weight: 500;
  padding: 9px 18px;
  border-radius: var(--cio-radius-md);
  border: none;
  transition: opacity 0.15s;
}
.cio-ph-btn:hover {
  opacity: 0.88;
}
.cio-ph-img {
  width: 160px;
  height: 110px;
  border-radius: var(--cio-radius-md);
  overflow: hidden;
  flex-shrink: 0;
  background: var(--cio-color-bg-secondary);
}
.cio-ph-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}
.cio-ph-mini {
  background: var(--cio-color-bg-primary);
  border: 0.5px solid var(--cio-color-border-tertiary);
  border-radius: var(--cio-radius-lg);
  padding: 12px;
  transition: border-color 0.15s;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.cio-ph-mini:hover {
  border-color: var(--cio-color-border-primary);
}
.cio-ph-mini-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--cio-color-text-primary);
  line-height: 1.3;
  margin: 0;
}
.cio-ph-mini-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* ---------------------------------------------------------------- */
/* 5. Compact list */
/* ---------------------------------------------------------------- */

.cio-cl-list {
  display: block;
}
.cio-cl-item {
  display: flex;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 0.5px solid var(--cio-color-border-tertiary);
  align-items: flex-start;
  transition: opacity 0.12s;
}
.cio-cl-item:last-child {
  border-bottom: none;
}
.cio-cl-item:hover {
  opacity: 0.78;
}
.cio-cl-list.cio-density-compact .cio-cl-item {
  padding: 8px 0;
  gap: 10px;
}
.cio-cl-thumb {
  width: 60px;
  height: 48px;
  border-radius: var(--cio-radius-md);
  overflow: hidden;
  flex-shrink: 0;
  background: var(--cio-color-bg-secondary);
}
.cio-cl-info {
  flex: 1;
  min-width: 0;
}
.cio-cl-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
}
.cio-cl-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--cio-color-text-primary);
  line-height: 1.35;
  margin: 0;
}
.cio-cl-mid {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
  flex-wrap: wrap;
}
.cio-cl-bottom {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.cio-cl-lessons {
  font-size: 11px;
  color: var(--cio-color-text-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  padding-top: 1px;
}

/* ---------------------------------------------------------------- */
/* 6. Editorial spotlight */
/* ---------------------------------------------------------------- */

.cio-ed-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 12px;
}
@media (max-width: 640px) {
  .cio-ed-grid {
    grid-template-columns: 1fr;
  }
}
.cio-ed-main {
  background: var(--cio-color-bg-primary);
  border: 0.5px solid var(--cio-color-border-tertiary);
  border-radius: var(--cio-radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.cio-ed-img-wrap {
  height: 190px;
  background: var(--cio-color-bg-secondary);
  transition: opacity 0.15s;
}
.cio-ed-main:hover .cio-ed-img-wrap {
  opacity: 0.9;
}
.cio-ed-body {
  padding: 14px;
}
.cio-ed-top-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}
.cio-ed-title {
  font-family: var(--cio-font-serif, 'Lora', Georgia, serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--cio-color-text-primary);
  line-height: 1.35;
  margin: 0 0 6px;
}
.cio-ed-title.cio-title-sans {
  font-family: inherit;
}
.cio-ed-desc {
  font-size: 12px;
  color: var(--cio-color-text-secondary);
  line-height: 1.6;
  margin: 0 0 10px;
}
.cio-ed-foot {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.cio-ed-stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.cio-ed-mini {
  background: var(--cio-color-bg-primary);
  border: 0.5px solid var(--cio-color-border-tertiary);
  border-radius: var(--cio-radius-lg);
  display: flex;
  gap: 10px;
  padding: 10px;
  align-items: flex-start;
  transition: border-color 0.15s;
}
.cio-ed-mini:hover {
  border-color: var(--cio-color-border-primary);
}
.cio-ed-mini-img {
  width: 52px;
  height: 44px;
  border-radius: var(--cio-radius-md);
  overflow: hidden;
  flex-shrink: 0;
  background: var(--cio-color-bg-secondary);
}
.cio-ed-mini-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--cio-color-text-primary);
  line-height: 1.3;
  margin: 0 0 3px;
}
.cio-ed-mini-meta {
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
}

/* ---------------------------------------------------------------- */
/* 7. Category shelf */
/* ---------------------------------------------------------------- */

.cio-shelf-tabs {
  display: flex;
  gap: 0;
  margin-bottom: 0;
  border-bottom: 0.5px solid var(--cio-color-border-tertiary);
  overflow-x: auto;
  scrollbar-width: none;
}
.cio-shelf-tabs::-webkit-scrollbar {
  display: none;
}
.cio-shelf-tab {
  font-size: 12px;
  font-weight: 500;
  padding: 9px 16px;
  color: var(--cio-color-text-tertiary);
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  white-space: nowrap;
  text-transform: capitalize;
  transition: all 0.15s;
}
.cio-shelf-tab.cio-on {
  color: var(--cio-color-text-primary);
  border-bottom-color: var(--cio-color-text-primary);
}
.cio-shelf-tab:hover:not(.cio-on) {
  color: var(--cio-color-text-secondary);
}
.cio-shelf-pane {
  padding-top: 14px;
}
.cio-shelf-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}
.cio-shelf-card {
  background: var(--cio-color-bg-primary);
  border: 0.5px solid var(--cio-color-border-tertiary);
  border-radius: var(--cio-radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.15s;
}
.cio-shelf-card:hover {
  border-color: var(--cio-color-border-primary);
}
.cio-shelf-img {
  height: 100px;
  background: var(--cio-color-bg-secondary);
}
.cio-shelf-body {
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.cio-shelf-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--cio-color-text-primary);
  line-height: 1.3;
  margin: 0;
}
.cio-shelf-meta-row {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.cio-shelf-tags-row {
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
}

/* ---------------------------------------------------------------- */
/* Responsive collapses */
/* ---------------------------------------------------------------- */

@media (max-width: 720px) {
  .cio-cg-grid {
    grid-template-columns: repeat(min(var(--cio-cg-cols, 3), 2), minmax(0, 1fr));
  }
  .cio-tf-grid {
    grid-template-columns: 1fr;
  }
  .cio-shelf-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .cio-ph-hero {
    grid-template-columns: 1fr;
  }
  .cio-ph-img {
    width: 100%;
    height: 160px;
  }
  .cio-ph-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .cio-cg-grid {
    grid-template-columns: 1fr;
  }
  .cio-shelf-grid {
    grid-template-columns: 1fr;
  }
  .cio-ph-grid {
    grid-template-columns: 1fr;
  }
}

.cio-widget :focus-visible {
  outline: 2px solid var(--cio-color-primary);
  outline-offset: 2px;
  border-radius: var(--cio-radius-sm);
}
`,Kn={LIVE_CLASS:{label:"Live class",className:"cio-type-badge cio-type-live"},SELF_PACED:{label:"Self paced",className:"cio-type-badge cio-type-self"},COMPLIANCE:{label:"Compliance",className:"cio-type-badge cio-type-compliance"}};function Zn(t){return t?Kn[t]??{label:t,className:"cio-type-badge cio-type-default"}:null}function $n(t){if(t==null)return{filled:0,empty:5};const r=Math.round(t),e=Math.max(0,Math.min(5,r));return{filled:e,empty:5-e}}function nr(t){const r=t.content.shadowSize==="lg"?28:t.content.shadowSize==="md"?18:t.content.shadowSize==="sm"?8:0;return[`--cio-primary:${t.colors.primaryColor}`,`--cio-bg:${t.colors.backgroundColor}`,`--cio-text:${t.colors.textColor}`,`--cio-border:${t.colors.borderColor}`,`--cio-badge:${t.colors.badgeColor}`,`--cio-highlight:${t.colors.highlightColor}`,`--cio-radius:${t.content.borderRadius}px`,`--cio-font:${t.typography.fontFamily}`,`--cio-font-serif:${Vn(t.themePreset)}`,`--cio-font-scale:${t.typography.fontSizeScale}`,`--cio-shadow:0 8px ${r}px ${t.content.shadowColor}`].join(";")}function wn(t,r=160){if(!t.description)return"";const e=t.description.replace(/\s+/g," ").trim();return e.length<=r?e:`${e.slice(0,r-1).trim()}…`}function kn(t){const r=[];return t.lessonCount&&r.push(`${t.lessonCount} lessons`),t.exerciseCount&&r.push(`${t.exerciseCount} exercises`),r.join(" · ")}function rr(t){var s;const r=(s=t.customDomain)==null?void 0:s.trim();if(r){try{if(r.includes("://"))return new URL(r).hostname}catch{}return r.replace(/^\/+/,"").split("/")[0]||t.siteName}const e=t.siteName.trim();return e?`${e}.${Mn}`:Sn}function or(t){const r=rr(t.organization),e=new URLSearchParams({utm_source:"classroomio_widget",utm_medium:"embed",utm_campaign:"powered_by",utm_content:t.widgetId,utm_term:r});return`https://${Sn}/?${e.toString()}`}var ar=c('<span class="cio-star">★</span>'),er=c('<span class="cio-star cio-star-empty">★</span>'),tr=c('<span class="cio-rating-count"> </span>'),ir=c('<!> <!> <span class="cio-rating-val"> </span> <!>',1),cr=c('<span class="cio-stars"><!></span>');function dn(t,r){an(r,!0);let e=gn(r,"rating",3,null),s=gn(r,"showCount",3,!0);const I=U(()=>$n(e())),u=U(()=>e()!=null);var w=cr(),M=i(w);{var G=T=>{var x=ir(),P=J(x);K(P,19,()=>Array(n(I).filled),(h,E)=>`f-${E}`,(h,E)=>{var A=ar();a(h,A)});var l=_(P,2);K(l,19,()=>Array(n(I).empty),(h,E)=>`e-${E}`,(h,E)=>{var A=er();a(h,A)});var d=_(l,2),m=i(d,!0);o(d);var N=_(d,2);{var z=h=>{var E=tr(),A=i(E);o(E),R(()=>L(A,`(${r.ratingCount??""})`)),a(h,E)};f(N,h=>{s()&&r.ratingCount&&h(z)})}R(h=>L(m,h),[()=>{var h;return(h=e())==null?void 0:h.toFixed(1)}]),a(T,x)};f(M,T=>{n(u)&&T(G)})}o(w),a(t,w),en()}var sr=c("<span> </span>");function ln(t,r){an(r,!0);const e=U(()=>Zn(r.courseType));var s=$(),I=J(s);{var u=w=>{var M=sr(),G=i(M,!0);o(M),R(()=>{sn(M,1,Nn(n(e).className)),L(G,n(e).label)}),a(w,M)};f(I,w=>{n(e)&&w(u)})}a(t,s),en()}var lr=c('<img loading="lazy"/>'),dr=c('<span aria-hidden="true"></span>');function vn(t,r){let e=gn(r,"src",3,null),s=gn(r,"alt",3,""),I=gn(r,"className",3,"");var u=$(),w=J(u);{var M=T=>{var x=lr();R(()=>{Z(x,"src",e()),Z(x,"alt",s()),sn(x,1,`cio-img-cover ${I()}`)}),a(T,x)},G=T=>{var x=dr();R(()=>sn(x,1,`cio-thumb-fallback ${I()}`)),a(T,x)};f(w,T=>{e()?T(M):T(G,!1)})}a(t,u)}var vr=c('<div class="cio-empty">No courses to display.</div>'),pr=c('<span style="position:relative;z-index:1"><!></span>'),gr=c('<div class="cio-cg-img"><!> <!></div>'),fr=c('<p class="cio-cg-desc"> </p>'),ur=c('<span class="cio-pill"> </span>'),mr=c('<span class="cio-pill"> </span>'),yr=c('<div class="cio-cg-tags"><!> <!></div>'),hr=c("<span></span>"),xr=c('<a class="cio-cg-card" target="_blank" rel="noreferrer noopener"><!> <div class="cio-cg-body"><h3 class="cio-cg-title"> </h3> <!> <!> <div class="cio-cg-footer"><!> <span class="cio-cg-meta"> </span></div></div></a>'),br=c('<div class="cio-cg-grid"></div>');function _r(t,r){an(r,!0);const e=U(()=>r.payload.design.layoutOptions.cardGrid),s=U(()=>n(e).showRating),I=U(()=>r.payload.courses.slice(0,n(e).maxCount)),u=U(()=>`--cio-cg-cols:${n(e).columns}`);var w=$(),M=J(w);{var G=x=>{var P=vr();a(x,P)},T=x=>{var P=br();K(P,21,()=>n(I),l=>l.id,(l,d)=>{var m=xr(),N=i(m);{var z=g=>{var p=gr(),v=i(p);vn(v,{get src(){return n(d).imageUrl},get alt(){return n(d).title},className:"cio-cg-img-art"});var b=_(v,2);{var F=C=>{var S=pr(),D=i(S);ln(D,{get courseType(){return n(d).courseType}}),o(S),a(C,S)};f(b,C=>{r.payload.design.content.showCourseTypeBadge&&C(F)})}o(p),a(g,p)};f(N,g=>{r.payload.design.content.showCourseImage&&g(z)})}var h=_(N,2),E=i(h),A=i(E,!0);o(E);var O=_(E,2);{var W=g=>{var p=fr(),v=i(p,!0);o(p),R(b=>L(v,b),[()=>wn(n(d))]),a(g,p)};f(O,g=>{r.payload.design.content.showDescriptionExcerpt&&n(d).description&&g(W)})}var B=_(O,2);{var j=g=>{var p=yr(),v=i(p);K(v,17,()=>n(d).tags.slice(0,3),C=>C.id,(C,S)=>{var D=ur(),q=i(D,!0);o(D),R(()=>L(q,n(S).name)),a(C,D)});var b=_(v,2);{var F=C=>{var S=mr(),D=i(S);o(S),R(()=>L(D,`+${n(d).tags.length-3}`)),a(C,S)};f(b,C=>{n(d).tags.length>3&&C(F)})}o(p),a(g,p)};f(B,g=>{n(d).tags.length>0&&g(j)})}var V=_(B,2),Y=i(V);{var H=g=>{dn(g,{get rating(){return n(d).rating},get ratingCount(){return n(d).ratingCount}})},Q=g=>{var p=hr();a(g,p)};f(Y,g=>{n(s)?g(H):g(Q,!1)})}var k=_(Y,2),y=i(k,!0);o(k),o(V),o(h),o(m),R(g=>{Z(m,"href",n(d).url),Z(m,"aria-label",n(d).title),L(A,n(d).title),L(y,g)},[()=>kn(n(d))]),a(l,m)}),o(P),R(()=>un(P,n(u))),a(x,P)};f(M,x=>{n(I).length===0?x(G):x(T,!1)})}a(t,w),en()}var wr=c('<button type="button">All</button>'),kr=c('<button type="button"> </button>'),Cr=c('<div class="cio-tf-bar" role="tablist"><!> <!></div>'),Tr=c('<div class="cio-empty">No courses match this filter.</div>'),Ir=c('<div class="cio-tf-thumb"><!></div>'),Er=c('<span class="cio-pill"> </span>'),Sr=c('<div class="cio-tf-tags-row"></div>'),zr=c('<a class="cio-tf-row" target="_blank" rel="noreferrer noopener"><!> <div class="cio-tf-info"><h3 class="cio-tf-title"> </h3> <div class="cio-tf-sub"><!> <!></div> <!></div></a>'),Dr=c('<div class="cio-tf-grid"></div>'),Pr=c("<!> <!>",1);function Ar(t,r){an(r,!0);const e=U(()=>r.payload.design.layoutOptions.tagFilter),s=U(()=>r.payload.courses.slice(0,n(e).maxCount)),I=U(()=>r.payload.tagPool);let u=pn(Tn(In(()=>r.payload.design.layoutOptions.tagFilter.defaultTagId??null)));const w=U(()=>n(u)===null?n(s):n(s).filter(d=>d.tags.some(m=>m.id===n(u))));var M=Pr(),G=J(M);{var T=d=>{var m=Cr(),N=i(m);{var z=E=>{var A=wr();let O;A.__click=()=>on(u,null),R(()=>O=sn(A,1,"cio-tf-btn",null,O,{"cio-on":n(u)===null})),a(E,A)};f(N,E=>{n(e).showAllOption&&E(z)})}var h=_(N,2);K(h,17,()=>n(I),E=>E.id,(E,A)=>{var O=kr();let W;O.__click=()=>on(u,n(u)===n(A).id?null:n(A).id,!0);var B=i(O,!0);o(O),R(()=>{W=sn(O,1,"cio-tf-btn",null,W,{"cio-on":n(u)===n(A).id}),L(B,n(A).name)}),a(E,O)}),o(m),a(d,m)};f(G,d=>{n(I).length>0&&d(T)})}var x=_(G,2);{var P=d=>{var m=Tr();a(d,m)},l=d=>{var m=Dr();K(m,21,()=>n(w),N=>N.id,(N,z)=>{var h=zr(),E=i(h);{var A=y=>{var g=Ir(),p=i(g);vn(p,{get src(){return n(z).imageUrl},get alt(){return n(z).title}}),o(g),a(y,g)};f(E,y=>{r.payload.design.content.showCourseImage&&y(A)})}var O=_(E,2),W=i(O),B=i(W,!0);o(W);var j=_(W,2),V=i(j);{var Y=y=>{ln(y,{get courseType(){return n(z).courseType}})};f(V,y=>{r.payload.design.content.showCourseTypeBadge&&y(Y)})}var H=_(V,2);dn(H,{get rating(){return n(z).rating},get ratingCount(){return n(z).ratingCount},showCount:!1}),o(j);var Q=_(j,2);{var k=y=>{var g=Sr();K(g,21,()=>n(z).tags.slice(0,3),p=>p.id,(p,v)=>{var b=Er(),F=i(b,!0);o(b),R(()=>L(F,n(v).name)),a(p,b)}),o(g),a(y,g)};f(Q,y=>{n(z).tags.length>0&&y(k)})}o(O),o(h),R(()=>{Z(h,"href",n(z).url),Z(h,"aria-label",n(z).title),L(B,n(z).title)}),a(N,h)}),o(m),a(d,m)};f(x,d=>{n(w).length===0?d(P):d(l,!1)})}a(t,M),en()}_n(["click"]);var Nr=c('<div class="cio-empty">No courses to display.</div>'),Rr=c('<div class="cio-cr-img"><!></div>'),Mr=c('<div class="cio-cr-tags-row"><!></div>'),Or=c('<a class="cio-cr-card" target="_blank" rel="noreferrer noopener"><!> <div class="cio-cr-body"><h3 class="cio-cr-title"> </h3> <div class="cio-cr-rating-row"><!></div> <!> <div class="cio-cr-meta"> </div></div></a>'),Lr=c('<button type="button"></button>'),Br=c('<div class="cio-cr-dots"></div>'),Fr=c("<span></span>"),Gr=c('<div class="cio-cr-arrows"><button type="button" class="cio-cr-btn" aria-label="Previous"><svg class="cio-cr-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button> <button type="button" class="cio-cr-btn" aria-label="Next"><svg class="cio-cr-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button></div>'),Wr=c("<span></span>"),Ur=c('<div class="cio-cr-nav"><!> <!></div>'),jr=c('<div class="cio-cr-wrap" role="region" aria-roledescription="carousel"><div class="cio-cr-outer"><div class="cio-cr-track"></div></div> <!></div>');function Vr(t,r){an(r,!0);const e=U(()=>r.payload.design.layoutOptions.carousel),s=U(()=>r.payload.courses.slice(0,n(e).maxCount)),I=U(()=>Number(n(e).visibleCards)),u=U(()=>Math.max(n(s).length-n(I),0));let w=pn(0),M=null;const G=U(()=>`calc((100% - ${(n(I)-1)*12}px) / ${n(I)})`),T=U(()=>n(s).length>0?`calc(-${n(w)} * (100% + 12px) / ${n(I)})`:"0");function x(h){if(n(u)===0){on(w,0);return}n(e).loop?on(w,(h%(n(u)+1)+(n(u)+1))%(n(u)+1)):on(w,Math.max(0,Math.min(h,n(u))),!0)}function P(){!n(e).autoPlay||n(u)===0||(M=setInterval(()=>x(n(w)+1),Math.max(n(e).autoPlayIntervalMs,3e3)))}function l(){M&&(clearInterval(M),M=null)}hn(()=>{P()}),xn(()=>{l()}),bn(()=>{n(w)>n(u)&&on(w,n(u),!0)});var d=$(),m=J(d);{var N=h=>{var E=Nr();a(h,E)},z=h=>{var E=jr(),A=i(E),O=i(A);K(O,21,()=>n(s),j=>j.id,(j,V)=>{var Y=Or(),H=i(Y);{var Q=D=>{var q=Rr(),X=i(q);vn(X,{get src(){return n(V).imageUrl},get alt(){return n(V).title}}),o(q),a(D,q)};f(H,D=>{r.payload.design.content.showCourseImage&&D(Q)})}var k=_(H,2),y=i(k),g=i(y,!0);o(y);var p=_(y,2),v=i(p);dn(v,{get rating(){return n(V).rating},get ratingCount(){return n(V).ratingCount},showCount:!1}),o(p);var b=_(p,2);{var F=D=>{var q=Mr(),X=i(q);ln(X,{get courseType(){return n(V).courseType}}),o(q),a(D,q)};f(b,D=>{r.payload.design.content.showCourseTypeBadge&&D(F)})}var C=_(b,2),S=i(C,!0);o(C),o(k),o(Y),R(D=>{Z(Y,"href",n(V).url),un(Y,`flex:0 0 ${n(G)}`),L(g,n(V).title),L(S,D)},[()=>kn(n(V))]),a(j,Y)}),o(O),o(A);var W=_(A,2);{var B=j=>{var V=Ur(),Y=i(V);{var H=p=>{var v=Br();K(v,21,()=>Array(n(u)+1),Rn,(b,F,C)=>{var S=Lr();let D;Z(S,"aria-label",`Go to slide ${C+1}`),S.__click=()=>x(C),R(()=>D=sn(S,1,"cio-cr-dot",null,D,{"cio-on":C===n(w)})),a(b,S)}),o(v),a(p,v)},Q=p=>{var v=Fr();a(p,v)};f(Y,p=>{n(e).showDots?p(H):p(Q,!1)})}var k=_(Y,2);{var y=p=>{var v=Gr(),b=i(v);b.__click=()=>x(n(w)-1);var F=_(b,2);F.__click=()=>x(n(w)+1),o(v),R(()=>{b.disabled=!n(e).loop&&n(w)===0,F.disabled=!n(e).loop&&n(w)===n(u)}),a(p,v)},g=p=>{var v=Wr();a(p,v)};f(k,p=>{n(e).showArrows?p(y):p(g,!1)})}o(V),a(j,V)};f(W,j=>{n(u)>0&&(n(e).showDots||n(e).showArrows)&&j(B)})}o(E),R(()=>un(O,`transform: translateX(${n(T)})`)),Cn("mouseenter",E,l),Cn("mouseleave",E,P),a(h,E)};f(m,h=>{n(s).length===0?h(N):h(z,!1)})}a(t,d),en()}_n(["click"]);var qr=c('<div class="cio-empty">Pick a featured course to display.</div>'),Hr=c('<p class="cio-ph-desc"> </p>'),Yr=c('<span class="cio-ph-count"> </span>'),Xr=c('<span class="cio-ph-rating-val"> </span> <span class="cio-ph-star">★★★★★</span> <!> <span class="cio-ph-sep">·</span>',1),Jr=c('<span class="cio-pill"> </span>'),Qr=c('<div class="cio-ph-badges"><!> <!></div>'),Kr=c('<div class="cio-ph-img"><!></div>'),Zr=c('<a class="cio-ph-mini" target="_blank" rel="noreferrer noopener"><h3 class="cio-ph-mini-title"> </h3> <div class="cio-ph-mini-meta"><!> <!></div></a>'),$r=c('<div class="cio-ph-grid"></div>'),no=c('<a class="cio-ph-hero" target="_blank" rel="noreferrer noopener"><div><div class="cio-ph-eyebrow"> </div> <h2 class="cio-ph-title"> </h2> <!> <div class="cio-ph-row"><!> <span class="cio-ph-meta"> </span></div> <!> <span class="cio-ph-btn"> </span></div> <!></a> <!>',1);function ro(t,r){an(r,!0);const e=U(()=>r.payload.design.layoutOptions.primaryCourse),s=U(()=>r.payload.courses[0]??null),I=U(()=>r.payload.courses.slice(1,1+n(e).secondaryMaxCount));var u=$(),w=J(u);{var M=T=>{var x=qr();a(T,x)},G=T=>{var x=no(),P=J(x),l=i(P),d=i(l),m=i(d,!0);o(d);var N=_(d,2),z=i(N,!0);o(N);var h=_(N,2);{var E=v=>{var b=Hr(),F=i(b,!0);o(b),R(C=>L(F,C),[()=>wn(n(s),220)]),a(v,b)};f(h,v=>{r.payload.design.content.showDescriptionExcerpt&&n(s).description&&v(E)})}var A=_(h,2),O=i(A);{var W=v=>{var b=Xr(),F=J(b),C=i(F,!0);o(F);var S=_(F,4);{var D=q=>{var X=Yr(),nn=i(X);o(X),R(()=>L(nn,`(${n(s).ratingCount??""} reviews)`)),a(q,X)};f(S,q=>{n(s).ratingCount&&q(D)})}zn(2),R(q=>L(C,q),[()=>n(s).rating.toFixed(1)]),a(v,b)};f(O,v=>{n(s).rating!=null&&v(W)})}var B=_(O,2),j=i(B,!0);o(B),o(A);var V=_(A,2);{var Y=v=>{var b=Qr(),F=i(b);{var C=D=>{ln(D,{get courseType(){return n(s).courseType}})};f(F,D=>{r.payload.design.content.showCourseTypeBadge&&D(C)})}var S=_(F,2);K(S,17,()=>n(s).tags.slice(0,2),D=>D.id,(D,q)=>{var X=Jr(),nn=i(X,!0);o(X),R(()=>L(nn,n(q).name)),a(D,X)}),o(b),a(v,b)};f(V,v=>{(r.payload.design.content.showCourseTypeBadge||n(s).tags.length>0)&&v(Y)})}var H=_(V,2),Q=i(H);o(H),o(l);var k=_(l,2);{var y=v=>{var b=Kr(),F=i(b);vn(F,{get src(){return n(s).imageUrl},get alt(){return n(s).title}}),o(b),a(v,b)};f(k,v=>{r.payload.design.content.showCourseImage&&v(y)})}o(P);var g=_(P,2);{var p=v=>{var b=$r();K(b,21,()=>n(I),F=>F.id,(F,C)=>{var S=Zr(),D=i(S),q=i(D,!0);o(D);var X=_(D,2),nn=i(X);{var tn=cn=>{ln(cn,{get courseType(){return n(C).courseType}})};f(nn,cn=>{r.payload.design.content.showCourseTypeBadge&&cn(tn)})}var rn=_(nn,2);dn(rn,{get rating(){return n(C).rating},get ratingCount(){return n(C).ratingCount},showCount:!1}),o(X),o(S),R(()=>{Z(S,"href",n(C).url),L(q,n(C).title)}),a(F,S)}),o(b),a(v,b)};f(g,v=>{n(I).length>0&&v(p)})}R(v=>{Z(P,"href",n(s).url),L(m,n(e).eyebrowLabel),L(z,n(s).title),L(j,v),L(Q,`${n(e).ctaLabel??""} →`)},[()=>kn(n(s))]),a(T,x)};f(w,T=>{n(s)?T(G,!1):T(M)})}a(t,u),en()}var oo=c('<div class="cio-empty">No courses to display.</div>'),ao=c('<div class="cio-cl-thumb"><!></div>'),eo=c('<span class="cio-cl-lessons"> </span>'),to=c('<span class="cio-pill"> </span>'),io=c('<div class="cio-cl-bottom"></div>'),co=c('<a class="cio-cl-item" target="_blank" rel="noreferrer noopener"><!> <div class="cio-cl-info"><div class="cio-cl-top"><span class="cio-cl-title"> </span> <!></div> <div class="cio-cl-mid"><!> <!></div> <!></div></a>'),so=c("<div></div>");function lo(t,r){an(r,!0);const e=U(()=>r.payload.design.layoutOptions.compactList),s=U(()=>r.payload.courses.slice(0,n(e).maxCount));var I=$(),u=J(I);{var w=G=>{var T=oo();a(G,T)},M=G=>{var T=so();let x;K(T,21,()=>n(s),P=>P.id,(P,l)=>{var d=co(),m=i(d);{var N=k=>{var y=ao(),g=i(y);vn(g,{get src(){return n(l).imageUrl},get alt(){return n(l).title}}),o(y),a(k,y)};f(m,k=>{n(e).showThumbnail&&r.payload.design.content.showCourseImage&&k(N)})}var z=_(m,2),h=i(z),E=i(h),A=i(E,!0);o(E);var O=_(E,2);{var W=k=>{var y=eo(),g=i(y);o(y),R(()=>L(g,`${n(l).lessonCount??""} lessons`)),a(k,y)};f(O,k=>{r.payload.design.content.showLessonsCount&&k(W)})}o(h);var B=_(h,2),j=i(B);{var V=k=>{ln(k,{get courseType(){return n(l).courseType}})};f(j,k=>{r.payload.design.content.showCourseTypeBadge&&k(V)})}var Y=_(j,2);dn(Y,{get rating(){return n(l).rating},get ratingCount(){return n(l).ratingCount}}),o(B);var H=_(B,2);{var Q=k=>{var y=io();K(y,21,()=>n(l).tags.slice(0,3),g=>g.id,(g,p)=>{var v=to(),b=i(v,!0);o(v),R(()=>L(b,n(p).name)),a(g,v)}),o(y),a(k,y)};f(H,k=>{n(e).showTags&&n(l).tags.length>0&&k(Q)})}o(z),o(d),R(()=>{Z(d,"href",n(l).url),Z(d,"aria-label",n(l).title),L(A,n(l).title)}),a(P,d)}),o(T),R(()=>x=sn(T,1,"cio-cl-list",null,x,{"cio-density-compact":n(e).density==="compact"})),a(G,T)};f(u,G=>{n(s).length===0?G(w):G(M,!1)})}a(t,I),en()}var vo=c('<div class="cio-empty">Pick a main course to display.</div>'),po=c('<div class="cio-ed-img-wrap"><!></div>'),go=c('<span class="cio-pill"> </span>'),fo=c('<div class="cio-ed-top-meta"><!> <!></div>'),uo=c('<p class="cio-ed-desc"> </p>'),mo=c('<span class="cio-pill"> </span>'),yo=c('<div style="display:flex;gap:4px;flex-wrap:wrap"></div>'),ho=c('<div class="cio-ed-mini-img"><!></div>'),xo=c('<a class="cio-ed-mini" target="_blank" rel="noreferrer noopener"><!> <div><h3 class="cio-ed-mini-title"> </h3> <div class="cio-ed-mini-meta"><!> <!></div></div></a>'),bo=c('<div class="cio-ed-stack"></div>'),_o=c('<div class="cio-ed-grid"><a class="cio-ed-main" target="_blank" rel="noreferrer noopener"><!> <div class="cio-ed-body"><!> <h2> </h2> <!> <div class="cio-ed-foot"><!> <!></div></div></a> <!></div>');function wo(t,r){an(r,!0);const e=U(()=>r.payload.design.layoutOptions.editorialSpotlight),s=U(()=>r.payload.courses[0]??null),I=U(()=>r.payload.courses.slice(1,1+n(e).secondaryMaxCount));var u=$(),w=J(u);{var M=T=>{var x=vo();a(T,x)},G=T=>{var x=_o(),P=i(x),l=i(P);{var d=k=>{var y=po(),g=i(y);vn(g,{get src(){return n(s).imageUrl},get alt(){return n(s).title}}),o(y),a(k,y)};f(l,k=>{r.payload.design.content.showCourseImage&&k(d)})}var m=_(l,2),N=i(m);{var z=k=>{var y=fo(),g=i(y);{var p=b=>{ln(b,{get courseType(){return n(s).courseType}})};f(g,b=>{r.payload.design.content.showCourseTypeBadge&&b(p)})}var v=_(g,2);K(v,17,()=>n(s).tags.slice(0,1),b=>b.id,(b,F)=>{var C=go(),S=i(C,!0);o(C),R(()=>L(S,n(F).name)),a(b,C)}),o(y),a(k,y)};f(N,k=>{(r.payload.design.content.showCourseTypeBadge||n(s).tags.length>0)&&k(z)})}var h=_(N,2);let E;var A=i(h,!0);o(h);var O=_(h,2);{var W=k=>{var y=uo(),g=i(y,!0);o(y),R(p=>L(g,p),[()=>wn(n(s),200)]),a(k,y)};f(O,k=>{r.payload.design.content.showDescriptionExcerpt&&n(s).description&&k(W)})}var B=_(O,2),j=i(B);dn(j,{get rating(){return n(s).rating},get ratingCount(){return n(s).ratingCount}});var V=_(j,2);{var Y=k=>{var y=yo();K(y,21,()=>n(s).tags.slice(0,3),g=>g.id,(g,p)=>{var v=mo(),b=i(v,!0);o(v),R(()=>L(b,n(p).name)),a(g,v)}),o(y),a(k,y)};f(V,k=>{n(s).tags.length>0&&k(Y)})}o(B),o(m),o(P);var H=_(P,2);{var Q=k=>{var y=bo();K(y,21,()=>n(I),g=>g.id,(g,p)=>{var v=xo(),b=i(v);{var F=rn=>{var cn=ho(),mn=i(cn);vn(mn,{get src(){return n(p).imageUrl},get alt(){return n(p).title}}),o(cn),a(rn,cn)};f(b,rn=>{r.payload.design.content.showCourseImage&&rn(F)})}var C=_(b,2),S=i(C),D=i(S,!0);o(S);var q=_(S,2),X=i(q);{var nn=rn=>{ln(rn,{get courseType(){return n(p).courseType}})};f(X,rn=>{r.payload.design.content.showCourseTypeBadge&&rn(nn)})}var tn=_(X,2);dn(tn,{get rating(){return n(p).rating},get ratingCount(){return n(p).ratingCount},showCount:!1}),o(q),o(C),o(v),R(()=>{Z(v,"href",n(p).url),L(D,n(p).title)}),a(g,v)}),o(y),a(k,y)};f(H,k=>{n(I).length>0&&k(Q)})}o(x),R(()=>{Z(P,"href",n(s).url),Z(P,"aria-label",n(s).title),E=sn(h,1,"cio-ed-title",null,E,{"cio-title-sans":n(e).titleStyle==="sans"}),L(A,n(s).title)}),a(T,x)};f(w,T=>{n(s)?T(G,!1):T(M)})}a(t,u),en()}var ko=c('<div class="cio-empty">Add at least one category tag to display this layout.</div>'),Co=c('<button type="button"> </button>'),To=c('<div class="cio-empty">No courses in this category yet.</div>'),Io=c('<div class="cio-shelf-img"><!></div>'),Eo=c('<span class="cio-pill"> </span>'),So=c('<div class="cio-shelf-tags-row"></div>'),zo=c('<a class="cio-shelf-card" target="_blank" rel="noreferrer noopener"><!> <div class="cio-shelf-body"><h3 class="cio-shelf-title"> </h3> <div class="cio-shelf-meta-row"><!> <!></div> <!></div></a>'),Do=c('<div class="cio-shelf-grid"></div>'),Po=c('<div class="cio-shelf-tabs" role="tablist"></div> <div class="cio-shelf-pane"><!></div>',1);function Ao(t,r){an(r,!0);const e=U(()=>r.payload.design.layoutOptions.categoryShelf),s=U(()=>new Map(r.payload.courses.map(l=>[l.id,l]))),I=U(()=>r.payload.categories),u=U(()=>n(e).showAllTab?[{id:"all",label:"All courses",courseIds:r.payload.courses.map(l=>l.id)},...n(I).map(l=>({id:l.tagId,label:l.name,courseIds:l.courseIds}))]:n(I).map(l=>({id:l.tagId,label:l.name,courseIds:l.courseIds})));let w=pn(Tn(In(()=>{var m;const l=r.payload.design.layoutOptions.categoryShelf,d=r.payload.categories;return l.defaultCategoryTagId??(l.showAllTab?"all":((m=d[0])==null?void 0:m.tagId)??"")})));const M=U(()=>{const l=n(u).find(d=>d.id===n(w))??n(u)[0];return l?l.courseIds.map(d=>n(s).get(d)).filter(d=>d!==void 0).slice(0,n(e).maxPerCategory):[]});bn(()=>{n(u).length>0&&!n(u).some(l=>l.id===n(w))&&on(w,n(u)[0].id,!0)});var G=$(),T=J(G);{var x=l=>{var d=ko();a(l,d)},P=l=>{var d=Po(),m=J(d);K(m,21,()=>n(u),A=>A.id,(A,O)=>{var W=Co();let B;W.__click=()=>on(w,n(O).id,!0);var j=i(W,!0);o(W),R(()=>{B=sn(W,1,"cio-shelf-tab",null,B,{"cio-on":n(O).id===n(w)}),L(j,n(O).label)}),a(A,W)}),o(m);var N=_(m,2),z=i(N);{var h=A=>{var O=To();a(A,O)},E=A=>{var O=Do();K(O,21,()=>n(M),W=>W.id,(W,B)=>{var j=zo(),V=i(j);{var Y=C=>{var S=Io(),D=i(S);vn(D,{get src(){return n(B).imageUrl},get alt(){return n(B).title}}),o(S),a(C,S)};f(V,C=>{r.payload.design.content.showCourseImage&&C(Y)})}var H=_(V,2),Q=i(H),k=i(Q,!0);o(Q);var y=_(Q,2),g=i(y);{var p=C=>{ln(C,{get courseType(){return n(B).courseType}})};f(g,C=>{r.payload.design.content.showCourseTypeBadge&&C(p)})}var v=_(g,2);dn(v,{get rating(){return n(B).rating},get ratingCount(){return n(B).ratingCount}}),o(y);var b=_(y,2);{var F=C=>{var S=So();K(S,21,()=>n(B).tags.slice(0,2),D=>D.id,(D,q)=>{var X=Eo(),nn=i(X,!0);o(X),R(()=>L(nn,n(q).name)),a(D,X)}),o(S),a(C,S)};f(b,C=>{n(B).tags.length>0&&C(F)})}o(H),o(j),R(()=>{Z(j,"href",n(B).url),L(k,n(B).title)}),a(W,j)}),o(O),a(A,O)};f(z,A=>{n(M).length===0?A(h):A(E,!1)})}o(N),a(l,d)};f(T,l=>{n(u).length===0?l(x):l(P,!1)})}a(t,G),en()}_n(["click"]);const fn="data-cio-widget-font-preconnect";function No(t){const r=t.ownerDocument;if(!t.querySelector(`link[${fn}="googleapis"]`)){const e=r.createElement("link");e.rel="preconnect",e.href="https://fonts.googleapis.com",e.setAttribute(fn,"googleapis"),t.appendChild(e)}if(!t.querySelector(`link[${fn}="gstatic"]`)){const e=r.createElement("link");e.rel="preconnect",e.href="https://fonts.gstatic.com",e.setAttribute("crossorigin",""),e.setAttribute(fn,"gstatic"),t.appendChild(e)}}function Ro(t,r){for(const e of t.querySelectorAll('link[rel="stylesheet"]'))if(e.getAttribute("href")===r)return!0;return!1}function Mo(t,r){var u;const e=(u=t.ownerDocument)==null?void 0:u.head;if(!e)return;No(e);const s=Jn(r);if(!s||Ro(e,s))return;const I=t.ownerDocument.createElement("link");I.rel="stylesheet",I.href=s,e.appendChild(I)}var Oo=c('<div class="cio-widget cio-widget--empty">No widget payload provided.</div>'),Lo=c('<a class="cio-branding" target="_blank" rel="noopener noreferrer"> </a>'),Bo=c('<div class="cio-widget"><!> <!></div>');function Fo(t,r){an(r,!0);let e=null;const s=U(()=>r.payload?nr(r.payload.design):""),I=U(()=>r.payload?or(r.payload):"");bn(()=>{!r.payload||!e||Mo(e,r.payload.design)});var u=$(),w=J(u);{var M=T=>{var x=Oo();a(T,x)},G=T=>{var x=Bo(),P=i(x);{var l=z=>{_r(z,{get payload(){return r.payload}})},d=z=>{var h=$(),E=J(h);{var A=W=>{Ar(W,{get payload(){return r.payload}})},O=W=>{var B=$(),j=J(B);{var V=H=>{Vr(H,{get payload(){return r.payload}})},Y=H=>{var Q=$(),k=J(Q);{var y=p=>{ro(p,{get payload(){return r.payload}})},g=p=>{var v=$(),b=J(v);{var F=S=>{lo(S,{get payload(){return r.payload}})},C=S=>{var D=$(),q=J(D);{var X=tn=>{wo(tn,{get payload(){return r.payload}})},nn=tn=>{var rn=$(),cn=J(rn);{var mn=yn=>{Ao(yn,{get payload(){return r.payload}})};f(cn,yn=>{r.payload.layoutType==="category_shelf"&&yn(mn)},!0)}a(tn,rn)};f(q,tn=>{r.payload.layoutType==="editorial_spotlight"?tn(X):tn(nn,!1)},!0)}a(S,D)};f(b,S=>{r.payload.layoutType==="compact_list"?S(F):S(C,!1)},!0)}a(p,v)};f(k,p=>{r.payload.layoutType==="primary_course"?p(y):p(g,!1)},!0)}a(H,Q)};f(j,H=>{r.payload.layoutType==="carousel"?H(V):H(Y,!1)},!0)}a(W,B)};f(E,W=>{r.payload.layoutType==="tag_filter"?W(A):W(O,!1)},!0)}a(z,h)};f(P,z=>{r.payload.layoutType==="card_grid"?z(l):z(d,!1)})}var m=_(P,2);{var N=z=>{var h=Lo(),E=i(h,!0);o(h),R(()=>{Z(h,"href",n(I)),L(E,r.payload.labels.poweredByLabel)}),a(z,h)};f(m,z=>{r.payload.design.branding.showPoweredBy&&z(N)})}o(x),En(x,z=>e=z,()=>e),R(()=>{un(x,n(s)),Z(x,"data-cio-layout",r.payload.layoutType)}),a(T,x)};f(w,T=>{r.payload?T(G,!1):T(M)})}a(t,u),en()}var Go=c('<div class="ui:text-muted-foreground rounded-2xl border border-dashed p-8 text-sm"> </div>');function Wo(t,r){an(r,!0);const e=()=>An(On,"$t",s),[s,I]=Pn();let u=gn(r,"payload",3,null),w=null;hn(()=>{w=document.createElement("style"),w.setAttribute("data-cio-widget-preview",""),w.textContent=Qn,document.head.appendChild(w)}),xn(()=>{w!=null&&w.parentNode&&w.parentNode.removeChild(w)});var M=$(),G=J(M);{var T=P=>{var l=Go(),d=i(l,!0);o(l),R(m=>L(d,m),[()=>e()("widgets.preview.empty")]),a(P,l)},x=P=>{Fo(P,{get payload(){return u()}})};f(G,P=>{u()?P(x,!1):P(T)})}a(t,M),en(),I()}var Uo=c(`<style>body {
      margin: 0;
      padding: 0;
      background: transparent;
      overflow: hidden;
    }</style>`),jo=c('<div class="p-4 text-sm text-red-600"> </div>'),Vo=c("<div><!></div>");function ta(t,r){an(r,!0);let e=pn(null),s=pn(""),I=pn(null),u=null;const w=crypto.randomUUID();function M(m){!window.parent||window.parent===window||window.parent.postMessage(m,"*")}function G(m){if(!Ln(m.origin)||!Bn(m.data))return;const N=m.data;if(N.type==="WIDGET_PREVIEW_PING"){M({type:"WIDGET_PREVIEW_READY",iframeId:w,timestamp:Date.now()});return}if(N.type==="WIDGET_PREVIEW_RENDER")try{on(e,N.payload,!0),on(s,""),requestAnimationFrame(()=>{M({type:"WIDGET_PREVIEW_RENDERED",requestId:N.requestId,timestamp:Date.now()})})}catch(z){on(s,z instanceof Error?z.message:"Preview render failed",!0),M({type:"WIDGET_PREVIEW_ERROR",requestId:N.requestId,error:n(s),timestamp:Date.now()})}}function T(){n(I)&&(u=new ResizeObserver(m=>{for(const N of m)M({type:"WIDGET_PREVIEW_RESIZE",height:Math.ceil(N.contentRect.height)})}),u.observe(n(I)))}hn(()=>{window.addEventListener("message",G),T(),M({type:"WIDGET_PREVIEW_READY",iframeId:w,timestamp:Date.now()})}),xn(()=>{window.removeEventListener("message",G),u==null||u.disconnect()});var x=Vo();Dn("p37dan",m=>{var N=Uo();a(m,N)});var P=i(x);{var l=m=>{var N=jo(),z=i(N,!0);o(N),R(()=>L(z,n(s))),a(m,N)},d=m=>{Wo(m,{get payload(){return n(e)}})};f(P,m=>{n(s)?m(l):m(d,!1)})}o(x),En(x,m=>on(I,m),()=>n(I)),a(t,x),en()}export{ta as component};
