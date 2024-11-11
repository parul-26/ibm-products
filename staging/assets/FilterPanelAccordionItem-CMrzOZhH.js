import{R as t,r as A}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{c as q}from"./index-C8rbkH0g.js";import{A as T,a as F}from"./AccordionItem-D_xDq4QW.js";import{g as N}from"./devtools-BXUoVCj7.js";import{p as a}from"./settings-DI4GKhuL.js";import{F as I}from"./FilterPanelGroup-B5tnUzlg.js";import{L as v}from"./ListItem-CS4vjtLU.js";import{F as _}from"./FilterPanelLabel-C3lMMzTb.js";import{T as x}from"./TruncatedList-B5cxLz8W.js";const y=`${a.prefix}--filter-panel-accordion`,P="FilterPanelAccordion",E={accordionProps:{}};let o=t.forwardRef(({accordionProps:i=E.accordionProps,children:s,className:l,count:c,labelText:p,title:d,...m},u)=>{const{align:f,...n}=i;return t.createElement(I,{...m,className:q(y,l),count:c,labelText:p,ref:u,title:d,...N(P)},t.createElement(T,{...n,align:f||"start",className:`${y}__list`},s))});o=a.checkComponentEnabled(o,P);o.displayName=P;o.propTypes={accordionProps:e.shape({}),children:e.node.isRequired,className:e.string,count:e.oneOfType([e.number,e.string]),labelText:e.node.isRequired,title:e.string};o.__docgenInfo={description:"A container with a label and optional count.",methods:[],displayName:"FilterPanelAccordion",props:{accordionProps:{defaultValue:{value:"{}",computed:!1},description:"Props specific to the internal `Accordion` component.",type:{name:"shape",value:{}},required:!1},children:{description:"Provide the contents of the FilterPanelAccordion.",type:{name:"node"},required:!0},className:{description:"Optional class to be applied to the containing node.",type:{name:"string"},required:!1},count:{description:"Number to be displayed with the label.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},labelText:{description:"The label for the component.",type:{name:"node"},required:!0},title:{description:"Optional title attribute for the label.",type:{name:"string"},required:!1}}};const h=`${a.prefix}--filter-panel-accordion-item`,b="FilterPanelAccordionItem",g={accordionItemProps:{},truncatedListProps:{}};let r=t.forwardRef(({accordionItemProps:i=g.accordionItemProps,truncatedListProps:s=g.truncatedListProps,children:l,className:c,count:p,labelText:d,title:m,...u},f)=>t.createElement(F,{...i,className:q(h,c),ref:f,title:t.createElement(_,{...u,count:p,labelText:d,title:m}),...N(b)},t.createElement(x,{...s,className:`${h}__list`},A.Children.map(l,n=>t.createElement(v,{className:`${h}__list-item`,key:n.key},n)))));r=a.checkComponentEnabled(r,b);r.displayName=b;r.propTypes={accordionItemProps:e.shape({}),children:e.node.isRequired,className:e.string,count:e.oneOfType([e.number,e.string]),labelText:e.node.isRequired,title:e.string,truncatedListProps:e.shape({})};r.__docgenInfo={description:"A container with a label and optional count.",methods:[],displayName:"FilterPanelAccordionItem",props:{accordionItemProps:{defaultValue:{value:"{}",computed:!1},description:"Props specific to the internal `AccordionItem` component.",type:{name:"shape",value:{}},required:!1},truncatedListProps:{defaultValue:{value:"{}",computed:!1},description:"Props specific to the internal `TruncatedList` component.",type:{name:"shape",value:{}},required:!1},children:{description:"Provide the contents of the FilterPanelAccordionItem.",type:{name:"node"},required:!0},className:{description:"Optional class to be applied to the containing node.",type:{name:"string"},required:!1},count:{description:"Number to be displayed with the label.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},labelText:{description:"The label for the component.",type:{name:"node"},required:!0},title:{description:"Optional title attribute for the label.",type:{name:"string"},required:!1}}};export{o as F,r as a};
