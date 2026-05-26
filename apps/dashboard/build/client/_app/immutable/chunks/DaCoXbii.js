var k=s=>{throw TypeError(s)};var S=(s,e,t)=>e.has(s)||k("Cannot "+t);var p=(s,e,t)=>(S(s,e,"read from private field"),t?t.call(s):e.get(s)),f=(s,e,t)=>e.has(s)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);import"./CWj6FrbW.js";import{f as W,i as H,r as I,t as b,b as O,s as w,g as M,a as x,p as y,d as A,e as C,h as N,n as R,c as q}from"./DMkybXYI.js";import{e as _}from"./IqKSOxrF.js";import{s as z,c as E,a as v}from"./CY39jyo7.js";import{p as h,c as j,r as B}from"./CbrIGZze.js";/* empty css        */import{I as L}from"./C5yHnGVg.js";var P=W('<div aria-label="message-square-more" role="img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" class="svelte-kpi0la"></path><path class="dot dot1 svelte-kpi0la" d="M8 10h.01"></path><path class="dot dot2 svelte-kpi0la" d="M12 10h.01"></path><path class="dot dot3 svelte-kpi0la" d="M16 10h.01"></path></svg></div>');function X(s,e){let t=h(e,"color",3,"currentColor"),r=h(e,"size",3,24),o=h(e,"strokeWidth",3,2),a=h(e,"isHovered",7,!1),i=h(e,"class",3,"");function l(){a(!0)}function u(){a(!1)}var n=P(),c=H(n);let g;I(n),b(()=>{z(n,1,E(i()),"svelte-kpi0la"),v(c,"width",r()),v(c,"height",r()),v(c,"stroke",t()),v(c,"stroke-width",o()),g=z(c,0,"message-square-more-icon svelte-kpi0la",null,g,{animate:a()})}),_("mouseenter",n,l),_("mouseleave",n,u),O(s,n)}var d,m;class V{constructor(){f(this,d,w(!1));f(this,m,w("org"))}get isOpen(){return M(p(this,d))}set isOpen(e){x(p(this,d),e,!0)}get scope(){return M(p(this,m))}set scope(e){x(p(this,m),e,!0)}open(e="org"){this.scope=e,this.isOpen=!0}close(){this.isOpen=!1}toggle(e="org"){this.scope=e,this.isOpen=!this.isOpen}}d=new WeakMap,m=new WeakMap;const Y=new V;function Z(s,e,t,r=!1){if(t)try{return new RegExp(t).test(s)}catch(u){console.warn("Invalid regex pattern in isActive:",t,u)}const o=s==="/"?"/":s.replace(/\/$/,""),a=e==="/"?"/":e.replace(/\/$/,"");if(r)return o===a;if(o===a)return!0;const i=o+"/",l=a+"/";return i.startsWith(l)}function $(s,e){y(e,!0);/**
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
 */let t=B(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]];L(s,j({name:"rocket"},()=>t,{get iconNode(){return r},children:(o,a)=>{var i=A(),l=C(i);N(l,()=>e.children??R),O(o,i)},$$slots:{default:!0}})),q()}export{X as C,$ as R,Z as i,Y as s};
