import{r as g,R as n}from"./index-BwDkhjyp.js";import{a as B}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as L,D,a as ae,m as N,u as z}from"./_storybook-styles-TnmT4tvy.js";import{D as _}from"./DatagridActions-Ch7iIHec.js";import{A as b}from"./getArgTypes-CUsKgYxs.js";import{S as ie}from"./StoryDocsPage-D0IWKjO6.js";import{c as k,K as ne}from"./index-C8rbkH0g.js";import{p as oe,c as U}from"./settings-DI4GKhuL.js";import{u as de}from"./useFocusRowExpander-9BajiKyr.js";import{u as pe}from"./useSelectRows-D7WO0dG7.js";import{a as ce}from"./bucket-6-D8gTeSgt.js";import{T as me}from"./bucket-17-7Xhb4oz5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-Dk74W0Oi.js";import"./devtools-BXUoVCj7.js";import"./feature-flags-o_Dvbe7r.js";import"./TableRow-BFdzMHLl.js";import"./index-7nuGG3yx.js";import"./wrapComponent-BxtqFmr4.js";import"./bucket-0-DwwVbvd9.js";import"./TableToolbar-D-NC65Nl.js";import"./Text-DZylbEPL.js";import"./ErrorEmptyState-XPpcPl0Q.js";import"./Link-DedcumfW.js";import"./EmptyState-fWaEHUgL.js";import"./props-helper-DbXaHz23.js";import"./EmptyStateV2-Bquhsl-W.js";import"./iframe-B6oKv5UQ.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-DI2jyblW.js";import"./uuidv4-BQrI85uz.js";import"./index-BONylQH5.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./NoDataEmptyState-DlgcftZC.js";import"./NoDataIllustration-Bw0Fy4db.js";import"./NotFoundEmptyState-Cx8dDNcp.js";import"./NotFoundIllustration-AJnix7kW.js";import"./index.esm-C_vKi51W.js";import"./usePreviousValue-Cw-zRxyE.js";import"./extends-CCbyfPlC.js";import"./index-BpGm7QiY.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./useResizeObserver-CYrpFlRY.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./useWindowResize-BdMD_Om7.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-DeIo1fst.js";import"./bucket-2-BgPkDhJt.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-AYryEaYR.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-D_xDq4QW.js";import"./Search-C2YVmAvL.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-CF5C4Sen.js";import"./index-DE-lHwKS.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-CR5hPmRc.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./ActionSet-DimiiQBT.js";import"./ButtonSet-BECKiWsh.js";import"./InlineLoading-CdHnoZn4.js";import"./Checkbox-BYXaHiKq.js";import"./bucket-18--U95jA7N.js";import"./DatePicker-HJxF1OG4.js";import"./bucket-1-DIhOpOgY.js";import"./Dropdown-BuzCkvAO.js";import"./index-Bo0ibsxA.js";import"./index-DcAOwtUU.js";import"./FormGroup-U0nC7yo_.js";import"./NumberInput-VX9OGJ6-.js";import"./useNormalizedInputProps-BXoiUTEC.js";import"./bucket-16-37j4Z-9c.js";import"./RadioButton-DGsh84ks.js";import"./RadioButtonGroup-BWB0dd1W.js";import"./MultiSelect-BkfUY6Ly.js";import"./debounce-CI22LTdx.js";import"./toNumber-DVQITUtX.js";import"./TagSet-CtFN-Bdb.js";import"./Tag-CUZixLTe.js";import"./DefinitionTooltip-CS-ERqGw.js";import"./DismissibleTag-B1szOH83.js";import"./ComposedModal-B4D2akSI.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-BBe48k1H.js";import"./usePortalTarget-2qC4C0m3.js";import"./OperationalTag-BJdzIQOb.js";import"./SkeletonText-D9T29KXc.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-D9SQ_G7F.js";import"./bucket-7-E__9yUMB.js";import"./index-7ofX8jt7.js";import"./bucket-12-BdJxyMSm.js";import"./TableToolbarSearch-CUDUfOvP.js";import"./bucket-5-CcWS0Cgm.js";import"./story-helper-6_fmjwZ-.js";import"./TableSelectRow-Cp0La-0d.js";const x=`${oe.prefix}--datagrid`,le=e=>{const i=g.useRef(void 0),a=g.useRef(void 0),d=m=>{i.current=m};de({instance:i==null?void 0:i.current,lastExpandedRowIndex:a==null?void 0:a.current,blockClass:x,activeElement:typeof document<"u"&&document.activeElement});const c=(m,u)=>{const{getAsyncSubRows:l,dispatch:s,state:o}=u.instance||{},t=!!o.dynamicRowSkeleton;return[{id:"expander",Cell:({row:r})=>{const E={...r.getToggleRowExpandedProps(),disabled:l&&t,onClick:async I=>{if(I.stopPropagation(),r.toggleRowExpanded(),a.current=r.id,!r.isExpanded)try{L({dispatch:s,status:"start",rowId:r.id,depth:r.depth,index:r.index}),l&&await(l==null?void 0:l(r)),L({dispatch:s,status:"finish",rowId:r.id})}catch(re){console.log({error:re})}}},{expanderButtonTitleExpanded:P="Collapse row",expanderButtonTitleCollapsed:v="Expand row"}=(i==null?void 0:i.current)||{},H=r.isExpanded?P:v;return r.canExpand||l?n.createElement("button",{type:"button","aria-label":H,className:k(`${x}__row-expander`,`${U.prefix}--btn`,`${U.prefix}--btn--ghost`),...E},n.createElement(ne,{className:k(`${x}__expander-icon`,{[`${x}__expander-icon--not-open`]:!r.isExpanded,[`${x}__expander-icon--open`]:r.isExpanded})})):null},width:48,disableResizing:!0,disableSortBy:!0,Header:""},...m]};e.visibleColumns.push(c),e.useInstance.push(d)},W=`${oe.prefix}--datagrid`,G=e=>{le(e);const i=a=>{g.useEffect(()=>{const{rows:s}=a,o=s.filter(t=>{var p;return(p=t==null?void 0:t.original)==null?void 0:p.defaultExpanded});o!=null&&o.length&&o.map(t=>{var p;if(!(t!=null&&t.isExpanded)&&!(t!=null&&t.hasExpanded)){(p=t==null?void 0:t.toggleRowExpanded)==null||p.call(t),t.hasExpanded=!0;return}})},[a,a.rows]),g.useEffect(()=>{const{rows:s,initialState:o}=a,{expandedRowIds:t}=o;t&&Object.keys(t).forEach(p=>{var E,P;const r=s.filter(v=>{var H,I;return v.id.toString()===p.toString()||((I=(H=v.original)==null?void 0:H.id)==null?void 0:I.toString())===p.toString()});(r.length&&p.toString()===r[0].id.toString()||r.length&&p.toString()===((P=(E=r[0].original)==null?void 0:E.id)==null?void 0:P.toString()))&&r[0].toggleRowExpanded()})},[a]);const d=24,c=(s,{row:o})=>[s,{className:k({[`${W}__carbon-nested-row`]:o.depth>0,[`${W}__carbon-row-expanded`]:o.isExpanded})}],m=(s,{row:o})=>[s,{style:{paddingLeft:`${o.depth>1?d*2+(o.depth-1)*(d+d/3):o.depth===1?d*2:0}px`}}],u=s=>32*s+16,l=(s,{cell:o,instance:t})=>{const p=t.columns.findIndex(r=>r.id===o.column.id)===0;return[s,{style:{marginRight:p&&o.row.depth>0&&parseInt(s.style.width,10)<=u(o.row.depth)+50?`${parseInt(s.style.width,10)-(u(o.row.depth)+50)}px`:"",width:p&&o.row.depth>0?parseInt(s.style.width,10)-u(o.row.depth):s.style.width}}]};Object.assign(a,{withNestedRows:!0}),e.getRowProps.push(c),e.getRowProps.push(m),e.getCellProps.push(l)};e.useInstance.push(i)},T={gridTitle:b.gridTitle,gridDescription:b.gridDescription,useDenseHeader:b.useDenseHeader,rowSize:b.rowSize,rowSizes:b.rowSizes,onRowSizeChange:b.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"},xo={title:"IBM Products/Components/Datagrid/NestedRows",component:D,tags:["autodocs"],parameters:{styles:ae,docs:{page:()=>n.createElement(ie,{omitCodedExample:!0,blocks:[{title:"Nested rows",description:"Nested rows allow disclosing content in data tables progressively by displaying primary data first (parent row) and enabling users to navigate secondary information levels (child rows).\n- Include the `useNestedRows` hook\n- Make sure that any row you want to have nested rows in your data has a `subRows` property with an array of objects for each nested row. The row expander will be included by default as long as the `useNestedRows` hook is provided and it is detected that a row has `subRows` within it.\n          ",source:{code:`
const datagridState = useDatagrid(
  {
    columns,
    data,
    expanderButtonTitleExpanded: 'Collapse row',
    expanderButtonTitleCollapsed: 'Expand row',
  },
  useNestedRows
);

return <Datagrid datagridState={datagridState} />;
            `}}]})},layout:"padded"},argTypes:{featureFlags:{table:{disable:!0}}}},$=[{Header:"Row Index",accessor:(e,i)=>i,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:50},{Header:"Visits",accessor:"visits",width:60},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],f={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:e=>{console.log("row size changed to: ",e)},rowActions:[{id:"edit",itemText:"Edit",icon:ce,onClick:B("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:me,isDelete:!0,onClick:B("Clicked row action: delete")}]},C={gridTitle:f.gridTitle,gridDescription:f.gridDescription,useDenseHeader:f.useDenseHeader,rowSize:f.rowSize,rowSizes:f.rowSizes,onRowSizeChange:f.onRowSizeChange},ue=({...e})=>{const i=n.useMemo(()=>$,[]),[a]=g.useState(N(10,2)),d=z({columns:i,data:a,DatagridActions:_,autoResetExpanded:!1,autoResetGlobalFilter:!1,...e.defaultGridProps,getSubRows:c=>c.subRows},G);return n.createElement(D,{datagridState:d})},ge=({...e})=>n.createElement(ue,{defaultGridProps:{...e}}),we="With single-level nested rows",w=ge.bind({});w.storyName=we;w.argTypes={...T};w.args={...C,featureFlags:["Datagrid.useNestedRows"]};const Se=({...e})=>{const i=n.useMemo(()=>$,[]),[a]=g.useState(N(10,5,2,2,{id:"testing-user-provided-id"})),d=z({columns:i,data:a,DatagridActions:_,...e.defaultGridProps,getSubRows:c=>c.subRows},G);return n.createElement(D,{datagridState:{...d}})},se=({...e})=>n.createElement(Se,{defaultGridProps:{...e}}),ye="With nested rows",S=se.bind({});S.storyName=ye;S.argTypes={...T};S.args={...C};const he=({...e})=>{const i=n.useMemo(()=>$,[]),[a]=g.useState(N(10,5,2,2)),d=z({columns:i,data:a,DatagridActions:_,...e.defaultGridProps,getSubRows:c=>c.subRows},G,pe);return n.createElement(D,{datagridState:{...d}})},Re=({...e})=>n.createElement(he,{defaultGridProps:{...e}}),be="With selectable nested rows",y=Re.bind({});y.storyName=be;y.argTypes={...T};y.args={...C};const fe="With initially expanded nested rows",h=se.bind({});h.storyName=fe;h.argTypes={...T};h.args={...C,initialState:{expandedRowIds:{"testing-user-provided-id__1":!0,3:!0}}};const xe=({...e})=>{const i=n.useMemo(()=>$,[]),[a,d]=g.useState(N(10)),c=z({columns:i,data:a,DatagridActions:_,autoResetExpanded:!1,autoResetGlobalFilter:!1,...e.defaultGridProps,getAsyncSubRows:async m=>{m.subRows.length||await new Promise(u=>{setTimeout(()=>{if(m.depth>0)return u();const l=N(2,{id:"test-id"}),s=[...a],o=s.findIndex(t=>t.id===m.original.id);s[o].subRows=l,d(s),u()},1e3)})},getSubRows:m=>m.subRows},G);return n.createElement(D,{datagridState:c})},Ne=({...e})=>n.createElement(xe,{defaultGridProps:{...e}}),De="Dynamic nested rows",R=Ne.bind({});R.storyName=De;R.argTypes={...T};R.args={...C};var A,F,M;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`({
  ...args
}) => {
  return <SingleLevelNestedRows defaultGridProps={{
    ...args
  }} />;
}`,...(M=(F=w.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var j,O,K;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`({
  ...args
}) => {
  return <NestedRows defaultGridProps={{
    ...args
  }} />;
}`,...(K=(O=S.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var V,Y,q;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`({
  ...args
}) => {
  return <SelectableNestedRows defaultGridProps={{
    ...args
  }} />;
}`,...(q=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var J,Q,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`({
  ...args
}) => {
  return <NestedRows defaultGridProps={{
    ...args
  }} />;
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  ...args
}) => {
  return <DynamicNestedRows defaultGridProps={{
    ...args
  }} />;
}`,...(te=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const No=["SingleLevelNestedRowsUsageStory","NestedRowsUsageStory","SelectableNestedRowsUsageStory","NestedRowsInitialUsageStory","DynamicNestedRowStory"];export{R as DynamicNestedRowStory,h as NestedRowsInitialUsageStory,S as NestedRowsUsageStory,y as SelectableNestedRowsUsageStory,w as SingleLevelNestedRowsUsageStory,No as __namedExportsOrder,xo as default};
