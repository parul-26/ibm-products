import{u as je,a as Oe,b as Le,d as ze,c as T,_ as y,e as Ke,s as Re,f as Be,h as Ue,P as n,g as j}from"./index-Cd8snwnz.js";import{e as l,r as s}from"./index-BOZkNhcz.js";import{u as fe,L as A,a as We,b as qe}from"./index-CNhKwCqX.js";import{m as He}from"./mergeRefs-CTUecegF.js";import{F as Ve}from"./FormContext-qEw5DNxz.js";import{W as Ge,a as Je}from"./bucket-18-D95sPjw6.js";import{C as Qe}from"./bucket-2-BRYD7UVO.js";const{ItemMouseMove:Xe,MenuMouseLeave:Ye}=fe.stateChangeTypes,ue=r=>typeof r=="string"?r:typeof r=="number"?`${r}`:r!==null&&typeof r=="object"&&"label"in r&&typeof r.label=="string"?r.label:"";function pe(r,S){const{changes:i,type:C}=S;switch(C){case Xe:case Ye:return i.highlightedIndex===r.highlightedIndex?r:i;default:return i}}const me=l.forwardRef((r,S)=>{let{autoAlign:i=!1,className:C,decorator:h,disabled:x=!1,direction:O="bottom",items:L,label:z,["aria-label"]:K,ariaLabel:R,itemToString:p=ue,itemToElement:B=null,renderSelectedItem:U,type:be="default",size:k,onChange:D,id:ge,titleText:W="",hideLabel:we,helperText:v="",translateWithId:ye,light:q,invalid:a,invalidText:he,warn:_,warnText:xe,initialSelectedItem:H,selectedItem:V,downshiftProps:G,readOnly:$,slug:I,..._e}=r;const g=je("enable-v12-dynamic-floating-styles"),{refs:b,floatingStyles:J,middlewareData:$e}=Oe(g||i?{placement:O,strategy:"fixed",middleware:[Re({apply(e){let{rects:o,elements:c}=e;Object.assign(c.floating.style,{width:`${o.reference.width}px`})}}),i&&Be(),i&&Ue()],whileElementsMounted:Ke}:{});s.useEffect(()=>{var e;if(g||i){const o={...J,visibility:(e=$e.hide)!=null&&e.referenceHidden?"hidden":"visible"};Object.keys(o).forEach(c=>{b.floating.current&&(b.floating.current.style[c]=o[c])})}},[J,i,b.floating]);const t=Le(),{isFluid:Q}=s.useContext(Ve),X=s.useCallback(e=>{let{selectedItem:o}=e;D&&D({selectedItem:o??null})},[D]),Y=s.useCallback((e,o)=>e!==null&&typeof e=="object"&&"disabled"in e&&e.disabled===!0,[]),Z=s.useCallback(e=>{const{highlightedIndex:o}=e;if(o!==void 0&&o>-1&&typeof window!==void 0){const u=document.querySelectorAll(`li.${t}--list-box__menu-item[role="option"]`)[o];u&&u.scrollIntoView({behavior:"smooth",block:"nearest"})}},[t]),F=s.useMemo(()=>L,[L]),ee=s.useMemo(()=>({items:F,itemToString:p,initialSelectedItem:H,onSelectedItemChange:X,stateReducer:pe,isItemDisabled:Y,onHighlightedIndexChange:Z,...G}),[F,p,H,X,pe,Y,Z,G]),Ie=ze();V!==void 0&&(ee.selectedItem=V);const{isOpen:f,getToggleButtonProps:te,getLabelProps:Ee,getMenuProps:ne,getItemProps:Te,selectedItem:d,highlightedIndex:Ae}=fe(ee),m=be==="inline",oe=!a&&_,[Se,M]=s.useState(!1),Ce=T(`${t}--dropdown`,{[`${t}--dropdown--invalid`]:a,[`${t}--dropdown--warning`]:oe,[`${t}--dropdown--open`]:f,[`${t}--dropdown--focus`]:Se,[`${t}--dropdown--inline`]:m,[`${t}--dropdown--disabled`]:x,[`${t}--dropdown--light`]:q,[`${t}--dropdown--readonly`]:$,[`${t}--dropdown--${k}`]:k,[`${t}--list-box--up`]:O==="top",[`${t}--autoalign`]:i}),ke=T(`${t}--label`,{[`${t}--label--disabled`]:x,[`${t}--visually-hidden`]:we}),De=T(`${t}--form__helper-text`,{[`${t}--form__helper-text--disabled`]:x}),ve=T(`${t}--dropdown__wrapper`,`${t}--list-box__wrapper`,C,{[`${t}--dropdown__wrapper--inline`]:m,[`${t}--list-box__wrapper--inline`]:m,[`${t}--dropdown__wrapper--inline--invalid`]:m&&a,[`${t}--list-box__wrapper--inline--invalid`]:m&&a,[`${t}--list-box__wrapper--fluid--invalid`]:Q&&a,[`${t}--list-box__wrapper--slug`]:I,[`${t}--list-box__wrapper--decorator`]:h}),le=v?`dropdown-helper-text-${Ie}`:void 0,N=B,w=s.useMemo(()=>te({"aria-label":K||R}),[te,K,R,f]),se=v&&!Q?l.createElement("div",{id:le,className:De},v):null,re=e=>{M(e.type==="focus"&&!d)},E=He(w.ref,S),[P,Fe]=s.useState(),[ie,ae]=s.useState(!1),de=s.useCallback(e=>{(e.code!=="Space"||!["ArrowDown","ArrowUp"," ","Enter"].includes(e.key))&&ae(!0),(ie&&e.code==="Space"||!["ArrowDown","ArrowUp"," ","Enter"].includes(e.key))&&(P&&clearTimeout(P),Fe(setTimeout(()=>{ae(!1)},3e3))),["ArrowDown"].includes(e.key)&&M(!1),["Enter"].includes(e.key)&&!d&&!f&&M(!0),w.onKeyDown&&(e.key!=="ArrowUp"||f&&e.key==="ArrowUp")&&w.onKeyDown(e)},[ie,P,w]),Me=s.useMemo(()=>$?{onClick:e=>{var o;e.preventDefault(),(o=E==null?void 0:E.current)==null||o.focus()},onKeyDown:e=>{["ArrowDown","ArrowUp"," ","Enter"].includes(e.key)&&e.preventDefault()}}:{onKeyDown:de},[$,de]),Ne=s.useMemo(()=>ne({ref:g||i?b.setFloating:null}),[i,ne,b.setFloating,g]),ce=s.useMemo(()=>{var o;let e=I??h;return e&&((o=e.type)==null?void 0:o.displayName)==="AILabel"?l.cloneElement(e,{size:"mini"}):l.isValidElement(e)?e:null},[I,h]);return l.createElement("div",y({className:ve},_e),W&&l.createElement("label",y({className:ke},Ee()),W),l.createElement(A,{onFocus:re,onBlur:re,size:k,className:Ce,invalid:a,invalidText:he,warn:_,warnText:xe,light:q,isOpen:f,ref:g||i?b.setReference:null,id:ge},a&&l.createElement(Ge,{className:`${t}--list-box__invalid-icon`}),oe&&l.createElement(Je,{className:`${t}--list-box__invalid-icon ${t}--list-box__invalid-icon--warning`}),l.createElement("button",y({type:"button",className:`${t}--list-box__field`,disabled:x,"aria-disabled":$?!0:void 0,"aria-describedby":!m&&!a&&!_&&se?le:void 0,title:d&&p!==void 0?p(d):ue(z)},w,Me,{ref:E}),l.createElement("span",{className:`${t}--list-box__label`},d?U?U(d):p(d):z),l.createElement(A.MenuIcon,{isOpen:f,translateWithId:ye})),I?ce:h?l.createElement("div",{className:`${t}--list-box__inner-wrapper--decorator`},ce):"",l.createElement(A.Menu,Ne,f&&F.map((e,o)=>{const c=e!==null&&typeof e=="object",u=Te({item:e,index:o});e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"id")&&(u.id=e.id);const Pe=c&&"text"in e&&B?e.text:p(e);return l.createElement(A.MenuItem,y({key:u.id,isActive:d===e,isHighlighted:Ae===o,title:Pe,disabled:u["aria-disabled"]},u),typeof e=="object"&&N!==void 0&&N!==null?l.createElement(N,y({key:u.id},e)):p(e),d===e&&l.createElement(Qe,{className:`${t}--list-box__menu-item__selected-icon`}))}))),!m&&!a&&!_&&se)});me.displayName="Dropdown";me.propTypes={"aria-label":n.string,ariaLabel:j(n.string),autoAlign:n.bool,className:n.string,decorator:n.node,direction:n.oneOf(["top","bottom"]),disabled:n.bool,downshiftProps:n.object,helperText:n.node,hideLabel:n.bool,id:n.string.isRequired,initialSelectedItem:n.oneOfType([n.object,n.string,n.number]),invalid:n.bool,invalidText:n.node,itemToElement:n.func,itemToString:n.func,items:n.array.isRequired,label:n.node.isRequired,light:j(n.bool),onChange:n.func,readOnly:n.bool,renderSelectedItem:n.func,selectedItem:n.oneOfType([n.object,n.string,n.number]),size:qe,slug:j(n.node),titleText:n.node.isRequired,translateWithId:n.func,type:We,warn:n.bool,warnText:n.node};export{me as D};
