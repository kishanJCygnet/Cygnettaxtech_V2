import{_ as u,o as r,c,l as V,r as _,d as h,f as a,F as C,i as A,t as n,e as y,a as b,h as m,n as k,k as w,w as v,g as I,b as P}from"./js/_plugin-vue_export-helper.49ea0e68.js";import{c as F,a as B}from"./js/vue-router.df8ceec4.js";import{c as S,a as M,b as O,B as G}from"./js/Caret.09e548f3.js";import{C as L}from"./js/Tabs.9be8808b.js";import{C as K}from"./js/Index.20fccad8.js";import{S as j,a as H}from"./js/Twitter.b82b6a57.js";import{S as U}from"./js/Settings.ab893675.js";import{g as N,a as R,b as q}from"./js/html.68197829.js";import{C as Y}from"./js/FacebookPreview.972748b7.js";import{C as Z}from"./js/GoogleSearchPreview.e0f6eb8d.js";import{T as W}from"./js/TruSeoScore.76897846.js";import{S as z}from"./js/Exclamation.9bda8f1b.js";import{i as Q}from"./js/helpers.871dba46.js";import{C as J}from"./js/TwitterPreview.cde3b0e6.js";import{t as X}from"./js/vuex.esm-bundler.97e30e47.js";import"./js/SaveChanges.203efc2d.js";import"./js/Information.4a1e5f23.js";import"./js/Slide.dcb3da9d.js";import"./js/Img.8ff054fa.js";import"./js/Profile.d4e3d34f.js";import"./js/Book.ab4a20b1.js";import"./js/default-i18n.ab92175e.js";import"./js/_commonjsHelpers.f84db168.js";const ee={},te={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-icon-google"},se=V('<circle cx="12" cy="12" r="11.5" fill="white" stroke="#D0D1D7"></circle><g clip-path="url(#clip0_3359_97687)"><path d="M19.04 12.1666C19.04 11.6466 18.9933 11.1466 18.9067 10.6666H12V13.5032H15.9467C15.7767 14.4199 15.26 15.1966 14.4833 15.7166V17.5566H16.8533C18.24 16.2799 19.04 14.3999 19.04 12.1666Z" fill="#4285F4"></path><path d="M12 19.3332C13.98 19.3332 15.64 18.6765 16.8533 17.5565L14.4833 15.7165C13.8267 16.1565 12.9867 16.4165 12 16.4165C10.09 16.4165 8.47332 15.1265 7.89665 13.3932H5.44666V15.2932C6.65332 17.6899 9.13332 19.3332 12 19.3332Z" fill="#34A853"></path><path d="M7.89663 13.3931C7.74996 12.9531 7.66663 12.4831 7.66663 11.9998C7.66663 11.5164 7.74996 11.0464 7.89663 10.6064V8.70642H5.44663C4.93329 9.72833 4.66617 10.8562 4.66663 11.9998C4.66663 13.1831 4.94996 14.3031 5.44663 15.2931L7.89663 13.3931Z" fill="#FBBC05"></path><path d="M12 7.58323C13.0767 7.58323 14.0433 7.95323 14.8033 8.6799L16.9067 6.57657C15.6367 5.39323 13.9767 4.66656 12 4.66656C9.13332 4.66656 6.65332 6.3099 5.44666 8.70656L7.89666 10.6066C8.47332 8.87323 10.09 7.58323 12 7.58323Z" fill="#EA4335"></path></g><defs><clipPath id="clip0_3359_97687"><rect width="16" height="16" fill="white" transform="translate(4 3.99994)"></rect></clipPath></defs>',3),oe=[se];function ie(e,t){return r(),c("svg",te,oe)}const ae=u(ee,[["render",ie]]),re={components:{CoreFacebookPreview:Y},data(){return{facebookData:N()}}},ne={class:"preview-wrapper"};function ce(e,t,i,d,s,o){const l=_("core-facebook-preview");return r(),c("div",ne,[h(l,{description:s.facebookData.description,image:s.facebookData.image,title:s.facebookData.title},null,8,["description","image","title"])])}const le=u(re,[["render",ce]]),de={components:{CoreGoogleSearchPreview:Z},data(){return{googleData:R()}}},_e={class:"preview-wrapper"};function pe(e,t,i,d,s,o){const l=_("core-google-search-preview");return r(),c("div",_e,[h(l,{description:s.googleData.description,domain:s.googleData.domain,title:s.googleData.title},null,8,["description","domain","title"])])}const he=u(de,[["render",pe]]);const ue={computed:{metaTags(){var d,s;const e=[],t=[{label:this.$t.__("Title",this.$td),value:document.title||""},{label:this.$t.__("Description",this.$td),value:((d=document.querySelector('meta[name="description"]'))==null?void 0:d.content)||""},{label:this.$t.__("Canonical URL",this.$td),value:((s=document.querySelector('link[rel="canonical"]'))==null?void 0:s.href)||""}],i=document.querySelectorAll('meta[property^="og:"][content],meta[name^="twitter:"][content]');return t.forEach(o=>{o.value&&e.push({label:o.label,value:o.value})}),0<(i==null?void 0:i.length)&&i.forEach(o=>{o.content&&e.push({label:o.getAttribute("name")?o.getAttribute("name"):o.getAttribute("property"),value:o.content})}),e}},methods:{isUrl:Q}},me={class:"aioseo-seo-preview-standalone-view-meta-tags"},ge=["href"];function fe(e,t,i,d,s,o){return r(),c("div",me,[a("dl",null,[(r(!0),c(C,null,A(o.metaTags,(l,g)=>(r(),c(C,{key:g},[a("dt",null,n(l.label),1),a("dd",null,[o.isUrl(l.value)?(r(),c("a",{key:0,href:l.value,target:"_blank"},n(l.value),9,ge)):(r(),c(C,{key:1},[y(n(l.value),1)],64))])],64))),128))])])}const ve=u(ue,[["render",fe],["__scopeId","data-v-0bbdaf35"]]);const be={components:{SvgIconPencil:S,SvgCircleCheck:M,SvgCircleExclamation:z,SvgCircleClose:O,ViewMetaTags:ve},computed:{focusKeyphrase(){var e,t,i;return((i=(t=(e=this.$aioseo)==null?void 0:e.keyphrases)==null?void 0:t.focus)==null?void 0:i.keyphrase)||!1}},methods:{getCheckObject(e){var t,i;return(i=(t=this.$aioseo)==null?void 0:t.page_analysis)==null?void 0:i.analysis[e]},getCheckErrors(e){var t;return((t=this.getCheckObject(e))==null?void 0:t.errors)||0},getCheckIconComponent(e){const t=this.getErrorClass(this.getCheckErrors(e));return t==="red"?"svg-circle-close":t==="orange"?"svg-circle-exclamation":"svg-circle-check"},checkErrorsExists(e){var t,i;return typeof((i=(t=this.$aioseo.page_analysis.analysis)==null?void 0:t[e])==null?void 0:i.errors)<"u"},isCheckEligible(){var e;return typeof((e=this.$aioseo.page_analysis)==null?void 0:e.analysis)<"u"}},mixins:[W],data(){return{strings:{focusKeyphrase:this.$t.__("Focus Keyphrase",this.$td),checks:this.$t.__("Checks",this.$td),basicSeo:this.$t.__("Basic SEO",this.$td),readability:this.$t.__("Readability",this.$td),title:this.$t.__("Title",this.$td),metaTags:this.$t.__("Meta Tags",this.$td),noKeyphraseFound:this.$t.__("No keyphrase found",this.$td),noDataYet:this.$t.__("No data yet",this.$td)}}}},we={class:"aioseo-seo-preview-standalone-view-seo-inspector"},ke={key:0,class:"first-half"},ye={class:"child"},Ce={key:0},Se={key:1,class:"no-keyphrase-found"},De={key:0,class:"check"},Ee={class:"check__title"},Te={class:"check__feedback"},$e={key:1,class:"check"},xe={class:"check__title"},Ve={class:"check__feedback"},Ae={key:2,class:"check"},Ie={class:"check__title"},Pe={class:"check__feedback"},Fe={key:3,class:"check"},Be={class:"check__title"},Me={class:"check__feedback"},Oe={key:4,class:"check"},Ge={class:"check__title"},Le={class:"check__feedback"},Ke={key:5,class:"check"},je={class:"check__title"},He={class:"check__feedback"},Ue={class:"second-half"},Ne={class:"child"};function Re(e,t,i,d,s,o){const l=_("svg-circle-exclamation"),g=_("view-meta-tags");return r(),c("div",we,[a("div",null,[o.isCheckEligible()?(r(),c("div",ke,[a("div",ye,[a("dl",null,[a("dt",null,n(s.strings.focusKeyphrase),1),a("dd",null,[o.focusKeyphrase?(r(),c("span",Ce,n(o.focusKeyphrase),1)):b("",!0),o.focusKeyphrase?b("",!0):(r(),c("span",Se,[h(l,{width:"20"}),y(" "+n(s.strings.noKeyphraseFound),1)]))]),a("dt",null,n(s.strings.checks),1),a("dd",null,[o.checkErrorsExists("basic")?(r(),c("div",De,[(r(),m(w(o.getCheckIconComponent("basic")),{class:k([e.getErrorClass(o.getCheckErrors("basic")),"check__icon"])},null,8,["class"])),a("div",null,[a("span",Ee,n(s.strings.basicSeo)+": ",1),a("span",Te,n(e.getErrorDisplay(o.getCheckErrors("basic"))),1)])])):(r(),c("div",$e,[a("span",xe,n(s.strings.basicSeo)+": ",1),a("span",Ve,n(s.strings.noDataYet),1)])),o.checkErrorsExists("title")?(r(),c("div",Ae,[(r(),m(w(o.getCheckIconComponent("title")),{class:k([e.getErrorClass(o.getCheckErrors("title")),"check__icon"])},null,8,["class"])),a("div",null,[a("span",Ie,n(s.strings.title)+": ",1),a("span",Pe,n(e.getErrorDisplay(o.getCheckErrors("title"))),1)])])):(r(),c("div",Fe,[a("span",Be,n(s.strings.title)+": ",1),a("span",Me,n(s.strings.noDataYet),1)])),o.checkErrorsExists("readability")?(r(),c("div",Oe,[(r(),m(w(o.getCheckIconComponent("readability")),{class:k([e.getErrorClass(o.getCheckErrors("readability")),"check__icon"])},null,8,["class"])),a("div",null,[a("span",Ge,n(s.strings.readability)+": ",1),a("span",Le,n(e.getErrorDisplay(o.getCheckErrors("readability"))),1)])])):(r(),c("div",Ke,[a("span",je,n(s.strings.readability)+": ",1),a("span",He,n(s.strings.noDataYet),1)]))])])])])):b("",!0),a("div",Ue,[a("div",Ne,[a("dl",null,[a("dt",null,n(s.strings.metaTags),1),a("dd",null,[h(g)])])])])])])}const qe=u(be,[["render",Re],["__scopeId","data-v-53343f04"]]),Ye={components:{CoreTwitterPreview:J},data(){return{twitterData:q()}}},Ze={class:"preview-wrapper"};function We(e,t,i,d,s,o){const l=_("core-twitter-preview");return r(),c("div",Ze,[h(l,{card:s.twitterData.card,description:s.twitterData.description,image:s.twitterData.image,title:s.twitterData.title},null,8,["card","description","image","title"])])}const ze=u(Ye,[["render",We]]);const Qe={components:{BaseButton:G,CoreMainTabs:L,CoreModal:K,SvgIconFacebook:j,SvgIconGoogle:ae,SvgIconPencil:S,SvgIconSettings:U,SvgIconTwitter:H,ViewFacebook:le,ViewGoogle:he,ViewSeoInspector:qe,ViewTwitter:ze},methods:{styleShadowDom(){const e=document.querySelector(".aioseo-seo-preview-shadow-wrapper");if(!e)return!1;this.$aioseo.mainAssetCssQueue.forEach(t=>{if(typeof t.url>"u"||!t.url)return;const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("media","all"),i.setAttribute("href",t.url),e.shadowRoot.prepend(i)})},watchClicks(){const e=document.querySelector("#wp-admin-bar-aioseo-seo-preview a");e&&e.addEventListener("click",t=>{t.preventDefault(),this.display=!0})}},data(){return{activeTab:"ViewGoogle",display:!1,loadingEditPreviewDataBtn:!1,strings:{modalHeader:this.$t.__("SEO Preview",this.$td)},tabs:[{slug:"ViewGoogle",icon:"svg-icon-google",name:"Google",component:"ViewGoogle"},{slug:"ViewFacebook",icon:"svg-icon-facebook",name:"Facebook",component:"ViewFacebook"},{slug:"ViewTwitter",icon:"svg-icon-twitter",name:"Twitter",component:"ViewTwitter"},{slug:"ViewSeoInspector",icon:"svg-icon-settings",name:this.$t.__("SEO Inspector",this.$td),component:"ViewSeoInspector"}]}},computed:{editSnippetData(){var t,i,d;const e={url:"",btnText:""};return this.activeTab==="ViewGoogle"?(e.url=((t=this.$aioseo)==null?void 0:t.editGoogleSnippetUrl)||"",e.btnText=this.$t.__("Edit Snippet",this.$td)):this.activeTab==="ViewFacebook"?(e.url=((i=this.$aioseo)==null?void 0:i.editFacebookSnippetUrl)||"",e.btnText=this.$t.__("Edit Facebook Meta Data",this.$td)):this.activeTab==="ViewTwitter"&&(e.url=((d=this.$aioseo)==null?void 0:d.editTwitterSnippetUrl)||"",e.btnText=this.$t.__("Edit Twitter Meta Data",this.$td)),e},editObjectData(){var t,i;const e={url:"",btnText:""};return this.activeTab==="ViewSeoInspector"&&(e.url=((t=this.$aioseo)==null?void 0:t.editObjectUrl)||"",e.btnText=((i=this.$aioseo)==null?void 0:i.editObjectBtnText)||""),e}},mounted(){this.styleShadowDom(),this.watchClicks()}},Je={class:"aioseo-modal-content"},Xe={class:"component-overflow"},et={class:"component-container"},tt={key:0,class:"btn-edit-preview-data-wrapper"};function st(e,t,i,d,s,o){const l=_("core-main-tabs"),g=_("svg-icon-pencil"),$=_("base-button"),x=_("core-modal");return s.display?(r(),m(x,{key:0,classes:["aioseo-app","aioseo-seo-preview-standalone"],onClose:t[2]||(t[2]=f=>s.display=!1)},{headerTitle:v(()=>[y(n(s.strings.modalHeader),1)]),body:v(()=>[a("div",Je,[h(l,{tabs:s.tabs,showSaveButton:!1,active:s.activeTab,onChanged:t[0]||(t[0]=f=>this.activeTab=f)},{"var-tab-icon":v(({tab:f})=>[(r(),m(w(f.icon)))]),_:1},8,["tabs","active"]),a("div",Xe,[a("div",et,[a("div",{class:k(["component-wrapper","tab"+s.activeTab])},[(r(),m(w(s.activeTab),{parentComponentContext:"modal"}))],2)])])])]),footer:v(()=>[o.editSnippetData.url||o.editObjectData.url?(r(),c("div",tt,[h($,{href:o.editSnippetData.url||o.editObjectData.url,loading:s.loadingEditPreviewDataBtn,onClick:t[1]||(t[1]=I(f=>s.loadingEditPreviewDataBtn=!0,["exact"])),class:"btn-edit-preview-data",type:"gray",size:"small",tag:"a"},{default:v(()=>[h(g),y(" "+n(o.editSnippetData.btnText||o.editObjectData.btnText),1)]),_:1},8,["href","loading"])])):b("",!0)]),_:1})):b("",!0)}const D=u(Qe,[["render",st],["__scopeId","data-v-731afa6d"]]),E=F({history:B(),routes:[{path:"/",component:D}]}),p=P(D);p.use(E);E.app=p;p.$t=p.config.globalProperties.$t=X;p.$td=p.config.globalProperties.$td="all-in-one-seo-pack";p.$aioseo=p.config.globalProperties.$aioseo=window.aioseoSeoPreview;const T=document.createElement("div");{const e=document.createElement("div"),t=e.attachShadow({mode:"open"}),i=document.createElement("div");e.setAttribute("class","aioseo-seo-preview-shadow-wrapper"),e.setAttribute("style","margin:0;padding:0;border:0"),i.setAttribute("dir",(document==null?void 0:document.dir)||"ltr"),i.setAttribute("style","margin:0;padding:0;border:0"),t.appendChild(i),i.appendChild(T),document.body.appendChild(e)}p.mount(T);
