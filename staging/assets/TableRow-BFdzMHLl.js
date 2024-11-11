import{b as z,c as $,l as ae,_ as D,d as Ne}from"./index-C8rbkH0g.js";import{r as C,R as u}from"./index-BwDkhjyp.js";import{P as l}from"./index-Dk74W0Oi.js";import{k as se}from"./settings-DI4GKhuL.js";import{u as oe}from"./index-7nuGG3yx.js";import{w as ve}from"./wrapComponent-BxtqFmr4.js";import{c as xe,f as we}from"./bucket-0-DwwVbvd9.js";import{c as M,g as $e}from"./_commonjsHelpers-BosuxZz1.js";const S={NONE:"NONE",DESC:"DESC",ASC:"ASC"},Ee=C.createContext({titleId:void 0,descriptionId:void 0}),ie=(e,t)=>{var h,g,d,m;if(e.children.length>0)return!1;const n=window.getComputedStyle(e);t.font=n.font?n.font:`${n.fontSize}" "${n.fontFamily}`;let a=(t==null?void 0:t.measureText(e.textContent??"")).width??0;const s=(h=n.letterSpacing)==null?void 0:h.split("px");s&&s.length&&!isNaN(Number(s[0]))&&(a+=Number(s[0])*(((g=e.textContent)==null?void 0:g.length)??0));const o=(d=n.paddingLeft)==null?void 0:d.split("px");o&&o.length&&!isNaN(Number(o[0]))&&(a+=Number(o[0]));const i=(m=n.paddingLeft)==null?void 0:m.split("px");return i&&i.length&&!isNaN(Number(i[0]))&&(a+=Number(i[0])),a>e.getBoundingClientRect().width},Te=e=>{var H;let{className:t,children:n,useZebraStyles:r,size:a="lg",isSortable:s=!1,useStaticWidth:o,stickyHeader:i,overflowMenuOnHover:h=!0,experimentalAutoAlign:g=!1,...d}=e;const{titleId:m,descriptionId:y}=C.useContext(Ee),c=z(),[R,p]=C.useState(!1),f=C.useRef(null),A=$(`${c}--data-table`,t,{[`${c}--data-table--${a}`]:a,[`${c}--data-table--sort`]:s,[`${c}--data-table--zebra`]:r,[`${c}--data-table--static`]:o,[`${c}--data-table--sticky-header`]:i,[`${c}--data-table--visible-overflow-menu`]:!h}),N=C.useCallback(function(){var b,_;(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?(b=f.current)==null||b.classList.add(`${c}--data-table--top-aligned-body`):(_=f.current)==null||_.classList.remove(`${c}--data-table--top-aligned-body`)},[c]),I=C.useCallback(function(){var b,_;(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?(b=f.current)==null||b.classList.add(`${c}--data-table--top-aligned-header`):(_=f.current)==null||_.classList.remove(`${c}--data-table--top-aligned-header`)},[c]),x=C.useCallback(()=>{if(g){const b=document.createElement("canvas").getContext("2d");if(f.current&&b){const _=Array.from(f.current.querySelectorAll("td")).some(U=>ie(U,b)),F=Array.from(f.current.querySelectorAll("th")).some(U=>{const re=U.querySelector(`.${c}--table-header-label`);return re&&ie(re,b)});N(_),I(F)}}else N(!1),I(!1)},[g,N,I,c]),q=se(x,100);oe("resize",q);const O=C.useCallback(()=>{var _,F;const w=(_=f==null?void 0:f.current)==null?void 0:_.parentNode,b=(F=f==null?void 0:f.current)==null?void 0:F.firstChild;(b==null?void 0:b.scrollWidth)>(w==null?void 0:w.clientWidth)?p(!0):p(!1)},[]),B=se(O,100);oe("resize",B),ae(()=>{O()},[O]),typeof document<"u"&&((H=document==null?void 0:document.fonts)!=null&&H.status)&&document.fonts.status!=="loaded"&&document.fonts.ready.then(()=>{x()}),ae(()=>{x()},[x,a]);const j=u.createElement("div",{className:`${c}--data-table-content`,tabIndex:R?0:void 0},u.createElement("table",D({"aria-labelledby":m,"aria-describedby":y},d,{className:A,ref:f}),n));return i?u.createElement("section",{className:`${c}--data-table_inner-container`},j):j};Te.propTypes={children:l.node,className:l.string,experimentalAutoAlign:l.bool,isSortable:l.bool,overflowMenuOnHover:l.bool,size:l.oneOf(["xs","sm","md","lg","xl"]),stickyHeader:l.bool,useStaticWidth:l.bool,useZebraStyles:l.bool};const Ae=e=>{let{children:t,className:n,...r}=e;return u.createElement("tbody",D({"aria-live":"polite",className:n},r),t)};Ae.propTypes={"aria-live":l.oneOf(["polite","assertive","off"]),children:l.node,className:l.string};const Ie=u.forwardRef((e,t)=>{let{children:n,className:r,hasSlugHeader:a,colSpan:s,...o}=e;const i=z(),h=$(r,{[`${i}--table-cell--column-slug`]:a});return u.createElement("td",D({className:h||void 0,ref:t,colSpan:s},o),n)});Ie.displayName="TableCell";const cn=ve({name:"TableHead",type:"thead"}),Oe="col",fe={buttonDescription:"carbon.table.header.icon.description"},He=(e,t)=>t&&e===fe.buttonDescription?t.isSortHeader&&S?t.sortDirection===S.NONE?`Click to sort rows by ${t.header} header in ascending order`:t.sortDirection===S.ASC?`Click to sort rows by ${t.header} header in descending order`:`Click to unsort rows by ${t.header} header`:`Click to sort rows by ${t.header} header in ascending order`:"",De={[S.NONE]:"none",[S.ASC]:"ascending",[S.DESC]:"descending"},Y=u.forwardRef(function(t,n){let{className:r,children:a,colSpan:s,isSortable:o=!1,isSortHeader:i,onClick:h,scope:g=Oe,sortDirection:d,translateWithId:m=He,slug:y,id:c,...R}=t;const p=z(),f=Ne("table-sort"),A=C.useRef(null);let N;y&&(N=u.cloneElement(y,{size:"mini",ref:A}));const I=$({[`${p}--table-header-label`]:!0,[`${p}--table-header-label--slug`]:y});if(!o)return u.createElement("th",D({},R,{id:c,className:r,scope:g,colSpan:s,ref:n}),a?u.createElement("div",{className:I},a,N):null);const x=$(r,{[`${p}--table-sort`]:!0,[`${p}--table-sort--active`]:i&&d!==S.NONE,[`${p}--table-sort--descending`]:i&&d===S.DESC}),q=!i||!d?"none":De[d],O=m&&m("carbon.table.header.icon.description",{header:a,sortDirection:d,isSortHeader:i,sortStates:S}),B=$(r,`${p}--table-sort__header`,{[`${p}--table-sort__header--slug`]:y}),j=H=>{if(!(y&&A.current&&A.current.contains(H.target))&&h)return h(H)};return u.createElement("th",{id:c,"aria-sort":q,className:B,colSpan:s,ref:n,scope:g},u.createElement("div",{className:`${p}--table-sort__description`,id:f},O),u.createElement("button",D({type:"button","aria-describedby":f,className:x,onClick:j},R),u.createElement("span",{className:`${p}--table-sort__flex`},u.createElement("div",{className:`${p}--table-header-label`},a),u.createElement(xe,{size:20,className:`${p}--table-sort__icon`}),u.createElement(we,{size:20,className:`${p}--table-sort__icon-unsorted`}),N)))});Y.propTypes={children:l.node,className:l.string,colSpan:l.number,id:l.string,isSortHeader:l.bool,isSortable:l.bool,onClick:l.func,scope:l.string,sortDirection:l.oneOf(Object.values(S)),translateWithId:l.func};Y.translationKeys=Object.values(fe);Y.displayName="TableHeader";var Pe=200,J="__lodash_hash_undefined__",Le=1/0,he=9007199254740991,Re="[object Arguments]",je="[object Function]",Fe="[object GeneratorFunction]",Me="[object Symbol]",ke=/[\\^$.*+?()[\]{}|]/g,ze=/^\[object .+?Constructor\]$/,Ge=/^(?:0|[1-9]\d*)$/,Ke=typeof M=="object"&&M&&M.Object===Object&&M,We=typeof self=="object"&&self&&self.Object===Object&&self,X=Ke||We||Function("return this")();function qe(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Be(e,t){var n=e?e.length:0;return!!n&&Ve(e,t,0)>-1}function Ue(e,t){for(var n=-1,r=e?e.length:0,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}function Q(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}function Ze(e,t,n,r){for(var a=e.length,s=n+-1;++s<a;)if(t(e[s],s,e))return s;return-1}function Ve(e,t,n){if(t!==t)return Ze(e,Ye,n);for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}function Ye(e){return e!==e}function Je(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Xe(e,t){return e.has(t)}function Qe(e,t){return e==null?void 0:e[t]}function et(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function pe(e,t){return function(n){return e(t(n))}}var tt=Array.prototype,nt=Function.prototype,G=Object.prototype,Z=X["__core-js_shared__"],le=function(){var e=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),be=nt.toString,L=G.hasOwnProperty,ee=G.toString,rt=RegExp("^"+be.call(L).replace(ke,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ce=X.Symbol,at=pe(Object.getPrototypeOf,Object),st=G.propertyIsEnumerable,ot=tt.splice,ue=ce?ce.isConcatSpreadable:void 0,V=Object.getOwnPropertySymbols,de=Math.max,it=me(X,"Map"),P=me(Object,"create");function v(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function lt(){this.__data__=P?P(null):{}}function ct(e){return this.has(e)&&delete this.__data__[e]}function ut(e){var t=this.__data__;if(P){var n=t[e];return n===J?void 0:n}return L.call(t,e)?t[e]:void 0}function dt(e){var t=this.__data__;return P?t[e]!==void 0:L.call(t,e)}function ft(e,t){var n=this.__data__;return n[e]=P&&t===void 0?J:t,this}v.prototype.clear=lt;v.prototype.delete=ct;v.prototype.get=ut;v.prototype.has=dt;v.prototype.set=ft;function E(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ht(){this.__data__=[]}function pt(e){var t=this.__data__,n=K(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():ot.call(t,n,1),!0}function bt(e){var t=this.__data__,n=K(t,e);return n<0?void 0:t[n][1]}function mt(e){return K(this.__data__,e)>-1}function gt(e,t){var n=this.__data__,r=K(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}E.prototype.clear=ht;E.prototype.delete=pt;E.prototype.get=bt;E.prototype.has=mt;E.prototype.set=gt;function T(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function yt(){this.__data__={hash:new v,map:new(it||E),string:new v}}function _t(e){return W(this,e).delete(e)}function St(e){return W(this,e).get(e)}function Ct(e){return W(this,e).has(e)}function Nt(e,t){return W(this,e).set(e,t),this}T.prototype.clear=yt;T.prototype.delete=_t;T.prototype.get=St;T.prototype.has=Ct;T.prototype.set=Nt;function k(e){var t=-1,n=e?e.length:0;for(this.__data__=new T;++t<n;)this.add(e[t])}function vt(e){return this.__data__.set(e,J),this}function xt(e){return this.__data__.has(e)}k.prototype.add=k.prototype.push=vt;k.prototype.has=xt;function wt(e,t){var n=te(e)||ge(e)?Je(e.length,String):[],r=n.length,a=!!r;for(var s in e)a&&(s=="length"||Ft(s,r))||n.push(s);return n}function K(e,t){for(var n=e.length;n--;)if(qt(e[n][0],t))return n;return-1}function $t(e,t,n,r){var a=-1,s=Be,o=!0,i=e.length,h=[],g=t.length;if(!i)return h;t.length>=Pe&&(s=Xe,o=!1,t=new k(t));e:for(;++a<i;){var d=e[a],m=d;if(d=d!==0?d:0,o&&m===m){for(var y=g;y--;)if(t[y]===m)continue e;h.push(d)}else s(t,m,r)||h.push(d)}return h}function Et(e,t,n,r,a){var s=-1,o=e.length;for(n||(n=jt),a||(a=[]);++s<o;){var i=e[s];n(i)?Q(a,i):a[a.length]=i}return a}function Tt(e,t,n){var r=t(e);return te(e)?r:Q(r,n(e))}function At(e){if(!ne(e)||kt(e))return!1;var t=_e(e)||et(e)?rt:ze;return t.test(Wt(e))}function It(e){if(!ne(e))return Gt(e);var t=zt(e),n=[];for(var r in e)r=="constructor"&&(t||!L.call(e,r))||n.push(r);return n}function Ot(e,t){return e=Object(e),Ht(e,t,function(n,r){return r in e})}function Ht(e,t,n){for(var r=-1,a=t.length,s={};++r<a;){var o=t[r],i=e[o];n(i,o)&&(s[o]=i)}return s}function Dt(e,t){return t=de(t===void 0?e.length-1:t,0),function(){for(var n=arguments,r=-1,a=de(n.length-t,0),s=Array(a);++r<a;)s[r]=n[t+r];r=-1;for(var o=Array(t+1);++r<t;)o[r]=n[r];return o[t]=s,qe(e,this,o)}}function Pt(e){return Tt(e,Vt,Rt)}function W(e,t){var n=e.__data__;return Mt(t)?n[typeof t=="string"?"string":"hash"]:n.map}function me(e,t){var n=Qe(e,t);return At(n)?n:void 0}var Lt=V?pe(V,Object):Ce,Rt=V?function(e){for(var t=[];e;)Q(t,Lt(e)),e=at(e);return t}:Ce;function jt(e){return te(e)||ge(e)||!!(ue&&e&&e[ue])}function Ft(e,t){return t=t??he,!!t&&(typeof e=="number"||Ge.test(e))&&e>-1&&e%1==0&&e<t}function Mt(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function kt(e){return!!le&&le in e}function zt(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||G;return e===n}function Gt(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}function Kt(e){if(typeof e=="string"||Zt(e))return e;var t=e+"";return t=="0"&&1/e==-Le?"-0":t}function Wt(e){if(e!=null){try{return be.call(e)}catch{}try{return e+""}catch{}}return""}function qt(e,t){return e===t||e!==e&&t!==t}function ge(e){return Bt(e)&&L.call(e,"callee")&&(!st.call(e,"callee")||ee.call(e)==Re)}var te=Array.isArray;function ye(e){return e!=null&&Ut(e.length)&&!_e(e)}function Bt(e){return Se(e)&&ye(e)}function _e(e){var t=ne(e)?ee.call(e):"";return t==je||t==Fe}function Ut(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=he}function ne(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Se(e){return!!e&&typeof e=="object"}function Zt(e){return typeof e=="symbol"||Se(e)&&ee.call(e)==Me}function Vt(e){return ye(e)?wt(e):It(e)}var Yt=Dt(function(e,t){return e==null?{}:(t=Ue(Et(t),Kt),Ot(e,$t(Pt(e),t)))});function Ce(){return[]}var Jt=Yt;const Xt=$e(Jt),Qt=e=>{const t=z();let n;e!=null&&e.children&&u.Children.toArray(e.children).map(s=>{var o;((o=s.type)==null?void 0:o.displayName)==="TableSlugRow"&&s.props.slug&&(n=!0)});const r=$(e.className,{[`${t}--data-table--selected`]:e.isSelected,[`${t}--data-table--slug-row`]:n}),a={...Xt(e,["ariaLabel","aria-label","aria-controls","onExpand","isExpanded","isSelected"]),className:r||void 0};return u.createElement("tr",a)};Qt.propTypes={className:l.string,isSelected:l.bool};export{Te as T,cn as a,Qt as b,Y as c,Ae as d,Ie as e,Ee as f,S as s};
