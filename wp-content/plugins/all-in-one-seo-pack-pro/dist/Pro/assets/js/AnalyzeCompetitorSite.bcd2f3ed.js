import{a as l,c,m as i,b as p}from"./vuex.esm.8fdeb4b6.js";import"./WpTable.9774bca3.js";import"./default-i18n.3a91e0e5.js";import"./constants.6399c725.js";import{n}from"./_plugin-vue2_normalizer.61652a7c.js";import"./index.bd1b81e8.js";import{i as u}from"./helpers.871dba46.js";import"./SaveChanges.e40a9083.js";import{S as a}from"./SeoSiteScore.29a89953.js";import{C as h,a as d}from"./Score.cd8edd8e.js";import{p as _}from"./popup.b60b699f.js";import{C as y}from"./Blur.f36c594d.js";import{C as m}from"./Card.71f5228b.js";import{C as f}from"./SeoSiteAnalysisResults.5bd620e9.js";import{C as g}from"./Index.60da4b92.js";import{S as C}from"./Refresh.8f2b379b.js";import{S as v}from"./index.4db8498b.js";import"./postContent.d89e5307.js";import"./Caret.d93b302e.js";import"./cleanForSlug.5e4ade1a.js";import"./isArrayLikeObject.8300bb8d.js";import"./html.68197829.js";import"./Index.5f7ddb17.js";import"./params.597cd0f5.js";import"./Tooltip.68a8a92b.js";import"./_commonjsHelpers.f84db168.js";import"./Slide.15a07930.js";import"./GoogleSearchPreview.de6f40ef.js";import"./Information.93f80cbf.js";import"./Gear.184e0c65.js";import"./Index.b3d97c21.js";const z={components:{CoreBlur:y,CoreCard:m},mixins:[a],computed:{...l(["options","networkOptions"]),...c(["licenseKey"])},methods:{...i(["saveConnectToken"]),openPopup(s){_(s,this.connectWithAioseo,600,630,!0,["token"],this.completedCallback,()=>{})},completedCallback(s){return this.saveConnectToken(s.token)}}};var S=function(){var t=this,e=t._self._c;return e("div",[e("core-card",{attrs:{slug:"analyzeNewCompetitor","hide-header":"","no-slide":"",toggles:!1}},[e(t.licenseKey?"div":"core-blur",{tag:"component"},[t._t("default")],2),t.licenseKey?t._e():e("div",{staticClass:"aioseo-seo-site-score-cta"},[e("a",{attrs:{href:t.$aioseo.urls.aio.settings}},[t._v(t._s(t.strings.enterLicenseKey))]),t._v(" "+t._s(t.strings.toAnalyzeCompetitorSite)+" ")])],1),t.licenseKey?[t._t("competitor-results")]:t._e()],2)},$=[],A=n(z,S,$,!1,null,null,null,null);const R=A.exports;const k={components:{CoreSiteScore:g,SvgRefresh:C},mixins:[a],props:{score:Number,loading:Boolean,site:{type:String,required:!0},summary:{type:Object,default(){return{}}},mobileSnapshot:String},data(){return{isAnalyzing:!1,strings:{criticalIssues:this.$t.__("Important Issues",this.$td),warnings:this.$t.__("Warnings",this.$td),recommendedImprovements:this.$t.__("Recommended Improvements",this.$td),goodResults:this.$t.__("Good Results",this.$td),completeSiteAuditChecklist:this.$t.__("Complete Site Audit Checklist",this.$td),refreshResults:this.$t.__("Refresh Results",this.$td),mobileSnapshot:this.$t.__("Mobile Snapshot",this.$td)}}},methods:{...i(["runSiteAnalyzer","deleteCompetitorSite"]),refresh(){this.isAnalyzing=!0,this.runSiteAnalyzer({url:this.site,refresh:!0}).then(()=>this.isAnalyzing=!1)}}};var b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-site-score-competitor"},[e("div",{staticClass:"aioseo-seo-site-score-score"},[e("core-site-score",{attrs:{loading:t.isAnalyzing||t.loading,score:t.score,description:t.description}})],1),e("div",{staticClass:"aioseo-seo-site-score-recommendations"},[e("div",{staticClass:"critical"},[e("span",{staticClass:"round red"},[t._v(t._s(t.summary.critical||0))]),t._v(" "+t._s(t.strings.criticalIssues)+" ")]),e("div",{staticClass:"recommended"},[e("span",{staticClass:"round blue"},[t._v(t._s(t.summary.recommended||0))]),t._v(" "+t._s(t.strings.recommendedImprovements)+" ")]),e("div",{staticClass:"good"},[e("span",{staticClass:"round green"},[t._v(t._s(t.summary.good||0))]),t._v(" "+t._s(t.strings.goodResults)+" ")])]),e("base-button",{staticClass:"refresh-results",attrs:{type:"gray",size:"small",loading:t.isAnalyzing},on:{click:t.refresh}},[e("svg-refresh"),t._v(" "+t._s(t.strings.refreshResults)+" ")],1),t.mobileSnapshot?e("div",{staticClass:"mobile-snapshot"},[e("div",[t._v(t._s(t.strings.mobileSnapshot))]),e("img",{attrs:{alt:"Mobile Snapshot",src:t.mobileSnapshot}})]):t._e()],1)},T=[],E=n(k,b,T,!1,null,null,null,null);const x=E.exports;const U={components:{CoreAnalyze:h,CoreAnalyzeScore:d,CoreAnalyzeCompetitorSiteHeader:R,CoreCard:m,CoreSeoSiteAnalysisResults:f,CoreSiteScoreCompetitor:x,SvgTrash:v},mixins:[a],data(){return{competitorUrl:null,isAnalyzing:!1,inputError:!1,competitorResults:{},analyzeTime:8,strings:{enterCompetitorUrl:this.$t.__("Enter Competitor URL",this.$td),performInDepthAnalysis:this.$t.__("Perform in-depth SEO Analysis of your competitor's website.",this.$td),analyze:this.$t.__("Analyze",this.$td),pleaseEnterValidUrl:this.$t.__("Please enter a valid URL.",this.$td)}}},watch:{analyzeError(s){s&&(this.isAnalyzing=!1)}},computed:{...l(["options","analyzer","analyzing","analyzeError"]),...c(["getCompetitorSiteAnalysisResults","goodCount","recommendedCount","criticalCount"]),getError(){switch(this.analyzeError){case"invalid-url":return this.$t.__("The URL provided is invalid.",this.$td);case"missing-content":return this.$t.sprintf("%1$s %2$s",this.$t.__("We were unable to parse the content for this site.",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzerIssues",!0));case"invalid-token":return this.$t.sprintf(this.$t.__("Your site is not connected. Please connect to %1$s, then try again.",this.$td),"AIOSEO")}return this.analyzeError}},methods:{...i(["runSiteAnalyzer","deleteCompetitorSite","saveConnectToken"]),...p(["toggleCard","closeCard"]),parseResults(s){return JSON.parse(s)},getSummary(s){return{recommended:this.recommendedCount(s),critical:this.criticalCount(s),good:this.goodCount(s)}},startAnalyzing(s){if(this.inputError=!1,this.competitorUrl=s.replace("http://","https://"),this.competitorUrl.startsWith("https://")||(this.competitorUrl="https://"+this.competitorUrl),!u(this.competitorUrl)){this.inputError=!0;return}this.$store.commit("analyzing",!0),this.$store.commit("analyzeError",!1),this.runSiteAnalyzer({url:this.competitorUrl}),this.isAnalyzing=!0,setTimeout(this.checkStatus,this.analyzeTime*1e3),this.closeAllCards()},checkStatus(){if(this.isAnalyzing=!1,this.analyzing){this.$nextTick(()=>{this.isAnalyzing=!0,2>this.analyzeTime&&(this.analyzeTime=8),this.analyzeTime=this.analyzeTime/2,setTimeout(this.checkStatus,this.analyzeTime*1e3)});return}this.competitorUrl=null,this.competitorResults=this.getCompetitorSiteAnalysisResults,this.toggleFirstCard(),this.$nextTick(()=>{const s=Object.keys(this.competitorResults),t=document.querySelector(".aioseo-header"),e=t.offsetHeight+t.offsetTop+30;this.$scrollTo("#aioseo-competitor-results"+this.hashCode(s[0]),{offset:-e})})},startDeleteSite(s){this.closeAllCards(),this.$delete(this.competitorResults,s),this.deleteCompetitorSite(s).then(()=>{this.competitorResults=this.getCompetitorSiteAnalysisResults})},closeAllCards(){Object.keys(this.competitorResults).forEach(t=>{this.closeCard("analyzeCompetitorSite"+t)})},toggleFirstCard(){const s=Object.keys(this.competitorResults);this.toggleCard("analyzeCompetitorSite"+s[0])},hashCode(s){if(!s)return;let t=0,e,r;for(e=0;e<s.length;e++)r=s.charCodeAt(e),t=(t<<5)-t+r,t|=0;return t}},mounted(){this.$store.commit("analyzeError",!1),this.competitorResults=this.getCompetitorSiteAnalysisResults,this.toggleFirstCard()}};var I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-analyze-competitor-site"},[e("core-analyze-competitor-site-header",{scopedSlots:t._u([{key:"competitor-results",fn:function(){return t._l(t.competitorResults,function(r,o){return e("core-card",{key:o,attrs:{id:"aioseo-competitor-results"+t.hashCode(o),slug:"analyzeCompetitorSite"+o,"save-toggle-status":!1},scopedSlots:t._u([{key:"header",fn:function(){return[e("core-analyze-score",{attrs:{score:t.parseResults(r).score}}),e("span",[t._v(t._s(o))]),e("svg-trash",{nativeOn:{click:function(L){return t.startDeleteSite(o)}}})]},proxy:!0}],null,!0)},[e("div",{staticClass:"competitor-results-main"},[e("core-site-score-competitor",{attrs:{site:o,score:t.parseResults(r).score,loading:t.analyzing,summary:t.getSummary(t.parseResults(r).results),"mobile-snapshot":t.parseResults(r).results.advanced.mobileSnapshot}}),e("div",{staticClass:"competitor-results-body"},[e("core-seo-site-analysis-results",{attrs:{section:"all-items","all-results":t.parseResults(r).results,"show-google-preview":""}})],1)],1)])})},proxy:!0}])},[e("core-analyze",{attrs:{header:t.strings.enterCompetitorUrl,description:t.strings.performInDepthAnalysis,inputError:t.inputError,isAnalyzing:t.isAnalyzing,analyzeTime:t.analyzeTime,placeholder:"https://competitorwebsite.com"},on:{startAnalyzing:t.startAnalyzing},scopedSlots:t._u([{key:"errors",fn:function(){return[t.inputError?e("div",{staticClass:"aioseo-description aioseo-error"},[t._v(" "+t._s(t.strings.pleaseEnterValidUrl)+" ")]):t._e(),t.analyzer==="competitor-site"&&t.analyzeError?e("div",{staticClass:"analyze-errors aioseo-description aioseo-error",domProps:{innerHTML:t._s(t.analyzeError)}}):t._e()]},proxy:!0}])})],1)],1)},O=[],w=n(U,I,O,!1,null,null,null,null);const ht=w.exports;export{ht as default};
