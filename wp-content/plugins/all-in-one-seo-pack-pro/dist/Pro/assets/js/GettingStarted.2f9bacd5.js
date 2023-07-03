import{a as w}from"./allowed.04442f72.js";import{o as S}from"./isArrayLikeObject.2110cf7d.js";import{c as U}from"./news-sitemap.1ec2e03a.js";import{C as y}from"./GettingStarted.83070980.js";import{C as O}from"./Index.af67901e.js";import{G as A,a as I}from"./Row.53f210bf.js";import{S as v}from"./Book.6c2caac6.js";import{r as s,c as _,d as c,b as g,w as e,a as o,g as i,o as r,B as d,x as n,F as x,C as E}from"./vue.runtime.esm-bundler.ab2e0e41.js";import{_ as P}from"./_plugin-vue_export-helper.0e38850e.js";import"./links.64a86a6c.js";import"./default-i18n.cc9dbff0.js";import"./deburr.8932d979.js";import"./toString.6606707f.js";import"./Caret.08be6d0c.js";import"./Rocket.06403e16.js";import"./index.61edcc6f.js";/* empty css                                              *//* empty css                                            */const b={components:{CoreGettingStarted:y,Cta:O,GridColumn:A,GridRow:I,SvgBook:v},data(){return{allowed:w,ctaImg:U,strings:{cta:{title:this.$t.sprintf(this.$t.__("Get %1$s %2$s and Unlock all the Powerful Features",this.$td),"AIOSEO","Pro"),header:this.$t.sprintf(this.$t.__("Get %1$s %2$s and Unlock all the Powerful Features.",this.$td),"AIOSEO","Pro"),button:this.$t.sprintf(this.$t.__("Upgrade to %1$s Today",this.$td),"Pro")},videos:{title:this.$t.__("Video Tutorials",this.$td),linkText:this.$t.__("View all video tutorials",this.$td),linkUrl:"https://changeme"},documentation:{title:this.$t.sprintf(this.$t.__("%1$s Documentation",this.$td),"AIOSEO"),linkText:this.$t.__("See our full documentation",this.$td),linkUrl:this.$links.getDocUrl("home")}},videos:{video1:{title:this.$t.__("Basic Guide to Google Analytics",this.$td),url:"https://changeme"},video2:{title:this.$t.__("Basic Guide to Google Search Console",this.$td),url:"https://changeme"},video3:{title:this.$t.__("Best Practices for Domains and URLs",this.$td),url:"https://changeme"},video4:{title:this.$t.__("How to Control Search Results",this.$td),url:"https://changeme"},video5:{title:this.$t.sprintf(this.$t.__("Installing %1$s %2$s",this.$td),"AIOSEO","Pro"),url:"https://changeme"},video6:{title:this.$t.__("Optimizing your Content Headings",this.$td),url:"https://changeme"}},docs:{doc1:{title:"How do I get Google to show sitelinks for my site?",url:this.$links.getDocUrl("showSitelinks")},doc2:{title:"How do I use your API code examples?",url:this.$links.getDocUrl("apiCodeExamples")},doc3:{title:"What are media attachments and should I submit them to search engines?",url:this.$links.getDocUrl("whatAreMediaAttachments")},doc4:{title:"When to use NOINDEX or the robots.txt?",url:this.$links.getDocUrl("whenToUseNoindex")},doc5:{title:"How do I troubleshoot issues with AIOSEO?",url:this.$links.getDocUrl("troubleshootIssues")},doc6:{title:"How does the import process for SEO data work?",url:this.$links.getDocUrl("importProcessSeoData")},doc7:{title:"Installation instructions for AIOSEO Pro",url:this.$links.getDocUrl("installAioseoPro")},doc8:{title:"What are the minimum requirements for All in One SEO?",url:this.$links.getDocUrl("minimumRequirements")}}}},computed:{upgradeToday(){return this.$t.sprintf(this.$t.__("%1$s %2$s comes with many additional features to help take your site's SEO to the next level!",this.$td),"AIOSEO","Pro")}},methods:{getAssetUrl:S}},D={class:"aioseo-getting-started"},G=["src"],C={class:"aioseo-getting-started-documentation"},T=["href"],B={class:"d-flex"},L=["href"];function N(a,H,R,V,t,u){const p=s("core-getting-started"),f=s("cta"),l=s("grid-column"),h=s("grid-row"),$=s("svg-book");return r(),_("div",D,[t.allowed("aioseo_setup_wizard")?(r(),c(p,{key:0,"disable-close":""})):g("",!0),a.$isPro?g("",!0):(r(),c(f,{key:1,class:"aioseo-getting-started-cta",type:2,floating:!1,"button-text":t.strings.cta.button,"cta-link":a.$links.utmUrl("getting-started","main-cta"),"learn-more-link":a.$links.getUpsellUrl("getting-started","main-cta","home"),"feature-list":a.$constants.UPSELL_FEATURE_LIST,showLink:!1},{"header-text":e(()=>[d(n(t.strings.cta.header),1)]),description:e(()=>[d(n(u.upgradeToday),1)]),"featured-image":e(()=>[o("img",{alt:"Getting Started with AIOSEO",src:u.getAssetUrl(t.ctaImg)},null,8,G)]),_:1},8,["button-text","cta-link","learn-more-link","feature-list"])),o("div",C,[i(h,{class:"header"},{default:e(()=>[i(l,{class:"header-title",sm:"6",md:"6"},{default:e(()=>[d(n(t.strings.documentation.title),1)]),_:1}),i(l,{sm:"6",md:"6",class:"header-link"},{default:e(()=>[o("a",{href:t.strings.documentation.linkUrl,target:"_blank"},n(t.strings.documentation.linkText)+" → ",9,T)]),_:1})]),_:1}),i(h,{class:"docs"},{default:e(()=>[(r(!0),_(x,null,E(t.docs,(m,k)=>(r(),c(l,{class:"doc",key:k,sm:"12",md:"6"},{default:e(()=>[o("div",B,[i($),o("a",{href:m.url,target:"_blank"},n(m.title),9,L)])]),_:2},1024))),128))]),_:1})])])}const nt=P(b,[["render",N]]);export{nt as default};
