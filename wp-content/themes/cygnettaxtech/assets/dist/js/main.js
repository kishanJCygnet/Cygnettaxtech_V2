function AddReadMore(){jQuery(".icon-box .description:not('.no-read-more .icon-box .description')").each((function(){if(!jQuery(this).find(".firstSec").length){for(var e=jQuery(this).text().split(" "),t="",o="",n=0;n<e.length;n++)n<25?t+=e[n]+" ":o+=e[n]+" ";if(""!=o)var i=t+"<span class='dot'>...</span><span class='SecSec'>"+o+"</span><span class='readMore'  title='Click to Show More'> More </span><span class='readLess' title='Click to Show Less'> Less</span>";else i=t;jQuery(this).html(i)}})),jQuery(document).on("click",".readMore, .readLess",(function(){jQuery(this).closest(".icon-box .description").toggleClass("showlesscontent showmorecontent")}))}function iconReadMore(){jQuery(".client-logos .description").each((function(){if(!jQuery(this).find(".firstSec").length){for(var e=jQuery(this).text().split(" "),t="",o="",n=0;n<e.length;n++)n<10?t+=e[n]+" ":o+=e[n]+" ";if(""!=o)var i=t+"<span class='dot'>...</span><span class='SecSec'>"+o+"</span><span class='readMore'  title='Click to Show More'> Read More</span><span class='readLess' title='Click to Show Less'> Read Less</span>";else i=t;jQuery(this).html(i)}})),jQuery(document).on("click",".readMore, .readLess",(function(){jQuery(this).closest(".client-logos .description").toggleClass("showlesscontent showmorecontent")}))}function aboutheading(){var e=jQuery(window).width(),t=jQuery(".about-pill-section .container").innerWidth(),o=0-((e-t)/2+15),n=(e-t)/2+550;jQuery(".about-pill-section .container .title-heading").css("margin-left",o),jQuery(".about-pill-section .container .title-heading").css("min-width",n)}jQuery(document).ready((function(){wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}),wow.init(),jQuery(".search-icon .overlay").click((function(){jQuery(".search-icon").toggleClass("show")})),jQuery(".navbar-toggler").click((function(){jQuery("html").toggleClass("overflow-h")}));var e=jQuery(".product-feature-tab a");jQuery(document).scroll((function(){e.each((function(){var e=jQuery(this).attr("href"),t=jQuery(e).offset().top,o=t+jQuery(e).outerHeight(),n=jQuery(document).scrollTop()+180;n<o-20&&n>=t-20?jQuery(this).addClass("active"):jQuery(this).removeClass("active")}))})),jQuery((function(){if(jQuery("a[href*=\\#]:not([href=\\#]):not(.custom-tab-section .custom-tab-nav li a)").click((function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=jQuery(this.hash);if((e=e.length?e:jQuery("[name="+this.hash.slice(1)+"]")).length)return jQuery("html,body").animate({scrollTop:e.offset().top-185},300),!1}})),jQuery(location.href.split("#")[1])){var e=jQuery("#"+location.href.split("#")[1]);if(e.length)return jQuery("html,body").animate({scrollTop:e.offset().top-185},300),!1}jQuery(".banner-content .bottom-arrow").click((function(){return jQuery("html, body").animate({scrollTop:jQuery(".banner-content .bottom-arrow").offset().top-80}),!1}))})),jQuery(window).scroll((function(){var e=jQuery("header .navbar");jQuery(window).scrollTop()>=48?e.addClass("fixed"):e.removeClass("fixed")}))})),jQuery((function(){AddReadMore(),iconReadMore()})),jQuery(document).ready((function(){jQuery(".counter").each((function(){var e=jQuery(this),t=e.attr("data-count");jQuery({countNum:e.text()}).animate({countNum:t},{duration:4e3,easing:"linear",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})})),jQuery("#primary-menu-list > .menu-item-has-children > a").click((function(){jQuery(this).parent("li").toggleClass("show-menu")})),jQuery(".loader").fadeOut(),aboutheading(),jQuery("svg").each((function(){jQuery(this).find("g").removeAttr("clip-path"),jQuery(this).find("clipPath").remove()})),jQuery(".owl-crousal-rowTwo .client-logos .client-logo-slider .owl-nav").addClass("disabled"),jQuery(".offering-tab  .list-item  .accordion-button").click((function(){jQuery(".offering-tab  .list-item .list-item-content").removeClass("show-offer-tab"),jQuery(this).hasClass("collapsed")?jQuery(this).parents(".list-item-content").removeClass("show-offer-tab"):jQuery(this).parents(".list-item-content").addClass("show-offer-tab")})),$(".list-tabs").each((function(){var e=0;$(".list-item .accordion-button",this).each((function(){$(this).height()>e&&(e=$(this).height())})),$(".list-item .accordion-button",this).height(e)}))})),jQuery(window).resize((function(){aboutheading()}));