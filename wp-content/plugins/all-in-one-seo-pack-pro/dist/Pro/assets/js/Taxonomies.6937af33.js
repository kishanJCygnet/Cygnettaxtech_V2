import{d as A,a as y,m as S}from"./vuex.esm-bundler.97e30e47.js";import{A as k,T as D}from"./TitleDescription.f7981897.js";import{C as x}from"./Card.32a76e4b.js";import{C as O}from"./Tabs.3e93df31.js";import{C as B}from"./Tooltip.754dc940.js";import{S as P}from"./index.d59f905b.js";import{_ as w,c as i,F as d,i as h,r as l,o as n,h as g,w as a,f as e,n as E,e as c,t as s,d as p,k as L,T as U}from"./_plugin-vue_export-helper.49ea0e68.js";import"./default-i18n.ab92175e.js";import"./_commonjsHelpers.f84db168.js";import"./WpTable.24633fe3.js";import"./helpers.871dba46.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.f3af2f4b.js";import"./index.cda4d160.js";import"./isArrayLikeObject.d5975086.js";import"./Caret.09e548f3.js";import"./cleanForSlug.8d948434.js";import"./constants.d064fb5f.js";import"./html.68197829.js";import"./Index.20fccad8.js";import"./JsonValues.870a4901.js";import"./MaxCounts.12b45bab.js";import"./SaveChanges.203efc2d.js";import"./RadioToggle.2efe96f8.js";import"./ProBadge.b673849c.js";import"./RobotsMeta.c003fd28.js";import"./Checkbox.de9093b7.js";import"./Checkmark.05a656b1.js";import"./Row.87dd14fc.js";import"./SettingsRow.45faf80a.js";import"./GoogleSearchPreview.e0f6eb8d.js";import"./HtmlTagsEditor.9d6b41fb.js";import"./Editor.90c97faa.js";import"./UnfilteredHtml.46e0d460.js";import"./Slide.dcb3da9d.js";import"./TruSeoScore.76897846.js";import"./Information.4a1e5f23.js";const j={components:{Advanced:k,CoreCard:x,CoreMainTabs:O,CoreTooltip:B,SvgCircleQuestionMark:P,TitleDescription:D},data(){return{internalDebounce:null,strings:{label:this.$t.__("Label:",this.$td),name:this.$t.__("Slug:",this.$td),postTypes:this.$t.__("Post Types:",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Custom Taxonomies",this.$td),ctaDescription:this.$t.sprintf(this.$t.__("%1$s %2$s lets you set the SEO title and description for custom taxonomies. You can also control all of the robots meta and other options just like the default category and tags taxonomies.",this.$td),"AIOSEO","Pro"),ctaHeader:this.$t.sprintf(this.$t.__("Custom Taxonomy Support is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")},tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"advanced",name:this.$t.__("Advanced",this.$tdPro),access:"aioseo_search_appearance_settings",pro:!1}]}},computed:{...A(["isUnlicensed"]),...y(["options","dynamicOptions","settings"]),taxonomies(){return this.$aioseo.postData.taxonomies}},methods:{...S(["changeTab"]),processChangeTab(o,u){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${o}SA`,value:u}),setTimeout(()=>{this.internalDebounce=!1},50))}}},N={class:"aioseo-search-appearance-taxonomies"},V={class:"aioseo-description"},q=e("br",null,null,-1),z=e("br",null,null,-1),F=e("br",null,null,-1);function I(o,u,M,G,r,_){const f=l("svg-circle-question-mark"),b=l("core-tooltip"),$=l("core-main-tabs"),T=l("core-card");return n(),i("div",N,[(n(!0),i(d,null,h(_.taxonomies,(t,C)=>(n(),g(T,{key:C,slug:`${t.name}SA`},{header:a(()=>[e("div",{class:E(["icon dashicons",`${t.icon||"dashicons-admin-post"}`])},null,2),c(" "+s(t.label)+" ",1),p(b,{"z-index":"99999"},{tooltip:a(()=>[e("div",V,[c(s(r.strings.label)+" ",1),e("strong",null,s(t.label),1),q,c(" "+s(r.strings.name)+" ",1),e("strong",null,s(t.name),1),z,c(" "+s(r.strings.postTypes),1),F,e("ul",null,[(n(!0),i(d,null,h(t.postTypes,(m,v)=>(n(),i("li",{key:v},[e("strong",null,s(m),1)]))),128))])])]),default:a(()=>[p(f)]),_:2},1024)]),tabs:a(()=>[p($,{tabs:r.tabs,showSaveButton:!1,active:o.settings.internalTabs[`${t.name}SA`],internal:"",onChanged:m=>_.processChangeTab(t.name,m)},null,8,["tabs","active","onChanged"])]),default:a(()=>[p(U,{name:"route-fade",mode:"out-in"},{default:a(()=>[(n(),g(L(o.settings.internalTabs[`${t.name}SA`]),{object:t,separator:o.options.searchAppearance.global.separator,options:o.dynamicOptions.searchAppearance.taxonomies[t.name],type:"taxonomies","show-bulk":!1},null,8,["object","separator","options"]))]),_:2},1024)]),_:2},1032,["slug"]))),128))])}const xt=w(j,[["render",I]]);export{xt as default};
