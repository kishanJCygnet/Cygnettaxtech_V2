import{a as e,m as n}from"./vuex.esm.8fdeb4b6.js";import{e as a}from"./em.5c60dd9c.js";import{C as r}from"./Card.71f5228b.js";import{S as o}from"./LogoGear.16108a75.js";import{a as l}from"./Caret.d93b302e.js";import{S as c}from"./External.4c957e9a.js";import{n as g}from"./_plugin-vue2_normalizer.61652a7c.js";import"./Tooltip.68a8a92b.js";import"./_commonjsHelpers.f84db168.js";import"./index.4db8498b.js";import"./Slide.15a07930.js";const m=""+window.__aioseoDynamicImportPreload__("images/em-graph-preview.4277e799.png"),_=""+window.__aioseoDynamicImportPreload__("images/mi-logo.efba5578.png"),h=""+window.__aioseoDynamicImportPreload__("images/mi-graph-preview.332630b7.png");const p={components:{CoreCard:r,SvgAioseoLogoGear:o,SvgCircleCheck:l,SvgExternal:c},data(){return{emLogoImg:a,emGraphImg:m,miLogoImg:_,miGraphImg:h,installingPlugin:!1,justInstalled:!1,strings:{miLink:this.$t.sprintf("<strong>%1$s</strong>",this.$t.__("Click here",this.$td)),installMi:this.$t.sprintf(this.$t.__("Install %1$s",this.$td),"MonsterInsights"),activateMi:this.$t.sprintf(this.$t.__("Activate %1$s",this.$td),"MonsterInsights"),activateEm:this.$t.sprintf(this.$t.__("Activate %1$s",this.$td),"ExactMetrics"),miInstalled:this.$t.sprintf(this.$t.__("%1$s is Installed & Active",this.$td),"MonsterInsights"),emInstalled:this.$t.sprintf(this.$t.__("%1$s is Installed & Active",this.$td),"ExactMetrics"),setupGA:this.$t.__("Launch Setup Wizard",this.$td),emIntroH:this.$t.__("The Best Google Analytics Plugin for WordPress",this.$td),emIntroP:this.$t.sprintf(this.$t.__("%1$s connects AIOSEO to Google Analytics, providing a powerful integration. %2$s is a sister company of AIOSEO.",this.$td),"ExactMetrics","ExactMetrics"),emIntroLi1:this.$t.__("Quick & Easy Google Analytics Setup",this.$td),emIntroLi2:this.$t.__("Google Analytics Dashboard + Real Time Stats",this.$td),emIntroLi3:this.$t.__("Google Analytics Enhanced Ecommerce Tracking",this.$td),emInstallH:this.$t.sprintf(this.$t.__("Activate %1$s",this.$td),"ExactMetrics"),emInstallP:this.$t.sprintf(this.$t.__("%1$s shows you exactly which content gets the most visits, so you can analyze and optimize it for higher conversions.",this.$td),"ExactMetrics"),miIntroH:this.$t.__("The Best Google Analytics Plugin for WordPress",this.$td),miIntroP:this.$t.sprintf(this.$t.__("%1$s connects AIOSEO to Google Analytics, providing a powerful integration. %2$s is a sister company of AIOSEO.",this.$td),"MonsterInsights","MonsterInsights"),miIntroLi1:this.$t.__("Quick & Easy Google Analytics Setup",this.$td),miIntroLi2:this.$t.__("Google Analytics Dashboard + Real Time Stats",this.$td),miIntroLi3:this.$t.__("Google Analytics Enhanced Ecommerce Tracking",this.$td),miIntroLi4:this.$t.__("Universal Tracking for AMP and Instant Articles",this.$td),miemInstallH:this.$t.__("Install &",this.$td),miInstallH:this.$t.sprintf(this.$t.__("Activate %1$s",this.$td),"MonsterInsights"),miInstallP:this.$t.sprintf(this.$t.__("%1$s shows you exactly which content gets the most visits, so you can analyze and optimize it for higher conversions.",this.$td),"MonsterInsights"),emWizardH:this.$t.sprintf(this.$t.__("Setup %1$s",this.$td),"ExactMetrics"),miWizardH:this.$t.sprintf(this.$t.__("Setup %1$s",this.$td),"MonsterInsights"),emWizardP:this.$t.sprintf(this.$t.__("%1$s has an intuitive setup wizard to guide you through the setup process.",this.$td),"ExactMetrics"),miWizardP:this.$t.sprintf(this.$t.__("%1$s has an intuitive setup wizard to guide you through the setup process.",this.$td),"MonsterInsights")}}},computed:{...e(["options","internalOptions"]),gaActivated(){return this.$aioseo.plugins.miLite.activated||this.$aioseo.plugins.emLite.activated||this.$aioseo.plugins.miPro.activated||this.$aioseo.plugins.emPro.activated},gaInstalled(){return this.$aioseo.plugins.miLite.installed||this.$aioseo.plugins.emLite.installed||this.$aioseo.plugins.miPro.installed||this.$aioseo.plugins.emPro.installed},miOnboardingUrl(){return this.prefersEm?`${this.$aioseo.urls.home}/wp-admin/admin.php?page=exactmetrics-onboarding`:`${this.$aioseo.urls.home}/wp-admin/admin.php?page=monsterinsights-onboarding`},prefersEm(){return(this.$aioseo.plugins.emLite.installed||this.$aioseo.plugins.emPro.installed)&&!this.$aioseo.plugins.miLite.installed&&!this.$aioseo.plugins.miPro.installed}},methods:{...n(["installPlugins"]),installMi(){this.installingPlugin=!0,this.installPlugins([{plugin:this.prefersEm?"emLite":"miLite",type:"plugin"}]).then(()=>{this.installingPlugin=!1,this.justInstalled=!0,this.$aioseo.plugins.miLite.activated=!0,window.aioseo.plugins.miLite.activated=!0}).catch(i=>{console.error(i)})}}};var d=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-analytics"},[s("div",{staticClass:"aioseo-wrap aioseo-plugin-landing",attrs:{id:"aioseo-analytics"}},[s("core-card",{attrs:{slug:"monsterinsights-intro",hideHeader:!0,noSlide:!0,cardClass:{"aioseo-card--intro":!0}}},[s("div",{staticClass:"aioseo-analytics__intro"},[t.prefersEm?[s("div",{staticClass:"intro-image"},[s("svg-aioseo-logo-gear"),s("span",[t._v("♥")]),s("img",{attrs:{src:t.$getAssetUrl(t.emLogoImg),height:"90",alt:"ExactMetrics"}})],1),s("h2",{staticClass:"intro-heading"},[t._v(" "+t._s(t.strings.emIntroH)+" ")]),s("p",[t._v(" "+t._s(t.strings.emIntroP)+" ")]),s("div",{staticClass:"preview-list"},[s("img",{attrs:{src:t.$getAssetUrl(t.emGraphImg),height:"200",alt:"mi-graph-preview"}}),s("ul",[s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.emIntroLi1)+" ")],1),s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.emIntroLi2)+" ")],1),s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.emIntroLi3)+" ")],1)])])]:[s("div",{staticClass:"intro-image"},[s("svg-aioseo-logo-gear"),s("span",[t._v("♥")]),s("img",{attrs:{src:t.$getAssetUrl(t.miLogoImg),height:"90",alt:"MonsterInsights"}})],1),s("h2",{staticClass:"intro-heading"},[t._v(" "+t._s(t.strings.miIntroH)+" ")]),s("p",[t._v(" "+t._s(t.strings.miIntroP)+" ")]),s("div",{staticClass:"preview-list"},[s("img",{attrs:{src:t.$getAssetUrl(t.miGraphImg),height:"200",alt:"mi-graph-preview"}}),s("ul",[s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.miIntroLi1)+" ")],1),s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.miIntroLi2)+" ")],1),s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.miIntroLi3)+" ")],1),s("li",[s("svg-circle-check"),t._v(" "+t._s(t.strings.miIntroLi4)+" ")],1)])])]],2)]),s("section",{class:t.justInstalled||t.gaActivated?"aioseo-card step step--completed":"aioseo-card step step--current"},[t._m(0),s("div",{staticClass:"content"},[s("h2",{staticClass:"step-title"},[t.gaInstalled?t._e():[t._v(t._s(t.strings.miemInstallH))],t.prefersEm?[t._v(t._s(t.strings.emInstallH))]:[t._v(t._s(t.strings.miInstallH))]],2),s("p",[t.prefersEm?[t._v(t._s(t.strings.emInstallP))]:[t._v(t._s(t.strings.miInstallP))]],2),t.$aioseo.plugins.miLite.canInstall?t._e():s("base-button",{attrs:{type:"blue",size:"medium",tag:"a",target:"_blank",href:t.$aioseo.plugins.miLite.wpLink}},[s("svg-external"),t._v(" "+t._s(t.strings.installMi)+" ")],1),t.$aioseo.plugins.miLite.canInstall?s("base-button",{attrs:{loading:t.installingPlugin,type:t.justInstalled||t.gaActivated?"disabled":"blue",size:"medium"},on:{click:t.installMi}},[!t.justInstalled&&!t.gaInstalled?s("span",[t._v(t._s(t.strings.installMi))]):t._e(),(t.justInstalled||t.gaActivated)&&!t.prefersEm?s("span",[t._v(t._s(t.strings.miInstalled))]):t._e(),(t.justInstalled||t.gaActivated)&&t.prefersEm?s("span",[t._v(t._s(t.strings.emInstalled))]):t._e(),!t.justInstalled&&t.gaInstalled&&!t.gaActivated&&!t.prefersEm?s("span",[t._v(t._s(t.strings.activateMi))]):t._e(),!t.justInstalled&&t.gaInstalled&&!t.gaActivated&&t.prefersEm?s("span",[t._v(t._s(t.strings.activateEm))]):t._e()]):t._e()],1)]),s("section",{class:t.justInstalled||t.gaActivated?"aioseo-card step step--current":"aioseo-card step step--pending"},[t._m(1),s("div",{staticClass:"content"},[t.prefersEm?[s("h2",{staticClass:"step-title"},[t._v(t._s(t.strings.emWizardH))]),s("p",{staticClass:"step-body"},[t._v(t._s(t.strings.emWizardP))])]:[s("h2",{staticClass:"step-title"},[t._v(t._s(t.strings.miWizardH))]),s("p",{staticClass:"step-body"},[t._v(t._s(t.strings.miWizardP))])],s("base-button",{attrs:{disabled:!t.justInstalled&&!t.gaActivated,type:"blue",size:"medium",tag:"a",href:t.miOnboardingUrl}},[t._v(" "+t._s(t.strings.setupGA)+" ")])],2)])],1)])},u=[function(){var i=this,t=i._self._c;return t("div",{staticClass:"step-count"},[t("span",{staticClass:"step-count__num"},[i._v("1")])])},function(){var i=this,t=i._self._c;return t("div",{staticClass:"step-count"},[t("span",{staticClass:"step-count__num"},[i._v("2")])])}],$=g(p,d,u,!1,null,null,null,null);const b=$.exports;export{b as default};
