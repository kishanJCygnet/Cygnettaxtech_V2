import{b as I,u as R}from"./links.96ffe3f0.js";import{u as w}from"./CommonSitemap.fda5f75e.js";import"./default-i18n.41786823.js";import M from"./AdditionalPages.4a8b1907.js";import{B as $}from"./Checkbox.8f797799.js";import{B as D}from"./RadioToggle.29fa7827.js";import{C as B}from"./index.57ad6f19.js";import{C as N}from"./Card.b1cf2e4d.js";import{C}from"./ExcludePosts.80aa8100.js";import{C as H}from"./PostTypeOptions.8ee6ff63.js";import{r as c,o as d,c as x,g as o,w as i,B as p,x as l,F as U,C as E,d as u,b as g,a as r}from"./vue.runtime.esm-bundler.f433d23f.js";import{_ as V}from"./_plugin-vue_export-helper.3febc96a.js";import"./Caret.b5c2e4ec.js";/* empty css                                            *//* empty css                                              */import"./constants.008ef172.js";import{J as q}from"./JsonValues.870a4901.js";/* empty css                                              */import{T as z,a as F}from"./Row.d1dc61bd.js";import{C as J}from"./SettingsRow.81a9aa4d.js";import{S as Y}from"./External.a9f6d030.js";import"./isArrayLikeObject.7c69e632.js";import"./Index.af046b6e.js";import"./Table.6f5003eb.js";import"./numbers.88d2bf5d.js";import"./Tooltip.6a8793f6.js";import"./Slide.99d45c60.js";import"./Date.c84242a3.js";import"./Exclamation.e203242a.js";import"./DatePicker.d66b926f.js";import"./get.5bf9ffd1.js";import"./toString.9a2ec6a1.js";import"./isUndefined.5ce78b0c.js";import"./_getAllKeys.d4dd627a.js";import"./_getTag.a4119be8.js";import"./debounce.9e782530.js";import"./toNumber.f52af832.js";import"./_baseTrim.8725856f.js";import"./isEqual.51f768d4.js";import"./_baseIsEqual.118be5ff.js";import"./Checkmark.74f4bcd8.js";import"./AddPlus.f7369bba.js";import"./HighlightToggle.3b40b1ed.js";import"./Radio.6a4695dd.js";import"./Row.e69aefbc.js";const X={setup(){return{optionsStore:I()}},components:{TableColumn:z,TableRow:F},mixins:[q],props:{priority:{type:Object,required:!0},rows:{type:Array,required:!0},labels:{type:Object,default(){return{}}}},data(){return{strings:{postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),priority:this.$t.__("Priority",this.$td),frequency:this.$t.__("Frequency",this.$td),homePage:this.$t.__("Home Page",this.$td),archive:this.$t.__("Date Archive Pages",this.$td),author:this.$t.__("Author Pages",this.$td)}}},computed:{getFrequencyOptions(){return[{label:this.$t.__("default",this.$td),value:"default"}].concat(this.$constants.FREQUENCY_OPTIONS)},getPriorityOptions(){return[{label:this.$t.__("default",this.$td),value:"default"}].concat(this.$constants.PRIORITY_OPTIONS)},filteredRows(){let e=this.rows;return this.optionsStore.options.sitemap.general.date||(e=e.filter(n=>n!=="archive")),this.optionsStore.options.sitemap.general.author||(e=e.filter(n=>n!=="author")),e}},methods:{getLabel(e){return this.labels[e]||this.strings[e]}}},j={class:"aioseo-priority-score"};function K(e,n,T,t,s,S){const _=c("table-column"),m=c("table-row"),b=c("base-select");return d(),x("div",j,[o(m,{class:"header-row"},{default:i(()=>[o(_),o(_,null,{default:i(()=>[p(l(s.strings.priority),1)]),_:1}),o(_,null,{default:i(()=>[p(l(s.strings.frequency),1)]),_:1})]),_:1}),(d(!0),x(U,null,E(S.filteredRows,(y,v)=>(d(),u(m,{key:v},{default:i(()=>[o(_,null,{default:i(()=>[p(l(S.getLabel(y)),1)]),_:2},1024),o(_,null,{default:i(()=>[o(b,{size:"medium",options:S.getPriorityOptions,modelValue:e.getJsonValue(T.priority[y].priority),"onUpdate:modelValue":h=>T.priority[y].priority=e.setJsonValue(h)},null,8,["options","modelValue","onUpdate:modelValue"])]),_:2},1024),o(_,null,{default:i(()=>[o(b,{size:"medium",options:S.getFrequencyOptions,modelValue:e.getJsonValue(T.priority[y].frequency),"onUpdate:modelValue":h=>T.priority[y].frequency=e.setJsonValue(h)},null,8,["options","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))])}const W=V(X,[["render",K]]);const Q={setup(){const{validateLinksPerIndex:e}=w();return{optionsStore:I(),rootStore:R(),validateLinksPerIndex:e}},components:{AdditionalPages:M,BaseCheckbox:$,BaseRadioToggle:D,CoreAlert:B,CoreCard:N,CoreExcludePosts:C,CorePostTypeOptions:H,CorePriorityScore:W,CoreSettingsRow:J,SvgExternal:Y},data(){return{pagePostOptions:[],strings:{general:this.$t.__("General Sitemap",this.$td),description:this.$t.sprintf(this.$t.__("An XML Sitemap is a list of all your content that search engines use when they crawl your site. This is an essential part of SEO because it contains some important pieces of information that search engines need when crawling your site. The XML Sitemap created by %1$s tells search engines where to find all of the content on your site.",this.$td),"All in One SEO"),enableSitemap:this.$t.__("Enable Sitemap",this.$td),sitemapSettings:this.$t.__("Sitemap Settings",this.$td),enableSitemapIndexes:this.$t.__("Enable Sitemap Indexes",this.$td),sitemapIndexes:this.$t.__("Organize sitemap entries into distinct files in your sitemap. We recommend you enable this setting if your sitemap contains more than 1,000 URLs.",this.$td),linksPerSitemap:this.$t.__("Links Per Sitemap",this.$td),noIndexDisplayed:this.$t.__("Noindexed content will not be displayed in your sitemap.",this.$td),doYou404:this.$t.__("Do you get a blank sitemap or 404 error?",this.$td),openSitemap:this.$t.__("Open Sitemap",this.$td),maxLinks:this.$t.__("Allows you to specify the maximum number of posts in a sitemap (up to 50,000).",this.$td),automaticallyPingSearchEngines:this.$t.__("Automatically Ping Search Engines",this.$td),postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),dateArchiveSitemap:this.$t.__("Date Archive Sitemap",this.$td),includeDateArchives:this.$t.__("Include Date Archives in your sitemap.",this.$td),authorSitemap:this.$t.__("Author Sitemap",this.$td),includeAuthorArchives:this.$t.__("Include Author Archives in your sitemap.",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.__("Select which Taxonomies appear in your sitemap.",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$td),excludeTerms:this.$t.__("Exclude Terms",this.$td),excludeTermsDescription:this.$t.__("Any posts that are assigned to these terms will also be excluded from your sitemap.",this.$td),priorityScore:this.$t.__("Priority Score",this.$td),grouped:this.$t.__("Grouped",this.$td),priorityScorePostTypes:this.$t.__("Post Type Priority Score",this.$td),priorityScoreTaxonomies:this.$t.__("Taxonomy Priority Score",this.$td),excludeImages:this.$t.__("Exclude Images",this.$td),excludeImagesDescription:this.$t.__("Exclude Images from your sitemap.",this.$td),dynamicallyGenerate:this.$t.__("Dynamically Generate",this.$td),dynamicallyGenerateDescription:this.$t.__("Dynamically creates the XML Sitemap instead of using a static file.",this.$td),warningLinksPerSitemap:this.$t.__("We recommend setting the amount of URLs per sitemap index to 1,000 or less. The more links, the longer it will take for the sitemap to load.",this.$td),warningStaticRegeneration:this.$t.__("Your static sitemap is currently being regenerated. This may take some time based on the size of your site. This may also cause the sitemap content to look outdated.",this.$td)}}},computed:{getPostTypeRows(){return this.rootStore.aioseo.postData.postTypes.map(e=>e.name)},getPostTypeLabels(){const e={};return this.rootStore.aioseo.postData.postTypes.forEach(n=>{e[n.name]=n.label}),e},getTaxonomyRows(){return this.rootStore.aioseo.postData.taxonomies.map(e=>e.name)},getTaxonomyLabels(){const e={};return this.rootStore.aioseo.postData.taxonomies.forEach(n=>{e[n.name]=n.label}),e}}},Z={class:"aioseo-general-sitemap"},ee={class:"aioseo-settings-row aioseo-section-description"},te=["innerHTML"],oe={class:"aioseo-sitemap-preview"},se={class:"aioseo-description"},ne=["innerHTML"],ie={class:"aioseo-description"},ae=["innerHTML"],re={class:"aioseo-description"},le=["innerHTML"],pe={class:"aioseo-description"},me=["innerHTML"],de={class:"aioseo-description"},ce=["innerHTML"],ue={class:"aioseo-description"},ge=["innerHTML"],_e={class:"aioseo-description"},Se=["innerHTML"],ye={class:"aioseo-description"},he={class:"aioseo-description"},Te=["innerHTML"],Le={class:"aioseo-description"},fe=["innerHTML"];function be(e,n,T,t,s,S){const _=c("base-toggle"),m=c("core-settings-row"),b=c("svg-external"),y=c("base-button"),v=c("core-alert"),h=c("core-card"),L=c("base-radio-toggle"),G=c("base-input"),k=c("base-checkbox"),A=c("core-post-type-options"),O=c("AdditionalPages"),P=c("core-exclude-posts"),f=c("core-priority-score");return d(),x("div",Z,[o(h,{slug:"generalSitemap","header-text":s.strings.general},{default:i(()=>[r("div",ee,[p(l(s.strings.description)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"xmlSitemaps",!0)},null,8,te)]),o(m,{name:s.strings.enableSitemap},{content:i(()=>[o(_,{modelValue:t.optionsStore.options.sitemap.general.enable,"onUpdate:modelValue":n[0]||(n[0]=a=>t.optionsStore.options.sitemap.general.enable=a)},null,8,["modelValue"])]),_:1},8,["name"]),t.optionsStore.options.sitemap.general.enable?(d(),u(m,{key:0,name:e.$constants.GLOBAL_STRINGS.preview},{content:i(()=>[r("div",oe,[o(y,{size:"medium",type:"blue",tag:"a",href:t.rootStore.aioseo.urls.generalSitemapUrl,target:"_blank"},{default:i(()=>[o(b),p(" "+l(s.strings.openSitemap),1)]),_:1},8,["href"])]),r("div",se,[p(l(s.strings.noIndexDisplayed)+" "+l(s.strings.doYou404)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,ne)]),!t.optionsStore.options.deprecated.sitemap.general.advancedSettings.dynamic&&t.rootStore.aioseo.scheduledActions&&t.rootStore.aioseo.scheduledActions.sitemap&&t.rootStore.aioseo.scheduledActions.sitemap.includes("staticSitemapRegeneration")?(d(),u(v,{key:0,class:"static-regeneration-notice",type:"blue"},{default:i(()=>[p(l(s.strings.warningStaticRegeneration),1)]),_:1})):g("",!0)]),_:1},8,["name"])):g("",!0)]),_:1},8,["header-text"]),t.optionsStore.options.sitemap.general.enable?(d(),u(h,{key:0,slug:"generalSitemapSettings","header-text":s.strings.sitemapSettings},{default:i(()=>[o(m,{name:s.strings.enableSitemapIndexes},{content:i(()=>[o(L,{modelValue:t.optionsStore.options.sitemap.general.indexes,"onUpdate:modelValue":n[1]||(n[1]=a=>t.optionsStore.options.sitemap.general.indexes=a),name:"sitemapIndexes",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),r("div",ie,[p(l(s.strings.sitemapIndexes)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"sitemapIndexes",!0)},null,8,ae)])]),_:1},8,["name"]),t.optionsStore.options.sitemap.general.indexes?(d(),u(m,{key:0,name:s.strings.linksPerSitemap},{content:i(()=>[o(G,{modelValue:t.optionsStore.options.sitemap.general.linksPerIndex,"onUpdate:modelValue":n[2]||(n[2]=a=>t.optionsStore.options.sitemap.general.linksPerIndex=a),class:"aioseo-links-per-site",type:"number",size:"medium",min:1,max:5e4,onKeyup:t.validateLinksPerIndex},null,8,["modelValue","onKeyup"]),r("div",re,[p(l(s.strings.maxLinks)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"maxLinks",!0)},null,8,le)]),t.optionsStore.options.sitemap.general.indexes&&1e3<t.optionsStore.options.sitemap.general.linksPerIndex?(d(),u(v,{key:0,class:"index-notice",type:"yellow"},{default:i(()=>[p(l(s.strings.warningLinksPerSitemap),1)]),_:1})):g("",!0)]),_:1},8,["name"])):g("",!0),o(m,{name:s.strings.postTypes},{content:i(()=>[o(k,{size:"medium",modelValue:t.optionsStore.options.sitemap.general.postTypes.all,"onUpdate:modelValue":n[3]||(n[3]=a=>t.optionsStore.options.sitemap.general.postTypes.all=a)},{default:i(()=>[p(l(s.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),t.optionsStore.options.sitemap.general.postTypes.all?g("",!0):(d(),u(A,{key:0,options:t.optionsStore.options.sitemap.general,type:"postTypes"},null,8,["options"])),r("div",pe,[p(l(s.strings.selectPostTypes)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypes",!0)},null,8,me)])]),_:1},8,["name"]),o(m,{name:s.strings.taxonomies},{content:i(()=>[o(k,{size:"medium",modelValue:t.optionsStore.options.sitemap.general.taxonomies.all,"onUpdate:modelValue":n[4]||(n[4]=a=>t.optionsStore.options.sitemap.general.taxonomies.all=a)},{default:i(()=>[p(l(s.strings.includeAllTaxonomies),1)]),_:1},8,["modelValue"]),t.optionsStore.options.sitemap.general.taxonomies.all?g("",!0):(d(),u(A,{key:0,options:t.optionsStore.options.sitemap.general,type:"taxonomies"},null,8,["options"])),r("div",de,[p(l(s.strings.selectTaxonomies)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypes",!0)},null,8,ce)])]),_:1},8,["name"]),o(m,{name:s.strings.dateArchiveSitemap},{content:i(()=>[o(L,{modelValue:t.optionsStore.options.sitemap.general.date,"onUpdate:modelValue":n[5]||(n[5]=a=>t.optionsStore.options.sitemap.general.date=a),name:"dateArchiveSitemap",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),r("div",ue,[p(l(s.strings.includeDateArchives)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"includeArchivePages",!0)},null,8,ge)])]),_:1},8,["name"]),o(m,{name:s.strings.authorSitemap},{content:i(()=>[o(L,{modelValue:t.optionsStore.options.sitemap.general.author,"onUpdate:modelValue":n[6]||(n[6]=a=>t.optionsStore.options.sitemap.general.author=a),name:"authorSitemap",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),r("div",_e,[p(l(s.strings.includeAuthorArchives)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"includeArchivePages",!0)},null,8,Se)])]),_:1},8,["name"])]),_:1},8,["header-text"])):g("",!0),o(O),t.optionsStore.options.sitemap.general.enable?(d(),u(h,{key:1,slug:"advancedSettings",toggles:t.optionsStore.options.sitemap.general.advancedSettings.enable},{header:i(()=>[o(_,{modelValue:t.optionsStore.options.sitemap.general.advancedSettings.enable,"onUpdate:modelValue":n[7]||(n[7]=a=>t.optionsStore.options.sitemap.general.advancedSettings.enable=a)},null,8,["modelValue"]),r("span",null,l(s.strings.advancedSettings),1)]),default:i(()=>[o(m,{name:s.strings.excludePostsPages,class:"aioseo-exclude-pages-posts"},{content:i(()=>[o(P,{options:t.optionsStore.options.sitemap.general.advancedSettings,type:"posts"},null,8,["options"])]),_:1},8,["name"]),o(m,{name:s.strings.excludeTerms,class:"aioseo-exclude-terms"},{content:i(()=>[o(P,{options:t.optionsStore.options.sitemap.general.advancedSettings,type:"terms"},null,8,["options"]),r("div",ye,l(s.strings.excludeTermsDescription),1)]),_:1},8,["name"]),o(m,{name:s.strings.priorityScore,align:""},{content:i(()=>[o(f,{priority:t.optionsStore.options.sitemap.general.advancedSettings.priority,rows:["homePage","archive","author"]},null,8,["priority"])]),_:1},8,["name"]),o(m,{name:s.strings.priorityScorePostTypes,align:""},{content:i(()=>[o(_,{modelValue:t.optionsStore.options.sitemap.general.advancedSettings.priority.postTypes.grouped,"onUpdate:modelValue":n[8]||(n[8]=a=>t.optionsStore.options.sitemap.general.advancedSettings.priority.postTypes.grouped=a)},{default:i(()=>[p(l(s.strings.grouped),1)]),_:1},8,["modelValue"]),t.optionsStore.options.sitemap.general.advancedSettings.priority.postTypes.grouped?(d(),u(f,{key:0,priority:t.optionsStore.options.sitemap.general.advancedSettings.priority,rows:["postTypes"]},null,8,["priority"])):g("",!0),t.optionsStore.options.sitemap.general.advancedSettings.priority.postTypes.grouped?g("",!0):(d(),u(f,{key:1,priority:t.optionsStore.dynamicOptions.sitemap.priority.postTypes,rows:S.getPostTypeRows,labels:S.getPostTypeLabels},null,8,["priority","rows","labels"]))]),_:1},8,["name"]),o(m,{name:s.strings.priorityScoreTaxonomies,align:""},{content:i(()=>[o(_,{modelValue:t.optionsStore.options.sitemap.general.advancedSettings.priority.taxonomies.grouped,"onUpdate:modelValue":n[9]||(n[9]=a=>t.optionsStore.options.sitemap.general.advancedSettings.priority.taxonomies.grouped=a)},{default:i(()=>[p(l(s.strings.grouped),1)]),_:1},8,["modelValue"]),t.optionsStore.options.sitemap.general.advancedSettings.priority.taxonomies.grouped?(d(),u(f,{key:0,priority:t.optionsStore.options.sitemap.general.advancedSettings.priority,rows:["taxonomies"]},null,8,["priority"])):g("",!0),t.optionsStore.options.sitemap.general.advancedSettings.priority.taxonomies.grouped?g("",!0):(d(),u(f,{key:1,priority:t.optionsStore.dynamicOptions.sitemap.priority.taxonomies,rows:S.getTaxonomyRows,labels:S.getTaxonomyLabels},null,8,["priority","rows","labels"]))]),_:1},8,["name"]),t.optionsStore.internalOptions.internal.deprecatedOptions.includes("staticSitemap")?(d(),u(m,{key:0,name:s.strings.dynamicallyGenerate},{content:i(()=>[o(L,{modelValue:t.optionsStore.options.deprecated.sitemap.general.advancedSettings.dynamic,"onUpdate:modelValue":n[10]||(n[10]=a=>t.optionsStore.options.deprecated.sitemap.general.advancedSettings.dynamic=a),name:"dynamic",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),r("div",he,[p(l(s.strings.dynamicallyGenerateDescription)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"dynamicallyGenerate",!0)},null,8,Te)])]),_:1},8,["name"])):g("",!0),o(m,{name:s.strings.excludeImages},{content:i(()=>[o(L,{modelValue:t.optionsStore.options.sitemap.general.advancedSettings.excludeImages,"onUpdate:modelValue":n[11]||(n[11]=a=>t.optionsStore.options.sitemap.general.advancedSettings.excludeImages=a),name:"excludeImages",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),r("div",Le,[p(l(s.strings.excludeImagesDescription)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"excludeImages",!0)},null,8,fe)])]),_:1},8,["name"])]),_:1},8,["toggles"])):g("",!0)])}const gt=V(Q,[["render",be]]);export{gt as default};
