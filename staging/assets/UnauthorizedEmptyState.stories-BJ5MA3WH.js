import{e as t}from"./index-CPiZ6Cnx.js";import{a as g}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as J}from"./StoryDocsPage-DbyjhUpU.js";import{c as K,P as e}from"./index-CXyjPnaX.js";import{p as N,B as b}from"./settings-DkGFwmHv.js";import{L as Q}from"./Link-EP4KkhUp.js";import{g as X}from"./devtools-BgfuqBVa.js";import{E as Y,d as u}from"./EmptyState-10ScsBew.js";import{UnauthorizedIllustration as Z}from"./UnauthorizedIllustration-D-pzORhD.js";import{A as V}from"./bucket-0-DUfmGMOu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-Be1mmqnw.js";import"./iframe-C_4cBVrG.js";import"../sb-preview/runtime.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./story-helper-CTHQ3yzD.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./props-helper-C4XfpXsc.js";import"./index-Bd5XT4xl.js";import"./EmptyStateV2-C_j5VnIs.js";import"./useId-BvKGLBYe.js";import"./uuidv4-BQrI85uz.js";const d=`${N.prefix}--empty-state`,f="UnauthorizedEmptyState";let r=t.forwardRef(({action:a,className:_,illustrationPosition:$=u.position,illustrationTheme:j,illustrationDescription:M,link:R,size:y=u.size,headingAs:W=u.headingAs,subtitle:F,title:h,...G},H)=>t.createElement("div",{...G,className:K(d,_,`${d}-position--${$}`,`${d}-type--unauthorized`),ref:H,...X(f)},t.createElement(Z,{size:y,theme:j,alt:M||h}),t.createElement(Y,{action:a,link:R,size:y,headingAs:W,subtitle:F,title:h||""})));r=N.checkComponentEnabled(r,f);r.displayName=f;r.propTypes={action:e.shape({...b.propTypes,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:b.propTypes.onClick,text:e.string}),className:e.string,headingAs:e.elementType,illustrationDescription:e.string,illustrationPosition:e.oneOf(["top","right","bottom","left"]),illustrationTheme:e.oneOf(["light","dark"]),link:e.shape({...Q.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired};r.__docgenInfo={description:"The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.",methods:[],displayName:"UnauthorizedEmptyState",props:{illustrationPosition:{defaultValue:{value:"'top'",computed:!1},description:"Designates the position of the illustration relative to the content",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},size:{defaultValue:{value:"sizes.lg",computed:!0},description:"Empty state size",type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},headingAs:{defaultValue:{value:"'h3'",computed:!1},description:"Empty state headingAs allows you to customize the type of heading element",type:{name:"elementType"},required:!1},action:{description:"Empty state action button",type:{name:"shape",value:{kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},illustrationDescription:{description:"The alt text for empty state svg images. If not provided , title will be used.",type:{name:"string"},required:!1},illustrationTheme:{description:`Empty state illustration theme variations.
To ensure you use the correct themed illustrations, you can conditionally specify light or dark
based on your app's current theme value. Example:
\`illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}\``,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},link:{description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}},required:!1},subtitle:{description:"Empty state subtitle",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state title",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}}};const qe={title:"IBM Products/Patterns/Empty state/UnauthorizedEmptyState",component:r,tags:["autodocs"],parameters:{docs:{page:()=>t.createElement(J,{altGuidelinesHref:[{href:"https://carbondesignsystem.com/patterns/empty-states-pattern/",label:"Error pattern usage guidelines"},{href:"https://www.carbondesignsystem.com/patterns/empty-states-pattern/",label:"Carbon empty pattern usage guidelines"}]})}}},o={headingAs:"h3",title:"Empty state title",subtitle:"Description text explaining why this section is empty.",illustrationDescription:"Test alt text"},n=a=>t.createElement(r,{...a}),s=n.bind({});s.args={...o};const i=n.bind({});i.args={...o,illustrationTheme:"dark"};const p=n.bind({});p.args={...o,action:{text:"Create new",onClick:g("Clicked empty state action button")}};const m=n.bind({});m.args={...o,action:{text:"Create new",onClick:g("Clicked empty state action button"),renderIcon:a=>t.createElement(V,{size:20,...a}),iconDescription:"Add icon"}};const l=n.bind({});l.args={...o,link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}};const c=n.bind({});c.args={...o,action:{text:"Create new",onClick:g("Clicked empty state action button"),renderIcon:a=>t.createElement(V,{size:20,...a}),iconDescription:"Add icon"},link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}};var E,k,v;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,S,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var z,x,C;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(C=(x=p.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var q,A,D;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var I,U,P;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(P=(U=l.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var O,B,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const Ae=["Default","WithDarkModeIllustration","withAction","withActionIconButton","withLink","withActionAndLink"];export{s as Default,i as WithDarkModeIllustration,Ae as __namedExportsOrder,qe as default,p as withAction,c as withActionAndLink,m as withActionIconButton,l as withLink};
