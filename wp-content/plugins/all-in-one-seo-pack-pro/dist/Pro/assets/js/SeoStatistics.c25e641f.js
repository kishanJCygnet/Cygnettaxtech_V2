import{a as k,d as P,m as E}from"./vuex.esm-bundler.97e30e47.js";import{C as I}from"./Blur.ef3abea2.js";import{C as L}from"./Card.32a76e4b.js";import{G as F,S as O}from"./SeoStatisticsOverview.c687846b.js";import{G,a as U}from"./Row.87dd14fc.js";import{P as B}from"./PostsTable.ba39cb96.js";import{_ as S,r as e,o as d,h as b,w as o,f as v,d as i,e as f,t as g,c as T,a as C}from"./_plugin-vue_export-helper.49ea0e68.js";import{C as q}from"./Index.a6f4141a.js";import{R as D}from"./RequiredPlans.ad9de58d.js";import{P as M}from"./PostTypes.9ab32454.js";import{L as H}from"./WpTable.24633fe3.js";import"./default-i18n.ab92175e.js";import"./constants.d064fb5f.js";import"./index.cda4d160.js";import"./SaveChanges.203efc2d.js";import"./Tooltip.754dc940.js";import"./Caret.09e548f3.js";import"./index.d59f905b.js";import"./Slide.dcb3da9d.js";import"./Statistic.da6a74a5.js";import"./isArrayLikeObject.d5975086.js";import"./_arrayEach.56a9f647.js";import"./_getAllKeys.81623af3.js";import"./_getTag.06b10d2d.js";import"./_getAllKeysIn.a0076cbc.js";import"./_commonjsHelpers.f84db168.js";import"./vue.runtime.esm-bundler.67cba34f.js";import"./ScoreButton.2fe9b7f2.js";import"./Table.edad123c.js";import"./Affiliate.bd403a25.js";import"./Suggestion.88862488.js";import"./helpers.871dba46.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.f3af2f4b.js";import"./cleanForSlug.8d948434.js";import"./html.68197829.js";import"./Index.20fccad8.js";const N={components:{CoreBlur:I,CoreCard:L,Graph:F,GridColumn:G,GridRow:U,PostsTable:B,SeoStatisticsOverview:O},data(){return{strings:{seoStatisticsCard:this.$t.__("SEO Statistics",this.$td),seoStatisticsTooltip:this.$t.__("The following SEO Statistics graphs are useful metrics for understanding the visibility of your website or pages in search results and can help you identify trends or changes over time.<br /><br />Note: This data is capped at the top 100 keywords per day to speed up processing and to help you prioritize your SEO efforts, so while the data may seem inconsistent with Google Search Console, this is intentional.",this.$td),contentCard:this.$t.__("Content",this.$td),postsTooltip:this.$t.__("These lists can be useful for understanding the performance of specific pages or posts and identifying opportunities for improvement. For example, the top winning content may be good candidates for further optimization or promotion, while the top losing may need to be reevaluated and potentially updated.",this.$td)},defaultPages:{rows:[],totals:{page:0,pages:0,total:0}}}},computed:{...k("search-statistics",["data","loading","isConnected"]),series(){var s,a,n,r;return!((a=(s=this.data)==null?void 0:s.seoStatistics)!=null&&a.statistics)||!((r=(n=this.data)==null?void 0:n.seoStatistics)!=null&&r.intervals)?[]:[{name:this.$t.__("Search Impressions",this.$td),data:this.data.seoStatistics.intervals.map(t=>({x:t.date,y:t.impressions})),legend:{total:this.data.seoStatistics.statistics.impressions}},{name:this.$t.__("Search Clicks",this.$td),data:this.data.seoStatistics.intervals.map(t=>({x:t.date,y:t.clicks})),legend:{total:this.data.seoStatistics.statistics.clicks}}]}}},A={class:"aioseo-search-statistics-dashboard"},R=["innerHTML"];function z(s,a,n,r,t,h){const c=e("seo-statistics-overview"),l=e("graph"),p=e("core-card"),y=e("posts-table"),$=e("grid-column"),w=e("grid-row"),m=e("core-blur");return d(),b(m,null,{default:o(()=>[v("div",A,[i(w,null,{default:o(()=>[i($,null,{default:o(()=>[i(p,{class:"aioseo-seo-statistics-card",slug:"seoPerformance","header-text":t.strings.seoStatisticsCard,toggles:!1,"no-slide":""},{tooltip:o(()=>[v("span",{innerHTML:t.strings.seoStatisticsTooltip},null,8,R)]),default:o(()=>[i(c,{statistics:["impressions","clicks","ctr","position"],"show-graph":!1,view:"side-by-side"}),i(l,{"multi-axis":"",series:h.series,"legend-style":"simple"},null,8,["series"])]),_:1},8,["header-text"]),i(p,{slug:"posts","header-text":t.strings.contentCard,toggles:!1,"no-slide":""},{tooltip:o(()=>[f(g(t.strings.postsTooltip),1)]),default:o(()=>{var u,_,x;return[i(y,{posts:((x=(_=(u=s.data)==null?void 0:u.seoStatistics)==null?void 0:_.pages)==null?void 0:x.paginated)||t.defaultPages,columns:["post_title","seo_score","clicks","impressions","position","diffPosition"],"show-items-per-page":"","show-table-footer":""},null,8,["posts"])]}),_:1},8,["header-text"])]),_:1})]),_:1})])]),_:1})}const V=S(N,[["render",z]]);const W={components:{Blur:V,Cta:q,RequiredPlans:D},data(){return{strings:{ctaButtonText:this.$t.sprintf(this.$t.__("Upgrade to %1$s and Unlock Search Statistics",this.$td),"Pro"),ctaHeader:this.$t.sprintf(this.$t.__("Search Statistics is only for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),ctaDescription:this.$t.__("Connect your site to Google Search Console to receive insights on how content is being discovered. Identify areas for improvement and drive traffic to your website.",this.$td),thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td),feature1:this.$t.__("Search traffic insights",this.$td),feature2:this.$t.__("Track page rankings",this.$td),feature3:this.$t.__("Track keyword rankings",this.$td),feature4:this.$t.__("Speed tests for individual pages/posts",this.$td)}}},computed:{...P(["isUnlicensed"])}},j={class:"aioseo-search-statistics-seo-statistics"};function J(s,a,n,r,t,h){const c=e("blur"),l=e("required-plans"),p=e("cta");return d(),T("div",j,[i(c),i(p,{"cta-link":s.$links.getPricingUrl("search-statistics","search-statistics-upsell","seo-statistics"),"button-text":t.strings.ctaButtonText,"learn-more-link":s.$links.getUpsellUrl("search-statistics","seo-statistics","home"),"feature-list":[t.strings.feature1,t.strings.feature2,t.strings.feature3,t.strings.feature4],"align-top":""},{"header-text":o(()=>[f(g(t.strings.ctaHeader),1)]),description:o(()=>[i(l,{"core-feature":["search-statistics","seo-statistics"]}),f(" "+g(t.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])])}const K=S(W,[["render",J]]);const Q={components:{CoreCard:L,Graph:F,GridColumn:G,GridRow:U,PostsTable:B,SeoStatisticsOverview:O},mixins:[M],data(){return{initialTableFilter:"",strings:{seoStatisticsCard:this.$t.__("SEO Statistics",this.$td),seoStatisticsTooltip:this.$t.__("The following SEO Statistics graphs are useful metrics for understanding the visibility of your website or pages in search results and can help you identify trends or changes over time.<br /><br />Note: This data is capped at the top 100 keywords per day to speed up processing and to help you prioritize your SEO efforts, so while the data may seem inconsistent with Google Search Console, this is intentional.",this.$td),contentCard:this.$t.__("Content Performance",this.$td),postsTooltip:this.$t.__("These lists can be useful for understanding the performance of specific pages or posts and identifying opportunities for improvement. For example, the top winning content may be good candidates for further optimization or promotion, while the top losing may need to be reevaluated and potentially updated.",this.$td)},defaultPages:{rows:[],totals:{page:0,pages:0,total:0}}}},computed:{...k("search-statistics",["data","loading","isConnected"]),...P(["isUnlicensed"]),series(){var s,a,n,r;return!((a=(s=this.data)==null?void 0:s.seoStatistics)!=null&&a.statistics)||!((r=(n=this.data)==null?void 0:n.seoStatistics)!=null&&r.intervals)?[]:[{name:this.$t.__("Search Impressions",this.$td),data:this.data.seoStatistics.intervals.map(t=>({x:t.date,y:t.impressions})),legend:{total:this.data.seoStatistics.statistics.impressions}},{name:this.$t.__("Search Clicks",this.$td),data:this.data.seoStatistics.intervals.map(t=>({x:t.date,y:t.clicks})),legend:{total:this.data.seoStatistics.statistics.clicks}}]}},methods:{...E("search-statistics",["loadInitialData"])},beforeMount(){var s;if(Object.keys((s=this.$route)==null?void 0:s.query).includes("tab"))switch(this.$route.query.tab){case"TopLosingPages":this.initialTableFilter="topLosing";break;case"TopWinningPages":this.initialTableFilter="topWinning";break;default:this.initialTableFilter="all"}},mounted(){this.isConnected&&this.loadInitialData()}},X={class:"aioseo-search-statistics-site-statistics"},Y=["innerHTML"];function Z(s,a,n,r,t,h){const c=e("seo-statistics-overview"),l=e("graph"),p=e("core-card"),y=e("posts-table"),$=e("grid-column"),w=e("grid-row");return d(),T("div",X,[i(w,null,{default:o(()=>[i($,null,{default:o(()=>[i(p,{class:"aioseo-seo-statistics-card",slug:"seoPerformance","header-text":t.strings.seoStatisticsCard,toggles:!1,"no-slide":""},{tooltip:o(()=>[v("span",{innerHTML:t.strings.seoStatisticsTooltip},null,8,Y)]),default:o(()=>[i(c,{statistics:["impressions","clicks","ctr","position"],"show-graph":!1,view:"side-by-side"}),i(l,{"multi-axis":"",series:h.series,loading:s.loading.seoStatistics,"legend-style":"simple"},null,8,["series","loading"])]),_:1},8,["header-text"]),i(p,{slug:"posts","header-text":t.strings.contentCard,toggles:!1,"no-slide":""},{tooltip:o(()=>[f(g(t.strings.postsTooltip),1)]),default:o(()=>{var m,u,_;return[i(y,{posts:((_=(u=(m=s.data)==null?void 0:m.seoStatistics)==null?void 0:u.pages)==null?void 0:_.paginated)||t.defaultPages,columns:["post_title","seo_score","clicks","impressions","position"],"append-columns":{all:"diffPosition",topLosing:"diffDecay",topWinning:"diffDecay"},initialFilter:t.initialTableFilter,"show-items-per-page":"","show-table-footer":""},null,8,["posts","initialFilter"])]}),_:1},8,["header-text"])]),_:1})]),_:1})])}const tt=S(Q,[["render",Z]]),st={mixins:[H],components:{SeoStatistics:tt,Lite:K}},et={class:"aioseo-search-statistics-seo-statistics"};function it(s,a,n,r,t,h){const c=e("seo-statistics",!0),l=e("lite");return d(),T("div",et,[s.shouldShowMain("search-statistics","seo-statistics")?(d(),b(c,{key:0})):C("",!0),s.shouldShowUpgrade("search-statistics","seo-statistics")||s.shouldShowLite?(d(),b(l,{key:1})):C("",!0)])}const Nt=S(st,[["render",it]]);export{Nt as default};
