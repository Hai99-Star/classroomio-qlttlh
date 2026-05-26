var ze=t=>{throw TypeError(t)};var Qe=(t,e,r)=>e.has(t)||ze("Cannot "+r);var $=(t,e,r)=>(Qe(t,e,"read from private field"),r?r.call(t):e.get(t)),xe=(t,e,r)=>e.has(t)?ze("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r);import"./CWj6FrbW.js";import{s as D,A as _e,g as i,a as _,p as R,f as y,e as b,h as oe,n as le,k as z,b as p,c as H,j as re,i as A,r as k,d as ne,l as He,u as Oe,aq as $e,t as se}from"./DMkybXYI.js";import{s as Ae}from"./B4Gb2Xkj.js";import{i as Fe}from"./BDnaBRn_.js";import{c as O}from"./CGCUeNHI.js";import{b as Ne,a as ke,d as Ge,s as ye}from"./CY39jyo7.js";import{p as c,r as Y,b as je,c as ce,s as et,a as tt}from"./CbrIGZze.js";import{P as rt}from"./DJp-6MI5.js";import{a as Ye,o as nt}from"./D0IxJWuM.js";import"./CUMvGXFa.js";import{C as ot}from"./6sej211k.js";import{u as at}from"./CmxoP-lR.js";import{b as pe}from"./kiLzb8bW.js";import{c as Te}from"./D8Ymbdf-.js";import{a as it,b as st,A as lt}from"./BIVToOD5.js";import{I as Xe,B as Je}from"./DQ9kk-83.js";import{R as ct,D as ut}from"./BmJbP3sF.js";import{e as We,c as dt}from"./IqKSOxrF.js";import{a as ht}from"./CQ0omE3D.js";import{T as gt}from"./BOgI2Ay5.js";import{s as pt}from"./C_RNpsE7.js";import{t as mt}from"./6w9gDVZk.js";import{P as vt}from"./DXpWbR0M.js";import{I as ft}from"./C5yHnGVg.js";const wt=t=>new Promise((e,r)=>{const o=new Image;o.addEventListener("load",()=>e(o)),o.addEventListener("error",s=>r(s)),o.setAttribute("crossOrigin","anonymous"),o.src=t}),xt=t=>t*Math.PI/180,_t=async(t,e,r=0)=>{const o=await wt(t),s=document.createElement("canvas"),d=s.getContext("2d");if(!d)throw new Error("Error getting 2d rendering context");const a=2*(Math.max(o.width,o.height)/2*Math.sqrt(2));s.width=a,s.height=a,d.translate(a/2,a/2),d.rotate(xt(r)),d.translate(-a/2,-a/2),d.drawImage(o,a/2-o.width*.5,a/2-o.height*.5);const u=d.getImageData(0,0,a,a);return s.width=e.width,s.height=e.height,d.putImageData(u,Math.round(0-a/2+o.width*.5-e.x),Math.round(0-a/2+o.height*.5-e.y)),new Promise(h=>{s.toBlob(w=>{h(URL.createObjectURL(w))},"image/png")})},yt=["image/apng","image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"];var be,Ce,Ie,Se;class bt{constructor(e){xe(this,be,D(_e([])));xe(this,Ce,D(!1));xe(this,Ie,D());xe(this,Se,D());this.opts=e,this.onUpload=this.onUpload.bind(this),this.onCancel=this.onCancel.bind(this),this.onCrop=this.onCrop.bind(this),this.dispose=this.dispose.bind(this)}get open(){return i($(this,Ce))}set open(e){_($(this,Ce),e,!0)}get tempUrl(){return i($(this,Ie))}set tempUrl(e){_($(this,Ie),e,!0)}get pixelCrop(){return i($(this,Se))}set pixelCrop(e){_($(this,Se),e,!0)}get disabled(){var e;return((e=this.opts.disabled)==null?void 0:e.current)??!1}onUpload(e){var r;if(!this.disabled){if(((r=this.opts.maxFileSize)==null?void 0:r.current)!==void 0){const o=this.opts.maxFileSize.current;if(e.size>o){this.opts.onUnsupportedFile.current(e);return}}if(!yt.includes(e.type)){this.opts.onUnsupportedFile.current(e);return}this.tempUrl=URL.createObjectURL(e),i($(this,be)).push(this.tempUrl),this.open=!0}}onCancel(){this.tempUrl=void 0,this.open=!1,this.pixelCrop=void 0}async onCrop(){!this.pixelCrop||!this.tempUrl||(this.opts.src.current=await _t(this.tempUrl,this.pixelCrop),this.open=!1,this.opts.onCropped.current(this.opts.src.current))}get src(){return this.opts.src.current}get id(){return this.opts.id.current}dispose(){for(const e of i($(this,be)))URL.revokeObjectURL(e)}}be=new WeakMap,Ce=new WeakMap,Ie=new WeakMap,Se=new WeakMap;class Ct{constructor(e){this.rootState=e}}class It{constructor(e){this.rootState=e}}class St{constructor(e){this.rootState=e}}class Pt{constructor(e){this.rootState=e,this.onCropComplete=this.onCropComplete.bind(this)}onCropComplete(e){this.rootState.pixelCrop=e.pixels}}class Et{constructor(e){this.rootState=e,this.onclick=this.onclick.bind(this)}onclick(){this.rootState.onCrop()}}class Mt{constructor(e){this.rootState=e,this.onclick=this.onclick.bind(this)}onclick(){this.rootState.onCancel()}}const ue=new ot("ImageCropper.Root"),Lt=t=>ue.set(new bt(t)),Ut=()=>{const t=ue.get();return new Ct(t)},Dt=()=>{const t=ue.get();return new It(t)},At=()=>{const t=ue.get();return new St(t)},kt=()=>{const t=ue.get();return new Pt(t)},Ft=()=>{const t=ue.get();return new Et(t)},jt=()=>{const t=ue.get();return new Mt(t)};var Tt=y("<!> <input/>",1);function Ot(t,e){R(e,!0);let r=c(e,"id",19,at),o=c(e,"src",15,""),s=c(e,"onCropped",3,()=>{}),d=c(e,"onUnsupportedFile",3,()=>{}),l=c(e,"disabled",3,!1),a=Y(e,["$$slots","$$events","$$legacy","id","src","onCropped","onUnsupportedFile","maxFileSize","disabled","children"]);const u=Lt({id:pe.with(()=>r()),src:pe.with(()=>o(),E=>o(E)),onCropped:pe.with(()=>s()),onUnsupportedFile:pe.with(()=>d()),maxFileSize:pe.with(()=>e.maxFileSize),disabled:pe.with(()=>l()??void 0)});Ye(()=>u.dispose());var h=Tt(),w=b(h);oe(w,()=>e.children??le);var C=z(w,2),P=E=>{var x;const v=(x=E.currentTarget.files)==null?void 0:x[0];v&&(u.onUpload(v),E.target.value="")};Ne(C,()=>({...a,onchange:P,type:"file",id:r(),style:"display: none;"}),void 0,void 0,void 0,void 0,!0),p(t,h),H()}var Rt=y("<label><!></label>");function Ht(t,e){R(e,!0);let r=c(e,"ref",15,null),o=Y(e,["$$slots","$$events","$$legacy","ref","children"]);const s=Ut(),d=re(()=>s.rootState.disabled);function l(h){if(i(d))return h.preventDefault(),h.stopPropagation(),!1}var a=Rt();Ne(a,h=>({...o,for:i(d)?void 0:s.rootState.id,onclick:l,class:h,"aria-disabled":i(d)}),[()=>Te("ui:cursor-pointer",i(d)?"ui:cursor-not-allowed ui:opacity-50 ui:pointer-events-none":"")]);var u=A(a);oe(u,()=>e.children??le),k(a),je(a,h=>r(h),()=>r()),p(t,a),H()}function Nt(t,e){R(e,!0);/**
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
 */let r=Y(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];Xe(t,ce({name:"upload"},()=>r,{get iconNode(){return o},children:(s,d)=>{var l=ne(),a=b(l);oe(a,()=>e.children??le),p(s,l)},$$slots:{default:!0}})),H()}var zt=y('<!> <span class="ui:sr-only">Upload image</span>',1),Gt=y("<!> <!>",1);function Wt(t,e){R(e,!0);const r=Dt();var o=ne(),s=b(o);{var d=a=>{var u=ne(),h=b(u);oe(h,()=>e.child,()=>({src:r.rootState.src})),p(a,u)},l=a=>{var u=ne(),h=b(u);{let w=re(()=>Te("ui:ring-accent ui:ring-offset-background ui:size-20 ui:ring-2 ui:ring-offset-2",e.class));O(h,()=>lt,(C,P)=>{P(C,{get class(){return i(w)},children:(E,v)=>{var x=Gt(),I=b(x);O(I,()=>it,(m,X)=>{X(m,{get src(){return r.rootState.src}})});var M=z(I,2);O(M,()=>st,(m,X)=>{X(m,{children:(L,J)=>{var G=zt(),V=b(G);Nt(V,{class:"ui:size-4"}),He(2),p(L,G)},$$slots:{default:!0}})}),p(E,x)},$$slots:{default:!0}})})}p(a,u)};Fe(s,a=>{e.child?a(d):a(l,!1)})}p(t,o),H()}var Bt=y('<div class="ui:flex ui:flex-col ui:gap-4"><!></div>');function Vt(t,e){R(e,!0);let r=Y(e,["$$slots","$$events","$$legacy","children","class"]);const o=At();var s=ne(),d=b(s);O(d,()=>ct,(l,a)=>{a(l,{get open(){return o.rootState.open},set open(u){o.rootState.open=u},children:(u,h)=>{var w=ne(),C=b(w);{let P=re(()=>Te("ui:min-h-96 ui:max-w-[60%] ui:rounded-none ui:border-x-0 ui:sm:ui:max-w-lg ui:sm:ui:rounded-lg ui:sm:ui:border-x",e.class));O(C,()=>ut,(E,v)=>{v(E,ce(()=>r,{showCloseButton:!0,get class(){return i(P)},children:(x,I)=>{var M=Bt(),m=A(M);oe(m,()=>e.children??le),k(M),p(x,M)},$$slots:{default:!0}}))})}p(u,w)},$$slots:{default:!0}})}),p(t,s),H()}function Be(t,e,r){return t>=e*r?{width:e*r,height:e}:{width:t,height:t/r}}function Re(t,e,r,o){return{x:Ve(t.x,e.width,r.width,o),y:Ve(t.y,e.height,r.height,o)}}function Ve(t,e,r,o){let s=e*o/2-r/2;return o<1&&(s=r/2-e*o/2),Math.min(s,Math.max(t,-s))}function Ze(t,e){return Math.sqrt(Math.pow(t.y-e.y,2)+Math.pow(t.x-e.x,2))}function Zt(t,e,r,o,s,d=!0){const l=d?qt:Yt,a={x:l(100,((e.width-r.width/s)/2-t.x/s)/e.width*100),y:l(100,((e.height-r.height/s)/2-t.y/s)/e.height*100),width:l(100,r.width/e.width*100/s),height:l(100,r.height/e.height*100/s)},u=l(e.naturalWidth,a.width*e.naturalWidth/100,!0),h=l(e.naturalHeight,a.height*e.naturalHeight/100,!0),C=e.naturalWidth>=e.naturalHeight*o?{width:Math.round(h*o),height:h}:{width:u,height:Math.round(u/o)},P={...C,x:l(e.naturalWidth-C.width,a.x*e.naturalWidth/100,!0),y:l(e.naturalHeight-C.height,a.y*e.naturalHeight/100,!0)};return{croppedAreaPercentages:a,croppedAreaPixels:P}}function qt(t,e,r=!1){const o=r?Math.round(e):e;return Math.min(t,Math.max(0,o))}function Yt(t,e){return e}function qe(t,e){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}var Xt=y('<div data-testid="cropper"></div>'),Jt=y('<div class="svelte-easy-crop-container svelte-cimop" role="button" data-testid="container"><img class="svelte-easy-crop-image svelte-cimop" alt=""/> <!></div>');function Kt(t,e){R(e,!0);let r=c(e,"crop",31,()=>_e({x:0,y:0})),o=c(e,"zoom",15,1),s=c(e,"minZoom",11,1),d=c(e,"maxZoom",11,3),l=c(e,"aspect",3,4/3),a=c(e,"cropSize",3,null),u=c(e,"cropShape",3,"rect"),h=c(e,"showGrid",3,!0),w=c(e,"zoomSpeed",3,1),C=c(e,"crossOrigin",3,null),P=c(e,"restrictPosition",3,!0),E=c(e,"tabindex",3,void 0),v=D(null),x=D(_e({width:0,height:0,naturalWidth:0,naturalHeight:0})),I=D(null),M=D(null),m=D(null),X=D(_e({x:0,y:0})),L=D(_e({x:0,y:0})),J=D(0),G=D(null),V=D(null);nt(()=>{i(m)&&i(m).complete&&me(),i(I)&&(i(I).addEventListener("gesturestart",W),i(I).addEventListener("gesturechange",W))}),Ye(()=>{i(I)&&(i(I).removeEventListener("gesturestart",W),i(I).removeEventListener("gesturechange",W)),de()});const W=n=>n.preventDefault(),de=()=>{typeof document<"u"&&(document.removeEventListener("mousemove",Me),document.removeEventListener("mouseup",Z),document.removeEventListener("touchmove",Ue),document.removeEventListener("touchend",Z))},me=()=>{he(),q()},Pe=()=>a()?a().width/a().height:l(),he=()=>{i(m)&&(_(x,{width:i(m).width,height:i(m).height,naturalWidth:i(m).naturalWidth,naturalHeight:i(m).naturalHeight},!0),_(v,a()?a():Be(i(m).width,i(m).height,l()),!0)),i(I)&&_(M,i(I).getBoundingClientRect(),!0)},ae=n=>({x:Number(n.clientX),y:Number(n.clientY)}),K=n=>({x:Number(n.clientX),y:Number(n.clientY)}),Ee=n=>{n.preventDefault(),document.addEventListener("mousemove",Me),document.addEventListener("mouseup",Z),F(ae(n))},Me=n=>j(ae(n)),Le=n=>{n.preventDefault(),document.addEventListener("touchmove",Ue,{passive:!1}),document.addEventListener("touchend",Z),n.touches.length===2?De(n):n.touches.length===1&&F(K(n.touches[0]))},Ue=n=>{n.preventDefault(),n.touches.length===2?ve(n):n.touches.length===1&&j(K(n.touches[0]))},F=({x:n,y:g})=>{_(X,{x:n,y:g},!0),_(L,{x:r().x,y:r().y},!0)},j=({x:n,y:g})=>{i(G)&&window.cancelAnimationFrame(i(G)),_(G,window.requestAnimationFrame(()=>{if(n===void 0||g===void 0||!i(v))return;const f=n-i(X).x,U=g-i(X).y,N={x:i(L).x+f,y:i(L).y+U};r(P()?Re(N,i(x),i(v),o()):N)}),!0)},Z=()=>{de(),q()},De=n=>{const g=K(n.touches[0]),f=K(n.touches[1]);_(J,Ze(g,f),!0),F(qe(g,f))},ve=n=>{const g=K(n.touches[0]),f=K(n.touches[1]),U=qe(g,f);j(U),i(V)&&window.cancelAnimationFrame(i(V)),_(V,window.requestAnimationFrame(()=>{const N=Ze(g,f),we=o()*(N/i(J));Q(we,U),_(J,N,!0)}),!0)},ee=n=>{n.preventDefault();const g=ae(n),f=o()-n.deltaY*w()/200;Q(f,g)},te=({x:n,y:g})=>{if(!i(M))throw new Error("The Cropper is not mounted");return{x:i(M).width/2-(n-i(M).left),y:i(M).height/2-(g-i(M).top)}},ie=({x:n,y:g})=>({x:(n+r().x)/o(),y:(g+r().y)/o()}),Q=(n,g)=>{if(!i(v))return;const f=te(g),U=ie(f);o(Math.min(d(),Math.max(n,s())));const N={x:U.x*o()-f.x,y:U.y*o()-f.y};r(P()?Re(N,i(x),i(v),o()):N)},q=()=>{var U;if(!i(v)||i(v).width===0)return;const n=P()?Re(r(),i(x),i(v),o()):r(),{croppedAreaPercentages:g,croppedAreaPixels:f}=Zt(n,i(x),i(v),Pe(),o(),P());(U=e.oncropcomplete)==null||U.call(e,{percent:g,pixels:f})};Oe(()=>{i(m)&&_(v,a()?a():Be(i(m).width,i(m).height,l()),!0)}),Oe(()=>{o()&&q()});const ge=n=>{Oe(()=>(n.addEventListener("touchstart",Le),n.addEventListener("mousedown",Ee),n.addEventListener("wheel",ee,{passive:!1}),()=>{n.removeEventListener("touchstart",Le),n.removeEventListener("mousedown",Ee),n.removeEventListener("wheel",ee)}))};var B=Jt();We("resize",$e,he);var T=A(B);je(T,n=>_(m,n),()=>i(m));var fe=z(T,2);{var S=n=>{var g=Xt();let f;se(()=>{f=ye(g,1,"svelte-easy-crop-area svelte-cimop",null,f,{"svelte-easy-crop-round":u()==="round","svelte-easy-crop-grid":h()}),Ge(g,`width: ${i(v).width??""}px; height: ${i(v).height??""}px;`)}),p(n,g)};Fe(fe,n=>{i(v)&&n(S)})}k(B),je(B,n=>_(I,n),()=>i(I)),ht(B,n=>ge==null?void 0:ge(n)),se(()=>{ke(B,"tabindex",E()),ke(T,"src",e.image),Ge(T,`transform: translate(${r().x??""}px, ${r().y??""}px) scale(${o()??""});`),ke(T,"crossorigin",C())}),We("load",T,me),dt(T),p(t,B),H()}var Qt=y('<div class="ui:relative ui:h-full ui:w-full"><!></div>');function $t(t,e){R(e,!0);let r=c(e,"cropShape",3,"round"),o=c(e,"aspect",3,1),s=c(e,"showGrid",3,!1),d=Y(e,["$$slots","$$events","$$legacy","cropShape","aspect","showGrid"]);const l=kt();var a=Qt(),u=A(a);Kt(u,ce(()=>d,{get cropShape(){return r()},get aspect(){return o()},get showGrid(){return s()},get image(){return l.rootState.tempUrl},get oncropcomplete(){return l.onCropComplete}})),k(a),p(t,a),H()}var er=y("<div><!></div>");function tr(t,e){R(e,!0);let r=c(e,"ref",15,null),o=Y(e,["$$slots","$$events","$$legacy","ref","class","children"]);var s=er();Ne(s,l=>({...o,class:l}),[()=>Te("ui:flex ui:w-full ui:place-items-center ui:justify-center ui:gap-2",e.class)]);var d=A(s);oe(d,()=>e.children??le),k(s),je(s,l=>r(l),()=>r()),p(t,s),H()}function rr(t,e){R(e,!0);/**
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
 */let r=Y(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]];Xe(t,ce({name:"crop"},()=>r,{get iconNode(){return o},children:(s,d)=>{var l=ne(),a=b(l);oe(a,()=>e.children??le),p(s,l)},$$slots:{default:!0}})),H()}var nr=y("<!> <span>Crop</span>",1);function or(t,e){R(e,!0);let r=c(e,"ref",15,null),o=c(e,"variant",3,"default"),s=c(e,"size",3,"sm"),d=Y(e,["$$slots","$$events","$$legacy","ref","variant","size","onclick"]);const l=Ft();Je(t,ce(()=>d,{get size(){return s()},get variant(){return o()},onclick:a=>{var u;(u=e.onclick)==null||u.call(e,a),l.onclick()},get ref(){return r()},set ref(a){r(a)},children:(a,u)=>{var h=nr(),w=b(h);rr(w,{}),He(2),p(a,h)},$$slots:{default:!0}})),H()}var ar=y("<!> <span>Cancel</span>",1);function ir(t,e){R(e,!0);let r=c(e,"ref",15,null),o=c(e,"variant",3,"outline"),s=c(e,"size",3,"sm"),d=Y(e,["$$slots","$$events","$$legacy","ref","variant","size","onclick"]);const l=jt();Je(t,ce(()=>d,{get size(){return s()},get variant(){return o()},onclick:a=>{var u;(u=e.onclick)==null||u.call(e,a),l.onclick()},get ref(){return r()},set ref(a){r(a)},children:(a,u)=>{var h=ar(),w=b(h);gt(w,{}),He(2),p(a,h)},$$slots:{default:!0}})),H()}function sr(t,e){R(e,!0);/**
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
 */let r=Y(e,["$$slots","$$events","$$legacy"]);const o=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ft(t,ce({name:"camera"},()=>r,{get iconNode(){return o},children:(s,d)=>{var l=ne(),a=b(l);oe(a,()=>e.children??le),p(s,l)},$$slots:{default:!0}})),H()}const lr=["image/jpeg","image/jpg","image/png","image/gif","image/webp"],cr=[".jpg",".jpeg",".png",".gif",".webp"];function ur(t){return lr.includes(t.type)}function dr(t){const e=t.toLowerCase().substring(t.lastIndexOf("."));return cr.includes(e)}function hr(t){return ur(t)?dr(t.name)?t.name.toLowerCase().includes(".svg")?{isValid:!1,error:"SVG files are not allowed for security reasons."}:{isValid:!0}:{isValid:!1,error:"Invalid file extension. Only .jpg, .jpeg, .png, .gif, and .webp files are allowed."}:{isValid:!1,error:"Invalid file type. Only JPEG, PNG, GIF, and WebP files are allowed."}}var gr=y('<div class="group relative h-full w-full"><img alt=""/> <div><!></div></div>'),pr=y('<div><!></div> <div class="mt-1 flex flex-col items-center"><!> <span class="text-sm"> </span></div>',1),mr=y('<p class="text-sm text-red-500"> </p>'),vr=y("<!> <!>",1),fr=y("<!> <!>",1),wr=y('<!> <div class="flex flex-col items-center"><p class="text-center text-xs text-gray-500"> <br/> </p> <!></div> <!>',1),xr=y("<section><!></section>");function Vr(t,e){R(e,!0);const r=()=>et(mt,"$t",o),[o,s]=tt();let d=c(e,"avatar",15),l=c(e,"src",15),a=c(e,"widthHeight",3,""),u=c(e,"shape",3,"rounded-full"),h=c(e,"errorMessage",15,null),w=c(e,"isDisabled",3,!1),C=c(e,"maxFileSizeInMb",3,2),P=c(e,"flexDirection",3,"flex-col"),E=c(e,"isUploading",11,!1);const v="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png";let x=re(()=>l()||"");const I=async L=>{var de;const G=await(await fetch(L)).blob(),V=new File([G],"cropped-image.png",{type:G.type}),W=hr(V);if(!W.isValid){pt.error(W.error||"Invalid file type"),h(r()("snackbar.landing_page_settings.error.try_again")),_(x,"");return}d(V),l(L),_(x,L),(de=e.change)==null||de.call(e),h(null)},M=L=>{const J=C()*1024*1024;if(L.size>J){h(`${r()("settings.profile.profile_picture.validation_error")} File size exceeds ${C()}MB limit`);return}h(`${r()("settings.profile.profile_picture.validation_error")} Unsupported file type: ${L.type}`)};var m=xr(),X=A(m);{let L=re(()=>C()*1024*1024),J=re(()=>w()||E());O(X,()=>Ot,(G,V)=>{V(G,{onCropped:I,onUnsupportedFile:M,get maxFileSize(){return i(L)},accept:".jpg, .jpeg, .png, .webp",get disabled(){return i(J)},get src(){return i(x)},set src(W){_(x,W)},children:(W,de)=>{var me=wr(),Pe=b(me);{let F=re(()=>w()||E());O(Pe,()=>Ht,(j,Z)=>{Z(j,{get"aria-disabled"(){return i(F)},children:(De,ve)=>{var ee=pr(),te=b(ee),ie=A(te);{const S=(n,g)=>{let f=()=>g==null?void 0:g().src;var U=gr(),N=A(U),we=z(N,2),Ke=A(we);vt(Ke,{class:"stroke-white",size:16}),k(we),k(U),se(()=>{ye(N,1,`h-full w-full ${u()??""}`),ke(N,"src",f()||v),ye(we,1,`absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${u()??""}`)}),p(n,U)};O(ie,()=>Wt,(n,g)=>{g(n,{child:S,$$slots:{child:!0}})})}k(te);var Q=z(te,2),q=A(Q);{var ge=S=>{rt(S,{})},B=S=>{sr(S,{size:16})};Fe(q,S=>{E()?S(ge):S(B,!1)})}var T=z(q,2),fe=A(T,!0);k(T),k(Q),se(S=>{ye(te,1,`avatar-container ${(a()||"h-[128px] w-[128px]")??""} pointer border-2 border-gray-200 ${u()??""}`),Ae(fe,S)},[()=>r()("settings.profile.profile_picture.upload_image")]),p(De,ee)},$$slots:{default:!0}})})}var he=z(Pe,2),ae=A(he),K=A(ae),Ee=z(K,2);k(ae);var Me=z(ae,2);{var Le=F=>{var j=mr(),Z=A(j,!0);k(j),se(()=>Ae(Z,h())),p(F,j)};Fe(Me,F=>{h()&&F(Le)})}k(he);var Ue=z(he,2);O(Ue,()=>Vt,(F,j)=>{j(F,{children:(Z,De)=>{var ve=fr(),ee=b(ve);{let ie=re(()=>u()==="rounded-full"?"round":"rect");O(ee,()=>$t,(Q,q)=>{q(Q,{get cropShape(){return i(ie)}})})}var te=z(ee,2);O(te,()=>tr,(ie,Q)=>{Q(ie,{children:(q,ge)=>{var B=vr(),T=b(B);O(T,()=>ir,(S,n)=>{n(S,{})});var fe=z(T,2);O(fe,()=>or,(S,n)=>{n(S,{})}),p(q,B)},$$slots:{default:!0}})}),p(Z,ve)},$$slots:{default:!0}})}),se((F,j)=>{Ae(K,`${F??""}
        ${C()??""}MB`),Ae(Ee,` ${j??""}: jpeg, jpg, png, webp`)},[()=>r()("settings.profile.profile_picture.file_size"),()=>r()("settings.profile.profile_picture.accepted")]),p(W,me)},$$slots:{default:!0}})})}k(m),se(()=>ye(m,1,`flex w-fit p-3 ${P()??""} items-center justify-between gap-2`)),p(t,m),H(),s()}export{Vr as U};
