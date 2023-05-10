import{a as w}from"./vuex.esm-bundler.97e30e47.js";import{B as C}from"./Checkbox.de9093b7.js";import{B as O}from"./RadioToggle.2efe96f8.js";import{C as V}from"./Card.32a76e4b.js";import{C as M}from"./ExcludePosts.3eb49429.js";import{C as x}from"./PostTypeOptions.648bee08.js";import{C as B}from"./SettingsRow.45faf80a.js";import{C as H,a as G,b as I,d as R}from"./Caret.09e548f3.js";import{C as N,n as z}from"./index.d59f905b.js";import{C as E}from"./AttributesList.c0051d06.js";import{C as F}from"./DisplayInfo.6178c74a.js";import{C as W}from"./Tooltip.754dc940.js";import{S as q}from"./External.1616b132.js";import{_ as U,r as n,o as l,h,w as o,d as i,f as r,t as c,c as S,a as d,F as K,n as j,e as u}from"./_plugin-vue_export-helper.49ea0e68.js";import"./default-i18n.ab92175e.js";import"./_commonjsHelpers.f84db168.js";import"./Checkmark.05a656b1.js";import"./Slide.dcb3da9d.js";import"./WpTable.09ccfd81.js";import"./helpers.871dba46.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.81b4971a.js";import"./index.cda4d160.js";import"./isArrayLikeObject.d5975086.js";import"./cleanForSlug.1b4a8fe4.js";import"./constants.817c4cd3.js";import"./html.68197829.js";import"./Index.20fccad8.js";import"./JsonValues.870a4901.js";import"./SaveChanges.203efc2d.js";import"./AddPlus.b5adbf8b.js";import"./HighlightToggle.05571e64.js";import"./Radio.52ad45a2.js";import"./Row.87dd14fc.js";import"./Php.f78d0e4a.js";import"./CheckSolid.722e380f.js";const J={components:{CoreAlert:N,CoreAttributesList:E,CoreDisplayInfo:F,CoreLoader:H,CoreTooltip:W,SvgCircleCheck:G,SvgCircleClose:I,SvgExternal:q,SvgFile:z},props:{displayOptions:{type:Object,required:!0},url:{type:String}},data(){return{pageUrl:"",currentPageUrl:"",buttonLocked:!0,error:!1,isLoading:!1,showResults:!1,showAdvancedSettings:!1,strings:{label:this.$t.__("Display HTML Sitemap",this.$td),page:this.$t.__("Dedicated Page",this.$td),placeholder:this.$t.sprintf(this.$t.__("e.g. %1$s",this.$td),`${this.$aioseo.urls.home}/new-page`),pageButton:this.$t.__("Open HTML Sitemap",this.$td),errorMessage:this.$t.__("The page that you have entered is invalid or already exists. Please enter a page with a unique slug.",this.$td),errorMessageDisabled:this.$t.sprintf(this.$t.__('Dedicated HTML Sitemaps do not work while using "plain" permalinks. Please update your %1$spermalink structure%2$s to use this option.',this.$td),'<a href="'+this.$aioseo.urls.home+'/wp-admin/options-permalink.php">',"</a>"),shortcodeAttributesDescription:this.$t.__("The following shortcode attributes can be used to override the default settings:",this.$td),phpArgumentsDescription:this.$t.__("The function accepts an associative array with the following arguments that can be used to override the default settings:",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td),editAndSaveFirst:this.$t.__("To view the sitemap, enter a URL and save changes.",this.$td),saveFirst:this.$t.__("To view the new sitemap, first save changes.",this.$td)},attributes:[{name:"post_types",description:this.$t.__("The post types (by slug, comma-separated) that are included in the sitemap.",this.$td)},{name:"taxonomies",description:this.$t.__("The taxonomies (by slug, comma-separated) that are included in the sitemap.",this.$td)},{name:"label_tag",description:this.$t.sprintf(this.$t.__("The HTML tag that is used for the label of each section. Defaults to %1$s.",this.$td),"<code>h4</code>")},{name:"show_label",description:this.$t.sprintf(this.$t.__("Whether the labels should be shown or not. Defaults to %1$s.",this.$td),"<code>true</code>")},{name:"publication_date",description:this.$t.__("Whether the publication date of posts should be shown.",this.$td)},{name:"archives",description:this.$t.__("Whether the regular sitemap or compact date archive sitemap is output.",this.$td)},{name:"order",description:this.$t.sprintf(this.$t.__("The sort direction. The supported values are %1$s and %2$s.",this.$td),"<code>ASC</code>","<code>DESC</code>")},{name:"order_by",description:this.$t.sprintf(this.$t.__("The sort order. The supported values are %1$s, %2$s, %3$s and %4$s.",this.$td),"<code>publish_date</code>","<code>last_updated</code>","<code>alphabetical</code>","<code>id</code>")}]}},created(){this.pageUrl=this.dedicatedPageDisabled?"":this.options.sitemap.html.pageUrl,this.addSiteUrl(),this.pageUrl&&(this.buttonLocked=!1),this.$bus.$on("changes-saved",()=>{this.processChangesSaved()})},computed:{...w(["options"]),sitemapButtonDisabled(){return this.pageUrl?this.strings.saveFirst:this.strings.editAndSaveFirst},dedicatedPageDisabled(){return this.$aioseo.data.permalinkStructure===""}},methods:{addSiteUrl(){this.pageUrl&&!this.pageUrl.startsWith(`http://${window.aioseo.urls.domain}`)&&!this.pageUrl.startsWith(`https://${window.aioseo.urls.domain}`)&&(this.pageUrl=this.$aioseo.data.isSsl?`https://${window.aioseo.urls.domain}/${this.pageUrl}`:`http://${window.aioseo.urls.domain}/${this.pageUrl}`)},validateNewSlug(e){if(this.pageUrl=e.target.value,!this.pageUrl){this.options.sitemap.html.pageUrl="";return}if(this.currentPageUrl===this.pageUrl){this.buttonLocked=!1,this.error=!1;return}else this.buttonLocked=!0;this.isLoading=!0,R(()=>{if(/\s/.test(this.pageUrl)){this.error=!0,this.isLoading=!1;return}this.$http.post(this.$links.restUrl("sitemap/validate-html-sitemap-slug")).send({pageUrl:this.pageUrl}).then(s=>{s.body.exists?(this.error=!0,this.showResults=!0):(this.error=!1,this.options.sitemap.html.pageUrl=this.pageUrl),this.isLoading=!1}).catch(()=>{this.error=!0,this.isLoading=!1})},500)},processChangesSaved(){if(!this.pageUrl){this.buttonLocked=!0;return}this.currentPageUrl=this.pageUrl,this.buttonLocked=!1}}},Q={class:"new-page"},X={class:"aioseo-row"},Y={class:"aioseo-col col-xs-12 text-xs-left"},Z=["innerHTML"],tt={class:"aioseo-col col-xs-12 col-md-7 text-xs-left"},et={class:"append-icon"},st={class:"aioseo-col col-xs-12 col-md-5 text-xs-left"},it=["innerHTML"];function ot(e,s,T,A,t,p){const _=n("core-attributes-list"),m=n("svg-file"),L=n("svg-circle-close"),g=n("svg-circle-check"),$=n("core-loader"),y=n("base-input"),b=n("svg-external"),f=n("base-button"),v=n("core-tooltip"),a=n("core-alert"),P=n("core-display-info");return l(),h(P,{label:t.strings.label,options:T.displayOptions,url:T.url},{shortcodeAdvanced:o(()=>[i(_,{description:t.strings.shortcodeAttributesDescription,attributes:t.attributes},null,8,["description","attributes"])]),phpAdvanced:o(()=>[i(_,{description:t.strings.phpArgumentsDescription,attributes:t.attributes},null,8,["description","attributes"])]),extra:o(()=>[i(m),r("p",null,c(t.strings.page),1)]),extraBox:o(({item:D})=>[r("div",Q,[r("div",X,[r("div",Y,[D.desc?(l(),S("div",{key:0,class:"aioseo-description",innerHTML:D.desc},null,8,Z)):d("",!0)]),r("div",tt,[i(y,{disabled:p.dedicatedPageDisabled,modelValue:t.pageUrl,"onUpdate:modelValue":s[0]||(s[0]=k=>t.pageUrl=k),onKeyup:p.validateNewSlug,onBlur:p.addSiteUrl,size:"medium",placeholder:t.strings.placeholder,onFocus:s[1]||(s[1]=k=>t.showResults=!0),class:j({"aioseo-error":t.error,"aioseo-active":!t.error&&t.pageUrl&&!p.dedicatedPageDisabled})},{"append-icon":o(()=>[r("div",et,[t.isLoading?d("",!0):(l(),S(K,{key:0},[t.error?(l(),h(L,{key:0})):d("",!0),!t.error&&t.pageUrl&&!p.dedicatedPageDisabled?(l(),h(g,{key:1})):d("",!0)],64)),t.isLoading?(l(),h($,{key:1,dark:""})):d("",!0)])]),_:1},8,["disabled","modelValue","onKeyup","onBlur","placeholder","class"])]),r("div",st,[!t.pageUrl||t.buttonLocked||t.error||p.dedicatedPageDisabled?(l(),h(v,{key:0,type:"action",tag:"div"},{tooltip:o(()=>[u(c(p.sitemapButtonDisabled),1)]),default:o(()=>[i(f,{disabled:p.dedicatedPageDisabled,class:"aioseo-html-sitemaps-disabled-button",size:"medium",type:"blue",tag:"button"},{default:o(()=>[i(b),u(" "+c(t.strings.pageButton),1)]),_:1},8,["disabled"])]),_:1})):d("",!0),t.pageUrl&&!t.buttonLocked&&!t.error&&!p.dedicatedPageDisabled?(l(),h(f,{key:1,size:"medium",type:"blue",tag:"a",href:t.pageUrl,target:"_blank"},{default:o(()=>[i(b),u(" "+c(t.strings.pageButton),1)]),_:1},8,["href"])):d("",!0)]),t.showResults&&t.error||p.dedicatedPageDisabled?(l(),h(a,{key:0,type:p.dedicatedPageDisabled?"yellow":"red",size:"medium"},{default:o(()=>[r("span",{innerHTML:p.dedicatedPageDisabled?t.strings.errorMessageDisabled:t.strings.errorMessage},null,8,it)]),_:1},8,["type"])):d("",!0)])])]),_:1},8,["label","options","url"])}const nt=U(J,[["render",ot]]);const at={components:{BaseCheckbox:C,BaseRadioToggle:O,CoreCard:V,CoreExcludePosts:M,CorePostTypeOptions:x,CoreSettingsRow:B,HtmlSitemapDisplayInfo:nt},data(){return{sortOrders:[{label:this.$t.__("Publish Date",this.$td),value:"publish_date"},{label:this.$t.__("Last Updated Date",this.$td),value:"last_updated"},{label:this.$t.__("Alphabetical",this.$td),value:"alphabetical"},{label:this.$t.__("Post/Term ID",this.$td),value:"id"}],sortDirections:[{label:this.$t.__("Ascending",this.$td),value:"asc"},{label:this.$t.__("Descending",this.$td),value:"desc"}],displayOptions:{extra:{desc:this.$t.__("Display the sitemap on a dedicated page:",this.$td)},block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the %1$s"%2$s - HTML Sitemap"%3$s block.',this.$td),"<strong>","AIOSEO","</strong>")},shortcode:{copy:"[aioseo_html_sitemap]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the HTML Sitemap. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapShortcode",!0))},widget:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this widget, visit the %1$swidgets page%2$s and look for the %3$s"%4$s - HTML Sitemap"%5$s widget.',this.$td),`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","<strong>","AIOSEO","</strong>")},php:{copy:"<?php if( function_exists( 'aioseo_html_sitemap' ) ) aioseo_html_sitemap(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the sitemap. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapFunction",!0))}},strings:{title:this.$t.__("HTML Sitemap",this.$td),enableSitemap:this.$t.__("Enable Sitemap",this.$td),settings:this.$t.__("HTML Sitemap Settings",this.$td),description:this.$t.__("Using the custom-built tools below, you can add an HTML sitemap to your website and help visitors discover all your content. Adding an HTML sitemap to your website may also help search engines find your content more easily.",this.$td),displayLabel:this.$t.__("Display HTML Sitemap",this.$td),postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.__("Select which Taxonomies appear in your sitemap.",this.$td),sortOrder:this.$t.__("Sort Order",this.$td),sortDirection:this.$t.__("Sort Direction",this.$td),publicationDate:this.$t.__("Publication Date",this.$td),publicationDateDescription:this.$t.__("This setting only applies to posts and pages.",this.$td),compactArchives:this.$t.__("Compact Archives",this.$td),compactArchivesDescription:this.$t.sprintf(this.$t.__("This setting allows you to toggle between the regular sitemap or the compact date archive sitemap. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapCompactArchives",!0)),advancedSettings:this.$t.__("Advanced Settings",this.$td),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$td),excludeTerms:this.$t.__("Exclude Terms",this.$td)}}},computed:{...w(["options","internalOptions"])},methods:{getSortOrder(e){return this.sortOrders.find(s=>s.value===e)},getSortDirection(e){return this.sortDirections.find(s=>s.value===e)}}},rt={class:"aioseo-html-sitemap"},lt={class:"aioseo-settings-row aioseo-section-description"},pt=["innerHTML"],dt={class:"aioseo-description"},ct={class:"aioseo-description"},ht={class:"aioseo-description"},mt=["innerHTML"],ut={key:0};function _t(e,s,T,A,t,p){const _=n("base-toggle"),m=n("core-settings-row"),L=n("html-sitemap-display-info"),g=n("core-card"),$=n("base-checkbox"),y=n("core-post-type-options"),b=n("base-select"),f=n("base-radio-toggle"),v=n("core-exclude-posts");return l(),S("div",rt,[i(g,{slug:"htmlSitemap"},{header:o(()=>[r("span",null,c(t.strings.title),1)]),default:o(()=>[r("div",lt,[u(c(t.strings.description)+" ",1),r("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemap",!0)},null,8,pt)]),i(m,{name:t.strings.enableSitemap},{content:o(()=>[i(_,{modelValue:e.options.sitemap.html.enable,"onUpdate:modelValue":s[0]||(s[0]=a=>e.options.sitemap.html.enable=a)},null,8,["modelValue"])]),_:1},8,["name"]),e.options.sitemap.html.enable?(l(),h(L,{key:0,label:t.strings.displayLabel,displayOptions:t.displayOptions,url:e.options.sitemap.html.pageUrl},null,8,["label","displayOptions","url"])):d("",!0)]),_:1}),e.options.sitemap.html.enable?(l(),h(g,{key:0,class:"aioseo-html-sitemap-settings",slug:"htmlSitemapSettings"},{header:o(()=>[r("span",null,c(t.strings.settings),1)]),default:o(()=>[i(m,{name:t.strings.postTypes},{content:o(()=>[i($,{size:"medium",modelValue:e.options.sitemap.html.postTypes.all,"onUpdate:modelValue":s[1]||(s[1]=a=>e.options.sitemap.html.postTypes.all=a)},{default:o(()=>[u(c(t.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),e.options.sitemap.html.postTypes.all?d("",!0):(l(),h(y,{key:0,options:e.options.sitemap.html,type:"postTypes",excluded:["attachment"]},null,8,["options"])),r("div",dt,c(t.strings.selectPostTypes),1)]),_:1},8,["name"]),i(m,{name:t.strings.taxonomies},{content:o(()=>[i($,{size:"medium",modelValue:e.options.sitemap.html.taxonomies.all,"onUpdate:modelValue":s[2]||(s[2]=a=>e.options.sitemap.html.taxonomies.all=a)},{default:o(()=>[u(c(t.strings.includeAllTaxonomies),1)]),_:1},8,["modelValue"]),e.options.sitemap.html.taxonomies.all?d("",!0):(l(),h(y,{key:0,options:e.options.sitemap.html,type:"taxonomies"},null,8,["options"])),r("div",ct,c(t.strings.selectTaxonomies),1)]),_:1},8,["name"]),i(m,{name:t.strings.sortOrder,class:"aioseo-sort-order",align:""},{content:o(()=>[i(b,{size:"medium",options:t.sortOrders,modelValue:p.getSortOrder(e.options.sitemap.html.sortOrder),"onUpdate:modelValue":s[3]||(s[3]=a=>e.options.sitemap.html.sortOrder=a.value)},null,8,["options","modelValue"])]),_:1},8,["name"]),i(m,{name:t.strings.sortDirection,class:"aioseo-sort-direction",align:""},{content:o(()=>[i(b,{size:"medium",options:t.sortDirections,modelValue:p.getSortDirection(e.options.sitemap.html.sortDirection),"onUpdate:modelValue":s[4]||(s[4]=a=>e.options.sitemap.html.sortDirection=a.value)},null,8,["options","modelValue"])]),_:1},8,["name"]),i(m,{name:t.strings.publicationDate,align:""},{content:o(()=>[i(f,{modelValue:e.options.sitemap.html.publicationDate,"onUpdate:modelValue":s[5]||(s[5]=a=>e.options.sitemap.html.publicationDate=a),name:"publicationDate",options:[{label:e.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.show,value:!0}]},null,8,["modelValue","options"]),r("div",ht,c(t.strings.publicationDateDescription),1)]),_:1},8,["name"]),i(m,{name:t.strings.compactArchives,align:""},{content:o(()=>[i(f,{modelValue:e.options.sitemap.html.compactArchives,"onUpdate:modelValue":s[6]||(s[6]=a=>e.options.sitemap.html.compactArchives=a),name:"compactArchives",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),r("div",{class:"aioseo-description",innerHTML:t.strings.compactArchivesDescription},null,8,mt)]),_:1},8,["name"])]),_:1})):d("",!0),e.options.sitemap.html.enable?(l(),h(g,{key:1,slug:"htmlSitemapAdvancedSettings",toggles:e.options.sitemap.html.advancedSettings.enable},{header:o(()=>[i(_,{modelValue:e.options.sitemap.html.advancedSettings.enable,"onUpdate:modelValue":s[7]||(s[7]=a=>e.options.sitemap.html.advancedSettings.enable=a)},null,8,["modelValue"]),r("span",null,c(t.strings.advancedSettings),1)]),default:o(()=>[e.options.sitemap.html.advancedSettings.enable?(l(),S("div",ut,[i(m,{name:t.strings.excludePostsPages,class:"aioseo-exclude-pages-posts",align:""},{content:o(()=>[i(v,{options:e.options.sitemap.html.advancedSettings,type:"posts"},null,8,["options"])]),_:1},8,["name"]),i(m,{name:t.strings.excludeTerms,class:"aioseo-exclude-terms",align:""},{content:o(()=>[i(v,{options:e.options.sitemap.html.advancedSettings,type:"terms"},null,8,["options"])]),_:1},8,["name"])])):d("",!0)]),_:1},8,["toggles"])):d("",!0)])}const Yt=U(at,[["render",_t]]);export{Yt as default};
