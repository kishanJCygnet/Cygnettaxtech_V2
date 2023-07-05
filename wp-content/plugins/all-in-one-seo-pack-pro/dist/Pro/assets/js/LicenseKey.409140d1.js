import{p as T,d as W,b as P,u as K,e as A,o as E}from"./links.96ffe3f0.js";import{p as O}from"./popup.b60b699f.js";import"./default-i18n.41786823.js";import{u as B,W as H}from"./Wizard.5982d907.js";import{C as M}from"./index.57ad6f19.js";import{r as s,c as u,g as o,w as i,o as a,a as r,B as l,x as d,b as h,F as N,C as U,d as f}from"./vue.runtime.esm-bundler.f433d23f.js";import"./Caret.b5c2e4ec.js";import{_ as V}from"./_plugin-vue_export-helper.3febc96a.js";import{G,a as I}from"./Row.e69aefbc.js";/* empty css                                              */import"./constants.008ef172.js";import{S as D}from"./Checkmark.74f4bcd8.js";import{W as F,a as R,b as Y}from"./Header.43ee6895.js";import{W as j,_ as q}from"./Steps.c52db168.js";import"./isArrayLikeObject.7c69e632.js";import"./params.597cd0f5.js";import"./addons.82a86b55.js";import"./upperFirst.6e4a3e83.js";import"./_stringToArray.4de3b1f3.js";import"./toString.9a2ec6a1.js";import"./Index.af046b6e.js";/* empty css                                              *//* empty css                                            */import"./Logo.94778da1.js";const J={setup(){const{strings:e}=B();return{connectStore:T(),licenseStore:W(),optionsStore:P(),rootStore:K(),setupWizardStore:A(),composableStrings:e}},components:{CoreAlert:M,GridColumn:G,GridRow:I,SvgCheckmark:D,WizardBody:F,WizardCloseAndExit:j,WizardContainer:R,WizardHeader:Y,WizardSteps:q},mixins:[H],data(){return{error:null,loading:!1,stage:"license-key",localLicenseKey:null,strings:E(this.composableStrings,{enterYourLicenseKey:this.$t.sprintf(this.$t.__("Enter your %1$s License Key",this.$td),"AIOSEO"),boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO","Lite"),purchasedBoldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO","Pro"),linkText:this.$t.sprintf(this.$t.__("upgrade to %1$s",this.$td),"Pro"),placeholder:this.$t.__("Paste your license key here",this.$td),connect:this.$t.__("Connect",this.$td)})}},watch:{localLicenseKey(e){this.setupWizardStore.licenseKey=e}},computed:{noLicenseNeeded(){return this.$t.sprintf(this.$t.__("You're using %1$s - no license needed. Enjoy!",this.$td)+" 🙂",this.strings.boldText)},link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank">%2$s</a></strong>',this.$links.utmUrl("general-settings","license-box"),this.strings.linkText)},tooltipText(){return this.$isPro?this.$t.__("To unlock the selected features, please enter your license key below.",this.$td):this.$t.sprintf(this.$t.__("To unlock the selected features, please %1$s and enter your license key below.",this.$td),this.link)},alreadyPurchased(){return this.$t.sprintf(this.$t.__("Already purchased? Simply enter your license key below to connect with %1$s!",this.$td),this.strings.purchasedBoldText)}},methods:{processConnectOrActivate(){if(this.$isPro)return this.processActivateLicense();this.processGetConnectUrl()},processActivateLicense(){this.error=null,this.loading=!0,this.rootStore.loading=!0,this.licenseStore.activate(this.localLicenseKey).then(()=>{this.optionsStore.internalOptions.internal.license.expired=!1,this.setupWizardStore.saveWizard("license-key").then(()=>{this.$router.push(this.setupWizardStore.getNextLink)})}).catch(e=>{if(this.loading=!1,this.localLicenseKey=null,this.rootStore.loading=!1,!e||!e.response||!e.response.body||!e.response.body.error||!e.response.body.licenseData){this.error=this.$t.__("An unknown error occurred, please try again later.",this.$td);return}const n=e.response.body.licenseData;n.invalid?this.error=this.$t.__("The license key provided is invalid. Please use a different key to continue receiving automatic updates.",this.$td):n.disabled?this.error=this.$t.__("The license key provided is disabled. Please use a different key to continue receiving automatic updates.",this.$td):n.expired?this.error=this.licenseKeyExpired:n.activationsError?this.error=this.$t.__("This license key has reached the maximum number of activations. Please deactivate it from another site or purchase a new license to continue receiving automatic updates.",this.$td):(n.connectionError||n.requestError)&&(this.error=this.$t.__("There was an error connecting to the licensing API. Please try again later.",this.$td))})},processGetConnectUrl(){this.loading=!0,this.rootStore.loading=!0,this.connectStore.getConnectUrl({key:this.localLicenseKey,wizard:!0}).then(e=>{if(e.body.url){if(!e.body.popup)return this.loading=!1,this.rootStore.loading=!1,window.open(e.body.url);this.openPopup(e.body.url)}})},openPopup(e){O(e,"_self",600,630,!0,["file","token"],this.completedCallback,this.closedCallback)},completedCallback(e){return e.wizard=!0,this.connectStore.processConnect(e)},closedCallback(e){if(e)return window.location.reload();this.loading=!1,this.rootStore.loading=!1},skipStep(){this.setupWizardStore.saveWizard(),this.$router.push(this.setupWizardStore.getNextLink)}},mounted(){this.localLicenseKey=this.setupWizardStore.licenseKey}},Q={class:"aioseo-wizard-license-key"},X={class:"header"},Z=["innerHTML"],ee={class:"license-cta-box"},te=["innerHTML"],se=["innerHTML"],oe={class:"license-key"},ne=r("input",{type:"text",name:"username",autocomplete:"username",style:{display:"none"}},null,-1),ie={class:"go-back"},re=r("div",{class:"spacer"},null,-1);function ae(e,n,le,_,t,c){const g=s("wizard-header"),k=s("wizard-steps"),S=s("svg-checkmark"),b=s("grid-column"),$=s("grid-row"),L=s("base-input"),m=s("base-button"),v=s("core-alert"),y=s("router-link"),w=s("wizard-body"),z=s("wizard-close-and-exit"),x=s("wizard-container");return a(),u("div",Q,[o(g),o(x,null,{default:i(()=>[o(w,null,{footer:i(()=>[r("div",ie,[o(y,{to:_.setupWizardStore.getPrevLink,class:"no-underline"},{default:i(()=>[l("←")]),_:1},8,["to"]),l("   "),o(y,{to:_.setupWizardStore.getPrevLink},{default:i(()=>[l(d(t.strings.goBack),1)]),_:1},8,["to"])]),re,o(m,{type:"gray",onClick:c.skipStep},{default:i(()=>[l(d(t.strings.skipThisStep),1)]),_:1},8,["onClick"])]),default:i(()=>[o(k),r("div",X,d(t.strings.enterYourLicenseKey),1),e.$isPro?h("",!0):(a(),u("div",{key:0,class:"description",innerHTML:c.noLicenseNeeded},null,8,Z)),r("div",ee,[r("div",{innerHTML:c.tooltipText},null,8,te),o($,null,{default:i(()=>[(a(!0),u(N,null,U(e.getSelectedUpsellFeatures,(p,C)=>(a(),f(b,{sm:"6",key:C},{default:i(()=>[o(S),l(" "+d(p.name),1)]),_:2},1024))),128))]),_:1})]),e.$isPro?h("",!0):(a(),u("div",{key:1,innerHTML:c.alreadyPurchased},null,8,se)),r("form",oe,[ne,o(L,{type:"password",placeholder:t.strings.placeholder,"append-icon":t.localLicenseKey?"circle-check":null,autocomplete:"new-password",modelValue:t.localLicenseKey,"onUpdate:modelValue":n[0]||(n[0]=p=>t.localLicenseKey=p)},null,8,["placeholder","append-icon","modelValue"]),o(m,{type:"green",disabled:!t.localLicenseKey,loading:t.loading,onClick:c.processConnectOrActivate},{default:i(()=>[l(d(t.strings.connect),1)]),_:1},8,["disabled","loading","onClick"])]),t.error?(a(),f(v,{key:2,class:"license-key-error",type:"red",innerHTML:t.error},null,8,["innerHTML"])):h("",!0)]),_:1}),o(z)]),_:1})])}const Ae=V(J,[["render",ae]]);export{Ae as default};
