import{e as n}from"./index-DxDX2vOa.js";import{aw as e,al as u,ax as h,ak as I}from"./index-6asNl-3l.js";import{useMDXComponents as D}from"./index-BgI2kBcJ.js";import"./chunk-NUUEMKO5-xM5q-MF7.js";import{C as M}from"./story-helper-BvAgcfdm.js";import{a as _}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{P as a,b as z}from"./index-B_euquWE.js";import{g as L}from"./devtools-BlxCaI1L.js";import{p as X,C as R}from"./settings-0ThqPtR3.js";import{C as B}from"./Card-CBalXOY0.js";import{d as F}from"./bucket-17-BLAXVSDb.js";import{a as K}from"./bucket-15-BCEWl1Rg.js";import{b as U}from"./bucket-0-DEgqxqZV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bz0rEyEi.js";import"../sb-preview/runtime.js";import"./index-CaMJXrh2.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./react-18-DcnmlX6h.js";import"./tslib.es6-B4_xh3D5.js";import"./v4-CQkTLCs1.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./MenuItem-DWuSrVzG.js";import"./useControllableState-BEU9Cr15.js";import"./useAttachedMenu-CNodkuzW.js";import"./Text-9AedOkae.js";import"./bucket-2-BDpMY3Ys.js";import"./index-BK04RsGV.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-BnoODLmv.js";import"./wrapFocus-ChZuRP4g.js";import"./index-B1YmXwfC.js";import"./LayerContext-BLFdRioi.js";import"./bucket-6-Cw3hdw1e.js";import"./bucket-9-Clk9T-SZ.js";const f="GetStartedCard";let o=n.forwardRef((r,t)=>n.createElement(B,{...r,ref:t,getStarted:!0,...L(f)}));o=X.checkComponentEnabled(o,f);o.displayName=f;o.propTypes={className:a.string,disabled:a.bool,footerActionIcon:a.oneOfType([a.func,a.object]),label:a.oneOfType([a.string,a.node]),media:a.node,metadata:a.arrayOf(a.shape({id:a.string,icon:a.oneOfType([a.func,a.object]),iconDescription:a.string})),onClick:a.func.isRequired,pictogram:a.oneOfType([a.func,a.object]),sequence:a.number,status:a.oneOf(["complete","incomplete"]),title:a.oneOfType([a.string,a.node])};o.__docgenInfo={description:"GetStartedCard a card with icon, number, and media variants",methods:[],displayName:"GetStartedCard",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},disabled:{required:!1,tsType:{name:"boolean"},description:"Optional if the card should be disabled",type:{name:"bool"}},footerActionIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Provides the action icon that's displayed at the footer of the card",type:{name:"union",value:[{name:"func"},{name:"object"}]}},label:{required:!1,tsType:{name:"ReactNode"},description:"Optional label for the top of the card",type:{name:"union",value:[{name:"string"},{name:"node"}]}},media:{required:!1,tsType:{name:"ReactNode"},description:"Optional media content like an image to be placed in the card",type:{name:"node"}},metadata:{required:!1,tsType:{name:"unknown"},description:"Icons that are displayed on the card showing the time and skill needed",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},icon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},iconDescription:{name:"string",required:!1}}}}},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Provides the callback for a clickable card",type:{name:"func"}},pictogram:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"Provides the icon that's displayed at the top of the card",type:{name:"union",value:[{name:"func"},{name:"object"}]}},sequence:{required:!1,tsType:{name:"number"},description:"Provides number for card for tasks in a sequential order",type:{name:"number"}},status:{required:!1,tsType:{name:"union",raw:"'complete' | 'incomplete'",elements:[{name:"literal",value:"'complete'"},{name:"literal",value:"'incomplete'"}]},description:"Provides the status that's displayed at the top of the card",type:{name:"enum",value:[{value:"'complete'",computed:!1},{value:"'incomplete'",computed:!1}]}},title:{required:!1,tsType:{name:"ReactNode"},description:"Title that's displayed at the top of the card",type:{name:"union",value:[{name:"string"},{name:"node"}]}}},composes:["PropsWithChildren"]};function g(r){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...D(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"getstartedcard",children:"GetStartedCard"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(u,{children:e.jsx(h,{of:i})}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(t.h3,{id:"with-sequence",children:"with Sequence"}),`
`,e.jsx(u,{children:e.jsx(h,{of:s})}),`
`,e.jsx(t.h3,{id:"with-media-and-pictogram",children:"with Media and Pictogram"}),`
`,e.jsx(u,{children:e.jsx(h,{of:d})}),`
`,e.jsx(t.h3,{id:"with-media-and-sequence",children:"with Media and Sequence"}),`
`,e.jsx(u,{children:e.jsx(h,{of:c})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(M,{exampleDirectory:"GetStartedCard"}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(I,{})]})}function W(r={}){const{wrapper:t}={...D(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(g,{...r})}):g(r)}const N=""+new URL("abstract-image-KeSi23KF.svg",import.meta.url).href,l={label:"Label",title:"Title",metadata:[{id:"1",icon:r=>n.createElement(F,{size:16,...r}),iconDescription:"2 mins"},{id:"2",icon:r=>n.createElement(K,{size:16,...r}),iconDescription:"Beginner"}],footerActionIcon:r=>n.createElement(U,{size:16,...r}),onClick:_("on click")},Oe={title:"Experimental/Onboarding/GetStartedCard",component:o,tags:["autodocs"],parameters:{docs:{page:W}},decorators:[r=>{const t=z();return n.createElement("div",{className:`${t}--grid`},r())}]},p=r=>{const{children:t,...A}=r;return n.createElement(o,{label:"Prepare your data",title:"Generate synthetic Tabular data",...A},t)},i=p.bind({});i.args={...l,pictogram:r=>n.createElement(R,{size:32,...r})};const s=p.bind({});s.args={...l,sequence:3};const d=p.bind({});d.args={...l,pictogram:r=>n.createElement(R,{size:32,...r}),media:n.createElement("img",{src:N,alt:"abstract Image"})};const c=p.bind({});c.args={...l,sequence:3,media:n.createElement("img",{src:N,alt:"abstract Image"})};const m=p.bind({});m.args={...l,sequence:3,disabled:!0};var b,y,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,j,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var S,T,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var q,G,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(P=(G=c.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var E,k,O;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`opts => {
  const {
    children,
    ...args
  } = opts;
  return <GetStartedCard label="Prepare your data" title="Generate synthetic Tabular data" {...args}>
      {children}
    </GetStartedCard>;
}`,...(O=(k=m.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const De=["Default","withSequence","withMediaAndPictogram","withMediaAndSequence","withDisabled"];export{i as Default,De as __namedExportsOrder,Oe as default,m as withDisabled,d as withMediaAndPictogram,c as withMediaAndSequence,s as withSequence};
