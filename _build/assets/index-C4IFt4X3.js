const h={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return ue(this.context.count)},getNextContextId(){return ue(this.context.count++)}};function ue(e){const t=String(e),n=t.length-1;return h.context.id+(n?String.fromCharCode(96+n):"")+t}function M(e){h.context=e}function Me(){return{...h.context,id:h.getNextContextId(),count:0}}const Ve=(e,t)=>e===t,ee=Symbol("solid-proxy"),qe=typeof Proxy=="function",He=Symbol("solid-track"),Y={equals:Ve};let q=null,Fe=Pe;const O=1,F=2,Te={owned:null,cleanups:null,context:null,owner:null};var g=null;let u=null,Be=null,y=null,b=null,p=null,W=0;function H(e,t){const n=y,s=g,r=e.length===0,i=t===void 0?s:t,l=r?Te:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=r?e:()=>e(()=>N(()=>L(l)));g=l,y=null;try{return P(o,!0)}finally{y=n,g=s}}function B(e,t){t=t?Object.assign({},Y,t):Y;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(u&&u.running&&u.sources.has(n)?r=r(n.tValue):r=r(n.value)),$e(n,r));return[Ne.bind(n),s]}function T(e,t,n){const s=ie(e,t,!1,O);Q(s)}function E(e,t,n){n=n?Object.assign({},Y,n):Y;const s=ie(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,Q(s),Ne.bind(s)}function Lt(e){return P(e,!1)}function N(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function It(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let d=0;d<e.length;d++)o[d]=e[d]()}else o=e();if(i)return i=!1,l;const f=N(()=>t(o,r,l));return r=o,f}}function J(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function Ue(e,t){q||(q=Symbol("error")),g=ie(void 0,void 0,!0),g.context={...g.context,[q]:[t]},u&&u.running&&u.sources.add(g);try{return e()}catch(n){R(n)}finally{g=g.owner}}function Ke(){return g}function jt(e,t){const n=g,s=y;g=e,y=null;try{return P(t,!0)}catch(r){R(r)}finally{g=n,y=s}}function _t(e){if(u&&u.running)return e(),u.done;const t=y,n=g;return Promise.resolve().then(()=>{y=t,g=n;let s;return te&&(s=u||(u={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),P(e,!1),y=g=null,s?s.done:void 0})}const[Mt,ce]=B(!1);function Re(e){p.push.apply(p,e),e.length=0}function re(e,t){const n=Symbol("context");return{id:n,Provider:We(n),defaultValue:e}}function Ee(e){let t;return g&&g.context&&(t=g.context[e.id])!==void 0?t:e.defaultValue}function De(e){const t=E(e),n=E(()=>ne(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let te;function Ye(){return te||(te=re())}function Ne(){const e=u&&u.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===O)Q(this);else{const t=b;b=null,P(()=>G(this),!1),b=t}if(y){const t=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(t)):(y.sources=[this],y.sourceSlots=[t]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return e&&u.sources.has(this)?this.tValue:this.value}function $e(e,t,n){let s=u&&u.running&&u.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(u){const r=u.running;(r||!n&&u.sources.has(e))&&(u.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&P(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=u&&u.running;l&&u.disposed.has(i)||((l?!i.tState:!i.state)&&(i.pure?b.push(i):p.push(i),i.observers&&ke(i)),l?i.tState=O:i.state=O)}if(b.length>1e6)throw b=[],new Error},!1)}return t}function Q(e){if(!e.fn)return;L(e);const t=W;ae(e,u&&u.running&&u.sources.has(e)?e.tValue:e.value,t),u&&!u.running&&u.sources.has(e)&&queueMicrotask(()=>{P(()=>{u&&(u.running=!0),y=g=e,ae(e,e.tValue,t),y=g=null},!1)})}function ae(e,t,n){let s;const r=g,i=y;y=g=e;try{s=e.fn(t)}catch(l){return e.pure&&(u&&u.running?(e.tState=O,e.tOwned&&e.tOwned.forEach(L),e.tOwned=void 0):(e.state=O,e.owned&&e.owned.forEach(L),e.owned=null)),e.updatedAt=n+1,R(l)}finally{y=i,g=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?$e(e,s,!0):u&&u.running&&e.pure?(u.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function ie(e,t,n,s=O,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return u&&u.running&&(i.state=0,i.tState=s),g===null||g!==Te&&(u&&u.running&&g.pure?g.tOwned?g.tOwned.push(i):g.tOwned=[i]:g.owned?g.owned.push(i):g.owned=[i]),i}function Oe(e){const t=u&&u.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===F)return G(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<W);){if(t&&u.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,i=n[s+1];for(;(r=r.owner)&&r!==i;)if(u.disposed.has(r))return}if((t?e.tState:e.state)===O)Q(e);else if((t?e.tState:e.state)===F){const r=b;b=null,P(()=>G(e,n[0]),!1),b=r}}}function P(e,t){if(b)return e();let n=!1;t||(b=[]),p?n=!0:p=[],W++;try{const s=e();return Ge(n),s}catch(s){n||(p=null),b=null,R(s)}}function Ge(e){if(b&&(Pe(b),b=null),e)return;let t;if(u){if(!u.promises.size&&!u.queue.size){const s=u.sources,r=u.disposed;p.push.apply(p,u.effects),t=u.resolve;for(const i of p)"tState"in i&&(i.state=i.tState),delete i.tState;u=null,P(()=>{for(const i of r)L(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let l=0,o=i.owned.length;l<o;l++)L(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}ce(!1)},!1)}else if(u.running){u.running=!1,u.effects.push.apply(u.effects,p),p=null,ce(!0);return}}const n=p;p=null,n.length&&P(()=>Fe(n),!1),t&&t()}function Pe(e){for(let t=0;t<e.length;t++)Oe(e[t])}function G(e,t){const n=u&&u.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];if(r.sources){const i=n?r.tState:r.state;i===O?r!==t&&(!r.updatedAt||r.updatedAt<W)&&Oe(r):i===F&&G(r,t)}}}function ke(e){const t=u&&u.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=F:s.state=F,s.pure?b.push(s):p.push(s),s.observers&&ke(s))}}function L(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)L(e.tOwned[t]);delete e.tOwned}if(u&&u.running&&e.pure)ve(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)L(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}u&&u.running?e.tState=0:e.state=0}function ve(e,t){if(t||(e.tState=0,u.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)ve(e.owned[n])}function Xe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function de(e,t,n){try{for(const s of t)s(e)}catch(s){R(s,n&&n.owner||null)}}function R(e,t=g){const n=q&&t&&t.context&&t.context[q],s=Xe(e);if(!n)throw s;p?p.push({fn(){de(s,n,t)},state:O}):de(s,n,t)}function ne(e){if(typeof e=="function"&&!e.length)return ne(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ne(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function We(e,t){return function(s){let r;return T(()=>r=N(()=>(g.context={...g.context,[e]:s.value},De(()=>s.children))),void 0),r}}const Je=Symbol("fallback");function he(e){for(let t=0;t<e.length;t++)e[t]()}function Qe(e,t,n={}){let s=[],r=[],i=[],l=0,o=t.length>1?[]:null;return J(()=>he(i)),()=>{let f=e()||[],d=f.length,a,c;return f[He],N(()=>{let w,x,S,v,$,C,A,k,j;if(d===0)l!==0&&(he(i),i=[],s=[],r=[],l=0,o&&(o=[])),n.fallback&&(s=[Je],r[0]=H(_e=>(i[0]=_e,n.fallback())),l=1);else if(l===0){for(r=new Array(d),c=0;c<d;c++)s[c]=f[c],r[c]=H(m);l=d}else{for(S=new Array(d),v=new Array(d),o&&($=new Array(d)),C=0,A=Math.min(l,d);C<A&&s[C]===f[C];C++);for(A=l-1,k=d-1;A>=C&&k>=C&&s[A]===f[k];A--,k--)S[k]=r[A],v[k]=i[A],o&&($[k]=o[A]);for(w=new Map,x=new Array(k+1),c=k;c>=C;c--)j=f[c],a=w.get(j),x[c]=a===void 0?-1:a,w.set(j,c);for(a=C;a<=A;a++)j=s[a],c=w.get(j),c!==void 0&&c!==-1?(S[c]=r[a],v[c]=i[a],o&&($[c]=o[a]),c=x[c],w.set(j,c)):i[a]();for(c=C;c<d;c++)c in S?(r[c]=S[c],i[c]=v[c],o&&(o[c]=$[c],o[c](c))):r[c]=H(m);r=r.slice(0,l=d),s=f.slice(0)}return r});function m(w){if(i[c]=w,o){const[x,S]=B(c);return o[c]=S,t(f[c],x)}return t(f[c])}}}let Le=!1;function Ze(){Le=!0}function X(e,t){if(Le&&h.context){const n=h.context;M(Me());const s=N(()=>e(t||{}));return M(n),s}return N(()=>e(t||{}))}function D(){return!0}const ze={get(e,t,n){return t===ee?n:e.get(t)},has(e,t){return t===ee?!0:e.has(t)},set:D,deleteProperty:D,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:D,deleteProperty:D}},ownKeys(e){return e.keys()}};function z(e){return(e=typeof e=="function"?e():e)?e:{}}function et(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Vt(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&ee in o,e[l]=typeof o=="function"?(t=!0,E(o)):o}if(qe&&t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const f=z(e[o])[l];if(f!==void 0)return f}},has(l){for(let o=e.length-1;o>=0;o--)if(l in z(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(z(e[o])));return[...new Set(l)]}},ze);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const f=Object.getOwnPropertyNames(o);for(let d=f.length-1;d>=0;d--){const a=f[d];if(a==="__proto__"||a==="constructor")continue;const c=Object.getOwnPropertyDescriptor(o,a);if(!s[a])s[a]=c.get?{enumerable:!0,configurable:!0,get:et.bind(n[a]=[c.get.bind(o)])}:c.value!==void 0?c:void 0;else{const m=n[a];m&&(c.get?m.push(c.get.bind(o)):c.value!==void 0&&m.push(()=>c.value))}}}const r={},i=Object.keys(s);for(let l=i.length-1;l>=0;l--){const o=i[l],f=s[o];f&&f.get?Object.defineProperty(r,o,f):r[o]=f?f.value:void 0}return r}let tt=0;function nt(){return h.context?h.getNextContextId():`cl-${tt++}`}const st=e=>`Stale read from <${e}>.`;function qt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return E(Qe(()=>e.each,e.children,t||void 0))}function Ht(e){const t=e.keyed,n=E(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return E(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?N(()=>r(t?s:()=>{if(!N(n))throw st("Show");return e.when})):r}return e.fallback},void 0,void 0)}let V;function Ft(){V&&[...V].forEach(e=>e())}function Bt(e){let t;h.context&&h.load&&(t=h.load(h.getContextId()));const[n,s]=B(t,void 0);return V||(V=new Set),V.add(s),J(()=>V.delete(s)),E(()=>{let r;if(r=n()){const i=e.fallback;return typeof i=="function"&&i.length?N(()=>i(r,()=>s())):i}return Ue(()=>e.children,s)},void 0,void 0)}const rt=re();function Ut(e){let t=0,n,s,r,i,l;const[o,f]=B(!1),d=Ye(),a={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:o,effects:[],resolved:!1},c=Ke();if(h.context&&h.load){const x=h.getContextId();let S=h.load(x);if(S&&(typeof S!="object"||S.status!=="success"?r=S:h.gather(x)),r&&r!=="$$f"){const[v,$]=B(void 0,{equals:!1});i=v,r.then(()=>{if(h.done)return $();h.gather(x),M(s),$(),M()},C=>{l=C,$()})}}const m=Ee(rt);m&&(n=m.register(a.inFallback));let w;return J(()=>w&&w()),X(d.Provider,{value:a,get children(){return E(()=>{if(l)throw l;if(s=h.context,i)return i(),i=void 0;s&&r==="$$f"&&M();const x=E(()=>e.children);return E(S=>{const v=a.inFallback(),{showContent:$=!0,showFallback:C=!0}=n?n():{};if((!v||r&&r!=="$$f")&&$)return a.resolved=!0,w&&w(),w=s=r=void 0,Re(a.effects),x();if(C)return w?S:H(A=>(w=A,s&&(M({id:s.id+"F",count:0}),s=void 0),e.fallback),c)})})}})}const it=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ot=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...it]),lt=new Set(["innerHTML","textContent","innerText","children"]),ft=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ut=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ct(e,t){const n=ut[e];return typeof n=="object"?n[t]?n.$:void 0:n}const at=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function dt(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,f=t[r-1].nextSibling,d=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const a=i<s?o?n[o-1].nextSibling:n[i-o]:f;for(;o<i;)e.insertBefore(n[o++],a)}else if(i===o)for(;l<r;)(!d||!d.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const a=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],a),t[r]=n[i]}else{if(!d){d=new Map;let c=o;for(;c<i;)d.set(n[c],c++)}const a=d.get(t[l]);if(a!=null)if(o<a&&a<i){let c=l,m=1,w;for(;++c<r&&c<i&&!((w=d.get(t[c]))==null||w!==a+m);)m++;if(m>a-o){const x=t[l];for(;o<a;)e.insertBefore(n[o++],x)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const ge="_$DX_DELEGATE";function ye(e,t,n,s={}){let r;return H(i=>{r=i,t===document?e():le(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function oe(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},i=()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function ht(e,t=window.document){const n=t[ge]||(t[ge]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Ct))}}function Kt(e,t,n){I(e)||(e[t]=n)}function U(e,t,n){I(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function gt(e,t,n){I(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function Z(e,t){I(e)||(t==null?e.removeAttribute("class"):e.className=t)}function yt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function mt(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(we(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(we(e,o,!0),n[o]=f)}return n}function wt(e,t,n){if(!t)return n?U(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function me(e,t={},n,s){const r={};return T(()=>r.children=K(e,t.children,r.children)),T(()=>typeof t.ref=="function"&&pt(t.ref,e)),T(()=>bt(e,t,n,!0,r,!0)),r}function pt(e,t,n){return N(()=>e(t,n))}function le(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return K(e,t,s,n);T(r=>K(e,t(),r,n),s)}function bt(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=pe(e,l,null,r[l],n,i,t)}for(const l in t){if(l==="children")continue;const o=t[l];r[l]=pe(e,l,o,r[l],n,i,t)}}function xt(e,t,n={}){if(globalThis._$HY.done)return ye(e,t,[...t.childNodes],n);h.completed=globalThis._$HY.completed,h.events=globalThis._$HY.events,h.load=s=>globalThis._$HY.r[s],h.has=s=>s in globalThis._$HY.r,h.gather=s=>xe(t,s),h.registry=new Map,h.context={id:n.renderId||"",count:0};try{return xe(t,n.renderId),ye(e,t,[...t.childNodes],n)}finally{h.context=null}}function fe(e){let t,n;return!I()||!(t=h.registry.get(n=At()))?e():(h.completed&&h.completed.add(t),h.registry.delete(n),t)}function Rt(e){let t=e,n=0,s=[];if(I(e))for(;t;){if(t.nodeType===8){const r=t.nodeValue;if(r==="$")n++;else if(r==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function I(e){return!!h.context&&!h.done&&(!e||e.isConnected)}function St(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function we(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function pe(e,t,n,s,r,i,l){let o,f,d,a,c;if(t==="style")return wt(e,n,s);if(t==="classList")return mt(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const m=t.slice(3);s&&e.removeEventListener(m,s,typeof s!="function"&&s),n&&e.addEventListener(m,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const m=t.slice(10);s&&e.removeEventListener(m,s,!0),n&&e.addEventListener(m,n,!0)}else if(t.slice(0,2)==="on"){const m=t.slice(2).toLowerCase(),w=at.has(m);if(!w&&s){const x=Array.isArray(s)?s[0]:s;e.removeEventListener(m,x)}(w||n)&&(yt(e,m,n,w),w&&ht([m]))}else if(t.slice(0,5)==="attr:")U(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")gt(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(d=lt.has(t))||(a=ct(t,e.tagName))||(f=ot.has(t))||(o=e.nodeName.includes("-")||"is"in l)){if(c)t=t.slice(5),f=!0;else if(I(e))return n;t==="class"||t==="className"?Z(e,n):o&&!f&&!d?e[St(t)]=n:e[a||t]=n}else U(e,ft[t]||t,n);return n}function Ct(e){if(h.registry&&h.events&&h.events.find(([f,d])=>d===e))return;let t=e.target;const n=`$$${e.type}`,s=e.target,r=e.currentTarget,i=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),l=()=>{const f=t[n];if(f&&!t.disabled){const d=t[`${n}Data`];if(d!==void 0?f.call(t,d,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},o=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),h.registry&&!h.done&&(h.done=_$HY.done=!0),e.composedPath){const f=e.composedPath();i(f[0]);for(let d=0;d<f.length-2&&(t=f[d],!!l());d++){if(t._$host){t=t._$host,o();break}if(t.parentNode===r)break}}else o();i(s)}function K(e,t,n,s,r){const i=I(e);if(i){!n&&(n=[...e.childNodes]);let f=[];for(let d=0;d<n.length;d++){const a=n[d];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():f.push(a)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(i||l==="number"&&(t=t.toString(),t===n))return n;if(o){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=_(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(i)return n;n=_(e,n,s)}else{if(l==="function")return T(()=>{let f=t();for(;typeof f=="function";)f=f();n=K(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[],d=n&&Array.isArray(n);if(se(f,t,n,r))return T(()=>n=K(e,f,n,s,!0)),()=>n;if(i){if(!f.length)return n;if(s===void 0)return n=[...e.childNodes];let a=f[0];if(a.parentNode!==e)return n;const c=[a];for(;(a=a.nextSibling)!==s;)c.push(a);return n=c}if(f.length===0){if(n=_(e,n,s),o)return n}else d?n.length===0?be(e,f,s):dt(e,n,f):(n&&_(e),be(e,f));n=f}else if(t.nodeType){if(i&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=_(e,n,s,t);_(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function se(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],f=n&&n[e.length],d;if(!(o==null||o===!0||o===!1))if((d=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=se(e,o,f)||r;else if(d==="function")if(s){for(;typeof o=="function";)o=o();r=se(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||r}else e.push(o),r=!0;else{const a=String(o);f&&f.nodeType===3&&f.data===a?e.push(f):e.push(document.createTextNode(a))}}return r}function be(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function _(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const f=o.parentNode===e;!i&&!l?f?e.replaceChild(r,o):e.insertBefore(r,n):f&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function xe(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const r=n[s],i=r.getAttribute("data-hk");(!t||i.startsWith(t))&&!h.registry.has(i)&&h.registry.set(i,r)}}function At(){return h.getNextContextId()}const Dt=()=>{},Yt=!1,Gt=(...e)=>(Ze(),xt(...e)),Ie=re(),Tt=["title","meta"],Se=[],Ce=["name","http-equiv","content","charset","media"].concat(["property"]),Ae=(e,t)=>{const n=Object.fromEntries(Object.entries(e.props).filter(([s])=>t.includes(s)).sort());return(Object.hasOwn(n,"name")||Object.hasOwn(n,"property"))&&(n.name=n.name||n.property,delete n.property),e.tag+JSON.stringify(n)};function Et(){if(!h.context){const n=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(n,s=>s.parentNode.removeChild(s))}const e=new Map;function t(n){if(n.ref)return n.ref;let s=document.querySelector(`[data-sm="${n.id}"]`);return s?(s.tagName.toLowerCase()!==n.tag&&(s.parentNode&&s.parentNode.removeChild(s),s=document.createElement(n.tag)),s.removeAttribute("data-sm")):s=document.createElement(n.tag),s}return{addTag(n){if(Tt.indexOf(n.tag)!==-1){const i=n.tag==="title"?Se:Ce,l=Ae(n,i);e.has(l)||e.set(l,[]);let o=e.get(l),f=o.length;o=[...o,n],e.set(l,o);let d=t(n);n.ref=d,me(d,n.props);let a=null;for(var s=f-1;s>=0;s--)if(o[s]!=null){a=o[s];break}return d.parentNode!=document.head&&document.head.appendChild(d),a&&a.ref&&a.ref.parentNode&&document.head.removeChild(a.ref),f}let r=t(n);return n.ref=r,me(r,n.props),r.parentNode!=document.head&&document.head.appendChild(r),-1},removeTag(n,s){const r=n.tag==="title"?Se:Ce,i=Ae(n,r);if(n.ref){const l=e.get(i);if(l){if(n.ref.parentNode){n.ref.parentNode.removeChild(n.ref);for(let o=s-1;o>=0;o--)l[o]!=null&&document.head.appendChild(l[o].ref)}l[s]=null,e.set(i,l)}else n.ref.parentNode&&n.ref.parentNode.removeChild(n.ref)}}}}const Nt=e=>{const t=Et();return X(Ie.Provider,{value:t,get children(){return e.children}})},je=(e,t,n)=>($t({tag:e,props:t,setting:n,id:nt(),get name(){return t.name||t.property}}),null);function $t(e){const t=Ee(Ie);if(!t)throw new Error("<MetaProvider /> should be in the tree");T(()=>{const n=t.addTag(e);J(()=>t.removeTag(e,n))})}const Ot=e=>je("title",e,{escape:!0,close:!0}),Xt=e=>je("meta",e);var Pt=oe("<div>"),kt=oe("<section><div class=content>"),vt=oe("<li><a target=_blank rel=noreferrer><i>");const Wt=e=>(()=>{var t=fe(Pt);return le(t,()=>e.children),T(()=>Z(t,e.name)),t})(),Jt=e=>(()=>{var t=fe(kt),n=t.firstChild;return le(n,()=>e.children),T(()=>Z(t,`${e.name??""} ${e.class??""}`)),t})(),Qt=e=>(()=>{var t=fe(vt),n=t.firstChild,s=n.firstChild;return T(r=>{var i=e.icon,l=e.url,o="bx bxl-"+e.icon;return i!==r.e&&U(n,"aria-label",r.e=i),l!==r.t&&U(n,"href",r.t=l),o!==r.a&&Z(s,r.a=o),r},{e:void 0,t:void 0,a:void 0}),t})(),Zt=e=>X(Nt,{get children(){return X(Ot,{get children(){return[E(()=>e.children)," | Cameron Youell"]}})}});export{Wt as A,Ut as B,Nt as C,Gt as D,Bt as E,qt as F,Kt as G,Qt as L,Xt as M,Jt as P,Ht as S,re as a,B as b,E as c,T as d,Lt as e,N as f,Ke as g,Ft as h,Yt as i,X as j,De as k,H as l,Vt as m,J as n,It as o,h as p,ht as q,jt as r,_t as s,Zt as t,Ee as u,Dt as v,fe as w,le as x,oe as y,Rt as z};
