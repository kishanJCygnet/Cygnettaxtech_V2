function AddReadMore(){jQuery(".icon-box .description:not('.no-read-more .icon-box .description')").each((function(){if(!jQuery(this).find(".firstSec").length){for(var e=jQuery(this).text().split(" "),t="",n="",o=0;o<e.length;o++)o<25?t+=e[o]+" ":n+=e[o]+" ";if(""!=n)var a=t+"<span class='dot'>...</span><span class='SecSec'>"+n+"</span><span class='readMore'  title='Click to Show More'> More </span><span class='readLess' title='Click to Show Less'> Less</span>";else a=t;jQuery(this).html(a)}})),jQuery(document).on("click",".readMore, .readLess",(function(){jQuery(this).closest(".icon-box .description").toggleClass("showlesscontent showmorecontent")}))}function iconReadMore(){jQuery(".client-logos .description").each((function(){if(!jQuery(this).find(".firstSec").length){for(var e=jQuery(this).text().split(" "),t="",n="",o=0;o<e.length;o++)o<10?t+=e[o]+" ":n+=e[o]+" ";if(""!=n)var a=t+"<span class='dot'>...</span><span class='SecSec'>"+n+"</span><span class='readMore'  title='Click to Show More'> Read More</span><span class='readLess' title='Click to Show Less'> Read Less</span>";else a=t;jQuery(this).html(a)}})),jQuery(document).on("click",".readMore, .readLess",(function(){jQuery(this).closest(".client-logos .description").toggleClass("showlesscontent showmorecontent")}))}function aboutheading(){var e=jQuery(window).width(),t=jQuery("section .container").innerWidth(),n=(e-t)/2+15,o=0-((e-t)/2+15),a=(e-t)/2+550;jQuery(".about-pill-section .container .title-heading").css("margin-left",o),jQuery(".about-pill-section .container .title-heading").css("min-width",a),jQuery(".wholesome-solutions .title-heading").css({"margin-left":o,"padding-left":n}),jQuery(".we-are-proud .title-heading").css({"margin-left":o}),jQuery(".we-are-proud .title-heading h2").css({"padding-left":n+150})}jQuery(document).ready((function(){wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}),wow.init(),jQuery(".search-icon .overlay").click((function(){jQuery(".search-icon").toggleClass("show")})),jQuery(".navbar-toggler").click((function(){jQuery("html").toggleClass("overflow-h")}));var e=1;jQuery(".nav-action > .right-nav").click((function(){jQuery(".solution-tab-content .nav-link.active:not(.solution-tab-content .nav-link:last-child)").removeClass("active").next().addClass("active"),jQuery(".tab-content .tab-pane.active:not(.tab-content.tab-pane:last-child)").removeClass("active show").next().addClass("active show"),++e>4&&jQuery(".solution-tab-content .nav").animate({marginLeft:"-=296px"},"slow")})),jQuery(".nav-action > .left-nav").click((function(){jQuery(".solution-tab-content .nav-link.active:not(.solution-tab-content .nav-link:first-child)").removeClass("active").prev().addClass("active"),jQuery(".tab-content .tab-pane.active:not(.tab-content .tab-pane:first-child)").removeClass("active show").prev().addClass("active show"),--e>3&&jQuery(".solution-tab-content .nav").animate({marginLeft:"+=296px"},"slow")}))}));var sectionIds=jQuery(".product-feature-tab a");jQuery(document).scroll((function(){sectionIds.each((function(){var e=jQuery(this).attr("href"),t=jQuery(e).offset().top,n=t+jQuery(e).outerHeight(),o=jQuery(document).scrollTop()+180;o<n-20&&o>=t-20?jQuery(this).addClass("active"):jQuery(this).removeClass("active")}))})),jQuery((function(){if(jQuery("a[href*=\\#]:not([href=\\#]):not(.custom-tab-section .custom-tab-nav li a)").click((function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=jQuery(this.hash);if((e=e.length?e:jQuery("[name="+this.hash.slice(1)+"]")).length)return jQuery("html,body").animate({scrollTop:e.offset().top-185},300),!1}})),jQuery(location.href.split("#")[1])){var e=jQuery("#"+location.href.split("#")[1]);if(e.length)return jQuery("html,body").animate({scrollTop:e.offset().top-185},300),!1}jQuery(".banner-content .bottom-arrow").click((function(){return jQuery("html, body").animate({scrollTop:jQuery(".banner-content .bottom-arrow").offset().top-80}),!1}))})),jQuery(window).scroll((function(){var e=jQuery("header .navbar");jQuery(window).scrollTop()>=48?e.addClass("fixed"):e.removeClass("fixed")})),jQuery((function(){AddReadMore(),iconReadMore()})),jQuery(document).ready((function(){jQuery(".counter").each((function(){var e=jQuery(this),t=e.attr("data-count");jQuery({countNum:e.text()}).animate({countNum:t},{duration:4e3,easing:"linear",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})})),jQuery("#primary-menu-list > .menu-item-has-children > a").click((function(){jQuery(this).parent("li").toggleClass("show-menu")})),jQuery(".loader").fadeOut(),aboutheading(),jQuery("svg").each((function(){jQuery(this).find("g").removeAttr("clip-path"),jQuery(this).find("clipPath").remove()})),jQuery(".owl-crousal-rowTwo .client-logos .client-logo-slider .owl-nav").addClass("disabled"),jQuery(".offering-tab  .list-item  .accordion-button").click((function(){jQuery(".offering-tab  .list-item .list-item-content").removeClass("show-offer-tab"),jQuery(this).hasClass("collapsed")?jQuery(this).parents(".list-item-content").removeClass("show-offer-tab"):jQuery(this).parents(".list-item-content").addClass("show-offer-tab")})),jQuery(".list-tabs").each((function(){var e=0;jQuery(".list-item .accordion-button",this).each((function(){jQuery(this).height()>e&&(e=jQuery(this).height())})),jQuery(".list-item .accordion-button",this).height(e)}))})),jQuery(window).resize((function(){aboutheading()}));