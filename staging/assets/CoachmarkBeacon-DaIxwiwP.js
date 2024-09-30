import{p as c,j as e}from"./settings-DEdZ0TrD.js";import{P as t}from"./index-Dk74W0Oi.js";import{R as d}from"./index-BwDkhjyp.js";import{c as u}from"./floating-ui.core.mjs-LzsX8FoD.js";import{g as f}from"./devtools-BMJcATO0.js";import{u as h}from"./CoachmarkOverlayElements-aabMPK1J.js";const o=`${c.prefix}--coachmark-beacon`,r="CoachmarkBeacon",k={kind:"default"};let a=d.forwardRef(({label:s,className:i,kind:l=k.kind,...m},p)=>{const n=h();return n?e.jsx("span",{...m,className:u(o,`${o}-${l}`,i),ref:p,...f(r),role:"tooltip",children:e.jsx("button",{tabIndex:0,type:"button",...n.buttonProps,"aria-label":s,className:`${o}__target`,children:e.jsxs("svg",{className:`${o}__center`,children:[e.jsx("title",{children:s}),e.jsx("circle",{r:1,cx:38,cy:38})]})})}):e.jsx("div",{children:"CoachmarkBeacon is to be use exclusively within the target prop of Coachmark"})});a=c.checkComponentEnabled(a,r);a.displayName=r;a.propTypes={className:t.string,kind:t.oneOf(["default"]),label:t.string.isRequired};a.__docgenInfo={description:"Use beacon for the target prop of a Coachmark component.",methods:[],displayName:"CoachmarkBeacon",props:{kind:{defaultValue:{value:"'default'",computed:!1},description:`What style of beacon.
BEACON_KIND is an exported enum from the Coachmark and can be used for this value.
@see {@link BEACON_KIND}`,type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1},className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},label:{description:"The aria label.",type:{name:"string"},required:!0}}};export{a as C};
