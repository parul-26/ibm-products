import{w as j}from"./wrapComponent-BxtqFmr4.js";import{d as k,b as A,c as D,_ as G}from"./index-C8rbkH0g.js";import{P as e}from"./index-Dk74W0Oi.js";import{r as t,R as H}from"./index-BwDkhjyp.js";import{S as J}from"./Search-C2YVmAvL.js";import{n as L}from"./settings-DI4GKhuL.js";const ne=j({name:"TableToolbarContent",type:"div",className:n=>`${n}--toolbar-content`}),M={"carbon.table.toolbar.search.label":"Filter table","carbon.table.toolbar.search.placeholder":"Filter table"},Q=n=>M[n],U=n=>{let{className:F,searchContainerClass:b,onChange:o,onClear:v=L,translateWithId:p=Q,placeholder:y,labelText:I,expanded:f,defaultExpanded:B,defaultValue:s,disabled:d,onExpand:h,persistent:i=!1,id:m,onBlur:x,onFocus:g,size:$="lg",tabIndex:N="0",...O}=n;const{current:T}=t.useRef(f!==void 0),[P,R]=t.useState(!!(B||s)),C=T?f:P,[E,V]=t.useState(s||""),W=k("table-toolbar-search"),[u,q]=t.useState(null),l=A();t.useEffect(()=>{var a,r,S;u&&((S=(r=(a=u.current)==null?void 0:a.querySelector)==null?void 0:r.call(a,"input"))==null||S.focus(),q(null))},[u]),t.useEffect(()=>{s&&(o==null||o("",s))},[]);const w=D(F,{[b]:b,[`${l}--toolbar-search-container-active`]:C,[`${l}--toolbar-search-container-disabled`]:d,[`${l}--toolbar-search-container-expandable`]:!i,[`${l}--toolbar-search-container-persistent`]:i}),c=function(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!C;d||(!T&&!i&&R(r),h&&h(a,r))},z=a=>{V(a.target.value),o&&o(a)},_=a=>c(a,!0),K=a=>!E&&c(a,!1);return H.createElement(J,G({disabled:d,className:w,value:E,id:typeof m<"u"?m:W,labelText:I||p("carbon.table.toolbar.search.label"),placeholder:y||p("carbon.table.toolbar.search.placeholder"),onChange:z,onClear:v,onFocus:g?a=>g(a,c):_,onBlur:x?a=>x(a,c):K,size:$,tabIndex:N},O))};U.propTypes={children:e.node,className:e.string,defaultExpanded:e.bool,defaultValue:e.string,disabled:e.bool,expanded:e.bool,id:e.string,labelText:e.string,onBlur:e.func,onChange:e.func,onClear:e.func,onExpand:e.func,onFocus:e.func,persistent:e.bool,placeholder:e.string,searchContainerClass:e.string,size:e.oneOf(["sm","md","lg"]),tabIndex:e.oneOfType([e.number,e.string]),translateWithId:e.func};export{ne as T,U as a};
