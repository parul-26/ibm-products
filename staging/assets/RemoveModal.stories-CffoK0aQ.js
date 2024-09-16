import{p as _,j as t,B as T}from"./settings-CljJQLyl.js";import{r as a,R as ne}from"./index-BwDkhjyp.js";import{c as re}from"./floating-ui.react-C-lGofMW.js";import{L as se}from"./Link-Nc6ULaYi.js";import{S as ae}from"./StoryDocsPage-BdpnhFN0.js";import{u as ie}from"./index-D6Mwpvt5.js";import{b as pe}from"./story-helper-Ba8HmmvT.js";import{C as me,M as de,a as le,b as ce}from"./ComposedModal-qy9RXrDA.js";import{T as ue}from"./TextInput-BxExSEf6.js";import{P as e}from"./index-Dk74W0Oi.js";import{g as ye}from"./devtools-C9kUiWhx.js";import{u as fe}from"./usePortalTarget-BZfsLKvG.js";import{u as ge}from"./uuidv4-BQrI85uz.js";import{u as he}from"./usePreviousValue-DDnp_zt4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-B5D95Jtx.js";import"./index-1ulDwjQN.js";import"./index-BONylQH5.js";import"./iframe-C3O3RKYb.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./index-CUiOlLtv.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet--6H_yrng.js";import"./InlineLoading-CCyGWQ0L.js";import"./bucket-6-CJUP1MJz.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DMN3GZJC.js";import"./index-xbyQ_51k.js";import"./useNormalizedInputProps-ZjpNpqFw.js";import"./Text-B6Yb8geH.js";import"./bucket-18-9qioxFta.js";import"./FormContext-C7kRVu4t.js";import"./bucket-17-ByMkANur.js";import"./useAnnouncer-Dwt0jqXi.js";import"./feature-flags-DvPVNspo.js";import"./index-DnHywpOJ.js";const v="RemoveModal";let r=a.forwardRef(({body:n,className:f,iconDescription:g,inputInvalidText:h,inputLabelText:l,inputPlaceholderText:F,label:H,onClose:C,onRequestSubmit:G,open:c,portalTarget:U,preventCloseOnClickOutside:z,primaryButtonDisabled:A,primaryButtonText:V,primaryDangerDescription:J,resourceName:K,secondaryButtonText:Q,textConfirmation:b,title:R,...W},X)=>{const s=he({open:c}),[O,B]=a.useState(""),Y=a.useRef(ge()),Z=fe(U),ee=oe=>{B(oe.target.value)},te=A?!0:!!(b&&O!==K),x=`${_.prefix}--remove-modal`;return a.useEffect(()=>{!c&&(s!=null&&s.open)&&B("")},[c,s==null?void 0:s.open]),Z(t.jsxs(me,{...W,className:re(x,f),size:"sm","aria-label":R,open:c,ref:X,preventCloseOnClickOutside:z,onClose:C,...ye(v),children:[t.jsx(de,{title:R,label:H,iconDescription:g}),t.jsxs(le,{children:[typeof n=="string"?t.jsx("p",{className:`${x}__body`,children:n}):n,b&&t.jsx(ue,{id:`${Y.current}-confirmation-input`,className:`${x}__input`,invalidText:h,labelText:l,placeholder:F,onChange:ee,value:O,"data-modal-primary-focus":!0})]}),t.jsxs(ce,{children:[t.jsx(T,{type:"button",kind:"secondary",onClick:C,"data-modal-primary-focus":!b,children:Q}),t.jsx(T,{type:"submit",kind:"danger",dangerDescription:J,onClick:G,disabled:te,children:V})]})]}))});r=_.checkComponentEnabled(r,v);r.propTypes={body:e.node.isRequired,className:e.string,iconDescription:e.string.isRequired,inputInvalidText:e.string,inputLabelText:e.node,inputPlaceholderText:e.string,label:e.string,onClose:e.func,onRequestSubmit:e.func,open:e.bool.isRequired,portalTarget:e.node,preventCloseOnClickOutside:e.bool,primaryButtonDisabled:e.bool,primaryButtonText:e.string,primaryDangerDescription:e.string,resourceName:e.string.isRequired,secondaryButtonText:e.string,textConfirmation:e.bool,title:e.string.isRequired};r.displayName=v;r.__docgenInfo={description:"",methods:[],displayName:"RemoveModal",props:{body:{required:!0,tsType:{name:"ReactNode"},description:"The content to be displayed in the body of the modal",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Optional classname",type:{name:"string"}},iconDescription:{required:!0,tsType:{name:"string"},description:'Provide a description for "close" icon that can be read by screen readers',type:{name:"string"}},inputInvalidText:{required:!1,tsType:{name:"string"},description:"Message showed when user input fails validation",type:{name:"string"}},inputLabelText:{required:!1,tsType:{name:"ReactNode"},description:"Label for text box",type:{name:"node"}},inputPlaceholderText:{required:!1,tsType:{name:"string"},description:"Placeholder for text box",type:{name:"string"}},label:{required:!1,tsType:{name:"string"},description:"Specify the modal label texts",type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function that runs when user closes the modal",type:{name:"func"}},onRequestSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function that runs when user submits the modal",type:{name:"func"}},open:{required:!0,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},preventCloseOnClickOutside:{required:!1,tsType:{name:"boolean"},description:"Prevent closing on click outside of modal",type:{name:"bool"}},primaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"Specify whether the primary button should be disabled. This value will override textConfirmation",type:{name:"bool"}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},primaryDangerDescription:{required:!1,tsType:{name:"string"},description:"Specify the danger description on the primary button",type:{name:"string"}},resourceName:{required:!0,tsType:{name:"string"},description:"The name of the resource being acted upon",type:{name:"string"}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},textConfirmation:{required:!1,tsType:{name:"boolean"},description:"Specify whether or not to show the text confirmation input",type:{name:"bool"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}}}};const E=()=>{const{csfFile:n}=ie("meta",["meta"]);return t.jsx(ae,{altGuidelinesHref:[pe(n),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})};E.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const mt={title:"IBM Products/Patterns/Remove/RemoveModal",component:r,tags:["autodocs"],parameters:{docs:{page:E}},argTypes:{portalTarget:{control:!1}}},o="bx1001",u={body:`Deleting ${o} will permanently delete the configuration. This action cannot be undone.`,className:"remove-modal-test",title:"Confirm delete",iconDescription:"Close",inputInvalidText:"A valid value is required",inputLabelText:`Type ${o} to confirm`,inputPlaceholderText:"Name of resourceName",onClose:()=>!1,open:!0,primaryButtonDisabled:!1,primaryButtonText:"Delete",resourceName:o,secondaryButtonText:"Cancel",label:`Delete ${o}`,preventCloseOnClickOutside:!0},y=({open:n,...f},g)=>{const[h,l]=a.useState(g.viewMode!=="docs"&&n);return t.jsxs(t.Fragment,{children:[t.jsx(r,{...f,open:h,onClose:()=>l(!1)}),t.jsx(T,{onClick:()=>l(!0),children:"Launch modal"})]})},i=y.bind({});i.args={...u,body:`Removing ${o} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${o}`};const p=y.bind({});p.args={...u,body:`Removing ${o} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${o}`,open:!0};const m=y.bind({});m.args={...u,textConfirmation:!0};const d=y.bind({});d.args={...u,body:t.jsxs(ne.Fragment,{children:[`Before removing ${o}, you can find out more information on the `,t.jsx(se,{href:"https://www.carbondesignsystem.com",children:"Carbon Design System"})," website."]})};var w,q,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(D=(q=i.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var P,M,S;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(S=(M=p.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var k,N,j;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(j=(N=m.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var $,I,L;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(L=(I=d.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const dt=["Standard","RemovePattern","DeletePattern","ComponentInBodyPattern"];export{d as ComponentInBodyPattern,m as DeletePattern,p as RemovePattern,i as Standard,dt as __namedExportsOrder,mt as default};
