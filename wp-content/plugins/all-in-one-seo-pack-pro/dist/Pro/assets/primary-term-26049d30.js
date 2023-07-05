import{_ as f}from"./js/_plugin-vue_export-helper.3febc96a.js";import{r as c,o as w,c as T,a as d,x as y,g as p,w as _,B as P,b as $,E}from"./js/vue.runtime.esm-bundler.f433d23f.js";import{l as b}from"./js/index.c9841ea4.js";import{a as B,l as k}from"./js/index.57ad6f19.js";import{l as A}from"./js/index.0b123ab1.js";import{u as C,t as l,i as I,v as q,l as L}from"./js/links.96ffe3f0.js";import{e as N}from"./js/elemLoaded.9a6eb745.js";import{s as D}from"./js/postContent.2b412d8b.js";import{C as V}from"./js/Tooltip.6a8793f6.js";import{a as F}from"./js/toString.9a2ec6a1.js";import{b as M}from"./js/_baseIteratee.d1db8c72.js";import{b as Q}from"./js/_basePickBy.c01b2cfd.js";import{g as U}from"./js/_getAllKeysIn.5a4acc25.js";import"./js/translations.f6b76bbe.js";import"./js/default-i18n.41786823.js";import"./js/constants.008ef172.js";import"./js/Caret.b5c2e4ec.js";import"./js/isArrayLikeObject.7c69e632.js";import"./js/cleanForSlug.b54907fb.js";import"./js/_baseTrim.8725856f.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/deburr.40d916cf.js";import"./js/html.51334e3e.js";import"./js/get.5bf9ffd1.js";import"./js/_baseIsEqual.118be5ff.js";import"./js/_getAllKeys.d4dd627a.js";import"./js/_getTag.a4119be8.js";import"./js/_baseSet.7ce86f5a.js";function H(t,e){if(t==null)return{};var o=F(U(t),function(r){return[r]});return e=M(e),Q(t,o,function(r,s){return e(r,s[0])})}const g={getTerms:async t=>{const{apiFetch:e}=window.wp,{addQueryArgs:o}=window.wp.url,r=m(t);return await e({path:o(`/wp/v2/${r.restBase}`,{per_page:-1,orderby:"count",order:"desc",_fields:"id,name"})})},getSelectedTerms:t=>{const e=m(t);return window.wp.data.select("core/editor").getEditedPostAttribute(e.restBase)||[]}},x={getTerms:async t=>{var s;const e=[],o=m(t);return(((s=document.getElementById(`${o.name}checklist`))==null?void 0:s.querySelectorAll("li"))||[]).forEach(n=>{const i=n.querySelector("input").value,a=n.querySelector("label").innerText;e.push({id:parseInt(i,10),name:a.trim()})}),new Promise(n=>{n(e)})},getSelectedTerms:t=>{var s;const e=[],o=m(t);return(((s=document.getElementById(`${o.name}checklist`))==null?void 0:s.querySelectorAll("input:checked"))||[]).forEach(n=>{e.push(parseInt(n.value,10))}),e}},u=()=>{var o;return(((o=C().aioseo.postData)==null?void 0:o.taxonomies)||[]).filter(r=>r.primaryTermSupport===!0)},O=t=>u().some(e=>t===e.name),m=t=>{const e=u().filter(o=>t===o.name);return e.length?e[0]:{}},R=t=>l()?g.getTerms(t):x.getTerms(t),z=t=>l()?g.getSelectedTerms(t):x.getSelectedTerms(t);const K={setup(){return{postEditorStore:I()}},components:{CoreTooltip:V,SvgCircleQuestionMark:B},data(){return{term:null,terms:[],selectedTerms:[],strings:{tooltip:this.$t.sprintf(this.$t.__("%1$s allows you to choose a primary category for your posts. This feature works hand in hand with our powerful Breadcrumbs template to give you full navigational control to help improve your search rankings.",this.$tdPro),"AIOSEO Pro")}}},props:{taxonomy:String},watch:{terms(t){if(!this.term&&t&&this.postEditorStore.currentPost.primary_term[this.taxonomy]){const e=t.find(o=>o.value===this.postEditorStore.currentPost.primary_term[this.taxonomy]);this.setPrimaryTerm(e)}},selectedTerms(t,e){if(e.length<t.length){const o=t.filter(r=>!e.includes(r))[0];this.terms.some(r=>r.value===o)||this.updateTerms()}this.term&&this.term.value&&!t.includes(this.term.value)&&this.setPrimaryTerm(null)}},computed:{labelString(){const t=m(this.taxonomy).singular;return this.$t.sprintf(this.$t.__("Select Primary %1$s",this.$tdPro),t)},options(){return this.terms.filter(t=>this.selectedTerms.includes(t.value))}},methods:{setPrimaryTerm(t){this.term=t,window.aioseoBus.$emit("standalone-update-post",{primary_term:H({...this.postEditorStore.currentPost.primary_term,[this.taxonomy]:t&&t.value?t.value:null})})},updateTerms(){R(this.taxonomy).then(t=>{this.terms=[],t.forEach(e=>{this.terms.push({value:e.id,label:e.name})})})},updateSelectedTerms(){this.selectedTerms=z(this.taxonomy)}},mounted(){this.updateTerms(),this.updateSelectedTerms(),window.aioseoBus.$on("updateSelectedTerms",this.updateSelectedTerms)},beforeUnmount(){window.aioseoBus.$off("updateSelectedTerms",this.updateSelectedTerms)}},G={key:0,class:"aioseo-primary-term-select"},J={class:"aioseo-primary-term-select__title"},W={class:"aioseo-primary-term-select__title-text"};function X(t,e,o,r,s,n){const i=c("svg-circle-question-mark"),a=c("core-tooltip"),S=c("base-select");return 1<this.selectedTerms.length?(w(),T("div",G,[d("div",J,[d("span",W,y(n.labelString),1),p(a,{offset:"-200px,0"},{tooltip:_(()=>[P(y(s.strings.tooltip),1)]),default:_(()=>[p(i)]),_:1})]),p(S,{size:"medium",options:n.options,modelValue:s.term,"onUpdate:modelValue":e[0]||(e[0]=v=>n.setPrimaryTerm(v))},null,8,["options","modelValue"])])):$("",!0)}const Y=f(K,[["render",X]]);const Z={components:{PrimaryTerm:Y},props:{taxonomy:String}},j={class:"aioseo-app aioseo-primary-term"};function tt(t,e,o,r,s,n){const i=c("primary-term");return w(),T("div",j,[p(i,{taxonomy:o.taxonomy},null,8,["taxonomy"])])}const et=f(Z,[["render",tt]]);if(l()&&window.wp){const{createElement:t,Fragment:e}=window.wp.element,{addFilter:o}=window.wp.hooks,{createHigherOrderComponent:r}=window.wp.compose,{subscribe:s}=window.wp.data;o("editor.PostTaxonomyType","aioseo/primary-term",r(n=>i=>{const{slug:a}=i;return O(a)?t(e,{},t(n,i),t("div",{id:`aioseo-primary-term-${a}`},t("div",{className:"aioseo-primary-term-app",taxonomy:a}))):t(n,i)},"withInspectorControls")),s(()=>{window.aioseoBus.$emit("updateSelectedTerms")})}q()&&u().forEach(t=>{const e=document.querySelector(`#${t.name}div .inside`);if(!e)return;const o=document.createElement("div");o.setAttribute("id",`aioseo-primary-term-${t.name}`),o.setAttribute("class","aioseo-primary-term-app"),o.setAttribute("taxonomy",t.name),e.append(o),function(r){r(`#${t.name}checklist`).on("change",'input[type="checkbox"]',()=>{window.aioseoBus.$emit("updateSelectedTerms")}),r(`#${t.name}checklist`).on("wpListAddEnd",()=>{window.aioseoBus.$emit("updateSelectedTerms")})}(window.jQuery)});const h=t=>{if(!t)return;const e=t.getAttribute("taxonomy");let o=E({...et,name:"Standalone/PrimaryTerm"},{taxonomy:e});o=b(o),o=k(o),o=A(o),L(o),o.mount(t)};if(D()&&window.aioseo&&window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"){const t=document.getElementsByClassName("aioseo-primary-term-app");Array.prototype.forEach.call(t,e=>h(e)),N(".aioseo-primary-term-app","aioseoPrimaryTerm"),document.addEventListener("animationstart",function(e){e.animationName==="aioseoPrimaryTerm"&&h(e.target)},{passive:!0})}
