import{A as H}from"./WpTable.09ccfd81.js";import"./default-i18n.ab92175e.js";import"./constants.817c4cd3.js";import{_ as w,r as n,o as d,h as _,w as o,f as p,e as a,t as i,d as s,c as S,a as h}from"./_plugin-vue_export-helper.49ea0e68.js";import"./index.cda4d160.js";import{J as A}from"./JsonValues.870a4901.js";import"./SaveChanges.203efc2d.js";import{a as N,m as L,b as M}from"./vuex.esm-bundler.97e30e47.js";import{C as U}from"./Blur.ef3abea2.js";import{C as B}from"./SettingsRow.45faf80a.js";import{S as V}from"./External.1616b132.js";import{B as G}from"./Checkbox.de9093b7.js";import{C as O}from"./index.d59f905b.js";import{C as v}from"./Card.32a76e4b.js";import{C}from"./Index.a6f4141a.js";import{R as D}from"./RequiredPlans.ad9de58d.js";import{C as R}from"./ProBadge.b673849c.js";import{C as q}from"./ExcludePosts.3eb49429.js";import{C as z}from"./PostTypeOptions.648bee08.js";import"./helpers.871dba46.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.81b4971a.js";import"./Caret.09e548f3.js";import"./cleanForSlug.1b4a8fe4.js";import"./isArrayLikeObject.d5975086.js";import"./html.68197829.js";import"./Index.20fccad8.js";import"./_commonjsHelpers.f84db168.js";import"./Row.87dd14fc.js";import"./Checkmark.05a656b1.js";import"./Tooltip.754dc940.js";import"./Slide.dcb3da9d.js";import"./AddPlus.b5adbf8b.js";import"./HighlightToggle.05571e64.js";import"./Radio.52ad45a2.js";const f={data(){return{strings:{news:this.$t.__("News Sitemap",this.$td),setPublicationName:this.$t.__("Set Publication Name",this.$td),publicationName:this.$t.__("Publication Name",this.$td),postTypes:this.$t.__("Post Types",this.$td),exclude:this.$t.__("Exclude Pages/Posts",this.$td),description:this.$t.__("Our Google News Sitemap lets you control which content you submit to Google News and only contains articles that were published in the last 48 hours. In order to submit a News Sitemap to Google, you must have added your site to Google’s Publisher Center and had it approved.",this.$td),enableSitemap:this.$t.__("Enable Sitemap",this.$td),openSitemap:this.$t.__("Open News Sitemap",this.$td),noIndexDisplayed:this.$t.__("Noindexed content will not be displayed in your sitemap.",this.$td),doYou404:this.$t.__("Do you get a blank sitemap or 404 error?",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock News Sitemaps",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("News Sitemaps are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$td)}}}},Y={components:{CoreBlur:U,CoreSettingsRow:B,SvgExternal:V,BaseCheckbox:G},mixins:[f]},W={class:"aioseo-settings-row aioseo-section-description"},j=["innerHTML"],J={class:"aioseo-sitemap-preview"},F={class:"aioseo-description"},K=p("br",null,null,-1),Q=["innerHTML"],X={class:"aioseo-description"},Z=["innerHTML"];function tt(t,r,$,y,e,g){const c=n("base-toggle"),l=n("core-settings-row"),u=n("svg-external"),m=n("base-button"),b=n("base-input"),T=n("base-checkbox"),k=n("core-blur");return d(),_(k,null,{default:o(()=>[p("div",W,[a(i(t.strings.description)+" ",1),p("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"newsSitemaps",!0)},null,8,j)]),s(l,{name:t.strings.enableSitemap},{content:o(()=>[s(c,{modelValue:!0})]),_:1},8,["name"]),s(l,{name:t.$constants.GLOBAL_STRINGS.preview},{content:o(()=>[p("div",J,[s(m,{size:"medium",type:"blue"},{default:o(()=>[s(u),a(" "+i(t.strings.openSitemap),1)]),_:1})]),p("div",F,[a(i(t.strings.noIndexDisplayed)+" ",1),K,a(" "+i(t.strings.doYou404)+" ",1),p("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,Q)])]),_:1},8,["name"]),s(l,{name:t.strings.publicationName,align:""},{content:o(()=>[s(b,{size:"medium"})]),_:1},8,["name"]),s(l,{name:t.strings.postTypes},{content:o(()=>[s(T,{size:"medium"},{default:o(()=>[a(i(t.strings.includeAllPostTypes),1)]),_:1}),p("div",X,[a(i(t.strings.selectPostTypes)+" ",1),p("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesNews",!0)},null,8,Z)])]),_:1},8,["name"])]),_:1})}const x=w(Y,[["render",tt]]),et={components:{Blur:x,CoreAlert:O,CoreCard:v,Cta:C},mixins:[A,f],data(){return{failed:!1,activationLoading:!1,pagePostOptions:[],strings:{newsSitemapHeader:this.$t.__("Enable Google News Sitemap on your Site",this.$tdPro),ctaButtonTextActivate:this.$t.__("Activate News Sitemap",this.$tdPro),learnMoreText:this.$t.__("Learn more about News Sitemaps",this.$tdPro),sitemapSettings:this.$t.__("News Sitemap Settings",this.$tdPro),publicationName:this.$t.__("Publication Name",this.$tdPro),postTypes:this.$t.__("Post Types",this.$tdPro),includeAllPostTypes:this.$t.__("Include All Post Types",this.$tdPro),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$tdPro),advancedSettings:this.$t.__("Advanced Settings",this.$tdPro),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$tdPro),priorityScore:this.$t.__("Priority Score",this.$tdPro),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$tdPro),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$tdPro)}}},computed:{...N(["options","addons"]),getExcludedPostTypes(){return["attachment"]}},methods:{...L(["installPlugins"]),...M(["updateAddon"]),activateAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-news-sitemap");this.installPlugins([{plugin:t.basename}]).then(r=>{if(this.activationLoading=!1,r.body.failed.length){this.failed=!0;return}t.hasMinimumVersion=!0,t.isActive=!0,this.updateAddon(t)}).catch(()=>{this.activationLoading=!1})}}};function st(t,r,$,y,e,g){const c=n("blur"),l=n("core-alert"),u=n("cta"),m=n("core-card");return d(),S("div",null,[s(m,{slug:"newsSitemap","header-text":e.strings.news},{default:o(()=>[s(c),s(u,{"cta-button-visible":t.$addons.userCanInstallOrActivate("aioseo-news-sitemap"),"cta-button-visible-warning":e.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-news-sitemap","same-tab":"","cta-button-action":"","cta-button-loading":e.activationLoading,onCtaButtonClick:g.activateAddon,"button-text":e.strings.ctaButtonTextActivate,"learn-more-link":t.$links.getDocUrl("newsSitemaps"),"feature-list":[e.strings.setPublicationName,e.strings.exclude]},{"header-text":o(()=>[a(i(e.strings.newsSitemapHeader),1)]),description:o(()=>[e.failed?(d(),_(l,{key:0,type:"red"},{default:o(()=>[a(i(e.strings.activateError),1)]),_:1})):h("",!0),a(" "+i(e.strings.description),1)]),"learn-more-text":o(()=>[a(i(e.strings.learnMoreText),1)]),_:1},8,["cta-button-visible","cta-button-visible-warning","cta-link","cta-button-loading","onCtaButtonClick","button-text","learn-more-link","feature-list"])]),_:1},8,["header-text"])])}const ot=w(et,[["render",st]]);const nt={components:{Blur:x,RequiredPlans:D,CoreCard:v,CoreProBadge:R,Cta:C},mixins:[f]},it={class:"aioseo-news-sitemap-lite"};function at(t,r,$,y,e,g){const c=n("core-pro-badge"),l=n("blur"),u=n("required-plans"),m=n("cta"),b=n("core-card");return d(),S("div",it,[s(b,{slug:"newsSitemap",noSlide:!0},{header:o(()=>[p("span",null,i(t.strings.news),1),s(c)]),default:o(()=>[s(l),s(m,{"feature-list":[t.strings.setPublicationName,t.strings.exclude],"cta-link":t.$links.getPricingUrl("news-sitemap","news-sitemap-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("news-sitemap",null,"home")},{"header-text":o(()=>[a(i(t.strings.ctaHeader),1)]),description:o(()=>[s(u,{addon:"aioseo-news-sitemap"}),a(" "+i(t.strings.description),1)]),_:1},8,["feature-list","cta-link","button-text","learn-more-link"])]),_:1})])}const rt=w(nt,[["render",at]]),lt={components:{BaseCheckbox:G,CoreCard:v,CoreExcludePosts:q,CorePostTypeOptions:z,CoreSettingsRow:B,SvgExternal:V},mixins:[A,f],data(){return{pagePostOptions:[],strings:{sitemapSettings:this.$t.__("News Sitemap Settings",this.$tdPro),publicationName:this.$t.__("Publication Name",this.$tdPro),postTypes:this.$t.__("Post Types",this.$tdPro),includeAllPostTypes:this.$t.__("Include All Post Types",this.$tdPro),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$tdPro),advancedSettings:this.$t.__("Advanced Settings",this.$tdPro),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$tdPro),priorityScore:this.$t.__("Priority Score",this.$tdPro),noResult:this.$t.__("No pages or posts found with that title or ID. Try again!",this.$tdPro),clear:this.$t.__("Clear",this.$tdPro)}}},computed:{...N(["options"]),getExcludedPostTypes(){return["attachment"]}},methods:{...L(["getObjects"]),processGetPagesPosts(t){return this.getObjects(t).then(r=>{this.pagePostOptions=r.body.posts})}}},pt={class:"aioseo-settings-row aioseo-section-description"},dt=["innerHTML"],ct={class:"aioseo-sitemap-preview"},ut={class:"aioseo-description"},mt=["innerHTML"],_t={class:"aioseo-description"},ht=["innerHTML"];function gt(t,r,$,y,e,g){const c=n("base-toggle"),l=n("core-settings-row"),u=n("svg-external"),m=n("base-button"),b=n("core-card"),T=n("base-input"),k=n("base-checkbox"),E=n("core-post-type-options"),I=n("core-exclude-posts");return d(),S("div",null,[s(b,{slug:"newsSitemap","header-text":e.strings.news},{default:o(()=>[p("div",pt,[a(i(e.strings.description)+" ",1),p("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"newsSitemaps",!0)},null,8,dt)]),s(l,{name:e.strings.enableSitemap},{content:o(()=>[s(c,{modelValue:t.options.sitemap.news.enable,"onUpdate:modelValue":r[0]||(r[0]=P=>t.options.sitemap.news.enable=P)},null,8,["modelValue"])]),_:1},8,["name"]),t.options.sitemap.news.enable?(d(),_(l,{key:0,name:t.$constants.GLOBAL_STRINGS.preview},{content:o(()=>[p("div",ct,[s(m,{size:"medium",type:"blue",tag:"a",href:t.$aioseo.urls.newsSitemapUrl,target:"_blank"},{default:o(()=>[s(u),a(" "+i(e.strings.openSitemap),1)]),_:1},8,["href"])]),p("div",ut,[a(i(e.strings.noIndexDisplayed)+" "+i(e.strings.doYou404)+" ",1),p("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,mt)])]),_:1},8,["name"])):h("",!0)]),_:1},8,["header-text"]),t.options.sitemap.news.enable?(d(),_(b,{key:0,slug:"newsSitemapSettings","header-text":e.strings.sitemapSettings},{default:o(()=>[s(l,{id:"news-sitemap-publication-name",name:e.strings.publicationName,align:""},{content:o(()=>[s(T,{size:"medium",modelValue:t.options.sitemap.news.publicationName,"onUpdate:modelValue":r[1]||(r[1]=P=>t.options.sitemap.news.publicationName=P)},null,8,["modelValue"])]),_:1},8,["name"]),s(l,{name:e.strings.postTypes},{content:o(()=>[s(k,{size:"medium",modelValue:t.options.sitemap.news.postTypes.all,"onUpdate:modelValue":r[2]||(r[2]=P=>t.options.sitemap.news.postTypes.all=P)},{default:o(()=>[a(i(e.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),t.options.sitemap.news.postTypes.all?h("",!0):(d(),_(E,{key:0,options:t.options.sitemap.news,type:"postTypes",excluded:g.getExcludedPostTypes},null,8,["options","excluded"])),p("div",_t,[a(i(e.strings.selectPostTypes)+" ",1),p("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesNews",!0)},null,8,ht)])]),_:1},8,["name"])]),_:1},8,["header-text"])):h("",!0),t.options.sitemap.news.enable?(d(),_(b,{key:1,slug:"newsAdvancedSettings",toggles:t.options.sitemap.news.advancedSettings.enable},{header:o(()=>[s(c,{modelValue:t.options.sitemap.news.advancedSettings.enable,"onUpdate:modelValue":r[3]||(r[3]=P=>t.options.sitemap.news.advancedSettings.enable=P)},null,8,["modelValue"]),p("span",null,i(e.strings.advancedSettings),1)]),default:o(()=>[s(l,{name:e.strings.excludePostsPages,class:"aioseo-exclude-pages-posts",align:""},{content:o(()=>[s(I,{options:t.options.sitemap.news.advancedSettings,type:"posts"},null,8,["options"])]),_:1},8,["name"])]),_:1},8,["toggles"])):h("",!0)])}const $t=w(lt,[["render",gt]]),bt={components:{Blur:x,CoreAlert:O,CoreCard:v,Cta:C},mixins:[A,f],data(){return{failed:!1,activationLoading:!1,pagePostOptions:[],strings:{newsSitemapHeader:this.$t.__("Enable Google News Sitemap on your Site",this.$tdPro),ctaButtonTextActivate:this.$t.__("Update News Sitemap",this.$tdPro),learnMoreText:this.$t.__("Learn more about News Sitemaps",this.$tdPro),sitemapSettings:this.$t.__("News Sitemap Settings",this.$tdPro),publicationName:this.$t.__("Publication Name",this.$tdPro),postTypes:this.$t.__("Post Types",this.$tdPro),includeAllPostTypes:this.$t.__("Include All Post Types",this.$tdPro),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$tdPro),advancedSettings:this.$t.__("Advanced Settings",this.$tdPro),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$tdPro),priorityScore:this.$t.__("Priority Score",this.$tdPro),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$tdPro),permissionWarning:this.$t.__("You currently don't have permission to update this addon. Please ask a site administrator to update.",this.$tdPro),updateRequired:this.$t.sprintf(this.$t.__("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.",this.$tdPro),"AIOSEO","Pro",this.$addons.getAddon("aioseo-news-sitemap").minimumVersion,"News Sitemap",this.$addons.getAddon("aioseo-news-sitemap").installedVersion)}}},computed:{...N(["options","addons"]),getExcludedPostTypes(){return["attachment"]}},methods:{...L(["upgradePlugins"]),...M(["updateAddon"]),upgradeAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-news-sitemap");this.upgradePlugins([{plugin:t.sku}]).then(r=>{if(r.body.failed.length){this.activationLoading=!1,this.failed=!0;return}const $=r.body.completed[t.sku];this.activationLoading=!1,t.hasMinimumVersion=!0,t.isActive=!0,t.installedVersion=$.installedVersion,this.updateAddon(t)}).catch(()=>{this.activationLoading=!1})}}};function Pt(t,r,$,y,e,g){const c=n("blur"),l=n("core-alert"),u=n("cta"),m=n("core-card");return d(),S("div",null,[s(m,{slug:"newsSitemap","header-text":e.strings.news},{default:o(()=>[s(c),s(u,{"cta-button-visible":t.$addons.userCanUpdate("aioseo-news-sitemap"),"cta-button-visible-warning":e.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-news-sitemap","same-tab":"","cta-button-action":"","cta-button-loading":e.activationLoading,onCtaButtonClick:g.upgradeAddon,"button-text":e.strings.ctaButtonTextActivate,"learn-more-link":t.$links.getDocUrl("newsSitemaps"),"feature-list":[e.strings.setPublicationName,e.strings.exclude]},{"header-text":o(()=>[a(i(e.strings.newsSitemapHeader),1)]),description:o(()=>[s(l,{type:"yellow"},{default:o(()=>[a(i(e.strings.updateRequired),1)]),_:1}),e.failed?(d(),_(l,{key:0,type:"red"},{default:o(()=>[a(i(e.strings.activateError),1)]),_:1})):h("",!0),a(" "+i(e.strings.ctaDescription),1)]),"learn-more-text":o(()=>[a(i(e.strings.learnMoreText),1)]),_:1},8,["cta-button-visible","cta-button-visible-warning","cta-link","cta-button-loading","onCtaButtonClick","button-text","learn-more-link","feature-list"])]),_:1},8,["header-text"])])}const wt=w(bt,[["render",Pt]]);const yt={mixins:[H],components:{Activate:ot,Lite:rt,NewsSitemap:$t,Update:wt},data(){return{addonSlug:"aioseo-news-sitemap"}}},St={class:"aioseo-news-sitemap"};function ft(t,r,$,y,e,g){const c=n("news-sitemap",!0),l=n("activate"),u=n("update"),m=n("lite");return d(),S("div",St,[t.shouldShowMain?(d(),_(c,{key:0})):h("",!0),t.shouldShowActivate?(d(),_(l,{key:1})):h("",!0),t.shouldShowUpdate?(d(),_(u,{key:2})):h("",!0),t.shouldShowLite?(d(),_(m,{key:3})):h("",!0)])}const ie=w(yt,[["render",ft]]);export{ie as default};
