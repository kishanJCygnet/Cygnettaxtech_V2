import{F as H,d as V,G as L,f as U,u as M,m as F}from"./links.64a86a6c.js";import{a as k}from"./addons.4e5c0f68.js";import{r as c,o as t,c as i,g as l,w as g,a as u,T as y,B as w,x as h,e as E,n as q,d as p,b as a,f as v}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_ as d}from"./_plugin-vue_export-helper.0e38850e.js";import{S as D}from"./index.61edcc6f.js";import{S as W}from"./Caret.08be6d0c.js";/* empty css                                            *//* empty css                                              */import"./default-i18n.cc9dbff0.js";import"./constants.c7984802.js";import{S as G}from"./ScrollAndHighlight.20a2ddb1.js";/* empty css                                              */import{C as T,a as Y}from"./LicenseKeyBar.d42eb188.js";import{U as Z}from"./AnimatedNumber.3f458c9e.js";import{S as j}from"./Logo.289ab331.js";const O={components:{UtilAnimatedNumber:Z},props:{percentage:Number},data(){return{fromNumber:0,number:0}},watch:{percentage:{deep:!0,handler(e){e!==this.number&&(this.fromNumber=this.number,this.number=e)}}},mounted(){this.number=this.percentage}},R={class:"aioseo-percent-circle"},z={class:"aioseo-seo-site-score-svg",viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"},I=u("circle",{class:"aioseo-percent-circle-score__background",stroke:"#BFD6F7","stroke-width":"2",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"},null,-1),K=["stroke-dasharray"],Q={class:"aioseo-percent-circle-percent"};function J(e,n,s,o,_,r){const m=c("util-animated-number");return t(),i("div",R,[l(y,{name:"fill-percent-circle"},{default:g(()=>[(t(),i("svg",z,[I,u("circle",{class:"aioseo-percent-circle-score__circle",stroke:"#005AE0","stroke-width":"2","stroke-dasharray":`${s.percentage},100`,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"},null,8,K)]))]),_:1}),u("div",Q,[u("div",null,[l(m,{number:_.number,"from-number":_.fromNumber},null,8,["number","from-number"]),w("% ")])])])}const A=d(O,[["render",J]]);const X={emits:["close"],components:{CorePercentCircle:A,SvgClose:W},props:{strings:Object,percentage:Number}},ee={class:"aioseo-processing-popup"},te=u("br",null,null,-1);function oe(e,n,s,o,_,r){const m=c("core-percent-circle"),f=c("svg-close");return t(),i("div",ee,[l(m,{percentage:s.percentage},null,8,["percentage"]),u("div",null,[u("strong",null,h(s.strings.header),1),te,w(h(s.strings.description),1)]),l(f,{onClick:n[0]||(n[0]=C=>e.$emit("close"))})])}const se=d(X,[["render",oe]]),ne={};function re(e,n){return t(),i("div")}const ie=d(ne,[["render",re]]);const ae={props:{hero:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fullWidth:Boolean,small:Boolean},computed:{classes(){let e=this.fluid?"aioseo-container-fluid ":"aioseo-container ";return e+=this.hero?"aioseo-hero ":"",e+=this.fullWidth?"full-width ":"",e+=this.small?"small ":"",e}}};function ce(e,n,s,o,_,r){return t(),i("div",{class:q(r.classes)},[E(e.$slots,"default")],2)}const le=d(ae,[["render",ce]]),ue={},_e={viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-notifications"},pe=u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM15.8333 15.8333H4.16667V13.3333H7.13333C7.70833 14.325 8.775 15 10.0083 15C11.2417 15 12.3 14.325 12.8833 13.3333H15.8333V15.8333ZM11.675 11.6667H15.8333V4.16667H4.16667V11.6667H8.34167C8.34167 12.5833 9.09167 13.3333 10.0083 13.3333C10.925 13.3333 11.675 12.5833 11.675 11.6667Z",fill:"currentColor"},null,-1),de=[pe];function me(e,n){return t(),i("svg",_e,de)}const ge=d(ue,[["render",me]]);const he={setup(){return{helpPanelStore:H(),licenseStore:V(),linkAssistantStore:L(),notificationsStore:U(),rootStore:M(),settingsStore:F()}},components:{CoreApiBar:T,CoreLicenseKeyBar:Y,CorePercentCircle:A,CoreProcessingPopup:se,CoreUpgradeBar:ie,GridContainer:le,SvgAioseoLogo:j,SvgCircleQuestionMark:D,SvgNotifications:ge},mixins:[G],props:{fullWidth:Boolean,small:Boolean,pageName:String,actions:{type:Boolean,default(){return!0}},upgradeBar:{type:Boolean,default(){return!0}}},data(){return{activeScan:null,strings:{linkAssistantPopup:{header:this.$t.__("Link suggestions are being processed.",this.$td),description:this.$t.__("Depending on the number of posts being scanned, this process can take some time. You can safely leave this page and check back later.",this.$td)},searchStatisticsPopup:{header:this.$t.__("Search statistics are being fetched.",this.$td),description:this.$t.__("Depending on the amount of content on your site, this process can take some time. You can safely leave this page and check back later.",this.$td)}}}},computed:{percentage(){switch(this.activeScan){case"linkAssistant":return this.linkAssistantStore.suggestionsScan.percent;default:return null}},showPopup(){switch(this.activeScan){case"linkAssistant":return this.linkAssistantStore.suggestionsScan.showProcessingPopup&&this.linkAssistantStore.suggestionsScan.percent!==100;default:return null}},popupStrings(){switch(this.activeScan){case"linkAssistant":return this.strings.linkAssistantPopup;default:return null}}},methods:{debounce(e){let n;return(...s)=>{n&&cancelAnimationFrame(n),n=requestAnimationFrame(()=>{e(...s)})}},storeScroll(){document.documentElement.dataset.scroll=window.scrollY},toggleModal(){document.getElementById("aioseo-help-modal").classList.toggle("visible"),document.body.classList.toggle("modal-open")},checkForActiveScan(){this.rootStore.aioseo.page==="link-assistant"&&k.isActive("aioseo-link-assistant")&&!k.requiresUpgrade("aioseo-link-assistant")&&k.hasMinimumVersion("aioseo-link-assistant")&&(this.$route.name==="links-report"||this.$route.name==="overview")&&this.linkAssistantStore.suggestionsScan.percent!==100&&(this.activeScan="linkAssistant")},toggleCirclePopup(){switch(this.activeScan){case"linkAssistant":return this.linkAssistantStore.toggleProcessingPopup();default:return null}}},mounted(){this.storeScroll(),document.addEventListener("scroll",this.debounce(this.storeScroll),{passive:!0}),this.checkForActiveScan()}},fe={class:"aioseo-header"},Se={class:"aioseo-header-content"},ke=["href"],ve={key:2,class:"spacer"},ye={key:3,class:"page-name"},Ce={key:4,class:"header-actions"},be={key:0,class:"round number"};function we(e,n,s,o,_,r){const m=c("core-upgrade-bar"),f=c("core-license-key-bar"),C=c("core-api-bar"),b=c("svg-aioseo-logo"),P=c("core-percent-circle"),B=c("core-processing-popup"),N=c("svg-notifications"),x=c("svg-circle-question-mark"),$=c("grid-container");return t(),i("div",fe,[!e.$isPro&&o.settingsStore.settings.showUpgradeBar&&s.upgradeBar&&o.rootStore.pong?(t(),p(m,{key:0})):a("",!0),e.$isPro&&o.licenseStore.isUnlicensed&&o.rootStore.pong?(t(),p(f,{key:1})):a("",!0),o.rootStore.pong?a("",!0):(t(),p(C,{key:2})),l($,{"full-width":s.fullWidth,small:s.small},{default:g(()=>[u("div",Se,[o.licenseStore.isUnlicensed?(t(),i("a",{key:0,href:e.$links.utmUrl("header-logo"),target:"_blank"},[l(b)],8,ke)):a("",!0),o.licenseStore.isUnlicensed?a("",!0):(t(),p(b,{key:1})),s.pageName?(t(),i("span",ve)):a("",!0),s.pageName?(t(),i("span",ye,h(s.pageName),1)):a("",!0),s.actions?(t(),i("div",Ce,[l(y,{name:"fade-percent-circle"},{default:g(()=>[_.activeScan&&r.showPopup?(t(),p(P,{key:0,percentage:r.percentage,onClick:r.toggleCirclePopup},null,8,["percentage","onClick"])):a("",!0)]),_:1}),l(y,{name:"fade-processing-popup"},{default:g(()=>[r.showPopup?(t(),p(B,{key:0,strings:r.popupStrings,percentage:r.percentage,onClose:r.toggleCirclePopup},null,8,["strings","percentage","onClose"])):a("",!0)]),_:1}),u("span",{class:"round",onClick:n[0]||(n[0]=v((...S)=>o.notificationsStore.toggleNotifications&&o.notificationsStore.toggleNotifications(...S),["stop"]))},[o.notificationsStore.activeNotificationsCount?(t(),i("span",be,h(o.notificationsStore.activeNotificationsCount>9?"!":o.notificationsStore.activeNotificationsCount),1)):a("",!0),l(N,{onClick:v(o.notificationsStore.toggleNotifications,["stop"])},null,8,["onClick"])]),o.helpPanelStore.docs&&Object.keys(o.helpPanelStore.docs).length?(t(),i("span",{key:0,class:"round",onClick:n[1]||(n[1]=v((...S)=>r.toggleModal&&r.toggleModal(...S),["stop"]))},[l(x)])):a("",!0)])):a("",!0)])]),_:1},8,["full-width","small"])])}const We=d(he,[["render",we]]);export{We as C,le as G,se as a};
