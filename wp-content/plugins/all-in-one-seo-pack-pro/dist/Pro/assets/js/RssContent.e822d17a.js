import{a as n}from"./vuex.esm.8fdeb4b6.js";import{C as o}from"./index.4db8498b.js";import{C as r}from"./Card.71f5228b.js";import{C as a}from"./HtmlTagsEditor.72aef68c.js";import{C as i}from"./SettingsRow.edbb3005.js";import{S as l}from"./External.4c957e9a.js";import{n as c}from"./_plugin-vue2_normalizer.61652a7c.js";import"./Caret.d93b302e.js";import"./_commonjsHelpers.f84db168.js";import"./Tooltip.68a8a92b.js";import"./Slide.15a07930.js";import"./Editor.3026c2dc.js";import"./UnfilteredHtml.2ce65122.js";import"./Row.830f6397.js";const d={components:{CoreAlert:o,CoreCard:r,CoreHtmlTagsEditor:a,CoreSettingsRow:i,SvgExternal:l},data(){return{strings:{tooltip:this.$t.__("Automatically add content to your site's RSS feed.",this.$td),description:this.$t.__("This feature is used to automatically add content to your site's RSS feed. More specifically, it allows you to add links back to your blog and your blog posts so scrapers will automatically add these links too. This helps search engines identify you as the original source of the content.",this.$td),learnMore:this.$t.__("Learn more",this.$td),rssFeedDisabled:this.$t.sprintf(this.$t.__("Your RSS feed has been disabled. Disabling the global RSS feed is NOT recommended. This will prevent users from subscribing to your content and can hurt your SEO rankings. You can re-enable the global RSS feed in the %1$scrawl content settings%2$s.",this.$td),'<a href="'+this.$aioseo.urls.aio.searchAppearance+'&aioseo-scroll=crawl-content-global-feed&aioseo-highlight=crawl-content-global-feed#/advanced">',"</a>"),rssContent:this.$t.__("RSS Content Settings",this.$td),openYourRssFeed:this.$t.__("Open Your RSS Feed",this.$td),rssBeforeContent:this.$t.__("RSS Before Content",this.$td),rssAfterContent:this.$t.__("RSS After Content",this.$td),beforeRssDescription:this.$t.__("Add content before each post in your site feed.",this.$td),afterRssDescription:this.$t.__("Add content after each post in your site feed.",this.$td),unfilteredHtmlError:this.$t.sprintf(this.$t.__("Your user account role does not have access to edit this field. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"unfilteredHtml",!0))}}},computed:{...n(["options"])}};var p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-rss-content"},[e("core-card",{attrs:{slug:"rssContent","header-text":t.strings.rssContent},scopedSlots:t._u([{key:"tooltip",fn:function(){return[e("div",[t._v(t._s(t.strings.tooltip))])]},proxy:!0}])},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"rssContent",!0))}}),t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global?e("core-alert",{attrs:{type:"red"},domProps:{innerHTML:t._s(t.strings.rssFeedDisabled)}}):t._e()],1),e("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-button",{attrs:{size:"medium",type:"blue",tag:"a",href:t.$aioseo.urls.feeds.global,target:"_blank",disabled:t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global}},[e("svg-external"),t._v(" "+t._s(t.strings.openYourRssFeed)+" ")],1)]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.rssBeforeContent},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{checkUnfilteredHtml:"","minimum-line-numbers":5,"tags-context":"rss","default-tags":["post_link","site_link","author_link"],disabled:t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global},model:{value:t.options.rssContent.before,callback:function(s){t.$set(t.options.rssContent,"before",s)},expression:"options.rssContent.before"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.beforeRssDescription)+" ")])]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.rssAfterContent},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{checkUnfilteredHtml:"","minimum-line-numbers":5,"tags-context":"rss","default-tags":["post_link","site_link","author_link"],disabled:t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global},model:{value:t.options.rssContent.after,callback:function(s){t.$set(t.options.rssContent,"after",s)},expression:"options.rssContent.after"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.afterRssDescription)+" ")])]},proxy:!0}])})],1)],1)},u=[],_=c(d,p,u,!1,null,null,null,null);const L=_.exports;export{L as default};
