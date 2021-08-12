"use strict";(self.webpackChunkbeca_gis_docs=self.webpackChunkbeca_gis_docs||[]).push([[514,608],{8704:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7294),o=a(3905),r=a(2263),l=a(6291),i=a(261),c=a(6010),s=a(3018),d=a(3783),m=a(7898),u=a(5537),p=a(7462),b=function(e){return n.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=a(4973),f=a(3366),E=a(6742),v=a(3919),g=a(8617),_="menuLinkText_1J2g",C=["items"],k=["item"],Z=["item","onItemClick","activePath"],N=["item","onItemClick","activePath"],S=function e(t,a){return"link"===t.type?(0,s.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},T=(0,n.memo)((function(e){var t=e.items,a=(0,f.Z)(e,C);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(I,(0,p.Z)({key:t,item:e},a))})))}));function I(e){var t=e.item,a=(0,f.Z)(e,k);switch(t.type){case"category":return 0===t.items.length?null:n.createElement(w,(0,p.Z)({item:t},a));case"link":default:return n.createElement(M,(0,p.Z)({item:t},a))}}function w(e){var t,a=e.item,o=e.onItemClick,r=e.activePath,l=(0,f.Z)(e,Z),i=a.items,d=a.label,m=a.collapsible,u=S(a,r),b=(0,s.uR)({initialState:function(){return!!m&&(!u&&a.collapsed)}}),h=b.collapsed,E=b.setCollapsed,v=b.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,o=e.setCollapsed,r=(0,s.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&o(!1)}),[t,r,a])}({isActive:u,collapsed:h,setCollapsed:E}),n.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":h})},n.createElement("a",(0,p.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&u},t[_]=!m,t)),onClick:m?function(e){e.preventDefault(),v()}:void 0,href:m?"#":void 0},l),d),n.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},n.createElement(T,{items:i,tabIndex:h?-1:0,onItemClick:o,activePath:r})))}function M(e){var t=e.item,a=e.onItemClick,o=e.activePath,r=(0,f.Z)(e,N),l=t.href,i=t.label,s=S(t,o);return n.createElement("li",{className:"menu__list-item",key:i},n.createElement(E.Z,(0,p.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:l},(0,v.Z)(l)&&{isNavLink:!0,exact:!0,onClick:a},r),(0,v.Z)(l)?i:n.createElement("span",null,i,n.createElement(g.Z,null))))}var y="sidebar_15mo",x="sidebarWithHideableNavbar_267A",A="sidebarHidden_2kNb",P="sidebarLogo_3h0W",B="menu_Bmed",L="menuWithAnnouncementBar_2WvA",F="collapseSidebarButton_1CGd",H="collapseSidebarButtonIcon_3E-R";function R(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",F),onClick:t},n.createElement(b,{className:H}))}function W(e){var t,a,o=e.path,r=e.sidebar,l=e.onCollapse,i=e.isHidden,d=function(){var e=(0,s.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],o=t[1];return(0,m.Z)((function(t){var a=t.scrollY;e||o(0===a)})),a}(),p=(0,s.LU)(),b=p.navbar.hideOnScroll,h=p.hideableSidebar,f=(0,s.nT)().isClosed;return n.createElement("div",{className:(0,c.Z)(y,(t={},t[x]=b,t[A]=i,t))},b&&n.createElement(u.Z,{tabIndex:-1,className:P}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",B,(a={},a[L]=!f&&d,a))},n.createElement("ul",{className:"menu__list"},n.createElement(T,{items:r,activePath:o}))),h&&n.createElement(R,{onClick:l}))}var D=function(e){var t=e.toggleSidebar,a=e.sidebar,o=e.path;return n.createElement("ul",{className:"menu__list"},n.createElement(T,{items:a,activePath:o,onItemClick:function(){return t()}}))};function z(e){return n.createElement(s.Cv,{component:D,props:e})}var Y=n.memo(W),J=n.memo(z);function K(e){var t=(0,d.Z)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(Y,e),o&&n.createElement(J,e))}var U=a(2373),q=a(4608),G="backToTopButton_35hR",O="backToTopButtonShow_18ls";function Q(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var X=function(){var e,t=Q(),a=t.smoothScrollTop,o=t.cancelScrollToTop,r=(0,n.useState)(!1),l=r[0],i=r[1];return(0,m.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||o(),a<300)i(!1);else if(n){var r=document.documentElement.scrollHeight;a+window.innerHeight<r&&i(!0)}else i(!1)}}),[]),n.createElement("button",{className:(0,c.Z)("clean-btn",G,(e={},e[O]=l,e)),type:"button",title:"Scroll to top",onClick:function(){return a()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},j=a(5977),V={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function $(e){var t,a,l,d=e.currentDocRoute,m=e.versionMetadata,u=e.children,p=(0,r.Z)().isClient,f=m.pluginId,E=m.version,v=d.sidebar,g=v?m.docsSidebars[v]:void 0,_=(0,n.useState)(!1),C=_[0],k=_[1],Z=(0,n.useState)(!1),N=Z[0],S=Z[1],T=(0,n.useCallback)((function(){N&&S(!1),k(!C)}),[N]);return n.createElement(i.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:E,tag:(0,s.os)(f,E)}},n.createElement("div",{className:V.docPage},n.createElement(X,null),g&&n.createElement("aside",{className:(0,c.Z)(V.docSidebarContainer,(t={},t[V.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V.docSidebarContainer)&&C&&S(!0)}},n.createElement(K,{key:v,sidebar:g,path:d.path,onCollapse:T,isHidden:N}),N&&n.createElement("div",{className:V.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},n.createElement(b,{className:V.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(V.docMainContainer,(a={},a[V.docMainContainerEnhanced]=C||!g,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",V.docItemWrapper,(l={},l[V.docItemWrapperEnhanced]=C,l))},n.createElement(o.Zo,{components:U.Z},u)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,o=e.location,r=t.find((function(e){return(0,j.LX)(o.pathname,e)}));return r?n.createElement($,{currentDocRoute:r,versionMetadata:a},(0,l.Z)(t,{versionMetadata:a})):n.createElement(q.default,e)}},4608:function(e,t,a){a.r(t);var n=a(7294),o=a(261),r=a(4973);t.default=function(){return n.createElement(o.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);