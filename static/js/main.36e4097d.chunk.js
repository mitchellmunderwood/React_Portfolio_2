(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),a=c(9),o=c.n(a),l=(c(50),c(11)),r=c(4),d=c(6),j=c(42),b=c(15),h="SET_POST",m="SET_PROJECT",u="SET_CONTENT",x=Object(s.createContext)(),O=x.Provider,p=function(e,t){switch(t.type){case u:return console.log("Reducer - set content to:, action.content"),Object(b.a)(Object(b.a)({},e),{},{posts:t.content.posts,projects:t.content.projects});case"SET_PAGE":return console.log("Reducer - set page to: ",t.page),Object(b.a)(Object(b.a)({},e),{},{page:t.page});case h:return console.log("Reducer - set page to: ",t.post),Object(b.a)(Object(b.a)({},e),{},{post:t.post});case m:return console.log("Reducer - set page to: ",t.project),Object(b.a)(Object(b.a)({},e),{},{project:t.project});default:return console.log("Reducer - Default, Return State:",t),e}},g=function(e){e.value;var t=Object(j.a)(e,["value"]),c=Object(s.useReducer)(p,{page:null,posts:[],post:{},projects:[],project:{},description:""}),i=Object(l.a)(c,2),a=i[0],o=i[1];return Object(n.jsx)(O,Object(b.a)({value:[a,o]},t))},v=function(){return Object(s.useContext)(x)},f={posts:[{imageRef:"/parentconnect.png",type:"Post",title:"title",date:"12/31/20",description:"a short post description",color:"red"}],projects:[{type:"Project",date:"TBD",title:"Parent Connect",description:"Homeschool together during COVID",imageRef:"/parentconnect.png",repoLink:"github.com/mitchellmunderwood/Parent-Connect",liveLink:"parent-connect.herokuapp.com/",badges:["JS","HTML/CSS","Handlebars","Express","Node","MySQL"],color:"yellow"},{type:"Project",date:"TBD",title:"Party Planner",description:"Discover meals and cocktails",imageRef:"/party_planner.png",repoLink:"github.com/mitchellmunderwood/Party-Planning-Committee",liveLink:"mitchellmunderwood.github.io/Party-Planning-Committee/",badges:["JS","HTML/CSS","Material Design","MealsDB API","DrinksDB API"],color:"gray"},{type:"Project",date:"TBD",title:"Eat-Da-Burger!",description:"Eat delicious burgers",imageRef:"/burgers.png",repoLink:"github.com/mitchellmunderwood/Burger-Buddy",liveLink:"burger-buddy-mu.herokuapp.com/",badges:["JS","HTML/CSS","Express","Node","MySQL"],color:"green"},{type:"Project",date:"TBD",title:"Daily Forecast",description:"Get your local weather",imageRef:"/weather.png",repoLink:"github.com/mitchellmunderwood/Weather-App",liveLink:"mitchellmunderwood.github.io/Weather-App/",badges:["JS","HTML/CSS","Bootstrap","OpenWeather API"],color:"red"},{type:"Project",date:"TBD",title:"Code Quiz",description:"Test your JS knowledge",imageRef:"/quiz.png",repoLink:"github.com/mitchellmunderwood/Code-Quiz",liveLink:"mitchellmunderwood.github.io/Code-Quiz/",badges:["JS","HTML/CSS"],color:"blue"},{type:"Project",date:"TBD",title:"Password Generator",description:"Stay safe with secure passwords",imageRef:"/password.png",repoLink:"github.com/mitchellmunderwood/Password-Generator",deployLink:"mitchellmunderwood.github.io/Password-Generator/",badges:["JS"],color:"orange"}]},N=(c(51),c(30)),w=(c(52),c(53),c(106));var k=function(e){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(n.jsxs)("div",{id:"thing",children:[Object(n.jsxs)("div",{className:"nav-left",children:[Object(n.jsx)(w.a,{onClick:e.toggle("left",!0),id:"toggler-btn",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)(d.b,{exact:!0,path:"/"}),Object(n.jsxs)(d.b,{exact:!0,path:["/About","/Posts","/Post","/Projects","/Project"],children:[Object(n.jsx)("h3",{id:"toggler-initials",className:"text-center",children:Object(n.jsxs)(r.c,{to:"/",children:[Object(n.jsx)("strong",{children:"M"}),"U"]})}),Object(n.jsx)("h3",{id:"toggler-name",className:"text-center",children:Object(n.jsxs)(r.c,{to:"/",children:[Object(n.jsx)("strong",{children:"Mitchell"})," Underwood"]})})]})]}),Object(n.jsxs)("div",{id:"nav-center",className:"inner d-flex justify-content-center align-items-center",children:[Object(n.jsxs)("nav",{id:"toggler-nav",className:"nav nav-masthead justify-content-center",children:[Object(n.jsx)(r.c,{to:"/Posts",id:"link-blog",className:"nav-link ",activeClassName:"nav-link active-red",children:"Posts"}),Object(n.jsx)(r.c,{to:"/Projects",id:"link-project",className:"nav-link",activeClassName:"nav-link active-blue",children:"Projects"}),Object(n.jsx)(r.c,{to:"/About",id:"link-about",className:"nav-link",activeClassName:"nav-link active-green",children:"About"})]}),Object(n.jsx)("h3",{id:"toggler-name-center",className:"text-center",children:Object(n.jsxs)("a",{children:[Object(n.jsx)("strong",{children:"Mitchell"})," Underwood"]})}),Object(n.jsx)("h3",{id:"toggler-initials-center",className:"text-center",children:Object(n.jsxs)("a",{children:[Object(n.jsx)("strong",{children:"M"}),"U"]})})]})]})})})},P=c(105);c(59);function y(e){return Object(n.jsx)("div",{className:"drawer-macro",role:"presentation",onClick:e.toggle("left",!1),onKeyDown:e.toggle("left",!1),children:Object(n.jsx)("div",{className:"mdc-drawer__content",children:Object(n.jsxs)("nav",{className:"mdc-list",children:[Object(n.jsx)("a",{className:"mdc-list-item","aria-selected":"true",children:Object(n.jsx)(r.c,{to:"/",children:Object(n.jsxs)("h4",{children:[Object(n.jsx)("strong",{children:"Mitchell"})," Underwood"]})})}),Object(n.jsx)("a",{className:"mdc-list-item ","aria-selected":"true",children:Object(n.jsx)("span",{className:"mdc-list-item__text",children:Object(n.jsx)(r.c,{to:"/Posts",children:"Posts"})})}),Object(n.jsx)("a",{className:"mdc-list-item",children:Object(n.jsx)("span",{className:"mdc-list-item__text",children:Object(n.jsx)(r.c,{to:"/Projects",children:"Projects"})})}),Object(n.jsx)("a",{className:"mdc-list-item",children:Object(n.jsx)("span",{className:"mdc-list-item__text",children:Object(n.jsx)(r.c,{to:"/About",children:"About"})})}),Object(n.jsx)("hr",{className:"mdc-list-divider"}),Object(n.jsx)("h3",{className:" gd-nav-drawer--subheader",children:"Connect"}),Object(n.jsxs)("div",{className:"drawer-connect-block",children:[Object(n.jsx)("a",{className:"mdc-list-item",href:"https://www.linkedin.com/in/mitchellmunderwood","aria-selected":"true",children:Object(n.jsx)("span",{className:"mdc-list-item__text",children:"LinkedIn"})}),Object(n.jsx)("a",{className:"mdc-list-item",href:"https://www.github.com/mitchellmunderwood",children:Object(n.jsx)("span",{className:"mdc-list-item__text",children:"Github"})}),Object(n.jsx)(r.c,{onClick:function(){window.scrollTo(0,500)},className:"mdc-list-item",to:"/About",children:Object(n.jsx)("span",{className:"mdc-list-item__text",children:"Contact"})})]}),Object(n.jsx)("hr",{className:"mdc-list-divider"}),Object(n.jsx)("h3",{className:"gd-nav-drawer--subheader",children:"Mitchell Underwood"}),Object(n.jsx)("p",{className:"drawer-text",children:"Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information."})]})})})}var C=function(){var e=i.a.useState({left:!1}),t=Object(l.a)(e,2),c=t[0],s=t[1],a=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&s(Object(b.a)(Object(b.a)({},c),{},Object(N.a)({},e,t)))}};return Object(n.jsxs)("div",{className:"NavigationParent",children:[Object(n.jsx)(P.a,{anchor:"left",open:c.left,onClose:a("left",!1),children:Object(n.jsx)(y,{toggle:a})}),Object(n.jsx)(k,{toggle:a})]})};c(60);var T=function(){return Object(n.jsx)("footer",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-7 py-4",children:[Object(n.jsx)("h4",{className:"",children:"Mitchell Underwood"}),Object(n.jsx)("p",{className:"text-muted",children:"Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information."})]}),Object(n.jsxs)("div",{className:"col-md-2 offset-md-1 py-4",children:[Object(n.jsx)("h4",{children:"Navigation"}),Object(n.jsxs)("ul",{className:"list-unstyled",children:[Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{onClick:function(){window.scrollTo(0,0)},to:"/Posts",children:"Posts"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{onClick:function(){window.scrollTo(0,0)},to:"/Projects",children:"Projects"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{onClick:function(){window.scrollTo(0,0)},to:"/About",children:"About"})})]})]}),Object(n.jsxs)("div",{className:"col-md-2 py-4",children:[Object(n.jsx)("h4",{children:"Connect"}),Object(n.jsxs)("ul",{className:"list-unstyled",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.github.com/mitchellmunderwood",children:"Github"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/mitchellmunderwood",children:"LinkedIn"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{onClick:function(){window.scrollTo(0,500)},to:"/About",children:"Contact"})})]})]})]})})})};c(61),c(62);var L=function(e){return Object(n.jsx)("main",{role:"main",children:Object(n.jsx)("div",{className:"container",children:e.children})})};c(63);var S=function(e){return Object(n.jsx)("div",{className:" album pb-5",children:Object(n.jsx)("div",{className:"row",children:e.children})})};c(64);function R(e){var t=e.title,c=e.subtitle;return Object(n.jsx)("div",{className:"album-header",children:Object(n.jsxs)("div",{className:"album-header-body d-flex justify-content-between align-items-center",children:[Object(n.jsx)("h3",{className:"album-header-title",children:t}),Object(n.jsx)(r.b,{to:t,onClick:function(){window.scrollTo(0,0)},className:"album-header-more",children:c})]})})}c(65);function _(e){var t=e.content,c=t.imageRef,s=t.type,i=t.title,a=t.date,o=t.description;t.badges,t.repoLink,t.liveLink;return Object(n.jsx)("div",{className:"col-md-12",id:"main-article",children:Object(n.jsxs)("div",{className:"card mb-1",children:[Object(n.jsx)("div",{className:"card-img-container",children:Object(n.jsx)("img",{id:"main-article-photo",className:"bd-placeholder-img",src:"/React_Portfolio_2/images"+c,width:"100%",height:"225",role:"img","aria-label":"Placeholder: Thumbnail"})}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h3",{children:i}),Object(n.jsx)("p",{className:"card-text",children:o}),Object(n.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(n.jsx)("small",{children:s}),Object(n.jsx)("small",{className:"text-muted",children:a})]})]})]})})}c(66);var M=function(e){var t=e.content,c=t.imageRef,s=t.type,i=t.title,a=t.date,o=t.description;return t.badges,t.repoLink,t.liveLink,Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsxs)("div",{className:"card mb-1 mr-1",children:[Object(n.jsx)("div",{className:"card-img-container",children:Object(n.jsx)("img",{className:"bd-placeholder-img",src:"/React_Portfolio_2/images"+c,width:"100%",height:"225",role:"img","aria-label":"Placeholder: Thumbnail"})}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h3",{children:i}),Object(n.jsx)("p",{className:"card-text",children:o}),Object(n.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(n.jsx)("small",{children:s}),Object(n.jsx)("small",{className:"text-muted",children:a})]})]})]})})};var A=function(){var e=v(),t=Object(l.a)(e,2),c=t[0];return t[1],Object(n.jsx)("div",{children:Object(n.jsxs)(L,{children:[Object(n.jsx)(S,{children:c.projects.slice(0,1).map((function(e){return Object(n.jsx)(_,{content:e})}))}),Object(n.jsx)(R,{title:"Posts",subtitle:"MORE POSTS"}),Object(n.jsx)(S,{children:c.posts.map((function(e){return Object(n.jsx)(M,{content:e})}))}),Object(n.jsx)(R,{title:"Projects",subtitle:"MORE PROJECTS"}),Object(n.jsx)(S,{children:c.projects.slice(1,6).map((function(e){return Object(n.jsx)(M,{content:e})}))})]})})};c(67),c(68);var D=function(e){var t=e.content,c=t.color,s=t.imageRef,i=(t.type,t.title),a=t.date,o=t.description;return t.badges,t.repoLink,t.liveLink,Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsxs)("div",{className:"card mb-1 mr-1",onClick:function(){return e.callback(i)},children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("div",{className:"card-line line-"+c}),Object(n.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(n.jsx)("h3",{children:i}),Object(n.jsx)("small",{className:"text-muted",children:a})]}),Object(n.jsx)("p",{className:"card-text",children:o})]}),Object(n.jsx)("div",{className:"card-img-container",children:Object(n.jsx)("img",{className:"",src:"/React_Portfolio_2/images"+s,width:"100%",height:"150px",role:"img","aria-label":"Placeholder: Thumbnail"})})]})})};var E=function(){var e=v(),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(d.g)(),a=function(e){s({type:m,project:c.projects.filter((function(t){return t.title===e}))}),i.push("/Project")};return Object(n.jsx)("div",{children:Object(n.jsx)(L,{children:Object(n.jsx)(S,{children:c.projects.map((function(e){return Object(n.jsx)(D,{content:e,callback:a})}))})})})};c(69),c(70);var B=function(e){var t=e.content,c=t.imageRef,s=(t.type,t.title),i=t.date,a=t.description,o=(t.badges,t.repoLink),l=t.liveLink;return Object(n.jsx)("div",{className:"col-md-12 post",children:Object(n.jsxs)("div",{className:"card mb-1",id:"no-hover-shadow",children:[Object(n.jsx)("h1",{className:"title",children:s}),Object(n.jsx)("div",{className:"card-img-container",children:Object(n.jsx)("img",{className:"bd-placeholder-img",src:"/React_Portfolio_2/images"+c,width:"100%",height:"225",role:"img","aria-label":"Placeholder: Thumbnail"})}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("small",{className:"text-muted",children:i}),Object(n.jsx)("p",{className:"card-text",children:a}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary",children:Object(n.jsx)("a",{class:"button-link",href:"https://"+l,children:"Go to Live"})}),Object(n.jsx)("button",{type:"button",className:"btn btn-secondary",children:Object(n.jsx)("a",{class:"button-link",href:"https://"+o,children:"Go to Repo"})})]})]})})};var G=function(){var e=v(),t=Object(l.a)(e,2),c=t[0];return t[1],console.log("Project Page",void 0===c.project[0]),Object(n.jsx)("div",{children:Object(n.jsx)(L,{children:Object(n.jsx)(S,{children:void 0===c.project[0]?Object(n.jsx)(d.a,{to:"/Projects"}):Object(n.jsx)(B,{content:c.project[0]})})})})};c(71);var J=function(){var e=v(),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(d.g)(),a=function(e){s({type:h,post:c.posts.filter((function(t){return t.title===e}))}),i.push("/Post")};return Object(n.jsx)("div",{children:Object(n.jsx)(L,{children:Object(n.jsx)(S,{children:c.posts.map((function(e){return Object(n.jsx)(D,{content:e,callback:a})}))})})})};c(72),c(73);var I=function(e){var t=e.content,c=t.imageRef,s=(t.type,t.title),i=t.date,a=t.description;return t.badges,t.repoLink,t.liveLink,Object(n.jsx)("div",{className:"col-md-12 post",children:Object(n.jsxs)("div",{className:"card mb-1",id:"no-hover-shadow",children:[Object(n.jsx)("h1",{className:"title",children:s}),Object(n.jsx)("div",{className:"card-img-container",children:Object(n.jsx)("img",{className:"bd-placeholder-img",src:"/React_Portfolio_2/images"+c,width:"100%",height:"225",role:"img","aria-label":"Placeholder: Thumbnail"})}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("small",{className:"text-muted",children:i}),Object(n.jsx)("p",{className:"card-text",children:a})]})]})})};var H=function(){var e=v(),t=Object(l.a)(e,2),c=t[0];return t[1],console.log("Post Page",c.post),Object(n.jsx)("div",{children:Object(n.jsx)(L,{children:Object(n.jsx)(S,{children:void 0===c.post[0]?Object(n.jsx)(d.a,{to:"/Posts"}):Object(n.jsx)(I,{content:c.post[0]})})})})};c(74),c(75);c(76);var U=function(){return Object(n.jsx)("div",{className:"col-md-12 profile",children:Object(n.jsxs)("div",{className:"card mb-1",id:"no-hover-shadow",children:[Object(n.jsx)("div",{className:"card-img-container",children:Object(n.jsx)("img",{className:"bd-placeholder-img",src:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png",width:"100%",height:"225",role:"img","aria-label":"Placeholder: Thumbnail"})}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("p",{className:"card-text",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(n.jsx)("div",{className:"badges",children:Object(n.jsx)("img",{src:"https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=white",alt:""})}),Object(n.jsx)("button",{id:"to-linkedin",type:"button",className:"btn btn-primary",children:"Go to LinkedIn"}),Object(n.jsx)("button",{id:"to-github",type:"button",className:"btn btn-dark",children:"Go to Github"}),Object(n.jsx)("button",{id:"to-resume",type:"button",className:"btn btn-secondary",children:"Go to Resume"}),Object(n.jsxs)("p",{id:"contact-block",children:["Have a position you think I should consider? Just want to get in touch? ",Object(n.jsx)("br",{}),"Email me at ",Object(n.jsx)("a",{className:"contact",children:"mitchellmunderwood@gmail.com"}),". ",Object(n.jsx)("br",{}),"Call or Message me at ",Object(n.jsx)("a",{className:"contact",children:"(919) 757-7864"}),"."]})]})]})})};var F=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(L,{children:Object(n.jsx)(S,{children:Object(n.jsx)(U,{})})})})};c(77);var Q=function(){return Object(n.jsx)("div",{className:"jumbotron",children:Object(n.jsxs)("h1",{className:"text-center",children:[Object(n.jsx)("strong",{children:"Mitchell"})," Underwood"]})})},z=function(){var e=v(),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){i({type:u,content:f}),console.log("state",c)}),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(r.a,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/",component:Q}),Object(n.jsx)(d.b,{path:"/",component:C}),Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/",component:A}),Object(n.jsx)(d.b,{exact:!0,path:"/Projects",component:E}),Object(n.jsx)(d.b,{exact:!0,path:"/Project",component:G}),Object(n.jsx)(d.b,{exact:!0,path:"/Posts",component:J}),Object(n.jsx)(d.b,{exact:!0,path:"/Post",component:H}),Object(n.jsx)(d.b,{exact:!0,path:"/About",component:F})]}),Object(n.jsx)(d.b,{path:"/",component:T})]})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(g,{children:Object(n.jsx)(z,{})})}),document.getElementById("root")),W()}},[[78,1,2]]]);
//# sourceMappingURL=main.36e4097d.chunk.js.map