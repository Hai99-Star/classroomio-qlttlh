import"../chunks/CWj6FrbW.js";import{p as N,d as K,e as O,h as Q,n as R,b as m,c as z,f as k,ar as U,as as W,g as r,j as _,k as v,i as l,l as A,m as M,t as x,r as n}from"../chunks/DMkybXYI.js";import{s as g}from"../chunks/B4Gb2Xkj.js";import{i as X}from"../chunks/BDnaBRn_.js";import{h as Y}from"../chunks/ChhRsMFN.js";import{c as Z,r as ee,a as te,s as V}from"../chunks/CbrIGZze.js";import{p as ae}from"../chunks/DbALdqkn.js";import{g as re}from"../chunks/RcvJY8iF.js";import{t as oe}from"../chunks/CuT4tmgA.js";import{B}from"../chunks/DQ9kk-83.js";import{E as se}from"../chunks/gaotG1ff.js";import{I as ie}from"../chunks/C5yHnGVg.js";import{T as le}from"../chunks/DVIk9_-6.js";function ne(u,c){N(c,!0);/**
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
 */let h=ee(c,["$$slots","$$events","$$legacy"]);const e=[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]];ie(u,Z({name:"octagon-alert"},()=>h,{get iconNode(){return e},children:(p,y)=>{var o=K(),f=O(o);Q(f,()=>c.children??R),m(p,o)},$$slots:{default:!0}})),z()}var me=k('<meta name="description" content="There was an issue verifying your email address."/>'),ce=k('<div class="rounded-md border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20"><div class="flex items-center"><!> <div class="ml-3"><h3 class="text-sm font-medium text-yellow-800 dark:text-yellow-200"> </h3> <p class="mt-1 text-xs text-yellow-700 dark:text-yellow-300"> </p></div></div></div>'),de=k('<!> <div class="lex w-full flex-col justify-center gap-4 md:flex-row"><!> <!></div>',1);function Ee(u,c){N(c,!0);const h=()=>V(ae,"$page",p),e=()=>V(oe,"$t",p),[p,y]=te();let o=_(()=>h().url.searchParams.get("error")||"unknown"),f=_(()=>{const t={title:"",message:""};if(!r(o))return t;switch(r(o)){case"token_expired":t.title=e()("email_verification.errors.token_expired.title"),t.message=e()("email_verification.errors.token_expired.message");break;case"email_mismatch":t.title=e()("email_verification.errors.email_mismatch.title"),t.message=e()("email_verification.errors.email_mismatch.message");break;case"legacy_method_blocked":t.title=e()("email_verification.errors.legacy_blocked.title"),t.message=e()("email_verification.errors.legacy_blocked.message");break;case"database_error":t.title=e()("email_verification.errors.database.title"),t.message=e()("email_verification.errors.database.message");break;default:t.title=e()("email_verification.errors.unknown.title"),t.message=e()("email_verification.errors.unknown.message")}return t}),C=_(()=>r(f).message),H=_(()=>r(f).title);function L(){window.open("mailto:help@classroomio.com?subject=Email Verification Issue&body=Error Type: "+r(o),"_blank")}Y("ty05oa",t=>{var b=me();U(()=>{W.title="Email Verification Error - ClassroomIO"}),m(t,b)}),se(u,{get title(){return r(H)},get description(){return r(C)},get icon(){return ne},variant:"page",layout:"full-page",showLogo:!0,class:"h-fit! max-h-none! flex-none!",children:(t,b)=>{var w=de(),E=O(w);{var S=s=>{var d=ce(),a=l(d),i=l(a);le(i,{class:"h-5 w-5 flex-shrink-0 text-yellow-400"});var T=v(i,2),$=l(T),D=l($,!0);n($);var j=v($,2),F=l(j,!0);n(j),n(T),n(a),n(d),x((G,J)=>{g(D,G),g(F,J)},[()=>e()("email_verification.security_notice.title"),()=>e()("email_verification.security_notice.message")]),m(s,d)};X(E,s=>{r(o)==="legacy_method_blocked"&&s(S)})}var P=v(E,2),I=l(P);B(I,{onclick:L,variant:"ghost",children:(s,d)=>{A();var a=M();x(i=>g(a,i),[()=>e()("email_verification.actions.contact_support")]),m(s,a)},$$slots:{default:!0}});var q=v(I,2);B(q,{onclick:()=>re("/"),children:(s,d)=>{A();var a=M();x(i=>g(a,i),[()=>e()("email_verification.actions.back_to_dashboard")]),m(s,a)},$$slots:{default:!0}}),n(P),m(t,w)},$$slots:{default:!0}}),z(),y()}export{Ee as component};
