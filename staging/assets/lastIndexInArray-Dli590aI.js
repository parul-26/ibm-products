import{r as g}from"./index-BwDkhjyp.js";import{w as Q}from"./wait-CTNFjQS8.js";import{p as W,j as C}from"./settings-CljJQLyl.js";import{P as k}from"./index-Dk74W0Oi.js";import{c as V}from"./floating-ui.react-C-lGofMW.js";import{P as X,a as Y}from"./ProgressIndicator-Bhsekt4q.js";import"./props-helper-BM8tfO54.js";const v=({previousState:l,currentStep:r,blockClass:e,onMount:c,firstFocusElement:s})=>{g.useEffect(()=>{typeof c=="function"&&c()},[c]),g.useEffect(()=>{const d=async n=>{await Q(10),n.focus()};if((l==null?void 0:l.currentStep)!==r&&r>0&&s){const n=document.querySelector(s);n&&d(n)}},[r,l,e,c,s])},S=({firstIncludedStep:l,lastIncludedStep:r,stepData:e,onPrevious:c,onNext:s,isSubmitDisabled:d,setCurrentStep:n,setIsSubmitting:o,setLoadingPrevious:f=null,loadingPrevious:a=!1,onClose:i,onRequestSubmit:h,componentName:y,currentStep:q,backButtonText:O,cancelButtonText:P,submitButtonText:T,nextButtonText:R,isSubmitting:F,componentBlockClass:H,setCreateComponentActions:A,setModalIsOpen:U,experimentalSecondarySubmit:w,experimentalSecondarySubmitText:E})=>{const _=g.useCallback(()=>{o(!1),n(b=>{var $;do b++;while(!(($=e[b-1])!=null&&$.shouldIncludeStep));return b})},[n,o,e]),j=g.useCallback(()=>{y!=="CreateFullPage"&&f(!1),n(b=>{var $;do b--;while(!(($=e[b-1])!=null&&$.shouldIncludeStep));return b})},[n,e,f,y]);g.useEffect(()=>{const b=()=>{y!=="CreateFullPage"&&n(1),o(!1),i()},$=async()=>{try{await h(),b()}catch(u){o(!1),console.warn(`${y} submit error: ${u}`)}},z=async()=>{if(f==null||f(!0),typeof c=="function")try{await c(),j()}catch(u){console.warn(`${y} onBack error: ${u}`)}else j()},G=async()=>{if(o(!0),typeof s=="function")try{await s(),_()}catch(u){o(!1),console.warn(`${y} onNext error: ${u}`)}else _()},J=async()=>{if(o(!0),typeof s=="function")try{await s(),await $()}catch(u){o(!1),console.warn(`${y} onNext error: ${u}`)}else await $()},K=()=>{typeof(w==null?void 0:w.onClick)=="function"&&w.onClick()};if((e==null?void 0:e.length)>0){const u=[];(e==null?void 0:e.length)>1&&u.push({key:"create-action-button-back",label:O,onClick:z,kind:"secondary",disabled:q===l,loading:a}),u.push({key:"create-action-button-cancel",label:P,onClick:y==="CreateFullPage"?()=>U(!0):b,kind:"ghost"}),E&&!(w!=null&&w.hideSecondarySubmit)&&u.push({key:"create-action-button-experimentalSecondarySubmit",label:E,onClick:K,kind:"secondary",disabled:w==null?void 0:w.disabled}),u.push({key:"create-action-button-submit",label:q<r?R:T,onClick:q<r?G:J,disabled:d,kind:"primary",loading:F,className:`${H}__create-button`}),A(u)}},[l,r,e,s,d,O,P,q,i,R,T,h,F,H,y,_,n,A,o,U,j,c,f,a,w,E])},Z=(l,r)=>{let e=0;return l.forEach((c,s)=>{s+1>r||c.shouldIncludeStep===!1&&(e+=1)}),e},ee=({firstIncludedStep:l,previousState:r,open:e,setCurrentStep:c,stepData:s,initialStep:d,totalSteps:n,componentName:o})=>{g.useEffect(()=>{if(!(r!=null&&r.open)&&e){if(d&&n&&Number(d)<=Number(n)&&Number(d)>0){const f=Z(s,d);c(Number(d+f))}else c(l);(d&&n&&Number(d)>Number(n)||Number(d)<=0)&&console.warn(`${o}: An invalid \`initialStep\` prop was supplied. The \`initialStep\` prop should be a number that is greater than 0 or less than or equal to the number of steps your ${o} has.`)}},[l,e,r,c,s,d,n,o])},re=({stepsContext:l,stepNumber:r,introStep:e,invalid:c,shouldIncludeStep:s,secondaryLabel:d,title:n})=>{g.useEffect(()=>{l&&l.setStepData(o=>{const f={title:n,secondaryLabel:d,introStep:e,invalid:c,shouldIncludeStep:s},a=o[r-1];if((a==null?void 0:a.title)!==f.title||(a==null?void 0:a.secondaryLabel)!==f.secondaryLabel||(a==null?void 0:a.introStep)!==f.introStep||(a==null?void 0:a.shouldIncludeStep)!==f.shouldIncludeStep||(a==null?void 0:a.invalid)!==f.invalid){const i=[...o];return i[r-1]=f,i}return o})},[s,n,d,e,c,l,r])},ne=(l,r)=>{g.useEffect(()=>{l===1&&console.warn(`${r}: ${r}s with one step are not permitted. If you require only one step, please use either the CreateTearsheetNarrow, CreateSidePanel, or CreateModal components.`)},[l,r])},t=`${W.prefix}--create-influencer`,L="CreateInfluencer",N=({className:l,currentStep:r,stepData:e,title:c})=>{const s=(n,o)=>{const f=[];return n.forEach((a,i)=>{var h;((h=n[i])==null?void 0:h[o])===!1&&i<=r-1&&f.push(a)}),f.length},d=()=>{var a,i;const n=e==null?void 0:e.filter(h=>!(h!=null&&h.introStep)),o=n==null?void 0:n.filter(h=>h==null?void 0:h.shouldIncludeStep),f=s(e,"shouldIncludeStep")||0;return C.jsxs("div",{className:`${t}__left-nav`,children:[c&&C.jsx("h3",{className:`${t}__title`,children:c}),r===1&&((a=e[0])!=null&&a.introStep)?null:C.jsx(X,{currentIndex:(i=e[0])!=null&&i.introStep?r-f-2:r-f-1,spaceEqually:!0,vertical:!0,className:V(`${t}__progress-indicator`),children:o.map((h,y)=>C.jsx(Y,{label:h.title,secondaryLabel:h.secondaryLabel||void 0,invalid:h.invalid},y))})]})};return C.jsx("div",{className:V(t,l),children:d()})};N.displayName=L;N.propTypes={className:k.string,currentStep:k.number.isRequired,stepData:k.arrayOf(k.shape({introStep:k.bool,secondaryLabel:k.string,shouldIncludeStep:k.bool,title:k.node})),title:k.string};N.__docgenInfo={description:"",methods:[],displayName:"CreateInfluencer",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},currentStep:{required:!0,tsType:{name:"number"},description:"Provide the current step number.",type:{name:"number"}},stepData:{required:!1,tsType:{name:"Array",elements:[{name:"Step"}],raw:"Step[]"},description:"Provide the Set Data.",type:{name:"arrayOf",value:{name:"shape",value:{introStep:{name:"bool",required:!1},secondaryLabel:{name:"string",required:!1},shouldIncludeStep:{name:"bool",required:!1},title:{name:"node",required:!1}}}}},title:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:"Title.",type:{name:"string"}}}};const le=(l,r,e)=>{var c;for(let s=l.length-1;s>=0;s--)if(((c=l[s])==null?void 0:c[r])===e)return s+1;return-1};export{N as C,ne as a,ee as b,S as c,re as d,Z as g,le as l,v as u};
