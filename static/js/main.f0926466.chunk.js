(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(t,a,e){t.exports=e(56)},45:function(t,a,e){},54:function(t,a,e){},56:function(t,a,e){"use strict";e.r(a);e(0);var n=e(12),i=e.n(n),c=e(35),o=e(80),r=e(76),s=(e(45),e(73)),g=e(74),m=e(29),u=e(2),l=Object(m.a)(function(t){return{root:{padding:t.spacing(2),textTransform:"uppercase",width:"100%",height:"100%"},name:{marginTop:"-1em",letterSpacing:"0.5em",wordSpacing:"0.4em",fontWeight:"400"},subTitle:{letterSpacing:"0.4em"}}});var p=Object(m.a)(function(t){return{image:{height:110,margin:t.spacing(1),boxShadow:"0em 0em 0.5em black",opacity:"0.6",padding:0,cursor:"pointer","&:hover":{opacity:"1",transform:"translateY(-0.2em)",transition:t.transitions.create(["transform","opacity"],{duration:t.transitions.duration.enteringScreen})}},caption:{letterSpacing:"0.1em",fontWeight:"400"}}});function b(t){var a=t.imgPath,e=t.caption,n=p();return Object(u.a)(s.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},Object(u.a)(s.a,{item:!0},Object(u.a)("img",{className:n.image,src:a,alt:a}),Object(u.a)(g.a,{className:"".concat(n.caption),variant:"subtitle2",align:"center"},e)))}var h=Object(m.a)(function(t){return{title:{margin:t.spacing(2),textTransform:"uppercase",letterSpacing:"0.2em",fontWeight:"300"}}});function d(t){var a=t.text,e=t.name,n=h();return Object(u.a)(g.a,{variant:"h5",align:"center",className:n.title,name:e},a)}var j=Object(m.a)(function(t){return{icon:{height:70,margin:t.spacing(1),padding:t.spacing(1)},withBg:{background:"#e7e7e7"}}});function v(t){var a=t.imgPath,e=t.useBg,n=void 0!==e&&e,i=j(),c=n?"".concat(i.icon," ").concat(i.withBg):i.icon;return Object(u.a)("img",{className:c,src:a,alt:a})}var O=[{imgPath:"/images/color_system_builder.jpg",caption:"Color System Builder"},{imgPath:"/images/petangle.jpg",caption:"Petangle"},{imgPath:"/images/sitemap_generator.jpg",caption:"Sitemap Generator"}];var f="images/icons/",y=Object(m.a)(function(t){return{title:{margin:t.spacing(2),textTransform:"uppercase",letterSpacing:"0.2em",fontWeight:"300"}}}),w=[{imgPath:"".concat(f,"HTML5_logo_and_wordmark.svg"),useBg:!0},{imgPath:"".concat(f,"CSS3_logo_and_wordmark.svg"),useBg:!0},{imgPath:"".concat(f,"Unofficial_JavaScript_logo_2.svg"),useBg:!1},{imgPath:"".concat(f,"ts.png"),useBg:!1},{imgPath:"".concat(f,"React-icon.svg"),useBg:!1}],k=[{imgPath:"".concat(f,"Python-logo-notext.svg"),useBg:!1},{imgPath:"".concat(f,"pandas_secondary.svg"),useBg:!0},{imgPath:"".concat(f,"NumPy_logo.svg"),useBg:!1},{imgPath:"".concat(f,"flask-seeklogo.com.svg"),useBg:!0},{imgPath:"".concat(f,"django-logo-negative.svg"),useBg:!1}],P=[{imgPath:"".concat(f,"Antu_mysql-workbench.svg"),useBg:!1},{imgPath:"".concat(f,"Postgresql_elephant.svg"),useBg:!1},{imgPath:"".concat(f,"Firebase_Logo.svg"),useBg:!0},{imgPath:"".concat(f,"MongoDB_Logo.svg"),useBg:!1}];var B=e(78),I="pralphv321@gmail.com",_="https://github.com/pralphv/portfolio",S="https://github.com/pralphv",N="https://www.linkedin.com/in/ralph-vincent-o-perez-16b378122/",x=Object(m.a)(function(t){return{paragraph:{padding:t.spacing(1),lineHeight:"2em",fontWeight:"300"}}});var C=Object(m.a)(function(t){return{paragraph:{padding:t.spacing(1),lineHeight:"2em",fontWeight:"300"}}});var T=e(75),W=e(32),H=e.n(W),D=e(79),L=(e(54),Object(m.a)(function(t){return{root:{margin:t.spacing(2)}}}));function M(){var t=L();return Object(u.a)(T.a,{className:t.root})}function z(t){var a=t.component;return Object(u.a)(H.a,{throttle:200,height:500,once:!0},Object(u.a)(D.a,{appear:!0,classNames:"lazy",unmountOnExit:!0,timeout:300,in:!0},Object(u.a)(a,null)))}var E=[function(){var t=l();return Object(u.a)("div",null,Object(u.a)(s.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},Object(u.a)(s.a,{item:!0},Object(u.a)(g.a,{className:"".concat(t.name," ").concat(t.root),variant:"h2",align:"center"},"Ralph Perez")),Object(u.a)(s.a,{item:!0},Object(u.a)(g.a,{className:"".concat(t.subTitle," ").concat(t.root),variant:"h5",align:"center"},"Full-Stack Developer"))))},function(){return Object(u.a)("div",null,Object(u.a)(d,{text:"Projects",name:"projects"}),Object(u.a)(s.a,{container:!0,spacing:5,direction:"row",alignItems:"center",justify:"center"},O.map(function(t){return Object(u.a)(s.a,{item:!0,key:t.imgPath},Object(u.a)(b,{imgPath:t.imgPath,caption:t.caption}))})))},function(){y();var t=[w,k,P];return Object(u.a)("div",null,Object(u.a)(d,{text:"Tech Stack"}),t.map(function(t,a){return Object(u.a)(s.a,{key:a,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center"},t.map(function(t){return Object(u.a)(s.a,{item:!0,key:t.imgPath},Object(u.a)(v,{imgPath:t.imgPath,useBg:t.useBg}))}))}))},function(){var t=C();return Object(u.a)("div",null,Object(u.a)(d,{text:"About Me",name:"about"}),Object(u.a)(s.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},Object(u.a)(s.a,{item:!0},Object(u.a)(g.a,{className:t.paragraph,variant:"body2",align:"center"},"Despite graduating with an Accounting & Finance Degree from The University of Hong Kong, my passion in technology led me to pursue a career in technology. Knowing the disadvantage that I have put myself in by not having a Computer Science degree, I work hard to close the gap between me and Computer Science graduates. I am now fairly confident to say that I am a competent developer.")),Object(u.a)(s.a,{item:!0},Object(u.a)(g.a,{className:t.paragraph,variant:"body2",align:"center"},"Currently, I am working in an international investment bank where I focus on automation. Cutting manual work and reducing operational risks are ways I bring value.")),Object(u.a)(s.a,{item:!0},Object(u.a)(B.a,{variant:"outlined",color:"primary",onClick:function(){return window.open("cv.pdf")},style:{marginTop:"1em"}},"Resume"))))},function(){var t=x();return Object(u.a)("div",null,Object(u.a)(d,{text:"Contact Me",name:"contact"}),Object(u.a)(s.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},Object(u.a)(s.a,{item:!0},Object(u.a)(g.a,{className:t.paragraph,variant:"subtitle2",align:"center"},"Please feel free to reach out by E-mail or LinkedIn. I'll try my best to reply as soon as possible!")),Object(u.a)(s.a,{item:!0},Object(u.a)(B.a,{variant:"outlined",color:"primary",onClick:function(){return window.open("mailto:".concat(I))},style:{marginTop:"1em"}},"Email Me"))))}];function F(){return Object(u.a)("div",null,E.map(function(t,a){return Object(u.a)("div",{key:a},Object(u.a)(z,{component:t}),Object(u.a)(M,null))}))}var R=e(33),A=e.n(R),J=e(34),q=e.n(J),K=Object(m.a)(function(t){return{root:{background:"#191928",width:"100%",position:"absolute",marginTop:"2em",marginLeft:"-2em",marginBottom:"-2em",minHeight:"15vh"},text:{opacity:"80%",padding:t.spacing(1),lineHeight:"2em",fontWeight:"300",color:"#636da4",cursor:"pointer","&:hover":{opacity:"100%",transition:t.transitions.create("opacity",{duration:t.transitions.duration.shortest})}},icon:{opacity:"80%",color:"#9b9ac5",cursor:"pointer","&:hover":{opacity:"100%",transition:t.transitions.create("opacity",{duration:t.transitions.duration.shortest})}}}});function U(){var t=K();function a(t){window.open(t,"_blank")}return Object(u.a)("div",{className:t.root},Object(u.a)(s.a,{container:!0,direction:"column",alignItems:"center"},Object(u.a)(s.a,{item:!0},Object(u.a)(g.a,{className:t.text,variant:"body2",align:"center",color:"primary",onClick:function(){return a(_)}},"Designed & developed by Ralph Vincent O., Perez")),Object(u.a)(s.a,{item:!0},Object(u.a)(s.a,{spacing:2,container:!0,direction:"row",alignItems:"center"},Object(u.a)(s.a,{item:!0},Object(u.a)(A.a,{className:t.icon,onClick:function(){return a(N)}})),Object(u.a)(s.a,{item:!0},Object(u.a)(q.a,{className:t.icon,onClick:function(){return a(S)}}))))))}function G(t){var a=t.children;return Object(u.a)("div",null,Object(u.a)(s.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},a),Object(u.a)(U,null))}function V(){return Object(u.a)(G,null,Object(u.a)(F,null))}var Y=e(77),$=Object(c.a)({palette:{type:"dark",background:"#151515",primary:{main:"#797FD0"}}});$=Object(o.a)($);var Q=function(){return Object(u.a)(r.a,{theme:$},Object(u.a)(Y.a,null),Object(u.a)(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(u.a)(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.f0926466.chunk.js.map