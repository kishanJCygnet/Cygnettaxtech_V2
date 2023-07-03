import{b as A,u as x,m as y}from"./links.64a86a6c.js";import{A as k,T as D}from"./TitleDescription.6ceb3b67.js";import{C as B}from"./Card.627e6c48.js";import{C as O}from"./Tabs.2bbf6d03.js";import{C as P}from"./Tooltip.06c652b4.js";import{S as w}from"./index.61edcc6f.js";import{r as a,c as l,F as h,C as g,o as s,d as f,w as n,a as o,n as E,B as c,x as e,g as p,A as L,T as j}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_ as N}from"./_plugin-vue_export-helper.0e38850e.js";import"./default-i18n.cc9dbff0.js";import"./isArrayLikeObject.2110cf7d.js";import"./Caret.08be6d0c.js";/* empty css                                            *//* empty css                                              */import"./constants.c7984802.js";import"./JsonValues.870a4901.js";import"./MaxCounts.12b45bab.js";/* empty css                                              */import"./RadioToggle.1b31cff9.js";import"./ProBadge.8bd2315e.js";import"./RobotsMeta.a56a42e6.js";import"./Checkbox.cfe07718.js";import"./Checkmark.ef90c7b9.js";import"./Row.53f210bf.js";import"./SettingsRow.47e47f7a.js";import"./tags.d17dcfaf.js";import"./Tags.eede6df6.js";import"./postContent.3bf9d0ba.js";import"./cleanForSlug.1336d2fa.js";import"./toString.6606707f.js";import"./get.fca157c1.js";import"./_stringToArray.4de3b1f3.js";import"./deburr.8932d979.js";import"./html.3b24bee7.js";import"./GoogleSearchPreview.6184b91b.js";import"./HtmlTagsEditor.cc920ab7.js";import"./Editor.02f65456.js";import"./UnfilteredHtml.6096ec86.js";import"./Slide.f610bf53.js";import"./TruSeoScore.25c11e71.js";import"./SaveChanges.51fc316b.js";import"./Information.adb5b538.js";const U={setup(){return{optionsStore:A(),rootStore:x(),settingsStore:y()}},components:{Advanced:k,CoreCard:B,CoreMainTabs:O,CoreTooltip:P,SvgCircleQuestionMark:w,TitleDescription:D},data(){return{internalDebounce:null,strings:{label:this.$t.__("Label:",this.$td),name:this.$t.__("Slug:",this.$td),postTypes:this.$t.__("Post Types:",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Custom Taxonomies",this.$td),ctaDescription:this.$t.sprintf(this.$t.__("%1$s %2$s lets you set the SEO title and description for custom taxonomies. You can also control all of the robots meta and other options just like the default category and tags taxonomies.",this.$td),"AIOSEO","Pro"),ctaHeader:this.$t.sprintf(this.$t.__("Custom Taxonomy Support is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")},tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}]}},computed:{taxonomies(){return this.rootStore.aioseo.postData.taxonomies}},methods:{processChangeTab(u,_){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:`${u}SA`,value:_}),setTimeout(()=>{this.internalDebounce=!1},50))}}},V={class:"aioseo-search-appearance-taxonomies"},q={class:"aioseo-description"},z=o("br",null,null,-1),F=o("br",null,null,-1),I=o("br",null,null,-1);function M(u,_,R,r,i,d){const b=a("svg-circle-question-mark"),S=a("core-tooltip"),T=a("core-main-tabs"),$=a("core-card");return s(),l("div",V,[(s(!0),l(h,null,g(d.taxonomies,(t,C)=>(s(),f($,{key:C,slug:`${t.name}SA`},{header:n(()=>[o("div",{class:E(["icon dashicons",`${t.icon||"dashicons-admin-post"}`])},null,2),c(" "+e(t.label)+" ",1),p(S,{"z-index":"99999"},{tooltip:n(()=>[o("div",q,[c(e(i.strings.label)+" ",1),o("strong",null,e(t.label),1),z,c(" "+e(i.strings.name)+" ",1),o("strong",null,e(t.name),1),F,c(" "+e(i.strings.postTypes),1),I,o("ul",null,[(s(!0),l(h,null,g(t.postTypes,(m,v)=>(s(),l("li",{key:v},[o("strong",null,e(m),1)]))),128))])])]),default:n(()=>[p(b)]),_:2},1024)]),tabs:n(()=>[p(T,{tabs:i.tabs,showSaveButton:!1,active:r.settingsStore.settings.internalTabs[`${t.name}SA`],internal:"",onChanged:m=>d.processChangeTab(t.name,m)},null,8,["tabs","active","onChanged"])]),default:n(()=>[p(j,{name:"route-fade",mode:"out-in"},{default:n(()=>[(s(),f(L(r.settingsStore.settings.internalTabs[`${t.name}SA`]),{object:t,separator:r.optionsStore.options.searchAppearance.global.separator,options:r.optionsStore.dynamicOptions.searchAppearance.taxonomies[t.name],type:"taxonomies","show-bulk":!1},null,8,["object","separator","options"]))]),_:2},1024)]),_:2},1032,["slug"]))),128))])}const wt=N(U,[["render",M]]);export{wt as default};