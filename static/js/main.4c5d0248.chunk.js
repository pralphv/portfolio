(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{69:function(t,e,a){t.exports=a(98)},74:function(t,e,a){},92:function(t,e,a){},97:function(t,e,a){},98:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a(8),o=a.n(i),c=a(62),r=a(135),l=a(130),s=(a(74),a(125)),u=a(126),p=a(123),m=a(2),g=Object(p.a)(function(t){return{root:{padding:t.spacing(2),textTransform:"uppercase",width:"100%",height:"100%"},name:{marginTop:"-1em",letterSpacing:"0.5em",wordSpacing:"0.4em",fontWeight:"400"},subTitle:{letterSpacing:"0.4em"}}});var b=a(29),d=Object(p.a)(function(t){return{image:{height:110,margin:t.spacing(1),boxShadow:"0em 0em 0.5em black",opacity:"0.6",padding:0,cursor:"pointer","&:hover":{opacity:"1",transform:"translateY(-0.2em)",transition:t.transitions.create(["transform","opacity"],{duration:t.transitions.duration.enteringScreen})}},caption:{letterSpacing:"0.1em",fontWeight:"400",cursor:"pointer"}}});function h(t){var e=t.imgPath,a=t.caption,i=t.gifPath,o=t.title,c=t.content,r=t.github,l=t.url,p=t.techStack,g=t.youtubeUrl,h=d(),f=Object(n.useState)(!1),j=Object(b.a)(f,2),O=j[0],v=j[1];return Object(m.a)("div",null,Object(m.a)(s.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},Object(m.a)(s.a,{item:!0,onClick:function(){v(!0)}},Object(m.a)("img",{className:h.image,src:e,alt:e}),Object(m.a)(u.a,{className:"".concat(h.caption),variant:"subtitle2",align:"center"},a))),Object(m.a)(W,{gifPath:i,title:o,content:c,github:r,url:l,techStack:p,open:O,handleClose:function(){v(!1)},youtubeUrl:g}))}var f=Object(p.a)(function(t){return{title:{margin:t.spacing(2),textTransform:"uppercase",letterSpacing:"0.2em",fontWeight:"300"}}});function j(t){var e=t.text,a=t.name,n=f();return Object(m.a)(u.a,{variant:"h5",align:"center",className:n.title,name:a},e)}var O=Object(p.a)(function(t){return{icon:{height:70,margin:t.spacing(1),padding:t.spacing(1)},withBg:{background:"#e7e7e7"}}});function v(t){var e=t.imgPath,a=t.useBg,n=void 0!==a&&a,i=O(),o=n?"".concat(i.icon," ").concat(i.withBg):i.icon;return Object(m.a)("img",{className:o,src:e,alt:e})}var y=a(128),k=a(7),w=a(127),x=a(132),P=a(44),S=a.n(P),I=a(58),C=a.n(I),B=a(59),A=a.n(B);function N(t){window.open(t,"_blank")}var F=Object(k.a)(function(t){return{root:{padding:t.spacing(2)}}})(w.a),H=Object(p.a)(function(t){return{gif:{height:"auto",width:"100%",padding:t.spacing(1),maxHeight:"217px"},techStack:{fontWeight:300,wordSpacing:"2em",color:"#9b9ac5",paddingTop:t.spacing(2),paddingBottom:t.spacing(2)}}});function W(t){var e=t.gifPath,a=t.title,n=t.content,i=t.github,o=t.url,c=t.techStack,r=t.open,l=t.handleClose,p=t.youtubeUrl,g=Object(y.a)("(max-width:600px)"),b=H(),d=g?12:6,h=g?12:6;return Object(m.a)(x.a,{onClose:l,"aria-labelledby":"customized-dialog-title",open:r,fullWidth:!0,maxWidth:"md",PaperProps:{style:{backgroundColor:"#212121",boxShadow:"none"}}},Object(m.a)(F,null,Object(m.a)(u.a,{gutterBottom:!0,variant:"h4"},a),Object(m.a)(s.a,{container:!0,spacing:2,direction:"row"},Object(m.a)(s.a,{item:!0,xs:d},Object(m.a)(u.a,null,n," "),Object(m.a)(u.a,{className:b.techStack},c),Object(m.a)(s.a,{container:!0,spacing:2,direction:"row"},Object(m.a)(s.a,{item:!0},Object(m.a)(_,{iconComponent:S.a,onClick:function(){return N(i)}})),o&&Object(m.a)(s.a,{item:!0},Object(m.a)(_,{iconComponent:C.a,onClick:function(){return N(o)}})),p&&Object(m.a)(s.a,{item:!0},Object(m.a)(_,{iconComponent:A.a,onClick:function(){return N(p)}})))),Object(m.a)(s.a,{item:!0,xs:h},Object(m.a)("img",{className:b.gif,src:e,alt:e})))))}var T=Object(p.a)(function(t){return{icon:{opacity:"80%",color:"#9b9ac5",cursor:"pointer","&:hover":{opacity:"100%",transition:t.transitions.create("opacity",{duration:t.transitions.duration.shortest})}}}});function _(t){var e=t.onClick,a=t.iconComponent,n=T();return Object(m.a)(a,{className:n.icon,onClick:e})}var J="pralphv321@gmail.com",L="https://github.com/pralphv/portfolio",R="https://github.com/pralphv",M="https://www.linkedin.com/in/ralph-vincent-o-perez-16b378122/",D=[{imgPath:"images/ensou.jpg",caption:"Ensou",dialog:"ensou"},{imgPath:"images/gifs/lol_15_ff.jpg",caption:"Lol 15ff",dialog:"lol15ff"},{imgPath:"images/gifs/hkportfolioanalysis.jpg",caption:"HK Portfolio Analysis",dialog:"hkportfolioanalysis"},{imgPath:"images/color_system_builder.jpg",caption:"Color System Builder",dialog:"colorSystemBuilder"},{imgPath:"images/petangle.jpg",caption:"Petangle",dialog:"petangle"},{imgPath:"images/sitemap_generator.jpg",caption:"Sitemap Generator",dialog:"sitemapGenerator"}],z={lol15ff:{title:"Lol 15ff",content:"An app for League of Legends that provides convenient tools. Also has a model built with machine learning for predicting which team will win.",gifPath:"images/gifs/lol_15_ff.jpg",github:"https://github.com/pralphv/lol_15ff",url:null,techStack:"Python Pandas Flask scikit-learn HTML JavaScript Heroku"},hkportfolioanalysis:{title:"HK Portolio Analysis",content:"Dashboard for monitoring HK stock portfolios.",gifPath:"images/gifs/hkportfolioanalysis.jpg",github:"https://github.com/pralphv/hkportfolioanalysis-frontend",url:"https://hkportfolioanalysis.firebaseapp.com/",techStack:"React Firebase Python Pandas FastAPI Heroku"},petangle:{title:"Petangle",content:"A web app aimed to simplify the food picking process for pets. Sort products by their nutrition values and pick the best food for your pets. Help your pets like/dislike products to provide other owners some reference to what their own pets might like/dislike.",gifPath:"images/gifs/petangle.gif",github:"https://github.com/pralphv/petangle",url:"https://petangle.firebaseapp.com/",techStack:"React Firebase Python Flask Heroku"},sitemapGenerator:{title:"Sitemap Generator",content:"An API that generates sitemaps for websites. UI is provided for example.",gifPath:"images/gifs/sitemap_generator.gif",github:"https://github.com/pralphv/sitemap_generator",url:"https://sitemap-generator-heroku.herokuapp.com/",techStack:"Javascript Python Flask Heroku"},colorSystemBuilder:{title:"Color System Builder",content:"A tool inspired by Stripe's color system builder, this web app provides a tool to systematically build a WCAG compliant color system.",gifPath:"images/gifs/color_system_builder.gif",github:"https://github.com/pralphv/stripe_color_system_builder",url:"https://color-system-builder-j.firebaseapp.com/",techStack:"TypeScript Firebase GithubPages"},ensou:{title:"Ensou",content:"A Synthesia-like app that plays midi files and visualizes musical notes. Users can create their own synthesizers or use samples to play MIDIs in the tone they want. Effectors such as reverbs and delays are also available.",gifPath:"images/gifs/ensou.gif",github:"https://github.com/pralphv/ensou",url:"https://ensou-d031f.web.app/",techStack:"TypeScript Firebase",youtubeUrl:"https://www.youtube.com/watch?v=Jj1ZJEFVpMk"}};var E=a(16),U=a(45),G=Object(p.a)(function(t){return{title:{margin:t.spacing(2),textTransform:"uppercase",letterSpacing:"0.2em",fontWeight:"300"}}}),K=[{isIcon:!0,icon:E.c},{isIcon:!0,icon:E.a},{isIcon:!0,icon:E.d},{isIcon:!0,icon:U.c},{isIcon:!0,icon:E.j}],V=[{isIcon:!0,icon:E.i},{imgPath:"".concat("images/icons/","pandas_secondary.svg"),useBg:!0},{imgPath:"".concat("images/icons/","numpy.png"),useBg:!1},{isIcon:!0,icon:U.b},{isIcon:!0,icon:E.b}],Q=[{isIcon:!0,icon:E.h},{isIcon:!0,icon:E.f},{isIcon:!0,icon:U.a},{isIcon:!0,icon:E.e},{isIcon:!0,icon:E.k}],q=[{isIcon:!0,icon:E.g}];var Y=a(133),Z=Object(p.a)(function(t){return{paragraph:{padding:t.spacing(1),lineHeight:"2em",fontWeight:"300"}}});var $=Object(p.a)(function(t){return{paragraph:{padding:t.spacing(1),lineHeight:"2em",fontWeight:"300"}}});var X=a(47),tt=(a(91),a(32)),et=a.n(tt),at=a(48),nt=a.n(at);function it(t){var e=t.text;return Object(m.a)("h3",{className:"vertical-timeline-element-title",style:{fontWeight:900}},e)}function ot(t){var e=t.text;return Object(m.a)("h4",{className:"vertical-timeline-element-subtitle"},e)}function ct(t){var e=t.text;return Object(m.a)(u.a,{variant:"body2"},e)}function rt(){return Object(m.a)("div",null,Object(m.a)(it,{text:"Accounting and Finance"}),Object(m.a)(ot,{text:"The University of Hong Kong"}),Object(m.a)(ct,{text:"Graduated"}))}function lt(){return Object(m.a)("div",null,Object(m.a)(it,{text:"Chartered Financial Analyst"}),Object(m.a)(ct,{text:"Passed CFA Level 1"}))}function st(){return Object(m.a)("div",null,Object(m.a)(it,{text:"Front Office Developer"}),Object(m.a)(ot,{text:"Segantii Capital Management Limited"}),Object(m.a)("ul",null,Object(m.a)("li",null,Object(m.a)(ct,{text:"Developing and maintaining a web app (React, Python) that provides a platform to create dashboards for traders, analysts, risk management etc."})),Object(m.a)("li",null,Object(m.a)(ct,{text:"Replaced manual processes and VBA scripts with automated scripts"})),Object(m.a)("li",null,Object(m.a)(ct,{text:"Cooperate with traders to create backtesting tools and strategy researching"})),Object(m.a)("li",null,Object(m.a)(ct,{text:"Created a monitoring system for system health checks and outage detection"}))),Object(m.a)(u.a,{variant:"caption",color:"textSecondary"},"Python | Pandas | Numpy | Flask | React | MongoDB | Microsoft SQL | Redis"))}function ut(){return Object(m.a)("div",null,Object(m.a)(it,{text:"Quantitative Services Analyst"}),Object(m.a)(ot,{text:"Bank of America"}),Object(m.a)("ul",null,Object(m.a)("li",null,Object(m.a)(ct,{text:"Data analysis, visualization and automation"})),Object(m.a)("li",null,Object(m.a)(ct,{text:"Built a web app to replace a VBA script, cutting execution time from 10\r minutes to less than 10 seconds."})),Object(m.a)("li",null,Object(m.a)(ct,{text:"Built a web notification dashboard to replace a VBA semi-manual\r process, eliminating 45 minutes of manual time daily."})),Object(m.a)("li",null,Object(m.a)(ct,{text:"Built a web app for querying security details from multiple APIs for detecting data\r abnormalities."}))),Object(m.a)(u.a,{variant:"caption",color:"textSecondary"},"Python | Pandas | Numpy | Flask | JavaScript | React"))}function pt(){return Object(m.a)("div",null,Object(m.a)(it,{text:"Quantitative Researcher Officer"}),Object(m.a)(ot,{text:"Shenwan Hongyuan (H.K) Limited"}),Object(m.a)("ul",null,Object(m.a)("li",null,Object(m.a)(ct,{text:"Developed a basket of futures intra-day quantitative strategies in Multichart for clients\r\nto trade."}))))}function mt(){return Object(m.a)("div",null,Object(m.a)(it,{text:"Analyst"}),Object(m.a)(ot,{text:"China Merchants Bank International Securities Limited"}),Object(m.a)("ul",null,Object(m.a)("li",null,Object(m.a)(ct,{text:"Responsible for algorithm trading projects that aimed to increase trading volume and\r number of active users."}))))}function gt(){return Object(m.a)("div",null,Object(m.a)(it,{text:"Financial Analyst (intern)"}),Object(m.a)(ot,{text:"Invest Bots Limited"}),Object(m.a)(ct,{text:"Researched, backtested and built trading strategies using Artificial Intelligence\r\napproaches."}),Object(m.a)("br",null),Object(m.a)(u.a,{variant:"caption",color:"textSecondary"},"Python | Pandas | Numpy | Keras | Scikit-Learn"))}a(92);var bt=Object(p.a)(function(t){return{root:{maxWidth:"60em"}}});function dt(t){var e=t.date,a=t.content,n=t.icon;return Object(m.a)(X.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#1f1f1f",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #1f1f1f"},date:e,iconStyle:{background:"#1f1f1f",color:"#fff"},icon:Object(m.a)(n,null)},Object(m.a)(a,null))}var ht=a(129),ft=a(60),jt=a.n(ft),Ot=a(134),vt=(a(97),Object(p.a)(function(t){return{divider:{margin:t.spacing(2)}}}));function yt(){var t=vt();return Object(m.a)(ht.a,{className:t.divider})}function kt(t){var e=t.component;return Object(m.a)(jt.a,{throttle:200,height:500,once:!0},Object(m.a)(Ot.a,{appear:!0,classNames:"lazy",unmountOnExit:!0,timeout:300,in:!0},Object(m.a)(e,null)))}var wt=[function(){var t=g();return Object(m.a)("div",null,Object(m.a)(s.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},Object(m.a)(s.a,{item:!0},Object(m.a)(u.a,{className:"".concat(t.name," ").concat(t.root),variant:"h2",align:"center"},"Ralph Perez")),Object(m.a)(s.a,{item:!0},Object(m.a)(u.a,{className:"".concat(t.subTitle," ").concat(t.root),variant:"h5",align:"center"},"Front Office Developer"))))},function(){return Object(m.a)("div",null,Object(m.a)(j,{text:"Projects",name:"projects"}),Object(m.a)(s.a,{container:!0,spacing:5,direction:"row",alignItems:"center",justify:"center",style:{maxWidth:"900px"}},D.map(function(t){return Object(m.a)(s.a,{item:!0,key:t.imgPath},Object(m.a)(h,{gifPath:z[t.dialog].gifPath,title:z[t.dialog].title,content:z[t.dialog].content,github:z[t.dialog].github,url:z[t.dialog].url,techStack:z[t.dialog].techStack,youtubeUrl:z[t.dialog].youtubeUrl,imgPath:t.imgPath,caption:t.caption}))})))},function(){G();var t=[K,V,Q,q];return Object(m.a)("div",null,Object(m.a)(j,{text:"Tech Stack"}),t.map(function(t,e){return Object(m.a)(s.a,{key:e,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center"},t.map(function(t){return t.isIcon?Object(m.a)(t.icon,{size:"5em"}):Object(m.a)(s.a,{item:!0,key:t.imgPath},Object(m.a)(v,{imgPath:t.imgPath,useBg:t.useBg}))}))}))},function(){var t=bt();return Object(m.a)("div",{className:t.root},Object(m.a)(X.VerticalTimeline,null,Object(m.a)(dt,{date:"Jun 2020 - Present",icon:et.a,content:st}),Object(m.a)(dt,{date:"Nov 2018 - Jun 2020",icon:et.a,content:ut}),Object(m.a)(dt,{date:"Jul 2017 - Oct 2018",icon:et.a,content:mt}),Object(m.a)(dt,{date:"Sep 2017 - May 2018",icon:et.a,content:pt}),Object(m.a)(dt,{date:"Jul 2017",icon:nt.a,content:rt}),Object(m.a)(dt,{date:"Jun 2017",icon:nt.a,content:lt}),Object(m.a)(dt,{date:"Jun 2016 - Jun 2017",icon:et.a,content:gt})))},function(){var t=$();return Object(m.a)("div",null,Object(m.a)(j,{text:"About Me",name:"about"}),Object(m.a)(s.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{maxWidth:"60em"}},Object(m.a)(s.a,{item:!0},Object(m.a)(u.a,{className:t.paragraph,variant:"body2",align:"center"},"Despite graduating with an Accounting & Finance Degree, my passion in technology led me to pursue a career in technology. Knowing the disadvantage that I have put myself in by not having a Computer Science degree, I work hard to close the gap between me and Computer Science graduates. I am now confident to say that I am a competent developer.")),Object(m.a)(s.a,{item:!0},Object(m.a)(u.a,{className:t.paragraph,variant:"body2",align:"center"},"Currently, I am working in a hedge fund as a full-stack developer with a small team. Workload is high, fast-paced and sometimes stressful, but ultimately rewarding as I am able to hone my skills and make meaningful contributions.")),Object(m.a)(s.a,{item:!0},Object(m.a)(Y.a,{variant:"outlined",color:"primary",onClick:function(){return window.open("cv.pdf")},style:{marginTop:"1em"}},"Resume"))))},function(){var t=Z();return Object(m.a)("div",null,Object(m.a)(j,{text:"Contact Me",name:"contact"}),Object(m.a)(s.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},Object(m.a)(s.a,{item:!0},Object(m.a)(u.a,{className:t.paragraph,variant:"subtitle2",align:"center"},"Please feel free to reach out by E-mail or LinkedIn. I'll try my best to reply as soon as possible!")),Object(m.a)(s.a,{item:!0},Object(m.a)(Y.a,{variant:"outlined",color:"primary",onClick:function(){return window.open("mailto:".concat(J))},style:{marginTop:"1em"}},"Email Me"))))}];function xt(){return Object(m.a)("div",null,wt.map(function(t,e){return Object(m.a)("div",{key:e},Object(m.a)(kt,{component:t}),Object(m.a)(yt,null))}))}var Pt=a(61),St=a.n(Pt),It=Object(p.a)(function(t){return{root:{background:"#191928",width:"100%",position:"absolute",marginTop:"2em",marginLeft:"-2em",marginBottom:"-2em",minHeight:"15vh"},text:{opacity:"80%",padding:t.spacing(1),lineHeight:"2em",fontWeight:"300",color:"#636da4",cursor:"pointer","&:hover":{opacity:"100%",transition:t.transitions.create("opacity",{duration:t.transitions.duration.shortest})}}}});function Ct(){var t=It();return Object(m.a)("div",{className:t.root},Object(m.a)(s.a,{container:!0,direction:"column",alignItems:"center"},Object(m.a)(s.a,{item:!0},Object(m.a)(u.a,{className:t.text,variant:"body2",align:"center",color:"primary",onClick:function(){return N(L)}},"Designed & developed by Ralph Vincent O., Perez")),Object(m.a)(s.a,{item:!0},Object(m.a)(s.a,{spacing:2,container:!0,direction:"row",alignItems:"center"},Object(m.a)(s.a,{item:!0},Object(m.a)(_,{iconComponent:St.a,onClick:function(){return N(M)}})),Object(m.a)(s.a,{item:!0},Object(m.a)(_,{iconComponent:S.a,onClick:function(){return N(R)}}))))))}function Bt(t){var e=t.children;return Object(m.a)("div",null,Object(m.a)(s.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},e),Object(m.a)(Ct,null))}function At(){return Object(m.a)(Bt,null,Object(m.a)(xt,null))}var Nt=a(131),Ft=Object(c.a)({palette:{type:"dark",background:"#151515",primary:{main:"#797FD0"}},overrides:{MuiBackdrop:{root:{backgroundColor:"rgba(0,0,0,0.5)"}}}});Ft=Object(r.a)(Ft);var Ht=function(){return Object(m.a)(l.a,{theme:Ft},Object(m.a)(Nt.a,null),Object(m.a)(At,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(m.a)(Ht,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[69,1,2]]]);
//# sourceMappingURL=main.4c5d0248.chunk.js.map