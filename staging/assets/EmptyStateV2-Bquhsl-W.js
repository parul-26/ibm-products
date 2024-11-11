const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ErrorIllustration-DI2jyblW.js","./index-BwDkhjyp.js","./_commonjsHelpers-BosuxZz1.js","./index-Dk74W0Oi.js","./index-C8rbkH0g.js","./index-BONylQH5.js","./settings-DI4GKhuL.js","./index-CJvxHwuA.js","./events-OVwOsPzJ.js","./index-7nuGG3yx.js","./uuidv4-BQrI85uz.js","./NoDataIllustration-Bw0Fy4db.js","./NoTagsIllustration-C0RVgalz.js","./NotFoundIllustration-AJnix7kW.js","./NotificationsIllustration-DHUenKZ4.js","./UnauthorizedIllustration-BuMI33Nu.js"])))=>i.map(i=>d[i]);
import{r as a,R as o}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{c as p}from"./index-C8rbkH0g.js";import{p as g,B as P}from"./settings-DI4GKhuL.js";import{L as N}from"./Link-DedcumfW.js";import{g as D}from"./devtools-BXUoVCj7.js";import"./props-helper-DbXaHz23.js";import{_ as i}from"./iframe-B6oKv5UQ.js";const q=a.lazy(()=>i(()=>import("./ErrorIllustration-DI2jyblW.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),z=a.lazy(()=>i(()=>import("./NoDataIllustration-Bw0Fy4db.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),$=a.lazy(()=>i(()=>import("./NoTagsIllustration-C0RVgalz.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),x=a.lazy(()=>i(()=>import("./NotFoundIllustration-AJnix7kW.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),O=a.lazy(()=>i(()=>import("./NotificationsIllustration-DHUenKZ4.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),R=a.lazy(()=>i(()=>import("./UnauthorizedIllustration-BuMI33Nu.js"),__vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),V=n=>{switch(n){case"error":return q;case"noData":return z;case"noTags":return $;case"notifications":return O;case"notFound":return x;case"unauthorized":return R;default:return()=>null}},f=({kind:n,...m})=>{const r=V(n);return o.createElement(a.Suspense,null,o.createElement(r,{...m}))};f.propTypes={kind:e.string};f.__docgenInfo={description:"",methods:[],displayName:"EmptyStateIllustration",props:{kind:{description:"",type:{name:"string"},required:!1}}};const t=`${g.prefix}--empty-state`,h="EmptyStateV2";let s=o.forwardRef((n,m)=>{const{action:r,className:v,illustration:c,illustrationDescription:_,illustrationPosition:E="top",illustrationTheme:T,kind:l,link:d,size:u="lg",subtitle:y,title:b,...k}=n,I={size:u,theme:T,title:_,kind:l};return o.createElement("div",{...k,className:p([t,v,`${t}-position--${E}`,{[`${t}-type--${l}`]:l}]),ref:m,...D(h)},c&&o.createElement("img",{src:c,alt:_,className:p([`${t}__illustration`,`${t}__illustration--${u}`])}),!c&&l&&o.createElement(f,{...I}),o.createElement("div",{className:`${t}__content`},o.createElement("h3",{className:p(`${t}__header`,{[`${t}__header--small`]:u==="sm"})},b),y&&o.createElement("p",{className:p(`${t}__subtitle`,{[`${t}__subtitle--small`]:u==="sm"})},y),r&&o.createElement(P,{...r,className:`${t}__action-button`,size:"sm"},r.text),d&&o.createElement(N,{...d,className:`${t}__link`},d.text)))});s=g.checkComponentEnabled(s,h);s.propTypes={action:e.PropTypes.shape({text:e.string}),className:e.string,illustration:e.string,illustrationDescription:e.string,illustrationPosition:e.oneOf(["top","right","bottom","left"]),illustrationTheme:e.oneOf(["light","dark"]),kind:e.oneOf(["error","noData","noTags","notFound","notifications","unauthorized"]),link:e.shape({text:e.oneOfType([e.string,e.node])}),size:e.oneOf(["sm","lg"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired};s.displayName=h;s.__docgenInfo={description:"This is the V2 version of the `EmptyState` component. To use you must pass the `v2` prop to the V1 version of the component `EmptyState` and use the props below.\nIn order to avoid breaking changes in the future `EmptyStateV2` is not actually directly importable.",methods:[],displayName:"EmptyStateV2",props:{action:{description:"Props for the action button. Refer to the Carbon Components button documentation for full list of props.",type:{name:"shape",value:{text:{name:"string",required:!1}}},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},illustration:{description:"Source for the illustration image if you choose to use your own custom image. Passing an illustration prop will supersede the kind option.",type:{name:"string"},required:!1},illustrationDescription:{description:"The alt text for the illustration",type:{name:"string"},required:!1},illustrationPosition:{description:"Designates the position of the illustration relative to the content",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},illustrationTheme:{description:`Empty state illustration theme variations.
To ensure you use the correct themed illustrations, you can conditionally specify light or dark
based on your app's current theme value. Example:
\`illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}\``,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},kind:{description:"Determines which predefined illustration will be displayed",type:{name:"enum",value:[{value:"'error'",computed:!1},{value:"'noData'",computed:!1},{value:"'noTags'",computed:!1},{value:"'notFound'",computed:!1},{value:"'notifications'",computed:!1},{value:"'unauthorized'",computed:!1}]},required:!1},link:{description:"Props for the link. Refer to the Carbon Components link documentation for full list of props.",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1}}},required:!1},size:{description:"Empty state size",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},subtitle:{description:"Empty state subtext",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state heading",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}}};export{s as E};
