import{e as a}from"./index-DxDX2vOa.js";import{c as C}from"./index-B_euquWE.js";import{p as f}from"./settings-0ThqPtR3.js";const s=`${f.prefix}--datagrid`,p=d=>{const g=(r,e)=>{var i,t;return a.createElement("div",{className:C(`${s}__right-align-cell-renderer`,{sortDisabled:!r.isTableSortable||((i=r==null?void 0:r.column)==null?void 0:i.disableSortBy)===!0})},(t=e==null?void 0:e.Cell)==null?void 0:t.call(e,r))},h=(r,e)=>a.createElement("div",{className:`${s}__right-align-header`},typeof e.Header=="function"?(e==null?void 0:e.Header).call(e,r):e.Header),l=r=>[...r.map(i=>({...i,Cell:i.rightAlignedColumn?t=>g(t,i):i.Cell,Header:i.rightAlignedColumn?t=>h(t,i):i.Header}))];d.visibleColumns.push(l)};export{p as u};
