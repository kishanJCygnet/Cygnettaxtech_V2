import{m as g,b as $}from"./vuex.esm-bundler.97e30e47.js";import{C as p}from"./index.d59f905b.js";import{C as m}from"./Index.a6f4141a.js";import{_,r,o as l,h as c,w as n,e as s,t as i,a as f,d as y}from"./_plugin-vue_export-helper.49ea0e68.js";const v={components:{CoreAlert:p,Cta:m},props:{alignTop:{type:Boolean,default(){return!1}}},data(){return{failed:!1,activationLoading:!1,strings:{locationSeoHeader:this.$t.__("Enable Local SEO on your Site",this.$tdPro),ctaDescription:this.$t.__("The Local SEO module is a premium feature that enables businesses to tell Google about their business, including their business name, address and phone number, opening hours and price range.  This information may be displayed as a Knowledge Graph card or business carousel in the search engine sidebar.",this.$tdPro),ctaButtonText:this.$t.__("Activate Local SEO",this.$tdPro),learnMoreText:this.$t.__("Learn more about Local SEO",this.$tdPro),showOpeningHours:this.$t.__("Show Opening Hours",this.$td),selectTimeZoneCTA:this.$t.__("Select your timezone",this.$td),googleMaps:this.$t.__("Google Maps",this.$td),businessType:this.$t.__("Type",this.$td),businessContact:this.$t.__("Contact Info",this.$td),paymentInfo:this.$t.__("Payment Info",this.$td),image:this.$t.__("Image",this.$td),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td)}}},methods:{...g(["installPlugins"]),...$(["updateAddon"]),activateAddon(){this.failed=!1,this.activationLoading=!0;const e=this.$addons.getAddon("aioseo-local-business");this.installPlugins([{plugin:e.basename}]).then(o=>{if(o.body.failed.length){this.activationLoading=!1,this.failed=!0;return}window.location.reload()}).catch(()=>{this.activationLoading=!1})}}};function T(e,o,u,b,t,d){const a=r("core-alert"),h=r("cta");return l(),c(h,{"cta-button-visible":e.$addons.userCanInstallOrActivate("aioseo-local-business"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":e.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-local-business","cta-button-action":"","cta-button-loading":t.activationLoading,onCtaButtonClick:d.activateAddon,"same-tab":"","button-text":t.strings.ctaButtonText,"learn-more-link":e.$links.getDocUrl("localSeo"),"feature-list":[t.strings.businessType,t.strings.businessContact,t.strings.paymentInfo,t.strings.image,t.strings.showOpeningHours,t.strings.googleMaps],"align-top":u.alignTop},{"header-text":n(()=>[s(i(t.strings.locationSeoHeader),1)]),description:n(()=>[t.failed?(l(),c(a,{key:0,type:"red"},{default:n(()=>[s(i(t.strings.activateError),1)]),_:1})):f("",!0),s(" "+i(t.strings.ctaDescription),1)]),"learn-more-text":n(()=>[s(i(t.strings.learnMoreText),1)]),_:1},8,["cta-button-visible","cta-button-visible-warning","cta-link","cta-button-loading","onCtaButtonClick","button-text","learn-more-link","feature-list","align-top"])}const P=_(v,[["render",T]]),C={components:{CoreAlert:p,Cta:m},props:{alignTop:{type:Boolean,default(){return!1}}},data(){return{failed:!1,activationLoading:!1,strings:{locationSeoHeader:this.$t.__("Enable Local SEO on your Site",this.$tdPro),ctaDescription:this.$t.__("The Local SEO module is a premium feature that enables businesses to tell Google about their business, including their business name, address and phone number, opening hours and price range.  This information may be displayed as a Knowledge Graph card or business carousel in the search engine sidebar.",this.$tdPro),ctaButtonText:this.$t.__("Update Local SEO",this.$tdPro),learnMoreText:this.$t.__("Learn more about Local SEO",this.$tdPro),showOpeningHours:this.$t.__("Show Opening Hours",this.$td),selectTimeZoneCTA:this.$t.__("Select your timezone",this.$td),googleMaps:this.$t.__("Google Maps",this.$td),businessType:this.$t.__("Type",this.$td),businessContact:this.$t.__("Contact Info",this.$td),paymentInfo:this.$t.__("Payment Info",this.$td),image:this.$t.__("Image",this.$td),permissionWarning:this.$t.__("You currently don't have permission to update this addon. Please ask a site administrator to update.",this.$td),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),updateRequired:this.$t.sprintf(this.$t.__("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.",this.$td),"AIOSEO","Pro",this.$addons.getAddon("aioseo-local-business").minimumVersion,"Local SEO",this.$addons.getAddon("aioseo-local-business").installedVersion)}}},methods:{...g(["upgradePlugins"]),activateAddon(){this.failed=!1,this.activationLoading=!0;const e=this.$addons.getAddon("aioseo-local-business");this.upgradePlugins([{plugin:e.sku}]).then(o=>{if(o.body.failed.length){this.activationLoading=!1,this.failed=!0;return}window.location.reload()}).catch(()=>{this.activationLoading=!1})}}};function A(e,o,u,b,t,d){const a=r("core-alert"),h=r("cta");return l(),c(h,{"cta-button-visible":e.$addons.userCanUpdate("aioseo-local-business"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":e.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-local-business","cta-button-action":"","cta-button-loading":t.activationLoading,onCtaButtonClick:d.activateAddon,"same-tab":"","button-text":t.strings.ctaButtonText,"learn-more-link":e.$links.getDocUrl("localSeo"),"feature-list":[t.strings.businessType,t.strings.businessContact,t.strings.paymentInfo,t.strings.image,t.strings.showOpeningHours,t.strings.googleMaps],"align-top":u.alignTop},{"header-text":n(()=>[s(i(t.strings.locationSeoHeader),1)]),description:n(()=>[y(a,{type:"yellow"},{default:n(()=>[s(i(t.strings.updateRequired),1)]),_:1}),t.failed?(l(),c(a,{key:0,type:"red"},{default:n(()=>[s(i(t.strings.activateError),1)]),_:1})):f("",!0),s(" "+i(t.strings.ctaDescription),1)]),"learn-more-text":n(()=>[s(i(t.strings.learnMoreText),1)]),_:1},8,["cta-button-visible","cta-button-visible-warning","cta-link","cta-button-loading","onCtaButtonClick","button-text","learn-more-link","feature-list","align-top"])}const x=_(C,[["render",A]]);export{P as A,x as U};