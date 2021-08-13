"use strict";(self.webpackChunkbeca_gis_docs=self.webpackChunkbeca_gis_docs||[]).push([[1843],{2511:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(3366),a=n(7294),i=n(3727),u=n(9962),l=n(2735),c=n(6136),o=(0,a.createContext)({collectLink:function(){}}),s=n(9524),d=n(3905),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,m=e.to,h=e.href,b=e.activeClassName,_=e.isActive,g=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,p=void 0===E||E,k=(0,r.Z)(e,f),C=(0,u.Z)().siteConfig,w=C.trailingSlash,y=C.baseUrl,N=(0,s.C)().withBaseUrl,Z=(0,a.useContext)(o),U=m||h,O=(0,l.Z)(U),L=null==U?void 0:U.replace("pathname://",""),S=void 0!==L?(n=L,p&&function(e){return e.startsWith("/")}(n)?N(n):n):void 0;S&&O&&(S=(0,d.applyTrailingSlash)(S,{trailingSlash:w,baseUrl:y}));var j,B=(0,a.useRef)(!1),M=v?i.OL:i.rU,W=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!W&&O&&null!=S&&window.docusaurus.prefetch(S),function(){W&&j&&j.disconnect()}}),[S,W,O]);var P=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,A=!S||!O||P;return S&&O&&!P&&!g&&Z.collectLink(S),A?a.createElement("a",Object.assign({href:S},U&&!O&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(M,Object.assign({},k,{onMouseEnter:function(){B.current||null==S||(window.docusaurus.preload(S),B.current=!0)},innerRef:function(e){var t,n;W&&e&&O&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},(j=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))}))).observe(t))},to:S||""},v&&{isActive:_,activeClassName:b}))}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},9524:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return u}});var r=n(9962),a=n(2735);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,l=void 0!==u&&u,c=i.absolute,o=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+s:s}(i,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},6347:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(9584),i=n(2511),u="container_3Gti",l="nav_2hIU",c="navlink_XGn1",o=function(e){var t=e.to,n=e.children;return r.createElement(i.Z,{className:c,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};var s=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,"Docusaurus debug panel")),r.createElement("div",null,r.createElement("nav",{className:l},r.createElement(o,{to:"/__docusaurus/debug"},"Config"),r.createElement(o,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.createElement(o,{to:"/__docusaurus/debug/registry"},"Registry"),r.createElement(o,{to:"/__docusaurus/debug/routes"},"Routes"),r.createElement(o,{to:"/__docusaurus/debug/content"},"Content"),r.createElement(o,{to:"/__docusaurus/debug/globalData"},"Global data")),r.createElement("main",{className:u},t)))}},529:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),a=n(6347),i=n(9962),u="sectionTitle_1LKV",l="list_2cCX",c="listItem_2G0u",o="version_ZLFW",s="name_1F60";var d=function(){var e=(0,i.Z)().siteMetadata;return r.createElement(a.Z,null,r.createElement("h2",null,"Site Metadata"),r.createElement("div",null,"Docusaurus Version: ",r.createElement("code",null,e.docusaurusVersion)),r.createElement("div",null,"Site Version:"," ",r.createElement("code",null,e.siteVersion||"No version specified")),r.createElement("h3",{className:u},"Plugins and themes"),r.createElement("ul",{className:l},Object.entries(e.pluginVersions).map((function(e){var t=e[0],n=e[1];return r.createElement("li",{key:t,className:c},n.version&&r.createElement("div",{className:o},r.createElement("code",null,n.version)),r.createElement("div",{className:s},t),r.createElement("div",null,"Type: ",n.type))}))))}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],u="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,u)}},3905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);