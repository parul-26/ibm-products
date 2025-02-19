import{e,r as k}from"./index-BOZkNhcz.js";import{a as Q}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{P as o,c as R,J as U,M as f}from"./index-Cd8snwnz.js";import{p as H}from"./settings-DqneCnpo.js";import{u as Y}from"./uuidv4-BQrI85uz.js";import{f as Z}from"./bucket-9-0Zx3G2i3.js";import{g as ee}from"./devtools-Bjt2CwRv.js";import{j as a,a as te,h as ae,C as ne}from"./index-Cm8rDqP-.js";import{useMDXComponents as z}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-ky5EjvM_.js";import{A as ie}from"./index-RATG_uWP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";import"./iframe-DVffvOdJ.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./bucket-18-D95sPjw6.js";const P=e.forwardRef(function(t,_){const{element:N,...b}=t;return e.createElement(N,{...b,ref:_})});P.displayName="NavItemLink";P.propTypes={element:o.elementType};P.defaultProps={element:"a"};P.__docgenInfo={description:"",methods:[],displayName:"NavItemLink",props:{element:{defaultValue:{value:"'a'",computed:!1},description:"@type {elementType} The base element to use to build the link. Defaults to `a`, can also accept alternative tag names or custom components like `Link` from `react-router`.",type:{name:"elementType"},required:!1}}};const p=`${H.prefix}--nav-item`,J="NavItem",T={activeHref:"#",disabled:!1,element:"a",onClick:()=>{},tabIndex:0};let c=({activeHref:s=T.activeHref,children:t=T.children,className:_,current:N,disabled:b=T.disabled,element:I=T.element,href:m,id:y,label:L,onClick:g=T.onClick,tabIndex:$=T.tabIndex,...C})=>{const[u,E]=k.useState(!1);k.useEffect(()=>{(m==null?void 0:m.indexOf(window.location.host))===-1&&E(!0)},[m]);const n=k.useRef(Y()),i=`${p}__${n.current}`,l=y||i,r=new RegExp("^([a-z]+://|//)","i").test(m)&&u,w=`${p}__link`,j=(V,G=null)=>b?G:V,O=j($,-1),A=r&&{rel:"noopener noreferrer",target:"_blank"};return e.createElement("li",{...C,className:R(p,_,{[`${p}--active`]:N!==null&&N===l||s!==void 0&&s===m&&!r,[`${p}--disabled`]:b}),label:L,onClick:V=>j(g(V,m)),onKeyDown:V=>j(g(V,m)),role:"menuitem"},e.createElement(P,{id:l,className:R(w,{[`${p}__link--external`]:r}),element:I,href:m,tabIndex:O,...C,...A},t,r&&e.createElement(Z,{className:`${p}__link--external__icon`})))};c.displayName=J;c.propTypes={activeHref:o.string,children:o.node.isRequired,className:o.string,current:o.string,disabled:o.bool,element:o.elementType,href:o.string,id:o.string,label:o.string,link:o.bool,onClick:o.func,tabIndex:o.number};c=H.checkComponentEnabled(c,J);c.__docgenInfo={description:"Navigation item component.",methods:[],displayName:"NavItem",props:{activeHref:{defaultValue:{value:"'#'",computed:!1},description:"Hypertext reference for active page.",type:{name:"string"},required:!1},children:{defaultValue:{value:"defaults.children",computed:!0},description:"Provide the contents of the Nav.",type:{name:"node"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the item is disabled.",type:{name:"bool"},required:!1},element:{defaultValue:{value:"'a'",computed:!1},description:"The base element to use to build the link. Defaults to `a`, can also accept alternative tag names or custom components like `Link` from `react-router`.",type:{name:"elementType"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"Click handler of an item.",type:{name:"func"},required:!1},tabIndex:{defaultValue:{value:"0",computed:!1},description:"`tabindex` of an item.",type:{name:"number"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},current:{description:"Currently selected item.",type:{name:"string"},required:!1},href:{description:"The href of the nav item.",type:{name:"string"},required:!1},id:{description:"Identifier.",type:{name:"string"},required:!1},label:{description:"Label of an item.",type:{name:"string"},required:!1},link:{description:"Whether the item is a link.",type:{name:"bool"},required:!1}}};const B="NavList",D=`${H.prefix}--nav-list`,v={activeHref:"#",className:"",children:null,id:"",isExpandedOnPageLoad:!1,onItemClick:()=>{},onListClick:()=>{},tabIndex:0,title:"",icon:"",navigationItemTitle:""};let h=e.forwardRef(({activeHref:s=v.activeHref,children:t=v.children,className:_=v.className,icon:N=v.icon,id:b=v.id,isExpandedOnPageLoad:I=v.isExpandedOnPageLoad,navigationItemTitle:m=v.navigationItemTitle,onItemClick:y=v.onItemClick,onListClick:L=v.onListClick,tabIndex:g=v.tabIndex,title:$=v.title},C)=>{const[u,E]=k.useState(I);k.useEffect(()=>{const d=e.Children.toArray(t).filter(({props:r})=>r.href&&r.href.length>0).map(({props:r})=>r.href);E(d.includes(s)||I)},[]);const n=()=>{u&&E(!1)},i=d=>{const{which:r,type:w}=d;(r===13||r===32||w==="click")&&(u||L(b),E(!u))};k.useImperativeHandle(C,()=>({close:n,isExpandedOnPageLoad:I}));const l=e.Children.map(t,(d,r)=>e.createElement(c,{...d.props,key:`${p}--${r}`,onClick:(w,j)=>{var O,A;y(w,j),(A=(O=d.props).onClick)==null||A.call(O,w)},activeHref:s,tabIndex:u?0:-1}));return e.createElement("li",{ref:C,className:R(D,_,{[`${p}--expanded`]:u}),tabIndex:g,onClick:i,onKeyDown:i,role:"menuitem"},e.createElement("div",{className:`${p}__link`},N&&e.createElement("img",{alt:m,className:`${p}__img`,src:N}),e.createElement("div",{className:`${p}__content`},$),e.createElement(U,{className:`${D}__icon`})),e.createElement("ul",{"aria-label":$,"aria-hidden":!u,className:`${D} ${D}--nested`,role:"menu"},l))});h.propTypes={activeHref:f.string,children:f.node,className:f.string,icon:f.string,id:f.string,isExpandedOnPageLoad:f.bool,navigationItemTitle:f.string,onItemClick:f.func,onListClick:f.func,tabIndex:f.number,title:f.string};h.displayName=B;h=H.checkComponentEnabled(h,B);h.__docgenInfo={description:"",methods:[{name:"close",docblock:null,modifiers:[],params:[],returns:null}],displayName:"NavList",props:{activeHref:{defaultValue:{value:"'#'",computed:!1},description:"@type {string} Hypertext reference for active page.",type:{name:"custom",raw:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"@type {Node} Child elements.",type:{name:"custom",raw:"node"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"@type {string} Extra classes to add.",type:{name:"custom",raw:"string"},required:!1},icon:{defaultValue:{value:"''",computed:!1},description:"@type {string} Icon of a list.",type:{name:"custom",raw:"string"},required:!1},id:{defaultValue:{value:"''",computed:!1},description:"@type {string} ID of a list.",type:{name:"custom",raw:"string"},required:!1},isExpandedOnPageLoad:{defaultValue:{value:"false",computed:!1},description:"@type {boolean} State of a list.",type:{name:"custom",raw:"bool"},required:!1},navigationItemTitle:{defaultValue:{value:"''",computed:!1},description:"@type {boolean} Title of nav.",type:{name:"custom",raw:"string"},required:!1},onItemClick:{defaultValue:{value:"() => {}",computed:!1},description:"@type {Function} Click handler for an item.",type:{name:"custom",raw:"func"},required:!1},onListClick:{defaultValue:{value:"() => {}",computed:!1},description:"@type {Function} Click handler for a list.",type:{name:"custom",raw:"func"},required:!1},tabIndex:{defaultValue:{value:"0",computed:!1},description:"@type {number} `tabindex` of an item.",type:{name:"custom",raw:"number"},required:!1},title:{defaultValue:{value:"''",computed:!1},description:"@type {string} Label of the list.",type:{name:"custom",raw:"string"},required:!1}}};const M="Nav",S=`${H.prefix}--nav`;let x=e.forwardRef(({activeHref:s,className:t,children:_,heading:N,label:b,...I},m)=>{const[y,L]=k.useState(s),g=k.useRef({});k.useEffect(()=>{if(!y&&window.location){const{hash:n,pathname:i}=window.location;L(i+n)}},[y]);const $=(n,i)=>{const l=`${p}--${i}`;return e.createElement(c,{...n.props,activeHref:y,key:l,onClick:(d,r)=>u(d,r,n.props.onClick)})},C=(n,i)=>{const l=`${D}--${i}`;return e.createElement(h,{...n.props,activeHref:y,id:l,key:l,onListClick:E,onItemClick:u,ref:d=>g.current[l]=d})},u=(n,i,l)=>{n.stopPropagation();const{type:d,which:r}=n;(r===13||r===32||d==="click")&&i!==y&&L(i),l&&l(n)},E=n=>{Object.keys(g.current).forEach(i=>{i!==n&&!g.current[i].isExpandedOnPageLoad&&g.current[i].close()})};return e.createElement("nav",{className:R(S,t),"aria-label":b,ref:m,...ee(M),...I},N&&e.createElement("h1",{className:`${S}__heading`},N),e.createElement("ul",{className:`${S}__wrapper`,role:"menubar"},e.Children.map(_,(n,i)=>{var l;return((l=n==null?void 0:n.type)==null?void 0:l.displayName)===h.displayName?C(n,i):$(n,i)})))});x.deprecated={level:"warn",details:"This component is deprecated"};x.propTypes={activeHref:o.string,children:o.node,className:o.string,heading:o.string,label:o.string.isRequired};x=H.checkComponentEnabled(x,M);x.displayName=M;x.__docgenInfo={description:"@deprecated This component is deprecated",methods:[],displayName:"Nav",props:{activeHref:{description:"Hypertext reference for active page.",type:{name:"string"},required:!1},children:{description:"Child elements.",type:{name:"node"},required:!1},className:{description:"Extra classes to add.",type:{name:"string"},required:!1},heading:{description:"Heading.",type:{name:"string"},required:!1},label:{description:"Aria-label on the rendered `nav` element.",type:{name:"string"},required:!0}}};function F(s){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...z(),...s.components};return a.jsxs(a.Fragment,{children:[a.jsx(t.h1,{id:"nav",children:"Nav"}),`
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
`,a.jsx(te,{children:a.jsx(ae,{of:q})}),`
`,a.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,a.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,a.jsx(ne,{})]})}function se(s={}){const{wrapper:t}={...z(),...s.components};return t?a.jsx(t,{...s,children:a.jsx(F,{...s})}):F(s)}const re="",$e={title:"Deprecated/Nav",component:x,subcomponents:{NavList:h,NavItem:c},tags:["autodocs"],parameters:{styles:re,docs:{page:se}},decorators:[s=>e.createElement(ie,{type:"deprecation-notice",text:e.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},s())]},oe=s=>e.createElement(e.Fragment,null,e.createElement("div",{style:{width:"300px"}},e.createElement(x,{...s},e.createElement(h,{title:"Nav list 1"},e.createElement(c,{key:"navitem_1-1",element:"span",customprop:"uniqueValue",href:"#navitem_1-1"},"Nav item 1-1 (with a custom element)"),e.createElement(c,{key:"navitem_1-2",onClick:Q("onClick"),href:"#navitem_1-2"},"Nav item 1-2")),e.createElement(h,{title:"Nav list 2 expanded on page load",isExpandedOnPageLoad:!0},e.createElement(c,{key:"navitem_2-1",href:"#navitem_2-1"},"Nav item 2-1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),e.createElement(c,{key:"navitem_2-2",href:"#navitem_2-2"},"Nav item 2-2")),e.createElement(h,{title:"Nav list 3"},e.createElement(c,{key:"navitem_3-1",href:"#navitem_3-1"},"Nav item 3-1"),e.createElement(c,{key:"navitem_3-2",href:"https://www.ibm.com/"},"Nav item that is an external link and wraps to a new line"))))),q=oe.bind({});q.storyName="Default";q.args={label:"Navigation",heading:"Nav example",activeHref:"#"};var X,K,W;q.parameters={...q.parameters,docs:{...(X=q.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
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
}`,...(W=(K=q.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const je=["nav"];export{je as __namedExportsOrder,$e as default,q as nav};
