import{b as I,d as C,c as y,_ as d,P as e}from"./index-Cd8snwnz.js";import{r,e as s}from"./index-BOZkNhcz.js";import{i as P,T as u,S}from"./Tag-Ld9LHRlu.js";import{T as A}from"./settings-DqneCnpo.js";import{T as E}from"./Text-Rb3iZwUo.js";const G={red:"Red",magenta:"Magenta",purple:"Purple",blue:"Blue",cyan:"Cyan",teal:"Teal",green:"Green",gray:"Gray","cool-gray":"Cool-Gray","warm-gray":"Warm-Gray"},j=b=>{let{className:T,disabled:o,id:x,renderIcon:n,size:i,text:a,type:c="gray",...p}=b;const t=I(),l=r.useRef(null),m=x||`tag-${C()}`,g=y(`${t}--tag--operational`,T),[N,O]=r.useState(!1);r.useLayoutEffect(()=>{var f;const $=(f=l.current)==null?void 0:f.getElementsByClassName(`${t}--tag__label`)[0];O(P($))},[t,l]);const _=y(`${t}--icon-tooltip`,`${t}--tag-label-tooltip`);return N?s.createElement(A,{label:a,align:"bottom",className:_,leaveDelayMs:0,onMouseEnter:()=>!1,closeOnActivation:!0},s.createElement(u,d({ref:l,type:c,size:i,renderIcon:n,disabled:o,className:g,id:m},p),s.createElement(E,{title:a,className:`${t}--tag__label`},a))):s.createElement(u,d({ref:l,type:c,size:i,renderIcon:n,disabled:o,className:g,id:m},p),s.createElement(E,{title:a,className:`${t}--tag__label`},a))};j.propTypes={className:e.string,disabled:e.bool,id:e.string,renderIcon:e.oneOfType([e.func,e.object]),size:e.oneOf(Object.keys(S)),text:e.string,type:e.oneOf(Object.keys(G))};export{j as O};
