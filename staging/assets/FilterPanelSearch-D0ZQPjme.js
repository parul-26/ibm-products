import{R as s,r as l}from"./index-BwDkhjyp.js";import{P as r}from"./index-Dk74W0Oi.js";import{c as T}from"./index-CQ0F2wkl.js";import{S as g}from"./Search-CuE4XdDa.js";import{g as S}from"./devtools-Bz70ioU6.js";import{p as c}from"./settings-xiNX1vM3.js";const a=`${c.prefix}--filter-panel-search`,o="FilterPanelSearch",b={searchProps:{}};let e=s.forwardRef(({children:i,className:p,searchProps:d=b.searchProps,...m},u)=>{const[h,n]=l.useState(!1);let t;const f=()=>{clearTimeout(t),t=setTimeout(()=>{n(!1)},300)},P=()=>{clearTimeout(t),n(!0)};return l.useEffect(()=>clearTimeout(t),[t]),s.createElement("div",{...m,className:T(a,`${a}__container`,p),onBlur:f,onFocus:P,ref:u,...S(o)},s.createElement(g,{className:`${a}__input`,...d}),h&&!!i&&s.createElement("div",{className:`${a}__results`},i))});e.deprecated={level:"warn",details:"This component is deprecated"};e=c.checkComponentEnabled(e,o);e.displayName=o;e.propTypes={children:r.node,className:r.string,searchProps:r.shape({labelText:r.string.isRequired}).isRequired};e.__docgenInfo={description:`An input field and container to show search results.
@deprecated This component is deprecated`,methods:[],displayName:"FilterPanelSearch",props:{searchProps:{defaultValue:{value:"{}",computed:!1},description:"Props specific to the internal `Search` component.",type:{name:"shape",value:{labelText:{name:"string",description:"The label text for the Search icon.",required:!0}}},required:!1},children:{description:"Provide the contents of the FilterPanelSearch.",type:{name:"node"},required:!1},className:{description:"Optional class to be applied to the containing node.",type:{name:"string"},required:!1}}};export{e as F};
