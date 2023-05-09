import{C,i as G}from"./Map.7777dbee.js";import{a as P}from"./vuex.esm-bundler.97e30e47.js";import{C as O}from"./index.d59f905b.js";import{C as b}from"./Card.32a76e4b.js";import{C as v}from"./SettingsRow.45faf80a.js";import{L as T,a as D}from"./DefaultStyle.5b2596a1.js";import{C as E}from"./AttributesList.c0051d06.js";import{C as S}from"./DisplayInfo.6178c74a.js";import{_ as g,r as e,o as n,h as u,w as i,d as o,c as f,f as c,t as y,n as x,a as _,e as A}from"./_plugin-vue_export-helper.49ea0e68.js";import{b as R,d as U}from"./Caret.09e548f3.js";import{A as V,U as H}from"./UpdateCta.19209752.js";import{C as N}from"./Blur.ef3abea2.js";import{R as F}from"./RequiredPlans.ad9de58d.js";import{C as q}from"./ProBadge.b673849c.js";import{C as z}from"./Index.a6f4141a.js";import{A as Y}from"./WpTable.24633fe3.js";import"./default-i18n.ab92175e.js";import"./constants.d064fb5f.js";import"./index.cda4d160.js";import"./SaveChanges.203efc2d.js";import"./index.6bc67fdd.js";import"./client.e7a26247.js";import"./_commonjsHelpers.f84db168.js";import"./helpers.871dba46.js";import"./isEqual.c85a31eb.js";import"./_baseIsEqual.70af07c2.js";import"./isArrayLikeObject.d5975086.js";import"./_getAllKeys.81623af3.js";import"./_getTag.06b10d2d.js";import"./Tooltip.754dc940.js";import"./Slide.dcb3da9d.js";import"./Row.87dd14fc.js";import"./Image.a09b69bb.js";import"./postContent.f3af2f4b.js";import"./cleanForSlug.8d948434.js";import"./html.68197829.js";import"./Img.8ff054fa.js";import"./Plus.77736cd8.js";import"./Php.f78d0e4a.js";import"./CheckSolid.722e380f.js";import"./RequiresUpdate.fe231e49.js";import"./Index.20fccad8.js";const j={components:{CoreAttributesList:E,CoreDisplayInfo:S},props:{label:null,displayOptions:{type:Object,required:!0}},data(){return{strings:{shortcodeAttributesDescription:this.$t.__("The following shortcode attributes can be used to override the default settings:",this.$td),phpArgumentsDescription:this.$t.__("The function accepts an associative array with the following arguments that can be used to override the default settings:",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td)},attributes:[{name:"location_id",description:this.$t.__("A Location ID if Multiple Locations is on.",this.$td)},{name:"show_label",description:this.$t.__("Show or hide the label.",this.$td)},{name:"show_icon",description:this.$t.__("Show or hide the icon.",this.$td)},{name:"width",description:this.$t.__("The width of the map. You may use a percentage or a fixed width in pixels.",this.$td)},{name:"height",description:this.$t.__("The height of the map. You may use a percentage or a fixed height in pixels.",this.$td)},{name:"label",description:this.$t.__("The label.",this.$td)}]}}};function J(t,l,m,$,s,d){const a=e("core-attributes-list"),r=e("core-display-info");return n(),u(r,{label:m.label,options:m.displayOptions},{shortcodeAdvanced:i(()=>[o(a,{description:s.strings.shortcodeAttributesDescription,attributes:s.attributes},null,8,["description","attributes"])]),phpAdvanced:i(()=>[o(a,{description:s.strings.phpArgumentsDescription,attributes:s.attributes},null,8,["description","attributes"])]),_:1},8,["label","options"])}const Q=g(j,[["render",J]]);const W={components:{CoreAlert:O,CoreCard:b,CoreMap:C,CoreSettingsRow:v,LocalBusinessMapCustomMarker:T,LocalBusinessMapDefaultStyle:D,LocalBusinessMapDisplayInfo:Q,SvgCircleClose:R},data(){return{strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td),description:this.$t.sprintf(this.$t.__("Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),apiKey:this.$t.__("API Key",this.$td),apiKeyDescription:this.$t.sprintf(this.$t.__("A Google API Key is necessary to render your maps. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),mapSettings:this.$t.__("Map Settings",this.$td),apiKeyInvalid:this.$t.sprintf(this.$t.__("Your API Key is invalid. Please make sure you have set your key correctly. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),placeSelected:this.$t.sprintf(this.$t.__("For a more seamless experience with rich information cards, we recommend that you enable the Maps Embed API for your Google Maps API Key. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapEmbedApi",!0)),displayMap:this.$t.__("Display Map",this.$td),mapPreview:this.$t.__("Map Preview",this.$td)},displayInfo:{block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the "%1$s Local - Map" block.',this.$td),"AIOSEO")},shortcode:{copy:"[aioseo_local_map]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the location map. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeMap",!0))},widget:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this widget, visit the %1$swidgets page%2$s and look for the "%3$s Local - Map" widget.',this.$td),`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","AIOSEO")},php:{copy:"<?php if( function_exists( 'aioseo_local_map' ) ) aioseo_local_map(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the location map. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionMap",!0))}},debouncedApiKey:null}},computed:{...P(["options"]),defaultMapOptions(){return{...this.options.localBusiness.maps.mapOptions,...this.$aioseo.localBusiness.mapDefaults}},currentMarker(){return{position:this.options.localBusiness.maps.mapOptions.center,icon:this.options.localBusiness.maps.customMarker}}},methods:{apiKeyFailed(){this.options.localBusiness.maps.apiKeyValid=!1},checkApiKey(){U(()=>{this.debouncedApiKey=this.options.localBusiness.maps.apiKey,this.options.localBusiness.maps.apiKeyValid=!0,this.options.localBusiness.maps.mapsEmbedApiEnabled=null,window.gm_authFailure=this.apiKeyFailed,this.checkMapEmbedApi()},1500)},checkMapEmbedApi(){G(this.options.localBusiness.maps.apiKey,"places/embed",this.$http).then(t=>{this.options.localBusiness.maps.mapsEmbedApiEnabled=t})}},mounted(){this.options.localBusiness.maps.apiKey&&(this.debouncedApiKey=this.options.localBusiness.maps.apiKey,this.checkMapEmbedApi())}},X={class:"aioseo-local-maps"},Z={class:"aioseo-settings-row"},ss=["innerHTML"],es={class:"append-icon"},ts=["innerHTML"];function os(t,l,m,$,s,d){const a=e("svg-circle-close"),r=e("base-input"),p=e("core-alert"),h=e("core-settings-row"),M=e("core-map"),w=e("core-card"),B=e("local-business-map-display-info"),L=e("local-business-map-default-style"),I=e("local-business-map-custom-marker");return n(),f("div",X,[o(w,{slug:"localBusinessMapsApiKey"},{header:i(()=>[c("span",null,y(s.strings.googleMapsApiKey),1)]),default:i(()=>[c("div",Z,[c("p",{class:"apikey-description",innerHTML:s.strings.description},null,8,ss)]),o(h,{name:s.strings.apiKey,align:""},{content:i(()=>[o(r,{size:"medium",modelValue:t.options.localBusiness.maps.apiKey,"onUpdate:modelValue":[l[0]||(l[0]=k=>t.options.localBusiness.maps.apiKey=k),l[1]||(l[1]=k=>d.checkApiKey())],class:x({"aioseo-error":t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid===!1}),spellcheck:!1},{"append-icon":i(()=>[c("div",es,[c("template",null,[t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid===!1?(n(),u(a,{key:0})):_("",!0)])])]),_:1},8,["modelValue","class"]),c("div",{class:"aioseo-description",innerHTML:s.strings.apiKeyDescription},null,8,ts),t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid===!1?(n(),u(p,{key:0,type:"red",innerHTML:s.strings.apiKeyInvalid},null,8,["innerHTML"])):_("",!0),t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid&&t.options.localBusiness.maps.mapsEmbedApiEnabled===!1?(n(),u(p,{key:1,type:"blue",innerHTML:s.strings.placeSelected},null,8,["innerHTML"])):_("",!0)]),_:1},8,["name"]),s.debouncedApiKey?(n(),u(h,{key:0,name:s.strings.mapPreview,align:""},{content:i(()=>[o(M,{apiKey:s.debouncedApiKey,options:d.defaultMapOptions,placeId:t.options.localBusiness.maps.placeId,marker:d.currentMarker},null,8,["apiKey","options","placeId","marker"])]),_:1},8,["name"])):_("",!0)]),_:1}),t.options.localBusiness.maps.apiKey?(n(),u(w,{key:0,slug:"localBusinessMapsSettings"},{header:i(()=>[c("span",null,y(s.strings.mapSettings),1)]),default:i(()=>[o(B,{label:s.strings.displayMap,displayOptions:s.displayInfo},null,8,["label","displayOptions"]),o(L),o(I)]),_:1})):_("",!0)])}const is=g(W,[["render",os]]),ns={components:{CoreBlur:N,CoreDisplayInfo:S,CoreSettingsRow:v},data(){return{strings:{description:this.$t.__("Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations.",this.$td),apiKey:this.$t.__("API Key",this.$td),mapPreview:this.$t.__("Map Preview",this.$td)},displayInfo:{block:{copy:"",desc:""}}}}},as={class:"aioseo-maps-blur"},rs={class:"aioseo-settings-row"},ps={class:"apikey-description"};function ls(t,l,m,$,s,d){const a=e("base-input"),r=e("core-settings-row"),p=e("core-display-info"),h=e("core-blur");return n(),f("div",as,[o(h,null,{default:i(()=>[c("div",rs,[c("p",ps,y(s.strings.description),1)]),o(r,{name:s.strings.apiKey,align:""},{content:i(()=>[o(a,{size:"medium"})]),_:1},8,["name"]),o(p,{options:s.displayInfo},null,8,["options"]),o(r,{name:s.strings.mapPreview,align:""},{content:i(()=>[A(y(s.strings.description),1)]),_:1},8,["name"])]),_:1})])}const K=g(ns,[["render",ls]]),cs={components:{ActivateCta:V,Blur:K,CoreCard:b},data(){return{strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td)}}}},us={class:"aioseo-local-maps"};function ds(t,l,m,$,s,d){const a=e("blur"),r=e("activate-cta"),p=e("core-card");return n(),f("div",us,[o(p,{slug:"localBusinessMapsApiKey","header-text":s.strings.googleMapsApiKey,noSlide:!0},{default:i(()=>[o(a),o(r)]),_:1},8,["header-text"])])}const _s=g(cs,[["render",ds]]);const ms={components:{Blur:K,RequiredPlans:F,CoreCard:b,CoreProBadge:q,Cta:z},data(){return{features:[this.$t.__("Google Places Support",this.$td),this.$t.__("Google Reviews",this.$td),this.$t.__("Driving Directions",this.$td),this.$t.__("Multiple Locations",this.$td)],strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO Maps are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),ctaDescription:this.$t.__("Show your location to your visitors using an interactive Google Map. Create multiple maps for use with multiple locations.",this.$td)}}}},hs={class:"aioseo-local-maps"};function ys(t,l,m,$,s,d){const a=e("core-pro-badge"),r=e("blur"),p=e("required-plans"),h=e("cta"),M=e("core-card");return n(),f("div",hs,[o(M,{slug:"localBusinessMapsApiKey",noSlide:!0},{header:i(()=>[c("span",null,y(s.strings.googleMapsApiKey),1),o(a)]),default:i(()=>[o(r),o(h,{"cta-link":t.$links.getPricingUrl("local-seo","local-seo-upsell","maps"),"button-text":s.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":s.features},{"header-text":i(()=>[A(y(s.strings.ctaHeader),1)]),description:i(()=>[o(p,{addon:"aioseo-local-business"}),A(" "+y(s.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])]),_:1})])}const gs=g(ms,[["render",ys]]),$s={components:{UpdateCta:H,Blur:K,CoreCard:b},data(){return{strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td)}}}},fs={class:"aioseo-local-maps"};function bs(t,l,m,$,s,d){const a=e("blur"),r=e("update-cta"),p=e("core-card");return n(),f("div",fs,[o(p,{slug:"localBusinessMapsApiKey","header-text":s.strings.googleMapsApiKey,noSlide:!0},{default:i(()=>[o(a),o(r)]),_:1},8,["header-text"])])}const Ms=g($s,[["render",bs]]),As={mixins:[Y],components:{Maps:is,Activate:_s,Lite:gs,Update:Ms},data(){return{addonSlug:"aioseo-local-business"}}},Ks={class:"aioseo-maps"};function ws(t,l,m,$,s,d){const a=e("maps",!0),r=e("activate"),p=e("update"),h=e("lite");return n(),f("div",Ks,[t.shouldShowMain?(n(),u(a,{key:0})):_("",!0),t.shouldShowActivate?(n(),u(r,{key:1})):_("",!0),t.shouldShowUpdate?(n(),u(p,{key:2})):_("",!0),t.shouldShowLite?(n(),u(h,{key:3})):_("",!0)])}const _e=g(As,[["render",ws]]);export{_e as default};