import{A as C}from"./WpTable.4156f8c9.js";import"./default-i18n.ab92175e.js";import"./constants.145da60f.js";import{_ as v,q as n,o as l,c as S,z as o,k as s,j as u,l as O,a,t as r,x as m,b as c}from"./_plugin-vue_export-helper.a2c961b3.js";import"./index.a915b491.js";import"./SaveChanges.6857467d.js";import{V as k,B as I}from"./Blur.10366e84.js";import{C as L}from"./Card.3fe33c7e.js";import{R as x}from"./RequiredPlans.cc208e33.js";import{C as B}from"./ProBadge.267c3a94.js";import{C as R}from"./Index.d2a7b6fb.js";import{m as D,a as M}from"./vuex.esm-bundler.2b955043.js";import{J as N}from"./JsonValues.870a4901.js";import{C as U}from"./CommonSitemap.bfe9fab6.js";import{B as H}from"./Checkbox.8db0d2b3.js";import{B as F}from"./RadioToggle.3b298d3e.js";import{C as E}from"./index.24cd8e71.js";import{C as W}from"./ExcludePosts.0d523418.js";import{C as z}from"./PostTypeOptions.c943f2c7.js";import{C as j}from"./SettingsRow.010c4bbe.js";import{S as q}from"./External.50c9b9dc.js";import"./helpers.ad3850ca.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.ce215f52.js";import"./Caret.8213645d.js";import"./cleanForSlug.d1b7ba11.js";import"./isArrayLikeObject.5b92a7d2.js";import"./html.c2b89264.js";import"./Index.e14a5090.js";import"./_commonjsHelpers.f84db168.js";import"./Blur.ff94edf5.js";import"./Tooltip.876fbafa.js";import"./Slide.170b1e50.js";import"./Row.f8e3a585.js";import"./Checkmark.1fb57726.js";import"./AddPlus.5a4cda09.js";import"./HighlightToggle.ba272806.js";import"./Radio.51f499be.js";const K={mixins:[C,k],components:{Blur:I,CoreCard:L},data(){return{addonSlug:"aioseo-video-sitemap",strings:{videoSitemapHeader:this.$t.__("Enable Video Sitemap on your Site",this.$tdPro),learnMoreText:this.$t.__("Learn more about Video Sitemaps",this.$tdPro)}}},computed:{ctaButtonText(){return this.shouldShowUpdate?this.$t.__("Update Video Sitemap",this.$tdPro):this.$t.__("Activate Video Sitemap",this.$tdPro)}}};function Y(e,i,$,f,t,h){const _=n("blur"),d=n("core-card");return l(),S("div",null,[o(d,{slug:"videoSitemap","header-text":t.strings.video},{default:s(()=>[o(_),(l(),u(O(e.ctaComponent),{"addon-slug":t.addonSlug,"cta-header":t.strings.videoSitemapHeader,"cta-description":t.strings.description,"cta-button-text":h.ctaButtonText,"learn-more-text":t.strings.learnMoreText,"learn-more-link":e.$links.getDocUrl("videoSitemaps"),"feature-list":[t.strings.customFieldSupport,t.strings.exclude]},null,8,["addon-slug","cta-header","cta-description","cta-button-text","learn-more-text","learn-more-link","feature-list"]))]),_:1},8,["header-text"])])}const J=v(K,[["render",Y]]);const Q={components:{Blur:I,RequiredPlans:x,CoreCard:L,CoreProBadge:B,Cta:R},mixins:[k]},X={class:"aioseo-video-sitemap-lite"};function Z(e,i,$,f,t,h){const _=n("core-pro-badge"),d=n("blur"),g=n("required-plans"),b=n("cta"),y=n("core-card");return l(),S("div",X,[o(y,{slug:"videoSitemap",noSlide:!0},{header:s(()=>[a("span",null,r(e.strings.video),1),o(_)]),default:s(()=>[o(d),o(b,{"feature-list":[e.strings.customFieldSupport,e.strings.exclude],"cta-link":e.$links.getPricingUrl("video-sitemap","video-sitemap-upsell"),"button-text":e.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("video-sitemap",null,"home")},{"header-text":s(()=>[m(r(e.strings.ctaHeader),1)]),description:s(()=>[o(g,{addon:"aioseo-video-sitemap"}),m(" "+r(e.strings.description),1)]),_:1},8,["feature-list","cta-link","button-text","learn-more-link"])]),_:1})])}const ee=v(Q,[["render",Z]]);const te={components:{BaseCheckbox:H,BaseRadioToggle:F,CoreAlert:E,CoreCard:L,CoreExcludePosts:W,CorePostTypeOptions:z,CoreSettingsRow:j,SvgExternal:q},mixins:[N,U,k],data(){return{pagePostOptions:[],strings:{additionalPages:this.$t.__("Additional Pages",this.$tdPro),additionalPagesTooltip:this.$t.__("You can use this section to add any URLs to your sitemap which aren’t a part of your WordPress installation. For example, if you have a contact form that you would like to be included on your sitemap you can enter the information manually.",this.$tdPro),sitemapSettings:this.$t.__("Video Sitemap Settings",this.$tdPro),enableSitemapIndexes:this.$t.__("Enable Sitemap Indexes",this.$tdPro),sitemapIndexes:this.$t.__("Organize sitemap entries into distinct files in your sitemap. We recommend you enable this setting if your sitemap contains more than 1,000 URLs.",this.$tdPro),linksPerSitemap:this.$t.__("Links Per Sitemap",this.$tdPro),maxLinks:this.$t.__("Allows you to specify the maximum number of posts in a sitemap (up to 50,000).",this.$tdPro),postTypes:this.$t.__("Post Types",this.$tdPro),taxonomies:this.$t.__("Taxonomies",this.$tdPro),includeAllPostTypes:this.$t.__("Include All Post Types",this.$tdPro),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$tdPro),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$tdPro),selectTaxonomies:this.$t.__("Select which Taxonomies appear in your sitemap. Categories and Tags are excluded by default since these do not support video embedding.",this.$tdPro),includeCustomFields:this.$t.__("Include Custom Fields",this.$tdPro),includeCustomFieldsDescription:this.$t.__("Enable this option to look for videos in custom fields as well.",this.$tdPro),advancedSettings:this.$t.__("Advanced Settings",this.$tdPro),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$tdPro),excludeTerms:this.$t.__("Exclude Terms",this.$tdPro),excludeTermsDescription:this.$t.__("Any posts that are assigned to these terms will also be excluded from your sitemap.",this.$tdPro),priorityScore:this.$t.__("Priority Score",this.$tdPro),dynamicallyGenerate:this.$t.__("Dynamically Generate",this.$tdPro),dynamicallyGenerateDescription:this.$t.__("Dynamically creates the Video Sitemap instead of using a static file.",this.$tdPro),videoEmbedSettings:this.$t.__("Video Embed Settings",this.$tdPro),embedSettingsTooltip:this.$t.__("This section allows you to manage your video embeds, such as features for Facebook or making them responsive to automatically fit your content width.",this.$tdPro),embed:this.$t.__("Embed",this.$tdPro),playDirectly:this.$t.__("Allow videos to be played directly on other websites, such as Facebook or Twitter.",this.$tdPro),responsive:this.$t.sprintf(this.$t.__("Try to make videos responsive using %1$s?",this.$tdPro),'<a href="http://fitvidsjs.com/" target="_blank">FitVids.js</a>'),contentWidth:this.$t.__("Content Width",this.$tdPro),contentWidthDescription:this.$t.__("This defaults to your theme's content width, but if it's empty, setting a value here will make sure videos are embedded with the right width.",this.$tdPro),wistiaDomain:this.$t.__("Wistia Domain",this.$tdPro),wistiaDomainDescription:this.$t.__("If you use Wistia in combination with a custom domain, set this to the domain name you use for your Wistia videos. Don't include https: or slashes as they are not needed.",this.$tdPro),embedlyApiKey:this.$t.__("Embedly API Key",this.$tdPro),embedlyApiKeyDescription:this.$t.sprintf(this.$t.__("By default, we try to provide enriched information about your videos. A lot of video services are supported by default. For those services which aren't supported, we can try to retrieve enriched video information using %1$s. If you want to use this option, you'll need to sign up for a (free) %2$s account and provide the API key you receive.",this.$tdPro),'<a href="https://embed.ly/" target="_blank">embed.ly</a>','<a href="https://embed.ly/" target="_blank">embed.ly</a>'),warningLinksPerSitemap:this.$t.__("We recommend setting the amount of URLs per sitemap index to 1,000 or less. The more links, the longer it will take for the sitemap to load.",this.$tdPro),warningStaticRegeneration:this.$t.__("Your static sitemap is currently being regenerated. This may take some time based on the size of your site. This may also cause the sitemap content to look outdated.",this.$tdPro)}}},computed:{...D(["options","internalOptions"]),getFrequencyOptions(){return[{label:this.$t.__("default",this.$tdPro),value:"default"}].concat(this.$constants.FREQUENCY_OPTIONS)},getPriorityOptions(){return[{label:this.$t.__("default",this.$tdPro),value:"default"}].concat(this.$constants.PRIORITY_OPTIONS)},getExcludedTaxonomies(){return["category","post_tag"]},noOptions(){return this.type==="posts"?this.strings.noOptionsPosts:this.strings.noOptionsTerms}},methods:{...M(["getObjects"]),processGetPagesPosts(e){return this.getObjects(e).then(i=>{this.pagePostOptions=i.body.posts})}}},oe={class:"aioseo-video-sitemap"},se={class:"aioseo-settings-row aioseo-section-description"},ie=["innerHTML"],ne={class:"aioseo-sitemap-preview"},ae={class:"aioseo-description"},re=["innerHTML"],le={class:"aioseo-description"},de=["innerHTML"],pe={class:"aioseo-description"},me=["innerHTML"],ue={class:"aioseo-description"},ce=["innerHTML"],_e={class:"aioseo-description"},he=["innerHTML"],ge={class:"aioseo-description"},ye={class:"aioseo-description"},ve=["innerHTML"],Se={class:"aioseo-description"},$e=["innerHTML"];function fe(e,i,$,f,t,h){const _=n("base-toggle"),d=n("core-settings-row"),g=n("svg-external"),b=n("base-button"),y=n("core-alert"),P=n("core-card"),T=n("base-radio-toggle"),G=n("base-input"),V=n("base-checkbox"),A=n("core-post-type-options"),w=n("core-exclude-posts");return l(),S("div",oe,[o(P,{slug:"videoSitemap","header-text":t.strings.video},{default:s(()=>[a("div",se,[m(r(t.strings.description)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"videoSitemaps",!0)},null,8,ie)]),o(d,{name:t.strings.enableSitemap},{content:s(()=>[o(_,{modelValue:e.options.sitemap.video.enable,"onUpdate:modelValue":i[0]||(i[0]=p=>e.options.sitemap.video.enable=p)},null,8,["modelValue"])]),_:1},8,["name"]),e.options.sitemap.video.enable?(l(),u(d,{key:0,name:e.$constants.GLOBAL_STRINGS.preview},{content:s(()=>[a("div",ne,[o(b,{size:"medium",type:"blue",tag:"a",href:e.$aioseo.urls.videoSitemapUrl,target:"_blank"},{default:s(()=>[o(g),m(" "+r(t.strings.openSitemap),1)]),_:1},8,["href"])]),a("div",ae,[m(r(t.strings.noIndexDisplayed)+" "+r(t.strings.doYou404)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,re)]),!e.options.deprecated.sitemap.video.advancedSettings.dynamic&&e.$aioseo.scheduledActions.sitemap&&e.$aioseo.scheduledActions.sitemap.includes("staticSitemapRegeneration")?(l(),u(y,{key:0,class:"static-regeneration-notice",type:"blue"},{default:s(()=>[m(r(t.strings.warningStaticRegeneration),1)]),_:1})):c("",!0)]),_:1},8,["name"])):c("",!0)]),_:1},8,["header-text"]),e.options.sitemap.video.enable?(l(),u(P,{key:0,slug:"videoSitemapSettings","header-text":t.strings.sitemapSettings},{default:s(()=>[o(d,{name:t.strings.enableSitemapIndexes},{content:s(()=>[o(T,{modelValue:e.options.sitemap.video.indexes,"onUpdate:modelValue":i[1]||(i[1]=p=>e.options.sitemap.video.indexes=p),name:"sitemapIndexes",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),a("div",le,[m(r(t.strings.sitemapIndexes)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"sitemapIndexes",!0)},null,8,de)])]),_:1},8,["name"]),e.options.sitemap.video.indexes?(l(),u(d,{key:0,name:t.strings.linksPerSitemap},{content:s(()=>[o(G,{modelValue:e.options.sitemap.video.linksPerIndex,"onUpdate:modelValue":i[2]||(i[2]=p=>e.options.sitemap.video.linksPerIndex=p),class:"aioseo-links-per-site",type:"number",size:"medium",min:1,max:5e4,onKeyup:e.validateLinksPerIndex},null,8,["modelValue","onKeyup"]),a("div",pe,[m(r(t.strings.maxLinks)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"maxLinks",!0)},null,8,me)]),e.options.sitemap.video.indexes&&1e3<e.options.sitemap.video.linksPerIndex?(l(),u(y,{key:0,class:"index-notice",type:"yellow"},{default:s(()=>[m(r(t.strings.warningLinksPerSitemap),1)]),_:1})):c("",!0)]),_:1},8,["name"])):c("",!0),o(d,{name:t.strings.postTypes},{content:s(()=>[o(V,{size:"medium",modelValue:e.options.sitemap.video.postTypes.all,"onUpdate:modelValue":i[3]||(i[3]=p=>e.options.sitemap.video.postTypes.all=p)},{default:s(()=>[m(r(t.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),e.options.sitemap.video.postTypes.all?c("",!0):(l(),u(A,{key:0,options:e.options.sitemap.video,type:"postTypes"},null,8,["options"])),a("div",ue,[m(r(t.strings.selectPostTypes)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesVideo",!0)},null,8,ce)])]),_:1},8,["name"]),o(d,{name:t.strings.taxonomies},{content:s(()=>[o(V,{size:"medium",modelValue:e.options.sitemap.video.taxonomies.all,"onUpdate:modelValue":i[4]||(i[4]=p=>e.options.sitemap.video.taxonomies.all=p)},{default:s(()=>[m(r(t.strings.includeAllTaxonomies),1)]),_:1},8,["modelValue"]),e.options.sitemap.video.taxonomies.all?c("",!0):(l(),u(A,{key:0,options:e.options.sitemap.video,type:"taxonomies",excluded:h.getExcludedTaxonomies},null,8,["options","excluded"])),a("div",_e,[m(r(t.strings.selectTaxonomies)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectTaxonomiesVideo",!0)},null,8,he)])]),_:1},8,["name"])]),_:1},8,["header-text"])):c("",!0),e.options.sitemap.video.enable?(l(),u(P,{key:1,slug:"videoAdvancedSettings",toggles:e.options.sitemap.video.advancedSettings.enable},{header:s(()=>[o(_,{modelValue:e.options.sitemap.video.advancedSettings.enable,"onUpdate:modelValue":i[5]||(i[5]=p=>e.options.sitemap.video.advancedSettings.enable=p)},null,8,["modelValue"]),a("span",null,r(t.strings.advancedSettings),1)]),default:s(()=>[o(d,{name:t.strings.excludePostsPages,class:"aioseo-exclude-pages-posts",align:""},{content:s(()=>[o(w,{options:e.options.sitemap.video.advancedSettings,type:"posts"},null,8,["options"])]),_:1},8,["name"]),o(d,{name:t.strings.excludeTerms,class:"aioseo-exclude-terms",align:""},{content:s(()=>[o(w,{options:e.options.sitemap.video.advancedSettings,type:"terms"},null,8,["options"]),a("div",ge,r(t.strings.excludeTermsDescription),1)]),_:1},8,["name"]),e.internalOptions.internal.deprecatedOptions.includes("staticVideoSitemap")?(l(),u(d,{key:0,name:t.strings.dynamicallyGenerate},{content:s(()=>[o(T,{modelValue:e.options.deprecated.sitemap.video.advancedSettings.dynamic,"onUpdate:modelValue":i[6]||(i[6]=p=>e.options.deprecated.sitemap.video.advancedSettings.dynamic=p),name:"dynamic",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),a("div",ye,[m(r(t.strings.dynamicallyGenerateDescription)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"dynamicallyGenerateVideo",!0)},null,8,ve)])]),_:1},8,["name"])):c("",!0),o(d,{name:t.strings.includeCustomFields,align:""},{content:s(()=>[o(T,{modelValue:e.options.sitemap.video.advancedSettings.customFields,"onUpdate:modelValue":i[7]||(i[7]=p=>e.options.sitemap.video.advancedSettings.customFields=p),name:"includeCustomFields",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),a("div",Se,[m(r(t.strings.includeCustomFieldsDescription)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"includeCustomFields",!0)},null,8,$e)])]),_:1},8,["name"])]),_:1},8,["toggles"])):c("",!0)])}const be=v(te,[["render",fe]]);const Pe={mixins:[C],components:{Cta:J,Lite:ee,VideoSitemap:be},data(){return{addonSlug:"aioseo-video-sitemap"}}},Te={class:"aioseo-video-sitemap"};function ke(e,i,$,f,t,h){const _=n("video-sitemap",!0),d=n("cta"),g=n("lite");return l(),S("div",Te,[e.shouldShowMain?(l(),u(_,{key:0})):c("",!0),e.shouldShowUpdate||e.shouldShowActivate?(l(),u(d,{key:1})):c("",!0),e.shouldShowLite?(l(),u(g,{key:2})):c("",!0)])}const pt=v(Pe,[["render",ke]]);export{pt as default};
