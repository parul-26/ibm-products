import{p as C,j as t}from"./settings-DEdZ0TrD.js";import{c as f}from"./floating-ui.core.mjs-LzsX8FoD.js";const a=`${C.prefix}--datagrid`,A=d=>{const g=(r,e)=>{var i,s;return t.jsx("div",{className:f(`${a}__right-align-cell-renderer`,{sortDisabled:!r.isTableSortable||((i=r==null?void 0:r.column)==null?void 0:i.disableSortBy)===!0}),children:(s=e==null?void 0:e.Cell)==null?void 0:s.call(e,r)})},h=(r,e)=>t.jsx("div",{className:`${a}__right-align-header`,children:typeof e.Header=="function"?(e==null?void 0:e.Header).call(e,r):e.Header}),l=r=>[...r.map(i=>({...i,Cell:i.rightAlignedColumn?s=>g(s,i):i.Cell,Header:i.rightAlignedColumn?s=>h(s,i):i.Header}))];d.visibleColumns.push(l)};export{A as u};
