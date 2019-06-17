$(document).ready(function() {
      



/* menu */
$( '<div class="hamburger_box"><div class="line-hamburger-box"><div class="line-hamburger1"></div><div class="line-hamburger2"></div><div class="line-hamburger3"></div><p class="close-text">закрыть</p></div></div>' ).appendTo( '.t199__mmenu' );
$('.line-hamburger-box').click(function(event){
    $(this).toggleClass('activ_menu');
    $('nav.t199__menu').toggleClass('activ_menu');
    $('body').toggleClass('b_hidden');
});




/* fixed меню */
$(document).ready(function() {
var lastScrollTop = 100;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){   
     $('.t199__header').addClass('fixed');
   } else {
     $('.t199__header').removeClass('fixed');
   }
   lastScrollTop = st;
});
 $(window).scroll(function() {
 if($(this).scrollTop() >= 100) {
 $('.t199__header').addClass('scroll');
 }
 else{
 $('.t199__header').removeClass('scroll');
 }
 });
});
/* fixed меню end */
      
      
      
      
      
var swiper = new Swiper('.smartphone', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        loop: true

    });


      
      
});
