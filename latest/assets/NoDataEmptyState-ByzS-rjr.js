import{e as a}from"./index-DxDX2vOa.js";import{c as b,P as e}from"./index-B_euquWE.js";import{p,B as r}from"./settings-0ThqPtR3.js";import{L as k}from"./Link-Czg4mzd7.js";import{g as E}from"./devtools-BlxCaI1L.js";import{E as T,d as l}from"./EmptyState-BxaTycZJ.js";import{NoDataIllustration as q}from"./NoDataIllustration-T0RkOEw_.js";const o=`${p.prefix}--empty-state`,n="NoDataEmptyState";let t=a.forwardRef(({action:u,className:m,illustrationPosition:d=l.position,illustrationTheme:c,illustrationDescription:f,link:y,size:i=l.size,subtitle:g,title:s,...h},v)=>a.createElement("div",{...h,className:b(o,m,`${o}-position--${d}`,`${o}-type--noData`),ref:v,...E(n)},a.createElement(q,{theme:c,size:i,alt:f||s}),a.createElement(T,{action:u,link:y,size:i,subtitle:g,title:s||""})));t=p.checkComponentEnabled(t,n);t.displayName=n;t.propTypes={action:e.shape({...r.propTypes,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:r.propTypes.onClick,text:e.string}),className:e.string,illustrationDescription:e.string,illustrationPosition:e.oneOf(["top","right","bottom","left"]),illustrationTheme:e.oneOf(["light","dark"]),link:e.shape({...k.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired};t.__docgenInfo={description:"The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.",methods:[],displayName:"NoDataEmptyState",props:{illustrationPosition:{defaultValue:{value:"'top'",computed:!1},description:"Designates the position of the illustration relative to the content",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},size:{defaultValue:{value:"sizes.lg",computed:!0},description:"Empty state size",type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},action:{description:"Empty state action button",type:{name:"shape",value:{kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},illustrationDescription:{description:"The alt text for empty state svg images. If not provided , title will be used.",type:{name:"string"},required:!1},illustrationTheme:{description:`Empty state illustration theme variations.
To ensure you use the correct themed illustrations, you can conditionally specify light or dark
based on your app's current theme value. Example:
\`illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}\``,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},link:{description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}},required:!1},subtitle:{description:"Empty state subtitle",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state title",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}}};export{t as N};
