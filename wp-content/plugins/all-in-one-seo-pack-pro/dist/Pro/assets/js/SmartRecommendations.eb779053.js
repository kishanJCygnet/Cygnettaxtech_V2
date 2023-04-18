import{a as r}from"./WpTable.9774bca3.js";import"./default-i18n.3a91e0e5.js";import"./constants.6399c725.js";import{n as l}from"./_plugin-vue2_normalizer.61652a7c.js";import"./index.bd1b81e8.js";import"./SaveChanges.e40a9083.js";import{a as i,m as o}from"./vuex.esm.8fdeb4b6.js";import{B as c}from"./Checkbox.60ba2f56.js";import{C as d,a as u}from"./index.4db8498b.js";import{C as m}from"./Index.5f7ddb17.js";import{C as p}from"./ProBadge.66f48bdc.js";import{C as g}from"./Tooltip.68a8a92b.js";import{G as h,a as _}from"./Row.830f6397.js";import{S as v}from"./Caret.d93b302e.js";import{W as f,a as $,b as k}from"./Header.f5e32717.js";import{W as y,a as C}from"./Steps.e1aaed20.js";import"./helpers.871dba46.js";import"./postContent.d89e5307.js";import"./cleanForSlug.5e4ade1a.js";import"./isArrayLikeObject.8300bb8d.js";import"./html.68197829.js";import"./Checkmark.f26f6201.js";import"./_commonjsHelpers.f84db168.js";import"./Logo.8785cc9f.js";const b={components:{BaseCheckbox:c,CoreAlert:d,CoreModal:m,CoreProBadge:p,CoreTooltip:g,GridColumn:h,GridRow:_,SvgCircleQuestionMark:u,SvgClose:v,WizardBody:f,WizardCloseAndExit:y,WizardContainer:$,WizardHeader:k,WizardSteps:C},mixins:[r],data(){return{loading:!1,stage:"smart-recommendations",showModal:!1,loadingModal:!1,strings:{setupSiteAnalyzer:this.$t.__("Setup Site Analyzer + Smart Recommendations",this.$td),description:this.$t.sprintf(this.$t.__("Get helpful suggestions from %1$s on how to optimize your website content, so you can rank higher in search results.",this.$td),"AIOSEO"),yourEmailAddress:this.$t.__("Your Email Address",this.$td),yourEmailIsNeeded:this.$t.__("Your email is needed so you can receive SEO recommendations. This email will also be used to connect your site with our SEO API.",this.$td),helpMakeAioseoBetter:this.$t.sprintf(this.$t.__("Help make %1$s better for everyone",this.$td),"AIOSEO"),yesCountMeIn:this.$t.__("Yes, count me in",this.$td),wouldYouLikeToPurchase:this.$t.__("Would you like to purchase and install the following features now?",this.$td),theseFeaturesAreAvailable:this.$t.__("An upgrade is required to unlock the following features.",this.$td),youWontHaveAccess:this.$t.__("You won't have access to this functionality until the extensions have been purchased and installed.",this.$td),illDoItLater:this.$t.__("I'll do it later",this.$td),purchaseAndInstallNow:this.$t.__("Purchase and Install Now",this.$td),bonusText:this.$t.sprintf(this.$t.__("%1$sBonus:%2$s You can upgrade your plan today and %3$ssave %4$s off%5$s (discount auto-applied).",this.$td),"<strong>","</strong>","<strong>",this.$constants.DISCOUNT_PERCENTAGE,"</strong>"),usageTrackingTooltip:this.$t.sprintf(this.$t.__("Complete documentation on usage tracking is available %1$shere%2$s.",this.$td),this.$t.sprintf('<strong><a href="%1$s" target="_blank">',this.$links.getDocUrl("usageTracking")),"</a></strong>")}}},computed:{...i(["internalOptions"]),...i("wizard",{smartRecommendations:"smartRecommendations",presetFeatures:"features"}),selectedFeaturesNeedsUpsell(){let a=!1;return this.presetFeatures.forEach(t=>{this.needsUpsell(this.features.find(s=>s.value===t))&&(a=!0)}),a}},methods:{...o(["saveConnectToken"]),...o("wizard",["saveWizard"]),purchase(){this.modalLoading=!0;const a=`&license-redirect=${btoa(this.$aioseo.urls.aio.wizard)}#/license-key`;window.open("https://aioseo.com/pricing/?features[]="+this.getSelectedUpsellFeatures.map(t=>t.value).join("&features[]=")+a),this.$router.push(this.getNextLink)},saveAndContinue(){this.loading=!0,this.saveWizard("smartRecommendations").then(()=>{if(!this.selectedFeaturesNeedsUpsell)return this.$router.push(this.getNextLink);this.showModal=!0,this.loading=!1})},skipStep(){this.saveWizard(),this.$router.push(this.getNextLink)},preventUncheck(a){a.preventDefault(),a.stopPropagation()}},mounted(){this.smartRecommendations.accountInfo=this.$aioseo.user.data.data.user_email}};var w=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-wizard-smart-recommendations"},[s("wizard-header"),s("wizard-container",[s("wizard-body",{scopedSlots:t._u([{key:"footer",fn:function(){return[s("div",{staticClass:"go-back"},[s("router-link",{staticClass:"no-underline",attrs:{to:t.getPrevLink}},[t._v("←")]),t._v("   "),s("router-link",{attrs:{to:t.getPrevLink}},[t._v(t._s(t.strings.goBack))])],1),s("div",{staticClass:"spacer"}),s("base-button",{attrs:{type:"gray"},on:{click:t.skipStep}},[t._v(t._s(t.strings.skipThisStep))]),s("base-button",{attrs:{type:"blue",loading:t.loading},on:{click:t.saveAndContinue}},[t._v(t._s(t.strings.saveAndContinue)+" →")])]},proxy:!0}])},[s("wizard-steps"),s("div",{staticClass:"header"},[t._v(" "+t._s(t.strings.setupSiteAnalyzer)+" ")]),s("div",{staticClass:"description"},[t._v(" "+t._s(t.strings.description)+" ")]),s("div",{staticClass:"aioseo-settings-row no-border small-padding"},[s("div",{staticClass:"settings-name"},[s("div",{staticClass:"name small-margin"},[t._v(" "+t._s(t.strings.yourEmailAddress)+" ")])]),s("base-input",{attrs:{size:"medium"},model:{value:t.smartRecommendations.accountInfo,callback:function(e){t.$set(t.smartRecommendations,"accountInfo",e)},expression:"smartRecommendations.accountInfo"}}),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.yourEmailIsNeeded)+" ")])],1),t.$isPro?t._e():s("div",{staticClass:"aioseo-settings-row no-border no-margin small-padding"},[s("div",{staticClass:"settings-name"},[s("div",{staticClass:"name small-margin"},[t._v(" "+t._s(t.strings.helpMakeAioseoBetter)+" "),s("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[s("div",{domProps:{innerHTML:t._s(t.strings.usageTrackingTooltip)}})]},proxy:!0}],null,!1,1886299547)},[s("svg-circle-question-mark")],1)],1)]),s("base-toggle",{model:{value:t.smartRecommendations.usageTracking,callback:function(e){t.$set(t.smartRecommendations,"usageTracking",e)},expression:"smartRecommendations.usageTracking"}},[t._v(" "+t._s(t.strings.yesCountMeIn)+" ")])],1)],1),s("wizard-close-and-exit")],1),t.showModal?s("core-modal",{attrs:{"no-header":""},on:{close:function(e){t.showModal=!1}},scopedSlots:t._u([{key:"body",fn:function(){return[s("div",{staticClass:"aioseo-modal-body"},[s("button",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.showModal=!1}}},[s("svg-close",{on:{click:function(e){t.showModal=!1}}})],1),s("h3",[t._v(t._s(t.strings.wouldYouLikeToPurchase))]),s("div",{staticClass:"available-features",domProps:{innerHTML:t._s(t.strings.theseFeaturesAreAvailable)}}),t._l(t.getSelectedUpsellFeatures,function(e,n){return s("div",{key:n,staticClass:"aioseo-settings-row feature-grid small-padding medium-margin"},[s("grid-row",[s("grid-column",{attrs:{xs:"11"}},[s("div",{staticClass:"settings-name"},[s("div",{staticClass:"name small-margin"},[t._v(" "+t._s(e.name)+" "),t.needsUpsell(e)?s("core-pro-badge"):t._e()],1),s("div",{staticClass:"aioseo-description-text"},[t._v(" "+t._s(e.description)+" ")])])]),s("grid-column",{attrs:{xs:"1"}},[s("base-checkbox",{staticClass:"no-clicks",attrs:{round:"",type:"green",value:!0},nativeOn:{click:function(S){return t.preventUncheck.apply(null,arguments)}}})],1)],1)],1)}),s("div",{staticClass:"available-features no-access",domProps:{innerHTML:t._s(t.strings.youWontHaveAccess)}}),s("div",{staticClass:"actions"},[s("div",{staticClass:"spacer"}),s("div",{staticClass:"go-back"},[s("router-link",{attrs:{to:t.getNextLink}},[t._v(t._s(t.strings.illDoItLater))])],1),s("base-button",{attrs:{type:"green",loading:t.loadingModal},on:{click:t.purchase}},[t._v(t._s(t.strings.purchaseAndInstallNow))])],1),s("core-alert",{attrs:{type:"yellow"},domProps:{innerHTML:t._s(t.strings.bonusText)}})],2)]},proxy:!0}],null,!1,721331571)}):t._e()],1)},A=[],x=l(b,w,A,!1,null,null,null,null);const X=x.exports;export{X as default};
