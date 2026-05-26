import"./CWj6FrbW.js";import{p as u,d as m,e as f,h,n as y,b as I,c as g}from"./DMkybXYI.js";import{c as D,r as T}from"./CbrIGZze.js";import{I as B}from"./C5yHnGVg.js";import{g as _,a as A,U as M,c as S,q as E,b as v}from"./DS5xbPT_.js";import"./DCOUcLu6.js";import"./CYab5dl5.js";import"./6w9gDVZk.js";import"./DrGc9HY7.js";import"./BfDspkL2.js";import"./BJu5rqLT.js";import"./DLCNeJZp.js";import"./D0iwhpLH.js";import"./CBz_8aID.js";import"./DIo-OXiv.js";import{e as l}from"./W4o6_jY0.js";function R(t,s){u(s,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
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
 */let n=T(s,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"M12 17h.01"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]];B(t,D({name:"file-question-mark"},()=>n,{get iconNode(){return i},children:(a,e)=>{var r=m(),o=f(r);h(o,()=>s.children??y),I(a,r)},$$slots:{default:!0}})),g()}function Q(t){if(t.length===0)return t;const n=t.filter(e=>e.order==null||e.order===0).length>1,i=e=>typeof e=="number"?e:typeof e=="string"&&parseInt(e,10)||0;return n?[...t].sort((e,r)=>i(e.id)-i(r.id)).map((e,r)=>({...e,order:r+1})):[...t].sort((e,r)=>{const o=e.order??0,d=r.order??0;return o!==d?o-d:i(e.id)-i(r.id)})}function O(t,s){let n=[];const i=Array.isArray(t.sections)?t.sections.map(e=>({id:e.id,title:e.title,description:e.description??null,order:e.order,colorTheme:e.colorTheme,afterBehavior:e.afterBehavior})).sort((e,r)=>e.order-r.order):[],a=[...Array.isArray(t.questions)?t.questions:[]];if(a.length>0){const e=a.map(r=>{const o=_(A(r));return{...r,exerciseSectionId:r.exerciseSectionId??null,questionTypeId:o.id,questionType:o}});if(i.length>0){const r=e.filter(o=>!o.deletedAt&&!o.exerciseSectionId);if(r.length>0){const o=crypto.randomUUID(),d=i.reduce((p,c)=>Math.max(p,c.order),-1)+1;i.push({id:o,title:M,description:null,order:d,colorTheme:"blue",afterBehavior:{action:"continue"},isDirty:!0});for(const p of r)p.exerciseSectionId=o,p.isDirty=!0}}n=Q(e)}S(),E.set({title:t.title,description:t.description,dueBy:t.dueBy,isTitleDirty:!1,isDescriptionDirty:!1,isDueByDirty:!1,questions:n,sections:i,sectionDisplayMode:t.sectionDisplayMode??"one_question",totalSubmissions:0,allowMultipleAttempts:!!t.allowMultipleAttempts,slug:t.slug??""}),v.update(e=>({...e,exerciseId:s}))}async function X(t,s){return await l.get(t,s),l.exercise?(O(l.exercise,s),l.exercise):null}export{R as F,O as h,X as r};
