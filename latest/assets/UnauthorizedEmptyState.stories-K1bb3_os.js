import{e as t}from"./index-BOZkNhcz.js";import{a as y}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{S as J}from"./StoryDocsPage-CUDE-DA-.js";import{c as K,P as e}from"./index-Cd8snwnz.js";import{p as O,B as v}from"./settings-DqneCnpo.js";import{L as Q}from"./Link-BqtwLYC0.js";import{g as X}from"./devtools-Bjt2CwRv.js";import{d as c,E as Y}from"./EmptyState-7S70Lmhc.js";import{UnauthorizedIllustration as Z}from"./UnauthorizedIllustration-BuxSZ1w9.js";import{A as L}from"./bucket-0-BxsXdw_5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./index-Cm8rDqP-.js";import"./iframe-DVffvOdJ.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./story-helper-HIAsLHzl.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";import"./props-helper-DIx2Ramn.js";import"./index-pvIsy2-t.js";import"./EmptyStateV2-B82vTwc1.js";import"./useId-Cb6M4-BZ.js";import"./uuidv4-BQrI85uz.js";const d=`${O.prefix}--empty-state`,g="UnauthorizedEmptyState";let n=t.forwardRef(({action:a,className:j,illustrationPosition:V=c.position,illustrationTheme:_,illustrationDescription:$,link:M,size:f=c.size,headingAs:W=c.headingAs,subtitle:F,title:h,...G},H)=>t.createElement("div",{...G,className:K(d,j,`${d}-position--${V}`,`${d}-type--unauthorized`),ref:H,...X(g)},t.createElement(Z,{size:f,theme:_,alt:$||h}),t.createElement(Y,{action:a,link:M,size:f,headingAs:W,subtitle:F,title:h||""})));n=O.checkComponentEnabled(n,g);n.displayName=g;n.propTypes={action:e.shape({...v.propTypes,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:v.propTypes.onClick,text:e.string}),className:e.string,headingAs:e.elementType,illustrationDescription:e.string,illustrationPosition:e.oneOf(["top","right","bottom","left"]),illustrationTheme:e.oneOf(["light","dark"]),link:e.shape({...Q.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired};n.__docgenInfo={description:"The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.",methods:[],displayName:"UnauthorizedEmptyState",props:{action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  kind?: 'primary' | 'secondary' | 'tertiary';
  renderIcon?: CarbonIconType;
  onClick?: ButtonProps<React.ElementType>['onClick'];
  text?: string;
}`,signature:{properties:[{key:"kind",value:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}],required:!1}},{key:"renderIcon",value:{name:"CarbonIconType",required:!1}},{key:"onClick",value:{name:"ButtonProps['onClick']",raw:"ButtonProps<React.ElementType>['onClick']",required:!1}},{key:"text",value:{name:"string",required:!1}}]}},description:"Empty state action button",type:{name:"shape",value:{kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},illustrationDescription:{required:!1,tsType:{name:"string"},description:"The alt text for empty state svg images. If not provided , title will be used.",type:{name:"string"}},illustrationPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"Designates the position of the illustration relative to the content",defaultValue:{value:"'top'",computed:!1},type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]}},illustrationTheme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:`Empty state illustration theme variations.
To ensure you use the correct themed illustrations, you can conditionally specify light or dark
based on your app's current theme value. Example:
\`illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}\``,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]}},link:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  text?: string | ReactNode;
  href?: string;
}`,signature:{properties:[{key:"text",value:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}],required:!1}},{key:"href",value:{name:"string",required:!1}}]}},description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}}},headingAs:{required:!1,tsType:{name:"union",raw:"(() => ReactNode) | string | ElementType",elements:[{name:"unknown"},{name:"string"},{name:"ElementType"}]},description:"Empty state headingAs allows you to customize the type of heading element",defaultValue:{value:"'h3'",computed:!1},type:{name:"elementType"}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'sm'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'sm'"}]},description:"Empty state size",defaultValue:{value:"sizes.lg",computed:!0},type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]}},subtitle:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Empty state subtitle",type:{name:"union",value:[{name:"string"},{name:"node"}]}},title:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Empty state title",type:{name:"union",value:[{name:"string"},{name:"node"}]}}}};const xe={title:"IBM Products/Patterns/Empty state/UnauthorizedEmptyState",component:n,tags:["autodocs"],parameters:{docs:{page:()=>t.createElement(J,{altGuidelinesHref:[{href:"https://carbondesignsystem.com/patterns/empty-states-pattern/",label:"Error pattern usage guidelines"},{href:"https://www.carbondesignsystem.com/patterns/empty-states-pattern/",label:"Carbon empty pattern usage guidelines"}]})}}},r={headingAs:"h3",title:"Empty state title",subtitle:"Description text explaining why this section is empty.",illustrationDescription:"Test alt text"},o=a=>t.createElement(n,{...a}),i=o.bind({});i.args={...r};const s=o.bind({});s.args={...r,illustrationTheme:"dark"};const l=o.bind({});l.args={...r,action:{text:"Create new",onClick:y("Clicked empty state action button")}};const m=o.bind({});m.args={...r,action:{text:"Create new",onClick:y("Clicked empty state action button"),renderIcon:a=>t.createElement(L,{size:20,...a}),iconDescription:"Add icon"}};const p=o.bind({});p.args={...r,link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}};const u=o.bind({});u.args={...r,action:{text:"Create new",onClick:y("Clicked empty state action button"),renderIcon:a=>t.createElement(L,{size:20,...a}),iconDescription:"Add icon"},link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}};var k,b,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var E,T,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var q,x,S;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var z,A,I;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(I=(A=m.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var N,D,P;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var R,U,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(B=(U=u.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const Se=["Default","WithDarkModeIllustration","withAction","withActionIconButton","withLink","withActionAndLink"];export{i as Default,s as WithDarkModeIllustration,Se as __namedExportsOrder,xe as default,l as withAction,u as withActionAndLink,m as withActionIconButton,p as withLink};
