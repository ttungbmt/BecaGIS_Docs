"use strict";(self.webpackChunkbeca_gis_docs=self.webpackChunkbeca_gis_docs||[]).push([[9533],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2996:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(4137)),i=["components"],s={title:"Troubleshooting"},c=void 0,l={unversionedId:"projects/geoportal/troubleshooting",id:"projects/geoportal/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"npm start doesn\u2019t detect changes",source:"@site/docs/projects/geoportal/troubleshooting.md",sourceDirName:"projects/geoportal",slug:"/projects/geoportal/troubleshooting",permalink:"/BecaGIS_Docs/docs/projects/geoportal/troubleshooting",editUrl:"https://github.com/ttungbmt/BecaGIS_Docs/tree/master/docs/projects/geoportal/troubleshooting.md",version:"current",frontMatter:{title:"Troubleshooting"},sidebar:"geoportal",previous:{title:"Folder Structure",permalink:"/BecaGIS_Docs/docs/projects/geoportal/folder-structure"},next:{title:"FAQ",permalink:"/BecaGIS_Docs/docs/projects/geoportal/faq"}},u=[{value:"<code>npm start</code> doesn\u2019t detect changes",id:"npm-start-doesnt-detect-changes",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"npm-start-doesnt-detect-changes"},(0,a.kt)("inlineCode",{parentName:"h2"},"npm start")," doesn\u2019t detect changes"),(0,a.kt)("p",null,"When you save a file while ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start")," is running, the browser should refresh with the updated code."),(0,a.kt)("p",null,"If this doesn\u2019t happen, try one of the following workarounds:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check that your file is imported by your entrypoint. TypeScript will show errors on any of your source files, but webpack only reloads your files if they are directly or indirectly imported by one of your entrypoints."),(0,a.kt)("li",{parentName:"ul"},"If your project is in a Dropbox folder, try moving it out."),(0,a.kt)("li",{parentName:"ul"},"If the watcher doesn\u2019t see a file called ",(0,a.kt)("inlineCode",{parentName:"li"},"index.js")," and you\u2019re referencing it by the folder name, you ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/create-react-app/issues/1164"},"need to restart the watcher")," due to a webpack bug."),(0,a.kt)("li",{parentName:"ul"},"Some editors like Vim and IntelliJ have a \u201csafe write\u201d feature that currently breaks the watcher. You will need to disable it. Follow the instructions in ",(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/guides/development/#adjusting-your-text-editor"},"\u201cAdjusting Your Text Editor\u201d"),"."),(0,a.kt)("li",{parentName:"ul"},"If your project path contains parentheses, try moving the project to a path without them. This is caused by a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/webpack/watchpack/issues/42"},"webpack watcher bug"),"."),(0,a.kt)("li",{parentName:"ul"},"On Linux and macOS, you might need to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/webpack/docs/wiki/troubleshooting#not-enough-watchers"},"tweak system settings")," to allow more watchers."),(0,a.kt)("li",{parentName:"ul"},"If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file in your project directory if it doesn\u2019t exist, and add ",(0,a.kt)("inlineCode",{parentName:"li"},"CHOKIDAR_USEPOLLING=true")," to it. This ensures that the next time you run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start"),", the watcher uses the polling mode, as necessary inside a VM.")),(0,a.kt)("p",null,"If none of these solutions help please leave a comment ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/659"},"in this thread"),"."))}d.isMDXComponent=!0}}]);