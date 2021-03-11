/*global $*/
$(document).ready(function(){

"use strict";

$(".nav .links  li a ,.links2 li a").on("click",function(){
    
    $(".nav .links  li a,.links2 li a ").each(function(){
       
        $(this).removeClass("active");
      
    });
    
   $(this).addClass("active");

});

$(window).on("resize",function(){

	if($(window).width() >= 748)
	{
		$(".links2").hide();
	}

});



$(".info3 .fa-align-right").on("click",function(){

  $(".links2").slideToggle(1000);

});

(function active(){
    if($("div.slider").hasClass("active")){
    
       $(".slider").delay(5000).fadeOut(function(){
           $(this).removeClass("active");
          $(this).css({
          
           backgroundImage: `url("images/04.jpg")`,    
          
          }).fadeIn(function(){
          
          active();
          
          });
           
       });
    }else
    {
       $(".slider").delay(5000).fadeOut(function(){
           $(this).addClass("active");
          $(this).css({
          
           backgroundImage: `url("images/01.jpg")`,    
          
          }).fadeIn(function(){
          
          active();
          
          });
       
       });
    }
 })(); 
 
 $(".work .item ul li").on("click",function(){
    
   $(this).addClass("active").siblings("li").removeClass("active");

});

/* start the testimonials */

    $(".testimonials .chev:first-of-type i").on("click",function(){
    
    if($(".testimonials .container > div:nth-of-type(8)").hasClass("active"))
    { 
       $(".testimonials .container > div:nth-of-type(8)").fadeOut(500,function(){
       
          $(this).removeClass("active");
          $(".testimonials .container > div:nth-of-type(2)").addClass("active").fadeIn();
       
       });
    }else
    {
	    $(".testimonials .container .active").fadeOut(500,function(){
	       $(this).removeClass("active");
	       $(this).next().addClass("active").fadeIn(1000);
	      
	    
	    });
    }
    
    });
    
    $(".testimonials .container .chev:last-of-type i").on("click",function(){
    
    if($(".testimonials .container > div:nth-of-type(2)").hasClass("active"))
    { 
       $(".testimonials .container > div:nth-of-type(2)").fadeOut(500,function(){
       
          $(this).removeClass("active");
          $(".testimonials .container > div:nth-of-type(8)").addClass("active").fadeIn();
       
       });
       
    
    }else
    {
	    $(".testimonials .container .active").fadeOut(500,function(){
	       $(this).removeClass("active");
	       $(this).prev().addClass("active").fadeIn(1000);
	      
	    
	    });
    }
    
    }); 

/* end the testimonials */
/* start the plug */
     mixitup('.work .ourwork .row');
    
     mixitup('.work .ourwork .tes');
    
    
/* end the plug */

});