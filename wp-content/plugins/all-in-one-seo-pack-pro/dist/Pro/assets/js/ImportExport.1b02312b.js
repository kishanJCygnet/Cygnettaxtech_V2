import{a as W,m as O,d as Z}from"./vuex.esm-bundler.97e30e47.js";import{D as N}from"./index.cda4d160.js";import{C as R,c as G}from"./index.d59f905b.js";import{C as A}from"./Card.32a76e4b.js";import{C as J}from"./Index.20fccad8.js";import{C as U}from"./NetworkSiteSelector.633ed425.js";import{C as K}from"./Tooltip.754dc940.js";import{S as Q}from"./Plus.77736cd8.js";import{S as X}from"./Caret.09e548f3.js";import{S as ee}from"./History.2cfb8392.js";import{S as te}from"./Refresh.9a7e7fe2.js";import{_ as B,r as n,o as l,h as _,w as o,d as i,c as k,f,t as a,a as u,e as c,F as E,i as I,n as F,g as se}from"./_plugin-vue_export-helper.49ea0e68.js";import{G as D,a as V}from"./Row.87dd14fc.js";import{d as oe}from"./WpTable.09ccfd81.js";import"./default-i18n.ab92175e.js";import"./constants.817c4cd3.js";import"./SaveChanges.203efc2d.js";import{B as P}from"./Checkbox.de9093b7.js";import{S as ie}from"./Upload.b16b86ee.js";import{S as z}from"./Download.05381e80.js";import{C as ne}from"./Blur.ef3abea2.js";import{C as le}from"./Index.a6f4141a.js";import"./isArrayLikeObject.d5975086.js";import"./helpers.871dba46.js";import"./Slide.dcb3da9d.js";import"./RequiresUpdate.fe231e49.js";import"./postContent.81b4971a.js";import"./cleanForSlug.1b4a8fe4.js";import"./html.68197829.js";import"./_commonjsHelpers.f84db168.js";import"./Checkmark.05a656b1.js";const re={components:{CoreAlert:R,CoreCard:A,CoreModal:J,CoreNetworkSiteSelector:U,CoreTooltip:K,SvgCirclePlus:Q,SvgClose:X,SvgHistory:ee,SvgRefresh:te,SvgTrash:G},data(){return{site:null,timeout:null,backupToDelete:null,backupToRestore:null,backupsDeleteSuccess:!1,showModal:!1,backupsRestoreSuccess:!1,loading:!1,strings:{backupSettings:this.$t.__("Backup Settings",this.$td),areYouSureDeleteBackup:this.$t.__("Are you sure you want to delete this backup?",this.$td),areYouSureRestoreBackup:this.$t.__("Are you sure you want to restore this backup?",this.$td),yesDeleteBackup:this.$t.__("Yes, I want to delete this backup",this.$td),yesRestoreBackup:this.$t.__("Yes, I want to restore this backup",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td),actionCannotBeUndone:this.$t.__("This action cannot be undone.",this.$td),noBackups:this.$t.__("You have no saved backups.",this.$td),createBackup:this.$t.__("Create Backup",this.$td),restore:this.$t.__("Restore",this.$td),delete:this.$t.__("Delete",this.$td),backupSuccessfullyDeleted:this.$t.__("Success! The backup was deleted.",this.$td),backupSuccessfullyRestored:this.$t.__("Success! The backup was restored.",this.$td)}}},computed:{...W(["backups","networkBackups"]),getBackups(){return this.site?this.networkBackups[this.site.blog_id]||[]:this.backups},areYouSure(){return this.backupToDelete?this.strings.areYouSureDeleteBackup:this.strings.areYouSureRestoreBackup},iAmSure(){return this.backupToDelete?this.strings.yesDeleteBackup:this.strings.yesRestoreBackup}},methods:{...O(["createBackup","deleteBackup","restoreBackup"]),processCreateBackup(){this.loading=!0,this.createBackup({siteId:this.site?this.site.blog_id:null}).then(()=>{this.loading=!1})},maybeDeleteBackup(t){this.showModal=!0,this.backupToRestore=null,this.backupToDelete=t},maybeRestoreBackup(t){this.showModal=!0,this.backupToDelete=null,this.backupToRestore=t},processDeleteBackup(){this.loading=!0,this.deleteBackup({backup:this.backupToDelete,siteId:this.site?this.site.blog_id:null}).then(()=>{clearTimeout(this.timeout),this.loading=!1,this.showModal=!1,this.backupToDelete=null,this.backupsDeleteSuccess=!0,this.timeout=setTimeout(()=>{this.backupsDeleteSuccess=!1,this.backupsRestoreSuccess=!1},3e3)})},processRestoreBackup(){this.loading=!0,this.restoreBackup({backup:this.backupToRestore,siteId:this.site?this.site.blog_id:null}).then(()=>{clearTimeout(this.timeout),this.loading=!1,this.showModal=!1,this.backupToRestore=null,this.backupsRestoreSuccess=!0,this.timeout=setTimeout(()=>{this.backupsDeleteSuccess=!1,this.backupsRestoreSuccess=!1},3e3)})},getBackupName(t){const s=N.fromMillis(t*1e3).setZone(N.local().zoneName);return this.$t.sprintf(this.$t.__("%1$s at %2$s",this.$td),"<strong>"+s.toFormat("MMMM d, yyyy")+"</strong>","<strong>"+s.toFormat("h:mma ZZZZ")+"</strong>")},processBackupAction(){return this.backupToDelete?this.processDeleteBackup():this.processRestoreBackup()}}},ae={key:0,class:"aioseo-settings-row"},ce={class:"select-site"},ue={key:3,class:"aioseo-section-description"},pe={key:4,class:"backups-table"},de={class:"backups-rows"},_e=["innerHTML"],me={class:"backup-actions"},he={class:"aioseo-modal-body"},ge=["innerHTML"];function fe(t,s,x,m,e,r){const y=n("svg-history"),S=n("core-network-site-selector"),p=n("core-alert"),b=n("svg-refresh"),g=n("core-tooltip"),w=n("svg-trash"),v=n("svg-circle-plus"),d=n("base-button"),C=n("svg-close"),h=n("core-modal"),T=n("core-card");return l(),_(T,{class:"aioseo-backup-settings",slug:"backupSettings",toggles:!1,"no-slide":"","header-text":e.strings.backupSettings},{"header-icon":o(()=>[i(y)]),default:o(()=>[t.$aioseo.data.isNetworkAdmin?(l(),k("div",ae,[f("div",ce,a(e.strings.selectSite),1),i(S,{onSelectedSite:s[0]||(s[0]=$=>e.site=$)})])):u("",!0),e.backupsDeleteSuccess?(l(),_(p,{key:1,type:"green"},{default:o(()=>[c(a(e.strings.backupSuccessfullyDeleted),1)]),_:1})):u("",!0),e.backupsRestoreSuccess?(l(),_(p,{key:2,type:"green"},{default:o(()=>[c(a(e.strings.backupSuccessfullyRestored),1)]),_:1})):u("",!0),r.getBackups.length?u("",!0):(l(),k("div",ue,a(e.strings.noBackups),1)),r.getBackups.length&&!(t.$aioseo.data.isNetworkAdmin&&!e.site)?(l(),k("div",pe,[f("div",de,[(l(!0),k(E,null,I(r.getBackups,($,M)=>(l(),k("div",{class:F(["backup-row",{even:M%2===0}]),key:M},[f("div",{class:"backup-name",innerHTML:r.getBackupName($)},null,8,_e),f("div",me,[i(g,{type:"action"},{tooltip:o(()=>[c(a(e.strings.restore),1)]),default:o(()=>[i(b,{onClick:q=>r.maybeRestoreBackup($)},null,8,["onClick"])]),_:2},1024),i(g,{type:"action"},{tooltip:o(()=>[c(a(e.strings.delete),1)]),default:o(()=>[i(w,{onClick:q=>r.maybeDeleteBackup($)},null,8,["onClick"])]),_:2},1024)])],2))),128))])])):u("",!0),i(d,{type:"blue",size:"medium",onClick:r.processCreateBackup,loading:e.loading,disabled:t.$aioseo.data.isNetworkAdmin&&!e.site},{default:o(()=>[i(v),c(" "+a(e.strings.createBackup),1)]),_:1},8,["onClick","loading","disabled"]),e.showModal?(l(),_(h,{key:5,"no-header":"",onClose:s[4]||(s[4]=$=>e.showModal=!1)},{body:o(()=>[f("div",he,[f("button",{class:"close",onClick:s[2]||(s[2]=se($=>e.showModal=!1,["stop"]))},[i(C,{onClick:s[1]||(s[1]=$=>e.showModal=!1)})]),f("h3",null,a(r.areYouSure),1),f("div",{class:"reset-description",innerHTML:e.strings.actionCannotBeUndone},null,8,ge),i(d,{type:"blue",size:"medium",onClick:r.processBackupAction},{default:o(()=>[c(a(r.iAmSure),1)]),_:1},8,["onClick"]),i(d,{type:"gray",size:"medium",onClick:s[3]||(s[3]=$=>e.showModal=!1)},{default:o(()=>[c(a(e.strings.noChangedMind),1)]),_:1})])]),_:1})):u("",!0)]),_:1},8,["header-text"])}const j=B(re,[["render",fe]]);const ke={components:{BaseCheckbox:P,CoreCard:A,CoreNetworkSiteSelector:U,GridColumn:D,GridRow:V,SvgUpload:ie},mixins:[oe],data(){return{site:null,options:{},postOptions:{},loading:!1,strings:{selectSite:this.$t.__("Select Site",this.$td),exportSettings:this.$t.__("Export Settings",this.$td),allSettings:this.$t.__("Export All Settings",this.$td),allPostTypes:this.$t.__("Export All Post Types",this.$td)}}},computed:{canExport(){if(this.$aioseo.data.isNetworkAdmin&&!this.site)return!1;const t=[];return Object.keys(this.options).forEach(s=>{t.push(this.options[s])}),Object.keys(this.postOptions).forEach(s=>{t.push(this.postOptions[s])}),t.some(s=>s)},canExportPostOptions(){return["aioseo_page_general_settings","aioseo_page_advanced_settings","aioseo_page_schema_settings","aioseo_page_social_settings","aioseo_page_local_seo_settings"].some(t=>this.$allowed(t))}},methods:{...O(["exportSettings"]),processExportSettings(){const t=[];this.options.all?(this.$isPro&&t.push("general"),t.push("internal"),this.toolsSettings.filter(m=>m.value!=="all").forEach(m=>{t.push(m.value)})):Object.keys(this.options).forEach(m=>{this.options[m]&&t.push(m)});const s=[];this.postOptions.all?this.$aioseo.postData.postTypes.forEach(m=>{s.push(m.name)}):Object.keys(this.postOptions).forEach(m=>{this.postOptions[m]&&s.push(m)});const x=this.site?`${this.site.domain}${this.site.path.replace("/","-")}`:"";this.loading=!0,this.exportSettings({settings:t,postOptions:s,siteId:this.site?this.site.blog_id:null}).then(m=>{this.loading=!1,this.options={},this.postOptions={};const e=new Blob([JSON.stringify(m.body.settings)],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download=`aioseo-export-settings-${x}${N.now().toFormat("yyyy-MM-dd")}.json`,r.click(),URL.revokeObjectURL(r.href)})}}},be={key:0,class:"aioseo-settings-row"},ye={class:"select-site"},Se={key:1,class:"export-post-types"};function ve(t,s,x,m,e,r){const y=n("svg-upload"),S=n("core-network-site-selector"),p=n("base-checkbox"),b=n("grid-column"),g=n("grid-row"),w=n("base-button"),v=n("core-card");return l(),_(v,{class:"aioseo-export-settings",slug:"exportSettings",toggles:!1,"no-slide":"","header-text":e.strings.exportSettings},{"header-icon":o(()=>[i(y)]),default:o(()=>[t.$aioseo.data.isNetworkAdmin?(l(),k("div",be,[f("div",ye,a(e.strings.selectSite),1),i(S,{onSelectedSite:s[0]||(s[0]=d=>e.site=d)})])):u("",!0),f("div",{class:F(["export-settings",{"aioseo-settings-row":r.canExportPostOptions}])},[i(g,null,{default:o(()=>[i(b,{class:"export-all"},{default:o(()=>[i(p,{size:"medium",modelValue:e.options.all,"onUpdate:modelValue":s[1]||(s[1]=d=>e.options.all=d),disabled:t.$aioseo.data.isNetworkAdmin&&!e.site},{default:o(()=>[c(a(e.strings.allSettings),1)]),_:1},8,["modelValue","disabled"])]),_:1}),(l(!0),k(E,null,I(t.toolsSettings,(d,C)=>(l(),_(b,{key:C,sm:"6"},{default:o(()=>[e.options.all?u("",!0):(l(),_(p,{key:0,size:"medium",modelValue:e.options[d.value],"onUpdate:modelValue":h=>e.options[d.value]=h,disabled:t.$aioseo.data.isNetworkAdmin&&!e.site},{default:o(()=>[c(a(d.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])),d.value!=="all"&&e.options.all?(l(),_(p,{key:1,size:"medium",modelValue:!0,disabled:""},{default:o(()=>[c(a(d.label),1)]),_:2},1024)):u("",!0)]),_:2},1024))),128))]),_:1})],2),r.canExportPostOptions?(l(),k("div",Se,[i(g,null,{default:o(()=>[i(b,{class:"export-all"},{default:o(()=>[i(p,{size:"medium",modelValue:e.postOptions.all,"onUpdate:modelValue":s[2]||(s[2]=d=>e.postOptions.all=d),disabled:t.$aioseo.data.isNetworkAdmin&&!e.site},{default:o(()=>[c(a(e.strings.allPostTypes),1)]),_:1},8,["modelValue","disabled"])]),_:1}),(l(!0),k(E,null,I(t.$aioseo.postData.postTypes,(d,C)=>(l(),_(b,{key:C,sm:"6"},{default:o(()=>[e.postOptions.all?u("",!0):(l(),_(p,{key:0,size:"medium",modelValue:e.postOptions[d.name],"onUpdate:modelValue":h=>e.postOptions[d.name]=h,disabled:t.$aioseo.data.isNetworkAdmin&&!e.site},{default:o(()=>[c(a(d.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])),d.name!=="all"&&e.postOptions.all?(l(),_(p,{key:1,size:"medium",modelValue:!0,disabled:""},{default:o(()=>[c(a(d.label),1)]),_:2},1024)):u("",!0)]),_:2},1024))),128))]),_:1})])):u("",!0),i(w,{type:"blue",size:"medium",class:"import",onClick:r.processExportSettings,disabled:!r.canExport,loading:e.loading},{default:o(()=>[c(a(e.strings.exportSettings),1)]),_:1},8,["onClick","disabled","loading"])]),_:1},8,["header-text"])}const L=B(ke,[["render",ve]]);const we={components:{CoreAlert:R,CoreCard:A,CoreNetworkSiteSelector:U,SvgDownload:z},data(){return{site:null,inputFile:null,filename:null,file:null,uploadError:!1,uploadSuccess:!1,loading:!1,strings:{selectSite:this.$t.__("Select Site",this.$td),importRestoreAioseoSettings:this.$t.sprintf(this.$t.__("Import / Restore %1$s Settings",this.$td),"AIOSEO"),fileUploadPlaceholder:this.$t.__("Import from a JSON or INI file...",this.$td),chooseAFile:this.$t.__("Choose a File",this.$td),fileUploadDescription:this.$t.__("Imported settings will overwrite existing settings and will not be merged.",this.$td),import:this.$t.__("Import",this.$td),jsonFileTypeRequired:this.$t.__("A JSON or INI file is required to import settings.",this.$td),fileUploadedSuccessfully:this.$t.__("Success! Your settings have been imported.",this.$td),fileUploadFailed:this.$t.__("There was an error importing your settings. Please make sure you are uploading the correct file or it is in the proper format.",this.$td),v3ImportWarning:this.$t.sprintf(this.$t.__("Please note that if you are importing post/term meta from %1$s v3.7.1 or below, this will only be successful if the post/term IDs of this site are identical to those of the source site.",this.$td),"AIOSEO")}}},computed:{importValidated(){return!(this.$aioseo.data.isNetworkAdmin&&!this.site||!this.file.type||!this.file.name||this.file.type!=="application/json"&&!this.file.name.endsWith(".ini"))}},methods:{...O(["uploadFile"]),reset(){this.uploadError=!1,this.filename=null,this.file=null,this.inputFile=null},triggerFileUpload(){this.reset(),this.$refs.file.$el.querySelector("input").focus(),this.$refs.file.$el.querySelector("input").click()},submitFile(){this.loading=!0,this.uploadFile({file:this.file,filename:this.filename,siteId:this.site?this.site.blog_id:null}).then(()=>{this.reset(),this.uploadSuccess=!0,this.loading=!1}).catch(()=>{this.reset(),this.loading=!1,this.uploadError=this.strings.fileUploadFailed})},handleFileUpload(){this.reset(),this.file=this.$refs.file.$el.querySelector("input").files[0],this.file&&(this.filename=this.file.name,this.file.type!=="application/json"&&!this.file.name.endsWith(".ini")&&(this.uploadError=this.strings.jsonFileTypeRequired))}}},$e={key:0,class:"aioseo-settings-row"},xe={class:"select-site"},Ce={class:"file-upload"},Be={class:"aioseo-description"};function Ee(t,s,x,m,e,r){const y=n("svg-download"),S=n("core-network-site-selector"),p=n("core-alert"),b=n("base-input"),g=n("base-button"),w=n("core-card");return l(),_(w,{class:"aioseo-import-aioseo",slug:"importAioseoSettings",toggles:!1,"no-slide":"","header-text":e.strings.importRestoreAioseoSettings},{"header-icon":o(()=>[i(y)]),default:o(()=>[t.$aioseo.data.isNetworkAdmin?(l(),k("div",$e,[f("div",xe,a(e.strings.selectSite),1),i(S,{onSelectedSite:s[0]||(s[0]=v=>e.site=v)})])):u("",!0),e.uploadError?(l(),_(p,{key:1,type:"red",class:"import-alert"},{default:o(()=>[c(a(e.uploadError),1)]),_:1})):u("",!0),e.filename&&e.filename.endsWith(".ini")?(l(),_(p,{key:2,type:"yellow",class:"import-alert"},{default:o(()=>[c(a(e.strings.v3ImportWarning),1)]),_:1})):u("",!0),e.uploadSuccess?(l(),_(p,{key:3,type:"green",class:"import-alert"},{default:o(()=>[c(a(e.strings.fileUploadedSuccessfully),1)]),_:1})):u("",!0),f("div",Ce,[i(b,{modelValue:e.filename,"onUpdate:modelValue":s[1]||(s[1]=v=>e.filename=v),size:"medium",onFocus:r.triggerFileUpload,placeholder:e.strings.fileUploadPlaceholder,class:F({"aioseo-error":e.uploadError}),disabled:t.$aioseo.data.isNetworkAdmin&&!e.site},null,8,["modelValue","onFocus","placeholder","class","disabled"]),i(g,{type:"black",size:"medium",onClick:r.triggerFileUpload,disabled:t.$aioseo.data.isNetworkAdmin&&!e.site},{default:o(()=>[c(a(e.strings.chooseAFile),1)]),_:1},8,["onClick","disabled"])]),i(b,{modelValue:e.inputFile,"onUpdate:modelValue":s[2]||(s[2]=v=>e.inputFile=v),type:"file",onClick:r.reset,onChange:r.handleFileUpload,ref:"file"},null,8,["modelValue","onClick","onChange"]),f("div",Be,a(e.strings.fileUploadDescription),1),i(g,{type:"blue",size:"medium",class:"import",onClick:r.submitFile,disabled:!e.file||!r.importValidated,loading:e.loading},{default:o(()=>[c(a(e.strings.import),1)]),_:1},8,["onClick","disabled","loading"])]),_:1},8,["header-text"])}const Y=B(we,[["render",Ee]]);const Ie={components:{BaseCheckbox:P,CoreAlert:R,CoreCard:A,CoreNetworkSiteSelector:U,GridColumn:D,GridRow:V,SvgDownload:z},data(){return{site:null,importSuccess:!1,importError:!1,options:{},plugin:null,loading:!1,strings:{selectSite:this.$t.__("Select Site",this.$td),importSettingsFromOtherPlugins:this.$t.__("Import Settings From Other Plugins",this.$td),importOthersDescription:this.$t.sprintf(this.$t.__("Choose a plugin to import SEO data directly into %1$s.",this.$td),"AIOSEO"),selectPlugin:this.$t.__("Select a plugin...",this.$td),import:this.$t.__("Import",this.$td),allSettings:this.$t.__("All Settings",this.$td),notInstalled:this.$t.__("not installed",this.$td)}}},watch:{plugin(){this.importSuccess=!1,this.importError=!1,this.options={}}},computed:{settings(){const t=[{value:"settings",label:this.$t.__("SEO Settings",this.$td)},{value:"postMeta",label:this.$t.__("Post Meta",this.$td)}];return this.$isPro&&t.push({value:"termMeta",label:this.$t.__("Term Meta",this.$td)}),t},plugins(){const t=[];return this.$aioseo.importers.forEach(s=>{t.push({value:s.slug,label:s.name,canImport:s.canImport,version:s.version,$isDisabled:!s.installed})}),t},canImport(){if(this.$aioseo.data.isNetworkAdmin&&!this.site)return!1;const t=[];return Object.keys(this.options).forEach(s=>{t.push(this.options[s])}),t.some(s=>s)},importSuccessful(){return this.$t.sprintf(this.$t.__("%1$s was successfully imported!",this.$td),this.plugin.label)},importErrorMessage(){return this.$t.sprintf(this.$t.__("An error occurred while importing %1$s. Please try again.",this.$td),this.plugin.label)}},methods:{...O(["importPlugins"]),processImportPlugin(){this.importSuccess=!1,this.importError=!1,this.loading=!0;const t=[];this.options.all?this.settings.filter(s=>s.value!=="all").forEach(s=>{t.push(s.value)}):Object.keys(this.options).forEach(s=>{this.options[s]&&t.push(s)}),this.importPlugins({plugins:[{plugin:this.plugin.value,settings:t}],siteId:this.site?this.site.blog_id:null}).then(()=>{this.loading=!1,this.importSuccess=!0,this.options={}}).catch(()=>{this.loading=!1,this.importError=!0,this.options={}})},invalidVersion(t){return this.$t.sprintf(this.$t.__("We do not support importing from the currently installed version of %1$s (%2$s). Please upgrade to the latest version and try again.",this.$td),t.label,t.version)}}},Oe={key:0,class:"aioseo-settings-row"},Ae={class:"select-site"},Ue={class:"aioseo-section-description"},De={class:"import-plugin-label"},Ve={class:"plugin-label"},Te={key:0,class:"plugin-status"},Ne={key:3,class:"import-settings"};function Re(t,s,x,m,e,r){const y=n("svg-download"),S=n("core-network-site-selector"),p=n("core-alert"),b=n("base-select"),g=n("base-checkbox"),w=n("grid-column"),v=n("grid-row"),d=n("base-button"),C=n("core-card");return l(),_(C,{id:"aioseo-import-others",class:"aioseo-import-others",slug:"importOtherPlugins",toggles:!1,"no-slide":"","header-text":e.strings.importSettingsFromOtherPlugins},{"header-icon":o(()=>[i(y)]),default:o(()=>[t.$aioseo.data.isNetworkAdmin?(l(),k("div",Oe,[f("div",Ae,a(e.strings.selectSite),1),i(S,{onSelectedSite:s[0]||(s[0]=h=>e.site=h)})])):u("",!0),f("div",Ue,a(e.strings.importOthersDescription),1),e.importSuccess?(l(),_(p,{key:1,class:"import-success",type:"green"},{default:o(()=>[c(a(r.importSuccessful),1)]),_:1})):u("",!0),e.importError?(l(),_(p,{key:2,class:"import-error",type:"red"},{default:o(()=>[c(a(r.importErrorMessage),1)]),_:1})):u("",!0),i(b,{size:"medium",modelValue:e.plugin,"onUpdate:modelValue":s[1]||(s[1]=h=>e.plugin=h),options:r.plugins,placeholder:e.strings.selectPlugin,disabled:t.$aioseo.data.isNetworkAdmin&&!e.site},{option:o(({option:h})=>[f("div",De,[f("span",Ve,a(h.label),1),h.$isDisabled?(l(),k("span",Te,a(e.strings.notInstalled),1)):u("",!0)])]),_:1},8,["modelValue","options","placeholder","disabled"]),e.plugin?(l(),k("div",Ne,[e.plugin.canImport?(l(),_(v,{key:0},{default:o(()=>[i(w,null,{default:o(()=>[i(g,{size:"medium",modelValue:e.options.all,"onUpdate:modelValue":s[2]||(s[2]=h=>e.options.all=h)},{default:o(()=>[c(a(e.strings.allSettings),1)]),_:1},8,["modelValue"])]),_:1}),(l(!0),k(E,null,I(r.settings,(h,T)=>(l(),_(w,{key:T,sm:"6"},{default:o(()=>[e.options.all?u("",!0):(l(),_(g,{key:0,size:"medium",modelValue:e.options[h.value],"onUpdate:modelValue":$=>e.options[h.value]=$},{default:o(()=>[c(a(h.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])),h.value!=="all"&&e.options.all?(l(),_(g,{key:1,size:"medium",modelValue:!0,disabled:""},{default:o(()=>[c(a(h.label),1)]),_:2},1024)):u("",!0)]),_:2},1024))),128))]),_:1})):u("",!0),e.plugin.canImport?u("",!0):(l(),_(p,{key:1,type:"red"},{default:o(()=>[c(a(r.invalidVersion(e.plugin)),1)]),_:1}))])):u("",!0),i(d,{type:"blue",size:"medium",class:"import",onClick:r.processImportPlugin,disabled:!e.plugin||!r.canImport,loading:e.loading},{default:o(()=>[c(a(e.strings.import),1)]),_:1},8,["onClick","disabled","loading"])]),_:1},8,["header-text"])}const H=B(Ie,[["render",Re]]);const Fe={components:{BackupSettings:j,GridColumn:D,GridRow:V,ExportSettings:L,ImportAioseo:Y,ImportOthers:H}},Me={class:"aioseo-tools-import-export"};function Pe(t,s,x,m,e,r){const y=n("import-aioseo"),S=n("import-others"),p=n("grid-column"),b=n("export-settings"),g=n("grid-row"),w=n("backup-settings");return l(),k("div",Me,[i(g,null,{default:o(()=>[i(p,{md:"6"},{default:o(()=>[i(y),i(S)]),_:1}),i(p,{md:"6"},{default:o(()=>[i(b)]),_:1})]),_:1}),i(g,null,{default:o(()=>[i(p,null,{default:o(()=>[i(w)]),_:1})]),_:1})])}const ze=B(Fe,[["render",Pe]]);const je={components:{BackupSettings:j,CoreBlur:ne,Cta:le,GridColumn:D,GridRow:V,ExportSettings:L,ImportAioseo:Y,ImportOthers:H},data(){return{strings:{ctaHeader:this.$t.sprintf(this.$t.__("This feature is not available in your current plan.",this.$td),"AIOSEO","Pro"),ctaButtonText:this.$t.__("Upgrade Your Plan and Unlock Network Tools",this.$td),networkDatabaseToolsDescription:this.$t.__("Unlock network-level tools to manage all your sites from one easy-to-use location. Migrate data or create backups without the need to visit each dashboard.",this.$td)}}}},Le={class:"aioseo-tools-import-export"};function Ye(t,s,x,m,e,r){const y=n("import-aioseo"),S=n("import-others"),p=n("grid-column"),b=n("export-settings"),g=n("grid-row"),w=n("backup-settings"),v=n("core-blur"),d=n("cta");return l(),k("div",Le,[i(v,null,{default:o(()=>[i(g,null,{default:o(()=>[i(p,{md:"6"},{default:o(()=>[i(y),i(S)]),_:1}),i(p,{md:"6"},{default:o(()=>[i(b)]),_:1})]),_:1}),i(g,null,{default:o(()=>[i(p,null,{default:o(()=>[i(w)]),_:1})]),_:1})]),_:1}),i(d,{"cta-link":t.$links.getPricingUrl("network-tools","import-export"),"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("network-tools","import-export","home")},{"header-text":o(()=>[c(a(e.strings.ctaHeader),1)]),description:o(()=>[c(a(e.strings.networkDatabaseToolsDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link"])])}const He=B(je,[["render",Ye]]),qe={components:{ImportExport:ze,LiteImportExport:He},computed:{...Z(["isUnlicensed"])}};function We(t,s,x,m,e,r){const y=n("import-export",!0),S=n("lite-import-export");return l(),k("div",null,[!t.$aioseo.data.isNetworkAdmin||!t.isUnlicensed&&t.$license.hasCoreFeature(t.$aioseo,"tools","network-tools-import-export")?(l(),_(y,{key:0})):u("",!0),t.$aioseo.data.isNetworkAdmin&&(t.isUnlicensed||!t.$license.hasCoreFeature(t.$aioseo,"tools","network-tools-import-export"))?(l(),_(S,{key:1})):u("",!0)])}const xt=B(qe,[["render",We]]);export{xt as default};
