import{a as E,k as O,_ as P,c as N,d as T,i as v,E as y}from"./floating-ui.dom.mjs-BB6krl5l.js";import{P as t}from"./index-Dk74W0Oi.js";import{r as C,R as a}from"./index-BwDkhjyp.js";import{P as D,a as R}from"./index-CmXP8YBY.js";const w=i=>{let{align:l="bottom-start",className:p,children:d,definition:f,defaultOpen:m=!1,id:c,openOnHover:u,tooltipText:g,triggerClassName:b,...h}=i;const[o,e]=C.useState(m),r=E(),s=O(c);function x(n){o&&v(n,y)&&(n.stopPropagation(),e(!1))}return a.createElement(D,{align:l,className:p,dropShadow:!1,highContrast:!0,onMouseLeave:()=>{e(!1)},onMouseEnter:()=>{u&&e(!0)},onFocus:()=>{e(!0)},open:o},a.createElement("button",P({},h,{className:N(`${r}--definition-term`,b),"aria-controls":s,"aria-expanded":o,onBlur:()=>{e(!1)},onMouseDown:n=>{n.button===0&&e(!o)},onKeyDown:x,type:"button"}),d),a.createElement(R,{className:`${r}--definition-tooltip`,id:s},g??f))};w.propTypes={align:t.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top","top-start","top-end","bottom-start","bottom-end","left-end","left-start","right-end","right-start"]),children:t.node.isRequired,className:t.string,defaultOpen:t.bool,definition:t.node.isRequired,id:t.string,openOnHover:t.bool,tooltipText:T(t.node),triggerClassName:t.string};export{w as D};
