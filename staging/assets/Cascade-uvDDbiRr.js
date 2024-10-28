import{r as b,R as e}from"./index-BwDkhjyp.js";import{c as i}from"./floating-ui.dom.mjs-BB6krl5l.js";import{G as _}from"./Grid-jbQhRIM1.js";import{P as l}from"./index-Dk74W0Oi.js";import{g as T}from"./devtools-TX7bKGcX.js";import{p as m}from"./settings-GP6q6PuD.js";const n=`${m.prefix}--cascade`,c="Cascade",x={grid:!1};let s=b.forwardRef(({children:o,className:h,grid:f=x.grid,...u},g)=>{const p={...u,className:i(n,h),ref:g,...T(c)},y=t=>{const r=i(t.props.className,`${n}__element`);return e.cloneElement(t,{className:r})},C=()=>e.Children.map(o,t=>y(t));if(f){let t=0;const r=e.Children.map(o,a=>{if(e.isValidElement(a)){const N=e.Children.map(a==null?void 0:a.props.children,d=>{t=t+1;const E=i(d.props.className,`${n}__col`,`${n}__col-${t}`);return e.cloneElement(d,{className:E})});return e.cloneElement(a,{children:N})}return o});return e.createElement("div",{...p},e.createElement(_,null,r))}return e.createElement("div",{...p},C())});s=m.checkComponentEnabled(s,c);s.displayName=c;s.propTypes={children:l.node,className:l.string,grid:l.bool};s.__docgenInfo={description:`This pattern is intended for use with cards, tiles, or similarly styled
components. Use this patterns in areas that are the primary focus on the page to
help the user along their journey or locate the most important information on
the page. It should not be used on a page if it is the secondary focus of the
page as that will distract the user.`,methods:[],displayName:"Cascade",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Main content that is shown.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:`Specify an optional className to be applied to
the container node.`,type:{name:"string"}},grid:{required:!1,tsType:{name:"boolean"},description:"Specifies whether or not to wrap the child content in a `<Grid />`.\nIf this is set to true it's important that the children are being wrapped in rows in columns.\nCheck the documentation for additional clarification.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};export{s as C};
