import{_ as u,o as d,c as r,f as e,q as f,s as _,a as m,t as w,b as h}from"./js/_plugin-vue_export-helper.49ea0e68.js";import{l as g}from"./js/index.f53c5df1.js";import{l as b}from"./js/index.d59f905b.js";import{l as x}from"./js/index.0b123ab1.js";import{e as P}from"./js/elemLoaded.9a6eb745.js";import{s as k}from"./js/postContent.81b4971a.js";import{S as v}from"./js/Standalone.38badedc.js";import{i as s,s as l}from"./js/index.cda4d160.js";import"./js/client.e7a26247.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/vuex.esm-bundler.97e30e47.js";import"./js/default-i18n.ab92175e.js";import"./js/constants.817c4cd3.js";import"./js/isArrayLikeObject.d5975086.js";import"./js/helpers.871dba46.js";import"./js/Caret.09e548f3.js";import"./js/cleanForSlug.1b4a8fe4.js";import"./js/html.68197829.js";const y={emits:["standalone-update-post"],mixins:[v],data(){return{strings:{label:this.$t.__("Don't update the modified date",this.$td)}}},methods:{addLimitModifiedDateAttribute(){s()&&window.wp.data.dispatch("core/editor").editPost({aioseo_limit_modified_date:this.currentPost.limit_modified_date})}},computed:{canShowSvg(){return s()&&this.currentPost.limit_modified_date}},watch:{"currentPost.limit_modified_date"(t){this.$bus.$emit("standalone-update-post",{limit_modified_date:t})}}},L={key:0},B={class:"components-checkbox-control__input-container"},D={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",role:"img",class:"components-checkbox-control__checked","aria-hidden":"true",focusable:"false"},M=e("path",{d:"M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"},null,-1),S=[M],A={class:"components-checkbox-control__label",for:"aioseo-limit-modified-date-input"};function C(t,o,a,V,p,i){return t.currentPost.id?(d(),r("div",L,[e("span",B,[f(e("input",{id:"aioseo-limit-modified-date-input",class:"components-checkbox-control__input",type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=n=>t.currentPost.limit_modified_date=n),onChange:o[1]||(o[1]=(...n)=>i.addLimitModifiedDateAttribute&&i.addLimitModifiedDateAttribute(...n))},null,544),[[_,t.currentPost.limit_modified_date]]),i.canShowSvg?(d(),r("svg",D,S)):m("",!0)]),e("label",A,w(p.strings.label),1)])):m("",!0)}const E=u(y,[["render",C]]);if(s()&&window.wp){const{createElement:t}=window.wp.element,{registerPlugin:o}=window.wp.plugins,{PluginPostStatusInfo:a}=window.wp.editPost;o("aioseo-limit-modified-date",{render:()=>t(a,{},t("div",{id:"aioseo-limit-modified-date"}))})}const c=()=>{let t=h(E);t=g(t),t=b(t),t=x(t),l._vm=t,t.use(l),t.mount("#aioseo-limit-modified-date")};k()&&window.aioseo&&window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&(document.getElementById("aioseo-limit-modified-date")?c():(P("#aioseo-limit-modified-date","aioseoLimitModifiedDate"),document.addEventListener("animationstart",function(o){o.animationName==="aioseoLimitModifiedDate"&&c()},{passive:!0})));
