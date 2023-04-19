jQuery(document).ready(function(){
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false, // default
    live: true // default
  })
  wow.init();
  jQuery('.search-icon .overlay').click(function(){
     jQuery('.search-icon').toggleClass('show');
  }); 
  jQuery('.navbar-toggler').click(function(){
    jQuery('html').toggleClass('overflow-h');
  }); 

var sectionIds = jQuery('.product-feature-tab a');

jQuery(document).scroll(function(){
    sectionIds.each(function(){
        var container = jQuery(this).attr('href');
        var containerOffset = jQuery(container).offset().top;
        var containerHeight = jQuery(container).outerHeight();
        var containerBottom = containerOffset + containerHeight;
        var scrollPosition = jQuery(document).scrollTop() + 180;

        if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
            jQuery(this).addClass('active');
        } else{
            jQuery(this).removeClass('active');
        }
    });
});  

jQuery(function() {
  jQuery('a[href*=\\#]:not([href=\\#]):not(.custom-tab-section .custom-tab-nav li a)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
&& location.hostname == this.hostname) {

      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top - 185 //offsets for fixed header
        }, 300);
        return false;
      }
    }
  });
  //Executed on page load with URL containing an anchor tag.
  if(jQuery(location.href.split("#")[1])) {
      var target = jQuery('#'+location.href.split("#")[1]);
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top - 185 //offset height of header here too.
        },300 );
        return false;
      }
    }
    jQuery('.banner-content .bottom-arrow').click (function() {
        jQuery('html, body').animate({scrollTop: jQuery('.banner-content .bottom-arrow').offset().top - 80 });
      return false;
    });

});

jQuery(window).scroll(function() {
  var sticky = jQuery('header .navbar'),
    scroll = jQuery(window).scrollTop();

  if (scroll >= 48) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

});

function AddReadMore() {
  //This limit you can set after how much characters you want to show Read More.
  var carLmt = 25;
  // Text to show when text is collapsed
  var readMoreTxt = " More";
  // Text to show when text is expanded
  var readLessTxt = " Less";
  
  //Traverse all selectors with this class and manupulate HTML part to show Read More
  jQuery(".icon-box .description").each(function() {
    
    //alert(words.length);
      if (jQuery(this).find(".firstSec").length)
          return;

      var allstr = jQuery(this).text().split(" ");
      var firstSet = '';
      var secdHalf = '';
        for (var i=0;i<allstr.length;i++)
        {
          if(i < carLmt){
            firstSet += allstr[i]+' ';
          } else {
            secdHalf += allstr[i]+' ';
          }
        }        
          
        if(secdHalf != ''){
            var strtoadd = firstSet + "<span class='dot'>...</span>" + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + " </span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
         }
         else{
          var strtoadd = firstSet;
        
         }
          jQuery(this).html(strtoadd);
         
  });
  //Read More and Read Less Click Event binding
  jQuery(document).on("click", ".readMore, .readLess", function() {
      jQuery(this).closest(".icon-box .description").toggleClass("showlesscontent showmorecontent");
  });
}
jQuery(function() {
  //Calling function after Page Load
  AddReadMore();
}); 

function iconReadMore() {
  //This limit you can set after how much characters you want to show Read More.
  var carLmt = 10;
  // Text to show when text is collapsed
  var readMoreTxt = " Read More";
  // Text to show when text is expanded
  var readLessTxt = " Read Less";
  
  //Traverse all selectors with this class and manupulate HTML part to show Read More
  jQuery(".client-logos .description").each(function() {
    
    //alert(words.length);
      if (jQuery(this).find(".firstSec").length)
          return;

      var allstr = jQuery(this).text().split(" ");
      var firstSet = '';
      var secdHalf = '';
        for (var i=0;i<allstr.length;i++)
        {
          if(i < carLmt){
            firstSet += allstr[i]+' ';
          } else {
            secdHalf += allstr[i]+' ';
          }
        }        
          
        if(secdHalf != ''){
            var strtoadd = firstSet + "<span class='dot'>...</span>" + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
         }
         else{
          var strtoadd = firstSet;
        
         }
          jQuery(this).html(strtoadd);
         
  });
  //Read More and Read Less Click Event binding
  jQuery(document).on("click", ".readMore, .readLess", function() {
      jQuery(this).closest(".client-logos .description").toggleClass("showlesscontent showmorecontent");
  });
}
jQuery(function() {
  //Calling function after Page Load
  iconReadMore();
});

function aboutheading(){
  var WiWidth = jQuery(window).width();
  var CnWidth = jQuery('.about-pill-section .container').innerWidth();
  var titleMargLeft = (0 - (((WiWidth - CnWidth)/ 2) + 15));
  var titleMarg = ((WiWidth - CnWidth)/ 2) + 550;
  jQuery('.about-pill-section .container .title-heading').css('margin-left', titleMargLeft);
  jQuery('.about-pill-section .container .title-heading').css('min-width', titleMarg);

}

jQuery(document).ready(function(){
  
      jQuery('.counter').each(function() {
        var $this = jQuery(this),
            countTo = $this.attr('data-count');
        
            jQuery({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        { duration: 4000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });  
      });
      setTimeout(() => { jQuery('#contact_us').addClass('shake-btn') }, 400); 
      jQuery('#contact_us').addClass('shake-btn');
     
      setTimeout(function() {
        jQuery('#contact_us').removeClass('shake-btn')
      }, 10000);

      jQuery('#primary-menu-list > .menu-item-has-children > a').click(function(){
        jQuery(this).parent('li').toggleClass('show-menu');
      });

      jQuery('.loader').fadeOut();      
      aboutheading();
      // Remove Svg ClipPath
      jQuery("svg").each(function () {
        jQuery(this).find("g").removeAttr("clip-path");
        jQuery(this).find("clipPath").remove();
      });
      // End Remove Svg Clip path     
      jQuery('.owl-crousal-rowTwo .client-logos .client-logo-slider .owl-nav').addClass('disabled');

});
jQuery(window).resize(function(){
  aboutheading();
});








