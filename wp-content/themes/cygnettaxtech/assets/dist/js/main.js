function AddReadMore(){jQuery(".icon-box .description:not('.no-read-more .icon-box .description')").each((function(){if(!jQuery(this).find(".firstSec").length){for(var e=jQuery(this).text().split(" "),t="",n="",i=0;i<e.length;i++)i<25?t+=e[i]+" ":n+=e[i]+" ";if(""!=n)var a=t+"<span class='dot'>...</span><span class='SecSec'>"+n+"</span><span class='readMore'  title='Click to Show More'> More </span><span class='readLess' title='Click to Show Less'> Less</span>";else a=t;jQuery(this).html(a)}})),jQuery(document).on("click",".readMore, .readLess",(function(){jQuery(this).closest(".icon-box .description").toggleClass("showlesscontent showmorecontent")}))}function iconReadMore(){jQuery(".client-logos .description").each((function(){if(!jQuery(this).find(".firstSec").length){for(var e=jQuery(this).text().split(" "),t="",n="",i=0;i<e.length;i++)i<10?t+=e[i]+" ":n+=e[i]+" ";if(""!=n)var a=t+"<span class='dot'>...</span><span class='SecSec'>"+n+"</span><span class='readMore'  title='Click to Show More'> Read More</span><span class='readLess' title='Click to Show Less'> Read Less</span>";else a=t;jQuery(this).html(a)}})),jQuery(document).on("click",".readMore, .readLess",(function(){jQuery(this).closest(".client-logos .description").toggleClass("showlesscontent showmorecontent")}))}function aboutheading(){var e=jQuery(window).width(),t=jQuery("section .container").innerWidth(),n=(e-t)/2+15,i=0-((e-t)/2+15),a=(e-t)/2+550;jQuery(".about-pill-section .container .title-heading").css("margin-left",i),jQuery(window).width()>1200&&jQuery(".about-pill-section .container .title-heading").css("min-width",a),jQuery(".wholesome-solutions .title-heading").css({"margin-left":i,"padding-left":n}),jQuery(".we-are-proud .title-heading").css({"margin-left":i}),jQuery(".we-are-proud .title-heading h2").css({"padding-left":n+280}),jQuery(".zick-zack-content .zick-zack-inner-content:nth-child(odd) .col-text .text-content h3").css({"margin-left":i,"padding-left":n}),jQuery(".zick-zack-content .zick-zack-inner-content:nth-child(even) .col-text .text-content h3, .easy-connectors").css({"margin-right":i,"padding-right":n}),jQuery(".features-muwafaq .content-title-heading h2").css({"margin-right":i,"padding-right":n}),jQuery(".tab-section .nav-tab-containt:not(.compliance-requirements-sec .nav-tab-containt)").css({"margin-left":i}),jQuery(".uninterrupted-compliance .uc-inner-content").css({"margin-right":i})}function tableftDisable(){jQuery(".solution-tab-content .nav-pills .nav-link:first-child").hasClass("active")&&jQuery(".nav-action").addClass("left-disable")}function tabRightDisable(){jQuery(".solution-tab-content .nav-pills .nav-link:last-child").hasClass("active")&&jQuery(".nav-action").addClass("right-disable")}jQuery(document).ready((function(){wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}),wow.init(),jQuery(".search-icon .overlay").click((function(){jQuery(".search-icon").toggleClass("show")})),jQuery(".navbar-toggler").click((function(){jQuery("html").toggleClass("overflow-h")}));var e=1;jQuery(".nav-action > .right-nav").click((function(){jQuery(".solution-tab-content .nav-link.active:not(.solution-tab-content .nav-link:last-child)").removeClass("active").next().addClass("active"),jQuery(".tab-content .tab-pane.active:not(.tab-content.tab-pane:last-child)").removeClass("active show").next().addClass("active show"),e++,jQuery(window).width()>1400?(alert("1401"),e>5&&jQuery(".solution-tab-content .nav").animate({marginLeft:"-=296px"},"slow")):jQuery(window).width()>1200&&jQuery(window).width()<1400&&(alert("1201 to 1399"),e>4&&jQuery(".solution-tab-content .nav").animate({marginLeft:"-=296px"},"slow"))})),jQuery(".nav-action > .left-nav").click((function(){jQuery(".solution-tab-content .nav-link.active:not(.solution-tab-content .nav-link:first-child)").removeClass("active").prev().addClass("active"),jQuery(".tab-content .tab-pane.active:not(.tab-content .tab-pane:first-child)").removeClass("active show").prev().addClass("active show"),--e>4&&jQuery(".solution-tab-content .nav").animate({marginLeft:"+=296px"},"slow")}));var t=jQuery(".product-feature-tab a");jQuery(document).scroll((function(){t.each((function(){var e=jQuery(this).attr("href"),t=jQuery(e).offset().top,n=t+jQuery(e).outerHeight(),i=jQuery(document).scrollTop()+180;i<n-20&&i>=t-20?jQuery(this).addClass("active"):jQuery(this).removeClass("active")}))})),jQuery((function(){if(jQuery("a[href*=\\#]:not([href=\\#]):not(.custom-tab-section .custom-tab-nav li a)").click((function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=jQuery(this.hash);if((e=e.length?e:jQuery("[name="+this.hash.slice(1)+"]")).length)return jQuery("html,body").animate({scrollTop:e.offset().top-185},300),!1}})),jQuery(location.href.split("#")[1])){var e=jQuery("#"+location.href.split("#")[1]);if(e.length)return jQuery("html,body").animate({scrollTop:e.offset().top-185},300),!1}jQuery(".banner-content .bottom-arrow").click((function(){return jQuery("html, body").animate({scrollTop:jQuery(".banner-content .bottom-arrow").offset().top-80}),!1}))}));var n=jQuery(".corporates-tab").each((function(){jQuery(this).html()}));jQuery(".corporates-tab").remove(),jQuery(".eInvoicing-for-corporates").html(n);var i=jQuery(".MSME-tab-cn").each((function(){jQuery(this).html()}));jQuery(".MSME-tab-cn").remove(),jQuery(".eInvoicing-for-MSME").html(i),jQuery(window).width()>991&&jQuery(".mega-dropdown > .sub-menu > li:first-child").addClass("active-mg-menu"),jQuery(".mega-dropdown > .sub-menu > li > a").click((function(){jQuery(window).width()>991&&(jQuery(".mega-dropdown > .sub-menu > li").removeClass("active-mg-menu"),jQuery(this).parent("li").addClass("active-mg-menu"))}))})),jQuery(window).scroll((function(){var e=jQuery("header .navbar");jQuery(window).scrollTop()>=48?e.addClass("fixed"):e.removeClass("fixed")})),jQuery((function(){AddReadMore(),iconReadMore()})),jQuery(document).ready((function(){jQuery(".counter").each((function(){var e=jQuery(this),t=e.attr("data-count");jQuery({countNum:e.text()}).animate({countNum:t},{duration:4e3,easing:"linear",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})})),jQuery("#primary-menu-list > .menu-item-has-children > a").click((function(){jQuery(this).parent("li").toggleClass("show-menu")})),jQuery(".loader").fadeOut(),aboutheading(),jQuery("svg").each((function(){jQuery(this).find("g").removeAttr("clip-path"),jQuery(this).find("clipPath").remove()})),jQuery(".owl-crousal-rowTwo .client-logos .client-logo-slider .owl-nav").addClass("disabled"),jQuery(".offering-tab  .list-item  .accordion-button").click((function(){jQuery(".offering-tab  .list-item .list-item-content").removeClass("show-offer-tab"),jQuery(this).hasClass("collapsed")?jQuery(this).parents(".list-item-content").removeClass("show-offer-tab"):jQuery(this).parents(".list-item-content").addClass("show-offer-tab")})),jQuery(".list-tabs").each((function(){var e=0;jQuery(".list-item .accordion-button",this).each((function(){jQuery(this).height()>e&&(e=jQuery(this).height())})),jQuery(".list-item .accordion-button",this).height(e)})),jQuery("#primary-menu-list  .menu-item-has-children > a").click((function(){jQuery(window).width()<991&&jQuery(this).parent(".menu-item-has-children").toggleClass("mobile-show-menu")})),tableftDisable(),jQuery(".solution-tab-content .nav-pills .nav-link, .nav-action .right-nav, .nav-action .left-nav").click((function(){jQuery(".nav-action").removeClass("left-disable"),tableftDisable()})),jQuery(".solution-tab-content .nav-pills .nav-link, .nav-action .right-nav, .nav-action .left-nav").click((function(){jQuery(".nav-action").removeClass("right-disable"),tabRightDisable()})),jQuery(".first-level-menu > li").mouseenter((function(){jQuery(this).children("ul").hasClass("secound-level-menu")&&(jQuery(".first-level-menu > li").removeClass("active-sec-menu"),jQuery(this).addClass("active-sec-menu"))})),jQuery(".first-level-menu > li").mouseleave((function(){jQuery(".first-level-menu > li").removeClass("active-sec-menu")})),jQuery(".secound-level-menu > li").mouseenter((function(){jQuery(this).children("ul").hasClass("third-level-menu")&&(jQuery(".secound-level-menu > li").removeClass("active-th-menu"),jQuery(this).addClass("active-th-menu"))})),jQuery(".secound-level-menu > li").mouseleave((function(){jQuery(".secound-level-menu > li").removeClass("active-sec-menu")})),jQuery("#UK-tab").click((function(){jQuery(".eu-menu > li").removeClass("active-sec-menu"),jQuery(".eu-sub-menu > li").removeClass("active-th-menu"),jQuery(".eu-menu > li:first-child").addClass("active-sec-menu"),jQuery(".eu-sub-menu > li:first-child").addClass("active-th-menu")})),jQuery("#India-tab").click((function(){jQuery(".india-menu > li").removeClass("active-sec-menu"),jQuery(".india-sub-menu > li").removeClass("active-th-menu"),jQuery(".india-menu > li:first-child").addClass("active-sec-menu"),jQuery(".india-menu > li:first-child .india-sub-menu > li:nth-child(3)").addClass("active-th-menu")})),jQuery("#Middle-tab").click((function(){jQuery(".middle-menu  > li").removeClass("active-sec-menu"),jQuery(".md-sub-menu  > li").removeClass("active-th-menu"),jQuery(".middle-menu  > li:first-child").addClass("active-sec-menu"),jQuery(".md-sub-menu  > li:first-child").addClass("active-th-menu")})),jQuery(".sh-cs-stdy").mouseenter((function(){jQuery(".first-level-menu  > li").removeClass("active-sec-menu"),jQuery(".secound-level-menu  > li").removeClass("active-th-menu"),jQuery(".case-st-list").show()})),jQuery(".sh-cs-stdy").mouseleave((function(){jQuery(".case-st-list").hide()})),jQuery(".menu-case-study").mouseenter((function(){jQuery(".case-st-list").show()})),jQuery(".menu-case-study").mouseleave((function(){jQuery(".case-st-list").hide()}))})),jQuery(window).resize((function(){aboutheading()}));