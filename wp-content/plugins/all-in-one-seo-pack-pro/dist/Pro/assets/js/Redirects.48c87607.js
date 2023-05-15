import{d as W,a as B,m as P,b as j}from"./vuex.esm-bundler.97e30e47.js";import{W as Q}from"./WpTable.09ccfd81.js";import"./default-i18n.ab92175e.js";import"./constants.817c4cd3.js";import{a as J,b as K,S as X}from"./Caret.09e548f3.js";import{_ as w,c as _,h as m,w as l,a as g,r as u,o as n,f as r,g as C,t as o,e as h,d,F as L,i as A,n as x}from"./_plugin-vue_export-helper.49ea0e68.js";import"./index.cda4d160.js";import{J as Z}from"./JsonValues.870a4901.js";import"./SaveChanges.203efc2d.js";import{s as I}from"./strings.449dd4cd.js";import{a as E,C as ee,R as te}from"./Index.24a1e51f.js";import{C as M,S as se}from"./index.d59f905b.js";import{C as re}from"./Tooltip.754dc940.js";import{C as F}from"./Table.edad123c.js";import{S as ie}from"./Information.4a1e5f23.js";import{C as O}from"./Index.a6f4141a.js";import{C as oe}from"./Blur.ef3abea2.js";import{C as le}from"./Card.32a76e4b.js";import{R as ne}from"./RequiredPlans.ad9de58d.js";const ae={components:{CoreAddRedirection:E,CoreAlert:M,CoreModalPortal:ee,CoreTooltip:re,CoreWpTable:F,SvgCircleCheck:J,SvgCircleClose:K,SvgCircleInformation:ie,SvgCircleQuestionMark:se,SvgClose:X},mixins:[Z,Q,te],props:{showBulkActions:{type:Boolean,default(){return!0}},showTableFooter:{type:Boolean,default(){return!0}},showHeader:{type:Boolean,default(){return!0}},disableSource:{type:Boolean,default(){return!1}},excludeColumns:Array},data(){return{tableId:"aioseo-redirects-wp-table",queryUrls:[],deletingRow:!1,showDeleteModal:!1,shouldDeleteRow:null,changeItemsPerPageSlug:"redirects",strings:{searchUrls:this.$t.__("Search URLs",this.$tdPro),edit:this.$t.__("Edit",this.$tdPro),checkRedirect:this.$t.__("Check Redirect",this.$tdPro),delete:this.$t.__("Delete",this.$tdPro),areYouSureDeleteRedirect:this.$t.__("Are you sure you want to delete this redirect?",this.$tdPro),areYouSureDeleteRedirects:this.$t.__("Are you sure you want to delete these redirects?",this.$tdPro),actionCannotBeUndone:this.$t.__("This action cannot be undone.",this.$tdPro),yesDeleteRedirect:this.$t.__("Yes, I want to delete this redirect",this.$tdPro),yesDeleteRedirects:this.$t.__("Yes, I want to delete these redirects",this.$tdPro),noChangedMind:this.$t.__("No, I changed my mind",this.$tdPro),rules:this.$t.__("Rules",this.$tdPro),customRules:this.$t.__("Custom Rules",this.$tdPro),regex:this.$t.__("Regex",this.$tdPro),redirectTest:this.$t.__("Check redirect for",this.$tdPro),summary:this.$t.__("Summary",this.$tdPro),errors:this.$t.__("Errors",this.$tdPro),responseCode:this.$t.__("Response Code",this.$tdPro),sourceUrl:this.$t.__("Source URL",this.$tdPro),targetUrl:this.$t.__("Target URL",this.$tdPro),xRedirectBy:this.$t.__("Redirected By",this.$tdPro),customUrl:this.$t.__("Custom URL",this.$tdPro),testUrl:this.$t.__("Test Redirect",this.$tdPro),redirectResultOk:this.$t.__("Woohoo! Your redirect worked perfectly!",this.$tdPro)+" 🎉",redirectResultError:this.$t.__("Whoops! Your URL failed to redirect properly.",this.$tdPro)+" 🤔",expected:this.$t.__("Expected",this.$tdPro),result:this.$t.__("Result",this.$tdPro),regexNeedsUrl:this.$t.sprintf(this.$t.__("You are using %1$sRegex%2$s for this redirect so you will need to manually add a URL to test.",this.$tdPro),"<strong>","</strong>")},bulkOptions:[{label:this.$t.__("Enable",this.$tdPro),value:"enable"},{label:this.$t.__("Disable",this.$tdPro),value:"disable"},{label:this.$t.__("Reset Hits",this.$tdPro),value:"reset-hits"},{label:this.$t.__("Delete",this.$tdPro),value:"delete"}],customRuleInfo:null,redirectTestInfo:null,redirectTestResult:null,redirectTestLoading:!1,redirectTestUrl:""}},watch:{rows:{deep:!0,handler(){this.wpTableKey+=1}}},computed:{...W("redirects",["rows","getCurrentFilter"]),...B("redirects",["filters","totals","options","selectedFilters","lateRefresh"]),...B(["currentPost"]),areYouSureDeleteRedirect(){return Array.isArray(this.shouldDeleteRow)?this.strings.areYouSureDeleteRedirects:this.strings.areYouSureDeleteRedirect},yesDeleteRedirect(){return Array.isArray(this.shouldDeleteRow)?this.strings.yesDeleteRedirects:this.strings.yesDeleteRedirect},columns(){const t=[{slug:"source_url",label:this.$t.__("Source URL",this.$tdPro),sortable:!0,sortDir:this.orderBy==="source_url"?this.orderDir:"asc",sorted:this.orderBy==="source_url"},{slug:"target_url",label:this.$t.__("Target URL",this.$tdPro),sortable:!0,sortDir:this.orderBy==="target_url"?this.orderDir:"asc",sorted:this.orderBy==="target_url"},{slug:"hits",label:this.$t.__("Hits",this.$tdPro),width:"97px",sortable:!0,sortDir:this.orderBy==="hits"?this.orderDir:"asc",sorted:this.orderBy==="hits"},{slug:"type",label:this.$t.__("Type",this.$tdPro),width:"100px",sortable:!0,sortDir:this.orderBy==="type"?this.orderDir:"asc",sorted:this.orderBy==="type"},{slug:"group",label:this.$t.__("Group",this.$tdPro),width:"150px",sortable:!0,sortDir:this.orderBy==="group"?this.orderDir:"asc",sorted:this.orderBy==="group"},{slug:"enabled",label:this.$constants.GLOBAL_STRINGS.enabled,width:"85px",sortable:!0,sortDir:this.orderBy==="enabled"?this.orderDir:"asc",sorted:this.orderBy==="enabled"},{slug:"actions",label:"",width:"40px"}];if(this.options.main.method==="server"){const i=t.findIndex(a=>a.slug==="hits");i!==-1&&t.splice(i,1)}return this.excludeColumns&&this.excludeColumns.length?t.filter(i=>!this.excludeColumns.find(a=>a===i.slug)):t},additionalFilters(){return[{label:this.$t.__("Filter by Group",this.$tdPro),name:"group",options:[{label:this.$t.__("All Groups",this.$tdPro),value:"all"}].concat(this.$constants.REDIRECT_GROUPS)}]},getRows(){return this.rows.map(t=>(t.target_url=t.target_url||"-",t))}},methods:{...P("redirects",{fetchData:"fetchRedirects",bulk:"bulk",delete:"delete",test:"test"}),...P("redirects",["setLateRefresh"]),toggleInput(t,i){this.wpTableLoading=!0,this.bulk({action:i?"disable":"enable",rowIds:[t.id]}).then(()=>this.processFetchTableData()).then(()=>this.wpTableLoading=!1)},processBulkAction({action:t,selectedRows:i}){if(i.length){if(t==="delete"){this.shouldDeleteRow=i,this.showDeleteModal=!0;return}this.wpTableLoading=!0,this.bulk({action:t,rowIds:i}).then(()=>this.processFetchTableData()).then(()=>this.wpTableLoading=!1)}},getColumnLabel(t){return t===0?this.$t.__("Pass through",this.$tdPro):t},maybeDeleteRow(t){const i=this.rows.find((a,v)=>v===t);i&&(this.showDeleteModal=!0,this.shouldDeleteRow=i.id)},processDeleteRow(){if(this.deletingRow=!0,Array.isArray(this.shouldDeleteRow))return this.bulk({action:"delete",rowIds:this.shouldDeleteRow}).then(()=>{this.deletingRow=!1,this.showDeleteModal=!1,this.shouldDeleteRow=null,this.refreshTable()});this.delete(this.shouldDeleteRow).then(()=>{this.deletingRow=!1,this.showDeleteModal=!1,this.shouldDeleteRow=null,this.refreshTable()})},showCustomRuleInfo(t){this.customRuleInfo=t.custom_rules.map(i=>{switch(i.type){case"role":i.value=i.value.map(a=>a.charAt(0).toUpperCase()+a.slice(1));break}return i})},isObject(t){return typeof t=="object"},showRedirectTest(t){this.redirectTestResult=null,this.redirectTestUrl=t.regex?"":t.source_url,t.regex||this.redirectTest(t.id),this.redirectTestInfo=t},redirectTest(t){this.redirectTestLoading=!0,this.redirectTestResult=null,this.test({id:t,payload:{sourceUrl:this.redirectTestUrl}}).then(i=>{this.redirectTestLoading=!1,this.redirectTestResult=i.body}).catch(()=>{this.redirectTestLoading=!1})},customUrlDescription(t){const i=I(t.source_url.replace(this.$aioseo.urls.mainSiteUrl,""));return this.$t.sprintf(this.$t.__("You can test redirects with a URL that includes your domain name ( %1$s ) or just the path ( %2$s )",this.$tdPro),this.$aioseo.urls.mainSiteUrl+i,i)},addedRedirectRefresh(){this.orderBy=null,this.orderDir="asc",this.refreshTable()},sanitizeString:I},mounted(){this.$bus.$on("added-redirect",this.addedRedirectRefresh),this.lateRefresh.redirects&&(this.refreshTable(),this.setLateRefresh({value:!1,type:"redirects"}))},beforeUnmount(){this.$bus.$off("added-redirect",this.addedRedirectRefresh)}},de={class:"aioseo-redirects-table"},ce=["onClick"],ue={class:"row-actions"},he={class:"edit"},_e=["onClick"],ge={key:0,class:"test"},pe=["onClick"],me={class:"trash"},be=["onClick"],fe={style:{"text-align":"right"}},Re={key:0},ye={class:"aioseo-modal-body"},Ce=["innerHTML"],ve={class:"aioseo-modal-body"},ke={class:"rule"},Te={key:0},$e={key:1},Pe={key:0,class:"regex"},we={class:"title"},Se={class:"source"},De={class:"aioseo-modal-body"},Ue={class:"custom-url"},Le=["innerHTML"],Ae={class:"label"},Be={class:"custom-url-input"},Ie={key:0,class:"redirect-results"},xe={class:"result"},Ee={class:"summary"},Me={class:"label"},Fe={"aria-label":"Redirect Check Results",class:"redirects-options-table small"},Oe=r("td",null,null,-1),Ye={class:"even"},He={key:0},Ne={key:1,class:"even"},Ve=r("td",null,"AIOSEO",-1),qe={key:0,class:"errors"},Ge={class:"label"},ze=["innerHTML"];function We(t,i,a,v,e,c){const b=u("base-toggle"),f=u("core-add-redirection"),R=u("svg-circle-information"),k=u("core-tooltip"),H=u("core-wp-table"),N=u("svg-close"),S=u("base-button"),D=u("core-modal-portal"),T=u("core-alert"),V=u("svg-circle-question-mark"),q=u("base-input"),G=u("svg-circle-check"),z=u("svg-circle-close");return n(),_("div",de,[(n(),m(H,{ref:"table",id:e.tableId,"additional-filters":c.additionalFilters,"bulk-options":e.bulkOptions,columns:c.columns,filters:t.filters,"initial-items-per-page":t.$aioseo.settings.tablePagination.redirects,"initial-page-number":t.pageNumber,"initial-search-term":t.searchTerm,key:t.wpTableKey,loading:t.wpTableLoading,rows:c.getRows,"search-label":e.strings.searchUrls,"selected-filters":t.selectedFilters,"show-bulk-actions":a.showBulkActions,"show-header":a.showHeader,"show-table-footer":a.showTableFooter,totals:t.totals.main,"show-items-per-page":"",onFilterTable:t.processFilterTable,onPaginate:t.processPagination,onProcessAdditionalFilters:t.processAdditionalFilters,onProcessBulkAction:c.processBulkAction,onProcessChangeItemsPerPage:t.processChangeItemsPerPage,onSearch:t.processSearch,onSortColumn:t.processSort},{source_url:l(({row:s,index:p,column:y,editRow:$})=>[r("strong",null,[r("a",{class:"edit-link",href:"#",onClick:C(U=>$(p),["prevent"])},o(y),9,ce)]),r("div",ue,[r("span",he,[r("a",{href:"#",onClick:C(U=>$(p),["prevent"])},o(e.strings.edit),9,_e),h(" | ")]),s.enabled&&!t.redirectHasUnPublishedPost(s)?(n(),_("span",ge,[r("a",{href:"#",onClick:C(U=>c.showRedirectTest(s),["prevent"])},o(e.strings.checkRedirect),9,pe),h(" | ")])):g("",!0),r("span",me,[r("a",{class:"submitdelete",href:"#",onClick:C(U=>c.maybeDeleteRow(p),["prevent"])},o(e.strings.delete),9,be)])])]),type:l(({column:s})=>[h(o(c.getColumnLabel(s)),1)]),group:l(({row:s})=>[h(o(s.groupName),1)]),enabled:l(({column:s,row:p})=>[r("div",fe,[d(b,{modelValue:s,"onUpdate:modelValue":y=>c.toggleInput(p,s)},null,8,["modelValue","onUpdate:modelValue"])])]),"edit-row":l(({row:s,editRow:p})=>[d(f,{edit:"",onCancel:y=>p(null),url:{id:s.id,url:s.source_url,regex:s.regex,ignoreSlash:s.ignore_slash,ignoreCase:s.ignore_case,showOptions:!0,errors:[],warnings:[]},target:s.target_url,type:s.type,query:s.query_param,rules:s.custom_rules,disableSource:a.disableSource,"post-id":s.post_id,"post-status":s.postStatus},null,8,["onCancel","url","target","type","query","rules","disableSource","post-id","post-status"])]),actions:l(({row:s})=>[s.custom_rules&&0<s.custom_rules.length?(n(),_("span",Re,[d(k,{type:"action"},{tooltip:l(()=>[h(o(e.strings.rules),1)]),default:l(()=>[d(R,{class:"log-info",onClick:p=>c.showCustomRuleInfo(s)},null,8,["onClick"])]),_:2},1024)])):g("",!0)]),_:1},8,["id","additional-filters","bulk-options","columns","filters","initial-items-per-page","initial-page-number","initial-search-term","loading","rows","search-label","selected-filters","show-bulk-actions","show-header","show-table-footer","totals","onFilterTable","onPaginate","onProcessAdditionalFilters","onProcessBulkAction","onProcessChangeItemsPerPage","onSearch","onSortColumn"])),e.showDeleteModal?(n(),m(D,{key:0,classes:["aioseo-redirects-test-modal","aioseo-redirects","delete-redirect"],"no-header":"",onClose:i[3]||(i[3]=s=>e.showDeleteModal=!1)},{body:l(()=>[r("div",ye,[r("button",{class:"close",onClick:i[1]||(i[1]=C(s=>e.showDeleteModal=!1,["stop"]))},[d(N,{onClick:i[0]||(i[0]=s=>e.showDeleteModal=!1)})]),r("h3",null,o(c.areYouSureDeleteRedirect),1),r("div",{class:"reset-description",innerHTML:e.strings.actionCannotBeUndone},null,8,Ce),d(S,{type:"blue",size:"medium",onClick:c.processDeleteRow,loading:e.deletingRow},{default:l(()=>[h(o(c.yesDeleteRedirect),1)]),_:1},8,["onClick","loading"]),d(S,{type:"gray",size:"medium",onClick:i[2]||(i[2]=s=>e.showDeleteModal=!1)},{default:l(()=>[h(o(e.strings.noChangedMind),1)]),_:1})])]),_:1})):g("",!0),e.customRuleInfo?(n(),m(D,{key:1,classes:["aioseo-redirects","custom-rule-info"],onClose:i[4]||(i[4]=s=>e.customRuleInfo=null)},{headerTitle:l(()=>[h(o(e.strings.customRules),1)]),body:l(()=>[r("div",ve,[(n(!0),_(L,null,A(e.customRuleInfo,(s,p)=>(n(),_("div",{key:p},[r("div",ke,[r("strong",null,o(t.$constants.REDIRECTS_CUSTOM_RULES_LABELS[s.type])+":",1),h(" "+o(typeof s.value!="object"&&!s.key?t.$constants.REDIRECTS_CUSTOM_RULES_LABELS[s.value]||s.value:"")+" ",1),c.isObject(s.value)?(n(),_("ul",Te,[(n(!0),_(L,null,A(s.value,(y,$)=>(n(),_("li",{key:$},o(t.$constants.REDIRECTS_CUSTOM_RULES_LABELS[y]||y),1))),128))])):g("",!0),s.key?(n(),_("ul",$e,[r("li",null,[r("strong",null,o(s.key)+":",1),h(" "+o(s.value),1)])])):g("",!0)]),s.regex?(n(),_("div",Pe,[d(b,{modelValue:s.regex,disabled:!0},{default:l(()=>[h(o(e.strings.regex),1)]),_:2},1032,["modelValue"])])):g("",!0)]))),128))])]),_:1})):g("",!0),e.redirectTestInfo?(n(),m(D,{key:2,classes:["aioseo-redirects-test-modal","aioseo-redirects","redirect-test"],onClose:i[7]||(i[7]=s=>e.redirectTestInfo=null),"allow-overflow":""},{headerTitle:l(()=>[r("div",we,o(e.strings.redirectTest)+":",1),d(k,null,{tooltip:l(()=>[r("div",null,o(c.sanitizeString(e.redirectTestInfo.source_url)),1)]),default:l(()=>[r("div",Se,o(c.sanitizeString(e.redirectTestInfo.source_url)),1)]),_:1})]),body:l(()=>[r("div",De,[r("div",Ue,[e.redirectTestInfo.regex?(n(),m(T,{key:0,type:"blue",size:"medium",class:"alert-regex"},{default:l(()=>[d(R),r("span",{innerHTML:e.strings.regexNeedsUrl},null,8,Le)]),_:1})):g("",!0),r("div",Ae,[h(o(e.strings.customUrl)+" ",1),d(k,null,{tooltip:l(()=>[h(o(c.customUrlDescription(e.redirectTestInfo)),1)]),default:l(()=>[d(V)]),_:1})]),r("div",Be,[d(q,{size:"medium",modelValue:e.redirectTestUrl,"onUpdate:modelValue":i[5]||(i[5]=s=>e.redirectTestUrl=s),disabled:e.redirectTestLoading},null,8,["modelValue","disabled"]),d(S,{type:"green",size:"medium",loading:e.redirectTestLoading,onClick:i[6]||(i[6]=C(s=>c.redirectTest(e.redirectTestInfo.id),["prevent"]))},{default:l(()=>[h(o(e.strings.testUrl),1)]),_:1},8,["loading"])])]),e.redirectTestResult?(n(),_("div",Ie,[r("div",xe,[e.redirectTestResult.errors.length===0?(n(),m(T,{key:0,type:"green",size:"medium"},{default:l(()=>[d(G),h(" "+o(e.strings.redirectResultOk),1)]),_:1})):g("",!0),0<e.redirectTestResult.errors.length?(n(),m(T,{key:1,type:"red",size:"medium"},{default:l(()=>[d(z),h(" "+o(e.strings.redirectResultError),1)]),_:1})):g("",!0)]),r("div",Ee,[r("div",Me,o(e.strings.summary),1),r("table",Fe,[r("thead",null,[r("tr",null,[Oe,r("td",null,o(e.strings.expected),1),r("td",null,o(e.strings.result),1)])]),r("tbody",null,[r("tr",Ye,[r("td",null,o(e.strings.responseCode)+":",1),r("td",null,o(e.redirectTestInfo.type),1),r("td",null,o(e.redirectTestResult.redirect.responseCode),1)]),e.redirectTestResult.redirect.location?(n(),_("tr",He,[r("td",null,o(e.strings.targetUrl)+":",1),r("td",null,o(e.redirectTestResult.redirect.targetUrl),1),r("td",null,o(e.redirectTestResult.redirect.location),1)])):g("",!0),e.redirectTestResult.redirect.xRedirectBy?(n(),_("tr",Ne,[r("td",null,o(e.strings.xRedirectBy)+":",1),Ve,r("td",null,o(e.redirectTestResult.redirect.xRedirectBy),1)])):g("",!0)])])]),0<e.redirectTestResult.errors.length?(n(),_("div",qe,[r("div",Ge,o(e.strings.errors),1),d(T,{type:"red",size:"medium"},{default:l(()=>[r("ul",null,[(n(!0),_(L,null,A(e.redirectTestResult.errors,(s,p)=>(n(),_("li",{key:p},[r("span",{innerHTML:s},null,8,ze)]))),128))])]),_:1})])):g("",!0)])):g("",!0)])]),_:1})):g("",!0)])}const yt=w(ae,[["render",We]]),je={components:{CoreAddRedirection:E,CoreBlur:oe,CoreCard:le,CoreWpTable:F},props:{noCoreCard:Boolean},data(){return{strings:{addNewRedirection:this.$t.__("Add New Redirection",this.$td),searchUrls:this.$t.__("Search URLs",this.$td)},bulkOptions:[{label:"",value:""}]}},computed:{columns(){return[{slug:"source_url",label:this.$t.__("Source URL",this.$td)},{slug:"target_url",label:this.$t.__("Target URL",this.$td)},{slug:"hits",label:this.$t.__("Hits",this.$td),width:"97px"},{slug:"type",label:this.$t.__("Type",this.$td),width:"100px"},{slug:"group",label:this.$t.__("Group",this.$td),width:"150px"},{slug:"enabled",label:this.$constants.GLOBAL_STRINGS.enabled,width:"80px"}]},additionalFilters(){return[{label:this.$t.__("Filter by Group",this.$td),name:"group",options:[{label:this.$t.__("All Groups",this.$td),value:"all"}].concat(this.$constants.REDIRECT_GROUPS)}]}}},Qe={class:"aioseo-redirects-blur"};function Je(t,i,a,v,e,c){const b=u("core-add-redirection"),f=u("core-blur"),R=u("core-card"),k=u("core-wp-table");return n(),_("div",Qe,[a.noCoreCard?g("",!0):(n(),m(R,{key:0,slug:"addNewRedirection","header-text":e.strings.addNewRedirection,noSlide:!0},{default:l(()=>[d(f,null,{default:l(()=>[d(b,{type:t.$constants.REDIRECT_TYPES[0].value,query:t.$constants.REDIRECT_QUERY_PARAMS[0].value,slash:!0,case:!0},null,8,["type","query"])]),_:1})]),_:1},8,["header-text"])),a.noCoreCard?(n(),m(f,{key:1},{default:l(()=>[d(b,{type:t.$constants.REDIRECT_TYPES[0].value,query:t.$constants.REDIRECT_QUERY_PARAMS[0].value,slash:!0,case:!0},null,8,["type","query"])]),_:1})):g("",!0),d(f,null,{default:l(()=>[d(k,{filters:[],totals:{total:0,pages:0,page:1},columns:c.columns,rows:[],"search-label":e.strings.searchUrls,"bulk-options":e.bulkOptions,"additional-filters":c.additionalFilters},null,8,["columns","search-label","bulk-options","additional-filters"])]),_:1})])}const Y=w(je,[["render",Je]]),Ke={components:{Blur:Y,CoreAlert:M,Cta:O},props:{noCoreCard:Boolean},data(){return{strings:{ctaButtonText:this.$t.__("Activate Redirects",this.$tdPro),ctaHeader:this.$t.__("Enable Redirects on your Site",this.$tdPro),serverRedirects:this.$t.__("Fast Server Redirects",this.$tdPro),automaticRedirects:this.$t.__("Automatic Redirects",this.$tdPro),redirectMonitoring:this.$t.__("Redirect Monitoring",this.$tdPro),monitoring404:this.$t.__("404 Monitoring",this.$tdPro),fullSiteRedirects:this.$t.__("Full Site Redirects",this.$tdPro),siteAliases:this.$t.__("Site Aliases",this.$tdPro),ctaDescription:this.$t.__("Our Redirection Manager allows you to easily create and manage redirects for your broken links to avoid confusing search engines and users, as well as losing valuable backlinks. It even automatically sends users and search engines from your old URLs to your new ones.",this.$tdPro),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$tdPro),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$tdPro)},failed:!1,activationLoading:!1}},computed:{...B("redirects",["filters","totals","options"])},methods:{...P("redirects",["getRedirectOptions","setLateRefresh"]),...P(["installPlugins"]),...j(["updateAddon"]),activateAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-redirects");this.installPlugins([{plugin:t.basename}]).then(i=>{if(i.body.failed.length){this.activationLoading=!1,this.failed=!0;return}const a=[this.getRedirectOptions()];Promise.all(a).then(()=>{this.activationLoading=!1,t.hasMinimumVersion=!0,t.isActive=!0,this.updateAddon(t),this.setLateRefresh({value:!0})})}).catch(()=>{this.activationLoading=!1})}}};function Xe(t,i,a,v,e,c){const b=u("blur"),f=u("core-alert"),R=u("cta");return n(),_("div",{class:x({"aioseo-redirects":!0,"core-card":!a.noCoreCard})},[d(b,{noCoreCard:a.noCoreCard},null,8,["noCoreCard"]),d(R,{"cta-button-visible":t.$addons.userCanInstallOrActivate("aioseo-redirects"),"cta-button-visible-warning":e.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-redirects","cta-button-action":"","cta-button-loading":e.activationLoading,onCtaButtonClick:c.activateAddon,"same-tab":"","button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("redirects"),"feature-list":[e.strings.serverRedirects,e.strings.automaticRedirects,e.strings.redirectMonitoring,e.strings.monitoring404,e.strings.fullSiteRedirects,e.strings.siteAliases]},{"header-text":l(()=>[h(o(e.strings.ctaHeader),1)]),description:l(()=>[e.failed?(n(),m(f,{key:0,type:"red"},{default:l(()=>[h(o(e.strings.activateError),1)]),_:1})):g("",!0),h(" "+o(e.strings.ctaDescription),1)]),"learn-more-text":l(()=>[h(o(e.strings.learnMoreText),1)]),_:1},8,["cta-button-visible","cta-button-visible-warning","cta-link","cta-button-loading","onCtaButtonClick","button-text","learn-more-link","feature-list"])],2)}const Ct=w(Ke,[["render",Xe]]),Ze={components:{Blur:Y,RequiredPlans:ne,Cta:O},props:{noCoreCard:Boolean,parentComponentContext:String},data(){return{strings:{ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Redirects",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Redirects are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),serverRedirects:this.$t.__("Fast Server Redirects",this.$td),automaticRedirects:this.$t.__("Automatic Redirects",this.$td),redirectMonitoring:this.$t.__("Redirect Monitoring",this.$td),monitoring404:this.$t.__("404 Monitoring",this.$td),fullSiteRedirects:this.$t.__("Full Site Redirects",this.$td),siteAliases:this.$t.__("Site Aliases",this.$td),redirectsDescription:this.$t.__("Our Redirection Manager allows you to easily create and manage redirects for your broken links to avoid confusing search engines and users, as well as losing valuable backlinks. It even automatically sends users and search engines from your old URLs to your new ones.",this.$td)}}}};function et(t,i,a,v,e,c){const b=u("blur"),f=u("required-plans"),R=u("cta");return n(),_("div",{class:x({"aioseo-redirects":!0,"core-card":!a.noCoreCard})},[d(b,{noCoreCard:a.noCoreCard},null,8,["noCoreCard"]),d(R,{"cta-link":t.$links.getPricingUrl("redirects","redirects-upsell",a.parentComponentContext?a.parentComponentContext:null),"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("redirects",a.parentComponentContext?a.parentComponentContext:null,"home"),"feature-list":[e.strings.serverRedirects,e.strings.automaticRedirects,e.strings.redirectMonitoring,e.strings.monitoring404,e.strings.fullSiteRedirects,e.strings.siteAliases]},{"header-text":l(()=>[h(o(e.strings.ctaHeader),1)]),description:l(()=>[d(f,{addon:"aioseo-redirects"}),h(" "+o(e.strings.redirectsDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])],2)}const vt=w(Ze,[["render",et]]);export{Ct as A,Y as B,vt as L,yt as R};