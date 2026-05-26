function u(e,t,r){return Math.min(Math.max(e,r),t)}class w extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var d=w;function j(e){if(typeof e!="string")throw new d(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=E.test(e)?q(e):e;const r=C.exec(t);if(r){const o=Array.from(r).slice(1);return[...o.slice(0,3).map(i=>parseInt(f(i,2),16)),parseInt(f(o[3]||"f",2),16)/255]}const n=M.exec(t);if(n){const o=Array.from(n).slice(1);return[...o.slice(0,3).map(i=>parseInt(i,16)),parseInt(o[3]||"ff",16)/255]}const s=R.exec(t);if(s){const o=Array.from(s).slice(1);return[...o.slice(0,3).map(i=>parseInt(i,10)),parseFloat(o[3]||"1")]}const a=A.exec(t);if(a){const[o,i,_,c]=Array.from(a).slice(1).map(parseFloat);if(u(0,100,i)!==i)throw new d(e);if(u(0,100,_)!==_)throw new d(e);return[...I(o,i,_),Number.isNaN(c)?1:c]}throw new d(e)}function x(e){let t=5381,r=e.length;for(;r;)t=t*33^e.charCodeAt(--r);return(t>>>0)%2341}const m=e=>parseInt(e.replace(/_/g,""),36),v="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const r=m(t.substring(0,3)),n=m(t.substring(3)).toString(16);let s="";for(let a=0;a<6-n.length;a++)s+="0";return e[r]=`${s}${n}`,e},{});function q(e){const t=e.toLowerCase().trim(),r=v[x(t)];if(!r)throw new d(e);return`#${r}`}const f=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),C=new RegExp(`^#${f("([a-f0-9])",3)}([a-f0-9])?$`,"i"),M=new RegExp(`^#${f("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),R=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${f(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),A=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,E=/^[a-z]+$/i,b=e=>Math.round(e*255),I=(e,t,r)=>{let n=r/100;if(t===0)return[n,n,n].map(b);const s=(e%360+360)%360/60,a=(1-Math.abs(2*n-1))*(t/100),o=a*(1-Math.abs(s%2-1));let i=0,_=0,c=0;s>=0&&s<1?(i=a,_=o):s>=1&&s<2?(i=o,_=a):s>=2&&s<3?(_=a,c=o):s>=3&&s<4?(_=o,c=a):s>=4&&s<5?(i=o,c=a):s>=5&&s<6&&(i=a,c=o);const g=n-a/2,p=i+g,h=_+g,k=c+g;return[p,h,k].map(b)};function T(e){const[t,r,n,s]=j(e).map((p,h)=>h===3?p:p/255),a=Math.max(t,r,n),o=Math.min(t,r,n),i=(a+o)/2;if(a===o)return[0,0,i,s];const _=a-o,c=i>.5?_/(2-a-o):_/(a+o);return[60*(t===a?(r-n)/_+(r<n?6:0):r===a?(n-t)/_+2:(t-r)/_+4),c,i,s]}function F(e,t,r,n){return`hsla(${(e%360).toFixed()}, ${u(0,100,t*100).toFixed()}%, ${u(0,100,r*100).toFixed()}%, ${parseFloat(u(0,1,n).toFixed(3))})`}function z(e,t){const[r,n,s,a]=T(e);return F(r,n,s-t,a)}function H(e,t){return z(e,-t)}function $(e,t){let r;try{r=e()}catch(n){typeof t=="function"?r=t(n):r=t}return r}function L(e=""){if(localStorage.setItem("theme",e),e!=null&&e.includes("#")){const t=e.replace(/"/g,'\\"');document.body.setAttribute("data-theme",t),N(t)}else document.body.setAttribute("data-theme",e)}const l=(e,t)=>$(()=>H(e,t),e),y=(e,t)=>$(()=>z(e,t),e);function N(e){const t={50:l(e,.7),100:l(e,.6),200:l(e,.5),300:l(e,.4),400:l(e,.3),500:l(e,.2),600:l(e,.1),700:e,800:y(e,.1),900:y(e,.2)},r=`
    body[data-theme="${e}"] {
      --primary: ${t[700]};
      --primary-foreground: ${t[50]};
      --ring: ${t[400]};
      --chart-1: ${t[300]};
      --chart-2: ${t[500]};
      --chart-3: ${t[600]};
      --chart-4: ${t[700]};
      --chart-5: ${t[800]};
      --sidebar-primary: ${t[700]};
      --sidebar-primary-foreground: ${t[50]};
      --sidebar-accent: ${t[50]};
      --sidebar-accent-foreground: ${t[700]};
      --sidebar-ring: ${t[400]};
    }

    body.dark[data-theme="${e}"],
    html.dark body[data-theme="${e}"] {
      --primary: ${t[500]};
      --primary-foreground: ${t[50]};
      --ring: ${t[900]};
      --sidebar-primary: ${t[500]};
      --sidebar-primary-foreground: ${t[50]};
      --sidebar-accent: oklch(0.268 0.007 34.298);
      --sidebar-accent-foreground: ${t[500]};
      --sidebar-ring: ${t[900]};
    }
  `,n=document.createElement("style");n.innerHTML=r,document.head.appendChild(n)}export{L as s};
