import{r as c,R as r}from"./index-BwDkhjyp.js";import{P as o}from"./index-Dk74W0Oi.js";import{b as j,c as p}from"./index-C8rbkH0g.js";import{u as P}from"./useResizeObserver-CYrpFlRY.js";import{B as z,a as h}from"./BreadcrumbItem-O8rb_Upx.js";import{L as G}from"./Link-DedcumfW.js";import{O as S,a as J}from"./index-7ofX8jt7.js";import{p as x,T as A}from"./settings-DI4GKhuL.js";import{u as Q}from"./uuidv4-BQrI85uz.js";import"./props-helper-DbXaHz23.js";import{O as W}from"./bucket-12-BdJxyMSm.js";import{T as U}from"./TooltipTrigger-DwgziBmX.js";import{a as X}from"./bucket-0-DwwVbvd9.js";const l=`${x.prefix}--breadcrumb-with-overflow`,M="BreadcrumbWithOverflow";let b=({breadcrumbs:t,className:L,label:T,maxVisible:g,noTrailingSlash:D,overflowAriaLabel:y,overflowTooltipAlign:F,...H})=>{const I=j(),[w,$]=c.useState(3),[q,O]=c.useState([]),v=c.useRef(null),_=c.useRef(null),E=c.useRef(Q()),[N,K]=c.useState([]),V=({overflowItems:a})=>r.createElement(h,{key:`breadcrumb-overflow-${E.current}`},r.createElement(S,{align:F,"aria-label":y,iconDescription:y,renderIcon:e=>r.createElement(W,{size:32,...e}),className:`${l}__overflow-menu`,menuOptionsClass:`${l}__overflow-menu-options`},a.map((e,i)=>r.createElement(J,{key:`breadcrumb-overflow-menu-item-${E.current}-${i}`,href:e.props.href,onClick:e.props.onClick,itemText:e.props.children}))));c.useEffect(()=>{K(r.createElement("div",{className:`${l}__breadcrumb-container ${l}__breadcrumb-container--hidden`,"aria-hidden":!0,ref:_},r.createElement(z,{"aria-label":`${T}-hidden`},r.createElement(h,{key:`${l}-hidden-overflow-${E}`},r.createElement(S,{"aria-label":y,renderIcon:a=>r.createElement(W,{size:32,...a})})),t.map(({label:a,key:e,title:i,id:u,shortTitle:s,...f})=>r.createElement(h,{key:e,...f,"data-original-id":u,title:i??a},a)))))},[t,T,y]),c.useEffect(()=>{if(t.length===0){O([]);return}const a=t.map(({className:u,key:s,label:f,shortTitle:m,title:d,...B},C)=>r.createElement(h,{key:s,className:C>0||w>1?p([u,`${l}__displayed-breadcrumb`]):u,title:C+1===t.length?d:null,...B},m||f)),e=w>1?1:0;let i=a.splice(e,t.length-w);i.length&&a.splice(e,0,r.createElement(V,{overflowItems:i,key:`displayed-breadcrumb-${E}-overflow`})),O(a)},[t,w]);const R=()=>{if(!v.current)return;const a=(e,i)=>i===0?e-1:i===1?1:e-i;if(g<=1)$(1);else{let e=0,i=v.current.offsetWidth;if(_.current){const u=_.current.querySelectorAll(`.${I}--breadcrumb-item`),s=[];for(let m of u){const d=window?window.getComputedStyle(u[0]):null,B=d?parseFloat(d.marginLeft||0,10)+parseFloat(d.marginRight||0,10):0;s.push(m.offsetWidth+B)}let f=s[0];for(let m=0;m<s.length-1;m++){const d=a(s.length,m);if(i>=s[d])i-=s[d],e+=1;else break}if(e<s.length-1)for(;e>0&&i<f;){e-=1;const m=a(s.length,e);i+=s[m]}}e<=1?$(1):$(g?Math.min(e,g):e)}};c.useEffect(()=>{R()},[N,g]);const k=()=>{R()};let n=t[t.length-1];return n.isCurrentPage&&(n=t[t.length-2]),P(_,k),P(v,k),r.createElement("div",{className:p(l,L,{[`${l}__with-items`]:q.length>1}),ref:v},r.createElement("div",{className:p([`${l}__space`])},N,r.createElement(z,{"aria-label":T,className:p(`${l}__breadcrumb-container`,{[`${l}__breadcrumb-container-with-items`]:q.length>1}),noTrailingSlash:D,...H},(n==null?void 0:n.href)&&((n==null?void 0:n.label)||(n==null?void 0:n.title))&&r.createElement(h,{className:p(`${l}__breadcrumb-back`)},r.createElement(G,{href:n.href,renderIcon:()=>r.createElement(A,{align:"right",label:n.title||n.label,className:`${l}__back__button ${I}--icon-tooltip`},r.createElement(U,null,r.createElement(X,{size:16})))})),q)))};b=x.checkComponentEnabled(b,M);b.propTypes={breadcrumbs:o.arrayOf(o.shape({href:o.string,isCurrentPage:o.bool,key:o.string.isRequired,label:o.node,shortTitle:o.string,title:o.string.isRequired.if(({label:t})=>typeof t!="string")})),className:o.string,label:o.string,maxVisible:o.number,noTrailingSlash:o.bool,overflowAriaLabel:o.string.isRequired.if(({breadcrumbs:t})=>t.length>1),overflowTooltipAlign:A.propTypes.align};b.displayName=M;b.__docgenInfo={description:"The BreadcrumbWithOverflow is used internally by the PageHeader to wrap BreadcrumbItems.",methods:[],displayName:"BreadcrumbWithOverflow",props:{breadcrumbs:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{href:{name:"string",description:"Optional string representing the link location for the BreadcrumbItem",required:!1},isCurrentPage:{name:"bool",description:"Provide if this breadcrumb item represents the current page",required:!1},key:{name:"string",description:"Key required to render array efficiently",required:!0},label:{name:"node",description:"Pass in content that will be inside of the BreadcrumbItem",required:!1},shortTitle:{name:"string",description:"An optional title label for extra long breadcrumb",required:!1},title:{name:"string",description:"A string based alternative to the children, required only if children is not of type string",required:!0}}}},required:!1},className:{description:"className",type:{name:"string"},required:!1},label:{description:"Label for the Breadcrumb component",type:{name:"string"},required:!1},maxVisible:{description:"maxVisible: maximum visible breadcrumb-items before overflow is used (values less than 1 are treated as 1)",type:{name:"number"},required:!1},noTrailingSlash:{description:"noTrailing slash - same as for Carbon",type:{name:"bool"},required:!1},overflowAriaLabel:{description:"overflowAriaLabel label for open close button overflow used for breadcrumb items that do not fit.",type:{name:"string"},required:!0},overflowTooltipAlign:{description:"overflowTooltipAlign: align tooltip position",type:{name:"custom",raw:"Tooltip.propTypes.align"},required:!1}}};export{b as B};
