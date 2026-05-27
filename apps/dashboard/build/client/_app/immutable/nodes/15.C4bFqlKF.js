import"../chunks/CWj6FrbW.js";import{o as Z}from"../chunks/D0IxJWuM.js";import{p as F,d as u,e as d,h as $,n as aa,b as r,c as R,at as ta,a as ea,s as ra,g as n,as as oa,j as p,f as q,i as w,r as C,k as T,l as M,m as W,t as sa}from"../chunks/DMkybXYI.js";import{s as na}from"../chunks/B4Gb2Xkj.js";import{i as I}from"../chunks/BDnaBRn_.js";import{c as ia}from"../chunks/CGCUeNHI.js";import{h as la}from"../chunks/ChhRsMFN.js";import{c as D,r as ma,a as da,s as j}from"../chunks/CbrIGZze.js";import{r as ca}from"../chunks/CC6QRhjR.js";import{a as f}from"../chunks/B_Ik5vJ9.js";import{B as z,S as ga}from"../chunks/DQ9kk-83.js";import{E as fa,S as ua}from"../chunks/gaotG1ff.js";import{n as B,i as va,b as pa}from"../chunks/DiYjVjUF.js";import{b as ha}from"../chunks/D7bu37Vr.js";import{t as U}from"../chunks/6w9gDVZk.js";import{u as _a}from"../chunks/DIaLGbHq.js";import{I as xa}from"../chunks/C5yHnGVg.js";function Pa(h,a){F(a,!0);/**
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
 */let _=ma(a,["$$slots","$$events","$$legacy"]);const i=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];xa(h,D({name:"frown"},()=>_,{get iconNode(){return i},children:(v,A)=>{var l=u(),x=d(l);$(x,()=>a.children??aa),r(v,l)},$$slots:{default:!0}})),R()}var Sa=q('<p class="my-2 text-red-500"> </p> <div class="flex gap-2"><!> <!></div>',1),ya=q('<div class="m-2 flex h-screen w-screen flex-col items-center justify-center font-sans sm:m-0"><!> <!></div>');function Fa(h,a){F(a,!0);const _=()=>j(_a,"$user",v),i=()=>j(ha,"$basePath",v),[v,A]=da();let l=ra(null);const x=p(()=>!f.loading&&!!f.error),G=p(()=>a.data.isOrgSite&&a.data.org?a.data.org.name:"ClassroomIO - The Course Platform That's Actually Easy To Use"),H=p(()=>_().isLoggedIn?{label:U.get(i()==="/lms"||i()==="#"?"navigation.goto_lms":"navigation.goto_dashboard"),href:ca(i()!=="#"?i():"/lms",{})}:{label:U.get("navigation.login"),href:"/login"}),E=p(()=>!a.data.isOrgSite||!a.data.org?null:pa(a.data.org,B(a.data.org.landingpage),a.data.courses,a.data.hasMoreCourses,n(H)));Z(async()=>{if(!a.data.isOrgSite||!a.data.org){f.loading||f.setupApp(a.data.locals,{isOrgSite:a.data.isOrgSite,orgSiteName:a.data.orgSiteName});return}const e=B(a.data.org.landingpage),s=await va(e.theme);ea(l,s.default,!0)});var L=u();la("1uha8ag",e=>{ta(()=>{oa.title=n(G)??""})});var J=d(L);{var K=e=>{var s=u(),P=d(s);{var S=t=>{var o=u(),c=d(o);ia(c,()=>n(l),(m,g)=>{g(m,D(()=>n(E)))}),r(t,o)},y=t=>{};I(P,t=>{n(l)&&n(E)?t(S):t(y,!1)})}r(e,s)},Q=e=>{var s=u(),P=d(s);{var S=t=>{fa(t,{title:"Something Went Wrong",description:"We encountered an unexpected error. Please reload the page or contact us for support.",get icon(){return Pa},variant:"page",layout:"full-page",showLogo:!0,children:(o,c)=>{var m=Sa(),g=d(m),V=w(g,!0);C(g);var N=T(g,2),k=w(N);z(k,{variant:"secondary",onclick:()=>window.location.reload(),children:(b,Y)=>{M();var O=W("Reload Page");r(b,O)},$$slots:{default:!0}});var X=T(k,2);z(X,{variant:"default",href:"https://classroomio.com/contact",children:(b,Y)=>{M();var O=W("Contact Us");r(b,O)},$$slots:{default:!0}}),C(N),sa(()=>na(V,f.error)),r(o,m)},$$slots:{default:!0}})},y=t=>{var o=ya(),c=w(o);ua(c);var m=T(c,2);ga(m,{class:"size-14! text-blue-700!"}),C(o),r(t,o)};I(P,t=>{n(x)?t(S):t(y,!1)},!0)}r(e,s)};I(J,e=>{a.data.isOrgSite&&a.data.org?e(K):e(Q,!1)})}r(h,L),R(),A()}export{Fa as component};
