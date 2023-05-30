import{m as k,b as P,a as B}from"./vuex.esm-bundler.2b955043.js";import{C as E}from"./Blur.ff94edf5.js";import{C as L}from"./Card.3fe33c7e.js";import{G as F,S as O}from"./SeoStatisticsOverview.e7013d04.js";import{G,a as U}from"./Row.f8e3a585.js";import{P as q}from"./PostsTable.d55a9755.js";import{_ as S,q as e,o as d,j as w,k as o,a as v,z as i,x as f,t as g,c as T,b as C}from"./_plugin-vue_export-helper.a2c961b3.js";import{C as I}from"./Index.d2a7b6fb.js";import{R as D}from"./RequiredPlans.cc208e33.js";import{P as M}from"./PostTypes.9ab32454.js";import{L as H}from"./WpTable.4156f8c9.js";import"./default-i18n.ab92175e.js";import"./constants.145da60f.js";import"./index.a915b491.js";import"./SaveChanges.6857467d.js";import"./Tooltip.876fbafa.js";import"./Caret.8213645d.js";import"./index.24cd8e71.js";import"./Slide.170b1e50.js";import"./Statistic.ec419cd8.js";import"./isArrayLikeObject.5b92a7d2.js";import"./_arrayEach.56a9f647.js";import"./_getAllKeys.203cd19c.js";import"./_getTag.faac39b8.js";import"./_getAllKeysIn.402a47a0.js";import"./_commonjsHelpers.f84db168.js";import"./vue.runtime.esm-bundler.b65a7c5a.js";import"./ScoreButton.387836cc.js";import"./Table.88dc73dc.js";import"./Affiliate.d6c08356.js";import"./Suggestion.3e7c2533.js";import"./helpers.ad3850ca.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.ce215f52.js";import"./cleanForSlug.d1b7ba11.js";import"./html.c2b89264.js";import"./Index.e14a5090.js";const N={components:{CoreBlur:E,CoreCard:L,Graph:F,GridColumn:G,GridRow:U,PostsTable:q,SeoStatisticsOverview:O},data(){return{strings:{seoStatisticsCard:this.$t.__("SEO Statistics",this.$td),seoStatisticsTooltip:this.$t.__("The following SEO Statistics graphs are useful metrics for understanding the visibility of your website or pages in search results and can help you identify trends or changes over time.<br /><br />Note: This data is capped at the top 100 keywords per day to speed up processing and to help you prioritize your SEO efforts, so while the data may seem inconsistent with Google Search Console, this is intentional.",this.$td),contentCard:this.$t.__("Content",this.$td),postsTooltip:this.$t.__("These lists can be useful for understanding the performance of specific pages or posts and identifying opportunities for improvement. For example, the top winning content may be good candidates for further optimization or promotion, while the top losing may need to be reevaluated and potentially updated.",this.$td)},defaultPages:{rows:[],totals:{page:0,pages:0,total:0}}}},computed:{...k("search-statistics",["data","loading","isConnected"]),series(){var s,a,n,r;return!((a=(s=this.data)==null?void 0:s.seoStatistics)!=null&&a.statistics)||!((r=(n=this.data)==null?void 0:n.seoStatistics)!=null&&r.intervals)?[]:[{name:this.$t.__("Search Impressions",this.$td),data:this.data.seoStatistics.intervals.map(t=>({x:t.date,y:t.impressions})),legend:{total:this.data.seoStatistics.statistics.impressions}},{name:this.$t.__("Search Clicks",this.$td),data:this.data.seoStatistics.intervals.map(t=>({x:t.date,y:t.clicks})),legend:{total:this.data.seoStatistics.statistics.clicks}}]}}},z={class:"aioseo-search-statistics-dashboard"},A=["innerHTML"];function R(s,a,n,r,t,h){const c=e("seo-statistics-overview"),l=e("graph"),p=e("core-card"),y=e("posts-table"),$=e("grid-column"),b=e("grid-row"),m=e("core-blur");return d(),w(m,null,{default:o(()=>[v("div",z,[i(b,null,{default:o(()=>[i($,null,{default:o(()=>[i(p,{class:"aioseo-seo-statistics-card",slug:"seoPerformance","header-text":t.strings.seoStatisticsCard,toggles:!1,"no-slide":""},{tooltip:o(()=>[v("span",{innerHTML:t.strings.seoStatisticsTooltip},null,8,A)]),default:o(()=>[i(c,{statistics:["impressions","clicks","ctr","position"],"show-graph":!1,view:"side-by-side"}),i(l,{"multi-axis":"",series:h.series,"legend-style":"simple"},null,8,["series"])]),_:1},8,["header-text"]),i(p,{slug:"posts","header-text":t.strings.contentCard,toggles:!1,"no-slide":""},{tooltip:o(()=>[f(g(t.strings.postsTooltip),1)]),default:o(()=>{var u,_,x;return[i(y,{posts:((x=(_=(u=s.data)==null?void 0:u.seoStatistics)==null?void 0:_.pages)==null?void 0:x.paginated)||t.defaultPages,columns:["post_title","seo_score","clicks","impressions","position","diffPosition"],"show-items-per-page":"","show-table-footer":""},null,8,["posts"])]}),_:1},8,["header-text"])]),_:1})]),_:1})])]),_:1})}const V=S(N,[["render",R]]);const W={components:{Blur:V,Cta:I,RequiredPlans:D},data(){return{strings:{ctaButtonText:this.$t.sprintf(this.$t.__("Upgrade to %1$s and Unlock Search Statistics",this.$td),"Pro"),ctaHeader:this.$t.sprintf(this.$t.__("Search Statistics is only for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),ctaDescription:this.$t.__("Connect your site to Google Search Console to receive insights on how content is being discovered. Identify areas for improvement and drive traffic to your website.",this.$td),thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td),feature1:this.$t.__("Search traffic insights",this.$td),feature2:this.$t.__("Track page rankings",this.$td),feature3:this.$t.__("Track keyword rankings",this.$td),feature4:this.$t.__("Speed tests for individual pages/posts",this.$td)}}},computed:{...P(["isUnlicensed"])}},j={class:"aioseo-search-statistics-seo-statistics"};function J(s,a,n,r,t,h){const c=e("blur"),l=e("required-plans"),p=e("cta");return d(),T("div",j,[i(c),i(p,{"cta-link":s.$links.getPricingUrl("search-statistics","search-statistics-upsell","seo-statistics"),"button-text":t.strings.ctaButtonText,"learn-more-link":s.$links.getUpsellUrl("search-statistics","seo-statistics","home"),"feature-list":[t.strings.feature1,t.strings.feature2,t.strings.feature3,t.strings.feature4],"align-top":""},{"header-text":o(()=>[f(g(t.strings.ctaHeader),1)]),description:o(()=>[i(l,{"core-feature":["search-statistics","seo-statistics"]}),f(" "+g(t.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])])}const K=S(W,[["render",J]]);const Q={components:{CoreCard:L,Graph:F,GridColumn:G,GridRow:U,PostsTable:q,SeoStatisticsOverview:O},mixins:[M],data(){return{initialTableFilter:"",strings:{seoStatisticsCard:this.$t.__("SEO Statistics",this.$tdPro),seoStatisticsTooltip:this.$t.__("The following SEO Statistics graphs are useful metrics for understanding the visibility of your website or pages in search results and can help you identify trends or changes over time.<br /><br />Note: This data is capped at the top 100 keywords per day to speed up processing and to help you prioritize your SEO efforts, so while the data may seem inconsistent with Google Search Console, this is intentional.",this.$tdPro),contentCard:this.$t.__("Content Performance",this.$tdPro),postsTooltip:this.$t.__("These lists can be useful for understanding the performance of specific pages or posts and identifying opportunities for improvement. For example, the top winning content may be good candidates for further optimization or promotion, while the top losing may need to be reevaluated and potentially updated.",this.$tdPro)},defaultPages:{rows:[],totals:{page:0,pages:0,total:0}}}},computed:{...k("search-statistics",["data","loading","isConnected"]),...P(["isUnlicensed"]),series(){var s,a,n,r;return!((a=(s=this.data)==null?void 0:s.seoStatistics)!=null&&a.statistics)||!((r=(n=this.data)==null?void 0:n.seoStatistics)!=null&&r.intervals)?[]:[{name:this.$t.__("Search Impressions",this.$tdPro),data:this.data.seoStatistics.intervals.map(t=>({x:t.date,y:t.impressions})),legend:{total:this.data.seoStatistics.statistics.impressions}},{name:this.$t.__("Search Clicks",this.$tdPro),data:this.data.seoStatistics.intervals.map(t=>({x:t.date,y:t.clicks})),legend:{total:this.data.seoStatistics.statistics.clicks}}]}},methods:{...B("search-statistics",["loadInitialData"])},beforeMount(){var s;if(Object.keys((s=this.$route)==null?void 0:s.query).includes("tab"))switch(this.$route.query.tab){case"TopLosingPages":this.initialTableFilter="topLosing";break;case"TopWinningPages":this.initialTableFilter="topWinning";break;default:this.initialTableFilter="all"}},mounted(){this.isConnected&&this.loadInitialData()}},X={class:"aioseo-search-statistics-site-statistics"},Y=["innerHTML"];function Z(s,a,n,r,t,h){const c=e("seo-statistics-overview"),l=e("graph"),p=e("core-card"),y=e("posts-table"),$=e("grid-column"),b=e("grid-row");return d(),T("div",X,[i(b,null,{default:o(()=>[i($,null,{default:o(()=>[i(p,{class:"aioseo-seo-statistics-card",slug:"seoPerformance","header-text":t.strings.seoStatisticsCard,toggles:!1,"no-slide":""},{tooltip:o(()=>[v("span",{innerHTML:t.strings.seoStatisticsTooltip},null,8,Y)]),default:o(()=>[i(c,{statistics:["impressions","clicks","ctr","position"],"show-graph":!1,view:"side-by-side"}),i(l,{"multi-axis":"",series:h.series,loading:s.loading.seoStatistics,"legend-style":"simple"},null,8,["series","loading"])]),_:1},8,["header-text"]),i(p,{slug:"posts","header-text":t.strings.contentCard,toggles:!1,"no-slide":""},{tooltip:o(()=>[f(g(t.strings.postsTooltip),1)]),default:o(()=>{var m,u,_;return[i(y,{posts:((_=(u=(m=s.data)==null?void 0:m.seoStatistics)==null?void 0:u.pages)==null?void 0:_.paginated)||t.defaultPages,columns:["post_title","seo_score","clicks","impressions","position"],"append-columns":{all:"diffPosition",topLosing:"diffDecay",topWinning:"diffDecay"},initialFilter:t.initialTableFilter,"show-items-per-page":"","show-table-footer":""},null,8,["posts","initialFilter"])]}),_:1},8,["header-text"])]),_:1})]),_:1})])}const tt=S(Q,[["render",Z]]),st={mixins:[H],components:{SeoStatistics:tt,Lite:K}},et={class:"aioseo-search-statistics-seo-statistics"};function it(s,a,n,r,t,h){const c=e("seo-statistics",!0),l=e("lite");return d(),T("div",et,[s.shouldShowMain("search-statistics","seo-statistics")?(d(),w(c,{key:0})):C("",!0),s.shouldShowUpgrade("search-statistics","seo-statistics")||s.shouldShowLite?(d(),w(l,{key:1})):C("",!0)])}const Nt=S(st,[["render",it]]);export{Nt as default};
