import{G as N}from"./index-CQ0F2wkl.js";import{p as R,B as s,I as $}from"./settings-xiNX1vM3.js";import{C as L,M as P,a as G,b as H}from"./ComposedModal-Bp7RzMcH.js";import{D as E}from"./Dropdown-DdJe44Fy.js";import{M as h}from"./MenuItem-BnQb4tLm.js";import{M as V}from"./useWindowResize-BjsG21nm.js";import{O as F}from"./index-Bp_RdxBV.js";import{O as t}from"./OverflowMenuItem-piys-31F.js";import{T as f,a as O}from"./TableToolbarSearch-B8OdU7nA.js";import{r as m,R as e}from"./index-BwDkhjyp.js";import{a as C}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as W}from"./_storybook-styles-Du0kN-B7.js";import{D as k}from"./bucket-5-BnP2u7x5.js";import{A as j}from"./bucket-0-DyNWBZ5j.js";import{R as J}from"./bucket-14-BEt3Y4-s.js";import{F as K}from"./bucket-6-DBBo9VQm.js";const Q=()=>{const l=m.useContext(W);if(l===void 0)throw new Error("useFilterContext was used outside of its Provider");return l},i=`${R.prefix}--datagrid`,U=l=>{const{setPanelOpen:I}=Q(),{selectedFlatRows:S,setGlobalFilter:T,CustomizeColumnsButton:a,RowSizeDropdown:b,rowSizeDropdownProps:g,useDenseHeader:D,filterProps:r,getFilterFlyoutProps:M,FilterFlyout:y,data:z}=l,x=()=>{alert("Downloading...")},_=()=>{alert("refreshing...")},v="Search",B=S.length===0,c=()=>(r==null?void 0:r.variation)==="flyout"&&e.createElement(y,{...M()}),u=()=>(r==null?void 0:r.variation)==="panel"&&e.createElement($,{kind:"ghost",align:r.align,label:r.panelIconDescription,className:`${i}-filter-panel-open-button`,onClick:()=>I(o=>!o),disabled:z.length===0},e.createElement(K,null)),[d,p]=m.useState(!1),[q,A]=m.useState(window.innerWidth);m.useLayoutEffect(()=>{function o(){A(window.innerWidth)}return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]);const w=q<672,n=["Option 1","Option 2","Option 3"];return B&&(D&&D?e.createElement(f,{size:"sm"},w?e.createElement(F,{"aria-label":"Tools",size:"md",flipped:!0},e.createElement(t,{itemText:"Filter",hasDivider:!0,requireTitle:!0,onClick:()=>p(!0)}),e.createElement(t,{itemText:"Export",hasDivider:!0,requireTitle:!0}),e.createElement(t,{itemText:"Settings",hasDivider:!0,requireTitle:!0}),e.createElement(t,{itemText:"Import items",hasDivider:!0,requireTitle:!0}),e.createElement(t,{itemText:"Create",hasDivider:!0,requireTitle:!0})):e.createElement(e.Fragment,null,u(),e.createElement(s,{kind:"ghost",hasIconOnly:!0,tooltipPosition:"bottom",renderIcon:k,iconDescription:"Download CSV",onClick:x}),c(),a&&e.createElement(a,null),e.createElement(b,{...g}),e.createElement("div",{className:`${i}__toolbar-divider`},e.createElement(s,{kind:"ghost",renderIcon:j,iconDescription:"Action"},"Ghost button")))):w?e.createElement(f,null,u(),e.createElement(O,{size:"xl",id:"columnSearch",persistent:!0,placeholder:v,onChange:o=>T(o.target.value)}),c(),e.createElement(F,{"aria-label":"Tools",size:"lg",flipped:!0,renderIcon:N,className:`${i}__toolbar-menu__trigger`,menuOptionsClass:`${i}__toolbar-options`},e.createElement(t,{itemText:"Filter",hasDivider:!0,requireTitle:!0,onClick:()=>p(!0)}),e.createElement(t,{itemText:"Export",hasDivider:!0,requireTitle:!0}),e.createElement(t,{itemText:"Settings",hasDivider:!0,requireTitle:!0}),e.createElement(t,{itemText:"Import items",hasDivider:!0,requireTitle:!0}),e.createElement(t,{itemText:"Create",hasDivider:!0,requireTitle:!0})),d&&e.createElement(L,{size:"lg",open:d&&d,onClose:()=>p(!1),className:`${i}__mobile-toolbar-modal`},e.createElement(P,null,e.createElement("h4",null,"Filters")),e.createElement(G,null,e.createElement(E,{initialSelectedItem:n[2],items:n,titleText:"Label",id:"filter1"}),e.createElement(E,{initialSelectedItem:n[2],items:n,titleText:"Label",id:"filter2"}),e.createElement(E,{initialSelectedItem:n[2],items:n,titleText:"Label",id:"filter3"})),e.createElement(H,{primaryButtonText:"Apply",secondaryButtonText:"Cancel"}))):e.createElement(f,null,u(),e.createElement(O,{size:"lg",id:"columnSearch",persistent:!0,placeholder:v,onChange:o=>T(o.target.value)}),c(),e.createElement(s,{kind:"ghost",hasIconOnly:!0,tooltipPosition:"bottom",renderIcon:J,iconDescription:"Refresh",onClick:_}),e.createElement(s,{kind:"ghost",hasIconOnly:!0,tooltipPosition:"bottom",renderIcon:k,iconDescription:"Download CSV",onClick:x}),a&&e.createElement(a,null),e.createElement(b,{...g}),e.createElement(V,{label:"Primary button",className:`${i}__toolbar-options`},e.createElement(h,{label:"Option 1",onClick:C("Click on ButtonMenu Option 1")}),e.createElement(h,{label:"Option 2",onClick:C("Click on ButtonMenu Option 2")}),e.createElement(h,{label:"Option 3",onClick:C("Click on ButtonMenu Option 3")}))))};U.__docgenInfo={description:"",methods:[],displayName:"DatagridActions"};export{U as D};
