import{p as J,c as me,j as e,B as C}from"./settings-DEdZ0TrD.js";import{r}from"./index-BwDkhjyp.js";import{c as fe}from"./floating-ui.core.mjs-LzsX8FoD.js";import{w as ge}from"./wait-CTNFjQS8.js";import{S as xe}from"./StoryDocsPage-BM2rogkP.js";import{C as ye,M as he,a as be,b as ve}from"./ComposedModal-Bz57YeIR.js";import{F as Se}from"./FormGroup-2MNJUnTV.js";import{L as Te}from"./InlineLoading-b-XMbmpT.js";import{T as Ee,P as we}from"./TextInput-DnFddHXA.js";import{R as Me}from"./RadioButton-RVFxoHP5.js";import{R as qe}from"./RadioButtonGroup-C9o-g5EX.js";import{F as Ce}from"./index-Jn_1HPt0.js";import{P as t}from"./index-Dk74W0Oi.js";import{g as je}from"./devtools-BMJcATO0.js";import{u as Le}from"./usePortalTarget-C9qZOTQP.js";import{u as Oe}from"./uuidv4-BQrI85uz.js";import{a as Be}from"./events-BwXSUnsA.js";import{E as Ie}from"./bucket-6-COExmpDO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-CtP8jiW9.js";import"./index-BONylQH5.js";import"./index-DUEQWFC3.js";import"./iframe-CsPi-Tl1.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-CtkteSRf.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./index-B19trKVm.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-B0eeKBZg.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DKhmFa_m.js";import"./useNormalizedInputProps-SnNF9w2p.js";import"./Text-DzW_iQLr.js";import"./bucket-18-BepxNBd9.js";import"./FormContext-C7kRVu4t.js";import"./bucket-17-Cv_pKmw7.js";import"./useAnnouncer-Dwt0jqXi.js";import"./feature-flags-ZUymDm0z.js";import"./index-BkXf54zg.js";const j="ExportModal",N={inputType:"text",preformattedExtensions:Object.freeze([]),validExtensions:Object.freeze([])};let a=r.forwardRef(({body:f,className:g,error:x,errorMessage:T,filename:i,hidePasswordLabel:E,inputLabel:y,inputType:w="text",invalidInputText:h,loading:l,loadingMessage:b,onClose:p,onRequestSubmit:v,open:B,portalTarget:K,preformattedExtensions:o=N.preformattedExtensions,preformattedExtensionsLabel:Q,primaryButtonText:X,secondaryButtonText:Z,showPasswordLabel:ee,successMessage:te,successful:S,title:I,validExtensions:M=N.validExtensions,...se},ne)=>{const n=`${J.prefix}--export-modal`,[d,_]=r.useState(""),[re,oe]=r.useState(!1),[q,k]=r.useState(""),ae=Le(K);r.useEffect(()=>{var s,P;_(i),o&&o.length>0&&((s=o[0])!=null&&s.extension)&&k((P=o==null?void 0:o[0])==null?void 0:P.extension)},[i,o,B]),r.useEffect(()=>{if(S){const s=document.querySelector(`.${n} .${me.prefix}--modal-close-button button`);s==null||s.focus()}},[S,n]);const ie=s=>{_(s.target.value)},le=s=>{k(s)},pe=()=>{oe(!0)},de=()=>{const s=q?`${i}.${q.toLocaleLowerCase()}`:d;v&&v(s)},H=()=>{if(!re||!M||!M.length)return!1;if(!d.includes("."))return!0;const s=d.split(".").pop();return!M.includes(s)},ue=r.useRef(Oe()),ce=l||!d||H(),R=l||x||S,F={id:`text-input--${ue.current}`,value:d,onChange:ie,labelText:y,invalid:H(),invalidText:h,onBlur:pe,"data-modal-primary-focus":!0};return ae(e.jsx(Ce,{flags:{"enable-experimental-focus-wrap-without-sentinels":!0},children:e.jsxs(ye,{...se,className:fe(n,g),"aria-label":I,size:"sm",preventCloseOnClickOutside:!0,open:B,ref:ne,onClose:p,...je(j),children:[e.jsx(he,{className:`${n}__header`,closeModal:p,title:I}),e.jsxs(be,{className:`${n}__body-container`,children:[!R&&e.jsxs(e.Fragment,{children:[f&&e.jsx("p",{className:`${n}__body`,children:f}),o.length?e.jsx(Se,{legendText:Q,children:e.jsx(qe,{orientation:"vertical",onChange:le,valueSelected:q,name:"extensions",children:o.map(s=>e.jsx(Me,{id:s.extension,value:s.extension,labelText:`${s.extension} (${s.description})`,"data-modal-primary-focus":!0},s.extension))})}):e.jsx("div",{className:`${n}__input-container`,children:w==="text"?e.jsx(Ee,{...F}):e.jsx(we,{...F,showPasswordLabel:ee,hidePasswordLabel:E,tooltipPosition:"left"})})]}),e.jsxs("div",{"aria-live":"polite",className:`${n}__messaging`,children:[l&&e.jsxs(e.Fragment,{children:[e.jsx(Te,{"aria-live":"off",description:"",small:!0,withOverlay:!1}),e.jsx("p",{children:b})]}),S&&e.jsxs(e.Fragment,{children:[e.jsx(Be,{size:16,className:`${n}__checkmark-icon`}),e.jsx("p",{children:te})]}),x&&e.jsxs(e.Fragment,{children:[e.jsx(Ie,{size:16,className:`${n}__error-icon`}),e.jsx("p",{children:T})]})]})]}),!R&&e.jsxs(ve,{className:`${n}__footer`,children:[e.jsx(C,{type:"button",kind:"secondary",onClick:p,children:Z}),e.jsx(C,{type:"submit",kind:"primary",onClick:de,disabled:ce,children:X})]})]})}))});a=J.checkComponentEnabled(a,j);a.propTypes={body:t.string,className:t.string,error:t.bool,errorMessage:t.string,filename:t.string.isRequired,hidePasswordLabel:t.string,inputLabel:t.string,inputType:t.oneOf(["text","password"]),invalidInputText:t.string,loading:t.bool,loadingMessage:t.string,onClose:t.func,onRequestSubmit:t.func,open:t.bool,portalTarget:t.node,preformattedExtensions:t.arrayOf(t.shape({extension:t.string,description:t.string})),preformattedExtensionsLabel:t.string,primaryButtonText:t.string.isRequired,secondaryButtonText:t.string.isRequired,showPasswordLabel:t.string,successMessage:t.string,successful:t.bool,title:t.string.isRequired,validExtensions:t.array};a.displayName=j;a.__docgenInfo={description:"Modal dialog version of the export pattern",methods:[],displayName:"ExportModal",props:{body:{required:!1,tsType:{name:"string"},description:"Body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name",type:{name:"string"}},error:{required:!1,tsType:{name:"boolean"},description:"specify if an error occurred",type:{name:"bool"}},errorMessage:{required:!1,tsType:{name:"string"},description:"messaging to display in the event of an error",type:{name:"string"}},filename:{required:!0,tsType:{name:"string"},description:"name of the file being exported",type:{name:"string"}},hidePasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to hide key",type:{name:"string"}},inputLabel:{required:!1,tsType:{name:"string"},description:"label for the text input",type:{name:"string"}},inputType:{required:!1,tsType:{name:"union",raw:"'text' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"}]},description:"specify the type of text input",defaultValue:{value:"'text'",computed:!1},type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'password'",computed:!1}]}},invalidInputText:{required:!1,tsType:{name:"string"},description:"text for an invalid input",type:{name:"string"}},loading:{required:!1,tsType:{name:"boolean"},description:"specify if the modal is in a loading state",type:{name:"bool"}},loadingMessage:{required:!1,tsType:{name:"string"},description:"message to display during the loading state",type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Specify a handler for closing modal",type:{name:"func"}},onRequestSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:'Specify a handler for "submitting" modal. Returns the file name',type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},preformattedExtensions:{required:!1,tsType:{name:"unknown"},description:"Array of extensions to display as radio buttons",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"arrayOf",value:{name:"shape",value:{extension:{name:"string",required:!1},description:{name:"string",required:!1}}}}},preformattedExtensionsLabel:{required:!1,tsType:{name:"string"},description:"Label for the preformatted label form group",type:{name:"string"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},showPasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to show key",type:{name:"string"}},successMessage:{required:!1,tsType:{name:"string"},description:"messaging to display if the export was successful",type:{name:"string"}},successful:{required:!1,tsType:{name:"boolean"},description:"specify if the export was successful",type:{name:"bool"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}},validExtensions:{required:!1,tsType:{name:"unknown"},description:"array of valid extensions the file can have",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"array"}}}};const Mt={title:"IBM Products/Components/Export/ExportModal",component:a,tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(xe,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/carbon/ibm-products/components/export/usage/",label:"Export guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})}},argTypes:{validExtensions:{control:{type:"select",labels:{0:"no extension validation",1:"pdf extension validation"}},options:[0,1],mapping:{0:[],1:["pdf"]}},preformattedExtensions:{control:{type:"select",labels:{0:"no preformatted extensions",1:"preformatted extensions"}},options:[0,1],mapping:{0:[],1:[{extension:"YAML",description:"best for IBM managed cloud"},{extension:"BAR",description:"best for integration server"}]}}}},L={filename:"Sample02.pdf",inputLabel:"File name",onClose:()=>{},onRequestSubmit:()=>{},open:!0,primaryButtonText:"Export",secondaryButtonText:"Cancel",title:"Export",inputType:"text",successful:!0},O=({storyInitiallyOpen:f=!1,...g},x)=>{const[T,i]=r.useState(x.viewMode!=="docs"&&f),[E,y]=r.useState(!1),[w,h]=r.useState(!1),[l,b]=r.useState(!1),p=async()=>{y(!0),await ge(1e3),g.successful?h(!0):b(!0),y(!1)},v=()=>{i(!1),h(!1),b(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{...g,open:T,onClose:v,onRequestSubmit:p,loading:E,successful:w,loadingMessage:"Exporting file...",successMessage:"The file has been exported.",error:l,errorMessage:"Server error 500"}),e.jsx(C,{onClick:()=>i(!0),children:"Launch modal"})]})},u=O.bind({});u.args={...L,validExtensions:0,preformattedExtensions:0,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const c=O.bind({});c.args={...L,validExtensions:1,preformattedExtensions:0,filename:"",invalidInputText:"File must have valid extension .pdf",body:"File must be exported in a PDF format.",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const m=O.bind({});m.args={...L,filename:"test",validExtensions:0,preformattedExtensions:1,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};var $,z,D;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`({
  storyInitiallyOpen = false,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && storyInitiallyOpen);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    if (args.successful) {
      setSuccessful(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };
  return <>
      <ExportModal {...args} open={open} onClose={onCloseHandler} onRequestSubmit={onSubmitHandler} loading={loading} successful={successful} loadingMessage="Exporting file..." successMessage="The file has been exported." error={error} errorMessage="Server error 500" />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(D=(z=u.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var V,W,A;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`({
  storyInitiallyOpen = false,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && storyInitiallyOpen);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    if (args.successful) {
      setSuccessful(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };
  return <>
      <ExportModal {...args} open={open} onClose={onCloseHandler} onRequestSubmit={onSubmitHandler} loading={loading} successful={successful} loadingMessage="Exporting file..." successMessage="The file has been exported." error={error} errorMessage="Server error 500" />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var G,U,Y;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`({
  storyInitiallyOpen = false,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && storyInitiallyOpen);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    if (args.successful) {
      setSuccessful(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };
  return <>
      <ExportModal {...args} open={open} onClose={onCloseHandler} onRequestSubmit={onSubmitHandler} loading={loading} successful={successful} loadingMessage="Exporting file..." successMessage="The file has been exported." error={error} errorMessage="Server error 500" />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const qt=["Standard","WithExtensionValidation","WithPreformattedExtensions"];export{u as Standard,c as WithExtensionValidation,m as WithPreformattedExtensions,qt as __namedExportsOrder,Mt as default};
