import{b as g,d as h,c as I,_ as C,e as k}from"./index-C8rbkH0g.js";import{P as e}from"./index-Dk74W0Oi.js";import{R as l}from"./index-BwDkhjyp.js";import{I as L}from"./TableToolbar-D-NC65Nl.js";import{R as T}from"./RadioButton-DGsh84ks.js";const q=n=>{let{ariaLabel:o,["aria-label"]:t,checked:c,id:d,name:r,onSelect:m,onChange:b,disabled:p,radio:a,className:s}=n;const i=g(),u=h(),f={id:d,name:r||u,onClick:m,onChange:b,checked:c,disabled:p},R=a?T:L,x=I(`${i}--table-column-checkbox`,{...s&&{[s]:!0},[`${i}--table-column-radio`]:a});return l.createElement("td",{className:x,"aria-live":"off"},l.createElement(R,C({},f,a&&{labelText:t||o,hideLabel:!0},!a&&{"aria-label":t||o})))};q.propTypes={"aria-label":e.string,ariaLabel:k(e.string),checked:e.bool,className:e.string,disabled:e.bool,id:e.string.isRequired,name:e.string.isRequired,onChange:e.func,onSelect:e.func.isRequired,radio:e.bool};export{q as T};
