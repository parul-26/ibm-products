import{r as i,R as e}from"./index-BwDkhjyp.js";import{a as S}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{P as t}from"./index-Dk74W0Oi.js";import{c as j,C as oe,a1 as ae}from"./index-C8rbkH0g.js";import{p as y,B as N,j as re}from"./settings-DI4GKhuL.js";import{S as ce}from"./StoryDocsPage-D0IWKjO6.js";import{O as de,a as F}from"./index-7ofX8jt7.js";import{T as le}from"./index-BpmgoRNl.js";import{g as pe}from"./devtools-BXUoVCj7.js";import{m as me}from"./index-DkUr2NOz.js";import{u as he}from"./usePrefersReducedMotion-DeqUFceN.js";import{H as fe}from"./bucket-7-E__9yUMB.js";import{H as ge,a as ue}from"./HeaderName-Dh3o3ME1.js";import{H as be,a as z}from"./HeaderGlobalBar-Co9yEExf.js";import{c as ye}from"./bucket-16-37j4Z-9c.js";import{S as ve}from"./bucket-14-CF5C4Sen.js";import{U as we}from"./bucket-17-7Xhb4oz5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-BONylQH5.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-7nuGG3yx.js";import"./index-BpGm7QiY.js";import"./iframe-B6oKv5UQ.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-6_fmjwZ-.js";import"./tslib.es6-B4_xh3D5.js";import"./Text-DZylbEPL.js";import"./useAttachedMenu-DeIo1fst.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-BdJxyMSm.js";import"./wrapFocus-BBe48k1H.js";import"./LayerContext-DbU-6VX4.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./Link-DH9SHIRS.js";import"./wrapComponent-BxtqFmr4.js";const H=i.createContext({}),Te="WebTerminalProvider";let b=({children:n})=>{const[o,a]=i.useState(!1),f=i.useCallback(()=>a(!0),[]),g=i.useCallback(()=>a(!1),[]),v=i.useCallback(()=>a(!o),[o]);return e.createElement(H.Provider,{value:{open:o,openWebTerminal:f,closeWebTerminal:g,toggleWebTerminal:v}},n)};b=y.checkComponentEnabled(b,Te);b.propTypes={children:t.oneOfType([t.arrayOf(t.node),t.node]).isRequired};const C=()=>i.useContext(H);b.__docgenInfo={description:"",methods:[],displayName:"WebTerminalProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:"Provide your own terminal component as children to show up in the web terminal",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]}}}};const I="WebTerminal",c=`${y.prefix}--web-terminal`,u={actions:Object.freeze([]),documentationLinks:Object.freeze([]),documentationLinksIconDescription:"Show documentation links",isInitiallyOpen:!1,webTerminalAriaLabel:"Web terminal header"};let d=e.forwardRef(({actions:n=u.actions,children:o,className:a,closeIconDescription:f,documentationLinks:g=u.documentationLinks,documentationLinksIconDescription:v=u.documentationLinksIconDescription,isInitiallyOpen:J=u.isInitiallyOpen,webTerminalAriaLabel:Q=u.webTerminalAriaLabel,...Y},Z)=>{const{open:r,closeWebTerminal:w,openWebTerminal:T}=C(),[ee,k]=i.useState(r),P=he(),te=`${r?"web-terminal-entrance":"web-terminal-exit forwards"} ${me}`,ne=i.useMemo(()=>g.length>0,[g]);i.useEffect(()=>{r&&k(!0)},[r]),i.useEffect(()=>{J&&(T==null||T())},[]);const ie=()=>{r||k(!1)},se=()=>{P&&k(!1),w==null||w()};return ee?e.createElement("div",{...Y,...pe(I),ref:Z,className:j([c,a,{[`${c}--open`]:r,[`${c}--closed`]:!r}]),style:{animation:P?"":te},onAnimationEnd:ie},e.createElement("header",{"aria-label":Q,className:`${c}__bar`},e.createElement("div",{className:`${c}__actions`},ne&&e.createElement(de,{renderIcon:s=>e.createElement(fe,{size:16,...s}),iconDescription:v,"aria-label":v,menuOptionsClass:`${c}__documentation-overflow`,size:"lg"},g.map(({...s},x)=>e.createElement(F,{key:x,...s}))),n.map(({renderIcon:s,onClick:x,iconDescription:W})=>e.createElement(N,{key:W,hasIconOnly:!0,renderIcon:s,onClick:x,iconDescription:W,kind:"ghost","aria-label":W}))),e.createElement(N,{hasIconOnly:!0,renderIcon:s=>e.createElement(oe,{size:16,...s}),kind:"ghost",iconDescription:f,onClick:se,onAnimationEnd:s=>s.stopPropagation()})),e.createElement(le,{theme:"g100"},e.createElement("div",{className:`${c}__body`},o))):null});d=y.checkComponentEnabled(d,I);d.displayName=I;d.propTypes={actions:t.arrayOf(t.shape({renderIcon:t.func.isRequired,onClick:t.func.isRequired,iconDescription:t.string.isRequired})),children:t.oneOfType([t.arrayOf(t.node),t.node]).isRequired,className:t.string,closeIconDescription:t.string.isRequired,documentationLinks:t.arrayOf(t.shape({...F.propTypes})),documentationLinksIconDescription:t.string,isInitiallyOpen:t.bool,webTerminalAriaLabel:t.string};d.__docgenInfo={description:"The `WebTerminal` is prompted by the user and is persistent until dismissed. The purpose of a web terminal is to provide users with the ability to type commands manually instead of using the GUI.",methods:[],displayName:"WebTerminal",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide your own terminal component as children to show up in the web terminal",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]}},actions:{required:!1,tsType:{name:"unknown"},description:"An array of actions to be displayed in the web terminal header bar",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"arrayOf",value:{name:"shape",value:{renderIcon:{name:"func",required:!0},onClick:{name:"func",required:!0},iconDescription:{name:"string",required:!0}}}}},className:{required:!1,tsType:{name:"string"},description:"Custom classname for additional styling of the web terminal",type:{name:"string"}},closeIconDescription:{required:!0,tsType:{name:"string"},description:"Icon description for the close button",type:{name:"string"}},documentationLinks:{required:!1,tsType:{name:"unknown"},description:"Array of objects for each documentation link. Each documentation link uses the prop types of OverflowMenuItems. See more: https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"arrayOf",value:{name:"shape",value:{}}}},documentationLinksIconDescription:{required:!1,tsType:{name:"string"},description:"Description for the documentation link overflow menu tooltip",defaultValue:{value:"'Show documentation links'",computed:!1},type:{name:"string"}},isInitiallyOpen:{required:!1,tsType:{name:"boolean"},description:"Optionally pass if the web terminal should be open by default",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},webTerminalAriaLabel:{required:!1,tsType:{name:"string"},description:"Specifies aria label for Web terminal",defaultValue:{value:"'Web terminal header'",computed:!1},type:{name:"string"}}},composes:["PropsWithChildren"]};const V="WebTerminalContentWrapper",q=`${y.prefix}--web-terminal-content-wrapper`;let h=e.forwardRef(({children:n,...o},a)=>{const{open:f}=C();return e.createElement("div",{ref:a,className:j([q,{[`${q}--open`]:f}]),...o},n)});h=y.checkComponentEnabled(h,V);h.displayName=V;h.propTypes={children:t.oneOfType([t.arrayOf(t.node),t.node]).isRequired};h.__docgenInfo={description:"",methods:[],displayName:"WebTerminalContentWrapper",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Pass in content as children.",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]}}}};const G=()=>{const{openWebTerminal:n}=C();return e.createElement(ge,{"aria-label":"IBM Platform Name"},e.createElement(ue,{href:"#",prefix:"IBM"},"[Platform]"),e.createElement(be,null,e.createElement(z,{"aria-label":"Web terminal",onClick:n},e.createElement(ye,{size:20})),e.createElement(z,{"aria-label":"Search",onClick:()=>{}},e.createElement(ve,{size:20})),e.createElement(z,{"aria-label":"User",onClick:()=>{}},e.createElement(we,{size:20}))))};G.__docgenInfo={description:"",methods:[],displayName:"Navigation"};const U=[{itemText:"BX/ICP docs",href:"#",onClick:()=>console.log("clicked")},{itemText:"Kubernetes docs",href:"#",onClick:()=>console.log("clicked")},{itemText:"Docker docs",href:"#",onClick:()=>console.log("clicked")},{itemText:"Helm docs",href:"#",onClick:()=>console.log("clicked")}],ke='.cds--header{--cds-ai-aura-end: rgba(0, 0, 0, 0);--cds-ai-aura-hover-background: #333333;--cds-ai-aura-hover-end: rgba(0, 0, 0, 0);--cds-ai-aura-hover-start: rgba(69, 137, 255, .4);--cds-ai-aura-start: rgba(69, 137, 255, .1);--cds-ai-aura-start-sm: rgba(69, 137, 255, .16);--cds-ai-border-end: #4589ff;--cds-ai-border-start: rgba(166, 200, 255, .36);--cds-ai-border-strong: #78a9ff;--cds-ai-drop-shadow: rgba(0, 0, 0, .28);--cds-ai-inner-shadow: rgba(69, 137, 255, .16);--cds-ai-overlay: rgba(0, 0, 0, .5);--cds-ai-popover-background: #161616;--cds-ai-popover-caret-bottom: #4589ff;--cds-ai-popover-caret-bottom-background: #202d45;--cds-ai-popover-caret-bottom-background-actions: #1e283a;--cds-ai-popover-caret-center: #4870b5;--cds-ai-popover-shadow-outer-01: rgba(0, 0, 0, .12);--cds-ai-popover-shadow-outer-02: rgba(0, 0, 0, .08);--cds-ai-skeleton-background: rgba(120, 169, 255, .5);--cds-ai-skeleton-element-background: rgba(120, 169, 255, .3);--cds-background: #161616;--cds-background-active: rgba(141, 141, 141, .4);--cds-background-brand: #0f62fe;--cds-background-hover: rgba(141, 141, 141, .16);--cds-background-inverse: #f4f4f4;--cds-background-inverse-hover: #e8e8e8;--cds-background-selected: rgba(141, 141, 141, .24);--cds-background-selected-hover: rgba(141, 141, 141, .32);--cds-border-disabled: rgba(141, 141, 141, .5);--cds-border-interactive: #4589ff;--cds-border-inverse: #f4f4f4;--cds-border-strong-01: #6f6f6f;--cds-border-strong-02: #8d8d8d;--cds-border-strong-03: #a8a8a8;--cds-border-subtle-00: #393939;--cds-border-subtle-01: #525252;--cds-border-subtle-02: #6f6f6f;--cds-border-subtle-03: #6f6f6f;--cds-border-subtle-selected-01: #6f6f6f;--cds-border-subtle-selected-02: #8d8d8d;--cds-border-subtle-selected-03: #8d8d8d;--cds-border-tile-01: #525252;--cds-border-tile-02: #6f6f6f;--cds-border-tile-03: #8d8d8d;--cds-chat-avatar-agent: #c6c6c6;--cds-chat-avatar-bot: #8d8d8d;--cds-chat-avatar-user: #4589ff;--cds-chat-bubble-agent: #262626;--cds-chat-bubble-border: #525252;--cds-chat-bubble-user: #393939;--cds-chat-button: #78a9ff;--cds-chat-button-active: rgba(141, 141, 141, .4);--cds-chat-button-hover: rgba(141, 141, 141, .16);--cds-chat-button-selected: rgba(141, 141, 141, .24);--cds-chat-button-text-hover: #a6c8ff;--cds-chat-button-text-selected: #c6c6c6;--cds-chat-header-background: #262626;--cds-chat-prompt-background: #161616;--cds-chat-prompt-border-end: rgba(38, 38, 38, 0);--cds-chat-prompt-border-start: #262626;--cds-chat-shell-background: #262626;--cds-field-01: #262626;--cds-field-02: #393939;--cds-field-03: #525252;--cds-field-hover-01: #333333;--cds-field-hover-02: #474747;--cds-field-hover-03: #636363;--cds-focus: #ffffff;--cds-focus-inset: #161616;--cds-focus-inverse: #0f62fe;--cds-highlight: #001d6c;--cds-icon-disabled: rgba(244, 244, 244, .25);--cds-icon-interactive: #ffffff;--cds-icon-inverse: #161616;--cds-icon-on-color: #ffffff;--cds-icon-on-color-disabled: rgba(255, 255, 255, .25);--cds-icon-primary: #f4f4f4;--cds-icon-secondary: #c6c6c6;--cds-interactive: #4589ff;--cds-layer-01: #262626;--cds-layer-02: #393939;--cds-layer-03: #525252;--cds-layer-accent-01: #393939;--cds-layer-accent-02: #525252;--cds-layer-accent-03: #6f6f6f;--cds-layer-accent-active-01: #6f6f6f;--cds-layer-accent-active-02: #8d8d8d;--cds-layer-accent-active-03: #393939;--cds-layer-accent-hover-01: #474747;--cds-layer-accent-hover-02: #636363;--cds-layer-accent-hover-03: #5e5e5e;--cds-layer-active-01: #525252;--cds-layer-active-02: #6f6f6f;--cds-layer-active-03: #8d8d8d;--cds-layer-hover-01: #333333;--cds-layer-hover-02: #474747;--cds-layer-hover-03: #636363;--cds-layer-selected-01: #393939;--cds-layer-selected-02: #525252;--cds-layer-selected-03: #6f6f6f;--cds-layer-selected-disabled: #a8a8a8;--cds-layer-selected-hover-01: #474747;--cds-layer-selected-hover-02: #636363;--cds-layer-selected-hover-03: #5e5e5e;--cds-layer-selected-inverse: #f4f4f4;--cds-link-inverse: #0f62fe;--cds-link-inverse-active: #161616;--cds-link-inverse-hover: #0043ce;--cds-link-inverse-visited: #8a3ffc;--cds-link-primary: #78a9ff;--cds-link-primary-hover: #a6c8ff;--cds-link-secondary: #a6c8ff;--cds-link-visited: #be95ff;--cds-overlay: rgba(0, 0, 0, .65);--cds-shadow: rgba(0, 0, 0, .8);--cds-skeleton-background: #292929;--cds-skeleton-element: #393939;--cds-support-caution-major: #ff832b;--cds-support-caution-minor: #f1c21b;--cds-support-caution-undefined: #a56eff;--cds-support-error: #fa4d56;--cds-support-error-inverse: #da1e28;--cds-support-info: #4589ff;--cds-support-info-inverse: #0043ce;--cds-support-success: #42be65;--cds-support-success-inverse: #24a148;--cds-support-warning: #f1c21b;--cds-support-warning-inverse: #f1c21b;--cds-text-disabled: rgba(244, 244, 244, .25);--cds-text-error: #ff8389;--cds-text-helper: #a8a8a8;--cds-text-inverse: #161616;--cds-text-on-color: #ffffff;--cds-text-on-color-disabled: rgba(255, 255, 255, .25);--cds-text-placeholder: rgba(244, 244, 244, .4);--cds-text-primary: #f4f4f4;--cds-text-secondary: #c6c6c6;--cds-toggle-off: #6f6f6f;--cds-spacing-01: .125rem;--cds-spacing-02: .25rem;--cds-spacing-03: .5rem;--cds-spacing-04: .75rem;--cds-spacing-05: 1rem;--cds-spacing-06: 1.5rem;--cds-spacing-07: 2rem;--cds-spacing-08: 2.5rem;--cds-spacing-09: 3rem;--cds-spacing-10: 4rem;--cds-spacing-11: 5rem;--cds-spacing-12: 6rem;--cds-spacing-13: 10rem;--cds-fluid-spacing-01: 0;--cds-fluid-spacing-02: 2vw;--cds-fluid-spacing-03: 5vw;--cds-fluid-spacing-04: 10vw;--cds-caption-01-font-size: .75rem;--cds-caption-01-font-weight: 400;--cds-caption-01-line-height: 1.33333;--cds-caption-01-letter-spacing: .32px;--cds-caption-02-font-size: .875rem;--cds-caption-02-font-weight: 400;--cds-caption-02-line-height: 1.28572;--cds-caption-02-letter-spacing: .32px;--cds-label-01-font-size: .75rem;--cds-label-01-font-weight: 400;--cds-label-01-line-height: 1.33333;--cds-label-01-letter-spacing: .32px;--cds-label-02-font-size: .875rem;--cds-label-02-font-weight: 400;--cds-label-02-line-height: 1.28572;--cds-label-02-letter-spacing: .16px;--cds-helper-text-01-font-size: .75rem;--cds-helper-text-01-line-height: 1.33333;--cds-helper-text-01-letter-spacing: .32px;--cds-helper-text-02-font-size: .875rem;--cds-helper-text-02-font-weight: 400;--cds-helper-text-02-line-height: 1.28572;--cds-helper-text-02-letter-spacing: .16px;--cds-body-short-01-font-size: .875rem;--cds-body-short-01-font-weight: 400;--cds-body-short-01-line-height: 1.28572;--cds-body-short-01-letter-spacing: .16px;--cds-body-short-02-font-size: 1rem;--cds-body-short-02-font-weight: 400;--cds-body-short-02-line-height: 1.375;--cds-body-short-02-letter-spacing: 0;--cds-body-long-01-font-size: .875rem;--cds-body-long-01-font-weight: 400;--cds-body-long-01-line-height: 1.42857;--cds-body-long-01-letter-spacing: .16px;--cds-body-long-02-font-size: 1rem;--cds-body-long-02-font-weight: 400;--cds-body-long-02-line-height: 1.5;--cds-body-long-02-letter-spacing: 0;--cds-code-01-font-family: "IBM Plex Mono", system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", monospace;--cds-code-01-font-size: .75rem;--cds-code-01-font-weight: 400;--cds-code-01-line-height: 1.33333;--cds-code-01-letter-spacing: .32px;--cds-code-02-font-family: "IBM Plex Mono", system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", monospace;--cds-code-02-font-size: .875rem;--cds-code-02-font-weight: 400;--cds-code-02-line-height: 1.42857;--cds-code-02-letter-spacing: .32px;--cds-heading-01-font-size: .875rem;--cds-heading-01-font-weight: 600;--cds-heading-01-line-height: 1.42857;--cds-heading-01-letter-spacing: .16px;--cds-heading-02-font-size: 1rem;--cds-heading-02-font-weight: 600;--cds-heading-02-line-height: 1.5;--cds-heading-02-letter-spacing: 0;--cds-productive-heading-01-font-size: .875rem;--cds-productive-heading-01-font-weight: 600;--cds-productive-heading-01-line-height: 1.28572;--cds-productive-heading-01-letter-spacing: .16px;--cds-productive-heading-02-font-size: 1rem;--cds-productive-heading-02-font-weight: 600;--cds-productive-heading-02-line-height: 1.375;--cds-productive-heading-02-letter-spacing: 0;--cds-productive-heading-03-font-size: 1.25rem;--cds-productive-heading-03-font-weight: 400;--cds-productive-heading-03-line-height: 1.4;--cds-productive-heading-03-letter-spacing: 0;--cds-productive-heading-04-font-size: 1.75rem;--cds-productive-heading-04-font-weight: 400;--cds-productive-heading-04-line-height: 1.28572;--cds-productive-heading-04-letter-spacing: 0;--cds-productive-heading-05-font-size: 2rem;--cds-productive-heading-05-font-weight: 400;--cds-productive-heading-05-line-height: 1.25;--cds-productive-heading-05-letter-spacing: 0;--cds-productive-heading-06-font-size: 2.625rem;--cds-productive-heading-06-font-weight: 300;--cds-productive-heading-06-line-height: 1.199;--cds-productive-heading-06-letter-spacing: 0;--cds-productive-heading-07-font-size: 3.375rem;--cds-productive-heading-07-font-weight: 300;--cds-productive-heading-07-line-height: 1.19;--cds-productive-heading-07-letter-spacing: 0;--cds-expressive-paragraph-01-font-size: 1.5rem;--cds-expressive-paragraph-01-font-weight: 300;--cds-expressive-paragraph-01-line-height: 1.334;--cds-expressive-paragraph-01-letter-spacing: 0;--cds-expressive-heading-01-font-size: .875rem;--cds-expressive-heading-01-font-weight: 600;--cds-expressive-heading-01-line-height: 1.42857;--cds-expressive-heading-01-letter-spacing: .16px;--cds-expressive-heading-02-font-size: 1rem;--cds-expressive-heading-02-font-weight: 600;--cds-expressive-heading-02-line-height: 1.5;--cds-expressive-heading-02-letter-spacing: 0;--cds-expressive-heading-03-font-size: 1.25rem;--cds-expressive-heading-03-font-weight: 400;--cds-expressive-heading-03-line-height: 1.4;--cds-expressive-heading-03-letter-spacing: 0;--cds-expressive-heading-04-font-size: 1.75rem;--cds-expressive-heading-04-font-weight: 400;--cds-expressive-heading-04-line-height: 1.28572;--cds-expressive-heading-04-letter-spacing: 0;--cds-expressive-heading-05-font-size: 2rem;--cds-expressive-heading-05-font-weight: 400;--cds-expressive-heading-05-line-height: 1.25;--cds-expressive-heading-05-letter-spacing: 0;--cds-expressive-heading-06-font-size: 2rem;--cds-expressive-heading-06-font-weight: 600;--cds-expressive-heading-06-line-height: 1.25;--cds-expressive-heading-06-letter-spacing: 0;--cds-quotation-01-font-family: "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", serif;--cds-quotation-01-font-size: 1.25rem;--cds-quotation-01-font-weight: 400;--cds-quotation-01-line-height: 1.3;--cds-quotation-01-letter-spacing: 0;--cds-quotation-02-font-family: "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", serif;--cds-quotation-02-font-size: 2rem;--cds-quotation-02-font-weight: 300;--cds-quotation-02-line-height: 1.25;--cds-quotation-02-letter-spacing: 0;--cds-display-01-font-size: 2.625rem;--cds-display-01-font-weight: 300;--cds-display-01-line-height: 1.19;--cds-display-01-letter-spacing: 0;--cds-display-02-font-size: 2.625rem;--cds-display-02-font-weight: 600;--cds-display-02-line-height: 1.19;--cds-display-02-letter-spacing: 0;--cds-display-03-font-size: 2.625rem;--cds-display-03-font-weight: 300;--cds-display-03-line-height: 1.19;--cds-display-03-letter-spacing: 0;--cds-display-04-font-size: 2.625rem;--cds-display-04-font-weight: 300;--cds-display-04-line-height: 1.19;--cds-display-04-letter-spacing: 0;--cds-legal-01-font-size: .75rem;--cds-legal-01-font-weight: 400;--cds-legal-01-line-height: 1.33333;--cds-legal-01-letter-spacing: .32px;--cds-legal-02-font-size: .875rem;--cds-legal-02-font-weight: 400;--cds-legal-02-line-height: 1.28572;--cds-legal-02-letter-spacing: .16px;--cds-body-compact-01-font-size: .875rem;--cds-body-compact-01-font-weight: 400;--cds-body-compact-01-line-height: 1.28572;--cds-body-compact-01-letter-spacing: .16px;--cds-body-compact-02-font-size: 1rem;--cds-body-compact-02-font-weight: 400;--cds-body-compact-02-line-height: 1.375;--cds-body-compact-02-letter-spacing: 0;--cds-heading-compact-01-font-size: .875rem;--cds-heading-compact-01-font-weight: 600;--cds-heading-compact-01-line-height: 1.28572;--cds-heading-compact-01-letter-spacing: .16px;--cds-heading-compact-02-font-size: 1rem;--cds-heading-compact-02-font-weight: 600;--cds-heading-compact-02-line-height: 1.375;--cds-heading-compact-02-letter-spacing: 0;--cds-body-01-font-size: .875rem;--cds-body-01-font-weight: 400;--cds-body-01-line-height: 1.42857;--cds-body-01-letter-spacing: .16px;--cds-body-02-font-size: 1rem;--cds-body-02-font-weight: 400;--cds-body-02-line-height: 1.5;--cds-body-02-letter-spacing: 0;--cds-heading-03-font-size: 1.25rem;--cds-heading-03-font-weight: 400;--cds-heading-03-line-height: 1.4;--cds-heading-03-letter-spacing: 0;--cds-heading-04-font-size: 1.75rem;--cds-heading-04-font-weight: 400;--cds-heading-04-line-height: 1.28572;--cds-heading-04-letter-spacing: 0;--cds-heading-05-font-size: 2rem;--cds-heading-05-font-weight: 400;--cds-heading-05-line-height: 1.25;--cds-heading-05-letter-spacing: 0;--cds-heading-06-font-size: 2.625rem;--cds-heading-06-font-weight: 300;--cds-heading-06-line-height: 1.199;--cds-heading-06-letter-spacing: 0;--cds-heading-07-font-size: 3.375rem;--cds-heading-07-font-weight: 300;--cds-heading-07-line-height: 1.19;--cds-heading-07-letter-spacing: 0;--cds-fluid-heading-03-font-size: 1.25rem;--cds-fluid-heading-03-font-weight: 400;--cds-fluid-heading-03-line-height: 1.4;--cds-fluid-heading-03-letter-spacing: 0;--cds-fluid-heading-04-font-size: 1.75rem;--cds-fluid-heading-04-font-weight: 400;--cds-fluid-heading-04-line-height: 1.28572;--cds-fluid-heading-04-letter-spacing: 0;--cds-fluid-heading-05-font-size: 2rem;--cds-fluid-heading-05-font-weight: 400;--cds-fluid-heading-05-line-height: 1.25;--cds-fluid-heading-05-letter-spacing: 0;--cds-fluid-heading-06-font-size: 2rem;--cds-fluid-heading-06-font-weight: 600;--cds-fluid-heading-06-line-height: 1.25;--cds-fluid-heading-06-letter-spacing: 0;--cds-fluid-paragraph-01-font-size: 1.5rem;--cds-fluid-paragraph-01-font-weight: 300;--cds-fluid-paragraph-01-line-height: 1.334;--cds-fluid-paragraph-01-letter-spacing: 0;--cds-fluid-quotation-01-font-family: "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", serif;--cds-fluid-quotation-01-font-size: 1.25rem;--cds-fluid-quotation-01-font-weight: 400;--cds-fluid-quotation-01-line-height: 1.3;--cds-fluid-quotation-01-letter-spacing: 0;--cds-fluid-quotation-02-font-family: "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", serif;--cds-fluid-quotation-02-font-size: 2rem;--cds-fluid-quotation-02-font-weight: 300;--cds-fluid-quotation-02-line-height: 1.25;--cds-fluid-quotation-02-letter-spacing: 0;--cds-fluid-display-01-font-size: 2.625rem;--cds-fluid-display-01-font-weight: 300;--cds-fluid-display-01-line-height: 1.19;--cds-fluid-display-01-letter-spacing: 0;--cds-fluid-display-02-font-size: 2.625rem;--cds-fluid-display-02-font-weight: 600;--cds-fluid-display-02-line-height: 1.19;--cds-fluid-display-02-letter-spacing: 0;--cds-fluid-display-03-font-size: 2.625rem;--cds-fluid-display-03-font-weight: 300;--cds-fluid-display-03-line-height: 1.19;--cds-fluid-display-03-letter-spacing: 0;--cds-fluid-display-04-font-size: 2.625rem;--cds-fluid-display-04-font-weight: 300;--cds-fluid-display-04-line-height: 1.19;--cds-fluid-display-04-letter-spacing: 0;--cds-layer: var(--cds-layer-01, #f4f4f4);--cds-layer-active: var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);--cds-field: var(--cds-field-01, #f4f4f4);--cds-field-hover: var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong: var(--cds-border-strong-01, #8d8d8d);--cds-border-tile: var(--cds-border-tile-01, #c6c6c6)}.sb-show-main.sb-main-centered #root{padding:0!important;margin:0!important}.example-terminal{padding:1rem;color:#f4f4f4;font-family:IBM Plex Mono,monospace}.example-terminal p{padding-bottom:2rem;font-size:14px}#storybook-docs ul{list-style:initial}#storybook-docs ol{list-style:decimal}',K=()=>e.createElement(ce,{blocks:[{description:"To get started using the WebTerminal, you have to first wrap your\n              application with the `<WebTerminalProvider>`\n              component. This will allow all the WebTerminal components to be\n              used with the `useWebTerminal()` custom hook.\n          ",title:"Getting Started",source:{code:`import { WebTerminalProvider } from '@carbon/ibm-products';

const App = () => {
  return (
    <WebTerminalProvider>
      ...
    <WebTerminalProvider>
  )
};`}},{title:"useWebTerminal()",source:{code:`const { open, openWebTerminal, closeWebTerminal, toggleWebTerminal } =
  useWebTerminal();`}},{description:"The `useWebTerminal()` hook returns an object with 4 properties:\n1. Read the `open` state (true or false)\n2. `openWebTerminal` sets the `open` state to true\n3. `closeWebTerminal` sets the `open` state to false\n4. `toggleWebTerminal` toggles between true and false\n\nExample:\n",source:{code:`const MyComponent = () => {
  const { open, openWebTerminal, closeWebTerminal, toggleWebTerminal } =
    useWebTerminal();

  return (
    <div>
      <button onClick={() => openWebTerminal()}>Open web terminal</button>
      <button onClick={() => closeWebTerminal()}>Close web terminal</button>
      <button onClick={() => toggleWebTerminal()}>Toggle web terminal</button>
      <p>The web terminal is now {open}</p>

      <WebTerminal>...</WebTerminal>
    </div>
  );
};`}},{subTitle:"Passing in your own terminal.",description:`The \`WebTerminal\` is wrapper component for your own
terminal component that you may have been using for your product.
Simply pass your own terminal component as children.
            `},{subTitle:"Optional wrapper component.",description:"Optionally you can import `WebTerminalContentWrapper` to have\n              content adjust their width based off the `WebTerminal` width when\n              it is opened.",source:{code:`<WebTerminalContentWrapper>
  content
</WebTerminalContentWrapper>

<WebTerminal>
  ...
</WebTerminal>`}},{description:"The default web terminal is one which opens and the terminal loads. Then if the user desires to dismiss it they can click the close icon on the top right corner of the component.",story:l},{story:p},{subTitle:"Help users with helpful documentation links",description:`Optionally you can pass documentation links to help point your users to useful
documentation for your terminal, or kubernetes commands etc.

The documentation links should reflect the same props as \`OverflowMenuItem\` from
carbon.

Learn more:
https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default
`,source:{code:`const documentationLinks = [
  {
    itemText: 'BX/ICP docs',
    href: '#',
    onClick: () => console.log('clicked'),
  },
  {
    itemText: 'Kubernetes docs',
    href: '#',
    onClick: () => console.log('clicked'),
  },
  {
    itemText: 'Docker docs',
    href: '#',
    onClick: () => console.log('clicked'),
  },
  {
    itemText: 'Helm docs',
    href: '#',
    onClick: () => console.log('clicked'),
  },
];`}},{story:m},{description:`Optionally you can add actions to the web terminal header bar. To add actions
you need to pass in an array of actions with objects for each object.`,source:{code:`<WebTerminal
  actions={[
    {
      renderIcon: Code32,
      onClick: () => {},
      iconDescription: 'Create new deployment',
    },
  ]}
>
  ...
</WebTerminal>`}}]});K.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const X=[{renderIcon:n=>e.createElement(ae,{size:16,...n}),onClick:S("clicked on action"),iconDescription:"Create new deployment"},{renderIcon:n=>e.createElement(re,{size:16,...n}),onClick:S("clicked on action"),iconDescription:"Copy logs"}],E=n=>e.createElement(b,null,e.createElement(G,null),e.createElement(h,null,"This is where you would put content"),e.createElement(d,{...n},e.createElement("div",{className:"example-terminal"},e.createElement("p",null,"Connection successful."),e.createElement("p",null,"DISCLAIMER: This is not a real terminal, you would pass your own terminal component into the children of the WebTerminal component."),e.createElement("p",null,"Please see the docs of this component for more information."),e.createElement("p",null,"joebob:~$")))),l=E.bind({});l.args={documentationLinks:U,actions:X,closeIconDescription:"Close terminal",documentationLinksIconDescription:"Show documentation links"};const p=E.bind({});p.args={documentationLinks:U,closeIconDescription:"Close terminal",documentationLinksIconDescription:"Show documentation links"};const m=E.bind({});m.args={actions:X,closeIconDescription:"Close terminal"};const lt={title:"IBM Products/Patterns/Web terminal/WebTerminal",tags:["autodocs"],parameters:{layout:"fullscreen",styles:ke,docs:{page:K}},component:d};var O,R,D;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <WebTerminalProvider>
      <Navigation />

      <WebTerminalContentWrapper>
        This is where you would put content
      </WebTerminalContentWrapper>

      <WebTerminal {...args}>
        <div className="example-terminal">
          <p>Connection successful.</p>
          <p>
            DISCLAIMER: This is not a real terminal, you would pass your own
            terminal component into the children of the WebTerminal component.
          </p>

          <p>Please see the docs of this component for more information.</p>
          <p>joebob:~$</p>
        </div>
      </WebTerminal>
    </WebTerminalProvider>;
}`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var M,B,L;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <WebTerminalProvider>
      <Navigation />

      <WebTerminalContentWrapper>
        This is where you would put content
      </WebTerminalContentWrapper>

      <WebTerminal {...args}>
        <div className="example-terminal">
          <p>Connection successful.</p>
          <p>
            DISCLAIMER: This is not a real terminal, you would pass your own
            terminal component into the children of the WebTerminal component.
          </p>

          <p>Please see the docs of this component for more information.</p>
          <p>joebob:~$</p>
        </div>
      </WebTerminal>
    </WebTerminalProvider>;
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var _,A,$;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <WebTerminalProvider>
      <Navigation />

      <WebTerminalContentWrapper>
        This is where you would put content
      </WebTerminalContentWrapper>

      <WebTerminal {...args}>
        <div className="example-terminal">
          <p>Connection successful.</p>
          <p>
            DISCLAIMER: This is not a real terminal, you would pass your own
            terminal component into the children of the WebTerminal component.
          </p>

          <p>Please see the docs of this component for more information.</p>
          <p>joebob:~$</p>
        </div>
      </WebTerminal>
    </WebTerminalProvider>;
}`,...($=(A=m.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};const pt=["Default","WithDocumentationLinks","WithActions"];export{l as Default,m as WithActions,p as WithDocumentationLinks,pt as __namedExportsOrder,lt as default};
