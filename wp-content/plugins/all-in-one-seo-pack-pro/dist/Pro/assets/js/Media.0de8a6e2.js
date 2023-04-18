import{a as r,m as l,b as h}from"./vuex.esm.8fdeb4b6.js";import{A as b}from"./WpTable.9774bca3.js";import"./default-i18n.3a91e0e5.js";import"./constants.6399c725.js";import{n}from"./_plugin-vue2_normalizer.61652a7c.js";import"./index.bd1b81e8.js";import"./SaveChanges.e40a9083.js";import{B as _}from"./Checkbox.60ba2f56.js";import{B as c}from"./RadioToggle.e6e54396.js";import{C as f}from"./Blur.f36c594d.js";import{C as g}from"./HtmlTagsEditor.72aef68c.js";import{C as d}from"./SettingsRow.edbb3005.js";import{G as m,a as $}from"./Row.830f6397.js";import{C as v}from"./index.4db8498b.js";import{C as u}from"./Index.a2cf6f89.js";import{A as T,T as y}from"./TitleDescription.4ed89edd.js";import{C as S}from"./Card.71f5228b.js";import{C}from"./Tabs.a309f2c7.js";import{C as x}from"./ProBadge.66f48bdc.js";import{C as k,S as A}from"./Schema.d29bf37d.js";import{B as w}from"./Textarea.ce149d81.js";import{C as P}from"./ExcludePosts.a8300742.js";import{C as L}from"./Tooltip.68a8a92b.js";import{R as O}from"./RequiredPlans.8d2a75b4.js";import"./helpers.871dba46.js";import"./postContent.d89e5307.js";import"./Caret.d93b302e.js";import"./cleanForSlug.5e4ade1a.js";import"./isArrayLikeObject.8300bb8d.js";import"./html.68197829.js";import"./Index.5f7ddb17.js";import"./Checkmark.f26f6201.js";import"./Editor.3026c2dc.js";import"./_commonjsHelpers.f84db168.js";import"./UnfilteredHtml.2ce65122.js";import"./JsonValues.870a4901.js";import"./MaxCounts.12b45bab.js";import"./RobotsMeta.5a1b6c31.js";import"./GoogleSearchPreview.de6f40ef.js";import"./Slide.15a07930.js";import"./TruSeoScore.339d22e1.js";import"./Information.93f80cbf.js";import"./AddPlus.9af097bc.js";import"./External.4c957e9a.js";const I={components:{BaseCheckbox:_,BaseRadioToggle:c,CoreBlur:f,CoreHtmlTagsEditor:g,CoreSettingsRow:d,GridColumn:m,GridRow:$},data(){return{stripPunctuationSettings:[{value:"dashes",label:this.$t.__("Dashes (-)",this.$td)},{value:"underscores",label:this.$t.__("Underscores (_)",this.$td)},{value:"numbers",label:this.$t.__("Numbers (0-9)",this.$td)},{value:"plus",label:this.$t.__("Plus (+)",this.$td)},{value:"apostrophe",label:this.$t.__("Apostrophe (')",this.$td)},{value:"pound",label:this.$t.__("Pound (#)",this.$td)},{value:"ampersand",label:this.$t.__("Ampersand (&)",this.$td)}],strings:{attributeFormat:this.$t.sprintf(this.$t.__("%1$s Format",this.$td),this.$t.__("Title",this.$td)),clickToAddTags:this.$t.sprintf(this.$t.__("Click on the tags below to insert variables into your %1$s attribute.",this.$td),this.$t.__("Title",this.$td).toLowerCase()),stripPunctuation:this.$t.__("Strip Punctuation",this.$td),punctuationCharactersToKeep:this.$t.__("Punctuation Characters to Keep:",this.$td),casing:this.$t.__("Casing",this.$td),casingDescription:this.$t.__("Choose which casing should be applied to the attribute.",this.$td),wordsToStrip:this.$t.__("Words to Strip",this.$td),autogenerate:this.$t.sprintf(this.$t.__("Autogenerate %1$s on Upload",this.$td),this.$t.__("Title",this.$td))},tags:{title:{context:"imageSeoTitle",default:["image_title","separator_sa","site_title"]},altTag:{context:"imageSeoAlt",default:["alt_tag","separator_sa","site_title"]},caption:{context:"imageSeoCaption",default:["attachment_caption","separator_sa","site_title"]},description:{context:"imageSeoDescription",default:["attachment_description","separator_sa","site_title"]}},casings:{lowerCase:{label:this.$t.__("Lower Case",this.$td),description:this.$t.__("All letters are converted to lower case (small) letters.",this.$td)},titleCase:{label:this.$t.__("Title Case",this.$td),description:this.$t.__("Major words are capitalized and minor words remain in their original casing.",this.$td)},sentenceCase:{label:this.$t.__("Sentence Case",this.$td),description:this.$t.__("The first word of each sentence starts with a capital.",this.$td)}}}},props:{activeTab:Object}};var D=function(){var t=this,e=t._self._c;return e("core-blur",[e("div",{staticClass:"aioseo-sa-image-seo"},[["caption","description"].includes("title")?e("core-settings-row",{attrs:{name:t.strings.autogenerate,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"autogenerate",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}})]},proxy:!0}],null,!1,3097604449)}):t._e(),e("core-settings-row",{attrs:{name:t.strings.attributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","tags-context":t.tags.title.context,"default-tags":t.tags.title.default},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddTags)+" ")]},proxy:!0}])})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuation,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"stripPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}}),e("div",{staticClass:"global-robots-settings aioseo-description"},[e("strong",[t._v(t._s(t.strings.punctuationCharactersToKeep))]),e("grid-row",{staticClass:"settings"},t._l(t.stripPunctuationSettings,function(s,i){return e("grid-column",{key:i,attrs:{xl:"3",md:"4",sm:"6"}},[e("base-checkbox",{attrs:{size:"medium"}},[t._v(" "+t._s(s.label)+" ")])],1)}),1)],1)]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.casing,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"casing",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"",activeClass:"dark"},{label:t.casings.lowerCase.label,value:"lower"},{label:t.casings.titleCase.label,value:"title"},{label:t.casings.sentenceCase.label,value:"sentence"}]}}),e("div",{staticClass:"aioseo-description"},[e("span",[t._v(t._s(t.strings.casingDescription))]),e("br"),e("ul",{staticClass:"casing-options"},t._l(t.casings,function(s,i){return e("li",{key:i},[e("span",[t._v(t._s(s.label))]),e("span",[t._v(t._s(s.description))])])}),0)])]},proxy:!0}])})],1)])},B=[],E=n(I,D,B,!1,null,null,null,null);const p=E.exports,R={components:{Blur:p,CoreAlert:v,Cta:u},data(){return{failed:!1,activationLoading:!1,strings:{imageSeoHeader:this.$t.__("Enable Advanced SEO for Images on your Site",this.$tdPro),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",this.$tdPro),ctaButtonText:this.$t.__("Activate Image SEO",this.$tdPro),learnMoreText:this.$t.__("Learn more about Image SEO",this.$tdPro),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td)},features:[this.$t.__("Autogenerate image attributes",this.$td),this.$t.__("Clean uploaded image filenames",this.$td),this.$t.__("Strip punctuation from image attributes",this.$td),this.$t.__("Convert casing of image attributes",this.$td)]}},computed:{...r(["tags"])},methods:{...l(["installPlugins","getTags"]),...h(["updateAddon"]),activateAddon(){this.failed=!1,this.activationLoading=!0;const a=this.$addons.getAddon("aioseo-image-seo");this.installPlugins([{plugin:a.basename}]).then(t=>{if(t.body.failed.length){this.activationLoading=!1,this.failed=!0;return}this.getTags().then(()=>{this.activationLoading=!1,a.hasMinimumVersion=!0,a.isActive=!0,this.updateAddon(a)})}).catch(()=>{this.activationLoading=!1})}}};var U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-button-visible":t.$addons.userCanInstallOrActivate("aioseo-image-seo"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-image-seo","same-tab":"","cta-button-action":"","cta-button-loading":t.activationLoading,"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("imageSeo"),"feature-list":t.features},on:{"cta-button-click":t.activateAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.imageSeoHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t.failed?e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)},G=[],M=n(R,U,G,!1,null,null,null,null);const K=M.exports;const F={components:{BaseCheckbox:_,BaseRadioToggle:c,BaseTextarea:w,CoreExcludePosts:P,CoreHtmlTagsEditor:g,CoreSettingsRow:d,CoreTooltip:L,GridColumn:m,GridRow:$},data(){return{strings:{attributeFormat:this.$t.sprintf(this.$t.__("%1$s Format",this.$tdPro),this.activeTab.name),clickToAddTags:this.$t.sprintf(this.$t.__("Click on the tags below to insert variables into your %1$s attribute.",this.$tdPro),this.activeTab.name.toLowerCase()),stripPunctuation:this.$t.__("Strip Punctuation",this.$tdPro),charactersToKeep:this.$t.__("Characters to Exclude from Being Stripped:",this.$tdPro),charactersToConvert:this.$t.__("Characters to Convert to Spaces:",this.$tdPro),casing:this.$t.__("Casing",this.$tdPro),casingDescription:this.$t.__("Choose which casing should be applied to the attribute.",this.$tdPro),wordsToStrip:this.$t.__("Words to Strip",this.$tdPro),wordsToStripDescription:this.$t.__("Here you can add words that should be stripped from the filename, separated by a new line.",this.$tdPro),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$td),excludeTerms:this.$t.__("Exclude Terms",this.$td),excludeTermsDescription:this.$t.__("Any posts that are assigned to these terms will also be excluded.",this.$td),autogenerate:this.$t.sprintf(this.$t.__("Autogenerate %1$s on Upload",this.$tdPro),this.activeTab.name),autogenerateDescriptions:{caption:this.$t.sprintf(this.$t.__("Choose whether %1$s should automatically generate a %2$s when new images are uploaded. If you disable this setting, you can still generate %3$s in the Media Library via our bulk action.",this.$tdPro),"AIOSEO",this.$t.__("caption",this.$tdPro),this.$t.__("captions",this.$tdPro)),description:this.$t.sprintf(this.$t.__("Choose whether %1$s should automatically generate a %2$s when new images are uploaded. If you disable this setting, you can still generate %3$s in the Media Library via our bulk action.",this.$tdPro),"AIOSEO",this.$t.__("description",this.$tdPro),this.$t.__("descriptions",this.$tdPro))},attributeDescriptions:{title:{first:this.$t.__("The title attribute is used to provide additional information about an image and can be viewed when you hover over the image.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("title attributes",this.$tdPro))},altTag:{first:this.$t.__("The alt tag attribute is used to display text that describes the image if it cannot be rendered by the browser. Its primary goal is to make images more accessible to visually impaired users, but it also used as a ranking factor by search engines.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("alt tag attributes",this.$tdPro))},caption:{first:this.$t.__("The caption is usually a few lines of text that are displayed underneath an image to provide more context or explain what can be seen in the picture.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("image captions",this.$tdPro))},description:{first:this.$t.__("The description is the text that is displayed on an image's attachment page",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by setting a format (similar to the SEO title/description formats), stripping punctuation and converting the casing.",this.$tdPro),this.$t.__("attachment page descriptions",this.$tdPro))},filename:{first:this.$t.__("The filename is name of the image file when it is uploaded to the Media Library. The more descriptive and relevant the filename is, the more likely search engines will include in their results.",this.$tdPro),second:this.$t.sprintf(this.$t.__("Below you can control how your %1$s look like by stripping punctuation, specific words and converting the casing.",this.$tdPro),this.$t.__("filenames",this.$tdPro))}}},charactersToKeep:[{value:"dashes",label:this.$t.__("Dashes (-)",this.$td)},{value:"underscores",label:this.$t.__("Underscores (_)",this.$td)},{value:"numbers",label:this.$t.__("Numbers (0-9)",this.$td)},{value:"plus",label:this.$t.__("Plus (+)",this.$td)},{value:"apostrophe",label:this.$t.__("Apostrophe (')",this.$td)},{value:"pound",label:this.$t.__("Pound (#)",this.$td)},{value:"ampersand",label:this.$t.__("Ampersand (&)",this.$td)}],charactersToConvert:[{value:"dashes",label:this.$t.__("Dashes (-)",this.$td)},{value:"underscores",label:this.$t.__("Underscores (_)",this.$td)}],casings:{lowerCase:{label:this.$t.__("Lower Case",this.$td),description:this.$t.__("All letters are converted to lower case (small) letters.",this.$td)},titleCase:{label:this.$t.__("Title Case",this.$td),description:this.$t.__("Major words are capitalized and minor words remain in their original casing.",this.$td)},sentenceCase:{label:this.$t.__("Sentence Case",this.$td),description:this.$t.__("The first word of each sentence starts with a capital.",this.$td)}},tags:{title:{context:"imageSeoTitle",default:["image_title","separator_sa","site_title"]},altTag:{context:"imageSeoAlt",default:["alt_tag","separator_sa","site_title"]},caption:{context:"imageSeoCaption",default:["attachment_caption","separator_sa","site_title"]},description:{context:"imageSeoDescription",default:["attachment_description","separator_sa","site_title"]}}}},computed:{...r(["options"]),isFilenameTab(){return this.activeTab.slug==="filename"},filteredCharactersToKeep(){return this.charactersToKeep.map(a=>(this.options.image[this.activeTab.slug].charactersToConvert&&this.options.image[this.activeTab.slug].charactersToConvert[a.value]?a.disabled=!0:a.disabled=!1,a))},filteredCharactersToConvert(){return this.charactersToConvert.map(a=>(this.options.image[this.activeTab.slug].charactersToKeep[a.value]?a.disabled=!0:a.disabled=!1,a))}},methods:{charactersToKeepTooltipText(a){return this.$t.sprintf(this.$t.__("Excluding %1$s is disabled when converting to spaces is enabled.",this.$tdPro),a.toLowerCase())},charactersToConvertTooltipText(a){return this.$t.sprintf(this.$t.__("Converting %1$s to spaces is disabled when excluding from stripping.",this.$tdPro),a.toLowerCase())}},props:{activeTab:Object}};var N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[e("div",[t._v(t._s(t.strings.attributeDescriptions[t.activeTab.slug].first))]),e("div",[t._v(" "+t._s(t.strings.attributeDescriptions[t.activeTab.slug].second)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"imageSeo",!0))}})])]),["caption","description"].includes(t.activeTab.slug)?e("core-settings-row",{attrs:{name:t.strings.autogenerate,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"autogenerate",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:t.options.image[t.activeTab.slug].autogenerate,callback:function(s){t.$set(t.options.image[t.activeTab.slug],"autogenerate",s)},expression:"options.image[activeTab.slug].autogenerate"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.autogenerateDescriptions[t.activeTab.slug])+" ")])]},proxy:!0}],null,!1,2131042604)}):t._e(),t.isFilenameTab?t._e():e("core-settings-row",{attrs:{name:t.strings.attributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","tags-context":t.tags[t.activeTab.slug].context,"default-tags":t.tags[t.activeTab.slug].default,"disable-emoji":""},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddTags)+" ")]},proxy:!0}],null,!1,674278855),model:{value:t.options.image[t.activeTab.slug].format,callback:function(s){t.$set(t.options.image[t.activeTab.slug],"format",s)},expression:"options.image[activeTab.slug].format"}})]},proxy:!0}],null,!1,249579687)}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuation,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"stripPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:t.options.image[t.activeTab.slug].stripPunctuation,callback:function(s){t.$set(t.options.image[t.activeTab.slug],"stripPunctuation",s)},expression:"options.image[activeTab.slug].stripPunctuation"}}),t.options.image[t.activeTab.slug].stripPunctuation?e("div",{staticClass:"global-robots-settings aioseo-description"},[e("div",[e("strong",[t._v(t._s(t.strings.charactersToKeep))]),e("grid-row",{staticClass:"characters-to-keep"},t._l(t.filteredCharactersToKeep,function(s,i){return e("grid-column",{key:i,staticClass:"characters-grid",attrs:{xl:"3",md:"4",sm:"6"}},[s.disabled?e("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.charactersToKeepTooltipText(s.value))+" ")]},proxy:!0}],null,!0)},[e("base-checkbox",{attrs:{size:"medium",disabled:s.disabled},model:{value:t.options.image[t.activeTab.slug].charactersToKeep[s.value],callback:function(o){t.$set(t.options.image[t.activeTab.slug].charactersToKeep,s.value,o)},expression:"options.image[activeTab.slug].charactersToKeep[setting.value]"}},[t._v(" "+t._s(s.label)+" ")])],1):t._e(),s.disabled?t._e():e("base-checkbox",{attrs:{size:"medium",disabled:s.disabled},model:{value:t.options.image[t.activeTab.slug].charactersToKeep[s.value],callback:function(o){t.$set(t.options.image[t.activeTab.slug].charactersToKeep,s.value,o)},expression:"options.image[activeTab.slug].charactersToKeep[setting.value]"}},[t._v(" "+t._s(s.label)+" ")])],1)}),1)],1),!t.isFilenameTab&&t.filteredCharactersToConvert.length?e("div",[e("strong",[t._v(t._s(t.strings.charactersToConvert))]),e("grid-row",{staticClass:"characters-to-convert"},t._l(t.filteredCharactersToConvert,function(s,i){return e("grid-column",{key:i,staticClass:"characters-grid",attrs:{xl:"3",md:"4",sm:"6"}},[s.disabled?e("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.charactersToConvertTooltipText(s.value))+" ")]},proxy:!0}],null,!0)},[e("base-checkbox",{attrs:{size:"medium",disabled:s.disabled},model:{value:t.options.image[t.activeTab.slug].charactersToConvert[s.value],callback:function(o){t.$set(t.options.image[t.activeTab.slug].charactersToConvert,s.value,o)},expression:"options.image[activeTab.slug].charactersToConvert[setting.value]"}},[t._v(" "+t._s(s.label)+" ")])],1):t._e(),s.disabled?t._e():e("base-checkbox",{attrs:{size:"medium",disabled:s.disabled},model:{value:t.options.image[t.activeTab.slug].charactersToConvert[s.value],callback:function(o){t.$set(t.options.image[t.activeTab.slug].charactersToConvert,s.value,o)},expression:"options.image[activeTab.slug].charactersToConvert[setting.value]"}},[t._v(" "+t._s(s.label)+" ")])],1)}),1)],1):t._e()]):t._e()]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.casing,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"casing",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"",activeClass:"dark"},{label:t.casings.lowerCase.label,value:"lower"},{label:t.casings.titleCase.label,value:"title"},{label:t.casings.sentenceCase.label,value:"sentence"}]},model:{value:t.options.image[t.activeTab.slug].casing,callback:function(s){t.$set(t.options.image[t.activeTab.slug],"casing",s)},expression:"options.image[activeTab.slug].casing"}}),e("div",{staticClass:"aioseo-description"},[e("span",[t._v(t._s(t.strings.casingDescription))]),e("br"),e("ul",{staticClass:"casing-options"},t._l(t.casings,function(s,i){return e("li",{key:i},[e("span",[t._v(t._s(s.label))]),e("span",[t._v(t._s(s.description))])])}),0)])]},proxy:!0}])}),t.isFilenameTab?e("core-settings-row",{attrs:{name:t.strings.wordsToStrip,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-textarea",{attrs:{minHeight:200,autosize:!1},model:{value:t.options.image[t.activeTab.slug].wordsToStrip,callback:function(s){t.$set(t.options.image[t.activeTab.slug],"wordsToStrip",s)},expression:"options.image[activeTab.slug].wordsToStrip"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.wordsToStripDescription)+" ")])]},proxy:!0}],null,!1,3033115568)}):t._e(),["title","altTag"].includes(t.activeTab.slug)?e("div",{attrs:{slug:"advancedSettings"}},[e("core-settings-row",{staticClass:"aioseo-exclude-pages-posts",attrs:{name:t.strings.excludePostsPages,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-exclude-posts",{attrs:{options:t.options.image[t.activeTab.slug].advancedSettings,type:"posts"}})]},proxy:!0}],null,!1,1259023932)}),e("core-settings-row",{staticClass:"aioseo-exclude-terms",attrs:{name:t.strings.excludeTerms,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-exclude-posts",{attrs:{options:t.options.image[t.activeTab.slug].advancedSettings,type:"terms"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.excludeTermsDescription)+" ")])]},proxy:!0}],null,!1,3193246921)})],1):t._e()],1)},H=[],z=n(F,N,H,!1,null,null,null,null);const W=z.exports;const q={components:{Blur:p,RequiredPlans:O,Cta:u},data(){return{strings:{titleAttributeFormat:this.$t.__("Title Attribute Format",this.$td),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",this.$tdPro),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Image SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Image SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")},features:[this.$t.__("Autogenerate image attributes",this.$td),this.$t.__("Clean uploaded image filenames",this.$td),this.$t.__("Strip punctuation from image attributes",this.$td),this.$t.__("Convert casing of image attributes",this.$td)]}}};var V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-link":t.$links.getPricingUrl("image-seo","image-seo-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("image-seo",null,"home"),"feature-list":t.features},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("required-plans",{attrs:{addon:"aioseo-image-seo"}}),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0}])})],1)},Y=[],j=n(q,V,Y,!1,null,"b11a6280",null,null);const J=j.exports,Q={components:{Blur:p,CoreAlert:v,Cta:u},data(){return{failed:!1,activationLoading:!1,strings:{imageSeoHeader:this.$t.__("Enable Advanced SEO for Images on your Site",this.$tdPro),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",this.$tdPro),ctaButtonText:this.$t.__("Update Image SEO",this.$tdPro),learnMoreText:this.$t.__("Learn more about Image SEO",this.$tdPro),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to update this addon. Please ask a site administrator to update.",this.$td),updateRequired:this.$t.sprintf(this.$t.__("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.",this.$td),"AIOSEO","Pro",this.$addons.getAddon("aioseo-image-seo").minimumVersion,"Image SEO",this.$addons.getAddon("aioseo-image-seo").installedVersion),features:[this.$t.__("Autogenerate image attributes",this.$td),this.$t.__("Clean uploaded image filenames",this.$td),this.$t.__("Strip punctuation from image attributes",this.$td),this.$t.__("Convert casing of image attributes",this.$td)]}}},computed:{...r(["tags"])},methods:{...l(["upgradePlugins","getTags"]),...h(["updateAddon"]),upgradeAddon(){this.failed=!1,this.activationLoading=!0;const a=this.$addons.getAddon("aioseo-image-seo");this.upgradePlugins([{plugin:a.sku}]).then(t=>{if(t.body.failed.length){this.activationLoading=!1,this.failed=!0;return}this.getTags().then(()=>{const e=t.body.completed[a.sku];this.activationLoading=!1,a.hasMinimumVersion=!0,a.isActive=!0,a.installedVersion=e.installedVersion,this.updateAddon(a)})}).catch(()=>{this.activationLoading=!1})}}};var X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-button-visible":t.$addons.userCanUpdate("aioseo-image-seo"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-image-seo","same-tab":"","cta-button-action":"","cta-button-loading":t.activationLoading,"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("imageSeo"),"feature-list":t.features},on:{"cta-button-click":t.upgradeAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.imageSeoHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("core-alert",{attrs:{type:"yellow"}},[t._v(" "+t._s(t.strings.updateRequired)+" ")]),t.failed?e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)},Z=[],tt=n(Q,X,Z,!1,null,null,null,null);const et=tt.exports;const st={mixins:[b],components:{Activate:K,Advanced:T,BaseRadioToggle:c,CoreCard:S,CoreMainTabs:C,CoreProBadge:x,CoreSettingsRow:d,CustomFields:k,ImageSeo:W,Lite:J,Schema:A,TitleDescription:y,Update:et},data(){return{imageSeoKey:0,addonSlug:"aioseo-image-seo",internalDebounce:!1,imageSeoActiveTab:{slug:"title",name:this.$t.__("Title",this.$td),pro:!0},strings:{redirectAttachmentUrls:this.$t.__("Redirect Attachment URLs",this.$td),attachment:this.$t.__("Attachment",this.$td),attachmentParent:this.$t.__("Attachment Parent",this.$td),attachmentUrlsDescription:this.$t.__("We recommended redirecting attachment URLs back to the attachment since the default WordPress attachment pages have little SEO value.",this.$td),imageSeo:this.$t.__("Image SEO",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$tdPro)},tabs:{attachments:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"Schema",name:this.$t.__("Schema Markup",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}],imageSeo:[{slug:"title",name:this.$t.__("Title",this.$td),pro:!0},{slug:"altTag",name:this.$t.__("Alt Tag",this.$td),pro:!0},{slug:"caption",name:this.$t.__("Caption",this.$td),pro:!0},{slug:"description",name:this.$t.__("Description",this.$td),pro:!0},{slug:"filename",name:this.$t.__("Filename",this.$td),pro:!0}]}}},computed:{...r(["options","dynamicOptions","settings"]),postType(){return this.$aioseo.postData.postTypes.filter(a=>a.name==="attachment")[0]}},methods:{...l(["changeTab"]),processChangeTab(a,t){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${a}SA`,value:t}),setTimeout(()=>{this.internalDebounce=!1},50))},setImageSeoActiveTab(a){this.imageSeoActiveTab=this.tabs.imageSeo.find(t=>t.slug===a),this.imageSeoKey++}}};var at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-search-appearance-content-types"},[e("core-card",{attrs:{slug:`${t.postType.name}SA`},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"icon dashicons",class:`${t.postType.icon||"dashicons-admin-post"}`}),e("div",[t._v(t._s(t.postType.label))])]},proxy:!0},{key:"before-tabs",fn:function(){return[e("core-settings-row",{attrs:{name:t.strings.redirectAttachmentUrls,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"redirectAttachmentUrls",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"disabled",activeClass:"dark"},{label:t.strings.attachment,value:"attachment"},{label:t.strings.attachmentParent,value:"attachment_parent"}]},model:{value:t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls,callback:function(s){t.$set(t.dynamicOptions.searchAppearance.postTypes.attachment,"redirectAttachmentUrls",s)},expression:"dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.attachmentUrlsDescription)+" ")])]},proxy:!0}])})]},proxy:!0},t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs.attachments,showSaveButton:!1,active:t.settings.internalTabs[`${t.postType.name}SA`],internal:""},on:{changed:s=>t.processChangeTab(t.postType.name,s)}})]},proxy:!0}:null],null,!0)},[t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?e("transition",{attrs:{name:"route-fade",mode:"out-in"}},[e(t.settings.internalTabs[`${t.postType.name}SA`],{tag:"component",attrs:{object:t.postType,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[t.postType.name],type:"postTypes"}})],1):t._e()],1),e("core-card",{attrs:{slug:"imageSeo",noSlide:!t.shouldShowMain},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.strings.imageSeo))]),e("core-pro-badge")]},proxy:!0},{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs.imageSeo,showSaveButton:!1,active:t.imageSeoActiveTab.slug,internal:""},on:{changed:s=>t.setImageSeoActiveTab(s)}})]},proxy:!0}])},[t.shouldShowMain?e("image-seo",{key:t.imageSeoKey,attrs:{activeTab:t.imageSeoActiveTab}}):t._e(),t.shouldShowActivate?e("activate"):t._e(),t.shouldShowUpdate?e("update"):t._e(),t.shouldShowLite?e("lite"):t._e()],1)],1)},it=[],ot=n(st,at,it,!1,null,null,null,null);const Jt=ot.exports;export{Jt as default};
