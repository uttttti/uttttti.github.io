(this.webpackJsonpv2=this.webpackJsonpv2||[]).push([[0],{107:function(e,a,t){e.exports=t(156)},114:function(e,a,t){},115:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){},125:function(e,a,t){},126:function(e,a,t){},143:function(e,a,t){},144:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},155:function(e,a,t){},156:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),o=(t(112),t(113),t(114),t(60)),i=t(198),s=t(216),m=(t(115),t(28)),u=t(61),E=Object(u.b)({name:"isOpen",initialState:{value:!1},reducers:{openDrawer:function(e){e.value=!0},closeDrawer:function(e){e.value=!1},changeDrawer:function(e,a){e.value=a.payload}}}),d=E.actions,p=(d.openDrawer,d.closeDrawer),f=d.changeDrawer,b=function(e){return e.isOpen.value},v=E.reducer,h=t(200),y=t(201),g=t(220),N=t(196),j=t(195),k=t(218),O=t(197),w=t(193),S=t(192),x=(t(120),function(e){var a=e.orientation,t=Object(m.b)(),n=function(e){return r.a.createElement(S.a,Object.assign({button:!0,component:"a"},e))};return r.a.createElement("div",{className:"MenuButtons","data-testid":"MenuButtons"},r.a.createElement(w.a,{"aria-label":"menu",className:a},["About","Experience","Education","Projects","Skills","Contact"].map((function(e){return r.a.createElement(n,{key:e,"aria-label":e,href:"#".concat(e),onClick:function(e){t(p())}},e)}))))}),F=t(199),C=t(88),P=t.n(C),D=t(56),M=t.n(D),B=t(194),T=(t(121),function(){var e=Object(B.a)({palette:{primary:{main:"#BA68C8",contrastText:"#F3E5F5"},secondary:{main:"#EEE",contrastText:"#BA68C8"},text:{primary:"#453B47"}}}),a=Object(j.a)(e.breakpoints.down("xs")),t="undefined"!==typeof window&&/iPad|iPhone|iPod/.test(navigator.userAgent),n=Object(N.a)(),c=Object(m.c)(b),l=Object(m.b)(),o=function(e){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(f(e))}};return r.a.createElement("div",{className:"Menu","data-testid":"Menu"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{size:"small",color:"primary","aria-label":"open drawer",className:"fab-button",onClick:o(!0)},r.a.createElement(P.a,null)),r.a.createElement(i.a,{theme:e},r.a.createElement(k.a,{anchor:"right",open:c,onClose:o(!1),onOpen:o(!0),disableBackdropTransition:!t,disableDiscovery:t},r.a.createElement(F.a,{onClick:o(!1),className:"close-button"},r.a.createElement(M.a,{color:"primary"})),r.a.createElement(x,{orientation:"vertical"})))):r.a.createElement("div",{className:"menus"},r.a.createElement(g.a,{appear:!1,direction:"down",in:!n},r.a.createElement(h.a,null,r.a.createElement(y.a,null,r.a.createElement(x,{orientation:"horizonal"})))),r.a.createElement(y.a,null)))}),A=(t(123),t(202)),z=t(219),I=t(30),L=t(221),U=t(160),J=t(203),R=Object(A.a)((function(e){return Object(z.a)({small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}})})),W=function(){var e=R(),a=Object(I.a)(),t=Object(j.a)(a.breakpoints.down("xs"));return r.a.createElement("div",{className:"Jumbotron "+(t?"xs":""),"data-testid":"Jumbotron"},r.a.createElement(L.a,{alt:"Miyoko Hirao",src:"/static/image/avator.jpg",className:e.large}),r.a.createElement(U.a,{variant:"h4",component:"h1",className:"outline"},"Frontend Engineer",r.a.createElement("span",{className:"operator"},"&&"),"Web Director"),r.a.createElement(J.a,{variant:"outlined",size:"small",color:"secondary",href:"./resume.pdf",download:!0},"Download PDF"))},q=t(204),G=(t(124),function(e){var a=e.label;return r.a.createElement("div",{className:"Title","data-testid":"Title"},r.a.createElement(U.a,{variant:"h4",component:"h2",align:"center",paragraph:!0},a))}),H=(t(125),function(){var e=(new Date).getFullYear()-2016;return r.a.createElement("div",{className:"About","data-testid":"About",id:"About"},r.a.createElement(q.a,null,r.a.createElement(G,{label:"About"}),r.a.createElement(U.a,{variant:"body2"},"Web\u30c7\u30a3\u30ec\u30af\u30bf\u30fc\u3084\u30c1\u30fc\u30e0\u30ea\u30fc\u30c0\u30fc\u7d4c\u9a13\u306e\u65b9\u304c\u9577\u3044\u3067\u3059\u304c\u3001\u73fe\u5728\u306f\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u6b74\u7d04",e,"\u5e74\u3067\u3059\u3002\u307b\u307c\u72ec\u5b66\u3001\u304b\u3064\u30c8\u30e9\u30a4&\u30a8\u30e9\u30fc\u3067\u4e57\u308a\u5207\u3063\u3066\u304d\u305f\u306e\u3067\u3001\u77e5\u8b58\u3082\u7d4c\u9a13\u3082\u6700\u524d\u7dda\u306b\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u3044\u81ea\u899a\u306f\u3042\u308a\u307e\u3059\u304c\u3001\u3069\u3093\u306a\u74b0\u5883\u3067\u3042\u3063\u3066\u3082\u610f\u6b32\u7684\u306b\u53d6\u308a\u7d44\u3080\u6240\u5b58\u3067\u3059\u3002")))}),Y=t(19),$=(t(126),t(24)),K=t.n($),Q=t(205),V=t(206),X=t(207),Z=t(209),_=t(210),ee=t(208),ae=t(89),te=t.n(ae),ne=t(98),re="https://my-json-server.typicode.com/uttttti/uttttti.github.io",ce=function(){var e=Object(n.useState)([]),a=Object(Y.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){K.a.get(re+"/experience").then((function(e){return c(e.data)})).catch((function(e){c((function(){throw e}))}))}),[]),r.a.createElement("div",{className:"Experience","data-testid":"Experience",id:"Experience"},r.a.createElement(G,{label:"Experience"}),r.a.createElement("div",{className:"wrapper"},r.a.createElement(q.a,null,r.a.createElement(Q.a,{className:"timeline"},t.map((function(e){return r.a.createElement(V.a,{key:e.id},r.a.createElement(X.a,null,r.a.createElement(ee.a,{color:"primary"},r.a.createElement(te.a,null)),r.a.createElement(Z.a,null)),r.a.createElement(_.a,null,r.a.createElement(U.a,{variant:"subtitle1",color:"textSecondary"},e.date),r.a.createElement(ne.a,{elevation:0,variant:"outlined",square:!0,className:"box"},r.a.createElement(U.a,{variant:"h6",component:"h3"},e.company),r.a.createElement(U.a,{variant:"subtitle2",component:"h4",color:"textSecondary"},e.occupation),r.a.createElement(U.a,{variant:"body2",className:"body"},e.summary))))}))))))},le=(t(143),function(){var e=Object(n.useState)([]),a=Object(Y.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){K.a.get(re+"/education").then((function(e){return c(e.data)})).catch((function(e){c((function(){throw e}))}))}),[]),r.a.createElement("div",{className:"Education","data-testid":"Education",id:"Education"},r.a.createElement(G,{label:"Education"}),r.a.createElement("div",{className:"wrapper"},r.a.createElement(q.a,{className:"contents"},t.map((function(e){return r.a.createElement(ne.a,{key:e.id,elevation:0,variant:"outlined",square:!0,className:"box"},r.a.createElement(U.a,{variant:"h6",component:"h3"},e.school),r.a.createElement(U.a,{variant:"subtitle2",component:"h4",color:"textSecondary"},e.department),r.a.createElement(U.a,{variant:"subtitle2",component:"h4",color:"textSecondary"},e.date),r.a.createElement(U.a,{variant:"body2",className:"body"},e.summary))})))))}),oe=(t(144),t(222)),ie=function(){var e=Object(n.useState)([]),a=Object(Y.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){K.a.get(re+"/projects").then((function(e){return c(e.data)})).catch((function(e){c((function(){throw e}))}))}),[]),r.a.createElement("div",{className:"Projects","data-testid":"Projects",id:"Projects"},r.a.createElement(G,{label:"Projects"}),r.a.createElement("div",{className:"wrapper"},r.a.createElement(q.a,null,t.map((function(e){return r.a.createElement(ne.a,{key:e.id,elevation:0,variant:"outlined",square:!0,className:"box"},r.a.createElement(U.a,{variant:"h6",component:"h3",align:"center"},e.title),r.a.createElement(U.a,{variant:"body2",className:"body"},e.summary),r.a.createElement("div",{className:"skill-wrapper"},e.skills.map((function(e,a){return r.a.createElement(oe.a,{size:"small",color:"secondary",key:e+a,label:e,className:"skill"})}))))})))))},se=(t(145),function(){var e=Object(n.useState)([]),a=Object(Y.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){K.a.get(re+"/skills").then((function(e){return c(e.data.item)})).catch((function(e){c((function(){throw e}))}))}),[]),r.a.createElement("div",{className:"Skills","data-testid":"Skills",id:"Skills"},r.a.createElement(G,{label:"Skills"}),r.a.createElement(q.a,{className:"skills-wrapper"},t.map((function(e,a){return r.a.createElement(oe.a,{color:"secondary",key:e+a,label:e,className:"skill"})}))))}),me=(t(146),t(46)),ue=t(47),Ee=(t(149),t(211)),de=t(212),pe=t(213),fe=t(217),be=function(e){var a=e.onClose,t=e.open;return r.a.createElement("div",{className:"ExcuseDialog","data-testid":"ExcuseDialog"},r.a.createElement(Ee.a,{onClose:a,open:t},r.a.createElement(F.a,{"aria-label":"close",onClick:a,className:"close-button"},r.a.createElement(M.a,{color:"primary"})),r.a.createElement(de.a,{className:"dialog-title"},r.a.createElement(U.a,{variant:"h4"},"Sorry\u2026")),r.a.createElement(pe.a,{className:"dialog-content"},r.a.createElement(fe.a,{severity:"warning",color:"info"},"This is just a sample. \u2014 These links are invalid."))))},ve=function(){var e=Object(n.useState)(!1),a=Object(Y.a)(e,2),t=a[0],c=a[1],l=function(){c(!0)};return r.a.createElement("div",{className:"Contact","data-testid":"Contact",id:"Contact"},r.a.createElement(U.a,{variant:"h4",color:"secondary",className:"title"},"Get in Touch"),r.a.createElement(fe.a,{severity:"warning",className:"note"},"This is just a sample. \u2014 These links are invalid."),r.a.createElement(F.a,{onClick:l},r.a.createElement(me.a,{icon:ue.b,color:"#F3E5F5",size:"lg"})),r.a.createElement(F.a,{onClick:l},r.a.createElement(me.a,{icon:ue.a,color:"#F3E5F5",size:"lg"})),r.a.createElement(F.a,{onClick:l},r.a.createElement(me.a,{icon:ue.d,color:"#F3E5F5",size:"lg"})),r.a.createElement(F.a,{onClick:l},r.a.createElement(me.a,{icon:ue.c,color:"#F3E5F5",size:"lg"})),r.a.createElement(be,{open:t,onClose:function(){c(!1)}}))},he=(t(150),t(90)),ye=t.n(he),ge=function(){return r.a.createElement("div",{className:"Footer","data-testid":"Footer"},r.a.createElement(O.a,{color:"primary",size:"small","aria-label":"scroll back to top",href:"#back-to-top-anchor"},r.a.createElement(ye.a,null)),r.a.createElement("footer",null,"Copyright \xa9 me. All Rights Reserved."))},Ne=t(91),je=t(92),ke=t(96),Oe=t(95),we=(t(151),function(e){Object(ke.a)(t,e);var a=Object(Oe.a)(t);function t(e){var n;return Object(Ne.a)(this,t),(n=a.call(this,e)).state={},n}return Object(je.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({error:e,errorInfo:a})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement(q.a,{className:"ErrorBoundary"},r.a.createElement(U.a,{variant:"h6",className:"message"},"Something went wrong."),r.a.createElement("details",{className:"ditails"},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children()}}]),t}(r.a.Component)),Se=(t(152),t(153),t(214)),xe=t(215),Fe=function(){return r.a.createElement("div",{className:"Error","data-testid":"Error"},r.a.createElement("div",{className:"background"},r.a.createElement("span",{className:"bg1"}),r.a.createElement("span",{className:"bg2"}),r.a.createElement("span",{className:"bg3"})),r.a.createElement(q.a,{className:"contents"},r.a.createElement("p",{className:"sorry"},"S",r.a.createElement(Se.a,null),r.a.createElement(xe.a,{className:"error-icon"}),"RRY."),r.a.createElement(U.a,{variant:"body2",className:"message"},"Something went wrong.")),r.a.createElement(J.a,{variant:"outlined",color:"secondary",href:"/",className:"back-btn"},"Go Back"))},Ce=function(){var e=Object(n.useState)(!1),a=Object(Y.a)(e,2),t=a[0],c=a[1],l=function(){var e=Object(n.useState)([]),a=Object(Y.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){K.a.get(re+"/foo").then((function(e){return c(e.data)})).catch((function(e){c((function(){throw e}))}))}),[]),r.a.createElement("div",null,t," should get an error!")};return r.a.createElement("div",{className:"Extra","data-testid":"Extra"},r.a.createElement(fe.a,{severity:"info"},"I'm doing experiment in the area below from here."),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement(J.a,{variant:"contained",color:"primary",size:"small",onClick:function(e){c(!t)}},t?"hide":"show"," Error Component")),r.a.createElement(g.a,{direction:"up",in:t,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",null,r.a.createElement(Fe,null))),r.a.createElement(q.a,{className:"container"},r.a.createElement(U.a,{variant:"caption"},"Here is a sample impersonating an API error and ErrorBoundary."),r.a.createElement(we,null,(function(){return r.a.createElement(l,null)}))))},Pe=function(){var e=Object(I.a)(),a=Object(j.a)(e.breakpoints.down("xs"));return r.a.createElement("div",{className:"Page","data-testid":"Page"},r.a.createElement("div",{className:"app","data-testid":"App",id:"back-to-top-anchor"},r.a.createElement("div",{className:"bg-img "+(a?"xs":"")}),r.a.createElement(T,null),r.a.createElement(W,null),r.a.createElement(H,null),r.a.createElement(we,null,(function(){return r.a.createElement(ce,null)})),r.a.createElement(we,null,(function(){return r.a.createElement(le,null)})),r.a.createElement(we,null,(function(){return r.a.createElement(ie,null)})),r.a.createElement(we,null,(function(){return r.a.createElement(se,null)})),r.a.createElement(ve,null),r.a.createElement(ge,null),r.a.createElement(Ce,null)))},De=t(94),Me=t(12),Be=t(93),Te=t.n(Be),Ae=Object(o.a)({palette:{primary:{main:"#BA68C8",contrastText:"#F3E5F5"},secondary:{main:"#F3E5F5",contrastText:"#894D94"},text:{primary:"#453B47"}},overrides:{MuiTypography:{root:{fontFamily:'"M PLUS 1p"'},h4:{fontFamily:"Poiret One"},h6:{fontFamily:'"M PLUS 1p"'},subtitle1:{fontFamily:'"M PLUS 1p"'},subtitle2:{fontFamily:'"M PLUS 1p"'},body2:{fontFamily:'"M PLUS 1p"'}},MuiButton:{root:{fontFamily:"Poiret One"}},MuiChip:{root:{fontFamily:'"M PLUS 1p"'}}}});Te.a.polyfill();var ze=function(){return r.a.createElement(i.a,{theme:Ae},r.a.createElement(s.a,null),r.a.createElement(De.a,null,r.a.createElement(Me.c,null,r.a.createElement(Me.a,{path:"/error",component:Fe}),r.a.createElement(Me.a,{component:Pe}))))},Ie=Object(u.a)({reducer:{isOpen:v}});m.c,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(155);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:Ie},r.a.createElement(ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.7a5a8853.chunk.js.map