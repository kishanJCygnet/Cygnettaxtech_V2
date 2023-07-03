import{_ as u}from"./js/_plugin-vue_export-helper.0e38850e.js";import{o as d,c as m,a as i,I as _,P as f,b as l,x as w,E as h}from"./js/vue.runtime.esm-bundler.ab2e0e41.js";import{l as g}from"./js/index.8cc0006d.js";import{l as x}from"./js/index.61edcc6f.js";import{l as P}from"./js/index.0b123ab1.js";import{i as S,t as r,l as b}from"./js/links.64a86a6c.js";import{e as E}from"./js/elemLoaded.9a6eb745.js";import{s as k}from"./js/postContent.3bf9d0ba.js";import"./js/translations.93cb7f26.js";import"./js/default-i18n.cc9dbff0.js";import"./js/constants.c7984802.js";import"./js/Caret.08be6d0c.js";import"./js/isArrayLikeObject.2110cf7d.js";import"./js/cleanForSlug.1336d2fa.js";import"./js/toString.6606707f.js";import"./js/get.fca157c1.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/deburr.8932d979.js";import"./js/html.3b24bee7.js";const y={setup(){return{postEditorStore:S()}},emits:["standalone-update-post"],data(){return{strings:{label:this.$t.__("Don't update the modified date",this.$td)}}},methods:{addLimitModifiedDateAttribute(){r()&&window.wp.data.dispatch("core/editor").editPost({aioseo_limit_modified_date:this.postEditorStore.currentPost.limit_modified_date})}},computed:{canShowSvg(){return r()&&this.postEditorStore.currentPost.limit_modified_date}},watch:{"postEditorStore.currentPost.limit_modified_date"(t){window.aioseoBus.$emit("standalone-update-post",{limit_modified_date:t})}}},L={key:0},v={class:"components-checkbox-control__input-container"},B={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",role:"img",class:"components-checkbox-control__checked","aria-hidden":"true",focusable:"false"},D=i("path",{d:"M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"},null,-1),M=[D],A={class:"components-checkbox-control__label",for:"aioseo-limit-modified-date-input"};function C(t,o,a,e,p,n){return e.postEditorStore.currentPost.id?(d(),m("div",L,[i("span",v,[_(i("input",{id:"aioseo-limit-modified-date-input",class:"components-checkbox-control__input",type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=s=>e.postEditorStore.currentPost.limit_modified_date=s),onChange:o[1]||(o[1]=(...s)=>n.addLimitModifiedDateAttribute&&n.addLimitModifiedDateAttribute(...s))},null,544),[[f,e.postEditorStore.currentPost.limit_modified_date]]),n.canShowSvg?(d(),m("svg",B,M)):l("",!0)]),i("label",A,w(p.strings.label),1)])):l("",!0)}const V=u(y,[["render",C]]);if(r()&&window.wp){const{createElement:t}=window.wp.element,{registerPlugin:o}=window.wp.plugins,{PluginPostStatusInfo:a}=window.wp.editPost;o("aioseo-limit-modified-date",{render:()=>t(a,{},t("div",{id:"aioseo-limit-modified-date"}))})}const c=()=>{let t=h({...V,name:"Standalone/LimitModifiedDate"});t=g(t),t=x(t),t=P(t),b(t),t.mount("#aioseo-limit-modified-date")};k()&&window.aioseo&&window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&(document.getElementById("aioseo-limit-modified-date")?c():(E("#aioseo-limit-modified-date","aioseoLimitModifiedDate"),document.addEventListener("animationstart",function(o){o.animationName==="aioseoLimitModifiedDate"&&c()},{passive:!0})));
