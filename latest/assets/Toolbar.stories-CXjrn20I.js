import{j as e,p as I,I as L}from"./settings-CljJQLyl.js";import{c as y,U as G,V}from"./floating-ui.react-C-lGofMW.js";import{D as X}from"./Dropdown-DS9tr3Sg.js";import{O as H,a as f}from"./index-_4Qtr-t1.js";import{r as i}from"./index-BwDkhjyp.js";import{useMDXComponents as E}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BRC-GqF5.js";import{e as _,i as N,C as K}from"./index-DyDuCB6G.js";import{p as d}from"./index-Dk74W0Oi.js";import{g as W}from"./getFocusableElements-BW7cf991.js";import{g as J}from"./devtools-C9kUiWhx.js";import{c as Q,e as Y,R as q,f as ee}from"./bucket-14-DGwr16LJ.js";import{e as oe,c as re}from"./bucket-17-ByMkANur.js";import{P as ne,b as te,c as se}from"./bucket-13-l2XVe1Gl.js";import{Z as A,e as S}from"./bucket-18-9qioxFta.js";import{b as ae}from"./bucket-10-WLXJkYzj.js";import{d as ie}from"./bucket-0-M87sILds.js";import{a as O}from"./bucket-12-BOhlrMfU.js";import{a as le,b as ce}from"./bucket-16-BOcfDpJ9.js";import{T as de}from"./bucket-15-Bq0LvDr0.js";import{O as pe,a as me,M as xe}from"./bucket-11-DhLh_29W.js";import{c as ue}from"./bucket-5-DSzoaoMh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-B5D95Jtx.js";import"./index-1ulDwjQN.js";import"./index-BONylQH5.js";import"./index-B1Zk_jvd.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./Text-B6Yb8geH.js";import"./index-xbyQ_51k.js";import"./useAttachedMenu-D2EsEGO9.js";import"./wrapFocus-DMN3GZJC.js";import"./iframe-CRI-r_X1.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";const{checkComponentEnabled:he,prefix:je}=I,g=`${je}--toolbar`,M=i.createContext({});let x=i.forwardRef(({children:t,className:o,vertical:l,...u},r)=>{const b=i.useRef(),m=i.useCallback(()=>b.current,[b]),T=i.useRef(null),h=r||T,[p,C]=i.useState(-1);i.useEffect(()=>{var a;b.current=W(h==null?void 0:h.current),p!==-1&&((a=m())==null||a.forEach((c,j)=>{c[j!==p?"setAttribute":"removeAttribute"]("tabindex","-1")}))}),i.useEffect(()=>{var a;p!==-1&&((a=m())==null||a[p].focus())},[p,m]);const[F,B]=l?["ArrowDown","ArrowUp"]:["ArrowRight","ArrowLeft"];function R(a){var j;const c=p+a;(j=m())!=null&&j[c]&&C(c)}function Z({target:a}){const c=m();c!=null&&c.includes(a)&&C(c.indexOf(a))}function U({key:a,target:c}){var j;if((j=m())!=null&&j.includes(c))switch(a){case F:R(1);break;case B:R(-1);break}}return e.jsx("div",{...u,ref:h,className:y(g,o,{[`${g}--vertical`]:l}),onFocus:Z,onKeyDown:U,...l&&{"aria-orientation":"vertical"},...J(v),role:"toolbar",children:e.jsx(M.Provider,{value:{vertical:l},children:t})})});const v="Toolbar";x.displayName=v;x.propTypes={children:d.node.isRequired,className:d.string,vertical:d.bool};x=he(x,v);x.__docgenInfo={description:"Toolbars are a collection of action items that organize a program’s interaction patterns into a series of closely related commands.",methods:[],displayName:"Toolbar",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}},vertical:{required:!1,tsType:{name:"boolean"},description:"Determines whether the `Toolbar` is rendered vertically",type:{name:"custom",raw:"bool"}},children:{description:"Provide the content of the `Toolbar`",type:{name:"node"},required:!0}}};const D=`${g}__button`;let n=i.forwardRef(({caret:t=!1,children:o,className:l,renderIcon:u,iconDescription:r="",label:b,...m},T)=>{var p;const h=u;return e.jsx(L,{align:(p=i.useContext(M))!=null&&p.vertical?"right":"top",...m,label:b??r,ref:T,className:y(l,{[`${D}--caret`]:t}),kind:"ghost",size:"md",children:e.jsxs(e.Fragment,{children:[h?e.jsx(h,{}):null,o,t&&e.jsx("span",{className:`${D}__caret`})]})})});const k="ToolbarButton";n.displayName=k;const be={iconDescription:d.string};n.propTypes={caret:d.bool,children:d.node,className:d.string,label:d.string.isRequired,renderIcon:d.func.isRequired,...be};n=I.checkComponentEnabled(n,k);n.__docgenInfo={description:"Toolbar buttons are common functions performed as part of a products interface or an open window.",methods:[],displayName:"ToolbarButton",props:{caret:{required:!1,tsType:{name:"boolean"},description:"Determines whether the caret is rendered",defaultValue:{value:"false",computed:!1},type:{name:"custom",raw:"bool"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}},iconDescription:{required:!1,tsType:{name:"string"},description:"@deprecated use `label` instead\nSpecifies the label for the icon button",defaultValue:{value:"''",computed:!1},type:{name:"custom",raw:"string"}},label:{required:!0,tsType:{name:"string"},description:"Specifies the label for the icon button",type:{name:"string"}},renderIcon:{required:!0,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Specifies the icon to be used by the ToolbarButton component",type:{name:"func"}},children:{description:"Provide the content of the `ToolbarButton`",type:{name:"custom",raw:"node"},required:!1}}};let s=i.forwardRef(({className:t,children:o,...l},u)=>e.jsx("div",{...l,ref:u,className:y(`${g}__group`,t),children:o}));const $="ToolbarGroup";s.displayName=$;s.propTypes={children:d.node.isRequired,className:d.string};s=I.checkComponentEnabled(s,$);s.__docgenInfo={description:"Toolbar groups organize the commands within a toolbar into related groups.",methods:[],displayName:"ToolbarGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the content of the `ToolbarGroup`",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}}}};function P(t){const o={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...E(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"toolbar",children:"Toolbar"}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,`
`,e.jsx(o.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(o.h3,{id:"default",children:"Default"}),`
`,e.jsx(_,{children:e.jsx(N,{of:w})}),`
`,e.jsx(o.h3,{id:"with-image",children:"With Image"}),`
`,e.jsx(_,{children:e.jsx(N,{of:z})}),`
`,e.jsx(o.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(K,{})]})}function fe(t={}){const{wrapper:o}={...E(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(P,{...t})}):P(t)}const lo={title:"Experimental/Components/Toolbars/Toolbar",component:x,tags:["autodocs"],parameters:{docs:{page:fe}},argTypes:{vertical:{control:"boolean"}}};function w(t){const o=["11","12","14","16","18"],[l,u]=i.useState(o[o.length/2|0]);return e.jsxs(x,{...t,children:[e.jsxs(s,{children:[e.jsx(n,{label:"Save",renderIcon:r=>e.jsx(Q,{size:16,...r})}),e.jsx(n,{label:"Share",renderIcon:r=>e.jsx(Y,{size:16,...r})}),e.jsx(n,{label:"Upload",renderIcon:r=>e.jsx(oe,{size:16,...r})}),e.jsx(n,{label:"Print",renderIcon:r=>e.jsx(ne,{size:16,...r})})]}),e.jsxs(s,{children:[e.jsx(n,{label:"Undo",renderIcon:r=>e.jsx(re,{size:16,...r})}),e.jsx(n,{label:"Redo",renderIcon:r=>e.jsx(te,{size:16,...r})}),e.jsx(n,{label:"Zoom in",renderIcon:r=>e.jsx(A,{size:16,...r})}),e.jsx(n,{label:"Zoom out",renderIcon:r=>e.jsx(S,{size:16,...r})}),e.jsx(n,{label:"Minimize",renderIcon:r=>e.jsx(ae,{size:16,...r})}),e.jsx(n,{label:"Align horizontal center",renderIcon:r=>e.jsx(ie,{size:16,...r})})]}),e.jsxs(s,{children:[e.jsx(n,{label:"Ruler",renderIcon:r=>e.jsx(q,{size:16,...r})}),e.jsx(n,{label:"Pin",renderIcon:r=>e.jsx(O,{size:16,...r})}),e.jsx(n,{label:"Copy file",renderIcon:r=>e.jsx(G,{size:16,...r})})]}),e.jsx(s,{children:e.jsx(X,{id:"dropdown",hideLabel:!0,titleText:"Font size",initialSelectedItem:l,items:o,label:l,onChange:({selectedItem:r})=>u(r)})}),e.jsx(s,{children:e.jsx(n,{label:"Text align center",renderIcon:r=>e.jsx(le,{size:16,...r}),caret:!0})}),e.jsx(s,{children:e.jsxs(H,{"aria-label":"List",flipped:!0,children:[e.jsx(f,{itemText:"Color palette"}),e.jsx(f,{itemText:"Text creation"}),e.jsx(f,{itemText:"Bulleted list"}),e.jsx(f,{itemText:"Delete",hasDivider:!0,isDelete:!0})]})}),e.jsxs(s,{children:[e.jsx(n,{label:"Table",renderIcon:r=>e.jsx(de,{size:16,...r})}),e.jsx(n,{label:"Settings adjust",renderIcon:r=>e.jsx(ee,{size:16,...r})})]})]})}w.args={vertical:!1};function z(t){return e.jsxs(x,{...t,children:[e.jsx(s,{children:e.jsx(n,{label:"Drag",renderIcon:o=>e.jsx(ue,{size:16,...o})})}),e.jsxs(s,{children:[e.jsx(n,{label:"Ruler",renderIcon:o=>e.jsx(q,{size:16,...o})}),e.jsx(n,{label:"Pin",renderIcon:o=>e.jsx(O,{size:16,...o})}),e.jsx(n,{label:"Color palette",renderIcon:o=>e.jsx(V,{size:16,...o})}),e.jsx(n,{label:"Text creation",renderIcon:o=>e.jsx(ce,{size:16,...o})})]}),e.jsxs(s,{children:[e.jsx(n,{label:"Open panel left",renderIcon:o=>e.jsx(pe,{size:16,...o})}),e.jsx(n,{label:"Open panel right",renderIcon:o=>e.jsx(me,{size:16,...o})})]}),e.jsxs(s,{children:[e.jsx(n,{label:"Move",renderIcon:o=>e.jsx(xe,{size:16,...o})}),e.jsx(n,{label:"Rotate",renderIcon:o=>e.jsx(se,{size:16,...o})})]}),e.jsxs(s,{children:[e.jsx(n,{label:"Zoom in",renderIcon:o=>e.jsx(A,{size:16,...o})}),e.jsx(n,{label:"Zoom out",renderIcon:o=>e.jsx(S,{size:16,...o})})]})]})}z.args={vertical:!0};w.__docgenInfo={description:"",methods:[],displayName:"_Toolbar"};z.__docgenInfo={description:"",methods:[],displayName:"vertical"};const co=["_Toolbar","vertical"];export{w as _Toolbar,co as __namedExportsOrder,lo as default,z as vertical};
