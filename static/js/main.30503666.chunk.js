(this["webpackJsonpreact-site"]=this["webpackJsonpreact-site"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t),n.d(t,"LINK",(function(){return x}));var c=n(0),o=n.n(c),r=n(20),i=n.n(r),s=n(13),l=n(2),a=(n(26),n(8)),d=n(16),u=n(17),m=n(19),b=n(18),j=(n(27),n(1)),h=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"cover",children:[Object(j.jsx)("div",{id:"top_fill"}),Object(j.jsxs)("div",{className:"active_cover",id:"active_cover",children:[Object(j.jsx)("div",{className:"child"}),Object(j.jsx)("div",{className:"child2"})]}),Object(j.jsx)("div",{id:"bottom_fill"})]})}}]),n}(c.Component);function p(e){return Object(j.jsxs)("nav",{children:[Object(j.jsx)(h,{}),Object(j.jsx)("ul",{children:e.children}),Object(j.jsx)("button",{id:"collapse",onClick:a.a,children:Object(j.jsx)("i",{className:"bx bx-chevron-"+e.arrowDir})}),Object(j.jsxs)("span",{id:"copyright",children:["Copyright (c) Cameron Youell",Object(j.jsx)("br",{}),"2021, All Rights Reserved"]}),Object(j.jsx)("button",{id:"adjust",onClick:a.b,children:Object(j.jsx)("i",{className:"bx bx-adjust"})})]})}function v(e){var t,n;return n=void 0===e.path?"/"+e.id:e.path,t=void 0===e.name?Object(a.d)(e.id):e.name,Object(j.jsx)("div",{className:"navItem",id:e.id,children:Object(j.jsx)("li",{children:Object(j.jsxs)(x,{to:n,children:[Object(j.jsx)("i",{className:"bx bx-"+e.iconName}),Object(j.jsx)("span",{children:t})]})})})}var f=Object(a.a)(null,!0),x=s.b;Object(a.b)(null,!0);var O=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,43))})),y=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,44))})),g=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,45))}));i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsxs)(s.a,{children:[Object(j.jsxs)(p,{arrowDir:f,children:[Object(j.jsx)(v,{id:"home",iconName:"home",path:"/"}),Object(j.jsx)(v,{id:"socials",iconName:"message"}),Object(j.jsx)(v,{id:"projects",iconName:"grid-alt"})]}),Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)("div",{className:"center fullscreen content",children:"Loading..."}),children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(j.jsx)(l.a,{path:"/socials",component:O}),Object(j.jsx)(l.a,{path:"/projects",component:g})]})})]})}),document.getElementById("root")),window.addEventListener("resize",(function(){var e=window.location.pathname.split("/").join("");Object(a.c)(e,!1)})),window.addEventListener("load",(function(){var e=window.location.pathname.split("/").join("");Object(a.c)(e,!1)}))},8:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return b}));var c=n(7),o=n.n(c);function r(){document.documentElement.style.setProperty("--nav-time","0.1s")}function i(){document.documentElement.style.setProperty("--nav-time","0s")}function s(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}function l(e){for(var t=e+"=",n=document.cookie.split(";"),c=0;c<n.length;c++){for(var o=n[c];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null}function a(e,t,n){var c="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),c="; expires="+o.toUTCString()}document.cookie=e+"="+(t||"")+c+"; path=/; Secure"}var d="";function u(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=""===e?"home":e,t||i(),document.title="Cameron | "+s(e),e="#"+e;var n=o()(e).offset();if(void 0!==n){""!==d&&o()("#"+d).removeClass("active"),o()(e).addClass("active");var c=o()("#active_cover"),l=c.height()+24;o()("#top_fill").css("bottom",window.innerHeight-(n.top-c.height()+24)-14+window.pageYOffset),o()("#bottom_fill").css("top",l+(n.top-c.height()+24)+14-window.pageYOffset),o()("#active_cover").css("top",n.top-c.height()+24+14-window.pageYOffset),d=e.slice(1)}t||r()}function m(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=l("dark")===t+"";n?(document.documentElement.style.setProperty("--background-color","#181a1b"),document.documentElement.style.setProperty("--text-color","#e8e6e3"),document.documentElement.style.setProperty("--shadow-color","#0B0B0B")):(document.documentElement.style.setProperty("--background-color","#fff"),document.documentElement.style.setProperty("--text-color","#000"),document.documentElement.style.setProperty("--shadow-color","#cbcbcb")),a("dark","".concat(n),30)}function b(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=l("collapsed")===t+"";return a("collapsed",n+"",30),n?(document.documentElement.style.setProperty("--toolbar-width","50px"),document.documentElement.style.setProperty("--toolbar-text","none"),document.documentElement.style.setProperty("--nav-color","transparent"),o()("#collapse").html("<i class='bx bxs-chevron-right'></i>"),"right"):(document.documentElement.style.setProperty("--toolbar-width","300px"),document.documentElement.style.setProperty("--toolbar-text","unset"),document.documentElement.style.setProperty("--nav-color","#23a6d5"),o()("#collapse").html("<i class='bx bxs-chevron-left'></i>"),"left")}}},[[37,1,2]]]);
//# sourceMappingURL=main.30503666.chunk.js.map