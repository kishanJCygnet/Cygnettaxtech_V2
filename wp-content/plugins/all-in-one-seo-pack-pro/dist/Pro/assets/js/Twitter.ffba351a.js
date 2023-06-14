import{T as k}from"./WpTable.4156f8c9.js";import"./default-i18n.ab92175e.js";import"./constants.145da60f.js";import{_ as V,c,z as s,k as a,j as l,b as r,q as g,o as n,a as d,x as p,t as m}from"./_plugin-vue_export-helper.a2c961b3.js";import{I as L,U as D}from"./Image.3c70e881.js";import{J as U}from"./JsonValues.870a4901.js";import{M as H}from"./MaxCounts.12b45bab.js";import"./SaveChanges.6857467d.js";import{b as O,m as G}from"./vuex.esm-bundler.2b955043.js";import{B as z}from"./Img.8aa01665.js";import{B as A}from"./RadioToggle.3b298d3e.js";import{C as M}from"./index.24cd8e71.js";import{C as B}from"./Card.3fe33c7e.js";import{C as N}from"./HtmlTagsEditor.6beeae44.js";import{C as F}from"./SettingsRow.010c4bbe.js";import{C as R}from"./TwitterPreview.8b32ad77.js";import{S as E}from"./Plus.3c570233.js";import"./Index.d2a7b6fb.js";import"./Caret.8213645d.js";import"./Row.f8e3a585.js";import"./helpers.ad3850ca.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.ce215f52.js";import"./index.a915b491.js";import"./isArrayLikeObject.5b92a7d2.js";import"./cleanForSlug.d1b7ba11.js";import"./html.c2b89264.js";import"./Index.e14a5090.js";import"./_commonjsHelpers.f84db168.js";import"./Tooltip.876fbafa.js";import"./Slide.170b1e50.js";import"./Editor.d117041b.js";import"./UnfilteredHtml.fc538563.js";import"./Book.f077effd.js";import"./Profile.af7b4d1a.js";const W={components:{BaseImg:z,BaseRadioToggle:A,CoreAlert:M,CoreCard:B,CoreHtmlTagsEditor:N,CoreSettingsRow:F,CoreTwitterPreview:R,SvgCirclePlus:E},mixins:[L,U,H,k,D],data(){return{separator:void 0,titleCount:0,descriptionCount:0,option:null,pagePostOptions:[],strings:{twitterCardSettings:this.$t.__("Twitter Card Settings",this.$td),description:this.$t.__("Enable this feature if you want Twitter to display a preview card with images and a text excerpt when a link to your site is shared.",this.$td),enableTwitterCard:this.$t.__("Enable Twitter Card",this.$td),useDataFromFacebook:this.$t.__("Use Data from Facebook Tab",this.$td),useOgDataDescription:this.$t.__("Choose whether you want to use the OG data from the Facebook tab in your individual pages/posts by default.",this.$td),defaultCardType:this.$t.__("Default Card Type",this.$td),summary:this.$t.__("Summary",this.$td),summaryLarge:this.$t.__("Summary with Large Image",this.$td),defaultImageSourcePosts:this.$t.__("Default Post Image Source",this.$td),defaultImageSourceTerms:this.$t.__("Default Term Image Source",this.$td),width:this.$t.__("Width",this.$td),height:this.$t.__("Height",this.$td),postCustomFieldName:this.$t.__("Post Custom Field Name",this.$td),termsCustomFieldName:this.$t.__("Term Custom Field Name",this.$td),defaultTwitterImagePosts:this.$t.__("Default Post Twitter Image",this.$td),defaultTwitterImageTerms:this.$t.__("Default Term Twitter Image",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSizeSummary:this.$t.__("Minimum size: 144px x 144px, ideal ratio 1:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",this.$td),minimumSizeSummaryWithLarge:this.$t.__("Minimum size: 300px x 157px, ideal ratio 2:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",this.$td),homePageSettings:this.$t.__("Home Page Settings",this.$td),homePageImage:this.$t.__("Home Page Image",this.$td),homePageTitle:this.$t.__("Home Page Title",this.$td),useHomePageTitle:this.$t.__("Use the home page title",this.$td),clickToAddHomePageTitle:this.$t.__("Click on the tags below to insert variables into your home page title.",this.$td),homePageDescription:this.$t.__("Description",this.$td),useHomePageDescription:this.$t.__("Use the home page description",this.$td),clickToAddHomePageDescription:this.$t.__("Click on the tags below to insert variables into your description.",this.$td),remove:this.$t.__("Remove",this.$td),showTwitterAuthor:this.$t.__("Show Twitter Author",this.$td),homePageDisabledDescription:this.$t.sprintf(this.$t.__("You are using a static home page which is found under Pages. You can %1$sedit your home page settings%2$s directly to change the title, meta and image.",this.$td),`<a href="${this.$aioseo.urls.staticHomePage}&aioseo-tab=social&social-tab=twitter&aioseo-scroll=aioseo-post-settings-twitter&aioseo-highlight=aioseo-post-settings-twitter">`,"</a>"),cardType:this.$t.__("Card Type",this.$td),additionalData:this.$t.__("Additional Data",this.$td),additionalDataDescription:this.$t.__("Enable this option to show additional Twitter data on your posts and pages (i.e., who the post was written by and how long it might take to read the article).",this.$td),defaultTermImageSourceUpsell:this.$t.sprintf(this.$t.__("Default Term Image Source is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-facebook-settings",this.$constants.GLOBAL_STRINGS.learnMore,"default-term-image-soruce",!0))}}},computed:{...O(["isUnlicensed"]),...G(["options"]),twitterCards(){return[{label:this.strings.summary,value:"summary"},{label:this.strings.summaryLarge,value:"summary_large_image"}]},previewTitle(){return this.$aioseo.data.staticHomePage?this.parseTags(this.$aioseo.data.staticHomePageTwitterTitle||"#site_title"):this.parseTags(this.options.social.twitter.homePage.title||"#site_title")},previewDescription(){return this.$aioseo.data.staticHomePage?this.parseTags(this.$aioseo.data.staticHomePageTwitterDescription||"#tagline"):this.parseTags(this.options.social.twitter.homePage.description||"#tagline")}},methods:{getCardOptions(e){return this.twitterCards.find(t=>t.value===e)}}},Y={class:"aioseo-twitter"},J={class:"aioseo-settings-row aioseo-section-description"},j=["innerHTML"],q={class:"twitter-image-upload"},K={class:"aioseo-description"},Q={key:0},X={key:1},Z=["innerHTML"],x={class:"twitter-image-upload"},ee={class:"aioseo-description"},te={key:0},ie={key:1},oe={class:"aioseo-description"},se={class:"aioseo-description"},ae={key:0,class:"aioseo-settings-row aioseo-section-description"},ne=["innerHTML"],re=["innerHTML"],le={key:1},me={class:"twitter-image-upload"},ue={class:"aioseo-description"},de={key:0},ge={key:1},pe=["innerHTML"],ce=["innerHTML"];function he(e,t,we,fe,i,h){const C=g("base-toggle"),u=g("core-settings-row"),f=g("base-select"),T=g("base-input"),_=g("svg-circle-plus"),w=g("base-button"),P=g("base-img"),$=g("core-alert"),S=g("base-radio-toggle"),I=g("core-card"),v=g("core-twitter-preview"),b=g("core-html-tags-editor");return n(),c("div",Y,[s(I,{slug:"twitter","header-text":i.strings.twitterCardSettings},{default:a(()=>[d("div",J,[p(m(i.strings.description)+" ",1),d("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"twitter",!0)},null,8,j)]),s(u,{name:i.strings.enableTwitterCard},{content:a(()=>[s(C,{modelValue:e.options.social.twitter.general.enable,"onUpdate:modelValue":t[0]||(t[0]=o=>e.options.social.twitter.general.enable=o)},null,8,["modelValue"])]),_:1},8,["name"]),e.options.social.twitter.general.enable?(n(),l(u,{key:0,class:"default-card-type",name:i.strings.defaultCardType,align:""},{content:a(()=>[s(f,{size:"medium",options:h.twitterCards,modelValue:h.getCardOptions(e.options.social.twitter.general.defaultCardType),"onUpdate:modelValue":t[1]||(t[1]=o=>e.options.social.twitter.general.defaultCardType=o.value)},null,8,["options","modelValue"])]),_:1},8,["name"])):r("",!0),e.options.social.twitter.general.enable?(n(),l(u,{key:1,class:"twitter-default-image-source",name:i.strings.defaultImageSourcePosts,align:""},{content:a(()=>[s(f,{size:"medium",options:e.imageSourceOptions,modelValue:e.getImageSourceOption(e.options.social.twitter.general.defaultImageSourcePosts),"onUpdate:modelValue":t[2]||(t[2]=o=>e.options.social.twitter.general.defaultImageSourcePosts=o.value)},null,8,["options","modelValue"])]),_:1},8,["name"])):r("",!0),e.options.social.twitter.general.enable&&e.options.social.twitter.general.defaultImageSourcePosts==="custom"?(n(),l(u,{key:2,name:i.strings.postCustomFieldName,align:""},{content:a(()=>[s(T,{size:"medium",modelValue:e.options.social.twitter.general.customFieldImagePosts,"onUpdate:modelValue":t[3]||(t[3]=o=>e.options.social.twitter.general.customFieldImagePosts=o)},null,8,["modelValue"])]),_:1},8,["name"])):r("",!0),e.options.social.twitter.general.enable?(n(),l(u,{key:3,class:"twitter-image",name:i.strings.defaultTwitterImagePosts,align:""},{content:a(()=>[d("div",q,[s(T,{size:"medium",modelValue:e.options.social.twitter.general.defaultImagePosts,"onUpdate:modelValue":t[4]||(t[4]=o=>e.options.social.twitter.general.defaultImagePosts=o),placeholder:i.strings.pasteYourImageUrl},null,8,["modelValue","placeholder"]),s(w,{class:"insert-image",onClick:t[5]||(t[5]=o=>e.openUploadModal("defaultImagePosts",y=>e.options.social.twitter.general.defaultImagePosts=y)),size:"medium",type:"black"},{default:a(()=>[s(_),p(" "+m(i.strings.uploadOrSelectImage),1)]),_:1}),s(w,{class:"remove-image",onClick:t[6]||(t[6]=o=>e.options.social.twitter.general.defaultImagePosts=null),size:"medium",type:"gray"},{default:a(()=>[p(m(i.strings.remove),1)]),_:1})]),d("div",K,[e.options.social.twitter.general.defaultCardType==="summary"?(n(),c("span",Q,m(i.strings.minimumSizeSummary),1)):r("",!0),e.options.social.twitter.general.defaultCardType==="summary_large_image"?(n(),c("span",X,m(i.strings.minimumSizeSummaryWithLarge),1)):r("",!0)]),s(P,{src:e.options.social.twitter.general.defaultImagePosts},null,8,["src"])]),_:1},8,["name"])):r("",!0),e.options.social.twitter.general.enable?(n(),l(u,{key:4,class:"twitter-default-image-source",name:i.strings.defaultImageSourceTerms,align:""},{content:a(()=>[e.isUnlicensed?r("",!0):(n(),l(f,{key:0,size:"medium",options:e.getTermImageSourceOptions(),modelValue:e.getImageSourceOption(e.options.social.twitter.general.defaultImageSourceTerms),"onUpdate:modelValue":t[7]||(t[7]=o=>e.options.social.twitter.general.defaultImageSourceTerms=o.value)},null,8,["options","modelValue"])),e.isUnlicensed?(n(),l(f,{key:1,size:"medium",options:e.getTermImageSourceOptions(),modelValue:e.getImageSourceOption("default"),disabled:""},null,8,["options","modelValue"])):r("",!0),e.isUnlicensed?(n(),l($,{key:2,class:"inline-upsell",type:"blue"},{default:a(()=>[d("div",{innerHTML:i.strings.defaultTermImageSourceUpsell},null,8,Z)]),_:1})):r("",!0)]),_:1},8,["name"])):r("",!0),e.options.social.twitter.general.enable&&e.options.social.twitter.general.defaultImageSourceTerms==="custom"&&!e.isUnlicensed?(n(),l(u,{key:5,name:i.strings.termsCustomFieldName,align:""},{content:a(()=>[s(T,{size:"medium",modelValue:e.options.social.twitter.general.customFieldImageTerms,"onUpdate:modelValue":t[8]||(t[8]=o=>e.options.social.twitter.general.customFieldImageTerms=o)},null,8,["modelValue"])]),_:1},8,["name"])):r("",!0),e.options.social.twitter.general.enable&&!e.isUnlicensed?(n(),l(u,{key:6,class:"twitter-image",name:i.strings.defaultTwitterImageTerms,align:""},{content:a(()=>[d("div",x,[s(T,{size:"medium",modelValue:e.options.social.twitter.general.defaultImageTerms,"onUpdate:modelValue":t[9]||(t[9]=o=>e.options.social.twitter.general.defaultImageTerms=o),placeholder:i.strings.pasteYourImageUrl},null,8,["modelValue","placeholder"]),s(w,{class:"insert-image",onClick:t[10]||(t[10]=o=>e.openUploadModal("defaultImageTerms",y=>e.options.social.twitter.general.defaultImageTerms=y)),size:"medium",type:"black"},{default:a(()=>[s(_),p(" "+m(i.strings.uploadOrSelectImage),1)]),_:1}),s(w,{class:"remove-image",onClick:t[11]||(t[11]=o=>e.options.social.twitter.general.defaultImageTerms=null),size:"medium",type:"gray"},{default:a(()=>[p(m(i.strings.remove),1)]),_:1})]),d("div",ee,[e.options.social.twitter.general.defaultCardType==="summary"?(n(),c("span",te,m(i.strings.minimumSizeSummary),1)):r("",!0),e.options.social.twitter.general.defaultCardType==="summary_large_image"?(n(),c("span",ie,m(i.strings.minimumSizeSummaryWithLarge),1)):r("",!0)]),s(P,{src:e.options.social.twitter.general.defaultImageTerms},null,8,["src"])]),_:1},8,["name"])):r("",!0),e.options.social.twitter.general.enable?(n(),l(u,{key:7,name:i.strings.showTwitterAuthor,align:""},{content:a(()=>[s(S,{modelValue:e.options.social.twitter.general.showAuthor,"onUpdate:modelValue":t[12]||(t[12]=o=>e.options.social.twitter.general.showAuthor=o),name:"showTwitterAuthor",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"])):r("",!0),e.options.social.twitter.general.enable?(n(),l(u,{key:8,name:i.strings.additionalData,align:""},{content:a(()=>[s(S,{modelValue:e.options.social.twitter.general.additionalData,"onUpdate:modelValue":t[13]||(t[13]=o=>e.options.social.twitter.general.additionalData=o),name:"additionalData",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),d("div",oe,m(i.strings.additionalDataDescription),1)]),_:1},8,["name"])):r("",!0),e.options.social.twitter.general.enable?(n(),l(u,{key:9,name:i.strings.useDataFromFacebook,align:""},{content:a(()=>[s(S,{modelValue:e.options.social.twitter.general.useOgData,"onUpdate:modelValue":t[14]||(t[14]=o=>e.options.social.twitter.general.useOgData=o),name:"useOgData",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),d("div",se,m(i.strings.useOgDataDescription),1)]),_:1},8,["name"])):r("",!0)]),_:1},8,["header-text"]),e.options.social.twitter.general.enable?(n(),l(I,{key:0,slug:"twitterHomePageSettings","header-text":i.strings.homePageSettings},{default:a(()=>[e.$aioseo.data.staticHomePage?(n(),c("div",ae,[d("span",{innerHTML:i.strings.homePageDisabledDescription},null,8,ne),p("   "),d("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"staticHomePageTwitter",!0)},null,8,re)])):r("",!0),e.$aioseo.data.staticHomePage?(n(),c("br",le)):r("",!0),s(u,{name:e.$constants.GLOBAL_STRINGS.preview},{content:a(()=>[s(v,{card:e.options.social.twitter.homePage.cardType,description:h.previewDescription,image:e.options.social.twitter.homePage.image,title:h.previewTitle},null,8,["card","description","image","title"])]),_:1},8,["name"]),e.$aioseo.data.staticHomePage?r("",!0):(n(),l(u,{key:2,class:"default-card-type",name:i.strings.cardType,align:""},{content:a(()=>[s(f,{size:"medium",options:h.twitterCards,modelValue:h.getCardOptions(e.options.social.twitter.homePage.cardType),"onUpdate:modelValue":t[15]||(t[15]=o=>e.options.social.twitter.homePage.cardType=o.value)},null,8,["options","modelValue"])]),_:1},8,["name"])),e.$aioseo.data.staticHomePage?r("",!0):(n(),l(u,{key:3,class:"twitter-image",name:i.strings.homePageImage,align:""},{content:a(()=>[d("div",me,[s(T,{size:"medium",modelValue:e.options.social.twitter.homePage.image,"onUpdate:modelValue":t[16]||(t[16]=o=>e.options.social.twitter.homePage.image=o),placeholder:i.strings.pasteYourImageUrl},null,8,["modelValue","placeholder"]),s(w,{class:"insert-image",onClick:t[17]||(t[17]=o=>e.openUploadModal("homePageImage",y=>e.options.social.twitter.homePage.image=y)),size:"medium",type:"black"},{default:a(()=>[s(_),p(" "+m(i.strings.uploadOrSelectImage),1)]),_:1}),s(w,{class:"remove-image",onClick:t[18]||(t[18]=o=>e.options.social.twitter.homePage.image=null),size:"medium",type:"gray"},{default:a(()=>[p(m(i.strings.remove),1)]),_:1})]),d("div",ue,[e.options.social.twitter.homePage.cardType==="summary"?(n(),c("span",de,m(i.strings.minimumSizeSummary),1)):r("",!0),e.options.social.twitter.homePage.cardType==="summary_large_image"?(n(),c("span",ge,m(i.strings.minimumSizeSummaryWithLarge),1)):r("",!0)]),s(P,{src:e.options.social.twitter.homePage.image},null,8,["src"])]),_:1},8,["name"])),e.$aioseo.data.staticHomePage?r("",!0):(n(),l(u,{key:4,name:i.strings.homePageTitle},{content:a(()=>[s(b,{class:"twitter-meta-input",modelValue:e.options.social.twitter.homePage.title,"onUpdate:modelValue":t[19]||(t[19]=o=>e.options.social.twitter.homePage.title=o),"line-numbers":!1,single:"",onCounter:t[20]||(t[20]=o=>e.updateCount(o,"titleCount")),"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},{"tags-description":a(()=>[p(m(i.strings.clickToAddHomePageTitle),1)]),_:1},8,["modelValue"]),d("div",{class:"max-recommended-count",innerHTML:e.maxRecommendedCount(i.titleCount,70)},null,8,pe)]),_:1},8,["name"])),e.$aioseo.data.staticHomePage?r("",!0):(n(),l(u,{key:5,name:i.strings.homePageDescription},{content:a(()=>[s(b,{class:"twitter-meta-input",modelValue:e.options.social.twitter.homePage.description,"onUpdate:modelValue":t[21]||(t[21]=o=>e.options.social.twitter.homePage.description=o),"line-numbers":!1,onCounter:t[22]||(t[22]=o=>e.updateCount(o,"descriptionCount")),"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},{"tags-description":a(()=>[p(m(i.strings.clickToAddHomePageDescription),1)]),_:1},8,["modelValue"]),d("div",{class:"max-recommended-count",innerHTML:e.maxRecommendedCount(i.descriptionCount,200)},null,8,ce)]),_:1},8,["name"]))]),_:1},8,["header-text"])):r("",!0)])}const xe=V(W,[["render",he]]);export{xe as default};
