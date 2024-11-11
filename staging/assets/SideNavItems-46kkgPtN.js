import{b as H,j as Y,c as _,i as F,T as Z,_ as ee,E as ae}from"./index-C8rbkH0g.js";import{R as n,r as v}from"./index-BwDkhjyp.js";import{P as a}from"./index-Dk74W0Oi.js";import{A as se}from"./Link-DH9SHIRS.js";import{u as te}from"./index-7nuGG3yx.js";import{u as D,h as ne}from"./settings-DI4GKhuL.js";import{u as ie}from"./useMatchMedia-Ci55ARFf.js";const I=["SideNavFooter","SideNavHeader","SideNavItems","SideNavMenu","SideNavLink"],re=v.createContext({});function oe(N,x){let{expanded:u,defaultExpanded:m=!1,isChildOfHeader:y=!0,"aria-label":b,"aria-labelledby":g,children:o,onToggle:c,className:S,href:$,isFixedNav:f=!1,isRail:d,isPersistent:V=!0,addFocusListeners:A=!0,addMouseListeners:W=!0,onOverlayClick:j,onSideNavBlur:L,enterDelayMs:M=100,...q}=N;const s=H(),{current:p}=v.useRef(u!==void 0),[J,E]=D(m),[h,T]=D(m),i=p?u:J,C=v.useRef(null),K=Y([C,x]),l=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!i;p||E(t,M),c&&c(e,t),(p||d)&&T(t,M)},Q={"aria-label":b,"aria-labelledby":g},z=_(S,{[`${s}--side-nav`]:!0,[`${s}--side-nav--expanded`]:i||h,[`${s}--side-nav--collapsed`]:!i&&f,[`${s}--side-nav--rail`]:d,[`${s}--side-nav--ux`]:y,[`${s}--side-nav--hidden`]:!V}),G=_({[`${s}--side-nav__overlay`]:!0,[`${s}--side-nav__overlay-active`]:i||h});let w=o;w=n.Children.map(o,e=>{var P,k;const t=p&&h||i;if(v.isValidElement(e)){const R=e;return n.cloneElement(R,{...I.includes(((P=R.type)==null?void 0:P.displayName)??((k=R.type)==null?void 0:k.name))?{isSideNavExpanded:t}:{}})}return e});const r={};A&&(r.onFocus=e=>{!e.currentTarget.contains(e.relatedTarget)&&d&&l(e,!0)},r.onBlur=e=>{e.currentTarget.contains(e.relatedTarget)||l(e,!1),!e.currentTarget.contains(e.relatedTarget)&&i&&!f&&L&&L()},r.onKeyDown=e=>{F(e,ae)&&(l(e,!1),$&&(window.location.href=$))}),W&&d&&(r.onMouseEnter=()=>{l(!0,!0)},r.onMouseLeave=()=>{E(!1),T(!1),l(!1,!1)},r.onClick=()=>{E(!0),T(!0),l(!0,!0)}),te("keydown",e=>{const t=document.activeElement;F(e,Z)&&i&&!f&&C.current&&(t!=null&&t.classList.contains(`${s}--header__menu-toggle`))&&!t.closest("nav")&&C.current.focus()});const U=`(min-width: ${ne.lg.width})`,X=ie(U);return n.createElement(re.Provider,{value:{isRail:d}},f?null:n.createElement("div",{className:G,onClick:j}),n.createElement("nav",ee({tabIndex:-1,ref:K,className:`${s}--side-nav__navigation ${z}`,inert:d||i||X?void 0:-1},Q,r,q),w))}const B=n.forwardRef(oe);B.displayName="SideNav";B.propTypes={...se,addFocusListeners:a.bool,addMouseListeners:a.bool,className:a.string,defaultExpanded:a.bool,enterDelayMs:a.number,expanded:a.bool,href:a.string,isChildOfHeader:a.bool,isFixedNav:a.bool,isPersistent:a.bool,isRail:a.bool,onOverlayClick:a.func,onSideNavBlur:a.func,onToggle:a.func};const O=N=>{let{className:x,children:u,isSideNavExpanded:m}=N;const y=H(),b=_([`${y}--side-nav__items`],x),g=n.Children.map(u,o=>{var c;if(n.isValidElement(o)){const S=(c=o.type)==null?void 0:c.displayName;return n.cloneElement(o,{...I.includes(S)?{isSideNavExpanded:m}:{}})}});return n.createElement("ul",{className:b},g)};O.displayName="SideNavItems";O.propTypes={children:a.node.isRequired,className:a.string,isSideNavExpanded:a.bool};export{B as S,O as a,re as b};
