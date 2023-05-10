import{_ as p,r as e,o as k,c as f,d as a,f as _,g as r,a as h,b as L}from"./js/_plugin-vue_export-helper.49ea0e68.js";import{l as g}from"./js/index.f53c5df1.js";import{l as A}from"./js/index.d59f905b.js";import{l as w}from"./js/index.0b123ab1.js";import{e as y}from"./js/elemLoaded.9a6eb745.js";import{u as v}from"./js/url.89231c9b.js";import{d as C,a as F,m as S}from"./js/vuex.esm-bundler.97e30e47.js";import{S as x}from"./js/Information.4a1e5f23.js";import{S as V}from"./js/Caret.09e548f3.js";import{s as l}from"./js/index.cda4d160.js";import"./js/client.e7a26247.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/constants.817c4cd3.js";import"./js/isArrayLikeObject.d5975086.js";import"./js/default-i18n.ab92175e.js";import"./js/helpers.871dba46.js";const $={components:{SvgCircleInformation:x,SvgClose:V},data(){return{linkFormatValue:{},disabled:!1,url:null,strings:{upsell:this.$t.sprintf(this.$t.__("Did you know you can automatically add internal links using Link Assistant? %1$s",this.$td),this.$links.getPlainLink(this.$constants.GLOBAL_STRINGS.learnMore,this.$aioseo.urls.aio.linkAssistant,!0))}}},computed:{...C(["isUnlicensed"]),...F(["currentPost"]),canShowUpsell(){const n=this.$addons.getAddon("aioseo-link-assistant"),{options:t}=this.currentPost,i=t.linkFormat.internalLinkCount,o=t.linkFormat.linkAssistantDismissed;return(this.isUnlicensed||!n||!n.isActive||n.requiresUpgrade)&&2<i&&!o&&!this.disabled&&this.linkFormatValue.url&&this.isInternalLink(this.linkFormatValue.url)}},methods:{...S(["incrementInternalLinkCount","disableLinkAssistantEducation"]),async linkAdded(n){var s;await this.$nextTick();const{options:t}=this.currentPost,i=t.linkFormat.internalLinkCount,o=t.linkFormat.linkAssistantDismissed;2<i||o||this.isInternalLink(n.url||((s=n.suggestion)==null?void 0:s.url)||null)&&this.incrementInternalLinkCount()},async setLinkFormatValue(){await this.$nextTick();const n=document.querySelector("#aioseo-link-assistant-education input");!this.linkFormatValue.url&&(n!=null&&n.value)&&(this.linkFormatValue=JSON.parse(n.value))},isInternalLink(n){const t=v.parse(n,!1,!0);return n.indexOf("//")===-1&&n.indexOf("/")===0?!0:n.indexOf("#")===0?!1:t.host?t.host===this.$aioseo.urls.domain:!0}},created(){this.setLinkFormatValue();const{addAction:n,hasAction:t}=window.wp.hooks;t("aioseo-link-format-link-added","aioseo")||n("aioseo-link-format-link-added","aioseo",this.linkAdded)}},D={key:0,class:"aioseo-link-assistant-did-you-know"},I=["innerHTML"];function P(n,t,i,o,s,c){const d=e("svg-circle-information"),m=e("svg-close");return c.canShowUpsell?(k(),f("div",D,[a(d),_("span",{onClick:t[0]||(t[0]=r(b=>s.disabled=!0,["stop"])),innerHTML:s.strings.upsell},null,8,I),a(m,{onClick:r(n.disableLinkAssistantEducation,["stop"])},null,8,["onClick"])])):h("",!0)}const U=p($,[["render",P]]),u=()=>{let n=L(U);n=g(n),n=A(n),n=w(n),n.use(l),l._vm=n,n.mount("#aioseo-link-assistant-education-mount")};window.aioseo&&window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&(document.getElementById("aioseo-link-assistant-education")?u():(y("#aioseo-link-assistant-education","aioseoLaDidYouKnow"),document.addEventListener("animationstart",function(t){t.animationName==="aioseoLaDidYouKnow"&&u()},{passive:!0})));
