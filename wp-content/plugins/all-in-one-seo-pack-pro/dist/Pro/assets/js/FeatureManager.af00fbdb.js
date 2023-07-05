import{a as F,d as M,r as U,u as x}from"./links.96ffe3f0.js";import{a as T}from"./allowed.982f0186.js";import{o as I}from"./isArrayLikeObject.7c69e632.js";import{C as O}from"./index.57ad6f19.js";import{C as P}from"./Index.7537b614.js";import{o as c,c as f,a as n,r as d,g as u,w as r,d as g,b as _,B as m,x as l,F as E,C as B,A as V,f as v}from"./vue.runtime.esm-bundler.f433d23f.js";import{_ as y}from"./_plugin-vue_export-helper.3febc96a.js";import"./default-i18n.41786823.js";import"./constants.008ef172.js";import{L as z}from"./License.31d7ecee.js";import{C as D}from"./Index.af046b6e.js";import{S as G}from"./Caret.b5c2e4ec.js";import{c as R}from"./news-sitemap.1ec2e03a.js";import{C as q,S as H,a as K}from"./SitemapsPro.a5869daf.js";import{G as W,a as Y}from"./Row.e69aefbc.js";import{S as j,a as X}from"./ImageSeo.2f69faae.js";import{S as J}from"./Redirect.c49946c0.js";import"./deburr.40d916cf.js";import"./toString.9a2ec6a1.js";/* empty css                                              *//* empty css                                              */import"./addons.82a86b55.js";import"./upperFirst.6e4a3e83.js";import"./_stringToArray.4de3b1f3.js";import"./params.597cd0f5.js";/* empty css                                            */import"./Url.5dc89226.js";import"./Tooltip.6a8793f6.js";const Q={},Z={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"aioseo-code"},ee=n("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"},null,-1),te=[ee];function se(t,e){return c(),f("svg",Z,te)}const oe=y(Q,[["render",se]]);const ae={setup(){return{addonsStore:F(),licenseStore:M(),pluginsStore:U(),rootStore:x()}},components:{CoreAlert:O,CoreFeatureCard:q,CoreModal:D,Cta:P,GridColumn:W,GridRow:Y,SvgClose:G,SvgCode:oe,SvgImageSeo:j,SvgLinkAssistant:H,SvgLocalBusiness:X,SvgRedirect:J,SvgSitemapsPro:K},mixins:[z],data(){return{allowed:T,ctaImg:R,showNetworkModal:!1,maybeActivate:!1,maybeDeactivate:!1,search:null,loading:{activateAll:!1,deactivateAll:!1},strings:{videoNewsSitemaps:this.$t.__("Video and News Sitemaps",this.$td),imageSeoOptimization:this.$t.__("Image SEO Optimization",this.$td),localBusinessSeo:this.$t.__("Local Business SEO",this.$td),advancedWooCommerce:this.$t.__("Advanced WooCommerce",this.$td),customTaxonomies:this.$t.__("SEO for Categories, Tags and Custom Taxonomies",this.$td),andMore:this.$t.__("And many more...",this.$td),activateAllFeatures:this.$t.__("Activate All Features",this.$td),deactivateAllFeatures:this.$t.__("Deactivate All Features",this.$td),searchForFeatures:this.$t.__("Search for Features...",this.$td),ctaHeaderText:this.$t.sprintf(this.$t.__("Upgrade %1$s to Pro and Unlock all Features!",this.$td),"AIOSEO"),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock All Features",this.$td),aValidLicenseIsRequired:this.$t.__("A valid license key is required in order to use our addons.",this.$td),enterLicenseKey:this.$t.__("Enter License Key",this.$td),purchaseLicense:this.$t.__("Purchase License",this.$td),areYouSureNetworkChange:this.$t.__("This is a network-wide change.",this.$td),yesProcessNetworkChange:this.$t.__("Yes, process this network change",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td)},descriptions:{aioseoImageSeo:{description:"<p>"+this.$t.__("Globally control the Title attribute and Alt text for images in your content. These attributes are essential for both accessibility and SEO.",this.$td)+"</p>",version:0},aioseoVideoSitemap:{description:"<p>"+this.$t.__("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",this.$td)+"</p>",version:0},aioseoNewsSitemap:{description:"<p>"+this.$t.__("Our Google News Sitemap lets you control which content you submit to Google News and only contains articles that were published in the last 48 hours. In order to submit a News Sitemap to Google, you must have added your site to Google’s Publisher Center and had it approved.",this.$td)+"</p>",version:0},aioseoLocalBusiness:{description:"<p>"+this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td)+"</p>",version:0}}}},computed:{upgradeToday(){return this.$t.sprintf(this.$t.__("%1$s %2$s comes with many additional features to help take your site's SEO to the next level!",this.$td),"AIOSEO","Pro")},getAddons(){return this.addonsStore.addons.filter(t=>!this.search||t.name.toLowerCase().includes(this.search.toLowerCase()))},networkChangeMessage(){return this.activated?this.$t.__("Are you sure you want to deactivate these addons across the network?",this.$td):this.$t.__("Are you sure you want to activate these addons across the network?",this.$td)}},methods:{getAssetUrl:I,closeNetworkModal(t=!1){if(this.showNetworkModal=!1,t){const e=this.maybeActivate?"actuallyActivateAllFeatures":"actuallyDeactivateAllFeatures";this.maybeActivate=!1,this.maybeDeactivate=!1,this[e]()}},getIconComponent(t){return t.startsWith("svg-")?t:"img"},getIconSrc(t,e){return typeof t=="string"&&t.startsWith("svg-")?null:typeof t=="string"?`data:image/svg+xml;base64,${t}`:e},getAddonDescription(t){const e=t.sku.replace(/-./g,h=>h.toUpperCase()[1]);return this.descriptions[e]&&this.descriptions[e].description&&t.descriptionVersion<=this.descriptions[e].version?this.descriptions[e].description:t.description},activateAllFeatures(){if(!this.$isPro||!this.licenseStore.license.isActive)return window.open(this.$links.utmUrl(this.rootStore.aioseo.data.isNetworkAdmin?"network-activate-all-features":"activate-all-features"));if(this.rootStore.aioseo.data.isNetworkAdmin){this.showNetworkModal=!0,this.maybeActivate=!0;return}this.actuallyActivateAllFeatures()},actuallyActivateAllFeatures(){this.loading.activateAll=!0;const t=this.addonsStore.addons.filter(e=>!e.requiresUpgrade).map(e=>({plugin:e.basename}));this.pluginsStore.installPlugins(t).then(e=>{const h=Object.keys(e.body.completed).map(a=>e.body.completed[a]);this.$refs.addons.forEach(a=>{h.includes(a.feature.basename)&&(a.activated=!0)}),this.loading.activateAll=!1})},deactivateAllFeatures(){if(this.rootStore.aioseo.data.isNetworkAdmin){this.showNetworkModal=!0,this.maybeDeactivate=!0;return}this.actuallyDeactivateAllFeatures()},actuallyDeactivateAllFeatures(){this.loading.deactivateAll=!0;const t=this.addonsStore.addons.filter(e=>!e.requiresUpgrade).filter(e=>e.installed).map(e=>({plugin:e.basename}));this.pluginsStore.deactivatePlugins(t).then(e=>{const h=Object.keys(e.body.completed).map(a=>e.body.completed[a]);this.$refs.addons.forEach(a=>{h.includes(a.feature.basename)&&(a.activated=!1)}),this.loading.deactivateAll=!1})}}},ie={class:"aioseo-feature-manager"},re={class:"aioseo-feature-manager-header"},ne={key:0,class:"buttons"},le={class:"button-content"},ce={class:"search"},de={class:"aioseo-feature-manager-addons"},ue={class:"buttons"},me=["innerHTML"],he={class:"large"},pe=["src"],ge={class:"aioseo-modal-body"},_e={class:"reset-description"};function fe(t,e,h,a,s,i){const p=d("base-button"),S=d("base-input"),k=d("core-alert"),w=d("core-feature-card"),A=d("grid-column"),b=d("grid-row"),C=d("cta"),$=d("svg-close"),L=d("core-modal");return c(),f("div",ie,[n("div",re,[i.getAddons.filter(o=>o.canActivate===!0).length>0?(c(),f("div",ne,[n("div",le,[u(p,{size:"medium",type:"blue",loading:s.loading.activateAll,onClick:i.activateAllFeatures},{default:r(()=>[m(l(s.strings.activateAllFeatures),1)]),_:1},8,["loading","onClick"]),a.licenseStore.isUnlicensed?_("",!0):(c(),g(p,{key:0,size:"medium",type:"gray",loading:s.loading.deactivateAll,onClick:i.deactivateAllFeatures},{default:r(()=>[m(l(s.strings.deactivateAllFeatures),1)]),_:1},8,["loading","onClick"]))])])):_("",!0),n("div",ce,[u(S,{modelValue:s.search,"onUpdate:modelValue":e[0]||(e[0]=o=>s.search=o),size:"medium",placeholder:s.strings.searchForFeatures,"prepend-icon":"search"},null,8,["modelValue","placeholder"])])]),n("div",de,[t.$isPro&&a.licenseStore.isUnlicensed?(c(),g(k,{key:0,type:"red"},{default:r(()=>[n("strong",null,l(t.yourLicenseIsText),1),m(" "+l(s.strings.aValidLicenseIsRequired)+" ",1),n("div",ue,[u(p,{type:"blue",size:"small",tag:"a",href:a.rootStore.aioseo.data.isNetworkAdmin?a.rootStore.aioseo.urls.aio.networkSettings:a.rootStore.aioseo.urls.aio.settings},{default:r(()=>[m(l(s.strings.enterLicenseKey),1)]),_:1},8,["href"]),u(p,{type:"green",size:"small",tag:"a",target:"_blank",href:t.$links.getUpsellUrl("feature-manager-upgrade","no-license-key","pricing")},{default:r(()=>[m(l(s.strings.purchaseLicense),1)]),_:1},8,["href"])])]),_:1})):_("",!0),u(b,null,{default:r(()=>[(c(!0),f(E,null,B(i.getAddons,(o,N)=>(c(),g(A,{key:N,sm:"6",lg:"4"},{default:r(()=>[u(w,{ref_for:!0,ref:"addons","can-activate":o.canActivate,"can-manage":s.allowed(o.capability),feature:o},{title:r(()=>[(c(),g(V(i.getIconComponent(o.icon)),{src:i.getIconSrc(o.icon,o.image)},null,8,["src"])),m(" "+l(o.name),1)]),description:r(()=>[n("div",{innerHTML:i.getAddonDescription(o)},null,8,me)]),_:2},1032,["can-activate","can-manage","feature"])]),_:2},1024))),128))]),_:1})]),a.licenseStore.isUnlicensed?(c(),g(C,{key:0,class:"feature-manager-upsell",type:2,"button-text":s.strings.ctaButtonText,floating:!1,"cta-link":t.$links.utmUrl("feature-manager","main-cta"),"learn-more-link":t.$links.getUpsellUrl("feature-manager","main-cta","home"),"feature-list":t.$constants.UPSELL_FEATURE_LIST},{"header-text":r(()=>[n("span",he,l(s.strings.ctaHeaderText),1)]),description:r(()=>[m(l(i.upgradeToday),1)]),"featured-image":r(()=>[n("img",{alt:"Purchase AIOSEO Today!",src:i.getAssetUrl(s.ctaImg)},null,8,pe)]),_:1},8,["button-text","cta-link","learn-more-link","feature-list"])):_("",!0),s.showNetworkModal?(c(),g(L,{key:1,"no-header":"",onClose:e[5]||(e[5]=o=>i.closeNetworkModal(!1))},{body:r(()=>[n("div",ge,[n("button",{class:"close",onClick:e[2]||(e[2]=v(o=>i.closeNetworkModal(!1),["stop"]))},[u($,{onClick:e[1]||(e[1]=v(o=>i.closeNetworkModal(!1),["stop"]))})]),n("h3",null,l(s.strings.areYouSureNetworkChange),1),n("div",_e,l(i.networkChangeMessage),1),u(p,{type:"blue",size:"medium",onClick:e[3]||(e[3]=o=>i.closeNetworkModal(!0))},{default:r(()=>[m(l(s.strings.yesProcessNetworkChange),1)]),_:1}),u(p,{type:"gray",size:"medium",onClick:e[4]||(e[4]=o=>i.closeNetworkModal(!1))},{default:r(()=>[m(l(s.strings.noChangedMind),1)]),_:1})])]),_:1})):_("",!0)])}const Ke=y(ae,[["render",fe]]);export{Ke as default};
