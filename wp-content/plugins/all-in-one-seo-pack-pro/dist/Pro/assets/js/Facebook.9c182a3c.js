import{b as F,d as G,u as H}from"./links.96ffe3f0.js";import{C as N}from"./index.57ad6f19.js";import{r as g,c as S,g as a,w as i,d as r,b as c,o as l,a as d,B as f,x as p,F as w,C}from"./vue.runtime.esm-bundler.f433d23f.js";import"./Caret.b5c2e4ec.js";import{_ as j}from"./_plugin-vue_export-helper.3febc96a.js";/* empty css                                            *//* empty css                                              */import"./default-i18n.41786823.js";import"./constants.008ef172.js";import{I as R}from"./Image.2783f547.js";import{M as B}from"./MaxCounts.12b45bab.js";import{T as M}from"./Tags.4b8b1ae9.js";/* empty css                                              */import{B as z}from"./RadioToggle.29fa7827.js";import{C as x}from"./Card.b1cf2e4d.js";import{C as E}from"./FacebookPreview.18f7400a.js";import{C as K}from"./HtmlTagsEditor.897f0371.js";import{C as Y}from"./ImageUploader.ae8ba856.js";import{C as W}from"./SettingsRow.81a9aa4d.js";import{S as J}from"./Book.99c0d6e4.js";import{T as q,a as Q}from"./Row.d1dc61bd.js";import"./isArrayLikeObject.7c69e632.js";import"./postContent.2b412d8b.js";import"./cleanForSlug.b54907fb.js";import"./toString.9a2ec6a1.js";import"./_baseTrim.8725856f.js";import"./_stringToArray.4de3b1f3.js";import"./deburr.40d916cf.js";import"./html.51334e3e.js";import"./get.5bf9ffd1.js";import"./tags.83142c1f.js";import"./Tooltip.6a8793f6.js";import"./Slide.99d45c60.js";import"./Img.763f078b.js";import"./Profile.6dd34133.js";import"./Editor.93dbb6c1.js";import"./UnfilteredHtml.5eb9a053.js";import"./Plus.16164a23.js";import"./Row.e69aefbc.js";const X={setup(){return{optionsStore:F(),licenseStore:G(),rootStore:H()}},components:{BaseRadioToggle:z,CoreAlert:N,CoreCard:x,CoreFacebookPreview:E,CoreHtmlTagsEditor:K,CoreImageUploader:Y,CoreSettingsRow:W,SvgBook:J,TableColumn:q,TableRow:Q},mixins:[R,B,M],data(){return{separator:void 0,siteNameCount:0,titleCount:0,descriptionCount:0,option:null,pagePostOptions:[],strings:{generalFacebookSettings:this.$t.__("General Facebook Settings",this.$td),description:this.$t.__("Enable this feature if you want Facebook and other social media to display a preview with images and a text excerpt when a link to your site is shared.",this.$td),enableOpenGraph:this.$t.__("Enable Open Graph Markup",this.$td),defaultImageSourcePosts:this.$t.__("Default Post Image Source",this.$td),defaultImageSourceTerms:this.$t.__("Default Term Image Source",this.$td),width:this.$t.__("Width",this.$td),height:this.$t.__("Height",this.$td),postCustomFieldName:this.$t.__("Post Custom Field Name",this.$td),termsCustomFieldName:this.$t.__("Term Custom Field Name",this.$td),defaultFacebookImagePosts:this.$t.__("Default Post Facebook Image",this.$td),defaultFacebookImageTerms:this.$t.__("Default Term Facebook Image",this.$td),minimumSize:this.$t.__("Minimum size: 200px x 200px, ideal ratio 1.91:1, 8MB max. (eg: 1640px x 856px or 3280px x 1712px for Retina screens). JPG, PNG, WEBP and GIF formats only.",this.$td),homePageSettings:this.$t.__("Home Page Settings",this.$td),exampleSiteTitle:this.$t.__("The Title of the Page or Site you are Sharing",this.$td),exampleSiteDescription:this.$t.sprintf(this.$t.__("This is what your page configured with %1$s will look like when shared via Facebook. The site title and description will be automatically added.",this.$td),"AIOSEO"),homePageImage:this.$t.__("Image",this.$td),siteName:this.$t.__("Site Name",this.$td),homePageTitle:this.$t.__("Title",this.$td),useHomePageTitle:this.$t.__("Use the home page title",this.$td),clickToAddSiteName:this.$t.__("Click on the tags below to insert variables into your site name.",this.$td),clickToAddHomePageTitle:this.$t.__("Click on the tags below to insert variables into your home page title.",this.$td),homePageDescription:this.$t.__("Description",this.$td),useHomePageDescription:this.$t.__("Use the home page description",this.$td),clickToAddHomePageDescription:this.$t.__("Click on the tags below to insert variables into your description.",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td),facebookAdminId:this.$t.__("Facebook Admin ID",this.$td),facebookAppId:this.$t.__("Facebook App ID",this.$td),facebookAuthorUrl:this.$t.__("Facebook Author URL",this.$td),facebookAdminIdDescription:this.$t.__("Enter your Facebook Admin ID here. You can enter multiple Facebook Admin IDs by separating them with a comma.",this.$td),facebookAppIdDescription:this.$t.__("The Facebook App ID of the site's app. In order to use Facebook Insights, you must add the App ID to your page. Insights lets you view analytics for traffic to your site from Facebook. Find the App ID in your App Dashboard.",this.$td),facebookAuthorUrlDescription:this.$t.__("Will be overriden if the Facebook author URL is present in the individual User Profile.",this.$td),howToGetAdminId:this.$t.__("How to get your Facebook Admin ID",this.$td),howToGetAppId:this.$t.__("How to get your Facebook App ID",this.$td),howToGetAuthorUrl:this.$t.__("How to get your Facebook Author URL",this.$td),showFacebookAuthor:this.$t.__("Show Facebook Author",this.$td),postTypeObjectTypes:this.$t.__("Default Post Type Object Types",this.$td),taxonomyObjectTypes:this.$t.__("Default Taxonomy Object Types",this.$td),taxonomyObjectTypesUpsell:this.$t.sprintf(this.$t.__("Default Taxonomy Object Types are only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-facebook-settings",this.$constants.GLOBAL_STRINGS.learnMore,"default-taxonomy-object-types",!0)),defaultTermImageSourceUpsell:this.$t.sprintf(this.$t.__("Default Term Image Source is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-facebook-settings",this.$constants.GLOBAL_STRINGS.learnMore,"default-term-image-soruce",!0)),generateArticleTags:this.$t.__("Automatically Generate Article Tags",this.$td),useKeywordsInTags:this.$t.__("Use Keywords in Article Tags",this.$td),useCategoriesInTags:this.$t.__("Use Categories in Article Tags",this.$td),usePostTagsInTags:this.$t.__("Use Post Tags in Article Tags",this.$td),homePageDisabledDescription:this.$t.sprintf(this.$t.__("You are using a static home page which is found under Pages. You can %1$sedit your home page settings%2$s directly to change the title, meta description and image.",this.$td),`<a href="${this.rootStore.aioseo.urls.staticHomePage}&aioseo-tab=social&social-tab=facebook&aioseo-scroll=aioseo-post-settings-facebook&aioseo-highlight=aioseo-post-settings-facebook">`,"</a>"),objectType:this.$t.__("Object Type",this.$td)}}},computed:{objectTypeOptions(){return this.$constants.OG_TYPE_OPTIONS},previewTitle(){return this.rootStore.aioseo.data.staticHomePage?this.parseTags(this.rootStore.aioseo.data.staticHomePageOgTitle||"#site_title"):this.parseTags(this.optionsStore.options.social.facebook.homePage.title||"#site_title")},previewDescription(){return this.rootStore.aioseo.data.staticHomePage?this.parseTags(this.rootStore.aioseo.data.staticHomePageOgDescription||"#tagline"):this.parseTags(this.optionsStore.options.social.facebook.homePage.description||"#tagline")}},methods:{getObjectTypeOptions(n){let t=null;return this.objectTypeOptions.forEach(P=>{const e=P.options.find(s=>s.value===n);e&&(t=e)}),t}}},Z={class:"aioseo-facebook"},$={class:"aioseo-settings-row aioseo-section-description"},ee=["innerHTML"],oe=["innerHTML"],te=["innerHTML"],se=["innerHTML"],ie={key:0,class:"aioseo-settings-row aioseo-section-description"},ae=["innerHTML"],ne=["innerHTML"],le=["innerHTML"],re=["innerHTML"],ce={class:"aioseo-description"},me={class:"aioseo-description how-to"},de=["href"],pe=["href"],ge={class:"aioseo-description"},ue={class:"aioseo-description how-to"},be=["href"],fe=["href"],he={class:"aioseo-description"},ke={class:"aioseo-description how-to"},_e=["href"],Se=["href"];function Te(n,t,P,e,s,u){const O=g("base-toggle"),m=g("core-settings-row"),b=g("base-select"),h=g("base-input"),T=g("core-image-uploader"),U=g("core-alert"),_=g("table-column"),L=g("table-row"),k=g("base-radio-toggle"),y=g("core-html-tags-editor"),I=g("core-card"),D=g("core-facebook-preview"),v=g("svg-book");return l(),S("div",Z,[a(I,{slug:"facebook","header-text":s.strings.generalFacebookSettings},{default:i(()=>[d("div",$,[f(p(s.strings.description)+" ",1),d("span",{innerHTML:n.$links.getDocLink(n.$constants.GLOBAL_STRINGS.learnMore,"facebook",!0)},null,8,ee)]),a(m,{name:s.strings.enableOpenGraph},{content:i(()=>[a(O,{modelValue:e.optionsStore.options.social.facebook.general.enable,"onUpdate:modelValue":t[0]||(t[0]=o=>e.optionsStore.options.social.facebook.general.enable=o)},null,8,["modelValue"])]),_:1},8,["name"]),e.optionsStore.options.social.facebook.general.enable?(l(),r(m,{key:0,class:"facebook-default-image-source",name:s.strings.defaultImageSourcePosts,align:""},{content:i(()=>[a(b,{size:"medium",options:n.imageSourceOptions,modelValue:n.getImageSourceOption(e.optionsStore.options.social.facebook.general.defaultImageSourcePosts),"onUpdate:modelValue":t[1]||(t[1]=o=>e.optionsStore.options.social.facebook.general.defaultImageSourcePosts=o.value)},null,8,["options","modelValue"])]),_:1},8,["name"])):c("",!0),e.optionsStore.options.social.facebook.general.enable&&e.optionsStore.options.social.facebook.general.defaultImageSourcePosts==="custom"?(l(),r(m,{key:1,name:s.strings.postCustomFieldName,align:""},{content:i(()=>[a(h,{size:"medium",modelValue:e.optionsStore.options.social.facebook.general.customFieldImagePosts,"onUpdate:modelValue":t[2]||(t[2]=o=>e.optionsStore.options.social.facebook.general.customFieldImagePosts=o)},null,8,["modelValue"])]),_:1},8,["name"])):c("",!0),e.optionsStore.options.social.facebook.general.enable?(l(),r(m,{key:2,class:"facebook-image",name:s.strings.defaultFacebookImagePosts,align:""},{content:i(()=>[a(T,{description:s.strings.minimumSize,modelValue:e.optionsStore.options.social.facebook.general.defaultImagePosts,"onUpdate:modelValue":t[3]||(t[3]=o=>e.optionsStore.options.social.facebook.general.defaultImagePosts=o)},null,8,["description","modelValue"])]),_:1},8,["name"])):c("",!0),e.optionsStore.options.social.facebook.general.enable?(l(),r(m,{key:3,class:"facebook-default-image-source",name:s.strings.defaultImageSourceTerms,align:""},{content:i(()=>[e.licenseStore.isUnlicensed?c("",!0):(l(),r(b,{key:0,size:"medium",options:n.getTermImageSourceOptions(),modelValue:n.getImageSourceOption(e.optionsStore.options.social.facebook.general.defaultImageSourceTerms),"onUpdate:modelValue":t[4]||(t[4]=o=>e.optionsStore.options.social.facebook.general.defaultImageSourceTerms=o.value)},null,8,["options","modelValue"])),e.licenseStore.isUnlicensed?(l(),r(b,{key:1,size:"medium",options:n.getTermImageSourceOptions(),modelValue:n.getImageSourceOption("default"),disabled:""},null,8,["options","modelValue"])):c("",!0),e.licenseStore.isUnlicensed?(l(),r(U,{key:2,class:"inline-upsell",type:"blue"},{default:i(()=>[d("div",{innerHTML:s.strings.defaultTermImageSourceUpsell},null,8,oe)]),_:1})):c("",!0)]),_:1},8,["name"])):c("",!0),e.optionsStore.options.social.facebook.general.enable&&e.optionsStore.options.social.facebook.general.defaultImageSourceTerms==="custom"&&!e.licenseStore.isUnlicensed?(l(),r(m,{key:4,name:s.strings.termsCustomFieldName,align:""},{content:i(()=>[a(h,{size:"medium",modelValue:e.optionsStore.options.social.facebook.general.customFieldImageTerms,"onUpdate:modelValue":t[5]||(t[5]=o=>e.optionsStore.options.social.facebook.general.customFieldImageTerms=o)},null,8,["modelValue"])]),_:1},8,["name"])):c("",!0),e.optionsStore.options.social.facebook.general.enable&&!e.licenseStore.isUnlicensed?(l(),r(m,{key:5,class:"facebook-image",name:s.strings.defaultFacebookImageTerms,align:""},{content:i(()=>[a(T,{description:s.strings.minimumSize,modelValue:e.optionsStore.options.social.facebook.general.defaultImageTerms,"onUpdate:modelValue":t[6]||(t[6]=o=>e.optionsStore.options.social.facebook.general.defaultImageTerms=o)},null,8,["description","modelValue"])]),_:1},8,["name"])):c("",!0),e.optionsStore.options.social.facebook.general.enable?(l(),r(m,{key:6,name:s.strings.postTypeObjectTypes,align:""},{content:i(()=>[(l(!0),S(w,null,C(e.rootStore.aioseo.postData.postTypes,(o,A)=>(l(),r(L,{class:"facebook-object-types",key:A},{default:i(()=>[a(_,null,{default:i(()=>[f(p(o.label),1)]),_:2},1024),a(_,null,{default:i(()=>[a(b,{size:"medium",options:u.objectTypeOptions,"group-label":"groupLabel","group-values":"options",modelValue:u.getObjectTypeOptions(e.optionsStore.dynamicOptions.social.facebook.general.postTypes[o.name].objectType),"onUpdate:modelValue":V=>e.optionsStore.dynamicOptions.social.facebook.general.postTypes[o.name].objectType=V.value},null,8,["options","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["name"])):c("",!0),e.optionsStore.options.social.facebook.general.enable?(l(),r(m,{key:7,name:s.strings.taxonomyObjectTypes,align:""},{content:i(()=>[(l(!0),S(w,null,C(e.rootStore.aioseo.postData.taxonomies,(o,A)=>(l(),r(L,{class:"facebook-object-types",key:A},{default:i(()=>[a(_,null,{default:i(()=>[f(p(o.label)+" ("+p(o.name)+") ",1)]),_:2},1024),a(_,null,{default:i(()=>[e.licenseStore.isUnlicensed?c("",!0):(l(),r(b,{key:0,size:"medium",options:u.objectTypeOptions,"group-label":"groupLabel","group-values":"options",modelValue:u.getObjectTypeOptions(e.optionsStore.dynamicOptions.social.facebook.general.taxonomies[o.name].objectType),"onUpdate:modelValue":V=>e.optionsStore.dynamicOptions.social.facebook.general.taxonomies[o.name].objectType=V.value},null,8,["options","modelValue","onUpdate:modelValue"])),e.licenseStore.isUnlicensed?(l(),r(b,{key:1,size:"medium",options:u.objectTypeOptions,"group-label":"groupLabel","group-values":"options",modelValue:u.getObjectTypeOptions("article"),disabled:""},null,8,["options","modelValue"])):c("",!0)]),_:2},1024)]),_:2},1024))),128)),e.licenseStore.isUnlicensed?(l(),r(U,{key:0,class:"inline-upsell",type:"blue"},{default:i(()=>[d("div",{innerHTML:s.strings.taxonomyObjectTypesUpsell},null,8,te)]),_:1})):c("",!0)]),_:1},8,["name"])):c("",!0),e.optionsStore.options.social.facebook.general.enable?(l(),r(m,{key:8,name:s.strings.showFacebookAuthor,align:""},{content:i(()=>[a(k,{modelValue:e.optionsStore.options.social.facebook.general.showAuthor,"onUpdate:modelValue":t[7]||(t[7]=o=>e.optionsStore.options.social.facebook.general.showAuthor=o),name:"showFacebookAuthor",options:[{label:n.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:n.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"])):c("",!0),e.optionsStore.options.social.facebook.general.enable?(l(),r(m,{key:9,name:s.strings.siteName,align:""},{content:i(()=>[a(y,{class:"facebook-meta-input",modelValue:e.optionsStore.options.social.facebook.general.siteName,"onUpdate:modelValue":t[8]||(t[8]=o=>e.optionsStore.options.social.facebook.general.siteName=o),"line-numbers":!1,single:"",onCounter:t[9]||(t[9]=o=>n.updateCount(o,"siteNameCount")),"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},{"tags-description":i(()=>[f(p(s.strings.clickToAddSiteName),1)]),_:1},8,["modelValue"]),d("div",{class:"max-recommended-count",innerHTML:n.maxRecommendedCount(s.siteNameCount,95)},null,8,se)]),_:1},8,["name"])):c("",!0)]),_:1},8,["header-text"]),e.optionsStore.options.social.facebook.general.enable?(l(),r(I,{key:0,slug:"facebookHomePageSettings","header-text":s.strings.homePageSettings},{default:i(()=>[e.rootStore.aioseo.data.staticHomePage?(l(),S("div",ie,[d("span",{innerHTML:s.strings.homePageDisabledDescription},null,8,ae),f("   "),d("span",{innerHTML:n.$links.getDocLink(n.$constants.GLOBAL_STRINGS.learnMore,"staticHomePageFacebook",!0)},null,8,ne)])):c("",!0),a(m,{name:n.$constants.GLOBAL_STRINGS.preview},{content:i(()=>[a(D,{description:u.previewDescription,image:e.optionsStore.options.social.facebook.homePage.image,title:u.previewTitle},null,8,["description","image","title"])]),_:1},8,["name"]),e.rootStore.aioseo.data.staticHomePage?c("",!0):(l(),r(m,{key:1,class:"facebook-image",name:s.strings.homePageImage},{content:i(()=>[a(T,{description:s.strings.minimumSize,modelValue:e.optionsStore.options.social.facebook.homePage.image,"onUpdate:modelValue":t[10]||(t[10]=o=>e.optionsStore.options.social.facebook.homePage.image=o)},null,8,["description","modelValue"])]),_:1},8,["name"])),e.rootStore.aioseo.data.staticHomePage?c("",!0):(l(),r(m,{key:2,name:s.strings.homePageTitle,align:""},{content:i(()=>[a(y,{class:"facebook-meta-input",modelValue:e.optionsStore.options.social.facebook.homePage.title,"onUpdate:modelValue":t[11]||(t[11]=o=>e.optionsStore.options.social.facebook.homePage.title=o),"line-numbers":!1,single:"",onCounter:t[12]||(t[12]=o=>n.updateCount(o,"titleCount")),"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},{"tags-description":i(()=>[f(p(s.strings.clickToAddHomePageTitle),1)]),_:1},8,["modelValue"]),d("div",{class:"max-recommended-count",innerHTML:n.maxRecommendedCount(s.titleCount,95)},null,8,le)]),_:1},8,["name"])),e.rootStore.aioseo.data.staticHomePage?c("",!0):(l(),r(m,{key:3,name:s.strings.homePageDescription,align:""},{content:i(()=>[a(y,{class:"facebook-meta-input",modelValue:e.optionsStore.options.social.facebook.homePage.description,"onUpdate:modelValue":t[13]||(t[13]=o=>e.optionsStore.options.social.facebook.homePage.description=o),"line-numbers":!1,onCounter:t[14]||(t[14]=o=>n.updateCount(o,"descriptionCount")),"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},{"tags-description":i(()=>[f(p(s.strings.clickToAddHomePageDescription),1)]),_:1},8,["modelValue"]),d("div",{class:"max-recommended-count",innerHTML:n.maxRecommendedCount(s.descriptionCount,200)},null,8,re)]),_:1},8,["name"])),e.rootStore.aioseo.data.staticHomePage?c("",!0):(l(),r(m,{key:4,class:"facebook-home-page-object-type",name:s.strings.objectType,align:""},{content:i(()=>[a(b,{size:"medium",options:u.objectTypeOptions,"group-label":"groupLabel","group-values":"options",modelValue:u.getObjectTypeOptions(e.optionsStore.options.social.facebook.homePage.objectType),"onUpdate:modelValue":t[15]||(t[15]=o=>e.optionsStore.options.social.facebook.homePage.objectType=o.value)},null,8,["options","modelValue"])]),_:1},8,["name"]))]),_:1},8,["header-text"])):c("",!0),e.optionsStore.options.social.facebook.general.enable?(l(),r(I,{key:1,slug:"facebookAdvancedSettings",toggles:e.optionsStore.options.social.facebook.advanced.enable},{header:i(()=>[a(O,{modelValue:e.optionsStore.options.social.facebook.advanced.enable,"onUpdate:modelValue":t[16]||(t[16]=o=>e.optionsStore.options.social.facebook.advanced.enable=o)},null,8,["modelValue"]),d("span",null,p(s.strings.advancedSettings),1)]),default:i(()=>[a(m,{name:s.strings.facebookAdminId,align:""},{content:i(()=>[a(h,{size:"medium",modelValue:e.optionsStore.options.social.facebook.advanced.adminId,"onUpdate:modelValue":t[17]||(t[17]=o=>e.optionsStore.options.social.facebook.advanced.adminId=o)},null,8,["modelValue"]),d("div",ce,p(s.strings.facebookAdminIdDescription),1),d("div",me,[d("a",{class:"no-underline",href:n.$links.getDocUrl("facebookAdminId"),target:"_blank"},[a(v)],8,de),d("a",{href:n.$links.getDocUrl("facebookAdminId"),target:"_blank"},p(s.strings.howToGetAdminId),9,pe)])]),_:1},8,["name"]),a(m,{name:s.strings.facebookAppId,align:""},{content:i(()=>[a(h,{size:"medium",modelValue:e.optionsStore.options.social.facebook.advanced.appId,"onUpdate:modelValue":t[18]||(t[18]=o=>e.optionsStore.options.social.facebook.advanced.appId=o)},null,8,["modelValue"]),d("div",ge,p(s.strings.facebookAppIdDescription),1),d("div",ue,[d("a",{class:"no-underline",href:n.$links.getDocUrl("facebookAppId"),target:"_blank"},[a(v)],8,be),d("a",{href:n.$links.getDocUrl("facebookAppId"),target:"_blank"},p(s.strings.howToGetAppId),9,fe)])]),_:1},8,["name"]),a(m,{name:s.strings.facebookAuthorUrl,align:""},{content:i(()=>[a(h,{size:"medium",modelValue:e.optionsStore.options.social.facebook.advanced.authorUrl,"onUpdate:modelValue":t[19]||(t[19]=o=>e.optionsStore.options.social.facebook.advanced.authorUrl=o)},null,8,["modelValue"]),d("div",he,p(s.strings.facebookAuthorUrlDescription),1),d("div",ke,[d("a",{class:"no-underline",href:n.$links.getDocUrl("facebookAuthorUrl"),target:"_blank"},[a(v)],8,_e),d("a",{href:n.$links.getDocUrl("facebookAuthorUrl"),target:"_blank"},p(s.strings.howToGetAuthorUrl),9,Se)])]),_:1},8,["name"]),a(m,{name:s.strings.generateArticleTags,align:""},{content:i(()=>[a(k,{modelValue:e.optionsStore.options.social.facebook.advanced.generateArticleTags,"onUpdate:modelValue":t[20]||(t[20]=o=>e.optionsStore.options.social.facebook.advanced.generateArticleTags=o),name:"generateArticleTags",options:[{label:n.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:n.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"]),e.optionsStore.options.social.facebook.advanced.generateArticleTags?(l(),r(m,{key:0,name:s.strings.useKeywordsInTags,align:""},{content:i(()=>[a(k,{modelValue:e.optionsStore.options.social.facebook.advanced.useKeywordsInTags,"onUpdate:modelValue":t[21]||(t[21]=o=>e.optionsStore.options.social.facebook.advanced.useKeywordsInTags=o),name:"useKeywordsInTags",options:[{label:n.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:n.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"])):c("",!0),e.optionsStore.options.social.facebook.advanced.generateArticleTags?(l(),r(m,{key:1,name:s.strings.useCategoriesInTags,align:""},{content:i(()=>[a(k,{modelValue:e.optionsStore.options.social.facebook.advanced.useCategoriesInTags,"onUpdate:modelValue":t[22]||(t[22]=o=>e.optionsStore.options.social.facebook.advanced.useCategoriesInTags=o),name:"useCategoriesInTags",options:[{label:n.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:n.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"])):c("",!0),e.optionsStore.options.social.facebook.advanced.generateArticleTags?(l(),r(m,{key:2,name:s.strings.usePostTagsInTags,align:""},{content:i(()=>[a(k,{modelValue:e.optionsStore.options.social.facebook.advanced.usePostTagsInTags,"onUpdate:modelValue":t[23]||(t[23]=o=>e.optionsStore.options.social.facebook.advanced.usePostTagsInTags=o),name:"usePostTagsInTags",options:[{label:n.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:n.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"])):c("",!0)]),_:1},8,["toggles"])):c("",!0)])}const lo=j(X,[["render",Te]]);export{lo as default};
