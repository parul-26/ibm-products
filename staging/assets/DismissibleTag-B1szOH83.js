import{b as D,d as h,c as b,_ as z,C as L}from"./index-C8rbkH0g.js";import{P as e}from"./index-Dk74W0Oi.js";import{r as n,R as t}from"./index-BwDkhjyp.js";import{i as R,T as j,S as w,a as B}from"./Tag-CUZixLTe.js";import{T as M}from"./settings-DI4GKhuL.js";import{T as Y}from"./Text-DZylbEPL.js";var u;const Z=E=>{var d;let{className:y,disabled:r,id:T,renderIcon:C,title:c="Dismiss",onClose:m,slug:l,size:x,text:i,tagTitle:p,type:N,..._}=E;const s=D(),o=n.useRef(),$=T||`tag-${h()}`,I=b(`${s}--tag--filter`,y),[O,P]=n.useState(!1);n.useLayoutEffect(()=>{var f;const a=(f=o.current)==null?void 0:f.getElementsByClassName(`${s}--tag__label`)[0];P(R(a))},[s,o]);const S=a=>{m&&(a.stopPropagation(),m(a))};let g;l&&((d=l.type)==null?void 0:d.displayName)==="AILabel"&&(g=t.cloneElement(l,{size:"sm",kind:"inline"}));const k=b(`${s}--icon-tooltip`,`${s}--tag-label-tooltip`),{onClick:q,...v}=_,A=`Dismiss "${i}"`;return t.createElement(j,z({ref:o,type:N,size:x,renderIcon:C,disabled:r,className:I,id:$},v),t.createElement("div",{className:`${s}--interactive--tag-children`},t.createElement(Y,{title:p||i,className:`${s}--tag__label`},i),g,t.createElement(M,{label:O?A:c,align:"bottom",className:k,leaveDelayMs:0,closeOnActivation:!0},t.createElement("button",{type:"button",className:`${s}--tag__close-icon`,onClick:S,disabled:r,"aria-label":c},u||(u=t.createElement(L,null))))))};Z.propTypes={className:e.string,disabled:e.bool,id:e.string,onClose:e.func,renderIcon:e.oneOfType([e.func,e.object]),size:e.oneOf(Object.keys(w)),slug:e.node,text:e.string,tagTitle:e.string,title:e.string,type:e.oneOf(Object.keys(B))};export{Z as D};
