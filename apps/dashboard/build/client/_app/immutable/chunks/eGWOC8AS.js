import"./CWj6FrbW.js";/* empty css        */import{E as l}from"./Cr8dJKul.js";import{L as d}from"./BKyaaeVi.js";import{C as n}from"./DIo-OXiv.js";import{p as f,d as u,e as m,h,n as g,b as y,c as E}from"./DMkybXYI.js";import{c as N,r as T}from"./CbrIGZze.js";import{I as $}from"./C5yHnGVg.js";function C(s,t){f(t,!0);/**
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
 */let o=T(t,["$$slots","$$events","$$legacy"]);const e=[["path",{d:"M16 5H3"}],["path",{d:"M16 12H3"}],["path",{d:"M16 19H3"}],["path",{d:"M21 5h.01"}],["path",{d:"M21 12h.01"}],["path",{d:"M21 19h.01"}]];$(s,N({name:"table-of-contents"},()=>o,{get iconNode(){return e},children:(i,b)=>{var c=u(),a=m(c);h(a,()=>t.children??g),y(i,c)},$$slots:{default:!0}})),E()}const P={[n.Section]:{label:"Section",icon:C},[n.Lesson]:{label:"Lesson",icon:d},[n.Exercise]:{label:"Exercise",icon:l}},_={grouped:!1,sections:[],items:[]};function A(s,t){return t.type===n.Lesson?`/courses/${s}/lessons/${t.id}`:t.type===n.Exercise?`/courses/${s}/exercises/${t.id}`:t.type===n.Section?`/courses/${s}/lessons#section-${t.id}`:""}function p(s){return(s==null?void 0:s.content)??_}const r=[n.Lesson,n.Exercise];function Y(s){const t=p(s);return(t.grouped?t.sections.flatMap(e=>e.items):t.items).filter(e=>r.includes(e.type))}function B(s){const t=p(s);if(!t.grouped)return t.items.filter(e=>r.includes(e.type)).map(e=>({id:e.id,title:e.title,type:e.type}));const o=[];for(const e of t.sections){e.id!=="ungrouped"&&e.title&&o.push({id:e.id,title:e.title,type:n.Section});for(const i of e.items)r.includes(i.type)&&o.push({id:i.id,title:i.title,type:i.type})}return o}export{P as C,C as T,Y as a,A as b,B as c,p as g};
