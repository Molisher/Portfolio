(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{47:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(31),c=n(15),o=n(6),s=n(49),d=n(3),l=n(5),j=n(4),b=j.b.header.withConfig({displayName:"header__Container",componentId:"sc-1obfs3x-0"})(["display:flex;flex-direction:column;align-items:center;text-transform:uppercase;"]),h=j.b.h1.withConfig({displayName:"header__Title",componentId:"sc-1obfs3x-1"})(["margin-bottom:20px;"]),m=j.b.h2.withConfig({displayName:"header__SubTitle",componentId:"sc-1obfs3x-2"})(["color:rgba(26,28,26,0.5);"]),p=n(1);function x(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(b,Object(d.a)(Object(d.a)({},n),{},{children:t}))}x.Title=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(h,Object(d.a)(Object(d.a)({},n),{},{children:t}))},x.SubTitle=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(m,Object(d.a)(Object(d.a)({},n),{},{children:t}))};var O=n(24);var f=j.b.nav.withConfig({displayName:"nav__Container",componentId:"sc-12xc6ae-0"})(["display:flex;width:100%;transform:translateX(-35%);@media (max-width:1024px){transform:translateX(0);align-items:center;justify-content:center;}"]),g=j.b.ul.attrs((function(e){var t=e.positionX;return{style:{transform:"translateX(".concat(t,"%)")}}})).withConfig({displayName:"nav__Inner",componentId:"sc-12xc6ae-1"})(["display:flex;align-items:center;justify-content:space-between;transition-duration:0.5s;transition-timing-function:ease-out;padding-right:60%;@media (max-width:1024px){transform:translateX(0) !important;flex-direction:column;align-items:center;justify-content:center;padding:0;}"]),u=Object(j.b)(c.b).withConfig({displayName:"nav__Link",componentId:"sc-12xc6ae-2"})(["display:flex;font-size:200px;text-transform:uppercase;color:rgba(26,28,26,0.5);transition:1s ease-out;&:hover{color:rgba(26,28,26,1);}@media (max-width:1024px){font-size:8rem;padding:2rem;}@media (max-width:770px){font-size:5rem;padding:2rem;}@media (max-width:450px){font-size:3rem;padding:2rem;}"]),w=j.b.div.withConfig({displayName:"nav__Break",componentId:"sc-12xc6ae-3"})(["transform:translateY(-20px);display:block;background-color:#1a1c1a;height:3px;padding:0 25px;margin:0 50px;"]),v=j.b.span.withConfig({displayName:"nav__Number",componentId:"sc-12xc6ae-4"})(["align-self:flex-start;font-size:1rem;"]),y={hidden:{transform:"translate3d(0px, 8vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,5deg)",opacity:0},show:{transform:"translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",opacity:1,transition:{duration:1}},exit:{transform:"translate3d(0px, 10vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,5deg)",opacity:0,transition:{duration:1}}},C=n(48);function _(e){var t=e.children,n=Object(l.a)(e,["children"]),r=function(e){var t=Object(i.useState)(e),n=Object(O.a)(t,2),r=n[0],a=n[1],c=Object(i.useState)(0),o=Object(O.a)(c,2),s=o[0],d=o[1],l=Object(i.useRef)(),j=function(e){a(e.clientX)};Object(i.useEffect)((function(){return document.addEventListener("mousemove",j),function(){document.removeEventListener("mousemove",j)}}),[]),l.current&&l.current.offsetWidth!==s&&d(l.current.offsetWidth);var b=r/window.innerWidth*70;return-(b-35)>25?[25,l]:[-(b-35),l]}(window.innerWidth),a=Object(O.a)(r,2),c=a[0],o=a[1];return Object(p.jsx)(f,{children:Object(p.jsx)(g,Object(d.a)(Object(d.a)({positionX:c,ref:o},n),{},{children:t}))})}_.Link=function(e){var t=e.to,n=e.children,i=Object(l.a)(e,["to","children"]);return Object(p.jsx)(C.a.div,{variants:y,initial:"hidden",animate:"show",exit:"exit",children:Object(p.jsx)(u,Object(d.a)(Object(d.a)({to:t},i),{},{children:n}))})},_.Break=function(e){var t=Object.assign({},e);return Object(p.jsx)(w,Object(d.a)({},t))},_.Number=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(v,Object(d.a)(Object(d.a)({},n),{},{children:t}))};var k=j.b.footer.withConfig({displayName:"footer__Container",componentId:"sc-1o9wqng-0"})(["display:flex;justify-content:center;"]),I=j.b.a.withConfig({displayName:"footer__Link",componentId:"sc-1o9wqng-1"})(["text-transform:uppercase;margin:0 2rem;"]);function N(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(k,Object(d.a)(Object(d.a)({},n),{},{children:t}))}N.Link=function(e){var t=e.href,n=e.target,i=e.children,r=Object(l.a)(e,["href","target","children"]);return Object(p.jsx)(I,Object(d.a)(Object(d.a)({href:t,target:n},r),{},{children:i}))};var T=j.b.aside.withConfig({displayName:"sidebar__Container",componentId:"eihp6q-0"})(["position:fixed;display:flex;flex:0 0 10%;height:100%;writing-mode:vertical-rl;justify-content:space-around;align-items:center;padding:20px 50px;@media (max-width:1024px){writing-mode:initial;height:auto;width:100%;paddding:10px;justify-content:space-between;position:sticky;}@media (max-width:450px){padding:5%;}"]),E=j.b.h2.withConfig({displayName:"sidebar__Title",componentId:"eihp6q-1"})(["font-size:1.1rem;text-transform:uppercase;transform:rotate(180deg);@media (max-width:1024px){transform:rotate(0);}"]),R=j.b.h3.withConfig({displayName:"sidebar__SubTitle",componentId:"eihp6q-2"})(["font-size:1.1rem;text-transform:uppercase;opacity:0.5;transform:rotate(180deg);@media (max-width:1024px){transform:rotate(0);}"]),S=Object(j.b)(c.b).withConfig({displayName:"sidebar__BackButton",componentId:"eihp6q-3"})(["z-index:10;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;min-width:80px;min-height:80px;padding:8px;@media (max-width:1024px){flex-direction:row;}@media (max-width:600px){min-width:60px;min-height:60px;}"]),L=j.b.div.withConfig({displayName:"sidebar__Dot",componentId:"eihp6q-4"})(["width:4px;height:4px;margin-right:2px;margin-left:2px;border-radius:50%;background-color:#1a1c1a;"]),z=j.b.div.withConfig({displayName:"sidebar__Circle",componentId:"eihp6q-5"})(['content:"";opacity:0.5;position:absolute;left:0;top:0;right:0;bottom:0;border-style:solid;border-width:1px;border-color:#1a1c1a;border-radius:50%;']);function B(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(T,Object(d.a)(Object(d.a)({},n),{},{children:t}))}B.Title=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(E,Object(d.a)(Object(d.a)({},n),{},{children:t}))},B.SubTitle=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(R,Object(d.a)(Object(d.a)({},n),{},{children:t}))},B.BackButton=function(e){var t=e.to,n=Object(l.a)(e,["to"]);return Object(p.jsxs)(S,Object(d.a)(Object(d.a)({to:t},n),{},{children:[Object(p.jsx)(z,{}),Object(p.jsx)(L,{}),Object(p.jsx)(L,{}),Object(p.jsx)(L,{})]}))};var W=Object(j.b)(C.a.div).withConfig({displayName:"about__Container",componentId:"sc-1r1pmmd-0"})(["flex:0 0 60%;display:flex;flex-direction:column;padding-top:10rem;align-self:flex-end;padding-right:13rem;margin-left:auto;@media (max-width:1024px){width:100%;padding:10%;}@media (max-width:500px){padding:5%;}"]),M=j.b.h1.withConfig({displayName:"about__Title",componentId:"sc-1r1pmmd-1"})(["font-size:85px;text-transform:uppercase;color:#1a1c1a;margin-bottom:8rem;@media (max-width:700px){margin-top:1rem;font-size:3rem;}"]),A=j.b.div.withConfig({displayName:"about__Description",componentId:"sc-1r1pmmd-2"})(["width:50%;font-size:1.2rem;align-self:flex-end;margin:10px 0;@media (max-width:1024px){width:100%;}"]);function D(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(W,Object(d.a)(Object(d.a)({variants:y,initial:"hidden",animate:"show",exit:"exit"},n),{},{children:t}))}D.Title=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(M,Object(d.a)(Object(d.a)({},n),{},{children:t}))},D.Description=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(A,Object(d.a)(Object(d.a)({},n),{},{children:t}))};var q=j.b.div.withConfig({displayName:"table__Container",componentId:"o20txf-0"})(["margin-top:20rem;padding-bottom:5rem;"]),P=j.b.h2.withConfig({displayName:"table__Title",componentId:"o20txf-1"})(["text-transform:uppercase;font-size:3rem;letter-spacing:5px;border-bottom:3px solid rgba(26,28,26,0.9);margin-bottom:5rem;@media (max-width:700px){font-size:1.5rem;}"]),U=j.b.div.withConfig({displayName:"table__Row",componentId:"o20txf-2"})(["padding:1.5rem 0;display:flex;justify-content:space-between;"]),X=j.b.div.withConfig({displayName:"table__Column",componentId:"o20txf-3"})(["&:first-of-type{width:40%;}&:last-of-type{width:20%;text-align:end;}flex-grow:1;"]),Y=j.b.div.withConfig({displayName:"table__Content",componentId:"o20txf-4"})([""]);function F(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(q,Object(d.a)(Object(d.a)({},n),{},{children:t}))}F.Title=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(P,Object(d.a)(Object(d.a)({},n),{},{children:t}))},F.Content=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(Y,Object(d.a)(Object(d.a)({},n),{},{children:t}))},F.Row=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(U,Object(d.a)(Object(d.a)({},n),{},{children:t}))},F.Column=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(X,Object(d.a)(Object(d.a)({},n),{},{children:t}))};var K=Object(j.b)(C.a.div).withConfig({displayName:"contacts__Container",componentId:"sc-3iitad-0"})(["flex:0 0 60%;display:flex;flex-direction:column;padding-top:8.5rem;align-self:flex-end;padding-right:13rem;margin-left:auto;@media (max-width:1024px){width:100%;padding:10%;}@media (max-width:500px){padding:5%;}"]),V=j.b.h1.withConfig({displayName:"contacts__Title",componentId:"sc-3iitad-1"})(["font-size:85px;text-transform:uppercase;margin-bottom:8rem;@media (max-width:700px){margin-top:1rem;font-size:3rem;}"]),H=j.b.div.withConfig({displayName:"contacts__Description",componentId:"sc-3iitad-2"})(["font-size:1.2rem;"]),Q=j.b.a.withConfig({displayName:"contacts__ExternalLink",componentId:"sc-3iitad-3"})(["font-size:1.2rem;display:flex;margin-bottom:1.5rem;align-items:center;img{margin-left:0.5rem;height:1rem;width:1rem;padding-bottom:0.1rem;transition-duration:0.5s;}&:hover{img{transform:translate3d(4px,-4px,0);}}"]),J=j.b.div.withConfig({displayName:"contacts__Wrapper",componentId:"sc-3iitad-4"})(["display:flex;flex-direction:column;align-self:flex-end;width:50%;@media (max-width:500px){width:100%;}"]),Z=j.b.div.withConfig({displayName:"contacts__Signature",componentId:"sc-3iitad-5"})(["font-size:1.1rem;margin-top:1rem;"]);function G(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(K,Object(d.a)(Object(d.a)({variants:y,initial:"hidden",animate:"show",exit:"exit"},n),{},{children:t}))}G.Title=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(V,Object(d.a)(Object(d.a)({},n),{},{children:t}))},G.Description=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(H,Object(d.a)(Object(d.a)({},n),{},{children:t}))},G.Wrapper=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(J,Object(d.a)(Object(d.a)({},n),{},{children:t}))},G.ExternalLink=function(e){var t=e.href,n=e.children,i=e.target,r=Object(l.a)(e,["href","children","target"]);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(Q,Object(d.a)(Object(d.a)({href:t,target:i},r),{},{children:[n,Object(p.jsx)("img",{src:"/images/icons/diagonal-arrow-svgrepo-com.svg",alt:"External link icon"})]}))})},G.Signature=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(Z,Object(d.a)(Object(d.a)({},n),{},{children:t}))};var $=Object(j.b)(C.a.div).withConfig({displayName:"work__Container",componentId:"sc-1husghe-0"})(["flex:0 0 60%;display:flex;flex-direction:column;padding-top:9rem;align-self:flex-end;padding-right:13rem;margin-left:auto;@media (max-width:1024px){width:100%;padding:10%;}@media (max-width:500px){padding:5%;}"]),ee=Object(j.b)(c.b).withConfig({displayName:"work__Link",componentId:"sc-1husghe-1"})(["font-size:5.5rem;margin-bottom:4rem;text-transform:uppercase;white-space:nowrap;letter-spacing:-0.5rem;transition:0.5s;span{margin-left:10px;font-size:1rem;letter-spacing:0;}img{transform:translate3d(-1rem,1rem,0);opacity:0;margin-left:1rem;width:2rem;height:2rem;transition:0.5s;}&:hover{letter-spacing:0;img{opacity:1;transform:translate3d(0,0,0);}}@media (max-width:700px){letter-spacing:0;font-size:4rem;}@media (max-width:500px){font-size:2rem;}"]);function te(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)($,Object(d.a)(Object(d.a)({variants:y,initial:"hidden",animate:"show",exit:"exit"},n),{},{children:t}))}te.Link=function(e){var t=e.children,n=e.to,i=e.number,r=Object(l.a)(e,["children","to","number"]);return Object(p.jsxs)(ee,Object(d.a)(Object(d.a)({to:n},r),{},{children:[t,Object(p.jsx)("span",{children:i}),Object(p.jsx)("img",{src:"/images/icons/diagonal-arrow-svgrepo-com.svg",alt:"Link to project"})]}))};var ne=Object(j.b)(C.a.div).withConfig({displayName:"project__Container",componentId:"g2e694-0"})(["flex:0 0 60%;display:flex;flex-direction:column;padding-top:9rem;align-self:flex-end;padding-right:13rem;margin-left:auto;@media (max-width:1024px){width:100%;padding:10%;}@media (max-width:500px){padding:5%;}"]),ie=j.b.h1.withConfig({displayName:"project__Title",componentId:"g2e694-1"})(["font-size:85px;text-transform:uppercase;margin-bottom:8rem;white-space:nowrap;@media (max-width:700px){margin-top:1rem;font-size:3rem;}@media (max-width:400px){margin-top:1rem;font-size:2.5rem;}"]),re=j.b.div.withConfig({displayName:"project__Wrapper",componentId:"g2e694-2"})(["display:flex;justify-content:space-between;align-items:flex-start;"]),ae=j.b.div.withConfig({displayName:"project__Description",componentId:"g2e694-3"})(["padding:10px 0;"]),ce=j.b.div.withConfig({displayName:"project__Meta",componentId:"g2e694-4"})(["margin-bottom:5rem;h4{text-transform:uppercase;color:rgba(26,28,26,0.5);margin-bottom:1.5rem;}"]),oe=j.b.a.withConfig({displayName:"project__ExternalLink",componentId:"g2e694-5"})(["margin:2rem 0;font-size:1.2rem;img{margin-left:10px;height:0.8rem;width:0.8rem;transition:0.5s;}&:hover{img{transform:translate3d(4px,-4px,0);}}"]),se=j.b.div.withConfig({displayName:"project__Image",componentId:"g2e694-6"})(["position:relative;margin:5rem 0;img{top:0;margin-left:-20%;width:140%;}@media (max-width:1150px){img{width:100%;margin:0;}}"]);function de(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(ne,Object(d.a)(Object(d.a)({variants:y,initial:"hidden",animate:"show",exit:"exit"},n),{},{children:t}))}de.Title=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(ie,Object(d.a)(Object(d.a)({},n),{},{children:t}))},de.Wrapper=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(re,Object(d.a)(Object(d.a)({},n),{},{children:t}))},de.Description=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Object(p.jsx)(ae,Object(d.a)(Object(d.a)({},n),{},{children:t}))},de.Meta=function(e){var t=e.children,n=e.title,i=Object(l.a)(e,["children","title"]);return Object(p.jsxs)(ce,Object(d.a)(Object(d.a)({},i),{},{children:[Object(p.jsx)("h4",{children:n}),t]}))},de.ExternalLink=function(e){var t=e.children,n=e.href,i=e.target,r=Object(l.a)(e,["children","href","target"]);return Object(p.jsxs)(oe,Object(d.a)(Object(d.a)({href:n,target:i},r),{},{children:[t,Object(p.jsx)("img",{src:"/images/icons/diagonal-arrow-svgrepo-com.svg",alt:"Link to site"})]}))},de.Image=function(e){var t=e.src,n=Object(l.a)(e,["src"]);return Object(p.jsxs)(se,Object(d.a)(Object(d.a)({},n),{},{children:[Object(p.jsx)("img",{src:t,alt:"Site screnshoots"})," "]}))};var le,je=j.b.div.withConfig({displayName:"pageWrapper__Container",componentId:"sc-1acuo88-0"})(["display:flex;justify-content:space-between;@media (max-width:1024px){flex-direction:column;}"]),be=j.b.div.withConfig({displayName:"pageWrapper__MainContainer",componentId:"sc-1acuo88-1"})(["display:flex;height:100%;flex-direction:column;justify-content:space-around;overflow:hidden;@media (max-width:1024px){overflow-y:scroll;}"]);function he(e){var t=e.type,n=e.children,i=Object(l.a)(e,["type","children"]);return"main"===t?Object(p.jsx)(be,Object(d.a)(Object(d.a)({},i),{},{children:n})):Object(p.jsx)(je,Object(d.a)(Object(d.a)({},i),{},{children:n}))}function me(){return Object(p.jsxs)(x,{children:[Object(p.jsx)(x.Title,{children:"Dmitry Belov"}),Object(p.jsx)(x.SubTitle,{children:"Frontend developer"})]})}function pe(){return Object(p.jsx)(N,{children:Object(p.jsx)(N.Link,{href:"https://github.com/Molisher",target:"_blank",children:"Github"})})}function xe(){return Object(p.jsxs)(_,{children:[Object(p.jsxs)(_.Link,{to:le.ABOUT,children:["About ",Object(p.jsx)(_.Number,{children:"01"})]}),Object(p.jsx)(_.Break,{}),Object(p.jsxs)(_.Link,{to:le.WORK,children:["Work ",Object(p.jsx)(_.Number,{children:"02"})]}),Object(p.jsx)(_.Break,{}),Object(p.jsxs)(_.Link,{to:le.CONTACT,children:["Contact",Object(p.jsx)(_.Number,{children:"03"})]})]})}function Oe(e){var t=e.subtitle,n=e.link;return Object(p.jsxs)(B,{children:[Object(p.jsx)(B.BackButton,{to:"back"===n?le.WORK:le.HOME}),Object(p.jsx)(B.Title,{children:"Dmitry Belov"}),Object(p.jsx)(B.SubTitle,{children:t})]})}function fe(){return Object(p.jsxs)(he,{children:[Object(p.jsx)(Oe,{subtitle:"About"}),Object(p.jsxs)(D,{children:[Object(p.jsx)(D.Title,{children:"Creative frontend developer"}),Object(p.jsx)(D.Description,{children:"I\u2019m a Front-End Developer located in Minsk/Saint Petersburg. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Well-organised person, problem solver with high attention to detail."}),Object(p.jsx)(D.Description,{children:"Interested in the entire frontend spectrum, fullstack direction and working on ambitious projects with positive people."}),Object(p.jsxs)(F,{children:[Object(p.jsx)(F.Title,{children:"Experience"}),Object(p.jsxs)(F.Content,{children:[Object(p.jsxs)(F.Row,{children:[Object(p.jsx)(F.Column,{children:"BOBRUISKAGROMACH"}),Object(p.jsx)(F.Column,{children:"Electromechanic"}),Object(p.jsx)(F.Column,{children:"2018-2020"})]}),Object(p.jsxs)(F.Row,{children:[Object(p.jsx)(F.Column,{children:"School of Business of BSU"}),Object(p.jsx)(F.Column,{children:"React Developer"}),Object(p.jsx)(F.Column,{children:"March 2020 \u2013 October 2020"})]})]})]}),Object(p.jsxs)(F,{children:[Object(p.jsx)(F.Title,{children:"Education"}),Object(p.jsxs)(F.Content,{children:[Object(p.jsxs)(F.Row,{children:[Object(p.jsx)(F.Column,{children:"School of Business of BSU"}),Object(p.jsx)(F.Column,{children:"Information System Software"}),Object(p.jsx)(F.Column,{children:"2018\u20132020"})]}),Object(p.jsxs)(F.Row,{children:[Object(p.jsx)(F.Column,{children:"BSUIR"}),Object(p.jsx)(F.Column,{children:"Quantum information systems"}),Object(p.jsx)(F.Column,{children:"2014\u20132018"})]})]})]})]})]})}function ge(){return Object(p.jsxs)(he,{children:[Object(p.jsx)(Oe,{subtitle:"Contact"}),Object(p.jsxs)(G,{children:[Object(p.jsx)(G.Title,{children:"Let's make something"}),Object(p.jsxs)(G.Wrapper,{children:[Object(p.jsx)(G.ExternalLink,{href:"https://t.me/Molisher",target:"_blank",children:"Telegram"}),Object(p.jsx)(G.ExternalLink,{href:"mailto:molisher@mail.ru",children:"molisher@mail.ru"}),Object(p.jsx)(G.Description,{children:"If you are interested, write to me using the links above."}),Object(p.jsxs)(G.Signature,{children:["Cheers,",Object(p.jsx)("br",{})," Dmitry"]})]})]})]})}function ue(){return Object(p.jsxs)(he,{type:"main",children:[Object(p.jsx)(me,{}),Object(p.jsx)(xe,{}),Object(p.jsx)(pe,{})]})}function we(){return Object(p.jsxs)(he,{children:[Object(p.jsx)(Oe,{subtitle:"Work"}),Object(p.jsxs)(te,{children:[Object(p.jsx)(te.Link,{to:le.PICTERESQUE,number:"01",children:"Picteresque"}),Object(p.jsx)(te.Link,{to:le.REACTPLAYER,number:"02",children:"React Player"})]})]})}function ve(){return Object(p.jsxs)(he,{children:[Object(p.jsx)(Oe,{subtitle:"Work",link:"back"}),Object(p.jsxs)(de,{children:[Object(p.jsx)(de.Title,{children:"Picteresque"}),Object(p.jsxs)(de.Wrapper,{children:[Object(p.jsx)(de.Meta,{title:"Industry",children:"Photo/Video"}),Object(p.jsx)(de.Meta,{title:"Role",children:"Creator"}),Object(p.jsxs)(de.Meta,{title:"Technologies",children:["React",Object(p.jsx)("br",{}),"Styled Components",Object(p.jsx)("br",{}),"Framer Motion",Object(p.jsx)("br",{}),"React Router"]})]}),Object(p.jsx)(de.Description,{children:"A website for a photo-video studio that demonstrates their advantages, work, etc. Designed to enhance styled-components and framer-motion skills with page transition."}),Object(p.jsx)(de.ExternalLink,{href:"https://molisher.github.io/picturesque/#/",target:"_blank",children:"View Site"}),Object(p.jsx)(de.Image,{src:"/images/picteresque/main.png"}),Object(p.jsx)(de.Image,{src:"/images/picteresque/work.png"}),Object(p.jsx)(de.Image,{src:"/images/picteresque/workInner.png"}),Object(p.jsxs)(de.Wrapper,{children:[Object(p.jsx)(de.ExternalLink,{href:"https://molisher.github.io/picturesque/#/",target:"_blank",children:"View Site"}),Object(p.jsx)(de.Meta,{title:"Credits",children:"Dmitry Belov"})]})]})]})}function ye(){return Object(p.jsxs)(he,{children:[Object(p.jsx)(Oe,{subtitle:"Work",link:"back"}),Object(p.jsxs)(de,{children:[Object(p.jsx)(de.Title,{children:"React Player"}),Object(p.jsxs)(de.Wrapper,{children:[Object(p.jsx)(de.Meta,{title:"Industry",children:"Multimedia"}),Object(p.jsx)(de.Meta,{title:"Role",children:"Creator"}),Object(p.jsxs)(de.Meta,{title:"Technologies",children:["React",Object(p.jsx)("br",{}),"Styled Components"]})]}),Object(p.jsx)(de.Description,{children:"Simple audio player, song selectable, rewindable and fully responsive. Created after graduate work to better understand audio elements in React"}),Object(p.jsx)(de.ExternalLink,{href:"https://molisher.github.io/react-player/",target:"_blank",children:"View Site"}),Object(p.jsx)(de.Image,{src:"/images/reactPlayer/main.png"}),Object(p.jsxs)(de.Wrapper,{children:[Object(p.jsx)(de.ExternalLink,{href:"https://molisher.github.io/react-player/",target:"_blank",children:"View Site"}),Object(p.jsx)(de.Meta,{title:"Credits",children:"Dmitry Belov"})]})]})]})}function Ce(){var e=Object(o.f)();return Object(p.jsx)(s.a,{exitBeforeEnter:!0,children:Object(p.jsxs)(o.c,{location:e,children:[Object(p.jsx)(o.a,{exact:!0,path:le.HOME,children:Object(p.jsx)(ue,{})}),Object(p.jsx)(o.a,{path:le.ABOUT,children:Object(p.jsx)(fe,{})}),Object(p.jsx)(o.a,{path:le.WORK,children:Object(p.jsx)(we,{})}),Object(p.jsx)(o.a,{path:le.CONTACT,children:Object(p.jsx)(ge,{})}),Object(p.jsx)(o.a,{path:le.PICTERESQUE,children:Object(p.jsx)(ve,{})}),Object(p.jsx)(o.a,{path:le.REACTPLAYER,children:Object(p.jsx)(ye,{})})]},e.pathname)})}!function(e){e.HOME="/",e.ABOUT="/about",e.WORK="/works",e.CONTACT="/contact",e.PICTERESQUE="/picteresque",e.REACTPLAYER="/reactplayer"}(le||(le={}));var _e,ke=n(35),Ie=Object(j.a)(_e||(_e=Object(ke.a)(["\n    html{\n        height: 100%;\n        box-sizing: border-box;\n        scroll-behavior: smooth;\n    }\n\n    *, *::after, *::before{\n        box-sizing: inherit;\n    }\n\n    body{\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        font-family: 'Josefin Sans', sans-serif;\n        color: #1A1C1A;\n        background-color: #F3DFC1;\n    }\n\n    a{\n        color: #1A1C1A;\n        text-decoration: none;\n    }\n\n    button{\n        background-color: inherit;\n        border: none;\n        outline: none;\n        padding: 0;\n    }\n\n    h1, h2, h3, h4, h5, h6{\n        margin: 0;\n        font-weight: normal;\n        font-size: 1rem;\n    }\n\n    #root{\n        height: 100%;\n    }\n\n    ul{ \n        padding: 0;\n        margin: 0;\n    }\n\n\n    ::-webkit-scrollbar{\n        width: 0;\n        background-color: transparent;\n    }\n\n"])));Object(a.render)(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsxs)(c.a,{children:[Object(p.jsx)(Ie,{}),Object(p.jsx)(Ce,{})]})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.c2f1954d.chunk.js.map