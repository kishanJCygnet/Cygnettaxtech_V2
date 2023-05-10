import{a as $,d as x,m as A}from"./vuex.esm-bundler.97e30e47.js";import{W as B}from"./WpTable.09ccfd81.js";import"./default-i18n.ab92175e.js";import"./constants.817c4cd3.js";import{_ as v,r as c,o as l,c as u,d,t as i,a as h,f as o,w as r,g as C,e as f,h as b}from"./_plugin-vue_export-helper.49ea0e68.js";import{D as w}from"./index.cda4d160.js";import"./SaveChanges.203efc2d.js";import{P as D}from"./PostTypes.9ab32454.js";import{V as F,S as T,T as O,c as I}from"./Statistic.6279848c.js";import{C as U}from"./ScoreButton.2fe9b7f2.js";import{C as L}from"./Table.edad123c.js";import{C as V}from"./Index.a6f4141a.js";import{S as N,a as j,b as E,c as H}from"./Affiliate.bd403a25.js";import{S as M}from"./Suggestion.88862488.js";const W={components:{apexchart:F},props:{points:{type:Object,required:!0},peak:{type:Number,default(){return 0}},recovering:{type:Boolean,default(){return!1}},height:{type:Number,default(){return 50}}},data(){return{strings:{recovering:this.$t.__("Slowly Recovering",this.$td),peak:this.$t.__("Peak",this.$td)}}},computed:{getSeries(){const e=this.points,n=[];return Object.keys(e).forEach(s=>{n.push({x:s,y:e[s]})}),[{data:n}]},chartOptions(){const e=this.peak;return{colors:[function({value:n}){return n===e?"#005AE0":"#99C2FF"}],chart:{type:"bar",sparkline:{enabled:!0},zoom:{enabled:!1},toolbar:{show:!1},parentHeightOffset:0,background:"#fff"},grid:{show:!1,padding:{top:2,right:2,bottom:0,left:2}},plotOptions:{bar:{columnWidth:"85%",barHeight:"100%"}},fill:{type:"solid"},tooltip:{enabled:!0,x:{show:!0,formatter:n=>w.fromFormat(n,"yyyy-MM").setZone(w.zone).toLocaleString({month:"long",year:"numeric"})},y:{formatter:n=>{const s=this.$t.sprintf(this.$t.__("%1$s points",this.$td),this.$numbers.numberFormat(n,0));let p="";return n===e&&(p=`<span class="peak">${this.strings.peak}</span>`),s+p}},marker:{show:!1}}}}}},G={class:"aioseo-graph-decay"},R={key:0,class:"aioseo-graph-decay-recovering"};function Z(e,n,s,p,a,g){const m=c("apexchart");return l(),u("div",G,[d(m,{width:"100%",height:s.height,ref:"apexchart",options:g.chartOptions,series:g.getSeries,class:"aioseo-graph-decay-chart"},null,8,["height","options","series"]),s.recovering?(l(),u("div",R,i(a.strings.recovering),1)):h("",!0)])}const q=v(W,[["render",Z]]);const z={components:{SvgLinkAffiliate:N,SvgLinkExternal:j,SvgLinkInternalInbound:E,SvgLinkInternalOutbound:H,SvgLinkSuggestion:M},data(){return{strings:{links:this.$t.__("Links:",this.$tdPro)}}},props:{row:Object}},J={key:0,class:"post-actions"},K={key:0,class:"link-assistant"},Q={class:"title"},X={class:"count"},Y={class:"total"},tt={class:"count"},et={class:"total"},st={class:"count"},ot={class:"total"},it={class:"count"},nt={class:"total"},rt={class:"count"},at={class:"total"};function lt(e,n,s,p,a,g){const m=c("svg-link-internal-inbound"),y=c("svg-link-internal-outbound"),_=c("svg-link-external"),k=c("svg-link-affiliate"),S=c("svg-link-suggestion");return s.row.postId?(l(),u("div",J,[this.$addons.isActive("aioseo-link-assistant")&&!this.$addons.requiresUpgrade("aioseo-link-assistant")&&s.row.linkAssistant?(l(),u("div",K,[o("div",Q,i(a.strings.links),1),o("div",X,[d(m),o("span",Y,i(s.row.linkAssistant.inboundInternal||0),1)]),o("div",tt,[d(y),o("span",et,i(s.row.linkAssistant.outboundInternal||0),1)]),o("div",st,[d(_),o("span",ot,i(s.row.linkAssistant.external||0),1)]),o("div",it,[d(k),o("span",nt,i(s.row.linkAssistant.affiliate||0),1)]),o("div",rt,[d(S),o("span",at,i(s.row.linkAssistant.linkSuggestions||0),1)])])):h("",!0)])):h("",!0)}const ct=v(z,[["render",lt]]);const dt={components:{CoreScoreButton:U,CoreWpTable:L,Cta:V,GraphDecay:q,PostActions:ct,Statistic:T},mixins:[D,B,O],data(){return{tableId:"aioseo-search-statistics-post-table",changeItemsPerPageSlug:"searchStatisticsSeoStatistics",showUpsell:!1,strings:{ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Access Control",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Access Control is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}},props:{posts:Object,isLoading:Boolean,showHeader:{type:Boolean,default(){return!0}},showTableFooter:Boolean,showItemsPerPage:Boolean,disableSorting:Boolean,columns:{type:Array,default(){return["post_title","seo_score","clicks","impressions","position"]}},appendColumns:{type:Object,default(){return{}}},defaultSorting:{type:Object,default(){return{}}},initialFilter:{type:String,default(){return""}},updateAction:{type:String,default(){return"updateSeoStatistics"}}},computed:{...$("search-statistics",["data","loading"]),...x(["isUnlicensed"]),allColumns(){var s,p;const e=I(this.columns),n=((p=(s=this.posts)==null?void 0:s.filters)==null?void 0:p.find(a=>a.active))||{};return this.appendColumns[n.slug||"all"]&&e.push(this.appendColumns[n.slug||"all"]),e},tableColumns(){return[{slug:"row",label:"#",width:"40px"},{slug:"post_title",label:this.$t.__("Title",this.$td),width:"100%",sortDir:this.orderBy==="post_title"?this.orderDir:"asc",sorted:this.orderBy==="post_title"},{slug:"seo_score",label:this.$t.__("TruSEO Score",this.$td),width:"130px",sortDir:this.orderBy==="seo_score"?this.orderDir:"asc",sorted:this.orderBy==="seo_score"},{slug:"clicks",label:this.$t.__("Clicks",this.$td),width:"80px",sortable:this.isSortable,sortDir:this.orderBy==="clicks"?this.orderDir:"asc",sorted:this.orderBy==="clicks"},{slug:"impressions",label:this.$t.__("Impressions",this.$td),width:"110px",sortable:this.isSortable,sortDir:this.orderBy==="impressions"?this.orderDir:"asc",sorted:this.orderBy==="impressions"},{slug:"position",label:this.$t.__("Position",this.$td),width:"90px",sortable:this.isSortable,sortDir:this.orderBy==="position"?this.orderDir:"asc",sorted:this.orderBy==="position"},{slug:"lastUpdated",label:this.$t.__("Last Updated On",this.$td),width:"160px",sortDir:this.orderBy==="lastUpdated"?this.orderDir:"asc",sorted:this.orderBy==="lastUpdated"},{slug:"decay",label:this.$t.__("Loss",this.$td),width:"140px",sortable:this.isSortable,sortDir:this.orderBy==="decay"?this.orderDir:"asc",sorted:this.orderBy==="decay"},{slug:"decayPercent",label:this.$t.__("Drop (%)",this.$td),width:"120px",sortable:this.isSortable,sortDir:this.orderBy==="decayPercent"?this.orderDir:"asc",sorted:this.orderBy==="decayPercent"},{slug:"performance",label:this.$t.__("Performance Score",this.$td),width:"150px"},{slug:"diffDecay",label:this.$t.__("Diff",this.$td),width:"95px"},{slug:"diffPosition",label:this.$t.__("Diff",this.$td),width:"80px"}].filter(e=>this.allColumns.includes(e.slug))},isSortable(){return this.disableSorting?!1:this.filter==="all"&&this.$isPro&&!this.isUnlicensed}},methods:{...A("search-statistics",["updateSeoStatistics","updateContentRankings"]),resetSelectedFilters(){this.selectedFilters.postType="",this.processAdditionaFilterOptionSelected({name:"postType",selectedValue:""})},fetchData(e){if(typeof this[this.updateAction]=="function")return this[this.updateAction](e)}},mounted(){this.initialFilter&&this.processFilter({slug:this.initialFilter})}},pt={class:"aioseo-search-statistics-post-table"},ht={class:"post-row"},ut={class:"post-title"},_t=["onClick"],ft={key:1,class:"post-title"},gt={key:0,class:"row-actions"},mt=["href"],bt=["href"];function yt(e,n,s,p,a,g){const m=c("post-actions"),y=c("core-score-button"),_=c("statistic"),k=c("graph-decay"),S=c("cta"),P=c("core-wp-table");return l(),u("div",pt,[d(P,{ref:"table",class:"posts-table",id:a.tableId,columns:g.tableColumns,rows:Object.values(s.posts.rows),totals:s.posts.totals,filters:s.posts.filters,"additional-filters":s.posts.additionalFilters,"selected-filters":e.selectedFilters,loading:s.isLoading||e.loading.seoStatistics,"initial-page-number":e.pageNumber,"initial-search-term":e.searchTerm,"initial-items-per-page":e.$aioseo.settings.tablePagination[a.changeItemsPerPageSlug],"show-header":s.showHeader,"show-bulk-actions":!1,"show-table-footer":s.showTableFooter,"show-items-per-page":s.showItemsPerPage,"show-pagination":"","blur-rows":a.showUpsell,onFilterTable:e.processFilter,onProcessAdditionalFilters:e.processAdditionalFilters,onAdditionalFilterOptionSelected:e.processAdditionaFilterOptionSelected,onPaginate:e.processPagination,onProcessChangeItemsPerPage:e.processChangeItemsPerPage,onSearch:e.processSearch,onSortColumn:e.processSort},{row:r(({index:t})=>[o("div",ht,i(t+1),1)]),post_title:r(({row:t})=>[o("div",ut,[t.postId?(l(),u("a",{key:0,href:"#",onClick:C(kt=>e.openPostDetail(t),["prevent"])},i(t.postTitle),9,_t)):(l(),u("span",ft,i(t.postTitle),1))]),d(m,{row:t},null,8,["row"]),t.postId?(l(),u("div",gt,[o("span",null,[o("a",{class:"view",href:t.context.permalink,target:"_blank"},[o("span",null,i(e.viewPost(t.context.postType.singular)),1)],8,mt),f(" | ")]),o("span",null,[o("a",{class:"edit",href:t.context.editLink,target:"_blank"},[o("span",null,i(e.editPost(t.context.postType.singular)),1)],8,bt)])])):h("",!0)]),seo_score:r(({row:t})=>[t.seoScore?(l(),b(y,{key:0,class:"table-score-button",score:t.seoScore},null,8,["score"])):h("",!0)]),clicks:r(({row:t})=>[f(i(e.$numbers.compactNumber(t.clicks)),1)]),impressions:r(({row:t})=>[f(i(e.$numbers.compactNumber(t.impressions)),1)]),position:r(({row:t})=>[f(i(Math.round(t.position).toFixed(0)),1)]),lastUpdated:r(({row:t})=>[f(i(t.context.lastUpdated||"-"),1)]),decay:r(({row:t})=>[d(_,{type:"decay","show-difference":!1,total:t.decay,showZeroValues:!0,class:"no-margin"},null,8,["total"])]),decayPercent:r(({row:t})=>[d(_,{type:"decayPercent","show-difference":!1,total:t.decayPercent,showZeroValues:!0,class:"no-margin"},null,8,["total"])]),performance:r(({row:t})=>[d(k,{points:t.points,peak:t.peak,recovering:t.recovering,height:38},null,8,["points","peak","recovering"])]),diffPosition:r(({row:t})=>[t.difference.comparison?(l(),b(_,{key:0,type:"position","show-original":!1,difference:t.difference.position,"tooltip-offset":"-100px,0"},null,8,["difference"])):h("",!0)]),diffDecay:r(({row:t})=>[t.difference.comparison?(l(),b(_,{key:0,type:"diffDecay","show-original":!1,difference:t.difference.decay,"tooltip-offset":"-100px,0"},null,8,["difference"])):h("",!0)]),cta:r(()=>[a.showUpsell?(l(),b(S,{key:0,"cta-link":e.$links.getPricingUrl("search-statistics","search-statistics-upsell"),"button-text":a.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("search-statistics","search-statistics-upsell","home")},{"header-text":r(()=>[f(i(a.strings.ctaHeader),1)]),_:1},8,["cta-link","button-text","learn-more-link"])):h("",!0)]),_:1},8,["id","columns","rows","totals","filters","additional-filters","selected-filters","loading","initial-page-number","initial-search-term","initial-items-per-page","show-header","show-table-footer","show-items-per-page","blur-rows","onFilterTable","onProcessAdditionalFilters","onAdditionalFilterOptionSelected","onPaginate","onProcessChangeItemsPerPage","onSearch","onSortColumn"])])}const Ut=v(dt,[["render",yt]]);export{Ut as P};
