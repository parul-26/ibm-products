import{p as h,j as a}from"./settings-DEdZ0TrD.js";import{S as w}from"./StoryDocsPage-BM2rogkP.js";import{R as C}from"./index-BwDkhjyp.js";import{P as i}from"./index-Dk74W0Oi.js";import{c as P}from"./floating-ui.core.mjs-LzsX8FoD.js";import{g as j}from"./devtools-BMJcATO0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-BwXSUnsA.js";import"./index-CtP8jiW9.js";import"./index-DUEQWFC3.js";import"./iframe-CsPi-Tl1.js";import"../sb-preview/runtime.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-CtkteSRf.js";import"./tslib.es6-B4_xh3D5.js";const p=`${h.prefix}--delimited-list`,n="DelimitedList",m={delimiter:", ",items:[],truncate:!0};let e=C.forwardRef(({className:o,delimiter:x=m.delimiter,items:d=m.items,truncate:N=m.truncate,...L},T)=>a.jsx("div",{...L,className:P(p,o,[N&&`${p}-truncate`]),ref:T,...j(n),children:d.length>0?d.join(x):"–"}));e=h.checkComponentEnabled(e,n);e.displayName=n;e.propTypes={className:i.string,delimiter:i.string,items:i.arrayOf(i.any),truncate:i.bool};e.__docgenInfo={description:"`DelimitedList` converts an array of items into a single line of\ncomma-separated values.",methods:[],displayName:"DelimitedList",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},delimiter:{required:!1,tsType:{name:"string"},description:"The character(s) used to separate the items.",defaultValue:{value:"', '",computed:!1},type:{name:"string"}},items:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"Array of items to be listed.",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"any"}}},truncate:{required:!1,tsType:{name:"boolean"},description:"Toggle the component's ability to truncate or not.",defaultValue:{value:"true",computed:!1},type:{name:"bool"}}},composes:["PropsWithChildren"]};const $=".delimited-list-stories__viewport{width:20rem}",b=()=>a.jsx(w,{blocks:[{story:t},{story:s},{story:r}]});b.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const S="delimited-list-stories",Z={title:"Experimental/Components/Delimited list/DelimitedList",component:e,tags:["autodocs"],parameters:{styles:$,docs:{page:b}}},l=o=>a.jsx("div",{className:`${S}__viewport`,children:a.jsx(e,{...o})}),t=l.bind({});t.args={delimiter:", ",items:["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7","Item 8","Item 9","Item 10"],truncate:!0};const s=l.bind({});s.args={delimiter:", ",items:["Item 1","Item 2","Item 3"],truncate:!0};const r=l.bind({});r.args={items:[]};var c,u,y;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <DelimitedList {...args} />
    </div>;
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,f,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <DelimitedList {...args} />
    </div>;
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var _,D,I;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <DelimitedList {...args} />
    </div>;
}`,...(I=(D=r.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const ee=["delimited","notDelimited","empty"];export{ee as __namedExportsOrder,Z as default,t as delimited,r as empty,s as notDelimited};
