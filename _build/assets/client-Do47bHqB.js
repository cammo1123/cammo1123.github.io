const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C7OyQAeW.js","assets/index-BJnsedz8.js","assets/index-D0G7YXpy.js","assets/index-CqHC4k74.css","assets/index-BWauLM0T.js","assets/index-DIJS_SVL.css"])))=>i.map(i=>d[i]);
import{r as ue,c as P,g as de,a as fe,b as T,d as Ne,o as J,u as Oe,s as Ie,e as De,f as he,i as Me,h as Ue,j as v,k as Fe,S as pe,l as We,m as me,n as z,p as je,q as N,t as U,w as F,x as ge,y as W,z as I,A as Be,M as H,B as qe,C as ze,E as He,D as Ve}from"./index-BJnsedz8.js";const V="Invariant Violation",{setPrototypeOf:Ke=function(e,t){return e.__proto__=t,e}}=Object;class Q extends Error{framesToPop=1;name=V;constructor(t=V){super(typeof t=="number"?`${V}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),Ke(this,Q.prototype)}}function K(e,t){if(!e)throw new Q(t)}const Ye=/^[A-Za-z]:\//;function Ze(e=""){return e&&e.replace(/\\/g,"/").replace(Ye,t=>t.toUpperCase())}const Ge=/^[/\\]{2}/,Xe=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Je=/^[A-Za-z]:$/,Qe=function(e){if(e.length===0)return".";e=Ze(e);const t=e.match(Ge),n=G(e),r=e[e.length-1]==="/";return e=et(e,!n),e.length===0?n?"/":r?"./":".":(r&&(e+="/"),Je.test(e)&&(e+="/"),t?n?`//${e}`:`//./${e}`:n&&!G(e)?`/${e}`:e)},we=function(...e){if(e.length===0)return".";let t;for(const n of e)n&&n.length>0&&(t===void 0?t=n:t+=`/${n}`);return t===void 0?".":Qe(t.replace(/\/\/+/g,"/"))};function et(e,t){let n="",r=0,o=-1,a=0,i=null;for(let s=0;s<=e.length;++s){if(s<e.length)i=e[s];else{if(i==="/")break;i="/"}if(i==="/"){if(!(o===s-1||a===1))if(a===2){if(n.length<2||r!==2||n[n.length-1]!=="."||n[n.length-2]!=="."){if(n.length>2){const c=n.lastIndexOf("/");c===-1?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),o=s,a=0;continue}else if(n.length>0){n="",r=0,o=s,a=0;continue}}t&&(n+=n.length>0?"/..":"..",r=2)}else n.length>0?n+=`/${e.slice(o+1,s)}`:n=e.slice(o+1,s),r=s-o-1;o=s,a=0}else i==="."&&a!==-1?++a:a=-1}return n}const G=function(e){return Xe.test(e)};function tt(e){return`virtual:${e}`}function nt(e){return e.handler?.endsWith(".html")?G(e.handler)?e.handler:we(e.root,e.handler):`$vinxi/handler/${e.name}`}const rt=new Proxy({},{get(e,t){return K(typeof t=="string","Bundler name should be a string"),{name:t,type:"client",handler:tt(nt({name:t})),baseURL:"/_build",chunks:new Proxy({},{get(n,r){K(typeof r=="string","Chunk expected");let o=we("/_build",r+".mjs");return{import(){return import(o)},output:{path:o}}}}),inputs:new Proxy({},{get(n,r){K(typeof r=="string","Input must be string");let o=window.manifest[r].output;return{async import(){return import(o)},async assets(){return window.manifest[r].assets},output:{path:o}}}})}}});globalThis.MANIFEST=rt;function ye(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,a){if(n)return!(n=!1);const i={to:o,options:a,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const s of e)s.listener({...i,from:s.location,retry:c=>{c&&(n=!0),s.navigate(o,{...a,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}let X;function ee(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),X=window.history.state._depth}ee();function ot(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function at(e,t){let n=!1;return()=>{const r=X;ee();const o=r==null?null:X-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const st=/^(?:[a-z0-9]+:)?\/\//i,it=/^\/+|(\/)\/+$/g,ve="http://sr";function O(e,t=!1){const n=e.replace(it,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function j(e,t,n){if(st.test(t))return;const r=O(e),o=n&&O(n);let a="";return!o||t.startsWith("/")?a=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?a=r+o:a=o,(a||"/")+O(t,!a)}function lt(e,t){return O(e).replace(/\/*(\*.*)?$/g,"")+O(t)}function be(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function ct(e,t,n){const[r,o]=e.split("/*",2),a=r.split("/").filter(Boolean),i=a.length;return s=>{const c=s.split("/").filter(Boolean),l=c.length-i;if(l<0||l>0&&o===void 0&&!t)return null;const u={path:i?"":"/",params:{}},f=p=>n===void 0?void 0:n[p];for(let p=0;p<i;p++){const m=a[p],E=m[0]===":",d=E?c[p]:c[p].toLowerCase(),h=E?m.slice(1):m.toLowerCase();if(E&&Y(d,f(h)))u.params[h]=d;else if(E||!Y(d,h))return null;u.path+=`/${d}`}if(o){const p=l?c.slice(-l).join("/"):"";if(Y(p,f(o)))u.params[o]=p;else return null}return u}}function Y(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function ut(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,a)=>o+(a.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Ee(e){const t=new Map,n=de();return new Proxy({},{get(r,o){return t.has(o)||ue(n,()=>t.set(o,P(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Re(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Re(r).reduce((a,i)=>[...a,...o.map(s=>s+i)],[])}const dt=100,ft=fe(),Pe=fe();function ht(e,t=""){const{component:n,preload:r,load:o,children:a,info:i}=e,s=!a||Array.isArray(a)&&!a.length,c={key:e,component:n,preload:r||o,info:i};return Ae(e.path).reduce((l,u)=>{for(const f of Re(u)){const p=lt(t,f);let m=s?p:p.split("/*",1)[0];m=m.split("/").map(E=>E.startsWith(":")||E.startsWith("*")?E:encodeURIComponent(E)).join("/"),l.push({...c,originalPath:u,pattern:m,matcher:ct(m,!s,e.matchFilters)})}return l},[])}function pt(e,t=0){return{routes:e,score:ut(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const a=e[o],i=a.matcher(n);if(!i)return null;r.unshift({...i,route:a})}return r}}}function Ae(e){return Array.isArray(e)?e:[e]}function $e(e,t="",n=[],r=[]){const o=Ae(e);for(let a=0,i=o.length;a<i;a++){const s=o[a];if(s&&typeof s=="object"){s.hasOwnProperty("path")||(s.path="");const c=ht(s,t);for(const l of c){n.push(l);const u=Array.isArray(s.children)&&s.children.length===0;if(s.children&&!u)$e(s.children,l.pattern,n,r);else{const f=pt([...n],r.length);r.push(f)}n.pop()}}}return n.length?r:r.sort((a,i)=>i.score-a.score)}function Z(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function mt(e,t,n){const r=new URL(ve),o=P(u=>{const f=e();try{return new URL(f,r)}catch{return console.error(`Invalid path ${f}`),u}},r,{equals:(u,f)=>u.href===f.href}),a=P(()=>o().pathname),i=P(()=>o().search,!0),s=P(()=>o().hash),c=()=>"",l=J(i,()=>be(o()));return{get pathname(){return a()},get search(){return i()},get hash(){return s()},get state(){return t()},get key(){return c()},query:n?n(l):Ee(l)}}let C;function gt(){return C}function wt(e,t,n,r={}){const{signal:[o,a],utils:i={}}=e,s=i.parsePath||(g=>g),c=i.renderPath||(g=>g),l=i.beforeLeave||ye(),u=j("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&a({value:u,replace:!0,scroll:!1});const[f,p]=T(!1);let m;const E=(g,w)=>{w.value===d()&&w.state===b()||(m===void 0&&p(!0),C=g,m=w,Ie(()=>{m===w&&(h(m.value),y(m.state),Ue(),S[1]([]))}).finally(()=>{m===w&&De(()=>{C=void 0,g==="navigate"&&ke(m),p(!1),m=void 0})}))},[d,h]=T(o().value),[b,y]=T(o().state),$=mt(d,b,i.queryWrapper),A=[],S=T([]),_=P(()=>typeof r.transformUrl=="function"?Z(t(),r.transformUrl($.pathname)):Z(t(),$.pathname)),te=()=>{const g=_(),w={};for(let R=0;R<g.length;R++)Object.assign(w,g[R].params);return w},xe=i.paramsWrapper?i.paramsWrapper(te,t):Ee(te),ne={pattern:u,path:()=>u,outlet:()=>null,resolvePath(g){return j(u,g)}};return Ne(J(o,g=>E("native",g),{defer:!0})),{base:ne,location:$,params:xe,isRouting:f,renderPath:c,parsePath:s,navigatorFactory:_e,matches:_,beforeLeave:l,preloadRoute:Te,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:S};function Le(g,w,R){he(()=>{if(typeof w=="number"){w&&(i.go?i.go(w):console.warn("Router integration does not support relative routing"));return}const D=!w||w[0]==="?",{replace:B,resolve:x,scroll:q,state:k}={replace:!1,resolve:!D,scroll:!0,...R},M=x?g.resolvePath(w):j(D&&$.pathname||"",w);if(M===void 0)throw new Error(`Path '${w}' is not a routable path`);if(A.length>=dt)throw new Error("Too many redirects");const re=d();(M!==re||k!==b())&&(Me||l.confirm(M,R)&&(A.push({value:re,replace:B,scroll:q,state:b()}),E("navigate",{value:M,state:k})))})}function _e(g){return g=g||Oe(Pe)||ne,(w,R)=>Le(g,w,R)}function ke(g){const w=A[0];w&&(a({...g,replace:w.replace,scroll:w.scroll}),A.length=0)}function Te(g,w){const R=Z(t(),g.pathname),D=C;C="preload";for(let B in R){const{route:x,params:q}=R[B];x.component&&x.component.preload&&x.component.preload();const{preload:k}=x;w&&k&&ue(n(),()=>k({params:q,location:{pathname:g.pathname,search:g.search,hash:g.hash,query:be(g),state:null,key:""},intent:"preload"}))}C=D}}function yt(e,t,n,r){const{base:o,location:a,params:i}=e,{pattern:s,component:c,preload:l}=r().route,u=P(()=>r().path);c&&c.preload&&c.preload();const f=l?l({params:i,location:a,intent:C||"initial"}):void 0;return{parent:t,pattern:s,path:u,outlet:()=>c?v(c,{params:i,location:a,data:f,get children(){return n()}}):n(),resolvePath(m){return j(o.path(),m,u())}}}const vt=e=>t=>{const{base:n}=t,r=Fe(()=>t.children),o=P(()=>$e(r(),t.base||""));let a;const i=wt(e,o,()=>a,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(i),v(ft.Provider,{value:i,get children(){return v(bt,{routerState:i,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[P(()=>(a=de())&&null),v(Et,{routerState:i,get branches(){return o()}})]}})}})};function bt(e){const t=e.routerState.location,n=e.routerState.params,r=P(()=>e.preload&&he(()=>{e.preload({params:n,location:t,intent:gt()||"initial"})}));return v(pe,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>v(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Et(e){const t=[];let n;const r=P(J(e.routerState.matches,(o,a,i)=>{let s=a&&o.length===a.length;const c=[];for(let l=0,u=o.length;l<u;l++){const f=a&&a[l],p=o[l];i&&f&&p.route.key===f.route.key?c[l]=i[l]:(s=!1,t[l]&&t[l](),We(m=>{t[l]=m,c[l]=yt(e.routerState,c[l-1]||e.routerState.base,oe(()=>r()[l+1]),()=>e.routerState.matches()[l])}))}return t.splice(o.length).forEach(l=>l()),i&&s?i:(n=c[0],c)}));return oe(()=>r()&&n)()}const oe=e=>()=>v(pe,{get when(){return e()},keyed:!0,children:t=>v(Pe.Provider,{value:t,get children(){return t.outlet()}})});function Rt([e,t],n,r){return[e,r?o=>t(r(o)):t]}function Pt(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=Rt(T(n(e.get()),{equals:(o,a)=>o.value===a.value&&o.state===a.state}),void 0,o=>(!t&&e.set(o),z.registry&&!z.done&&(z.done=!0),o));return e.init&&me(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),vt({signal:r,create:e.create,utils:e.utils})}function At(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function $t(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const St=new Map;function Ct(e=!0,t=!1,n="/_server",r){return o=>{const a=o.base.path(),i=o.navigatorFactory(o.base);let s,c;function l(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function u(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const h=d.composedPath().find(_=>_ instanceof Node&&_.nodeName.toUpperCase()==="A");if(!h||t&&!h.hasAttribute("link"))return;const b=l(h),y=b?h.href.baseVal:h.href;if((b?h.target.baseVal:h.target)||!y&&!h.hasAttribute("state"))return;const A=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||A&&A.includes("external"))return;const S=b?new URL(y,document.baseURI):new URL(y);if(!(S.origin!==window.location.origin||a&&S.pathname&&!S.pathname.toLowerCase().startsWith(a.toLowerCase())))return[h,S]}function f(d){const h=u(d);if(!h)return;const[b,y]=h,$=o.parsePath(y.pathname+y.search+y.hash),A=b.getAttribute("state");d.preventDefault(),i($,{resolve:!1,replace:b.hasAttribute("replace"),scroll:!b.hasAttribute("noscroll"),state:A?JSON.parse(A):void 0})}function p(d){const h=u(d);if(!h)return;const[b,y]=h;r&&(y.pathname=r(y.pathname)),o.preloadRoute(y,b.getAttribute("preload")!=="false")}function m(d){clearTimeout(s);const h=u(d);if(!h)return c=null;const[b,y]=h;c!==b&&(r&&(y.pathname=r(y.pathname)),s=setTimeout(()=>{o.preloadRoute(y,b.getAttribute("preload")!=="false"),c=b},20))}function E(d){if(d.defaultPrevented)return;let h=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const y=new URL(h,ve);if(h=o.parsePath(y.pathname+y.search),!h.startsWith(n))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const b=St.get(h);if(b){d.preventDefault();const y=new FormData(d.target,d.submitter);b.call({r:o,f:d.target},d.target.enctype==="multipart/form-data"?y:new URLSearchParams(y))}}je(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mousemove",m,{passive:!0}),document.addEventListener("focusin",p,{passive:!0}),document.addEventListener("touchstart",p,{passive:!0})),document.addEventListener("submit",E),me(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mousemove",m),document.removeEventListener("focusin",p),document.removeEventListener("touchstart",p)),document.removeEventListener("submit",E)})}}function xt(e){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,o=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:o}},n=ye();return Pt({get:t,set({value:r,replace:o,scroll:a,state:i}){o?window.history.replaceState(ot(i),"",r):window.history.pushState(i,"",r),$t(decodeURIComponent(window.location.hash.slice(1)),a),ee()},init:r=>At(window,"popstate",at(r,o=>{if(o&&o<0)return!n.confirm(o);{const a=t();return!n.confirm(a.value,{state:a.state})}})),create:Ct(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}function Lt(e){e.forEach(t=>{if(!t.attrs.href)return;let n=document.head.querySelector(`link[href="${t.attrs.href}"]`);n||(n=document.createElement("link"),n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",t.attrs.href),document.head.appendChild(n))})}var _t=I("<style>"),kt=I("<link>"),Tt=I("<script> "),Nt=I("<noscript>");const Ot={style:e=>(()=>{var t=N(_t);return U(t,F(()=>e.attrs),!1,!0),ge(t,()=>e.children),W(),t})(),link:e=>(()=>{var t=N(kt);return U(t,F(()=>e.attrs),!1,!1),W(),t})(),script:e=>e.attrs.src?(()=>{var t=N(Tt);return U(t,F(()=>e.attrs,{get id(){return e.key}}),!1,!0),W(),t})():null,noscript:e=>(()=>{var t=N(Nt);return U(t,F(()=>e.attrs),!1,!0),W(),t})()};function It(e,t){let{tag:n,attrs:{key:r,...o}={key:void 0},children:a}=e;return Ot[n]({attrs:{...o,nonce:t},key:r,children:a})}function Dt(e,t,n,r="default"){return Be(async()=>{{const a=(await e.import())[r],s=(await t.inputs?.[e.src].assets()).filter(l=>l.tag==="style"||l.attrs.rel==="stylesheet");return typeof window<"u"&&Lt(s),{default:l=>[...s.map(u=>It(u)),v(a,l)]}}})}const L={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Mt(e={}){const t={options:e,rootNode:Se(),staticRoutesMap:{}},n=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)ae(t,n(r),e.routes[r]);return{ctx:t,lookup:r=>Ut(t,n(r)),insert:(r,o)=>ae(t,n(r),o),remove:r=>Ft(t,n(r))}}function Ut(e,t){const n=e.staticRoutesMap[t];if(n)return n.data;const r=t.split("/"),o={};let a=!1,i=null,s=e.rootNode,c=null;for(let l=0;l<r.length;l++){const u=r[l];s.wildcardChildNode!==null&&(i=s.wildcardChildNode,c=r.slice(l).join("/"));const f=s.children.get(u);if(f===void 0){if(s&&s.placeholderChildren.length>1){const p=r.length-l;s=s.placeholderChildren.find(m=>m.maxDepth===p)||null}else s=s.placeholderChildren[0]||null;if(!s)break;s.paramName&&(o[s.paramName]=u),a=!0}else s=f}return(s===null||s.data===null)&&i!==null&&(s=i,o[s.paramName||"_"]=c,a=!0),s?a?{...s.data,params:a?o:void 0}:s.data:null}function ae(e,t,n){let r=!0;const o=t.split("/");let a=e.rootNode,i=0;const s=[a];for(const c of o){let l;if(l=a.children.get(c))a=l;else{const u=Wt(c);l=Se({type:u,parent:a}),a.children.set(c,l),u===L.PLACEHOLDER?(l.paramName=c==="*"?`_${i++}`:c.slice(1),a.placeholderChildren.push(l),r=!1):u===L.WILDCARD&&(a.wildcardChildNode=l,l.paramName=c.slice(3)||"_",r=!1),s.push(l),a=l}}for(const[c,l]of s.entries())l.maxDepth=Math.max(s.length-c,l.maxDepth||0);return a.data=n,r===!0&&(e.staticRoutesMap[t]=a),a}function Ft(e,t){let n=!1;const r=t.split("/");let o=e.rootNode;for(const a of r)if(o=o.children.get(a),!o)return n;if(o.data){const a=r.at(-1)||"";o.data=null,Object.keys(o.children).length===0&&o.parent&&(o.parent.children.delete(a),o.parent.wildcardChildNode=null,o.parent.placeholderChildren=[]),n=!0}return n}function Se(e={}){return{type:e.type||L.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Wt(e){return e.startsWith("**")?L.WILDCARD:e[0]===":"||e==="*"?L.PLACEHOLDER:L.NORMAL}const jt="modulepreload",Bt=function(e){return"/_build/"+e},se={},ie=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=i?.nonce||i?.getAttribute("nonce");o=Promise.allSettled(n.map(c=>{if(c=Bt(c),c in se)return;se[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":jt,l||(f.as="script"),f.crossOrigin="",f.href=c,s&&f.setAttribute("nonce",s),document.head.appendChild(f),l)return new Promise((p,m)=>{f.addEventListener("load",p),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})},Ce=[{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>ie(()=>import("./index-C7OyQAeW.js"),__vite__mapDeps([0,1,2,3])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/home/runner/work/cammo1123.github.io/cammo1123.github.io/src/routes/index.tsx"},{page:!0,$component:{src:"src/routes/acom1001/index.tsx?pick=default&pick=$css",build:()=>ie(()=>import("./index-BWauLM0T.js"),__vite__mapDeps([4,1,2,5])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/acom1001/index.tsx?pick=default&pick=$css"].output.path)},path:"/acom1001/",filePath:"/home/runner/work/cammo1123.github.io/cammo1123.github.io/src/routes/acom1001/index.tsx"}],qt=zt(Ce.filter(e=>e.page));function zt(e){function t(n,r,o,a){const i=Object.values(n).find(s=>o.startsWith(s.id+"/"));return i?(t(i.children||(i.children=[]),r,o.slice(i.id.length)),n):(n.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),n)}return e.sort((n,r)=>n.path.length-r.path.length).reduce((n,r)=>t(n,r,r.path,r.path),[])}function Ht(e){return e.$HEAD||e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Mt({routes:Ce.reduce((e,t)=>{if(!Ht(t))return e;let n=t.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`).split("/").map(r=>r.startsWith(":")||r.startsWith("*")?r:encodeURIComponent(r)).join("/");if(/:[^/]*\?/g.test(n))throw new Error(`Optional parameters are not supported in API routes: ${n}`);if(e[n])throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);return e[n]={route:t},e},{})});function Vt(){function e(n){return{...n,...n.$$route?n.$$route.require().route:void 0,info:{...n.$$route?n.$$route.require().route.info:{},filesystem:!0},component:n.$component&&Dt(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(e):void 0}}return qt.map(e)}let le;const Kt=()=>le||(le=Vt());function Yt(){return v(ze,{get children(){return[[v(H,{name:"description",content:"Cameron Youell's Personal website"}),v(H,{property:"og:title",content:"Cameron Youell"}),v(H,{property:"og:description",content:"Cameron Youell's Personal website"})],v(xt,{get base(){return""},root:e=>v(qe,{get children(){return e.children}}),get children(){return v(Kt,{})}})]}})}const Zt=e=>null;var Gt=I("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const Xt=e=>{const t="Error | Uncaught Client Exception";return v(He,{fallback:n=>(console.error(n),[(()=>{var r=N(Gt);return ge(r,t),r})(),v(Zt,{code:500})]),get children(){return e.children}})};function Jt(e,t){return Ve(e,t)}function ce(e){return e.children}function Qt(){return v(ce,{get children(){return v(ce,{get children(){return v(Xt,{get children(){return v(Yt,{})}})}})}})}Jt(()=>v(Qt,{}),document.getElementById("app"));const nn=void 0;export{nn as default};
