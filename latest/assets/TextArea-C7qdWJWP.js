import{b as _e,d as be,n as we,p as $e,c as w,_ as Te,P as t,i as G}from"./index--clQM3eT.js";import{e as r,r as x}from"./index-BOZkNhcz.js";import{F as ye}from"./FormContext-qEw5DNxz.js";import{u as ve}from"./useAnnouncer-Dwt0jqXi.js";import{n as I}from"./settings-BYgtfLKl.js";import{T}from"./Text-C-NQiyV2.js";import{W as H,a as J}from"./bucket-18-Dly-sSmK.js";const Q=r.forwardRef((U,X)=>{var j;const{className:Y,decorator:y,disabled:d=!1,id:N,labelText:W,hideLabel:Z,onChange:D=I,onClick:O=I,onKeyDown:F=I,invalid:o=!1,invalidText:ee="",helperText:v="",light:te,placeholder:ae="",enableCounter:$=!1,maxCount:n=void 0,counterMode:s="character",warn:m=!1,warnText:re="",rows:ne=4,slug:C,...f}=U,e=_e(),{isFluid:i}=x.useContext(ye),{defaultValue:R,value:P}=f,le=be(),c=x.useRef(null),oe=we([X,c]);function V(){var p,b;const l=(R||P||((p=c.current)==null?void 0:p.value)||"").toString();return s==="character"?l.length:((b=l.match(/\w+/g))==null?void 0:b.length)||0}const[E,h]=x.useState(V());x.useEffect(()=>{h(V())},[P,R,s]),$e(()=>{f.cols&&c.current?(c.current.style.width="",c.current.style.resize="none"):c.current&&(c.current.style.width="100%")},[f.cols]);const L={id:N,onKeyDown:a=>{if(!d&&$&&s==="word"){const l=a.which;(n&&E>=n&&l===32||n&&E>=n&&l===13)&&a.preventDefault()}!d&&F&&F(a)},onPaste:a=>{if(!d&&s==="word"&&$&&typeof n<"u"&&c.current!==null){const l=c.current.value.match(/\w+/g)||[],p=a.clipboardData.getData("Text").match(/\w+/g)||[];if(l.length+p.length>n){a.preventDefault();const u=l.concat(p).slice(0,n);setTimeout(()=>{h(n)},0),c.current.value=u.join(" ")}}},onChange:a=>{var l,p,b;if(!d){if(s=="character")(l=a==null?void 0:a.persist)==null||l.call(a),setTimeout(()=>{var u,B;h((B=(u=a.target)==null?void 0:u.value)==null?void 0:B.length)},0);else if(s=="word"){if(!a.target.value){setTimeout(()=>{h(0)},0);return}if($&&typeof n<"u"&&c.current!==null){const u=(b=(p=a.target)==null?void 0:p.value)==null?void 0:b.match(/\w+/g);u&&u.length<=n?(c.current.removeAttribute("maxLength"),setTimeout(()=>{h(u.length)},0)):u&&u.length>n&&setTimeout(()=>{h(u.length)},0)}}D&&D(a)}},onClick:a=>{!d&&O&&O(a)}},se=w(`${e}--form-item`,Y),ie=w(`${e}--text-area__wrapper`,{[`${e}--text-area__wrapper--cols`]:f.cols,[`${e}--text-area__wrapper--readonly`]:f.readOnly,[`${e}--text-area__wrapper--warn`]:m,[`${e}--text-area__wrapper--slug`]:C,[`${e}--text-area__wrapper--decorator`]:y}),ce=w(`${e}--label`,{[`${e}--visually-hidden`]:Z&&!i,[`${e}--label--disabled`]:d}),ue=w(`${e}--text-area`,{[`${e}--text-area--light`]:te,[`${e}--text-area--invalid`]:o,[`${e}--text-area--warn`]:m}),de=w(`${e}--label`,{[`${e}--label--disabled`]:d,[`${e}--text-area__label-counter`]:!0}),me=w(`${e}--form__helper-text`,{[`${e}--form__helper-text--disabled`]:d}),fe=W?r.createElement(T,{as:"label",htmlFor:N,className:ce},W):null,pe=$&&n&&(s==="character"||s==="word")?r.createElement(T,{as:"div",className:de},`${E}/${n}`):null,k=v?`text-area-helper-text-${le}`:void 0,xe=v?r.createElement(T,{as:"div",id:k,className:me},v):null,q=N+"-error-msg",z=o?r.createElement(T,{as:"div",role:"alert",className:`${e}--form-requirement`,id:q},ee,i&&r.createElement(H,{className:`${e}--text-area__invalid-icon`})):null,K=m?r.createElement(T,{as:"div",role:"alert",className:`${e}--form-requirement`},re,i&&r.createElement(J,{className:`${e}--text-area__invalid-icon ${e}--text-area__invalid-icon--warning`})):null;let A;o?A=q:!o&&!m&&!i&&v&&(A=k),$&&s=="character"&&(L.maxLength=n);const M=x.useRef(null),[S,he]=x.useState(""),g=ve(E,n,s==="word"?"words":void 0);x.useEffect(()=>{if(g&&g!==S){const a=M.current;if(a){a.textContent="";const l=setTimeout(()=>{a&&(a.textContent=g,he(g))},s==="word"?2e3:1e3);return()=>{l&&clearTimeout(l)}}}},[g,S,s]);const ge=r.createElement("textarea",Te({},f,L,{placeholder:ae,"aria-readonly":!!f.readOnly,className:ue,"aria-invalid":o,"aria-describedby":A,disabled:d,rows:ne,readOnly:f.readOnly,ref:oe}));let _=r.isValidElement(C??y)?C??y:null;return _&&((j=_.type)==null?void 0:j.displayName)==="AILabel"&&(_=r.cloneElement(_,{size:"mini"})),r.createElement("div",{className:se},r.createElement("div",{className:`${e}--text-area__label-wrapper`},fe,pe),r.createElement("div",{className:ie,"data-invalid":o||null},o&&!i&&r.createElement(H,{className:`${e}--text-area__invalid-icon`}),m&&!o&&!i&&r.createElement(J,{className:`${e}--text-area__invalid-icon ${e}--text-area__invalid-icon--warning`}),ge,C?_:y?r.createElement("div",{className:`${e}--text-area__inner-wrapper--decorator`},_):"",r.createElement("span",{className:`${e}--text-area__counter-alert`,role:"alert","aria-live":"assertive","aria-atomic":"true",ref:M},g),i&&r.createElement("hr",{className:`${e}--text-area__divider`}),i&&o?z:null,i&&m&&!o?K:null),!o&&!m&&!i?xe:null,o&&!i?z:null,m&&!o&&!i?K:null)});Q.displayName="TextArea";Q.propTypes={className:t.string,cols:t.number,counterMode:t.oneOf(["character","word"]),decorator:t.node,defaultValue:t.oneOfType([t.string,t.number]),disabled:t.bool,enableCounter:t.bool,helperText:t.node,hideLabel:t.bool,id:t.string,invalid:t.bool,invalidText:t.node,labelText:t.node.isRequired,light:G(t.bool),maxCount:t.number,onChange:t.func,onClick:t.func,onKeyDown:t.func,placeholder:t.string,readOnly:t.bool,rows:t.number,slug:G(t.node),value:t.oneOfType([t.string,t.number]),warn:t.bool,warnText:t.node};export{Q as T};
