(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3icHg",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2RcE5"}},12:function(e,t,a){e.exports={BtnContainer:"Button_BtnContainer__3GMUN",Button:"Button_Button__18H4Q"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3Qprg",Modal:"Modal_Modal__3P20P"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGalleryList_ImageGallery__DEEwl"}},26:function(e,t,a){e.exports={LoaderContainer:"Loader_LoaderContainer__G7_jk"}},27:function(e,t,a){e.exports={App:"App_App__1j8Ka"}},32:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3Kzkn",SearchForm:"Searchbar_SearchForm__3E5AT",SearchFormButton:"Searchbar_SearchFormButton__2iz2_",SearchFormBtn:"Searchbar_SearchFormBtn__30p_P",SearchFormBtnlabel:"Searchbar_SearchFormBtnlabel__hRLfj",SearchFormInput:"Searchbar_SearchFormInput__3q7v_"}},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(32),a(14)),s=a(4),l=a(7),u=a(5),m=a.n(u),b=a(1);function j(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(b.jsx)("div",{children:Object(b.jsx)("header",{className:m.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):l.b.error("Enter keyword to seach images!")},className:m.a.SearchForm,children:[Object(b.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(b.jsx)("span",{className:m.a.SearchFormBtnlabel,children:"Search"})}),Object(b.jsx)("input",{onChange:function(e){o(e.currentTarget.value)},value:c,className:m.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})}var h=a(23),d=a.n(h),g=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n;return d.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=").concat("21859348-c38bd78951db790eb6ef65701","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},O=a(11),_=a.n(O),f=function(e){var t=e.images,a=e.onClickImage;return Object(b.jsx)(b.Fragment,{children:t.map((function(e,t){e.id;var n=e.webformatURL,r=e.largeImageURL;return Object(b.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(b.jsx)("img",{className:_.a.ImageGalleryItemImage,src:n,alt:"",onClick:function(){return a({largeImageURL:r})}})},t)}))})},p=a(24),S=a.n(p),x=function(e){var t=e.images,a=e.onClickImage;return Object(b.jsx)("ul",{className:S.a.ImageGallery,children:Object(b.jsx)(f,{images:t,onClickImage:a})})},I=a(12),v=a.n(I);function y(e){var t=e.onClick;return Object(b.jsx)("div",{className:v.a.BtnContainer,children:Object(b.jsx)("button",{className:v.a.Button,type:"button",onClick:t,children:"Load more"})})}var k=a(25),C=a.n(k),w=(a(72),a(26)),B=a.n(w),F=function(){return Object(b.jsx)("div",{className:B.a.LoaderContainer,children:Object(b.jsx)(C.a,{type:"Circles",color:"#7db5e9",height:90,width:90,timeout:5e3})})},N=a(13),G=a.n(N),L=document.querySelector("#modal-root");function E(e){var t=e.bigImage,a=e.onClose;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&a()};return Object(c.createPortal)(Object(b.jsx)("div",{className:G.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(b.jsx)("div",{className:G.a.Modal,children:Object(b.jsx)("img",{src:t,alt:""})})}),L)}var M=a(27),P=a.n(M);function R(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),o=Object(s.a)(c,2),u=o[0],m=o[1],h=Object(n.useState)(""),d=Object(s.a)(h,2),O=d[0],_=d[1],f=Object(n.useState)(null),p=Object(s.a)(f,2),S=p[0],I=p[1],v=Object(n.useState)(!1),k=Object(s.a)(v,2),C=k[0],w=k[1],B=Object(n.useState)(!1),N=Object(s.a)(B,2),G=N[0],L=N[1],M=Object(n.useState)(!1),R=Object(s.a)(M,2),A=R[0],U=R[1];Object(n.useEffect)((function(){O&&function(){var e={searchQuery:O,currentPage:u,error:S};w(!0),g(e).then((function(e){r((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))})),0===e.length&&l.b.error("No images with this keyword to be found!")})).catch((function(e){return I(e)})).finally((function(){w(!1),u>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}()}),[u,S,O]);var Q=function(){L(!G)},T=a.length>0&&!C;return Object(b.jsxs)("div",{className:P.a.App,children:[Object(b.jsx)(j,{onSubmit:function(e){e!==O&&(r([]),m(1),_(e),I(null))}}),Object(b.jsx)(x,{images:a,onClickImage:function(e){U(e),Q()}}),C&&Object(b.jsx)(F,{}),T&&Object(b.jsx)(y,{onClick:function(){m((function(e){return e+1}))}}),G&&Object(b.jsx)(E,{onClose:Q,bigImage:A.largeImageURL}),Object(b.jsx)(l.a,{position:"top-right"})]})}o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.612595c7.chunk.js.map