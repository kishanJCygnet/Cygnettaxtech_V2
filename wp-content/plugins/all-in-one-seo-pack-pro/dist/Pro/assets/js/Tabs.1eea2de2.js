import{i as rt,u as it,o as at}from"./links.96ffe3f0.js";import"./default-i18n.41786823.js";import{u as ot,T as st}from"./TruSeoScore.177d3103.js";import{S as lt}from"./SaveChanges.744089d3.js";import{B as ut,b as ct,a as dt}from"./Caret.b5c2e4ec.js";import{S as ft}from"./Information.6754f071.js";import{o as b,c as M,a as k,i as pe,W as ze,j as ce,X as Le,Y as vt,t as A,Z as We,_ as Be,u as pt,$ as ht,l as mt,h as C,S as he,p as bt,a0 as yt,k as me,q as y,e as N,n as P,y as U,P as gt,J as Ne,T as wt,d as X,w as I,a1 as St,A as Tt,r as $,N as Ct,g as H,F as se,C as le,x as D,b as z,B as G,f as ge}from"./vue.runtime.esm-bundler.f433d23f.js";import{_ as Ae}from"./_plugin-vue_export-helper.3febc96a.js";import{T as kt}from"./Slide.99d45c60.js";const Mt={},_t={viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-ellipse"},Et=k("circle",{r:"2",transform:"matrix(-1 0 0 1 3 3)",fill:"currentColor",stroke:"currentColor","stroke-width":"2"},null,-1),$t=[Et];function Pt(e,t){return b(),M("svg",_t,$t)}const zt=Ae(Mt,[["render",Pt]]);var xe={locks:{},zIndex:2e3,enableRipple:!0};pe(xe);const Oe=pe(xe),_=e=>typeof e=="string",Lt=e=>typeof e=="boolean",be=e=>typeof e=="number",Wt=e=>typeof e=="function",Re=e=>Array.isArray(e),Bt=e=>e===window,De=e=>e==null?0:_(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):Lt(e)?Number(e):e,we=(e,t)=>{if(e.length){const n=e.indexOf(t);if(n>-1)return e.splice(n,1)}},Ie=()=>typeof window<"u",Nt=(e,t,n)=>Math.min(n,Math.max(t,e));var Se=e=>e,At=()=>typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:self;function xt(e,t){throw Error("Varlet ["+e+"]: "+t)}function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}function ye(e){return window.getComputedStyle(e)}function j(e){if(Bt(e)){var t=e.innerWidth,n=e.innerHeight,r={x:0,y:0,top:0,left:0,right:t,bottom:n,width:t,height:n};return de({},r,{toJSON:()=>r})}return e.getBoundingClientRect()}function Ot(e){var t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function Rt(e){var t="scrollLeft"in e?e.scrollLeft:e.pageXOffset;return Math.max(t,0)}function Dt(e){for(var t=e;t&&!(!t.parentNode||(t=t.parentNode,t===document.body||t===document.documentElement));){var n=/(scroll|auto)/,{overflowY:r,overflow:i}=ye(t);if(n.test(r)||n.test(i))return t}return window}function Te(){var{width:e,height:t}=j(window);return e>t?{vMin:t,vMax:e}:{vMin:e,vMax:t}}var Fe=e=>_(e)&&e.endsWith("rem"),It=e=>_(e)&&e.endsWith("em")&&!e.endsWith("rem"),Ft=e=>_(e)&&e.endsWith("px")||be(e),Vt=e=>_(e)&&e.endsWith("%"),Ve=e=>_(e)&&e.endsWith("vw"),He=e=>_(e)&&e.endsWith("vh"),Xe=e=>_(e)&&e.endsWith("vmin"),Ye=e=>_(e)&&e.endsWith("vmax"),Ht=e=>_(e)&&e.startsWith("calc("),Xt=e=>_(e)&&e.startsWith("var("),Ue=e=>{if(be(e))return e;if(Ft(e))return+e.replace("px","");if(!Ie())return 0;var{width:t,height:n}=j(window);if(Ve(e))return+e.replace("vw","")*t/100;if(He(e))return+e.replace("vh","")*n/100;if(Fe(e)){var r=+e.replace("rem",""),i=ye(document.documentElement).fontSize;return r*parseFloat(i)}return Xe(e)?Te().vMin:Ye(e)?Te().vMax:_(e)?De(e):0},Yt=e=>{if(e!=null)return Vt(e)||Ve(e)||He(e)||It(e)||Fe(e)||Ht(e)||Xt(e)||Xe(e)||Ye(e)?e:Ue(e)+"px"};function q(e){var t=At();return t.requestAnimationFrame?t.requestAnimationFrame(e):t.setTimeout(e,16)}function je(){return new Promise(e=>{q(()=>{q(e)})})}function Ut(){return new Promise(e=>{q(e)})}function Ce(e,t){var{top:n=0,left:r=0,duration:i=300,animation:a}=t,o=Date.now(),l=Ot(e),s=Rt(e);return new Promise(u=>{var f=()=>{var p=(Date.now()-o)/i;if(p<1){var g=l+(n-l)*a(p),c=s+(r-s)*a(p);e.scrollTo(c,g),q(f)}else e.scrollTo(r,n),u()};q(f)})}function jt(){var e=typeof window<"u";return e&&"ontouchstart"in window}function qe(e){let t=!1;ze(()=>{e(),ce(()=>{t=!0})}),Le(()=>{t&&e()})}function fe(e,t,n,r={}){if(!Ie())return;const{passive:i=!1,capture:a=!1}=r;let o=!1,l=!1;const s=c=>Wt(c)?c():pt(c),u=c=>{if(o||l)return;const h=s(c);h&&(h.addEventListener(t,n,{passive:i,capture:a}),o=!0)},f=c=>{if(!o||l)return;const h=s(c);h&&(h.removeEventListener(t,n,{capture:a}),o=!1)};let p;vt(e)&&(p=A(()=>e.value,(c,h)=>{f(h),u(c)}));const g=()=>{p==null||p(),f(e),l=!0};return qe(()=>{u(e)}),We(()=>{f(e)}),Be(()=>{f(e)}),g}function qt(e){ht(()=>{e()}),Be(()=>{e()})}var Gt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Zt(e){const t=he();return e in t.provides}function Jt(e){if(!Zt(e))return{index:null,parentProvider:null,bindParent:null};const t=mt(e),{childInstances:n,collect:r,clear:i}=t,a=Gt(t,["childInstances","collect","clear"]),o=he();return{index:C(()=>n.indexOf(o)),parentProvider:a,bindParent:u=>{ze(()=>{ce().then(()=>{r(o,u)})}),We(()=>{ce().then(()=>{i(o,u)})})}}}function Kt(e){const t=[],n=r=>{if(r!=null&&r.component){n(r==null?void 0:r.component.subTree);return}Array.isArray(r==null?void 0:r.children)&&r.children.forEach(i=>{yt(i)&&(t.push(i),n(i))})};return n(e),t}function Qt(e){const t=he(),n=pe([]),r=[],i=C(()=>n.length),a=()=>{const u=Kt(t.subTree);n.sort((f,p)=>u.indexOf(f.vnode)-u.indexOf(p.vnode))},o=(u,f)=>{n.push(u),r.push(f),a()},l=(u,f)=>{we(n,u),we(r,f)};return{length:i,childProviders:r,bindChildren:u=>{bt(e,Object.assign({childInstances:n,collect:o,clear:l},u))}}}function Ge(e){fe(()=>window,"resize",e,{passive:!0}),fe(()=>window,"orientationchange",e,{passive:!0})}function ue(e,t){return Array.isArray(t)?t.reduce((n,r)=>(n[r]=e[r],n),{}):e[t]}function ne(e){var t="var",n=t+"-"+e,r=a=>a?a[0]==="$"?a.replace("$",t):a.startsWith("--")?""+n+a:n+"__"+a:n,i=function(){for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return o.map(s=>{if(Re(s)){var[u,f,p=null]=s;return u?f:p}return s})};return{n:r,classes:i}}function F(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Re(e))return e.map(i=>i(...n));if(e)return e(...n)}function Y(e){return{type:[Function,Array],default:e}}function en(e,t){return e===!1?null:(e===!0&&t&&(e=t),"var-elevation--"+e)}function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}var{n:Ze}=ne("ripple"),ke=250;function tn(e){var{zIndex:t,position:n}=ye(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",n==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function nn(e,t){var{top:n,left:r}=j(e),{clientWidth:i,clientHeight:a}=e,o=Math.sqrt(Math.pow(i,2)+Math.pow(a,2))/2,l=o*2,s=t.touches[0].clientX-r,u=t.touches[0].clientY-n,f=(i-o*2)/2,p=(a-o*2)/2,g=s-o,c=u-o;return{x:g,y:c,centerX:f,centerY:p,size:l}}function Je(e){var t=this._ripple;if(t.removeRipple(),!(t.disabled||t.tasker||!Oe.enableRipple)){var n=()=>{t.tasker=null;var{x:r,y:i,centerX:a,centerY:o,size:l}=nn(this,e),s=document.createElement("div");s.classList.add(Ze()),s.style.opacity="0",s.style.transform="translate("+r+"px, "+i+"px) scale3d(.3, .3, .3)",s.style.width=l+"px",s.style.height=l+"px",t.color&&(s.style.backgroundColor=t.color),s.dataset.createdAt=String(performance.now()),tn(this),this.appendChild(s),window.setTimeout(()=>{s.style.transform="translate("+a+"px, "+o+"px) scale3d(1, 1, 1)",s.style.opacity=".25"},20)};t.tasker=window.setTimeout(n,30)}}function ve(){var e=this._ripple,t=()=>{var n=this.querySelectorAll("."+Ze());if(n.length){var r=n[n.length-1],i=ke-performance.now()+Number(r.dataset.createdAt);window.setTimeout(()=>{r.style.opacity="0",window.setTimeout(()=>{var a;return(a=r.parentNode)==null?void 0:a.removeChild(r)},ke)},i)}};e.tasker?window.setTimeout(t,30):t()}function Ke(){if(!(!jt()||!Oe.enableRipple)){var e=this._ripple;e.tasker&&window.clearTimeout(e.tasker),e.tasker=null}}function rn(e,t){var n;e._ripple=te({tasker:null},(n=t.value)!=null?n:{},{removeRipple:ve.bind(e)}),e.addEventListener("touchstart",Je,{passive:!0}),e.addEventListener("touchmove",Ke,{passive:!0}),e.addEventListener("dragstart",ve,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})}function an(e){e.removeEventListener("touchstart",Je),e.removeEventListener("touchmove",Ke),e.removeEventListener("dragstart",ve),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)}function on(e,t){var n,r,i,a,o={color:(n=t.value)==null?void 0:n.color,disabled:(r=t.value)==null?void 0:r.disabled},l=o.color!==((i=e._ripple)==null?void 0:i.color)||o.disabled!==((a=e._ripple)==null?void 0:a.disabled);if(l){var s,u;e._ripple=te({tasker:o.disabled?null:(s=e._ripple)==null?void 0:s.tasker,removeRipple:(u=e._ripple)==null?void 0:u.removeRipple},o)}}var sn={mounted:rn,unmounted:an,updated:on,install(e){e.directive("ripple",this)}};const ln=sn;var J={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:Y()};function Me(e,t,n,r,i,a,o){try{var l=e[a](o),s=l.value}catch(u){n(u);return}l.done?t(s):Promise.resolve(s).then(r,i)}function _e(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(s){Me(a,r,i,o,l,"next",s)}function l(s){Me(a,r,i,o,l,"throw",s)}o(void 0)})}}var{n:un,classes:cn}=ne("sticky");function dn(e,t){return b(),M("div",{class:P(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:U({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?e.offsetTop+"px":void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[k("div",{class:P(e.n("wrapper")),ref:"wrapperEl",style:U({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[N(e.$slots,"default")],6)],6)}var Qe=me({name:"VarSticky",props:J,setup(e){var t=y(null),n=y(null),r=y(!1),i=y("0px"),a=y("0px"),o=y("auto"),l=y("auto"),s=y("auto"),u=y("auto"),f=C(()=>!e.disabled&&e.cssMode),p=C(()=>!e.disabled&&!e.cssMode&&r.value),g=C(()=>Ue(e.offsetTop)),c,h=()=>{var{cssMode:S,disabled:W}=e;if(!W){var B=0;if(c!==window){var{top:x}=j(c);B=x}var O=n.value,E=t.value,{top:re,left:ie}=j(E),v=re-B;return v<=g.value?(S||(o.value=E.offsetWidth+"px",l.value=E.offsetHeight+"px",i.value=B+g.value+"px",a.value=ie+"px",s.value=O.offsetWidth+"px",u.value=O.offsetHeight+"px",r.value=!0),{offsetTop:g.value,isFixed:!0}):(r.value=!1,{offsetTop:v,isFixed:!1})}},d=()=>{if(c){var S=h();S&&F(e.onScroll,S.offsetTop,S.isFixed)}},w=function(){var S=_e(function*(){r.value=!1,yield Ut(),h()});return function(){return S.apply(this,arguments)}}(),L=function(){var S=_e(function*(){yield je(),c=Dt(t.value),c!==window&&c.addEventListener("scroll",d),d()});return function(){return S.apply(this,arguments)}}(),V=()=>{c!==window&&c.removeEventListener("scroll",d)};return A(()=>e.disabled,w),qe(L),qt(V),Ge(w),fe(()=>window,"scroll",d),{n:un,classes:cn,resize:w,stickyEl:t,wrapperEl:n,isFixed:r,offsetTop:g,fixedTop:i,fixedLeft:a,fixedWidth:o,fixedHeight:l,fixedWrapperWidth:s,fixedWrapperHeight:u,enableCSSMode:f,enableFixedMode:p,toNumber:De}}});Qe.render=dn;const K=Qe;K.install=function(e){e.component(K.name,K)};var fn={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:Y()},et=Symbol("TABS_BIND_TAB_KEY");function vn(){var{childProviders:e,bindChildren:t,length:n}=Qt(et);return{length:n,tabList:e,bindTabList:t}}function pn(){var{parentProvider:e,bindParent:t,index:n}=Jt(et);return t||xt("Tab","<var-tab/> must in <var-tabs/>"),{index:n,tabs:e,bindTabs:t}}var{n:Z,classes:hn}=ne("tab");function mn(e,t){var n=gt("ripple");return Ne((b(),M("div",{class:P(e.classes(e.n(),e.n("$--box"),e.computeColorClass(),e.n("--"+e.itemDirection))),ref:"tabEl",style:U({color:e.computeColorStyle()}),onClick:t[0]||(t[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[N(e.$slots,"default")],6)),[[n,{disabled:e.disabled}]])}var tt=me({name:"VarTab",directives:{Ripple:ln},props:fn,setup(e){var t=y(null),n=C(()=>e.name),r=C(()=>e.disabled),i=C(()=>t.value),{index:a,tabs:o,bindTabs:l}=pn(),{onTabClick:s,active:u,activeColor:f,inactiveColor:p,disabledColor:g,itemDirection:c,resize:h}=o,d={name:n,index:a,disabled:r,element:i};l(d);var w=()=>e.name!=null?u.value===e.name:u.value===(a==null?void 0:a.value),L=()=>e.disabled?g.value:w()?f.value:p.value,V=()=>e.disabled?Z("$-tab--disabled"):w()?Z("$-tab--active"):Z("$-tab--inactive"),S=W=>{var{disabled:B,name:x,onClick:O}=e;B||(F(O,x??a.value,W),s(d))};return A(()=>e.name,h),A(()=>e.disabled,h),{n:Z,classes:hn,tabEl:t,active:u,activeColor:f,inactiveColor:p,itemDirection:c,computeColorStyle:L,computeColorClass:V,handleClick:S}}});tt.render=mn;const Q=tt;Q.install=function(e){e.component(Q.name,Q)};function Ee(e){return["horizontal","vertical"].includes(e)}function bn(e){return["auto","always"].includes(e)}function yn(e){return["normal","reverse"].includes(e)}var gn={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:Ee},itemDirection:{type:String,default:"horizontal",validator:Ee},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:[Boolean,String,Number],default:!1},scrollable:{type:String,default:"auto",validator:bn},indicatorPosition:{type:String,default:"normal",validator:yn},safeArea:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},stickyCssMode:ue(J,"cssMode"),stickyZIndex:ue(J,"zIndex"),offsetTop:ue(J,"offsetTop"),onClick:Y(),onChange:Y(),"onUpdate:active":Y()};function $e(e,t,n,r,i,a,o){try{var l=e[a](o),s=l.value}catch(u){n(u);return}l.done?t(s):Promise.resolve(s).then(r,i)}function Pe(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(s){$e(a,r,i,o,l,"next",s)}function l(s){$e(a,r,i,o,l,"throw",s)}o(void 0)})}}var{n:wn,classes:Sn}=ne("tabs");function Tn(e,t){return b(),X(Tt(e.sticky?e.n("$-sticky"):e.Transition),{ref:e.sticky?"stickyComponent":void 0,"css-mode":e.sticky?e.stickyCssMode:void 0,"offset-top":e.sticky?e.offsetTop:void 0,"z-index":e.sticky?e.stickyZIndex:void 0},{default:I(()=>[k("div",St({class:e.classes(e.n(),e.n("$--box"),e.n("--item-"+e.itemDirection),e.n("--layout-"+e.layoutDirection+"-padding"),e.formatElevation(e.elevation,4),[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[k("div",{ref:"scrollerEl",class:P(e.classes(e.n("tab-wrap"),[e.localScrollable,e.n("--layout-"+e.layoutDirection+"-scrollable")],e.n("--layout-"+e.layoutDirection)))},[N(e.$slots,"default"),k("div",{class:P(e.classes(e.n("indicator"),e.n("--layout-"+e.layoutDirection+e.indicatorPosition+"-indicator"))),style:U({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?"translateX("+e.indicatorX+")":"translateY("+e.indicatorY+")"})},[k("div",{class:P(e.classes(e.n("indicator-inner"),e.n("--layout-"+e.layoutDirection+"-indicator-inner"))),style:U({background:e.indicatorColor||e.activeColor})},null,6)],6)],2)],16)]),_:3},8,["css-mode","offset-top","z-index"])}var nt=me({name:"VarTabs",components:{VarSticky:K},inheritAttrs:!1,props:gn,setup(e){var t=y("0px"),n=y("0px"),r=y("0px"),i=y("0px"),a=y(!1),o=y(null),l=C(()=>e.active),s=C(()=>e.indicatorPosition==="reverse"?"-reverse":""),u=C(()=>e.activeColor),f=C(()=>e.inactiveColor),p=C(()=>e.disabledColor),g=C(()=>e.itemDirection),c=y(null),{tabList:h,bindTabList:d,length:w}=vn(),L=v=>{var T,m=(T=v.name.value)!=null?T:v.index.value,{active:R,onChange:ae,onClick:oe}=e;F(e["onUpdate:active"],m),F(oe,m),m!==R&&F(ae,m)},V=()=>h.find(v=>{var{name:T}=v;return e.active===T.value}),S=v=>h.find(T=>{var{index:m}=T;return(v??e.active)===m.value}),W=()=>{if(w.value!==0){var{active:v}=e;if(be(v)){var T=Nt(v,0,w.value-1);return F(e["onUpdate:active"],T),S(T)}}},B=()=>{a.value=e.scrollable==="always"||h.length>=5},x=v=>{var{element:T}=v,m=T.value;m&&(e.layoutDirection==="horizontal"?(t.value=m.offsetWidth+"px",r.value=m.offsetLeft+"px"):(n.value=m.offsetHeight+"px",i.value=m.offsetTop+"px"))},O=v=>{var{element:T}=v;if(a.value){var m=o.value,R=T.value;if(e.layoutDirection==="horizontal"){var ae=R.offsetLeft+R.offsetWidth/2-m.offsetWidth/2;Ce(m,{left:ae,animation:Se})}else{var oe=R.offsetTop+R.offsetHeight/2-m.offsetHeight/2;Ce(m,{top:oe,animation:Se})}}},E=()=>{var v=V()||S()||W();!v||v.disabled.value||(B(),x(v),O(v))},re=function(){var v=Pe(function*(){e.sticky&&c.value&&(yield c.value.resize())});return function(){return v.apply(this,arguments)}}(),ie={active:l,activeColor:u,inactiveColor:f,disabledColor:p,itemDirection:g,resize:E,onTabClick:L};return d(ie),A(()=>w.value,Pe(function*(){yield je(),E()})),A(()=>e.active,E),A(()=>e.scrollable,E),Le(E),Ge(E),{stickyComponent:c,indicatorWidth:t,indicatorHeight:n,indicatorX:r,indicatorY:i,indicatorPosition:s,localScrollable:a,scrollerEl:o,Transition:wt,toSizeUnit:Yt,n:wn,classes:Sn,resize:E,resizeSticky:re,formatElevation:en}}});nt.render=Tn;const ee=nt;ee.install=function(e){e.component(ee.name,ee)};const Cn={setup(){const{strings:e}=ot();return{postEditorStore:rt(),rootStore:it(),composableStrings:e}},emits:["changed"],components:{BaseButton:ut,SvgCaret:ct,SvgCircleCheck:dt,SvgCircleInformation:ft,SvgEllipse:zt,TransitionSlide:kt,VarTab:Q,VarTabs:ee},mixins:[lt,st],props:{tabs:{type:Array,required:!0},skinnyTabs:Boolean,active:String,showSaveButton:{type:Boolean,default(){return!0}},internal:Boolean,disableMobile:Boolean},data(){return{buttonLoading:!1,showMobileMenu:!0,calculateWidth:!1,showMobileTabs:!1,strings:at(this.composableStrings,{saveChanges:this.$t.__("Save Changes",this.$td)})}},computed:{activeTab(){var e;return this.active?this.active:this.$route&&this.$route.name?this.$route.name:(e=this.tabs[0])==null?void 0:e.slug},filteredTabs(){return this.tabs.filter(e=>e.slug!==(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""))}},methods:{maybeChangeTab(e){if(this.active){this.$emit("changed",e);return}const t=this.tabs.find(n=>n.slug===e);t&&this.$router.push(t.url)},getActiveTabName(){const e=this.tabs.find(t=>t.slug===(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""));return e?e.name:""},maybeShowMobileMenu(){if(window.matchMedia("(max-width: 782px)").matches&&!this.disableMobile){this.showMobileMenu=!0;return}let e=0;this.calculateWidth=!0,this.$nextTick(()=>{e=this.$refs["tabs-scroller"].offsetWidth,this.calculateWidth=!1;let t=0;const n=this.$refs["tabs-button"];if(n){const r=n.querySelector(".aioseo-button");t=r?r.scrollWidth:0}if(e+t>this.$refs["aioseo-tabs"].offsetWidth){this.showMobileMenu=!0;return}this.showMobileMenu=!1})},createRipple(e){const t=e.currentTarget,n=document.createElement("span"),r=Math.max(t.clientWidth,t.clientHeight),i=r/2,a=t.getBoundingClientRect();n.style.width=n.style.height=`${r}px`,n.style.left=`${e.clientX-(a.left+i)}px`,n.style.top=`${e.clientY-(a.top+i)}px`,n.classList.add("ripple");const o=t.getElementsByClassName("ripple")[0];o&&o.remove(),t.appendChild(n)}},beforeMount(){window.addEventListener("resize",this.maybeShowMobileMenu)},async mounted(){this.$nextTick(()=>{this.maybeShowMobileMenu();const e=this.$refs["aioseo-tabs"],t=e.querySelector(".var-tab--active"),n=e.querySelector(".var-tabs__indicator");if(!t||!n)return;setTimeout(()=>{n.style.width==="0px"&&(n.style.width=`${t.offsetWidth}px`,n.style.transform=`translateX(${t.offsetLeft}px)`)},300),new MutationObserver(()=>{n.style.width==="0px"&&(n.style.width=`${t.offsetWidth}px`,n.style.transform=`translateX(${t.offsetLeft}px)`)}).observe(n,{attributes:!0});const i=e.querySelectorAll(".var-tab");i.length&&i.forEach(a=>{a.addEventListener("click",this.createRipple)})})},beforeUnmount(){window.removeEventListener("resize",this.maybeShowMobileMenu)}},kn={class:"tabs-scroller",ref:"tabs-scroller"},Mn={class:"label"},_n={key:1,class:"warning"},En={key:0,class:"aioseo-mobile-tabs"},$n=k("span",{class:"tab-indicator"},null,-1),Pn={class:"tab-links"},zn=["onClick"],Ln={key:1,class:"button-right",ref:"tabs-button"},Wn={class:"tabs-extra"};function Bn(e,t,n,r,i,a){const o=$("svg-ellipse"),l=$("svg-circle-check"),s=$("svg-circle-information"),u=$("var-tab"),f=$("var-tabs"),p=$("svg-caret"),g=$("router-link"),c=$("transition-slide"),h=$("base-button");return b(),M("div",{class:P(["aioseo-tabs",{internal:n.internal,skinny:n.skinnyTabs}]),ref:"aioseo-tabs"},[Ne(k("div",kn,[H(f,{active:a.activeTab,onClick:a.maybeChangeTab,ref:"var-tabs"},{default:I(()=>[(b(!0),M(se,null,le(n.tabs,(d,w)=>(b(),X(u,{name:d.slug,key:w},{default:I(()=>[N(e.$slots,"var-tab",{tab:d},()=>[N(e.$slots,"var-tab-icon",{tab:d}),k("span",Mn,D(d.name),1),d.errorCount>=0?(b(),M("span",{key:0,class:P(["tab-score",e.getErrorClass(r.postEditorStore.currentPost.page_analysis.analysis[d.slug].errors)])},[0<r.postEditorStore.currentPost.page_analysis.analysis[d.slug].errors?(b(),X(o,{key:0,width:"6"})):z("",!0),r.postEditorStore.currentPost.page_analysis.analysis[d.slug].errors===0?(b(),X(l,{key:1,width:"12"})):z("",!0),G(" "+D(e.getErrorDisplay(r.postEditorStore.currentPost.page_analysis.analysis[d.slug].errors)),1)],2)):z("",!0),d.warning&&e.$root._data.screenContext!=="sidebar"?(b(),M("span",_n,[H(s,{width:"15",height:"15"})])):z("",!0)])]),_:2},1032,["name"]))),128))]),_:3},8,["active","onClick"])],512),[[Ct,!i.showMobileMenu||i.calculateWidth]]),i.showMobileMenu?(b(),M("div",En,[k("div",{class:"active-tab",onClick:t[1]||(t[1]=d=>i.showMobileTabs=!i.showMobileTabs)},[k("div",null,[G(D(a.getActiveTabName())+" ",1),H(p,{onClick:t[0]||(t[0]=ge(d=>i.showMobileTabs=!i.showMobileTabs,["stop"])),class:P({rotated:!i.showMobileTabs})},null,8,["class"]),$n])]),H(c,{active:i.showMobileTabs,class:"tab-dropdown"},{default:I(()=>[k("div",Pn,[n.active?z("",!0):(b(!0),M(se,{key:0},le(a.filteredTabs,(d,w)=>(b(),X(g,{key:w,to:d.url,onClick:t[2]||(t[2]=L=>i.showMobileTabs=!1)},{default:I(()=>[G(D(d.name),1)]),_:2},1032,["to"]))),128)),n.active?(b(!0),M(se,{key:1},le(a.filteredTabs,(d,w)=>(b(),M("a",{href:"#",key:w,onClick:ge(L=>e.$emit("changed",d.slug)&&(i.showMobileTabs=!1),["prevent"])},D(d.name),9,zn))),128)):z("",!0)])]),_:1},8,["active"])])):z("",!0),n.showSaveButton?(b(),M("div",Ln,[N(e.$slots,"button",{},()=>[H(h,{type:"blue",size:"medium",loading:r.rootStore.loading,onClick:e.processSaveChanges},{default:I(()=>[G(D(i.strings.saveChanges),1)]),_:1},8,["loading","onClick"])])],512)):z("",!0),k("div",Wn,[N(e.$slots,"extra")])],2)}const Hn=Ae(Cn,[["render",Bn]]);export{Hn as C,zt as S};
