(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{50:function(e,t,o){},51:function(e,t,o){},52:function(e,t,o){},53:function(e,t,o){},59:function(e,t,o){},60:function(e,t,o){},61:function(e,t,o){},62:function(e,t,o){},63:function(e,t,o){},64:function(e,t,o){},65:function(e,t,o){},66:function(e,t,o){},67:function(e,t,o){},68:function(e,t,o){},69:function(e,t,o){},70:function(e,t,o){},71:function(e,t,o){},72:function(e,t,o){},73:function(e,t,o){},74:function(e,t,o){},75:function(e,t,o){},76:function(e,t,o){},77:function(e,t,o){},78:function(e,t,o){"use strict";o.r(t);var c=o(0),i=o(1),s=o.n(i),l=o(9),n=o.n(l),a=(o(50),o(11)),r=o(4),d=o(6),j=o(42),h=o(15),m="SET_POST",b="SET_PROJECT",g="SET_CONTENT",p=Object(i.createContext)(),u=p.Provider,x=function(e,t){switch(t.type){case g:return console.log("Reducer - set content to:, action.content"),Object(h.a)(Object(h.a)({},e),{},{posts:t.content.posts,projects:t.content.projects});case"SET_PAGE":return console.log("Reducer - set page to: ",t.page),Object(h.a)(Object(h.a)({},e),{},{page:t.page});case m:return console.log("Reducer - set page to: ",t.post),Object(h.a)(Object(h.a)({},e),{},{post:t.post});case b:return console.log("Reducer - set page to: ",t.project),Object(h.a)(Object(h.a)({},e),{},{project:t.project});default:return console.log("Reducer - Default, Return State:",t),e}},O=function(e){e.value;var t=Object(j.a)(e,["value"]),o=Object(i.useReducer)(x,{page:null,posts:[],post:{},projects:[],project:{},description:""}),s=Object(a.a)(o,2),l=s[0],n=s[1];return Object(c.jsx)(u,Object(h.a)({value:[l,n]},t))},f=function(){return Object(i.useContext)(p)},w={posts:[{imageRef:"/parentconnect.png",type:"Post",title:"Placholder",date:"12/31/20",description:"This is placeholder, because I have yet to write a post",color:"parentConnect"}],projects:[{type:"Project",date:"8/29/20",title:"Parent Connect",description:"Homeschool together during COVID",imageRef:"/parentconnect.png",repoLink:"github.com/mitchellmunderwood/Parent-Connect",liveLink:"parent-connect.herokuapp.com/",badges:[{type:"Code",name:"JS"},{type:"Code",name:"HTML"},{type:"Code",name:"CSS"},{type:"Code",name:"Handlebars"},{type:"Code",name:"Express"},{type:"Code",name:"NodeJS"},{type:"Data",name:"MySql"}],color:"parentConnect"},{type:"Project",date:"7/2/20",title:"Party Planner",description:"Discover meals and cocktails",imageRef:"/party_planner.png",repoLink:"github.com/mitchellmunderwood/Party-Planning-Committee",liveLink:"mitchellmunderwood.github.io/Party-Planning-Committee/",badges:[{type:"Code",name:"JavaScript"},{type:"Code",name:"HTML5"},{type:"Code",name:"CSS3"},{type:"Code",name:"Material Design"},{type:"API",name:"MealsDB"},{type:"API",name:"DrinksDB"}],color:"partyPlanner"},{type:"Project",date:"8/15/20",title:"Eat-Da-Burger!",description:"Eat delicious burgers",imageRef:"/burgers.png",repoLink:"github.com/mitchellmunderwood/Burger-Buddy",liveLink:"burger-buddy-mu.herokuapp.com/",badges:[{type:"Code",name:"JavaScript"},{type:"Code",name:"HTML5"},{type:"Code",name:"CSS3"},{type:"Code",name:"Handlebars"},{type:"Code",name:"Express"},{type:"Code",name:"NodeJS"},{type:"Code",name:"MySQL"}],color:"burger"},{type:"Project",date:"6/25/20",title:"Daily Forecast",description:"Get your local weather",imageRef:"/weather.png",repoLink:"github.com/mitchellmunderwood/Weather-App",liveLink:"mitchellmunderwood.github.io/Weather-App/",badges:[{type:"Code",name:"JavaScript"},{type:"Code",name:"HTML5"},{type:"Code",name:"CSS3"},{type:"Code",name:"Bootstrap"},{type:"API",name:"Open Weather"}],color:"weather"},{type:"Project",date:"6/8/20",title:"Code Quiz",description:"Test your JS knowledge",imageRef:"/quiz.png",repoLink:"github.com/mitchellmunderwood/Code-Quiz",liveLink:"mitchellmunderwood.github.io/Code-Quiz/",badges:[{type:"Code",name:"JavaScript"},{type:"Code",name:"HTML5"},{type:"Code",name:"CSS3"}],color:"quiz"},{type:"Project",date:"5/27/20",title:"Password Generator",description:"Stay safe with secure passwords",imageRef:"/password.png",repoLink:"github.com/mitchellmunderwood/Password-Generator",deployLink:"mitchellmunderwood.github.io/Password-Generator/",badges:[{type:"Code",name:"JavaScript"}],color:"password"}]},v=(o(51),o(30)),y=(o(52),o(53),o(106));var C=function(e){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(c.jsxs)("div",{id:"thing",children:[Object(c.jsxs)("div",{className:"nav-left",children:[Object(c.jsx)(y.a,{onClick:e.toggle("left",!0),id:"toggler-btn",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)(d.b,{exact:!0,path:"/"}),Object(c.jsxs)(d.b,{exact:!0,path:["/About","/Posts","/Post","/Projects","/Project"],children:[Object(c.jsx)("h3",{id:"toggler-initials",className:"text-center",children:Object(c.jsxs)(r.c,{to:"/",children:[Object(c.jsx)("strong",{children:"M"}),"U"]})}),Object(c.jsx)("h3",{id:"toggler-name",className:"text-center",children:Object(c.jsxs)(r.c,{to:"/",children:[Object(c.jsx)("strong",{children:"Mitchell"})," Underwood"]})})]})]}),Object(c.jsxs)("div",{id:"nav-center",className:"inner d-flex justify-content-center align-items-center",children:[Object(c.jsxs)("nav",{id:"toggler-nav",className:"nav nav-masthead justify-content-center",children:[Object(c.jsx)(r.c,{to:"/Posts",id:"link-blog",className:"nav-link ",activeClassName:"nav-link active-red",children:"Posts"}),Object(c.jsx)(r.c,{to:"/Projects",id:"link-project",className:"nav-link",activeClassName:"nav-link active-blue",children:"Projects"}),Object(c.jsx)(r.c,{to:"/About",id:"link-about",className:"nav-link",activeClassName:"nav-link active-green",children:"About"})]}),Object(c.jsx)("h3",{id:"toggler-name-center",className:"text-center",children:Object(c.jsxs)("a",{children:[Object(c.jsx)("strong",{children:"Mitchell"})," Underwood"]})}),Object(c.jsx)("h3",{id:"toggler-initials-center",className:"text-center",children:Object(c.jsxs)("a",{children:[Object(c.jsx)("strong",{children:"M"}),"U"]})})]})]})})})},N=o(105);o(59);function k(e){return Object(c.jsx)("div",{className:"drawer-macro",role:"presentation",onClick:e.toggle("left",!1),onKeyDown:e.toggle("left",!1),children:Object(c.jsx)("div",{className:"mdc-drawer__content",children:Object(c.jsxs)("nav",{className:"mdc-list",children:[Object(c.jsx)("a",{className:"mdc-list-item","aria-selected":"true",children:Object(c.jsx)(r.c,{to:"/",children:Object(c.jsxs)("h4",{children:[Object(c.jsx)("strong",{children:"Mitchell"})," Underwood"]})})}),Object(c.jsx)("a",{className:"mdc-list-item ","aria-selected":"true",children:Object(c.jsx)("span",{className:"mdc-list-item__text",children:Object(c.jsx)(r.c,{to:"/Posts",children:"Posts"})})}),Object(c.jsx)("a",{className:"mdc-list-item",children:Object(c.jsx)("span",{className:"mdc-list-item__text",children:Object(c.jsx)(r.c,{to:"/Projects",children:"Projects"})})}),Object(c.jsx)("a",{className:"mdc-list-item",children:Object(c.jsx)("span",{className:"mdc-list-item__text",children:Object(c.jsx)(r.c,{to:"/About",children:"About"})})}),Object(c.jsx)("hr",{className:"mdc-list-divider"}),Object(c.jsx)("h3",{className:" gd-nav-drawer--subheader",children:"Connect"}),Object(c.jsxs)("div",{className:"drawer-connect-block",children:[Object(c.jsx)("a",{className:"mdc-list-item",href:"https://www.linkedin.com/in/mitchellmunderwood","aria-selected":"true",children:Object(c.jsx)("span",{className:"mdc-list-item__text",children:"LinkedIn"})}),Object(c.jsx)("a",{className:"mdc-list-item",href:"https://www.github.com/mitchellmunderwood",children:Object(c.jsx)("span",{className:"mdc-list-item__text",children:"Github"})}),Object(c.jsx)(r.c,{onClick:function(){window.scrollTo(0,500)},className:"mdc-list-item",to:"/About",children:Object(c.jsx)("span",{className:"mdc-list-item__text",children:"Contact"})})]}),Object(c.jsx)("hr",{className:"mdc-list-divider"}),Object(c.jsx)("h3",{className:"gd-nav-drawer--subheader",children:"Mitchell Underwood"}),Object(c.jsx)("p",{className:"drawer-text",children:"Creative web developer with design and engineering passion, who wants to help you develop your next big thing."})]})})})}var P=function(){var e=s.a.useState({left:!1}),t=Object(a.a)(e,2),o=t[0],i=t[1],l=function(e,t){return function(c){("keydown"!==c.type||"Tab"!==c.key&&"Shift"!==c.key)&&i(Object(h.a)(Object(h.a)({},o),{},Object(v.a)({},e,t)))}};return Object(c.jsxs)("div",{className:"NavigationParent",children:[Object(c.jsx)(N.a,{anchor:"left",open:o.left,onClose:l("left",!1),children:Object(c.jsx)(k,{toggle:l})}),Object(c.jsx)(C,{toggle:l})]})};o(60);var S=function(){return Object(c.jsx)("footer",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-md-7 py-4",children:[Object(c.jsx)("h4",{className:"",children:"Mitchell Underwood"}),Object(c.jsx)("p",{className:"text-muted",children:"Creative web developer with design and engineering passion, who wants to help you develop your next big thing."})]}),Object(c.jsxs)("div",{className:"col-md-2 offset-md-1 py-4",children:[Object(c.jsx)("h4",{children:"Navigation"}),Object(c.jsxs)("ul",{className:"list-unstyled",children:[Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{onClick:function(){window.scrollTo(0,0)},to:"/Posts",children:"Posts"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{onClick:function(){window.scrollTo(0,0)},to:"/Projects",children:"Projects"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{onClick:function(){window.scrollTo(0,0)},to:"/About",children:"About"})})]})]}),Object(c.jsxs)("div",{className:"col-md-2 py-4",children:[Object(c.jsx)("h4",{children:"Connect"}),Object(c.jsxs)("ul",{className:"list-unstyled",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://www.github.com/mitchellmunderwood",children:"Github"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://www.linkedin.com/in/mitchellmunderwood",children:"LinkedIn"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{onClick:function(){window.scrollTo(0,500)},to:"/About",children:"Contact"})})]})]})]})})})};o(61),o(62);var T=function(e){return Object(c.jsx)("main",{role:"main",children:Object(c.jsx)("div",{className:"container",children:e.children})})};o(63);var L=function(e){return Object(c.jsx)("div",{className:" album pb-5",children:Object(c.jsx)("div",{className:"row",children:e.children})})};o(64);function R(e){var t=e.title,o=e.subtitle;return Object(c.jsx)("div",{className:"album-header",children:Object(c.jsxs)("div",{className:"album-header-body d-flex justify-content-between align-items-center",children:[Object(c.jsx)("h3",{className:"album-header-title",children:t}),Object(c.jsx)(r.b,{to:t,onClick:function(){window.scrollTo(0,0)},className:"album-header-more",children:o})]})})}o(65);function M(e){var t=e.content,o=t.imageRef,i=t.type,s=t.title,l=t.date,n=t.description;t.badges,t.repoLink,t.liveLink;return Object(c.jsx)("div",{className:"col-md-12",id:"main-article",children:Object(c.jsxs)("div",{className:"card mb-1",onClick:function(){e.callback(s),window.scrollTo(0,0)},children:[Object(c.jsx)("div",{className:"card-img-container",children:Object(c.jsx)("img",{id:"main-article-photo",className:"bd-placeholder-img",src:"/Portfolio-1.3-React/images"+o,width:"100%",height:"225",role:"img","aria-label":"Placeholder: Thumbnail"})}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h3",{children:s}),Object(c.jsx)("p",{className:"card-text",children:n}),Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(c.jsx)("small",{children:i}),Object(c.jsx)("small",{className:"text-muted",children:l})]})]})]})})}o(66);var I=function(e){var t=e.content,o=t.imageRef,i=t.type,s=t.title,l=t.date,n=t.description;return t.badges,t.repoLink,t.liveLink,Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"card mb-1 mr-1",onClick:function(){e.callback(s),window.scrollTo(0,0)},children:[Object(c.jsx)("div",{className:"card-img-container",children:Object(c.jsx)("img",{className:"bd-placeholder-img",src:"/Portfolio-1.3-React/images"+o,width:"100%",height:"225",role:"img","aria-label":"Placeholder: Thumbnail"})}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h3",{children:s}),Object(c.jsx)("p",{className:"card-text",children:n}),Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(c.jsx)("small",{children:i}),Object(c.jsx)("small",{className:"text-muted",children:l})]})]})]})})};var _=function(){var e=f(),t=Object(a.a)(e,2),o=t[0],i=t[1],s=Object(d.g)(),l=function(e){i({type:m,post:o.posts.filter((function(t){return t.title===e}))}),s.push("/Post")},n=function(e){i({type:b,project:o.projects.filter((function(t){return t.title===e}))}),s.push("/Project")};return Object(c.jsx)("div",{children:Object(c.jsxs)(T,{children:[Object(c.jsx)(L,{children:o.projects.slice(0,1).map((function(e){return Object(c.jsx)(M,{content:e,callback:n})}))}),Object(c.jsx)(R,{title:"Posts",subtitle:"MORE POSTS"}),Object(c.jsx)(L,{children:o.posts.map((function(e){return Object(c.jsx)(I,{content:e,callback:l})}))}),Object(c.jsx)(R,{title:"Projects",subtitle:"MORE PROJECTS"}),Object(c.jsx)(L,{children:o.projects.slice(1,6).map((function(e){return Object(c.jsx)(I,{content:e,callback:n})}))})]})})};o(67),o(68);var A=function(e){var t=e.content,o=t.color,i=t.imageRef,s=(t.type,t.title),l=t.date,n=t.description;return t.badges,t.repoLink,t.liveLink,Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("div",{className:"card mb-1 mr-1",onClick:function(){e.callback(s),window.scrollTo(0,0)},children:[Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("div",{className:"card-line line-"+o}),Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(c.jsx)("h3",{children:s}),Object(c.jsx)("small",{className:"text-muted",children:l})]}),Object(c.jsx)("p",{className:"card-text",children:n})]}),Object(c.jsx)("div",{className:"card-img-container",children:Object(c.jsx)("img",{className:"",src:"/Portfolio-1.3-React/images"+i,width:"100%",height:"150px",role:"img","aria-label":"Placeholder: Thumbnail"})})]})})};var E=function(){var e=f(),t=Object(a.a)(e,2),o=t[0],i=t[1],s=Object(d.g)(),l=function(e){i({type:b,project:o.projects.filter((function(t){return t.title===e}))}),s.push("/Project")};return Object(c.jsx)("div",{children:Object(c.jsx)(T,{children:Object(c.jsx)(L,{children:o.projects.map((function(e){return Object(c.jsx)(A,{content:e,callback:l})}))})})})};o(69),o(70);var J=function(e){var t=e.content,o=t.imageRef,i=(t.type,t.title),s=t.date,l=t.description,n=t.badges,a=t.repoLink,r=t.liveLink;return Object(c.jsx)("div",{className:"col-md-12 post",children:Object(c.jsxs)("div",{className:"card mb-1",id:"no-hover-shadow",children:[Object(c.jsx)("h1",{className:"title",children:i}),Object(c.jsx)("div",{className:"card-img-container",children:Object(c.jsx)("img",{className:"bd-placeholder-img",src:"/Portfolio-1.3-React/images"+o,width:"100%",height:"225",role:"img","aria-label":"Placeholder: Thumbnail"})}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("small",{className:"text-muted",children:s}),Object(c.jsx)("p",{className:"card-text",children:l}),Object(c.jsx)("div",{className:"badges",children:n.map((function(e){return Object(c.jsx)("img",{src:"https://img.shields.io/badge/"+e.type+"-"+e.name+"-informational?style=flat&logo="+e.name.toLowerCase()+"&logoColor=white&color=white"})}))}),Object(c.jsx)("button",{type:"button",className:"btn btn-primary",children:Object(c.jsx)("a",{class:"button-link",href:"https://"+r,children:"Go to Live"})}),Object(c.jsx)("button",{type:"button",className:"btn btn-secondary",children:Object(c.jsx)("a",{class:"button-link",href:"https://"+a,children:"Go to Repo"})})]})]})})};var D=function(){var e=f(),t=Object(a.a)(e,2),o=t[0];return t[1],console.log("Project Page",void 0===o.project[0]),Object(c.jsx)("div",{children:Object(c.jsx)(T,{children:Object(c.jsx)(L,{children:void 0===o.project[0]?Object(c.jsx)(d.a,{to:"/Projects"}):Object(c.jsx)(J,{content:o.project[0]})})})})};o(71);var G=function(){var e=f(),t=Object(a.a)(e,2),o=t[0],i=t[1],s=Object(d.g)(),l=function(e){i({type:m,post:o.posts.filter((function(t){return t.title===e}))}),s.push("/Post")};return Object(c.jsx)("div",{children:Object(c.jsx)(T,{children:Object(c.jsx)(L,{children:o.posts.map((function(e){return Object(c.jsx)(A,{content:e,callback:l})}))})})})};o(72),o(73);var B=function(e){var t=e.content,o=t.imageRef,i=(t.type,t.title),s=t.date,l=t.description;return t.badges,t.repoLink,t.liveLink,Object(c.jsx)("div",{className:"col-md-12 post",children:Object(c.jsxs)("div",{className:"card mb-1",id:"no-hover-shadow",children:[Object(c.jsx)("h1",{className:"title",children:i}),Object(c.jsx)("div",{className:"card-img-container",children:Object(c.jsx)("img",{className:"bd-placeholder-img",src:"/Portfolio-1.3-React/images"+o,width:"100%",height:"225",role:"img","aria-label":"Placeholder: Thumbnail"})}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("small",{className:"text-muted",children:s}),Object(c.jsx)("p",{className:"card-text",children:l})]})]})})};var H=function(){var e=f(),t=Object(a.a)(e,2),o=t[0];return t[1],console.log("Post Page",o.post),Object(c.jsx)("div",{children:Object(c.jsx)(T,{children:Object(c.jsx)(L,{children:void 0===o.post[0]?Object(c.jsx)(d.a,{to:"/Posts"}):Object(c.jsx)(B,{content:o.post[0]})})})})};o(74),o(75);o(76);var U=function(){return Object(c.jsx)("div",{className:"col-md-12 profile",children:Object(c.jsxs)("div",{className:"card mb-1",id:"no-hover-shadow",children:[Object(c.jsx)("div",{className:"card-img-container",children:Object(c.jsx)("img",{className:"bd-placeholder-img",src:"/Portfolio-1.3-React/images/mitchell.jpg",width:"100%",height:"225",role:"img","aria-label":"Placeholder: Thumbnail"})}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("p",{className:"card-text",children:"So, here's a little about me. I'm currently training to become a top-knotch software developer. Before this, I was getting a Physics degree from UNC Chapel Hill, and then a Master's in Accounting from Kenan Flagler Business School. You may be assuming I'm a bit nerdy at this point, and you'd be right. I'm super into science and technology. And I'm also pretty well versed in the MCU, Star Wars, and some Japanese Animes. I also love to go on runs, make things out of wood, and watch comedy. I'm a big stickler for quality, design, and crafting the user experience. I'm also a big proponent for keeping things simple and making sure everything is as easy to follow and understand as possible. I'm trying to be a better communicator all the time and keep being okay with looking stupid when I need too."}),Object(c.jsxs)("div",{className:"badges",children:[Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-Redux-informational?style=flat&logo=redux&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-Babel-informational?style=flat&logo=babel&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-jQuery-informational?style=flat&logo=jquery&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=html5&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=css3&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-Bootstrap-informational?style=flat&logo=bootstrap&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-Material_Design-informational?style=flat&logo=material-design&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-Handlebars-informational?style=flat&logo=handlebars&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-Express-informational?style=flat&logo=expressjs&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-NodeJS-informational?style=flat&logo=node-dot-js&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Data-PostgreSQL-informational?style=flat&logo=postgresql&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Data-MongoDB-informational?style=flat&logo=mongodb&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Data-mysql-informational?style=flat&logo=mysql&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/OS-Mac-informational?style=flat&logo=ios&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Editor-VS_Code-informational?style=flat&logo=visual-studio-code&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Shell-Bash-informational?style=flat&logo=gnu-bash&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-NPM-informational?style=flat&logo=NPM&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-Homebrew-informational?style=flat&logo=homebrew&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-JSON-informational?style=flat&logo=json&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-TravisCI-informational?style=flat&logo=travisci&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-Nodemon-informational?style=flat&logo=nodemon&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Tools-Postman-informational?style=flat&logo=postman&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Tools-Heroku-informational?style=flat&logo=heroku&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Code-GIT-informational?style=flat&logo=git&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Tools-Github-informational?style=flat&logo=github&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Tools-Gitlab-informational?style=flat&logo=gitlab&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Tools-Office_365-informational?style=flat&logo=microsoft-office&logoColor=white&color=white"}),Object(c.jsx)("img",{src:"https://img.shields.io/badge/Tools-Microsoft_Teams-informational?style=flat&logo=microsoft-teams&logoColor=white&color=white"})]}),Object(c.jsx)("button",{id:"to-linkedin",type:"button",className:"btn btn-primary",children:Object(c.jsx)("a",{class:"button-link",href:"https://www.linkedin.com/in/mitchellmunderwood",children:"Go to LinkedIn"})}),Object(c.jsx)("button",{id:"to-github",type:"button",className:"btn btn-dark",children:Object(c.jsx)("a",{class:"button-link",href:"https://www.github.com/mitchellmunderwood",children:"Go to Github"})}),Object(c.jsx)("button",{id:"to-resume",type:"button",className:"btn btn-secondary",children:Object(c.jsx)("a",{class:"button-link",href:"https://www.linkedin.com/in/mitchellmunderwood/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAB5SiFEBZ-gpkNv1miIqwVWwrQn4S9EG2Sg,1604634574699)/",children:"Go to Resume"})}),Object(c.jsxs)("p",{id:"contact-block",children:["Have a position you think I should consider? Just want to get in touch? ",Object(c.jsx)("br",{}),"Email me at ",Object(c.jsx)("a",{className:"contact",children:"mitchellmunderwood@gmail.com"}),". ",Object(c.jsx)("br",{}),"Call or Message me at ",Object(c.jsx)("a",{className:"contact",children:"(919) 757-7864"}),"."]})]})]})})};var q=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(T,{children:Object(c.jsx)(L,{children:Object(c.jsx)(U,{})})})})};o(77);var F=function(){return Object(c.jsx)("div",{className:"jumbotron",children:Object(c.jsxs)("h1",{className:"text-center",children:[Object(c.jsx)("strong",{children:"Mitchell"})," Underwood"]})})},Q=function(){var e=f(),t=Object(a.a)(e,2),o=t[0],s=t[1];return Object(i.useEffect)((function(){s({type:g,content:w}),console.log("state",o)}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(r.a,{children:[Object(c.jsx)(d.b,{exact:!0,path:"/",component:F}),Object(c.jsx)(d.b,{path:"/",component:P}),Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{exact:!0,path:"/",component:_}),Object(c.jsx)(d.b,{exact:!0,path:"/Projects",component:E}),Object(c.jsx)(d.b,{exact:!0,path:"/Project",component:D}),Object(c.jsx)(d.b,{exact:!0,path:"/Posts",component:G}),Object(c.jsx)(d.b,{exact:!0,path:"/Post",component:H}),Object(c.jsx)(d.b,{exact:!0,path:"/About",component:q})]}),Object(c.jsx)(d.b,{path:"/",component:S})]})})},z=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,108)).then((function(t){var o=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,l=t.getTTFB;o(e),c(e),i(e),s(e),l(e)}))};n.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{children:Object(c.jsx)(Q,{})})}),document.getElementById("root")),z()}},[[78,1,2]]]);
//# sourceMappingURL=main.f47f31c8.chunk.js.map