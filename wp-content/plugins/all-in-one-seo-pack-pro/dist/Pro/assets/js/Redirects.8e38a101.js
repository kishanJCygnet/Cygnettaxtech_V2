import{R as v,C as $,L as R}from"./Redirects.e3cbf0e7.js";import{k as f,u as w}from"./links.96ffe3f0.js";import{r as t,o as s,d as u,w as p,a as g,g as c,B as C,x as b,b as _,c as y}from"./vue.runtime.esm-bundler.f433d23f.js";import{_ as h}from"./_plugin-vue_export-helper.3febc96a.js";import{C as T}from"./index.57ad6f19.js";import"./Caret.b5c2e4ec.js";/* empty css                                            *//* empty css                                              */import"./default-i18n.41786823.js";import"./constants.008ef172.js";import{J as x}from"./JsonValues.870a4901.js";/* empty css                                              */import{C as k}from"./Index.381d4377.js";import{C as U}from"./Card.b1cf2e4d.js";import{A}from"./AddonConditions.a02ecb78.js";const L={setup(){return{redirectsStore:f(),rootStore:w()}},components:{CoreAlert:T},data(){return{strings:{nginxReload:this.$t.sprintf(this.$t.__("Your redirect settings have been updated. In order for them to work properly you may need to reload your %1$s configuration. %2$s",this.$tdPro),this.detectedServer(),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"redirectServerConfigReload",!0)),dontKnow:this.$t.__("If you don't know how to do that please revert your Redirect Method to PHP.",this.$tdPro),checkAgain:this.$t.__("Check Again",this.$tdPro)}}},methods:{maybeTest(){this.redirectsStore.testServerRedirects()},detectedServer(){return this.rootStore.aioseo.data.server.apache?"Apache":this.rootStore.aioseo.data.server.nginx?"NGINX":this.$t.__("Server",this.$tdPro)}},mounted(){this.maybeTest(),window.aioseoBus.$on("changes-saved",this.maybeTest)},beforeUnmount(){window.aioseoBus.$off("changes-saved",this.maybeTest)}},N=["innerHTML"],P=["innerHTML"];function B(e,d,m,r,o,n){const i=t("base-button"),a=t("core-alert");return r.redirectsStore.server.redirectTest.failed&&r.redirectsStore.options.main.method==="server"?(s(),u(a,{key:0,size:"small",type:"yellow"},{default:p(()=>[g("div",{innerHTML:o.strings.nginxReload},null,8,N),g("div",{innerHTML:o.strings.dontKnow},null,8,P),c(i,{type:"blue",size:"small",onClick:d[0]||(d[0]=l=>r.redirectsStore.testServerRedirects()),loading:r.redirectsStore.server.redirectTest.testing},{default:p(()=>[C(b(o.strings.checkAgain),1)]),_:1},8,["loading"])]),_:1})):_("",!0)}const M=h(L,[["render",B],["__scopeId","data-v-d3d21685"]]),q={setup(){return{redirectsStore:f()}},components:{CoreAddRedirection:k,CoreCard:U,ServerConfigReloadWarning:M,RedirectsTable:v},mixins:[x],data(){return{queryUrls:[],targetUrl:"",type:0,strings:{addNewRedirection:this.$t.__("Add New Redirection",this.$tdPro)}}},computed:{getType(){return this.type?this.type:-1},getTarget(){return this.targetUrl?this.targetUrl:this.queryUrls.length?"/":""},getUrls(){return this.redirectsStore.manualUrls.length?(this.redirectsStore.manualUrls.forEach(e=>{this.queryUrls.push({url:e.url,regex:e.regex||!1,ignoreSlash:e.slash||!1,ignoreCase:e.case||!1,errors:[],warnings:[]}),e.target&&(this.targetUrl=e.target),e.type&&(this.type=e.type)}),this.queryUrls):this.queryUrls}}},H={class:"aioseo-redirects"};function I(e,d,m,r,o,n){const i=t("server-config-reload-warning"),a=t("core-add-redirection"),l=t("core-card"),S=t("redirects-table");return s(),y("div",H,[c(i),c(l,{slug:"addNewRedirection","header-text":o.strings.addNewRedirection},{default:p(()=>[c(a,{urls:n.getUrls,target:n.getTarget,type:n.getType},null,8,["urls","target","type"])]),_:1},8,["header-text"]),c(S)])}const V=h(q,[["render",I]]),z={mixins:[A],components:{Cta:$,Lite:R,Redirects:V},data(){return{addonSlug:"aioseo-redirects"}}},G={class:"aioseo-redirects-main"};function O(e,d,m,r,o,n){const i=t("redirects",!0),a=t("cta"),l=t("lite");return s(),y("div",G,[e.shouldShowMain?(s(),u(i,{key:0})):_("",!0),e.shouldShowUpdate||e.shouldShowActivate?(s(),u(a,{key:1})):_("",!0),e.shouldShowLite?(s(),u(l,{key:2})):_("",!0)])}const j=h(z,[["render",O]]),ne=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{j as R,M as S,ne as a};
