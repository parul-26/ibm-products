import{u as De,a as Ne,b as Oe,d as Pe,c as I,_ as g,e as Q,s as Le,f as ke,h as Me,g as Re}from"./index-C8rbkH0g.js";import{R as l,r as b}from"./index-BwDkhjyp.js";import{u as Y,L as T,a as ze,b as Be}from"./index-Bo0ibsxA.js";import{P as t}from"./index-Dk74W0Oi.js";import{m as Ke}from"./mergeRefs-CTUecegF.js";import{F as We}from"./FormContext-C7kRVu4t.js";import{W as qe,a as He}from"./bucket-18--U95jA7N.js";import{C as Ue}from"./bucket-2-BgPkDhJt.js";const{ItemMouseMove:Ve,MenuMouseLeave:Ge}=Y.stateChangeTypes,X=s=>typeof s=="string"?s:typeof s=="number"?`${s}`:s!==null&&typeof s=="object"&&"label"in s&&typeof s.label=="string"?s.label:"",Z=l.forwardRef((s,ee)=>{var J;let{autoAlign:r=!1,className:te,disabled:h=!1,direction:C="bottom",items:j,label:D,["aria-label"]:ne,ariaLabel:oe,itemToString:u=X,itemToElement:N=null,renderSelectedItem:O,type:le="default",size:v,onChange:P,id:se,titleText:L="",hideLabel:ie,helperText:E="",translateWithId:ae,light:k,invalid:d,invalidText:re,warn:w,warnText:de,initialSelectedItem:ce,selectedItem:M,downshiftProps:pe,readOnly:S,slug:y,...ue}=s;const x=De("enable-v12-dynamic-floating-styles"),{refs:f,floatingStyles:R,middlewareData:fe}=Ne(x||r?{placement:C,strategy:"fixed",middleware:[Le({apply(e){let{rects:o,elements:i}=e;Object.assign(i.floating.style,{width:`${o.reference.width}px`})}}),r&&ke(),r&&Me()],whileElementsMounted:Re}:{});b.useEffect(()=>{var e;if(x||r){const o={...R,visibility:(e=fe.hide)!=null&&e.referenceHidden?"hidden":"visible"};Object.keys(o).forEach(i=>{f.floating.current&&(f.floating.current.style[i]=o[i])})}},[R,r,f.floating]);const n=Oe(),{isFluid:A}=b.useContext(We),z={items:j,itemToString:u,initialSelectedItem:ce,onSelectedItemChange:Ee,stateReducer:me,isItemDisabled(e,o){return e!==null&&typeof e=="object"&&"disabled"in e&&e.disabled===!0},onHighlightedIndexChange:e=>{let{highlightedIndex:o}=e;if(o>-1&&typeof window!==void 0){const a=document.querySelectorAll(`li.${n}--list-box__menu-item[role="option"]`)[o];a&&a.scrollIntoView({behavior:"smooth",block:"nearest"})}},...pe},be=Pe();function me(e,o){const{changes:i,type:a}=o;switch(a){case Ve:case Ge:return{...i,highlightedIndex:e.highlightedIndex}}return i}M!==void 0&&(z.selectedItem=M);const{isOpen:m,getToggleButtonProps:ge,getLabelProps:he,getMenuProps:B,getItemProps:we,selectedItem:c,highlightedIndex:ye}=Y(z),p=le==="inline",K=!d&&w,[xe,_e]=b.useState(!1),$e=I(`${n}--dropdown`,{[`${n}--dropdown--invalid`]:d,[`${n}--dropdown--warning`]:K,[`${n}--dropdown--open`]:m,[`${n}--dropdown--inline`]:p,[`${n}--dropdown--disabled`]:h,[`${n}--dropdown--light`]:k,[`${n}--dropdown--readonly`]:S,[`${n}--dropdown--${v}`]:v,[`${n}--list-box--up`]:C==="top",[`${n}--autoalign`]:r}),Ie=I(`${n}--label`,{[`${n}--label--disabled`]:h,[`${n}--visually-hidden`]:ie}),Te=I(`${n}--form__helper-text`,{[`${n}--form__helper-text--disabled`]:h}),ve=I(`${n}--dropdown__wrapper`,`${n}--list-box__wrapper`,te,{[`${n}--dropdown__wrapper--inline`]:p,[`${n}--list-box__wrapper--inline`]:p,[`${n}--dropdown__wrapper--inline--invalid`]:p&&d,[`${n}--list-box__wrapper--inline--invalid`]:p&&d,[`${n}--list-box__wrapper--fluid--invalid`]:A&&d,[`${n}--list-box__wrapper--fluid--focus`]:A&&xe&&!m,[`${n}--list-box__wrapper--slug`]:y}),W=E?`dropdown-helper-text-${be}`:void 0,F=N,_=ge({"aria-label":ne||oe}),q=E&&!A?l.createElement("div",{id:W,className:Te},E):null;function Ee(e){let{selectedItem:o}=e;P&&P({selectedItem:o??null})}const H=e=>{_e(e.type==="focus")},$=Ke(_.ref,ee),[U,Se]=b.useState();let[Ae,V]=b.useState(!1);const Fe=S?{onClick:e=>{var o;e.preventDefault(),(o=$==null?void 0:$.current)==null||o.focus()},onKeyDown:e=>{["ArrowDown","ArrowUp"," ","Enter"].includes(e.key)&&e.preventDefault()}}:{onKeyDown:e=>{(e.code!=="Space"||!["ArrowDown","ArrowUp"," ","Enter"].includes(e.key))&&V(!0),(Ae&&e.code==="Space"||!["ArrowDown","ArrowUp"," ","Enter"].includes(e.key))&&(U&&clearTimeout(U),Se(setTimeout(()=>{V(!1)},3e3))),_.onKeyDown&&_.onKeyDown(e)}},Ce=b.useMemo(()=>B({ref:x||r?f.setFloating:null}),[r,B,f.setFloating]);let G;return y&&((J=y.type)==null?void 0:J.displayName)==="AILabel"&&(G=l.cloneElement(y,{size:"mini"})),l.createElement("div",g({className:ve},ue),L&&l.createElement("label",g({className:Ie},he()),L),l.createElement(T,{onFocus:H,onBlur:H,size:v,className:$e,invalid:d,invalidText:re,warn:w,warnText:de,light:k,isOpen:m,ref:x||r?f.setReference:null,id:se},d&&l.createElement(qe,{className:`${n}--list-box__invalid-icon`}),K&&l.createElement(He,{className:`${n}--list-box__invalid-icon ${n}--list-box__invalid-icon--warning`}),l.createElement("button",g({type:"button",className:`${n}--list-box__field`,disabled:h,"aria-disabled":S?!0:void 0,"aria-describedby":!p&&!d&&!w&&q?W:void 0,title:c&&u!==void 0?u(c):X(D)},_,Fe,{ref:$}),l.createElement("span",{className:`${n}--list-box__label`},c?O?O(c):u(c):D),l.createElement(T.MenuIcon,{isOpen:m,translateWithId:ae})),G,l.createElement(T.Menu,Ce,m&&j.map((e,o)=>{const i=e!==null&&typeof e=="object",a=we({item:e,index:o});e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"id")&&(a.id=e.id);const je=i&&"text"in e&&N?e.text:u(e);return l.createElement(T.MenuItem,g({key:a.id,isActive:c===e,isHighlighted:ye===o,title:je,disabled:a["aria-disabled"]},a),typeof e=="object"&&F!==void 0&&F!==null?l.createElement(F,g({key:a.id},e)):u(e),c===e&&l.createElement(Ue,{className:`${n}--list-box__menu-item__selected-icon`}))}))),!p&&!d&&!w&&q)});Z.displayName="Dropdown";Z.propTypes={"aria-label":t.string,ariaLabel:Q(t.string),autoAlign:t.bool,className:t.string,direction:t.oneOf(["top","bottom"]),disabled:t.bool,downshiftProps:t.object,helperText:t.node,hideLabel:t.bool,id:t.string.isRequired,initialSelectedItem:t.oneOfType([t.object,t.string,t.number]),invalid:t.bool,invalidText:t.node,itemToElement:t.func,itemToString:t.func,items:t.array.isRequired,label:t.node.isRequired,light:Q(t.bool),onChange:t.func,readOnly:t.bool,renderSelectedItem:t.func,selectedItem:t.oneOfType([t.object,t.string,t.number]),size:ze,slug:t.node,titleText:t.node.isRequired,translateWithId:t.func,type:Be,warn:t.bool,warnText:t.node};export{Z as D};
