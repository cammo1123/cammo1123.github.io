(this["webpackJsonpreact-site"]=this["webpackJsonpreact-site"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(22),a=n.n(s),o=n(11),i=n(2),l=(n(28),n(29),n(8)),d=n.n(l),h=n(21);function j(){document.documentElement.style.setProperty("--nav-time","0.1s")}function u(){document.documentElement.style.setProperty("--nav-time","0s")}function b(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}function m(e){for(var t=e+"=",n=document.cookie.split(";"),c=0;c<n.length;c++){for(var r=n[c];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null}function p(e,t,n){var c="";if(n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),c="; expires="+r.toUTCString()}document.cookie=e+"="+(t||"")+c+"; path=/; Secure"}var x="";function f(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t||u(),document.title=b(e),h.a.pageview(window.location.pathname+window.location.search,[],document.title),console.log("Sent",window.location.pathname+window.location.search,[],document.title),e=""===e?"#home":"#"+e;var n=d()(e).offset();if(void 0!==n){""!==x&&d()("#"+x).removeClass("active"),d()(e).addClass("active");var c=d()("#active_cover"),r=c.height()+24;d()("#top_fill").css("bottom",window.innerHeight-(n.top-c.height()+24)-14+window.pageYOffset),d()("#bottom_fill").css("top",r+(n.top-c.height()+24)+14-window.pageYOffset),d()("#active_cover").css("top",n.top-c.height()+24+14-window.pageYOffset),x=e.slice(1)}t||j()}function v(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=m("dark")===t+"";n?(document.documentElement.style.setProperty("--background-color","#181a1b"),document.documentElement.style.setProperty("--text-color","#e8e6e3"),document.documentElement.style.setProperty("--shadow-color","#0B0B0B")):(document.documentElement.style.setProperty("--background-color","#fff"),document.documentElement.style.setProperty("--text-color","#000"),document.documentElement.style.setProperty("--shadow-color","#cbcbcb")),p("dark","".concat(n),30)}function O(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=m("collapsed")===t+"";n?(document.documentElement.style.setProperty("--toolbar-width","50px"),document.documentElement.style.setProperty("--toolbar-text","none"),document.documentElement.style.setProperty("--nav-color","transparent"),d()("#collapse").html("<i class='bx bxs-chevron-right'></i>")):(document.documentElement.style.setProperty("--toolbar-width","300px"),document.documentElement.style.setProperty("--toolbar-text","unset"),document.documentElement.style.setProperty("--nav-color","#23a6d5"),d()("#collapse").html("<i class='bx bxs-chevron-left'></i>")),p("collapsed",n+"",30)}h.a.initialize("G-E5FTE66HSQ");var g=n(12),w=n(13),y=n(15),k=n(14),N=(n(32),n(0)),E=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:"cover",children:[Object(N.jsx)("div",{id:"top_fill"}),Object(N.jsxs)("div",{className:"active_cover",id:"active_cover",children:[Object(N.jsx)("div",{className:"child"}),Object(N.jsx)("div",{className:"child2"})]}),Object(N.jsx)("div",{id:"bottom_fill"})]})}}]),n}(c.Component);function _(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:b(e),r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"/"+e;return Object(N.jsx)("div",{className:"navItem",id:e,children:Object(N.jsx)("li",{children:Object(N.jsxs)(n,{to:r,children:[Object(N.jsx)("i",{className:"bx bx-"+t}),Object(N.jsx)("span",{children:c})]})})})}function P(){return f("home"),Object(N.jsx)("div",{className:"center fullpage gradient",children:Object(N.jsxs)("div",{className:"content message",children:[Object(N.jsx)("h1",{children:"Cameron"}),Object(N.jsx)("sub",{children:"I'm Pretty Cool (I Think)"})]})})}n(34);function C(){return f("socials"),Object(N.jsx)("div",{className:"center fullpage gradient",children:Object(N.jsxs)("div",{className:"content",children:[Object(N.jsx)("h1",{className:"tx-center",children:"Add my Socials"}),Object(N.jsxs)("ul",{className:"socials",children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{alt:"instagram",target:"_blank",rel:"noreferrer",href:"https://instagram.com/cammo1123",children:Object(N.jsx)("i",{className:"bx bxl-instagram"})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{alt:"instagram",target:"_blank",rel:"noreferrer",href:"https://snapchat.com/add/cammo11233",children:Object(N.jsx)("i",{className:"bx bxl-snapchat"})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{alt:"instagram",target:"_blank",rel:"noreferrer",href:"https://twitter.com/cammo1123",children:Object(N.jsx)("i",{className:"bx bxl-twitter"})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{alt:"instagram",target:"_blank",rel:"noreferrer",href:"https://twitch.tv/cammo1123",children:Object(N.jsx)("i",{className:"bx bxl-twitch"})})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{alt:"instagram",target:"_blank",rel:"noreferrer",href:"https://discord.com/users/341833124361011200",children:Object(N.jsx)("i",{className:"bx bxl-discord"})})})]})]})})}var S=n(10),R=n.n(S),T=n(18),U=(n(36),function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(e){var c;return Object(g.a)(this,n),(c=t.call(this,e)).state={},c}return Object(w.a)(n,[{key:"getUserRepo",value:function(e){return fetch("https://api.github.com/users/".concat(e,"/repos")).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"componentDidMount",value:function(){var e=Object(T.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUserRepo("cammo1123");case 2:t=e.sent,this.setState({repos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.getUserRepo(t.target[0].value);case 3:n=e.sent,this.setState({repos:n});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=[];if(this.state.repos)for(var n=0;n<this.state.repos.length;n++){var c=this.state.repos[n];if(c.private)break;t.push(Object(N.jsx)("a",{alt:c.full_name,href:c.html_url,target:"_blank",rel:"noreferrer",className:"githubCard",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:c.full_name}),Object(N.jsx)("p",{children:c.description}),Object(N.jsxs)("span",{children:[Object(N.jsx)("i",{className:"bx bx-git-repo-forked"}),c.forks_count,Object(N.jsx)("i",{className:"bx bx-star"}),c.stargazers_count]})]})},n))}return Object(N.jsxs)("div",{className:"githubSearch",children:[Object(N.jsxs)("header",{children:[Object(N.jsx)("h1",{children:"Repositories for"}),Object(N.jsx)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:Object(N.jsx)("input",{type:"text",placeholder:"username",defaultValue:"cammo1123"})})]}),Object(N.jsx)("div",{className:"githubGrid",children:t})]})}}]),n}(c.Component));function A(){return f("projects"),Object(N.jsx)("div",{className:"content",children:Object(N.jsx)(U,{})})}O(null,!0),v(null,!0),a.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(o.a,{children:Object(N.jsxs)("div",{children:[Object(N.jsxs)("nav",{children:[Object(N.jsx)(E,{}),Object(N.jsxs)("ul",{children:[_("home","home",o.b,"Home","/"),_("socials","message",o.b),_("projects","grid",o.b)]}),Object(N.jsx)("button",{id:"collapse",onClick:O,children:Object(N.jsx)("i",{className:"bx bxs-chevron-right"})}),Object(N.jsxs)("span",{id:"copyright",children:["Copyright (c) Cameron Youell",Object(N.jsx)("br",{}),"2021, All Rights Reserved"]}),Object(N.jsx)("button",{id:"adjust",onClick:v,children:Object(N.jsx)("i",{className:"bx bx-adjust"})})]}),Object(N.jsxs)(i.c,{children:[Object(N.jsx)(i.a,{path:"/socials",children:Object(N.jsx)(C,{})}),Object(N.jsx)(i.a,{path:"/projects",children:Object(N.jsx)(A,{})}),Object(N.jsx)(i.a,{path:"/",children:Object(N.jsx)(P,{})})]})]})})}),document.getElementById("root")),window.addEventListener("resize",(function(){f(window.location.pathname.split("/").join(""),!1)})),window.addEventListener("load",(function(){f(window.location.pathname.split("/").join(""),!1)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.3d3c0b10.chunk.js.map