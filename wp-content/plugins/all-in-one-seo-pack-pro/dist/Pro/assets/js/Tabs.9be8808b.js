import{S as Qe}from"./SaveChanges.203efc2d.js";import{T as Ke}from"./TruSeoScore.76897846.js";import{a as et,m as tt}from"./vuex.esm-bundler.97e30e47.js";import{B as nt,e as rt,a as it}from"./Caret.09e548f3.js";import{S as at}from"./Information.4a1e5f23.js";import{_ as $e,c as M,o as y,f as k,C as fe,P as Ee,I as ue,Q as ze,R as ot,A as N,S as Le,U as Be,H as st,L as lt,D as T,z as ve,M as ut,V as dt,J as pe,N as g,W as ct,x as A,n as z,p as Y,X as ft,q as Pe,T as vt,h as X,w as V,m as pt,k as ht,v as mt,d as H,e as j,t as O,g as me,a as L,r as E,F as oe,i as se}from"./_plugin-vue_export-helper.49ea0e68.js";import{T as bt}from"./Slide.dcb3da9d.js";const yt={},gt={viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-ellipse"},wt=k("circle",{r:"2",transform:"matrix(-1 0 0 1 3 3)",fill:"currentColor",stroke:"currentColor","stroke-width":"2"},null,-1),Ct=[wt];function St(e,t){return y(),M("svg",gt,Ct)}const Tt=$e(yt,[["render",St]]);var We={locks:{},zIndex:2e3,enableRipple:!0};fe(We);const Ae=fe(We),$=e=>typeof e=="string",kt=e=>typeof e=="boolean",he=e=>typeof e=="number",Mt=e=>typeof e=="function",Ne=e=>Array.isArray(e),Re=e=>e==null?0:$(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):kt(e)?Number(e):e,be=(e,t)=>{if(e.length){const n=e.indexOf(t);if(n>-1)return e.splice(n,1)}},_t=()=>typeof window<"u";var ye=e=>e,$t=()=>typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:self;function Et(e,t){throw Error("Varlet ["+e+"]: "+t)}function zt(e){var t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function Lt(e){var t="scrollLeft"in e?e.scrollLeft:e.pageXOffset;return Math.max(t,0)}function Bt(e){for(var t=e;t&&!(!t.parentNode||(t=t.parentNode,t===document.body||t===document.documentElement));){var n=/(scroll|auto)/,{overflowY:r,overflow:i}=window.getComputedStyle(t);if(n.test(r)||n.test(i))return t}return window}function ge(){var{innerWidth:e,innerHeight:t}=window;return e>t?{vMin:t,vMax:e}:{vMin:e,vMax:t}}var De=e=>$(e)&&e.endsWith("rem"),Pt=e=>$(e)&&e.endsWith("px")||he(e),Wt=e=>$(e)&&e.endsWith("%"),xe=e=>$(e)&&e.endsWith("vw"),Ie=e=>$(e)&&e.endsWith("vh"),Oe=e=>$(e)&&e.endsWith("vmin"),Ve=e=>$(e)&&e.endsWith("vmax"),At=e=>$(e)&&e.startsWith("calc("),Nt=e=>$(e)&&e.startsWith("var("),Fe=e=>{if(he(e))return e;if(Pt(e))return+e.replace("px","");if(xe(e))return+e.replace("vw","")*window.innerWidth/100;if(Ie(e))return+e.replace("vh","")*window.innerHeight/100;if(De(e)){var t=+e.replace("rem",""),n=window.getComputedStyle(document.documentElement).fontSize;return t*parseFloat(n)}return Oe(e)?ge().vMin:Ve(e)?ge().vMax:$(e)?Re(e):0},Rt=e=>{if(e!=null)return Wt(e)||xe(e)||Ie(e)||De(e)||At(e)||Nt(e)||Oe(e)||Ve(e)?e:Fe(e)+"px"};function q(e){var t=$t();return t.requestAnimationFrame?t.requestAnimationFrame(e):t.setTimeout(e,16)}function He(){return new Promise(e=>{q(()=>{q(e)})})}function Dt(){return new Promise(e=>{q(e)})}function we(e,t){var{top:n=0,left:r=0,duration:i=300,animation:a}=t,o=Date.now(),l=zt(e),s=Lt(e);return new Promise(u=>{var f=()=>{var p=(Date.now()-o)/i;if(p<1){var w=l+(n-l)*a(p),d=s+(r-s)*a(p);e.scrollTo(d,w),q(f)}else e.scrollTo(r,n),u()};q(f)})}function xt(){var e=typeof window<"u";return e&&"ontouchstart"in window}function Xe(e){let t=!1;Ee(()=>{e(),ue(()=>{t=!0})}),ze(()=>{t&&e()})}function de(e,t,n,r={}){if(!_t())return;const{passive:i=!1,capture:a=!1}=r;let o=!1,l=!1;const s=d=>Mt(d)?d():st(d),u=d=>{if(o||l)return;const h=s(d);h&&(h.addEventListener(t,n,{passive:i,capture:a}),o=!0)},f=d=>{if(!o||l)return;const h=s(d);h&&(h.removeEventListener(t,n,{capture:a}),o=!1)};let p;ot(e)&&(p=N(()=>e.value,(d,h)=>{f(h),u(d)}));const w=()=>{p==null||p(),f(e),l=!0};return Xe(()=>{u(e)}),Le(()=>{f(e)}),Be(()=>{f(e)}),w}var It=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Ot(e){const t=ve();return e in t.provides}function Vt(e){if(!Ot(e))return{index:null,parentProvider:null,bindParent:null};const t=lt(e),{childInstances:n,collect:r,clear:i}=t,a=It(t,["childInstances","collect","clear"]),o=ve();return{index:T(()=>n.indexOf(o)),parentProvider:a,bindParent:u=>{Ee(()=>{ue().then(()=>{r(o,u)})}),Le(()=>{ue().then(()=>{i(o,u)})})}}}function Ft(e){const t=[],n=r=>{if(r!=null&&r.component){n(r==null?void 0:r.component.subTree);return}Array.isArray(r==null?void 0:r.children)&&r.children.forEach(i=>{dt(i)&&(t.push(i),n(i))})};return n(e),t}function Ht(e){const t=ve(),n=fe([]),r=[],i=T(()=>n.length),a=()=>{const u=Ft(t.subTree);n.sort((f,p)=>u.indexOf(f.vnode)-u.indexOf(p.vnode))},o=(u,f)=>{n.push(u),r.push(f),a()},l=(u,f)=>{be(n,u),be(r,f)};return{length:i,childProviders:r,bindChildren:u=>{ut(e,Object.assign({childInstances:n,collect:o,clear:l},u))}}}function le(e,t){return Array.isArray(t)?t.reduce((n,r)=>(n[r]=e[r],n),{}):e[t]}function te(e){var t="var",n=t+"-"+e,r=a=>a?a[0]==="$"?a.replace("$",t):a.startsWith("--")?""+n+a:n+"__"+a:n,i=function(){for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return o.map(s=>{if(Ne(s)){var[u,f,p=null]=s;return u?f:p}return s})};return{n:r,classes:i}}function F(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Ne(e))return e.map(i=>i(...n));if(e)return e(...n)}function U(e){return{type:[Function,Array],default:e}}function Xt(e,t){return e===!1?null:(e===!0&&t&&(e=t),"var-elevation--"+e)}function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}var{n:Ue}=te("ripple"),Ce=250;function Ut(e){var{zIndex:t,position:n}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",n==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function Yt(e,t){var{top:n,left:r}=e.getBoundingClientRect(),{clientWidth:i,clientHeight:a}=e,o=Math.sqrt(Math.pow(i,2)+Math.pow(a,2))/2,l=o*2,s=t.touches[0].clientX-r,u=t.touches[0].clientY-n,f=(i-o*2)/2,p=(a-o*2)/2,w=s-o,d=u-o;return{x:w,y:d,centerX:f,centerY:p,size:l}}function Ye(e){var t=this._ripple;if(t.removeRipple(),!(t.disabled||t.tasker||!Ae.enableRipple)){var n=()=>{t.tasker=null;var{x:r,y:i,centerX:a,centerY:o,size:l}=Yt(this,e),s=document.createElement("div");s.classList.add(Ue()),s.style.opacity="0",s.style.transform="translate("+r+"px, "+i+"px) scale3d(.3, .3, .3)",s.style.width=l+"px",s.style.height=l+"px",t.color&&(s.style.backgroundColor=t.color),s.dataset.createdAt=String(performance.now()),Ut(this),this.appendChild(s),window.setTimeout(()=>{s.style.transform="translate("+a+"px, "+o+"px) scale3d(1, 1, 1)",s.style.opacity=".25"},20)};t.tasker=window.setTimeout(n,30)}}function ce(){var e=this._ripple,t=()=>{var n=this.querySelectorAll("."+Ue());if(n.length){var r=n[n.length-1],i=Ce-performance.now()+Number(r.dataset.createdAt);window.setTimeout(()=>{r.style.opacity="0",window.setTimeout(()=>{var a;return(a=r.parentNode)==null?void 0:a.removeChild(r)},Ce)},i)}};e.tasker?window.setTimeout(t,30):t()}function qe(){if(!(!xt()||!Ae.enableRipple)){var e=this._ripple;e.tasker&&window.clearTimeout(e.tasker),e.tasker=null}}function qt(e,t){var n;e._ripple=ee({tasker:null},(n=t.value)!=null?n:{},{removeRipple:ce.bind(e)}),e.addEventListener("touchstart",Ye,{passive:!0}),e.addEventListener("touchmove",qe,{passive:!0}),e.addEventListener("dragstart",ce,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})}function jt(e){e.removeEventListener("touchstart",Ye),e.removeEventListener("touchmove",qe),e.removeEventListener("dragstart",ce),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)}function Gt(e,t){var n,r,i,a,o={color:(n=t.value)==null?void 0:n.color,disabled:(r=t.value)==null?void 0:r.disabled},l=o.color!==((i=e._ripple)==null?void 0:i.color)||o.disabled!==((a=e._ripple)==null?void 0:a.disabled);if(l){var s,u;e._ripple=ee({tasker:o.disabled?null:(s=e._ripple)==null?void 0:s.tasker,removeRipple:(u=e._ripple)==null?void 0:u.removeRipple},o)}}var Zt={mounted:qt,unmounted:jt,updated:Gt,install(e){e.directive("ripple",this)}};const Jt=Zt;var Z={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:U()};function Se(e,t,n,r,i,a,o){try{var l=e[a](o),s=l.value}catch(u){n(u);return}l.done?t(s):Promise.resolve(s).then(r,i)}function Te(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(s){Se(a,r,i,o,l,"next",s)}function l(s){Se(a,r,i,o,l,"throw",s)}o(void 0)})}}var{n:Qt,classes:Kt}=te("sticky");function en(e,t){return y(),M("div",{class:z(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:Y({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?e.offsetTop+"px":void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[k("div",{class:z(e.n("wrapper")),ref:"wrapperEl",style:Y({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[A(e.$slots,"default")],6)],6)}var je=pe({name:"VarSticky",props:Z,setup(e){var t=g(null),n=g(null),r=g(!1),i=g("0px"),a=g("0px"),o=g("auto"),l=g("auto"),s=g("auto"),u=g("auto"),f=T(()=>!e.disabled&&e.cssMode),p=T(()=>!e.disabled&&!e.cssMode&&r.value),w=T(()=>Fe(e.offsetTop)),d,h=()=>{var{cssMode:C,disabled:P}=e;if(!P){var W=0;if(d!==window){var{top:D}=d.getBoundingClientRect();W=D}var x=n.value,_=t.value,{top:ne,left:re}=_.getBoundingClientRect(),v=ne-W;return v<=w.value?(C||(o.value=_.offsetWidth+"px",l.value=_.offsetHeight+"px",i.value=W+w.value+"px",a.value=re+"px",s.value=x.offsetWidth+"px",u.value=x.offsetHeight+"px",r.value=!0),{offsetTop:w.value,isFixed:!0}):(r.value=!1,{offsetTop:v,isFixed:!1})}},c=()=>{if(d){var C=h();C&&F(e.onScroll,C.offsetTop,C.isFixed)}},m=function(){var C=Te(function*(){r.value=!1,yield Dt(),h()});return function(){return C.apply(this,arguments)}}(),B=function(){var C=Te(function*(){yield He(),d=Bt(t.value),d!==window&&d.addEventListener("scroll",c),c()});return function(){return C.apply(this,arguments)}}(),R=()=>{d!==window&&d.removeEventListener("scroll",c)};return N(()=>e.disabled,m),Xe(B),ct(R),Be(R),de(()=>window,"scroll",c),de(()=>window,"resize",m),{n:Qt,classes:Kt,resize:m,stickyEl:t,wrapperEl:n,isFixed:r,offsetTop:w,fixedTop:i,fixedLeft:a,fixedWidth:o,fixedHeight:l,fixedWrapperWidth:s,fixedWrapperHeight:u,enableCSSMode:f,enableFixedMode:p,toNumber:Re}}});je.render=en;const J=je;J.install=function(e){e.component(J.name,J)};var tn={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:U()},Ge=Symbol("TABS_BIND_TAB_KEY");function nn(){var{childProviders:e,bindChildren:t,length:n}=Ht(Ge);return{length:n,tabList:e,bindTabList:t}}function rn(){var{parentProvider:e,bindParent:t,index:n}=Vt(Ge);return t||Et("Tab","<var-tab/> must in <var-tabs/>"),{index:n,tabs:e,bindTabs:t}}var{n:G,classes:an}=te("tab");function on(e,t){var n=ft("ripple");return Pe((y(),M("div",{class:z(e.classes(e.n(),e.n("$--box"),e.computeColorClass(),e.n("--"+e.itemDirection))),ref:"tabEl",style:Y({color:e.computeColorStyle()}),onClick:t[0]||(t[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[A(e.$slots,"default")],6)),[[n,{disabled:e.disabled}]])}var Ze=pe({name:"VarTab",directives:{Ripple:Jt},props:tn,setup(e){var t=g(null),n=T(()=>e.name),r=T(()=>e.disabled),i=T(()=>t.value),{index:a,tabs:o,bindTabs:l}=rn(),{onTabClick:s,active:u,activeColor:f,inactiveColor:p,disabledColor:w,itemDirection:d,resize:h}=o,c={name:n,index:a,disabled:r,element:i};l(c);var m=()=>e.name!=null?u.value===e.name:u.value===(a==null?void 0:a.value),B=()=>e.disabled?w.value:m()?f.value:p.value,R=()=>e.disabled?G("$-tab--disabled"):m()?G("$-tab--active"):G("$-tab--inactive"),C=P=>{var{disabled:W,name:D,onClick:x}=e;W||(F(x,D??a.value,P),s(c))};return N(()=>e.name,h),N(()=>e.disabled,h),{n:G,classes:an,tabEl:t,active:u,activeColor:f,inactiveColor:p,itemDirection:d,computeColorStyle:B,computeColorClass:R,handleClick:C}}});Ze.render=on;const Q=Ze;Q.install=function(e){e.component(Q.name,Q)};function ke(e){return["horizontal","vertical"].includes(e)}function sn(e){return["auto","always"].includes(e)}function ln(e){return["normal","reverse"].includes(e)}var un={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:ke},itemDirection:{type:String,default:"horizontal",validator:ke},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:[Boolean,String,Number],default:!1},scrollable:{type:String,default:"auto",validator:sn},indicatorPosition:{type:String,default:"normal",validator:ln},safeArea:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},stickyCssMode:le(Z,"cssMode"),stickyZIndex:le(Z,"zIndex"),offsetTop:le(Z,"offsetTop"),onClick:U(),onChange:U(),"onUpdate:active":U()};function Me(e,t,n,r,i,a,o){try{var l=e[a](o),s=l.value}catch(u){n(u);return}l.done?t(s):Promise.resolve(s).then(r,i)}function _e(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(s){Me(a,r,i,o,l,"next",s)}function l(s){Me(a,r,i,o,l,"throw",s)}o(void 0)})}}var{n:dn,classes:cn}=te("tabs");function fn(e,t){return y(),X(ht(e.sticky?e.n("$-sticky"):e.Transition),{ref:e.sticky?"stickyComponent":void 0,"css-mode":e.sticky?e.stickyCssMode:void 0,"offset-top":e.sticky?e.offsetTop:void 0,"z-index":e.sticky?e.stickyZIndex:void 0},{default:V(()=>[k("div",pt({class:e.classes(e.n(),e.n("$--box"),e.n("--item-"+e.itemDirection),e.n("--layout-"+e.layoutDirection+"-padding"),e.formatElevation(e.elevation,4),[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[k("div",{ref:"scrollerEl",class:z(e.classes(e.n("tab-wrap"),[e.localScrollable,e.n("--layout-"+e.layoutDirection+"-scrollable")],e.n("--layout-"+e.layoutDirection)))},[A(e.$slots,"default"),k("div",{class:z(e.classes(e.n("indicator"),e.n("--layout-"+e.layoutDirection+e.indicatorPosition+"-indicator"))),style:Y({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?"translateX("+e.indicatorX+")":"translateY("+e.indicatorY+")"})},[k("div",{class:z(e.classes(e.n("indicator-inner"),e.n("--layout-"+e.layoutDirection+"-indicator-inner"))),style:Y({background:e.indicatorColor||e.activeColor})},null,6)],6)],2)],16)]),_:3},8,["css-mode","offset-top","z-index"])}var Je=pe({name:"VarTabs",components:{VarSticky:J},inheritAttrs:!1,props:un,setup(e){var t=g("0px"),n=g("0px"),r=g("0px"),i=g("0px"),a=g(!1),o=g(null),l=T(()=>e.active),s=T(()=>e.indicatorPosition==="reverse"?"-reverse":""),u=T(()=>e.activeColor),f=T(()=>e.inactiveColor),p=T(()=>e.disabledColor),w=T(()=>e.itemDirection),d=g(null),{tabList:h,bindTabList:c,length:m}=nn(),B=v=>{var S,b=(S=v.name.value)!=null?S:v.index.value,{active:I,onChange:ie,onClick:ae}=e;F(e["onUpdate:active"],b),F(ae,b),b!==I&&F(ie,b)},R=()=>h.find(v=>{var{name:S}=v;return e.active===S.value}),C=v=>h.find(S=>{var{index:b}=S;return(v??e.active)===b.value}),P=()=>{if(m.value!==0){var{active:v}=e;if(he(v)){var S=v>m.value-1?m.value-1:0;return F(e["onUpdate:active"],S),C(S)}}},W=()=>{a.value=e.scrollable==="always"||h.length>=5},D=v=>{var{element:S}=v,b=S.value;b&&(e.layoutDirection==="horizontal"?(t.value=b.offsetWidth+"px",r.value=b.offsetLeft+"px"):(n.value=b.offsetHeight+"px",i.value=b.offsetTop+"px"))},x=v=>{var{element:S}=v;if(a.value){var b=o.value,I=S.value;if(e.layoutDirection==="horizontal"){var ie=I.offsetLeft+I.offsetWidth/2-b.offsetWidth/2;we(b,{left:ie,animation:ye})}else{var ae=I.offsetTop+I.offsetHeight/2-b.offsetHeight/2;we(b,{top:ae,animation:ye})}}},_=()=>{var v=R()||C()||P();!v||v.disabled.value||(W(),D(v),x(v))},ne=function(){var v=_e(function*(){e.sticky&&d.value&&(yield d.value.resize())});return function(){return v.apply(this,arguments)}}(),re={active:l,activeColor:u,inactiveColor:f,disabledColor:p,itemDirection:w,resize:_,onTabClick:B};return c(re),N(()=>m.value,_e(function*(){yield He(),_()})),N(()=>e.active,_),N(()=>e.scrollable,_),ze(_),de(()=>window,"resize",_),{stickyComponent:d,indicatorWidth:t,indicatorHeight:n,indicatorX:r,indicatorY:i,indicatorPosition:s,localScrollable:a,scrollerEl:o,Transition:vt,toSizeUnit:Rt,n:dn,classes:cn,resize:_,resizeSticky:ne,formatElevation:Xt}}});Je.render=fn;const K=Je;K.install=function(e){e.component(K.name,K)};const vn={emits:["changed"],components:{BaseButton:nt,SvgCaret:rt,SvgCircleCheck:it,SvgCircleInformation:at,SvgEllipse:Tt,TransitionSlide:bt,VarTab:Q,VarTabs:K},mixins:[Qe,Ke],props:{tabs:{type:Array,required:!0},skinnyTabs:Boolean,active:String,showSaveButton:{type:Boolean,default(){return!0}},internal:Boolean,disableMobile:Boolean},data(){return{buttonLoading:!1,showMobileMenu:!0,calculateWidth:!1,showMobileTabs:!1,strings:{saveChanges:this.$t.__("Save Changes",this.$td)}}},computed:{...et(["loading","currentPost"]),activeTab(){var e;return this.active?this.active:this.$route&&this.$route.name?this.$route.name:(e=this.tabs[0])==null?void 0:e.slug},filteredTabs(){return this.tabs.filter(e=>e.slug!==(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""))}},methods:{...tt(["openModal"]),maybeChangeTab(e){if(this.active){this.$emit("changed",e);return}const t=this.tabs.find(n=>n.slug===e);t&&this.$router.push(t.url)},getActiveTabName(){const e=this.tabs.find(t=>t.slug===(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""));return e?e.name:""},maybeShowMobileMenu(){if(window.matchMedia("(max-width: 782px)").matches&&!this.disableMobile){this.showMobileMenu=!0;return}let e=0;this.calculateWidth=!0,this.$nextTick(()=>{e=this.$refs["tabs-scroller"].offsetWidth,this.calculateWidth=!1;let t=0;const n=this.$refs["tabs-button"];if(n){const r=n.querySelector(".aioseo-button");t=r?r.scrollWidth:0}if(e+t>this.$refs["aioseo-tabs"].offsetWidth){this.showMobileMenu=!0;return}this.showMobileMenu=!1})},createRipple(e){const t=e.currentTarget,n=document.createElement("span"),r=Math.max(t.clientWidth,t.clientHeight),i=r/2,a=t.getBoundingClientRect();n.style.width=n.style.height=`${r}px`,n.style.left=`${e.clientX-(a.left+i)}px`,n.style.top=`${e.clientY-(a.top+i)}px`,n.classList.add("ripple");const o=t.getElementsByClassName("ripple")[0];o&&o.remove(),t.appendChild(n)}},beforeMount(){window.addEventListener("resize",this.maybeShowMobileMenu)},async mounted(){this.$nextTick(()=>{this.maybeShowMobileMenu();const e=this.$refs["aioseo-tabs"],t=e.querySelector(".var-tab--active"),n=e.querySelector(".var-tabs__indicator");if(!t||!n)return;setTimeout(()=>{n.style.width==="0px"&&(n.style.width=`${t.offsetWidth}px`,n.style.transform=`translateX(${t.offsetLeft}px)`)},300),new MutationObserver(()=>{n.style.width==="0px"&&(n.style.width=`${t.offsetWidth}px`,n.style.transform=`translateX(${t.offsetLeft}px)`)}).observe(n,{attributes:!0});const i=e.querySelectorAll(".var-tab");i.length&&i.forEach(a=>{a.addEventListener("click",this.createRipple)})})},beforeUnmount(){window.removeEventListener("resize",this.maybeShowMobileMenu)}},pn={class:"tabs-scroller",ref:"tabs-scroller"},hn={class:"label"},mn={key:1,class:"warning"},bn={key:0,class:"aioseo-mobile-tabs"},yn=k("span",{class:"tab-indicator"},null,-1),gn={class:"tab-links"},wn=["onClick"],Cn={key:1,class:"button-right",ref:"tabs-button"},Sn={class:"tabs-extra"};function Tn(e,t,n,r,i,a){const o=E("svg-ellipse"),l=E("svg-circle-check"),s=E("svg-circle-information"),u=E("var-tab"),f=E("var-tabs"),p=E("svg-caret"),w=E("router-link"),d=E("transition-slide"),h=E("base-button");return y(),M("div",{class:z(["aioseo-tabs",{internal:n.internal,skinny:n.skinnyTabs}]),ref:"aioseo-tabs"},[Pe(k("div",pn,[H(f,{active:a.activeTab,onClick:a.maybeChangeTab,ref:"var-tabs"},{default:V(()=>[(y(!0),M(oe,null,se(n.tabs,(c,m)=>(y(),X(u,{name:c.slug,key:m},{default:V(()=>[A(e.$slots,"var-tab",{tab:c},()=>[A(e.$slots,"var-tab-icon",{tab:c}),k("span",hn,O(c.name),1),c.errorCount>=0?(y(),M("span",{key:0,class:z(["tab-score",e.getErrorClass(e.currentPost.page_analysis.analysis[c.slug].errors)])},[0<e.currentPost.page_analysis.analysis[c.slug].errors?(y(),X(o,{key:0,width:"6"})):L("",!0),e.currentPost.page_analysis.analysis[c.slug].errors===0?(y(),X(l,{key:1,width:"12"})):L("",!0),j(" "+O(e.getErrorDisplay(e.currentPost.page_analysis.analysis[c.slug].errors)),1)],2)):L("",!0),c.warning&&e.$root._data.screenContext!=="sidebar"?(y(),M("span",mn,[H(s,{width:"15",height:"15"})])):L("",!0)])]),_:2},1032,["name"]))),128))]),_:3},8,["active","onClick"])],512),[[mt,!i.showMobileMenu||i.calculateWidth]]),i.showMobileMenu?(y(),M("div",bn,[k("div",{class:"active-tab",onClick:t[1]||(t[1]=c=>i.showMobileTabs=!i.showMobileTabs)},[k("div",null,[j(O(a.getActiveTabName())+" ",1),H(p,{onClick:t[0]||(t[0]=me(c=>i.showMobileTabs=!i.showMobileTabs,["stop"])),class:z({rotated:!i.showMobileTabs})},null,8,["class"]),yn])]),H(d,{active:i.showMobileTabs,class:"tab-dropdown"},{default:V(()=>[k("div",gn,[n.active?L("",!0):(y(!0),M(oe,{key:0},se(a.filteredTabs,(c,m)=>(y(),X(w,{key:m,to:c.url,onClick:t[2]||(t[2]=B=>i.showMobileTabs=!1)},{default:V(()=>[j(O(c.name),1)]),_:2},1032,["to"]))),128)),n.active?(y(!0),M(oe,{key:1},se(a.filteredTabs,(c,m)=>(y(),M("a",{href:"#",key:m,onClick:me(B=>e.$emit("changed",c.slug)&&(i.showMobileTabs=!1),["prevent"])},O(c.name),9,wn))),128)):L("",!0)])]),_:1},8,["active"])])):L("",!0),n.showSaveButton?(y(),M("div",Cn,[A(e.$slots,"button",{},()=>[H(h,{type:"blue",size:"medium",loading:e.loading,onClick:e.processSaveChanges},{default:V(()=>[j(O(i.strings.saveChanges),1)]),_:1},8,["loading","onClick"])])],512)):L("",!0),k("div",Sn,[A(e.$slots,"extra")])],2)}const Bn=$e(vn,[["render",Tn]]);export{Bn as C,Tt as S};
