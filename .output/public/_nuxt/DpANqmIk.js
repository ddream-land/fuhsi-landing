import{aD as rt,aE as je,C,aF as De,a1 as Re,aG as ot,y as M,r as _,aH as at,aI as st,a5 as it,aJ as ct,aK as Me,aL as ut,ab as Ue,aM as le,aN as lt,N as dt,u as v,a6 as ze,v as x,z as ft,g as U,m as Y,K as pt,f as k,A as Ke,aO as ht,o as q,c as Be,E as X,R as vt,h as mt,n as de,a0 as fe,aP as gt,P as yt,w as pe,x as bt,T as he,S as _t,b as ve,aQ as Et,U as Tt,X as wt}from"./DcwfIJpE.js";function S(e){var t;const n=De(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Z=M?window:void 0;function R(...e){let t,n,r,o;if(rt(e[0])||Array.isArray(e[0])?([n,r,o]=e,t=Z):[t,n,r,o]=e,!t)return je;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],i=()=>{s.forEach(u=>u()),s.length=0},f=(u,m,c,l)=>(u.addEventListener(m,c,l),()=>u.removeEventListener(m,c,l)),h=C(()=>[S(t),De(o)],([u,m])=>{i(),u&&s.push(...n.flatMap(c=>r.map(l=>f(u,c,l,m))))},{immediate:!0,flush:"post"}),p=()=>{h(),i()};return Re(p),p}let me=!1;function Mr(e,t,n={}){const{window:r=Z,ignore:o=[],capture:s=!0,detectIframe:i=!1}=n;if(!r)return;st&&!me&&(me=!0,Array.from(r.document.body.children).forEach(c=>c.addEventListener("click",je)));let f=!0;const h=c=>o.some(l=>{if(typeof l=="string")return Array.from(r.document.querySelectorAll(l)).some(a=>a===c.target||c.composedPath().includes(a));{const a=S(l);return a&&(c.target===a||c.composedPath().includes(a))}}),u=[R(r,"click",c=>{const l=S(e);if(!(!l||l===c.target||c.composedPath().includes(l))){if(c.detail===0&&(f=!h(c)),!f){f=!0;return}t(c)}},{passive:!0,capture:s}),R(r,"pointerdown",c=>{const l=S(e);l&&(f=!c.composedPath().includes(l)&&!h(c))},{passive:!0}),i&&R(r,"blur",c=>{var l;const a=S(e);((l=r.document.activeElement)==null?void 0:l.tagName)==="IFRAME"&&!(a!=null&&a.contains(r.document.activeElement))&&t(c)})].filter(Boolean);return()=>u.forEach(c=>c())}function Ot(e,t=!1){const n=_(),r=()=>n.value=!!e();return r(),at(r,t),n}const ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ye="__vueuse_ssr_handlers__";ge[ye]=ge[ye]||{};var be=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable,Ct=(e,t)=>{var n={};for(var r in e)Pt.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&be)for(var r of be(e))t.indexOf(r)<0&&St.call(e,r)&&(n[r]=e[r]);return n};function Ur(e,t,n={}){const r=n,{window:o=Z}=r,s=Ct(r,["window"]);let i;const f=Ot(()=>o&&"ResizeObserver"in o),h=()=>{i&&(i.disconnect(),i=void 0)},p=C(()=>S(e),m=>{h(),f.value&&o&&m&&(i=new ResizeObserver(t),i.observe(m,s))},{immediate:!0,flush:"post"}),u=()=>{h(),p()};return Re(u),{isSupported:f,stop:u}}var _e;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(_e||(_e={}));var Ft=Object.defineProperty,Ee=Object.getOwnPropertySymbols,Nt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,Te=(e,t,n)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$t=(e,t)=>{for(var n in t||(t={}))Nt.call(t,n)&&Te(e,n,t[n]);if(Ee)for(var n of Ee(t))It.call(t,n)&&Te(e,n,t[n]);return e};const xt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};$t({linear:ot},xt);var kt=typeof global=="object"&&global&&global.Object===Object&&global,At=typeof self=="object"&&self&&self.Object===Object&&self,ee=kt||At||Function("return this")(),F=ee.Symbol,He=Object.prototype,Lt=He.hasOwnProperty,jt=He.toString,I=F?F.toStringTag:void 0;function Dt(e){var t=Lt.call(e,I),n=e[I];try{e[I]=void 0;var r=!0}catch{}var o=jt.call(e);return r&&(t?e[I]=n:delete e[I]),o}var Rt=Object.prototype,Mt=Rt.toString;function Ut(e){return Mt.call(e)}var zt="[object Null]",Kt="[object Undefined]",we=F?F.toStringTag:void 0;function Ge(e){return e==null?e===void 0?Kt:zt:we&&we in Object(e)?Dt(e):Ut(e)}function Bt(e){return e!=null&&typeof e=="object"}var Ht="[object Symbol]";function te(e){return typeof e=="symbol"||Bt(e)&&Ge(e)==Ht}function Gt(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var ne=Array.isArray,Vt=1/0,Oe=F?F.prototype:void 0,Pe=Oe?Oe.toString:void 0;function Ve(e){if(typeof e=="string")return e;if(ne(e))return Gt(e,Ve)+"";if(te(e))return Pe?Pe.call(e):"";var t=e+"";return t=="0"&&1/e==-Vt?"-0":t}function Je(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Jt="[object AsyncFunction]",Wt="[object Function]",Qt="[object GeneratorFunction]",qt="[object Proxy]";function Yt(e){if(!Je(e))return!1;var t=Ge(e);return t==Wt||t==Qt||t==Jt||t==qt}var J=ee["__core-js_shared__"],Se=function(){var e=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Xt(e){return!!Se&&Se in e}var Zt=Function.prototype,en=Zt.toString;function tn(e){if(e!=null){try{return en.call(e)}catch{}try{return e+""}catch{}}return""}var nn=/[\\^$.*+?()[\]{}|]/g,rn=/^\[object .+?Constructor\]$/,on=Function.prototype,an=Object.prototype,sn=on.toString,cn=an.hasOwnProperty,un=RegExp("^"+sn.call(cn).replace(nn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ln(e){if(!Je(e)||Xt(e))return!1;var t=Yt(e)?un:rn;return t.test(tn(e))}function dn(e,t){return e==null?void 0:e[t]}function We(e,t){var n=dn(e,t);return ln(n)?n:void 0}function fn(e,t){return e===t||e!==e&&t!==t}var pn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,hn=/^\w*$/;function vn(e,t){if(ne(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||te(e)?!0:hn.test(e)||!pn.test(e)||t!=null&&e in Object(t)}var $=We(Object,"create");function mn(){this.__data__=$?$(null):{},this.size=0}function gn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var yn="__lodash_hash_undefined__",bn=Object.prototype,_n=bn.hasOwnProperty;function En(e){var t=this.__data__;if($){var n=t[e];return n===yn?void 0:n}return _n.call(t,e)?t[e]:void 0}var Tn=Object.prototype,wn=Tn.hasOwnProperty;function On(e){var t=this.__data__;return $?t[e]!==void 0:wn.call(t,e)}var Pn="__lodash_hash_undefined__";function Sn(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=$&&t===void 0?Pn:t,this}function w(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}w.prototype.clear=mn;w.prototype.delete=gn;w.prototype.get=En;w.prototype.has=On;w.prototype.set=Sn;function Cn(){this.__data__=[],this.size=0}function z(e,t){for(var n=e.length;n--;)if(fn(e[n][0],t))return n;return-1}var Fn=Array.prototype,Nn=Fn.splice;function In(e){var t=this.__data__,n=z(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Nn.call(t,n,1),--this.size,!0}function $n(e){var t=this.__data__,n=z(t,e);return n<0?void 0:t[n][1]}function xn(e){return z(this.__data__,e)>-1}function kn(e,t){var n=this.__data__,r=z(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function N(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}N.prototype.clear=Cn;N.prototype.delete=In;N.prototype.get=$n;N.prototype.has=xn;N.prototype.set=kn;var An=We(ee,"Map");function Ln(){this.size=0,this.__data__={hash:new w,map:new(An||N),string:new w}}function jn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function K(e,t){var n=e.__data__;return jn(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Dn(e){var t=K(this,e).delete(e);return this.size-=t?1:0,t}function Rn(e){return K(this,e).get(e)}function Mn(e){return K(this,e).has(e)}function Un(e,t){var n=K(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function O(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}O.prototype.clear=Ln;O.prototype.delete=Dn;O.prototype.get=Rn;O.prototype.has=Mn;O.prototype.set=Un;var zn="Expected a function";function re(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(zn);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],s=n.cache;if(s.has(o))return s.get(o);var i=e.apply(this,r);return n.cache=s.set(o,i)||s,i};return n.cache=new(re.Cache||O),n}re.Cache=O;var Kn=500;function Bn(e){var t=re(e,function(r){return n.size===Kn&&n.clear(),r}),n=t.cache;return t}var Hn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gn=/\\(\\)?/g,Vn=Bn(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Hn,function(n,r,o,s){t.push(o?s.replace(Gn,"$1"):r||n)}),t});function Jn(e){return e==null?"":Ve(e)}function Wn(e,t){return ne(e)?e:vn(e,t)?[e]:Vn(Jn(e))}var Qn=1/0;function qn(e){if(typeof e=="string"||te(e))return e;var t=e+"";return t=="0"&&1/e==-Qn?"-0":t}function Yn(e,t){t=Wn(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[qn(t[n++])];return n&&n==r?e:void 0}function Xn(e,t,n){var r=e==null?void 0:Yn(e,t);return r===void 0?n:r}function Zn(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var o=e[t];r[o[0]]=o[1]}return r}function er(e){return e==null}function zr(e){return e===void 0}class tr extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function nr(e,t){throw new tr(`[${e}] ${t}`)}const Qe=(e="")=>e.split(" ").filter(t=>!!t.trim()),Kr=(e,t)=>{if(!e||!t)return!1;if(t.includes(" "))throw new Error("className should not contain space.");return e.classList.contains(t)},Br=(e,t)=>{!e||!t.trim()||e.classList.add(...Qe(t))},Hr=(e,t)=>{!e||!t.trim()||e.classList.remove(...Qe(t))},Gr=(e,t)=>{var n;if(!M||!e||!t)return"";let r=ut(t);r==="float"&&(r="cssFloat");try{const o=e.style[r];if(o)return o;const s=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,"");return s?s[r]:""}catch{return e.style[r]}};function rr(e,t="px"){if(!e)return"";if(it(e)||ct(e))return`${e}${t}`;if(Me(e))return e}const qe="__epPropKey",Ye=e=>e,or=e=>Ue(e)&&!!e[qe],ar=(e,t)=>{if(!Ue(e)||or(e))return e;const{values:n,required:r,default:o,type:s,validator:i}=e,h={type:s,required:!!r,validator:n||i?p=>{let u=!1,m=[];if(n&&(m=Array.from(n),le(e,"default")&&m.push(o),u||(u=m.includes(p))),i&&(u||(u=i(p))),!u&&m.length>0){const c=[...new Set(m)].map(l=>JSON.stringify(l)).join(", ");lt(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${c}], got value ${JSON.stringify(p)}.`)}return u}:void 0,[qe]:!0};return le(e,"default")&&(h.default=o),h},sr=e=>Zn(Object.entries(e).map(([t,n])=>[t,ar(n,t)])),Vr=Ye([String,Object,Function]),Xe=(e,t)=>{if(e.install=n=>{for(const r of[e,...Object.values(t??{})])n.component(r.name,r)},t)for(const[n,r]of Object.entries(t))e[n]=r;return e},Jr=e=>(e.install=dt,e),Ze={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Wr=({from:e,replacement:t,scope:n,version:r,ref:o,type:s="API"},i)=>{C(()=>v(i),f=>{},{immediate:!0})};var ir={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const cr=e=>(t,n)=>ur(t,n,v(e)),ur=(e,t,n)=>Xn(n,e,e).replace(/\{(\w+)\}/g,(r,o)=>{var s;return`${(s=t==null?void 0:t[o])!=null?s:`{${o}}`}`}),lr=e=>{const t=x(()=>v(e).name),n=ft(e)?e:_(e);return{lang:t,locale:n,t:cr(e)}},dr=Symbol("localeContextKey"),Qr=e=>{const t=ze(dr,_());return lr(x(()=>t.value||ir))};let P=[];const Ce=e=>{const t=e;t.key===Ze.esc&&P.forEach(n=>n(t))},fr=e=>{U(()=>{P.length===0&&document.addEventListener("keydown",Ce),M&&P.push(e)}),Y(()=>{P=P.filter(t=>t!==e),P.length===0&&M&&document.removeEventListener("keydown",Ce)})},pr=Symbol(),Fe=_();function qr(e,t=void 0){const n=pt()?ze(pr,Fe):Fe;return e?x(()=>{var r,o;return(o=(r=n.value)==null?void 0:r[e])!=null?o:t}):n}var oe=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n};const hr=sr({size:{type:Ye([Number,String])},color:{type:String}}),vr=k({name:"ElIcon",inheritAttrs:!1}),mr=k({...vr,props:hr,setup(e){const t=e,n=Ke("icon"),r=x(()=>{const{size:o,color:s}=t;return!o&&!s?{}:{fontSize:ht(o)?void 0:rr(o),"--color":s}});return(o,s)=>(q(),Be("i",vt({class:v(n).b(),style:v(r)},o.$attrs),[X(o.$slots,"default")],16))}});var gr=oe(mr,[["__file","icon.vue"]]);const yr=Xe(gr),W="focus-trap.focus-after-trapped",Q="focus-trap.focus-after-released",br="focus-trap.focusout-prevented",Ne={cancelable:!0,bubbles:!1},_r={cancelable:!0,bubbles:!1},Ie="focusAfterTrapped",$e="focusAfterReleased",Er=Symbol("elFocusTrap"),ae=_(),B=_(0),se=_(0);let L=0;const et=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0||r===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},xe=(e,t)=>{for(const n of e)if(!Tr(n,t))return n},Tr=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},wr=e=>{const t=et(e),n=xe(t,e),r=xe(t.reverse(),e);return[n,r]},Or=e=>e instanceof HTMLInputElement&&"select"in e,T=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),se.value=window.performance.now(),e!==n&&Or(e)&&t&&e.select()}};function ke(e,t){const n=[...e],r=e.indexOf(t);return r!==-1&&n.splice(r,1),n}const Pr=()=>{let e=[];return{push:r=>{const o=e[0];o&&r!==o&&o.pause(),e=ke(e,r),e.unshift(r)},remove:r=>{var o,s;e=ke(e,r),(s=(o=e[0])==null?void 0:o.resume)==null||s.call(o)}}},Sr=(e,t=!1)=>{const n=document.activeElement;for(const r of e)if(T(r,t),document.activeElement!==n)return},Ae=Pr(),Cr=()=>B.value>se.value,j=()=>{ae.value="pointer",B.value=window.performance.now()},Le=()=>{ae.value="keyboard",B.value=window.performance.now()},Fr=()=>(U(()=>{L===0&&(document.addEventListener("mousedown",j),document.addEventListener("touchstart",j),document.addEventListener("keydown",Le)),L++}),Y(()=>{L--,L<=0&&(document.removeEventListener("mousedown",j),document.removeEventListener("touchstart",j),document.removeEventListener("keydown",Le))}),{focusReason:ae,lastUserFocusTimestamp:B,lastAutomatedFocusTimestamp:se}),D=e=>new CustomEvent(br,{..._r,detail:e}),Nr=k({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[Ie,$e,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const n=_();let r,o;const{focusReason:s}=Fr();fr(a=>{e.trapped&&!i.paused&&t("release-requested",a)});const i={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},f=a=>{if(!e.loop&&!e.trapped||i.paused)return;const{key:d,altKey:g,ctrlKey:y,metaKey:b,currentTarget:ie,shiftKey:ce}=a,{loop:ue}=e,nt=d===Ze.tab&&!g&&!y&&!b,A=document.activeElement;if(nt&&A){const H=ie,[G,V]=wr(H);if(G&&V){if(!ce&&A===V){const E=D({focusReason:s.value});t("focusout-prevented",E),E.defaultPrevented||(a.preventDefault(),ue&&T(G,!0))}else if(ce&&[G,H].includes(A)){const E=D({focusReason:s.value});t("focusout-prevented",E),E.defaultPrevented||(a.preventDefault(),ue&&T(V,!0))}}else if(A===H){const E=D({focusReason:s.value});t("focusout-prevented",E),E.defaultPrevented||a.preventDefault()}}};mt(Er,{focusTrapRef:n,onKeydown:f}),C(()=>e.focusTrapEl,a=>{a&&(n.value=a)},{immediate:!0}),C([n],([a],[d])=>{a&&(a.addEventListener("keydown",f),a.addEventListener("focusin",u),a.addEventListener("focusout",m)),d&&(d.removeEventListener("keydown",f),d.removeEventListener("focusin",u),d.removeEventListener("focusout",m))});const h=a=>{t(Ie,a)},p=a=>t($e,a),u=a=>{const d=v(n);if(!d)return;const g=a.target,y=a.relatedTarget,b=g&&d.contains(g);e.trapped||y&&d.contains(y)||(r=y),b&&t("focusin",a),!i.paused&&e.trapped&&(b?o=g:T(o,!0))},m=a=>{const d=v(n);if(!(i.paused||!d))if(e.trapped){const g=a.relatedTarget;!er(g)&&!d.contains(g)&&setTimeout(()=>{if(!i.paused&&e.trapped){const y=D({focusReason:s.value});t("focusout-prevented",y),y.defaultPrevented||T(o,!0)}},0)}else{const g=a.target;g&&d.contains(g)||t("focusout",a)}};async function c(){await de();const a=v(n);if(a){Ae.push(i);const d=a.contains(document.activeElement)?r:document.activeElement;if(r=d,!a.contains(d)){const y=new Event(W,Ne);a.addEventListener(W,h),a.dispatchEvent(y),y.defaultPrevented||de(()=>{let b=e.focusStartEl;Me(b)||(T(b),document.activeElement!==b&&(b="first")),b==="first"&&Sr(et(a),!0),(document.activeElement===d||b==="container")&&T(a)})}}}function l(){const a=v(n);if(a){a.removeEventListener(W,h);const d=new CustomEvent(Q,{...Ne,detail:{focusReason:s.value}});a.addEventListener(Q,p),a.dispatchEvent(d),!d.defaultPrevented&&(s.value=="keyboard"||!Cr()||a.contains(document.activeElement))&&T(r??document.body),a.removeEventListener(Q,p),Ae.remove(i)}}return U(()=>{e.trapped&&c(),C(()=>e.trapped,a=>{a?c():l()})}),Y(()=>{e.trapped&&l()}),{onKeydown:f}}});function Ir(e,t,n,r,o,s){return X(e.$slots,"default",{handleKeydown:e.onKeydown})}var Yr=oe(Nr,[["render",Ir],["__file","focus-trap.vue"]]);const $r={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},xr={click:e=>e instanceof MouseEvent},kr=(e,t,n)=>{const r=fe(),o=fe(),s=_(!1),i=()=>{r.value&&(s.value=r.value.scrollTop>=e.visibilityHeight)},f=p=>{var u;(u=r.value)==null||u.scrollTo({top:0,behavior:"smooth"}),t("click",p)},h=gt(i,300,!0);return R(o,"scroll",h),U(()=>{var p;o.value=document,r.value=document.documentElement,e.target&&(r.value=(p=document.querySelector(e.target))!=null?p:void 0,r.value||nr(n,`target does not exist: ${e.target}`),o.value=r.value),i()}),{visible:s,handleClick:f}},tt="ElBacktop",Ar=k({name:tt}),Lr=k({...Ar,props:$r,emits:xr,setup(e,{emit:t}){const n=e,r=Ke("backtop"),{handleClick:o,visible:s}=kr(n,t,tt),i=x(()=>({right:`${n.right}px`,bottom:`${n.bottom}px`}));return(f,h)=>(q(),yt(wt,{name:`${v(r).namespace.value}-fade-in`},{default:pe(()=>[v(s)?(q(),Be("div",{key:0,style:bt(v(i)),class:he(v(r).b()),onClick:h[0]||(h[0]=_t((...p)=>v(o)&&v(o)(...p),["stop"]))},[X(f.$slots,"default",{},()=>[ve(v(yr),{class:he(v(r).e("icon"))},{default:pe(()=>[ve(v(Et))]),_:1},8,["class"])])],6)):Tt("v-if",!0)]),_:3},8,["name"]))}});var jr=oe(Lr,[["__file","backtop.vue"]]);const Xr=Xe(jr);export{Yr as E,Er as F,oe as _,Br as a,sr as b,rr as c,Ye as d,zr as e,Wr as f,Gr as g,Kr as h,Vr as i,Qr as j,yr as k,Xr as l,ne as m,ar as n,Zn as o,R as p,Ur as q,Hr as r,S as s,nr as t,qr as u,er as v,Xe as w,Ze as x,Mr as y,Jr as z};