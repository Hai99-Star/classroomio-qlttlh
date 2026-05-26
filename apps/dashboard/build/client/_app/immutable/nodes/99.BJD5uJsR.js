import"../chunks/CWj6FrbW.js";import{p as l,d as g,e as f,h as $,b as m,c as d,n as x,m as y,g as r,j as p,l as v}from"../chunks/DMkybXYI.js";import{p as _}from"../chunks/D1NL88P0.js";import{B as P}from"../chunks/DQ9kk-83.js";import{E as k}from"../chunks/gaotG1ff.js";import{c as w,r as b}from"../chunks/CbrIGZze.js";import{I as B}from"../chunks/C5yHnGVg.js";function S(a,e){l(e,!0);/**
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
 */let s=b(e,["$$slots","$$events","$$legacy"]);const t=[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];B(a,w({name:"search-x"},()=>s,{get iconNode(){return t},children:(n,i)=>{var o=g(),c=f(o);$(c,()=>e.children??x),m(n,o)},$$slots:{default:!0}})),d()}function C(a,e){l(e,!0);let s=p(()=>new URLSearchParams(_.url.search)),t=p(()=>r(s).get("type")==="org");function n(){window.location.href=r(t)?"https://classroomio.com":"/"}{let i=p(()=>r(t)?"Organization doesn't exist!":"Page not found");k(a,{get title(){return r(i)},description:"The page you are looking for doesn't exist or has been moved. Please go back to the homepage.",get icon(){return S},variant:"page",layout:"full-page",showLogo:!0,children:(o,c)=>{P(o,{onclick:n,children:(u,E)=>{v();var h=y("Back to Safety");m(u,h)},$$slots:{default:!0}})},$$slots:{default:!0}})}d()}export{C as component};
