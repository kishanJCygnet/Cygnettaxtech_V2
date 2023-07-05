import{a as f,r as S,u as v,d as c}from"./links.96ffe3f0.js";import{a as n}from"./addons.82a86b55.js";import{C as _}from"./index.57ad6f19.js";import{C as A}from"./Index.7537b614.js";import{r as u,o as g,d as h,w as o,B as r,x as s,b,g as x}from"./vue.runtime.esm-bundler.f433d23f.js";import{_ as y}from"./_plugin-vue_export-helper.3febc96a.js";const k={setup(){return{addonsStore:f(),pluginsStore:S(),rootStore:v()}},emits:["addon-activated"],components:{CoreAlert:_,Cta:A},props:{addonSlug:{type:String,required:!0},featureList:{type:Array,default:()=>[]},postActivationPromises:{type:Array,default:()=>[]},ctaButtonText:String,ctaHeader:String,ctaDescription:String,learnMoreText:String,learnMoreLink:String,alignTop:Boolean},data(){return{addons:n,strings:{activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td)},failed:!1,activationLoading:!1}},methods:{activateAddon(){this.failed=!1,this.activationLoading=!0;const e=n.getAddon(this.addonSlug);this.pluginsStore.installPlugins([{plugin:e.basename}]).then(d=>{if(d.body.failed.length){this.activationLoading=!1,this.failed=!0;return}const t=this.postActivationPromises.map(a=>a());Promise.all(t).then(()=>{this.activationLoading=!1,e.hasMinimumVersion=!0,e.isActive=!0,this.addonsStore.updateAddon(e),this.$emit("addon-activated",e)})}).catch(()=>{this.activationLoading=!1})}}};function L(e,d,t,a,i,m){const l=u("core-alert"),p=u("cta");return g(),h(p,{"cta-button-visible":i.addons.userCanInstallOrActivate(t.addonSlug),"cta-button-visible-warning":i.strings.permissionWarning,"cta-link":`${a.rootStore.aioseo.urls.aio.featureManager}&aioseo-activate=${t.addonSlug}`,"cta-button-action":"","cta-button-loading":i.activationLoading,onCtaButtonClick:m.activateAddon,"same-tab":"","button-text":t.ctaButtonText,"learn-more-link":t.learnMoreLink,"feature-list":t.featureList,"align-top":t.alignTop},{"header-text":o(()=>[r(s(t.ctaHeader),1)]),description:o(()=>[i.failed?(g(),h(l,{key:0,type:"red"},{default:o(()=>[r(s(i.strings.activateError),1)]),_:1})):b("",!0),r(" "+s(t.ctaDescription),1)]),"learn-more-text":o(()=>[r(s(t.learnMoreText),1)]),_:1},8,["cta-button-visible","cta-button-visible-warning","cta-link","cta-button-loading","onCtaButtonClick","button-text","learn-more-link","feature-list","align-top"])}const C=y(k,[["render",L]]),M={setup(){return{addonsStore:f(),pluginsStore:S(),rootStore:v()}},emits:["addon-activated"],components:{CoreAlert:_,Cta:A},props:{addonSlug:{type:String,required:!0},featureList:{type:Array,default:()=>[]},postActivationPromises:{type:Array,default:()=>[]},addonName:String,installedVersion:String,minimumVersion:String,ctaButtonText:String,ctaHeader:String,ctaDescription:String,learnMoreText:String,learnMoreLink:String,alignTop:Boolean},data(){return{addons:n,strings:{activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td),updateRequired:this.$t.sprintf(this.$t.__("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.",this.$td),"AIOSEO","Pro",n.getAddon(this.addonSlug).installedVersion,n.getAddon(this.addonSlug).name,n.getAddon(this.addonSlug).installedVersion)},failed:!1,activationLoading:!1}},methods:{upgradeAddon(){this.failed=!1,this.activationLoading=!0;const e=n.getAddon(this.addonSlug);this.pluginsStore.upgradePlugins([{plugin:e.sku}]).then(d=>{if(d.body.failed.length){this.activationLoading=!1,this.failed=!0;return}const t=this.postActivationPromises.map(a=>a());Promise.all(t).then(()=>{const a=d.body.completed[e.sku];this.activationLoading=!1,e.hasMinimumVersion=!0,e.isActive=!0,e.installedVersion=a.installedVersion,this.addonsStore.updateAddon(e),this.$emit("addon-activated",e)})}).catch(()=>{this.activationLoading=!1})}}};function P(e,d,t,a,i,m){const l=u("core-alert"),p=u("cta");return g(),h(p,{"cta-button-visible":i.addons.userCanUpdate(t.addonSlug),"cta-button-visible-warning":i.strings.permissionWarning,"cta-link":`${a.rootStore.aioseo.urls.aio.featureManager}&aioseo-activate=${t.addonSlug}`,"cta-button-action":"","cta-button-loading":i.activationLoading,onCtaButtonClick:m.upgradeAddon,"same-tab":"","button-text":t.ctaButtonText,"learn-more-link":t.learnMoreLink,"feature-list":t.featureList,"align-top":t.alignTop},{"header-text":o(()=>[r(s(t.ctaHeader),1)]),description:o(()=>[x(l,{type:"yellow"},{default:o(()=>[r(s(i.strings.updateRequired),1)]),_:1}),i.failed?(g(),h(l,{key:0,type:"red"},{default:o(()=>[r(s(i.strings.activateError),1)]),_:1})):b("",!0),r(" "+s(t.ctaDescription),1)]),"learn-more-text":o(()=>[r(s(t.learnMoreText),1)]),_:1},8,["cta-button-visible","cta-button-visible-warning","cta-link","cta-button-loading","onCtaButtonClick","button-text","learn-more-link","feature-list","align-top"])}const w=y(M,[["render",P]]),E={computed:{ctaComponent(){return this.shouldShowUpdate?w:C},shouldShowMain(){return!c().isUnlicensed&&n.isActive(this.addonSlug)&&!n.requiresUpgrade(this.addonSlug)&&n.hasMinimumVersion(this.addonSlug)},shouldShowActivate(){return!c().isUnlicensed&&!n.isActive(this.addonSlug)&&n.canActivate(this.addonSlug)&&!n.requiresUpgrade(this.addonSlug)&&(n.hasMinimumVersion(this.addonSlug)||!n.isInstalled(this.addonSlug))},shouldShowUpdate(){return!c().isUnlicensed&&n.isInstalled(this.addonSlug)&&!n.requiresUpgrade(this.addonSlug)&&!n.hasMinimumVersion(this.addonSlug)},shouldShowLite(){return c().isUnlicensed||n.requiresUpgrade(this.addonSlug)}}};export{E as A};
