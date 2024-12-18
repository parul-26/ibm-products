import"./props-helper-DmbAnr2a.js";import{b as S,P as a,c as _}from"./index-B_euquWE.js";import{p as v,T as C}from"./settings-0ThqPtR3.js";import{e as t}from"./index-DxDX2vOa.js";import{g as U}from"./devtools-BlxCaI1L.js";import{T as z}from"./TooltipTrigger-vQXCwy5h.js";import{b as n}from"./bucket-17-BLAXVSDb.js";import{G as p}from"./bucket-7-D9w4nlSg.js";const r=`${v.prefix}--user-profile-image`,u="UserProfileImage";let l=t.forwardRef(({backgroundColor:s,className:y,kind:m,icon:b,initials:o,image:d,imageDescription:k,size:i,theme:q,tooltipText:c,tooltipAlignment:$="bottom",...E},P)=>{const T=S(),w={user:{md:e=>t.createElement(n,{size:20,...e}),lg:e=>t.createElement(n,{size:24,...e}),xl:e=>t.createElement(n,{size:32,...e})},group:{md:e=>t.createElement(p,{size:20,...e}),lg:e=>t.createElement(p,{size:24,...e}),xl:e=>t.createElement(p,{size:32,...e})}},x=()=>{var e,f;return o&&o.length===2?o:((f=(e=(o||"").match(/(^\S\S?|\b\S)?/g))==null?void 0:e.join("").match(/(^\S|\S$)?/g))==null?void 0:f.join("").toUpperCase())||""},I=()=>d?()=>t.createElement("img",{alt:k,src:d,className:`${r}__photo ${r}__photo--${i}`}):o?x:m&&i?w[m][i]:b,N=()=>{const e=["light-cyan","dark-cyan","light-gray","dark-gray","light-green","dark-green","light-magenta","dark-magenta","light-purple","dark-purple","light-teal","dark-teal"];return e[Math.floor(Math.random()*e.length)]},g=I(),h=()=>t.createElement("div",{...E,ref:P,className:_([r,y,`${r}--${i}`,`${r}--${q}`,`${r}--${s||N()}`]),...U(u)},t.createElement(g,null));return g&&(c?t.createElement(C,{align:$,label:c,className:`${r}__tooltip ${T}--icon-tooltip`},t.createElement(z,null,h())):h())});l=v.checkComponentEnabled(l,u);l.displayName=u;l.propTypes={backgroundColor:a.oneOf(["light-cyan","dark-cyan","light-gray","dark-gray","light-green","dark-green","light-magenta","dark-magenta","light-purple","dark-purple","light-teal","dark-teal"]),className:a.string,icon:a.func,image:a.string,imageDescription:a.string.isRequired.if(({image:s})=>!!s),initials:a.string,kind:a.oneOf(["user","group"]),size:a.oneOf(["xl","lg","md"]).isRequired,theme:a.oneOf(["light","dark"]).isRequired,tooltipAlignment:a.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]),tooltipText:a.string};l.__docgenInfo={description:"The user profile avatar allows for an image of the user to be displayed by passing in the image prop. By default the component will display a user icon on a blue background.",methods:[],displayName:"UserProfileImage",props:{tooltipAlignment:{defaultValue:{value:"'bottom'",computed:!1},description:"Specify how the trigger should align with the tooltip",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'top-left'",computed:!1},{value:"'top-right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'bottom-left'",computed:!1},{value:"'bottom-right'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},backgroundColor:{description:`The background color passed should match one of the background colors in the library documentation:
https://pages.github.ibm.com/carbon/ibm-products/patterns/user-profile-images/`,type:{name:"enum",value:[{value:"'light-cyan'",computed:!1},{value:"'dark-cyan'",computed:!1},{value:"'light-gray'",computed:!1},{value:"'dark-gray'",computed:!1},{value:"'light-green'",computed:!1},{value:"'dark-green'",computed:!1},{value:"'light-magenta'",computed:!1},{value:"'dark-magenta'",computed:!1},{value:"'light-purple'",computed:!1},{value:"'dark-purple'",computed:!1},{value:"'light-teal'",computed:!1},{value:"'dark-teal'",computed:!1}]},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},icon:{description:"Provide a custom icon to use if you need to use an icon other than the included ones",type:{name:"func"},required:!1},image:{description:"When passing the image prop, supply a full path to the image to be displayed.",type:{name:"string"},required:!1},imageDescription:{description:"When passing the image prop use the imageDescription prop to describe the image for screen reader.",type:{name:"string"},required:!0},initials:{description:"When passing the initials prop, either send the initials to be used or the user's display name. The first two capital letters of the display name will be used as the initials.",type:{name:"string"},required:!1},kind:{description:'When passing the kind prop, use either "user" or "group". The values match up to the Carbon Library icons.',type:{name:"enum",value:[{value:"'user'",computed:!1},{value:"'group'",computed:!1}]},required:!1},size:{description:"Set the size of the avatar circle",type:{name:"enum",value:[{value:"'xl'",computed:!1},{value:"'lg'",computed:!1},{value:"'md'",computed:!1}]},required:!0},theme:{description:"Set theme in which the component will be rendered",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!0},tooltipText:{description:"Pass in the display name to have it shown on hover",type:{name:"string"},required:!1}}};export{l as U};
