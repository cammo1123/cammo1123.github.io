(this["webpackJsonpreact-site"]=this["webpackJsonpreact-site"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(21),o=n.n(r),a=n(11),i=n(2),l=(n(27),n(7)),d=n.n(l);function u(){document.documentElement.style.setProperty("--nav-time","0.1s")}function h(){document.documentElement.style.setProperty("--nav-time","0s")}function j(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}function m(e){for(var t=e+"=",n=document.cookie.split(";"),c=0;c<n.length;c++){for(var s=n[c];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return null}function b(e,t,n){var c="";if(n){var s=new Date;s.setTime(s.getTime()+24*n*60*60*1e3),c="; expires="+s.toUTCString()}document.cookie=e+"="+(t||"")+c+"; path=/; Secure"}var p="";function x(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=""===e?"home":e,t||h(),document.title="Cameron | "+j(e),e="#"+e;var n=d()(e).offset();if(void 0!==n){""!==p&&d()("#"+p).removeClass("active"),d()(e).addClass("active");var c=d()("#active_cover"),s=c.height()+24;d()("#top_fill").css("bottom",window.innerHeight-(n.top-c.height()+24)-14+window.pageYOffset),d()("#bottom_fill").css("top",s+(n.top-c.height()+24)+14-window.pageYOffset),d()("#active_cover").css("top",n.top-c.height()+24+14-window.pageYOffset),p=e.slice(1)}t||u()}function f(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=m("dark")===t+"";n?(document.documentElement.style.setProperty("--background-color","#181a1b"),document.documentElement.style.setProperty("--text-color","#e8e6e3"),document.documentElement.style.setProperty("--shadow-color","#0B0B0B")):(document.documentElement.style.setProperty("--background-color","#fff"),document.documentElement.style.setProperty("--text-color","#000"),document.documentElement.style.setProperty("--shadow-color","#cbcbcb")),b("dark","".concat(n),30)}function v(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=m("collapsed")===t+"";return b("collapsed",n+"",30),n?(document.documentElement.style.setProperty("--toolbar-width","50px"),document.documentElement.style.setProperty("--toolbar-text","none"),document.documentElement.style.setProperty("--nav-color","transparent"),d()("#collapse").html("<i class='bx bxs-chevron-right'></i>"),"bx bxs-chevron-right"):(document.documentElement.style.setProperty("--toolbar-width","300px"),document.documentElement.style.setProperty("--toolbar-text","unset"),document.documentElement.style.setProperty("--nav-color","#23a6d5"),d()("#collapse").html("<i class='bx bxs-chevron-left'></i>"),"bx bxs-chevron-left")}var O=n(12),g=n(13),y=n(15),w=n(14),k=(n(28),n(0)),N=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"cover",children:[Object(k.jsx)("div",{id:"top_fill"}),Object(k.jsxs)("div",{className:"active_cover",id:"active_cover",children:[Object(k.jsx)("div",{className:"child"}),Object(k.jsx)("div",{className:"child2"})]}),Object(k.jsx)("div",{id:"bottom_fill"})]})}}]),n}(c.Component);function E(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:j(e),s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"/"+e;return Object(k.jsx)("div",{className:"navItem",id:e,children:Object(k.jsx)("li",{children:Object(k.jsxs)(n,{to:s,children:[Object(k.jsx)("i",{className:"bx bx-"+t}),Object(k.jsx)("span",{children:c})]})})})}n(30);function C(){return x("home"),Object(k.jsx)("div",{className:"center fullpage gradient",children:Object(k.jsxs)("div",{className:"content message",children:[Object(k.jsx)("h1",{children:"Cameron"}),Object(k.jsx)("sub",{children:"I'm Pretty Cool (I Think)"})]})})}n(31);function P(){return x("socials"),Object(k.jsx)("div",{className:"center fullpage gradient",children:Object(k.jsxs)("div",{className:"content",children:[Object(k.jsx)("h1",{className:"tx-center",children:"Add my Socials"}),Object(k.jsxs)("ul",{className:"socials",children:[e("instagram","https://instagram.com/cammo1123"),e("snapchat","https://snapchat.com/add/cammo11233"),e("twitter","https://twitter.com/cammo1123"),e("twitch","https://twitch.tv/cammo1123"),e("discord","https://discord.com/users/341833124361011200")]})]})});function e(e,t){return Object(k.jsx)("li",{children:Object(k.jsx)("a",{alt:e,target:"_blank",rel:"noreferrer",href:t,children:Object(k.jsx)("i",{className:"bx bxl-"+e})})})}}var _=n(10),S=n.n(_),R=n(18),U=(n(33),function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(e){var c;return Object(O.a)(this,n),(c=t.call(this,e)).state={},c}return Object(g.a)(n,[{key:"getUserRepo",value:function(e){return fetch("https://api.github.com/users/".concat(e,"/repos")).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"componentDidMount",value:function(){var e=Object(R.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUserRepo("cammo1123");case 2:t=e.sent,this.setState({repos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(R.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.getUserRepo(t.target[0].value);case 3:n=e.sent,this.setState({repos:n});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=[];if(this.state.repos)for(var n=0;n<this.state.repos.length;n++){var c=this.state.repos[n];if(c.private)break;t.push(Object(k.jsxs)("a",{alt:c.full_name,href:c.html_url,target:"_blank",rel:"noreferrer",className:"githubCard",children:[Object(k.jsx)("h1",{children:c.full_name}),Object(k.jsx)("p",{children:c.description}),Object(k.jsxs)("span",{children:[Object(k.jsx)("i",{className:"bx bx-git-repo-forked"}),c.forks_count,Object(k.jsx)("i",{className:"bx bx-star"}),c.stargazers_count]})]},n))}return Object(k.jsxs)("div",{className:"githubSearch",children:[Object(k.jsxs)("header",{children:[Object(k.jsx)("h1",{children:"Repositories for"}),Object(k.jsx)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:Object(k.jsx)("input",{type:"text",placeholder:"username",defaultValue:"cammo1123"})})]}),Object(k.jsx)("div",{className:"githubGrid",children:t})]})}}]),n}(c.Component));function A(){return x("projects"),Object(k.jsx)("div",{className:"content",children:Object(k.jsx)(U,{})})}var B=v(null,!0);f(null,!0),o.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(a.a,{children:Object(k.jsxs)("div",{children:[Object(k.jsxs)("nav",{children:[Object(k.jsx)(N,{}),Object(k.jsxs)("ul",{children:[E("home","home",a.b,"Home","/"),E("socials","message",a.b),E("projects","grid",a.b)]}),Object(k.jsx)("button",{id:"collapse",onClick:v,children:Object(k.jsx)("i",{className:B})}),Object(k.jsxs)("span",{id:"copyright",children:["Copyright (c) Cameron Youell",Object(k.jsx)("br",{}),"2021, All Rights Reserved"]}),Object(k.jsx)("button",{id:"adjust",onClick:f,children:Object(k.jsx)("i",{className:"bx bx-adjust"})})]}),Object(k.jsxs)(i.c,{children:[Object(k.jsx)(i.a,{path:"/socials",children:Object(k.jsx)(P,{})}),Object(k.jsx)(i.a,{path:"/projects",children:Object(k.jsx)(A,{})}),Object(k.jsx)(i.a,{path:"/",children:Object(k.jsx)(C,{})})]})]})})}),document.getElementById("root")),window.addEventListener("resize",(function(){x(window.location.pathname.split("/").join(""),!1)})),window.addEventListener("load",(function(){x(window.location.pathname.split("/").join(""),!1)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.37a4d88a.chunk.js.map