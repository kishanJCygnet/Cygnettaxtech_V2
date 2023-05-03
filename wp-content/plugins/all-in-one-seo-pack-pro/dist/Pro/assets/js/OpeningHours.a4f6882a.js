import{a as U}from"./vuex.esm-bundler.97e30e47.js";import{B as k}from"./Checkbox.de9093b7.js";import{B as R}from"./RadioToggle.2efe96f8.js";import{C as z}from"./index.d59f905b.js";import{C as S}from"./Card.32a76e4b.js";import{C as V}from"./SettingsRow.45faf80a.js";import{C as F}from"./AttributesList.c0051d06.js";import{C as M}from"./DisplayInfo.6178c74a.js";import{_ as w,r as l,o as h,h as y,w as i,d as e,c as O,f as t,a as b,t as a,e as c,F as C,i as B}from"./_plugin-vue_export-helper.49ea0e68.js";import{A as j,U as I}from"./UpdateCta.19209752.js";import{C as G}from"./Blur.ef3abea2.js";import{R as W}from"./RequiredPlans.ad9de58d.js";import{C as N}from"./ProBadge.b673849c.js";import{C as P}from"./Index.a6f4141a.js";import{A as E}from"./WpTable.24633fe3.js";import"./default-i18n.ab92175e.js";import"./constants.d064fb5f.js";import"./index.cda4d160.js";import"./SaveChanges.203efc2d.js";import"./Checkmark.05a656b1.js";import"./Caret.09e548f3.js";import"./Tooltip.754dc940.js";import"./Slide.dcb3da9d.js";import"./Row.87dd14fc.js";import"./Php.f78d0e4a.js";import"./CheckSolid.722e380f.js";import"./helpers.871dba46.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.f3af2f4b.js";import"./cleanForSlug.8d948434.js";import"./isArrayLikeObject.d5975086.js";import"./html.68197829.js";import"./Index.20fccad8.js";import"./_commonjsHelpers.f84db168.js";const q={components:{CoreAttributesList:F,CoreDisplayInfo:M},props:{label:null,displayOptions:{type:Object,required:!0}},data(){return{strings:{shortcodeAttributesDescription:this.$t.__("The following shortcode attributes can be used to override the default settings:",this.$td),phpArgumentsDescription:this.$t.__("The function accepts an associative array with the following arguments that can be used to override the default settings:",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td)},attributes:[{name:"location_id",description:this.$t.__("A Location ID if Multiple Locations is on.",this.$td)},{name:"show_title",description:this.$t.__("Show or hide the title.",this.$td)},{name:"show_icons",description:this.$t.__("Show or hide icons ( address, phone, fax, email ).",this.$td)},{name:"show_monday",description:this.$t.__("Show or hide the monday hours.",this.$td)},{name:"show_tuesday",description:this.$t.__("Show or hide the tuesday hours.",this.$td)},{name:"show_wednesday",description:this.$t.__("Show or hide the wednesday hours.",this.$td)},{name:"show_thursday",description:this.$t.__("Show or hide the thursday hours.",this.$td)},{name:"show_friday",description:this.$t.__("Show or hide the friday hours.",this.$td)},{name:"show_saturday",description:this.$t.__("Show or hide the saturday hours.",this.$td)},{name:"show_sunday",description:this.$t.__("Show or hide the sunday hours.",this.$td)},{name:"label",description:this.$t.__("The label.",this.$td)}]}}};function Z(o,r,$,H,s,n){const p=l("core-attributes-list"),u=l("core-display-info");return h(),y(u,{label:$.label,options:$.displayOptions},{shortcodeAdvanced:i(()=>[e(p,{description:s.strings.shortcodeAttributesDescription,attributes:s.attributes},null,8,["description","attributes"])]),phpAdvanced:i(()=>[e(p,{description:s.strings.phpArgumentsDescription,attributes:s.attributes},null,8,["description","attributes"])]),_:1},8,["label","options"])}const K=w(q,[["render",Z]]);const J={components:{BaseCheckbox:k,BaseRadioToggle:R,CoreAlert:z,CoreCard:S,CoreSettingsRow:V,LocalBusinessOpeningHoursDisplayInfo:K},data(){return{displayInfo:{block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the "%1$s Local - Opening Hours" block.',this.$td),"AIOSEO")},shortcode:{copy:"[aioseo_local_opening_hours]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the opening hours info. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeOpeningHours",!0))},widget:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this widget, visit the %1$swidgets page%2$s and look for the "%3$s Local - Opening Hours" widget.',this.$td),`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","AIOSEO")},php:{copy:"<?php if( function_exists( 'aioseo_local_opening_hours' ) ) aioseo_local_opening_hours(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the opening hours. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionOpeningHours",!0))}},strings:{openingHours:this.$t.__("Opening Hours Settings",this.$td),showOpeningHours:this.$t.__("Show Opening Hours",this.$td),displayOpeningHours:this.$t.__("Display Opening Hours",this.$td),labels:this.$t.__("Labels",this.$td),defaultLocationSettings:this.$t.__("Default Location Settings",this.$td),closedLabel:this.$t.__("Closed",this.$td),closedLabelDesc:this.$t.__("Displayed when the business is closed.",this.$td),closedLabelIntro:this.$t.sprintf(this.$t.__("Below are the default settings for all locations, which can be overwritten per %1$slocation%2$s.",this.$td),`<a href="${this.$aioseo.localBusiness.postTypeEditLink}">`,"</a>"),alwaysOpenLabel:this.$t.__("Open 24h label",this.$td),open24LabelDesc:this.$t.__("Displayed when the business is open all day long.",this.$td),open24Label:this.$t.__("Open 24h",this.$td),open247:this.$t.__("Open 24/7",this.$td),use24hFormat:this.$t.__("Use 24h format",this.$td),timezone:this.$t.__("Timezone",this.$td),selectTimeZone:this.$t.__("Select your timezone",this.$td),hours:this.$t.__("Hours",this.$td),open24h:this.$t.__("Open 24h",this.$td),closed:this.$t.__("Closed",this.$td)},weekdays:{monday:this.$t.__("Monday",this.$td),tuesday:this.$t.__("Tuesday",this.$td),wednesday:this.$t.__("Wednesday",this.$td),thursday:this.$t.__("Thursday",this.$td),friday:this.$t.__("Friday",this.$td),saturday:this.$t.__("Saturday",this.$td),sunday:this.$t.__("Sunday",this.$td)}}},computed:{...U(["currentPost","options"]),getDataObject(){return this.$root._data.screenContext==="metabox"?this.currentPost.local_seo.openingHours:this.options.localBusiness.openingHours}},methods:{isMultipleLocations(){return this.$root._data.screenContext==="metabox"?this.currentPost.local_seo.locations.general.multiple:this.options.localBusiness.locations.general.multiple},getSelectOptions(o){return this.getDataObject.use24hFormat?this.$constants.HOURS_24H_FORMAT.find(r=>r.value===o):this.$constants.HOURS_12H_FORMAT.find(r=>r.value===o)},getSelectTimezone(o){return this.$constants.TIMEZONES.find(r=>r.value===o)},saveDay(o,r,$){this.getDataObject.days[o][r]=$},saveTimezone(o){this.getDataObject.timezone=o},getWeekDay(o){return this.getDataObject.days[o]}}},Q={class:"aioseo-opening-hours"},X={class:"aioseo-col col-xs-12 text-xs-left"},Y={class:"aioseo-col col-xs-12 text-xs-left"},ss={class:"field-description"},es={class:"aioseo-description"},ts={class:"aioseo-col col-xs-12 text-xs-left mt-16"},os={class:"field-description"},ns={class:"aioseo-description"},is={class:"aioseo-col col-xs-12 text-xs-left"},as={class:"aioseo-col col-xs-12 text-xs-left mt-16"},ls={class:"aioseo-col col-xs-12 text-xs-left"},rs={class:"aioseo-col-day text-xs-left"},cs={class:"aioseo-col-hours text-xs-left"},ds=t("span",{class:"separator"},"-",-1),_s={class:"aioseo-col-alwaysopen text-xs-left"};function us(o,r,$,H,s,n){const p=l("base-radio-toggle"),u=l("core-settings-row"),g=l("local-business-opening-hours-display-info"),d=l("core-alert"),_=l("base-input"),v=l("base-toggle"),T=l("base-select"),L=l("base-checkbox"),A=l("core-card");return h(),O("div",Q,[e(A,{slug:"localBusinessOpeningHours","header-text":s.strings.openingHours},{default:i(()=>[e(u,{name:s.strings.showOpeningHours,class:"info-openinghours-row"},{content:i(()=>[t("div",X,[e(p,{name:"openingHours",modelValue:n.getDataObject.show,"onUpdate:modelValue":r[0]||(r[0]=f=>n.getDataObject.show=f),options:[{label:o.$constants.GLOBAL_STRINGS.no,value:!1},{label:o.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])])]),_:1},8,["name"]),e(g,{label:s.strings.displayOpeningHours,displayOptions:s.displayInfo},null,8,["label","displayOptions"]),n.getDataObject.show&&n.isMultipleLocations()&&o.$aioseo.license.isActive?(h(),y(u,{key:0,name:s.strings.defaultLocationSettings},{content:i(()=>[e(d,{innerHTML:s.strings.closedLabelIntro},null,8,["innerHTML"])]),_:1},8,["name"])):b("",!0),n.getDataObject.show?(h(),y(u,{key:1,name:s.strings.labels,class:"info-labels-row"},{content:i(()=>[t("div",Y,[t("span",ss,a(s.strings.open24Label),1),e(_,{size:"medium",modelValue:n.getDataObject.labels.alwaysOpen,"onUpdate:modelValue":r[1]||(r[1]=f=>n.getDataObject.labels.alwaysOpen=f)},null,8,["modelValue"]),t("div",es,a(s.strings.open24LabelDesc),1)]),t("div",ts,[t("span",os,a(s.strings.closedLabel),1),e(_,{type:"text",size:"medium",modelValue:n.getDataObject.labels.closed,"onUpdate:modelValue":r[2]||(r[2]=f=>n.getDataObject.labels.closed=f)},null,8,["modelValue"]),t("div",ns,a(s.strings.closedLabelDesc),1)])]),_:1},8,["name"])):b("",!0),n.getDataObject.show?(h(),y(u,{key:2,name:"Settings",class:"info-settings-row"},{content:i(()=>[t("div",is,[e(v,{modelValue:n.getDataObject.alwaysOpen,"onUpdate:modelValue":r[3]||(r[3]=f=>n.getDataObject.alwaysOpen=f)},{default:i(()=>[c(a(s.strings.open247),1)]),_:1},8,["modelValue"])]),t("div",as,[n.getDataObject.alwaysOpen?b("",!0):(h(),y(v,{key:0,modelValue:n.getDataObject.use24hFormat,"onUpdate:modelValue":r[4]||(r[4]=f=>n.getDataObject.use24hFormat=f)},{default:i(()=>[c(a(s.strings.use24hFormat),1)]),_:1},8,["modelValue"]))])]),_:1})):b("",!0),n.getDataObject.show&&!n.getDataObject.alwaysOpen?(h(),y(u,{key:3,name:s.strings.hours,class:"info-hours-row"},{content:i(()=>[t("div",ls,[(h(!0),O(C,null,B(s.weekdays,(f,m)=>(h(),O("div",{class:"aioseo-col-flex text-xs-left",key:m},[t("div",rs,a(f),1),t("div",cs,[e(T,{disabled:n.getWeekDay(m).open24h||n.getWeekDay(m).closed,size:"medium",options:n.getDataObject.use24hFormat?o.$constants.HOURS_24H_FORMAT:o.$constants.HOURS_12H_FORMAT,modelValue:n.getSelectOptions(n.getWeekDay(m).openTime),"onUpdate:modelValue":x=>n.saveDay(m,"openTime",x.value)},null,8,["disabled","options","modelValue","onUpdate:modelValue"]),ds,e(T,{disabled:n.getWeekDay(m).open24h||n.getWeekDay(m).closed,size:"medium",options:n.getDataObject.use24hFormat?o.$constants.HOURS_24H_FORMAT:o.$constants.HOURS_12H_FORMAT,modelValue:n.getSelectOptions(n.getWeekDay(m).closeTime),"onUpdate:modelValue":x=>n.saveDay(m,"closeTime",x.value)},null,8,["disabled","options","modelValue","onUpdate:modelValue"])]),t("div",_s,[e(L,{disabled:n.getWeekDay(m).closed,size:"medium",modelValue:n.getWeekDay(m).open24h,"onUpdate:modelValue":x=>n.getWeekDay(m).open24h=x},{default:i(()=>[c(a(s.strings.open24h),1)]),_:2},1032,["disabled","modelValue","onUpdate:modelValue"]),e(L,{size:"medium",class:"closed-label",modelValue:n.getWeekDay(m).closed,"onUpdate:modelValue":x=>n.getWeekDay(m).closed=x},{default:i(()=>[c(a(s.strings.closed),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1},8,["name"])):b("",!0)]),_:1},8,["header-text"])])}const hs=w(J,[["render",us]]),ps={components:{BaseCheckbox:k,BaseRadioToggle:R,CoreBlur:G,CoreSettingsRow:V},data(){return{strings:{showOpeningHours:this.$t.__("Show Opening Hours",this.$td),displayOpeningHours:this.$t.__("Display Opening Hours",this.$td),labels:this.$t.__("Labels",this.$td),closedLabel:this.$t.__("Closed label",this.$td),closedLabelDesc:this.$t.__("Text to display when 'Closed' setting is checked",this.$td),alwaysOpenLabel:this.$t.__("Open 24h label",this.$td),alwaysOpenLabelDesc:this.$t.__("Text to display when 'Open 24h' setting is checked",this.$td),open247:this.$t.__("Open 24/7",this.$td),use24hFormat:this.$t.__("Use 24h format",this.$td),timezone:this.$t.__("Timezone",this.$td),selectTimeZone:this.$t.__("Select your timezone:",this.$td),hours:this.$t.__("Opening Hours",this.$td),monday:this.$t.__("Monday",this.$td),tuesday:this.$t.__("Tuesday",this.$td),wednesday:this.$t.__("Wednesday",this.$td),thursday:this.$t.__("Thursday",this.$td),friday:this.$t.__("Friday",this.$td),saturday:this.$t.__("Saturday",this.$td),sunday:this.$t.__("Sunday",this.$td),open24h:this.$t.__("Open 24h",this.$td),closed:this.$t.__("Closed",this.$td)}}}},ms={class:"aioseo-opening-hours-blur"},gs={class:"aioseo-col col-xs-12 text-xs-left"},fs={class:"aioseo-col col-xs-12 text-xs-left"},$s={class:"aioseo-col col-xs-12 text-xs-left mt-16"},ys={class:"aioseo-col col-xs-12 text-xs-left"},bs={class:"aioseo-col-flex text-xs-left"},Os={class:"aioseo-col-day text-xs-left"},xs={class:"aioseo-col-hours text-xs-left"},ws=t("span",{class:"separator"},"-",-1),Hs={class:"aioseo-col-alwaysopen text-xs-left"},vs={class:"aioseo-col-flex text-xs-left"},Ss={class:"aioseo-col-day text-xs-left"},Ds={class:"aioseo-col-hours text-xs-left"},Ts=t("span",{class:"separator"},"-",-1),Ls={class:"aioseo-col-alwaysopen text-xs-left"},ks={class:"aioseo-col-flex text-xs-left"},Rs={class:"aioseo-col-day text-xs-left"},Vs={class:"aioseo-col-hours text-xs-left"},As=t("span",{class:"separator"},"-",-1),Us={class:"aioseo-col-alwaysopen text-xs-left"},zs={class:"aioseo-col-flex text-xs-left"},Fs={class:"aioseo-col-day text-xs-left"},Ms={class:"aioseo-col-hours text-xs-left"},Cs=t("span",{class:"separator"},"-",-1),Bs={class:"aioseo-col-alwaysopen text-xs-left"},js={class:"aioseo-col-flex text-xs-left"},Is={class:"aioseo-col-day text-xs-left"},Gs={class:"aioseo-col-hours text-xs-left"},Ws=t("span",{class:"separator"},"-",-1),Ns={class:"aioseo-col-alwaysopen text-xs-left"},Ps={class:"aioseo-col-flex text-xs-left"},Es={class:"aioseo-col-day text-xs-left"},qs={class:"aioseo-col-hours text-xs-left"},Zs=t("span",{class:"separator"},"-",-1),Ks={class:"aioseo-col-alwaysopen text-xs-left"},Js={class:"aioseo-col-flex text-xs-left"},Qs={class:"aioseo-col-day text-xs-left"},Xs={class:"aioseo-col-hours text-xs-left"},Ys=t("span",{class:"separator"},"-",-1),se={class:"aioseo-col-alwaysopen text-xs-left"};function ee(o,r,$,H,s,n){const p=l("base-radio-toggle"),u=l("core-settings-row"),g=l("base-toggle"),d=l("base-select"),_=l("base-checkbox"),v=l("core-blur");return h(),O("div",ms,[e(v,null,{default:i(()=>[e(u,{name:s.strings.showOpeningHours,class:"info-openinghours-row",align:""},{content:i(()=>[t("div",gs,[e(p,{name:"openingHours",modelValue:!0,options:[{label:o.$constants.GLOBAL_STRINGS.no,value:!1},{label:o.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["options"])])]),_:1},8,["name"]),e(u,{name:s.strings.hours,class:"info-hours-row",align:""},{content:i(()=>[t("div",fs,[e(g,null,{default:i(()=>[c(a(s.strings.open247),1)]),_:1})]),t("div",$s,[e(g,null,{default:i(()=>[c(a(s.strings.use24hFormat),1)]),_:1})]),t("div",ys,[t("div",bs,[t("div",Os,a(s.strings.monday),1),t("div",xs,[e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ws,e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),t("div",Hs,[e(_,{size:"medium"},{default:i(()=>[c(a(s.strings.open24h),1)]),_:1}),e(_,{size:"medium",class:"closed-label"},{default:i(()=>[c(a(s.strings.closed),1)]),_:1})])]),t("div",vs,[t("div",Ss,a(s.strings.tuesday),1),t("div",Ds,[e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Ts,e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),t("div",Ls,[e(_,{size:"medium"},{default:i(()=>[c(a(s.strings.open24h),1)]),_:1}),e(_,{size:"medium",class:"closed-label"},{default:i(()=>[c(a(s.strings.closed),1)]),_:1})])]),t("div",ks,[t("div",Rs,a(s.strings.wednesday),1),t("div",Vs,[e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),As,e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),t("div",Us,[e(_,{size:"medium"},{default:i(()=>[c(a(s.strings.open24h),1)]),_:1}),e(_,{size:"medium",class:"closed-label"},{default:i(()=>[c(a(s.strings.closed),1)]),_:1})])]),t("div",zs,[t("div",Fs,a(s.strings.thursday),1),t("div",Ms,[e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Cs,e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),t("div",Bs,[e(_,{size:"medium"},{default:i(()=>[c(a(s.strings.open24h),1)]),_:1}),e(_,{size:"medium",class:"closed-label"},{default:i(()=>[c(a(s.strings.closed),1)]),_:1})])]),t("div",js,[t("div",Is,a(s.strings.friday),1),t("div",Gs,[e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Ws,e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),t("div",Ns,[e(_,{size:"medium"},{default:i(()=>[c(a(s.strings.open24h),1)]),_:1}),e(_,{size:"medium",class:"closed-label"},{default:i(()=>[c(a(s.strings.closed),1)]),_:1})])]),t("div",Ps,[t("div",Es,a(s.strings.saturday),1),t("div",qs,[e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Zs,e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),t("div",Ks,[e(_,{size:"medium"},{default:i(()=>[c(a(s.strings.open24h),1)]),_:1}),e(_,{size:"medium",class:"closed-label"},{default:i(()=>[c(a(s.strings.closed),1)]),_:1})])]),t("div",Js,[t("div",Qs,a(s.strings.sunday),1),t("div",Xs,[e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Ys,e(d,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),t("div",se,[e(_,{size:"medium"},{default:i(()=>[c(a(s.strings.open24h),1)]),_:1}),e(_,{size:"medium",class:"closed-label"},{default:i(()=>[c(a(s.strings.closed),1)]),_:1})])])])]),_:1},8,["name"])]),_:1})])}const D=w(ps,[["render",ee]]),te={components:{ActivateCta:j,Blur:D,CoreCard:S},data(){return{strings:{openingHours:this.$t.__("Opening Hours Settings",this.$td)}}}};function oe(o,r,$,H,s,n){const p=l("blur"),u=l("activate-cta"),g=l("core-card");return h(),O("div",null,[e(g,{slug:"localBusinessOpeningHours","header-text":s.strings.openingHours,noSlide:!0},{default:i(()=>[e(p),e(u,{"align-top":!0})]),_:1},8,["header-text"])])}const ne=w(te,[["render",oe]]);const ie={components:{Blur:D,RequiredPlans:W,CoreCard:S,CoreProBadge:N,Cta:P},data(){return{features:[this.$t.__("Show Opening Hours",this.$td),this.$t.__("Multiple Locations",this.$td),this.$t.__("Opening Hours block, widget and shortcode",this.$td)],strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),openingHours:this.$t.__("Opening Hours Settings",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}}},ae={class:"aioseo-opening-hours"};function le(o,r,$,H,s,n){const p=l("core-pro-badge"),u=l("blur"),g=l("required-plans"),d=l("cta"),_=l("core-card");return h(),O("div",ae,[e(_,{slug:"localBusinessOpeningHours",noSlide:!0},{header:i(()=>[t("span",null,a(s.strings.openingHours),1),e(p)]),default:i(()=>[e(u),e(d,{"cta-link":o.$links.getPricingUrl("local-seo","local-seo-upsell","opening-hours"),"button-text":s.strings.ctaButtonText,"learn-more-link":o.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":s.features,"align-top":""},{"header-text":i(()=>[c(a(s.strings.ctaHeader),1)]),description:i(()=>[e(g,{addon:"aioseo-local-business"}),c(" "+a(s.strings.locationInfo1),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])]),_:1})])}const re=w(ie,[["render",le]]),ce={components:{Blur:D,CoreCard:S,UpdateCta:I},data(){return{strings:{openingHours:this.$t.__("Opening Hours Settings",this.$td)}}}};function de(o,r,$,H,s,n){const p=l("blur"),u=l("update-cta"),g=l("core-card");return h(),O("div",null,[e(g,{slug:"localBusinessOpeningHours","header-text":s.strings.openingHours,noSlide:!0},{default:i(()=>[e(p),e(u,{"align-top":!0})]),_:1},8,["header-text"])])}const _e=w(ce,[["render",de]]),ue={mixins:[E],components:{OpeningHours:hs,Activate:ne,Lite:re,Update:_e},data(){return{addonSlug:"aioseo-local-business"}}},he={class:"aioseo-opening-hours"};function pe(o,r,$,H,s,n){const p=l("opening-hours",!0),u=l("activate"),g=l("update"),d=l("lite");return h(),O("div",he,[o.shouldShowMain?(h(),y(p,{key:0})):b("",!0),o.shouldShowActivate?(h(),y(u,{key:1})):b("",!0),o.shouldShowUpdate?(h(),y(g,{key:2})):b("",!0),o.shouldShowLite?(h(),y(d,{key:3})):b("",!0)])}const Ke=w(ue,[["render",pe]]);export{Ke as default};
