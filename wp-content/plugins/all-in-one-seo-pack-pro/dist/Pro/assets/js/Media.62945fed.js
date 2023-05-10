import{a as B,m as U,b as x}from"./vuex.esm-bundler.97e30e47.js";import{A as F}from"./WpTable.09ccfd81.js";import"./default-i18n.ab92175e.js";import"./constants.817c4cd3.js";import{_ as A,r as l,o as r,h as p,w as s,f as d,d as i,a as g,e as m,t as o,c as b,i as L,F as V,Z as H,n as z,k as W,T as q}from"./_plugin-vue_export-helper.49ea0e68.js";import"./index.cda4d160.js";import"./SaveChanges.203efc2d.js";import{B as G}from"./Checkbox.de9093b7.js";import{B as O}from"./RadioToggle.2efe96f8.js";import{C as Y}from"./Blur.ef3abea2.js";import{C as M}from"./HtmlTagsEditor.9d6b41fb.js";import{C as D}from"./SettingsRow.45faf80a.js";import{G as R,a as K}from"./Row.87dd14fc.js";import{C as N}from"./index.d59f905b.js";import{C as I}from"./Index.a6f4141a.js";import{A as j,T as Z}from"./TitleDescription.0044b8ae.js";import{C as J}from"./Card.32a76e4b.js";import{C as Q}from"./Tabs.9be8808b.js";import{C as X}from"./ProBadge.b673849c.js";import{C as tt,S as et}from"./Schema.9ffc6b8f.js";import{B as st}from"./Textarea.d0159334.js";import{C as at}from"./ExcludePosts.3eb49429.js";import{C as it}from"./Tooltip.754dc940.js";import{R as ot}from"./RequiredPlans.ad9de58d.js";import"./helpers.871dba46.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.81b4971a.js";import"./Caret.09e548f3.js";import"./cleanForSlug.1b4a8fe4.js";import"./isArrayLikeObject.d5975086.js";import"./html.68197829.js";import"./Index.20fccad8.js";import"./_commonjsHelpers.f84db168.js";import"./Checkmark.05a656b1.js";import"./Editor.90c97faa.js";import"./UnfilteredHtml.46e0d460.js";import"./JsonValues.870a4901.js";import"./MaxCounts.12b45bab.js";import"./RobotsMeta.c003fd28.js";import"./GoogleSearchPreview.e0f6eb8d.js";import"./Slide.dcb3da9d.js";import"./TruSeoScore.76897846.js";import"./Information.4a1e5f23.js";import"./AddPlus.b5adbf8b.js";import"./External.1616b132.js";const nt={components:{BaseCheckbox:G,BaseRadioToggle:O,CoreBlur:Y,CoreHtmlTagsEditor:M,CoreSettingsRow:D,GridColumn:R,GridRow:K},data(){return{stripPunctuationSettings:[{value:"dashes",label:this.$t.__("Dashes (-)",this.$td)},{value:"underscores",label:this.$t.__("Underscores (_)",this.$td)},{value:"numbers",label:this.$t.__("Numbers (0-9)",this.$td)},{value:"plus",label:this.$t.__("Plus (+)",this.$td)},{value:"apostrophe",label:this.$t.__("Apostrophe (')",this.$td)},{value:"pound",label:this.$t.__("Pound (#)",this.$td)},{value:"ampersand",label:this.$t.__("Ampersand (&)",this.$td)}],strings:{attributeFormat:this.$t.sprintf(this.$t.__("%1$s Format",this.$td),this.$t.__("Title",this.$td)),clickToAddTags:this.$t.sprintf(this.$t.__("Click on the tags below to insert variables into your %1$s attribute.",this.$td),this.$t.__("Title",this.$td).toLowerCase()),stripPunctuation:this.$t.__("Strip Punctuation",this.$td),punctuationCharactersToKeep:this.$t.__("Punctuation Characters to Keep:",this.$td),casing:this.$t.__("Casing",this.$td),casingDescription:this.$t.__("Choose which casing should be applied to the attribute.",this.$td),wordsToStrip:this.$t.__("Words to Strip",this.$td),autogenerate:this.$t.sprintf(this.$t.__("Autogenerate %1$s on Upload",this.$td),this.$t.__("Title",this.$td))},tags:{title:{context:"imageSeoTitle",default:["image_title","separator_sa","site_title"]},altTag:{context:"imageSeoAlt",default:["alt_tag","separator_sa","site_title"]},caption:{context:"imageSeoCaption",default:["attachment_caption","separator_sa","site_title"]},description:{context:"imageSeoDescription",default:["attachment_description","separator_sa","site_title"]}},casings:{lowerCase:{label:this.$t.__("Lower Case",this.$td),description:this.$t.__("All letters are converted to lower case (small) letters.",this.$td)},titleCase:{label:this.$t.__("Title Case",this.$td),description:this.$t.__("Major words are capitalized and minor words remain in their original casing.",this.$td)},sentenceCase:{label:this.$t.__("Sentence Case",this.$td),description:this.$t.__("The first word of each sentence starts with a capital.",this.$td)}}}},props:{activeTab:Object}},rt={class:"aioseo-sa-image-seo"},lt={class:"global-robots-settings aioseo-description"},ct={class:"aioseo-description"},dt=d("br",null,null,-1),ut={class:"casing-options"};function ht(t,c,n,k,e,u){const _=l("base-radio-toggle"),h=l("core-settings-row"),$=l("core-html-tags-editor"),f=l("base-checkbox"),S=l("grid-column"),C=l("grid-row"),P=l("core-blur");return r(),p(P,null,{default:s(()=>[d("div",rt,[["caption","description"].includes("title")?(r(),p(h,{key:0,name:e.strings.autogenerate,align:""},{content:s(()=>[i(_,{name:"autogenerate",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["options"])]),_:1},8,["name"])):g("",!0),i(h,{name:e.strings.attributeFormat},{content:s(()=>[i($,{"line-numbers":!1,single:"","tags-context":e.tags.title.context,"default-tags":e.tags.title.default},{"tags-description":s(()=>[m(o(e.strings.clickToAddTags),1)]),_:1},8,["tags-context","default-tags"])]),_:1},8,["name"]),i(h,{name:e.strings.stripPunctuation,align:""},{content:s(()=>[i(_,{name:"stripPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["options"]),d("div",lt,[d("strong",null,o(e.strings.punctuationCharactersToKeep),1),i(C,{class:"settings"},{default:s(()=>[(r(!0),b(V,null,L(e.stripPunctuationSettings,(v,T)=>(r(),p(S,{key:T,xl:"3",md:"4",sm:"6"},{default:s(()=>[i(f,{size:"medium"},{default:s(()=>[m(o(v.label),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1},8,["name"]),i(h,{name:e.strings.casing,align:""},{content:s(()=>[i(_,{name:"casing",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"",activeClass:"dark"},{label:e.casings.lowerCase.label,value:"lower"},{label:e.casings.titleCase.label,value:"title"},{label:e.casings.sentenceCase.label,value:"sentence"}]},null,8,["options"]),d("div",ct,[d("span",null,o(e.strings.casingDescription),1),dt,d("ul",ut,[(r(!0),b(V,null,L(e.casings,(v,T)=>(r(),b("li",{key:T},[d("span",null,o(v.label),1),d("span",null,o(v.description),1)]))),128))])])]),_:1},8,["name"])])]),_:1})}const E=A(nt,[["render",ht]]),mt={components:{Blur:E,CoreAlert:N,Cta:I},data(){return{failed:!1,activationLoading:!1,strings:{imageSeoHeader:this.$t.__("Enable Advanced SEO for Images on your Site",this.$tdPro),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",this.$tdPro),ctaButtonText:this.$t.__("Activate Image SEO",this.$tdPro),learnMoreText:this.$t.__("Learn more about Image SEO",this.$tdPro),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$tdPro),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$tdPro)},features:[this.$t.__("Autogenerate image attributes",this.$tdPro),this.$t.__("Clean uploaded image filenames",this.$tdPro),this.$t.__("Strip punctuation from image attributes",this.$tdPro),this.$t.__("Convert casing of image attributes",this.$tdPro)]}},computed:{...B(["tags"])},methods:{...U(["installPlugins","getTags"]),...x(["updateAddon"]),activateAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-image-seo");this.installPlugins([{plugin:t.basename}]).then(c=>{if(c.body.failed.length){this.activationLoading=!1,this.failed=!0;return}this.getTags().then(()=>{this.activationLoading=!1,t.hasMinimumVersion=!0,t.isActive=!0,this.updateAddon(t)})}).catch(()=>{this.activationLoading=!1})}}},pt={class:"aioseo-sa-image-seo"};function gt(t,c,n,k,e,u){const _=l("blur"),h=l("core-alert"),$=l("cta");return r(),b("div",pt,[i(_),i($,{"cta-button-visible":t.$addons.userCanInstallOrActivate("aioseo-image-seo"),"cta-button-visible-warning":e.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-image-seo","same-tab":"","cta-button-action":"","cta-button-loading":e.activationLoading,onCtaButtonClick:u.activateAddon,"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("imageSeo"),"feature-list":e.features},{"header-text":s(()=>[m(o(e.strings.imageSeoHeader),1)]),description:s(()=>[e.failed?(r(),p(h,{key:0,type:"red"},{default:s(()=>[m(o(e.strings.activateError),1)]),_:1})):g("",!0),m(" "+o(e.strings.ctaDescription),1)]),"learn-more-text":s(()=>[m(o(e.strings.learnMoreText),1)]),_:1},8,["cta-button-visible","cta-button-visible-warning","cta-link","cta-button-loading","onCtaButtonClick","button-text","learn-more-link","feature-list"])])}const _t=A(mt,[["render",gt]]);const bt={components:{BaseCheckbox:G,BaseRadioToggle:O,BaseTextarea:st,CoreExcludePosts:at,CoreHtmlTagsEditor:M,CoreSettingsRow:D,CoreTooltip:it,GridColumn:R,GridRow:K},data(){return{strings:{attributeFormat:this.$t.sprintf(this.$t.__("%1$s Format",this.$tdPro),this.activeTab.name),clickToAddTags:this.$t.sprintf(this.$t.__("Click on the tags below to insert variables into your %1$s attribute.",this.$tdPro),this.activeTab.name.toLowerCase()),stripPunctuation:this.$t.__("Strip Punctuation",this.$tdPro),charactersToKeep:this.$t.__("Characters to Exclude from Being Stripped:",this.$tdPro),charactersToConvert:this.$t.__("Characters to Convert to Spaces:",this.$tdPro),casing:this.$t.__("Casing",this.$tdPro),casingDescription:this.$t.__("Choose which casing should be applied to the attribute.",this.$tdPro),wordsToStrip:this.$t.__("Words to Strip",this.$tdPro),wordsToStripDescription:this.$t.__("Here you can add words that should be stripped from the filename, separated by a new line.",this.$tdPro),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$tdPro),excludeTerms:this.$t.__("Exclude Terms",this.$tdPro),excludeTermsDescription:this.$t.__("Any posts that are assigned to these terms will also be excluded.",this.$tdPro),autogenerate:this.$t.sprintf(this.$t.__("Autogenerate %1$s on Upload",this.$tdPro),this.activeTab.name),autogenerateDescriptions:{caption:this.$t.sprintf(this.$t.__("Choose whether %1$s should automatically generate a %2$s when new images are uploaded. If you disable this setting, you can still generate %3$s in the Media Library via our bulk action.",this.$tdPro),"AIOSEO",this.$t.__("caption",this.$tdPro),this.$t.__("captions",this.$tdPro)),description:this.$t.sprintf(this.$t.__("Choose whether %1$s should automatically generate a %2$s when new images are uploaded. If you disable this setting, you can still generate %3$s in the Media Library via our bulk action.",this.$tdPro),"AIOSEO",this.$t.__("description",this.$tdPro),this.$t.__("descriptions",this.$tdPro))},attributeDescriptions:{title:{first:this.$t.__("The title attribute is used to provide additional information about an image and can be viewed when you hover over the image.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("title attributes",this.$tdPro))},altTag:{first:this.$t.__("The alt tag attribute is used to display text that describes the image if it cannot be rendered by the browser. Its primary goal is to make images more accessible to visually impaired users, but it also used as a ranking factor by search engines.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("alt tag attributes",this.$tdPro))},caption:{first:this.$t.__("The caption is usually a few lines of text that are displayed underneath an image to provide more context or explain what can be seen in the picture.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("image captions",this.$tdPro))},description:{first:this.$t.__("The description is the text that is displayed on an image's attachment page",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("attachment page descriptions",this.$tdPro))},filename:{first:this.$t.__("The filename is name of the image file when it is uploaded to the Media Library. The more descriptive and relevant the filename is, the more likely search engines will include in their results.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by stripping punctuation, specific words and converting the casing.",this.$tdPro),this.$t.__("filenames",this.$tdPro))}}},charactersToKeep:[{value:"dashes",label:this.$t.__("Dashes (-)",this.$tdPro)},{value:"underscores",label:this.$t.__("Underscores (_)",this.$tdPro)},{value:"numbers",label:this.$t.__("Numbers (0-9)",this.$tdPro)},{value:"plus",label:this.$t.__("Plus (+)",this.$tdPro)},{value:"apostrophe",label:this.$t.__("Apostrophe (')",this.$tdPro)},{value:"pound",label:this.$t.__("Pound (#)",this.$tdPro)},{value:"ampersand",label:this.$t.__("Ampersand (&)",this.$tdPro)}],charactersToConvert:[{value:"dashes",label:this.$t.__("Dashes (-)",this.$tdPro)},{value:"underscores",label:this.$t.__("Underscores (_)",this.$tdPro)}],casings:{lowerCase:{label:this.$t.__("Lower Case",this.$tdPro),description:this.$t.__("All letters are converted to lower case (small) letters.",this.$tdPro)},titleCase:{label:this.$t.__("Title Case",this.$tdPro),description:this.$t.__("Major words are capitalized and minor words remain in their original casing.",this.$tdPro)},sentenceCase:{label:this.$t.__("Sentence Case",this.$tdPro),description:this.$t.__("The first word of each sentence starts with a capital.",this.$tdPro)}},tags:{title:{context:"imageSeoTitle",default:["image_title","separator_sa","site_title"]},altTag:{context:"imageSeoAlt",default:["alt_tag","separator_sa","site_title"]},caption:{context:"imageSeoCaption",default:["attachment_caption","separator_sa","site_title"]},description:{context:"imageSeoDescription",default:["attachment_description","separator_sa","site_title"]}}}},computed:{...B(["options"]),isFilenameTab(){return this.activeTab.slug==="filename"},filteredCharactersToKeep(){return this.charactersToKeep.map(t=>(this.options.image[this.activeTab.slug].charactersToConvert&&this.options.image[this.activeTab.slug].charactersToConvert[t.value]?t.disabled=!0:t.disabled=!1,t))},filteredCharactersToConvert(){return this.charactersToConvert.map(t=>(this.options.image[this.activeTab.slug].charactersToKeep[t.value]?t.disabled=!0:t.disabled=!1,t))}},methods:{charactersToKeepTooltipText(t){return this.$t.sprintf(this.$t.__("Excluding %1$s is disabled when converting to spaces is enabled.",this.$tdPro),t.toLowerCase())},charactersToConvertTooltipText(t){return this.$t.sprintf(this.$t.__("Converting %1$s to spaces is disabled when excluding from stripping.",this.$tdPro),t.toLowerCase())}},props:{activeTab:Object}},$t={class:"aioseo-sa-image-seo"},ft={class:"aioseo-settings-row aioseo-section-description"},vt=["innerHTML"],Tt={class:"aioseo-description"},yt={key:0,class:"global-robots-settings aioseo-description"},St={key:0},Ct={class:"aioseo-description"},Pt=d("br",null,null,-1),At={class:"casing-options"},kt={class:"aioseo-description"},wt={key:3,slug:"advancedSettings"},Lt={class:"aioseo-description"};function Vt(t,c,n,k,e,u){const _=l("base-radio-toggle"),h=l("core-settings-row"),$=l("core-html-tags-editor"),f=l("base-checkbox"),S=l("core-tooltip"),C=l("grid-column"),P=l("grid-row"),v=l("base-textarea"),T=l("core-exclude-posts");return r(),b("div",$t,[d("div",ft,[d("div",null,o(e.strings.attributeDescriptions[n.activeTab.slug].first),1),d("div",null,[m(o(e.strings.attributeDescriptions[n.activeTab.slug].second)+" ",1),d("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"imageSeo",!0)},null,8,vt)])]),["caption","description"].includes(n.activeTab.slug)?(r(),p(h,{key:0,name:e.strings.autogenerate,align:""},{content:s(()=>[i(_,{modelValue:t.options.image[n.activeTab.slug].autogenerate,"onUpdate:modelValue":c[0]||(c[0]=a=>t.options.image[n.activeTab.slug].autogenerate=a),name:"autogenerate",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),d("div",Tt,o(e.strings.autogenerateDescriptions[n.activeTab.slug]),1)]),_:1},8,["name"])):g("",!0),u.isFilenameTab?g("",!0):(r(),p(h,{key:1,name:e.strings.attributeFormat},{content:s(()=>[i($,{modelValue:t.options.image[n.activeTab.slug].format,"onUpdate:modelValue":c[1]||(c[1]=a=>t.options.image[n.activeTab.slug].format=a),"line-numbers":!1,single:"","tags-context":e.tags[n.activeTab.slug].context,"default-tags":e.tags[n.activeTab.slug].default,"disable-emoji":""},{"tags-description":s(()=>[m(o(e.strings.clickToAddTags),1)]),_:1},8,["modelValue","tags-context","default-tags"])]),_:1},8,["name"])),i(h,{name:e.strings.stripPunctuation,align:""},{content:s(()=>[i(_,{modelValue:t.options.image[n.activeTab.slug].stripPunctuation,"onUpdate:modelValue":c[2]||(c[2]=a=>t.options.image[n.activeTab.slug].stripPunctuation=a),name:"stripPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),t.options.image[n.activeTab.slug].stripPunctuation?(r(),b("div",yt,[d("div",null,[d("strong",null,o(e.strings.charactersToKeep),1),i(P,{class:"characters-to-keep"},{default:s(()=>[(r(!0),b(V,null,L(u.filteredCharactersToKeep,(a,w)=>(r(),p(C,{class:"characters-grid",key:w,xl:"3",md:"4",sm:"6"},{default:s(()=>[a.disabled?(r(),p(S,{key:0},{tooltip:s(()=>[m(o(u.charactersToKeepTooltipText(a.value)),1)]),default:s(()=>[i(f,{size:"medium",modelValue:t.options.image[n.activeTab.slug].charactersToKeep[a.value],"onUpdate:modelValue":y=>t.options.image[n.activeTab.slug].charactersToKeep[a.value]=y,disabled:a.disabled},{default:s(()=>[m(o(a.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)):g("",!0),a.disabled?g("",!0):(r(),p(f,{key:1,size:"medium",modelValue:t.options.image[n.activeTab.slug].charactersToKeep[a.value],"onUpdate:modelValue":y=>t.options.image[n.activeTab.slug].charactersToKeep[a.value]=y,disabled:a.disabled},{default:s(()=>[m(o(a.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"]))]),_:2},1024))),128))]),_:1})]),!u.isFilenameTab&&u.filteredCharactersToConvert.length?(r(),b("div",St,[d("strong",null,o(e.strings.charactersToConvert),1),i(P,{class:"characters-to-convert"},{default:s(()=>[(r(!0),b(V,null,L(u.filteredCharactersToConvert,(a,w)=>(r(),p(C,{class:"characters-grid",key:w,xl:"3",md:"4",sm:"6"},{default:s(()=>[a.disabled?(r(),p(S,{key:0},{tooltip:s(()=>[m(o(u.charactersToConvertTooltipText(a.value)),1)]),default:s(()=>[i(f,{size:"medium",modelValue:t.options.image[n.activeTab.slug].charactersToConvert[a.value],"onUpdate:modelValue":y=>t.options.image[n.activeTab.slug].charactersToConvert[a.value]=y,disabled:a.disabled},{default:s(()=>[m(o(a.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)):g("",!0),a.disabled?g("",!0):(r(),p(f,{key:1,size:"medium",modelValue:t.options.image[n.activeTab.slug].charactersToConvert[a.value],"onUpdate:modelValue":y=>t.options.image[n.activeTab.slug].charactersToConvert[a.value]=y,disabled:a.disabled},{default:s(()=>[m(o(a.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"]))]),_:2},1024))),128))]),_:1})])):g("",!0)])):g("",!0)]),_:1},8,["name"]),i(h,{name:e.strings.casing,align:""},{content:s(()=>[i(_,{modelValue:t.options.image[n.activeTab.slug].casing,"onUpdate:modelValue":c[3]||(c[3]=a=>t.options.image[n.activeTab.slug].casing=a),name:"casing",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"",activeClass:"dark"},{label:e.casings.lowerCase.label,value:"lower"},{label:e.casings.titleCase.label,value:"title"},{label:e.casings.sentenceCase.label,value:"sentence"}]},null,8,["modelValue","options"]),d("div",Ct,[d("span",null,o(e.strings.casingDescription),1),Pt,d("ul",At,[(r(!0),b(V,null,L(e.casings,(a,w)=>(r(),b("li",{key:w},[d("span",null,o(a.label),1),d("span",null,o(a.description),1)]))),128))])])]),_:1},8,["name"]),u.isFilenameTab?(r(),p(h,{key:2,name:e.strings.wordsToStrip,align:""},{content:s(()=>[i(v,{minHeight:200,autosize:!1,modelValue:t.options.image[n.activeTab.slug].wordsToStrip,"onUpdate:modelValue":c[4]||(c[4]=a=>t.options.image[n.activeTab.slug].wordsToStrip=a)},null,8,["modelValue"]),d("div",kt,o(e.strings.wordsToStripDescription),1)]),_:1},8,["name"])):g("",!0),["title","altTag"].includes(n.activeTab.slug)?(r(),b("div",wt,[i(h,{name:e.strings.excludePostsPages,class:"aioseo-exclude-pages-posts",align:""},{content:s(()=>[i(T,{options:t.options.image[n.activeTab.slug].advancedSettings,type:"posts"},null,8,["options"])]),_:1},8,["name"]),i(h,{name:e.strings.excludeTerms,class:"aioseo-exclude-terms",align:""},{content:s(()=>[i(T,{options:t.options.image[n.activeTab.slug].advancedSettings,type:"terms"},null,8,["options"]),d("div",Lt,o(e.strings.excludeTermsDescription),1)]),_:1},8,["name"])])):g("",!0)])}const Bt=A(bt,[["render",Vt]]);const Ut={components:{Blur:E,RequiredPlans:ot,Cta:I},data(){return{strings:{titleAttributeFormat:this.$t.__("Title Attribute Format",this.$td),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Image SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Image SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")},features:[this.$t.__("Autogenerate image attributes",this.$td),this.$t.__("Clean uploaded image filenames",this.$td),this.$t.__("Strip punctuation from image attributes",this.$td),this.$t.__("Convert casing of image attributes",this.$td)]}}},Ot={class:"aioseo-sa-image-seo"};function Dt(t,c,n,k,e,u){const _=l("blur"),h=l("required-plans"),$=l("cta");return r(),b("div",Ot,[i(_),i($,{"cta-link":t.$links.getPricingUrl("image-seo","image-seo-upsell"),"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("image-seo",null,"home"),"feature-list":e.features},{"header-text":s(()=>[m(o(e.strings.ctaHeader),1)]),description:s(()=>[i(h,{addon:"aioseo-image-seo"}),m(" "+o(e.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])])}const It=A(Ut,[["render",Dt],["__scopeId","data-v-1f4e62b0"]]),Et={components:{Blur:E,CoreAlert:N,Cta:I},data(){return{failed:!1,activationLoading:!1,strings:{imageSeoHeader:this.$t.__("Enable Advanced SEO for Images on your Site",this.$tdPro),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",this.$tdPro),ctaButtonText:this.$t.__("Update Image SEO",this.$tdPro),learnMoreText:this.$t.__("Learn more about Image SEO",this.$tdPro),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$tdPro),permissionWarning:this.$t.__("You currently don't have permission to update this addon. Please ask a site administrator to update.",this.$tdPro),updateRequired:this.$t.sprintf(this.$t.__("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.",this.$tdPro),"AIOSEO","Pro",this.$addons.getAddon("aioseo-image-seo").minimumVersion,"Image SEO",this.$addons.getAddon("aioseo-image-seo").installedVersion),features:[this.$t.__("Autogenerate image attributes",this.$tdPro),this.$t.__("Clean uploaded image filenames",this.$tdPro),this.$t.__("Strip punctuation from image attributes",this.$tdPro),this.$t.__("Convert casing of image attributes",this.$tdPro)]}}},computed:{...B(["tags"])},methods:{...U(["upgradePlugins","getTags"]),...x(["updateAddon"]),upgradeAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-image-seo");this.upgradePlugins([{plugin:t.sku}]).then(c=>{if(c.body.failed.length){this.activationLoading=!1,this.failed=!0;return}this.getTags().then(()=>{const n=c.body.completed[t.sku];this.activationLoading=!1,t.hasMinimumVersion=!0,t.isActive=!0,t.installedVersion=n.installedVersion,this.updateAddon(t)})}).catch(()=>{this.activationLoading=!1})}}},xt={class:"aioseo-sa-image-seo"};function Gt(t,c,n,k,e,u){const _=l("blur"),h=l("core-alert"),$=l("cta");return r(),b("div",xt,[i(_),i($,{"cta-button-visible":t.$addons.userCanUpdate("aioseo-image-seo"),"cta-button-visible-warning":e.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-image-seo","same-tab":"","cta-button-action":"","cta-button-loading":e.activationLoading,onCtaButtonClick:u.upgradeAddon,"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("imageSeo"),"feature-list":t.features},{"header-text":s(()=>[m(o(e.strings.imageSeoHeader),1)]),description:s(()=>[i(h,{type:"yellow"},{default:s(()=>[m(o(e.strings.updateRequired),1)]),_:1}),e.failed?(r(),p(h,{key:0,type:"red"},{default:s(()=>[m(o(e.strings.activateError),1)]),_:1})):g("",!0),m(" "+o(e.strings.ctaDescription),1)]),"learn-more-text":s(()=>[m(o(e.strings.learnMoreText),1)]),_:1},8,["cta-button-visible","cta-button-visible-warning","cta-link","cta-button-loading","onCtaButtonClick","button-text","learn-more-link","feature-list"])])}const Mt=A(Et,[["render",Gt]]);const Rt={mixins:[F],components:{Activate:_t,Advanced:j,BaseRadioToggle:O,CoreCard:J,CoreMainTabs:Q,CoreProBadge:X,CoreSettingsRow:D,CustomFields:tt,ImageSeo:Bt,Lite:It,Schema:et,TitleDescription:Z,Update:Mt},data(){return{imageSeoKey:0,addonSlug:"aioseo-image-seo",internalDebounce:!1,imageSeoActiveTab:{slug:"title",name:this.$t.__("Title",this.$td),pro:!0},strings:{redirectAttachmentUrls:this.$t.__("Redirect Attachment URLs",this.$td),attachment:this.$t.__("Attachment",this.$td),attachmentParent:this.$t.__("Attachment Parent",this.$td),attachmentUrlsDescription:this.$t.__("We recommended redirecting attachment URLs back to the attachment since the default WordPress attachment pages have little SEO value.",this.$td),imageSeo:this.$t.__("Image SEO",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td)},tabs:{attachments:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"Schema",name:this.$t.__("Schema Markup",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}],imageSeo:[{slug:"title",name:this.$t.__("Title",this.$td),pro:!0},{slug:"altTag",name:this.$t.__("Alt Tag",this.$td),pro:!0},{slug:"caption",name:this.$t.__("Caption",this.$td),pro:!0},{slug:"description",name:this.$t.__("Description",this.$td),pro:!0},{slug:"filename",name:this.$t.__("Filename",this.$td),pro:!0}]}}},computed:{...B(["options","dynamicOptions","settings"]),postType(){return this.$aioseo.postData.postTypes.filter(t=>t.name==="attachment")[0]}},methods:{...U(["changeTab"]),processChangeTab(t,c){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${t}SA`,value:c}),setTimeout(()=>{this.internalDebounce=!1},50))},setImageSeoActiveTab(t){this.imageSeoActiveTab=this.tabs.imageSeo.find(c=>c.slug===t),this.imageSeoKey++}}},Kt={class:"aioseo-search-appearance-content-types"},Nt={class:"aioseo-description"};function Ft(t,c,n,k,e,u){const _=l("base-radio-toggle"),h=l("core-settings-row"),$=l("core-main-tabs"),f=l("core-card"),S=l("core-pro-badge"),C=l("image-seo"),P=l("activate"),v=l("update"),T=l("lite");return r(),b("div",Kt,[i(f,{slug:`${u.postType.name}SA`},H({header:s(()=>[d("div",{class:z(["icon dashicons",`${u.postType.icon||"dashicons-admin-post"}`])},null,2),d("div",null,o(u.postType.label),1)]),"before-tabs":s(()=>[i(h,{name:e.strings.redirectAttachmentUrls,align:""},{content:s(()=>[i(_,{modelValue:t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls,"onUpdate:modelValue":c[0]||(c[0]=a=>t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls=a),name:"redirectAttachmentUrls",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"disabled",activeClass:"dark"},{label:e.strings.attachment,value:"attachment"},{label:e.strings.attachmentParent,value:"attachment_parent"}]},null,8,["modelValue","options"]),d("div",Nt,o(e.strings.attachmentUrlsDescription),1)]),_:1},8,["name"])]),default:s(()=>[t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?(r(),p(q,{key:0,name:"route-fade",mode:"out-in"},{default:s(()=>[(r(),p(W(t.settings.internalTabs[`${u.postType.name}SA`]),{object:u.postType,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[u.postType.name],type:"postTypes"},null,8,["object","separator","options"]))]),_:1})):g("",!0)]),_:2},[t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?{name:"tabs",fn:s(()=>[i($,{tabs:e.tabs.attachments,showSaveButton:!1,active:t.settings.internalTabs[`${u.postType.name}SA`],internal:"",onChanged:c[1]||(c[1]=a=>u.processChangeTab(u.postType.name,a))},null,8,["tabs","active"])]),key:"0"}:void 0]),1032,["slug"]),i(f,{slug:"imageSeo",noSlide:!t.shouldShowMain},{header:s(()=>[d("span",null,o(e.strings.imageSeo),1),i(S)]),tabs:s(()=>[i($,{tabs:e.tabs.imageSeo,showSaveButton:!1,active:e.imageSeoActiveTab.slug,internal:"",onChanged:c[2]||(c[2]=a=>u.setImageSeoActiveTab(a))},null,8,["tabs","active"])]),default:s(()=>[t.shouldShowMain?(r(),p(C,{activeTab:e.imageSeoActiveTab,key:e.imageSeoKey},null,8,["activeTab"])):g("",!0),t.shouldShowActivate?(r(),p(P,{key:1})):g("",!0),t.shouldShowUpdate?(r(),p(v,{key:2})):g("",!0),t.shouldShowLite?(r(),p(T,{key:3})):g("",!0)]),_:1},8,["noSlide"])])}const Ie=A(Rt,[["render",Ft]]);export{Ie as default};
