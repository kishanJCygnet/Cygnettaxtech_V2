import{_ as S,o as u,c as $,f as i,t as l,n as C,r as o,h,w as a,d as t,a as _,F as D,i as P,e as B,b as E}from"./_plugin-vue_export-helper.49ea0e68.js";import{a as x,d as G}from"./vuex.esm-bundler.97e30e47.js";import{B as O}from"./RadioToggle.2efe96f8.js";import{A as N}from"./WpTable.24633fe3.js";import"./default-i18n.ab92175e.js";import"./constants.d064fb5f.js";import{U as R}from"./Image.a09b69bb.js";import"./SaveChanges.203efc2d.js";import{C as w}from"./Card.32a76e4b.js";import{C as k}from"./SettingsRow.45faf80a.js";import{L as z,a as H,b as F,c as q,d as W,e as Y,f as j,g as K,h as J}from"./PaymentInfo.bc735b4b.js";import{C as V}from"./index.d59f905b.js";import{C as M}from"./ProBadge.b673849c.js";import{C as Q}from"./AttributesList.c0051d06.js";import{C as X}from"./DisplayInfo.6178c74a.js";import{B as Z}from"./Checkbox.de9093b7.js";import{S as ss,a as es}from"./Mobile.74a5081b.js";import{A as ts,U as os}from"./UpdateCta.19209752.js";import{C as ns}from"./Blur.ef3abea2.js";import{S as is}from"./Plus.77736cd8.js";import{R as as}from"./RequiredPlans.ad9de58d.js";import{C as ls}from"./Index.a6f4141a.js";import"./index.cda4d160.js";import"./helpers.871dba46.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.f3af2f4b.js";import"./Caret.09e548f3.js";import"./cleanForSlug.8d948434.js";import"./isArrayLikeObject.d5975086.js";import"./html.68197829.js";import"./Index.20fccad8.js";import"./_commonjsHelpers.f84db168.js";import"./Tooltip.754dc940.js";import"./Slide.dcb3da9d.js";import"./Row.87dd14fc.js";import"./HtmlTagsEditor.9d6b41fb.js";import"./Editor.90c97faa.js";import"./UnfilteredHtml.46e0d460.js";import"./Phone.9fc728e3.js";import"./preload-helper.b149fa8b.js";import"./Img.8ff054fa.js";import"./Map.7777dbee.js";import"./index.6bc67fdd.js";import"./client.e7a26247.js";import"./isEqual.c85a31eb.js";import"./_baseIsEqual.70af07c2.js";import"./_getAllKeys.81623af3.js";import"./_getTag.06b10d2d.js";import"./Php.f78d0e4a.js";import"./CheckSolid.722e380f.js";import"./Checkmark.05a656b1.js";const rs={props:{strings:{}},data(){return{hoveringOver:!1}}},cs={href:"edit.php?post_type=aioseo-location",class:"wp-has-submenu wp-not-current-submenu menu-top menu-icon-aioseo-location menu-top-last","aria-haspopup":"true"},us=i("div",{class:"wp-menu-image dashicons-before dashicons-location","aria-hidden":"true"},null,-1),ds={class:"wp-menu-name"},ps={class:"wp-submenu wp-submenu-wrap"},ms={class:"wp-submenu-head","aria-hidden":"true"},_s={class:"wp-first-item"},hs={href:"edit.php?post_type=aioseo-location",class:"wp-first-item"},gs={href:"post-new.php?post_type=aioseo-location"},$s={href:"edit-tags.php?taxonomy=aioseo-location-category&post_type=aioseo-location"};function bs(e,n,p,b,s,g){return u(),$("li",{class:C(["wp-has-submenu wp-not-current-submenu menu-top menu-icon-aioseo-location menu-top-last",{opensub:s.hoveringOver===0}]),id:"menu-posts-aioseo-location",onMouseover:n[0]||(n[0]=d=>s.hoveringOver=0),onMouseleave:n[1]||(n[1]=d=>s.hoveringOver=-1)},[i("a",cs,[us,i("div",ds,l(p.strings.locations),1)]),i("ul",ps,[i("li",ms,l(p.strings.locations),1),i("li",_s,[i("a",hs,l(p.strings.allLocations),1)]),i("li",null,[i("a",gs,l(p.strings.addNew),1)]),i("li",null,[i("a",$s,l(p.strings.locationCategories),1)])])],34)}const fs=S(rs,[["render",bs]]),ys={components:{CoreCard:w,CoreSettingsRow:k,LocalBusinessAreaServed:z,LocalBusinessBusinessAddress:H,LocalBusinessBusinessContact:F,LocalBusinessBusinessIds:q,LocalBusinessBusinessType:W,LocalBusinessImage:Y,LocalBusinessMap:j,LocalBusinessName:K,LocalBusinessPaymentInfo:J},mixins:[R],data(){return{strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),locationInfo2:this.$t.__("Local business information may be displayed when users search for businesses on Google search or Google Maps. Google decides on a per search basis whether to display this information or not and it’s completely automated.",this.$td),businessInfo:this.$t.__("Business Info",this.$td),name:this.$t.__("Name",this.$td),businessType:this.$t.__("Type",this.$td),urls:this.$t.__("URLs",this.$td),businessAddress:this.$t.__("Address",this.$td),businessContact:this.$t.__("Contact Info",this.$td),businessIDs:this.$t.__("IDs",this.$td),paymentInfo:this.$t.__("Payment Info",this.$td),areaServed:this.$t.__("Area Served",this.$td),image:this.$t.__("Image",this.$td),map:this.$t.__("Map",this.$td)}}},computed:{...x(["options"])}},Ss={class:"aioseo-settings-row aioseo-section-description"},vs={class:"location-description"},Ls={class:"location-description mb-0"};function Bs(e,n,p,b,s,g){const d=o("local-business-name"),r=o("core-settings-row"),m=o("local-business-image"),f=o("local-business-business-type"),y=o("local-business-business-address"),v=o("local-business-map"),c=o("local-business-business-contact"),L=o("local-business-business-ids"),I=o("local-business-payment-info"),A=o("local-business-area-served"),T=o("core-card");return u(),$("div",null,[e.options.localBusiness.locations.general.multiple?_("",!0):(u(),h(T,{key:0,slug:"localBusinessInfo","header-text":s.strings.businessInfo},{default:a(()=>[i("div",Ss,[i("p",vs,l(s.strings.locationInfo1),1),i("p",Ls,l(s.strings.locationInfo2),1)]),t(r,{name:s.strings.name,class:"info-name-row",align:""},{content:a(()=>[t(d)]),_:1},8,["name"]),t(r,{class:"info-business-image",name:s.strings.image,align:""},{content:a(()=>[t(m)]),_:1},8,["name"]),t(r,{id:"info-business-type",name:s.strings.businessType,class:"info-business-type",align:""},{content:a(()=>[t(f)]),_:1},8,["name"]),t(r,{id:"info-business-address-row",name:s.strings.businessAddress,class:"info-business-address-row",align:""},{content:a(()=>[t(y)]),_:1},8,["name"]),t(r,{name:s.strings.map,align:""},{content:a(()=>[t(v)]),_:1},8,["name"]),t(r,{id:"info-business-contact-row",name:s.strings.businessContact,class:"info-business-contact-row",align:""},{content:a(()=>[t(c)]),_:1},8,["name"]),t(r,{name:s.strings.businessIDs,class:"info-business-IDs-row",align:""},{content:a(()=>[t(L)]),_:1},8,["name"]),t(r,{id:"info-payment-info-row",name:s.strings.paymentInfo,class:"info-payment-info-row",align:""},{content:a(()=>[t(I)]),_:1},8,["name"]),t(r,{name:s.strings.areaServed,class:"info-area-row",align:""},{content:a(()=>[t(A)]),_:1},8,["name"])]),_:1},8,["header-text"]))])}const ws=S(ys,[["render",Bs]]),Cs={components:{CoreAttributesList:Q,CoreDisplayInfo:X},props:{label:null,displayOptions:{type:Object,required:!0}},data(){return{strings:{shortcodeAttributesDescription:this.$t.__("The following shortcode attributes can be used to override the default settings:",this.$td),phpArgumentsDescription:this.$t.__("The function accepts an associative array with the following arguments that can be used to override the default settings:",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td)},attributes:[{name:"location_id",description:this.$t.__("A Location ID if Multiple Locations is on.",this.$td)},{name:"show_labels",description:this.$t.__("Show or hide labels ( ‘Address:’, ‘Phone:’, ‘Fax:’, ‘Email:’, etc ).",this.$td)},{name:"show_icons",description:this.$t.__("Show or hide icons ( address, phone, fax, email ).",this.$td)},{name:"show_name",description:this.$t.__("Show or hide the business name.",this.$td)},{name:"show_address",description:this.$t.__("Show or hide the address.",this.$td)},{name:"show_phone",description:this.$t.__("Show or hide the phone number.",this.$td)},{name:"show_fax",description:this.$t.__("Show or hide the fax number.",this.$td)},{name:"show_email",description:this.$t.__("Show or hide the email.",this.$td)},{name:"show_vat",description:this.$t.__("Show or hide the Vat ID.",this.$td)},{name:"show_tax",description:this.$t.__("Show or hide the Tax ID.",this.$td)},{name:"address_label",description:this.$t.__("The address label.",this.$td)},{name:"vat_id_label",description:this.$t.__("The VAT ID label.",this.$td)},{name:"tax_id_label",description:this.$t.__("The Tax ID label.",this.$td)},{name:"phone_label",description:this.$t.__("The phone label.",this.$td)},{name:"fax_label",description:this.$t.__("The fax label.",this.$td)},{name:"email_label",description:this.$t.__("The email label.",this.$td)}]}}};function ks(e,n,p,b,s,g){const d=o("core-attributes-list"),r=o("core-display-info");return u(),h(r,{label:p.label,options:p.displayOptions},{shortcodeAdvanced:a(()=>[t(d,{description:s.strings.shortcodeAttributesDescription,attributes:s.attributes},null,8,["description","attributes"])]),phpAdvanced:a(()=>[t(d,{description:s.strings.phpArgumentsDescription,attributes:s.attributes},null,8,["description","attributes"])]),_:1},8,["label","options"])}const Is=S(Cs,[["render",ks]]),As={components:{BaseCheckbox:Z,BaseRadioToggle:O,CoreCard:w,CoreSettingsRow:k,CoreAlert:V},data(){return{strings:{advancedLocationsSettings:this.$t.__("Advanced Locations Settings",this.$td),locationsPermalink:this.$t.__("Locations Permalink",this.$td),useCustomSlug:this.$t.__("Use custom slug",this.$td),invalidCustomSlug:this.$t.__("Slug is empty or is already taken. Please enter a different one.",this.$td),locationsCategoryPermalink:this.$t.__("Locations Category Permalink",this.$td),useCustomCategorySlug:this.$t.__("Use custom category slug",this.$td),enhancedSearch:this.$t.__("Enhanced Search",this.$td),enhancedSearchDesc:this.$t.__("Include business locations in site-wide search results. Users searching for street name, zip code or city will now also get your business location(s) in their search results.",this.$td),enhancedSearchError:this.$t.sprintf(this.$t.__("Enhanced Search cannot be enabled on your website because there is a search query conflict. To learn more about this, %1$sclick here%2$s.",this.$td),`<a href="${this.$links.getDocUrl("localSeoSearchQueryConflict")}" target="_blank">`,"</a>"),enhancedSearchExcerpt:this.$t.__("Enhanced Search - Excerpt",this.$td),enhancedSearchExcerptDesc:this.$t.__("Shows the location address appended to the search result.",this.$td),customAdminLabels:this.$t.__("Custom Admin Labels",this.$td),customAdminLabelsDesc:this.$t.__("With multiple locations, you will have a new menu item in your admin sidebar. By default, this menu item is labeled using the plural term of locations with each single item being called a location. If you like, you may enter custom labels to better match your business.",this.$td),singleLabel:this.$t.__("Single label",this.$td),pluralLabel:this.$t.__("Plural label",this.$td)},validCustomSlug:!0,validCustomCategorySlug:!0}},computed:{...x(["options"]),currentPostTypeSlug(){return this.options.localBusiness.locations.general.useCustomSlug&&this.options.localBusiness.locations.general.customSlug?this.options.localBusiness.locations.general.customSlug:this.$aioseo.localBusiness.postTypeDefaultSlug},currentTaxonomySlug(){return this.options.localBusiness.locations.general.useCustomCategorySlug&&this.options.localBusiness.locations.general.customCategorySlug?this.options.localBusiness.locations.general.customCategorySlug:this.$aioseo.localBusiness.taxonomyDefaultSlug}},methods:{validateCustomSlug(e){this.validCustomSlug=!0,e=e.replace(/^\/+/,"").replace(/\/+$/,"").replace(/\s+/g,"-"),this.options.localBusiness.locations.general.customSlug=e,(0>=e.length||0<this.$aioseo.postData.postTypes.filter(n=>n.name!==this.$aioseo.localBusiness.postTypeName&&n.slug===e).length)&&(this.validCustomSlug=!1)},validateCustomCategorySlug(e){this.validCustomCategorySlug=!0,e=e.replace(/^\/+/g,"").replace(/\/+$/g,"").replace(/\s+/g,"-"),this.options.localBusiness.locations.general.customCategorySlug=e,(0>=e.length||0<this.$aioseo.postData.taxonomies.filter(n=>n.name!==this.$aioseo.localBusiness.taxonomyName&&n.slug===e).length)&&(this.validCustomCategorySlug=!1)}}},Ts={class:"aioseo-locations aioseo-locations-multiple-locations-settings"},xs={class:"location-permalink-preview"},Us={class:"baseurl"},Ds={key:1,class:"aioseo-description aioseo-error"},Ps={class:"location-permalink-preview location-category-permalink-preview"},Os={class:"baseurl"},Vs={key:1,class:"aioseo-description aioseo-error"},Ms={class:"aioseo-description"},Es={class:"aioseo-description"},Gs={class:"admin-labels-description"},Ns={class:"aioseo-columns"},Rs={class:"aioseo-col col-xs-12 col-md-6 text-xs-left"},zs={class:"label-description"},Hs={class:"aioseo-col col-xs-12 col-md-6 text-xs-left"},Fs={class:"label-description"};function qs(e,n,p,b,s,g){const d=o("base-checkbox"),r=o("base-input"),m=o("core-settings-row"),f=o("base-radio-toggle"),y=o("core-alert"),v=o("core-card");return u(),$("div",Ts,[e.options.localBusiness.locations.general.multiple&&e.$aioseo.license.isActive?(u(),h(v,{key:0,slug:"advancedLocationsSettings","header-text":s.strings.advancedLocationsSettings},{default:a(()=>[t(m,{class:"location-permalink",name:s.strings.locationsPermalink},{content:a(()=>[i("div",xs,[i("span",Us,l(e.$aioseo.urls.mainSiteUrl)+"/",1),(u(!0),$(D,null,P(e.$aioseo.localBusiness.postTypePermalinkStructure,(c,L)=>(u(),$("span",{key:L,class:C(c=="{slug}"?"slug":"")},l(c=="{slug}"?g.currentPostTypeSlug:c),3))),128))]),t(d,{size:"medium",modelValue:e.options.localBusiness.locations.general.useCustomSlug,"onUpdate:modelValue":n[0]||(n[0]=c=>e.options.localBusiness.locations.general.useCustomSlug=c)},{default:a(()=>[B(l(s.strings.useCustomSlug),1)]),_:1},8,["modelValue"]),e.options.localBusiness.locations.general.useCustomSlug?(u(),h(r,{key:0,modelValue:e.options.localBusiness.locations.general.customSlug,"onUpdate:modelValue":[n[1]||(n[1]=c=>e.options.localBusiness.locations.general.customSlug=c),n[2]||(n[2]=c=>g.validateCustomSlug(c))],class:C(["custom-slug",{"aioseo-error":!s.validCustomSlug}]),size:"medium",spellcheck:!1},null,8,["modelValue","class"])):_("",!0),e.options.localBusiness.locations.general.useCustomSlug&&!s.validCustomSlug?(u(),$("div",Ds,l(s.strings.invalidCustomSlug),1)):_("",!0)]),_:1},8,["name"]),t(m,{class:"location-category-permalink",name:s.strings.locationsCategoryPermalink},{content:a(()=>[i("div",Ps,[i("span",Os,l(e.$aioseo.urls.mainSiteUrl)+"/",1),(u(!0),$(D,null,P(e.$aioseo.localBusiness.taxonomyPermalinkStructure,(c,L)=>(u(),$("span",{key:L,class:C(c=="{slug}"?"slug":"")},l(c=="{slug}"?g.currentTaxonomySlug:c),3))),128))]),t(d,{size:"medium",modelValue:e.options.localBusiness.locations.general.useCustomCategorySlug,"onUpdate:modelValue":n[3]||(n[3]=c=>e.options.localBusiness.locations.general.useCustomCategorySlug=c)},{default:a(()=>[B(l(s.strings.useCustomCategorySlug),1)]),_:1},8,["modelValue"]),e.options.localBusiness.locations.general.useCustomCategorySlug?(u(),h(r,{key:0,modelValue:e.options.localBusiness.locations.general.customCategorySlug,"onUpdate:modelValue":[n[4]||(n[4]=c=>e.options.localBusiness.locations.general.customCategorySlug=c),n[5]||(n[5]=c=>g.validateCustomCategorySlug(c))],class:C(["custom-slug",{"aioseo-error":!s.validCustomCategorySlug}]),size:"medium",spellcheck:!1},null,8,["modelValue","class"])):_("",!0),e.options.localBusiness.locations.general.useCustomCategorySlug&&!s.validCustomCategorySlug?(u(),$("div",Vs,l(s.strings.invalidCustomSlug),1)):_("",!0)]),_:1},8,["name"]),t(m,{class:"location-enhanced-search",name:s.strings.enhancedSearch},{content:a(()=>[t(f,{name:"enhancedSearch",modelValue:e.options.localBusiness.locations.general.enhancedSearch,"onUpdate:modelValue":n[6]||(n[6]=c=>e.options.localBusiness.locations.general.enhancedSearch=c),disabled:!e.$aioseo.localBusiness.enhancedSearchTest,options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},null,8,["modelValue","disabled","options"]),i("div",Ms,l(s.strings.enhancedSearchDesc),1),e.$aioseo.localBusiness.enhancedSearchTest?_("",!0):(u(),h(y,{key:0,innerHTML:s.strings.enhancedSearchError,type:"yellow"},null,8,["innerHTML"]))]),_:1},8,["name"]),e.options.localBusiness.locations.general.enhancedSearch?(u(),h(m,{key:0,class:"location-enhanced-search",name:s.strings.enhancedSearchExcerpt},{content:a(()=>[t(f,{name:"enhancedSearchExcerpt",modelValue:e.options.localBusiness.locations.general.enhancedSearchExcerpt,"onUpdate:modelValue":n[7]||(n[7]=c=>e.options.localBusiness.locations.general.enhancedSearchExcerpt=c),options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},null,8,["modelValue","options"]),i("div",Es,l(s.strings.enhancedSearchExcerptDesc),1)]),_:1},8,["name"])):_("",!0),t(m,{class:"location-admin-labels",name:s.strings.customAdminLabels},{content:a(()=>[i("p",Gs,l(s.strings.customAdminLabelsDesc),1),i("div",Ns,[i("div",Rs,[i("span",zs,l(s.strings.singleLabel),1),t(r,{type:"text",size:"medium",modelValue:e.options.localBusiness.locations.general.singleLabel,"onUpdate:modelValue":n[8]||(n[8]=c=>e.options.localBusiness.locations.general.singleLabel=c)},null,8,["modelValue"])]),i("div",Hs,[i("span",Fs,l(s.strings.pluralLabel),1),t(r,{type:"text",size:"medium",modelValue:e.options.localBusiness.locations.general.pluralLabel,"onUpdate:modelValue":n[9]||(n[9]=c=>e.options.localBusiness.locations.general.pluralLabel=c)},null,8,["modelValue"])])])]),_:1},8,["name"])]),_:1},8,["header-text"])):_("",!0)])}const Ws=S(As,[["render",qs]]);const Ys={components:{BaseRadioToggle:O,BusinessInfo:ws,CoreAlert:V,CoreCard:w,CoreProBadge:M,CoreSettingsRow:k,LocalBusinessLocationsDisplayInfo:Is,MultipleLocationsSettings:Ws,SvgDesktop:ss,SvgMobile:es},data(){return{canShowMultipleLink:!1,displayInfo:{block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the "%1$s Local - Business Info" block.',this.$td),"AIOSEO")},shortcode:{copy:"[aioseo_local_business_info]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the location info. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeBusinessInfo",!0))},widget:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this widget, visit the %1$swidgets page%2$s and look for the "%3$s Local - Business Info" widget.',this.$td),`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","AIOSEO")},php:{copy:"<?php if( function_exists( 'aioseo_local_business_info' ) ) aioseo_local_business_info(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the location info. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionBusinessInfo",!0))}},strings:{locationsSettings:this.$t.__("Locations Settings",this.$td),description:this.$t.sprintf(this.$t.__("Whether your business has multiple locations, or just one, %1$s makes it easy to configure and display relevant information about your local business. You can use the custom-built tools below, or you can use the Locations custom post type (multiple locations only) to generate relevant and necessary information for search engines or for your customers.",this.$td),"AIOSEO"),multipleLocations:this.$t.__("Multiple Locations",this.$td),multipleLocationsLink:this.$t.sprintf(this.$t.__("Use the %1$sLocations%2$s Post Type in the menu on the left to start adding your locations.",this.$td),`<a href="${this.$aioseo.localBusiness.postTypeEditLink}">`,"</a>"),multipleLocationsFree:this.$t.sprintf(this.$t.__("Multiple Locations feature is available only for %1$s Pro users. Upgrade to Pro and unlock all %2$s features!",this.$td),"AIOSEO","AIOSEO"),displayLocationInfo:this.$t.__("Display Location Info",this.$td),widget:this.$t.__("Widget",this.$td),shortcode:this.$t.__("Shortcode",this.$td),gutenbergBlock:this.$t.__("Gutenberg Block",this.$td),phpCode:this.$t.__("PHP Code",this.$td)}}},computed:{...G(["isUnlicensed"]),...x(["options"]),isMultipleLocation:{get(){return this.isUnlicensed?!1:this.options.localBusiness.locations.general.multiple},set(e){this.options.localBusiness.locations.general.multiple=e}}},methods:{handlePostTypeMenu(){const e=this.options.localBusiness.locations.general.multiple,n=document.getElementById("menu-posts-aioseo-location");if(e&&!n){const p=document.querySelectorAll("#adminmenu .wp-menu-separator"),b=document.createElement("div");b.setAttribute("id","aioseo-locations"),p[1]&&(p[1].parentNode.insertBefore(b,p[1].previousSibling),E(fs,{strings:{locations:this.$t.__("Locations",this.$td),allLocations:this.$t.__("All Locations",this.$tdPro),addNew:this.$t.__("Add New",this.$td),locationCategories:this.$t.__("Location Categories",this.$td)}}).mount(`#${b.getAttribute("id")}`))}!e&&n&&n.parentElement.removeChild(n),this.canShowMultipleLink=e}},mounted(){this.canShowMultipleLink=this.options.localBusiness.locations.general.multiple,this.$bus.$on("changes-saved",this.handlePostTypeMenu)}},js={class:"aioseo-locations"},Ks={class:"aioseo-settings-row"},Js={class:"location-description"},Qs=["innerHTML"],Xs=["innerHTML"];function Zs(e,n,p,b,s,g){const d=o("core-pro-badge"),r=o("svg-desktop"),m=o("svg-mobile"),f=o("base-radio-toggle"),y=o("core-alert"),v=o("core-settings-row"),c=o("local-business-locations-display-info"),L=o("core-card"),I=o("business-info"),A=o("multiple-locations-settings");return u(),$("div",js,[t(L,{slug:"locationsSettings","header-text":s.strings.locationsSettings},{default:a(()=>[i("div",Ks,[i("p",Js,l(s.strings.description),1)]),t(v,{class:"multiple-locations"},{name:a(()=>[B(l(s.strings.multipleLocations)+" ",1),e.isUnlicensed?(u(),h(d,{key:0})):_("",!0)]),content:a(()=>[t(f,{name:"multipleLocations",modelValue:g.isMultipleLocation,"onUpdate:modelValue":n[0]||(n[0]=T=>g.isMultipleLocation=T),disabled:e.isUnlicensed,options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},{desktop:a(()=>[t(r)]),mobile:a(()=>[t(m)]),_:1},8,["modelValue","disabled","options"]),e.$aioseo.license.isActive&&s.canShowMultipleLink?(u(),h(y,{key:0,class:"locations-link",type:"blue"},{default:a(()=>[i("div",{innerHTML:s.strings.multipleLocationsLink},null,8,Qs)]),_:1})):_("",!0),e.isUnlicensed?(u(),h(y,{key:1,class:"locations-link",type:"blue"},{default:a(()=>[i("div",{innerHTML:s.strings.multipleLocationsFree},null,8,Xs)]),_:1})):_("",!0)]),_:1}),t(c,{label:s.strings.displayLocationInfo,displayOptions:s.displayInfo},null,8,["label","displayOptions"])]),_:1},8,["header-text"]),e.options.localBusiness.locations.general.multiple?_("",!0):(u(),h(I,{key:0})),e.options.localBusiness.locations.general.multiple?(u(),h(A,{key:1})):_("",!0)])}const se=S(Ys,[["render",Zs]]);const ee={components:{CoreBlur:ns,CoreSettingsRow:k,SvgCirclePlus:is},data(){return{strings:{description:this.$t.sprintf(this.$t.__("Whether your business has multiple locations, or just one, %1$s makes it easy to configure and display relevant information about your local business. You can use the custom-built tools below, or you can use the Locations custom post type (multiple locations only) to generate relevant and necessary information for search engines or for your customers.",this.$td),"AIOSEO"),name:this.$t.__("name",this.$td),nameDesc:this.$t.__("Your name or company name.",this.$td),businessType:this.$t.__("Type",this.$td),urls:this.$t.__("URLs",this.$td),image:this.$t.__("Image",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSize:this.$t.__("Minimum size: 112px x 112px, The image must be in JPG, PNG, GIF, SVG, or WEBP format.",this.$td),remove:this.$t.__("Remove",this.$td),websiteDesc:this.$t.__("Website URL:",this.$td),aboutDesc:this.$t.__("About Page URL:",this.$td),contactDesc:this.$t.__("Contact Page URL:",this.$td)},businessTypes:[{label:this.$t.__("default",this.$td),value:"LocalBusiness"},{label:this.$t.__("Animal Shelter",this.$td),value:"Animal Shelter"}]}}},te={class:"aioseo-locations-blur"},oe={class:"aioseo-settings-row"},ne={class:"location-description"},ie={class:"aioseo-col col-xs-12 text-xs-left"},ae={class:"field-description"},le={class:"image-upload"},re={class:"aioseo-description"},ce={class:"aioseo-col col-xs-12 text-xs-left"},ue={class:"aioseo-col col-xs-12 text-xs-left"},de={class:"field-description"},pe={class:"aioseo-col col-xs-12 text-xs-left"},me={class:"field-description mt-8"},_e={class:"aioseo-col col-xs-12 text-xs-left"},he={class:"field-description mt-8"};function ge(e,n,p,b,s,g){const d=o("base-input"),r=o("core-settings-row"),m=o("svg-circle-plus"),f=o("base-button"),y=o("base-select"),v=o("core-blur");return u(),$("div",te,[t(v,null,{default:a(()=>[i("div",oe,[i("p",ne,l(s.strings.description),1)]),t(r,{name:s.strings.name,class:"info-name-row",align:""},{content:a(()=>[i("div",ie,[t(d,{type:"text",size:"medium"}),i("span",ae,l(s.strings.nameDesc),1)])]),_:1},8,["name"]),t(r,{class:"info-business-image",name:s.strings.image},{content:a(()=>[i("div",le,[t(d,{size:"medium",placeholder:s.strings.pasteYourImageUrl},null,8,["placeholder"]),t(f,{class:"insert-image",size:"medium",type:"black"},{default:a(()=>[t(m),B(" "+l(s.strings.uploadOrSelectImage),1)]),_:1}),t(f,{class:"remove-image",size:"medium",type:"gray"},{default:a(()=>[B(l(s.strings.remove),1)]),_:1})]),i("div",re,l(s.strings.minimumSize),1)]),_:1},8,["name"]),t(r,{name:s.strings.businessType,class:"info-business-type",align:""},{content:a(()=>[t(y,{size:"large",options:s.businessTypes,modelValue:"default"},null,8,["options"])]),_:1},8,["name"]),t(r,{name:s.strings.urls,class:"info-urls-row",align:""},{content:a(()=>[i("div",ce,[i("div",ue,[i("span",de,l(s.strings.websiteDesc),1),t(d,{type:"text",size:"medium"})]),i("div",pe,[i("span",me,l(s.strings.aboutDesc),1),t(d,{type:"text",size:"medium"})]),i("div",_e,[i("span",he,l(s.strings.contactDesc),1),t(d,{type:"text",size:"medium"})])])]),_:1},8,["name"])]),_:1})])}const U=S(ee,[["render",ge]]),$e={components:{ActivateCta:ts,Blur:U,CoreCard:w},data(){return{strings:{businessInfo:this.$t.__("Business Info",this.$td)}}}};function be(e,n,p,b,s,g){const d=o("blur"),r=o("activate-cta"),m=o("core-card");return u(),$("div",null,[t(m,{slug:"localBusinessInfo","header-text":s.strings.businessInfo,noSlide:!0},{default:a(()=>[t(d),t(r,{"align-top":!0})]),_:1},8,["header-text"])])}const fe=S($e,[["render",be]]);const ye={components:{Blur:U,RequiredPlans:as,CoreCard:w,CoreProBadge:M,Cta:ls},data(){return{features:[this.$t.__("Local Business Schema",this.$td),this.$t.__("Multiple Locations",this.$td),this.$t.__("Business Info and Location blocks, widgets and shortcodes",this.$td),this.$t.__("Detailed Address, Contact and Payment Info",this.$td)],strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),businessInfo:this.$t.__("Business Info",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}}},Se={class:"aioseo-locations-lite"};function ve(e,n,p,b,s,g){const d=o("core-pro-badge"),r=o("blur"),m=o("required-plans"),f=o("cta"),y=o("core-card");return u(),$("div",Se,[t(y,{slug:"localBusinessInfo",class:"aioseo-locations-card",noSlide:!0},{header:a(()=>[i("span",null,l(s.strings.businessInfo),1),t(d)]),default:a(()=>[t(r),t(f,{"cta-link":e.$links.getPricingUrl("local-seo","local-seo-upsell","locations"),"button-text":s.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":s.features,"align-top":""},{"header-text":a(()=>[B(l(s.strings.ctaHeader),1)]),description:a(()=>[t(m,{addon:"aioseo-local-business"}),B(" "+l(s.strings.locationInfo1),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])]),_:1})])}const Le=S(ye,[["render",ve]]),Be={components:{Blur:U,CoreCard:w,UpdateCta:os},data(){return{strings:{businessInfo:this.$t.__("Business Info",this.$td)}}}};function we(e,n,p,b,s,g){const d=o("blur"),r=o("update-cta"),m=o("core-card");return u(),$("div",null,[t(m,{slug:"localBusinessInfo","header-text":s.strings.businessInfo,noSlide:!0},{default:a(()=>[t(d),t(r,{"align-top":!0})]),_:1},8,["header-text"])])}const Ce=S(Be,[["render",we]]),ke={mixins:[N],components:{Locations:se,Activate:fe,Lite:Le,Update:Ce},data(){return{addonSlug:"aioseo-local-business"}}},Ie={class:"aioseo-locations"};function Ae(e,n,p,b,s,g){const d=o("locations",!0),r=o("activate"),m=o("update"),f=o("lite");return u(),$("div",Ie,[e.shouldShowMain?(u(),h(d,{key:0})):_("",!0),e.shouldShowActivate?(u(),h(r,{key:1})):_("",!0),e.shouldShowUpdate?(u(),h(m,{key:2})):_("",!0),e.shouldShowLite?(u(),h(f,{key:3})):_("",!0)])}const kt=S(ke,[["render",Ae]]);export{kt as default};