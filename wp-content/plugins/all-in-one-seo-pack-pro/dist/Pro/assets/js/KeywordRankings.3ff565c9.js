import{A as x,d as G,m as z}from"./links.64a86a6c.js";import{C as V}from"./Blur.5051545a.js";import{C as L}from"./Card.627e6c48.js";import{G as R,a as A}from"./Row.53f210bf.js";import{G as W,S as F}from"./SeoStatisticsOverview.c317e388.js";import{r,o as d,c as k,g as i,b as P,d as $,w as e,a as m,f as D,x as u,B as y,e as I,n as J}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_ as C}from"./_plugin-vue_export-helper.0e38850e.js";import{K as H}from"./KeywordsGraph.fbf96f31.js";import{n as M}from"./numbers.8fa607e7.js";import{d as K}from"./isArrayLikeObject.2110cf7d.js";import"./index.61edcc6f.js";import{C as U}from"./Index.af67901e.js";import"./default-i18n.cc9dbff0.js";import"./constants.c7984802.js";/* empty css                                              */import{C as O,W as Q}from"./Table.215f8457.js";import{P as E}from"./PostTypes.9ab32454.js";import{S as N,T as X,c as Y,L as Z}from"./Statistic.df11e7e4.js";import{C as tt}from"./Tooltip.06c652b4.js";import{C as et,b as st}from"./Caret.08be6d0c.js";import{R as ot}from"./RequiredPlans.3892474f.js";/* empty css                                            *//* empty css                                              */const it={setup(){return{searchStatisticsStore:x()}},components:{Graph:W},computed:{series(){var h,a;if(!((a=(h=this.searchStatisticsStore.data)==null?void 0:h.keywords)!=null&&a.distribution))return[];const t=this.searchStatisticsStore.data.keywords.distribution;return[{name:this.$t.__("Keywords",this.$td),data:[{x:this.$t.__("Top 3 Position",this.$td),y:t.top3,fillColor:"#005AE0"},{x:this.$t.__("4-10 Position",this.$td),y:t.top10,fillColor:"#00AA63"},{x:this.$t.__("11-50 Position",this.$td),y:t.top50,fillColor:"#F18200"},{x:this.$t.__("50-100 Position",this.$td),y:t.top100,fillColor:"#DF2A4A"}]}]}}},rt={class:"aioseo-search-statistics-keywords-distribution-graph"};function nt(t,h,a,c,s,l){const _=r("graph");return d(),k("div",rt,[i(_,{series:l.series,loading:c.searchStatisticsStore.loading.keywords,preset:"keywordsDistribution"},null,8,["series","loading"])])}const j=C(it,[["render",nt]]);const at={setup(){return{searchStatisticsStore:x()}},components:{CoreLoader:et,CoreWpTable:O,Statistic:N},mixins:[E],props:{index:{type:Number,required:!0},postDetail:{type:Boolean,required:!1,default:!1}},data(){return{numbers:M,loading:!1}},computed:{postColumns(){return[{slug:"post_title",label:this.$t.__("Title",this.$td),width:"100%"},{slug:"clicks",label:this.$t.__("Clicks",this.$td),width:"120px"},{slug:"ctr",label:this.$t.__("Avg. CTR",this.$td),width:"120px"},{slug:"impressions",label:this.$t.__("Impressions",this.$td),width:"120px"},{slug:"position",label:this.$t.__("Position",this.$td),width:"120px"}]},keywords(){return this.postDetail?this.searchStatisticsStore.data.postDetail.keywords.paginated.rows:this.searchStatisticsStore.data.keywords.paginated.rows},row(){return this.keywords[this.index]}},methods:{openPostDetail(t){this.$router.push({path:"/post-detail",query:{postId:t.postId,previousRoute:this.$route.name}})}},mounted(){var t,h;!this.row||(h=(t=this.row)==null?void 0:t.pages)!=null&&h.length||(this.loading=!0,this.searchStatisticsStore.getPagesByKeywords([this.row.keyword]).then(a=>{this.loading=!1;const c=a[this.row.keyword];c&&(this.postDetail?this.searchStatisticsStore.data.postDetail.keywords.paginated.rows[this.index].pages=Object.values(c).slice(0,10):this.searchStatisticsStore.data.keywords.paginated.rows[this.index].pages=Object.values(c).slice(0,10))}))}},lt={class:"keyword-inner"},ct={key:0,class:"keyword-inner-loading"},dt={class:"post-title"},ht=["onClick"],pt={key:1,class:"post-title"},ut={key:0,class:"row-actions"},_t=["href"],ft=["href"];function gt(t,h,a,c,s,l){const _=r("core-loader"),g=r("statistic"),f=r("core-wp-table");return d(),k("div",lt,[s.loading?(d(),k("div",ct,[i(_,{dark:""})])):P("",!0),l.row.pages&&!s.loading?(d(),$(f,{ref:"table",class:"posts-table",key:1,columns:l.postColumns,rows:l.row.pages,"show-header":!1,"show-bulk-actions":!1,"show-table-footer":!1},{post_title:e(({row:o})=>[m("div",dt,[o.postId?(d(),k("a",{key:0,href:"#",onClick:D(b=>l.openPostDetail(o),["prevent"])},u(o.postTitle),9,ht)):(d(),k("span",pt,u(o.postTitle),1))]),o.postId?(d(),k("div",ut,[m("span",null,[m("a",{class:"view",href:o.context.permalink,target:"_blank"},[m("span",null,u(t.viewPost(o.context.postType.singular)),1)],8,_t),y(" | ")]),m("span",null,[m("a",{class:"edit",href:o.context.editLink,target:"_blank"},[m("span",null,u(t.editPost(o.context.postType.singular)),1)],8,ft)])])):P("",!0)]),clicks:e(({row:o})=>[y(u(s.numbers.compactNumber(o.clicks)),1)]),ctr:e(({row:o})=>[y(u(o.ctr)+"% ",1)]),impressions:e(({row:o})=>[y(u(s.numbers.compactNumber(o.impressions)),1)]),position:e(({row:o})=>[o.difference.comparison?(d(),$(g,{key:0,type:"position",total:o.position,difference:o.difference.position},null,8,["total","difference"])):P("",!0)]),_:1},8,["columns","rows"])):P("",!0)])}const mt=C(at,[["render",gt]]);const yt={setup(){return{licenseStore:G(),searchStatisticsStore:x(),settingsStore:z()}},components:{CoreTooltip:tt,CoreWpTable:O,Cta:U,KeywordInner:mt,Statistic:N,SvgCaret:st},mixins:[E,Q,X],data(){return{numbers:M,tableId:"aioseo-search-statistics-keywords-table",activeRow:-1,showUpsell:!1,isPreloading:!1,isFetching:!1,interval:null,strings:{position:this.$t.__("Position",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Access Control",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Access Control is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}},props:{keywords:Object,loading:{type:Boolean,default(){return!1}},showHeader:{type:Boolean,default(){return!0}},showTableFooter:Boolean,showItemsPerPage:Boolean,columns:{type:Array,default(){return["keyword","clicks","ctr","impressions","position","diffPosition","buttons"]}},appendColumns:{type:Object,default(){return{}}},postDetail:{type:Boolean,default(){return!1}},refreshOnLoad:{type:Boolean,default(){return!0}},page:{type:String,default(){return""}}},computed:{changeItemsPerPageSlug(){return this.postDetail?"searchStatisticsPostDetailKeywords":"searchStatisticsKeywordRankings"},allColumns(){var a,c;const t=Y(this.columns),h=((c=(a=this.keywords)==null?void 0:a.filters)==null?void 0:c.find(s=>s.active))||{};return this.appendColumns[h.slug||"all"]&&t.push(this.appendColumns[h.slug||"all"]),t},tableColumns(){return[{slug:"keyword",label:this.$t.__("Keyword",this.$td),sortable:this.isSortable,sortDir:this.orderBy==="keyword"?this.orderDir:"asc",sorted:this.orderBy==="keyword"},{slug:"clicks",label:this.$t.__("Clicks",this.$td),width:"80px",sortable:this.isSortable,sortDir:this.orderBy==="clicks"?this.orderDir:"asc",sorted:this.orderBy==="clicks"},{slug:"ctr",label:this.$t.__("Avg. CTR",this.$td),width:"100px",sortable:this.isSortable,sortDir:this.orderBy==="ctr"?this.orderDir:"asc",sorted:this.orderBy==="ctr"},{slug:"impressions",label:this.$t.__("Impressions",this.$td),width:"120px",sortable:this.isSortable,sortDir:this.orderBy==="impressions"?this.orderDir:"asc",sorted:this.orderBy==="impressions"},{slug:"position",label:this.$t.__("Position",this.$td),width:"85px",sortable:this.isSortable,sortDir:this.orderBy==="position"?this.orderDir:"asc",sorted:this.orderBy==="position"},{slug:"diffDecay",label:this.$t.__("Diff",this.$td),width:"95px"},{slug:"diffPosition",label:this.$t.__("Diff",this.$td),width:"80px"},{slug:"buttons",label:"",width:this.hasSlot("buttons")?"240px":"40px"}].filter(t=>this.allColumns.includes(t.slug))},isSortable(){return this.filter==="all"&&this.$isPro&&!this.licenseStore.isUnlicensed}},methods:{decodeHTMLEntities:K,isRowActive(t){return t===this.activeRow},toggleRow(t){if(this.activeRow===t){this.activeRow=-1;return}this.activeRow=t},fetchData(t){return this.isPreloading=!1,this.isFetching=!0,this.page!==""&&(t={...t,page:this.page}),this.postDetail?this.searchStatisticsStore.updatePostDetailKeywords(t).finally(()=>{this.isFetching=!1}):this.searchStatisticsStore.updateKeywords(t).finally(()=>{this.isFetching=!1})},hasSlot(t="default"){return!!this.$slots[t]},shouldLimitText(t){return 120<K(t).length},maybePreloadPages(){if(!(!this.searchStatisticsStore.isConnected||this.isPreloading)){if(this.isFetching&&!this.interval){this.interval=setInterval(()=>{this.isFetching||(clearInterval(this.interval),this.maybePreloadPages())},100);return}this.isPreloading=!0,this.preloadPages().then(()=>{this.isPreloading=!1})}},preloadPages(){var s,l,_,g,f;let t=(l=(s=this.searchStatisticsStore.data.keywords)==null?void 0:s.paginated)==null?void 0:l.rows;this.postDetail&&(t=(f=(g=(_=this.searchStatisticsStore.data.postDetail)==null?void 0:_.keywords)==null?void 0:g.paginated)==null?void 0:f.rows);const h=[];t.forEach(o=>{o.pages||h.push(o.keyword)});const a=[];for(let o=0;o<h.length;o+=10)a.push(h.slice(o,o+10));const c=[];return a.forEach(o=>{c.push(new Promise(b=>{this.searchStatisticsStore.getPagesByKeywords(o).then(S=>{Object.entries(S).forEach(v=>{const[n,p]=v,w=t.findIndex(B=>B.keyword===n);if(w===-1)return;const T=Object.values(p).slice(0,10);this.postDetail?this.searchStatisticsStore.data.postDetail.keywords.paginated.rows[w].pages=T:this.searchStatisticsStore.data.keywords.paginated.rows[w].pages=T})}).finally(()=>{b()})}))}),Promise.all(c)}},mounted(){this.maybePreloadPages()},updated(){this.maybePreloadPages()}},wt={class:"aioseo-search-statistics-keywords-table"},kt={class:"keyword"},bt=["onClick"],St=["onClick"],Pt={class:""};function $t(t,h,a,c,s,l){const _=r("core-tooltip"),g=r("statistic"),f=r("svg-caret"),o=r("base-button"),b=r("keyword-inner"),S=r("cta"),v=r("core-wp-table");return d(),k("div",wt,[i(v,{ref:"table",class:"keywords-table",id:s.tableId,columns:l.tableColumns,rows:Object.values(a.keywords.rows),totals:a.keywords.totals,filters:a.keywords.filters,"additional-filters":a.keywords.additionalFilters,loading:a.loading,"initial-page-number":t.pageNumber,"initial-search-term":t.searchTerm,"initial-items-per-page":c.settingsStore.settings.tablePagination[l.changeItemsPerPageSlug],"show-header":a.showHeader,"show-bulk-actions":!1,"show-table-footer":a.showTableFooter,"show-items-per-page":a.showItemsPerPage,"show-pagination":"","blur-rows":s.showUpsell,onFilterTable:t.processFilter,onProcessAdditionalFilters:t.processAdditionalFilters,onPaginate:t.processPagination,onProcessChangeItemsPerPage:t.processChangeItemsPerPage,onSearch:t.processSearch,onSortColumn:t.processSort},{keyword:e(({row:n,index:p,editRow:w})=>[m("div",kt,[l.shouldLimitText(n.keyword)?(d(),$(_,{key:0},{tooltip:e(()=>[y(u(l.decodeHTMLEntities(n.keyword)),1)]),default:e(()=>[m("a",{class:"limit-line",href:"#",onClick:D(T=>{w(p),l.toggleRow(p)},["prevent"])},u(l.decodeHTMLEntities(n.keyword)),9,bt)]),_:2},1024)):(d(),k("a",{key:1,href:"#",onClick:D(T=>{w(p),l.toggleRow(p)},["prevent"])},u(l.decodeHTMLEntities(n.keyword)),9,St))])]),clicks:e(({row:n})=>[y(u(n.clicks),1)]),ctr:e(({row:n})=>[y(u(s.numbers.compactNumber(n.ctr))+"% ",1)]),impressions:e(({row:n})=>[y(u(s.numbers.compactNumber(n.impressions)),1)]),position:e(({row:n})=>[y(u(Math.round(n.position).toFixed(0)),1)]),diffPosition:e(({row:n})=>[n.difference.comparison?(d(),$(g,{key:0,type:"position",difference:n.difference.position,showCurrent:!1,"tooltip-offset":"-100px,0"},null,8,["difference"])):P("",!0)]),diffDecay:e(({row:n})=>[n.difference.comparison?(d(),$(g,{key:0,type:"decay",difference:n.difference.decay,showCurrent:!1,"tooltip-offset":"-100px,0"},null,8,["difference"])):P("",!0)]),buttons:e(({row:n,index:p,column:w,editRow:T})=>[m("div",Pt,[I(t.$slots,"buttons",{row:n,column:w,index:p}),i(o,{type:"gray",class:J(["toggle-row-button",{active:l.isRowActive(p)}]),onClick:B=>{T(p),l.toggleRow(p)}},{default:e(()=>[i(f)]),_:2},1032,["class","onClick"])])]),"edit-row":e(({index:n})=>[i(b,{index:n,postDetail:a.postDetail},null,8,["index","postDetail"])]),cta:e(()=>[s.showUpsell?(d(),$(S,{key:0,"cta-link":t.$links.getPricingUrl("search-statistics","search-statistics-upsell"),"button-text":s.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("search-statistics","search-statistics-upsell","home")},{"header-text":e(()=>[y(u(s.strings.ctaHeader),1)]),_:1},8,["cta-link","button-text","learn-more-link"])):P("",!0)]),tablenav:e(()=>[I(t.$slots,"tablenav")]),_:3},8,["id","columns","rows","totals","filters","additional-filters","loading","initial-page-number","initial-search-term","initial-items-per-page","show-header","show-table-footer","show-items-per-page","blur-rows","onFilterTable","onProcessAdditionalFilters","onPaginate","onProcessChangeItemsPerPage","onSearch","onSortColumn"])])}const q=C(yt,[["render",$t]]),vt={setup(){return{searchStatisticsStore:x()}},components:{CoreBlur:V,CoreCard:L,GridColumn:R,GridRow:A,KeywordsDistributionGraph:j,KeywordsGraph:H,KeywordsTable:q,SeoStatisticsOverview:F},data(){return{strings:{keywordPositionsCard:this.$t.__("Keyword Positions",this.$td),keywordPositionsTooltip:this.$t.__("This graph is a visual representation of how well <strong>keywords are ranking in search results over time</strong> based on their position and average CTR. This can help you understand the performance of keywords and identify any trends or fluctuations.",this.$td),keywordPerformanceCard:this.$t.__("Keyword Performance",this.$td),keywordPerformanceTooltip:this.$t.__("This table displays the performance of keywords that your site ranks for over time, including metrics such as impressions, click-through rate, and average position in search results. It allows for easy analysis of how keywords are performing and identification of any underperforming keywords that may need to be optimized or replaced.",this.$td)},defaultKeywords:{rows:[],totals:{page:0,pages:0,total:0}}}}},Ct={class:"aioseo-search-statistics-dashboard"},Tt=["innerHTML"],xt=["innerHTML"];function Dt(t,h,a,c,s,l){const _=r("seo-statistics-overview"),g=r("keywords-graph"),f=r("grid-column"),o=r("keywords-distribution-graph"),b=r("grid-row"),S=r("core-card"),v=r("keywords-table"),n=r("core-blur");return d(),$(n,null,{default:e(()=>[m("div",Ct,[i(b,null,{default:e(()=>[i(f,null,{default:e(()=>[i(S,{slug:"keywordPositions","header-text":s.strings.keywordPositionsCard,toggles:!1,"no-slide":""},{tooltip:e(()=>[m("span",{innerHTML:s.strings.keywordPositionsTooltip},null,8,Tt)]),default:e(()=>[i(_,{statistics:["keywords","impressions","position"],"show-graph":!1,view:"side-by-side"}),i(b,null,{default:e(()=>[i(f,{md:"6"},{default:e(()=>[i(g,{"legend-style":"simple"})]),_:1}),i(f,{md:"6"},{default:e(()=>[i(o)]),_:1})]),_:1})]),_:1},8,["header-text"]),i(S,{slug:"keywordPerformance","header-text":s.strings.keywordPerformanceCard,toggles:!1,"no-slide":""},{tooltip:e(()=>[m("span",{innerHTML:s.strings.keywordPerformanceTooltip},null,8,xt)]),default:e(()=>{var p,w;return[i(v,{keywords:((w=(p=c.searchStatisticsStore.data)==null?void 0:p.keywords)==null?void 0:w.paginated)||s.defaultKeywords,ref:"table","show-items-per-page":"","show-table-footer":""},null,8,["keywords"])]}),_:1},8,["header-text"])]),_:1})]),_:1})])]),_:1})}const Bt=C(vt,[["render",Dt]]);const It={components:{Blur:Bt,Cta:U,RequiredPlans:ot},data(){return{strings:{ctaButtonText:this.$t.sprintf(this.$t.__("Upgrade to %1$s and Unlock Search Statistics",this.$td),"Pro"),ctaHeader:this.$t.sprintf(this.$t.__("Search Statistics is only for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),ctaDescription:this.$t.__("Connect your site to Google Search Console to receive insights on how content is being discovered. Identify areas for improvement and drive traffic to your website.",this.$td),thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td),feature1:this.$t.__("Search traffic insights",this.$td),feature2:this.$t.__("Track page rankings",this.$td),feature3:this.$t.__("Track keyword rankings",this.$td),feature4:this.$t.__("Speed tests for individual pages/posts",this.$td)}}}},Kt={class:"aioseo-search-statistics-keyword-rankings"};function Lt(t,h,a,c,s,l){const _=r("blur"),g=r("required-plans"),f=r("cta");return d(),k("div",Kt,[i(_),i(f,{"cta-link":t.$links.getPricingUrl("search-statistics","search-statistics-upsell","keyword-rankings"),"button-text":s.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("search-statistics","keyword-rankings","home"),"feature-list":[s.strings.feature1,s.strings.feature2,s.strings.feature3,s.strings.feature4],"align-top":""},{"header-text":e(()=>[y(u(s.strings.ctaHeader),1)]),description:e(()=>[i(g,{"core-feature":["search-statistics","keyword-rankings"]}),y(" "+u(s.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])])}const Rt=C(It,[["render",Lt]]);const At={setup(){return{searchStatisticsStore:x()}},components:{CoreCard:L,GridColumn:R,GridRow:A,KeywordsDistributionGraph:j,KeywordsGraph:H,KeywordsTable:q,SeoStatisticsOverview:F},data(){return{strings:{keywordPositionsCard:this.$t.__("Keyword Positions",this.$tdPro),keywordPositionsTooltip:this.$t.__("This graph is a visual representation of how well <strong>keywords are ranking in search results over time</strong> based on their position and average CTR. This can help you understand the performance of keywords and identify any trends or fluctuations.",this.$tdPro),keywordPerformanceCard:this.$t.__("Keyword Performance",this.$tdPro),keywordPerformanceTooltip:this.$t.__("This table displays the performance of keywords that your site ranks for over time, including metrics such as impressions, click-through rate, and average position in search results. It allows for easy analysis of how keywords are performing and identification of any underperforming keywords that may need to be optimized or replaced.",this.$tdPro)},defaultKeywords:{rows:[],totals:{page:0,pages:0,total:0}}}},mounted(){this.searchStatisticsStore.isConnected&&this.searchStatisticsStore.loadInitialData()}},Ft={class:"aioseo-search-statistics-keywords"},Ht=["innerHTML"],Mt=["innerHTML"];function Ut(t,h,a,c,s,l){const _=r("seo-statistics-overview"),g=r("keywords-graph"),f=r("grid-column"),o=r("keywords-distribution-graph"),b=r("grid-row"),S=r("core-card"),v=r("keywords-table");return d(),k("div",Ft,[i(b,null,{default:e(()=>[i(f,null,{default:e(()=>[i(S,{slug:"keywordPositions","header-text":s.strings.keywordPositionsCard,toggles:!1,"no-slide":""},{tooltip:e(()=>[m("span",{innerHTML:s.strings.keywordPositionsTooltip},null,8,Ht)]),default:e(()=>[i(_,{statistics:["keywords","impressions","position"],"show-graph":!1,view:"side-by-side"}),i(b,null,{default:e(()=>[i(f,{md:"6"},{default:e(()=>[i(g,{"legend-style":"simple"})]),_:1}),i(f,{md:"6"},{default:e(()=>[i(o)]),_:1})]),_:1})]),_:1},8,["header-text"]),i(S,{slug:"keywordPerformance","header-text":s.strings.keywordPerformanceCard,toggles:!1,"no-slide":""},{tooltip:e(()=>[m("span",{innerHTML:s.strings.keywordPerformanceTooltip},null,8,Mt)]),default:e(()=>{var n,p;return[i(v,{keywords:((p=(n=c.searchStatisticsStore.data)==null?void 0:n.keywords)==null?void 0:p.paginated)||s.defaultKeywords,loading:c.searchStatisticsStore.loading.keywords,ref:"table",columns:["keyword","clicks","ctr","impressions","position","buttons"],"append-columns":{all:"diffPosition",topLosing:"diffDecay",topWinning:"diffDecay"},"show-items-per-page":"","show-table-footer":""},null,8,["keywords","loading"])]}),_:1},8,["header-text"])]),_:1})]),_:1})])}const Ot=C(At,[["render",Ut]]),Et={mixins:[Z],components:{KeywordRankings:Ot,Lite:Rt}},Nt={class:"aioseo-search-statistics-keyword-rankings"};function jt(t,h,a,c,s,l){const _=r("keyword-rankings",!0),g=r("lite");return d(),k("div",Nt,[t.shouldShowMain("search-statistics","keyword-rankings")?(d(),$(_,{key:0})):P("",!0),t.shouldShowUpgrade("search-statistics","keyword-rankings")||t.shouldShowLite?(d(),$(g,{key:1})):P("",!0)])}const qt=C(Et,[["render",jt]]),_e=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"}));export{q as K,qt as a,_e as b};
