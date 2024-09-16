import{m as ce,n as me,T as Ie,p as ue,j as s,B as K}from"./settings-CljJQLyl.js";import{R as i,r as T}from"./index-BwDkhjyp.js";import{u as V,_ as G,C as Ce,c as Z,i as fe,e as ne,j as ye,S as ge}from"./floating-ui.react-C-lGofMW.js";import{a as je}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{S as Re}from"./StoryDocsPage-BdpnhFN0.js";import{u as we}from"./index-D6Mwpvt5.js";import{b as ze}from"./story-helper-Ba8HmmvT.js";import{C as Oe,M as ke,a as Pe,b as He}from"./ComposedModal-qy9RXrDA.js";import{P as e}from"./index-Dk74W0Oi.js";import{C as Le,c as Ae}from"./events-B5D95Jtx.js";import{L as Me}from"./InlineLoading-CCyGWQ0L.js";import{b as Ue}from"./bucket-18-9qioxFta.js";import{T as W}from"./Text-B6Yb8geH.js";import{T as We}from"./TextInput-BxExSEf6.js";import{g as Ke}from"./devtools-C9kUiWhx.js";import{u as Ge}from"./usePortalTarget-BZfsLKvG.js";import{u as se}from"./uuidv4-BQrI85uz.js";import{A as Ve}from"./bucket-0-M87sILds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-1ulDwjQN.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./iframe-C3O3RKYb.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./index-CUiOlLtv.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet--6H_yrng.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DMN3GZJC.js";import"./index-xbyQ_51k.js";import"./bucket-6-CJUP1MJz.js";import"./useNormalizedInputProps-ZjpNpqFw.js";import"./FormContext-C7kRVu4t.js";import"./bucket-17-ByMkANur.js";import"./useAnnouncer-Dwt0jqXi.js";import"./feature-flags-DvPVNspo.js";import"./index-DnHywpOJ.js";var oe;function be(d){let{iconDescription:p="Uploading file",status:a="uploading",invalid:f,name:m,tabIndex:E=0,["aria-describedby"]:g,...b}=d;const y=V();switch(a){case"uploading":return i.createElement(Me,{description:p,small:!0,withOverlay:!1,className:`${y}--file-loading`});case"edit":return i.createElement(i.Fragment,null,f&&i.createElement(Ue,{className:`${y}--file-invalid`}),i.createElement("button",G({"aria-label":`${p} - ${m}`,className:`${y}--file-close`,type:"button",tabIndex:E},b,{"aria-describedby":f?g:void 0}),oe||(oe=i.createElement(Ce,null))));case"complete":return i.createElement(Le,G({"aria-label":p,className:`${y}--file-complete`},b,{tabIndex:-1}),p&&i.createElement("title",null,p));default:return null}}be.propTypes={"aria-describedby":e.string,iconDescription:e.string,invalid:e.bool,name:e.string,status:e.oneOf(["edit","complete","uploading"]),tabIndex:e.number};function he(d){let{accept:p=[],className:a,id:f,disabled:m,labelText:E="Add file",multiple:g=!1,name:b,onAddFiles:y=me,onClick:B,pattern:R=".[0-9a-z]+$",innerRef:w,...$}=d;const u=V(),D=T.useRef(null),{current:o}=T.useRef(f||ce()),[I,q]=T.useState(!1),C=Z(`${u}--file__drop-container`,`${u}--file-browse-btn`,{[`${u}--file__drop-container--drag-over`]:I,[`${u}--file-browse-btn--disabled`]:m},a);function F(t){if(!p.length)return t;const h=new Set(p);return t.reduce((S,j)=>{const{name:L,type:J=""}=j,Q=new RegExp(R,"i"),[A]=L.match(Q)??[];return A===void 0?S:h.has(J)||h.has(A.toLowerCase())?S.concat([j]):(j.invalidFileType=!0,S.concat([j]))},[])}function z(t){const h=[...t.target.files??[]],S=F(h);return y(t,{addedFiles:S})}function l(t){const h=[...t.dataTransfer.files],S=F(h);return y(t,{addedFiles:S})}const Y=()=>{var t;m||(t=D.current)==null||t.click()};return i.createElement("div",{className:`${u}--file`,onDragOver:t=>{t.stopPropagation(),t.preventDefault(),!m&&(q(!0),t.dataTransfer.dropEffect="copy")},onDragLeave:t=>{t.stopPropagation(),t.preventDefault(),!m&&(q(!1),t.dataTransfer.dropEffect="move")},onDrop:t=>{t.stopPropagation(),t.preventDefault(),!m&&(q(!1),l(t))}},i.createElement("button",G({type:"button",className:C,ref:w,onKeyDown:t=>{var h;fe(t,[ye,ge])&&(t.preventDefault(),(h=D.current)==null||h.click())},onClick:Ae([B,Y])},$),E),i.createElement("label",{htmlFor:o,className:`${u}--visually-hidden`},E),i.createElement("input",{type:"file",id:o,className:`${u}--file-input`,ref:D,tabIndex:-1,disabled:m,accept:p.join(","),name:b,multiple:g,onChange:z,onClick:t=>{t.target.value=null}}))}he.propTypes={accept:e.arrayOf(e.string),className:e.string,disabled:e.bool,id:e.string,labelText:e.string.isRequired,multiple:e.bool,name:e.string,onAddFiles:e.func,onClick:e.func,pattern:e.string,role:ne(e.number),tabIndex:ne(e.number)};function xe(d){let{uuid:p,name:a,status:f="uploading",iconDescription:m,onDelete:E=me,invalid:g,errorSubject:b,errorBody:y,size:B,className:R,...w}=d;const $=T.useRef(null),[u,D]=T.useState(!1),o=V(),{current:I}=T.useRef(p||ce()),q=Z(`${o}--file__selected-file`,R,{[`${o}--file__selected-file--invalid`]:g,[`${o}--file__selected-file--md`]:B==="md",[`${o}--file__selected-file--sm`]:B==="sm"}),C=g?`${o}--file-filename-container-wrap-invalid`:`${o}--file-filename-container-wrap`,F=l=>l==null?void 0:l.replace(/\s+/g,""),z=l=>(D(l.offsetWidth<l.scrollWidth),l.offsetWidth<l.scrollWidth);return T.useLayoutEffect(()=>{z($.current)},[o,a]),i.createElement("span",G({className:q},w),u?i.createElement("div",{className:C},i.createElement(Ie,{label:a,align:"bottom",className:`${o}--file-filename-tooltip`},i.createElement("button",{className:`${o}--file-filename-button`,type:"button"},i.createElement(W,{ref:$,as:"p",title:a,className:`${o}--file-filename-button`,id:F(a)},a)))):i.createElement(W,{ref:$,as:"p",title:a,className:`${o}--file-filename`,id:F(a)},a),i.createElement("div",{className:`${o}--file-container-item`},i.createElement("span",{className:`${o}--file__state-container`},i.createElement(be,{name:a,iconDescription:m,status:f,invalid:g,"aria-describedby":g&&b?`${F(a)}-id-error`:void 0,onKeyDown:l=>{fe(l,[ye,ge])&&f==="edit"&&(l.preventDefault(),E(l,{uuid:I}))},onClick:l=>{f==="edit"&&E(l,{uuid:I})}}))),g&&b&&i.createElement("div",{className:`${o}--form-requirement`,role:"alert",id:`${F(a)}-id-error`},i.createElement(W,{as:"div",className:`${o}--form-requirement__title`},b),y&&i.createElement(W,{as:"p",className:`${o}--form-requirement__supplement`},y)))}xe.propTypes={errorBody:e.string,errorSubject:e.string,iconDescription:e.string,invalid:e.bool,name:e.string,onDelete:e.func,size:e.oneOf(["sm","md","lg"]),status:e.oneOf(["uploading","edit","complete"]),uuid:e.string};const ee="ImportModal",Ye={accept:Object.freeze([])};let N=T.forwardRef(({accept:d=Ye.accept,className:p,defaultErrorBody:a,defaultErrorHeader:f,description:m,fetchErrorBody:E,fetchErrorHeader:g,fileDropHeader:b,fileDropLabel:y,fileUploadLabel:B,inputButtonIcon:R,inputButtonText:w,inputId:$,inputLabel:u,inputPlaceholder:D,invalidFileTypeErrorBody:o,invalidFileTypeErrorHeader:I,invalidIconDescription:q,maxFileSize:C,maxFileSizeErrorBody:F,maxFileSizeErrorHeader:z,onClose:l,onRequestSubmit:Y,open:t,portalTarget:h,primaryButtonText:S,secondaryButtonText:j,title:L,...J},Q)=>{const A=V(),[O,M]=T.useState([]),[k,te]=T.useState(""),ve=Ge(h),Ee=r=>{const v=new Set(d),_=r.name,c=r.type,n=`.${_.split(".").pop()}`;return!(v.has(c)||v.has(n)||d.length===0)},X=r=>{const _=[...r.map(c=>{const n={uuid:c.uuid||se(),status:"edit",iconDescription:q,name:c.name,fileSize:c.size,invalidFileType:c.invalidFileType,fileData:c,fetchError:c.fetchError};return n.fetchError?(n.errorBody=E||a,n.errorSubject=g||f,n.invalid=!0):n.invalidFileType?(n.errorBody=o||a,n.errorSubject=I||f,n.invalid=!0):C&&((n==null?void 0:n.fileSize)??0)>C&&(n.errorBody=F||a,n.errorSubject=z||f,n.invalid=!0),n})];M(_)},Fe=async r=>{r.preventDefault();const v=k.substring(k.lastIndexOf("/")+1).split("?")[0],_={name:v,status:"uploading",uuid:se()};M([_]);try{const c=await fetch(k);if(!c.ok||c.status!==200)throw new Error(`${c.status}`);const n=await c.blob(),U=new File([n],v,{type:n.type});U.invalidFileType=Ee(U),U.uuid=_.uuid,X([U])}catch{const n={..._,fetchError:!0};X([n])}},Se=(r,{addedFiles:v})=>{r.stopPropagation(),X(v)},_e=r=>{const v=O.filter(_=>_.uuid!==r);M(v)},$e=()=>{Y(O)},De=r=>{te(r.target.value)},re=()=>{M([]),te(""),l&&l()},ie=O.length,ae=O.filter(r=>!r.invalid).length,P=ie>0,qe=!P||!(ae>0),Ne=!k||P,Be=`${ae} / ${ie} ${B}`,x=`${ue.prefix}--import-modal`;return ve(s.jsxs(Oe,{...J,open:t,ref:Q,...Ke(ee),"aria-label":L,className:Z(x,p),size:"sm",preventCloseOnClickOutside:!0,onClose:re,children:[s.jsx(ke,{className:`${x}__header`,title:L}),s.jsxs(Pe,{className:`${x}__body-container`,children:[m&&s.jsx("p",{className:`${x}__body`,children:m}),b&&s.jsx("p",{className:`${x}__file-drop-header`,children:b}),s.jsx(he,{accept:d,labelText:y,onAddFiles:Se,disabled:P,"data-modal-primary-focus":!0}),u&&s.jsx("p",{className:`${x}__label`,children:u}),s.jsxs("div",{className:`${x}__input-group`,children:[s.jsx(We,{labelText:"",id:$,onChange:De,placeholder:D,value:k,disabled:P,"aria-label":u}),s.jsx(K,{onClick:Fe,className:`${x}__import-button`,size:"sm",disabled:Ne,renderIcon:R?r=>s.jsx(Ve,{size:20,...r}):null,children:w})]}),s.jsxs("div",{className:`${A}--file-container ${x}__file-container`,children:[P&&s.jsx("p",{className:`${x}__helper-text`,children:Be}),O.map(r=>s.jsx(xe,{onDelete:()=>_e(r.uuid),name:r.name,status:r.status,size:"lg",uuid:r.uuid,iconDescription:r.iconDescription,invalid:r.invalid,errorBody:r.errorBody,errorSubject:r.errorSubject,filesize:r.fileSize},r.uuid))]})]}),s.jsxs(He,{className:`${x}__footer`,children:[s.jsx(K,{type:"button",kind:"secondary",onClick:re,children:j}),s.jsx(K,{type:"submit",kind:"primary",onClick:$e,disabled:qe,children:S})]})]}))});N=ue.checkComponentEnabled(N,ee);N.propTypes={accept:e.array,className:e.string,defaultErrorBody:e.string.isRequired,defaultErrorHeader:e.string.isRequired,description:e.string,fetchErrorBody:e.string,fetchErrorHeader:e.string,fileDropHeader:e.string,fileDropLabel:e.string,fileUploadLabel:e.string,inputButtonIcon:e.bool,inputButtonText:e.string.isRequired,inputId:e.string,inputLabel:e.string,inputPlaceholder:e.string,invalidFileTypeErrorBody:e.string,invalidFileTypeErrorHeader:e.string,invalidIconDescription:e.string,maxFileSize:e.number,maxFileSizeErrorBody:e.string,maxFileSizeErrorHeader:e.string,onClose:e.func,onRequestSubmit:e.func.isRequired,open:e.bool.isRequired,portalTarget:e.node,primaryButtonText:e.string.isRequired,secondaryButtonText:e.string.isRequired,title:e.string.isRequired};N.displayName=ee;N.__docgenInfo={description:"",methods:[],displayName:"ImportModal",props:{accept:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Specifies the file types that are valid for importing",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"array"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name",type:{name:"string"}},defaultErrorBody:{required:!0,tsType:{name:"string"},description:"The default message shown for an import error",type:{name:"string"}},defaultErrorHeader:{required:!0,tsType:{name:"string"},description:"The default header that is displayed to show an error message",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"Content that is displayed inside the modal",type:{name:"string"}},fetchErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error body to display specifically for a fetch error",type:{name:"string"}},fetchErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a fetch error",type:{name:"string"}},fileDropHeader:{required:!1,tsType:{name:"string"},description:"Header for the drag and drop box",type:{name:"string"}},fileDropLabel:{required:!1,tsType:{name:"string"},description:"Label for the drag and drop box",type:{name:"string"}},fileUploadLabel:{required:!1,tsType:{name:"string"},description:"Label that appears when a file is uploaded to show number of files (1 / 1)",type:{name:"string"}},inputButtonIcon:{required:!1,tsType:{name:"boolean"},description:"Button icon for import by url button",type:{name:"bool"}},inputButtonText:{required:!0,tsType:{name:"string"},description:"Button text for import by url button",type:{name:"string"}},inputId:{required:!1,tsType:{name:"string"},description:"ID for text input",type:{name:"string"}},inputLabel:{required:!1,tsType:{name:"string"},description:"Header to display above import by url",type:{name:"string"}},inputPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder for text input",type:{name:"string"}},invalidFileTypeErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error message to display specifically for a invalid file type error",type:{name:"string"}},invalidFileTypeErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a invalid file type error",type:{name:"string"}},invalidIconDescription:{required:!1,tsType:{name:"string"},description:"Description for delete file icon",type:{name:"string"}},maxFileSize:{required:!1,tsType:{name:"number"},description:"File size limit in bytes",type:{name:"number"}},maxFileSizeErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error message to display specifically for a max file size error",type:{name:"string"}},maxFileSizeErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a max file size error",type:{name:"string"}},open:{required:!0,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}},onClose:{description:"Specify a handler for closing modal",type:{name:"func"},required:!1},onRequestSubmit:{description:'Specify a handler for "submitting" modal. Access the imported file via `file => {}`',type:{name:"func"},required:!0}}};const Te=()=>{const{csfFile:d}=we("meta",["meta"]);return s.jsx(Re,{altGuidelinesHref:[ze(d),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})};Te.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Mt={title:"IBM Products/Patterns/Import and upload/ImportModal",component:N,tags:["autodocs"],parameters:{docs:{page:Te}},argTypes:{accept:{control:{type:"select",labels:{0:"image (png, jpeg or gif)",1:"document (doc or pdf)",2:"development (html, css or javascript)"}},options:[0,1,2],mapping:{0:["image/png","image/jpeg","image/gif"],1:["application/doc","application/docx","application/pdf"],2:["text/plain","text/css","text/html","text/javascript"]}},portalTarget:{control:!1}}},Je={className:"test-class",defaultErrorBody:"Select a new file and try again.",defaultErrorHeader:"Import failed",description:"You can specify a file to import by either dragging it into the drag and drop area or by specifying a URL. (Maximum file size of 500KB)",fetchErrorBody:"Unable to fetch URL.",fetchErrorHeader:"Import failed",fileDropHeader:"Add files using drag and drop",fileDropLabel:"Drag and drop files here or click to upload",fileUploadLabel:"files uploaded",inputButtonIcon:!1,inputButtonText:"Add file",inputId:"test-id",inputLabel:"Add a file by specifying a URL",inputPlaceholder:"URL",invalidFileTypeErrorBody:"Invalid file type.",invalidFileTypeErrorHeader:"Import failed",invalidIconDescription:"Delete",maxFileSize:5e5,maxFileSizeErrorBody:"500kb max file size. Select a new file and try again.",maxFileSizeErrorHeader:"Import failed",onClose:je("onClose event"),onRequestSubmit:d=>console.log("file contents",d),open:!0,primaryButtonText:"Import",secondaryButtonText:"Cancel",title:"Import"},Qe=d=>{const[p,a]=T.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(N,{...d,open:p,onClose:()=>a(!1)}),s.jsx(K,{onClick:()=>a(!0),children:"Launch modal"})]})},H=Qe.bind({});H.args={accept:0,...Je};var le,de,pe;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <ImportModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(pe=(de=H.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const Ut=["Standard"];export{H as Standard,Ut as __namedExportsOrder,Mt as default};
