import{A as I}from"./AddonConditions.02d9ad8d.js";import"./default-i18n.cc9dbff0.js";import"./constants.c7984802.js";import{o as Z,G as R}from"./links.64a86a6c.js";import{o as r,c as g,a as d,r as i,d as m,A as C,g as s,x as k,w as n,b as $,F as w,C as x,n as S,B as b}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_ as v}from"./_plugin-vue_export-helper.0e38850e.js";/* empty css                                              */import{C as z}from"./Blur.5051545a.js";import{G as T,a as O}from"./Row.53f210bf.js";import{C as A}from"./Card.627e6c48.js";import{C as P}from"./Tooltip.06c652b4.js";import{S as Q,d as W,C as J}from"./index.61edcc6f.js";import{S as K,a as X,b as E,c as Y}from"./Affiliate.d655e1dd.js";import{U as tt}from"./AnimatedNumber.3f458c9e.js";import{C as B}from"./DonutChartWithLegend.7e334d11.js";import{u as nt,S as st}from"./SeoSiteScore.4e3c58b7.js";import"./Caret.08be6d0c.js";/* empty css                                            *//* empty css                                              */import{T as H,a as F}from"./Row.070464a6.js";import{n as et}from"./numbers.8fa607e7.js";import{R as ot}from"./RequiredPlans.3892474f.js";import{C as M}from"./Index.af67901e.js";import"./addons.4e5c0f68.js";import"./upperFirst.57f3248e.js";import"./_stringToArray.4de3b1f3.js";import"./toString.6606707f.js";import"./isArrayLikeObject.2110cf7d.js";import"./Slide.f610bf53.js";import"./license.b67007bd.js";const it={},rt={viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-link-orphaned"},at=d("path",{d:"M13.875 3.87495H10.375V5.53745H13.875C15.3713 5.53745 16.5875 6.7537 16.5875 8.24995C16.5875 9.5012 15.73 10.5512 14.5663 10.8575L15.8438 12.135C17.27 11.4087 18.25 9.9562 18.25 8.24995C18.25 5.83495 16.29 3.87495 13.875 3.87495ZM13 7.37495H11.0838L12.8338 9.12495H13V7.37495ZM0.75 1.4862L3.47125 4.20745C2.66729 4.53457 1.97904 5.09383 1.49435 5.81385C1.00966 6.53387 0.750518 7.38199 0.75 8.24995C0.75 10.665 2.71 12.625 5.125 12.625H8.625V10.9625H5.125C3.62875 10.9625 2.4125 9.7462 2.4125 8.24995C2.4125 6.8587 3.47125 5.71245 4.8275 5.5637L6.63875 7.37495H6V9.12495H8.38875L10.375 11.1112V12.625H11.8888L15.3975 16.125L16.5 15.0225L1.86125 0.374954L0.75 1.4862Z",fill:"currentColor"},null,-1),lt=[at];function ct(t,a){return r(),g("svg",rt,lt)}const ut=v(it,[["render",ct]]);const _t={components:{CoreTooltip:P,SvgCircleQuestionMark:Q,SvgLinkAffiliate:K,SvgLinkExternal:X,SvgLinkInternalInbound:E,SvgLinkOrphaned:ut,SvgSearch:W,UtilAnimatedNumber:tt},props:{type:{type:String,required:!0},count:{type:Number,required:!0}},data(){return{strings:{orphanedPostsDescription:this.$t.__("Orphaned posts are posts that have no inbound internal links yet and may be more difficult to find by search engines.",this.$td)},icons:[{type:"posts",name:this.$t.__("Posts Crawled",this.$td),icon:"svg-search"},{type:"external",name:this.$t.__("External Links",this.$td),icon:"svg-link-external"},{type:"internal",name:this.$t.__("Internal Links",this.$td),icon:"svg-link-internal-inbound"},{type:"affiliate",name:this.$t.__("Affiliate Links",this.$td),icon:"svg-link-affiliate"},{type:"orphaned",name:this.$t.__("Orphaned Posts",this.$td),icon:"svg-link-orphaned"}]}},computed:{getType(){return this.icons.find(t=>t.type===this.type)},getLink(){switch(this.type){case"posts":case"affiliate":case"internal":return"#/links-report?fullReport=1";case"external":return"#/domains-report";case"orphaned":return"#/links-report?orphaned-posts=1";default:return""}}}},dt=["href"],pt={class:"aioseo-link-count-top"},mt={class:"aioseo-link-count-bottom"},ht={class:"disabled-button gray"};function kt(t,a,o,u,e,c){const _=i("util-animated-number"),l=i("svg-circle-question-mark"),p=i("core-tooltip");return r(),g("a",{class:"aioseo-link-count",href:c.getLink},[d("div",pt,[(r(),m(C(c.getType.icon))),s(_,{number:parseInt(o.count)},null,8,["number"])]),d("div",mt,[d("span",null,k(c.getType.name),1),o.type==="orphaned"?(r(),m(p,{key:0},{tooltip:n(()=>[d("span",null,k(e.strings.orphanedPostsDescription),1)]),default:n(()=>[d("div",ht,[s(l)])]),_:1})):$("",!0)])],8,dt)}const ft=v(_t,[["render",kt]]);const gt={components:{CoreCard:A,GridColumn:T,GridRow:O,LinkCount:ft},props:{totals:{type:Object,required:!0}}};function $t(t,a,o,u,e,c){const _=i("LinkCount"),l=i("grid-column"),p=i("grid-row"),L=i("core-card");return r(),m(L,{class:"aioseo-link-assistant-statistics",slug:"internalLinksOverviewCounter",toggles:!1,"no-slide":"","hide-header":""},{default:n(()=>[s(p,null,{default:n(()=>[s(l,{class:"counter divider-right",oneFifth:""},{default:n(()=>[s(_,{type:"posts",count:o.totals.crawledPosts},null,8,["count"])]),_:1}),s(l,{class:"counter divider-right",oneFifth:""},{default:n(()=>[s(_,{type:"orphaned",count:o.totals.orphanedPosts},null,8,["count"])]),_:1}),s(l,{class:"counter divider-right",oneFifth:""},{default:n(()=>[s(_,{type:"external",count:o.totals.externalLinks},null,8,["count"])]),_:1}),s(l,{class:"counter divider-right",oneFifth:""},{default:n(()=>[s(_,{type:"internal",count:o.totals.internalLinks},null,8,["count"])]),_:1}),s(l,{class:"counter",oneFifth:""},{default:n(()=>[s(_,{type:"affiliate",count:o.totals.affiliateLinks},null,8,["count"])]),_:1})]),_:1})]),_:1})}const q=v(gt,[["render",$t]]),vt={setup(){const{strings:t}=nt();return{composableStrings:t}},components:{CoreCard:A,CoreDonutChartWithLegend:B},mixins:[st],props:{totals:{type:Object,required:!0}},data(){return{score:0,strings:Z(this.composableStrings,{header:this.$t.__("Internal vs External vs Affiliate Links",this.$td),totalLinks:this.$t.__("Total Links",this.$td),linksReportLink:this.$t.sprintf('<a href="%1$s">%2$s</a><a href="%1$s"> <span>&rarr;</span></a>',"#/links-report?fullReport=1",this.$t.__("See a Full Links Report",this.$td))})}},computed:{parts(){return[{slug:"external",name:this.$t.__("External Links",this.$td),count:this.totals.externalLinks},{slug:"affiliate",name:this.$t.__("Affiliate Links",this.$td),count:this.totals.affiliateLinks},{slug:"internal",name:this.$t.__("Internal Links",this.$td),count:this.totals.internalLinks}]},sortedParts(){const t=this.parts;return t.sort(function(a,o){return o.count>a.count?1:-1}),t[0].ratio=100,t[1].ratio=t[1].count/this.totals.totalLinks*100,t[2].ratio=t[2].count/this.totals.totalLinks*100,t.forEach(a=>{switch(a.slug){case"external":{a.color="#005AE0";break}case"internal":{a.color="#00AA63";break}case"affiliate":{a.color="#F18200";break}}}),t.filter(function(a){return a.count!==0}),t.forEach((a,o)=>(o===0||t.forEach((u,e)=>(o<e&&(a.ratio=a.ratio+u.ratio),a)),a)),t}}};function Lt(t,a,o,u,e,c){const _=i("core-donut-chart-with-legend"),l=i("core-card");return r(),m(l,{class:"aioseo-link-assistant-link-ratio",slug:"linkAssistantLinkRatio","no-slide":"","header-text":e.strings.header},{default:n(()=>[s(_,{parts:c.sortedParts,total:o.totals.totalLinks,label:e.strings.totalLinks,link:e.strings.linksReportLink},null,8,["parts","total","label","link"])]),_:1},8,["header-text"])}const U=v(vt,[["render",Lt]]);const bt={components:{CoreCard:A,CoreTooltip:P,SvgLinkInternalInbound:E,SvgLinkInternalOutbound:Y,TableColumn:H,TableRow:F},props:{linkingOpportunities:{type:Array,required:!0}},data(){return{strings:{linkingOpportunities:this.$t.__("Linking Opportunities",this.$td),noResults:this.$t.__("No items found.",this.$td)},link:this.$t.sprintf('<a class="links-report-link" href="%1$s">%2$s</a><a href="%1$s"> <span>&rarr;</span></a>',"#/links-report?linkingOpportunities=1",this.$t.__("See All Linking Opportunities",this.$td))}},computed:{columns(){return[{slug:"post-title",label:this.$t.__("Post Title",this.$td)},{slug:"internal-inbound",label:this.$t.sprintf(this.$t.__("%1$sInbound Internal Links%2$sLinks from other posts to this post",this.$td),"<strong>","</strong><br />"),tooltipIcon:"svg-link-internal-inbound"},{slug:"internal-outbound",label:this.$t.sprintf(this.$t.__("%1$sOutbound Internal Links%2$sLinks from this post to other posts",this.$td),"<strong>","</strong><br />"),tooltipIcon:"svg-link-internal-outbound"}]}}},yt={class:"linking-opportunities-table"},wt={class:"row"},xt={key:0},St={key:1,class:"aioseo-tooltip-wrapper"},At=["innerHTML"],Ct={class:"row"},Tt=["href"],Ot=["href"],Pt={class:"count"},Dt={class:"count"},It={key:0,class:"links-report-link"},Rt=["innerHTML"];function Et(t,a,o,u,e,c){const _=i("core-tooltip"),l=i("table-column"),p=i("table-row"),L=i("core-card");return r(),m(L,{class:"aioseo-link-assistant-linking-opportunities",slug:"linkAssistantLinkOpportunities","no-slide":"","header-text":e.strings.linkingOpportunities},{default:n(()=>[d("div",null,[d("div",yt,[o.linkingOpportunities.length?(r(),m(p,{key:0,class:"header-row"},{default:n(()=>[(r(!0),g(w,null,x(c.columns,(h,f)=>(r(),m(l,{key:f,class:S(h.slug)},{default:n(()=>[d("div",wt,[h.tooltipIcon?$("",!0):(r(),g("div",xt,k(h.label),1)),h.tooltipIcon?(r(),g("div",St,[s(_,{class:"action"},{tooltip:n(()=>[d("span",{innerHTML:h.label},null,8,At)]),default:n(()=>[(r(),m(C(h.tooltipIcon)))]),_:2},1024)])):$("",!0)])]),_:2},1032,["class"]))),128))]),_:1})):$("",!0),(r(!0),g(w,null,x(o.linkingOpportunities,(h,f)=>(r(),m(p,{key:f,class:S(["row",{even:f%2===0}])},{default:n(()=>[s(l,{class:"post-title"},{default:n(()=>[d("div",Ct,[s(_,{type:"action"},{tooltip:n(()=>[d("a",{class:"tooltip-url",href:h.permalink,target:"_blank"},k(h.postTitle),9,Ot)]),default:n(()=>[d("a",{href:`#/links-report?postTitle=${h.postTitle}`},k(h.postTitle),9,Tt)]),_:2},1024)])]),_:2},1024),s(l,{class:"internal-inbound"},{default:n(()=>[d("span",Pt,k(h.suggestionsInbound),1)]),_:2},1024),s(l,{class:"internal-outbound"},{default:n(()=>[d("span",Dt,k(h.suggestionsOutbound),1)]),_:2},1024)]),_:2},1032,["class"]))),128)),o.linkingOpportunities.length?$("",!0):(r(),m(p,{key:1,class:"row even"},{default:n(()=>[s(l,{class:"post-title"},{default:n(()=>[b(k(e.strings.noResults),1)]),_:1})]),_:1}))]),o.linkingOpportunities.length?(r(),g("div",It,[d("span",{innerHTML:e.link},null,8,Rt)])):$("",!0)])]),_:1},8,["header-text"])}const N=v(bt,[["render",Et]]);const Bt={components:{CoreCard:A,CoreTooltip:P,CoreDonutChartWithLegend:B,TableColumn:H,TableRow:F},props:{totals:{type:Object,required:!0},mostLinkedDomains:{type:Array,required:!0}},data(){return{numbers:et,strings:{mostLinkedDomains:this.$t.__("Most Linked to Domains",this.$td),totalExternalLinks:this.$t.__("Total External Links",this.$td),noResults:this.$t.__("No items found.",this.$td),link:this.$t.sprintf('<a href="%1$s">%2$s</a><a href="%1$s"> <span>&rarr;</span></a>',"#/domains-report?fullReport=1",this.$t.__("See a Full Domains Report",this.$td))}}},computed:{sortedParts(){const t=this.mostLinkedDomains.map(o=>o).splice(0,3);let a=this.totals.externalLinks;return t[0]&&(t[0].color="#005AE0",t[0].ratio=100,a=a-t[0].count),t[1]&&(t[1].color="#80ACF0",t[1].ratio=t[1].count/this.totals.externalLinks*100,a=a-t[1].count),t[2]&&(t[2].color="#BFD6F7",t[2].ratio=t[2].count/this.totals.externalLinks*100,a=a-t[2].count),a&&t.push({name:this.$t.__("other domains",this.$td),color:"#E8E8EB",count:a,ratio:a/this.totals.externalLinks*100,last:!0}),t.filter(function(o){return o.count!==0}).sort(function(o,u){return parseInt(u.count)>parseInt(o.count)?1:-1}),t.forEach((o,u)=>(u===0||t.forEach((e,c)=>(u<c&&(o.ratio=o.ratio+e.ratio),o)),o)),t},columns(){return[{slug:"name",label:this.$t.__("Domain",this.$td)},{slug:"count",label:this.$t.__("# of Links",this.$td)}]}}},Ht={class:"domains-table"},Ft={class:"row"},Mt=["src"],qt=["href"],Ut=["href"];function Nt(t,a,o,u,e,c){const _=i("core-donut-chart-with-legend"),l=i("table-column"),p=i("table-row"),L=i("core-tooltip"),h=i("core-card");return r(),m(h,{class:"aioseo-link-assistant-linked-domains",slug:"linkAssistantLinkedDomains","no-slide":"","header-text":e.strings.mostLinkedDomains},{default:n(()=>[s(_,{parts:c.sortedParts,total:o.totals.externalLinks,label:e.strings.totalExternalLinks,link:e.strings.link},null,8,["parts","total","label","link"]),d("div",Ht,[s(p,{class:"header-row"},{default:n(()=>[(r(!0),g(w,null,x(c.columns,(f,y)=>(r(),m(l,{key:y,class:S(f.slug)},{default:n(()=>[b(k(f.label),1)]),_:2},1032,["class"]))),128))]),_:1}),(r(!0),g(w,null,x(o.mostLinkedDomains,(f,y)=>(r(),m(p,{key:y,class:S(["row",{even:y%2===0}])},{default:n(()=>[s(l,{class:"domain"},{default:n(()=>[d("div",Ft,[d("img",{alt:"Domain Favicon",class:"favicon",src:`https://www.google.com/s2/favicons?sz=32&domain=${f.name}`},null,8,Mt),s(L,{type:"action"},{tooltip:n(()=>[d("a",{class:"tooltip-url",href:`https://${f.name}`,target:"_blank"},k(f.name),9,Ut)]),default:n(()=>[d("a",{class:"domain-name",href:`#/domains-report?hostname=${f.name}`},k(f.name),9,qt)]),_:2},1024)])]),_:2},1024),s(l,{class:"count"},{default:n(()=>[d("span",null,k(e.numbers.numberFormat(f.count)),1)]),_:2},1024)]),_:2},1032,["class"]))),128)),o.mostLinkedDomains.length?$("",!0):(r(),m(p,{key:0,class:"row even"},{default:n(()=>[s(l,{class:"domain"},{default:n(()=>[b(k(e.strings.noResults),1)]),_:1})]),_:1}))])]),_:1},8,["header-text"])}const V=v(Bt,[["render",Nt]]),Vt={components:{CoreBlur:z,GridColumn:T,GridRow:O,LinkCounts:q,LinkRatio:U,LinkingOpportunities:N,MostLinkedDomains:V},props:{showTotals:{type:Boolean,default(){return!0}}},computed:{totals(){return{crawledPosts:102,externalLinks:753,internalLinks:56,affiliateLinks:175,orphanedPosts:78,totalLinks:753+56+175}},linkingOpportunities(){return[{postTitle:"Test Post Title 1",postId:"123",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 2",postId:"124",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 3",postId:"125",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 4",postId:"126",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 5",postId:"127",suggestionsInbound:"2",suggestionsOutbound:"13"}]},mostLinkedDomains(){return[{name:"aioseo.com",count:100},{name:"wpbeginner.com",count:99},{name:"wpforms.com",count:50},{name:"optinmonster.com",count:40},{name:"monsterinsights.com",count:30},{name:"smashballoon.com",count:20},{name:"exactmetrics.com",count:10},{name:"seedprod.com",count:5},{name:"awesomemotive.com",count:4},{name:"easydigitaldownloads.com",count:3}]}}};function Gt(t,a,o,u,e,c){const _=i("link-counts"),l=i("grid-column"),p=i("grid-row"),L=i("link-ratio"),h=i("linking-opportunities"),f=i("most-linked-domains"),y=i("core-blur");return r(),m(y,null,{default:n(()=>[o.showTotals?(r(),m(p,{key:0,class:"overview-link-count"},{default:n(()=>[s(l,null,{default:n(()=>[s(_,{totals:c.totals},null,8,["totals"])]),_:1})]),_:1})):$("",!0),s(p,null,{default:n(()=>[s(l,{md:"6"},{default:n(()=>[s(L,{totals:c.totals},null,8,["totals"]),s(h,{"linking-opportunities":c.linkingOpportunities},null,8,["linking-opportunities"])]),_:1}),s(l,{md:"6"},{default:n(()=>[s(f,{totals:c.totals,"most-linked-domains":c.mostLinkedDomains},null,8,["totals","most-linked-domains"])]),_:1})]),_:1})]),_:1})}const D=v(Vt,[["render",Gt]]),jt={setup(){return{linkAssistantStore:R()}},mixins:[I],components:{Blur:D},data(){return{addonSlug:"aioseo-link-assistant",strings:{ctaHeader:this.$t.__("Enable Link Assistant on your Site",this.$tdPro),ctaDescription:this.$t.__("Get relevant suggestions for adding internal links to all your content as well as finding any orphaned posts that have no internal links.",this.$tdPro),linkOpportunities:this.$t.__("Actionable Link Suggestions",this.$tdPro),orphanedPosts:this.$t.__("See Orphaned Posts",this.$tdPro),affiliateLinks:this.$t.__("See Affiliate Links",this.$tdPro),domainReports:this.$t.__("Top Domain Reports",this.$tdPro)}}},computed:{ctaButtonText(){return this.shouldShowUpdate?this.$t.__("Update Link Assistant",this.$tdPro):this.$t.__("Activate Link Assistant",this.$tdPro)}},methods:{addonActivated(){this.$isPro&&this.linkAssistantStore.suggestionsScan.percent!==100&&this.linkAssistantStore.pollSuggestionsScan()}}},Zt={class:"aioseo-link-assistant-overview"};function zt(t,a,o,u,e,c){const _=i("blur");return r(),g("div",Zt,[s(_),(r(),m(C(t.ctaComponent),{"addon-slug":e.addonSlug,"cta-header":e.strings.ctaHeader,"cta-description":e.strings.ctaDescription,"cta-button-text":c.ctaButtonText,"learn-more-text":e.strings.learnMoreText,"learn-more-link":t.$links.getDocUrl("link-assistant"),"feature-list":[e.strings.linkOpportunities,e.strings.domainReports,e.strings.orphanedPosts,e.strings.affiliateLinks],"post-activation-promises":[u.linkAssistantStore.getMenuData],onAddonActivated:c.addonActivated,"align-top":t.alignTop},null,40,["addon-slug","cta-header","cta-description","cta-button-text","learn-more-text","learn-more-link","feature-list","post-activation-promises","onAddonActivated","align-top"]))])}const Qt=v(jt,[["render",zt]]),Wt={components:{Blur:D,RequiredPlans:ot,Cta:M},data(){return{strings:{ctaButtonText:this.$t.sprintf(this.$t.__("Upgrade to %1$s and Unlock Link Assistant",this.$td),"Pro"),ctaHeader:this.$t.sprintf(this.$t.__("Link Assistant is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),linkAssistantDescription:this.$t.__("Get relevant suggestions for adding internal links to all your content as well as finding any orphaned posts that have no internal links.",this.$td),linkOpportunities:this.$t.__("Actionable Link Suggestions",this.$td),orphanedPosts:this.$t.__("See Orphaned Posts",this.$td),affiliateLinks:this.$t.__("See Affiliate Links",this.$td),domainReports:this.$t.__("Top Domain Reports",this.$td)}}}},Jt={class:"aioseo-link-assistant-overview"};function Kt(t,a,o,u,e,c){const _=i("blur"),l=i("required-plans"),p=i("cta");return r(),g("div",Jt,[s(_),s(p,{class:"aioseo-link-assistant-cta","cta-link":t.$links.getPricingUrl("link-assistant","link-assistant-upsell","overview"),"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("link-assistant","overview","home"),"feature-list":[e.strings.linkOpportunities,e.strings.domainReports,e.strings.orphanedPosts,e.strings.affiliateLinks],"align-top":""},{"header-text":n(()=>[b(k(e.strings.ctaHeader),1)]),description:n(()=>[s(l,{addon:"aioseo-link-assistant"}),b(" "+k(e.strings.linkAssistantDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])])}const Xt=v(Wt,[["render",Kt]]);const Yt={setup(){return{linkAssistantStore:R()}},components:{Blur:D,CoreAlert:J,Cta:M,GridColumn:T,GridRow:O,LinkCounts:q,LinkRatio:U,LinkingOpportunities:N,MostLinkedDomains:V},data(){return{strings:{ctaHeader:this.$t.__("No posts have been crawled yet",this.$tdPro),ctaButtonText:this.$t.__("Scan Now",this.$tdPro),ctaDescription:this.$t.__("Link Assistant scans your website for links and suggestions in the background. Click the button below to start a scan and pull in your first results.",this.$tdPro)},failed:!1,scanRunning:!1}},methods:{doTriggerScan(){this.failed=!1,this.scanRunning=!0,this.linkAssistantStore.triggerScan().finally(()=>{this.scanRunning=!1})}}},tn={key:0},nn={key:1};function sn(t,a,o,u,e,c){const _=i("link-counts"),l=i("grid-column"),p=i("grid-row"),L=i("link-ratio"),h=i("linking-opportunities"),f=i("most-linked-domains"),y=i("blur"),G=i("core-alert"),j=i("cta");return r(),g("div",null,[s(p,{class:"overview-link-count"},{default:n(()=>[s(l,null,{default:n(()=>[s(_,{totals:u.linkAssistantStore.overview.totals},null,8,["totals"])]),_:1})]),_:1}),u.linkAssistantStore.overview.totals.crawledPosts?(r(),g("div",tn,[s(p,null,{default:n(()=>[s(l,{md:"6"},{default:n(()=>[s(L,{totals:u.linkAssistantStore.overview.totals},null,8,["totals"]),s(h,{"linking-opportunities":u.linkAssistantStore.overview.linkingOpportunities},null,8,["linking-opportunities"])]),_:1}),s(l,{md:"6"},{default:n(()=>[s(f,{totals:u.linkAssistantStore.overview.totals,"most-linked-domains":u.linkAssistantStore.overview.mostLinkedDomains},null,8,["totals","most-linked-domains"])]),_:1})]),_:1})])):$("",!0),u.linkAssistantStore.overview.totals.crawledPosts?$("",!0):(r(),g("div",nn,[s(y,{"show-totals":!1}),s(j,{class:"cta-first-scan","cta-button-action":"","same-tab":"","button-text":e.strings.ctaButtonText,"cta-button-loading":e.scanRunning,onCtaButtonClick:c.doTriggerScan},{"header-text":n(()=>[b(k(e.strings.ctaHeader),1)]),description:n(()=>[e.failed?(r(),m(G,{key:0,type:"red"},{default:n(()=>[b(k(e.strings.activateError),1)]),_:1})):$("",!0),b(" "+k(e.strings.ctaDescription),1)]),"learn-more-text":n(()=>[b(k(e.strings.learnMoreText),1)]),_:1},8,["button-text","cta-button-loading","onCtaButtonClick"])]))])}const en=v(Yt,[["render",sn]]),on={mixins:[I],components:{Cta:Qt,Lite:Xt,Overview:en},data(){return{addonSlug:"aioseo-link-assistant"}}},rn={class:"aioseo-link-assistant-overview"};function an(t,a,o,u,e,c){const _=i("overview",!0),l=i("cta"),p=i("lite");return r(),g("div",rn,[t.shouldShowMain?(r(),m(_,{key:0})):$("",!0),t.shouldShowUpdate||t.shouldShowActivate?(r(),m(l,{key:1})):$("",!0),t.shouldShowLite?(r(),m(p,{key:2})):$("",!0)])}const Fn=v(on,[["render",an]]);export{Fn as default};
