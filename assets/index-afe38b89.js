import{b as f,o as x,i as c,c as d,F as p,d as b,e as $,t as _,s as S,P as C,a as P}from"./index-a7f15577.js";const k=_('<div class="githubSearch"><header><h1>Repositories for</h1><form><input type="text" placeholder="username"></form></header><div class="githubGrid">'),y=_('<div class="loading">'),R=_('<a target="_blank" rel="noreferrer" class="githubCard"><h1></h1><p></p><span><i class="bx bx-git-repo-forked"></i><i class="bx bx-star">'),j=()=>{const[t,a]=f("cammo1123"),[g,r]=f("No results"),[o,u]=f(),h=async s=>{const n=await(await fetch(`https://api.github.com/users/${s}/repos`)).json(),l=n.message;if(!l)u(n),r("Results");else if(l.includes("Not Found")){u([]),r("User not found");return}else if(l.includes("API rate limit exceeded")){u([]),r("API rate limit exceeded");return}};return x(async()=>{await h(t())}),(()=>{const s=k(),i=s.firstChild,n=i.firstChild,l=n.nextSibling,m=l.firstChild,v=i.nextSibling;return l.addEventListener("submit",async e=>{r("Loading..."),e.preventDefault(),await h(t())}),m.addEventListener("change",e=>a(e.currentTarget.value)),c(v,d(p,{get each(){return o()},get fallback(){return(()=>{const e=y();return c(e,g),e})()},children:e=>d(w,{get name(){return e.full_name},get url(){return e.html_url},get forks(){return e.forks_count},get stars(){return e.stargazers_count},get description(){return e.description}})})),b(()=>m.value=t()),s})()},w=t=>(()=>{const a=R(),g=a.firstChild,r=g.nextSibling,o=r.nextSibling,u=o.firstChild,h=u.nextSibling;return c(g,()=>t.name),c(r,()=>t.description??""),c(o,()=>t.forks??0,h),c(o,()=>t.stars??0,null),b(s=>{const i=t.name??"",n=t.url;return i!==s._v$&&$(a,"aria-label",s._v$=i),n!==s._v$2&&$(a,"href",s._v$2=n),s},{_v$:void 0,_v$2:void 0}),a})();function E(){return S("projects"),d(P,{name:"projects",get children(){return d(C,{get children(){return d(j,{})}})}})}export{E as default};
