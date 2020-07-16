(this.webpackJsonpv2=this.webpackJsonpv2||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(103),a(104),a(105),a(106),a(57)),i=a(190),s=a(204),m=a(25),u=a(58),E=Object(u.b)({name:"isOpen",initialState:{value:!1},reducers:{openDrawer:function(e){e.value=!0},closeDrawer:function(e){e.value=!1},changeDrawer:function(e,t){e.value=t.payload}}}),d=E.actions,f=(d.openDrawer,d.closeDrawer),p=d.changeDrawer,h=function(e){return e.isOpen.value},b=E.reducer,v=a(192),y=a(193),g=a(210),w=a(188),k=a(187),N=a(207),j=a(189),O=a(185),x=a(184),S=(a(111),function(e){var t=e.orientation,a=Object(m.b)(),n=function(e){return r.a.createElement(x.a,Object.assign({button:!0,component:"a"},e))};return r.a.createElement("div",{className:"MenuButtons","data-testid":"MenuButtons"},r.a.createElement(O.a,{"aria-label":"menu",className:t},["About","Experience","Education","Projects","Skills","Contact"].map((function(e){return r.a.createElement(n,{key:e,"aria-label":e,href:"#".concat(e),onClick:function(e){a(f())}},e)}))))}),F=a(191),C=a(85),B=a.n(C),A=a(86),D=a.n(A),P=a(186),z=(a(112),function(){var e=Object(P.a)({palette:{primary:{main:"#BA68C8",contrastText:"#F3E5F5"},secondary:{main:"#EEE",contrastText:"#BA68C8"},text:{primary:"#453B47"}}}),t=Object(k.a)(e.breakpoints.down("xs")),a="undefined"!==typeof window&&/iPad|iPhone|iPod/.test(navigator.userAgent),n=Object(w.a)(),c=Object(m.c)(h),l=Object(m.b)(),o=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&l(p(e))}};return r.a.createElement("div",{className:"Menu","data-testid":"Menu"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{size:"small",color:"secondary","aria-label":"open drawer",className:"fab-button",onClick:o(!0)},r.a.createElement(B.a,null)),r.a.createElement(i.a,{theme:e},r.a.createElement(N.a,{anchor:"right",open:c,onClose:o(!1),onOpen:o(!0),disableBackdropTransition:!a,disableDiscovery:a},r.a.createElement(F.a,{onClick:o(!1),className:"close-button"},r.a.createElement(D.a,{color:"primary"})),r.a.createElement(S,{orientation:"vertical"})))):r.a.createElement("div",{className:"menus"},r.a.createElement(g.a,{appear:!1,direction:"down",in:!n},r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(S,{orientation:"horizonal"})))),r.a.createElement(y.a,null)))}),T=(a(114),a(194)),M=a(209),I=a(211),J=a(195),W=a(196),q=a(208),H=Object(T.a)((function(e){return Object(M.a)({small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}})})),R=function(){var e=H();return r.a.createElement("div",{className:"Jumbotron","data-testid":"Jumbotron"},r.a.createElement(q.a,{severity:"warning",variant:"filled",className:"warning",color:"info"},"\u307e\u3060\u5236\u4f5c\u9014\u4e2d\u3067\u3059\u3002"),r.a.createElement(I.a,{alt:"Miyoko Hirao",src:"/static/image/avator.jpg",className:e.large}),r.a.createElement("dl",{className:"outline"},r.a.createElement("dt",null,r.a.createElement(J.a,{variant:"h4",component:"h1"},"MIYOKO HIRAO")),r.a.createElement("dd",null,r.a.createElement(J.a,{variant:"h6"},"Frontend Engineer && Web Director"))),r.a.createElement(W.a,{variant:"outlined",size:"small",color:"secondary",href:"./resume.pdf",download:!0},"Download PDF"))},G=a(197),Y=(a(115),function(e){var t=e.label;return r.a.createElement("div",{className:"Title","data-testid":"Title"},r.a.createElement(J.a,{variant:"h4",component:"h2",align:"center",paragraph:!0},t))}),K=(a(116),function(){return r.a.createElement("div",{className:"About","data-testid":"About",id:"About"},r.a.createElement(G.a,null,r.a.createElement(Y,{label:"About"}),r.a.createElement(J.a,{variant:"body2"},"\u5e73\u5c3e \u7f8e\u4ee3\u5b50\u3067\u3059\u3002Web\u30c7\u30a3\u30ec\u30af\u30bf\u30fc\u3084\u30c1\u30fc\u30e0\u30ea\u30fc\u30c0\u30fc\u7d4c\u9a13\u306e\u65b9\u304c\u9577\u3044\u3067\u3059\u304c\u3001\u73fe\u5728\u306f\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u6b74\u7d044\u5e74\u3067\u3059\u3002\u307b\u307c\u72ec\u5b66\u3001\u304b\u3064\u30c8\u30e9\u30a4&\u30a8\u30e9\u30fc\u3067\u4e57\u308a\u5207\u3063\u3066\u304d\u305f\u306e\u3067\u3001\u77e5\u8b58\u3082\u7d4c\u9a13\u3082\u6700\u524d\u7dda\u306b\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u3044\u81ea\u899a\u306f\u3042\u308a\u307e\u3059\u304c\u3001\u3069\u3093\u306a\u74b0\u5883\u3067\u3042\u3063\u3066\u3082\u610f\u6b32\u7684\u306b\u53d6\u308a\u7d44\u3080\u6240\u5b58\u3067\u3059\u3002")))}),$=a(29),L=(a(117),a(28)),Q=a.n(L),U=a(198),V=a(199),X=a(200),Z=a(202),_=a(203),ee=a(201),te=a(87),ae=a.n(te),ne=a(148),re=function(){var e=Object(n.useState)([]),t=Object($.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){Q.a.get("https://my-json-server.typicode.com/uttttti/uttttti.github.io/experience").then((function(e){return c(e.data)})).catch((function(e){c((function(){throw e}))}))}),[]),r.a.createElement("div",{className:"Experience","data-testid":"Experience",id:"Experience"},r.a.createElement(Y,{label:"Experience"}),r.a.createElement(U.a,{className:"timeline"},a.map((function(e){return r.a.createElement(V.a,{key:e.id},r.a.createElement(X.a,null,r.a.createElement(ee.a,{color:"primary"},r.a.createElement(ae.a,null)),r.a.createElement(Z.a,null)),r.a.createElement(_.a,null,r.a.createElement(J.a,{variant:"subtitle1",color:"textSecondary"},e.date),r.a.createElement(ne.a,{elevation:0,variant:"outlined",square:!0,className:"box"},r.a.createElement(J.a,{variant:"h6",component:"h3"},e.company),r.a.createElement(J.a,{variant:"subtitle2",component:"h4",color:"textSecondary"},e.occupation),r.a.createElement(J.a,{variant:"body2",className:"body"},e.summary))))}))))},ce=(a(134),function(){var e=Object(n.useState)([]),t=Object($.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){Q.a.get("https://my-json-server.typicode.com/uttttti/uttttti.github.io/education").then((function(e){return c(e.data)})).catch((function(e){c((function(){throw e}))}))}),[]),r.a.createElement("div",{className:"Education","data-testid":"Education",id:"Education"},r.a.createElement(Y,{label:"Education"}),r.a.createElement(G.a,null,a.map((function(e){return r.a.createElement(ne.a,{key:e.id,elevation:0,variant:"outlined",square:!0,className:"box"},r.a.createElement(J.a,{variant:"h6",component:"h3"},e.school),r.a.createElement(J.a,{variant:"subtitle2",component:"h4",color:"textSecondary"},e.department),r.a.createElement(J.a,{variant:"subtitle2",component:"h4",color:"textSecondary"},e.date),r.a.createElement(J.a,{variant:"body2",className:"body"},e.summary))}))))}),le=(a(135),a(212)),oe=function(){var e=Object(n.useState)([]),t=Object($.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){Q.a.get("https://my-json-server.typicode.com/uttttti/uttttti.github.io/projects").then((function(e){return c(e.data)})).catch((function(e){c((function(){throw e}))}))}),[]),r.a.createElement("div",{className:"Projects","data-testid":"Projects",id:"Projects"},r.a.createElement(Y,{label:"Projects"}),r.a.createElement(G.a,null,a.map((function(e){return r.a.createElement(ne.a,{key:e.id,elevation:0,variant:"outlined",square:!0,className:"box"},r.a.createElement(J.a,{variant:"h6",component:"h3",align:"center"},e.title),r.a.createElement(J.a,{variant:"body2",className:"body"},e.summary),r.a.createElement("div",{className:"skill-wrapper"},e.skills.map((function(e,t){return r.a.createElement(le.a,{size:"small",key:e+t,label:e,className:"skill"})}))))}))))},ie=(a(136),function(){var e=Object(n.useState)([]),t=Object($.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){Q.a.get("https://my-json-server.typicode.com/uttttti/uttttti.github.io/skills").then((function(e){return c(e.data.item)})).catch((function(e){c((function(){throw e}))}))}),[]),r.a.createElement("div",{className:"Skills","data-testid":"Skills",id:"Skills"},r.a.createElement(Y,{label:"Skills"}),r.a.createElement(G.a,{className:"skills-wrapper"},a.map((function(e,t){return r.a.createElement(le.a,{key:e+t,label:e,className:"skill"})}))))}),se=(a(137),a(45)),me=a(46),ue=function(){return r.a.createElement("div",{className:"Contact","data-testid":"Contact",id:"Contact"},r.a.createElement(J.a,{variant:"h5",color:"secondary",className:"title"},"Get in Touch"),r.a.createElement(F.a,{href:"https://github.com/uttttti"},r.a.createElement(se.a,{icon:me.b,color:"#F3E5F5",size:"lg"})),r.a.createElement(F.a,{href:"https://www.facebook.com/uttttti"},r.a.createElement(se.a,{icon:me.d,color:"#F3E5F5",size:"lg"})),r.a.createElement(F.a,{href:"https://twitter.com/0345"},r.a.createElement(se.a,{icon:me.a,color:"#F3E5F5",size:"lg"})),r.a.createElement(F.a,{href:"https://www.instagram.com/miyoko/"},r.a.createElement(se.a,{icon:me.c,color:"#F3E5F5",size:"lg"})))},Ee=(a(140),a(88)),de=a.n(Ee),fe=function(){return r.a.createElement("div",{className:"Footer","data-testid":"Footer"},r.a.createElement(j.a,{color:"primary",size:"small","aria-label":"scroll back to top",href:"#back-to-top-anchor"},r.a.createElement(de.a,null)),r.a.createElement("footer",null,"\xa9Miyoko Hirao"))},pe=a(89),he=a.n(pe),be=a(90),ve=a(91),ye=a(94),ge=a(93),we=(a(141),function(e){Object(ye.a)(a,e);var t=Object(ge.a)(a);function a(e){var n;return Object(be.a)(this,a),(n=t.call(this,e)).state={},n}return Object(ve.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement(G.a,{className:"ErrorBoundary"},r.a.createElement(J.a,{variant:"h6",className:"message"},"Something went wrong."),r.a.createElement("details",{className:"ditails"},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children()}}]),a}(r.a.Component)),ke=Object(o.a)({palette:{primary:{main:"#BA68C8",contrastText:"#F3E5F5"},secondary:{main:"#EEE",contrastText:"#BA68C8"},text:{primary:"#453B47"}}});he.a.polyfill();var Ne=function(){return r.a.createElement("div",{className:"Page","data-testid":"Page"},r.a.createElement(i.a,{theme:ke},r.a.createElement(s.a,null),r.a.createElement("div",{className:"app","data-testid":"App",id:"back-to-top-anchor"},r.a.createElement("div",{className:"bg-img"}),r.a.createElement(z,null),r.a.createElement(R,null),r.a.createElement(K,null),r.a.createElement(we,null,(function(){return r.a.createElement(re,null)})),r.a.createElement(we,null,(function(){return r.a.createElement(ce,null)})),r.a.createElement(we,null,(function(){return r.a.createElement(oe,null)})),r.a.createElement(we,null,(function(){return r.a.createElement(ie,null)})),r.a.createElement(ue,null),r.a.createElement(fe,null))))},je=(a(142),a(205)),Oe=a(206),xe=function(){return r.a.createElement("div",{className:"Error","data-testid":"Error"},r.a.createElement(G.a,null,r.a.createElement("p",{className:"sorry"},"S",r.a.createElement(je.a,null),r.a.createElement(Oe.a,{className:"error-icon"}),"RRY."),r.a.createElement(J.a,{variant:"body2",className:"message"},"Something went wrong.")),r.a.createElement(W.a,{variant:"outlined",href:"/",className:"back-btn"},"Go Back"))},Se=a(92),Fe=a(11),Ce=function(){return r.a.createElement(Se.a,null,r.a.createElement(Fe.c,null,r.a.createElement(Fe.a,{path:"/",exact:!0,component:Ne}),r.a.createElement(Fe.a,{component:xe})))},Be=Object(u.a)({reducer:{isOpen:b}});m.c,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(144);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:Be},r.a.createElement(Ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,a){e.exports=a(145)}},[[98,1,2]]]);
//# sourceMappingURL=main.5ff161a2.chunk.js.map