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
      
      
      
      
      
var swiper = new Swiper('.swiper-container', {
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

// click for add cart
$('.dish_scrin_btn').click(function(event){
   $('.popup_dark').fadeIn('fast');
   $('.popup_addcart').css("height", "200");
});


// click for change value amount
$(".plus").click(function() {
  $(".value").html("1");
  $(".price").html("750 ₽");
  $(".plus").removeClass("plus_active");
  $('.btn_add_amount').addClass('add_amount_active');
});

$(".btn_add_amount").click(function(){
  if($('.btn_add_amount').hasClass('add_amount_active')){
      $('.popup_dark').fadeOut('fast');
      $('.popup_addcart').css("height", "0");
      $('.dish_scrin_btn').fadeOut('fast');
      $('.open_cart_btn').fadeIn('fast');
   }
  else{}
});

$('.btn_app_replay').click(function(event){
    $('.dish_scrin_btn').fadeIn('fast');
    $('.open_cart_btn').fadeOut('fast');
    $(".value").html("0");
    $(".price").html("0 ₽");
    $(".plus").addClass("plus_active");
    $('.btn_add_amount').removeClass('add_amount_active');
});
      
      
});
