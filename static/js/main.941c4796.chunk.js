(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(9),a=n.n(r),s=(n(53),n(54),n(18)),o=n(6),u=(n(55),n(13)),i=n(17),l=n.n(i),j=n(2),d=Object(c.createContext)(),h=function(e){var t=e.children,n=Object(c.useState)([]),r=Object(u.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(""),h=Object(u.a)(i,2),b=h[0],p=h[1],O=Object(c.useState)(!0),f=Object(u.a)(O,2),x=f[0],m=f[1],g=Object(o.e)();Object(c.useEffect)((function(){l.a.get("https://photocollection1.herokuapp.com/api/nautocomplete/".concat(b)).then((function(e){s(e.data.autocomplete)}))}),[b]);return Object(j.jsx)(d.Provider,{value:{resultsArray:a,onClickEnter:function(e){if(13===e.keyCode&&0!==a.length){m(!x);var t={pathname:"/result/".concat(e.target.value),state:{click:x}};g.push(t)}},handleInputSearch:function(e){e.length>2?p(e):p("")},handleAutoComplete:function(e){p(e);var t={pathname:"/result/".concat(e)};g.push(t)}},children:t})},b=n(16),p=n(105);var O=function(){var e=Object(c.useContext)(d),t=e.resultsArray,n=e.onClickEnter,r=e.handleInputSearch,a=e.handleAutoComplete,s=t.map((function(e){return e.query}))||[""];return Object(j.jsx)(p.a,{id:"custom-input-demo",onChange:function(e,t){n(e,t),a(t)},onInputChange:function(e,t){r(t)},options:s,renderInput:function(e){return Object(j.jsx)("div",{ref:e.InputProps.ref,children:Object(j.jsx)("input",Object(b.a)(Object(b.a)({placeholder:"Search free high-resolution photos",type:"text"},e.inputProps),{},{onKeyDown:function(e){n(e)}}))})}})};var f=function(){return Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h1",{children:"Unsplash"}),Object(j.jsxs)("p",{children:['"The internet\u2019s source of"',Object(j.jsx)("a",{href:"/license",children:"freely-usable images"})]}),Object(j.jsx)("p",{children:"Powered by creators everywhere."})]})};var x=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"bg-picture",children:Object(j.jsxs)("div",{className:"container-1",children:[Object(j.jsx)(f,{}),Object(j.jsx)("div",{className:"input-browser",children:Object(j.jsx)(h,{children:Object(j.jsx)(O,{})})})]})})})},m=n(44);var g=function(e){return Object(j.jsxs)(m.a,{size:"lg",show:e.modalIsOpen,onHide:function(){return e.setModalIsOpen(!1)},"aria-labelledby":"example-modal-sizes-title-lg",children:[Object(j.jsx)("div",{className:"modal-header",closeButton:!0,children:Object(j.jsx)("p",{children:e.res.user.name})}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsx)("img",{src:e.res.urls.small,alt:""})}),Object(j.jsx)("div",{className:"modal-footer",children:Object(j.jsxs)("strong",{children:[" ",Object(j.jsx)("p",{children:e.res.user.location})]})})]})};var v=function(e){return Object(j.jsx)("article",{style:{borderStyle:"none"},className:"card",children:Object(j.jsx)("img",{variant:"primary",style:{cursor:"pointer"},className:"card__image",src:e.result.urls.thumb,alt:"",onClick:function(){return e.getIdPicture(e.result.id)}})})},y=Object(c.createContext)(),C=function(e){var t=e.children,n=Object(o.g)("").message,r=Object(o.f)().state,a=Object(c.useState)([]),s=Object(u.a)(a,2),i=s[0],d=s[1],h=Object(c.useState)([]),b=Object(u.a)(h,2),p=b[0],O=b[1],f=Object(c.useState)(n),x=Object(u.a)(f,2),m=x[0],C=x[1],S=Object(c.useState)(!1),w=Object(u.a)(S,2),I=w[0],k=w[1],N=Object(c.useState)(""),P=Object(u.a)(N,2),_=P[0],A=P[1],E=Object(c.useState)(r),F=Object(u.a)(E,2),M=F[0],T=F[1],B=Object(o.e)();Object(c.useEffect)((function(){l.a.get("https://api.unsplash.com/search/photos?query=".concat(m,"&per_page=100=&client_id=").concat("9tJMde6Lvj7EwGnMaTcycDeV9-hZ4nrZv17OfGZ1p40")).then((function(e){d(e.data.results),console.log(e)}))}),[M]),Object(c.useEffect)((function(){l.a.get("https://photocollection1.herokuapp.com/api/nautocomplete/".concat(m)).then((function(e){O(e.data.autocomplete)}))}),[m]);var G=function(e){A(e),k(!0)};return Object(j.jsx)(y.Provider,{value:{resultsArray:p,onClickEnter:function(e){13===e.keyCode&&0!==p.length&&(T(!M),window.history.replaceState(null,"","/result/".concat(e.target.value)))},handleInputSearch:function(e){e.length>2?C(e):C("")},handleOnClick:function(){return B.goBack()},handleAutoComplete:function(e){T(!M),window.history.replaceState(null,"","/result/".concat(e))},showGallery:function(){return i.map((function(e){return Object(j.jsx)(v,{result:e,getIdPicture:G},e.id)}))},ShowModal:function(){return i.filter((function(e){return e.id===_})).map((function(e){return Object(j.jsx)(g,{res:e,modalIsOpen:I,setModalIsOpen:k},e.id)}))},TextResult:function(){return m}},children:t})};var S=function(){var e=Object(c.useContext)(y),t=e.resultsArray,n=e.onClickEnter,r=e.handleInputSearch,a=e.handleAutoComplete,s=t.map((function(e){return e.query}))||[""];return Object(j.jsx)("div",{className:"gallery__input-browser",children:Object(j.jsx)(p.a,{id:"custom-input-demo",onChange:function(e,t){n(e,t),a(t)},onInputChange:function(e,t){r(t)},options:s,renderInput:function(e){return Object(j.jsx)("div",{ref:e.InputProps.ref,children:Object(j.jsx)("input",Object(b.a)(Object(b.a)({placeholder:"Search free high-resolution photos",type:"text"},e.inputProps),{},{onKeyDown:function(e){n(e)}}))})}})})};var w=function(){var e=Object(c.useContext)(y),t=e.TextResult,n=e.handleOnClick;return Object(j.jsxs)("div",{className:"gallery__info",children:[Object(j.jsx)("h1",{className:"textResult",style:{paddingBottom:"20px"},children:t()}),Object(j.jsx)("span",{style:{cursor:"pointer"},onClick:n,children:"Go back"})]})};var I=function(){var e=Object(c.useContext)(y).showGallery;return Object(j.jsx)("div",{className:"gallery__grid",children:e()})};function k(){return(0,Object(c.useContext)(y).ShowModal)()}var N=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(C,{children:[Object(j.jsxs)("div",{className:"gallery",children:[Object(j.jsx)(S,{}),Object(j.jsx)(w,{}),Object(j.jsx)(I,{})]}),Object(j.jsx)(k,{})]})})};var P=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(x,{})}}),Object(j.jsx)(o.a,{path:"/result/:message",render:function(){return Object(j.jsx)(N,{})}})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};a.a.render(Object(j.jsx)(P,{}),document.getElementById("root")),_()}},[[83,1,2]]]);
//# sourceMappingURL=main.941c4796.chunk.js.map