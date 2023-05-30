import"./WpTable.4156f8c9.js";import"./default-i18n.ab92175e.js";import"./constants.145da60f.js";import{_ as y,o as c,c as f,a as r,z as d,k as i,j as g,b as _,q as u,x as m,t as n,F,E as M,l as U,C as v}from"./_plugin-vue_export-helper.a2c961b3.js";import"./index.a915b491.js";import{L as T}from"./License.71d42311.js";import"./SaveChanges.6857467d.js";import{b as I,m as P,a as E}from"./vuex.esm-bundler.2b955043.js";import{c as O}from"./news-sitemap.1ec2e03a.js";import{C as x}from"./index.24cd8e71.js";import{C as z,S as V,a as B}from"./SitemapsPro.b8493bce.js";import{C as D}from"./Index.e14a5090.js";import{C as G}from"./Index.d2a7b6fb.js";import{G as q,a as R}from"./Row.f8e3a585.js";import{S as H}from"./Caret.8213645d.js";import{S as K,a as W}from"./ImageSeo.eb6c0bd9.js";import{S as j}from"./Redirect.16b76b3d.js";import"./helpers.ad3850ca.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.ce215f52.js";import"./cleanForSlug.d1b7ba11.js";import"./isArrayLikeObject.5b92a7d2.js";import"./html.c2b89264.js";import"./_commonjsHelpers.f84db168.js";import"./params.597cd0f5.js";import"./Url.c71d5763.js";import"./Tooltip.876fbafa.js";const Y={},X={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"aioseo-code"},J=r("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"},null,-1),Q=[J];function Z(t,e){return c(),f("svg",X,Q)}const ee=y(Y,[["render",Z]]);const te={components:{CoreAlert:x,CoreFeatureCard:z,CoreModal:D,Cta:G,GridColumn:q,GridRow:R,SvgClose:H,SvgCode:ee,SvgImageSeo:K,SvgLinkAssistant:V,SvgLocalBusiness:W,SvgRedirect:j,SvgSitemapsPro:B},mixins:[T],data(){return{ctaImg:O,showNetworkModal:!1,maybeActivate:!1,maybeDeactivate:!1,search:null,loading:{activateAll:!1,deactivateAll:!1},strings:{videoNewsSitemaps:this.$t.__("Video and News Sitemaps",this.$td),imageSeoOptimization:this.$t.__("Image SEO Optimization",this.$td),localBusinessSeo:this.$t.__("Local Business SEO",this.$td),advancedWooCommerce:this.$t.__("Advanced WooCommerce",this.$td),customTaxonomies:this.$t.__("SEO for Categories, Tags and Custom Taxonomies",this.$td),andMore:this.$t.__("And many more...",this.$td),activateAllFeatures:this.$t.__("Activate All Features",this.$td),deactivateAllFeatures:this.$t.__("Deactivate All Features",this.$td),searchForFeatures:this.$t.__("Search for Features...",this.$td),ctaHeaderText:this.$t.sprintf(this.$t.__("Upgrade %1$s to Pro and Unlock all Features!",this.$td),"AIOSEO"),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock All Features",this.$td),aValidLicenseIsRequired:this.$t.__("A valid license key is required in order to use our addons.",this.$td),enterLicenseKey:this.$t.__("Enter License Key",this.$td),purchaseLicense:this.$t.__("Purchase License",this.$td),areYouSureNetworkChange:this.$t.__("This is a network-wide change.",this.$td),yesProcessNetworkChange:this.$t.__("Yes, process this network change",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td)},descriptions:{aioseoImageSeo:{description:"<p>"+this.$t.__("Globally control the Title attribute and Alt text for images in your content. These attributes are essential for both accessibility and SEO.",this.$td)+"</p>",version:0},aioseoVideoSitemap:{description:"<p>"+this.$t.__("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",this.$td)+"</p>",version:0},aioseoNewsSitemap:{description:"<p>"+this.$t.__("Our Google News Sitemap lets you control which content you submit to Google News and only contains articles that were published in the last 48 hours. In order to submit a News Sitemap to Google, you must have added your site to Google’s Publisher Center and had it approved.",this.$td)+"</p>",version:0},aioseoLocalBusiness:{description:"<p>"+this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td)+"</p>",version:0}}}},computed:{...I(["isUnlicensed"]),...P(["addons"]),upgradeToday(){return this.$t.sprintf(this.$t.__("%1$s %2$s comes with many additional features to help take your site's SEO to the next level!",this.$td),"AIOSEO","Pro")},getAddons(){return this.addons.filter(t=>!this.search||t.name.toLowerCase().includes(this.search.toLowerCase()))},networkChangeMessage(){return this.activated?this.$t.__("Are you sure you want to deactivate these addons across the network?",this.$td):this.$t.__("Are you sure you want to activate these addons across the network?",this.$td)}},methods:{...E(["installPlugins","deactivatePlugins"]),closeNetworkModal(t=!1){if(this.showNetworkModal=!1,t){const e=this.maybeActivate?"actuallyActivateAllFeatures":"actuallyDeactivateAllFeatures";this.maybeActivate=!1,this.maybeDeactivate=!1,this[e]()}},getIconComponent(t){return t.startsWith("svg-")?t:"img"},getIconSrc(t,e){return typeof t=="string"&&t.startsWith("svg-")?null:typeof t=="string"?`data:image/svg+xml;base64,${t}`:e},getAddonDescription(t){const e=t.sku.replace(/-./g,h=>h.toUpperCase()[1]);return this.descriptions[e]&&this.descriptions[e].description&&t.descriptionVersion<=this.descriptions[e].version?this.descriptions[e].description:t.description},activateAllFeatures(){if(!this.$isPro||!this.$aioseo.license.isActive)return window.open(this.$links.utmUrl(this.$aioseo.data.isNetworkAdmin?"network-activate-all-features":"activate-all-features"));if(this.$aioseo.data.isNetworkAdmin){this.showNetworkModal=!0,this.maybeActivate=!0;return}this.actuallyActivateAllFeatures()},actuallyActivateAllFeatures(){this.loading.activateAll=!0;const t=this.addons.filter(e=>!e.requiresUpgrade).map(e=>({plugin:e.basename}));this.installPlugins(t).then(e=>{const h=Object.keys(e.body.completed).map(l=>e.body.completed[l]);this.$refs.addons.forEach(l=>{h.includes(l.feature.basename)&&(l.activated=!0)}),this.loading.activateAll=!1})},deactivateAllFeatures(){if(this.$aioseo.data.isNetworkAdmin){this.showNetworkModal=!0,this.maybeDeactivate=!0;return}this.actuallyDeactivateAllFeatures()},actuallyDeactivateAllFeatures(){this.loading.deactivateAll=!0;const t=this.addons.filter(e=>!e.requiresUpgrade).filter(e=>e.installed).map(e=>({plugin:e.basename}));this.deactivatePlugins(t).then(e=>{const h=Object.keys(e.body.completed).map(l=>e.body.completed[l]);this.$refs.addons.forEach(l=>{h.includes(l.feature.basename)&&(l.activated=!1)}),this.loading.deactivateAll=!1})}}},se={class:"aioseo-feature-manager"},ae={class:"aioseo-feature-manager-header"},ie={key:0,class:"buttons"},oe={class:"button-content"},re={class:"search"},ne={class:"aioseo-feature-manager-addons"},le={class:"buttons"},ce=["innerHTML"],de={class:"large"},ue=["src"],me={class:"aioseo-modal-body"},he={class:"reset-description"};function pe(t,e,h,l,s,o){const p=u("base-button"),k=u("base-input"),w=u("core-alert"),A=u("core-feature-card"),b=u("grid-column"),$=u("grid-row"),C=u("cta"),S=u("svg-close"),L=u("core-modal");return c(),f("div",se,[r("div",ae,[o.getAddons.filter(a=>a.canActivate===!0).length>0?(c(),f("div",ie,[r("div",oe,[d(p,{size:"medium",type:"blue",loading:s.loading.activateAll,onClick:o.activateAllFeatures},{default:i(()=>[m(n(s.strings.activateAllFeatures),1)]),_:1},8,["loading","onClick"]),t.isUnlicensed?_("",!0):(c(),g(p,{key:0,size:"medium",type:"gray",loading:s.loading.deactivateAll,onClick:o.deactivateAllFeatures},{default:i(()=>[m(n(s.strings.deactivateAllFeatures),1)]),_:1},8,["loading","onClick"]))])])):_("",!0),r("div",re,[d(k,{modelValue:s.search,"onUpdate:modelValue":e[0]||(e[0]=a=>s.search=a),size:"medium",placeholder:s.strings.searchForFeatures,"prepend-icon":"search"},null,8,["modelValue","placeholder"])])]),r("div",ne,[t.$isPro&&t.isUnlicensed?(c(),g(w,{key:0,type:"red"},{default:i(()=>[r("strong",null,n(t.yourLicenseIsText),1),m(" "+n(s.strings.aValidLicenseIsRequired)+" ",1),r("div",le,[d(p,{type:"blue",size:"small",tag:"a",href:t.$aioseo.data.isNetworkAdmin?t.$aioseo.urls.aio.networkSettings:t.$aioseo.urls.aio.settings},{default:i(()=>[m(n(s.strings.enterLicenseKey),1)]),_:1},8,["href"]),d(p,{type:"green",size:"small",tag:"a",target:"_blank",href:t.$links.getUpsellUrl("feature-manager-upgrade","no-license-key","pricing")},{default:i(()=>[m(n(s.strings.purchaseLicense),1)]),_:1},8,["href"])])]),_:1})):_("",!0),d($,null,{default:i(()=>[(c(!0),f(F,null,M(o.getAddons,(a,N)=>(c(),g(b,{key:N,sm:"6",lg:"4"},{default:i(()=>[d(A,{ref_for:!0,ref:"addons","can-activate":a.canActivate,"can-manage":t.$allowed(a.capability),feature:a},{title:i(()=>[(c(),g(U(o.getIconComponent(a.icon)),{src:o.getIconSrc(a.icon,a.image)},null,8,["src"])),m(" "+n(a.name),1)]),description:i(()=>[r("div",{innerHTML:o.getAddonDescription(a)},null,8,ce)]),_:2},1032,["can-activate","can-manage","feature"])]),_:2},1024))),128))]),_:1})]),t.isUnlicensed?(c(),g(C,{key:0,class:"feature-manager-upsell",type:2,"button-text":s.strings.ctaButtonText,floating:!1,"cta-link":t.$links.utmUrl("feature-manager","main-cta"),"learn-more-link":t.$links.getUpsellUrl("feature-manager","main-cta","home"),"feature-list":t.$constants.UPSELL_FEATURE_LIST},{"header-text":i(()=>[r("span",de,n(s.strings.ctaHeaderText),1)]),description:i(()=>[m(n(o.upgradeToday),1)]),"featured-image":i(()=>[r("img",{alt:"Purchase AIOSEO Today!",src:t.$getAssetUrl(s.ctaImg)},null,8,ue)]),_:1},8,["button-text","cta-link","learn-more-link","feature-list"])):_("",!0),s.showNetworkModal?(c(),g(L,{key:1,"no-header":"",onClose:e[5]||(e[5]=a=>o.closeNetworkModal(!1))},{body:i(()=>[r("div",me,[r("button",{class:"close",onClick:e[2]||(e[2]=v(a=>o.closeNetworkModal(!1),["stop"]))},[d(S,{onClick:e[1]||(e[1]=v(a=>o.closeNetworkModal(!1),["stop"]))})]),r("h3",null,n(s.strings.areYouSureNetworkChange),1),r("div",he,n(o.networkChangeMessage),1),d(p,{type:"blue",size:"medium",onClick:e[3]||(e[3]=a=>o.closeNetworkModal(!0))},{default:i(()=>[m(n(s.strings.yesProcessNetworkChange),1)]),_:1}),d(p,{type:"gray",size:"medium",onClick:e[4]||(e[4]=a=>o.closeNetworkModal(!1))},{default:i(()=>[m(n(s.strings.noChangedMind),1)]),_:1})])]),_:1})):_("",!0)])}const Ge=y(te,[["render",pe]]);export{Ge as default};
