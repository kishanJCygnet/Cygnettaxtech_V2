import{e as A,o as V}from"./links.64a86a6c.js";import"./default-i18n.cc9dbff0.js";import{u as N,W as B}from"./Wizard.e727bcf1.js";import{r as t,c as f,g as s,w as r,o as p,a as u,B as h,x as o,F as O,C as $,d as F,b as z,n as E}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_ as L}from"./_plugin-vue_export-helper.0e38850e.js";import"./index.61edcc6f.js";import"./Caret.08be6d0c.js";import{G as T,a as I}from"./Row.53f210bf.js";/* empty css                                              */import"./constants.c7984802.js";import{B as U}from"./Checkbox.cfe07718.js";import{C as q}from"./ProBadge.8bd2315e.js";import{W as R,a as G,b as D}from"./Header.0ee67430.js";import{W as M,_ as j}from"./Steps.85a30d71.js";import"./isArrayLikeObject.2110cf7d.js";import"./addons.4e5c0f68.js";import"./upperFirst.57f3248e.js";import"./_stringToArray.4de3b1f3.js";import"./toString.6606707f.js";import"./Index.c799d0ed.js";/* empty css                                              *//* empty css                                            */import"./Checkmark.ef90c7b9.js";import"./Logo.289ab331.js";const H={setup(){const{strings:e}=N();return{setupWizardStore:A(),composableStrings:e}},components:{BaseCheckbox:U,CoreProBadge:q,GridColumn:T,GridRow:I,WizardBody:R,WizardCloseAndExit:M,WizardContainer:G,WizardHeader:D,WizardSteps:j},mixins:[B],data(){return{loading:!1,stage:"features",strings:V(this.composableStrings,{whichFeatures:this.$t.__("Which SEO features do you want to enable?",this.$td),description:this.$t.__("We have already selected our recommended features based on your site category, but you can use the following features to fine-tune your site.",this.$td)})}},computed:{showPluginsAll(){return(this.setupWizardStore.features.includes("analytics")||this.setupWizardStore.features.includes("conversion-tools"))&&(this.setupWizardStore.features.includes("image-seo")||this.setupWizardStore.features.includes("news-sitemap")||this.setupWizardStore.features.includes("video-sitemap")||this.setupWizardStore.features.includes("local-seo")||this.setupWizardStore.features.includes("redirects")||this.setupWizardStore.features.includes("index-now")||this.setupWizardStore.features.includes("link-assistant")||this.setupWizardStore.features.includes("rest-api"))},showPluginsAddons(){return(!this.setupWizardStore.features.includes("analytics")||!this.setupWizardStore.features.includes("conversion-tools"))&&(this.setupWizardStore.features.includes("image-seo")||this.setupWizardStore.features.includes("news-sitemap")||this.setupWizardStore.features.includes("video-sitemap")||this.setupWizardStore.features.includes("local-seo")||this.setupWizardStore.features.includes("redirects")||this.setupWizardStore.features.includes("index-now")||this.setupWizardStore.features.includes("link-assistant")||this.setupWizardStore.features.includes("rest-api"))},showPluginsOnly(){return(this.setupWizardStore.features.includes("analytics")||this.setupWizardStore.features.includes("conversion-tools"))&&!this.setupWizardStore.features.includes("image-seo")&&!this.setupWizardStore.features.includes("news-sitemap")&&!this.setupWizardStore.features.includes("video-sitemap")&&!this.setupWizardStore.features.includes("local-seo")&&!this.setupWizardStore.features.includes("redirects")&&!this.setupWizardStore.features.includes("index-now")&&!this.setupWizardStore.features.includes("link-assistant")&&!this.setupWizardStore.features.includes("rest-api")},getPluginsText(){return this.showPluginsOnly?this.$t.sprintf(this.$t.__("The following plugins will be installed: %1$s",this.$td),this.getPluginNames):this.showPluginsAddons?this.$t.sprintf(this.$t.__("The following %1$s addons will be installed: %2$s",this.$td),"AIOSEO",this.getPluginNames):this.showPluginsAll?this.$t.sprintf(this.$t.__("The following plugins and %1$s addons will be installed: %2$s",this.$td),"AIOSEO",this.getPluginNames):null},getPluginNames(){const e=[];return this.setupWizardStore.features.includes("analytics")&&e.push("MonsterInsights Free"),this.setupWizardStore.features.includes("conversion-tools")&&e.push("OptinMonster"),this.setupWizardStore.features.includes("image-seo")&&e.push("Image SEO"),this.setupWizardStore.features.includes("local-seo")&&e.push("Local Business SEO"),this.setupWizardStore.features.includes("video-sitemap")&&e.push("Video Sitemap"),this.setupWizardStore.features.includes("news-sitemap")&&e.push("News Sitemap"),this.setupWizardStore.features.includes("redirects")&&e.push("Redirects"),this.setupWizardStore.features.includes("index-now")&&e.push("Index Now"),this.setupWizardStore.features.includes("link-assistant")&&e.push("Link Assistant"),this.setupWizardStore.features.includes("rest-api")&&e.push("REST API"),e.join(", ")},getFeatures(){return this.features.filter(e=>e.value!=="breadcrumbs").map(e=>(e.selected=!1,this.setupWizardStore.features.includes(e.value)&&(e.selected=!0),e))}},methods:{preventUncheck(e,l){l.required&&(e.preventDefault(),e.stopPropagation())},getValue(e){return this.setupWizardStore.features.includes(e.value)},updateValue(e,l){const d=[...this.setupWizardStore.features];if(e){d.push(l.value),this.setupWizardStore.features=d;return}const c=d.findIndex(a=>a===l.value);c!==-1&&d.splice(c,1),this.setupWizardStore.features=d},saveAndContinue(){this.loading=!0,this.setupWizardStore.saveWizard("features").then(()=>{this.$router.push(this.setupWizardStore.getNextLink)})}}},J={class:"aioseo-wizard-features"},K={class:"header"},Q={class:"description"},X={class:"settings-name"},Y={class:"name small-margin"},Z={class:"aioseo-description-text"},ee={class:"go-back"},se=u("div",{class:"spacer"},null,-1),te={key:0,class:"plugins"};function ie(e,l,d,c,a,n){const S=t("wizard-header"),W=t("wizard-steps"),w=t("core-pro-badge"),_=t("grid-column"),v=t("base-checkbox"),y=t("grid-row"),g=t("router-link"),x=t("base-button"),b=t("wizard-body"),k=t("wizard-close-and-exit"),P=t("wizard-container");return p(),f("div",J,[s(S),s(P,null,{default:r(()=>[s(b,null,{footer:r(()=>[u("div",ee,[s(g,{to:c.setupWizardStore.getPrevLink,class:"no-underline"},{default:r(()=>[h("←")]),_:1},8,["to"]),h("   "),s(g,{to:c.setupWizardStore.getPrevLink},{default:r(()=>[h(o(a.strings.goBack),1)]),_:1},8,["to"])]),se,s(x,{type:"blue",loading:a.loading,onClick:n.saveAndContinue},{default:r(()=>[h(o(a.strings.saveAndContinue)+" →",1)]),_:1},8,["loading","onClick"])]),default:r(()=>[s(W),u("div",K,o(a.strings.whichFeatures),1),u("div",Q,o(a.strings.description),1),(p(!0),f(O,null,$(n.getFeatures,(i,C)=>(p(),f("div",{key:C,class:"feature-grid small-padding medium-margin"},[s(y,null,{default:r(()=>[s(_,{xs:"11"},{default:r(()=>[u("div",X,[u("div",Y,[h(o(i.name)+" ",1),e.needsUpsell(i)?(p(),F(w,{key:0})):z("",!0)]),u("div",Z,o(i.description),1)])]),_:2},1024),s(_,{xs:"1"},{default:r(()=>[s(v,{round:"",class:E({"no-clicks":i.required}),type:i.required?"green":"blue",modelValue:i.required?!0:n.getValue(i),"onUpdate:modelValue":m=>n.updateValue(m,i),onClick:m=>n.preventUncheck(m,i)},null,8,["class","type","modelValue","onUpdate:modelValue","onClick"])]),_:2},1024)]),_:2},1024)]))),128))]),_:1}),n.getPluginsText?(p(),f("div",te,o(n.getPluginsText),1)):z("",!0),s(k)]),_:1})])}const Ce=L(H,[["render",ie]]);export{Ce as default};
