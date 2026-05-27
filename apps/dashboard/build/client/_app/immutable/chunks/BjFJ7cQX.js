var f=e=>{throw TypeError(e)};var S=(e,s,t)=>s.has(e)||f("Cannot "+t);var g=(e,s,t)=>(S(e,s,"read from private field"),t?t.call(e):s.get(e)),d=(e,s,t)=>s.has(e)?f("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t);import"./CWj6FrbW.js";import{p as m,d as y,e as C,h as x,n as $,b as v,c as b,s as M,g as O,a as q}from"./DMkybXYI.js";import{c as z,r as A}from"./CbrIGZze.js";import{I as F}from"./C5yHnGVg.js";import{c as i}from"./cMdhlq0f.js";import{Z as _,a as j,b as P}from"./Civx7WiA.js";import{B as k,m as l}from"./EMGF084-.js";import{s as r}from"./C_RNpsE7.js";import{t as u}from"./6w9gDVZk.js";function J(e,s){m(s,!0);/**
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
 */let t=A(s,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];F(e,z({name:"shield"},()=>t,{get iconNode(){return o},children:(n,c)=>{var p=y(),h=C(p);x(h,()=>s.children??$),v(n,p)},$$slots:{default:!0}})),b()}function Z(e){if(e==null||typeof e!="object")return{config:null,policy:null};const s=e.policy,t=s&&s.roleMapping!=null&&typeof s.roleMapping=="object"&&!Array.isArray(s.roleMapping)?s.roleMapping:{};return{config:e.config,policy:s?{...s,roleMapping:t}:null}}function I(e){if(!e)return null;const s=e.roleMapping!=null&&typeof e.roleMapping=="object"&&!Array.isArray(e.roleMapping)?e.roleMapping:{};return{...e,roleMapping:s}}var a;class E extends k{constructor(){super(...arguments);d(this,a,M(null))}get config(){return O(g(this,a))}set config(t){q(g(this,a),t,!0)}async getSsoConfig(){return this.execute({requestFn:()=>i.organization.sso.$get(),logContext:"fetching SSO configuration",onSuccess:t=>{t.data!=null&&typeof t.data=="object"?this.config=Z(t.data):this.config=null}})}async createConnection(t){const o=_.safeParse(t);if(!o.success){this.errors=l(o.error);return}return this.execute({requestFn:()=>i.organization.sso.$post({json:o.data}),logContext:"creating SSO connection",onSuccess:n=>{var c;r.success(u.get("snackbar.success_update")),this.config={config:n.data,policy:((c=this.config)==null?void 0:c.policy)??null}},onError:n=>{typeof n=="string"?r.error(n):"error"in n&&r.error(n.error)}})}async updateConnection(t){const o=j.safeParse(t);if(!o.success){this.errors=l(o.error);return}return this.execute({requestFn:()=>i.organization.sso.$put({json:o.data}),logContext:"updating SSO connection",onSuccess:n=>{var c;r.success(u.get("snackbar.success_update")),(c=this.config)!=null&&c.config&&(this.config.config={...this.config.config,...n.data})}})}async deleteConnection(){return this.execute({requestFn:()=>i.organization.sso.$delete(),logContext:"deleting SSO connection",onSuccess:()=>{r.success(u.get("snackbar.success_update")),this.config=null}})}async activateConnection(){return this.execute({requestFn:()=>i.organization.sso.activate.$post(),logContext:"activating SSO connection",onSuccess:t=>{var o,n;r.success("SSO connection activated"),(o=this.config)!=null&&o.config&&(this.config.config.isActive=((n=t.data)==null?void 0:n.isActive)??!0)}})}async updatePolicy(t){const o=P.safeParse(t);if(!o.success){this.errors=l(o.error);return}return this.execute({requestFn:()=>i.organization.sso.policy.$put({json:o.data}),logContext:"updating SSO policy",onSuccess:n=>{r.success(u.get("snackbar.success_update")),this.config&&(this.config.policy=I(n.data))}})}async discoverSso(t){const o=await this.execute({requestFn:()=>i.sso.discover.$get({query:{email:t}}),logContext:"discovering SSO"});return(o==null?void 0:o.data)??null}async getOrgSsoInfo(t){const o=await this.execute({requestFn:()=>i.sso.org[":orgId"].$get({param:{orgId:t}}),logContext:"fetching org SSO info"});return(o==null?void 0:o.data)??null}}a=new WeakMap;const K=new E;export{J as S,Z as n,K as s};
