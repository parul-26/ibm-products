import{e as i,r as w}from"./index-DxDX2vOa.js";import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as f}from"./getBatchActions-D-w17Khh.js";import{D as d,a as S,m as E,u as T}from"./_storybook-styles-9d_wHsJo.js";import{D as h}from"./DatagridActions-DrpKFboM.js";import{D}from"./DatagridPagination-DjjviSXx.js";import{A as r}from"./getArgTypes-CUsKgYxs.js";import{S as C}from"./StoryDocsPage-BNvYqhWE.js";import{u as b}from"./useExpandedRow-B8a4w8gg.js";import{u as H}from"./useSelectRows-DLIrJxdh.js";import{u as R}from"./useStickyColumn-C073EdXT.js";import{i as y}from"./settings-0ThqPtR3.js";import{a as B}from"./bucket-6-Cw3hdw1e.js";import{T as k}from"./bucket-17-BLAXVSDb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./bucket-0-DEgqxqZV.js";import"./index-B_euquWE.js";import"./index-CaMJXrh2.js";import"./devtools-BlxCaI1L.js";import"./feature-flags-BboNqy5q.js";import"./TableRow-Cz9rtho0.js";import"./index-YDq2Pj7F.js";import"./wrapComponent-cYcURnZ2.js";import"./TableToolbar-Bwrml3P6.js";import"./Text-9AedOkae.js";import"./ErrorEmptyState-B2Gtmb51.js";import"./Link-Czg4mzd7.js";import"./EmptyState-BxaTycZJ.js";import"./props-helper-DmbAnr2a.js";import"./EmptyStateV2-BhYrhbvn.js";import"./iframe-Bz0rEyEi.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-BApUkVB6.js";import"./events-OVwOsPzJ.js";import"./NoDataEmptyState-ByzS-rjr.js";import"./NoDataIllustration-T0RkOEw_.js";import"./NotFoundEmptyState-DtSkTXLH.js";import"./NotFoundIllustration-CIDvuf0u.js";import"./index.esm-CsFWLHj3.js";import"./uuidv4-BQrI85uz.js";import"./usePreviousValue-CLgSY5iR.js";import"./useResizeObserver-DUmvKY5Q.js";import"./useIsomorphicEffect-BPCmBl9Y.js";import"./MenuItem-DWuSrVzG.js";import"./useControllableState-BEU9Cr15.js";import"./useAttachedMenu-CNodkuzW.js";import"./bucket-2-BDpMY3Ys.js";import"./useWindowResize-v9xhRqmX.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-DYXyeV2p.js";import"./useClickOutside-BZUjepjm.js";import"./AccordionItem-C6Zmne57.js";import"./Search-Cwr2QiaX.js";import"./FormContext-Dj7olUH1.js";import"./bucket-14-C1Z-80MS.js";import"./index-B1YmXwfC.js";import"./LayerContext-BLFdRioi.js";import"./motionConstants-BwVwxeFP.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-DIWO13co.js";import"./index-DkUr2NOz.js";import"./ActionSet-0Lk-L5n-.js";import"./ButtonSet-epghEKVn.js";import"./InlineLoading-CIMtbZ0Q.js";import"./Checkbox-Ctty0aFL.js";import"./bucket-18-Dvh787Y8.js";import"./DatePicker-DGWQ9G1M.js";import"./bucket-1-DID1vhVO.js";import"./Dropdown-DnYB61C4.js";import"./index-D4Cc84yY.js";import"./FormGroup-BHxKds7u.js";import"./NumberInput-B5Nr-RgL.js";import"./useNormalizedInputProps-BaY27oQV.js";import"./bucket-16-BwEHvyin.js";import"./RadioButton-wK6B5koV.js";import"./RadioButtonGroup-BFKhdgSb.js";import"./MultiSelect-Dg3yFEyH.js";import"./toNumber-CjkmaA9J.js";import"./TagSet-Cq9F0ScF.js";import"./Tag-CQrPIH3H.js";import"./DefinitionTooltip-CFcrL78F.js";import"./DismissibleTag-g9t9_3jR.js";import"./ComposedModal-BsLCo1xi.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-ChZuRP4g.js";import"./usePortalTarget-BfZpr1XQ.js";import"./OperationalTag-BJymOJkN.js";import"./SkeletonText-Bkj60K0L.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-DkxCE0a1.js";import"./bucket-7-D9w4nlSg.js";import"./index-BK04RsGV.js";import"./bucket-12-BnoODLmv.js";import"./OverflowMenuItem-B2qt5S-L.js";import"./TableToolbarSearch-Bm9UckLj.js";import"./bucket-5-nfnHYhtc.js";import"./Select-Jc5L7ymT.js";import"./SelectItem-CR-Pl9Oy.js";import"./index-6asNl-3l.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./story-helper-BvAgcfdm.js";import"./useFocusRowExpander-gm9MWuS_.js";import"./TableSelectRow-BDIpowsj.js";const P=()=>y.prefix,l=()=>i.createElement(C,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports expandable rows with the use of the `useExpandedRow` hook.",source:{language:"jsx",code:`
import { Datagrid, useDatagrid, useExpandedRow } from '@carbon/ibm-products';

const App = () => {
  const columns = React.useMemo(() => defaultHeader, []); // These are the columns that will be used by the datagrid
  const [data] = useState(makeData(10)); // This is the data that will be rendered by the datagrid

  const expansionRenderer = ({ row }) => {
    return <div>Content for row index: {row.id}</div>;
  };

  const datagridState = useDatagrid(
    {
      columns,
      data,
      ExpandedRowContentComponent: expansionRenderer,
      expanderButtonTitleExpanded: 'Collapse row',
      expanderButtonTitleCollapsed: 'Expand row',
    },
    useExpandedRow
  );

  return <Datagrid datagridState={datagridState} />;
};
          `}}]});l.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Gt={title:"Deprecated/Datagrid/Datagrid/ExpandableRow",component:d,tags:["autodocs"],parameters:{styles:S,docs:{page:l},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},A=[{Header:"Row Index",accessor:(e,o)=>o,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:50},{Header:"Visits",accessor:"visits",width:60},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],a={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:e=>{console.log("row size changed to: ",e)},rowActions:[{id:"edit",itemText:"Edit",icon:B,onClick:p("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:k,isDelete:!0,onClick:p("Clicked row action: delete")}],expandedContentHeight:96,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"},v=({row:e})=>{const o=P();return i.createElement("div",{className:`${o}__test-class-with-prefix-hook`},"Content for row index: ",e.id)},N=({...e})=>{const o=i.useMemo(()=>[...A],[]),[c]=w.useState(E(10)),u=T({columns:o,data:c,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,ExpandedRowContentComponent:v,tags:["autodocs"],batchActions:!0,toolbarBatchActions:f(),onRowExpand:(x,g)=>console.log(x,g),...e.defaultGridProps},R,H,b);return i.createElement(d,{datagridState:u})},_=({...e})=>i.createElement(N,{defaultGridProps:{...e}}),z={gridTitle:a.gridTitle,gridDescription:a.gridDescription,expandedContentHeight:a.expandedContentHeight,expanderButtonTitleExpanded:a.expanderButtonTitleExpanded,expanderButtonTitleCollapsed:a.expanderButtonTitleCollapsed},G="With expandable row",t=_.bind({});t.storyName=G;t.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,expandedContentHeight:r.expandedContentHeight,expanderButtonTitleExpanded:r.expanderButtonTitleExpanded,expanderButtonTitleCollapsed:r.expanderButtonTitleCollapsed};t.args={...z};var s,n,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
  ...args
}) => {
  return <ExpandedRows defaultGridProps={{
    ...args
  }} />;
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const It=["ExpandableRowStory"];export{t as ExpandableRowStory,It as __namedExportsOrder,Gt as default};
