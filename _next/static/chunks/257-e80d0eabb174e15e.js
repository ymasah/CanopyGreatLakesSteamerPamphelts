(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[257],{7623:function(e,t,r){"use strict";r.d(t,{Z:function(){return Header_Header}});var n=r(2854),a=(0,n.zo)("div",{flexGrow:"1",display:"none",justifyContent:"flex-end",button:{display:"flex",flexDirection:"column",justifyContent:"center",background:"transparent",border:"none",fontSize:"$gr3",height:"calc(($gr1 * 2) + $gr4 + 1px)",cursor:"pointer"},"@sm":{display:"flex"}}),o=(0,n.zo)("div",{flexGrow:"1",display:"flex",justifyContent:"flex-end","@sm":{flexDirection:"column-reverse",backgroundColor:"var(--gray-1)",position:"absolute",width:"100%",padding:"$gr1 0 $gr3",overflow:"hidden",left:"0",top:"-10000px",boxShadow:"var(--shadow-4)"},variants:{showNav:{true:{top:"calc($gr4 + ($gr2 * 2))"}}}}),c=(0,n.zo)("div",{width:"100%",padding:"$gr1 $gr5",display:"flex",flexDirection:"row",justifyContent:"space-between",fontSize:"1rem",lineHeight:"1.5rem",alignItems:"center",zIndex:"1",boxShadow:"var(--shadow-4)",boxSizing:"border-box","@xl":{padding:"$gr1 $gr4"},"@lg":{padding:"$gr1 $gr4"},"@md":{padding:"$gr1 $gr4"},"@sm":{padding:"$gr1 $gr4"},"@xs":{padding:"$gr1 $gr3"},"@xxs":{padding:"$gr1 $gr3"}}),i=(0,n.zo)("header",{position:"fixed",width:"100%",zIndex:"10",top:"0",display:"flex",flexDirection:"column",transition:"$canopyOpacity",opacity:"1",backgroundColor:"var(--gray-1)",variants:{isVisible:{false:{opacity:"0"}}}}),s=r(7294),l=r(2469),d=r(3245),u=r(1830),g=r(9342),p=r(29),f=r(7794),h=r.n(f),m=(0,r(6744).zo)("div",{display:"flex",flexDirection:"row",justifyContent:"center",paddingLeft:"$gr2",select:{color:"var(--gray-10)",background:"none",border:"none",fontFamily:"$display",fontSize:"$gr3",cursor:"pointer","&:hover, &:focus":{color:"var(--accent-11)"}}}),v=r(5014),x=r(7642),y=r(5893),Locale_Locale=function(){var e,t=(0,x.MQ)(),r=t.canopyState,n=t.canopyDispatch,a=r.locale,o=r.config,c=(e=(0,p.Z)(h().mark(function _callee(e){var t;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=n,r.next=3,(0,v.Kd)(null==o?void 0:o.locales,null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.value);case 3:r.t1=r.sent,r.t2={locale:r.t1,type:"updateLocale"},(0,r.t0)(r.t2);case 6:case"end":return r.stop()}},_callee)})),function(t){return e.apply(this,arguments)});return(null==o?void 0:o.locales.length)<=1?null:(0,y.jsx)(m,{children:(0,y.jsx)("select",{onChange:c,children:null==o?void 0:o.locales.map(function(e){return(0,y.jsx)("option",{value:e.lang,selected:e.lang===a.lang,children:e.label},e.lang)})})})},b=r(5324),j=r(9499),w=(0,n.zo)("form",{cursor:"select",margin:"0 $gr4",width:"100%","@sm":{width:"calc(100% - ($gr4 * 2))"},"@xs":{margin:"0 $gr3",width:"calc(100% - ($gr3 * 2))"},"&:focus-within":{svg:{color:"var(--accent-11)"}}}),O=r(1163);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,j.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Search_Search=function(){var e=(0,s.useState)(),t=e[0],r=e[1],n=(0,O.useRouter)(),a=(0,s.useRef)(null);return(0,s.useEffect)(function(){if(n){var e=n.query.q;e&&a.current&&(a.current.value=e),r(e)}},[n]),(0,y.jsx)(w,{onSubmit:function(e){e.preventDefault(),n.push({pathname:"/search",query:_objectSpread(_objectSpread({},n.query),{},{q:t})})},"data-testid":"search-form",children:(0,y.jsxs)(d.TextField.Root,{onChange:function(e){r(e.target.value)},ref:a,size:"3",style:{width:"100%"},variant:"surface","aria-label":(0,v.EK)("searchButton"),children:[(0,y.jsx)(d.TextField.Slot,{side:"left",pl:"3",children:(0,y.jsx)(l._Ve,{height:"20",width:"20"})}),(0,y.jsx)(d.TextField.Slot,{side:"right",pr:"1",gap:"0",children:(0,y.jsx)(d.Button,{size:"2",type:"submit",children:(0,v.EK)("searchButton")})})]})})},S=r(6803),$=r(6441),Header_Header=function(){var e=(0,s.useState)(!1),t=e[0],r=e[1],n=(0,O.useRouter)(),p=n.pathname,f=n.query,h=(0,x.MQ)().canopyState.headerVisible,m=(0,$.Z)({relativePath:""}).navigation;return(0,s.useEffect)(function(){r(!1)},[p,f]),(0,y.jsx)(i,{isVisible:!!h||"/search"!==p,children:(0,y.jsxs)(c,{children:[(0,y.jsx)(g.Z,{href:"/",style:{color:"var(--gray-12)",textDecoration:"none"},children:(0,y.jsx)(d.Heading,{as:"h1",size:"5",weight:"medium",style:{fontFamily:"var(--canopy-display-font)"},children:(0,y.jsx)(u.Label,{label:S[0].label,as:"span"})})}),(0,y.jsx)(a,{children:(0,y.jsx)("button",{onClick:function(){return r(!t)},"aria-label":(0,v.EK)("navigationMenuExpand")||"Expand Navigation Menu","aria-controls":"navigation-menu",children:(0,y.jsx)(l.RYk,{})})}),(0,y.jsxs)(o,{showNav:t,children:[(0,y.jsx)(Search_Search,{}),m&&(0,y.jsx)(b.Z,{items:m}),(0,y.jsx)(Locale_Locale,{})]})]})})}},5324:function(e,t,r){"use strict";r.d(t,{Z:function(){return Nav_Nav}});var n,a,o,c=r(9499),i=r(2854),s=(0,i.zo)("div",{display:"flex",fontFamily:"$sans",flexGrow:"0",variants:{orientation:{horizontal:{justifyContent:"flex-end",a:{whiteSpace:"nowrap"}},vertical:{flexDirection:"column",alignItems:"flex-start",padding:"0 0 $gr4",a:(n={color:"var(--gray-11)",padding:"$gr1 0 ",marginBottom:"0"},(0,c.Z)(n,"&.active",{color:"var(--gray-12) !important",fontWeight:"700"}),(0,c.Z)(n,"&:hover",{color:"var(--accent-10)"}),n)}}},"@sm":{flexDirection:"column",alignItems:"flex-start",padding:"0 $gr3 $gr3"},a:(a={padding:"$gr1 $gr2",display:"inline-flex",color:"var(--gray-12)",borderRadius:"2rem",position:"relative",transition:"$canopyAll",fontSize:"$gr3","@sm":{padding:"0",transition:"none"}},(0,c.Z)(a,"&:hover",{color:"var(--accent-10)"}),(0,c.Z)(a,"&.active",{color:"var(--accent-11)"}),a)}),l=(0,i.zo)("nav",{position:"relative",display:"flex",flexDirection:"row",alignItems:"center",zIndex:"1",flexGrow:"0",fontWeight:"500",nav:(o={margin:"$gr1 0 $gr2",padding:"0 $gr3",borderLeft:"3px solid var(--gray-4)",fontWeight:"400"},(0,c.Z)(o,"& ".concat(s),{paddingBottom:"0"}),(0,c.Z)(o,"a:first-child",{paddingTop:0}),(0,c.Z)(o,"a:last-child",{paddingBottom:0}),o)}),d=r(9342),u=r(7294),g=r(1163),p=r(5893),ItemsLink=function(e){var t=e.path,r=e.subNavigation,n=e.text,a=(0,g.useRouter)(),o=(0,u.useRef)(null),c=a.query,i=a.pathname.replace(/\[.*\]/,null==c?void 0:c.slug);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.Z,{href:t,className:t===i?"active":"",onClick:function(e){var t=null==e?void 0:e.currentTarget.href,r=t.replace(/.*\#/,"");if(r!==t){e.preventDefault(),window.history.pushState({},"",t);var n=document.getElementById(r);n&&window.scrollTo({behavior:"smooth",top:(null==n?void 0:n.getBoundingClientRect().top)-document.body.getBoundingClientRect().top-50})}},ref:o,children:n}),r&&t===i&&(0,p.jsx)(Nav_Nav,{items:r,orientation:"vertical"})]})};function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,c.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Nav_Items=function(e){var t=e.items,r=e.orientation,n=e.subNavigation;return(0,p.jsx)(s,{orientation:r,children:null==t?void 0:t.map(function(e){return(0,u.createElement)(ItemsLink,_objectSpread(_objectSpread({},e),{},{key:e.path,subNavigation:n}))})})},Nav_Nav=function(e){var t=e.items,r=e.orientation,n=e.subNavigation;return(0,p.jsx)(l,{children:(0,p.jsx)(Nav_Items,{items:t,orientation:void 0===r?"horizontal":r,subNavigation:n})})}},5407:function(e,t,r){"use strict";r.d(t,{O:function(){return c},W:function(){return i}});var n=r(9499),a=r(3245),o=r(2854),c=(0,o.zo)(a.Button,{cursor:"pointer"}),i=(0,o.zo)("div",(0,n.Z)({margin:"$gr4 0 0",display:"flex"},"> ".concat(c),{marginRight:"$gr3","&:last-child":{margin:"0"}}))},6873:function(e,t,r){"use strict";r.d(t,{N:function(){return c},Z:function(){return Shared_Container}});var n={default:"1200px",wide:"1440px"},a=r(2854),o=r(5893),c=(0,a.zo)("div",{margin:"0 auto",variants:{containerType:{default:{maxWidth:n.default},wide:{maxWidth:n.wide}},isFlex:{false:{},true:{display:"flex"}},isRelative:{false:{},true:{position:"relative"}}},width:"100%",boxSizing:"border-box",padding:"0 $gr5","@xxl":{padding:"0"},"@lg":{padding:"0 $gr4"},"@md":{padding:"0 $gr4"},"@sm":{padding:"0 $gr4"},"@xs":{padding:"0 $gr3"},"@xxs":{padding:"0 $gr3"}}),Shared_Container=function(e){var t=e.children,r=e.className,n=e.containerType,a=e.isFlex,i=e.isRelative,s=e.maxWidth;return(0,o.jsx)(c,{className:r,containerType:void 0===n?"default":n,css:s?{maxWidth:s}:{},isFlex:void 0!==a&&a,isRelative:void 0!==i&&i,children:t})}},9342:function(e,t,r){"use strict";var n=r(9499),a=r(1664),o=r.n(a),c=r(3245),i=r(5893);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}t.Z=function(e){var t=new URL("".concat("/CanopyGreatLakesSteamerPamphelts").concat(e.href),"ymasah.github.io");return(0,i.jsx)(c.Link,{asChild:!0,children:(0,i.jsx)(o(),_objectSpread(_objectSpread({},e),{},{"data-absolute-url":t.toString()}))})}},2947:function(e,t,r){"use strict";r.d(t,{Z:function(){return layout}});var n=r(7294),a=r(2854),o=(0,a.zo)("div",{display:"flex",justifyContent:"space-between",fontSize:"$gr2",fontWeight:"500"}),c=(0,a.zo)("footer",{padding:"$gr3 0",marginTop:"$gr6"}),i=(0,a.zo)("a",{color:"var(--accent-11)",fill:"var(--accent-11)",display:"flex",alignItems:"center",textDecoration:"none",svg:{marginRight:"$gr2",height:"$gr2",color:"inherit",fill:"inherit"}}),s=r(6873),l=r(5893),d=(0,a.zo)("svg",{fill:"var(--accent-1)"}),SVG_IIIF=function(){return(0,l.jsxs)(d,{viewBox:"0 0 493.35999 441.33334",id:"iiif-logo",version:"1.1",children:[(0,l.jsx)("title",{children:"IIIF Manifest Options"}),(0,l.jsx)("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,441.33333)",children:(0,l.jsxs)("g",{transform:"scale(0.1)",children:[(0,l.jsx)("path",{className:"iiif-blue",d:"M 65.2422,2178.75 775.242,1915 773.992,15 65.2422,276.25 v 1902.5"}),(0,l.jsx)("path",{className:"iiif-blue",d:"m 804.145,2640.09 c 81.441,-240.91 -26.473,-436.2 -241.04,-436.2 -214.558,0 -454.511,195.29 -535.9527,436.2 -81.4335,240.89 26.4805,436.18 241.0387,436.18 214.567,0 454.512,-195.29 535.954,-436.18"}),(0,l.jsx)("path",{className:"iiif-red",d:"M 1678.58,2178.75 968.578,1915 969.828,15 1678.58,276.25 v 1902.5"}),(0,l.jsx)("path",{className:"iiif-red",d:"m 935.082,2640.09 c -81.437,-240.91 26.477,-436.2 241.038,-436.2 214.56,0 454.51,195.29 535.96,436.2 81.43,240.89 -26.48,436.18 -241.04,436.18 -214.57,0 -454.52,-195.29 -535.958,-436.18"}),(0,l.jsx)("path",{className:"iiif-blue",d:"m 1860.24,2178.75 710,-263.75 -1.25,-1900 -708.75,261.25 v 1902.5"}),(0,l.jsx)("path",{className:"iiif-blue",d:"m 2603.74,2640.09 c 81.45,-240.91 -26.47,-436.2 -241.03,-436.2 -214.58,0 -454.52,195.29 -535.96,436.2 -81.44,240.89 26.48,436.18 241.03,436.18 214.57,0 454.51,-195.29 535.96,-436.18"}),(0,l.jsx)("path",{className:"iiif-red",d:"m 3700.24,3310 v -652.5 c 0,0 -230,90 -257.5,-142.5 -2.5,-247.5 0,-336.25 0,-336.25 l 257.5,83.75 V 1690 l -258.61,-92.5 V 262.5 L 2735.24,0 v 2360 c 0,0 -15,850 965,950"})]})})]})},u=r(5014),g=r(5407),p=r(7642),f=r(1571),Footer_ThemeMode=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],a=(0,f.F)(),o=a.theme,c=a.setTheme,i=(0,p.MQ)().canopyState,s=(0,u.EK)("footerToggleTheme");(0,n.useEffect)(function(){return r(!0)},[]);var handleTheme=function(e){switch(e){case"light":c("dark");break;case"dark":c("light")}};return t&&i.config.theme.toggleEnabled?(0,l.jsx)(g.O,{onClick:function(){return handleTheme(o)},children:s}):(0,l.jsx)(l.Fragment,{})},Footer_Footer=function(){return(0,l.jsx)(c,{children:(0,l.jsx)(s.Z,{children:(0,l.jsxs)(o,{children:[(0,l.jsxs)(i,{href:"https://api.dc.library.northwestern.edu/api/v2/search?query=%22nez%20perce%22&as=iiif&size=125",target:"_blank",children:[(0,l.jsx)(SVG_IIIF,{}),(0,u.EK)("footerSourceCollection")]}),(0,l.jsx)(Footer_ThemeMode,{})]})})})},h=r(7623),m=(0,r(6744).zo)("main",{margin:"0"}),Shared_Main=function(e){var t=e.children;return(0,l.jsx)(m,{children:t})},layout=function(e){var t=e.children,r="dark"===(0,f.F)().theme?{accent:"var(--accent-9)",accentAlt:"var(--accent-a3)",primary:"var(--gray-1)",secondary:"var(--gray-12)"}:{accent:"var(--accent-11)",accentAlt:"var(--accent-a12)",primary:"var(--gray-12)",secondary:"var(--gray-1)"},n=(0,a.zo)("div",{"--colors-accent":r.accent,"--colors-accentAlt":r.accentAlt,"--colors-accentMuted":r.accent,"--colors-primary":r.primary,"--colors-primaryAlt":r.primary,"--colors-primaryMuted":r.primary,"--colors-secondary":r.secondary,"--colors-secondaryAlt":r.secondary,"--colors-secondaryMuted":r.secondary});return(0,l.jsxs)(n,{children:[(0,l.jsx)(h.Z,{}),(0,l.jsx)(Shared_Main,{children:t}),(0,l.jsx)(Footer_Footer,{})]})}},6441:function(e,t,r){"use strict";var n=r(29),a=r(7794),o=r.n(a),c=r(7294);t.Z=function(e){var t=e.relativePath,a=(0,c.useState)(),i=a[0],s=a[1];return(0,c.useEffect)(function(){(0,n.Z)(o().mark(function _callee(){var e,n,a;return o().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(o.prev=0,void 0!==t){o.next=3;break}return o.abrupt("return");case 3:return e="content/",n=t?"".concat(e).concat(t):e,o.next=7,r(9548)("./".concat(n,"_meta.json"));case 7:s(function transformObjectWithGetters(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.getOwnPropertyDescriptor(e,r);null!=n&&n.get?t[r]=n.get.call(e):t[r]="object"==typeof e[r]&&null!==e[r]?transformObjectWithGetters(e[r]):e[r]}return t}(null==(a=o.sent)?void 0:a.default)),o.next=16;break;case 12:o.prev=12,o.t0=o.catch(0),console.warn(o.t0),console.warn("The relative _meta.json file could not be found.");case 16:case"end":return o.stop()}},_callee,null,[[0,12]])}))()},[]),{navigation:i}}},4430:function(e,t,r){"use strict";r.d(t,{gr:function(){return gr}});var gr=function(e){return Math.pow(1.618,e)}},2854:function(e,t,r){"use strict";r.d(t,{zo:function(){return f}});var n=r(9499),a=r(4430),o={gr1:"0.611rem",gr2:"0.722rem",gr3:"0.833rem",gr4:"1rem",gr5:"1.177rem",gr6:"1.318rem",gr7:"calc(1rem * ".concat((0,a.gr)(1),")"),gr8:"calc(1rem * ".concat((0,a.gr)(2),")"),gr9:"calc(1rem * ".concat((0,a.gr)(3),")")},c=r(5093),i=r(7668),s={gr1:"calc(1rem / ".concat((0,a.gr)(2),")"),gr2:"calc(1rem / ".concat((0,a.gr)(1),")"),gr3:"1rem",gr4:"calc(1rem * ".concat((0,a.gr)(1),")"),gr5:"calc(1rem * ".concat((0,a.gr)(2),")"),gr6:"calc(1rem * ".concat((0,a.gr)(3),")"),gr7:"calc(1rem * ".concat((0,a.gr)(4),")"),gr8:"calc(1rem * ".concat((0,a.gr)(5),")"),gr9:"calc(1rem * ".concat((0,a.gr)(6),")"),gr10:"calc(1rem * ".concat((0,a.gr)(7),")"),gr11:"calc(1rem * ".concat((0,a.gr)(8),")"),gr12:"calc(1rem * ".concat((0,a.gr)(9),")")},l="cubic-bezier(0.1, 0.618, 0.382, 1.1)",d={canopyAll:"all ".concat(250,"ms ").concat(l),canopyOpacity:"opacity ".concat(250,"ms ").concat(l),canopySlideIn:"all ".concat(250*(0,a.gr)(2),"ms ").concat(l)},u=r(6744);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={fontSizes:_objectSpread({},o),fonts:_objectSpread({},c.ZP),sizes:_objectSpread({},s),space:_objectSpread({},s),transitions:_objectSpread({},d)},p=(0,u.Th)({theme:g,media:i.Z}),f=p.styled;(p.css,p.keyframes,p.createTheme)({colors:{}})},7668:function(e,t,r){"use strict";r.d(t,{b:function(){return n}});var n={xxs:334,xs:575,sm:767,md:991,lg:1199,xl:1439},a={xxs:"(max-width: ".concat(n.xxs,"px)"),xs:"(max-width: ".concat(n.xs,"px)"),sm:"(max-width: ".concat(n.sm,"px)"),md:"(max-width: ".concat(n.md,"px)"),lg:"(max-width: ".concat(n.lg,"px)"),xl:"(max-width: ".concat(n.xl,"px)"),xxl:"(min-width: ".concat(n.xl+1,"px)")};t.Z=a},9548:function(e,t,r){var n={"./content/_meta.json":[7005,5],"./content/about/_meta.json":[4050,50]};function webpackAsyncContext(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],a=t[0];return r.e(t[1]).then(function(){return r.t(a,19)})}webpackAsyncContext.keys=function(){return Object.keys(n)},webpackAsyncContext.id=9548,e.exports=webpackAsyncContext},2868:function(){},4777:function(){},9830:function(){},209:function(){}}]);