import{e,r as k}from"./index-CPiZ6Cnx.js";import{a as Q}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{P as o,c as R,H as U,L as f}from"./index-CXyjPnaX.js";import{p as T}from"./settings-iwZeeh4T.js";import{u as Y}from"./uuidv4-BQrI85uz.js";import{f as Z}from"./bucket-9-BSWQ2dSd.js";import{g as ee}from"./devtools-CjVY-wQW.js";import{j as a}from"./jsx-runtime-Dc-z7RWI.js";import{useMDXComponents as z}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-DAfSjhFL.js";import{al as te,aw as ae,ak as ne}from"./index-B_DdD064.js";import{A as ie}from"./index-DVpmqM_A.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./iframe-BFx4DPzL.js";import"../sb-preview/runtime.js";import"./react-18-C6q_qjn2.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./bucket-18-By6NmkK1.js";const P=e.forwardRef(function(t,_){const{element:N,...b}=t;return e.createElement(N,{...b,ref:_})});P.displayName="NavItemLink";P.propTypes={element:o.elementType};P.defaultProps={element:"a"};P.__docgenInfo={description:"",methods:[],displayName:"NavItemLink",props:{element:{defaultValue:{value:"'a'",computed:!1},description:"@type {elementType} The base element to use to build the link. Defaults to `a`, can also accept alternative tag names or custom components like `Link` from `react-router`.",type:{name:"elementType"},required:!1}}};const p=`${T.prefix}--nav-item`,B="NavItem",H={activeHref:"#",disabled:!1,element:"a",onClick:()=>{},tabIndex:0};let c=({activeHref:r=H.activeHref,children:t=H.children,className:_,current:N,disabled:b=H.disabled,element:I=H.element,href:m,id:y,label:q,onClick:g=H.onClick,tabIndex:$=H.tabIndex,...w})=>{const[u,C]=k.useState(!1);k.useEffect(()=>{(m==null?void 0:m.indexOf(window.location.host))===-1&&C(!0)},[m]);const n=k.useRef(Y()),i=`${p}__${n.current}`,l=y||i,s=new RegExp("^([a-z]+://|//)","i").test(m)&&u,E=`${p}__link`,j=(V,J=null)=>b?J:V,O=j($,-1),A=s&&{rel:"noopener noreferrer",target:"_blank"};return e.createElement("li",{...w,className:R(p,_,{[`${p}--active`]:N!==null&&N===l||r!==void 0&&r===m&&!s,[`${p}--disabled`]:b}),label:q,onClick:V=>j(g(V,m)),onKeyDown:V=>j(g(V,m)),role:"menuitem"},e.createElement(P,{id:l,className:R(E,{[`${p}__link--external`]:s}),element:I,href:m,tabIndex:O,...w,...A},t,s&&e.createElement(Z,{className:`${p}__link--external__icon`})))};c.displayName=B;c.propTypes={activeHref:o.string,children:o.node.isRequired,className:o.string,current:o.string,disabled:o.bool,element:o.elementType,href:o.string,id:o.string,label:o.string,link:o.bool,onClick:o.func,tabIndex:o.number};c=T.checkComponentEnabled(c,B);c.__docgenInfo={description:"Navigation item component.",methods:[],displayName:"NavItem",props:{activeHref:{defaultValue:{value:"'#'",computed:!1},description:"Hypertext reference for active page.",type:{name:"string"},required:!1},children:{defaultValue:{value:"defaults.children",computed:!0},description:"Provide the contents of the Nav.",type:{name:"node"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the item is disabled.",type:{name:"bool"},required:!1},element:{defaultValue:{value:"'a'",computed:!1},description:"The base element to use to build the link. Defaults to `a`, can also accept alternative tag names or custom components like `Link` from `react-router`.",type:{name:"elementType"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"Click handler of an item.",type:{name:"func"},required:!1},tabIndex:{defaultValue:{value:"0",computed:!1},description:"`tabindex` of an item.",type:{name:"number"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},current:{description:"Currently selected item.",type:{name:"string"},required:!1},href:{description:"The href of the nav item.",type:{name:"string"},required:!1},id:{description:"Identifier.",type:{name:"string"},required:!1},label:{description:"Label of an item.",type:{name:"string"},required:!1},link:{description:"Whether the item is a link.",type:{name:"bool"},required:!1}}};const G="NavList",D=`${T.prefix}--nav-list`,v={activeHref:"#",className:"",children:null,id:"",isExpandedOnPageLoad:!1,onItemClick:()=>{},onListClick:()=>{},tabIndex:0,title:"",icon:"",navigationItemTitle:""};let h=e.forwardRef(({activeHref:r=v.activeHref,children:t=v.children,className:_=v.className,icon:N=v.icon,id:b=v.id,isExpandedOnPageLoad:I=v.isExpandedOnPageLoad,navigationItemTitle:m=v.navigationItemTitle,onItemClick:y=v.onItemClick,onListClick:q=v.onListClick,tabIndex:g=v.tabIndex,title:$=v.title},w)=>{const[u,C]=k.useState(I);k.useEffect(()=>{const d=e.Children.toArray(t).filter(({props:s})=>s.href&&s.href.length>0).map(({props:s})=>s.href);C(d.includes(r)||I)},[]);const n=()=>{u&&C(!1)},i=d=>{const{which:s,type:E}=d;(s===13||s===32||E==="click")&&(u||q(b),C(!u))};k.useImperativeHandle(w,()=>({close:n,isExpandedOnPageLoad:I}));const l=e.Children.map(t,(d,s)=>e.createElement(c,{...d.props,key:`${p}--${s}`,onClick:(E,j)=>{var O,A;y(E,j),(A=(O=d.props).onClick)==null||A.call(O,E)},activeHref:r,tabIndex:u?0:-1}));return e.createElement("li",{ref:w,className:R(D,_,{[`${p}--expanded`]:u}),tabIndex:g,onClick:i,onKeyDown:i,role:"menuitem"},e.createElement("div",{className:`${p}__link`},N&&e.createElement("img",{alt:m,className:`${p}__img`,src:N}),e.createElement("div",{className:`${p}__content`},$),e.createElement(U,{className:`${D}__icon`})),e.createElement("ul",{"aria-label":$,"aria-hidden":!u,className:`${D} ${D}--nested`,role:"menu"},l))});h.propTypes={activeHref:f.string,children:f.node,className:f.string,icon:f.string,id:f.string,isExpandedOnPageLoad:f.bool,navigationItemTitle:f.string,onItemClick:f.func,onListClick:f.func,tabIndex:f.number,title:f.string};h.displayName=G;h=T.checkComponentEnabled(h,G);h.__docgenInfo={description:"",methods:[{name:"close",docblock:null,modifiers:[],params:[],returns:null}],displayName:"NavList",props:{activeHref:{defaultValue:{value:"'#'",computed:!1},description:"@type {string} Hypertext reference for active page.",type:{name:"custom",raw:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"@type {Node} Child elements.",type:{name:"custom",raw:"node"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"@type {string} Extra classes to add.",type:{name:"custom",raw:"string"},required:!1},icon:{defaultValue:{value:"''",computed:!1},description:"@type {string} Icon of a list.",type:{name:"custom",raw:"string"},required:!1},id:{defaultValue:{value:"''",computed:!1},description:"@type {string} ID of a list.",type:{name:"custom",raw:"string"},required:!1},isExpandedOnPageLoad:{defaultValue:{value:"false",computed:!1},description:"@type {boolean} State of a list.",type:{name:"custom",raw:"bool"},required:!1},navigationItemTitle:{defaultValue:{value:"''",computed:!1},description:"@type {boolean} Title of nav.",type:{name:"custom",raw:"string"},required:!1},onItemClick:{defaultValue:{value:"() => {}",computed:!1},description:"@type {Function} Click handler for an item.",type:{name:"custom",raw:"func"},required:!1},onListClick:{defaultValue:{value:"() => {}",computed:!1},description:"@type {Function} Click handler for a list.",type:{name:"custom",raw:"func"},required:!1},tabIndex:{defaultValue:{value:"0",computed:!1},description:"@type {number} `tabindex` of an item.",type:{name:"custom",raw:"number"},required:!1},title:{defaultValue:{value:"''",computed:!1},description:"@type {string} Label of the list.",type:{name:"custom",raw:"string"},required:!1}}};const F="Nav",S=`${T.prefix}--nav`;let x=e.forwardRef(({activeHref:r,className:t,children:_,heading:N,label:b,...I},m)=>{const[y,q]=k.useState(r),g=k.useRef({});k.useEffect(()=>{if(!y&&window.location){const{hash:n,pathname:i}=window.location;q(i+n)}},[y]);const $=(n,i)=>{const l=`${p}--${i}`;return e.createElement(c,{...n.props,activeHref:y,key:l,onClick:(d,s)=>u(d,s,n.props.onClick)})},w=(n,i)=>{const l=`${D}--${i}`;return e.createElement(h,{...n.props,activeHref:y,id:l,key:l,onListClick:C,onItemClick:u,ref:d=>g.current[l]=d})},u=(n,i,l)=>{n.stopPropagation();const{type:d,which:s}=n;(s===13||s===32||d==="click")&&i!==y&&q(i),l&&l(n)},C=n=>{Object.keys(g.current).forEach(i=>{i!==n&&!g.current[i].isExpandedOnPageLoad&&g.current[i].close()})};return e.createElement("nav",{className:R(S,t),"aria-label":b,ref:m,...ee(F),...I},N&&e.createElement("h1",{className:`${S}__heading`},N),e.createElement("ul",{className:`${S}__wrapper`,role:"menubar"},e.Children.map(_,(n,i)=>{var l;return((l=n==null?void 0:n.type)==null?void 0:l.displayName)===h.displayName?w(n,i):$(n,i)})))});x.deprecated={level:"warn",details:"This component is deprecated"};x.propTypes={activeHref:o.string,children:o.node,className:o.string,heading:o.string,label:o.string.isRequired};x=T.checkComponentEnabled(x,F);x.displayName=F;x.__docgenInfo={description:"@deprecated This component is deprecated",methods:[],displayName:"Nav",props:{activeHref:{description:"Hypertext reference for active page.",type:{name:"string"},required:!1},children:{description:"Child elements.",type:{name:"node"},required:!1},className:{description:"Extra classes to add.",type:{name:"string"},required:!1},heading:{description:"Heading.",type:{name:"string"},required:!1},label:{description:"Aria-label on the rendered `nav` element.",type:{name:"string"},required:!0}}};function M(r){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...z(),...r.components};return a.jsxs(a.Fragment,{children:[a.jsx(t.h1,{id:"nav",children:"Nav"}),`
`,a.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,a.jsxs(t.ul,{children:[`
`,a.jsx(t.li,{children:a.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,a.jsx(t.li,{children:a.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,a.jsx(t.li,{children:a.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,a.jsx(t.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,a.jsxs(t.blockquote,{children:[`
`,a.jsx(t.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,a.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,`
`,a.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,a.jsx(te,{children:a.jsx(ae,{of:L})}),`
`,a.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,a.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,a.jsx(ne,{})]})}function re(r={}){const{wrapper:t}={...z(),...r.components};return t?a.jsx(t,{...r,children:a.jsx(M,{...r})}):M(r)}const se="",Te={title:"Deprecated/Nav",component:x,subcomponents:{NavList:h,NavItem:c},tags:["autodocs"],parameters:{styles:se,docs:{page:re}},decorators:[r=>e.createElement(ie,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},oe=r=>e.createElement(e.Fragment,null,e.createElement("div",{style:{width:"300px"}},e.createElement(x,{...r},e.createElement(h,{title:"Nav list 1"},e.createElement(c,{key:"navitem_1-1",element:"span",customprop:"uniqueValue",href:"#navitem_1-1"},"Nav item 1-1 (with a custom element)"),e.createElement(c,{key:"navitem_1-2",onClick:Q("onClick"),href:"#navitem_1-2"},"Nav item 1-2")),e.createElement(h,{title:"Nav list 2 expanded on page load",isExpandedOnPageLoad:!0},e.createElement(c,{key:"navitem_2-1",href:"#navitem_2-1"},"Nav item 2-1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),e.createElement(c,{key:"navitem_2-2",href:"#navitem_2-2"},"Nav item 2-2")),e.createElement(h,{title:"Nav list 3"},e.createElement(c,{key:"navitem_3-1",href:"#navitem_3-1"},"Nav item 3-1"),e.createElement(c,{key:"navitem_3-2",href:"https://www.ibm.com/"},"Nav item that is an external link and wraps to a new line"))))),L=oe.bind({});L.storyName="Default";L.args={label:"Navigation",heading:"Nav example",activeHref:"#"};var X,K,W;L.parameters={...L.parameters,docs:{...(X=L.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      width: '300px'
    }}>
        <Nav {...args}>
          <NavList title="Nav list 1">
            <NavItem key="navitem_1-1" element="span" customprop="uniqueValue" href="#navitem_1-1">
              Nav item 1-1 (with a custom element)
            </NavItem>
            <NavItem key="navitem_1-2" onClick={action('onClick')} href="#navitem_1-2">
              Nav item 1-2
            </NavItem>
          </NavList>
          <NavList title="Nav list 2 expanded on page load" isExpandedOnPageLoad>
            <NavItem key="navitem_2-1" href="#navitem_2-1">
              Nav item 2-1 - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </NavItem>
            <NavItem key="navitem_2-2" href="#navitem_2-2">
              Nav item 2-2
            </NavItem>
          </NavList>
          <NavList title="Nav list 3">
            <NavItem key="navitem_3-1" href="#navitem_3-1">
              Nav item 3-1
            </NavItem>
            <NavItem key="navitem_3-2" href="https://www.ibm.com/">
              Nav item that is an external link and wraps to a new line
            </NavItem>
          </NavList>
        </Nav>
      </div>
    </>;
}`,...(W=(K=L.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const Ve=["nav"];export{Ve as __namedExportsOrder,Te as default,L as nav};
