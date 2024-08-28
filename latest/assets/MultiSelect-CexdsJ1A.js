import{B as O,a as st,b as lt,u as ot,f as rt,s as it,e as at,m as E,c as k,_ as K,d as ct,D as he,E as dt,S as ut,G as mt,k as pt}from"./floating-ui.react-BgNs4SA8.js";import{u as ge,L as M,a as ft}from"./index-C7XzgV7l.js";import{i as J}from"./index-CfyPTyT-.js";import{P as t}from"./index-Dk74W0Oi.js";import{r as c,R as i}from"./index-BwDkhjyp.js";import{m as ht}from"./mergeRefs-CTUecegF.js";import{F as gt}from"./FormContext-C7kRVu4t.js";import{n as It}from"./settings-DDDiKwEV.js";import{W as bt,a as xt}from"./bucket-18-D_XNNF5i.js";const St={compareItems:t.func,sortItems:t.func},yt=(o,a,s)=>{let{locale:r}=s;return o.localeCompare(a,r,{numeric:!0})},Ct=(o,a)=>{let{selectedItems:s=[],itemToString:r,compareItems:u,locale:d="en"}=a;return o.sort((m,y)=>{const S=s.includes(m),p=s.includes(y);return S&&!p?-1:p&&!S?1:u(r(m),r(y),{locale:d})})};function V(o){let{isControlled:a,isMounted:s,onChangeHandlerControlled:r,onChangeHandlerUncontrolled:u,selectedItems:d}=o;a?s&&r&&r({selectedItems:d}):u(d)}function wt(o){let{disabled:a,onChange:s,initialSelectedItems:r=[],selectedItems:u}=o;const d=c.useRef(!1),m=c.useRef(s),[y,S]=c.useState(r),p=!!u,h=p?u:y,L=c.useCallback(B=>{if(a)return;let f;h.forEach((U,z)=>{J(U,B)&&(f=z)});let _;if(f===void 0){_=h.concat(B),V({isControlled:p,isMounted:d.current,onChangeHandlerControlled:m.current,onChangeHandlerUncontrolled:S,selectedItems:_});return}_=Ie(h,f),V({isControlled:p,isMounted:d.current,onChangeHandlerControlled:m.current,onChangeHandlerUncontrolled:S,selectedItems:_})},[a,p,h]),A=c.useCallback(()=>{a||V({isControlled:p,isMounted:d.current,onChangeHandlerControlled:m.current,onChangeHandlerUncontrolled:S,selectedItems:[]})},[a,p]);return c.useEffect(()=>{m.current=s},[s]),c.useEffect(()=>{d.current&&m.current&&!p&&m.current({selectedItems:h})},[p,h]),c.useEffect(()=>(d.current=!0,()=>{d.current=!1}),[]),{selectedItems:h,onItemChange:L,clearSelection:A}}class _t extends i.Component{constructor(a){super(a),O(this,"internalSetState",(s,r)=>this.setState(s,()=>{r&&r(),this.props.onChange&&this.props.onChange(this.state)})),O(this,"handleClearSelection",()=>{this.props.disabled||this.internalSetState({selectedItems:[]})}),O(this,"handleSelectItem",s=>{this.internalSetState(r=>({selectedItems:r.selectedItems.concat(s)}))}),O(this,"handleRemoveItem",s=>{this.internalSetState(r=>({selectedItems:Ie(r.selectedItems,s)}))}),O(this,"handleOnItemChange",s=>{if(this.props.disabled)return;const{selectedItems:r}=this.state;let u;if(r.forEach((d,m)=>{J(d,s)&&(u=m)}),u===void 0){this.handleSelectItem(s);return}this.handleRemoveItem(u)}),this.state={selectedItems:a.initialSelectedItems}}render(){const{children:a,render:s}=this.props,{selectedItems:r}=this.state,u={selectedItems:r,onItemChange:this.handleOnItemChange,clearSelection:this.handleClearSelection};return s!==void 0?s(u):a!==void 0?a(u):null}}O(_t,"propTypes",{children:t.func,disabled:t.bool,initialSelectedItems:t.array.isRequired,onChange:t.func,render:t.func});const Ie=(o,a)=>{const s=o.slice();return s.splice(a,1),s},{ItemClick:vt,ToggleButtonBlur:$t,ToggleButtonKeyDownArrowDown:Tt,ToggleButtonKeyDownArrowUp:Et,ToggleButtonKeyDownEnter:Ot,ToggleButtonKeyDownEscape:Dt,ToggleButtonKeyDownSpaceButton:Pt,ItemMouseMove:kt,MenuMouseLeave:Mt,ToggleButtonClick:At,ToggleButtonKeyDownPageDown:Bt,ToggleButtonKeyDownPageUp:Ft,FunctionSetHighlightedIndex:Nt}=ge.stateChangeTypes,Rt=o=>typeof o=="string"?o:typeof o=="number"?`${o}`:o!==null&&typeof o=="object"&&"label"in o&&typeof o.label=="string"?o.label:"",be=i.forwardRef((o,a)=>{var fe;let{autoAlign:s=!1,className:r,id:u,items:d,itemToElement:m,itemToString:y=Rt,titleText:S=!1,hideLabel:p,helperText:h,label:L,type:A="default",size:B,disabled:f=!1,initialSelectedItems:_=[],sortItems:U=Ct,compareItems:z=yt,clearSelectionText:xe="To clear selection, press Delete or Backspace",clearAnnouncement:Se="all items have been cleared",clearSelectionDescription:ye="Total items selected: ",light:Ce,invalid:I,invalidText:we,warn:F,warnText:_e,useTitleInItem:ve,translateWithId:Q,downshiftProps:$e,open:v=!1,selectionFeedback:X="top-after-reopen",onChange:Te,onMenuChange:Y,direction:Z="bottom",selectedItems:Ee,readOnly:D,locale:Oe="en",slug:N}=o;const n=st(),{isFluid:R}=c.useContext(gt),ee=lt(),[De,te]=c.useState(!1),[ne,se]=c.useState(!1),[b,Pe]=c.useState(v||!1),[ke,Me]=c.useState(v),[Ae,Be]=c.useState([]),[Fe,le]=c.useState(!1),{selectedItems:W,onItemChange:oe,clearSelection:re}=wt({disabled:f,initialSelectedItems:_,onChange:Te,selectedItems:Ee}),{refs:P,floatingStyles:j,middlewareData:Ne}=ot(s?{placement:Z,strategy:"fixed",middleware:[rt({crossAxis:!1}),it({apply(e){let{rects:g,elements:l}=e;Object.assign(l.floating.style,{width:`${g.reference.width}px`})}})],whileElementsMounted:at}:{});c.useLayoutEffect(()=>{s&&Object.keys(j).forEach(e=>{P.floating.current&&(P.floating.current.style[e]=j[e])})},[s,j,P.floating,Ne,v]);const ie=c.useMemo(()=>d.filter(e=>{if(typeof e=="object"&&e!==null){for(const g in e)if(Object.hasOwn(e,g)&&e[g]===void 0)return!1}return!0}),[d]),Re={stateReducer:Xe,isOpen:b,itemToString:e=>Array.isArray(e)&&e.map(function(g){return y(g)}).join(", ")||"",selectedItem:W,items:ie,isItemDisabled(e,g){return e.disabled},...$e},{getToggleButtonProps:He,getLabelProps:Ke,getMenuProps:Le,getItemProps:Ue,selectedItem:ze,highlightedIndex:We,setHighlightedIndex:ae}=ge(Re),ce=He({onFocus:()=>{se(!0)},onBlur:()=>{se(!1)},onKeyDown:e=>{f||((E(e,he)||E(e,dt))&&!b&&(re(),e.stopPropagation()),!b&&E(e,he)&&x.length>0&&le(!0),(E(e,ut)||E(e,mt)||E(e,pt))&&!b&&(ae(0),le(!1),H(!0)))}}),q=ht(ce.ref,a),x=ze,H=e=>{Pe(e),Y&&Y(e)};ke!==v&&(H(v),Me(v));const w=A==="inline",de=!I&&F,je=k(`${n}--multi-select__wrapper`,`${n}--list-box__wrapper`,r,{[`${n}--multi-select__wrapper--inline`]:w,[`${n}--list-box__wrapper--inline`]:w,[`${n}--multi-select__wrapper--inline--invalid`]:w&&I,[`${n}--list-box__wrapper--inline--invalid`]:w&&I,[`${n}--list-box__wrapper--fluid--invalid`]:R&&I,[`${n}--list-box__wrapper--fluid--focus`]:!b&&R&&De,[`${n}--list-box__wrapper--slug`]:N}),qe=k(`${n}--label`,{[`${n}--label--disabled`]:f,[`${n}--visually-hidden`]:p}),ue=h?`multiselect-helper-text-${ee}`:void 0,Ge=`multiselect-field-label-${ee}`,Ve=k(`${n}--form__helper-text`,{[`${n}--form__helper-text--disabled`]:f}),Je=k(`${n}--multi-select`,{[`${n}--multi-select--invalid`]:I,[`${n}--multi-select--invalid--focused`]:I&&ne,[`${n}--multi-select--warning`]:de,[`${n}--multi-select--inline`]:w,[`${n}--multi-select--selected`]:x&&x.length>0,[`${n}--list-box--up`]:Z==="top",[`${n}--multi-select--readonly`]:D}),Qe=m,G={selectedItems:W,itemToString:y,compareItems:z,locale:Oe};X==="fixed"?G.selectedItems=[]:X==="top-after-reopen"&&(G.selectedItems=Ae);function Xe(e,g){const{changes:l,props:C,type:$}=g,{highlightedIndex:T}=l;switch(l.isOpen&&!b&&Be(W),$){case Pt:case Ot:if(l.selectedItem===void 0||Array.isArray(l.selectedItem))break;return oe(l.selectedItem),{...l,highlightedIndex:e.highlightedIndex};case $t:case Dt:H(!1);break;case At:return H(l.isOpen||!1),{...l,highlightedIndex:0};case vt:return ae(l.selectedItem),oe(l.selectedItem),{...l,highlightedIndex:e.highlightedIndex};case Mt:return{...l,highlightedIndex:e.highlightedIndex};case Nt:return b?{...l,highlightedIndex:C.items.indexOf(T)}:{...l,highlightedIndex:0};case Tt:case Et:case Bt:case Ft:if(T>-1){const nt=document.querySelectorAll(`li.${n}--list-box__menu-item[role="option"]`);C.scrollIntoView(nt[T])}return T===-1?{...l,highlightedIndex:0}:l;case kt:return{...l,highlightedIndex:e.highlightedIndex}}return l}const Ye=k(`${n}--list-box__field--wrapper`,{[`${n}--list-box__field--wrapper--input-focused`]:ne}),me=e=>{e.target.classList.contains(`${n}--tag__close-icon`)?te(!1):te(e.type==="focus")},Ze=D?{onClick:e=>{e.preventDefault(),q.current!==void 0&&q.current.focus()},onKeyDown:e=>{["ArrowDown","ArrowUp"," ","Enter"].includes(e.key)&&e.preventDefault()}}:{};let pe;N&&((fe=N.type)==null?void 0:fe.displayName)==="Slug"&&(pe=i.cloneElement(N,{size:"mini"}));const et=x.length>0&&x.map(e=>e==null?void 0:e.text),tt=c.useMemo(()=>Le({ref:s?P.setFloating:null}),[s]);return i.createElement("div",{className:je},i.createElement("label",K({className:qe},Ke()),S&&S,x.length>0&&i.createElement("span",{className:`${n}--visually-hidden`},ye," ",x.length," ",et,",",xe)),i.createElement(M,{onFocus:R?me:void 0,onBlur:R?me:void 0,type:A,size:B,className:Je,disabled:f,light:Ce,invalid:I,invalidText:we,warn:F,warnText:_e,isOpen:b,id:u},I&&i.createElement(bt,{className:`${n}--list-box__invalid-icon`}),de&&i.createElement(xt,{className:`${n}--list-box__invalid-icon ${n}--list-box__invalid-icon--warning`}),i.createElement("div",{className:Ye,ref:s?P.setReference:null},x.length>0&&i.createElement(M.Selection,{readOnly:D,clearSelection:!f&&!D?re:It,selectionCount:x.length,translateWithId:Q,disabled:f}),i.createElement("button",K({type:"button",className:`${n}--list-box__field`,disabled:f,"aria-disabled":f||D,"aria-describedby":!w&&!I&&!F&&h?ue:void 0},ce,{ref:q},Ze),i.createElement("span",{id:Ge,className:`${n}--list-box__label`},L),i.createElement(M.MenuIcon,{isOpen:b,translateWithId:Q})),pe),i.createElement(M.Menu,tt,b&&U(ie,G).map((e,g)=>{const l=x.filter(T=>J(T,e)).length>0,C=Ue({item:e,"aria-selected":l}),$=y(e);return i.createElement(M.MenuItem,K({key:C.id,isActive:l,"aria-label":$,isHighlighted:We===g,title:$,disabled:C["aria-disabled"]},C),i.createElement("div",{className:`${n}--checkbox-wrapper`},i.createElement("span",{title:ve?$:void 0,className:`${n}--checkbox-label`,"data-contained-checkbox-state":l,id:`${C.id}__checkbox`},m?i.createElement(Qe,K({key:C.id},e)):$)))})),Fe&&i.createElement("span",{"aria-live":"assertive","aria-label":Se})),!w&&!I&&!F&&h&&i.createElement("div",{id:ue,className:Ve},h))});be.displayName="MultiSelect";be.propTypes={...St,autoAlign:t.bool,className:t.string,clearSelectionDescription:t.string,clearSelectionText:t.string,compareItems:t.func,direction:t.oneOf(["top","bottom"]),disabled:t.bool,downshiftProps:t.object,helperText:t.node,hideLabel:t.bool,id:t.string.isRequired,initialSelectedItems:t.array,invalid:t.bool,invalidText:t.node,itemToElement:t.func,itemToString:t.func,items:t.array.isRequired,label:t.node.isRequired,light:ct(t.bool),locale:t.string,onChange:t.func,onMenuChange:t.func,open:t.bool,readOnly:t.bool,selectedItems:t.array,selectionFeedback:t.oneOf(["top","fixed","top-after-reopen"]),size:ft,slug:t.node,sortItems:t.func,titleText:t.node,translateWithId:t.func,type:t.oneOf(["default","inline"]),useTitleInItem:t.bool,warn:t.bool,warnText:t.node};export{be as M};
