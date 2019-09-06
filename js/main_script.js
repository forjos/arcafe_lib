$(document).ready(function() {
      
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
  $(".price").html("450 ₽");
  $(".plus").removeClass("plus_active");
  $('.btn_add_amount').addClass('add_amount_active');
});

$(".btn_add_amount").click(function(){
  if($('.btn_add_amount').hasClass('add_amount_active')){
      $('.popup_dark').fadeOut('fast');
      $('.popup_addcart').css("height", "0");
      //$('.dish_scrin_btn').fadeOut('fast');
      $('.open_cart_btn').css("display", "flex").hide().fadeIn();
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

        
});




/* 3d/ar tab */
$(document).ready(function() {
$( '<div class="way_line_slider_tab"</div>' ).appendTo( '.slider_tab_box' );
$( '<div class="line_slider_tab"</div>' ).appendTo( '.slider_tab_box' );
var width_start = $('.active_sl_tab').width();
$( '.line_slider_tab' ).width(width_start);
});

$(document).ready(function() {
$(function() {
	$('.slider_tab_box').on('click', '.slider_tab:not(.active_sl_tab)', function() {
		$(this)
			.addClass('active_sl_tab').siblings().removeClass('active_sl_tab')
			.closest('.section_slider_home').find('.tabs_content').fadeOut('fast').eq($(this).index()).fadeIn(500)
			.closest('#rec106935840').find('.t396__elem img').fadeOut().eq($(this).index()).fadeIn();
		$(this).closest('#rec115247548, #rec113765040, #rec124195284').find('.tn-atom__img').css({"opacity" : "0", "height" : "0"}).eq($(this).index()).css({"opacity" : "1", "height" : "auto"});
		$(this).closest('#rec115247548, #rec113765040, #rec124195284').find('.tn-atom__pin').css("opacity", 0).eq($(this).index()).css("opacity", 1);
		
		var position_activ = $(this).position();
        var width_activ = $(this).width();
        $( '.line_slider_tab' ).animate({left: position_activ.left, width: width_activ});
		
	});
});
});
/* 3d/ar tab end */

$(document).ready(function() {
      
var swiper = new Swiper('.swiper-container-app', {
      navigation: {
        nextEl: '.swiper-button-next_app',
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
$('#c2').click(function(event){
    $('.swip_dish_prev').fadeOut('fast');
    $('.swiper-container-app.smartphone .btn_app_prev_next.dish_scrin_btn').addClass('dish_scrin_btn_vsbl');
});
$('.swiper-button-next_app.btn_app_replay').click(function(event){
    $('.swip_dish_prev').fadeIn('fast');
    $('.swiper-container-app.smartphone .btn_app_prev_next.dish_scrin_btn').fadeOut('fast');
});

//
$('#c2').each(function(){
    var mc = new Hammer(this);
    mc.on("swiperight swipeleft", function() {
        $('.swip_dish_prev').fadeOut('fast');
        $('.swiper-container-app.smartphone .btn_app_prev_next.dish_scrin_btn').addClass('dish_scrin_btn_vsbl');
        return false;
    });
});
//

});

