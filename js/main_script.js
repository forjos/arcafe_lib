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
});
